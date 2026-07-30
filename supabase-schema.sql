-- =====================================================================
-- WLMAC Fitness Club — Supabase schema
--
-- SETUP:
-- 1. Create a project at supabase.com.
-- 2. Project → SQL Editor → New query → paste this whole file → Run.
-- 3. Project Settings → API → copy "Project URL" and the "anon public" key.
-- 4. Paste both into the "Backend" card in the app's sidebar and hit Connect.
-- 5. (Recommended) Authentication → Providers → Email → turn OFF
--    "Confirm email" so students can sign up and use the app immediately.
--    If you leave it on, they'll get a confirmation email before they can
--    log in — the app already handles that case with a message.
-- 6. To make someone an exec: Table Editor → profiles → open their row →
--    set "role" to exec. (Accounts are members by default on signup.)
-- =====================================================================

create extension if not exists "pgcrypto";

-- ---------- profiles ----------
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  name text not null,
  grade text,
  role text not null default 'member' check (role in ('member','exec')),
  title text not null default 'Member',
  ec_name text,
  ec_phone text,
  visible boolean not null default true,
  waiver_signed boolean not null default false,
  created_at timestamptz not null default now()
);
alter table public.profiles enable row level security;

create or replace function public.is_exec()
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.profiles where id = auth.uid() and role = 'exec');
$$;

create policy "profiles_select_all" on public.profiles for select using (auth.role() = 'authenticated');
create policy "profiles_update_self_or_exec" on public.profiles for update using (auth.uid() = id or public.is_exec());

create or replace function public.guard_profile_role()
returns trigger language plpgsql as $$
begin
  if new.role <> old.role and not public.is_exec() then
    new.role := old.role;
  end if;
  return new;
end;
$$;
drop trigger if exists trg_guard_profile_role on public.profiles;
create trigger trg_guard_profile_role before update on public.profiles
for each row execute function public.guard_profile_role();

-- auto-create a profile row (from auth signup metadata) whenever a new
-- auth user is created — works whether or not "Confirm email" is on.
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, email, name, grade, ec_name, ec_phone, visible, waiver_signed)
  values (
    new.id, new.email,
    coalesce(new.raw_user_meta_data->>'name', 'New Member'),
    new.raw_user_meta_data->>'grade',
    new.raw_user_meta_data->>'ec_name',
    new.raw_user_meta_data->>'ec_phone',
    coalesce((new.raw_user_meta_data->>'visible')::boolean, true),
    true
  );
  return new;
end;
$$;
drop trigger if exists trg_handle_new_user on auth.users;
create trigger trg_handle_new_user after insert on auth.users
for each row execute function public.handle_new_user();

-- ---------- checkins (live count, one row per member) ----------
create table if not exists public.checkins (
  profile_id uuid primary key references public.profiles(id) on delete cascade,
  checked_in boolean not null default false,
  updated_at timestamptz not null default now()
);
alter table public.checkins enable row level security;
create policy "checkins_select_all" on public.checkins for select using (auth.role() = 'authenticated');
create policy "checkins_write_exec" on public.checkins for all using (public.is_exec()) with check (public.is_exec());

create or replace function public.handle_new_profile()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.checkins (profile_id, checked_in) values (new.id, false)
  on conflict (profile_id) do nothing;
  return new;
end;
$$;
drop trigger if exists trg_new_profile_checkin on public.profiles;
create trigger trg_new_profile_checkin after insert on public.profiles
for each row execute function public.handle_new_profile();

-- ---------- room_state (drop-in count + capacity, singleton row) ----------
create table if not exists public.room_state (
  id int primary key default 1 check (id = 1),
  guests int not null default 0,
  capacity int not null default 20,
  updated_at timestamptz not null default now()
);
insert into public.room_state (id) values (1) on conflict (id) do nothing;
alter table public.room_state enable row level security;
create policy "room_state_select_all" on public.room_state for select using (auth.role() = 'authenticated');
create policy "room_state_write_exec" on public.room_state for update using (public.is_exec()) with check (public.is_exec());

-- ---------- events ----------
create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  kind text not null default 'Open Lift',
  event_date date not null,
  event_time time not null default '15:00',
  loc text not null default 'Weight Room',
  spots int not null default 20,
  going int not null default 0,
  details text default '',
  created_at timestamptz not null default now()
);
alter table public.events enable row level security;
create policy "events_select_all" on public.events for select using (auth.role() = 'authenticated');
create policy "events_write_exec" on public.events for all using (public.is_exec()) with check (public.is_exec());

-- ---------- posts (board) ----------
create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  author_name text not null,
  author_title text not null default 'Exec',
  text text not null,
  pinned boolean not null default false,
  edited boolean not null default false,
  created_at timestamptz not null default now()
);
alter table public.posts enable row level security;
create policy "posts_select_all" on public.posts for select using (auth.role() = 'authenticated');
create policy "posts_write_exec" on public.posts for all using (public.is_exec()) with check (public.is_exec());

-- ---------- rsvps ----------
create table if not exists public.rsvps (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references public.events(id) on delete cascade,
  profile_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (event_id, profile_id)
);
alter table public.rsvps enable row level security;
create policy "rsvps_select_all" on public.rsvps for select using (auth.role() = 'authenticated');
create policy "rsvps_insert_self" on public.rsvps for insert with check (auth.uid() = profile_id);
create policy "rsvps_delete_self" on public.rsvps for delete using (auth.uid() = profile_id);

create or replace function public.bump_going()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if tg_op = 'INSERT' then
    update public.events set going = going + 1 where id = new.event_id;
  elsif tg_op = 'DELETE' then
    update public.events set going = greatest(0, going - 1) where id = old.event_id;
  end if;
  return null;
end;
$$;
drop trigger if exists trg_rsvp_insert on public.rsvps;
create trigger trg_rsvp_insert after insert on public.rsvps for each row execute function public.bump_going();
drop trigger if exists trg_rsvp_delete on public.rsvps;
create trigger trg_rsvp_delete after delete on public.rsvps for each row execute function public.bump_going();

-- ---------- realtime ----------
alter publication supabase_realtime add table
  public.profiles, public.checkins, public.room_state, public.events, public.posts, public.rsvps;
