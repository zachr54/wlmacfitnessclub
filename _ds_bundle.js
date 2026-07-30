/* @ds-bundle: {"format":4,"namespace":"WLMACFitnessClubDesignSystem_a70098","components":[{"name":"EventCard","sourcePath":"components/content/EventCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/content/EventCard.jsx":"ce57151a057a","components/core/Badge.jsx":"fcd7258e6a21","components/core/Button.jsx":"3bb3829c95c4","components/core/Card.jsx":"3e8ead4c6a74","components/core/Tag.jsx":"353d4e8808b5","components/feedback/Dialog.jsx":"c1cc4c6b4a7a","components/feedback/Tooltip.jsx":"6a5e42d7d0fc","components/forms/Checkbox.jsx":"580197bed390","components/forms/Input.jsx":"974d5ac21812","components/forms/Radio.jsx":"d436e3f630f8","components/forms/Select.jsx":"bbd9cc49a7b8","components/forms/Switch.jsx":"da9481580956","components/navigation/Tabs.jsx":"f734be2d534e","ui_kits/club-site/EventsScreen.jsx":"ffb0bd7d24c8","ui_kits/club-site/Footer.jsx":"4dcf3b0fc9ec","ui_kits/club-site/HomeScreen.jsx":"e32249c65430","ui_kits/club-site/Nav.jsx":"90ed7dc398a5","ui_kits/club-site/SignUpScreen.jsx":"9ddd29e8fb20","ui_kits/club-site/data.js":"5e41e9c61682"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WLMACFitnessClubDesignSystem_a70098 = window.WLMACFitnessClubDesignSystem_a70098 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/EventCard.jsx
try { (() => {
function EventCard({
  title,
  date,
  type,
  location,
  spotsLeft,
  onSignUp
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-md)',
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      color: 'var(--text-accent)',
      fontWeight: 700,
      fontSize: '12px',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase'
    }
  }, type), spotsLeft != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: '12px',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: spotsLeft > 0 ? 'var(--gray-300)' : 'var(--status-danger)'
    }
  }, spotsLeft > 0 ? `${spotsLeft} spots left` : 'Full')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      color: 'var(--white)',
      fontSize: '26px',
      textTransform: 'uppercase',
      lineHeight: 1.1
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: '15px'
    }
  }, date, " \xB7 ", location), onSignUp && /*#__PURE__*/React.createElement("button", {
    onClick: onSignUp,
    style: {
      marginTop: '8px',
      alignSelf: 'flex-start',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: '14px',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      background: 'var(--surface-accent)',
      color: '#fff',
      border: 'none',
      borderRadius: 'var(--radius-sm)',
      padding: '10px 20px',
      cursor: 'pointer'
    }
  }, "Sign Up"));
}
Object.assign(__ds_scope, { EventCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/EventCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const tones = {
  red: {
    background: 'var(--surface-accent)',
    color: 'var(--white)'
  },
  gold: {
    background: 'var(--gold-600)',
    color: 'var(--black)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--white)',
    border: '1px solid var(--border-strong)'
  },
  success: {
    background: 'var(--status-success)',
    color: 'var(--white)'
  },
  warning: {
    background: 'var(--status-warning)',
    color: 'var(--black)'
  }
};
function Badge({
  children,
  tone = 'red'
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      ...tones[tone],
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: '12px',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      padding: '4px 12px',
      borderRadius: 'var(--radius-pill)',
      display: 'inline-block'
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const base = {
  fontFamily: 'var(--font-heading)',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: 'var(--tracking-wide)',
  border: 'none',
  borderRadius: 'var(--radius-sm)',
  cursor: 'pointer',
  transition: 'background var(--duration-normal) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px'
};
const sizes = {
  sm: {
    fontSize: '13px',
    padding: '8px 16px'
  },
  md: {
    fontSize: '15px',
    padding: '12px 22px'
  },
  lg: {
    fontSize: '17px',
    padding: '16px 28px'
  }
};
function variantStyle(variant, disabled) {
  if (disabled) return {
    background: 'var(--ink-700)',
    color: 'var(--gray-400)'
  };
  switch (variant) {
    case 'secondary':
      return {
        background: 'transparent',
        color: 'var(--white)',
        border: '2px solid var(--white)'
      };
    case 'ghost':
      return {
        background: 'transparent',
        color: 'var(--text-accent)',
        border: '2px solid transparent'
      };
    default:
      return {
        background: 'var(--surface-accent)',
        color: 'var(--text-on-accent)'
      };
  }
}
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const vs = variantStyle(variant, disabled);
  let bg = vs.background;
  if (!disabled && variant === 'primary') {
    bg = press ? 'var(--surface-accent-press)' : hover ? 'var(--surface-accent-hover)' : 'var(--surface-accent)';
  }
  if (!disabled && variant === 'ghost' && hover) {
    bg = 'rgba(200,16,46,0.1)';
  }
  return /*#__PURE__*/React.createElement("button", {
    style: {
      ...base,
      ...sizes[size],
      ...vs,
      background: bg,
      transform: press && !disabled ? 'translateY(1px)' : 'none',
      opacity: disabled ? 0.6 : 1
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    disabled: disabled,
    onClick: onClick
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-md)',
      padding: 'var(--space-6)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  active = false,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: '13px',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      padding: '6px 14px',
      borderRadius: 'var(--radius-sm)',
      border: active ? '2px solid var(--border-accent)' : '2px solid var(--border-default)',
      background: active ? 'rgba(200,16,46,0.15)' : 'transparent',
      color: active ? 'var(--text-accent)' : 'var(--text-secondary)',
      cursor: 'pointer'
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  onClose
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--surface-card-raised)',
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      padding: 'var(--space-8)',
      maxWidth: '420px',
      width: '90%',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      color: 'var(--white)',
      fontSize: '24px',
      textTransform: 'uppercase',
      marginBottom: '12px'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: '15px',
      lineHeight: 1.5
    }
  }, children), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      marginTop: '20px',
      background: 'var(--surface-accent)',
      color: '#fff',
      border: 'none',
      borderRadius: 'var(--radius-sm)',
      padding: '10px 20px',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      cursor: 'pointer'
    }
  }, "Close")));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children
}) {
  const [show, setShow] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-block'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'var(--white)',
      color: 'var(--black)',
      fontSize: '13px',
      fontFamily: 'var(--font-body)',
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-sm)'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)',
      fontSize: '15px',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange(!checked),
    style: {
      width: '20px',
      height: '20px',
      flexShrink: 0,
      border: '2px solid var(--border-strong)',
      borderRadius: 'var(--radius-sm)',
      background: checked ? 'var(--surface-accent)' : 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "10",
    viewBox: "0 0 12 10"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 5L4.5 8.5L11 1",
    stroke: "white",
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  helper
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-body)',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: '13px',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      fontWeight: 600
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      background: 'var(--ink-800)',
      color: 'var(--white)',
      border: focus ? '1px solid var(--border-accent)' : '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      padding: '12px 14px',
      fontSize: '16px',
      fontFamily: 'var(--font-body)',
      outline: 'none',
      boxShadow: focus ? 'var(--shadow-red-glow)' : 'none'
    }
  }), helper && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      color: 'var(--text-tertiary)'
    }
  }, helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)',
      fontSize: '15px',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange(),
    style: {
      width: '20px',
      height: '20px',
      flexShrink: 0,
      borderRadius: '50%',
      border: '2px solid var(--border-strong)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      background: 'var(--surface-accent)'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-body)',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: '13px',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      fontWeight: 600
    }
  }, label), /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    style: {
      background: 'var(--ink-800)',
      color: 'var(--white)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      padding: '12px 14px',
      fontSize: '16px',
      fontFamily: 'var(--font-body)',
      outline: 'none'
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  label
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)',
      fontSize: '15px',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange(!checked),
    style: {
      width: '40px',
      height: '22px',
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--surface-accent)' : 'var(--ink-600)',
      position: 'relative',
      transition: 'background var(--duration-normal) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '2px',
      left: checked ? '20px' : '2px',
      width: '18px',
      height: '18px',
      borderRadius: '50%',
      background: 'var(--white)',
      transition: 'left var(--duration-normal) var(--ease-standard)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs,
  active,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      borderBottom: '1px solid var(--border-default)',
      gap: '4px',
      fontFamily: 'var(--font-heading)'
    }
  }, tabs.map(t => {
    const isActive = t === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: () => onChange && onChange(t),
      style: {
        background: 'transparent',
        border: 'none',
        borderBottom: isActive ? '3px solid var(--border-accent)' : '3px solid transparent',
        color: isActive ? 'var(--white)' : 'var(--text-tertiary)',
        fontWeight: 700,
        fontSize: '14px',
        letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase',
        padding: '12px 18px',
        cursor: 'pointer'
      }
    }, t);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/club-site/EventsScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function EventsScreen({
  onNav
}) {
  const {
    Tabs,
    Tag,
    EventCard
  } = window.WLMACFitnessClubDesignSystem_a70098;
  const [when, setWhen] = React.useState('Upcoming');
  const [filter, setFilter] = React.useState('All');
  const types = ['All', 'Powerlifting Meet', 'Open Lifting', 'Guest Speaker', 'Calisthenics Meet'];
  const list = window.WLMAC_EVENTS.filter(e => e.when === (when === 'Upcoming' ? 'upcoming' : 'past')).filter(e => filter === 'All' || e.type === filter);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '50px 40px 90px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      color: '#fff',
      fontSize: 48,
      textTransform: 'uppercase',
      marginBottom: 24
    }
  }, "Schedule"), /*#__PURE__*/React.createElement(Tabs, {
    tabs: ['Upcoming', 'Past'],
    active: when,
    onChange: setWhen
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      margin: '24px 0 30px'
    }
  }, types.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    active: filter === t,
    onClick: () => setFilter(t)
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 20
    }
  }, list.length ? list.map((e, i) => /*#__PURE__*/React.createElement(EventCard, _extends({
    key: i
  }, e, {
    onSignUp: when === 'Upcoming' ? () => onNav('signup') : undefined
  }))) : /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-tertiary)',
      fontFamily: 'var(--font-body)',
      gridColumn: '1/-1',
      padding: '40px 0'
    }
  }, "Nothing here yet.")));
}
window.EventsScreen = EventsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/club-site/EventsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/club-site/Footer.jsx
try { (() => {
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: '40px',
      borderTop: '1px solid var(--border-default)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'var(--text-tertiary)',
      fontFamily: 'var(--font-body)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", null, "WLMAC Fitness Club \xB7 2026\u201327"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, "No Excuses"));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/club-site/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/club-site/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function HomeScreen({
  onNav
}) {
  const {
    Button,
    Badge,
    Tag,
    EventCard
  } = window.WLMACFitnessClubDesignSystem_a70098;
  const upcoming = window.WLMAC_EVENTS.filter(e => e.when === 'upcoming').slice(0, 3);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '80px 40px 60px',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/wlmac-crest.png",
    style: {
      height: 150,
      width: 150,
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: "outline"
  }, "2026\u201327 Season"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      color: '#fff',
      fontSize: 72,
      textTransform: 'uppercase',
      margin: 0,
      lineHeight: 1.05,
      maxWidth: 800
    }
  }, "Show Up. Lift Heavy. Repeat."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--text-secondary)',
      fontSize: 18,
      maxWidth: 560,
      lineHeight: 1.5,
      margin: 0
    }
  }, "Monthly powerlifting and calisthenics meets, weekly open lifting, and the occasional guest speaker who's actually done it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => onNav('signup')
  }, "Join the Club"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => onNav('events')
  }, "View Schedule"))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '20px 40px 80px',
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      color: '#fff',
      fontSize: 28,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      margin: 0
    }
  }, "Coming Up"), /*#__PURE__*/React.createElement("span", {
    onClick: () => onNav('events'),
    style: {
      fontFamily: 'var(--font-heading)',
      color: 'var(--text-accent)',
      fontSize: 14,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      cursor: 'pointer'
    }
  }, "See full schedule \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, upcoming.map((e, i) => /*#__PURE__*/React.createElement(EventCard, _extends({
    key: i
  }, e, {
    onSignUp: () => onNav('signup')
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 40px 90px',
      maxWidth: 1200,
      margin: '0 auto',
      display: 'flex',
      gap: 40,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      color: '#fff',
      fontSize: 28,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)'
    }
  }, "What We Do"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 16,
      lineHeight: 1.6
    }
  }, "Open lifting is every Thursday after school in the weight room. Bring your own straps if you've got 'em \u2014 we've got the rest. Once a month we run a real meet: three lifts, real judging, PRs on the board."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    active: true
  }, "Powerlifting"), /*#__PURE__*/React.createElement(Tag, null, "Calisthenics"), /*#__PURE__*/React.createElement(Tag, null, "Open Lift"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/wlmac-banner.png",
    style: {
      maxWidth: '100%',
      borderRadius: 'var(--radius-md)'
    }
  }))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/club-site/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/club-site/Nav.jsx
try { (() => {
function Nav({
  screen,
  onNav
}) {
  const {
    Button
  } = window.WLMACFitnessClubDesignSystem_a70098;
  const links = [['home', 'Home'], ['events', 'Events'], ['signup', 'Sign Up']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 40px',
      borderBottom: '1px solid var(--border-default)',
      position: 'sticky',
      top: 0,
      background: 'var(--black)',
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      cursor: 'pointer'
    },
    onClick: () => onNav('home')
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/wlmac-crest.png",
    style: {
      height: 44,
      width: 44,
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      color: '#fff',
      fontSize: 20,
      letterSpacing: '0.02em'
    }
  }, "WLMAC")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 32,
      fontFamily: 'var(--font-heading)'
    }
  }, links.map(([id, label]) => /*#__PURE__*/React.createElement("span", {
    key: id,
    onClick: () => onNav(id),
    style: {
      cursor: 'pointer',
      fontWeight: 700,
      fontSize: 15,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: screen === id ? 'var(--text-accent)' : 'var(--text-secondary)',
      borderBottom: screen === id ? '2px solid var(--border-accent)' : '2px solid transparent',
      paddingBottom: 4
    }
  }, label))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => onNav('signup')
  }, "Join the Club"));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/club-site/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/club-site/SignUpScreen.jsx
try { (() => {
function SignUpScreen() {
  const {
    Input,
    Select,
    Checkbox,
    Radio,
    Switch,
    Button,
    Dialog
  } = window.WLMACFitnessClubDesignSystem_a70098;
  const [track, setTrack] = React.useState('pl');
  const [spotter, setSpotter] = React.useState(false);
  const [remind, setRemind] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      margin: '0 auto',
      padding: '0 40px 90px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '30px 0'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/wlmac-banner.png",
    style: {
      maxWidth: '100%',
      borderRadius: 'var(--radius-md)'
    }
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      color: '#fff',
      fontSize: 40,
      textTransform: 'uppercase',
      textAlign: 'center',
      marginBottom: 8
    }
  }, "Join the Club"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
      marginBottom: 36
    }
  }, "Fill this out once \u2014 you're in for the season."), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setOpen(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full Name",
    placeholder: "Jordan Lee"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Grade",
    type: "number",
    placeholder: "10",
    helper: "9\u201312"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Weight Class",
    options: ['114', '123', '132', '148', '165', '181', '198', '220', '242', '275+', 'Not sure yet']
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 13,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      fontWeight: 600,
      marginBottom: 10
    }
  }, "Primary Track"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    label: "Powerlifting",
    checked: track === 'pl',
    onChange: () => setTrack('pl')
  }), /*#__PURE__*/React.createElement(Radio, {
    label: "Calisthenics",
    checked: track === 'cal',
    onChange: () => setTrack('cal')
  }), /*#__PURE__*/React.createElement(Radio, {
    label: "Both / Not sure",
    checked: track === 'both',
    onChange: () => setTrack('both')
  }))), /*#__PURE__*/React.createElement(Checkbox, {
    label: "I have a spotter lined up for meets",
    checked: spotter,
    onChange: setSpotter
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Text me meet & open-lift reminders",
    checked: remind,
    onChange: setRemind
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg"
  }, "Submit Sign-Up")), /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    title: "You're Signed Up!",
    onClose: () => setOpen(false)
  }, "See you at the weight room Thursday at 3:15. Watch for a reminder text before the next meet."));
}
window.SignUpScreen = SignUpScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/club-site/SignUpScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/club-site/data.js
try { (() => {
const EVENTS = [{
  type: 'Powerlifting Meet',
  title: 'Monthly Meet — Week 6',
  date: 'Aug 14',
  location: 'Weight Room',
  spotsLeft: 4,
  when: 'upcoming'
}, {
  type: 'Open Lifting',
  title: 'Thursday Open Lift',
  date: 'Every Thursday, 3:15–5pm',
  location: 'Weight Room',
  spotsLeft: null,
  when: 'upcoming'
}, {
  type: 'Guest Speaker',
  title: 'Pro Lifter Q&A: Programming 101',
  date: 'Sep 2',
  location: 'Cafeteria',
  spotsLeft: 12,
  when: 'upcoming'
}, {
  type: 'Calisthenics Meet',
  title: 'Bar Skills Showcase',
  date: 'Sep 20',
  location: 'Gym Annex',
  spotsLeft: 0,
  when: 'upcoming'
}, {
  type: 'Open Lifting',
  title: 'Thursday Open Lift',
  date: 'Every Thursday, 3:15–5pm',
  location: 'Weight Room',
  spotsLeft: null,
  when: 'upcoming'
}, {
  type: 'Powerlifting Meet',
  title: 'Monthly Meet — Week 2',
  date: 'Jul 17',
  location: 'Weight Room',
  spotsLeft: 0,
  when: 'past'
}, {
  type: 'Guest Speaker',
  title: 'Nutrition for Lifters',
  date: 'Jun 28',
  location: 'Cafeteria',
  spotsLeft: 0,
  when: 'past'
}];
window.WLMAC_EVENTS = EVENTS;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/club-site/data.js", error: String((e && e.message) || e) }); }

__ds_ns.EventCard = __ds_scope.EventCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
