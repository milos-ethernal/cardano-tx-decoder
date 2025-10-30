(async () => {
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) s(o);
    new MutationObserver((o) => {
      for (const n of o) if (n.type === "childList") for (const c of n.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && s(c);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function e(o) {
      const n = {};
      return o.integrity && (n.integrity = o.integrity), o.referrerPolicy && (n.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? n.credentials = "include" : o.crossOrigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin", n;
    }
    function s(o) {
      if (o.ep) return;
      o.ep = true;
      const n = e(o);
      fetch(o.href, n);
    }
  })();
  function xp(r) {
    return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
  }
  var ad = {
    exports: {}
  }, bs = {}, id = {
    exports: {}
  }, Q = {};
  var ao = Symbol.for("react.element"), jp = Symbol.for("react.portal"), Sp = Symbol.for("react.fragment"), Ep = Symbol.for("react.strict_mode"), zp = Symbol.for("react.profiler"), Cp = Symbol.for("react.provider"), Op = Symbol.for("react.context"), Lp = Symbol.for("react.forward_ref"), Np = Symbol.for("react.suspense"), Fp = Symbol.for("react.memo"), Pp = Symbol.for("react.lazy"), Zi = Symbol.iterator;
  function Tp(r) {
    return r === null || typeof r != "object" ? null : (r = Zi && r[Zi] || r["@@iterator"], typeof r == "function" ? r : null);
  }
  var cd = {
    isMounted: function() {
      return false;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, dd = Object.assign, ld = {};
  function fn(r, t, e) {
    this.props = r, this.context = t, this.refs = ld, this.updater = e || cd;
  }
  fn.prototype.isReactComponent = {};
  fn.prototype.setState = function(r, t) {
    if (typeof r != "object" && typeof r != "function" && r != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, r, t, "setState");
  };
  fn.prototype.forceUpdate = function(r) {
    this.updater.enqueueForceUpdate(this, r, "forceUpdate");
  };
  function pd() {
  }
  pd.prototype = fn.prototype;
  function ei(r, t, e) {
    this.props = r, this.context = t, this.refs = ld, this.updater = e || cd;
  }
  var _i = ei.prototype = new pd();
  _i.constructor = ei;
  dd(_i, fn.prototype);
  _i.isPureReactComponent = true;
  var Ji = Array.isArray, ud = Object.prototype.hasOwnProperty, ri = {
    current: null
  }, wd = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function fd(r, t, e) {
    var s, o = {}, n = null, c = null;
    if (t != null) for (s in t.ref !== void 0 && (c = t.ref), t.key !== void 0 && (n = "" + t.key), t) ud.call(t, s) && !wd.hasOwnProperty(s) && (o[s] = t[s]);
    var d = arguments.length - 2;
    if (d === 1) o.children = e;
    else if (1 < d) {
      for (var p = Array(d), l = 0; l < d; l++) p[l] = arguments[l + 2];
      o.children = p;
    }
    if (r && r.defaultProps) for (s in d = r.defaultProps, d) o[s] === void 0 && (o[s] = d[s]);
    return {
      $$typeof: ao,
      type: r,
      key: n,
      ref: c,
      props: o,
      _owner: ri.current
    };
  }
  function Rp(r, t) {
    return {
      $$typeof: ao,
      type: r.type,
      key: t,
      ref: r.ref,
      props: r.props,
      _owner: r._owner
    };
  }
  function ni(r) {
    return typeof r == "object" && r !== null && r.$$typeof === ao;
  }
  function Dp(r) {
    var t = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + r.replace(/[=:]/g, function(e) {
      return t[e];
    });
  }
  var Gi = /\/+/g;
  function Ds(r, t) {
    return typeof r == "object" && r !== null && r.key != null ? Dp("" + r.key) : t.toString(36);
  }
  function To(r, t, e, s, o) {
    var n = typeof r;
    (n === "undefined" || n === "boolean") && (r = null);
    var c = false;
    if (r === null) c = true;
    else switch (n) {
      case "string":
      case "number":
        c = true;
        break;
      case "object":
        switch (r.$$typeof) {
          case ao:
          case jp:
            c = true;
        }
    }
    if (c) return c = r, o = o(c), r = s === "" ? "." + Ds(c, 0) : s, Ji(o) ? (e = "", r != null && (e = r.replace(Gi, "$&/") + "/"), To(o, t, e, "", function(l) {
      return l;
    })) : o != null && (ni(o) && (o = Rp(o, e + (!o.key || c && c.key === o.key ? "" : ("" + o.key).replace(Gi, "$&/") + "/") + r)), t.push(o)), 1;
    if (c = 0, s = s === "" ? "." : s + ":", Ji(r)) for (var d = 0; d < r.length; d++) {
      n = r[d];
      var p = s + Ds(n, d);
      c += To(n, t, e, p, o);
    }
    else if (p = Tp(r), typeof p == "function") for (r = p.call(r), d = 0; !(n = r.next()).done; ) n = n.value, p = s + Ds(n, d++), c += To(n, t, e, p, o);
    else if (n === "object") throw t = String(r), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return c;
  }
  function fo(r, t, e) {
    if (r == null) return r;
    var s = [], o = 0;
    return To(r, s, "", "", function(n) {
      return t.call(e, n, o++);
    }), s;
  }
  function $p(r) {
    if (r._status === -1) {
      var t = r._result;
      t = t(), t.then(function(e) {
        (r._status === 0 || r._status === -1) && (r._status = 1, r._result = e);
      }, function(e) {
        (r._status === 0 || r._status === -1) && (r._status = 2, r._result = e);
      }), r._status === -1 && (r._status = 0, r._result = t);
    }
    if (r._status === 1) return r._result.default;
    throw r._result;
  }
  var Ft = {
    current: null
  }, Ro = {
    transition: null
  }, Up = {
    ReactCurrentDispatcher: Ft,
    ReactCurrentBatchConfig: Ro,
    ReactCurrentOwner: ri
  };
  function gd() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  Q.Children = {
    map: fo,
    forEach: function(r, t, e) {
      fo(r, function() {
        t.apply(this, arguments);
      }, e);
    },
    count: function(r) {
      var t = 0;
      return fo(r, function() {
        t++;
      }), t;
    },
    toArray: function(r) {
      return fo(r, function(t) {
        return t;
      }) || [];
    },
    only: function(r) {
      if (!ni(r)) throw Error("React.Children.only expected to receive a single React element child.");
      return r;
    }
  };
  Q.Component = fn;
  Q.Fragment = Sp;
  Q.Profiler = zp;
  Q.PureComponent = ei;
  Q.StrictMode = Ep;
  Q.Suspense = Np;
  Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Up;
  Q.act = gd;
  Q.cloneElement = function(r, t, e) {
    if (r == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + r + ".");
    var s = dd({}, r.props), o = r.key, n = r.ref, c = r._owner;
    if (t != null) {
      if (t.ref !== void 0 && (n = t.ref, c = ri.current), t.key !== void 0 && (o = "" + t.key), r.type && r.type.defaultProps) var d = r.type.defaultProps;
      for (p in t) ud.call(t, p) && !wd.hasOwnProperty(p) && (s[p] = t[p] === void 0 && d !== void 0 ? d[p] : t[p]);
    }
    var p = arguments.length - 2;
    if (p === 1) s.children = e;
    else if (1 < p) {
      d = Array(p);
      for (var l = 0; l < p; l++) d[l] = arguments[l + 2];
      s.children = d;
    }
    return {
      $$typeof: ao,
      type: r.type,
      key: o,
      ref: n,
      props: s,
      _owner: c
    };
  };
  Q.createContext = function(r) {
    return r = {
      $$typeof: Op,
      _currentValue: r,
      _currentValue2: r,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }, r.Provider = {
      $$typeof: Cp,
      _context: r
    }, r.Consumer = r;
  };
  Q.createElement = fd;
  Q.createFactory = function(r) {
    var t = fd.bind(null, r);
    return t.type = r, t;
  };
  Q.createRef = function() {
    return {
      current: null
    };
  };
  Q.forwardRef = function(r) {
    return {
      $$typeof: Lp,
      render: r
    };
  };
  Q.isValidElement = ni;
  Q.lazy = function(r) {
    return {
      $$typeof: Pp,
      _payload: {
        _status: -1,
        _result: r
      },
      _init: $p
    };
  };
  Q.memo = function(r, t) {
    return {
      $$typeof: Fp,
      type: r,
      compare: t === void 0 ? null : t
    };
  };
  Q.startTransition = function(r) {
    var t = Ro.transition;
    Ro.transition = {};
    try {
      r();
    } finally {
      Ro.transition = t;
    }
  };
  Q.unstable_act = gd;
  Q.useCallback = function(r, t) {
    return Ft.current.useCallback(r, t);
  };
  Q.useContext = function(r) {
    return Ft.current.useContext(r);
  };
  Q.useDebugValue = function() {
  };
  Q.useDeferredValue = function(r) {
    return Ft.current.useDeferredValue(r);
  };
  Q.useEffect = function(r, t) {
    return Ft.current.useEffect(r, t);
  };
  Q.useId = function() {
    return Ft.current.useId();
  };
  Q.useImperativeHandle = function(r, t, e) {
    return Ft.current.useImperativeHandle(r, t, e);
  };
  Q.useInsertionEffect = function(r, t) {
    return Ft.current.useInsertionEffect(r, t);
  };
  Q.useLayoutEffect = function(r, t) {
    return Ft.current.useLayoutEffect(r, t);
  };
  Q.useMemo = function(r, t) {
    return Ft.current.useMemo(r, t);
  };
  Q.useReducer = function(r, t, e) {
    return Ft.current.useReducer(r, t, e);
  };
  Q.useRef = function(r) {
    return Ft.current.useRef(r);
  };
  Q.useState = function(r) {
    return Ft.current.useState(r);
  };
  Q.useSyncExternalStore = function(r, t, e) {
    return Ft.current.useSyncExternalStore(r, t, e);
  };
  Q.useTransition = function() {
    return Ft.current.useTransition();
  };
  Q.version = "18.3.1";
  id.exports = Q;
  var Ne = id.exports;
  const Mp = xp(Ne);
  var Ip = Ne, Wp = Symbol.for("react.element"), Qp = Symbol.for("react.fragment"), Vp = Object.prototype.hasOwnProperty, Bp = Ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ap = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function bd(r, t, e) {
    var s, o = {}, n = null, c = null;
    e !== void 0 && (n = "" + e), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (c = t.ref);
    for (s in t) Vp.call(t, s) && !Ap.hasOwnProperty(s) && (o[s] = t[s]);
    if (r && r.defaultProps) for (s in t = r.defaultProps, t) o[s] === void 0 && (o[s] = t[s]);
    return {
      $$typeof: Wp,
      type: r,
      key: n,
      ref: c,
      props: o,
      _owner: Bp.current
    };
  }
  bs.Fragment = Qp;
  bs.jsx = bd;
  bs.jsxs = bd;
  ad.exports = bs;
  var wt = ad.exports, hd = {
    exports: {}
  }, qt = {}, yd = {
    exports: {}
  }, md = {};
  (function(r) {
    function t(T, M) {
      var I = T.length;
      T.push(M);
      t: for (; 0 < I; ) {
        var ot = I - 1 >>> 1, ut = T[ot];
        if (0 < o(ut, M)) T[ot] = M, T[I] = ut, I = ot;
        else break t;
      }
    }
    function e(T) {
      return T.length === 0 ? null : T[0];
    }
    function s(T) {
      if (T.length === 0) return null;
      var M = T[0], I = T.pop();
      if (I !== M) {
        T[0] = I;
        t: for (var ot = 0, ut = T.length, uo = ut >>> 1; ot < uo; ) {
          var dr = 2 * (ot + 1) - 1, Rs = T[dr], lr = dr + 1, wo = T[lr];
          if (0 > o(Rs, I)) lr < ut && 0 > o(wo, Rs) ? (T[ot] = wo, T[lr] = I, ot = lr) : (T[ot] = Rs, T[dr] = I, ot = dr);
          else if (lr < ut && 0 > o(wo, I)) T[ot] = wo, T[lr] = I, ot = lr;
          else break t;
        }
      }
      return M;
    }
    function o(T, M) {
      var I = T.sortIndex - M.sortIndex;
      return I !== 0 ? I : T.id - M.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var n = performance;
      r.unstable_now = function() {
        return n.now();
      };
    } else {
      var c = Date, d = c.now();
      r.unstable_now = function() {
        return c.now() - d;
      };
    }
    var p = [], l = [], y = 1, x = null, k = 3, O = false, L = false, N = false, A = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(T) {
      for (var M = e(l); M !== null; ) {
        if (M.callback === null) s(l);
        else if (M.startTime <= T) s(l), M.sortIndex = M.expirationTime, t(p, M);
        else break;
        M = e(l);
      }
    }
    function E(T) {
      if (N = false, v(T), !L) if (e(p) !== null) L = true, Ps(F);
      else {
        var M = e(l);
        M !== null && Ts(E, M.startTime - T);
      }
    }
    function F(T, M) {
      L = false, N && (N = false, m($), $ = -1), O = true;
      var I = k;
      try {
        for (v(M), x = e(p); x !== null && (!(x.expirationTime > M) || T && !oe()); ) {
          var ot = x.callback;
          if (typeof ot == "function") {
            x.callback = null, k = x.priorityLevel;
            var ut = ot(x.expirationTime <= M);
            M = r.unstable_now(), typeof ut == "function" ? x.callback = ut : x === e(p) && s(p), v(M);
          } else s(p);
          x = e(p);
        }
        if (x !== null) var uo = true;
        else {
          var dr = e(l);
          dr !== null && Ts(E, dr.startTime - M), uo = false;
        }
        return uo;
      } finally {
        x = null, k = I, O = false;
      }
    }
    var R = false, D = null, $ = -1, G = 5, W = -1;
    function oe() {
      return !(r.unstable_now() - W < G);
    }
    function hn() {
      if (D !== null) {
        var T = r.unstable_now();
        W = T;
        var M = true;
        try {
          M = D(true, T);
        } finally {
          M ? yn() : (R = false, D = null);
        }
      } else R = false;
    }
    var yn;
    if (typeof h == "function") yn = function() {
      h(hn);
    };
    else if (typeof MessageChannel < "u") {
      var Ki = new MessageChannel(), kp = Ki.port2;
      Ki.port1.onmessage = hn, yn = function() {
        kp.postMessage(null);
      };
    } else yn = function() {
      A(hn, 0);
    };
    function Ps(T) {
      D = T, R || (R = true, yn());
    }
    function Ts(T, M) {
      $ = A(function() {
        T(r.unstable_now());
      }, M);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(T) {
      T.callback = null;
    }, r.unstable_continueExecution = function() {
      L || O || (L = true, Ps(F));
    }, r.unstable_forceFrameRate = function(T) {
      0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : G = 0 < T ? Math.floor(1e3 / T) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return k;
    }, r.unstable_getFirstCallbackNode = function() {
      return e(p);
    }, r.unstable_next = function(T) {
      switch (k) {
        case 1:
        case 2:
        case 3:
          var M = 3;
          break;
        default:
          M = k;
      }
      var I = k;
      k = M;
      try {
        return T();
      } finally {
        k = I;
      }
    }, r.unstable_pauseExecution = function() {
    }, r.unstable_requestPaint = function() {
    }, r.unstable_runWithPriority = function(T, M) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var I = k;
      k = T;
      try {
        return M();
      } finally {
        k = I;
      }
    }, r.unstable_scheduleCallback = function(T, M, I) {
      var ot = r.unstable_now();
      switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? ot + I : ot) : I = ot, T) {
        case 1:
          var ut = -1;
          break;
        case 2:
          ut = 250;
          break;
        case 5:
          ut = 1073741823;
          break;
        case 4:
          ut = 1e4;
          break;
        default:
          ut = 5e3;
      }
      return ut = I + ut, T = {
        id: y++,
        callback: M,
        priorityLevel: T,
        startTime: I,
        expirationTime: ut,
        sortIndex: -1
      }, I > ot ? (T.sortIndex = I, t(l, T), e(p) === null && T === e(l) && (N ? (m($), $ = -1) : N = true, Ts(E, I - ot))) : (T.sortIndex = ut, t(p, T), L || O || (L = true, Ps(F))), T;
    }, r.unstable_shouldYield = oe, r.unstable_wrapCallback = function(T) {
      var M = k;
      return function() {
        var I = k;
        k = M;
        try {
          return T.apply(this, arguments);
        } finally {
          k = I;
        }
      };
    };
  })(md);
  yd.exports = md;
  var Hp = yd.exports;
  var Yp = Ne, Yt = Hp;
  function z(r) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + r, e = 1; e < arguments.length; e++) t += "&args[]=" + encodeURIComponent(arguments[e]);
    return "Minified React error #" + r + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var vd = /* @__PURE__ */ new Set(), Vn = {};
  function Dr(r, t) {
    an(r, t), an(r + "Capture", t);
  }
  function an(r, t) {
    for (Vn[r] = t, r = 0; r < t.length; r++) vd.add(t[r]);
  }
  var Xe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ia = Object.prototype.hasOwnProperty, Xp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, tc = {}, ec = {};
  function qp(r) {
    return ia.call(ec, r) ? true : ia.call(tc, r) ? false : Xp.test(r) ? ec[r] = true : (tc[r] = true, false);
  }
  function Kp(r, t, e, s) {
    if (e !== null && e.type === 0) return false;
    switch (typeof t) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        return s ? false : e !== null ? !e.acceptsBooleans : (r = r.toLowerCase().slice(0, 5), r !== "data-" && r !== "aria-");
      default:
        return false;
    }
  }
  function Zp(r, t, e, s) {
    if (t === null || typeof t > "u" || Kp(r, t, e, s)) return true;
    if (s) return false;
    if (e !== null) switch (e.type) {
      case 3:
        return !t;
      case 4:
        return t === false;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
    return false;
  }
  function Pt(r, t, e, s, o, n, c) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = s, this.attributeNamespace = o, this.mustUseProperty = e, this.propertyName = r, this.type = t, this.sanitizeURL = n, this.removeEmptyString = c;
  }
  var vt = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r) {
    vt[r] = new Pt(r, 0, false, r, null, false, false);
  });
  [
    [
      "acceptCharset",
      "accept-charset"
    ],
    [
      "className",
      "class"
    ],
    [
      "htmlFor",
      "for"
    ],
    [
      "httpEquiv",
      "http-equiv"
    ]
  ].forEach(function(r) {
    var t = r[0];
    vt[t] = new Pt(t, 1, false, r[1], null, false, false);
  });
  [
    "contentEditable",
    "draggable",
    "spellCheck",
    "value"
  ].forEach(function(r) {
    vt[r] = new Pt(r, 2, false, r.toLowerCase(), null, false, false);
  });
  [
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha"
  ].forEach(function(r) {
    vt[r] = new Pt(r, 2, false, r, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r) {
    vt[r] = new Pt(r, 3, false, r.toLowerCase(), null, false, false);
  });
  [
    "checked",
    "multiple",
    "muted",
    "selected"
  ].forEach(function(r) {
    vt[r] = new Pt(r, 3, true, r, null, false, false);
  });
  [
    "capture",
    "download"
  ].forEach(function(r) {
    vt[r] = new Pt(r, 4, false, r, null, false, false);
  });
  [
    "cols",
    "rows",
    "size",
    "span"
  ].forEach(function(r) {
    vt[r] = new Pt(r, 6, false, r, null, false, false);
  });
  [
    "rowSpan",
    "start"
  ].forEach(function(r) {
    vt[r] = new Pt(r, 5, false, r.toLowerCase(), null, false, false);
  });
  var oi = /[\-:]([a-z])/g;
  function si(r) {
    return r[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r) {
    var t = r.replace(oi, si);
    vt[t] = new Pt(t, 1, false, r, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r) {
    var t = r.replace(oi, si);
    vt[t] = new Pt(t, 1, false, r, "http://www.w3.org/1999/xlink", false, false);
  });
  [
    "xml:base",
    "xml:lang",
    "xml:space"
  ].forEach(function(r) {
    var t = r.replace(oi, si);
    vt[t] = new Pt(t, 1, false, r, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  [
    "tabIndex",
    "crossOrigin"
  ].forEach(function(r) {
    vt[r] = new Pt(r, 1, false, r.toLowerCase(), null, false, false);
  });
  vt.xlinkHref = new Pt("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  [
    "src",
    "href",
    "action",
    "formAction"
  ].forEach(function(r) {
    vt[r] = new Pt(r, 1, false, r.toLowerCase(), null, true, true);
  });
  function ai(r, t, e, s) {
    var o = vt.hasOwnProperty(t) ? vt[t] : null;
    (o !== null ? o.type !== 0 : s || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Zp(t, e, o, s) && (e = null), s || o === null ? qp(t) && (e === null ? r.removeAttribute(t) : r.setAttribute(t, "" + e)) : o.mustUseProperty ? r[o.propertyName] = e === null ? o.type === 3 ? false : "" : e : (t = o.attributeName, s = o.attributeNamespace, e === null ? r.removeAttribute(t) : (o = o.type, e = o === 3 || o === 4 && e === true ? "" : "" + e, s ? r.setAttributeNS(s, t, e) : r.setAttribute(t, e))));
  }
  var Je = Yp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, go = Symbol.for("react.element"), Ir = Symbol.for("react.portal"), Wr = Symbol.for("react.fragment"), ii = Symbol.for("react.strict_mode"), ca = Symbol.for("react.profiler"), kd = Symbol.for("react.provider"), xd = Symbol.for("react.context"), ci = Symbol.for("react.forward_ref"), da = Symbol.for("react.suspense"), la = Symbol.for("react.suspense_list"), di = Symbol.for("react.memo"), e_ = Symbol.for("react.lazy"), jd = Symbol.for("react.offscreen"), _c = Symbol.iterator;
  function mn(r) {
    return r === null || typeof r != "object" ? null : (r = _c && r[_c] || r["@@iterator"], typeof r == "function" ? r : null);
  }
  var _t = Object.assign, $s;
  function On(r) {
    if ($s === void 0) try {
      throw Error();
    } catch (e) {
      var t = e.stack.trim().match(/\n( *(at )?)/);
      $s = t && t[1] || "";
    }
    return `
` + $s + r;
  }
  var Us = false;
  function Ms(r, t) {
    if (!r || Us) return "";
    Us = true;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", {
        set: function() {
          throw Error();
        }
      }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (l) {
          var s = l;
        }
        Reflect.construct(r, [], t);
      } else {
        try {
          t.call();
        } catch (l) {
          s = l;
        }
        r.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (l) {
          s = l;
        }
        r();
      }
    } catch (l) {
      if (l && s && typeof l.stack == "string") {
        for (var o = l.stack.split(`
`), n = s.stack.split(`
`), c = o.length - 1, d = n.length - 1; 1 <= c && 0 <= d && o[c] !== n[d]; ) d--;
        for (; 1 <= c && 0 <= d; c--, d--) if (o[c] !== n[d]) {
          if (c !== 1 || d !== 1) do
            if (c--, d--, 0 > d || o[c] !== n[d]) {
              var p = `
` + o[c].replace(" at new ", " at ");
              return r.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", r.displayName)), p;
            }
          while (1 <= c && 0 <= d);
          break;
        }
      }
    } finally {
      Us = false, Error.prepareStackTrace = e;
    }
    return (r = r ? r.displayName || r.name : "") ? On(r) : "";
  }
  function Jp(r) {
    switch (r.tag) {
      case 5:
        return On(r.type);
      case 16:
        return On("Lazy");
      case 13:
        return On("Suspense");
      case 19:
        return On("SuspenseList");
      case 0:
      case 2:
      case 15:
        return r = Ms(r.type, false), r;
      case 11:
        return r = Ms(r.type.render, false), r;
      case 1:
        return r = Ms(r.type, true), r;
      default:
        return "";
    }
  }
  function pa(r) {
    if (r == null) return null;
    if (typeof r == "function") return r.displayName || r.name || null;
    if (typeof r == "string") return r;
    switch (r) {
      case Wr:
        return "Fragment";
      case Ir:
        return "Portal";
      case ca:
        return "Profiler";
      case ii:
        return "StrictMode";
      case da:
        return "Suspense";
      case la:
        return "SuspenseList";
    }
    if (typeof r == "object") switch (r.$$typeof) {
      case xd:
        return (r.displayName || "Context") + ".Consumer";
      case kd:
        return (r._context.displayName || "Context") + ".Provider";
      case ci:
        var t = r.render;
        return r = r.displayName, r || (r = t.displayName || t.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
      case di:
        return t = r.displayName || null, t !== null ? t : pa(r.type) || "Memo";
      case e_:
        t = r._payload, r = r._init;
        try {
          return pa(r(t));
        } catch {
        }
    }
    return null;
  }
  function Gp(r) {
    var t = r.type;
    switch (r.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return r = t.render, r = r.displayName || r.name || "", t.displayName || (r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return pa(t);
      case 8:
        return t === ii ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function or(r) {
    switch (typeof r) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return r;
      case "object":
        return r;
      default:
        return "";
    }
  }
  function Sd(r) {
    var t = r.type;
    return (r = r.nodeName) && r.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function tu(r) {
    var t = Sd(r) ? "checked" : "value", e = Object.getOwnPropertyDescriptor(r.constructor.prototype, t), s = "" + r[t];
    if (!r.hasOwnProperty(t) && typeof e < "u" && typeof e.get == "function" && typeof e.set == "function") {
      var o = e.get, n = e.set;
      return Object.defineProperty(r, t, {
        configurable: true,
        get: function() {
          return o.call(this);
        },
        set: function(c) {
          s = "" + c, n.call(this, c);
        }
      }), Object.defineProperty(r, t, {
        enumerable: e.enumerable
      }), {
        getValue: function() {
          return s;
        },
        setValue: function(c) {
          s = "" + c;
        },
        stopTracking: function() {
          r._valueTracker = null, delete r[t];
        }
      };
    }
  }
  function bo(r) {
    r._valueTracker || (r._valueTracker = tu(r));
  }
  function Ed(r) {
    if (!r) return false;
    var t = r._valueTracker;
    if (!t) return true;
    var e = t.getValue(), s = "";
    return r && (s = Sd(r) ? r.checked ? "true" : "false" : r.value), r = s, r !== e ? (t.setValue(r), true) : false;
  }
  function Yo(r) {
    if (r = r || (typeof document < "u" ? document : void 0), typeof r > "u") return null;
    try {
      return r.activeElement || r.body;
    } catch {
      return r.body;
    }
  }
  function ua(r, t) {
    var e = t.checked;
    return _t({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: e ?? r._wrapperState.initialChecked
    });
  }
  function rc(r, t) {
    var e = t.defaultValue == null ? "" : t.defaultValue, s = t.checked != null ? t.checked : t.defaultChecked;
    e = or(t.value != null ? t.value : e), r._wrapperState = {
      initialChecked: s,
      initialValue: e,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    };
  }
  function zd(r, t) {
    t = t.checked, t != null && ai(r, "checked", t, false);
  }
  function wa(r, t) {
    zd(r, t);
    var e = or(t.value), s = t.type;
    if (e != null) s === "number" ? (e === 0 && r.value === "" || r.value != e) && (r.value = "" + e) : r.value !== "" + e && (r.value = "" + e);
    else if (s === "submit" || s === "reset") {
      r.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? fa(r, t.type, e) : t.hasOwnProperty("defaultValue") && fa(r, t.type, or(t.defaultValue)), t.checked == null && t.defaultChecked != null && (r.defaultChecked = !!t.defaultChecked);
  }
  function nc(r, t, e) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var s = t.type;
      if (!(s !== "submit" && s !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + r._wrapperState.initialValue, e || t === r.value || (r.value = t), r.defaultValue = t;
    }
    e = r.name, e !== "" && (r.name = ""), r.defaultChecked = !!r._wrapperState.initialChecked, e !== "" && (r.name = e);
  }
  function fa(r, t, e) {
    (t !== "number" || Yo(r.ownerDocument) !== r) && (e == null ? r.defaultValue = "" + r._wrapperState.initialValue : r.defaultValue !== "" + e && (r.defaultValue = "" + e));
  }
  var Ln = Array.isArray;
  function Gr(r, t, e, s) {
    if (r = r.options, t) {
      t = {};
      for (var o = 0; o < e.length; o++) t["$" + e[o]] = true;
      for (e = 0; e < r.length; e++) o = t.hasOwnProperty("$" + r[e].value), r[e].selected !== o && (r[e].selected = o), o && s && (r[e].defaultSelected = true);
    } else {
      for (e = "" + or(e), t = null, o = 0; o < r.length; o++) {
        if (r[o].value === e) {
          r[o].selected = true, s && (r[o].defaultSelected = true);
          return;
        }
        t !== null || r[o].disabled || (t = r[o]);
      }
      t !== null && (t.selected = true);
    }
  }
  function ga(r, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(z(91));
    return _t({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + r._wrapperState.initialValue
    });
  }
  function oc(r, t) {
    var e = t.value;
    if (e == null) {
      if (e = t.children, t = t.defaultValue, e != null) {
        if (t != null) throw Error(z(92));
        if (Ln(e)) {
          if (1 < e.length) throw Error(z(93));
          e = e[0];
        }
        t = e;
      }
      t == null && (t = ""), e = t;
    }
    r._wrapperState = {
      initialValue: or(e)
    };
  }
  function Cd(r, t) {
    var e = or(t.value), s = or(t.defaultValue);
    e != null && (e = "" + e, e !== r.value && (r.value = e), t.defaultValue == null && r.defaultValue !== e && (r.defaultValue = e)), s != null && (r.defaultValue = "" + s);
  }
  function sc(r) {
    var t = r.textContent;
    t === r._wrapperState.initialValue && t !== "" && t !== null && (r.value = t);
  }
  function Od(r) {
    switch (r) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ba(r, t) {
    return r == null || r === "http://www.w3.org/1999/xhtml" ? Od(t) : r === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : r;
  }
  var ho, Ld = function(r) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, e, s, o) {
      MSApp.execUnsafeLocalFunction(function() {
        return r(t, e, s, o);
      });
    } : r;
  }(function(r, t) {
    if (r.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in r) r.innerHTML = t;
    else {
      for (ho = ho || document.createElement("div"), ho.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ho.firstChild; r.firstChild; ) r.removeChild(r.firstChild);
      for (; t.firstChild; ) r.appendChild(t.firstChild);
    }
  });
  function Bn(r, t) {
    if (t) {
      var e = r.firstChild;
      if (e && e === r.lastChild && e.nodeType === 3) {
        e.nodeValue = t;
        return;
      }
    }
    r.textContent = t;
  }
  var Pn = {
    animationIterationCount: true,
    aspectRatio: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    columns: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridArea: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowSpan: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnSpan: true,
    gridColumnStart: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
  }, eu = [
    "Webkit",
    "ms",
    "Moz",
    "O"
  ];
  Object.keys(Pn).forEach(function(r) {
    eu.forEach(function(t) {
      t = t + r.charAt(0).toUpperCase() + r.substring(1), Pn[t] = Pn[r];
    });
  });
  function Nd(r, t, e) {
    return t == null || typeof t == "boolean" || t === "" ? "" : e || typeof t != "number" || t === 0 || Pn.hasOwnProperty(r) && Pn[r] ? ("" + t).trim() : t + "px";
  }
  function Fd(r, t) {
    r = r.style;
    for (var e in t) if (t.hasOwnProperty(e)) {
      var s = e.indexOf("--") === 0, o = Nd(e, t[e], s);
      e === "float" && (e = "cssFloat"), s ? r.setProperty(e, o) : r[e] = o;
    }
  }
  var _u = _t({
    menuitem: true
  }, {
    area: true,
    base: true,
    br: true,
    col: true,
    embed: true,
    hr: true,
    img: true,
    input: true,
    keygen: true,
    link: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true
  });
  function ha(r, t) {
    if (t) {
      if (_u[r] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(z(137, r));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(z(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(z(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(z(62));
    }
  }
  function ya(r, t) {
    if (r.indexOf("-") === -1) return typeof t.is == "string";
    switch (r) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var ma = null;
  function li(r) {
    return r = r.target || r.srcElement || window, r.correspondingUseElement && (r = r.correspondingUseElement), r.nodeType === 3 ? r.parentNode : r;
  }
  var va = null, tn = null, en = null;
  function ac(r) {
    if (r = lo(r)) {
      if (typeof va != "function") throw Error(z(280));
      var t = r.stateNode;
      t && (t = ks(t), va(r.stateNode, r.type, t));
    }
  }
  function Pd(r) {
    tn ? en ? en.push(r) : en = [
      r
    ] : tn = r;
  }
  function Td() {
    if (tn) {
      var r = tn, t = en;
      if (en = tn = null, ac(r), t) for (r = 0; r < t.length; r++) ac(t[r]);
    }
  }
  function Rd(r, t) {
    return r(t);
  }
  function Dd() {
  }
  var Is = false;
  function $d(r, t, e) {
    if (Is) return r(t, e);
    Is = true;
    try {
      return Rd(r, t, e);
    } finally {
      Is = false, (tn !== null || en !== null) && (Dd(), Td());
    }
  }
  function An(r, t) {
    var e = r.stateNode;
    if (e === null) return null;
    var s = ks(e);
    if (s === null) return null;
    e = s[t];
    t: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (s = !s.disabled) || (r = r.type, s = !(r === "button" || r === "input" || r === "select" || r === "textarea")), r = !s;
        break t;
      default:
        r = false;
    }
    if (r) return null;
    if (e && typeof e != "function") throw Error(z(231, t, typeof e));
    return e;
  }
  var ka = false;
  if (Xe) try {
    var vn = {};
    Object.defineProperty(vn, "passive", {
      get: function() {
        ka = true;
      }
    }), window.addEventListener("test", vn, vn), window.removeEventListener("test", vn, vn);
  } catch {
    ka = false;
  }
  function ru(r, t, e, s, o, n, c, d, p) {
    var l = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(e, l);
    } catch (y) {
      this.onError(y);
    }
  }
  var Tn = false, Xo = null, qo = false, xa = null, nu = {
    onError: function(r) {
      Tn = true, Xo = r;
    }
  };
  function ou(r, t, e, s, o, n, c, d, p) {
    Tn = false, Xo = null, ru.apply(nu, arguments);
  }
  function su(r, t, e, s, o, n, c, d, p) {
    if (ou.apply(this, arguments), Tn) {
      if (Tn) {
        var l = Xo;
        Tn = false, Xo = null;
      } else throw Error(z(198));
      qo || (qo = true, xa = l);
    }
  }
  function $r(r) {
    var t = r, e = r;
    if (r.alternate) for (; t.return; ) t = t.return;
    else {
      r = t;
      do
        t = r, t.flags & 4098 && (e = t.return), r = t.return;
      while (r);
    }
    return t.tag === 3 ? e : null;
  }
  function Ud(r) {
    if (r.tag === 13) {
      var t = r.memoizedState;
      if (t === null && (r = r.alternate, r !== null && (t = r.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function ic(r) {
    if ($r(r) !== r) throw Error(z(188));
  }
  function au(r) {
    var t = r.alternate;
    if (!t) {
      if (t = $r(r), t === null) throw Error(z(188));
      return t !== r ? null : r;
    }
    for (var e = r, s = t; ; ) {
      var o = e.return;
      if (o === null) break;
      var n = o.alternate;
      if (n === null) {
        if (s = o.return, s !== null) {
          e = s;
          continue;
        }
        break;
      }
      if (o.child === n.child) {
        for (n = o.child; n; ) {
          if (n === e) return ic(o), r;
          if (n === s) return ic(o), t;
          n = n.sibling;
        }
        throw Error(z(188));
      }
      if (e.return !== s.return) e = o, s = n;
      else {
        for (var c = false, d = o.child; d; ) {
          if (d === e) {
            c = true, e = o, s = n;
            break;
          }
          if (d === s) {
            c = true, s = o, e = n;
            break;
          }
          d = d.sibling;
        }
        if (!c) {
          for (d = n.child; d; ) {
            if (d === e) {
              c = true, e = n, s = o;
              break;
            }
            if (d === s) {
              c = true, s = n, e = o;
              break;
            }
            d = d.sibling;
          }
          if (!c) throw Error(z(189));
        }
      }
      if (e.alternate !== s) throw Error(z(190));
    }
    if (e.tag !== 3) throw Error(z(188));
    return e.stateNode.current === e ? r : t;
  }
  function Md(r) {
    return r = au(r), r !== null ? Id(r) : null;
  }
  function Id(r) {
    if (r.tag === 5 || r.tag === 6) return r;
    for (r = r.child; r !== null; ) {
      var t = Id(r);
      if (t !== null) return t;
      r = r.sibling;
    }
    return null;
  }
  var Wd = Yt.unstable_scheduleCallback, cc = Yt.unstable_cancelCallback, iu = Yt.unstable_shouldYield, cu = Yt.unstable_requestPaint, st = Yt.unstable_now, du = Yt.unstable_getCurrentPriorityLevel, pi = Yt.unstable_ImmediatePriority, Qd = Yt.unstable_UserBlockingPriority, Ko = Yt.unstable_NormalPriority, lu = Yt.unstable_LowPriority, Vd = Yt.unstable_IdlePriority, hs = null, Ee = null;
  function pu(r) {
    if (Ee && typeof Ee.onCommitFiberRoot == "function") try {
      Ee.onCommitFiberRoot(hs, r, void 0, (r.current.flags & 128) === 128);
    } catch {
    }
  }
  var ue = Math.clz32 ? Math.clz32 : fu, uu = Math.log, wu = Math.LN2;
  function fu(r) {
    return r >>>= 0, r === 0 ? 32 : 31 - (uu(r) / wu | 0) | 0;
  }
  var yo = 64, mo = 4194304;
  function Nn(r) {
    switch (r & -r) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return r & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return r;
    }
  }
  function Zo(r, t) {
    var e = r.pendingLanes;
    if (e === 0) return 0;
    var s = 0, o = r.suspendedLanes, n = r.pingedLanes, c = e & 268435455;
    if (c !== 0) {
      var d = c & ~o;
      d !== 0 ? s = Nn(d) : (n &= c, n !== 0 && (s = Nn(n)));
    } else c = e & ~o, c !== 0 ? s = Nn(c) : n !== 0 && (s = Nn(n));
    if (s === 0) return 0;
    if (t !== 0 && t !== s && !(t & o) && (o = s & -s, n = t & -t, o >= n || o === 16 && (n & 4194240) !== 0)) return t;
    if (s & 4 && (s |= e & 16), t = r.entangledLanes, t !== 0) for (r = r.entanglements, t &= s; 0 < t; ) e = 31 - ue(t), o = 1 << e, s |= r[e], t &= ~o;
    return s;
  }
  function gu(r, t) {
    switch (r) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function bu(r, t) {
    for (var e = r.suspendedLanes, s = r.pingedLanes, o = r.expirationTimes, n = r.pendingLanes; 0 < n; ) {
      var c = 31 - ue(n), d = 1 << c, p = o[c];
      p === -1 ? (!(d & e) || d & s) && (o[c] = gu(d, t)) : p <= t && (r.expiredLanes |= d), n &= ~d;
    }
  }
  function ja(r) {
    return r = r.pendingLanes & -1073741825, r !== 0 ? r : r & 1073741824 ? 1073741824 : 0;
  }
  function Bd() {
    var r = yo;
    return yo <<= 1, !(yo & 4194240) && (yo = 64), r;
  }
  function Ws(r) {
    for (var t = [], e = 0; 31 > e; e++) t.push(r);
    return t;
  }
  function io(r, t, e) {
    r.pendingLanes |= t, t !== 536870912 && (r.suspendedLanes = 0, r.pingedLanes = 0), r = r.eventTimes, t = 31 - ue(t), r[t] = e;
  }
  function hu(r, t) {
    var e = r.pendingLanes & ~t;
    r.pendingLanes = t, r.suspendedLanes = 0, r.pingedLanes = 0, r.expiredLanes &= t, r.mutableReadLanes &= t, r.entangledLanes &= t, t = r.entanglements;
    var s = r.eventTimes;
    for (r = r.expirationTimes; 0 < e; ) {
      var o = 31 - ue(e), n = 1 << o;
      t[o] = 0, s[o] = -1, r[o] = -1, e &= ~n;
    }
  }
  function ui(r, t) {
    var e = r.entangledLanes |= t;
    for (r = r.entanglements; e; ) {
      var s = 31 - ue(e), o = 1 << s;
      o & t | r[s] & t && (r[s] |= t), e &= ~o;
    }
  }
  var H = 0;
  function Ad(r) {
    return r &= -r, 1 < r ? 4 < r ? r & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Hd, wi, Yd, Xd, qd, Sa = false, vo = [], Z_ = null, J_ = null, G_ = null, Hn = /* @__PURE__ */ new Map(), Yn = /* @__PURE__ */ new Map(), n_ = [], yu = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function dc(r, t) {
    switch (r) {
      case "focusin":
      case "focusout":
        Z_ = null;
        break;
      case "dragenter":
      case "dragleave":
        J_ = null;
        break;
      case "mouseover":
      case "mouseout":
        G_ = null;
        break;
      case "pointerover":
      case "pointerout":
        Hn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Yn.delete(t.pointerId);
    }
  }
  function kn(r, t, e, s, o, n) {
    return r === null || r.nativeEvent !== n ? (r = {
      blockedOn: t,
      domEventName: e,
      eventSystemFlags: s,
      nativeEvent: n,
      targetContainers: [
        o
      ]
    }, t !== null && (t = lo(t), t !== null && wi(t)), r) : (r.eventSystemFlags |= s, t = r.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), r);
  }
  function mu(r, t, e, s, o) {
    switch (t) {
      case "focusin":
        return Z_ = kn(Z_, r, t, e, s, o), true;
      case "dragenter":
        return J_ = kn(J_, r, t, e, s, o), true;
      case "mouseover":
        return G_ = kn(G_, r, t, e, s, o), true;
      case "pointerover":
        var n = o.pointerId;
        return Hn.set(n, kn(Hn.get(n) || null, r, t, e, s, o)), true;
      case "gotpointercapture":
        return n = o.pointerId, Yn.set(n, kn(Yn.get(n) || null, r, t, e, s, o)), true;
    }
    return false;
  }
  function Kd(r) {
    var t = br(r.target);
    if (t !== null) {
      var e = $r(t);
      if (e !== null) {
        if (t = e.tag, t === 13) {
          if (t = Ud(e), t !== null) {
            r.blockedOn = t, qd(r.priority, function() {
              Yd(e);
            });
            return;
          }
        } else if (t === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          r.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    r.blockedOn = null;
  }
  function Do(r) {
    if (r.blockedOn !== null) return false;
    for (var t = r.targetContainers; 0 < t.length; ) {
      var e = Ea(r.domEventName, r.eventSystemFlags, t[0], r.nativeEvent);
      if (e === null) {
        e = r.nativeEvent;
        var s = new e.constructor(e.type, e);
        ma = s, e.target.dispatchEvent(s), ma = null;
      } else return t = lo(e), t !== null && wi(t), r.blockedOn = e, false;
      t.shift();
    }
    return true;
  }
  function lc(r, t, e) {
    Do(r) && e.delete(t);
  }
  function vu() {
    Sa = false, Z_ !== null && Do(Z_) && (Z_ = null), J_ !== null && Do(J_) && (J_ = null), G_ !== null && Do(G_) && (G_ = null), Hn.forEach(lc), Yn.forEach(lc);
  }
  function xn(r, t) {
    r.blockedOn === t && (r.blockedOn = null, Sa || (Sa = true, Yt.unstable_scheduleCallback(Yt.unstable_NormalPriority, vu)));
  }
  function Xn(r) {
    function t(o) {
      return xn(o, r);
    }
    if (0 < vo.length) {
      xn(vo[0], r);
      for (var e = 1; e < vo.length; e++) {
        var s = vo[e];
        s.blockedOn === r && (s.blockedOn = null);
      }
    }
    for (Z_ !== null && xn(Z_, r), J_ !== null && xn(J_, r), G_ !== null && xn(G_, r), Hn.forEach(t), Yn.forEach(t), e = 0; e < n_.length; e++) s = n_[e], s.blockedOn === r && (s.blockedOn = null);
    for (; 0 < n_.length && (e = n_[0], e.blockedOn === null); ) Kd(e), e.blockedOn === null && n_.shift();
  }
  var _n = Je.ReactCurrentBatchConfig, Jo = true;
  function ku(r, t, e, s) {
    var o = H, n = _n.transition;
    _n.transition = null;
    try {
      H = 1, fi(r, t, e, s);
    } finally {
      H = o, _n.transition = n;
    }
  }
  function xu(r, t, e, s) {
    var o = H, n = _n.transition;
    _n.transition = null;
    try {
      H = 4, fi(r, t, e, s);
    } finally {
      H = o, _n.transition = n;
    }
  }
  function fi(r, t, e, s) {
    if (Jo) {
      var o = Ea(r, t, e, s);
      if (o === null) Zs(r, t, s, Go, e), dc(r, s);
      else if (mu(o, r, t, e, s)) s.stopPropagation();
      else if (dc(r, s), t & 4 && -1 < yu.indexOf(r)) {
        for (; o !== null; ) {
          var n = lo(o);
          if (n !== null && Hd(n), n = Ea(r, t, e, s), n === null && Zs(r, t, s, Go, e), n === o) break;
          o = n;
        }
        o !== null && s.stopPropagation();
      } else Zs(r, t, s, null, e);
    }
  }
  var Go = null;
  function Ea(r, t, e, s) {
    if (Go = null, r = li(s), r = br(r), r !== null) if (t = $r(r), t === null) r = null;
    else if (e = t.tag, e === 13) {
      if (r = Ud(t), r !== null) return r;
      r = null;
    } else if (e === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      r = null;
    } else t !== r && (r = null);
    return Go = r, null;
  }
  function Zd(r) {
    switch (r) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (du()) {
          case pi:
            return 1;
          case Qd:
            return 4;
          case Ko:
          case lu:
            return 16;
          case Vd:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var H_ = null, gi = null, $o = null;
  function Jd() {
    if ($o) return $o;
    var r, t = gi, e = t.length, s, o = "value" in H_ ? H_.value : H_.textContent, n = o.length;
    for (r = 0; r < e && t[r] === o[r]; r++) ;
    var c = e - r;
    for (s = 1; s <= c && t[e - s] === o[n - s]; s++) ;
    return $o = o.slice(r, 1 < s ? 1 - s : void 0);
  }
  function Uo(r) {
    var t = r.keyCode;
    return "charCode" in r ? (r = r.charCode, r === 0 && t === 13 && (r = 13)) : r = t, r === 10 && (r = 13), 32 <= r || r === 13 ? r : 0;
  }
  function ko() {
    return true;
  }
  function pc() {
    return false;
  }
  function Kt(r) {
    function t(e, s, o, n, c) {
      this._reactName = e, this._targetInst = o, this.type = s, this.nativeEvent = n, this.target = c, this.currentTarget = null;
      for (var d in r) r.hasOwnProperty(d) && (e = r[d], this[d] = e ? e(n) : n[d]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === false) ? ko : pc, this.isPropagationStopped = pc, this;
    }
    return _t(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = true;
        var e = this.nativeEvent;
        e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = false), this.isDefaultPrevented = ko);
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = true), this.isPropagationStopped = ko);
      },
      persist: function() {
      },
      isPersistent: ko
    }), t;
  }
  var gn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(r) {
      return r.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, bi = Kt(gn), co = _t({}, gn, {
    view: 0,
    detail: 0
  }), ju = Kt(co), Qs, Vs, jn, ys = _t({}, co, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: hi,
    button: 0,
    buttons: 0,
    relatedTarget: function(r) {
      return r.relatedTarget === void 0 ? r.fromElement === r.srcElement ? r.toElement : r.fromElement : r.relatedTarget;
    },
    movementX: function(r) {
      return "movementX" in r ? r.movementX : (r !== jn && (jn && r.type === "mousemove" ? (Qs = r.screenX - jn.screenX, Vs = r.screenY - jn.screenY) : Vs = Qs = 0, jn = r), Qs);
    },
    movementY: function(r) {
      return "movementY" in r ? r.movementY : Vs;
    }
  }), uc = Kt(ys), Su = _t({}, ys, {
    dataTransfer: 0
  }), Eu = Kt(Su), zu = _t({}, co, {
    relatedTarget: 0
  }), Bs = Kt(zu), Cu = _t({}, gn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ou = Kt(Cu), Lu = _t({}, gn, {
    clipboardData: function(r) {
      return "clipboardData" in r ? r.clipboardData : window.clipboardData;
    }
  }), Nu = Kt(Lu), Fu = _t({}, gn, {
    data: 0
  }), wc = Kt(Fu), Pu = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Tu = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Ru = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Du(r) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(r) : (r = Ru[r]) ? !!t[r] : false;
  }
  function hi() {
    return Du;
  }
  var $u = _t({}, co, {
    key: function(r) {
      if (r.key) {
        var t = Pu[r.key] || r.key;
        if (t !== "Unidentified") return t;
      }
      return r.type === "keypress" ? (r = Uo(r), r === 13 ? "Enter" : String.fromCharCode(r)) : r.type === "keydown" || r.type === "keyup" ? Tu[r.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: hi,
    charCode: function(r) {
      return r.type === "keypress" ? Uo(r) : 0;
    },
    keyCode: function(r) {
      return r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0;
    },
    which: function(r) {
      return r.type === "keypress" ? Uo(r) : r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0;
    }
  }), Uu = Kt($u), Mu = _t({}, ys, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), fc = Kt(Mu), Iu = _t({}, co, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: hi
  }), Wu = Kt(Iu), Qu = _t({}, gn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Vu = Kt(Qu), Bu = _t({}, ys, {
    deltaX: function(r) {
      return "deltaX" in r ? r.deltaX : "wheelDeltaX" in r ? -r.wheelDeltaX : 0;
    },
    deltaY: function(r) {
      return "deltaY" in r ? r.deltaY : "wheelDeltaY" in r ? -r.wheelDeltaY : "wheelDelta" in r ? -r.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Au = Kt(Bu), Hu = [
    9,
    13,
    27,
    32
  ], yi = Xe && "CompositionEvent" in window, Rn = null;
  Xe && "documentMode" in document && (Rn = document.documentMode);
  var Yu = Xe && "TextEvent" in window && !Rn, Gd = Xe && (!yi || Rn && 8 < Rn && 11 >= Rn), gc = " ", bc = false;
  function tl(r, t) {
    switch (r) {
      case "keyup":
        return Hu.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function el(r) {
    return r = r.detail, typeof r == "object" && "data" in r ? r.data : null;
  }
  var Qr = false;
  function Xu(r, t) {
    switch (r) {
      case "compositionend":
        return el(t);
      case "keypress":
        return t.which !== 32 ? null : (bc = true, gc);
      case "textInput":
        return r = t.data, r === gc && bc ? null : r;
      default:
        return null;
    }
  }
  function qu(r, t) {
    if (Qr) return r === "compositionend" || !yi && tl(r, t) ? (r = Jd(), $o = gi = H_ = null, Qr = false, r) : null;
    switch (r) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Gd && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Ku = {
    color: true,
    date: true,
    datetime: true,
    "datetime-local": true,
    email: true,
    month: true,
    number: true,
    password: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true
  };
  function hc(r) {
    var t = r && r.nodeName && r.nodeName.toLowerCase();
    return t === "input" ? !!Ku[r.type] : t === "textarea";
  }
  function _l(r, t, e, s) {
    Pd(s), t = ts(t, "onChange"), 0 < t.length && (e = new bi("onChange", "change", null, e, s), r.push({
      event: e,
      listeners: t
    }));
  }
  var Dn = null, qn = null;
  function Zu(r) {
    ul(r, 0);
  }
  function ms(r) {
    var t = Ar(r);
    if (Ed(t)) return r;
  }
  function Ju(r, t) {
    if (r === "change") return t;
  }
  var rl = false;
  if (Xe) {
    var As;
    if (Xe) {
      var Hs = "oninput" in document;
      if (!Hs) {
        var yc = document.createElement("div");
        yc.setAttribute("oninput", "return;"), Hs = typeof yc.oninput == "function";
      }
      As = Hs;
    } else As = false;
    rl = As && (!document.documentMode || 9 < document.documentMode);
  }
  function mc() {
    Dn && (Dn.detachEvent("onpropertychange", nl), qn = Dn = null);
  }
  function nl(r) {
    if (r.propertyName === "value" && ms(qn)) {
      var t = [];
      _l(t, qn, r, li(r)), $d(Zu, t);
    }
  }
  function Gu(r, t, e) {
    r === "focusin" ? (mc(), Dn = t, qn = e, Dn.attachEvent("onpropertychange", nl)) : r === "focusout" && mc();
  }
  function tw(r) {
    if (r === "selectionchange" || r === "keyup" || r === "keydown") return ms(qn);
  }
  function ew(r, t) {
    if (r === "click") return ms(t);
  }
  function _w(r, t) {
    if (r === "input" || r === "change") return ms(t);
  }
  function rw(r, t) {
    return r === t && (r !== 0 || 1 / r === 1 / t) || r !== r && t !== t;
  }
  var fe = typeof Object.is == "function" ? Object.is : rw;
  function Kn(r, t) {
    if (fe(r, t)) return true;
    if (typeof r != "object" || r === null || typeof t != "object" || t === null) return false;
    var e = Object.keys(r), s = Object.keys(t);
    if (e.length !== s.length) return false;
    for (s = 0; s < e.length; s++) {
      var o = e[s];
      if (!ia.call(t, o) || !fe(r[o], t[o])) return false;
    }
    return true;
  }
  function vc(r) {
    for (; r && r.firstChild; ) r = r.firstChild;
    return r;
  }
  function kc(r, t) {
    var e = vc(r);
    r = 0;
    for (var s; e; ) {
      if (e.nodeType === 3) {
        if (s = r + e.textContent.length, r <= t && s >= t) return {
          node: e,
          offset: t - r
        };
        r = s;
      }
      t: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break t;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = vc(e);
    }
  }
  function ol(r, t) {
    return r && t ? r === t ? true : r && r.nodeType === 3 ? false : t && t.nodeType === 3 ? ol(r, t.parentNode) : "contains" in r ? r.contains(t) : r.compareDocumentPosition ? !!(r.compareDocumentPosition(t) & 16) : false : false;
  }
  function sl() {
    for (var r = window, t = Yo(); t instanceof r.HTMLIFrameElement; ) {
      try {
        var e = typeof t.contentWindow.location.href == "string";
      } catch {
        e = false;
      }
      if (e) r = t.contentWindow;
      else break;
      t = Yo(r.document);
    }
    return t;
  }
  function mi(r) {
    var t = r && r.nodeName && r.nodeName.toLowerCase();
    return t && (t === "input" && (r.type === "text" || r.type === "search" || r.type === "tel" || r.type === "url" || r.type === "password") || t === "textarea" || r.contentEditable === "true");
  }
  function nw(r) {
    var t = sl(), e = r.focusedElem, s = r.selectionRange;
    if (t !== e && e && e.ownerDocument && ol(e.ownerDocument.documentElement, e)) {
      if (s !== null && mi(e)) {
        if (t = s.start, r = s.end, r === void 0 && (r = t), "selectionStart" in e) e.selectionStart = t, e.selectionEnd = Math.min(r, e.value.length);
        else if (r = (t = e.ownerDocument || document) && t.defaultView || window, r.getSelection) {
          r = r.getSelection();
          var o = e.textContent.length, n = Math.min(s.start, o);
          s = s.end === void 0 ? n : Math.min(s.end, o), !r.extend && n > s && (o = s, s = n, n = o), o = kc(e, n);
          var c = kc(e, s);
          o && c && (r.rangeCount !== 1 || r.anchorNode !== o.node || r.anchorOffset !== o.offset || r.focusNode !== c.node || r.focusOffset !== c.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), r.removeAllRanges(), n > s ? (r.addRange(t), r.extend(c.node, c.offset)) : (t.setEnd(c.node, c.offset), r.addRange(t)));
        }
      }
      for (t = [], r = e; r = r.parentNode; ) r.nodeType === 1 && t.push({
        element: r,
        left: r.scrollLeft,
        top: r.scrollTop
      });
      for (typeof e.focus == "function" && e.focus(), e = 0; e < t.length; e++) r = t[e], r.element.scrollLeft = r.left, r.element.scrollTop = r.top;
    }
  }
  var ow = Xe && "documentMode" in document && 11 >= document.documentMode, Vr = null, za = null, $n = null, Ca = false;
  function xc(r, t, e) {
    var s = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Ca || Vr == null || Vr !== Yo(s) || (s = Vr, "selectionStart" in s && mi(s) ? s = {
      start: s.selectionStart,
      end: s.selectionEnd
    } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = {
      anchorNode: s.anchorNode,
      anchorOffset: s.anchorOffset,
      focusNode: s.focusNode,
      focusOffset: s.focusOffset
    }), $n && Kn($n, s) || ($n = s, s = ts(za, "onSelect"), 0 < s.length && (t = new bi("onSelect", "select", null, t, e), r.push({
      event: t,
      listeners: s
    }), t.target = Vr)));
  }
  function xo(r, t) {
    var e = {};
    return e[r.toLowerCase()] = t.toLowerCase(), e["Webkit" + r] = "webkit" + t, e["Moz" + r] = "moz" + t, e;
  }
  var Br = {
    animationend: xo("Animation", "AnimationEnd"),
    animationiteration: xo("Animation", "AnimationIteration"),
    animationstart: xo("Animation", "AnimationStart"),
    transitionend: xo("Transition", "TransitionEnd")
  }, Ys = {}, al = {};
  Xe && (al = document.createElement("div").style, "AnimationEvent" in window || (delete Br.animationend.animation, delete Br.animationiteration.animation, delete Br.animationstart.animation), "TransitionEvent" in window || delete Br.transitionend.transition);
  function vs(r) {
    if (Ys[r]) return Ys[r];
    if (!Br[r]) return r;
    var t = Br[r], e;
    for (e in t) if (t.hasOwnProperty(e) && e in al) return Ys[r] = t[e];
    return r;
  }
  var il = vs("animationend"), cl = vs("animationiteration"), dl = vs("animationstart"), ll = vs("transitionend"), pl = /* @__PURE__ */ new Map(), jc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ar(r, t) {
    pl.set(r, t), Dr(t, [
      r
    ]);
  }
  for (var Xs = 0; Xs < jc.length; Xs++) {
    var qs = jc[Xs], sw = qs.toLowerCase(), aw = qs[0].toUpperCase() + qs.slice(1);
    ar(sw, "on" + aw);
  }
  ar(il, "onAnimationEnd");
  ar(cl, "onAnimationIteration");
  ar(dl, "onAnimationStart");
  ar("dblclick", "onDoubleClick");
  ar("focusin", "onFocus");
  ar("focusout", "onBlur");
  ar(ll, "onTransitionEnd");
  an("onMouseEnter", [
    "mouseout",
    "mouseover"
  ]);
  an("onMouseLeave", [
    "mouseout",
    "mouseover"
  ]);
  an("onPointerEnter", [
    "pointerout",
    "pointerover"
  ]);
  an("onPointerLeave", [
    "pointerout",
    "pointerover"
  ]);
  Dr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  Dr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  Dr("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]);
  Dr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  Dr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  Dr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Fn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), iw = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fn));
  function Sc(r, t, e) {
    var s = r.type || "unknown-event";
    r.currentTarget = e, su(s, t, void 0, r), r.currentTarget = null;
  }
  function ul(r, t) {
    t = (t & 4) !== 0;
    for (var e = 0; e < r.length; e++) {
      var s = r[e], o = s.event;
      s = s.listeners;
      t: {
        var n = void 0;
        if (t) for (var c = s.length - 1; 0 <= c; c--) {
          var d = s[c], p = d.instance, l = d.currentTarget;
          if (d = d.listener, p !== n && o.isPropagationStopped()) break t;
          Sc(o, d, l), n = p;
        }
        else for (c = 0; c < s.length; c++) {
          if (d = s[c], p = d.instance, l = d.currentTarget, d = d.listener, p !== n && o.isPropagationStopped()) break t;
          Sc(o, d, l), n = p;
        }
      }
    }
    if (qo) throw r = xa, qo = false, xa = null, r;
  }
  function q(r, t) {
    var e = t[Pa];
    e === void 0 && (e = t[Pa] = /* @__PURE__ */ new Set());
    var s = r + "__bubble";
    e.has(s) || (wl(t, r, 2, false), e.add(s));
  }
  function Ks(r, t, e) {
    var s = 0;
    t && (s |= 4), wl(e, r, s, t);
  }
  var jo = "_reactListening" + Math.random().toString(36).slice(2);
  function Zn(r) {
    if (!r[jo]) {
      r[jo] = true, vd.forEach(function(e) {
        e !== "selectionchange" && (iw.has(e) || Ks(e, false, r), Ks(e, true, r));
      });
      var t = r.nodeType === 9 ? r : r.ownerDocument;
      t === null || t[jo] || (t[jo] = true, Ks("selectionchange", false, t));
    }
  }
  function wl(r, t, e, s) {
    switch (Zd(t)) {
      case 1:
        var o = ku;
        break;
      case 4:
        o = xu;
        break;
      default:
        o = fi;
    }
    e = o.bind(null, t, e, r), o = void 0, !ka || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = true), s ? o !== void 0 ? r.addEventListener(t, e, {
      capture: true,
      passive: o
    }) : r.addEventListener(t, e, true) : o !== void 0 ? r.addEventListener(t, e, {
      passive: o
    }) : r.addEventListener(t, e, false);
  }
  function Zs(r, t, e, s, o) {
    var n = s;
    if (!(t & 1) && !(t & 2) && s !== null) t: for (; ; ) {
      if (s === null) return;
      var c = s.tag;
      if (c === 3 || c === 4) {
        var d = s.stateNode.containerInfo;
        if (d === o || d.nodeType === 8 && d.parentNode === o) break;
        if (c === 4) for (c = s.return; c !== null; ) {
          var p = c.tag;
          if ((p === 3 || p === 4) && (p = c.stateNode.containerInfo, p === o || p.nodeType === 8 && p.parentNode === o)) return;
          c = c.return;
        }
        for (; d !== null; ) {
          if (c = br(d), c === null) return;
          if (p = c.tag, p === 5 || p === 6) {
            s = n = c;
            continue t;
          }
          d = d.parentNode;
        }
      }
      s = s.return;
    }
    $d(function() {
      var l = n, y = li(e), x = [];
      t: {
        var k = pl.get(r);
        if (k !== void 0) {
          var O = bi, L = r;
          switch (r) {
            case "keypress":
              if (Uo(e) === 0) break t;
            case "keydown":
            case "keyup":
              O = Uu;
              break;
            case "focusin":
              L = "focus", O = Bs;
              break;
            case "focusout":
              L = "blur", O = Bs;
              break;
            case "beforeblur":
            case "afterblur":
              O = Bs;
              break;
            case "click":
              if (e.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              O = uc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              O = Eu;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              O = Wu;
              break;
            case il:
            case cl:
            case dl:
              O = Ou;
              break;
            case ll:
              O = Vu;
              break;
            case "scroll":
              O = ju;
              break;
            case "wheel":
              O = Au;
              break;
            case "copy":
            case "cut":
            case "paste":
              O = Nu;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              O = fc;
          }
          var N = (t & 4) !== 0, A = !N && r === "scroll", m = N ? k !== null ? k + "Capture" : null : k;
          N = [];
          for (var h = l, v; h !== null; ) {
            v = h;
            var E = v.stateNode;
            if (v.tag === 5 && E !== null && (v = E, m !== null && (E = An(h, m), E != null && N.push(Jn(h, E, v)))), A) break;
            h = h.return;
          }
          0 < N.length && (k = new O(k, L, null, e, y), x.push({
            event: k,
            listeners: N
          }));
        }
      }
      if (!(t & 7)) {
        t: {
          if (k = r === "mouseover" || r === "pointerover", O = r === "mouseout" || r === "pointerout", k && e !== ma && (L = e.relatedTarget || e.fromElement) && (br(L) || L[qe])) break t;
          if ((O || k) && (k = y.window === y ? y : (k = y.ownerDocument) ? k.defaultView || k.parentWindow : window, O ? (L = e.relatedTarget || e.toElement, O = l, L = L ? br(L) : null, L !== null && (A = $r(L), L !== A || L.tag !== 5 && L.tag !== 6) && (L = null)) : (O = null, L = l), O !== L)) {
            if (N = uc, E = "onMouseLeave", m = "onMouseEnter", h = "mouse", (r === "pointerout" || r === "pointerover") && (N = fc, E = "onPointerLeave", m = "onPointerEnter", h = "pointer"), A = O == null ? k : Ar(O), v = L == null ? k : Ar(L), k = new N(E, h + "leave", O, e, y), k.target = A, k.relatedTarget = v, E = null, br(y) === l && (N = new N(m, h + "enter", L, e, y), N.target = v, N.relatedTarget = A, E = N), A = E, O && L) e: {
              for (N = O, m = L, h = 0, v = N; v; v = Ur(v)) h++;
              for (v = 0, E = m; E; E = Ur(E)) v++;
              for (; 0 < h - v; ) N = Ur(N), h--;
              for (; 0 < v - h; ) m = Ur(m), v--;
              for (; h--; ) {
                if (N === m || m !== null && N === m.alternate) break e;
                N = Ur(N), m = Ur(m);
              }
              N = null;
            }
            else N = null;
            O !== null && Ec(x, k, O, N, false), L !== null && A !== null && Ec(x, A, L, N, true);
          }
        }
        t: {
          if (k = l ? Ar(l) : window, O = k.nodeName && k.nodeName.toLowerCase(), O === "select" || O === "input" && k.type === "file") var F = Ju;
          else if (hc(k)) if (rl) F = _w;
          else {
            F = tw;
            var R = Gu;
          }
          else (O = k.nodeName) && O.toLowerCase() === "input" && (k.type === "checkbox" || k.type === "radio") && (F = ew);
          if (F && (F = F(r, l))) {
            _l(x, F, e, y);
            break t;
          }
          R && R(r, k, l), r === "focusout" && (R = k._wrapperState) && R.controlled && k.type === "number" && fa(k, "number", k.value);
        }
        switch (R = l ? Ar(l) : window, r) {
          case "focusin":
            (hc(R) || R.contentEditable === "true") && (Vr = R, za = l, $n = null);
            break;
          case "focusout":
            $n = za = Vr = null;
            break;
          case "mousedown":
            Ca = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ca = false, xc(x, e, y);
            break;
          case "selectionchange":
            if (ow) break;
          case "keydown":
          case "keyup":
            xc(x, e, y);
        }
        var D;
        if (yi) t: {
          switch (r) {
            case "compositionstart":
              var $ = "onCompositionStart";
              break t;
            case "compositionend":
              $ = "onCompositionEnd";
              break t;
            case "compositionupdate":
              $ = "onCompositionUpdate";
              break t;
          }
          $ = void 0;
        }
        else Qr ? tl(r, e) && ($ = "onCompositionEnd") : r === "keydown" && e.keyCode === 229 && ($ = "onCompositionStart");
        $ && (Gd && e.locale !== "ko" && (Qr || $ !== "onCompositionStart" ? $ === "onCompositionEnd" && Qr && (D = Jd()) : (H_ = y, gi = "value" in H_ ? H_.value : H_.textContent, Qr = true)), R = ts(l, $), 0 < R.length && ($ = new wc($, r, null, e, y), x.push({
          event: $,
          listeners: R
        }), D ? $.data = D : (D = el(e), D !== null && ($.data = D)))), (D = Yu ? Xu(r, e) : qu(r, e)) && (l = ts(l, "onBeforeInput"), 0 < l.length && (y = new wc("onBeforeInput", "beforeinput", null, e, y), x.push({
          event: y,
          listeners: l
        }), y.data = D));
      }
      ul(x, t);
    });
  }
  function Jn(r, t, e) {
    return {
      instance: r,
      listener: t,
      currentTarget: e
    };
  }
  function ts(r, t) {
    for (var e = t + "Capture", s = []; r !== null; ) {
      var o = r, n = o.stateNode;
      o.tag === 5 && n !== null && (o = n, n = An(r, e), n != null && s.unshift(Jn(r, n, o)), n = An(r, t), n != null && s.push(Jn(r, n, o))), r = r.return;
    }
    return s;
  }
  function Ur(r) {
    if (r === null) return null;
    do
      r = r.return;
    while (r && r.tag !== 5);
    return r || null;
  }
  function Ec(r, t, e, s, o) {
    for (var n = t._reactName, c = []; e !== null && e !== s; ) {
      var d = e, p = d.alternate, l = d.stateNode;
      if (p !== null && p === s) break;
      d.tag === 5 && l !== null && (d = l, o ? (p = An(e, n), p != null && c.unshift(Jn(e, p, d))) : o || (p = An(e, n), p != null && c.push(Jn(e, p, d)))), e = e.return;
    }
    c.length !== 0 && r.push({
      event: t,
      listeners: c
    });
  }
  var cw = /\r\n?/g, dw = /\u0000|\uFFFD/g;
  function zc(r) {
    return (typeof r == "string" ? r : "" + r).replace(cw, `
`).replace(dw, "");
  }
  function So(r, t, e) {
    if (t = zc(t), zc(r) !== t && e) throw Error(z(425));
  }
  function es() {
  }
  var Oa = null, La = null;
  function Na(r, t) {
    return r === "textarea" || r === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Fa = typeof setTimeout == "function" ? setTimeout : void 0, lw = typeof clearTimeout == "function" ? clearTimeout : void 0, Cc = typeof Promise == "function" ? Promise : void 0, pw = typeof queueMicrotask == "function" ? queueMicrotask : typeof Cc < "u" ? function(r) {
    return Cc.resolve(null).then(r).catch(uw);
  } : Fa;
  function uw(r) {
    setTimeout(function() {
      throw r;
    });
  }
  function Js(r, t) {
    var e = t, s = 0;
    do {
      var o = e.nextSibling;
      if (r.removeChild(e), o && o.nodeType === 8) if (e = o.data, e === "/$") {
        if (s === 0) {
          r.removeChild(o), Xn(t);
          return;
        }
        s--;
      } else e !== "$" && e !== "$?" && e !== "$!" || s++;
      e = o;
    } while (e);
    Xn(t);
  }
  function tr(r) {
    for (; r != null; r = r.nextSibling) {
      var t = r.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = r.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return r;
  }
  function Oc(r) {
    r = r.previousSibling;
    for (var t = 0; r; ) {
      if (r.nodeType === 8) {
        var e = r.data;
        if (e === "$" || e === "$!" || e === "$?") {
          if (t === 0) return r;
          t--;
        } else e === "/$" && t++;
      }
      r = r.previousSibling;
    }
    return null;
  }
  var bn = Math.random().toString(36).slice(2), ve = "__reactFiber$" + bn, Gn = "__reactProps$" + bn, qe = "__reactContainer$" + bn, Pa = "__reactEvents$" + bn, ww = "__reactListeners$" + bn, fw = "__reactHandles$" + bn;
  function br(r) {
    var t = r[ve];
    if (t) return t;
    for (var e = r.parentNode; e; ) {
      if (t = e[qe] || e[ve]) {
        if (e = t.alternate, t.child !== null || e !== null && e.child !== null) for (r = Oc(r); r !== null; ) {
          if (e = r[ve]) return e;
          r = Oc(r);
        }
        return t;
      }
      r = e, e = r.parentNode;
    }
    return null;
  }
  function lo(r) {
    return r = r[ve] || r[qe], !r || r.tag !== 5 && r.tag !== 6 && r.tag !== 13 && r.tag !== 3 ? null : r;
  }
  function Ar(r) {
    if (r.tag === 5 || r.tag === 6) return r.stateNode;
    throw Error(z(33));
  }
  function ks(r) {
    return r[Gn] || null;
  }
  var Ta = [], Hr = -1;
  function ir(r) {
    return {
      current: r
    };
  }
  function Z(r) {
    0 > Hr || (r.current = Ta[Hr], Ta[Hr] = null, Hr--);
  }
  function X(r, t) {
    Hr++, Ta[Hr] = r.current, r.current = t;
  }
  var sr = {}, Et = ir(sr), It = ir(false), Nr = sr;
  function cn(r, t) {
    var e = r.type.contextTypes;
    if (!e) return sr;
    var s = r.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === t) return s.__reactInternalMemoizedMaskedChildContext;
    var o = {}, n;
    for (n in e) o[n] = t[n];
    return s && (r = r.stateNode, r.__reactInternalMemoizedUnmaskedChildContext = t, r.__reactInternalMemoizedMaskedChildContext = o), o;
  }
  function Wt(r) {
    return r = r.childContextTypes, r != null;
  }
  function _s() {
    Z(It), Z(Et);
  }
  function Lc(r, t, e) {
    if (Et.current !== sr) throw Error(z(168));
    X(Et, t), X(It, e);
  }
  function fl(r, t, e) {
    var s = r.stateNode;
    if (t = t.childContextTypes, typeof s.getChildContext != "function") return e;
    s = s.getChildContext();
    for (var o in s) if (!(o in t)) throw Error(z(108, Gp(r) || "Unknown", o));
    return _t({}, e, s);
  }
  function rs(r) {
    return r = (r = r.stateNode) && r.__reactInternalMemoizedMergedChildContext || sr, Nr = Et.current, X(Et, r), X(It, It.current), true;
  }
  function Nc(r, t, e) {
    var s = r.stateNode;
    if (!s) throw Error(z(169));
    e ? (r = fl(r, t, Nr), s.__reactInternalMemoizedMergedChildContext = r, Z(It), Z(Et), X(Et, r)) : Z(It), X(It, e);
  }
  var Fe = null, xs = false, Gs = false;
  function gl(r) {
    Fe === null ? Fe = [
      r
    ] : Fe.push(r);
  }
  function gw(r) {
    xs = true, gl(r);
  }
  function cr() {
    if (!Gs && Fe !== null) {
      Gs = true;
      var r = 0, t = H;
      try {
        var e = Fe;
        for (H = 1; r < e.length; r++) {
          var s = e[r];
          do
            s = s(true);
          while (s !== null);
        }
        Fe = null, xs = false;
      } catch (o) {
        throw Fe !== null && (Fe = Fe.slice(r + 1)), Wd(pi, cr), o;
      } finally {
        H = t, Gs = false;
      }
    }
    return null;
  }
  var Yr = [], Xr = 0, ns = null, os = 0, Zt = [], Jt = 0, Fr = null, Be = 1, Ae = "";
  function pr(r, t) {
    Yr[Xr++] = os, Yr[Xr++] = ns, ns = r, os = t;
  }
  function bl(r, t, e) {
    Zt[Jt++] = Be, Zt[Jt++] = Ae, Zt[Jt++] = Fr, Fr = r;
    var s = Be;
    r = Ae;
    var o = 32 - ue(s) - 1;
    s &= ~(1 << o), e += 1;
    var n = 32 - ue(t) + o;
    if (30 < n) {
      var c = o - o % 5;
      n = (s & (1 << c) - 1).toString(32), s >>= c, o -= c, Be = 1 << 32 - ue(t) + o | e << o | s, Ae = n + r;
    } else Be = 1 << n | e << o | s, Ae = r;
  }
  function vi(r) {
    r.return !== null && (pr(r, 1), bl(r, 1, 0));
  }
  function ki(r) {
    for (; r === ns; ) ns = Yr[--Xr], Yr[Xr] = null, os = Yr[--Xr], Yr[Xr] = null;
    for (; r === Fr; ) Fr = Zt[--Jt], Zt[Jt] = null, Ae = Zt[--Jt], Zt[Jt] = null, Be = Zt[--Jt], Zt[Jt] = null;
  }
  var Ht = null, At = null, J = false, de = null;
  function hl(r, t) {
    var e = te(5, null, null, 0);
    e.elementType = "DELETED", e.stateNode = t, e.return = r, t = r.deletions, t === null ? (r.deletions = [
      e
    ], r.flags |= 16) : t.push(e);
  }
  function Fc(r, t) {
    switch (r.tag) {
      case 5:
        var e = r.type;
        return t = t.nodeType !== 1 || e.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (r.stateNode = t, Ht = r, At = tr(t.firstChild), true) : false;
      case 6:
        return t = r.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (r.stateNode = t, Ht = r, At = null, true) : false;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (e = Fr !== null ? {
          id: Be,
          overflow: Ae
        } : null, r.memoizedState = {
          dehydrated: t,
          treeContext: e,
          retryLane: 1073741824
        }, e = te(18, null, null, 0), e.stateNode = t, e.return = r, r.child = e, Ht = r, At = null, true) : false;
      default:
        return false;
    }
  }
  function Ra(r) {
    return (r.mode & 1) !== 0 && (r.flags & 128) === 0;
  }
  function Da(r) {
    if (J) {
      var t = At;
      if (t) {
        var e = t;
        if (!Fc(r, t)) {
          if (Ra(r)) throw Error(z(418));
          t = tr(e.nextSibling);
          var s = Ht;
          t && Fc(r, t) ? hl(s, e) : (r.flags = r.flags & -4097 | 2, J = false, Ht = r);
        }
      } else {
        if (Ra(r)) throw Error(z(418));
        r.flags = r.flags & -4097 | 2, J = false, Ht = r;
      }
    }
  }
  function Pc(r) {
    for (r = r.return; r !== null && r.tag !== 5 && r.tag !== 3 && r.tag !== 13; ) r = r.return;
    Ht = r;
  }
  function Eo(r) {
    if (r !== Ht) return false;
    if (!J) return Pc(r), J = true, false;
    var t;
    if ((t = r.tag !== 3) && !(t = r.tag !== 5) && (t = r.type, t = t !== "head" && t !== "body" && !Na(r.type, r.memoizedProps)), t && (t = At)) {
      if (Ra(r)) throw yl(), Error(z(418));
      for (; t; ) hl(r, t), t = tr(t.nextSibling);
    }
    if (Pc(r), r.tag === 13) {
      if (r = r.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(z(317));
      t: {
        for (r = r.nextSibling, t = 0; r; ) {
          if (r.nodeType === 8) {
            var e = r.data;
            if (e === "/$") {
              if (t === 0) {
                At = tr(r.nextSibling);
                break t;
              }
              t--;
            } else e !== "$" && e !== "$!" && e !== "$?" || t++;
          }
          r = r.nextSibling;
        }
        At = null;
      }
    } else At = Ht ? tr(r.stateNode.nextSibling) : null;
    return true;
  }
  function yl() {
    for (var r = At; r; ) r = tr(r.nextSibling);
  }
  function dn() {
    At = Ht = null, J = false;
  }
  function xi(r) {
    de === null ? de = [
      r
    ] : de.push(r);
  }
  var bw = Je.ReactCurrentBatchConfig;
  function Sn(r, t, e) {
    if (r = e.ref, r !== null && typeof r != "function" && typeof r != "object") {
      if (e._owner) {
        if (e = e._owner, e) {
          if (e.tag !== 1) throw Error(z(309));
          var s = e.stateNode;
        }
        if (!s) throw Error(z(147, r));
        var o = s, n = "" + r;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === n ? t.ref : (t = function(c) {
          var d = o.refs;
          c === null ? delete d[n] : d[n] = c;
        }, t._stringRef = n, t);
      }
      if (typeof r != "string") throw Error(z(284));
      if (!e._owner) throw Error(z(290, r));
    }
    return r;
  }
  function zo(r, t) {
    throw r = Object.prototype.toString.call(t), Error(z(31, r === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : r));
  }
  function Tc(r) {
    var t = r._init;
    return t(r._payload);
  }
  function ml(r) {
    function t(m, h) {
      if (r) {
        var v = m.deletions;
        v === null ? (m.deletions = [
          h
        ], m.flags |= 16) : v.push(h);
      }
    }
    function e(m, h) {
      if (!r) return null;
      for (; h !== null; ) t(m, h), h = h.sibling;
      return null;
    }
    function s(m, h) {
      for (m = /* @__PURE__ */ new Map(); h !== null; ) h.key !== null ? m.set(h.key, h) : m.set(h.index, h), h = h.sibling;
      return m;
    }
    function o(m, h) {
      return m = nr(m, h), m.index = 0, m.sibling = null, m;
    }
    function n(m, h, v) {
      return m.index = v, r ? (v = m.alternate, v !== null ? (v = v.index, v < h ? (m.flags |= 2, h) : v) : (m.flags |= 2, h)) : (m.flags |= 1048576, h);
    }
    function c(m) {
      return r && m.alternate === null && (m.flags |= 2), m;
    }
    function d(m, h, v, E) {
      return h === null || h.tag !== 6 ? (h = sa(v, m.mode, E), h.return = m, h) : (h = o(h, v), h.return = m, h);
    }
    function p(m, h, v, E) {
      var F = v.type;
      return F === Wr ? y(m, h, v.props.children, E, v.key) : h !== null && (h.elementType === F || typeof F == "object" && F !== null && F.$$typeof === e_ && Tc(F) === h.type) ? (E = o(h, v.props), E.ref = Sn(m, h, v), E.return = m, E) : (E = Ao(v.type, v.key, v.props, null, m.mode, E), E.ref = Sn(m, h, v), E.return = m, E);
    }
    function l(m, h, v, E) {
      return h === null || h.tag !== 4 || h.stateNode.containerInfo !== v.containerInfo || h.stateNode.implementation !== v.implementation ? (h = aa(v, m.mode, E), h.return = m, h) : (h = o(h, v.children || []), h.return = m, h);
    }
    function y(m, h, v, E, F) {
      return h === null || h.tag !== 7 ? (h = Lr(v, m.mode, E, F), h.return = m, h) : (h = o(h, v), h.return = m, h);
    }
    function x(m, h, v) {
      if (typeof h == "string" && h !== "" || typeof h == "number") return h = sa("" + h, m.mode, v), h.return = m, h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case go:
            return v = Ao(h.type, h.key, h.props, null, m.mode, v), v.ref = Sn(m, null, h), v.return = m, v;
          case Ir:
            return h = aa(h, m.mode, v), h.return = m, h;
          case e_:
            var E = h._init;
            return x(m, E(h._payload), v);
        }
        if (Ln(h) || mn(h)) return h = Lr(h, m.mode, v, null), h.return = m, h;
        zo(m, h);
      }
      return null;
    }
    function k(m, h, v, E) {
      var F = h !== null ? h.key : null;
      if (typeof v == "string" && v !== "" || typeof v == "number") return F !== null ? null : d(m, h, "" + v, E);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case go:
            return v.key === F ? p(m, h, v, E) : null;
          case Ir:
            return v.key === F ? l(m, h, v, E) : null;
          case e_:
            return F = v._init, k(m, h, F(v._payload), E);
        }
        if (Ln(v) || mn(v)) return F !== null ? null : y(m, h, v, E, null);
        zo(m, v);
      }
      return null;
    }
    function O(m, h, v, E, F) {
      if (typeof E == "string" && E !== "" || typeof E == "number") return m = m.get(v) || null, d(h, m, "" + E, F);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case go:
            return m = m.get(E.key === null ? v : E.key) || null, p(h, m, E, F);
          case Ir:
            return m = m.get(E.key === null ? v : E.key) || null, l(h, m, E, F);
          case e_:
            var R = E._init;
            return O(m, h, v, R(E._payload), F);
        }
        if (Ln(E) || mn(E)) return m = m.get(v) || null, y(h, m, E, F, null);
        zo(h, E);
      }
      return null;
    }
    function L(m, h, v, E) {
      for (var F = null, R = null, D = h, $ = h = 0, G = null; D !== null && $ < v.length; $++) {
        D.index > $ ? (G = D, D = null) : G = D.sibling;
        var W = k(m, D, v[$], E);
        if (W === null) {
          D === null && (D = G);
          break;
        }
        r && D && W.alternate === null && t(m, D), h = n(W, h, $), R === null ? F = W : R.sibling = W, R = W, D = G;
      }
      if ($ === v.length) return e(m, D), J && pr(m, $), F;
      if (D === null) {
        for (; $ < v.length; $++) D = x(m, v[$], E), D !== null && (h = n(D, h, $), R === null ? F = D : R.sibling = D, R = D);
        return J && pr(m, $), F;
      }
      for (D = s(m, D); $ < v.length; $++) G = O(D, m, $, v[$], E), G !== null && (r && G.alternate !== null && D.delete(G.key === null ? $ : G.key), h = n(G, h, $), R === null ? F = G : R.sibling = G, R = G);
      return r && D.forEach(function(oe) {
        return t(m, oe);
      }), J && pr(m, $), F;
    }
    function N(m, h, v, E) {
      var F = mn(v);
      if (typeof F != "function") throw Error(z(150));
      if (v = F.call(v), v == null) throw Error(z(151));
      for (var R = F = null, D = h, $ = h = 0, G = null, W = v.next(); D !== null && !W.done; $++, W = v.next()) {
        D.index > $ ? (G = D, D = null) : G = D.sibling;
        var oe = k(m, D, W.value, E);
        if (oe === null) {
          D === null && (D = G);
          break;
        }
        r && D && oe.alternate === null && t(m, D), h = n(oe, h, $), R === null ? F = oe : R.sibling = oe, R = oe, D = G;
      }
      if (W.done) return e(m, D), J && pr(m, $), F;
      if (D === null) {
        for (; !W.done; $++, W = v.next()) W = x(m, W.value, E), W !== null && (h = n(W, h, $), R === null ? F = W : R.sibling = W, R = W);
        return J && pr(m, $), F;
      }
      for (D = s(m, D); !W.done; $++, W = v.next()) W = O(D, m, $, W.value, E), W !== null && (r && W.alternate !== null && D.delete(W.key === null ? $ : W.key), h = n(W, h, $), R === null ? F = W : R.sibling = W, R = W);
      return r && D.forEach(function(hn) {
        return t(m, hn);
      }), J && pr(m, $), F;
    }
    function A(m, h, v, E) {
      if (typeof v == "object" && v !== null && v.type === Wr && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case go:
            t: {
              for (var F = v.key, R = h; R !== null; ) {
                if (R.key === F) {
                  if (F = v.type, F === Wr) {
                    if (R.tag === 7) {
                      e(m, R.sibling), h = o(R, v.props.children), h.return = m, m = h;
                      break t;
                    }
                  } else if (R.elementType === F || typeof F == "object" && F !== null && F.$$typeof === e_ && Tc(F) === R.type) {
                    e(m, R.sibling), h = o(R, v.props), h.ref = Sn(m, R, v), h.return = m, m = h;
                    break t;
                  }
                  e(m, R);
                  break;
                } else t(m, R);
                R = R.sibling;
              }
              v.type === Wr ? (h = Lr(v.props.children, m.mode, E, v.key), h.return = m, m = h) : (E = Ao(v.type, v.key, v.props, null, m.mode, E), E.ref = Sn(m, h, v), E.return = m, m = E);
            }
            return c(m);
          case Ir:
            t: {
              for (R = v.key; h !== null; ) {
                if (h.key === R) if (h.tag === 4 && h.stateNode.containerInfo === v.containerInfo && h.stateNode.implementation === v.implementation) {
                  e(m, h.sibling), h = o(h, v.children || []), h.return = m, m = h;
                  break t;
                } else {
                  e(m, h);
                  break;
                }
                else t(m, h);
                h = h.sibling;
              }
              h = aa(v, m.mode, E), h.return = m, m = h;
            }
            return c(m);
          case e_:
            return R = v._init, A(m, h, R(v._payload), E);
        }
        if (Ln(v)) return L(m, h, v, E);
        if (mn(v)) return N(m, h, v, E);
        zo(m, v);
      }
      return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, h !== null && h.tag === 6 ? (e(m, h.sibling), h = o(h, v), h.return = m, m = h) : (e(m, h), h = sa(v, m.mode, E), h.return = m, m = h), c(m)) : e(m, h);
    }
    return A;
  }
  var ln = ml(true), vl = ml(false), ss = ir(null), as = null, qr = null, ji = null;
  function Si() {
    ji = qr = as = null;
  }
  function Ei(r) {
    var t = ss.current;
    Z(ss), r._currentValue = t;
  }
  function $a(r, t, e) {
    for (; r !== null; ) {
      var s = r.alternate;
      if ((r.childLanes & t) !== t ? (r.childLanes |= t, s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t), r === e) break;
      r = r.return;
    }
  }
  function rn(r, t) {
    as = r, ji = qr = null, r = r.dependencies, r !== null && r.firstContext !== null && (r.lanes & t && (Mt = true), r.firstContext = null);
  }
  function re(r) {
    var t = r._currentValue;
    if (ji !== r) if (r = {
      context: r,
      memoizedValue: t,
      next: null
    }, qr === null) {
      if (as === null) throw Error(z(308));
      qr = r, as.dependencies = {
        lanes: 0,
        firstContext: r
      };
    } else qr = qr.next = r;
    return t;
  }
  var hr = null;
  function zi(r) {
    hr === null ? hr = [
      r
    ] : hr.push(r);
  }
  function kl(r, t, e, s) {
    var o = t.interleaved;
    return o === null ? (e.next = e, zi(t)) : (e.next = o.next, o.next = e), t.interleaved = e, Ke(r, s);
  }
  function Ke(r, t) {
    r.lanes |= t;
    var e = r.alternate;
    for (e !== null && (e.lanes |= t), e = r, r = r.return; r !== null; ) r.childLanes |= t, e = r.alternate, e !== null && (e.childLanes |= t), e = r, r = r.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var __ = false;
  function Ci(r) {
    r.updateQueue = {
      baseState: r.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        interleaved: null,
        lanes: 0
      },
      effects: null
    };
  }
  function xl(r, t) {
    r = r.updateQueue, t.updateQueue === r && (t.updateQueue = {
      baseState: r.baseState,
      firstBaseUpdate: r.firstBaseUpdate,
      lastBaseUpdate: r.lastBaseUpdate,
      shared: r.shared,
      effects: r.effects
    });
  }
  function Ye(r, t) {
    return {
      eventTime: r,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function er(r, t, e) {
    var s = r.updateQueue;
    if (s === null) return null;
    if (s = s.shared, B & 2) {
      var o = s.pending;
      return o === null ? t.next = t : (t.next = o.next, o.next = t), s.pending = t, Ke(r, e);
    }
    return o = s.interleaved, o === null ? (t.next = t, zi(s)) : (t.next = o.next, o.next = t), s.interleaved = t, Ke(r, e);
  }
  function Mo(r, t, e) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (e & 4194240) !== 0)) {
      var s = t.lanes;
      s &= r.pendingLanes, e |= s, t.lanes = e, ui(r, e);
    }
  }
  function Rc(r, t) {
    var e = r.updateQueue, s = r.alternate;
    if (s !== null && (s = s.updateQueue, e === s)) {
      var o = null, n = null;
      if (e = e.firstBaseUpdate, e !== null) {
        do {
          var c = {
            eventTime: e.eventTime,
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: e.callback,
            next: null
          };
          n === null ? o = n = c : n = n.next = c, e = e.next;
        } while (e !== null);
        n === null ? o = n = t : n = n.next = t;
      } else o = n = t;
      e = {
        baseState: s.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: n,
        shared: s.shared,
        effects: s.effects
      }, r.updateQueue = e;
      return;
    }
    r = e.lastBaseUpdate, r === null ? e.firstBaseUpdate = t : r.next = t, e.lastBaseUpdate = t;
  }
  function is(r, t, e, s) {
    var o = r.updateQueue;
    __ = false;
    var n = o.firstBaseUpdate, c = o.lastBaseUpdate, d = o.shared.pending;
    if (d !== null) {
      o.shared.pending = null;
      var p = d, l = p.next;
      p.next = null, c === null ? n = l : c.next = l, c = p;
      var y = r.alternate;
      y !== null && (y = y.updateQueue, d = y.lastBaseUpdate, d !== c && (d === null ? y.firstBaseUpdate = l : d.next = l, y.lastBaseUpdate = p));
    }
    if (n !== null) {
      var x = o.baseState;
      c = 0, y = l = p = null, d = n;
      do {
        var k = d.lane, O = d.eventTime;
        if ((s & k) === k) {
          y !== null && (y = y.next = {
            eventTime: O,
            lane: 0,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null
          });
          t: {
            var L = r, N = d;
            switch (k = t, O = e, N.tag) {
              case 1:
                if (L = N.payload, typeof L == "function") {
                  x = L.call(O, x, k);
                  break t;
                }
                x = L;
                break t;
              case 3:
                L.flags = L.flags & -65537 | 128;
              case 0:
                if (L = N.payload, k = typeof L == "function" ? L.call(O, x, k) : L, k == null) break t;
                x = _t({}, x, k);
                break t;
              case 2:
                __ = true;
            }
          }
          d.callback !== null && d.lane !== 0 && (r.flags |= 64, k = o.effects, k === null ? o.effects = [
            d
          ] : k.push(d));
        } else O = {
          eventTime: O,
          lane: k,
          tag: d.tag,
          payload: d.payload,
          callback: d.callback,
          next: null
        }, y === null ? (l = y = O, p = x) : y = y.next = O, c |= k;
        if (d = d.next, d === null) {
          if (d = o.shared.pending, d === null) break;
          k = d, d = k.next, k.next = null, o.lastBaseUpdate = k, o.shared.pending = null;
        }
      } while (true);
      if (y === null && (p = x), o.baseState = p, o.firstBaseUpdate = l, o.lastBaseUpdate = y, t = o.shared.interleaved, t !== null) {
        o = t;
        do
          c |= o.lane, o = o.next;
        while (o !== t);
      } else n === null && (o.shared.lanes = 0);
      Tr |= c, r.lanes = c, r.memoizedState = x;
    }
  }
  function Dc(r, t, e) {
    if (r = t.effects, t.effects = null, r !== null) for (t = 0; t < r.length; t++) {
      var s = r[t], o = s.callback;
      if (o !== null) {
        if (s.callback = null, s = e, typeof o != "function") throw Error(z(191, o));
        o.call(s);
      }
    }
  }
  var po = {}, ze = ir(po), to = ir(po), eo = ir(po);
  function yr(r) {
    if (r === po) throw Error(z(174));
    return r;
  }
  function Oi(r, t) {
    switch (X(eo, t), X(to, r), X(ze, po), r = t.nodeType, r) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ba(null, "");
        break;
      default:
        r = r === 8 ? t.parentNode : t, t = r.namespaceURI || null, r = r.tagName, t = ba(t, r);
    }
    Z(ze), X(ze, t);
  }
  function pn() {
    Z(ze), Z(to), Z(eo);
  }
  function jl(r) {
    yr(eo.current);
    var t = yr(ze.current), e = ba(t, r.type);
    t !== e && (X(to, r), X(ze, e));
  }
  function Li(r) {
    to.current === r && (Z(ze), Z(to));
  }
  var tt = ir(0);
  function cs(r) {
    for (var t = r; t !== null; ) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e !== null && (e = e.dehydrated, e === null || e.data === "$?" || e.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === r) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === r) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var ta = [];
  function Ni() {
    for (var r = 0; r < ta.length; r++) ta[r]._workInProgressVersionPrimary = null;
    ta.length = 0;
  }
  var Io = Je.ReactCurrentDispatcher, ea = Je.ReactCurrentBatchConfig, Pr = 0, et = null, it = null, gt = null, ds = false, Un = false, _o = 0, hw = 0;
  function kt() {
    throw Error(z(321));
  }
  function Fi(r, t) {
    if (t === null) return false;
    for (var e = 0; e < t.length && e < r.length; e++) if (!fe(r[e], t[e])) return false;
    return true;
  }
  function Pi(r, t, e, s, o, n) {
    if (Pr = n, et = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Io.current = r === null || r.memoizedState === null ? kw : xw, r = e(s, o), Un) {
      n = 0;
      do {
        if (Un = false, _o = 0, 25 <= n) throw Error(z(301));
        n += 1, gt = it = null, t.updateQueue = null, Io.current = jw, r = e(s, o);
      } while (Un);
    }
    if (Io.current = ls, t = it !== null && it.next !== null, Pr = 0, gt = it = et = null, ds = false, t) throw Error(z(300));
    return r;
  }
  function Ti() {
    var r = _o !== 0;
    return _o = 0, r;
  }
  function be() {
    var r = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return gt === null ? et.memoizedState = gt = r : gt = gt.next = r, gt;
  }
  function ne() {
    if (it === null) {
      var r = et.alternate;
      r = r !== null ? r.memoizedState : null;
    } else r = it.next;
    var t = gt === null ? et.memoizedState : gt.next;
    if (t !== null) gt = t, it = r;
    else {
      if (r === null) throw Error(z(310));
      it = r, r = {
        memoizedState: it.memoizedState,
        baseState: it.baseState,
        baseQueue: it.baseQueue,
        queue: it.queue,
        next: null
      }, gt === null ? et.memoizedState = gt = r : gt = gt.next = r;
    }
    return gt;
  }
  function ro(r, t) {
    return typeof t == "function" ? t(r) : t;
  }
  function _a(r) {
    var t = ne(), e = t.queue;
    if (e === null) throw Error(z(311));
    e.lastRenderedReducer = r;
    var s = it, o = s.baseQueue, n = e.pending;
    if (n !== null) {
      if (o !== null) {
        var c = o.next;
        o.next = n.next, n.next = c;
      }
      s.baseQueue = o = n, e.pending = null;
    }
    if (o !== null) {
      n = o.next, s = s.baseState;
      var d = c = null, p = null, l = n;
      do {
        var y = l.lane;
        if ((Pr & y) === y) p !== null && (p = p.next = {
          lane: 0,
          action: l.action,
          hasEagerState: l.hasEagerState,
          eagerState: l.eagerState,
          next: null
        }), s = l.hasEagerState ? l.eagerState : r(s, l.action);
        else {
          var x = {
            lane: y,
            action: l.action,
            hasEagerState: l.hasEagerState,
            eagerState: l.eagerState,
            next: null
          };
          p === null ? (d = p = x, c = s) : p = p.next = x, et.lanes |= y, Tr |= y;
        }
        l = l.next;
      } while (l !== null && l !== n);
      p === null ? c = s : p.next = d, fe(s, t.memoizedState) || (Mt = true), t.memoizedState = s, t.baseState = c, t.baseQueue = p, e.lastRenderedState = s;
    }
    if (r = e.interleaved, r !== null) {
      o = r;
      do
        n = o.lane, et.lanes |= n, Tr |= n, o = o.next;
      while (o !== r);
    } else o === null && (e.lanes = 0);
    return [
      t.memoizedState,
      e.dispatch
    ];
  }
  function ra(r) {
    var t = ne(), e = t.queue;
    if (e === null) throw Error(z(311));
    e.lastRenderedReducer = r;
    var s = e.dispatch, o = e.pending, n = t.memoizedState;
    if (o !== null) {
      e.pending = null;
      var c = o = o.next;
      do
        n = r(n, c.action), c = c.next;
      while (c !== o);
      fe(n, t.memoizedState) || (Mt = true), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), e.lastRenderedState = n;
    }
    return [
      n,
      s
    ];
  }
  function Sl() {
  }
  function El(r, t) {
    var e = et, s = ne(), o = t(), n = !fe(s.memoizedState, o);
    if (n && (s.memoizedState = o, Mt = true), s = s.queue, Ri(Ol.bind(null, e, s, r), [
      r
    ]), s.getSnapshot !== t || n || gt !== null && gt.memoizedState.tag & 1) {
      if (e.flags |= 2048, no(9, Cl.bind(null, e, s, o, t), void 0, null), ht === null) throw Error(z(349));
      Pr & 30 || zl(e, t, o);
    }
    return o;
  }
  function zl(r, t, e) {
    r.flags |= 16384, r = {
      getSnapshot: t,
      value: e
    }, t = et.updateQueue, t === null ? (t = {
      lastEffect: null,
      stores: null
    }, et.updateQueue = t, t.stores = [
      r
    ]) : (e = t.stores, e === null ? t.stores = [
      r
    ] : e.push(r));
  }
  function Cl(r, t, e, s) {
    t.value = e, t.getSnapshot = s, Ll(t) && Nl(r);
  }
  function Ol(r, t, e) {
    return e(function() {
      Ll(t) && Nl(r);
    });
  }
  function Ll(r) {
    var t = r.getSnapshot;
    r = r.value;
    try {
      var e = t();
      return !fe(r, e);
    } catch {
      return true;
    }
  }
  function Nl(r) {
    var t = Ke(r, 1);
    t !== null && we(t, r, 1, -1);
  }
  function $c(r) {
    var t = be();
    return typeof r == "function" && (r = r()), t.memoizedState = t.baseState = r, r = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ro,
      lastRenderedState: r
    }, t.queue = r, r = r.dispatch = vw.bind(null, et, r), [
      t.memoizedState,
      r
    ];
  }
  function no(r, t, e, s) {
    return r = {
      tag: r,
      create: t,
      destroy: e,
      deps: s,
      next: null
    }, t = et.updateQueue, t === null ? (t = {
      lastEffect: null,
      stores: null
    }, et.updateQueue = t, t.lastEffect = r.next = r) : (e = t.lastEffect, e === null ? t.lastEffect = r.next = r : (s = e.next, e.next = r, r.next = s, t.lastEffect = r)), r;
  }
  function Fl() {
    return ne().memoizedState;
  }
  function Wo(r, t, e, s) {
    var o = be();
    et.flags |= r, o.memoizedState = no(1 | t, e, void 0, s === void 0 ? null : s);
  }
  function js(r, t, e, s) {
    var o = ne();
    s = s === void 0 ? null : s;
    var n = void 0;
    if (it !== null) {
      var c = it.memoizedState;
      if (n = c.destroy, s !== null && Fi(s, c.deps)) {
        o.memoizedState = no(t, e, n, s);
        return;
      }
    }
    et.flags |= r, o.memoizedState = no(1 | t, e, n, s);
  }
  function Uc(r, t) {
    return Wo(8390656, 8, r, t);
  }
  function Ri(r, t) {
    return js(2048, 8, r, t);
  }
  function Pl(r, t) {
    return js(4, 2, r, t);
  }
  function Tl(r, t) {
    return js(4, 4, r, t);
  }
  function Rl(r, t) {
    if (typeof t == "function") return r = r(), t(r), function() {
      t(null);
    };
    if (t != null) return r = r(), t.current = r, function() {
      t.current = null;
    };
  }
  function Dl(r, t, e) {
    return e = e != null ? e.concat([
      r
    ]) : null, js(4, 4, Rl.bind(null, t, r), e);
  }
  function Di() {
  }
  function $l(r, t) {
    var e = ne();
    t = t === void 0 ? null : t;
    var s = e.memoizedState;
    return s !== null && t !== null && Fi(t, s[1]) ? s[0] : (e.memoizedState = [
      r,
      t
    ], r);
  }
  function Ul(r, t) {
    var e = ne();
    t = t === void 0 ? null : t;
    var s = e.memoizedState;
    return s !== null && t !== null && Fi(t, s[1]) ? s[0] : (r = r(), e.memoizedState = [
      r,
      t
    ], r);
  }
  function Ml(r, t, e) {
    return Pr & 21 ? (fe(e, t) || (e = Bd(), et.lanes |= e, Tr |= e, r.baseState = true), t) : (r.baseState && (r.baseState = false, Mt = true), r.memoizedState = e);
  }
  function yw(r, t) {
    var e = H;
    H = e !== 0 && 4 > e ? e : 4, r(true);
    var s = ea.transition;
    ea.transition = {};
    try {
      r(false), t();
    } finally {
      H = e, ea.transition = s;
    }
  }
  function Il() {
    return ne().memoizedState;
  }
  function mw(r, t, e) {
    var s = rr(r);
    if (e = {
      lane: s,
      action: e,
      hasEagerState: false,
      eagerState: null,
      next: null
    }, Wl(r)) Ql(t, e);
    else if (e = kl(r, t, e, s), e !== null) {
      var o = Nt();
      we(e, r, s, o), Vl(e, t, s);
    }
  }
  function vw(r, t, e) {
    var s = rr(r), o = {
      lane: s,
      action: e,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (Wl(r)) Ql(t, o);
    else {
      var n = r.alternate;
      if (r.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null)) try {
        var c = t.lastRenderedState, d = n(c, e);
        if (o.hasEagerState = true, o.eagerState = d, fe(d, c)) {
          var p = t.interleaved;
          p === null ? (o.next = o, zi(t)) : (o.next = p.next, p.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
      e = kl(r, t, o, s), e !== null && (o = Nt(), we(e, r, s, o), Vl(e, t, s));
    }
  }
  function Wl(r) {
    var t = r.alternate;
    return r === et || t !== null && t === et;
  }
  function Ql(r, t) {
    Un = ds = true;
    var e = r.pending;
    e === null ? t.next = t : (t.next = e.next, e.next = t), r.pending = t;
  }
  function Vl(r, t, e) {
    if (e & 4194240) {
      var s = t.lanes;
      s &= r.pendingLanes, e |= s, t.lanes = e, ui(r, e);
    }
  }
  var ls = {
    readContext: re,
    useCallback: kt,
    useContext: kt,
    useEffect: kt,
    useImperativeHandle: kt,
    useInsertionEffect: kt,
    useLayoutEffect: kt,
    useMemo: kt,
    useReducer: kt,
    useRef: kt,
    useState: kt,
    useDebugValue: kt,
    useDeferredValue: kt,
    useTransition: kt,
    useMutableSource: kt,
    useSyncExternalStore: kt,
    useId: kt,
    unstable_isNewReconciler: false
  }, kw = {
    readContext: re,
    useCallback: function(r, t) {
      return be().memoizedState = [
        r,
        t === void 0 ? null : t
      ], r;
    },
    useContext: re,
    useEffect: Uc,
    useImperativeHandle: function(r, t, e) {
      return e = e != null ? e.concat([
        r
      ]) : null, Wo(4194308, 4, Rl.bind(null, t, r), e);
    },
    useLayoutEffect: function(r, t) {
      return Wo(4194308, 4, r, t);
    },
    useInsertionEffect: function(r, t) {
      return Wo(4, 2, r, t);
    },
    useMemo: function(r, t) {
      var e = be();
      return t = t === void 0 ? null : t, r = r(), e.memoizedState = [
        r,
        t
      ], r;
    },
    useReducer: function(r, t, e) {
      var s = be();
      return t = e !== void 0 ? e(t) : t, s.memoizedState = s.baseState = t, r = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: r,
        lastRenderedState: t
      }, s.queue = r, r = r.dispatch = mw.bind(null, et, r), [
        s.memoizedState,
        r
      ];
    },
    useRef: function(r) {
      var t = be();
      return r = {
        current: r
      }, t.memoizedState = r;
    },
    useState: $c,
    useDebugValue: Di,
    useDeferredValue: function(r) {
      return be().memoizedState = r;
    },
    useTransition: function() {
      var r = $c(false), t = r[0];
      return r = yw.bind(null, r[1]), be().memoizedState = r, [
        t,
        r
      ];
    },
    useMutableSource: function() {
    },
    useSyncExternalStore: function(r, t, e) {
      var s = et, o = be();
      if (J) {
        if (e === void 0) throw Error(z(407));
        e = e();
      } else {
        if (e = t(), ht === null) throw Error(z(349));
        Pr & 30 || zl(s, t, e);
      }
      o.memoizedState = e;
      var n = {
        value: e,
        getSnapshot: t
      };
      return o.queue = n, Uc(Ol.bind(null, s, n, r), [
        r
      ]), s.flags |= 2048, no(9, Cl.bind(null, s, n, e, t), void 0, null), e;
    },
    useId: function() {
      var r = be(), t = ht.identifierPrefix;
      if (J) {
        var e = Ae, s = Be;
        e = (s & ~(1 << 32 - ue(s) - 1)).toString(32) + e, t = ":" + t + "R" + e, e = _o++, 0 < e && (t += "H" + e.toString(32)), t += ":";
      } else e = hw++, t = ":" + t + "r" + e.toString(32) + ":";
      return r.memoizedState = t;
    },
    unstable_isNewReconciler: false
  }, xw = {
    readContext: re,
    useCallback: $l,
    useContext: re,
    useEffect: Ri,
    useImperativeHandle: Dl,
    useInsertionEffect: Pl,
    useLayoutEffect: Tl,
    useMemo: Ul,
    useReducer: _a,
    useRef: Fl,
    useState: function() {
      return _a(ro);
    },
    useDebugValue: Di,
    useDeferredValue: function(r) {
      var t = ne();
      return Ml(t, it.memoizedState, r);
    },
    useTransition: function() {
      var r = _a(ro)[0], t = ne().memoizedState;
      return [
        r,
        t
      ];
    },
    useMutableSource: Sl,
    useSyncExternalStore: El,
    useId: Il,
    unstable_isNewReconciler: false
  }, jw = {
    readContext: re,
    useCallback: $l,
    useContext: re,
    useEffect: Ri,
    useImperativeHandle: Dl,
    useInsertionEffect: Pl,
    useLayoutEffect: Tl,
    useMemo: Ul,
    useReducer: ra,
    useRef: Fl,
    useState: function() {
      return ra(ro);
    },
    useDebugValue: Di,
    useDeferredValue: function(r) {
      var t = ne();
      return it === null ? t.memoizedState = r : Ml(t, it.memoizedState, r);
    },
    useTransition: function() {
      var r = ra(ro)[0], t = ne().memoizedState;
      return [
        r,
        t
      ];
    },
    useMutableSource: Sl,
    useSyncExternalStore: El,
    useId: Il,
    unstable_isNewReconciler: false
  };
  function ae(r, t) {
    if (r && r.defaultProps) {
      t = _t({}, t), r = r.defaultProps;
      for (var e in r) t[e] === void 0 && (t[e] = r[e]);
      return t;
    }
    return t;
  }
  function Ua(r, t, e, s) {
    t = r.memoizedState, e = e(s, t), e = e == null ? t : _t({}, t, e), r.memoizedState = e, r.lanes === 0 && (r.updateQueue.baseState = e);
  }
  var Ss = {
    isMounted: function(r) {
      return (r = r._reactInternals) ? $r(r) === r : false;
    },
    enqueueSetState: function(r, t, e) {
      r = r._reactInternals;
      var s = Nt(), o = rr(r), n = Ye(s, o);
      n.payload = t, e != null && (n.callback = e), t = er(r, n, o), t !== null && (we(t, r, o, s), Mo(t, r, o));
    },
    enqueueReplaceState: function(r, t, e) {
      r = r._reactInternals;
      var s = Nt(), o = rr(r), n = Ye(s, o);
      n.tag = 1, n.payload = t, e != null && (n.callback = e), t = er(r, n, o), t !== null && (we(t, r, o, s), Mo(t, r, o));
    },
    enqueueForceUpdate: function(r, t) {
      r = r._reactInternals;
      var e = Nt(), s = rr(r), o = Ye(e, s);
      o.tag = 2, t != null && (o.callback = t), t = er(r, o, s), t !== null && (we(t, r, s, e), Mo(t, r, s));
    }
  };
  function Mc(r, t, e, s, o, n, c) {
    return r = r.stateNode, typeof r.shouldComponentUpdate == "function" ? r.shouldComponentUpdate(s, n, c) : t.prototype && t.prototype.isPureReactComponent ? !Kn(e, s) || !Kn(o, n) : true;
  }
  function Bl(r, t, e) {
    var s = false, o = sr, n = t.contextType;
    return typeof n == "object" && n !== null ? n = re(n) : (o = Wt(t) ? Nr : Et.current, s = t.contextTypes, n = (s = s != null) ? cn(r, o) : sr), t = new t(e, n), r.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ss, r.stateNode = t, t._reactInternals = r, s && (r = r.stateNode, r.__reactInternalMemoizedUnmaskedChildContext = o, r.__reactInternalMemoizedMaskedChildContext = n), t;
  }
  function Ic(r, t, e, s) {
    r = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(e, s), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(e, s), t.state !== r && Ss.enqueueReplaceState(t, t.state, null);
  }
  function Ma(r, t, e, s) {
    var o = r.stateNode;
    o.props = e, o.state = r.memoizedState, o.refs = {}, Ci(r);
    var n = t.contextType;
    typeof n == "object" && n !== null ? o.context = re(n) : (n = Wt(t) ? Nr : Et.current, o.context = cn(r, n)), o.state = r.memoizedState, n = t.getDerivedStateFromProps, typeof n == "function" && (Ua(r, t, n, e), o.state = r.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Ss.enqueueReplaceState(o, o.state, null), is(r, e, o, s), o.state = r.memoizedState), typeof o.componentDidMount == "function" && (r.flags |= 4194308);
  }
  function un(r, t) {
    try {
      var e = "", s = t;
      do
        e += Jp(s), s = s.return;
      while (s);
      var o = e;
    } catch (n) {
      o = `
Error generating stack: ` + n.message + `
` + n.stack;
    }
    return {
      value: r,
      source: t,
      stack: o,
      digest: null
    };
  }
  function na(r, t, e) {
    return {
      value: r,
      source: null,
      stack: e ?? null,
      digest: t ?? null
    };
  }
  function Ia(r, t) {
    try {
      console.error(t.value);
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  var Sw = typeof WeakMap == "function" ? WeakMap : Map;
  function Al(r, t, e) {
    e = Ye(-1, e), e.tag = 3, e.payload = {
      element: null
    };
    var s = t.value;
    return e.callback = function() {
      us || (us = true, Ka = s), Ia(r, t);
    }, e;
  }
  function Hl(r, t, e) {
    e = Ye(-1, e), e.tag = 3;
    var s = r.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var o = t.value;
      e.payload = function() {
        return s(o);
      }, e.callback = function() {
        Ia(r, t);
      };
    }
    var n = r.stateNode;
    return n !== null && typeof n.componentDidCatch == "function" && (e.callback = function() {
      Ia(r, t), typeof s != "function" && (_r === null ? _r = /* @__PURE__ */ new Set([
        this
      ]) : _r.add(this));
      var c = t.stack;
      this.componentDidCatch(t.value, {
        componentStack: c !== null ? c : ""
      });
    }), e;
  }
  function Wc(r, t, e) {
    var s = r.pingCache;
    if (s === null) {
      s = r.pingCache = new Sw();
      var o = /* @__PURE__ */ new Set();
      s.set(t, o);
    } else o = s.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), s.set(t, o));
    o.has(e) || (o.add(e), r = Mw.bind(null, r, t, e), t.then(r, r));
  }
  function Qc(r) {
    do {
      var t;
      if ((t = r.tag === 13) && (t = r.memoizedState, t = t !== null ? t.dehydrated !== null : true), t) return r;
      r = r.return;
    } while (r !== null);
    return null;
  }
  function Vc(r, t, e, s, o) {
    return r.mode & 1 ? (r.flags |= 65536, r.lanes = o, r) : (r === t ? r.flags |= 65536 : (r.flags |= 128, e.flags |= 131072, e.flags &= -52805, e.tag === 1 && (e.alternate === null ? e.tag = 17 : (t = Ye(-1, 1), t.tag = 2, er(e, t, 1))), e.lanes |= 1), r);
  }
  var Ew = Je.ReactCurrentOwner, Mt = false;
  function Ct(r, t, e, s) {
    t.child = r === null ? vl(t, null, e, s) : ln(t, r.child, e, s);
  }
  function Bc(r, t, e, s, o) {
    e = e.render;
    var n = t.ref;
    return rn(t, o), s = Pi(r, t, e, s, n, o), e = Ti(), r !== null && !Mt ? (t.updateQueue = r.updateQueue, t.flags &= -2053, r.lanes &= ~o, Ze(r, t, o)) : (J && e && vi(t), t.flags |= 1, Ct(r, t, s, o), t.child);
  }
  function Ac(r, t, e, s, o) {
    if (r === null) {
      var n = e.type;
      return typeof n == "function" && !Bi(n) && n.defaultProps === void 0 && e.compare === null && e.defaultProps === void 0 ? (t.tag = 15, t.type = n, Yl(r, t, n, s, o)) : (r = Ao(e.type, null, s, t, t.mode, o), r.ref = t.ref, r.return = t, t.child = r);
    }
    if (n = r.child, !(r.lanes & o)) {
      var c = n.memoizedProps;
      if (e = e.compare, e = e !== null ? e : Kn, e(c, s) && r.ref === t.ref) return Ze(r, t, o);
    }
    return t.flags |= 1, r = nr(n, s), r.ref = t.ref, r.return = t, t.child = r;
  }
  function Yl(r, t, e, s, o) {
    if (r !== null) {
      var n = r.memoizedProps;
      if (Kn(n, s) && r.ref === t.ref) if (Mt = false, t.pendingProps = s = n, (r.lanes & o) !== 0) r.flags & 131072 && (Mt = true);
      else return t.lanes = r.lanes, Ze(r, t, o);
    }
    return Wa(r, t, e, s, o);
  }
  function Xl(r, t, e) {
    var s = t.pendingProps, o = s.children, n = r !== null ? r.memoizedState : null;
    if (s.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
      baseLanes: 0,
      cachePool: null,
      transitions: null
    }, X(Zr, Vt), Vt |= e;
    else {
      if (!(e & 1073741824)) return r = n !== null ? n.baseLanes | e : e, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
        baseLanes: r,
        cachePool: null,
        transitions: null
      }, t.updateQueue = null, X(Zr, Vt), Vt |= r, null;
      t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      }, s = n !== null ? n.baseLanes : e, X(Zr, Vt), Vt |= s;
    }
    else n !== null ? (s = n.baseLanes | e, t.memoizedState = null) : s = e, X(Zr, Vt), Vt |= s;
    return Ct(r, t, o, e), t.child;
  }
  function ql(r, t) {
    var e = t.ref;
    (r === null && e !== null || r !== null && r.ref !== e) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Wa(r, t, e, s, o) {
    var n = Wt(e) ? Nr : Et.current;
    return n = cn(t, n), rn(t, o), e = Pi(r, t, e, s, n, o), s = Ti(), r !== null && !Mt ? (t.updateQueue = r.updateQueue, t.flags &= -2053, r.lanes &= ~o, Ze(r, t, o)) : (J && s && vi(t), t.flags |= 1, Ct(r, t, e, o), t.child);
  }
  function Hc(r, t, e, s, o) {
    if (Wt(e)) {
      var n = true;
      rs(t);
    } else n = false;
    if (rn(t, o), t.stateNode === null) Qo(r, t), Bl(t, e, s), Ma(t, e, s, o), s = true;
    else if (r === null) {
      var c = t.stateNode, d = t.memoizedProps;
      c.props = d;
      var p = c.context, l = e.contextType;
      typeof l == "object" && l !== null ? l = re(l) : (l = Wt(e) ? Nr : Et.current, l = cn(t, l));
      var y = e.getDerivedStateFromProps, x = typeof y == "function" || typeof c.getSnapshotBeforeUpdate == "function";
      x || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (d !== s || p !== l) && Ic(t, c, s, l), __ = false;
      var k = t.memoizedState;
      c.state = k, is(t, s, c, o), p = t.memoizedState, d !== s || k !== p || It.current || __ ? (typeof y == "function" && (Ua(t, e, y, s), p = t.memoizedState), (d = __ || Mc(t, e, d, s, k, p, l)) ? (x || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = s, t.memoizedState = p), c.props = s, c.state = p, c.context = l, s = d) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), s = false);
    } else {
      c = t.stateNode, xl(r, t), d = t.memoizedProps, l = t.type === t.elementType ? d : ae(t.type, d), c.props = l, x = t.pendingProps, k = c.context, p = e.contextType, typeof p == "object" && p !== null ? p = re(p) : (p = Wt(e) ? Nr : Et.current, p = cn(t, p));
      var O = e.getDerivedStateFromProps;
      (y = typeof O == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (d !== x || k !== p) && Ic(t, c, s, p), __ = false, k = t.memoizedState, c.state = k, is(t, s, c, o);
      var L = t.memoizedState;
      d !== x || k !== L || It.current || __ ? (typeof O == "function" && (Ua(t, e, O, s), L = t.memoizedState), (l = __ || Mc(t, e, l, s, k, L, p) || false) ? (y || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(s, L, p), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(s, L, p)), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || d === r.memoizedProps && k === r.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || d === r.memoizedProps && k === r.memoizedState || (t.flags |= 1024), t.memoizedProps = s, t.memoizedState = L), c.props = s, c.state = L, c.context = p, s = l) : (typeof c.componentDidUpdate != "function" || d === r.memoizedProps && k === r.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || d === r.memoizedProps && k === r.memoizedState || (t.flags |= 1024), s = false);
    }
    return Qa(r, t, e, s, n, o);
  }
  function Qa(r, t, e, s, o, n) {
    ql(r, t);
    var c = (t.flags & 128) !== 0;
    if (!s && !c) return o && Nc(t, e, false), Ze(r, t, n);
    s = t.stateNode, Ew.current = t;
    var d = c && typeof e.getDerivedStateFromError != "function" ? null : s.render();
    return t.flags |= 1, r !== null && c ? (t.child = ln(t, r.child, null, n), t.child = ln(t, null, d, n)) : Ct(r, t, d, n), t.memoizedState = s.state, o && Nc(t, e, true), t.child;
  }
  function Kl(r) {
    var t = r.stateNode;
    t.pendingContext ? Lc(r, t.pendingContext, t.pendingContext !== t.context) : t.context && Lc(r, t.context, false), Oi(r, t.containerInfo);
  }
  function Yc(r, t, e, s, o) {
    return dn(), xi(o), t.flags |= 256, Ct(r, t, e, s), t.child;
  }
  var Va = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
  };
  function Ba(r) {
    return {
      baseLanes: r,
      cachePool: null,
      transitions: null
    };
  }
  function Zl(r, t, e) {
    var s = t.pendingProps, o = tt.current, n = false, c = (t.flags & 128) !== 0, d;
    if ((d = c) || (d = r !== null && r.memoizedState === null ? false : (o & 2) !== 0), d ? (n = true, t.flags &= -129) : (r === null || r.memoizedState !== null) && (o |= 1), X(tt, o & 1), r === null) return Da(t), r = t.memoizedState, r !== null && (r = r.dehydrated, r !== null) ? (t.mode & 1 ? r.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (c = s.children, r = s.fallback, n ? (s = t.mode, n = t.child, c = {
      mode: "hidden",
      children: c
    }, !(s & 1) && n !== null ? (n.childLanes = 0, n.pendingProps = c) : n = Cs(c, s, 0, null), r = Lr(r, s, e, null), n.return = t, r.return = t, n.sibling = r, t.child = n, t.child.memoizedState = Ba(e), t.memoizedState = Va, r) : $i(t, c));
    if (o = r.memoizedState, o !== null && (d = o.dehydrated, d !== null)) return zw(r, t, c, s, d, o, e);
    if (n) {
      n = s.fallback, c = t.mode, o = r.child, d = o.sibling;
      var p = {
        mode: "hidden",
        children: s.children
      };
      return !(c & 1) && t.child !== o ? (s = t.child, s.childLanes = 0, s.pendingProps = p, t.deletions = null) : (s = nr(o, p), s.subtreeFlags = o.subtreeFlags & 14680064), d !== null ? n = nr(d, n) : (n = Lr(n, c, e, null), n.flags |= 2), n.return = t, s.return = t, s.sibling = n, t.child = s, s = n, n = t.child, c = r.child.memoizedState, c = c === null ? Ba(e) : {
        baseLanes: c.baseLanes | e,
        cachePool: null,
        transitions: c.transitions
      }, n.memoizedState = c, n.childLanes = r.childLanes & ~e, t.memoizedState = Va, s;
    }
    return n = r.child, r = n.sibling, s = nr(n, {
      mode: "visible",
      children: s.children
    }), !(t.mode & 1) && (s.lanes = e), s.return = t, s.sibling = null, r !== null && (e = t.deletions, e === null ? (t.deletions = [
      r
    ], t.flags |= 16) : e.push(r)), t.child = s, t.memoizedState = null, s;
  }
  function $i(r, t) {
    return t = Cs({
      mode: "visible",
      children: t
    }, r.mode, 0, null), t.return = r, r.child = t;
  }
  function Co(r, t, e, s) {
    return s !== null && xi(s), ln(t, r.child, null, e), r = $i(t, t.pendingProps.children), r.flags |= 2, t.memoizedState = null, r;
  }
  function zw(r, t, e, s, o, n, c) {
    if (e) return t.flags & 256 ? (t.flags &= -257, s = na(Error(z(422))), Co(r, t, c, s)) : t.memoizedState !== null ? (t.child = r.child, t.flags |= 128, null) : (n = s.fallback, o = t.mode, s = Cs({
      mode: "visible",
      children: s.children
    }, o, 0, null), n = Lr(n, o, c, null), n.flags |= 2, s.return = t, n.return = t, s.sibling = n, t.child = s, t.mode & 1 && ln(t, r.child, null, c), t.child.memoizedState = Ba(c), t.memoizedState = Va, n);
    if (!(t.mode & 1)) return Co(r, t, c, null);
    if (o.data === "$!") {
      if (s = o.nextSibling && o.nextSibling.dataset, s) var d = s.dgst;
      return s = d, n = Error(z(419)), s = na(n, s, void 0), Co(r, t, c, s);
    }
    if (d = (c & r.childLanes) !== 0, Mt || d) {
      if (s = ht, s !== null) {
        switch (c & -c) {
          case 4:
            o = 2;
            break;
          case 16:
            o = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            o = 32;
            break;
          case 536870912:
            o = 268435456;
            break;
          default:
            o = 0;
        }
        o = o & (s.suspendedLanes | c) ? 0 : o, o !== 0 && o !== n.retryLane && (n.retryLane = o, Ke(r, o), we(s, r, o, -1));
      }
      return Vi(), s = na(Error(z(421))), Co(r, t, c, s);
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = r.child, t = Iw.bind(null, r), o._reactRetry = t, null) : (r = n.treeContext, At = tr(o.nextSibling), Ht = t, J = true, de = null, r !== null && (Zt[Jt++] = Be, Zt[Jt++] = Ae, Zt[Jt++] = Fr, Be = r.id, Ae = r.overflow, Fr = t), t = $i(t, s.children), t.flags |= 4096, t);
  }
  function Xc(r, t, e) {
    r.lanes |= t;
    var s = r.alternate;
    s !== null && (s.lanes |= t), $a(r.return, t, e);
  }
  function oa(r, t, e, s, o) {
    var n = r.memoizedState;
    n === null ? r.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: s,
      tail: e,
      tailMode: o
    } : (n.isBackwards = t, n.rendering = null, n.renderingStartTime = 0, n.last = s, n.tail = e, n.tailMode = o);
  }
  function Jl(r, t, e) {
    var s = t.pendingProps, o = s.revealOrder, n = s.tail;
    if (Ct(r, t, s.children, e), s = tt.current, s & 2) s = s & 1 | 2, t.flags |= 128;
    else {
      if (r !== null && r.flags & 128) t: for (r = t.child; r !== null; ) {
        if (r.tag === 13) r.memoizedState !== null && Xc(r, e, t);
        else if (r.tag === 19) Xc(r, e, t);
        else if (r.child !== null) {
          r.child.return = r, r = r.child;
          continue;
        }
        if (r === t) break t;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === t) break t;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
      s &= 1;
    }
    if (X(tt, s), !(t.mode & 1)) t.memoizedState = null;
    else switch (o) {
      case "forwards":
        for (e = t.child, o = null; e !== null; ) r = e.alternate, r !== null && cs(r) === null && (o = e), e = e.sibling;
        e = o, e === null ? (o = t.child, t.child = null) : (o = e.sibling, e.sibling = null), oa(t, false, o, e, n);
        break;
      case "backwards":
        for (e = null, o = t.child, t.child = null; o !== null; ) {
          if (r = o.alternate, r !== null && cs(r) === null) {
            t.child = o;
            break;
          }
          r = o.sibling, o.sibling = e, e = o, o = r;
        }
        oa(t, true, e, null, n);
        break;
      case "together":
        oa(t, false, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Qo(r, t) {
    !(t.mode & 1) && r !== null && (r.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Ze(r, t, e) {
    if (r !== null && (t.dependencies = r.dependencies), Tr |= t.lanes, !(e & t.childLanes)) return null;
    if (r !== null && t.child !== r.child) throw Error(z(153));
    if (t.child !== null) {
      for (r = t.child, e = nr(r, r.pendingProps), t.child = e, e.return = t; r.sibling !== null; ) r = r.sibling, e = e.sibling = nr(r, r.pendingProps), e.return = t;
      e.sibling = null;
    }
    return t.child;
  }
  function Cw(r, t, e) {
    switch (t.tag) {
      case 3:
        Kl(t), dn();
        break;
      case 5:
        jl(t);
        break;
      case 1:
        Wt(t.type) && rs(t);
        break;
      case 4:
        Oi(t, t.stateNode.containerInfo);
        break;
      case 10:
        var s = t.type._context, o = t.memoizedProps.value;
        X(ss, s._currentValue), s._currentValue = o;
        break;
      case 13:
        if (s = t.memoizedState, s !== null) return s.dehydrated !== null ? (X(tt, tt.current & 1), t.flags |= 128, null) : e & t.child.childLanes ? Zl(r, t, e) : (X(tt, tt.current & 1), r = Ze(r, t, e), r !== null ? r.sibling : null);
        X(tt, tt.current & 1);
        break;
      case 19:
        if (s = (e & t.childLanes) !== 0, r.flags & 128) {
          if (s) return Jl(r, t, e);
          t.flags |= 128;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), X(tt, tt.current), s) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Xl(r, t, e);
    }
    return Ze(r, t, e);
  }
  var Gl, Aa, tp, ep;
  Gl = function(r, t) {
    for (var e = t.child; e !== null; ) {
      if (e.tag === 5 || e.tag === 6) r.appendChild(e.stateNode);
      else if (e.tag !== 4 && e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
  };
  Aa = function() {
  };
  tp = function(r, t, e, s) {
    var o = r.memoizedProps;
    if (o !== s) {
      r = t.stateNode, yr(ze.current);
      var n = null;
      switch (e) {
        case "input":
          o = ua(r, o), s = ua(r, s), n = [];
          break;
        case "select":
          o = _t({}, o, {
            value: void 0
          }), s = _t({}, s, {
            value: void 0
          }), n = [];
          break;
        case "textarea":
          o = ga(r, o), s = ga(r, s), n = [];
          break;
        default:
          typeof o.onClick != "function" && typeof s.onClick == "function" && (r.onclick = es);
      }
      ha(e, s);
      var c;
      e = null;
      for (l in o) if (!s.hasOwnProperty(l) && o.hasOwnProperty(l) && o[l] != null) if (l === "style") {
        var d = o[l];
        for (c in d) d.hasOwnProperty(c) && (e || (e = {}), e[c] = "");
      } else l !== "dangerouslySetInnerHTML" && l !== "children" && l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (Vn.hasOwnProperty(l) ? n || (n = []) : (n = n || []).push(l, null));
      for (l in s) {
        var p = s[l];
        if (d = o == null ? void 0 : o[l], s.hasOwnProperty(l) && p !== d && (p != null || d != null)) if (l === "style") if (d) {
          for (c in d) !d.hasOwnProperty(c) || p && p.hasOwnProperty(c) || (e || (e = {}), e[c] = "");
          for (c in p) p.hasOwnProperty(c) && d[c] !== p[c] && (e || (e = {}), e[c] = p[c]);
        } else e || (n || (n = []), n.push(l, e)), e = p;
        else l === "dangerouslySetInnerHTML" ? (p = p ? p.__html : void 0, d = d ? d.__html : void 0, p != null && d !== p && (n = n || []).push(l, p)) : l === "children" ? typeof p != "string" && typeof p != "number" || (n = n || []).push(l, "" + p) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && (Vn.hasOwnProperty(l) ? (p != null && l === "onScroll" && q("scroll", r), n || d === p || (n = [])) : (n = n || []).push(l, p));
      }
      e && (n = n || []).push("style", e);
      var l = n;
      (t.updateQueue = l) && (t.flags |= 4);
    }
  };
  ep = function(r, t, e, s) {
    e !== s && (t.flags |= 4);
  };
  function En(r, t) {
    if (!J) switch (r.tailMode) {
      case "hidden":
        t = r.tail;
        for (var e = null; t !== null; ) t.alternate !== null && (e = t), t = t.sibling;
        e === null ? r.tail = null : e.sibling = null;
        break;
      case "collapsed":
        e = r.tail;
        for (var s = null; e !== null; ) e.alternate !== null && (s = e), e = e.sibling;
        s === null ? t || r.tail === null ? r.tail = null : r.tail.sibling = null : s.sibling = null;
    }
  }
  function xt(r) {
    var t = r.alternate !== null && r.alternate.child === r.child, e = 0, s = 0;
    if (t) for (var o = r.child; o !== null; ) e |= o.lanes | o.childLanes, s |= o.subtreeFlags & 14680064, s |= o.flags & 14680064, o.return = r, o = o.sibling;
    else for (o = r.child; o !== null; ) e |= o.lanes | o.childLanes, s |= o.subtreeFlags, s |= o.flags, o.return = r, o = o.sibling;
    return r.subtreeFlags |= s, r.childLanes = e, t;
  }
  function Ow(r, t, e) {
    var s = t.pendingProps;
    switch (ki(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return xt(t), null;
      case 1:
        return Wt(t.type) && _s(), xt(t), null;
      case 3:
        return s = t.stateNode, pn(), Z(It), Z(Et), Ni(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (r === null || r.child === null) && (Eo(t) ? t.flags |= 4 : r === null || r.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, de !== null && (Ga(de), de = null))), Aa(r, t), xt(t), null;
      case 5:
        Li(t);
        var o = yr(eo.current);
        if (e = t.type, r !== null && t.stateNode != null) tp(r, t, e, s, o), r.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(z(166));
            return xt(t), null;
          }
          if (r = yr(ze.current), Eo(t)) {
            s = t.stateNode, e = t.type;
            var n = t.memoizedProps;
            switch (s[ve] = t, s[Gn] = n, r = (t.mode & 1) !== 0, e) {
              case "dialog":
                q("cancel", s), q("close", s);
                break;
              case "iframe":
              case "object":
              case "embed":
                q("load", s);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Fn.length; o++) q(Fn[o], s);
                break;
              case "source":
                q("error", s);
                break;
              case "img":
              case "image":
              case "link":
                q("error", s), q("load", s);
                break;
              case "details":
                q("toggle", s);
                break;
              case "input":
                rc(s, n), q("invalid", s);
                break;
              case "select":
                s._wrapperState = {
                  wasMultiple: !!n.multiple
                }, q("invalid", s);
                break;
              case "textarea":
                oc(s, n), q("invalid", s);
            }
            ha(e, n), o = null;
            for (var c in n) if (n.hasOwnProperty(c)) {
              var d = n[c];
              c === "children" ? typeof d == "string" ? s.textContent !== d && (n.suppressHydrationWarning !== true && So(s.textContent, d, r), o = [
                "children",
                d
              ]) : typeof d == "number" && s.textContent !== "" + d && (n.suppressHydrationWarning !== true && So(s.textContent, d, r), o = [
                "children",
                "" + d
              ]) : Vn.hasOwnProperty(c) && d != null && c === "onScroll" && q("scroll", s);
            }
            switch (e) {
              case "input":
                bo(s), nc(s, n, true);
                break;
              case "textarea":
                bo(s), sc(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof n.onClick == "function" && (s.onclick = es);
            }
            s = o, t.updateQueue = s, s !== null && (t.flags |= 4);
          } else {
            c = o.nodeType === 9 ? o : o.ownerDocument, r === "http://www.w3.org/1999/xhtml" && (r = Od(e)), r === "http://www.w3.org/1999/xhtml" ? e === "script" ? (r = c.createElement("div"), r.innerHTML = "<script><\/script>", r = r.removeChild(r.firstChild)) : typeof s.is == "string" ? r = c.createElement(e, {
              is: s.is
            }) : (r = c.createElement(e), e === "select" && (c = r, s.multiple ? c.multiple = true : s.size && (c.size = s.size))) : r = c.createElementNS(r, e), r[ve] = t, r[Gn] = s, Gl(r, t, false, false), t.stateNode = r;
            t: {
              switch (c = ya(e, s), e) {
                case "dialog":
                  q("cancel", r), q("close", r), o = s;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  q("load", r), o = s;
                  break;
                case "video":
                case "audio":
                  for (o = 0; o < Fn.length; o++) q(Fn[o], r);
                  o = s;
                  break;
                case "source":
                  q("error", r), o = s;
                  break;
                case "img":
                case "image":
                case "link":
                  q("error", r), q("load", r), o = s;
                  break;
                case "details":
                  q("toggle", r), o = s;
                  break;
                case "input":
                  rc(r, s), o = ua(r, s), q("invalid", r);
                  break;
                case "option":
                  o = s;
                  break;
                case "select":
                  r._wrapperState = {
                    wasMultiple: !!s.multiple
                  }, o = _t({}, s, {
                    value: void 0
                  }), q("invalid", r);
                  break;
                case "textarea":
                  oc(r, s), o = ga(r, s), q("invalid", r);
                  break;
                default:
                  o = s;
              }
              ha(e, o), d = o;
              for (n in d) if (d.hasOwnProperty(n)) {
                var p = d[n];
                n === "style" ? Fd(r, p) : n === "dangerouslySetInnerHTML" ? (p = p ? p.__html : void 0, p != null && Ld(r, p)) : n === "children" ? typeof p == "string" ? (e !== "textarea" || p !== "") && Bn(r, p) : typeof p == "number" && Bn(r, "" + p) : n !== "suppressContentEditableWarning" && n !== "suppressHydrationWarning" && n !== "autoFocus" && (Vn.hasOwnProperty(n) ? p != null && n === "onScroll" && q("scroll", r) : p != null && ai(r, n, p, c));
              }
              switch (e) {
                case "input":
                  bo(r), nc(r, s, false);
                  break;
                case "textarea":
                  bo(r), sc(r);
                  break;
                case "option":
                  s.value != null && r.setAttribute("value", "" + or(s.value));
                  break;
                case "select":
                  r.multiple = !!s.multiple, n = s.value, n != null ? Gr(r, !!s.multiple, n, false) : s.defaultValue != null && Gr(r, !!s.multiple, s.defaultValue, true);
                  break;
                default:
                  typeof o.onClick == "function" && (r.onclick = es);
              }
              switch (e) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s = !!s.autoFocus;
                  break t;
                case "img":
                  s = true;
                  break t;
                default:
                  s = false;
              }
            }
            s && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return xt(t), null;
      case 6:
        if (r && t.stateNode != null) ep(r, t, r.memoizedProps, s);
        else {
          if (typeof s != "string" && t.stateNode === null) throw Error(z(166));
          if (e = yr(eo.current), yr(ze.current), Eo(t)) {
            if (s = t.stateNode, e = t.memoizedProps, s[ve] = t, (n = s.nodeValue !== e) && (r = Ht, r !== null)) switch (r.tag) {
              case 3:
                So(s.nodeValue, e, (r.mode & 1) !== 0);
                break;
              case 5:
                r.memoizedProps.suppressHydrationWarning !== true && So(s.nodeValue, e, (r.mode & 1) !== 0);
            }
            n && (t.flags |= 4);
          } else s = (e.nodeType === 9 ? e : e.ownerDocument).createTextNode(s), s[ve] = t, t.stateNode = s;
        }
        return xt(t), null;
      case 13:
        if (Z(tt), s = t.memoizedState, r === null || r.memoizedState !== null && r.memoizedState.dehydrated !== null) {
          if (J && At !== null && t.mode & 1 && !(t.flags & 128)) yl(), dn(), t.flags |= 98560, n = false;
          else if (n = Eo(t), s !== null && s.dehydrated !== null) {
            if (r === null) {
              if (!n) throw Error(z(318));
              if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(z(317));
              n[ve] = t;
            } else dn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            xt(t), n = false;
          } else de !== null && (Ga(de), de = null), n = true;
          if (!n) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = e, t) : (s = s !== null, s !== (r !== null && r.memoizedState !== null) && s && (t.child.flags |= 8192, t.mode & 1 && (r === null || tt.current & 1 ? lt === 0 && (lt = 3) : Vi())), t.updateQueue !== null && (t.flags |= 4), xt(t), null);
      case 4:
        return pn(), Aa(r, t), r === null && Zn(t.stateNode.containerInfo), xt(t), null;
      case 10:
        return Ei(t.type._context), xt(t), null;
      case 17:
        return Wt(t.type) && _s(), xt(t), null;
      case 19:
        if (Z(tt), n = t.memoizedState, n === null) return xt(t), null;
        if (s = (t.flags & 128) !== 0, c = n.rendering, c === null) if (s) En(n, false);
        else {
          if (lt !== 0 || r !== null && r.flags & 128) for (r = t.child; r !== null; ) {
            if (c = cs(r), c !== null) {
              for (t.flags |= 128, En(n, false), s = c.updateQueue, s !== null && (t.updateQueue = s, t.flags |= 4), t.subtreeFlags = 0, s = e, e = t.child; e !== null; ) n = e, r = s, n.flags &= 14680066, c = n.alternate, c === null ? (n.childLanes = 0, n.lanes = r, n.child = null, n.subtreeFlags = 0, n.memoizedProps = null, n.memoizedState = null, n.updateQueue = null, n.dependencies = null, n.stateNode = null) : (n.childLanes = c.childLanes, n.lanes = c.lanes, n.child = c.child, n.subtreeFlags = 0, n.deletions = null, n.memoizedProps = c.memoizedProps, n.memoizedState = c.memoizedState, n.updateQueue = c.updateQueue, n.type = c.type, r = c.dependencies, n.dependencies = r === null ? null : {
                lanes: r.lanes,
                firstContext: r.firstContext
              }), e = e.sibling;
              return X(tt, tt.current & 1 | 2), t.child;
            }
            r = r.sibling;
          }
          n.tail !== null && st() > wn && (t.flags |= 128, s = true, En(n, false), t.lanes = 4194304);
        }
        else {
          if (!s) if (r = cs(c), r !== null) {
            if (t.flags |= 128, s = true, e = r.updateQueue, e !== null && (t.updateQueue = e, t.flags |= 4), En(n, true), n.tail === null && n.tailMode === "hidden" && !c.alternate && !J) return xt(t), null;
          } else 2 * st() - n.renderingStartTime > wn && e !== 1073741824 && (t.flags |= 128, s = true, En(n, false), t.lanes = 4194304);
          n.isBackwards ? (c.sibling = t.child, t.child = c) : (e = n.last, e !== null ? e.sibling = c : t.child = c, n.last = c);
        }
        return n.tail !== null ? (t = n.tail, n.rendering = t, n.tail = t.sibling, n.renderingStartTime = st(), t.sibling = null, e = tt.current, X(tt, s ? e & 1 | 2 : e & 1), t) : (xt(t), null);
      case 22:
      case 23:
        return Qi(), s = t.memoizedState !== null, r !== null && r.memoizedState !== null !== s && (t.flags |= 8192), s && t.mode & 1 ? Vt & 1073741824 && (xt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : xt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(z(156, t.tag));
  }
  function Lw(r, t) {
    switch (ki(t), t.tag) {
      case 1:
        return Wt(t.type) && _s(), r = t.flags, r & 65536 ? (t.flags = r & -65537 | 128, t) : null;
      case 3:
        return pn(), Z(It), Z(Et), Ni(), r = t.flags, r & 65536 && !(r & 128) ? (t.flags = r & -65537 | 128, t) : null;
      case 5:
        return Li(t), null;
      case 13:
        if (Z(tt), r = t.memoizedState, r !== null && r.dehydrated !== null) {
          if (t.alternate === null) throw Error(z(340));
          dn();
        }
        return r = t.flags, r & 65536 ? (t.flags = r & -65537 | 128, t) : null;
      case 19:
        return Z(tt), null;
      case 4:
        return pn(), null;
      case 10:
        return Ei(t.type._context), null;
      case 22:
      case 23:
        return Qi(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Oo = false, St = false, Nw = typeof WeakSet == "function" ? WeakSet : Set, P = null;
  function Kr(r, t) {
    var e = r.ref;
    if (e !== null) if (typeof e == "function") try {
      e(null);
    } catch (s) {
      rt(r, t, s);
    }
    else e.current = null;
  }
  function Ha(r, t, e) {
    try {
      e();
    } catch (s) {
      rt(r, t, s);
    }
  }
  var qc = false;
  function Fw(r, t) {
    if (Oa = Jo, r = sl(), mi(r)) {
      if ("selectionStart" in r) var e = {
        start: r.selectionStart,
        end: r.selectionEnd
      };
      else t: {
        e = (e = r.ownerDocument) && e.defaultView || window;
        var s = e.getSelection && e.getSelection();
        if (s && s.rangeCount !== 0) {
          e = s.anchorNode;
          var o = s.anchorOffset, n = s.focusNode;
          s = s.focusOffset;
          try {
            e.nodeType, n.nodeType;
          } catch {
            e = null;
            break t;
          }
          var c = 0, d = -1, p = -1, l = 0, y = 0, x = r, k = null;
          e: for (; ; ) {
            for (var O; x !== e || o !== 0 && x.nodeType !== 3 || (d = c + o), x !== n || s !== 0 && x.nodeType !== 3 || (p = c + s), x.nodeType === 3 && (c += x.nodeValue.length), (O = x.firstChild) !== null; ) k = x, x = O;
            for (; ; ) {
              if (x === r) break e;
              if (k === e && ++l === o && (d = c), k === n && ++y === s && (p = c), (O = x.nextSibling) !== null) break;
              x = k, k = x.parentNode;
            }
            x = O;
          }
          e = d === -1 || p === -1 ? null : {
            start: d,
            end: p
          };
        } else e = null;
      }
      e = e || {
        start: 0,
        end: 0
      };
    } else e = null;
    for (La = {
      focusedElem: r,
      selectionRange: e
    }, Jo = false, P = t; P !== null; ) if (t = P, r = t.child, (t.subtreeFlags & 1028) !== 0 && r !== null) r.return = t, P = r;
    else for (; P !== null; ) {
      t = P;
      try {
        var L = t.alternate;
        if (t.flags & 1024) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (L !== null) {
              var N = L.memoizedProps, A = L.memoizedState, m = t.stateNode, h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? N : ae(t.type, N), A);
              m.__reactInternalSnapshotBeforeUpdate = h;
            }
            break;
          case 3:
            var v = t.stateNode.containerInfo;
            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(z(163));
        }
      } catch (E) {
        rt(t, t.return, E);
      }
      if (r = t.sibling, r !== null) {
        r.return = t.return, P = r;
        break;
      }
      P = t.return;
    }
    return L = qc, qc = false, L;
  }
  function Mn(r, t, e) {
    var s = t.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var o = s = s.next;
      do {
        if ((o.tag & r) === r) {
          var n = o.destroy;
          o.destroy = void 0, n !== void 0 && Ha(t, e, n);
        }
        o = o.next;
      } while (o !== s);
    }
  }
  function Es(r, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var e = t = t.next;
      do {
        if ((e.tag & r) === r) {
          var s = e.create;
          e.destroy = s();
        }
        e = e.next;
      } while (e !== t);
    }
  }
  function Ya(r) {
    var t = r.ref;
    if (t !== null) {
      var e = r.stateNode;
      switch (r.tag) {
        case 5:
          r = e;
          break;
        default:
          r = e;
      }
      typeof t == "function" ? t(r) : t.current = r;
    }
  }
  function _p(r) {
    var t = r.alternate;
    t !== null && (r.alternate = null, _p(t)), r.child = null, r.deletions = null, r.sibling = null, r.tag === 5 && (t = r.stateNode, t !== null && (delete t[ve], delete t[Gn], delete t[Pa], delete t[ww], delete t[fw])), r.stateNode = null, r.return = null, r.dependencies = null, r.memoizedProps = null, r.memoizedState = null, r.pendingProps = null, r.stateNode = null, r.updateQueue = null;
  }
  function rp(r) {
    return r.tag === 5 || r.tag === 3 || r.tag === 4;
  }
  function Kc(r) {
    t: for (; ; ) {
      for (; r.sibling === null; ) {
        if (r.return === null || rp(r.return)) return null;
        r = r.return;
      }
      for (r.sibling.return = r.return, r = r.sibling; r.tag !== 5 && r.tag !== 6 && r.tag !== 18; ) {
        if (r.flags & 2 || r.child === null || r.tag === 4) continue t;
        r.child.return = r, r = r.child;
      }
      if (!(r.flags & 2)) return r.stateNode;
    }
  }
  function Xa(r, t, e) {
    var s = r.tag;
    if (s === 5 || s === 6) r = r.stateNode, t ? e.nodeType === 8 ? e.parentNode.insertBefore(r, t) : e.insertBefore(r, t) : (e.nodeType === 8 ? (t = e.parentNode, t.insertBefore(r, e)) : (t = e, t.appendChild(r)), e = e._reactRootContainer, e != null || t.onclick !== null || (t.onclick = es));
    else if (s !== 4 && (r = r.child, r !== null)) for (Xa(r, t, e), r = r.sibling; r !== null; ) Xa(r, t, e), r = r.sibling;
  }
  function qa(r, t, e) {
    var s = r.tag;
    if (s === 5 || s === 6) r = r.stateNode, t ? e.insertBefore(r, t) : e.appendChild(r);
    else if (s !== 4 && (r = r.child, r !== null)) for (qa(r, t, e), r = r.sibling; r !== null; ) qa(r, t, e), r = r.sibling;
  }
  var yt = null, ce = false;
  function t_(r, t, e) {
    for (e = e.child; e !== null; ) np(r, t, e), e = e.sibling;
  }
  function np(r, t, e) {
    if (Ee && typeof Ee.onCommitFiberUnmount == "function") try {
      Ee.onCommitFiberUnmount(hs, e);
    } catch {
    }
    switch (e.tag) {
      case 5:
        St || Kr(e, t);
      case 6:
        var s = yt, o = ce;
        yt = null, t_(r, t, e), yt = s, ce = o, yt !== null && (ce ? (r = yt, e = e.stateNode, r.nodeType === 8 ? r.parentNode.removeChild(e) : r.removeChild(e)) : yt.removeChild(e.stateNode));
        break;
      case 18:
        yt !== null && (ce ? (r = yt, e = e.stateNode, r.nodeType === 8 ? Js(r.parentNode, e) : r.nodeType === 1 && Js(r, e), Xn(r)) : Js(yt, e.stateNode));
        break;
      case 4:
        s = yt, o = ce, yt = e.stateNode.containerInfo, ce = true, t_(r, t, e), yt = s, ce = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!St && (s = e.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          o = s = s.next;
          do {
            var n = o, c = n.destroy;
            n = n.tag, c !== void 0 && (n & 2 || n & 4) && Ha(e, t, c), o = o.next;
          } while (o !== s);
        }
        t_(r, t, e);
        break;
      case 1:
        if (!St && (Kr(e, t), s = e.stateNode, typeof s.componentWillUnmount == "function")) try {
          s.props = e.memoizedProps, s.state = e.memoizedState, s.componentWillUnmount();
        } catch (d) {
          rt(e, t, d);
        }
        t_(r, t, e);
        break;
      case 21:
        t_(r, t, e);
        break;
      case 22:
        e.mode & 1 ? (St = (s = St) || e.memoizedState !== null, t_(r, t, e), St = s) : t_(r, t, e);
        break;
      default:
        t_(r, t, e);
    }
  }
  function Zc(r) {
    var t = r.updateQueue;
    if (t !== null) {
      r.updateQueue = null;
      var e = r.stateNode;
      e === null && (e = r.stateNode = new Nw()), t.forEach(function(s) {
        var o = Ww.bind(null, r, s);
        e.has(s) || (e.add(s), s.then(o, o));
      });
    }
  }
  function se(r, t) {
    var e = t.deletions;
    if (e !== null) for (var s = 0; s < e.length; s++) {
      var o = e[s];
      try {
        var n = r, c = t, d = c;
        t: for (; d !== null; ) {
          switch (d.tag) {
            case 5:
              yt = d.stateNode, ce = false;
              break t;
            case 3:
              yt = d.stateNode.containerInfo, ce = true;
              break t;
            case 4:
              yt = d.stateNode.containerInfo, ce = true;
              break t;
          }
          d = d.return;
        }
        if (yt === null) throw Error(z(160));
        np(n, c, o), yt = null, ce = false;
        var p = o.alternate;
        p !== null && (p.return = null), o.return = null;
      } catch (l) {
        rt(o, t, l);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) op(t, r), t = t.sibling;
  }
  function op(r, t) {
    var e = r.alternate, s = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (se(t, r), ge(r), s & 4) {
          try {
            Mn(3, r, r.return), Es(3, r);
          } catch (N) {
            rt(r, r.return, N);
          }
          try {
            Mn(5, r, r.return);
          } catch (N) {
            rt(r, r.return, N);
          }
        }
        break;
      case 1:
        se(t, r), ge(r), s & 512 && e !== null && Kr(e, e.return);
        break;
      case 5:
        if (se(t, r), ge(r), s & 512 && e !== null && Kr(e, e.return), r.flags & 32) {
          var o = r.stateNode;
          try {
            Bn(o, "");
          } catch (N) {
            rt(r, r.return, N);
          }
        }
        if (s & 4 && (o = r.stateNode, o != null)) {
          var n = r.memoizedProps, c = e !== null ? e.memoizedProps : n, d = r.type, p = r.updateQueue;
          if (r.updateQueue = null, p !== null) try {
            d === "input" && n.type === "radio" && n.name != null && zd(o, n), ya(d, c);
            var l = ya(d, n);
            for (c = 0; c < p.length; c += 2) {
              var y = p[c], x = p[c + 1];
              y === "style" ? Fd(o, x) : y === "dangerouslySetInnerHTML" ? Ld(o, x) : y === "children" ? Bn(o, x) : ai(o, y, x, l);
            }
            switch (d) {
              case "input":
                wa(o, n);
                break;
              case "textarea":
                Cd(o, n);
                break;
              case "select":
                var k = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!n.multiple;
                var O = n.value;
                O != null ? Gr(o, !!n.multiple, O, false) : k !== !!n.multiple && (n.defaultValue != null ? Gr(o, !!n.multiple, n.defaultValue, true) : Gr(o, !!n.multiple, n.multiple ? [] : "", false));
            }
            o[Gn] = n;
          } catch (N) {
            rt(r, r.return, N);
          }
        }
        break;
      case 6:
        if (se(t, r), ge(r), s & 4) {
          if (r.stateNode === null) throw Error(z(162));
          o = r.stateNode, n = r.memoizedProps;
          try {
            o.nodeValue = n;
          } catch (N) {
            rt(r, r.return, N);
          }
        }
        break;
      case 3:
        if (se(t, r), ge(r), s & 4 && e !== null && e.memoizedState.isDehydrated) try {
          Xn(t.containerInfo);
        } catch (N) {
          rt(r, r.return, N);
        }
        break;
      case 4:
        se(t, r), ge(r);
        break;
      case 13:
        se(t, r), ge(r), o = r.child, o.flags & 8192 && (n = o.memoizedState !== null, o.stateNode.isHidden = n, !n || o.alternate !== null && o.alternate.memoizedState !== null || (Ii = st())), s & 4 && Zc(r);
        break;
      case 22:
        if (y = e !== null && e.memoizedState !== null, r.mode & 1 ? (St = (l = St) || y, se(t, r), St = l) : se(t, r), ge(r), s & 8192) {
          if (l = r.memoizedState !== null, (r.stateNode.isHidden = l) && !y && r.mode & 1) for (P = r, y = r.child; y !== null; ) {
            for (x = P = y; P !== null; ) {
              switch (k = P, O = k.child, k.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Mn(4, k, k.return);
                  break;
                case 1:
                  Kr(k, k.return);
                  var L = k.stateNode;
                  if (typeof L.componentWillUnmount == "function") {
                    s = k, e = k.return;
                    try {
                      t = s, L.props = t.memoizedProps, L.state = t.memoizedState, L.componentWillUnmount();
                    } catch (N) {
                      rt(s, e, N);
                    }
                  }
                  break;
                case 5:
                  Kr(k, k.return);
                  break;
                case 22:
                  if (k.memoizedState !== null) {
                    Gc(x);
                    continue;
                  }
              }
              O !== null ? (O.return = k, P = O) : Gc(x);
            }
            y = y.sibling;
          }
          t: for (y = null, x = r; ; ) {
            if (x.tag === 5) {
              if (y === null) {
                y = x;
                try {
                  o = x.stateNode, l ? (n = o.style, typeof n.setProperty == "function" ? n.setProperty("display", "none", "important") : n.display = "none") : (d = x.stateNode, p = x.memoizedProps.style, c = p != null && p.hasOwnProperty("display") ? p.display : null, d.style.display = Nd("display", c));
                } catch (N) {
                  rt(r, r.return, N);
                }
              }
            } else if (x.tag === 6) {
              if (y === null) try {
                x.stateNode.nodeValue = l ? "" : x.memoizedProps;
              } catch (N) {
                rt(r, r.return, N);
              }
            } else if ((x.tag !== 22 && x.tag !== 23 || x.memoizedState === null || x === r) && x.child !== null) {
              x.child.return = x, x = x.child;
              continue;
            }
            if (x === r) break t;
            for (; x.sibling === null; ) {
              if (x.return === null || x.return === r) break t;
              y === x && (y = null), x = x.return;
            }
            y === x && (y = null), x.sibling.return = x.return, x = x.sibling;
          }
        }
        break;
      case 19:
        se(t, r), ge(r), s & 4 && Zc(r);
        break;
      case 21:
        break;
      default:
        se(t, r), ge(r);
    }
  }
  function ge(r) {
    var t = r.flags;
    if (t & 2) {
      try {
        t: {
          for (var e = r.return; e !== null; ) {
            if (rp(e)) {
              var s = e;
              break t;
            }
            e = e.return;
          }
          throw Error(z(160));
        }
        switch (s.tag) {
          case 5:
            var o = s.stateNode;
            s.flags & 32 && (Bn(o, ""), s.flags &= -33);
            var n = Kc(r);
            qa(r, n, o);
            break;
          case 3:
          case 4:
            var c = s.stateNode.containerInfo, d = Kc(r);
            Xa(r, d, c);
            break;
          default:
            throw Error(z(161));
        }
      } catch (p) {
        rt(r, r.return, p);
      }
      r.flags &= -3;
    }
    t & 4096 && (r.flags &= -4097);
  }
  function Pw(r, t, e) {
    P = r, sp(r);
  }
  function sp(r, t, e) {
    for (var s = (r.mode & 1) !== 0; P !== null; ) {
      var o = P, n = o.child;
      if (o.tag === 22 && s) {
        var c = o.memoizedState !== null || Oo;
        if (!c) {
          var d = o.alternate, p = d !== null && d.memoizedState !== null || St;
          d = Oo;
          var l = St;
          if (Oo = c, (St = p) && !l) for (P = o; P !== null; ) c = P, p = c.child, c.tag === 22 && c.memoizedState !== null ? td(o) : p !== null ? (p.return = c, P = p) : td(o);
          for (; n !== null; ) P = n, sp(n), n = n.sibling;
          P = o, Oo = d, St = l;
        }
        Jc(r);
      } else o.subtreeFlags & 8772 && n !== null ? (n.return = o, P = n) : Jc(r);
    }
  }
  function Jc(r) {
    for (; P !== null; ) {
      var t = P;
      if (t.flags & 8772) {
        var e = t.alternate;
        try {
          if (t.flags & 8772) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              St || Es(5, t);
              break;
            case 1:
              var s = t.stateNode;
              if (t.flags & 4 && !St) if (e === null) s.componentDidMount();
              else {
                var o = t.elementType === t.type ? e.memoizedProps : ae(t.type, e.memoizedProps);
                s.componentDidUpdate(o, e.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
              }
              var n = t.updateQueue;
              n !== null && Dc(t, n, s);
              break;
            case 3:
              var c = t.updateQueue;
              if (c !== null) {
                if (e = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    e = t.child.stateNode;
                    break;
                  case 1:
                    e = t.child.stateNode;
                }
                Dc(t, c, e);
              }
              break;
            case 5:
              var d = t.stateNode;
              if (e === null && t.flags & 4) {
                e = d;
                var p = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    p.autoFocus && e.focus();
                    break;
                  case "img":
                    p.src && (e.src = p.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var l = t.alternate;
                if (l !== null) {
                  var y = l.memoizedState;
                  if (y !== null) {
                    var x = y.dehydrated;
                    x !== null && Xn(x);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(z(163));
          }
          St || t.flags & 512 && Ya(t);
        } catch (k) {
          rt(t, t.return, k);
        }
      }
      if (t === r) {
        P = null;
        break;
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, P = e;
        break;
      }
      P = t.return;
    }
  }
  function Gc(r) {
    for (; P !== null; ) {
      var t = P;
      if (t === r) {
        P = null;
        break;
      }
      var e = t.sibling;
      if (e !== null) {
        e.return = t.return, P = e;
        break;
      }
      P = t.return;
    }
  }
  function td(r) {
    for (; P !== null; ) {
      var t = P;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var e = t.return;
            try {
              Es(4, t);
            } catch (p) {
              rt(t, e, p);
            }
            break;
          case 1:
            var s = t.stateNode;
            if (typeof s.componentDidMount == "function") {
              var o = t.return;
              try {
                s.componentDidMount();
              } catch (p) {
                rt(t, o, p);
              }
            }
            var n = t.return;
            try {
              Ya(t);
            } catch (p) {
              rt(t, n, p);
            }
            break;
          case 5:
            var c = t.return;
            try {
              Ya(t);
            } catch (p) {
              rt(t, c, p);
            }
        }
      } catch (p) {
        rt(t, t.return, p);
      }
      if (t === r) {
        P = null;
        break;
      }
      var d = t.sibling;
      if (d !== null) {
        d.return = t.return, P = d;
        break;
      }
      P = t.return;
    }
  }
  var Tw = Math.ceil, ps = Je.ReactCurrentDispatcher, Ui = Je.ReactCurrentOwner, _e = Je.ReactCurrentBatchConfig, B = 0, ht = null, at = null, mt = 0, Vt = 0, Zr = ir(0), lt = 0, oo = null, Tr = 0, zs = 0, Mi = 0, In = null, Ut = null, Ii = 0, wn = 1 / 0, Le = null, us = false, Ka = null, _r = null, Lo = false, Y_ = null, ws = 0, Wn = 0, Za = null, Vo = -1, Bo = 0;
  function Nt() {
    return B & 6 ? st() : Vo !== -1 ? Vo : Vo = st();
  }
  function rr(r) {
    return r.mode & 1 ? B & 2 && mt !== 0 ? mt & -mt : bw.transition !== null ? (Bo === 0 && (Bo = Bd()), Bo) : (r = H, r !== 0 || (r = window.event, r = r === void 0 ? 16 : Zd(r.type)), r) : 1;
  }
  function we(r, t, e, s) {
    if (50 < Wn) throw Wn = 0, Za = null, Error(z(185));
    io(r, e, s), (!(B & 2) || r !== ht) && (r === ht && (!(B & 2) && (zs |= e), lt === 4 && o_(r, mt)), Qt(r, s), e === 1 && B === 0 && !(t.mode & 1) && (wn = st() + 500, xs && cr()));
  }
  function Qt(r, t) {
    var e = r.callbackNode;
    bu(r, t);
    var s = Zo(r, r === ht ? mt : 0);
    if (s === 0) e !== null && cc(e), r.callbackNode = null, r.callbackPriority = 0;
    else if (t = s & -s, r.callbackPriority !== t) {
      if (e != null && cc(e), t === 1) r.tag === 0 ? gw(ed.bind(null, r)) : gl(ed.bind(null, r)), pw(function() {
        !(B & 6) && cr();
      }), e = null;
      else {
        switch (Ad(s)) {
          case 1:
            e = pi;
            break;
          case 4:
            e = Qd;
            break;
          case 16:
            e = Ko;
            break;
          case 536870912:
            e = Vd;
            break;
          default:
            e = Ko;
        }
        e = wp(e, ap.bind(null, r));
      }
      r.callbackPriority = t, r.callbackNode = e;
    }
  }
  function ap(r, t) {
    if (Vo = -1, Bo = 0, B & 6) throw Error(z(327));
    var e = r.callbackNode;
    if (nn() && r.callbackNode !== e) return null;
    var s = Zo(r, r === ht ? mt : 0);
    if (s === 0) return null;
    if (s & 30 || s & r.expiredLanes || t) t = fs(r, s);
    else {
      t = s;
      var o = B;
      B |= 2;
      var n = cp();
      (ht !== r || mt !== t) && (Le = null, wn = st() + 500, Or(r, t));
      do
        try {
          $w();
          break;
        } catch (d) {
          ip(r, d);
        }
      while (true);
      Si(), ps.current = n, B = o, at !== null ? t = 0 : (ht = null, mt = 0, t = lt);
    }
    if (t !== 0) {
      if (t === 2 && (o = ja(r), o !== 0 && (s = o, t = Ja(r, o))), t === 1) throw e = oo, Or(r, 0), o_(r, s), Qt(r, st()), e;
      if (t === 6) o_(r, s);
      else {
        if (o = r.current.alternate, !(s & 30) && !Rw(o) && (t = fs(r, s), t === 2 && (n = ja(r), n !== 0 && (s = n, t = Ja(r, n))), t === 1)) throw e = oo, Or(r, 0), o_(r, s), Qt(r, st()), e;
        switch (r.finishedWork = o, r.finishedLanes = s, t) {
          case 0:
          case 1:
            throw Error(z(345));
          case 2:
            ur(r, Ut, Le);
            break;
          case 3:
            if (o_(r, s), (s & 130023424) === s && (t = Ii + 500 - st(), 10 < t)) {
              if (Zo(r, 0) !== 0) break;
              if (o = r.suspendedLanes, (o & s) !== s) {
                Nt(), r.pingedLanes |= r.suspendedLanes & o;
                break;
              }
              r.timeoutHandle = Fa(ur.bind(null, r, Ut, Le), t);
              break;
            }
            ur(r, Ut, Le);
            break;
          case 4:
            if (o_(r, s), (s & 4194240) === s) break;
            for (t = r.eventTimes, o = -1; 0 < s; ) {
              var c = 31 - ue(s);
              n = 1 << c, c = t[c], c > o && (o = c), s &= ~n;
            }
            if (s = o, s = st() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * Tw(s / 1960)) - s, 10 < s) {
              r.timeoutHandle = Fa(ur.bind(null, r, Ut, Le), s);
              break;
            }
            ur(r, Ut, Le);
            break;
          case 5:
            ur(r, Ut, Le);
            break;
          default:
            throw Error(z(329));
        }
      }
    }
    return Qt(r, st()), r.callbackNode === e ? ap.bind(null, r) : null;
  }
  function Ja(r, t) {
    var e = In;
    return r.current.memoizedState.isDehydrated && (Or(r, t).flags |= 256), r = fs(r, t), r !== 2 && (t = Ut, Ut = e, t !== null && Ga(t)), r;
  }
  function Ga(r) {
    Ut === null ? Ut = r : Ut.push.apply(Ut, r);
  }
  function Rw(r) {
    for (var t = r; ; ) {
      if (t.flags & 16384) {
        var e = t.updateQueue;
        if (e !== null && (e = e.stores, e !== null)) for (var s = 0; s < e.length; s++) {
          var o = e[s], n = o.getSnapshot;
          o = o.value;
          try {
            if (!fe(n(), o)) return false;
          } catch {
            return false;
          }
        }
      }
      if (e = t.child, t.subtreeFlags & 16384 && e !== null) e.return = t, t = e;
      else {
        if (t === r) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === r) return true;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return true;
  }
  function o_(r, t) {
    for (t &= ~Mi, t &= ~zs, r.suspendedLanes |= t, r.pingedLanes &= ~t, r = r.expirationTimes; 0 < t; ) {
      var e = 31 - ue(t), s = 1 << e;
      r[e] = -1, t &= ~s;
    }
  }
  function ed(r) {
    if (B & 6) throw Error(z(327));
    nn();
    var t = Zo(r, 0);
    if (!(t & 1)) return Qt(r, st()), null;
    var e = fs(r, t);
    if (r.tag !== 0 && e === 2) {
      var s = ja(r);
      s !== 0 && (t = s, e = Ja(r, s));
    }
    if (e === 1) throw e = oo, Or(r, 0), o_(r, t), Qt(r, st()), e;
    if (e === 6) throw Error(z(345));
    return r.finishedWork = r.current.alternate, r.finishedLanes = t, ur(r, Ut, Le), Qt(r, st()), null;
  }
  function Wi(r, t) {
    var e = B;
    B |= 1;
    try {
      return r(t);
    } finally {
      B = e, B === 0 && (wn = st() + 500, xs && cr());
    }
  }
  function Rr(r) {
    Y_ !== null && Y_.tag === 0 && !(B & 6) && nn();
    var t = B;
    B |= 1;
    var e = _e.transition, s = H;
    try {
      if (_e.transition = null, H = 1, r) return r();
    } finally {
      H = s, _e.transition = e, B = t, !(B & 6) && cr();
    }
  }
  function Qi() {
    Vt = Zr.current, Z(Zr);
  }
  function Or(r, t) {
    r.finishedWork = null, r.finishedLanes = 0;
    var e = r.timeoutHandle;
    if (e !== -1 && (r.timeoutHandle = -1, lw(e)), at !== null) for (e = at.return; e !== null; ) {
      var s = e;
      switch (ki(s), s.tag) {
        case 1:
          s = s.type.childContextTypes, s != null && _s();
          break;
        case 3:
          pn(), Z(It), Z(Et), Ni();
          break;
        case 5:
          Li(s);
          break;
        case 4:
          pn();
          break;
        case 13:
          Z(tt);
          break;
        case 19:
          Z(tt);
          break;
        case 10:
          Ei(s.type._context);
          break;
        case 22:
        case 23:
          Qi();
      }
      e = e.return;
    }
    if (ht = r, at = r = nr(r.current, null), mt = Vt = t, lt = 0, oo = null, Mi = zs = Tr = 0, Ut = In = null, hr !== null) {
      for (t = 0; t < hr.length; t++) if (e = hr[t], s = e.interleaved, s !== null) {
        e.interleaved = null;
        var o = s.next, n = e.pending;
        if (n !== null) {
          var c = n.next;
          n.next = o, s.next = c;
        }
        e.pending = s;
      }
      hr = null;
    }
    return r;
  }
  function ip(r, t) {
    do {
      var e = at;
      try {
        if (Si(), Io.current = ls, ds) {
          for (var s = et.memoizedState; s !== null; ) {
            var o = s.queue;
            o !== null && (o.pending = null), s = s.next;
          }
          ds = false;
        }
        if (Pr = 0, gt = it = et = null, Un = false, _o = 0, Ui.current = null, e === null || e.return === null) {
          lt = 1, oo = t, at = null;
          break;
        }
        t: {
          var n = r, c = e.return, d = e, p = t;
          if (t = mt, d.flags |= 32768, p !== null && typeof p == "object" && typeof p.then == "function") {
            var l = p, y = d, x = y.tag;
            if (!(y.mode & 1) && (x === 0 || x === 11 || x === 15)) {
              var k = y.alternate;
              k ? (y.updateQueue = k.updateQueue, y.memoizedState = k.memoizedState, y.lanes = k.lanes) : (y.updateQueue = null, y.memoizedState = null);
            }
            var O = Qc(c);
            if (O !== null) {
              O.flags &= -257, Vc(O, c, d, n, t), O.mode & 1 && Wc(n, l, t), t = O, p = l;
              var L = t.updateQueue;
              if (L === null) {
                var N = /* @__PURE__ */ new Set();
                N.add(p), t.updateQueue = N;
              } else L.add(p);
              break t;
            } else {
              if (!(t & 1)) {
                Wc(n, l, t), Vi();
                break t;
              }
              p = Error(z(426));
            }
          } else if (J && d.mode & 1) {
            var A = Qc(c);
            if (A !== null) {
              !(A.flags & 65536) && (A.flags |= 256), Vc(A, c, d, n, t), xi(un(p, d));
              break t;
            }
          }
          n = p = un(p, d), lt !== 4 && (lt = 2), In === null ? In = [
            n
          ] : In.push(n), n = c;
          do {
            switch (n.tag) {
              case 3:
                n.flags |= 65536, t &= -t, n.lanes |= t;
                var m = Al(n, p, t);
                Rc(n, m);
                break t;
              case 1:
                d = p;
                var h = n.type, v = n.stateNode;
                if (!(n.flags & 128) && (typeof h.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (_r === null || !_r.has(v)))) {
                  n.flags |= 65536, t &= -t, n.lanes |= t;
                  var E = Hl(n, d, t);
                  Rc(n, E);
                  break t;
                }
            }
            n = n.return;
          } while (n !== null);
        }
        lp(e);
      } catch (F) {
        t = F, at === e && e !== null && (at = e = e.return);
        continue;
      }
      break;
    } while (true);
  }
  function cp() {
    var r = ps.current;
    return ps.current = ls, r === null ? ls : r;
  }
  function Vi() {
    (lt === 0 || lt === 3 || lt === 2) && (lt = 4), ht === null || !(Tr & 268435455) && !(zs & 268435455) || o_(ht, mt);
  }
  function fs(r, t) {
    var e = B;
    B |= 2;
    var s = cp();
    (ht !== r || mt !== t) && (Le = null, Or(r, t));
    do
      try {
        Dw();
        break;
      } catch (o) {
        ip(r, o);
      }
    while (true);
    if (Si(), B = e, ps.current = s, at !== null) throw Error(z(261));
    return ht = null, mt = 0, lt;
  }
  function Dw() {
    for (; at !== null; ) dp(at);
  }
  function $w() {
    for (; at !== null && !iu(); ) dp(at);
  }
  function dp(r) {
    var t = up(r.alternate, r, Vt);
    r.memoizedProps = r.pendingProps, t === null ? lp(r) : at = t, Ui.current = null;
  }
  function lp(r) {
    var t = r;
    do {
      var e = t.alternate;
      if (r = t.return, t.flags & 32768) {
        if (e = Lw(e, t), e !== null) {
          e.flags &= 32767, at = e;
          return;
        }
        if (r !== null) r.flags |= 32768, r.subtreeFlags = 0, r.deletions = null;
        else {
          lt = 6, at = null;
          return;
        }
      } else if (e = Ow(e, t, Vt), e !== null) {
        at = e;
        return;
      }
      if (t = t.sibling, t !== null) {
        at = t;
        return;
      }
      at = t = r;
    } while (t !== null);
    lt === 0 && (lt = 5);
  }
  function ur(r, t, e) {
    var s = H, o = _e.transition;
    try {
      _e.transition = null, H = 1, Uw(r, t, e, s);
    } finally {
      _e.transition = o, H = s;
    }
    return null;
  }
  function Uw(r, t, e, s) {
    do
      nn();
    while (Y_ !== null);
    if (B & 6) throw Error(z(327));
    e = r.finishedWork;
    var o = r.finishedLanes;
    if (e === null) return null;
    if (r.finishedWork = null, r.finishedLanes = 0, e === r.current) throw Error(z(177));
    r.callbackNode = null, r.callbackPriority = 0;
    var n = e.lanes | e.childLanes;
    if (hu(r, n), r === ht && (at = ht = null, mt = 0), !(e.subtreeFlags & 2064) && !(e.flags & 2064) || Lo || (Lo = true, wp(Ko, function() {
      return nn(), null;
    })), n = (e.flags & 15990) !== 0, e.subtreeFlags & 15990 || n) {
      n = _e.transition, _e.transition = null;
      var c = H;
      H = 1;
      var d = B;
      B |= 4, Ui.current = null, Fw(r, e), op(e, r), nw(La), Jo = !!Oa, La = Oa = null, r.current = e, Pw(e), cu(), B = d, H = c, _e.transition = n;
    } else r.current = e;
    if (Lo && (Lo = false, Y_ = r, ws = o), n = r.pendingLanes, n === 0 && (_r = null), pu(e.stateNode), Qt(r, st()), t !== null) for (s = r.onRecoverableError, e = 0; e < t.length; e++) o = t[e], s(o.value, {
      componentStack: o.stack,
      digest: o.digest
    });
    if (us) throw us = false, r = Ka, Ka = null, r;
    return ws & 1 && r.tag !== 0 && nn(), n = r.pendingLanes, n & 1 ? r === Za ? Wn++ : (Wn = 0, Za = r) : Wn = 0, cr(), null;
  }
  function nn() {
    if (Y_ !== null) {
      var r = Ad(ws), t = _e.transition, e = H;
      try {
        if (_e.transition = null, H = 16 > r ? 16 : r, Y_ === null) var s = false;
        else {
          if (r = Y_, Y_ = null, ws = 0, B & 6) throw Error(z(331));
          var o = B;
          for (B |= 4, P = r.current; P !== null; ) {
            var n = P, c = n.child;
            if (P.flags & 16) {
              var d = n.deletions;
              if (d !== null) {
                for (var p = 0; p < d.length; p++) {
                  var l = d[p];
                  for (P = l; P !== null; ) {
                    var y = P;
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Mn(8, y, n);
                    }
                    var x = y.child;
                    if (x !== null) x.return = y, P = x;
                    else for (; P !== null; ) {
                      y = P;
                      var k = y.sibling, O = y.return;
                      if (_p(y), y === l) {
                        P = null;
                        break;
                      }
                      if (k !== null) {
                        k.return = O, P = k;
                        break;
                      }
                      P = O;
                    }
                  }
                }
                var L = n.alternate;
                if (L !== null) {
                  var N = L.child;
                  if (N !== null) {
                    L.child = null;
                    do {
                      var A = N.sibling;
                      N.sibling = null, N = A;
                    } while (N !== null);
                  }
                }
                P = n;
              }
            }
            if (n.subtreeFlags & 2064 && c !== null) c.return = n, P = c;
            else t: for (; P !== null; ) {
              if (n = P, n.flags & 2048) switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  Mn(9, n, n.return);
              }
              var m = n.sibling;
              if (m !== null) {
                m.return = n.return, P = m;
                break t;
              }
              P = n.return;
            }
          }
          var h = r.current;
          for (P = h; P !== null; ) {
            c = P;
            var v = c.child;
            if (c.subtreeFlags & 2064 && v !== null) v.return = c, P = v;
            else t: for (c = h; P !== null; ) {
              if (d = P, d.flags & 2048) try {
                switch (d.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Es(9, d);
                }
              } catch (F) {
                rt(d, d.return, F);
              }
              if (d === c) {
                P = null;
                break t;
              }
              var E = d.sibling;
              if (E !== null) {
                E.return = d.return, P = E;
                break t;
              }
              P = d.return;
            }
          }
          if (B = o, cr(), Ee && typeof Ee.onPostCommitFiberRoot == "function") try {
            Ee.onPostCommitFiberRoot(hs, r);
          } catch {
          }
          s = true;
        }
        return s;
      } finally {
        H = e, _e.transition = t;
      }
    }
    return false;
  }
  function _d(r, t, e) {
    t = un(e, t), t = Al(r, t, 1), r = er(r, t, 1), t = Nt(), r !== null && (io(r, 1, t), Qt(r, t));
  }
  function rt(r, t, e) {
    if (r.tag === 3) _d(r, r, e);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        _d(t, r, e);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (_r === null || !_r.has(s))) {
          r = un(e, r), r = Hl(t, r, 1), t = er(t, r, 1), r = Nt(), t !== null && (io(t, 1, r), Qt(t, r));
          break;
        }
      }
      t = t.return;
    }
  }
  function Mw(r, t, e) {
    var s = r.pingCache;
    s !== null && s.delete(t), t = Nt(), r.pingedLanes |= r.suspendedLanes & e, ht === r && (mt & e) === e && (lt === 4 || lt === 3 && (mt & 130023424) === mt && 500 > st() - Ii ? Or(r, 0) : Mi |= e), Qt(r, t);
  }
  function pp(r, t) {
    t === 0 && (r.mode & 1 ? (t = mo, mo <<= 1, !(mo & 130023424) && (mo = 4194304)) : t = 1);
    var e = Nt();
    r = Ke(r, t), r !== null && (io(r, t, e), Qt(r, e));
  }
  function Iw(r) {
    var t = r.memoizedState, e = 0;
    t !== null && (e = t.retryLane), pp(r, e);
  }
  function Ww(r, t) {
    var e = 0;
    switch (r.tag) {
      case 13:
        var s = r.stateNode, o = r.memoizedState;
        o !== null && (e = o.retryLane);
        break;
      case 19:
        s = r.stateNode;
        break;
      default:
        throw Error(z(314));
    }
    s !== null && s.delete(t), pp(r, e);
  }
  var up;
  up = function(r, t, e) {
    if (r !== null) if (r.memoizedProps !== t.pendingProps || It.current) Mt = true;
    else {
      if (!(r.lanes & e) && !(t.flags & 128)) return Mt = false, Cw(r, t, e);
      Mt = !!(r.flags & 131072);
    }
    else Mt = false, J && t.flags & 1048576 && bl(t, os, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var s = t.type;
        Qo(r, t), r = t.pendingProps;
        var o = cn(t, Et.current);
        rn(t, e), o = Pi(null, t, s, r, o, e);
        var n = Ti();
        return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Wt(s) ? (n = true, rs(t)) : n = false, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Ci(t), o.updater = Ss, t.stateNode = o, o._reactInternals = t, Ma(t, s, r, e), t = Qa(null, t, s, true, n, e)) : (t.tag = 0, J && n && vi(t), Ct(null, t, o, e), t = t.child), t;
      case 16:
        s = t.elementType;
        t: {
          switch (Qo(r, t), r = t.pendingProps, o = s._init, s = o(s._payload), t.type = s, o = t.tag = Vw(s), r = ae(s, r), o) {
            case 0:
              t = Wa(null, t, s, r, e);
              break t;
            case 1:
              t = Hc(null, t, s, r, e);
              break t;
            case 11:
              t = Bc(null, t, s, r, e);
              break t;
            case 14:
              t = Ac(null, t, s, ae(s.type, r), e);
              break t;
          }
          throw Error(z(306, s, ""));
        }
        return t;
      case 0:
        return s = t.type, o = t.pendingProps, o = t.elementType === s ? o : ae(s, o), Wa(r, t, s, o, e);
      case 1:
        return s = t.type, o = t.pendingProps, o = t.elementType === s ? o : ae(s, o), Hc(r, t, s, o, e);
      case 3:
        t: {
          if (Kl(t), r === null) throw Error(z(387));
          s = t.pendingProps, n = t.memoizedState, o = n.element, xl(r, t), is(t, s, null, e);
          var c = t.memoizedState;
          if (s = c.element, n.isDehydrated) if (n = {
            element: s,
            isDehydrated: false,
            cache: c.cache,
            pendingSuspenseBoundaries: c.pendingSuspenseBoundaries,
            transitions: c.transitions
          }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
            o = un(Error(z(423)), t), t = Yc(r, t, s, e, o);
            break t;
          } else if (s !== o) {
            o = un(Error(z(424)), t), t = Yc(r, t, s, e, o);
            break t;
          } else for (At = tr(t.stateNode.containerInfo.firstChild), Ht = t, J = true, de = null, e = vl(t, null, s, e), t.child = e; e; ) e.flags = e.flags & -3 | 4096, e = e.sibling;
          else {
            if (dn(), s === o) {
              t = Ze(r, t, e);
              break t;
            }
            Ct(r, t, s, e);
          }
          t = t.child;
        }
        return t;
      case 5:
        return jl(t), r === null && Da(t), s = t.type, o = t.pendingProps, n = r !== null ? r.memoizedProps : null, c = o.children, Na(s, o) ? c = null : n !== null && Na(s, n) && (t.flags |= 32), ql(r, t), Ct(r, t, c, e), t.child;
      case 6:
        return r === null && Da(t), null;
      case 13:
        return Zl(r, t, e);
      case 4:
        return Oi(t, t.stateNode.containerInfo), s = t.pendingProps, r === null ? t.child = ln(t, null, s, e) : Ct(r, t, s, e), t.child;
      case 11:
        return s = t.type, o = t.pendingProps, o = t.elementType === s ? o : ae(s, o), Bc(r, t, s, o, e);
      case 7:
        return Ct(r, t, t.pendingProps, e), t.child;
      case 8:
        return Ct(r, t, t.pendingProps.children, e), t.child;
      case 12:
        return Ct(r, t, t.pendingProps.children, e), t.child;
      case 10:
        t: {
          if (s = t.type._context, o = t.pendingProps, n = t.memoizedProps, c = o.value, X(ss, s._currentValue), s._currentValue = c, n !== null) if (fe(n.value, c)) {
            if (n.children === o.children && !It.current) {
              t = Ze(r, t, e);
              break t;
            }
          } else for (n = t.child, n !== null && (n.return = t); n !== null; ) {
            var d = n.dependencies;
            if (d !== null) {
              c = n.child;
              for (var p = d.firstContext; p !== null; ) {
                if (p.context === s) {
                  if (n.tag === 1) {
                    p = Ye(-1, e & -e), p.tag = 2;
                    var l = n.updateQueue;
                    if (l !== null) {
                      l = l.shared;
                      var y = l.pending;
                      y === null ? p.next = p : (p.next = y.next, y.next = p), l.pending = p;
                    }
                  }
                  n.lanes |= e, p = n.alternate, p !== null && (p.lanes |= e), $a(n.return, e, t), d.lanes |= e;
                  break;
                }
                p = p.next;
              }
            } else if (n.tag === 10) c = n.type === t.type ? null : n.child;
            else if (n.tag === 18) {
              if (c = n.return, c === null) throw Error(z(341));
              c.lanes |= e, d = c.alternate, d !== null && (d.lanes |= e), $a(c, e, t), c = n.sibling;
            } else c = n.child;
            if (c !== null) c.return = n;
            else for (c = n; c !== null; ) {
              if (c === t) {
                c = null;
                break;
              }
              if (n = c.sibling, n !== null) {
                n.return = c.return, c = n;
                break;
              }
              c = c.return;
            }
            n = c;
          }
          Ct(r, t, o.children, e), t = t.child;
        }
        return t;
      case 9:
        return o = t.type, s = t.pendingProps.children, rn(t, e), o = re(o), s = s(o), t.flags |= 1, Ct(r, t, s, e), t.child;
      case 14:
        return s = t.type, o = ae(s, t.pendingProps), o = ae(s.type, o), Ac(r, t, s, o, e);
      case 15:
        return Yl(r, t, t.type, t.pendingProps, e);
      case 17:
        return s = t.type, o = t.pendingProps, o = t.elementType === s ? o : ae(s, o), Qo(r, t), t.tag = 1, Wt(s) ? (r = true, rs(t)) : r = false, rn(t, e), Bl(t, s, o), Ma(t, s, o, e), Qa(null, t, s, true, r, e);
      case 19:
        return Jl(r, t, e);
      case 22:
        return Xl(r, t, e);
    }
    throw Error(z(156, t.tag));
  };
  function wp(r, t) {
    return Wd(r, t);
  }
  function Qw(r, t, e, s) {
    this.tag = r, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function te(r, t, e, s) {
    return new Qw(r, t, e, s);
  }
  function Bi(r) {
    return r = r.prototype, !(!r || !r.isReactComponent);
  }
  function Vw(r) {
    if (typeof r == "function") return Bi(r) ? 1 : 0;
    if (r != null) {
      if (r = r.$$typeof, r === ci) return 11;
      if (r === di) return 14;
    }
    return 2;
  }
  function nr(r, t) {
    var e = r.alternate;
    return e === null ? (e = te(r.tag, t, r.key, r.mode), e.elementType = r.elementType, e.type = r.type, e.stateNode = r.stateNode, e.alternate = r, r.alternate = e) : (e.pendingProps = t, e.type = r.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = r.flags & 14680064, e.childLanes = r.childLanes, e.lanes = r.lanes, e.child = r.child, e.memoizedProps = r.memoizedProps, e.memoizedState = r.memoizedState, e.updateQueue = r.updateQueue, t = r.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }, e.sibling = r.sibling, e.index = r.index, e.ref = r.ref, e;
  }
  function Ao(r, t, e, s, o, n) {
    var c = 2;
    if (s = r, typeof r == "function") Bi(r) && (c = 1);
    else if (typeof r == "string") c = 5;
    else t: switch (r) {
      case Wr:
        return Lr(e.children, o, n, t);
      case ii:
        c = 8, o |= 8;
        break;
      case ca:
        return r = te(12, e, t, o | 2), r.elementType = ca, r.lanes = n, r;
      case da:
        return r = te(13, e, t, o), r.elementType = da, r.lanes = n, r;
      case la:
        return r = te(19, e, t, o), r.elementType = la, r.lanes = n, r;
      case jd:
        return Cs(e, o, n, t);
      default:
        if (typeof r == "object" && r !== null) switch (r.$$typeof) {
          case kd:
            c = 10;
            break t;
          case xd:
            c = 9;
            break t;
          case ci:
            c = 11;
            break t;
          case di:
            c = 14;
            break t;
          case e_:
            c = 16, s = null;
            break t;
        }
        throw Error(z(130, r == null ? r : typeof r, ""));
    }
    return t = te(c, e, t, o), t.elementType = r, t.type = s, t.lanes = n, t;
  }
  function Lr(r, t, e, s) {
    return r = te(7, r, s, t), r.lanes = e, r;
  }
  function Cs(r, t, e, s) {
    return r = te(22, r, s, t), r.elementType = jd, r.lanes = e, r.stateNode = {
      isHidden: false
    }, r;
  }
  function sa(r, t, e) {
    return r = te(6, r, null, t), r.lanes = e, r;
  }
  function aa(r, t, e) {
    return t = te(4, r.children !== null ? r.children : [], r.key, t), t.lanes = e, t.stateNode = {
      containerInfo: r.containerInfo,
      pendingChildren: null,
      implementation: r.implementation
    }, t;
  }
  function Bw(r, t, e, s, o) {
    this.tag = t, this.containerInfo = r, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ws(0), this.expirationTimes = Ws(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ws(0), this.identifierPrefix = s, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
  }
  function Ai(r, t, e, s, o, n, c, d, p) {
    return r = new Bw(r, t, e, d, p), t === 1 ? (t = 1, n === true && (t |= 8)) : t = 0, n = te(3, null, null, t), r.current = n, n.stateNode = r, n.memoizedState = {
      element: s,
      isDehydrated: e,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    }, Ci(n), r;
  }
  function Aw(r, t, e) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Ir,
      key: s == null ? null : "" + s,
      children: r,
      containerInfo: t,
      implementation: e
    };
  }
  function fp(r) {
    if (!r) return sr;
    r = r._reactInternals;
    t: {
      if ($r(r) !== r || r.tag !== 1) throw Error(z(170));
      var t = r;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break t;
          case 1:
            if (Wt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break t;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(z(171));
    }
    if (r.tag === 1) {
      var e = r.type;
      if (Wt(e)) return fl(r, e, t);
    }
    return t;
  }
  function gp(r, t, e, s, o, n, c, d, p) {
    return r = Ai(e, s, true, r, o, n, c, d, p), r.context = fp(null), e = r.current, s = Nt(), o = rr(e), n = Ye(s, o), n.callback = t ?? null, er(e, n, o), r.current.lanes = o, io(r, o, s), Qt(r, s), r;
  }
  function Os(r, t, e, s) {
    var o = t.current, n = Nt(), c = rr(o);
    return e = fp(e), t.context === null ? t.context = e : t.pendingContext = e, t = Ye(n, c), t.payload = {
      element: r
    }, s = s === void 0 ? null : s, s !== null && (t.callback = s), r = er(o, t, c), r !== null && (we(r, o, c, n), Mo(r, o, c)), c;
  }
  function gs(r) {
    if (r = r.current, !r.child) return null;
    switch (r.child.tag) {
      case 5:
        return r.child.stateNode;
      default:
        return r.child.stateNode;
    }
  }
  function rd(r, t) {
    if (r = r.memoizedState, r !== null && r.dehydrated !== null) {
      var e = r.retryLane;
      r.retryLane = e !== 0 && e < t ? e : t;
    }
  }
  function Hi(r, t) {
    rd(r, t), (r = r.alternate) && rd(r, t);
  }
  function Hw() {
    return null;
  }
  var bp = typeof reportError == "function" ? reportError : function(r) {
    console.error(r);
  };
  function Yi(r) {
    this._internalRoot = r;
  }
  Ls.prototype.render = Yi.prototype.render = function(r) {
    var t = this._internalRoot;
    if (t === null) throw Error(z(409));
    Os(r, t, null, null);
  };
  Ls.prototype.unmount = Yi.prototype.unmount = function() {
    var r = this._internalRoot;
    if (r !== null) {
      this._internalRoot = null;
      var t = r.containerInfo;
      Rr(function() {
        Os(null, r, null, null);
      }), t[qe] = null;
    }
  };
  function Ls(r) {
    this._internalRoot = r;
  }
  Ls.prototype.unstable_scheduleHydration = function(r) {
    if (r) {
      var t = Xd();
      r = {
        blockedOn: null,
        target: r,
        priority: t
      };
      for (var e = 0; e < n_.length && t !== 0 && t < n_[e].priority; e++) ;
      n_.splice(e, 0, r), e === 0 && Kd(r);
    }
  };
  function Xi(r) {
    return !(!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11);
  }
  function Ns(r) {
    return !(!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11 && (r.nodeType !== 8 || r.nodeValue !== " react-mount-point-unstable "));
  }
  function nd() {
  }
  function Yw(r, t, e, s, o) {
    if (o) {
      if (typeof s == "function") {
        var n = s;
        s = function() {
          var l = gs(c);
          n.call(l);
        };
      }
      var c = gp(t, s, r, 0, null, false, false, "", nd);
      return r._reactRootContainer = c, r[qe] = c.current, Zn(r.nodeType === 8 ? r.parentNode : r), Rr(), c;
    }
    for (; o = r.lastChild; ) r.removeChild(o);
    if (typeof s == "function") {
      var d = s;
      s = function() {
        var l = gs(p);
        d.call(l);
      };
    }
    var p = Ai(r, 0, false, null, null, false, false, "", nd);
    return r._reactRootContainer = p, r[qe] = p.current, Zn(r.nodeType === 8 ? r.parentNode : r), Rr(function() {
      Os(t, p, e, s);
    }), p;
  }
  function Fs(r, t, e, s, o) {
    var n = e._reactRootContainer;
    if (n) {
      var c = n;
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var p = gs(c);
          d.call(p);
        };
      }
      Os(t, c, r, o);
    } else c = Yw(e, t, r, o, s);
    return gs(c);
  }
  Hd = function(r) {
    switch (r.tag) {
      case 3:
        var t = r.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var e = Nn(t.pendingLanes);
          e !== 0 && (ui(t, e | 1), Qt(t, st()), !(B & 6) && (wn = st() + 500, cr()));
        }
        break;
      case 13:
        Rr(function() {
          var s = Ke(r, 1);
          if (s !== null) {
            var o = Nt();
            we(s, r, 1, o);
          }
        }), Hi(r, 1);
    }
  };
  wi = function(r) {
    if (r.tag === 13) {
      var t = Ke(r, 134217728);
      if (t !== null) {
        var e = Nt();
        we(t, r, 134217728, e);
      }
      Hi(r, 134217728);
    }
  };
  Yd = function(r) {
    if (r.tag === 13) {
      var t = rr(r), e = Ke(r, t);
      if (e !== null) {
        var s = Nt();
        we(e, r, t, s);
      }
      Hi(r, t);
    }
  };
  Xd = function() {
    return H;
  };
  qd = function(r, t) {
    var e = H;
    try {
      return H = r, t();
    } finally {
      H = e;
    }
  };
  va = function(r, t, e) {
    switch (t) {
      case "input":
        if (wa(r, e), t = e.name, e.type === "radio" && t != null) {
          for (e = r; e.parentNode; ) e = e.parentNode;
          for (e = e.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < e.length; t++) {
            var s = e[t];
            if (s !== r && s.form === r.form) {
              var o = ks(s);
              if (!o) throw Error(z(90));
              Ed(s), wa(s, o);
            }
          }
        }
        break;
      case "textarea":
        Cd(r, e);
        break;
      case "select":
        t = e.value, t != null && Gr(r, !!e.multiple, t, false);
    }
  };
  Rd = Wi;
  Dd = Rr;
  var Xw = {
    usingClientEntryPoint: false,
    Events: [
      lo,
      Ar,
      ks,
      Pd,
      Td,
      Wi
    ]
  }, zn = {
    findFiberByHostInstance: br,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
  }, qw = {
    bundleType: zn.bundleType,
    version: zn.version,
    rendererPackageName: zn.rendererPackageName,
    rendererConfig: zn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Je.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(r) {
      return r = Md(r), r === null ? null : r.stateNode;
    },
    findFiberByHostInstance: zn.findFiberByHostInstance || Hw,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var No = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!No.isDisabled && No.supportsFiber) try {
      hs = No.inject(qw), Ee = No;
    } catch {
    }
  }
  qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xw;
  qt.createPortal = function(r, t) {
    var e = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Xi(t)) throw Error(z(200));
    return Aw(r, t, null, e);
  };
  qt.createRoot = function(r, t) {
    if (!Xi(r)) throw Error(z(299));
    var e = false, s = "", o = bp;
    return t != null && (t.unstable_strictMode === true && (e = true), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Ai(r, 1, false, null, null, e, false, s, o), r[qe] = t.current, Zn(r.nodeType === 8 ? r.parentNode : r), new Yi(t);
  };
  qt.findDOMNode = function(r) {
    if (r == null) return null;
    if (r.nodeType === 1) return r;
    var t = r._reactInternals;
    if (t === void 0) throw typeof r.render == "function" ? Error(z(188)) : (r = Object.keys(r).join(","), Error(z(268, r)));
    return r = Md(t), r = r === null ? null : r.stateNode, r;
  };
  qt.flushSync = function(r) {
    return Rr(r);
  };
  qt.hydrate = function(r, t, e) {
    if (!Ns(t)) throw Error(z(200));
    return Fs(null, r, t, true, e);
  };
  qt.hydrateRoot = function(r, t, e) {
    if (!Xi(r)) throw Error(z(405));
    var s = e != null && e.hydratedSources || null, o = false, n = "", c = bp;
    if (e != null && (e.unstable_strictMode === true && (o = true), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onRecoverableError !== void 0 && (c = e.onRecoverableError)), t = gp(t, null, r, 1, e ?? null, o, false, n, c), r[qe] = t.current, Zn(r), s) for (r = 0; r < s.length; r++) e = s[r], o = e._getVersion, o = o(e._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [
      e,
      o
    ] : t.mutableSourceEagerHydrationData.push(e, o);
    return new Ls(t);
  };
  qt.render = function(r, t, e) {
    if (!Ns(t)) throw Error(z(200));
    return Fs(null, r, t, false, e);
  };
  qt.unmountComponentAtNode = function(r) {
    if (!Ns(r)) throw Error(z(40));
    return r._reactRootContainer ? (Rr(function() {
      Fs(null, null, r, false, function() {
        r._reactRootContainer = null, r[qe] = null;
      });
    }), true) : false;
  };
  qt.unstable_batchedUpdates = Wi;
  qt.unstable_renderSubtreeIntoContainer = function(r, t, e, s) {
    if (!Ns(e)) throw Error(z(200));
    if (r == null || r._reactInternals === void 0) throw Error(z(38));
    return Fs(r, t, e, false, s);
  };
  qt.version = "18.3.1-next-f1338f8080-20240426";
  function hp() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hp);
    } catch (r) {
      console.error(r);
    }
  }
  hp(), hd.exports = qt;
  var Kw = hd.exports, yp, od = Kw;
  yp = od.createRoot, od.hydrateRoot;
  const Zw = "" + new URL("cardano_serialization_lib_bg-DYSGQNOE.wasm", import.meta.url).href, Jw = async (r = {}, t) => {
    let e;
    if (t.startsWith("data:")) {
      const s = t.replace(/^data:.*?base64,/, "");
      let o;
      if (typeof Buffer == "function" && typeof Buffer.from == "function") o = Buffer.from(s, "base64");
      else if (typeof atob == "function") {
        const n = atob(s);
        o = new Uint8Array(n.length);
        for (let c = 0; c < n.length; c++) o[c] = n.charCodeAt(c);
      } else throw new Error("Cannot decode base64-encoded data URL");
      e = await WebAssembly.instantiate(o, r);
    } else {
      const s = await fetch(t), o = s.headers.get("Content-Type") || "";
      if ("instantiateStreaming" in WebAssembly && o.startsWith("application/wasm")) e = await WebAssembly.instantiateStreaming(s, r);
      else {
        const n = await s.arrayBuffer();
        e = await WebAssembly.instantiate(n, r);
      }
    }
    return e.instance.exports;
  };
  let _;
  function Gw(r) {
    _ = r;
  }
  const Me = new Array(128).fill(void 0);
  Me.push(void 0, null, true, false);
  function U(r) {
    return Me[r];
  }
  let Qn = Me.length;
  function tf(r) {
    r < 132 || (Me[r] = Qn, Qn = r);
  }
  function u(r) {
    const t = U(r);
    return tf(r), t;
  }
  const ef = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
  let mp = new ef("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  mp.decode();
  let Fo = null;
  function on() {
    return (Fo === null || Fo.byteLength === 0) && (Fo = new Uint8Array(_.memory.buffer)), Fo;
  }
  function b(r, t) {
    return r = r >>> 0, mp.decode(on().subarray(r, r + t));
  }
  function V(r) {
    Qn === Me.length && Me.push(Me.length + 1);
    const t = Qn;
    return Qn = Me[t], Me[t] = r, t;
  }
  let w = 0;
  const _f = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
  let Ho = new _f("utf-8");
  const rf = typeof Ho.encodeInto == "function" ? function(r, t) {
    return Ho.encodeInto(r, t);
  } : function(r, t) {
    const e = Ho.encode(r);
    return t.set(e), {
      read: r.length,
      written: e.length
    };
  };
  function g(r, t, e) {
    if (e === void 0) {
      const d = Ho.encode(r), p = t(d.length, 1) >>> 0;
      return on().subarray(p, p + d.length).set(d), w = d.length, p;
    }
    let s = r.length, o = t(s, 1) >>> 0;
    const n = on();
    let c = 0;
    for (; c < s; c++) {
      const d = r.charCodeAt(c);
      if (d > 127) break;
      n[o + c] = d;
    }
    if (c !== s) {
      c !== 0 && (r = r.slice(c)), o = e(o, s, s = c + r.length * 3, 1) >>> 0;
      const d = on().subarray(o + c, o + s), p = rf(r, d);
      c += p.written;
    }
    return w = c, o;
  }
  function Ce(r) {
    return r == null;
  }
  let Po = null;
  function a() {
    return (Po === null || Po.byteLength === 0) && (Po = new Int32Array(_.memory.buffer)), Po;
  }
  function ti(r) {
    const t = typeof r;
    if (t == "number" || t == "boolean" || r == null) return `${r}`;
    if (t == "string") return `"${r}"`;
    if (t == "symbol") {
      const o = r.description;
      return o == null ? "Symbol" : `Symbol(${o})`;
    }
    if (t == "function") {
      const o = r.name;
      return typeof o == "string" && o.length > 0 ? `Function(${o})` : "Function";
    }
    if (Array.isArray(r)) {
      const o = r.length;
      let n = "[";
      o > 0 && (n += ti(r[0]));
      for (let c = 1; c < o; c++) n += ", " + ti(r[c]);
      return n += "]", n;
    }
    const e = /\[object ([^\]]+)\]/.exec(toString.call(r));
    let s;
    if (e.length > 1) s = e[1];
    else return toString.call(r);
    if (s == "Object") try {
      return "Object(" + JSON.stringify(r) + ")";
    } catch {
      return "Object";
    }
    return r instanceof Error ? `${r.name}: ${r.message}
${r.stack}` : s;
  }
  function S(r, t) {
    return r = r >>> 0, on().subarray(r / 1, r / 1 + t);
  }
  function j(r, t) {
    const e = t(r.length * 1, 1) >>> 0;
    return on().set(r, e / 1), w = r.length, e;
  }
  function f(r, t) {
    if (!(r instanceof t)) throw new Error(`expected instance of ${t.name}`);
    return r.ptr;
  }
  function nf(r) {
    f(r, me);
    const t = _.hash_transaction(r.__wbg_ptr);
    return K_.__wrap(t);
  }
  function Ge(r, t) {
    try {
      return r.apply(this, t);
    } catch (e) {
      _.__wbindgen_exn_store(V(e));
    }
  }
  class le {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(le.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_address_free(t);
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.address_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return le.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.address_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.address_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.address_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return le.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.address_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.address_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return le.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.address_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const k = _.__wbindgen_add_to_stack_pointer(-16);
        var o = Ce(t) ? 0 : g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), n = w;
        _.address_to_bech32(k, this.__wbg_ptr, o, n);
        var c = a()[k / 4 + 0], d = a()[k / 4 + 1], p = a()[k / 4 + 2], l = a()[k / 4 + 3], y = c, x = d;
        if (l) throw y = 0, x = 0, u(p);
        return e = y, s = x, b(y, x);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(e, s, 1);
      }
    }
    static from_bech32(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.address_from_bech32(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return le.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    network_id() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.address_network_id(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return t;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class Lt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Lt.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_assetname_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.assetname_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.assetname_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Lt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.assetname_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.assetname_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Lt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.assetname_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.assetname_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.assetname_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Lt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.assetname_new(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Lt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    name() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.assetname_name(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class s_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(s_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_assetnames_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.assetnames_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.assetnames_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return s_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.assetnames_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.assetnames_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return s_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.assetnames_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.assetnames_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.assetnames_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return s_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.assetnames_new();
      return s_.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.assetnames_get(this.__wbg_ptr, t);
      return Lt.__wrap(e);
    }
    add(t) {
      f(t, Lt), _.assetnames_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class Ie {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ie.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_assets_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.assets_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.assets_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ie.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.assets_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.assets_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ie.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.assets_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.assets_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.assets_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ie.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.assets_new();
      return Ie.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, Lt), f(e, C);
      const s = _.assets_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : C.__wrap(s);
    }
    get(t) {
      f(t, Lt);
      const e = _.assets_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : C.__wrap(e);
    }
    keys() {
      const t = _.assets_keys(this.__wbg_ptr);
      return s_.__wrap(t);
    }
  }
  class a_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(a_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_auxiliarydata_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydata_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.auxiliarydata_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return a_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydata_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.auxiliarydata_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return a_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydata_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydata_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.auxiliarydata_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return a_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.auxiliarydata_new();
      return a_.__wrap(t);
    }
    metadata() {
      const t = _.auxiliarydata_metadata(this.__wbg_ptr);
      return t === 0 ? void 0 : u_.__wrap(t);
    }
    set_metadata(t) {
      f(t, u_), _.auxiliarydata_set_metadata(this.__wbg_ptr, t.__wbg_ptr);
    }
    native_scripts() {
      const t = _.auxiliarydata_native_scripts(this.__wbg_ptr);
      return t === 0 ? void 0 : Xt.__wrap(t);
    }
    set_native_scripts(t) {
      f(t, Xt), _.auxiliarydata_set_native_scripts(this.__wbg_ptr, t.__wbg_ptr);
    }
    plutus_scripts() {
      const t = _.auxiliarydata_plutus_scripts(this.__wbg_ptr);
      return t === 0 ? void 0 : ke.__wrap(t);
    }
    set_plutus_scripts(t) {
      f(t, ke), _.auxiliarydata_set_plutus_scripts(this.__wbg_ptr, t.__wbg_ptr);
    }
    prefer_alonzo_format() {
      return _.auxiliarydata_prefer_alonzo_format(this.__wbg_ptr) !== 0;
    }
    set_prefer_alonzo_format(t) {
      _.auxiliarydata_set_prefer_alonzo_format(this.__wbg_ptr, t);
    }
  }
  class mr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(mr.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_auxiliarydatahash_free(t);
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.auxiliarydatahash_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return mr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydatahash_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const y = _.__wbindgen_add_to_stack_pointer(-16), x = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), k = w;
        _.auxiliarydatahash_to_bech32(y, this.__wbg_ptr, x, k);
        var o = a()[y / 4 + 0], n = a()[y / 4 + 1], c = a()[y / 4 + 2], d = a()[y / 4 + 3], p = o, l = n;
        if (d) throw p = 0, l = 0, u(c);
        return e = p, s = l, b(p, l);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(e, s, 1);
      }
    }
    static from_bech32(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.auxiliarydatahash_from_bech32(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return mr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydatahash_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.auxiliarydatahash_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return mr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class jt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(jt.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_bigint_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.bigint_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.bigint_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return jt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.bigint_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.bigint_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return jt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.bigint_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.bigint_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.bigint_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return jt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    is_zero() {
      return _.bigint_is_zero(this.__wbg_ptr) !== 0;
    }
    as_u64() {
      const t = _.bigint_as_u64(this.__wbg_ptr);
      return t === 0 ? void 0 : C.__wrap(t);
    }
    as_int() {
      const t = _.bigint_as_int(this.__wbg_ptr);
      return t === 0 ? void 0 : nt.__wrap(t);
    }
    static from_str(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.bigint_from_str(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return jt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_str() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.bigint_to_str(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    add(t) {
      f(t, jt);
      const e = _.bigint_add(this.__wbg_ptr, t.__wbg_ptr);
      return jt.__wrap(e);
    }
    mul(t) {
      f(t, jt);
      const e = _.bigint_mul(this.__wbg_ptr, t.__wbg_ptr);
      return jt.__wrap(e);
    }
    static one() {
      const t = _.bigint_one();
      return jt.__wrap(t);
    }
    increment() {
      const t = _.bigint_increment(this.__wbg_ptr);
      return jt.__wrap(t);
    }
    div_ceil(t) {
      f(t, jt);
      const e = _.bigint_div_ceil(this.__wbg_ptr, t.__wbg_ptr);
      return jt.__wrap(e);
    }
  }
  class C {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(C.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_bignum_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.bignum_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.bignum_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return C.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.bignum_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.bignum_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return C.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.bignum_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.bignum_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.bignum_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return C.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_str(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.bignum_from_str(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return C.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_str() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.bignum_to_str(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static zero() {
      const t = _.bignum_zero();
      return C.__wrap(t);
    }
    static one() {
      const t = _.bignum_one();
      return C.__wrap(t);
    }
    is_zero() {
      return _.bignum_is_zero(this.__wbg_ptr) !== 0;
    }
    div_floor(t) {
      f(t, C);
      const e = _.bignum_div_floor(this.__wbg_ptr, t.__wbg_ptr);
      return C.__wrap(e);
    }
    checked_mul(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        f(t, C), _.bignum_checked_mul(n, this.__wbg_ptr, t.__wbg_ptr);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return C.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    checked_add(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        f(t, C), _.bignum_checked_add(n, this.__wbg_ptr, t.__wbg_ptr);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return C.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    checked_sub(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        f(t, C), _.bignum_checked_sub(n, this.__wbg_ptr, t.__wbg_ptr);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return C.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    clamped_sub(t) {
      f(t, C);
      const e = _.bignum_clamped_sub(this.__wbg_ptr, t.__wbg_ptr);
      return C.__wrap(e);
    }
    compare(t) {
      return f(t, C), _.bignum_compare(this.__wbg_ptr, t.__wbg_ptr);
    }
    less_than(t) {
      return f(t, C), _.bignum_less_than(this.__wbg_ptr, t.__wbg_ptr) !== 0;
    }
    static max_value() {
      const t = _.bignum_max_value();
      return C.__wrap(t);
    }
    static max(t, e) {
      f(t, C), f(e, C);
      const s = _.bignum_max(t.__wbg_ptr, e.__wbg_ptr);
      return C.__wrap(s);
    }
  }
  class i_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(i_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_bootstrapwitness_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.bootstrapwitness_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.bootstrapwitness_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return i_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.bootstrapwitness_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.bootstrapwitness_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return i_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.bootstrapwitness_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.bootstrapwitness_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.bootstrapwitness_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return i_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    vkey() {
      const t = _.bootstrapwitness_vkey(this.__wbg_ptr);
      return je.__wrap(t);
    }
    signature() {
      const t = _.bootstrapwitness_signature(this.__wbg_ptr);
      return Se.__wrap(t);
    }
    chain_code() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.bootstrapwitness_chain_code(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    attributes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.bootstrapwitness_attributes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t, e, s, o) {
      f(t, je), f(e, Se);
      const n = j(s, _.__wbindgen_malloc), c = w, d = j(o, _.__wbindgen_malloc), p = w, l = _.bootstrapwitness_new(t.__wbg_ptr, e.__wbg_ptr, n, c, d, p);
      return i_.__wrap(l);
    }
  }
  class so {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(so.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_bootstrapwitnesses_free(t);
    }
    static new() {
      const t = _.bootstrapwitnesses_new();
      return so.__wrap(t);
    }
    len() {
      return _.bootstrapwitnesses_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.bootstrapwitnesses_get(this.__wbg_ptr, t);
      return i_.__wrap(e);
    }
    add(t) {
      f(t, i_), _.bootstrapwitnesses_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class Tt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Tt.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_certificate_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.certificate_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.certificate_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Tt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.certificate_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.certificate_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Tt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.certificate_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.certificate_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.certificate_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Tt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_stake_registration(t) {
      f(t, U_);
      const e = _.certificate_new_stake_registration(t.__wbg_ptr);
      return Tt.__wrap(e);
    }
    static new_stake_deregistration(t) {
      f(t, $_);
      const e = _.certificate_new_stake_deregistration(t.__wbg_ptr);
      return Tt.__wrap(e);
    }
    static new_stake_delegation(t) {
      f(t, D_);
      const e = _.certificate_new_stake_delegation(t.__wbg_ptr);
      return Tt.__wrap(e);
    }
    static new_pool_registration(t) {
      f(t, k_);
      const e = _.certificate_new_pool_registration(t.__wbg_ptr);
      return Tt.__wrap(e);
    }
    static new_pool_retirement(t) {
      f(t, x_);
      const e = _.certificate_new_pool_retirement(t.__wbg_ptr);
      return Tt.__wrap(e);
    }
    static new_genesis_key_delegation(t) {
      f(t, w_);
      const e = _.certificate_new_genesis_key_delegation(t.__wbg_ptr);
      return Tt.__wrap(e);
    }
    static new_move_instantaneous_rewards_cert(t) {
      f(t, h_);
      const e = _.certificate_new_move_instantaneous_rewards_cert(t.__wbg_ptr);
      return Tt.__wrap(e);
    }
    kind() {
      return _.certificate_kind(this.__wbg_ptr) >>> 0;
    }
    as_stake_registration() {
      const t = _.certificate_as_stake_registration(this.__wbg_ptr);
      return t === 0 ? void 0 : U_.__wrap(t);
    }
    as_stake_deregistration() {
      const t = _.certificate_as_stake_deregistration(this.__wbg_ptr);
      return t === 0 ? void 0 : $_.__wrap(t);
    }
    as_stake_delegation() {
      const t = _.certificate_as_stake_delegation(this.__wbg_ptr);
      return t === 0 ? void 0 : D_.__wrap(t);
    }
    as_pool_registration() {
      const t = _.certificate_as_pool_registration(this.__wbg_ptr);
      return t === 0 ? void 0 : k_.__wrap(t);
    }
    as_pool_retirement() {
      const t = _.certificate_as_pool_retirement(this.__wbg_ptr);
      return t === 0 ? void 0 : x_.__wrap(t);
    }
    as_genesis_key_delegation() {
      const t = _.certificate_as_genesis_key_delegation(this.__wbg_ptr);
      return t === 0 ? void 0 : w_.__wrap(t);
    }
    as_move_instantaneous_rewards_cert() {
      const t = _.certificate_as_move_instantaneous_rewards_cert(this.__wbg_ptr);
      return t === 0 ? void 0 : h_.__wrap(t);
    }
  }
  class c_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(c_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_certificates_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.certificates_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.certificates_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return c_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.certificates_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.certificates_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return c_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.certificates_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.certificates_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.certificates_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return c_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.certificates_new();
      return c_.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.certificates_get(this.__wbg_ptr, t);
      return Tt.__wrap(e);
    }
    add(t) {
      f(t, Tt), _.certificates_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class vr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(vr.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_constrplutusdata_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.constrplutusdata_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.constrplutusdata_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return vr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.constrplutusdata_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.constrplutusdata_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return vr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    alternative() {
      const t = _.constrplutusdata_alternative(this.__wbg_ptr);
      return C.__wrap(t);
    }
    data() {
      const t = _.constrplutusdata_data(this.__wbg_ptr);
      return ee.__wrap(t);
    }
    static new(t, e) {
      f(t, C), f(e, ee);
      const s = _.constrplutusdata_new(t.__wbg_ptr, e.__wbg_ptr);
      return vr.__wrap(s);
    }
  }
  class We {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(We.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_costmodel_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.costmodel_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.costmodel_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return We.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.costmodel_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.costmodel_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return We.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.costmodel_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.costmodel_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.costmodel_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return We.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.costmodel_new();
      return We.__wrap(t);
    }
    set(t, e) {
      try {
        const c = _.__wbindgen_add_to_stack_pointer(-16);
        f(e, nt), _.costmodel_set(c, this.__wbg_ptr, t, e.__wbg_ptr);
        var s = a()[c / 4 + 0], o = a()[c / 4 + 1], n = a()[c / 4 + 2];
        if (n) throw u(o);
        return nt.__wrap(s);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    get(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.costmodel_get(n, this.__wbg_ptr, t);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return nt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    len() {
      return _.costmdls_len(this.__wbg_ptr) >>> 0;
    }
  }
  class Pe {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Pe.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_costmdls_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.costmdls_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.costmdls_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Pe.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.costmdls_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.costmdls_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Pe.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.costmdls_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.costmdls_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.costmdls_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Pe.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.costmdls_new();
      return Pe.__wrap(t);
    }
    len() {
      return _.costmdls_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, Ot), f(e, We);
      const s = _.costmdls_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : We.__wrap(s);
    }
    get(t) {
      f(t, Ot);
      const e = _.costmdls_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : We.__wrap(e);
    }
    keys() {
      const t = _.costmdls_keys(this.__wbg_ptr);
      return sn.__wrap(t);
    }
    retain_language_versions(t) {
      f(t, sn);
      const e = _.costmdls_retain_language_versions(this.__wbg_ptr, t.__wbg_ptr);
      return Pe.__wrap(e);
    }
  }
  class d_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(d_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_dnsrecordaoraaaa_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.dnsrecordaoraaaa_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.dnsrecordaoraaaa_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return d_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.dnsrecordaoraaaa_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.dnsrecordaoraaaa_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return d_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.dnsrecordaoraaaa_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.dnsrecordaoraaaa_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.dnsrecordaoraaaa_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return d_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.dnsrecordaoraaaa_new(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return d_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    record() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.dnsrecordaoraaaa_record(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
  }
  class l_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(l_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_dnsrecordsrv_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.dnsrecordsrv_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.dnsrecordsrv_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return l_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.dnsrecordsrv_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.dnsrecordsrv_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return l_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.dnsrecordaoraaaa_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.dnsrecordaoraaaa_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.dnsrecordsrv_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return l_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.dnsrecordsrv_new(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return l_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    record() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.dnsrecordaoraaaa_record(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
  }
  class kr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(kr.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_datahash_free(t);
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.datahash_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return kr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydatahash_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const y = _.__wbindgen_add_to_stack_pointer(-16), x = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), k = w;
        _.auxiliarydatahash_to_bech32(y, this.__wbg_ptr, x, k);
        var o = a()[y / 4 + 0], n = a()[y / 4 + 1], c = a()[y / 4 + 2], d = a()[y / 4 + 3], p = o, l = n;
        if (d) throw p = 0, l = 0, u(c);
        return e = p, s = l, b(p, l);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(e, s, 1);
      }
    }
    static from_bech32(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.datahash_from_bech32(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return kr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydatahash_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.datahash_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return kr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class bt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(bt.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_ed25519keyhash_free(t);
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.ed25519keyhash_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return bt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ed25519keyhash_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const y = _.__wbindgen_add_to_stack_pointer(-16), x = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), k = w;
        _.ed25519keyhash_to_bech32(y, this.__wbg_ptr, x, k);
        var o = a()[y / 4 + 0], n = a()[y / 4 + 1], c = a()[y / 4 + 2], d = a()[y / 4 + 3], p = o, l = n;
        if (d) throw p = 0, l = 0, u(c);
        return e = p, s = l, b(p, l);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(e, s, 1);
      }
    }
    static from_bech32(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.ed25519keyhash_from_bech32(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return bt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.ed25519keyhash_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.ed25519keyhash_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return bt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class Gt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Gt.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_ed25519keyhashes_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ed25519keyhashes_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.ed25519keyhashes_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Gt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.ed25519keyhashes_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.ed25519keyhashes_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Gt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.ed25519keyhashes_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ed25519keyhashes_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.ed25519keyhashes_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Gt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.ed25519keyhashes_new();
      return Gt.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.ed25519keyhashes_get(this.__wbg_ptr, t);
      return bt.__wrap(e);
    }
    add(t) {
      f(t, bt), _.ed25519keyhashes_add(this.__wbg_ptr, t.__wbg_ptr);
    }
    to_option() {
      const t = _.ed25519keyhashes_to_option(this.__wbg_ptr);
      return t === 0 ? void 0 : Gt.__wrap(t);
    }
  }
  class Se {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Se.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_ed25519signature_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ed25519signature_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.ed25519signature_to_bech32(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.ed25519signature_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_bech32(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.ed25519signature_from_bech32(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Se.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.ed25519signature_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Se.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.ed25519signature_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Se.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class p_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(p_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_exunitprices_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.exunitprices_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.exunitprices_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return p_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.exunitprices_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.exunitprices_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return p_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.exunitprices_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.exunitprices_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.exunitprices_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return p_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    mem_price() {
      const t = _.exunitprices_mem_price(this.__wbg_ptr);
      return ct.__wrap(t);
    }
    step_price() {
      const t = _.exunitprices_step_price(this.__wbg_ptr);
      return ct.__wrap(t);
    }
    static new(t, e) {
      f(t, ct), f(e, ct);
      const s = _.exunitprices_new(t.__wbg_ptr, e.__wbg_ptr);
      return p_.__wrap(s);
    }
  }
  class Bt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Bt.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_exunits_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.exunits_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.exunits_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Bt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.exunits_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.exunits_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Bt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.exunits_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.exunits_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.exunits_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Bt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    mem() {
      const t = _.exunits_mem(this.__wbg_ptr);
      return C.__wrap(t);
    }
    steps() {
      const t = _.exunits_steps(this.__wbg_ptr);
      return C.__wrap(t);
    }
    static new(t, e) {
      f(t, C), f(e, C);
      const s = _.exunits_new(t.__wbg_ptr, e.__wbg_ptr);
      return Bt.__wrap(s);
    }
  }
  class u_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(u_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_generaltransactionmetadata_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.generaltransactionmetadata_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.generaltransactionmetadata_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return u_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.generaltransactionmetadata_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.generaltransactionmetadata_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return u_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.generaltransactionmetadata_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.generaltransactionmetadata_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.generaltransactionmetadata_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return u_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.generaltransactionmetadata_new();
      return u_.__wrap(t);
    }
    len() {
      return _.generaltransactionmetadata_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, C), f(e, Y);
      const s = _.generaltransactionmetadata_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : Y.__wrap(s);
    }
    get(t) {
      f(t, C);
      const e = _.generaltransactionmetadata_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : Y.__wrap(e);
    }
    keys() {
      const t = _.generaltransactionmetadata_keys(this.__wbg_ptr);
      return Jr.__wrap(t);
    }
  }
  class xr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(xr.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_genesisdelegatehash_free(t);
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.genesisdelegatehash_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return xr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ed25519keyhash_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const y = _.__wbindgen_add_to_stack_pointer(-16), x = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), k = w;
        _.ed25519keyhash_to_bech32(y, this.__wbg_ptr, x, k);
        var o = a()[y / 4 + 0], n = a()[y / 4 + 1], c = a()[y / 4 + 2], d = a()[y / 4 + 3], p = o, l = n;
        if (d) throw p = 0, l = 0, u(c);
        return e = p, s = l, b(p, l);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(e, s, 1);
      }
    }
    static from_bech32(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.genesisdelegatehash_from_bech32(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return xr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.ed25519keyhash_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.genesisdelegatehash_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return xr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class pe {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(pe.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_genesishash_free(t);
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.genesishash_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return pe.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ed25519keyhash_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const y = _.__wbindgen_add_to_stack_pointer(-16), x = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), k = w;
        _.ed25519keyhash_to_bech32(y, this.__wbg_ptr, x, k);
        var o = a()[y / 4 + 0], n = a()[y / 4 + 1], c = a()[y / 4 + 2], d = a()[y / 4 + 3], p = o, l = n;
        if (d) throw p = 0, l = 0, u(c);
        return e = p, s = l, b(p, l);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(e, s, 1);
      }
    }
    static from_bech32(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.genesishash_from_bech32(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return pe.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.ed25519keyhash_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.genesishash_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return pe.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class wr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(wr.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_genesishashes_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.genesishashes_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.genesishashes_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return wr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.genesishashes_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.genesishashes_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return wr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.genesishashes_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.genesishashes_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.genesishashes_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return wr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.ed25519keyhashes_new();
      return wr.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.genesishashes_get(this.__wbg_ptr, t);
      return pe.__wrap(e);
    }
    add(t) {
      f(t, pe), _.genesishashes_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class w_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(w_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_genesiskeydelegation_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.genesiskeydelegation_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.genesiskeydelegation_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return w_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.genesiskeydelegation_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.genesiskeydelegation_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return w_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.genesiskeydelegation_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.genesiskeydelegation_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.genesiskeydelegation_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return w_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    genesishash() {
      const t = _.genesiskeydelegation_genesishash(this.__wbg_ptr);
      return pe.__wrap(t);
    }
    genesis_delegate_hash() {
      const t = _.genesiskeydelegation_genesis_delegate_hash(this.__wbg_ptr);
      return xr.__wrap(t);
    }
    vrf_keyhash() {
      const t = _.genesiskeydelegation_vrf_keyhash(this.__wbg_ptr);
      return He.__wrap(t);
    }
    static new(t, e, s) {
      f(t, pe), f(e, xr), f(s, He);
      const o = _.genesiskeydelegation_new(t.__wbg_ptr, e.__wbg_ptr, s.__wbg_ptr);
      return w_.__wrap(o);
    }
  }
  class nt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(nt.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_int_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.int_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.int_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return nt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.int_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.int_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return nt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.int_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.int_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.int_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return nt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t) {
      f(t, C);
      const e = _.int_new(t.__wbg_ptr);
      return nt.__wrap(e);
    }
    static new_negative(t) {
      f(t, C);
      const e = _.int_new_negative(t.__wbg_ptr);
      return nt.__wrap(e);
    }
    static new_i32(t) {
      const e = _.int_new_i32(t);
      return nt.__wrap(e);
    }
    is_positive() {
      return _.int_is_positive(this.__wbg_ptr) !== 0;
    }
    as_positive() {
      const t = _.int_as_positive(this.__wbg_ptr);
      return t === 0 ? void 0 : C.__wrap(t);
    }
    as_negative() {
      const t = _.int_as_negative(this.__wbg_ptr);
      return t === 0 ? void 0 : C.__wrap(t);
    }
    as_i32() {
      try {
        const s = _.__wbindgen_add_to_stack_pointer(-16);
        _.int_as_i32(s, this.__wbg_ptr);
        var t = a()[s / 4 + 0], e = a()[s / 4 + 1];
        return t === 0 ? void 0 : e;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    as_i32_or_nothing() {
      try {
        const s = _.__wbindgen_add_to_stack_pointer(-16);
        _.int_as_i32(s, this.__wbg_ptr);
        var t = a()[s / 4 + 0], e = a()[s / 4 + 1];
        return t === 0 ? void 0 : e;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    as_i32_or_fail() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.int_as_i32_or_fail(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return t;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_str() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.int_to_str(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_str(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.int_from_str(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return nt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class f_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(f_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_ipv4_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ipv4_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.ipv4_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return f_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.ipv4_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.ipv4_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return f_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.ipv4_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ipv4_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.ipv4_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return f_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.ipv4_new(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return f_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    ip() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ipv4_ip(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class g_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(g_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_ipv6_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ipv6_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.ipv6_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return g_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.ipv6_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.ipv6_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return g_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.ipv6_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ipv6_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.ipv6_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return g_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.ipv6_new(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return g_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    ip() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ipv6_ip(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class Ot {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ot.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_language_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.language_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.language_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ot.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.language_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.language_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ot.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.language_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.language_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.language_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ot.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_plutus_v1() {
      const t = _.language_new_plutus_v1();
      return Ot.__wrap(t);
    }
    static new_plutus_v2() {
      const t = _.language_new_plutus_v2();
      return Ot.__wrap(t);
    }
    kind() {
      return _.language_kind(this.__wbg_ptr) >>> 0;
    }
  }
  class sn {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(sn.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_languages_free(t);
    }
    static new() {
      const t = _.languages_new();
      return sn.__wrap(t);
    }
    len() {
      return _.costmdls_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.languages_get(this.__wbg_ptr, t);
      return Ot.__wrap(e);
    }
    add(t) {
      f(t, Ot);
      var e = t.__destroy_into_raw();
      _.languages_add(this.__wbg_ptr, e);
    }
    static list() {
      const t = _.languages_list();
      return sn.__wrap(t);
    }
  }
  class b_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(b_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_mirtostakecredentials_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.mirtostakecredentials_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.mirtostakecredentials_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return b_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.mirtostakecredentials_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.mirtostakecredentials_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return b_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.mirtostakecredentials_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.mirtostakecredentials_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.mirtostakecredentials_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return b_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.auxiliarydataset_new();
      return b_.__wrap(t);
    }
    len() {
      return _.auxiliarydataset_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, dt), f(e, nt);
      const s = _.mirtostakecredentials_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : nt.__wrap(s);
    }
    get(t) {
      f(t, dt);
      const e = _.mirtostakecredentials_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : nt.__wrap(e);
    }
    keys() {
      const t = _.mirtostakecredentials_keys(this.__wbg_ptr);
      return gr.__wrap(t);
    }
  }
  class X_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(X_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_metadatalist_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.metadatalist_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.metadatalist_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return X_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.metadatalist_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.metadatalist_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return X_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.costmodel_new();
      return X_.__wrap(t);
    }
    len() {
      return _.costmdls_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.metadatalist_get(this.__wbg_ptr, t);
      return Y.__wrap(e);
    }
    add(t) {
      f(t, Y), _.metadatalist_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class jr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(jr.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_metadatamap_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.metadatamap_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.metadatamap_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return jr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.metadatamap_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.metadatamap_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return jr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.generaltransactionmetadata_new();
      return jr.__wrap(t);
    }
    len() {
      return _.generaltransactionmetadata_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, Y), f(e, Y);
      const s = _.metadatamap_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : Y.__wrap(s);
    }
    insert_str(t, e) {
      try {
        const c = _.__wbindgen_add_to_stack_pointer(-16), d = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), p = w;
        f(e, Y), _.metadatamap_insert_str(c, this.__wbg_ptr, d, p, e.__wbg_ptr);
        var s = a()[c / 4 + 0], o = a()[c / 4 + 1], n = a()[c / 4 + 2];
        if (n) throw u(o);
        return s === 0 ? void 0 : Y.__wrap(s);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    insert_i32(t, e) {
      f(e, Y);
      const s = _.metadatamap_insert_i32(this.__wbg_ptr, t, e.__wbg_ptr);
      return s === 0 ? void 0 : Y.__wrap(s);
    }
    get(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        f(t, Y), _.metadatamap_get(n, this.__wbg_ptr, t.__wbg_ptr);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Y.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    get_str(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.metadatamap_get_str(n, this.__wbg_ptr, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Y.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    get_i32(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.metadatamap_get_i32(n, this.__wbg_ptr, t);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Y.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    has(t) {
      return f(t, Y), _.metadatamap_has(this.__wbg_ptr, t.__wbg_ptr) !== 0;
    }
    keys() {
      const t = _.metadatamap_keys(this.__wbg_ptr);
      return X_.__wrap(t);
    }
  }
  class ye {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(ye.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_mint_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.mint_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.mint_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return ye.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.mint_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.mint_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return ye.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.mint_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.mint_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.mint_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return ye.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.assetnames_new();
      return ye.__wrap(t);
    }
    static new_from_entry(t, e) {
      f(t, pt), f(e, q_);
      const s = _.mint_new_from_entry(t.__wbg_ptr, e.__wbg_ptr);
      return ye.__wrap(s);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, pt), f(e, q_);
      const s = _.mint_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : q_.__wrap(s);
    }
    get(t) {
      f(t, pt);
      const e = _.mint_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : q_.__wrap(e);
    }
    get_all(t) {
      f(t, pt);
      const e = _.mint_get_all(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : qi.__wrap(e);
    }
    keys() {
      const t = _.mint_keys(this.__wbg_ptr);
      return N_.__wrap(t);
    }
    as_positive_multiasset() {
      const t = _.mint_as_positive_multiasset(this.__wbg_ptr);
      return Dt.__wrap(t);
    }
    as_negative_multiasset() {
      const t = _.mint_as_negative_multiasset(this.__wbg_ptr);
      return Dt.__wrap(t);
    }
  }
  class q_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(q_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_mintassets_free(t);
    }
    static new() {
      const t = _.assets_new();
      return q_.__wrap(t);
    }
    static new_from_entry(t, e) {
      f(t, Lt), f(e, nt);
      var s = e.__destroy_into_raw();
      const o = _.mintassets_new_from_entry(t.__wbg_ptr, s);
      return q_.__wrap(o);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, Lt), f(e, nt);
      var s = e.__destroy_into_raw();
      const o = _.mintassets_insert(this.__wbg_ptr, t.__wbg_ptr, s);
      return o === 0 ? void 0 : nt.__wrap(o);
    }
    get(t) {
      f(t, Lt);
      const e = _.mintassets_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : nt.__wrap(e);
    }
    keys() {
      const t = _.mintassets_keys(this.__wbg_ptr);
      return s_.__wrap(t);
    }
  }
  class qi {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(qi.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_mintsassets_free(t);
    }
  }
  class Te {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Te.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_moveinstantaneousreward_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.moveinstantaneousreward_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.moveinstantaneousreward_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Te.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.moveinstantaneousreward_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.moveinstantaneousreward_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Te.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.moveinstantaneousreward_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.moveinstantaneousreward_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.moveinstantaneousreward_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Te.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_to_other_pot(t, e) {
      f(e, C);
      const s = _.moveinstantaneousreward_new_to_other_pot(t, e.__wbg_ptr);
      return Te.__wrap(s);
    }
    static new_to_stake_creds(t, e) {
      f(e, b_);
      const s = _.moveinstantaneousreward_new_to_stake_creds(t, e.__wbg_ptr);
      return Te.__wrap(s);
    }
    pot() {
      return _.moveinstantaneousreward_pot(this.__wbg_ptr) >>> 0;
    }
    kind() {
      return _.moveinstantaneousreward_kind(this.__wbg_ptr) >>> 0;
    }
    as_to_other_pot() {
      const t = _.moveinstantaneousreward_as_to_other_pot(this.__wbg_ptr);
      return t === 0 ? void 0 : C.__wrap(t);
    }
    as_to_stake_creds() {
      const t = _.moveinstantaneousreward_as_to_stake_creds(this.__wbg_ptr);
      return t === 0 ? void 0 : b_.__wrap(t);
    }
  }
  class h_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(h_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_moveinstantaneousrewardscert_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.moveinstantaneousrewardscert_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.moveinstantaneousrewardscert_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return h_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.moveinstantaneousrewardscert_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.moveinstantaneousrewardscert_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return h_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.moveinstantaneousrewardscert_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.moveinstantaneousrewardscert_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.moveinstantaneousrewardscert_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return h_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    move_instantaneous_reward() {
      const t = _.moveinstantaneousrewardscert_move_instantaneous_reward(this.__wbg_ptr);
      return Te.__wrap(t);
    }
    static new(t) {
      f(t, Te);
      const e = _.moveinstantaneousrewardscert_new(t.__wbg_ptr);
      return h_.__wrap(e);
    }
  }
  class Dt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Dt.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_multiasset_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.multiasset_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.multiasset_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Dt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.multiasset_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.multiasset_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Dt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.multiasset_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.multiasset_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.multiasset_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Dt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.assets_new();
      return Dt.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, pt), f(e, Ie);
      const s = _.multiasset_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : Ie.__wrap(s);
    }
    get(t) {
      f(t, pt);
      const e = _.multiasset_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : Ie.__wrap(e);
    }
    set_asset(t, e, s) {
      f(t, pt), f(e, Lt), f(s, C);
      var o = s.__destroy_into_raw();
      const n = _.multiasset_set_asset(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, o);
      return n === 0 ? void 0 : C.__wrap(n);
    }
    get_asset(t, e) {
      f(t, pt), f(e, Lt);
      const s = _.multiasset_get_asset(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return C.__wrap(s);
    }
    keys() {
      const t = _.multiasset_keys(this.__wbg_ptr);
      return N_.__wrap(t);
    }
    sub(t) {
      f(t, Dt);
      const e = _.multiasset_sub(this.__wbg_ptr, t.__wbg_ptr);
      return Dt.__wrap(e);
    }
  }
  class y_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(y_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_multihostname_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.multihostname_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.multihostname_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return y_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.multihostname_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.multihostname_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return y_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.multihostname_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.multihostname_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.multihostname_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return y_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    dns_name() {
      const t = _.multihostname_dns_name(this.__wbg_ptr);
      return l_.__wrap(t);
    }
    static new(t) {
      f(t, l_);
      const e = _.multihostname_new(t.__wbg_ptr);
      return y_.__wrap(e);
    }
  }
  class zt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(zt.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_nativescript_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.nativescript_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.nativescript_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return zt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.nativescript_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.nativescript_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return zt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.nativescript_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.nativescript_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.nativescript_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return zt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    hash() {
      const t = _.nativescript_hash(this.__wbg_ptr);
      return pt.__wrap(t);
    }
    static new_script_pubkey(t) {
      f(t, P_);
      const e = _.nativescript_new_script_pubkey(t.__wbg_ptr);
      return zt.__wrap(e);
    }
    static new_script_all(t) {
      f(t, O_);
      const e = _.nativescript_new_script_all(t.__wbg_ptr);
      return zt.__wrap(e);
    }
    static new_script_any(t) {
      f(t, L_);
      const e = _.nativescript_new_script_any(t.__wbg_ptr);
      return zt.__wrap(e);
    }
    static new_script_n_of_k(t) {
      f(t, F_);
      const e = _.nativescript_new_script_n_of_k(t.__wbg_ptr);
      return zt.__wrap(e);
    }
    static new_timelock_start(t) {
      f(t, Ue);
      const e = _.nativescript_new_timelock_start(t.__wbg_ptr);
      return zt.__wrap(e);
    }
    static new_timelock_expiry(t) {
      f(t, $e);
      const e = _.nativescript_new_timelock_expiry(t.__wbg_ptr);
      return zt.__wrap(e);
    }
    kind() {
      return _.nativescript_kind(this.__wbg_ptr) >>> 0;
    }
    as_script_pubkey() {
      const t = _.nativescript_as_script_pubkey(this.__wbg_ptr);
      return t === 0 ? void 0 : P_.__wrap(t);
    }
    as_script_all() {
      const t = _.nativescript_as_script_all(this.__wbg_ptr);
      return t === 0 ? void 0 : O_.__wrap(t);
    }
    as_script_any() {
      const t = _.nativescript_as_script_any(this.__wbg_ptr);
      return t === 0 ? void 0 : L_.__wrap(t);
    }
    as_script_n_of_k() {
      const t = _.nativescript_as_script_n_of_k(this.__wbg_ptr);
      return t === 0 ? void 0 : F_.__wrap(t);
    }
    as_timelock_start() {
      const t = _.nativescript_as_timelock_start(this.__wbg_ptr);
      return t === 0 ? void 0 : Ue.__wrap(t);
    }
    as_timelock_expiry() {
      const t = _.nativescript_as_timelock_expiry(this.__wbg_ptr);
      return t === 0 ? void 0 : $e.__wrap(t);
    }
    get_required_signers() {
      const t = _.nativescript_get_required_signers(this.__wbg_ptr);
      return Gt.__wrap(t);
    }
  }
  class Xt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Xt.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_nativescripts_free(t);
    }
    static new() {
      const t = _.certificates_new();
      return Xt.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.nativescripts_get(this.__wbg_ptr, t);
      return zt.__wrap(e);
    }
    add(t) {
      f(t, zt), _.nativescripts_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class Re {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Re.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_networkid_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.networkid_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.networkid_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Re.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.networkid_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.networkid_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Re.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.networkid_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.networkid_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.networkid_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Re.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static testnet() {
      const t = _.networkid_testnet();
      return Re.__wrap(t);
    }
    static mainnet() {
      const t = _.networkid_mainnet();
      return Re.__wrap(t);
    }
    kind() {
      return _.networkid_kind(this.__wbg_ptr) >>> 0;
    }
  }
  class r_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(r_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_nonce_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.nonce_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.nonce_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return r_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.nonce_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.nonce_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return r_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.nonce_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.nonce_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.nonce_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return r_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_identity() {
      const t = _.nonce_new_identity();
      return r_.__wrap(t);
    }
    static new_from_hash(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.nonce_new_from_hash(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return r_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    get_hash() {
      try {
        const s = _.__wbindgen_add_to_stack_pointer(-16);
        _.nonce_get_hash(s, this.__wbg_ptr);
        var t = a()[s / 4 + 0], e = a()[s / 4 + 1];
        let o;
        return t !== 0 && (o = S(t, e).slice(), _.__wbindgen_free(t, e * 1)), o;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class K {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(K.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_plutusdata_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.plutusdata_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.plutusdata_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return K.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.plutusdata_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.plutusdata_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return K.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_constr_plutus_data(t) {
      f(t, vr);
      const e = _.plutusdata_new_constr_plutus_data(t.__wbg_ptr);
      return K.__wrap(e);
    }
    static new_empty_constr_plutus_data(t) {
      f(t, C);
      const e = _.plutusdata_new_empty_constr_plutus_data(t.__wbg_ptr);
      return K.__wrap(e);
    }
    static new_single_value_constr_plutus_data(t, e) {
      f(t, C), f(e, K);
      const s = _.plutusdata_new_single_value_constr_plutus_data(t.__wbg_ptr, e.__wbg_ptr);
      return K.__wrap(s);
    }
    static new_map(t) {
      f(t, Sr);
      const e = _.plutusdata_new_map(t.__wbg_ptr);
      return K.__wrap(e);
    }
    static new_list(t) {
      f(t, ee);
      const e = _.plutusdata_new_list(t.__wbg_ptr);
      return K.__wrap(e);
    }
    static new_integer(t) {
      f(t, jt);
      const e = _.plutusdata_new_integer(t.__wbg_ptr);
      return K.__wrap(e);
    }
    static new_bytes(t) {
      const e = j(t, _.__wbindgen_malloc), s = w, o = _.plutusdata_new_bytes(e, s);
      return K.__wrap(o);
    }
    kind() {
      return _.plutusdata_kind(this.__wbg_ptr) >>> 0;
    }
    as_constr_plutus_data() {
      const t = _.plutusdata_as_constr_plutus_data(this.__wbg_ptr);
      return t === 0 ? void 0 : vr.__wrap(t);
    }
    as_map() {
      const t = _.plutusdata_as_map(this.__wbg_ptr);
      return t === 0 ? void 0 : Sr.__wrap(t);
    }
    as_list() {
      const t = _.plutusdata_as_list(this.__wbg_ptr);
      return t === 0 ? void 0 : ee.__wrap(t);
    }
    as_integer() {
      const t = _.plutusdata_as_integer(this.__wbg_ptr);
      return t === 0 ? void 0 : jt.__wrap(t);
    }
    as_bytes() {
      try {
        const s = _.__wbindgen_add_to_stack_pointer(-16);
        _.plutusdata_as_bytes(s, this.__wbg_ptr);
        var t = a()[s / 4 + 0], e = a()[s / 4 + 1];
        let o;
        return t !== 0 && (o = S(t, e).slice(), _.__wbindgen_free(t, e * 1)), o;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json(t) {
      let e, s;
      try {
        const y = _.__wbindgen_add_to_stack_pointer(-16);
        _.decode_plutus_datum_to_json_str(y, this.__wbg_ptr, t);
        var o = a()[y / 4 + 0], n = a()[y / 4 + 1], c = a()[y / 4 + 2], d = a()[y / 4 + 3], p = o, l = n;
        if (d) throw p = 0, l = 0, u(c);
        return e = p, s = l, b(p, l);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(e, s, 1);
      }
    }
    static from_json(t, e) {
      try {
        const c = _.__wbindgen_add_to_stack_pointer(-16), d = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), p = w;
        _.encode_json_str_to_plutus_datum(c, d, p, e);
        var s = a()[c / 4 + 0], o = a()[c / 4 + 1], n = a()[c / 4 + 2];
        if (n) throw u(o);
        return K.__wrap(s);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_address(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        f(t, le), _.plutusdata_from_address(n, t.__wbg_ptr);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return K.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class ee {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(ee.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_plutuslist_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.plutuslist_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.plutuslist_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return ee.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.plutuslist_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.plutuslist_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return ee.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.plutuslist_new();
      return ee.__wrap(t);
    }
    len() {
      return _.costmdls_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.plutuslist_get(this.__wbg_ptr, t);
      return K.__wrap(e);
    }
    add(t) {
      f(t, K), _.plutuslist_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class Sr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Sr.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_plutusmap_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.plutusmap_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.plutusmap_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Sr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.plutusmap_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.plutusmap_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Sr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.generaltransactionmetadata_new();
      return Sr.__wrap(t);
    }
    len() {
      return _.generaltransactionmetadata_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, K), f(e, K);
      const s = _.plutusmap_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : K.__wrap(s);
    }
    get(t) {
      f(t, K);
      const e = _.plutusmap_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : K.__wrap(e);
    }
    keys() {
      const t = _.plutusmap_keys(this.__wbg_ptr);
      return ee.__wrap(t);
    }
  }
  class Rt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Rt.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_plutusscript_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.plutusscript_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.plutusscript_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Rt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.plutusscript_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.plutusscript_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Rt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t) {
      const e = j(t, _.__wbindgen_malloc), s = w, o = _.plutusscript_new(e, s);
      return Rt.__wrap(o);
    }
    static new_v2(t) {
      const e = j(t, _.__wbindgen_malloc), s = w, o = _.plutusscript_new_v2(e, s);
      return Rt.__wrap(o);
    }
    static new_with_version(t, e) {
      const s = j(t, _.__wbindgen_malloc), o = w;
      f(e, Ot);
      const n = _.plutusscript_new_with_version(s, o, e.__wbg_ptr);
      return Rt.__wrap(n);
    }
    bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.plutusscript_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes_v2(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.plutusscript_from_bytes_v2(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Rt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes_with_version(t, e) {
      try {
        const c = _.__wbindgen_add_to_stack_pointer(-16), d = j(t, _.__wbindgen_malloc), p = w;
        f(e, Ot), _.plutusscript_from_bytes_with_version(c, d, p, e.__wbg_ptr);
        var s = a()[c / 4 + 0], o = a()[c / 4 + 1], n = a()[c / 4 + 2];
        if (n) throw u(o);
        return Rt.__wrap(s);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_hex_with_version(t, e) {
      try {
        const c = _.__wbindgen_add_to_stack_pointer(-16), d = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), p = w;
        f(e, Ot), _.plutusscript_from_hex_with_version(c, d, p, e.__wbg_ptr);
        var s = a()[c / 4 + 0], o = a()[c / 4 + 1], n = a()[c / 4 + 2];
        if (n) throw u(o);
        return Rt.__wrap(s);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    hash() {
      const t = _.plutusscript_hash(this.__wbg_ptr);
      return pt.__wrap(t);
    }
    language_version() {
      const t = _.plutusscript_language_version(this.__wbg_ptr);
      return Ot.__wrap(t);
    }
  }
  class ke {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(ke.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_plutusscripts_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.plutusscripts_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.plutusscripts_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return ke.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.plutusscripts_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.plutusscripts_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return ke.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.plutusscripts_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.plutusscripts_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.plutusscripts_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return ke.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.plutusscripts_new();
      return ke.__wrap(t);
    }
    len() {
      return _.costmdls_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.plutusscripts_get(this.__wbg_ptr, t);
      return Rt.__wrap(e);
    }
    add(t) {
      f(t, Rt), _.plutusscripts_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class m_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(m_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_poolmetadata_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolmetadata_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.poolmetadata_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return m_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolmetadata_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.poolmetadata_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return m_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolmetadata_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolmetadata_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.poolmetadata_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return m_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    url() {
      const t = _.poolmetadata_url(this.__wbg_ptr);
      return sd.__wrap(t);
    }
    pool_metadata_hash() {
      const t = _.poolmetadata_pool_metadata_hash(this.__wbg_ptr);
      return Er.__wrap(t);
    }
    static new(t, e) {
      f(t, sd), f(e, Er);
      const s = _.poolmetadata_new(t.__wbg_ptr, e.__wbg_ptr);
      return m_.__wrap(s);
    }
  }
  class Er {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Er.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_poolmetadatahash_free(t);
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.poolmetadatahash_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Er.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydatahash_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const y = _.__wbindgen_add_to_stack_pointer(-16), x = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), k = w;
        _.auxiliarydatahash_to_bech32(y, this.__wbg_ptr, x, k);
        var o = a()[y / 4 + 0], n = a()[y / 4 + 1], c = a()[y / 4 + 2], d = a()[y / 4 + 3], p = o, l = n;
        if (d) throw p = 0, l = 0, u(c);
        return e = p, s = l, b(p, l);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(e, s, 1);
      }
    }
    static from_bech32(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.poolmetadatahash_from_bech32(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Er.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydatahash_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.poolmetadatahash_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Er.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class v_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(v_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_poolparams_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolparams_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.poolparams_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return v_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolparams_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.poolparams_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return v_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolparams_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolparams_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.poolparams_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return v_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    operator() {
      const t = _.poolparams_operator(this.__wbg_ptr);
      return bt.__wrap(t);
    }
    vrf_keyhash() {
      const t = _.poolparams_vrf_keyhash(this.__wbg_ptr);
      return He.__wrap(t);
    }
    pledge() {
      const t = _.poolparams_pledge(this.__wbg_ptr);
      return C.__wrap(t);
    }
    cost() {
      const t = _.poolparams_cost(this.__wbg_ptr);
      return C.__wrap(t);
    }
    margin() {
      const t = _.poolparams_margin(this.__wbg_ptr);
      return ct.__wrap(t);
    }
    reward_account() {
      const t = _.poolparams_reward_account(this.__wbg_ptr);
      return Oe.__wrap(t);
    }
    pool_owners() {
      const t = _.poolparams_pool_owners(this.__wbg_ptr);
      return Gt.__wrap(t);
    }
    relays() {
      const t = _.poolparams_relays(this.__wbg_ptr);
      return C_.__wrap(t);
    }
    pool_metadata() {
      const t = _.poolparams_pool_metadata(this.__wbg_ptr);
      return t === 0 ? void 0 : m_.__wrap(t);
    }
    static new(t, e, s, o, n, c, d, p, l) {
      f(t, bt), f(e, He), f(s, C), f(o, C), f(n, ct), f(c, Oe), f(d, Gt), f(p, C_);
      let y = 0;
      Ce(l) || (f(l, m_), y = l.__destroy_into_raw());
      const x = _.poolparams_new(t.__wbg_ptr, e.__wbg_ptr, s.__wbg_ptr, o.__wbg_ptr, n.__wbg_ptr, c.__wbg_ptr, d.__wbg_ptr, p.__wbg_ptr, y);
      return v_.__wrap(x);
    }
  }
  class k_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(k_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_poolregistration_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolregistration_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.poolregistration_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return k_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolregistration_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.poolregistration_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return k_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolregistration_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolregistration_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.poolregistration_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return k_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    pool_params() {
      const t = _.poolregistration_pool_params(this.__wbg_ptr);
      return v_.__wrap(t);
    }
    static new(t) {
      f(t, v_);
      const e = _.poolregistration_new(t.__wbg_ptr);
      return k_.__wrap(e);
    }
  }
  class x_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(x_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_poolretirement_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolretirement_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.poolretirement_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return x_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolretirement_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.poolretirement_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return x_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolretirement_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolretirement_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.poolretirement_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return x_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    pool_keyhash() {
      const t = _.poolretirement_pool_keyhash(this.__wbg_ptr);
      return bt.__wrap(t);
    }
    epoch() {
      return _.poolretirement_epoch(this.__wbg_ptr) >>> 0;
    }
    static new(t, e) {
      f(t, bt);
      const s = _.poolretirement_new(t.__wbg_ptr, e);
      return x_.__wrap(s);
    }
  }
  class j_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(j_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_proposedprotocolparameterupdates_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.proposedprotocolparameterupdates_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.proposedprotocolparameterupdates_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return j_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.proposedprotocolparameterupdates_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.proposedprotocolparameterupdates_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return j_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.proposedprotocolparameterupdates_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.proposedprotocolparameterupdates_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.proposedprotocolparameterupdates_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return j_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.auxiliarydataset_new();
      return j_.__wrap(t);
    }
    len() {
      return _.auxiliarydataset_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, pe), f(e, Qe);
      const s = _.proposedprotocolparameterupdates_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : Qe.__wrap(s);
    }
    get(t) {
      f(t, pe);
      const e = _.proposedprotocolparameterupdates_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : Qe.__wrap(e);
    }
    keys() {
      const t = _.proposedprotocolparameterupdates_keys(this.__wbg_ptr);
      return wr.__wrap(t);
    }
  }
  class Qe {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Qe.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_protocolparamupdate_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.protocolparamupdate_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.protocolparamupdate_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Qe.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.protocolparamupdate_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.protocolparamupdate_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Qe.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.protocolparamupdate_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.protocolparamupdate_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.protocolparamupdate_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Qe.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    set_minfee_a(t) {
      f(t, C), _.protocolparamupdate_set_minfee_a(this.__wbg_ptr, t.__wbg_ptr);
    }
    minfee_a() {
      const t = _.protocolparamupdate_minfee_a(this.__wbg_ptr);
      return t === 0 ? void 0 : C.__wrap(t);
    }
    set_minfee_b(t) {
      f(t, C), _.protocolparamupdate_set_minfee_b(this.__wbg_ptr, t.__wbg_ptr);
    }
    minfee_b() {
      const t = _.protocolparamupdate_minfee_b(this.__wbg_ptr);
      return t === 0 ? void 0 : C.__wrap(t);
    }
    set_max_block_body_size(t) {
      _.protocolparamupdate_set_max_block_body_size(this.__wbg_ptr, t);
    }
    max_block_body_size() {
      try {
        const s = _.__wbindgen_add_to_stack_pointer(-16);
        _.protocolparamupdate_max_block_body_size(s, this.__wbg_ptr);
        var t = a()[s / 4 + 0], e = a()[s / 4 + 1];
        return t === 0 ? void 0 : e >>> 0;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    set_max_tx_size(t) {
      _.protocolparamupdate_set_max_tx_size(this.__wbg_ptr, t);
    }
    max_tx_size() {
      try {
        const s = _.__wbindgen_add_to_stack_pointer(-16);
        _.protocolparamupdate_max_tx_size(s, this.__wbg_ptr);
        var t = a()[s / 4 + 0], e = a()[s / 4 + 1];
        return t === 0 ? void 0 : e >>> 0;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    set_max_block_header_size(t) {
      _.protocolparamupdate_set_max_block_header_size(this.__wbg_ptr, t);
    }
    max_block_header_size() {
      try {
        const s = _.__wbindgen_add_to_stack_pointer(-16);
        _.protocolparamupdate_max_block_header_size(s, this.__wbg_ptr);
        var t = a()[s / 4 + 0], e = a()[s / 4 + 1];
        return t === 0 ? void 0 : e >>> 0;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    set_key_deposit(t) {
      f(t, C), _.protocolparamupdate_set_key_deposit(this.__wbg_ptr, t.__wbg_ptr);
    }
    key_deposit() {
      const t = _.protocolparamupdate_key_deposit(this.__wbg_ptr);
      return t === 0 ? void 0 : C.__wrap(t);
    }
    set_pool_deposit(t) {
      f(t, C), _.protocolparamupdate_set_pool_deposit(this.__wbg_ptr, t.__wbg_ptr);
    }
    pool_deposit() {
      const t = _.protocolparamupdate_pool_deposit(this.__wbg_ptr);
      return t === 0 ? void 0 : C.__wrap(t);
    }
    set_max_epoch(t) {
      _.protocolparamupdate_set_max_epoch(this.__wbg_ptr, t);
    }
    max_epoch() {
      try {
        const s = _.__wbindgen_add_to_stack_pointer(-16);
        _.protocolparamupdate_max_epoch(s, this.__wbg_ptr);
        var t = a()[s / 4 + 0], e = a()[s / 4 + 1];
        return t === 0 ? void 0 : e >>> 0;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    set_n_opt(t) {
      _.protocolparamupdate_set_n_opt(this.__wbg_ptr, t);
    }
    n_opt() {
      try {
        const s = _.__wbindgen_add_to_stack_pointer(-16);
        _.protocolparamupdate_n_opt(s, this.__wbg_ptr);
        var t = a()[s / 4 + 0], e = a()[s / 4 + 1];
        return t === 0 ? void 0 : e >>> 0;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    set_pool_pledge_influence(t) {
      f(t, ct), _.protocolparamupdate_set_pool_pledge_influence(this.__wbg_ptr, t.__wbg_ptr);
    }
    pool_pledge_influence() {
      const t = _.protocolparamupdate_pool_pledge_influence(this.__wbg_ptr);
      return t === 0 ? void 0 : ct.__wrap(t);
    }
    set_expansion_rate(t) {
      f(t, ct), _.protocolparamupdate_set_expansion_rate(this.__wbg_ptr, t.__wbg_ptr);
    }
    expansion_rate() {
      const t = _.protocolparamupdate_expansion_rate(this.__wbg_ptr);
      return t === 0 ? void 0 : ct.__wrap(t);
    }
    set_treasury_growth_rate(t) {
      f(t, ct), _.protocolparamupdate_set_treasury_growth_rate(this.__wbg_ptr, t.__wbg_ptr);
    }
    treasury_growth_rate() {
      const t = _.protocolparamupdate_treasury_growth_rate(this.__wbg_ptr);
      return t === 0 ? void 0 : ct.__wrap(t);
    }
    d() {
      const t = _.protocolparamupdate_d(this.__wbg_ptr);
      return t === 0 ? void 0 : ct.__wrap(t);
    }
    extra_entropy() {
      const t = _.protocolparamupdate_extra_entropy(this.__wbg_ptr);
      return t === 0 ? void 0 : r_.__wrap(t);
    }
    set_protocol_version(t) {
      f(t, S_), _.protocolparamupdate_set_protocol_version(this.__wbg_ptr, t.__wbg_ptr);
    }
    protocol_version() {
      const t = _.protocolparamupdate_protocol_version(this.__wbg_ptr);
      return t === 0 ? void 0 : S_.__wrap(t);
    }
    set_min_pool_cost(t) {
      f(t, C), _.protocolparamupdate_set_min_pool_cost(this.__wbg_ptr, t.__wbg_ptr);
    }
    min_pool_cost() {
      const t = _.protocolparamupdate_min_pool_cost(this.__wbg_ptr);
      return t === 0 ? void 0 : C.__wrap(t);
    }
    set_ada_per_utxo_byte(t) {
      f(t, C), _.protocolparamupdate_set_ada_per_utxo_byte(this.__wbg_ptr, t.__wbg_ptr);
    }
    ada_per_utxo_byte() {
      const t = _.protocolparamupdate_ada_per_utxo_byte(this.__wbg_ptr);
      return t === 0 ? void 0 : C.__wrap(t);
    }
    set_cost_models(t) {
      f(t, Pe), _.protocolparamupdate_set_cost_models(this.__wbg_ptr, t.__wbg_ptr);
    }
    cost_models() {
      const t = _.protocolparamupdate_cost_models(this.__wbg_ptr);
      return t === 0 ? void 0 : Pe.__wrap(t);
    }
    set_execution_costs(t) {
      f(t, p_), _.protocolparamupdate_set_execution_costs(this.__wbg_ptr, t.__wbg_ptr);
    }
    execution_costs() {
      const t = _.protocolparamupdate_execution_costs(this.__wbg_ptr);
      return t === 0 ? void 0 : p_.__wrap(t);
    }
    set_max_tx_ex_units(t) {
      f(t, Bt), _.protocolparamupdate_set_max_tx_ex_units(this.__wbg_ptr, t.__wbg_ptr);
    }
    max_tx_ex_units() {
      const t = _.protocolparamupdate_max_tx_ex_units(this.__wbg_ptr);
      return t === 0 ? void 0 : Bt.__wrap(t);
    }
    set_max_block_ex_units(t) {
      f(t, Bt), _.protocolparamupdate_set_max_block_ex_units(this.__wbg_ptr, t.__wbg_ptr);
    }
    max_block_ex_units() {
      const t = _.protocolparamupdate_max_block_ex_units(this.__wbg_ptr);
      return t === 0 ? void 0 : Bt.__wrap(t);
    }
    set_max_value_size(t) {
      _.protocolparamupdate_set_max_value_size(this.__wbg_ptr, t);
    }
    max_value_size() {
      try {
        const s = _.__wbindgen_add_to_stack_pointer(-16);
        _.protocolparamupdate_max_value_size(s, this.__wbg_ptr);
        var t = a()[s / 4 + 0], e = a()[s / 4 + 1];
        return t === 0 ? void 0 : e >>> 0;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    set_collateral_percentage(t) {
      _.protocolparamupdate_set_collateral_percentage(this.__wbg_ptr, t);
    }
    collateral_percentage() {
      try {
        const s = _.__wbindgen_add_to_stack_pointer(-16);
        _.protocolparamupdate_collateral_percentage(s, this.__wbg_ptr);
        var t = a()[s / 4 + 0], e = a()[s / 4 + 1];
        return t === 0 ? void 0 : e >>> 0;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    set_max_collateral_inputs(t) {
      _.protocolparamupdate_set_max_collateral_inputs(this.__wbg_ptr, t);
    }
    max_collateral_inputs() {
      try {
        const s = _.__wbindgen_add_to_stack_pointer(-16);
        _.protocolparamupdate_max_collateral_inputs(s, this.__wbg_ptr);
        var t = a()[s / 4 + 0], e = a()[s / 4 + 1];
        return t === 0 ? void 0 : e >>> 0;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.protocolparamupdate_new();
      return Qe.__wrap(t);
    }
  }
  class S_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(S_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_protocolversion_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.protocolversion_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.protocolversion_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return S_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.protocolversion_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.protocolversion_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return S_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.protocolversion_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.protocolversion_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.protocolversion_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return S_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    major() {
      return _.protocolversion_major(this.__wbg_ptr) >>> 0;
    }
    minor() {
      return _.protocolversion_minor(this.__wbg_ptr) >>> 0;
    }
    static new(t, e) {
      const s = _.protocolversion_new(t, e);
      return S_.__wrap(s);
    }
  }
  class zr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(zr.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_publickey_free(t);
    }
    static from_bech32(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.publickey_from_bech32(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return zr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.publickey_to_bech32(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    as_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydatahash_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.publickey_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return zr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    verify(t, e) {
      const s = j(t, _.__wbindgen_malloc), o = w;
      return f(e, Se), _.publickey_verify(this.__wbg_ptr, s, o, e.__wbg_ptr) !== 0;
    }
    hash() {
      const t = _.publickey_hash(this.__wbg_ptr);
      return bt.__wrap(t);
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.publickey_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.publickey_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return zr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class E_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(E_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_redeemer_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.redeemer_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.redeemer_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return E_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.redeemer_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.redeemer_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return E_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.redeemer_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.redeemer_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.redeemer_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return E_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    tag() {
      const t = _.redeemer_tag(this.__wbg_ptr);
      return ie.__wrap(t);
    }
    index() {
      const t = _.redeemer_index(this.__wbg_ptr);
      return C.__wrap(t);
    }
    data() {
      const t = _.redeemer_data(this.__wbg_ptr);
      return K.__wrap(t);
    }
    ex_units() {
      const t = _.redeemer_ex_units(this.__wbg_ptr);
      return Bt.__wrap(t);
    }
    static new(t, e, s, o) {
      f(t, ie), f(e, C), f(s, K), f(o, Bt);
      const n = _.redeemer_new(t.__wbg_ptr, e.__wbg_ptr, s.__wbg_ptr, o.__wbg_ptr);
      return E_.__wrap(n);
    }
  }
  class ie {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(ie.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_redeemertag_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.redeemertag_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.redeemertag_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return ie.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.redeemertag_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.redeemertag_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return ie.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.redeemertag_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.redeemertag_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.redeemertag_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return ie.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_spend() {
      const t = _.redeemertag_new_spend();
      return ie.__wrap(t);
    }
    static new_mint() {
      const t = _.redeemertag_new_mint();
      return ie.__wrap(t);
    }
    static new_cert() {
      const t = _.redeemertag_new_cert();
      return ie.__wrap(t);
    }
    static new_reward() {
      const t = _.redeemertag_new_reward();
      return ie.__wrap(t);
    }
    kind() {
      return _.redeemertag_kind(this.__wbg_ptr) >>> 0;
    }
  }
  class z_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(z_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_redeemers_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.redeemers_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.redeemers_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return z_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.redeemers_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.redeemers_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return z_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.redeemers_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.redeemers_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.redeemers_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return z_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.costmodel_new();
      return z_.__wrap(t);
    }
    len() {
      return _.costmdls_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.redeemers_get(this.__wbg_ptr, t);
      return E_.__wrap(e);
    }
    add(t) {
      f(t, E_), _.redeemers_add(this.__wbg_ptr, t.__wbg_ptr);
    }
    total_ex_units() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.redeemers_total_ex_units(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return Bt.__wrap(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class he {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(he.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_relay_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.relay_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.relay_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return he.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.relay_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.relay_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return he.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.relay_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.relay_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.relay_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return he.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_single_host_addr(t) {
      f(t, T_);
      const e = _.relay_new_single_host_addr(t.__wbg_ptr);
      return he.__wrap(e);
    }
    static new_single_host_name(t) {
      f(t, R_);
      const e = _.relay_new_single_host_name(t.__wbg_ptr);
      return he.__wrap(e);
    }
    static new_multi_host_name(t) {
      f(t, y_);
      const e = _.relay_new_multi_host_name(t.__wbg_ptr);
      return he.__wrap(e);
    }
    kind() {
      return _.relay_kind(this.__wbg_ptr) >>> 0;
    }
    as_single_host_addr() {
      const t = _.relay_as_single_host_addr(this.__wbg_ptr);
      return t === 0 ? void 0 : T_.__wrap(t);
    }
    as_single_host_name() {
      const t = _.relay_as_single_host_name(this.__wbg_ptr);
      return t === 0 ? void 0 : R_.__wrap(t);
    }
    as_multi_host_name() {
      const t = _.relay_as_multi_host_name(this.__wbg_ptr);
      return t === 0 ? void 0 : y_.__wrap(t);
    }
  }
  class C_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(C_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_relays_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.relays_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.relays_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return C_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.relays_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.relays_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return C_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.relays_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.relays_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.relays_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return C_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.assetnames_new();
      return C_.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.relays_get(this.__wbg_ptr, t);
      return he.__wrap(e);
    }
    add(t) {
      f(t, he), _.relays_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class Oe {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Oe.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_rewardaddress_free(t);
    }
    static new(t, e) {
      f(e, dt);
      const s = _.enterpriseaddress_new(t, e.__wbg_ptr);
      return Oe.__wrap(s);
    }
    payment_cred() {
      const t = _.baseaddress_payment_cred(this.__wbg_ptr);
      return dt.__wrap(t);
    }
    to_address() {
      const t = _.rewardaddress_to_address(this.__wbg_ptr);
      return le.__wrap(t);
    }
    static from_address(t) {
      f(t, le);
      const e = _.rewardaddress_from_address(t.__wbg_ptr);
      return e === 0 ? void 0 : Oe.__wrap(e);
    }
  }
  class fr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(fr.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_rewardaddresses_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.rewardaddresses_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.rewardaddresses_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return fr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.rewardaddresses_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.rewardaddresses_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return fr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.rewardaddresses_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.rewardaddresses_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.rewardaddresses_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return fr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.ed25519keyhashes_new();
      return fr.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.rewardaddresses_get(this.__wbg_ptr, t);
      return Oe.__wrap(e);
    }
    add(t) {
      f(t, Oe), _.rewardaddresses_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class O_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(O_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_scriptall_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptall_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.scriptall_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return O_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptall_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scriptall_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return O_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptall_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptall_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scriptall_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return O_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    native_scripts() {
      const t = _.scriptall_native_scripts(this.__wbg_ptr);
      return Xt.__wrap(t);
    }
    static new(t) {
      f(t, Xt);
      const e = _.scriptall_new(t.__wbg_ptr);
      return O_.__wrap(e);
    }
  }
  class L_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(L_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_scriptany_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptany_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.scriptany_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return L_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptany_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scriptany_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return L_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptall_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptany_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scriptany_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return L_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    native_scripts() {
      const t = _.scriptall_native_scripts(this.__wbg_ptr);
      return Xt.__wrap(t);
    }
    static new(t) {
      f(t, Xt);
      const e = _.scriptall_new(t.__wbg_ptr);
      return L_.__wrap(e);
    }
  }
  class Cr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Cr.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_scriptdatahash_free(t);
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.scriptdatahash_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Cr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydatahash_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const y = _.__wbindgen_add_to_stack_pointer(-16), x = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), k = w;
        _.auxiliarydatahash_to_bech32(y, this.__wbg_ptr, x, k);
        var o = a()[y / 4 + 0], n = a()[y / 4 + 1], c = a()[y / 4 + 2], d = a()[y / 4 + 3], p = o, l = n;
        if (d) throw p = 0, l = 0, u(c);
        return e = p, s = l, b(p, l);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(e, s, 1);
      }
    }
    static from_bech32(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scriptdatahash_from_bech32(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Cr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydatahash_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scriptdatahash_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Cr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class pt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(pt.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_scripthash_free(t);
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.scripthash_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return pt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ed25519keyhash_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const y = _.__wbindgen_add_to_stack_pointer(-16), x = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), k = w;
        _.ed25519keyhash_to_bech32(y, this.__wbg_ptr, x, k);
        var o = a()[y / 4 + 0], n = a()[y / 4 + 1], c = a()[y / 4 + 2], d = a()[y / 4 + 3], p = o, l = n;
        if (d) throw p = 0, l = 0, u(c);
        return e = p, s = l, b(p, l);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(e, s, 1);
      }
    }
    static from_bech32(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scripthash_from_bech32(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return pt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.ed25519keyhash_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scripthash_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return pt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class N_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(N_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_scripthashes_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.scripthashes_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.scripthashes_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return N_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.scripthashes_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scripthashes_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return N_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.scripthashes_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.scripthashes_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scripthashes_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return N_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.ed25519keyhashes_new();
      return N_.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.scripthashes_get(this.__wbg_ptr, t);
      return pt.__wrap(e);
    }
    add(t) {
      f(t, pt), _.scripthashes_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class F_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(F_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_scriptnofk_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptnofk_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.scriptnofk_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return F_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptnofk_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scriptnofk_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return F_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptnofk_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptnofk_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scriptnofk_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return F_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    n() {
      return _.protocolversion_major(this.__wbg_ptr) >>> 0;
    }
    native_scripts() {
      const t = _.scriptnofk_native_scripts(this.__wbg_ptr);
      return Xt.__wrap(t);
    }
    static new(t, e) {
      f(e, Xt);
      const s = _.scriptnofk_new(t, e.__wbg_ptr);
      return F_.__wrap(s);
    }
  }
  class P_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(P_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_scriptpubkey_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptpubkey_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.scriptpubkey_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return P_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptpubkey_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scriptpubkey_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return P_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptpubkey_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptpubkey_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scriptpubkey_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return P_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    addr_keyhash() {
      const t = _.scriptpubkey_addr_keyhash(this.__wbg_ptr);
      return bt.__wrap(t);
    }
    static new(t) {
      f(t, bt);
      const e = _.scriptpubkey_new(t.__wbg_ptr);
      return P_.__wrap(e);
    }
  }
  class De {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(De.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_scriptref_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptref_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.scriptref_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return De.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptref_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scriptref_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return De.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptref_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptref_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scriptref_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return De.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_native_script(t) {
      f(t, zt);
      const e = _.scriptref_new_native_script(t.__wbg_ptr);
      return De.__wrap(e);
    }
    static new_plutus_script(t) {
      f(t, Rt);
      const e = _.scriptref_new_plutus_script(t.__wbg_ptr);
      return De.__wrap(e);
    }
    is_native_script() {
      return _.scriptref_is_native_script(this.__wbg_ptr) !== 0;
    }
    is_plutus_script() {
      return _.scriptref_is_plutus_script(this.__wbg_ptr) !== 0;
    }
    native_script() {
      const t = _.scriptref_native_script(this.__wbg_ptr);
      return t === 0 ? void 0 : zt.__wrap(t);
    }
    plutus_script() {
      const t = _.scriptref_plutus_script(this.__wbg_ptr);
      return t === 0 ? void 0 : Rt.__wrap(t);
    }
  }
  class T_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(T_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_singlehostaddr_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.singlehostaddr_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.singlehostaddr_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return T_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.singlehostaddr_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.singlehostaddr_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return T_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.singlehostaddr_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.singlehostaddr_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.singlehostaddr_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return T_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    port() {
      const t = _.singlehostaddr_port(this.__wbg_ptr);
      return t === 16777215 ? void 0 : t;
    }
    ipv4() {
      const t = _.singlehostaddr_ipv4(this.__wbg_ptr);
      return t === 0 ? void 0 : f_.__wrap(t);
    }
    ipv6() {
      const t = _.singlehostaddr_ipv6(this.__wbg_ptr);
      return t === 0 ? void 0 : g_.__wrap(t);
    }
    static new(t, e, s) {
      let o = 0;
      Ce(e) || (f(e, f_), o = e.__destroy_into_raw());
      let n = 0;
      Ce(s) || (f(s, g_), n = s.__destroy_into_raw());
      const c = _.singlehostaddr_new(Ce(t) ? 16777215 : t, o, n);
      return T_.__wrap(c);
    }
  }
  class R_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(R_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_singlehostname_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.singlehostname_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.singlehostname_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return R_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.singlehostname_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.singlehostname_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return R_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.singlehostname_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.singlehostname_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.singlehostname_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return R_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    port() {
      const t = _.singlehostname_port(this.__wbg_ptr);
      return t === 16777215 ? void 0 : t;
    }
    dns_name() {
      const t = _.multihostname_dns_name(this.__wbg_ptr);
      return d_.__wrap(t);
    }
    static new(t, e) {
      f(e, d_);
      const s = _.singlehostname_new(Ce(t) ? 16777215 : t, e.__wbg_ptr);
      return R_.__wrap(s);
    }
  }
  class dt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(dt.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_stakecredential_free(t);
    }
    static from_keyhash(t) {
      f(t, bt);
      const e = _.stakecredential_from_keyhash(t.__wbg_ptr);
      return dt.__wrap(e);
    }
    static from_scripthash(t) {
      f(t, pt);
      const e = _.stakecredential_from_scripthash(t.__wbg_ptr);
      return dt.__wrap(e);
    }
    to_keyhash() {
      const t = _.stakecredential_to_keyhash(this.__wbg_ptr);
      return t === 0 ? void 0 : bt.__wrap(t);
    }
    to_scripthash() {
      const t = _.stakecredential_to_scripthash(this.__wbg_ptr);
      return t === 0 ? void 0 : pt.__wrap(t);
    }
    kind() {
      return _.stakecredential_kind(this.__wbg_ptr) >>> 0;
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakecredential_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.stakecredential_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return dt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakecredential_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.stakecredential_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return dt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakecredential_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakecredential_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.stakecredential_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return dt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class gr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(gr.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_stakecredentials_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakecredentials_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.stakecredentials_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return gr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakecredentials_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.stakecredentials_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return gr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakecredentials_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakecredentials_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.stakecredentials_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return gr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.ed25519keyhashes_new();
      return gr.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.stakecredentials_get(this.__wbg_ptr, t);
      return dt.__wrap(e);
    }
    add(t) {
      f(t, dt), _.stakecredentials_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class D_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(D_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_stakedelegation_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakedelegation_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.stakedelegation_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return D_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakedelegation_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.stakedelegation_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return D_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakedelegation_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakedelegation_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.stakedelegation_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return D_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    stake_credential() {
      const t = _.stakedelegation_stake_credential(this.__wbg_ptr);
      return dt.__wrap(t);
    }
    pool_keyhash() {
      const t = _.scriptpubkey_addr_keyhash(this.__wbg_ptr);
      return bt.__wrap(t);
    }
    static new(t, e) {
      f(t, dt), f(e, bt);
      const s = _.stakedelegation_new(t.__wbg_ptr, e.__wbg_ptr);
      return D_.__wrap(s);
    }
  }
  class $_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create($_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_stakederegistration_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakederegistration_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.stakederegistration_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return $_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakederegistration_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.stakederegistration_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return $_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakederegistration_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakederegistration_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.stakederegistration_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return $_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    stake_credential() {
      const t = _.stakederegistration_stake_credential(this.__wbg_ptr);
      return dt.__wrap(t);
    }
    static new(t) {
      f(t, dt);
      const e = _.stakederegistration_new(t.__wbg_ptr);
      return $_.__wrap(e);
    }
  }
  class U_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(U_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_stakeregistration_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakeregistration_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.stakeregistration_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return U_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakeregistration_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.stakeregistration_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return U_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakederegistration_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakeregistration_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.stakeregistration_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return U_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    stake_credential() {
      const t = _.stakederegistration_stake_credential(this.__wbg_ptr);
      return dt.__wrap(t);
    }
    static new(t) {
      f(t, dt);
      const e = _.stakederegistration_new(t.__wbg_ptr);
      return U_.__wrap(e);
    }
  }
  class $e {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create($e.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_timelockexpiry_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.timelockexpiry_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.timelockexpiry_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return $e.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.timelockexpiry_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.timelockexpiry_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return $e.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.timelockexpiry_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.timelockexpiry_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.timelockexpiry_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return $e.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    slot() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.timelockexpiry_slot(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return t >>> 0;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    slot_bignum() {
      const t = _.timelockexpiry_slot_bignum(this.__wbg_ptr);
      return C.__wrap(t);
    }
    static new(t) {
      const e = _.timelockexpiry_new(t);
      return $e.__wrap(e);
    }
    static new_timelockexpiry(t) {
      f(t, C);
      const e = _.timelockexpiry_new_timelockexpiry(t.__wbg_ptr);
      return $e.__wrap(e);
    }
  }
  class Ue {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ue.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_timelockstart_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.timelockstart_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.timelockstart_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ue.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.timelockstart_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.timelockstart_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ue.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.timelockexpiry_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.timelockstart_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.timelockstart_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ue.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    slot() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.timelockexpiry_slot(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return t >>> 0;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    slot_bignum() {
      const t = _.timelockexpiry_slot_bignum(this.__wbg_ptr);
      return C.__wrap(t);
    }
    static new(t) {
      const e = _.timelockexpiry_new(t);
      return Ue.__wrap(e);
    }
    static new_timelockstart(t) {
      f(t, C);
      const e = _.timelockexpiry_new_timelockexpiry(t.__wbg_ptr);
      return Ue.__wrap(e);
    }
  }
  class M_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(M_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_transaction_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transaction_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.transaction_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return M_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.transaction_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transaction_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return M_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.transaction_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transaction_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transaction_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return M_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    body() {
      const t = _.transaction_body(this.__wbg_ptr);
      return me.__wrap(t);
    }
    witness_set() {
      const t = _.transaction_witness_set(this.__wbg_ptr);
      return W_.__wrap(t);
    }
    is_valid() {
      return _.transaction_is_valid(this.__wbg_ptr) !== 0;
    }
    auxiliary_data() {
      const t = _.transaction_auxiliary_data(this.__wbg_ptr);
      return t === 0 ? void 0 : a_.__wrap(t);
    }
    set_is_valid(t) {
      _.transaction_set_is_valid(this.__wbg_ptr, t);
    }
    static new(t, e, s) {
      f(t, me), f(e, W_);
      let o = 0;
      Ce(s) || (f(s, a_), o = s.__destroy_into_raw());
      const n = _.transaction_new(t.__wbg_ptr, e.__wbg_ptr, o);
      return M_.__wrap(n);
    }
  }
  class me {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(me.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_transactionbody_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionbody_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.transactionbody_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return me.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionbody_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactionbody_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return me.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionbody_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionbody_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactionbody_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return me.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    inputs() {
      const t = _.transactionbody_inputs(this.__wbg_ptr);
      return $t.__wrap(t);
    }
    outputs() {
      const t = _.transactionbody_outputs(this.__wbg_ptr);
      return Ve.__wrap(t);
    }
    fee() {
      const t = _.transactionbody_fee(this.__wbg_ptr);
      return C.__wrap(t);
    }
    ttl() {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionbody_ttl(n, this.__wbg_ptr);
        var t = a()[n / 4 + 0], e = a()[n / 4 + 1], s = a()[n / 4 + 2], o = a()[n / 4 + 3];
        if (o) throw u(s);
        return t === 0 ? void 0 : e >>> 0;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    ttl_bignum() {
      const t = _.transactionbody_ttl_bignum(this.__wbg_ptr);
      return t === 0 ? void 0 : C.__wrap(t);
    }
    set_ttl(t) {
      f(t, C), _.transactionbody_set_ttl(this.__wbg_ptr, t.__wbg_ptr);
    }
    remove_ttl() {
      _.transactionbody_remove_ttl(this.__wbg_ptr);
    }
    set_certs(t) {
      f(t, c_), _.transactionbody_set_certs(this.__wbg_ptr, t.__wbg_ptr);
    }
    certs() {
      const t = _.transactionbody_certs(this.__wbg_ptr);
      return t === 0 ? void 0 : c_.__wrap(t);
    }
    set_withdrawals(t) {
      f(t, A_), _.transactionbody_set_withdrawals(this.__wbg_ptr, t.__wbg_ptr);
    }
    withdrawals() {
      const t = _.transactionbody_withdrawals(this.__wbg_ptr);
      return t === 0 ? void 0 : A_.__wrap(t);
    }
    set_update(t) {
      f(t, Q_), _.transactionbody_set_update(this.__wbg_ptr, t.__wbg_ptr);
    }
    update() {
      const t = _.transactionbody_update(this.__wbg_ptr);
      return t === 0 ? void 0 : Q_.__wrap(t);
    }
    set_auxiliary_data_hash(t) {
      f(t, mr), _.transactionbody_set_auxiliary_data_hash(this.__wbg_ptr, t.__wbg_ptr);
    }
    auxiliary_data_hash() {
      const t = _.transactionbody_auxiliary_data_hash(this.__wbg_ptr);
      return t === 0 ? void 0 : mr.__wrap(t);
    }
    set_validity_start_interval(t) {
      _.transactionbody_set_validity_start_interval(this.__wbg_ptr, t);
    }
    set_validity_start_interval_bignum(t) {
      f(t, C);
      var e = t.__destroy_into_raw();
      _.transactionbody_set_validity_start_interval_bignum(this.__wbg_ptr, e);
    }
    validity_start_interval_bignum() {
      const t = _.transactionbody_validity_start_interval_bignum(this.__wbg_ptr);
      return t === 0 ? void 0 : C.__wrap(t);
    }
    validity_start_interval() {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionbody_validity_start_interval(n, this.__wbg_ptr);
        var t = a()[n / 4 + 0], e = a()[n / 4 + 1], s = a()[n / 4 + 2], o = a()[n / 4 + 3];
        if (o) throw u(s);
        return t === 0 ? void 0 : e >>> 0;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    set_mint(t) {
      f(t, ye), _.transactionbody_set_mint(this.__wbg_ptr, t.__wbg_ptr);
    }
    mint() {
      const t = _.transactionbody_mint(this.__wbg_ptr);
      return t === 0 ? void 0 : ye.__wrap(t);
    }
    multiassets() {
      const t = _.transactionbody_mint(this.__wbg_ptr);
      return t === 0 ? void 0 : ye.__wrap(t);
    }
    set_reference_inputs(t) {
      f(t, $t), _.transactionbody_set_reference_inputs(this.__wbg_ptr, t.__wbg_ptr);
    }
    reference_inputs() {
      const t = _.transactionbody_reference_inputs(this.__wbg_ptr);
      return t === 0 ? void 0 : $t.__wrap(t);
    }
    set_script_data_hash(t) {
      f(t, Cr), _.transactionbody_set_script_data_hash(this.__wbg_ptr, t.__wbg_ptr);
    }
    script_data_hash() {
      const t = _.transactionbody_script_data_hash(this.__wbg_ptr);
      return t === 0 ? void 0 : Cr.__wrap(t);
    }
    set_collateral(t) {
      f(t, $t), _.transactionbody_set_collateral(this.__wbg_ptr, t.__wbg_ptr);
    }
    collateral() {
      const t = _.transactionbody_collateral(this.__wbg_ptr);
      return t === 0 ? void 0 : $t.__wrap(t);
    }
    set_required_signers(t) {
      f(t, Gt), _.transactionbody_set_required_signers(this.__wbg_ptr, t.__wbg_ptr);
    }
    required_signers() {
      const t = _.transactionbody_required_signers(this.__wbg_ptr);
      return t === 0 ? void 0 : Gt.__wrap(t);
    }
    set_network_id(t) {
      f(t, Re), _.transactionbody_set_network_id(this.__wbg_ptr, t.__wbg_ptr);
    }
    network_id() {
      const t = _.transactionbody_network_id(this.__wbg_ptr);
      return t === 0 ? void 0 : Re.__wrap(t);
    }
    set_collateral_return(t) {
      f(t, xe), _.transactionbody_set_collateral_return(this.__wbg_ptr, t.__wbg_ptr);
    }
    collateral_return() {
      const t = _.transactionbody_collateral_return(this.__wbg_ptr);
      return t === 0 ? void 0 : xe.__wrap(t);
    }
    set_total_collateral(t) {
      f(t, C), _.transactionbody_set_total_collateral(this.__wbg_ptr, t.__wbg_ptr);
    }
    total_collateral() {
      const t = _.transactionbody_total_collateral(this.__wbg_ptr);
      return t === 0 ? void 0 : C.__wrap(t);
    }
    static new(t, e, s, o) {
      f(t, $t), f(e, Ve), f(s, C);
      const n = _.transactionbody_new(t.__wbg_ptr, e.__wbg_ptr, s.__wbg_ptr, !Ce(o), Ce(o) ? 0 : o);
      return me.__wrap(n);
    }
    static new_tx_body(t, e, s) {
      f(t, $t), f(e, Ve), f(s, C);
      const o = _.transactionbody_new_tx_body(t.__wbg_ptr, e.__wbg_ptr, s.__wbg_ptr);
      return me.__wrap(o);
    }
  }
  class K_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(K_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_transactionhash_free(t);
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.transactionhash_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return K_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydatahash_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const y = _.__wbindgen_add_to_stack_pointer(-16), x = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), k = w;
        _.auxiliarydatahash_to_bech32(y, this.__wbg_ptr, x, k);
        var o = a()[y / 4 + 0], n = a()[y / 4 + 1], c = a()[y / 4 + 2], d = a()[y / 4 + 3], p = o, l = n;
        if (d) throw p = 0, l = 0, u(c);
        return e = p, s = l, b(p, l);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(e, s, 1);
      }
    }
    static from_bech32(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactionhash_from_bech32(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return K_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydatahash_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactionhash_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return K_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class I_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(I_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_transactioninput_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactioninput_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.transactioninput_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return I_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactioninput_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactioninput_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return I_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactioninput_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactioninput_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactioninput_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return I_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    transaction_id() {
      const t = _.transactioninput_transaction_id(this.__wbg_ptr);
      return K_.__wrap(t);
    }
    index() {
      return _.transactioninput_index(this.__wbg_ptr) >>> 0;
    }
    static new(t, e) {
      f(t, K_);
      const s = _.transactioninput_new(t.__wbg_ptr, e);
      return I_.__wrap(s);
    }
  }
  class $t {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create($t.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_transactioninputs_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactioninputs_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.transactioninputs_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return $t.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactioninputs_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactioninputs_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return $t.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactioninputs_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactioninputs_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactioninputs_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return $t.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.assetnames_new();
      return $t.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.transactioninputs_get(this.__wbg_ptr, t);
      return I_.__wrap(e);
    }
    add(t) {
      f(t, I_), _.transactioninputs_add(this.__wbg_ptr, t.__wbg_ptr);
    }
    to_option() {
      const t = _.transactioninputs_to_option(this.__wbg_ptr);
      return t === 0 ? void 0 : $t.__wrap(t);
    }
  }
  class Y {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Y.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_transactionmetadatum_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionmetadatum_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.transactionmetadatum_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Y.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionmetadatum_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactionmetadatum_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Y.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_map(t) {
      f(t, jr);
      const e = _.transactionmetadatum_new_map(t.__wbg_ptr);
      return Y.__wrap(e);
    }
    static new_list(t) {
      f(t, X_);
      const e = _.transactionmetadatum_new_list(t.__wbg_ptr);
      return Y.__wrap(e);
    }
    static new_int(t) {
      f(t, nt);
      const e = _.transactionmetadatum_new_int(t.__wbg_ptr);
      return Y.__wrap(e);
    }
    static new_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.transactionmetadatum_new_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Y.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_text(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactionmetadatum_new_text(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Y.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    kind() {
      return _.plutusdata_kind(this.__wbg_ptr) >>> 0;
    }
    as_map() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionmetadatum_as_map(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return jr.__wrap(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    as_list() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionmetadatum_as_list(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return X_.__wrap(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    as_int() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionmetadatum_as_int(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return nt.__wrap(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    as_bytes() {
      try {
        const c = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionmetadatum_as_bytes(c, this.__wbg_ptr);
        var t = a()[c / 4 + 0], e = a()[c / 4 + 1], s = a()[c / 4 + 2], o = a()[c / 4 + 3];
        if (o) throw u(s);
        var n = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), n;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    as_text() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionmetadatum_as_text(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
  }
  class Jr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Jr.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_transactionmetadatumlabels_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionmetadatumlabels_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.transactionmetadatumlabels_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Jr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionmetadatumlabels_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactionmetadatumlabels_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Jr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.costmodel_new();
      return Jr.__wrap(t);
    }
    len() {
      return _.costmdls_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.transactionmetadatumlabels_get(this.__wbg_ptr, t);
      return C.__wrap(e);
    }
    add(t) {
      f(t, C), _.transactionmetadatumlabels_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class xe {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(xe.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_transactionoutput_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionoutput_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.transactionoutput_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return xe.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionoutput_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactionoutput_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return xe.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionoutput_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionoutput_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactionoutput_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return xe.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    address() {
      const t = _.transactionoutput_address(this.__wbg_ptr);
      return le.__wrap(t);
    }
    amount() {
      const t = _.transactionoutput_amount(this.__wbg_ptr);
      return ft.__wrap(t);
    }
    data_hash() {
      const t = _.transactionoutput_data_hash(this.__wbg_ptr);
      return t === 0 ? void 0 : kr.__wrap(t);
    }
    plutus_data() {
      const t = _.transactionoutput_plutus_data(this.__wbg_ptr);
      return t === 0 ? void 0 : K.__wrap(t);
    }
    script_ref() {
      const t = _.transactionoutput_script_ref(this.__wbg_ptr);
      return t === 0 ? void 0 : De.__wrap(t);
    }
    set_script_ref(t) {
      f(t, De), _.transactionoutput_set_script_ref(this.__wbg_ptr, t.__wbg_ptr);
    }
    set_plutus_data(t) {
      f(t, K), _.transactionoutput_set_plutus_data(this.__wbg_ptr, t.__wbg_ptr);
    }
    set_data_hash(t) {
      f(t, kr), _.transactionoutput_set_data_hash(this.__wbg_ptr, t.__wbg_ptr);
    }
    has_plutus_data() {
      return _.transactionoutput_has_plutus_data(this.__wbg_ptr) !== 0;
    }
    has_data_hash() {
      return _.transactionoutput_has_data_hash(this.__wbg_ptr) !== 0;
    }
    has_script_ref() {
      return _.transactionoutput_has_script_ref(this.__wbg_ptr) !== 0;
    }
    static new(t, e) {
      f(t, le), f(e, ft);
      const s = _.transactionoutput_new(t.__wbg_ptr, e.__wbg_ptr);
      return xe.__wrap(s);
    }
    serialization_format() {
      const t = _.transactionoutput_serialization_format(this.__wbg_ptr);
      return t === 2 ? void 0 : t;
    }
  }
  class Ve {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ve.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_transactionoutputs_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionoutputs_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.transactionoutputs_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ve.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionoutputs_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactionoutputs_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ve.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionoutputs_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionoutputs_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactionoutputs_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ve.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.certificates_new();
      return Ve.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.transactionoutputs_get(this.__wbg_ptr, t);
      return xe.__wrap(e);
    }
    add(t) {
      f(t, xe), _.transactionoutputs_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class W_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(W_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_transactionwitnessset_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionwitnessset_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.transactionwitnessset_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return W_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionwitnessset_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactionwitnessset_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return W_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionwitnessset_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionwitnessset_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactionwitnessset_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return W_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    set_vkeys(t) {
      f(t, B_), _.transactionwitnessset_set_vkeys(this.__wbg_ptr, t.__wbg_ptr);
    }
    vkeys() {
      const t = _.transactionwitnessset_vkeys(this.__wbg_ptr);
      return t === 0 ? void 0 : B_.__wrap(t);
    }
    set_native_scripts(t) {
      f(t, Xt), _.transactionwitnessset_set_native_scripts(this.__wbg_ptr, t.__wbg_ptr);
    }
    native_scripts() {
      const t = _.transactionwitnessset_native_scripts(this.__wbg_ptr);
      return t === 0 ? void 0 : Xt.__wrap(t);
    }
    set_bootstraps(t) {
      f(t, so), _.transactionwitnessset_set_bootstraps(this.__wbg_ptr, t.__wbg_ptr);
    }
    bootstraps() {
      const t = _.transactionwitnessset_bootstraps(this.__wbg_ptr);
      return t === 0 ? void 0 : so.__wrap(t);
    }
    set_plutus_scripts(t) {
      f(t, ke), _.transactionwitnessset_set_plutus_scripts(this.__wbg_ptr, t.__wbg_ptr);
    }
    plutus_scripts() {
      const t = _.transactionwitnessset_plutus_scripts(this.__wbg_ptr);
      return t === 0 ? void 0 : ke.__wrap(t);
    }
    set_plutus_data(t) {
      f(t, ee), _.transactionwitnessset_set_plutus_data(this.__wbg_ptr, t.__wbg_ptr);
    }
    plutus_data() {
      const t = _.transactionwitnessset_plutus_data(this.__wbg_ptr);
      return t === 0 ? void 0 : ee.__wrap(t);
    }
    set_redeemers(t) {
      f(t, z_), _.transactionwitnessset_set_redeemers(this.__wbg_ptr, t.__wbg_ptr);
    }
    redeemers() {
      const t = _.transactionwitnessset_redeemers(this.__wbg_ptr);
      return t === 0 ? void 0 : z_.__wrap(t);
    }
    static new() {
      const t = _.transactionwitnessset_new();
      return W_.__wrap(t);
    }
  }
  let sd = class Mr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Mr.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_url_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.url_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.url_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Mr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.url_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.url_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Mr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.dnsrecordaoraaaa_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.dnsrecordaoraaaa_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.url_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Mr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.url_new(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Mr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    url() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.dnsrecordaoraaaa_record(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
  };
  class ct {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(ct.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_unitinterval_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.unitinterval_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.unitinterval_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return ct.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.unitinterval_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.unitinterval_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return ct.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.unitinterval_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.unitinterval_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.unitinterval_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return ct.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    numerator() {
      const t = _.timelockexpiry_slot_bignum(this.__wbg_ptr);
      return C.__wrap(t);
    }
    denominator() {
      const t = _.unitinterval_denominator(this.__wbg_ptr);
      return C.__wrap(t);
    }
    static new(t, e) {
      f(t, C), f(e, C);
      const s = _.unitinterval_new(t.__wbg_ptr, e.__wbg_ptr);
      return ct.__wrap(s);
    }
  }
  class Q_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Q_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_update_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.update_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.update_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Q_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.update_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.update_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Q_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.update_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.update_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.update_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Q_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    proposed_protocol_parameter_updates() {
      const t = _.update_proposed_protocol_parameter_updates(this.__wbg_ptr);
      return j_.__wrap(t);
    }
    epoch() {
      return _.update_epoch(this.__wbg_ptr) >>> 0;
    }
    static new(t, e) {
      f(t, j_);
      const s = _.update_new(t.__wbg_ptr, e);
      return Q_.__wrap(s);
    }
  }
  class He {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(He.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_vrfkeyhash_free(t);
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.vrfkeyhash_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return He.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydatahash_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const y = _.__wbindgen_add_to_stack_pointer(-16), x = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), k = w;
        _.auxiliarydatahash_to_bech32(y, this.__wbg_ptr, x, k);
        var o = a()[y / 4 + 0], n = a()[y / 4 + 1], c = a()[y / 4 + 2], d = a()[y / 4 + 3], p = o, l = n;
        if (d) throw p = 0, l = 0, u(c);
        return e = p, s = l, b(p, l);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(e, s, 1);
      }
    }
    static from_bech32(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.vrfkeyhash_from_bech32(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return He.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydatahash_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.vrfkeyhash_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return He.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class ft {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(ft.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_value_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.value_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.value_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return ft.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.value_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.value_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return ft.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.value_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.value_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.value_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return ft.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t) {
      f(t, C);
      const e = _.value_new(t.__wbg_ptr);
      return ft.__wrap(e);
    }
    static new_from_assets(t) {
      f(t, Dt);
      const e = _.value_new_from_assets(t.__wbg_ptr);
      return ft.__wrap(e);
    }
    static new_with_assets(t, e) {
      f(t, C), f(e, Dt);
      const s = _.value_new_with_assets(t.__wbg_ptr, e.__wbg_ptr);
      return ft.__wrap(s);
    }
    static zero() {
      const t = _.value_zero();
      return ft.__wrap(t);
    }
    is_zero() {
      return _.value_is_zero(this.__wbg_ptr) !== 0;
    }
    coin() {
      const t = _.value_coin(this.__wbg_ptr);
      return C.__wrap(t);
    }
    set_coin(t) {
      f(t, C), _.value_set_coin(this.__wbg_ptr, t.__wbg_ptr);
    }
    multiasset() {
      const t = _.value_multiasset(this.__wbg_ptr);
      return t === 0 ? void 0 : Dt.__wrap(t);
    }
    set_multiasset(t) {
      f(t, Dt), _.value_set_multiasset(this.__wbg_ptr, t.__wbg_ptr);
    }
    checked_add(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        f(t, ft), _.value_checked_add(n, this.__wbg_ptr, t.__wbg_ptr);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return ft.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    checked_sub(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        f(t, ft), _.value_checked_sub(n, this.__wbg_ptr, t.__wbg_ptr);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return ft.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    clamped_sub(t) {
      f(t, ft);
      const e = _.value_clamped_sub(this.__wbg_ptr, t.__wbg_ptr);
      return ft.__wrap(e);
    }
    compare(t) {
      f(t, ft);
      const e = _.value_compare(this.__wbg_ptr, t.__wbg_ptr);
      return e === 16777215 ? void 0 : e;
    }
  }
  class je {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(je.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_vkey_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.vkey_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.vkey_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return je.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.vkey_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.vkey_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return je.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.vkey_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.vkey_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.vkey_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return je.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t) {
      f(t, zr);
      const e = _.vkey_new(t.__wbg_ptr);
      return je.__wrap(e);
    }
    public_key() {
      const t = _.vkey_public_key(this.__wbg_ptr);
      return zr.__wrap(t);
    }
  }
  class V_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(V_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_vkeywitness_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.vkeywitness_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.vkeywitness_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return V_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.vkeywitness_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.vkeywitness_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return V_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.vkeywitness_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.vkeywitness_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.vkeywitness_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return V_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t, e) {
      f(t, je), f(e, Se);
      const s = _.vkeywitness_new(t.__wbg_ptr, e.__wbg_ptr);
      return V_.__wrap(s);
    }
    vkey() {
      const t = _.bootstrapwitness_vkey(this.__wbg_ptr);
      return je.__wrap(t);
    }
    signature() {
      const t = _.bootstrapwitness_signature(this.__wbg_ptr);
      return Se.__wrap(t);
    }
  }
  class B_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(B_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_vkeywitnesses_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.vkeywitnesses_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.vkeywitnesses_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return B_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.vkeywitnesses_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.vkeywitnesses_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return B_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.vkeywitnesses_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.vkeywitnesses_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.vkeywitnesses_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return B_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.publickeys_new();
      return B_.__wrap(t);
    }
    len() {
      return _.bootstrapwitnesses_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.vkeywitnesses_get(this.__wbg_ptr, t);
      return V_.__wrap(e);
    }
    add(t) {
      f(t, V_), _.vkeywitnesses_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class A_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(A_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_withdrawals_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.withdrawals_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.withdrawals_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return A_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.withdrawals_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, b(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.withdrawals_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return A_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.withdrawals_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, b(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.withdrawals_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.withdrawals_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return A_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.auxiliarydataset_new();
      return A_.__wrap(t);
    }
    len() {
      return _.auxiliarydataset_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, Oe), f(e, C);
      const s = _.withdrawals_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : C.__wrap(s);
    }
    get(t) {
      f(t, Oe);
      const e = _.withdrawals_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : C.__wrap(e);
    }
    keys() {
      const t = _.withdrawals_keys(this.__wbg_ptr);
      return fr.__wrap(t);
    }
  }
  function of(r) {
    u(r);
  }
  function sf(r, t) {
    const e = b(r, t);
    return V(e);
  }
  function af(r, t) {
    const e = new Error(b(r, t));
    return V(e);
  }
  function cf(r, t) {
    const e = U(t), s = typeof e == "string" ? e : void 0;
    var o = Ce(s) ? 0 : g(s, _.__wbindgen_malloc, _.__wbindgen_realloc), n = w;
    a()[r / 4 + 1] = n, a()[r / 4 + 0] = o;
  }
  function df(r) {
    return V(r);
  }
  function lf(r) {
    const t = U(r);
    return V(t);
  }
  function pf(r) {
    const t = U(r);
    return typeof t == "object" && t !== null;
  }
  function uf(r, t, e) {
    U(r)[u(t)] = u(e);
  }
  function wf(r, t) {
    const e = String(U(t)), s = g(e, _.__wbindgen_malloc, _.__wbindgen_realloc), o = w;
    a()[r / 4 + 1] = o, a()[r / 4 + 0] = s;
  }
  function ff() {
    return Ge(function(r, t) {
      U(r).randomFillSync(u(t));
    }, arguments);
  }
  function gf() {
    return Ge(function(r, t) {
      U(r).getRandomValues(U(t));
    }, arguments);
  }
  function bf(r) {
    const t = U(r).crypto;
    return V(t);
  }
  function hf(r) {
    const t = U(r).process;
    return V(t);
  }
  function yf(r) {
    const t = U(r).versions;
    return V(t);
  }
  function mf(r) {
    const t = U(r).node;
    return V(t);
  }
  function vf(r) {
    return typeof U(r) == "string";
  }
  function kf() {
    return Ge(function() {
      const r = module.require;
      return V(r);
    }, arguments);
  }
  function xf(r) {
    const t = U(r).msCrypto;
    return V(t);
  }
  function jf() {
    const r = new Array();
    return V(r);
  }
  function Sf(r) {
    return typeof U(r) == "function";
  }
  function Ef(r, t) {
    const e = new Function(b(r, t));
    return V(e);
  }
  function zf() {
    return V(/* @__PURE__ */ new Map());
  }
  function Cf() {
    return Ge(function(r, t) {
      const e = U(r).call(U(t));
      return V(e);
    }, arguments);
  }
  function Of() {
    const r = new Object();
    return V(r);
  }
  function Lf() {
    return Ge(function() {
      const r = self.self;
      return V(r);
    }, arguments);
  }
  function Nf() {
    return Ge(function() {
      const r = window.window;
      return V(r);
    }, arguments);
  }
  function Ff() {
    return Ge(function() {
      const r = globalThis.globalThis;
      return V(r);
    }, arguments);
  }
  function Pf() {
    return Ge(function() {
      const r = global.global;
      return V(r);
    }, arguments);
  }
  function Tf(r) {
    return U(r) === void 0;
  }
  function Rf(r, t, e) {
    U(r)[t >>> 0] = u(e);
  }
  function Df() {
    return Ge(function(r, t, e) {
      const s = U(r).call(U(t), U(e));
      return V(s);
    }, arguments);
  }
  function $f(r, t, e) {
    const s = U(r).set(U(t), U(e));
    return V(s);
  }
  function Uf(r) {
    const t = U(r).buffer;
    return V(t);
  }
  function Mf(r, t, e) {
    const s = new Uint8Array(U(r), t >>> 0, e >>> 0);
    return V(s);
  }
  function If(r) {
    const t = new Uint8Array(U(r));
    return V(t);
  }
  function Wf(r, t, e) {
    U(r).set(U(t), e >>> 0);
  }
  function Qf(r) {
    const t = new Uint8Array(r >>> 0);
    return V(t);
  }
  function Vf(r, t, e) {
    const s = U(r).subarray(t >>> 0, e >>> 0);
    return V(s);
  }
  function Bf(r, t) {
    const e = new Function(b(r, t));
    return V(e);
  }
  function Af(r, t) {
    const e = U(r).call(U(t));
    return V(e);
  }
  function Hf(r, t) {
    return U(r) === U(t);
  }
  function Yf(r) {
    const t = U(r).self;
    return V(t);
  }
  function Xf(r) {
    const t = U(r).crypto;
    return V(t);
  }
  function qf(r) {
    const t = U(r).getRandomValues;
    return V(t);
  }
  function Kf(r, t) {
    const e = require(b(r, t));
    return V(e);
  }
  function Zf(r, t, e) {
    U(r).randomFillSync(S(t, e));
  }
  function Jf(r, t, e) {
    U(r).getRandomValues(S(t, e));
  }
  function Gf(r, t) {
    const e = ti(U(t)), s = g(e, _.__wbindgen_malloc, _.__wbindgen_realloc), o = w;
    a()[r / 4 + 1] = o, a()[r / 4 + 0] = s;
  }
  function tg(r, t) {
    throw new Error(b(r, t));
  }
  function eg() {
    const r = _.memory;
    return V(r);
  }
  URL = globalThis.URL;
  const i = await Jw({
    "./cardano_serialization_lib_bg.js": {
      __wbindgen_object_drop_ref: of,
      __wbindgen_string_new: sf,
      __wbindgen_error_new: af,
      __wbindgen_string_get: cf,
      __wbindgen_number_new: df,
      __wbindgen_object_clone_ref: lf,
      __wbindgen_is_object: pf,
      __wbg_set_20cbc34131e76824: uf,
      __wbg_String_91fba7ded13ba54c: wf,
      __wbg_randomFillSync_dc1e9a60c158336d: ff,
      __wbg_getRandomValues_37fa2ca9e4e07fab: gf,
      __wbg_crypto_c48a774b022d20ac: bf,
      __wbg_process_298734cf255a885d: hf,
      __wbg_versions_e2e78e134e3e5d01: yf,
      __wbg_node_1cd7a5d853dbea79: mf,
      __wbindgen_is_string: vf,
      __wbg_require_8f08ceecec0f4fee: kf,
      __wbg_msCrypto_bcb970640f50a1e8: xf,
      __wbg_new_1d9a920c6bfc44a8: jf,
      __wbindgen_is_function: Sf,
      __wbg_newnoargs_b5b063fc6c2f0376: Ef,
      __wbg_new_268f7b7dd3430798: zf,
      __wbg_call_97ae9d8645dc388b: Cf,
      __wbg_new_0b9bfdd97583284e: Of,
      __wbg_self_6d479506f72c6a71: Lf,
      __wbg_window_f2557cc78490aceb: Nf,
      __wbg_globalThis_7f206bda628d5286: Ff,
      __wbg_global_ba75c50d1cf384f4: Pf,
      __wbindgen_is_undefined: Tf,
      __wbg_set_a68214f35c417fa9: Rf,
      __wbg_call_168da88779e35f61: Df,
      __wbg_set_933729cf5b66ac11: $f,
      __wbg_buffer_3f3d764d4747d564: Uf,
      __wbg_newwithbyteoffsetandlength_d9aa266703cb98be: Mf,
      __wbg_new_8c3f0052272a457a: If,
      __wbg_set_83db9690f9353e79: Wf,
      __wbg_newwithlength_f5933855e4f48a19: Qf,
      __wbg_subarray_58ad4efbb5bcb886: Vf,
      __wbg_new_d87f272aec784ec0: Bf,
      __wbg_call_eae29933372a39be: Af,
      __wbindgen_jsval_eq: Hf,
      __wbg_self_e0b3266d2d9eba1a: Yf,
      __wbg_crypto_e95a6e54c5c2e37f: Xf,
      __wbg_getRandomValues_dc67302a7bd1aec5: qf,
      __wbg_require_0993fe224bf8e202: Kf,
      __wbg_randomFillSync_dd2297de5917c74e: Zf,
      __wbg_getRandomValues_02639197c8166a96: Jf,
      __wbindgen_debug_string: Gf,
      __wbindgen_throw: tg,
      __wbindgen_memory: eg
    }
  }, Zw), _g = i.memory, rg = i.unitinterval_to_bytes, ng = i.unitinterval_from_bytes, og = i.unitinterval_to_hex, sg = i.unitinterval_from_hex, ag = i.unitinterval_to_json, ig = i.unitinterval_to_js_value, cg = i.unitinterval_from_json, dg = i.unitinterval_denominator, lg = i.unitinterval_new, pg = i.__wbg_transaction_free, ug = i.transaction_to_bytes, wg = i.transaction_from_bytes, fg = i.transaction_to_hex, gg = i.transaction_from_hex, bg = i.transaction_to_json, hg = i.transaction_to_js_value, yg = i.transaction_from_json, mg = i.transaction_body, vg = i.transaction_witness_set, kg = i.transaction_is_valid, xg = i.transaction_auxiliary_data, jg = i.transaction_set_is_valid, Sg = i.transaction_new, Eg = i.__wbg_transactioninputs_free, zg = i.transactioninputs_to_bytes, Cg = i.transactioninputs_from_bytes, Og = i.transactioninputs_to_hex, Lg = i.transactioninputs_from_hex, Ng = i.transactioninputs_to_json, Fg = i.transactioninputs_to_js_value, Pg = i.transactioninputs_from_json, Tg = i.transactioninputs_get, Rg = i.transactioninputs_add, Dg = i.transactioninputs_to_option, $g = i.__wbg_transactionoutputs_free, Ug = i.transactionoutputs_to_bytes, Mg = i.transactionoutputs_from_bytes, Ig = i.transactionoutputs_to_hex, Wg = i.transactionoutputs_from_hex, Qg = i.transactionoutputs_to_json, Vg = i.transactionoutputs_to_js_value, Bg = i.transactionoutputs_from_json, Ag = i.transactionoutputs_get, Hg = i.transactionoutputs_add, Yg = i.__wbg_datacost_free, Xg = i.datacost_new_coins_per_word, qg = i.datacost_new_coins_per_byte, Kg = i.datacost_coins_per_byte, Zg = i.__wbg_certificates_free, Jg = i.certificates_to_bytes, Gg = i.certificates_from_bytes, tb = i.certificates_to_hex, eb = i.certificates_from_hex, _b = i.certificates_to_json, rb = i.certificates_to_js_value, nb = i.certificates_from_json, ob = i.certificates_new, sb = i.certificates_get, ab = i.certificates_add, ib = i.__wbg_transactionbody_free, cb = i.transactionbody_to_bytes, db = i.transactionbody_from_bytes, lb = i.transactionbody_to_hex, pb = i.transactionbody_from_hex, ub = i.transactionbody_to_json, wb = i.transactionbody_to_js_value, fb = i.transactionbody_from_json, gb = i.transactionbody_inputs, bb = i.transactionbody_outputs, hb = i.transactionbody_fee, yb = i.transactionbody_ttl, mb = i.transactionbody_ttl_bignum, vb = i.transactionbody_set_ttl, kb = i.transactionbody_remove_ttl, xb = i.transactionbody_set_certs, jb = i.transactionbody_certs, Sb = i.transactionbody_set_withdrawals, Eb = i.transactionbody_withdrawals, zb = i.transactionbody_set_update, Cb = i.transactionbody_update, Ob = i.transactionbody_set_auxiliary_data_hash, Lb = i.transactionbody_auxiliary_data_hash, Nb = i.transactionbody_set_validity_start_interval, Fb = i.transactionbody_set_validity_start_interval_bignum, Pb = i.transactionbody_validity_start_interval_bignum, Tb = i.transactionbody_validity_start_interval, Rb = i.transactionbody_set_mint, Db = i.transactionbody_mint, $b = i.transactionbody_set_reference_inputs, Ub = i.transactionbody_reference_inputs, Mb = i.transactionbody_set_script_data_hash, Ib = i.transactionbody_script_data_hash, Wb = i.transactionbody_set_collateral, Qb = i.transactionbody_collateral, Vb = i.transactionbody_set_required_signers, Bb = i.transactionbody_required_signers, Ab = i.transactionbody_set_network_id, Hb = i.transactionbody_network_id, Yb = i.transactionbody_set_collateral_return, Xb = i.transactionbody_collateral_return, qb = i.transactionbody_set_total_collateral, Kb = i.transactionbody_total_collateral, Zb = i.transactionbody_new, Jb = i.transactionbody_new_tx_body, Gb = i.__wbg_transactioninput_free, th = i.transactioninput_to_bytes, eh = i.transactioninput_from_bytes, _h = i.transactioninput_to_hex, rh = i.transactioninput_from_hex, nh = i.transactioninput_to_json, oh = i.transactioninput_to_js_value, sh = i.transactioninput_from_json, ah = i.transactioninput_transaction_id, ih = i.transactioninput_index, ch = i.transactioninput_new, dh = i.__wbg_transactionoutput_free, lh = i.transactionoutput_to_bytes, ph = i.transactionoutput_from_bytes, uh = i.transactionoutput_to_hex, wh = i.transactionoutput_from_hex, fh = i.transactionoutput_to_json, gh = i.transactionoutput_to_js_value, bh = i.transactionoutput_from_json, hh = i.transactionoutput_address, yh = i.transactionoutput_amount, mh = i.transactionoutput_data_hash, vh = i.transactionoutput_plutus_data, kh = i.transactionoutput_script_ref, xh = i.transactionoutput_set_script_ref, jh = i.transactionoutput_set_plutus_data, Sh = i.transactionoutput_set_data_hash, Eh = i.transactionoutput_has_plutus_data, zh = i.transactionoutput_has_data_hash, Ch = i.transactionoutput_has_script_ref, Oh = i.transactionoutput_new, Lh = i.transactionoutput_serialization_format, Nh = i.stakeregistration_to_bytes, Fh = i.stakeregistration_from_bytes, Ph = i.stakeregistration_to_hex, Th = i.stakeregistration_from_hex, Rh = i.stakeregistration_to_js_value, Dh = i.stakeregistration_from_json, $h = i.__wbg_stakederegistration_free, Uh = i.stakederegistration_to_bytes, Mh = i.stakederegistration_from_bytes, Ih = i.stakederegistration_to_hex, Wh = i.stakederegistration_from_hex, Qh = i.stakederegistration_to_json, Vh = i.stakederegistration_to_js_value, Bh = i.stakederegistration_from_json, Ah = i.stakederegistration_stake_credential, Hh = i.stakederegistration_new, Yh = i.__wbg_stakedelegation_free, Xh = i.stakedelegation_to_bytes, qh = i.stakedelegation_from_bytes, Kh = i.stakedelegation_to_hex, Zh = i.stakedelegation_from_hex, Jh = i.stakedelegation_to_json, Gh = i.stakedelegation_to_js_value, ty = i.stakedelegation_from_json, ey = i.stakedelegation_stake_credential, _y = i.stakedelegation_new, ry = i.__wbg_ed25519keyhashes_free, ny = i.ed25519keyhashes_to_bytes, oy = i.ed25519keyhashes_from_bytes, sy = i.ed25519keyhashes_to_hex, ay = i.ed25519keyhashes_from_hex, iy = i.ed25519keyhashes_to_json, cy = i.ed25519keyhashes_to_js_value, dy = i.ed25519keyhashes_from_json, ly = i.ed25519keyhashes_new, py = i.ed25519keyhashes_get, uy = i.ed25519keyhashes_add, wy = i.ed25519keyhashes_to_option, fy = i.__wbg_relays_free, gy = i.relays_to_bytes, by = i.relays_from_bytes, hy = i.relays_to_hex, yy = i.relays_from_hex, my = i.relays_to_json, vy = i.relays_to_js_value, ky = i.relays_from_json, xy = i.relays_get, jy = i.relays_add, Sy = i.__wbg_poolparams_free, Ey = i.poolparams_to_bytes, zy = i.poolparams_from_bytes, Cy = i.poolparams_to_hex, Oy = i.poolparams_from_hex, Ly = i.poolparams_to_json, Ny = i.poolparams_to_js_value, Fy = i.poolparams_from_json, Py = i.poolparams_operator, Ty = i.poolparams_vrf_keyhash, Ry = i.poolparams_pledge, Dy = i.poolparams_cost, $y = i.poolparams_margin, Uy = i.poolparams_reward_account, My = i.poolparams_pool_owners, Iy = i.poolparams_relays, Wy = i.poolparams_pool_metadata, Qy = i.poolparams_new, Vy = i.__wbg_poolregistration_free, By = i.poolregistration_to_bytes, Ay = i.poolregistration_from_bytes, Hy = i.poolregistration_to_hex, Yy = i.poolregistration_from_hex, Xy = i.poolregistration_to_json, qy = i.poolregistration_to_js_value, Ky = i.poolregistration_from_json, Zy = i.poolregistration_pool_params, Jy = i.poolregistration_new, Gy = i.__wbg_poolretirement_free, tm = i.poolretirement_to_bytes, em = i.poolretirement_from_bytes, _m = i.poolretirement_to_hex, rm = i.poolretirement_from_hex, nm = i.poolretirement_to_json, om = i.poolretirement_to_js_value, sm = i.poolretirement_from_json, am = i.poolretirement_pool_keyhash, im = i.poolretirement_epoch, cm = i.poolretirement_new, dm = i.__wbg_genesiskeydelegation_free, lm = i.genesiskeydelegation_to_bytes, pm = i.genesiskeydelegation_from_bytes, um = i.genesiskeydelegation_to_hex, wm = i.genesiskeydelegation_from_hex, fm = i.genesiskeydelegation_to_json, gm = i.genesiskeydelegation_to_js_value, bm = i.genesiskeydelegation_from_json, hm = i.genesiskeydelegation_genesishash, ym = i.genesiskeydelegation_genesis_delegate_hash, mm = i.genesiskeydelegation_vrf_keyhash, vm = i.genesiskeydelegation_new, km = i.__wbg_moveinstantaneousrewardscert_free, xm = i.moveinstantaneousrewardscert_to_bytes, jm = i.moveinstantaneousrewardscert_from_bytes, Sm = i.moveinstantaneousrewardscert_to_hex, Em = i.moveinstantaneousrewardscert_from_hex, zm = i.moveinstantaneousrewardscert_to_json, Cm = i.moveinstantaneousrewardscert_to_js_value, Om = i.moveinstantaneousrewardscert_from_json, Lm = i.moveinstantaneousrewardscert_move_instantaneous_reward, Nm = i.moveinstantaneousrewardscert_new, Fm = i.__wbg_certificate_free, Pm = i.certificate_to_bytes, Tm = i.certificate_from_bytes, Rm = i.certificate_to_hex, Dm = i.certificate_from_hex, $m = i.certificate_to_json, Um = i.certificate_to_js_value, Mm = i.certificate_from_json, Im = i.certificate_new_stake_registration, Wm = i.certificate_new_stake_deregistration, Qm = i.certificate_new_stake_delegation, Vm = i.certificate_new_pool_registration, Bm = i.certificate_new_pool_retirement, Am = i.certificate_new_genesis_key_delegation, Hm = i.certificate_new_move_instantaneous_rewards_cert, Ym = i.certificate_kind, Xm = i.certificate_as_stake_registration, qm = i.certificate_as_stake_deregistration, Km = i.certificate_as_stake_delegation, Zm = i.certificate_as_pool_registration, Jm = i.certificate_as_pool_retirement, Gm = i.certificate_as_genesis_key_delegation, tv = i.certificate_as_move_instantaneous_rewards_cert, ev = i.__wbg_mirtostakecredentials_free, _v = i.mirtostakecredentials_to_bytes, rv = i.mirtostakecredentials_from_bytes, nv = i.mirtostakecredentials_to_hex, ov = i.mirtostakecredentials_from_hex, sv = i.mirtostakecredentials_to_json, av = i.mirtostakecredentials_to_js_value, iv = i.mirtostakecredentials_from_json, cv = i.mirtostakecredentials_insert, dv = i.mirtostakecredentials_get, lv = i.mirtostakecredentials_keys, pv = i.__wbg_moveinstantaneousreward_free, uv = i.moveinstantaneousreward_to_bytes, wv = i.moveinstantaneousreward_from_bytes, fv = i.moveinstantaneousreward_to_hex, gv = i.moveinstantaneousreward_from_hex, bv = i.moveinstantaneousreward_to_json, hv = i.moveinstantaneousreward_to_js_value, yv = i.moveinstantaneousreward_from_json, mv = i.moveinstantaneousreward_new_to_other_pot, vv = i.moveinstantaneousreward_new_to_stake_creds, kv = i.moveinstantaneousreward_pot, xv = i.moveinstantaneousreward_kind, jv = i.moveinstantaneousreward_as_to_other_pot, Sv = i.moveinstantaneousreward_as_to_stake_creds, Ev = i.__wbg_ipv4_free, zv = i.ipv4_to_bytes, Cv = i.ipv4_from_bytes, Ov = i.ipv4_to_hex, Lv = i.ipv4_from_hex, Nv = i.ipv4_to_json, Fv = i.ipv4_to_js_value, Pv = i.ipv4_from_json, Tv = i.ipv4_new, Rv = i.ipv4_ip, Dv = i.__wbg_ipv6_free, $v = i.ipv6_to_bytes, Uv = i.ipv6_from_bytes, Mv = i.ipv6_to_hex, Iv = i.ipv6_from_hex, Wv = i.ipv6_to_json, Qv = i.ipv6_to_js_value, Vv = i.ipv6_from_json, Bv = i.ipv6_new, Av = i.ipv6_ip, Hv = i.url_to_bytes, Yv = i.url_from_bytes, Xv = i.url_to_hex, qv = i.url_from_hex, Kv = i.url_from_json, Zv = i.url_new, Jv = i.__wbg_dnsrecordaoraaaa_free, Gv = i.dnsrecordaoraaaa_to_bytes, t1 = i.dnsrecordaoraaaa_from_bytes, e1 = i.dnsrecordaoraaaa_to_hex, _1 = i.dnsrecordaoraaaa_from_hex, r1 = i.dnsrecordaoraaaa_to_json, n1 = i.dnsrecordaoraaaa_to_js_value, o1 = i.dnsrecordaoraaaa_from_json, s1 = i.dnsrecordaoraaaa_new, a1 = i.dnsrecordaoraaaa_record, i1 = i.dnsrecordsrv_to_bytes, c1 = i.dnsrecordsrv_from_bytes, d1 = i.dnsrecordsrv_to_hex, l1 = i.dnsrecordsrv_from_hex, p1 = i.dnsrecordsrv_from_json, u1 = i.dnsrecordsrv_new, w1 = i.__wbg_singlehostaddr_free, f1 = i.singlehostaddr_to_bytes, g1 = i.singlehostaddr_from_bytes, b1 = i.singlehostaddr_to_hex, h1 = i.singlehostaddr_from_hex, y1 = i.singlehostaddr_to_json, m1 = i.singlehostaddr_to_js_value, v1 = i.singlehostaddr_from_json, k1 = i.singlehostaddr_port, x1 = i.singlehostaddr_ipv4, j1 = i.singlehostaddr_ipv6, S1 = i.singlehostaddr_new, E1 = i.__wbg_singlehostname_free, z1 = i.singlehostname_to_bytes, C1 = i.singlehostname_from_bytes, O1 = i.singlehostname_to_hex, L1 = i.singlehostname_from_hex, N1 = i.singlehostname_to_json, F1 = i.singlehostname_to_js_value, P1 = i.singlehostname_from_json, T1 = i.singlehostname_port, R1 = i.singlehostname_new, D1 = i.__wbg_multihostname_free, $1 = i.multihostname_to_bytes, U1 = i.multihostname_from_bytes, M1 = i.multihostname_to_hex, I1 = i.multihostname_from_hex, W1 = i.multihostname_to_json, Q1 = i.multihostname_to_js_value, V1 = i.multihostname_from_json, B1 = i.multihostname_dns_name, A1 = i.multihostname_new, H1 = i.__wbg_relay_free, Y1 = i.relay_to_bytes, X1 = i.relay_from_bytes, q1 = i.relay_to_hex, K1 = i.relay_from_hex, Z1 = i.relay_to_json, J1 = i.relay_to_js_value, G1 = i.relay_from_json, tk = i.relay_new_single_host_addr, ek = i.relay_new_single_host_name, _k = i.relay_new_multi_host_name, rk = i.relay_kind, nk = i.relay_as_single_host_addr, ok = i.relay_as_single_host_name, sk = i.relay_as_multi_host_name, ak = i.__wbg_poolmetadata_free, ik = i.poolmetadata_to_bytes, ck = i.poolmetadata_from_bytes, dk = i.poolmetadata_to_hex, lk = i.poolmetadata_from_hex, pk = i.poolmetadata_to_json, uk = i.poolmetadata_to_js_value, wk = i.poolmetadata_from_json, fk = i.poolmetadata_url, gk = i.poolmetadata_pool_metadata_hash, bk = i.poolmetadata_new, hk = i.__wbg_stakecredentials_free, yk = i.stakecredentials_to_bytes, mk = i.stakecredentials_from_bytes, vk = i.stakecredentials_to_hex, kk = i.stakecredentials_from_hex, xk = i.stakecredentials_to_json, jk = i.stakecredentials_to_js_value, Sk = i.stakecredentials_from_json, Ek = i.stakecredentials_get, zk = i.stakecredentials_add, Ck = i.__wbg_rewardaddresses_free, Ok = i.rewardaddresses_to_bytes, Lk = i.rewardaddresses_from_bytes, Nk = i.rewardaddresses_to_hex, Fk = i.rewardaddresses_from_hex, Pk = i.rewardaddresses_to_json, Tk = i.rewardaddresses_to_js_value, Rk = i.rewardaddresses_from_json, Dk = i.rewardaddresses_get, $k = i.rewardaddresses_add, Uk = i.__wbg_withdrawals_free, Mk = i.withdrawals_to_bytes, Ik = i.withdrawals_from_bytes, Wk = i.withdrawals_to_hex, Qk = i.withdrawals_from_hex, Vk = i.withdrawals_to_json, Bk = i.withdrawals_to_js_value, Ak = i.withdrawals_from_json, Hk = i.withdrawals_insert, Yk = i.withdrawals_get, Xk = i.withdrawals_keys, qk = i.__wbg_transactionwitnessset_free, Kk = i.transactionwitnessset_to_bytes, Zk = i.transactionwitnessset_from_bytes, Jk = i.transactionwitnessset_to_hex, Gk = i.transactionwitnessset_from_hex, t0 = i.transactionwitnessset_to_json, e0 = i.transactionwitnessset_to_js_value, _0 = i.transactionwitnessset_from_json, r0 = i.transactionwitnessset_set_vkeys, n0 = i.transactionwitnessset_vkeys, o0 = i.transactionwitnessset_set_native_scripts, s0 = i.transactionwitnessset_native_scripts, a0 = i.transactionwitnessset_set_bootstraps, i0 = i.transactionwitnessset_bootstraps, c0 = i.transactionwitnessset_set_plutus_scripts, d0 = i.transactionwitnessset_plutus_scripts, l0 = i.transactionwitnessset_set_plutus_data, p0 = i.transactionwitnessset_plutus_data, u0 = i.transactionwitnessset_set_redeemers, w0 = i.transactionwitnessset_redeemers, f0 = i.transactionwitnessset_new, g0 = i.__wbg_scriptpubkey_free, b0 = i.scriptpubkey_to_bytes, h0 = i.scriptpubkey_from_bytes, y0 = i.scriptpubkey_to_hex, m0 = i.scriptpubkey_from_hex, v0 = i.scriptpubkey_to_json, k0 = i.scriptpubkey_to_js_value, x0 = i.scriptpubkey_from_json, j0 = i.scriptpubkey_addr_keyhash, S0 = i.scriptpubkey_new, E0 = i.__wbg_scriptall_free, z0 = i.scriptall_to_bytes, C0 = i.scriptall_from_bytes, O0 = i.scriptall_to_hex, L0 = i.scriptall_from_hex, N0 = i.scriptall_to_json, F0 = i.scriptall_to_js_value, P0 = i.scriptall_from_json, T0 = i.scriptall_native_scripts, R0 = i.scriptall_new, D0 = i.scriptany_to_bytes, $0 = i.scriptany_from_bytes, U0 = i.scriptany_to_hex, M0 = i.scriptany_from_hex, I0 = i.scriptany_to_js_value, W0 = i.scriptany_from_json, Q0 = i.__wbg_scriptnofk_free, V0 = i.scriptnofk_to_bytes, B0 = i.scriptnofk_from_bytes, A0 = i.scriptnofk_to_hex, H0 = i.scriptnofk_from_hex, Y0 = i.scriptnofk_to_json, X0 = i.scriptnofk_to_js_value, q0 = i.scriptnofk_from_json, K0 = i.scriptnofk_native_scripts, Z0 = i.scriptnofk_new, J0 = i.timelockstart_to_bytes, G0 = i.timelockstart_from_bytes, t4 = i.timelockstart_to_hex, e4 = i.timelockstart_from_hex, _4 = i.timelockstart_to_js_value, r4 = i.timelockstart_from_json, n4 = i.__wbg_timelockexpiry_free, o4 = i.timelockexpiry_to_bytes, s4 = i.timelockexpiry_from_bytes, a4 = i.timelockexpiry_to_hex, i4 = i.timelockexpiry_from_hex, c4 = i.timelockexpiry_to_json, d4 = i.timelockexpiry_to_js_value, l4 = i.timelockexpiry_from_json, p4 = i.timelockexpiry_slot, u4 = i.timelockexpiry_slot_bignum, w4 = i.timelockexpiry_new, f4 = i.timelockexpiry_new_timelockexpiry, g4 = i.__wbg_scriptref_free, b4 = i.scriptref_to_bytes, h4 = i.scriptref_from_bytes, y4 = i.scriptref_to_hex, m4 = i.scriptref_from_hex, v4 = i.scriptref_to_json, k4 = i.scriptref_to_js_value, x4 = i.scriptref_from_json, j4 = i.scriptref_new_native_script, S4 = i.scriptref_new_plutus_script, E4 = i.scriptref_is_native_script, z4 = i.scriptref_is_plutus_script, C4 = i.scriptref_native_script, O4 = i.scriptref_plutus_script, L4 = i.__wbg_outputdatum_free, N4 = i.outputdatum_new_data_hash, F4 = i.outputdatum_new_data, P4 = i.outputdatum_data_hash, T4 = i.outputdatum_data, R4 = i.__wbg_nativescript_free, D4 = i.nativescript_to_bytes, $4 = i.nativescript_from_bytes, U4 = i.nativescript_to_hex, M4 = i.nativescript_from_hex, I4 = i.nativescript_to_json, W4 = i.nativescript_to_js_value, Q4 = i.nativescript_from_json, V4 = i.nativescript_hash, B4 = i.nativescript_new_script_pubkey, A4 = i.nativescript_new_script_all, H4 = i.nativescript_new_script_any, Y4 = i.nativescript_new_script_n_of_k, X4 = i.nativescript_new_timelock_start, q4 = i.nativescript_new_timelock_expiry, K4 = i.nativescript_kind, Z4 = i.nativescript_as_script_pubkey, J4 = i.nativescript_as_script_all, G4 = i.nativescript_as_script_any, t6 = i.nativescript_as_script_n_of_k, e6 = i.nativescript_as_timelock_start, _6 = i.nativescript_as_timelock_expiry, r6 = i.nativescript_get_required_signers, n6 = i.__wbg_nativescripts_free, o6 = i.nativescripts_get, s6 = i.nativescripts_add, a6 = i.__wbg_update_free, i6 = i.update_to_bytes, c6 = i.update_from_bytes, d6 = i.update_to_hex, l6 = i.update_from_hex, p6 = i.update_to_json, u6 = i.update_to_js_value, w6 = i.update_from_json, f6 = i.update_proposed_protocol_parameter_updates, g6 = i.update_epoch, b6 = i.update_new, h6 = i.__wbg_genesishashes_free, y6 = i.genesishashes_to_bytes, m6 = i.genesishashes_from_bytes, v6 = i.genesishashes_to_hex, k6 = i.genesishashes_from_hex, x6 = i.genesishashes_to_json, j6 = i.genesishashes_to_js_value, S6 = i.genesishashes_from_json, E6 = i.genesishashes_get, z6 = i.genesishashes_add, C6 = i.__wbg_scripthashes_free, O6 = i.scripthashes_to_bytes, L6 = i.scripthashes_from_bytes, N6 = i.scripthashes_to_hex, F6 = i.scripthashes_from_hex, P6 = i.scripthashes_to_json, T6 = i.scripthashes_to_js_value, R6 = i.scripthashes_from_json, D6 = i.scripthashes_get, $6 = i.scripthashes_add, U6 = i.__wbg_proposedprotocolparameterupdates_free, M6 = i.proposedprotocolparameterupdates_to_bytes, I6 = i.proposedprotocolparameterupdates_from_bytes, W6 = i.proposedprotocolparameterupdates_to_hex, Q6 = i.proposedprotocolparameterupdates_from_hex, V6 = i.proposedprotocolparameterupdates_to_json, B6 = i.proposedprotocolparameterupdates_to_js_value, A6 = i.proposedprotocolparameterupdates_from_json, H6 = i.proposedprotocolparameterupdates_insert, Y6 = i.proposedprotocolparameterupdates_get, X6 = i.proposedprotocolparameterupdates_keys, q6 = i.__wbg_protocolversion_free, K6 = i.protocolversion_to_bytes, Z6 = i.protocolversion_from_bytes, J6 = i.protocolversion_to_hex, G6 = i.protocolversion_from_hex, tx = i.protocolversion_to_json, ex = i.protocolversion_to_js_value, _x = i.protocolversion_from_json, rx = i.protocolversion_major, nx = i.protocolversion_minor, ox = i.protocolversion_new, sx = i.__wbg_protocolparamupdate_free, ax = i.protocolparamupdate_to_bytes, ix = i.protocolparamupdate_from_bytes, cx = i.protocolparamupdate_to_hex, dx = i.protocolparamupdate_from_hex, lx = i.protocolparamupdate_to_json, px = i.protocolparamupdate_to_js_value, ux = i.protocolparamupdate_from_json, wx = i.protocolparamupdate_set_minfee_a, fx = i.protocolparamupdate_minfee_a, gx = i.protocolparamupdate_set_minfee_b, bx = i.protocolparamupdate_minfee_b, hx = i.protocolparamupdate_set_max_block_body_size, yx = i.protocolparamupdate_max_block_body_size, mx = i.protocolparamupdate_set_max_tx_size, vx = i.protocolparamupdate_max_tx_size, kx = i.protocolparamupdate_set_max_block_header_size, xx = i.protocolparamupdate_max_block_header_size, jx = i.protocolparamupdate_set_key_deposit, Sx = i.protocolparamupdate_key_deposit, Ex = i.protocolparamupdate_set_pool_deposit, zx = i.protocolparamupdate_pool_deposit, Cx = i.protocolparamupdate_set_max_epoch, Ox = i.protocolparamupdate_max_epoch, Lx = i.protocolparamupdate_set_n_opt, Nx = i.protocolparamupdate_n_opt, Fx = i.protocolparamupdate_set_pool_pledge_influence, Px = i.protocolparamupdate_pool_pledge_influence, Tx = i.protocolparamupdate_set_expansion_rate, Rx = i.protocolparamupdate_expansion_rate, Dx = i.protocolparamupdate_set_treasury_growth_rate, $x = i.protocolparamupdate_treasury_growth_rate, Ux = i.protocolparamupdate_d, Mx = i.protocolparamupdate_extra_entropy, Ix = i.protocolparamupdate_set_protocol_version, Wx = i.protocolparamupdate_protocol_version, Qx = i.protocolparamupdate_set_min_pool_cost, Vx = i.protocolparamupdate_min_pool_cost, Bx = i.protocolparamupdate_set_ada_per_utxo_byte, Ax = i.protocolparamupdate_ada_per_utxo_byte, Hx = i.protocolparamupdate_set_cost_models, Yx = i.protocolparamupdate_cost_models, Xx = i.protocolparamupdate_set_execution_costs, qx = i.protocolparamupdate_execution_costs, Kx = i.protocolparamupdate_set_max_tx_ex_units, Zx = i.protocolparamupdate_max_tx_ex_units, Jx = i.protocolparamupdate_set_max_block_ex_units, Gx = i.protocolparamupdate_max_block_ex_units, t2 = i.protocolparamupdate_set_max_value_size, e2 = i.protocolparamupdate_max_value_size, _2 = i.protocolparamupdate_set_collateral_percentage, r2 = i.protocolparamupdate_collateral_percentage, n2 = i.protocolparamupdate_set_max_collateral_inputs, o2 = i.protocolparamupdate_max_collateral_inputs, s2 = i.protocolparamupdate_new, a2 = i.__wbg_transactionbodies_free, i2 = i.transactionbodies_to_bytes, c2 = i.transactionbodies_from_bytes, d2 = i.transactionbodies_to_hex, l2 = i.transactionbodies_from_hex, p2 = i.transactionbodies_to_json, u2 = i.transactionbodies_to_js_value, w2 = i.transactionbodies_from_json, f2 = i.transactionbodies_get, g2 = i.transactionbodies_add, b2 = i.__wbg_transactionwitnesssets_free, h2 = i.transactionwitnesssets_to_bytes, y2 = i.transactionwitnesssets_from_bytes, m2 = i.transactionwitnesssets_to_hex, v2 = i.transactionwitnesssets_from_hex, k2 = i.transactionwitnesssets_to_json, x2 = i.transactionwitnesssets_to_js_value, j2 = i.transactionwitnesssets_from_json, S2 = i.transactionwitnesssets_get, E2 = i.transactionwitnesssets_add, z2 = i.__wbg_auxiliarydataset_free, C2 = i.auxiliarydataset_new, O2 = i.auxiliarydataset_len, L2 = i.auxiliarydataset_insert, N2 = i.auxiliarydataset_get, F2 = i.auxiliarydataset_indices, P2 = i.__wbg_block_free, T2 = i.block_to_bytes, R2 = i.block_from_bytes, D2 = i.block_to_hex, $2 = i.block_from_hex, U2 = i.block_to_json, M2 = i.block_to_js_value, I2 = i.block_from_json, W2 = i.block_header, Q2 = i.block_transaction_bodies, V2 = i.block_transaction_witness_sets, B2 = i.block_auxiliary_data_set, A2 = i.block_invalid_transactions, H2 = i.block_new, Y2 = i.__wbg_header_free, X2 = i.header_to_bytes, q2 = i.header_from_bytes, K2 = i.header_to_hex, Z2 = i.header_from_hex, J2 = i.header_to_json, G2 = i.header_to_js_value, tj = i.header_from_json, ej = i.header_header_body, _j = i.header_body_signature, rj = i.header_new, nj = i.__wbg_operationalcert_free, oj = i.operationalcert_to_bytes, sj = i.operationalcert_from_bytes, aj = i.operationalcert_to_hex, ij = i.operationalcert_from_hex, cj = i.operationalcert_to_json, dj = i.operationalcert_to_js_value, lj = i.operationalcert_from_json, pj = i.operationalcert_hot_vkey, uj = i.operationalcert_sequence_number, wj = i.operationalcert_kes_period, fj = i.operationalcert_sigma, gj = i.operationalcert_new, bj = i.__wbg_headerbody_free, hj = i.headerbody_to_bytes, yj = i.headerbody_from_bytes, mj = i.headerbody_to_hex, vj = i.headerbody_from_hex, kj = i.headerbody_to_json, xj = i.headerbody_to_js_value, jj = i.headerbody_from_json, Sj = i.headerbody_block_number, Ej = i.headerbody_slot, zj = i.headerbody_slot_bignum, Cj = i.headerbody_prev_hash, Oj = i.headerbody_issuer_vkey, Lj = i.headerbody_vrf_vkey, Nj = i.headerbody_has_nonce_and_leader_vrf, Fj = i.headerbody_nonce_vrf_or_nothing, Pj = i.headerbody_leader_vrf_or_nothing, Tj = i.headerbody_has_vrf_result, Rj = i.headerbody_vrf_result_or_nothing, Dj = i.headerbody_block_body_size, $j = i.headerbody_block_body_hash, Uj = i.headerbody_operational_cert, Mj = i.headerbody_protocol_version, Ij = i.headerbody_new, Wj = i.headerbody_new_headerbody, Qj = i.__wbg_assetname_free, Vj = i.assetname_to_bytes, Bj = i.assetname_from_bytes, Aj = i.assetname_to_hex, Hj = i.assetname_from_hex, Yj = i.assetname_to_json, Xj = i.assetname_to_js_value, qj = i.assetname_from_json, Kj = i.assetname_new, Zj = i.assetname_name, Jj = i.__wbg_assetnames_free, Gj = i.assetnames_to_bytes, t3 = i.assetnames_from_bytes, e3 = i.assetnames_to_hex, _3 = i.assetnames_from_hex, r3 = i.assetnames_to_json, n3 = i.assetnames_to_js_value, o3 = i.assetnames_from_json, s3 = i.assetnames_new, a3 = i.assetnames_len, i3 = i.assetnames_get, c3 = i.assetnames_add, d3 = i.__wbg_assets_free, l3 = i.assets_to_bytes, p3 = i.assets_from_bytes, u3 = i.assets_to_hex, w3 = i.assets_from_hex, f3 = i.assets_to_json, g3 = i.assets_to_js_value, b3 = i.assets_from_json, h3 = i.assets_new, y3 = i.assets_insert, m3 = i.assets_get, v3 = i.assets_keys, k3 = i.__wbg_multiasset_free, x3 = i.multiasset_to_bytes, j3 = i.multiasset_from_bytes, S3 = i.multiasset_to_hex, E3 = i.multiasset_from_hex, z3 = i.multiasset_to_json, C3 = i.multiasset_to_js_value, O3 = i.multiasset_from_json, L3 = i.multiasset_insert, N3 = i.multiasset_get, F3 = i.multiasset_set_asset, P3 = i.multiasset_get_asset, T3 = i.multiasset_keys, R3 = i.multiasset_sub, D3 = i.__wbg_mintsassets_free, $3 = i.__wbg_mintassets_free, U3 = i.mintassets_new_from_entry, M3 = i.mintassets_insert, I3 = i.mintassets_get, W3 = i.mintassets_keys, Q3 = i.__wbg_mint_free, V3 = i.mint_to_bytes, B3 = i.mint_from_bytes, A3 = i.mint_to_hex, H3 = i.mint_from_hex, Y3 = i.mint_to_json, X3 = i.mint_to_js_value, q3 = i.mint_from_json, K3 = i.mint_new_from_entry, Z3 = i.mint_insert, J3 = i.mint_get, G3 = i.mint_get_all, t5 = i.mint_keys, e5 = i.mint_as_positive_multiasset, _5 = i.mint_as_negative_multiasset, r5 = i.__wbg_networkid_free, n5 = i.networkid_to_bytes, o5 = i.networkid_from_bytes, s5 = i.networkid_to_hex, a5 = i.networkid_from_hex, i5 = i.networkid_to_json, c5 = i.networkid_to_js_value, d5 = i.networkid_from_json, l5 = i.networkid_testnet, p5 = i.networkid_mainnet, u5 = i.networkid_kind, w5 = i.__wbg_unitinterval_free, f5 = i.transactionoutputs_len, g5 = i.transactioninputs_len, b5 = i.ed25519keyhashes_len, h5 = i.relays_len, y5 = i.stakecredentials_len, m5 = i.rewardaddresses_len, v5 = i.withdrawals_len, k5 = i.nativescripts_len, x5 = i.genesishashes_len, j5 = i.scripthashes_len, S5 = i.proposedprotocolparameterupdates_len, E5 = i.scriptnofk_n, z5 = i.transactionbodies_len, C5 = i.transactionwitnesssets_len, O5 = i.mirtostakecredentials_len, L5 = i.certificates_len, N5 = i.assets_len, F5 = i.multiasset_len, P5 = i.mintassets_len, T5 = i.mint_len, R5 = i.scriptany_native_scripts, D5 = i.unitinterval_numerator, $5 = i.timelockstart_slot_bignum, U5 = i.timelockstart_slot, M5 = i.transactionbody_multiassets, I5 = i.stakeregistration_stake_credential, W5 = i.url_url, Q5 = i.dnsrecordsrv_record, V5 = i.url_to_js_value, B5 = i.dnsrecordsrv_to_js_value, A5 = i.__wbg_url_free, H5 = i.__wbg_dnsrecordsrv_free, Y5 = i.__wbg_scriptany_free, X5 = i.stakedelegation_pool_keyhash, q5 = i.timelockstart_new, K5 = i.__wbg_timelockstart_free, Z5 = i.withdrawals_new, J5 = i.proposedprotocolparameterupdates_new, G5 = i.mirtostakecredentials_new, tS = i.timelockstart_new_timelockstart, eS = i.transactioninputs_new, _S = i.stakeregistration_new, rS = i.relays_new, nS = i.singlehostname_dns_name, oS = i.stakecredentials_new, sS = i.rewardaddresses_new, aS = i.scriptany_new, iS = i.transactionoutputs_new, cS = i.genesishashes_new, dS = i.scripthashes_new, lS = i.transactionbodies_new, pS = i.transactionwitnesssets_new, uS = i.nativescripts_new, wS = i.multiasset_new, fS = i.mintassets_new, gS = i.mint_new, bS = i.__wbg_stakeregistration_free, hS = i.stakeregistration_to_json, yS = i.scriptany_to_json, mS = i.timelockstart_to_json, vS = i.url_to_json, kS = i.dnsrecordsrv_to_json, xS = i.encrypt_with_password, jS = i.decrypt_with_password, SS = i.__wbg_transactionoutputbuilder_free, ES = i.transactionoutputbuilder_new, zS = i.transactionoutputbuilder_with_address, CS = i.transactionoutputbuilder_with_data_hash, OS = i.transactionoutputbuilder_with_plutus_data, LS = i.transactionoutputbuilder_with_script_ref, NS = i.transactionoutputbuilder_next, FS = i.__wbg_transactionoutputamountbuilder_free, PS = i.transactionoutputamountbuilder_with_value, TS = i.transactionoutputamountbuilder_with_coin, RS = i.transactionoutputamountbuilder_with_coin_and_asset, DS = i.transactionoutputamountbuilder_with_asset_and_min_required_coin, $S = i.transactionoutputamountbuilder_with_asset_and_min_required_coin_by_utxo_cost, US = i.transactionoutputamountbuilder_build, MS = i.__wbg_transactionunspentoutput_free, IS = i.transactionunspentoutput_to_bytes, WS = i.transactionunspentoutput_from_bytes, QS = i.transactionunspentoutput_to_hex, VS = i.transactionunspentoutput_from_hex, BS = i.transactionunspentoutput_to_json, AS = i.transactionunspentoutput_to_js_value, HS = i.transactionunspentoutput_from_json, YS = i.transactionunspentoutput_new, XS = i.transactionunspentoutput_input, qS = i.transactionunspentoutput_output, KS = i.__wbg_transactionunspentoutputs_free, ZS = i.transactionunspentoutputs_to_json, JS = i.transactionunspentoutputs_to_js_value, GS = i.transactionunspentoutputs_from_json, tE = i.transactionunspentoutputs_new, eE = i.transactionunspentoutputs_len, _E = i.transactionunspentoutputs_get, rE = i.transactionunspentoutputs_add, nE = i.__wbg_bignum_free, oE = i.bignum_to_bytes, sE = i.bignum_from_bytes, aE = i.bignum_to_hex, iE = i.bignum_from_hex, cE = i.bignum_to_json, dE = i.bignum_to_js_value, lE = i.bignum_from_json, pE = i.bignum_from_str, uE = i.bignum_to_str, wE = i.bignum_zero, fE = i.bignum_one, gE = i.bignum_is_zero, bE = i.bignum_div_floor, hE = i.bignum_checked_mul, yE = i.bignum_checked_add, mE = i.bignum_checked_sub, vE = i.bignum_clamped_sub, kE = i.bignum_compare, xE = i.bignum_less_than, jE = i.bignum_max_value, SE = i.bignum_max, EE = i.__wbg_value_free, zE = i.value_to_bytes, CE = i.value_from_bytes, OE = i.value_to_hex, LE = i.value_from_hex, NE = i.value_to_json, FE = i.value_to_js_value, PE = i.value_from_json, TE = i.value_new, RE = i.value_new_from_assets, DE = i.value_new_with_assets, $E = i.value_zero, UE = i.value_is_zero, ME = i.value_coin, IE = i.value_set_coin, WE = i.value_multiasset, QE = i.value_set_multiasset, VE = i.value_checked_add, BE = i.value_checked_sub, AE = i.value_clamped_sub, HE = i.value_compare, YE = i.__wbg_int_free, XE = i.int_to_bytes, qE = i.int_from_bytes, KE = i.int_to_hex, ZE = i.int_from_hex, JE = i.int_to_json, GE = i.int_to_js_value, t8 = i.int_from_json, e8 = i.int_new, _8 = i.int_new_negative, r8 = i.int_new_i32, n8 = i.int_is_positive, o8 = i.int_as_positive, s8 = i.int_as_negative, a8 = i.int_as_i32, i8 = i.int_as_i32_or_fail, c8 = i.int_to_str, d8 = i.int_from_str, l8 = i.__wbg_bigint_free, p8 = i.bigint_to_bytes, u8 = i.bigint_from_bytes, w8 = i.bigint_to_hex, f8 = i.bigint_from_hex, g8 = i.bigint_to_json, b8 = i.bigint_to_js_value, h8 = i.bigint_from_json, y8 = i.bigint_is_zero, m8 = i.bigint_as_u64, v8 = i.bigint_as_int, k8 = i.bigint_from_str, x8 = i.bigint_to_str, j8 = i.bigint_add, S8 = i.bigint_mul, E8 = i.bigint_one, z8 = i.bigint_increment, C8 = i.bigint_div_ceil, O8 = i.make_daedalus_bootstrap_witness, L8 = i.make_icarus_bootstrap_witness, N8 = i.make_vkey_witness, F8 = i.hash_auxiliary_data, P8 = i.hash_transaction, T8 = i.hash_plutus_data, R8 = i.hash_script_data, D8 = i.get_implicit_input, $8 = i.get_deposit, U8 = i.min_ada_for_output, M8 = i.min_ada_required, I8 = i.encode_json_str_to_native_script, W8 = i.int_as_i32_or_nothing, Q8 = i.__wbg_bip32privatekey_free, V8 = i.bip32privatekey_derive, B8 = i.bip32privatekey_from_128_xprv, A8 = i.bip32privatekey_to_128_xprv, H8 = i.bip32privatekey_generate_ed25519_bip32, Y8 = i.bip32privatekey_to_raw_key, X8 = i.bip32privatekey_to_public, q8 = i.bip32privatekey_from_bytes, K8 = i.bip32privatekey_as_bytes, Z8 = i.bip32privatekey_from_bech32, J8 = i.bip32privatekey_to_bech32, G8 = i.bip32privatekey_from_bip39_entropy, tz = i.bip32privatekey_chaincode, ez = i.bip32privatekey_to_hex, _z = i.bip32privatekey_from_hex, rz = i.__wbg_bip32publickey_free, nz = i.bip32publickey_derive, oz = i.bip32publickey_to_raw_key, sz = i.bip32publickey_from_bytes, az = i.bip32publickey_as_bytes, iz = i.bip32publickey_from_bech32, cz = i.bip32publickey_to_bech32, dz = i.bip32publickey_chaincode, lz = i.bip32publickey_to_hex, pz = i.bip32publickey_from_hex, uz = i.__wbg_privatekey_free, wz = i.privatekey_to_public, fz = i.privatekey_generate_ed25519, gz = i.privatekey_generate_ed25519extended, bz = i.privatekey_from_bech32, hz = i.privatekey_to_bech32, yz = i.privatekey_as_bytes, mz = i.privatekey_from_extended_bytes, vz = i.privatekey_from_normal_bytes, kz = i.privatekey_sign, xz = i.privatekey_to_hex, jz = i.privatekey_from_hex, Sz = i.__wbg_publickey_free, Ez = i.publickey_from_bech32, zz = i.publickey_to_bech32, Cz = i.publickey_from_bytes, Oz = i.publickey_verify, Lz = i.publickey_hash, Nz = i.publickey_to_hex, Fz = i.publickey_from_hex, Pz = i.__wbg_vkey_free, Tz = i.vkey_to_bytes, Rz = i.vkey_from_bytes, Dz = i.vkey_to_hex, $z = i.vkey_from_hex, Uz = i.vkey_to_json, Mz = i.vkey_to_js_value, Iz = i.vkey_from_json, Wz = i.vkey_new, Qz = i.vkey_public_key, Vz = i.__wbg_vkeys_free, Bz = i.vkeys_get, Az = i.vkeys_add, Hz = i.__wbg_vkeywitness_free, Yz = i.vkeywitness_to_bytes, Xz = i.vkeywitness_from_bytes, qz = i.vkeywitness_to_hex, Kz = i.vkeywitness_from_hex, Zz = i.vkeywitness_to_json, Jz = i.vkeywitness_to_js_value, Gz = i.vkeywitness_from_json, t9 = i.vkeywitness_new, e9 = i.__wbg_vkeywitnesses_free, _9 = i.vkeywitnesses_to_bytes, r9 = i.vkeywitnesses_from_bytes, n9 = i.vkeywitnesses_to_hex, o9 = i.vkeywitnesses_from_hex, s9 = i.vkeywitnesses_to_json, a9 = i.vkeywitnesses_to_js_value, i9 = i.vkeywitnesses_from_json, c9 = i.vkeywitnesses_get, d9 = i.vkeywitnesses_add, l9 = i.__wbg_bootstrapwitness_free, p9 = i.bootstrapwitness_to_bytes, u9 = i.bootstrapwitness_from_bytes, w9 = i.bootstrapwitness_to_hex, f9 = i.bootstrapwitness_from_hex, g9 = i.bootstrapwitness_to_json, b9 = i.bootstrapwitness_to_js_value, h9 = i.bootstrapwitness_from_json, y9 = i.bootstrapwitness_vkey, m9 = i.bootstrapwitness_signature, v9 = i.bootstrapwitness_chain_code, k9 = i.bootstrapwitness_attributes, x9 = i.bootstrapwitness_new, j9 = i.__wbg_bootstrapwitnesses_free, S9 = i.bootstrapwitnesses_new, E9 = i.bootstrapwitnesses_len, z9 = i.bootstrapwitnesses_get, C9 = i.bootstrapwitnesses_add, O9 = i.__wbg_publickeys_free, L9 = i.publickeys_new, N9 = i.publickeys_get, F9 = i.publickeys_add, P9 = i.__wbg_ed25519signature_free, T9 = i.ed25519signature_to_bytes, R9 = i.ed25519signature_to_bech32, D9 = i.ed25519signature_to_hex, $9 = i.ed25519signature_from_bech32, U9 = i.ed25519signature_from_hex, M9 = i.ed25519signature_from_bytes, I9 = i.__wbg_legacydaedalusprivatekey_free, W9 = i.legacydaedalusprivatekey_from_bytes, Q9 = i.legacydaedalusprivatekey_as_bytes, V9 = i.legacydaedalusprivatekey_chaincode, B9 = i.__wbg_ed25519keyhash_free, A9 = i.ed25519keyhash_from_bytes, H9 = i.ed25519keyhash_to_bytes, Y9 = i.ed25519keyhash_to_bech32, X9 = i.ed25519keyhash_from_bech32, q9 = i.ed25519keyhash_to_hex, K9 = i.ed25519keyhash_from_hex, Z9 = i.scripthash_from_bytes, J9 = i.scripthash_from_bech32, G9 = i.scripthash_from_hex, tC = i.transactionhash_from_bytes, eC = i.transactionhash_from_bech32, _C = i.transactionhash_from_hex, rC = i.genesisdelegatehash_from_bytes, nC = i.genesisdelegatehash_from_bech32, oC = i.genesisdelegatehash_from_hex, sC = i.genesishash_from_bytes, aC = i.genesishash_from_bech32, iC = i.genesishash_from_hex, cC = i.__wbg_auxiliarydatahash_free, dC = i.auxiliarydatahash_from_bytes, lC = i.auxiliarydatahash_to_bytes, pC = i.auxiliarydatahash_to_bech32, uC = i.auxiliarydatahash_from_bech32, wC = i.auxiliarydatahash_to_hex, fC = i.auxiliarydatahash_from_hex, gC = i.poolmetadatahash_from_bytes, bC = i.poolmetadatahash_from_bech32, hC = i.poolmetadatahash_from_hex, yC = i.vrfkeyhash_from_bytes, mC = i.vrfkeyhash_from_bech32, vC = i.vrfkeyhash_from_hex, kC = i.blockhash_from_bytes, xC = i.blockhash_from_bech32, jC = i.blockhash_from_hex, SC = i.datahash_from_bytes, EC = i.datahash_from_bech32, zC = i.datahash_from_hex, CC = i.scriptdatahash_from_bytes, OC = i.scriptdatahash_from_bech32, LC = i.scriptdatahash_from_hex, NC = i.vrfvkey_from_bytes, FC = i.vrfvkey_from_bech32, PC = i.vrfvkey_from_hex, TC = i.kesvkey_from_bytes, RC = i.kesvkey_from_bech32, DC = i.kesvkey_from_hex, $C = i.__wbg_kessignature_free, UC = i.kessignature_to_bytes, MC = i.kessignature_from_bytes, IC = i.__wbg_nonce_free, WC = i.nonce_to_bytes, QC = i.nonce_from_bytes, VC = i.nonce_to_hex, BC = i.nonce_from_hex, AC = i.nonce_to_json, HC = i.nonce_to_js_value, YC = i.nonce_from_json, XC = i.nonce_new_identity, qC = i.nonce_new_from_hash, KC = i.nonce_get_hash, ZC = i.__wbg_vrfcert_free, JC = i.vrfcert_to_bytes, GC = i.vrfcert_from_bytes, tO = i.vrfcert_to_hex, eO = i.vrfcert_from_hex, _O = i.vrfcert_to_json, rO = i.vrfcert_to_js_value, nO = i.vrfcert_from_json, oO = i.vrfcert_proof, sO = i.vrfcert_new, aO = i.vkeywitnesses_len, iO = i.vkeys_len, cO = i.publickeys_size, dO = i.vrfcert_output, lO = i.scripthash_to_hex, pO = i.genesisdelegatehash_to_hex, uO = i.genesishash_to_hex, wO = i.transactionhash_to_hex, fO = i.poolmetadatahash_to_hex, gO = i.vrfkeyhash_to_hex, bO = i.blockhash_to_hex, hO = i.datahash_to_hex, yO = i.scriptdatahash_to_hex, mO = i.vrfvkey_to_hex, vO = i.kesvkey_to_hex, kO = i.vkeywitness_vkey, xO = i.vkeywitness_signature, jO = i.scripthash_to_bech32, SO = i.genesisdelegatehash_to_bech32, EO = i.genesishash_to_bech32, zO = i.transactionhash_to_bech32, CO = i.poolmetadatahash_to_bech32, OO = i.vrfkeyhash_to_bech32, LO = i.blockhash_to_bech32, NO = i.datahash_to_bech32, FO = i.scriptdatahash_to_bech32, PO = i.vrfvkey_to_bech32, TO = i.kesvkey_to_bech32, RO = i.scripthash_to_bytes, DO = i.transactionhash_to_bytes, $O = i.genesisdelegatehash_to_bytes, UO = i.genesishash_to_bytes, MO = i.publickey_as_bytes, IO = i.poolmetadatahash_to_bytes, WO = i.vrfkeyhash_to_bytes, QO = i.blockhash_to_bytes, VO = i.datahash_to_bytes, BO = i.scriptdatahash_to_bytes, AO = i.vrfvkey_to_bytes, HO = i.kesvkey_to_bytes, YO = i.vkeywitnesses_new, XO = i.vkeys_new, qO = i.__wbg_scripthash_free, KO = i.__wbg_genesisdelegatehash_free, ZO = i.__wbg_genesishash_free, JO = i.__wbg_kesvkey_free, GO = i.__wbg_poolmetadatahash_free, t7 = i.__wbg_transactionhash_free, e7 = i.__wbg_vrfkeyhash_free, _7 = i.__wbg_blockhash_free, r7 = i.__wbg_scriptdatahash_free, n7 = i.__wbg_datahash_free, o7 = i.__wbg_vrfvkey_free, s7 = i.__wbg_inputwithscriptwitness_free, a7 = i.inputwithscriptwitness_new_with_native_script_witness, i7 = i.inputwithscriptwitness_new_with_plutus_witness, c7 = i.inputwithscriptwitness_input, d7 = i.__wbg_inputswithscriptwitness_free, l7 = i.inputswithscriptwitness_new, p7 = i.inputswithscriptwitness_add, u7 = i.inputswithscriptwitness_get, w7 = i.inputswithscriptwitness_len, f7 = i.__wbg_plutusscriptsource_free, g7 = i.plutusscriptsource_new, b7 = i.plutusscriptsource_new_ref_input, h7 = i.plutusscriptsource_new_ref_input_with_lang_ver, y7 = i.__wbg_datumsource_free, m7 = i.datumsource_new, v7 = i.datumsource_new_ref_input, k7 = i.__wbg_plutuswitness_free, x7 = i.plutuswitness_new, j7 = i.plutuswitness_new_with_ref, S7 = i.plutuswitness_new_without_datum, E7 = i.plutuswitness_new_with_ref_without_datum, z7 = i.plutuswitness_script, C7 = i.plutuswitness_datum, O7 = i.plutuswitness_redeemer, L7 = i.__wbg_plutuswitnesses_free, N7 = i.plutuswitnesses_get, F7 = i.plutuswitnesses_add, P7 = i.__wbg_txinputsbuilder_free, T7 = i.txinputsbuilder_new, R7 = i.txinputsbuilder_add_key_input, D7 = i.txinputsbuilder_add_script_input, $7 = i.txinputsbuilder_add_native_script_input, U7 = i.txinputsbuilder_add_plutus_script_input, M7 = i.txinputsbuilder_add_bootstrap_input, I7 = i.txinputsbuilder_add_input, W7 = i.txinputsbuilder_count_missing_input_scripts, Q7 = i.txinputsbuilder_add_required_native_input_scripts, V7 = i.txinputsbuilder_add_required_plutus_input_scripts, B7 = i.txinputsbuilder_add_required_script_input_witnesses, A7 = i.txinputsbuilder_get_ref_inputs, H7 = i.txinputsbuilder_get_native_input_scripts, Y7 = i.txinputsbuilder_get_plutus_input_scripts, X7 = i.txinputsbuilder_len, q7 = i.txinputsbuilder_add_required_signer, K7 = i.txinputsbuilder_add_required_signers, Z7 = i.txinputsbuilder_total_value, J7 = i.txinputsbuilder_inputs, G7 = i.txinputsbuilder_inputs_option, tL = i.__wbg_txbuilderconstants_free, eL = i.txbuilderconstants_plutus_default_cost_models, _L = i.txbuilderconstants_plutus_alonzo_cost_models, rL = i.plutuswitnesses_len, nL = i.txbuilderconstants_plutus_vasil_cost_models, oL = i.plutuswitnesses_new, sL = i.__wbg_metadatamap_free, aL = i.metadatamap_to_bytes, iL = i.metadatamap_from_bytes, cL = i.metadatamap_to_hex, dL = i.metadatamap_from_hex, lL = i.metadatamap_insert, pL = i.metadatamap_insert_str, uL = i.metadatamap_insert_i32, wL = i.metadatamap_get, fL = i.metadatamap_get_str, gL = i.metadatamap_get_i32, bL = i.metadatamap_has, hL = i.metadatamap_keys, yL = i.__wbg_metadatalist_free, mL = i.metadatalist_to_bytes, vL = i.metadatalist_from_bytes, kL = i.metadatalist_to_hex, xL = i.metadatalist_from_hex, jL = i.metadatalist_get, SL = i.metadatalist_add, EL = i.__wbg_transactionmetadatum_free, zL = i.transactionmetadatum_to_bytes, CL = i.transactionmetadatum_from_bytes, OL = i.transactionmetadatum_to_hex, LL = i.transactionmetadatum_from_hex, NL = i.transactionmetadatum_new_map, FL = i.transactionmetadatum_new_list, PL = i.transactionmetadatum_new_int, TL = i.transactionmetadatum_new_bytes, RL = i.transactionmetadatum_new_text, DL = i.transactionmetadatum_as_map, $L = i.transactionmetadatum_as_list, UL = i.transactionmetadatum_as_int, ML = i.transactionmetadatum_as_bytes, IL = i.transactionmetadatum_as_text, WL = i.__wbg_transactionmetadatumlabels_free, QL = i.transactionmetadatumlabels_to_bytes, VL = i.transactionmetadatumlabels_from_bytes, BL = i.transactionmetadatumlabels_to_hex, AL = i.transactionmetadatumlabels_from_hex, HL = i.transactionmetadatumlabels_get, YL = i.transactionmetadatumlabels_add, XL = i.__wbg_generaltransactionmetadata_free, qL = i.generaltransactionmetadata_to_bytes, KL = i.generaltransactionmetadata_from_bytes, ZL = i.generaltransactionmetadata_to_hex, JL = i.generaltransactionmetadata_from_hex, GL = i.generaltransactionmetadata_to_json, tN = i.generaltransactionmetadata_to_js_value, eN = i.generaltransactionmetadata_from_json, _N = i.generaltransactionmetadata_new, rN = i.generaltransactionmetadata_len, nN = i.generaltransactionmetadata_insert, oN = i.generaltransactionmetadata_get, sN = i.generaltransactionmetadata_keys, aN = i.__wbg_auxiliarydata_free, iN = i.auxiliarydata_to_bytes, cN = i.auxiliarydata_from_bytes, dN = i.auxiliarydata_to_hex, lN = i.auxiliarydata_from_hex, pN = i.auxiliarydata_to_json, uN = i.auxiliarydata_to_js_value, wN = i.auxiliarydata_from_json, fN = i.auxiliarydata_new, gN = i.auxiliarydata_metadata, bN = i.auxiliarydata_set_metadata, hN = i.auxiliarydata_native_scripts, yN = i.auxiliarydata_set_native_scripts, mN = i.auxiliarydata_plutus_scripts, vN = i.auxiliarydata_set_plutus_scripts, kN = i.auxiliarydata_prefer_alonzo_format, xN = i.auxiliarydata_set_prefer_alonzo_format, jN = i.encode_arbitrary_bytes_as_metadatum, SN = i.decode_arbitrary_bytes_from_metadatum, EN = i.encode_json_str_to_metadatum, zN = i.decode_metadatum_to_json_str, CN = i.__wbg_plutusscript_free, ON = i.plutusscript_to_bytes, LN = i.plutusscript_from_bytes, NN = i.plutusscript_to_hex, FN = i.plutusscript_from_hex, PN = i.plutusscript_new, TN = i.plutusscript_new_v2, RN = i.plutusscript_new_with_version, DN = i.plutusscript_bytes, $N = i.plutusscript_from_bytes_v2, UN = i.plutusscript_from_bytes_with_version, MN = i.plutusscript_from_hex_with_version, IN = i.plutusscript_hash, WN = i.plutusscript_language_version, QN = i.__wbg_plutusscripts_free, VN = i.plutusscripts_to_bytes, BN = i.plutusscripts_from_bytes, AN = i.plutusscripts_to_hex, HN = i.plutusscripts_from_hex, YN = i.plutusscripts_to_json, XN = i.plutusscripts_to_js_value, qN = i.plutusscripts_from_json, KN = i.plutusscripts_new, ZN = i.plutusscripts_get, JN = i.plutusscripts_add, GN = i.__wbg_constrplutusdata_free, tF = i.constrplutusdata_to_bytes, eF = i.constrplutusdata_from_bytes, _F = i.constrplutusdata_to_hex, rF = i.constrplutusdata_from_hex, nF = i.constrplutusdata_alternative, oF = i.constrplutusdata_data, sF = i.constrplutusdata_new, aF = i.__wbg_costmodel_free, iF = i.costmodel_to_bytes, cF = i.costmodel_from_bytes, dF = i.costmodel_to_hex, lF = i.costmodel_from_hex, pF = i.costmodel_to_json, uF = i.costmodel_to_js_value, wF = i.costmodel_from_json, fF = i.costmodel_new, gF = i.costmodel_set, bF = i.costmodel_get, hF = i.__wbg_costmdls_free, yF = i.costmdls_to_bytes, mF = i.costmdls_from_bytes, vF = i.costmdls_to_hex, kF = i.costmdls_from_hex, xF = i.costmdls_to_json, jF = i.costmdls_to_js_value, SF = i.costmdls_from_json, EF = i.costmdls_new, zF = i.costmdls_len, CF = i.costmdls_insert, OF = i.costmdls_get, LF = i.costmdls_keys, NF = i.costmdls_retain_language_versions, FF = i.__wbg_exunitprices_free, PF = i.exunitprices_to_bytes, TF = i.exunitprices_from_bytes, RF = i.exunitprices_to_hex, DF = i.exunitprices_from_hex, $F = i.exunitprices_to_json, UF = i.exunitprices_to_js_value, MF = i.exunitprices_from_json, IF = i.exunitprices_mem_price, WF = i.exunitprices_step_price, QF = i.exunitprices_new, VF = i.__wbg_exunits_free, BF = i.exunits_to_bytes, AF = i.exunits_from_bytes, HF = i.exunits_to_hex, YF = i.exunits_from_hex, XF = i.exunits_to_json, qF = i.exunits_to_js_value, KF = i.exunits_from_json, ZF = i.exunits_mem, JF = i.exunits_steps, GF = i.exunits_new, tP = i.__wbg_language_free, eP = i.language_to_bytes, _P = i.language_from_bytes, rP = i.language_to_hex, nP = i.language_from_hex, oP = i.language_to_json, sP = i.language_to_js_value, aP = i.language_from_json, iP = i.language_new_plutus_v1, cP = i.language_new_plutus_v2, dP = i.language_kind, lP = i.__wbg_languages_free, pP = i.languages_new, uP = i.languages_get, wP = i.languages_add, fP = i.languages_list, gP = i.__wbg_plutusmap_free, bP = i.plutusmap_to_bytes, hP = i.plutusmap_from_bytes, yP = i.plutusmap_to_hex, mP = i.plutusmap_from_hex, vP = i.plutusmap_insert, kP = i.plutusmap_get, xP = i.plutusmap_keys, jP = i.__wbg_plutusdata_free, SP = i.plutusdata_to_bytes, EP = i.plutusdata_from_bytes, zP = i.plutusdata_to_hex, CP = i.plutusdata_from_hex, OP = i.plutusdata_new_constr_plutus_data, LP = i.plutusdata_new_empty_constr_plutus_data, NP = i.plutusdata_new_single_value_constr_plutus_data, FP = i.plutusdata_new_map, PP = i.plutusdata_new_list, TP = i.plutusdata_new_integer, RP = i.plutusdata_new_bytes, DP = i.plutusdata_kind, $P = i.plutusdata_as_constr_plutus_data, UP = i.plutusdata_as_map, MP = i.plutusdata_as_list, IP = i.plutusdata_as_integer, WP = i.plutusdata_as_bytes, QP = i.plutusdata_from_address, VP = i.__wbg_plutuslist_free, BP = i.plutuslist_to_bytes, AP = i.plutuslist_from_bytes, HP = i.plutuslist_to_hex, YP = i.plutuslist_from_hex, XP = i.plutuslist_new, qP = i.plutuslist_get, KP = i.plutuslist_add, ZP = i.__wbg_redeemer_free, JP = i.redeemer_to_bytes, GP = i.redeemer_from_bytes, tT = i.redeemer_to_hex, eT = i.redeemer_from_hex, _T = i.redeemer_to_json, rT = i.redeemer_to_js_value, nT = i.redeemer_from_json, oT = i.redeemer_tag, sT = i.redeemer_index, aT = i.redeemer_data, iT = i.redeemer_ex_units, cT = i.redeemer_new, dT = i.__wbg_redeemertag_free, lT = i.redeemertag_to_bytes, pT = i.redeemertag_from_bytes, uT = i.redeemertag_to_hex, wT = i.redeemertag_from_hex, fT = i.redeemertag_to_json, gT = i.redeemertag_to_js_value, bT = i.redeemertag_from_json, hT = i.redeemertag_new_spend, yT = i.redeemertag_new_mint, mT = i.redeemertag_new_cert, vT = i.redeemertag_new_reward, kT = i.redeemertag_kind, xT = i.__wbg_redeemers_free, jT = i.redeemers_to_bytes, ST = i.redeemers_from_bytes, ET = i.redeemers_to_hex, zT = i.redeemers_from_hex, CT = i.redeemers_to_json, OT = i.redeemers_to_js_value, LT = i.redeemers_from_json, NT = i.redeemers_get, FT = i.redeemers_add, PT = i.redeemers_total_ex_units, TT = i.__wbg_strings_free, RT = i.strings_get, DT = i.strings_add, $T = i.encode_json_str_to_plutus_datum, UT = i.decode_plutus_datum_to_json_str, MT = i.transactionmetadatumlabels_len, IT = i.metadatamap_len, WT = i.plutusscripts_len, QT = i.metadatalist_len, VT = i.costmodel_len, BT = i.languages_len, AT = i.plutusmap_len, HT = i.transactionmetadatum_kind, YT = i.plutuslist_len, XT = i.redeemers_len, qT = i.strings_len, KT = i.plutusdata_from_json, ZT = i.plutusdata_to_json, JT = i.plutusmap_new, GT = i.metadatamap_new, tR = i.transactionmetadatumlabels_new, eR = i.strings_new, _R = i.metadatalist_new, rR = i.redeemers_new, nR = i.__wbg_fixedtransaction_free, oR = i.fixedtransaction_to_bytes, sR = i.fixedtransaction_from_bytes, aR = i.fixedtransaction_to_hex, iR = i.fixedtransaction_from_hex, cR = i.fixedtransaction_new, dR = i.fixedtransaction_new_with_auxiliary, lR = i.fixedtransaction_body, pR = i.fixedtransaction_raw_body, uR = i.fixedtransaction_set_body, wR = i.fixedtransaction_set_witness_set, fR = i.fixedtransaction_witness_set, gR = i.fixedtransaction_raw_witness_set, bR = i.fixedtransaction_set_is_valid, hR = i.fixedtransaction_is_valid, yR = i.fixedtransaction_set_auxiliary_data, mR = i.fixedtransaction_auxiliary_data, vR = i.fixedtransaction_raw_auxiliary_data, kR = i.__wbg_transactionbuilderconfig_free, xR = i.__wbg_transactionbuilderconfigbuilder_free, jR = i.transactionbuilderconfigbuilder_new, SR = i.transactionbuilderconfigbuilder_fee_algo, ER = i.transactionbuilderconfigbuilder_coins_per_utxo_word, zR = i.transactionbuilderconfigbuilder_coins_per_utxo_byte, CR = i.transactionbuilderconfigbuilder_ex_unit_prices, OR = i.transactionbuilderconfigbuilder_pool_deposit, LR = i.transactionbuilderconfigbuilder_key_deposit, NR = i.transactionbuilderconfigbuilder_max_value_size, FR = i.transactionbuilderconfigbuilder_max_tx_size, PR = i.transactionbuilderconfigbuilder_prefer_pure_change, TR = i.transactionbuilderconfigbuilder_build, RR = i.__wbg_transactionbuilder_free, DR = i.transactionbuilder_add_inputs_from, $R = i.transactionbuilder_set_inputs, UR = i.transactionbuilder_set_collateral, MR = i.transactionbuilder_set_collateral_return, IR = i.transactionbuilder_set_collateral_return_and_total, WR = i.transactionbuilder_set_total_collateral, QR = i.transactionbuilder_set_total_collateral_and_return, VR = i.transactionbuilder_add_reference_input, BR = i.transactionbuilder_add_key_input, AR = i.transactionbuilder_add_script_input, HR = i.transactionbuilder_add_native_script_input, YR = i.transactionbuilder_add_plutus_script_input, XR = i.transactionbuilder_add_bootstrap_input, qR = i.transactionbuilder_add_input, KR = i.transactionbuilder_count_missing_input_scripts, ZR = i.transactionbuilder_add_required_native_input_scripts, JR = i.transactionbuilder_add_required_plutus_input_scripts, GR = i.transactionbuilder_get_native_input_scripts, tD = i.transactionbuilder_get_plutus_input_scripts, eD = i.transactionbuilder_fee_for_input, _D = i.transactionbuilder_add_output, rD = i.transactionbuilder_fee_for_output, nD = i.transactionbuilder_set_fee, oD = i.transactionbuilder_set_ttl, sD = i.transactionbuilder_set_ttl_bignum, aD = i.transactionbuilder_set_validity_start_interval, iD = i.transactionbuilder_set_validity_start_interval_bignum, cD = i.transactionbuilder_set_certs, dD = i.transactionbuilder_set_withdrawals, lD = i.transactionbuilder_get_auxiliary_data, pD = i.transactionbuilder_set_auxiliary_data, uD = i.transactionbuilder_set_metadata, wD = i.transactionbuilder_add_metadatum, fD = i.transactionbuilder_add_json_metadatum, gD = i.transactionbuilder_add_json_metadatum_with_schema, bD = i.transactionbuilder_set_mint_builder, hD = i.transactionbuilder_get_mint_builder, yD = i.transactionbuilder_set_mint, mD = i.transactionbuilder_get_mint, vD = i.transactionbuilder_get_mint_scripts, kD = i.transactionbuilder_set_mint_asset, xD = i.transactionbuilder_add_mint_asset, jD = i.transactionbuilder_add_mint_asset_and_output, SD = i.transactionbuilder_add_mint_asset_and_output_min_required_coin, ED = i.transactionbuilder_new, zD = i.transactionbuilder_get_reference_inputs, CD = i.transactionbuilder_get_explicit_input, OD = i.transactionbuilder_get_implicit_input, LD = i.transactionbuilder_get_total_input, ND = i.transactionbuilder_get_total_output, FD = i.transactionbuilder_get_explicit_output, PD = i.transactionbuilder_get_deposit, TD = i.transactionbuilder_get_fee_if_set, RD = i.transactionbuilder_add_change_if_needed, DD = i.transactionbuilder_add_change_if_needed_with_datum, $D = i.transactionbuilder_calc_script_data_hash, UD = i.transactionbuilder_set_script_data_hash, MD = i.transactionbuilder_remove_script_data_hash, ID = i.transactionbuilder_add_required_signer, WD = i.transactionbuilder_full_size, QD = i.transactionbuilder_output_sizes, VD = i.transactionbuilder_build, BD = i.transactionbuilder_build_tx, AD = i.transactionbuilder_build_tx_unsafe, HD = i.transactionbuilder_min_fee, YD = i.__wbg_linearfee_free, XD = i.linearfee_constant, qD = i.linearfee_coefficient, KD = i.linearfee_new, ZD = i.min_fee, JD = i.calculate_ex_units_ceil_cost, GD = i.min_script_fee, t$ = i.__wbg_transactionbatchlist_free, e$ = i.transactionbatchlist_get, _$ = i.__wbg_transactionbatch_free, r$ = i.transactionbatch_len, n$ = i.transactionbatch_get, o$ = i.create_send_all, s$ = i.transactionbatchlist_len, a$ = i.__wbg_networkinfo_free, i$ = i.networkinfo_new, c$ = i.networkinfo_network_id, d$ = i.networkinfo_protocol_magic, l$ = i.networkinfo_testnet_preview, p$ = i.networkinfo_testnet_preprod, u$ = i.networkinfo_testnet, w$ = i.networkinfo_mainnet, f$ = i.__wbg_stakecredential_free, g$ = i.stakecredential_from_keyhash, b$ = i.stakecredential_from_scripthash, h$ = i.stakecredential_to_keyhash, y$ = i.stakecredential_to_scripthash, m$ = i.stakecredential_kind, v$ = i.stakecredential_to_bytes, k$ = i.stakecredential_from_bytes, x$ = i.stakecredential_to_hex, j$ = i.stakecredential_from_hex, S$ = i.stakecredential_to_json, E$ = i.stakecredential_to_js_value, z$ = i.stakecredential_from_json, C$ = i.__wbg_byronaddress_free, O$ = i.byronaddress_to_base58, L$ = i.byronaddress_to_bytes, N$ = i.byronaddress_from_bytes, F$ = i.byronaddress_byron_protocol_magic, P$ = i.byronaddress_attributes, T$ = i.byronaddress_network_id, R$ = i.byronaddress_from_base58, D$ = i.byronaddress_icarus_from_key, $$ = i.byronaddress_is_valid, U$ = i.byronaddress_to_address, M$ = i.byronaddress_from_address, I$ = i.__wbg_address_free, W$ = i.address_from_bytes, Q$ = i.address_to_json, V$ = i.address_to_js_value, B$ = i.address_from_json, A$ = i.address_to_hex, H$ = i.address_from_hex, Y$ = i.address_to_bytes, X$ = i.address_to_bech32, q$ = i.address_from_bech32, K$ = i.address_network_id, Z$ = i.__wbg_baseaddress_free, J$ = i.baseaddress_new, G$ = i.baseaddress_payment_cred, tU = i.baseaddress_stake_cred, eU = i.baseaddress_to_address, _U = i.baseaddress_from_address, rU = i.__wbg_enterpriseaddress_free, nU = i.enterpriseaddress_new, oU = i.enterpriseaddress_to_address, sU = i.enterpriseaddress_from_address, aU = i.rewardaddress_to_address, iU = i.rewardaddress_from_address, cU = i.__wbg_pointer_free, dU = i.pointer_new, lU = i.pointer_new_pointer, pU = i.pointer_slot, uU = i.pointer_tx_index, wU = i.pointer_cert_index, fU = i.pointer_slot_bignum, gU = i.pointer_tx_index_bignum, bU = i.pointer_cert_index_bignum, hU = i.__wbg_pointeraddress_free, yU = i.pointeraddress_new, mU = i.pointeraddress_payment_cred, vU = i.pointeraddress_stake_pointer, kU = i.pointeraddress_to_address, xU = i.pointeraddress_from_address, jU = i.__wbg_mintwitness_free, SU = i.mintwitness_new_native_script, EU = i.mintwitness_new_plutus_script, zU = i.__wbg_mintbuilder_free, CU = i.mintbuilder_new, OU = i.mintbuilder_add_asset, LU = i.mintbuilder_set_asset, NU = i.mintbuilder_build, FU = i.mintbuilder_get_native_scripts, PU = i.mintbuilder_get_plutus_witnesses, TU = i.mintbuilder_get_ref_inputs, RU = i.mintbuilder_get_redeeemers, DU = i.mintbuilder_has_plutus_scripts, $U = i.mintbuilder_has_native_scripts, UU = i.enterpriseaddress_payment_cred, MU = i.rewardaddress_payment_cred, IU = i.rewardaddress_new, WU = i.__wbg_rewardaddress_free, QU = i.__wbindgen_malloc, VU = i.__wbindgen_realloc, BU = i.__wbindgen_add_to_stack_pointer, AU = i.__wbindgen_free, HU = i.__wbindgen_exn_store, YU = Object.freeze(Object.defineProperty({
    __proto__: null,
    __wbg_address_free: I$,
    __wbg_assetname_free: Qj,
    __wbg_assetnames_free: Jj,
    __wbg_assets_free: d3,
    __wbg_auxiliarydata_free: aN,
    __wbg_auxiliarydatahash_free: cC,
    __wbg_auxiliarydataset_free: z2,
    __wbg_baseaddress_free: Z$,
    __wbg_bigint_free: l8,
    __wbg_bignum_free: nE,
    __wbg_bip32privatekey_free: Q8,
    __wbg_bip32publickey_free: rz,
    __wbg_block_free: P2,
    __wbg_blockhash_free: _7,
    __wbg_bootstrapwitness_free: l9,
    __wbg_bootstrapwitnesses_free: j9,
    __wbg_byronaddress_free: C$,
    __wbg_certificate_free: Fm,
    __wbg_certificates_free: Zg,
    __wbg_constrplutusdata_free: GN,
    __wbg_costmdls_free: hF,
    __wbg_costmodel_free: aF,
    __wbg_datacost_free: Yg,
    __wbg_datahash_free: n7,
    __wbg_datumsource_free: y7,
    __wbg_dnsrecordaoraaaa_free: Jv,
    __wbg_dnsrecordsrv_free: H5,
    __wbg_ed25519keyhash_free: B9,
    __wbg_ed25519keyhashes_free: ry,
    __wbg_ed25519signature_free: P9,
    __wbg_enterpriseaddress_free: rU,
    __wbg_exunitprices_free: FF,
    __wbg_exunits_free: VF,
    __wbg_fixedtransaction_free: nR,
    __wbg_generaltransactionmetadata_free: XL,
    __wbg_genesisdelegatehash_free: KO,
    __wbg_genesishash_free: ZO,
    __wbg_genesishashes_free: h6,
    __wbg_genesiskeydelegation_free: dm,
    __wbg_header_free: Y2,
    __wbg_headerbody_free: bj,
    __wbg_inputswithscriptwitness_free: d7,
    __wbg_inputwithscriptwitness_free: s7,
    __wbg_int_free: YE,
    __wbg_ipv4_free: Ev,
    __wbg_ipv6_free: Dv,
    __wbg_kessignature_free: $C,
    __wbg_kesvkey_free: JO,
    __wbg_language_free: tP,
    __wbg_languages_free: lP,
    __wbg_legacydaedalusprivatekey_free: I9,
    __wbg_linearfee_free: YD,
    __wbg_metadatalist_free: yL,
    __wbg_metadatamap_free: sL,
    __wbg_mint_free: Q3,
    __wbg_mintassets_free: $3,
    __wbg_mintbuilder_free: zU,
    __wbg_mintsassets_free: D3,
    __wbg_mintwitness_free: jU,
    __wbg_mirtostakecredentials_free: ev,
    __wbg_moveinstantaneousreward_free: pv,
    __wbg_moveinstantaneousrewardscert_free: km,
    __wbg_multiasset_free: k3,
    __wbg_multihostname_free: D1,
    __wbg_nativescript_free: R4,
    __wbg_nativescripts_free: n6,
    __wbg_networkid_free: r5,
    __wbg_networkinfo_free: a$,
    __wbg_nonce_free: IC,
    __wbg_operationalcert_free: nj,
    __wbg_outputdatum_free: L4,
    __wbg_plutusdata_free: jP,
    __wbg_plutuslist_free: VP,
    __wbg_plutusmap_free: gP,
    __wbg_plutusscript_free: CN,
    __wbg_plutusscripts_free: QN,
    __wbg_plutusscriptsource_free: f7,
    __wbg_plutuswitness_free: k7,
    __wbg_plutuswitnesses_free: L7,
    __wbg_pointer_free: cU,
    __wbg_pointeraddress_free: hU,
    __wbg_poolmetadata_free: ak,
    __wbg_poolmetadatahash_free: GO,
    __wbg_poolparams_free: Sy,
    __wbg_poolregistration_free: Vy,
    __wbg_poolretirement_free: Gy,
    __wbg_privatekey_free: uz,
    __wbg_proposedprotocolparameterupdates_free: U6,
    __wbg_protocolparamupdate_free: sx,
    __wbg_protocolversion_free: q6,
    __wbg_publickey_free: Sz,
    __wbg_publickeys_free: O9,
    __wbg_redeemer_free: ZP,
    __wbg_redeemers_free: xT,
    __wbg_redeemertag_free: dT,
    __wbg_relay_free: H1,
    __wbg_relays_free: fy,
    __wbg_rewardaddress_free: WU,
    __wbg_rewardaddresses_free: Ck,
    __wbg_scriptall_free: E0,
    __wbg_scriptany_free: Y5,
    __wbg_scriptdatahash_free: r7,
    __wbg_scripthash_free: qO,
    __wbg_scripthashes_free: C6,
    __wbg_scriptnofk_free: Q0,
    __wbg_scriptpubkey_free: g0,
    __wbg_scriptref_free: g4,
    __wbg_singlehostaddr_free: w1,
    __wbg_singlehostname_free: E1,
    __wbg_stakecredential_free: f$,
    __wbg_stakecredentials_free: hk,
    __wbg_stakedelegation_free: Yh,
    __wbg_stakederegistration_free: $h,
    __wbg_stakeregistration_free: bS,
    __wbg_strings_free: TT,
    __wbg_timelockexpiry_free: n4,
    __wbg_timelockstart_free: K5,
    __wbg_transaction_free: pg,
    __wbg_transactionbatch_free: _$,
    __wbg_transactionbatchlist_free: t$,
    __wbg_transactionbodies_free: a2,
    __wbg_transactionbody_free: ib,
    __wbg_transactionbuilder_free: RR,
    __wbg_transactionbuilderconfig_free: kR,
    __wbg_transactionbuilderconfigbuilder_free: xR,
    __wbg_transactionhash_free: t7,
    __wbg_transactioninput_free: Gb,
    __wbg_transactioninputs_free: Eg,
    __wbg_transactionmetadatum_free: EL,
    __wbg_transactionmetadatumlabels_free: WL,
    __wbg_transactionoutput_free: dh,
    __wbg_transactionoutputamountbuilder_free: FS,
    __wbg_transactionoutputbuilder_free: SS,
    __wbg_transactionoutputs_free: $g,
    __wbg_transactionunspentoutput_free: MS,
    __wbg_transactionunspentoutputs_free: KS,
    __wbg_transactionwitnessset_free: qk,
    __wbg_transactionwitnesssets_free: b2,
    __wbg_txbuilderconstants_free: tL,
    __wbg_txinputsbuilder_free: P7,
    __wbg_unitinterval_free: w5,
    __wbg_update_free: a6,
    __wbg_url_free: A5,
    __wbg_value_free: EE,
    __wbg_vkey_free: Pz,
    __wbg_vkeys_free: Vz,
    __wbg_vkeywitness_free: Hz,
    __wbg_vkeywitnesses_free: e9,
    __wbg_vrfcert_free: ZC,
    __wbg_vrfkeyhash_free: e7,
    __wbg_vrfvkey_free: o7,
    __wbg_withdrawals_free: Uk,
    __wbindgen_add_to_stack_pointer: BU,
    __wbindgen_exn_store: HU,
    __wbindgen_free: AU,
    __wbindgen_malloc: QU,
    __wbindgen_realloc: VU,
    address_from_bech32: q$,
    address_from_bytes: W$,
    address_from_hex: H$,
    address_from_json: B$,
    address_network_id: K$,
    address_to_bech32: X$,
    address_to_bytes: Y$,
    address_to_hex: A$,
    address_to_js_value: V$,
    address_to_json: Q$,
    assetname_from_bytes: Bj,
    assetname_from_hex: Hj,
    assetname_from_json: qj,
    assetname_name: Zj,
    assetname_new: Kj,
    assetname_to_bytes: Vj,
    assetname_to_hex: Aj,
    assetname_to_js_value: Xj,
    assetname_to_json: Yj,
    assetnames_add: c3,
    assetnames_from_bytes: t3,
    assetnames_from_hex: _3,
    assetnames_from_json: o3,
    assetnames_get: i3,
    assetnames_len: a3,
    assetnames_new: s3,
    assetnames_to_bytes: Gj,
    assetnames_to_hex: e3,
    assetnames_to_js_value: n3,
    assetnames_to_json: r3,
    assets_from_bytes: p3,
    assets_from_hex: w3,
    assets_from_json: b3,
    assets_get: m3,
    assets_insert: y3,
    assets_keys: v3,
    assets_len: N5,
    assets_new: h3,
    assets_to_bytes: l3,
    assets_to_hex: u3,
    assets_to_js_value: g3,
    assets_to_json: f3,
    auxiliarydata_from_bytes: cN,
    auxiliarydata_from_hex: lN,
    auxiliarydata_from_json: wN,
    auxiliarydata_metadata: gN,
    auxiliarydata_native_scripts: hN,
    auxiliarydata_new: fN,
    auxiliarydata_plutus_scripts: mN,
    auxiliarydata_prefer_alonzo_format: kN,
    auxiliarydata_set_metadata: bN,
    auxiliarydata_set_native_scripts: yN,
    auxiliarydata_set_plutus_scripts: vN,
    auxiliarydata_set_prefer_alonzo_format: xN,
    auxiliarydata_to_bytes: iN,
    auxiliarydata_to_hex: dN,
    auxiliarydata_to_js_value: uN,
    auxiliarydata_to_json: pN,
    auxiliarydatahash_from_bech32: uC,
    auxiliarydatahash_from_bytes: dC,
    auxiliarydatahash_from_hex: fC,
    auxiliarydatahash_to_bech32: pC,
    auxiliarydatahash_to_bytes: lC,
    auxiliarydatahash_to_hex: wC,
    auxiliarydataset_get: N2,
    auxiliarydataset_indices: F2,
    auxiliarydataset_insert: L2,
    auxiliarydataset_len: O2,
    auxiliarydataset_new: C2,
    baseaddress_from_address: _U,
    baseaddress_new: J$,
    baseaddress_payment_cred: G$,
    baseaddress_stake_cred: tU,
    baseaddress_to_address: eU,
    bigint_add: j8,
    bigint_as_int: v8,
    bigint_as_u64: m8,
    bigint_div_ceil: C8,
    bigint_from_bytes: u8,
    bigint_from_hex: f8,
    bigint_from_json: h8,
    bigint_from_str: k8,
    bigint_increment: z8,
    bigint_is_zero: y8,
    bigint_mul: S8,
    bigint_one: E8,
    bigint_to_bytes: p8,
    bigint_to_hex: w8,
    bigint_to_js_value: b8,
    bigint_to_json: g8,
    bigint_to_str: x8,
    bignum_checked_add: yE,
    bignum_checked_mul: hE,
    bignum_checked_sub: mE,
    bignum_clamped_sub: vE,
    bignum_compare: kE,
    bignum_div_floor: bE,
    bignum_from_bytes: sE,
    bignum_from_hex: iE,
    bignum_from_json: lE,
    bignum_from_str: pE,
    bignum_is_zero: gE,
    bignum_less_than: xE,
    bignum_max: SE,
    bignum_max_value: jE,
    bignum_one: fE,
    bignum_to_bytes: oE,
    bignum_to_hex: aE,
    bignum_to_js_value: dE,
    bignum_to_json: cE,
    bignum_to_str: uE,
    bignum_zero: wE,
    bip32privatekey_as_bytes: K8,
    bip32privatekey_chaincode: tz,
    bip32privatekey_derive: V8,
    bip32privatekey_from_128_xprv: B8,
    bip32privatekey_from_bech32: Z8,
    bip32privatekey_from_bip39_entropy: G8,
    bip32privatekey_from_bytes: q8,
    bip32privatekey_from_hex: _z,
    bip32privatekey_generate_ed25519_bip32: H8,
    bip32privatekey_to_128_xprv: A8,
    bip32privatekey_to_bech32: J8,
    bip32privatekey_to_hex: ez,
    bip32privatekey_to_public: X8,
    bip32privatekey_to_raw_key: Y8,
    bip32publickey_as_bytes: az,
    bip32publickey_chaincode: dz,
    bip32publickey_derive: nz,
    bip32publickey_from_bech32: iz,
    bip32publickey_from_bytes: sz,
    bip32publickey_from_hex: pz,
    bip32publickey_to_bech32: cz,
    bip32publickey_to_hex: lz,
    bip32publickey_to_raw_key: oz,
    block_auxiliary_data_set: B2,
    block_from_bytes: R2,
    block_from_hex: $2,
    block_from_json: I2,
    block_header: W2,
    block_invalid_transactions: A2,
    block_new: H2,
    block_to_bytes: T2,
    block_to_hex: D2,
    block_to_js_value: M2,
    block_to_json: U2,
    block_transaction_bodies: Q2,
    block_transaction_witness_sets: V2,
    blockhash_from_bech32: xC,
    blockhash_from_bytes: kC,
    blockhash_from_hex: jC,
    blockhash_to_bech32: LO,
    blockhash_to_bytes: QO,
    blockhash_to_hex: bO,
    bootstrapwitness_attributes: k9,
    bootstrapwitness_chain_code: v9,
    bootstrapwitness_from_bytes: u9,
    bootstrapwitness_from_hex: f9,
    bootstrapwitness_from_json: h9,
    bootstrapwitness_new: x9,
    bootstrapwitness_signature: m9,
    bootstrapwitness_to_bytes: p9,
    bootstrapwitness_to_hex: w9,
    bootstrapwitness_to_js_value: b9,
    bootstrapwitness_to_json: g9,
    bootstrapwitness_vkey: y9,
    bootstrapwitnesses_add: C9,
    bootstrapwitnesses_get: z9,
    bootstrapwitnesses_len: E9,
    bootstrapwitnesses_new: S9,
    byronaddress_attributes: P$,
    byronaddress_byron_protocol_magic: F$,
    byronaddress_from_address: M$,
    byronaddress_from_base58: R$,
    byronaddress_from_bytes: N$,
    byronaddress_icarus_from_key: D$,
    byronaddress_is_valid: $$,
    byronaddress_network_id: T$,
    byronaddress_to_address: U$,
    byronaddress_to_base58: O$,
    byronaddress_to_bytes: L$,
    calculate_ex_units_ceil_cost: JD,
    certificate_as_genesis_key_delegation: Gm,
    certificate_as_move_instantaneous_rewards_cert: tv,
    certificate_as_pool_registration: Zm,
    certificate_as_pool_retirement: Jm,
    certificate_as_stake_delegation: Km,
    certificate_as_stake_deregistration: qm,
    certificate_as_stake_registration: Xm,
    certificate_from_bytes: Tm,
    certificate_from_hex: Dm,
    certificate_from_json: Mm,
    certificate_kind: Ym,
    certificate_new_genesis_key_delegation: Am,
    certificate_new_move_instantaneous_rewards_cert: Hm,
    certificate_new_pool_registration: Vm,
    certificate_new_pool_retirement: Bm,
    certificate_new_stake_delegation: Qm,
    certificate_new_stake_deregistration: Wm,
    certificate_new_stake_registration: Im,
    certificate_to_bytes: Pm,
    certificate_to_hex: Rm,
    certificate_to_js_value: Um,
    certificate_to_json: $m,
    certificates_add: ab,
    certificates_from_bytes: Gg,
    certificates_from_hex: eb,
    certificates_from_json: nb,
    certificates_get: sb,
    certificates_len: L5,
    certificates_new: ob,
    certificates_to_bytes: Jg,
    certificates_to_hex: tb,
    certificates_to_js_value: rb,
    certificates_to_json: _b,
    constrplutusdata_alternative: nF,
    constrplutusdata_data: oF,
    constrplutusdata_from_bytes: eF,
    constrplutusdata_from_hex: rF,
    constrplutusdata_new: sF,
    constrplutusdata_to_bytes: tF,
    constrplutusdata_to_hex: _F,
    costmdls_from_bytes: mF,
    costmdls_from_hex: kF,
    costmdls_from_json: SF,
    costmdls_get: OF,
    costmdls_insert: CF,
    costmdls_keys: LF,
    costmdls_len: zF,
    costmdls_new: EF,
    costmdls_retain_language_versions: NF,
    costmdls_to_bytes: yF,
    costmdls_to_hex: vF,
    costmdls_to_js_value: jF,
    costmdls_to_json: xF,
    costmodel_from_bytes: cF,
    costmodel_from_hex: lF,
    costmodel_from_json: wF,
    costmodel_get: bF,
    costmodel_len: VT,
    costmodel_new: fF,
    costmodel_set: gF,
    costmodel_to_bytes: iF,
    costmodel_to_hex: dF,
    costmodel_to_js_value: uF,
    costmodel_to_json: pF,
    create_send_all: o$,
    datacost_coins_per_byte: Kg,
    datacost_new_coins_per_byte: qg,
    datacost_new_coins_per_word: Xg,
    datahash_from_bech32: EC,
    datahash_from_bytes: SC,
    datahash_from_hex: zC,
    datahash_to_bech32: NO,
    datahash_to_bytes: VO,
    datahash_to_hex: hO,
    datumsource_new: m7,
    datumsource_new_ref_input: v7,
    decode_arbitrary_bytes_from_metadatum: SN,
    decode_metadatum_to_json_str: zN,
    decode_plutus_datum_to_json_str: UT,
    decrypt_with_password: jS,
    dnsrecordaoraaaa_from_bytes: t1,
    dnsrecordaoraaaa_from_hex: _1,
    dnsrecordaoraaaa_from_json: o1,
    dnsrecordaoraaaa_new: s1,
    dnsrecordaoraaaa_record: a1,
    dnsrecordaoraaaa_to_bytes: Gv,
    dnsrecordaoraaaa_to_hex: e1,
    dnsrecordaoraaaa_to_js_value: n1,
    dnsrecordaoraaaa_to_json: r1,
    dnsrecordsrv_from_bytes: c1,
    dnsrecordsrv_from_hex: l1,
    dnsrecordsrv_from_json: p1,
    dnsrecordsrv_new: u1,
    dnsrecordsrv_record: Q5,
    dnsrecordsrv_to_bytes: i1,
    dnsrecordsrv_to_hex: d1,
    dnsrecordsrv_to_js_value: B5,
    dnsrecordsrv_to_json: kS,
    ed25519keyhash_from_bech32: X9,
    ed25519keyhash_from_bytes: A9,
    ed25519keyhash_from_hex: K9,
    ed25519keyhash_to_bech32: Y9,
    ed25519keyhash_to_bytes: H9,
    ed25519keyhash_to_hex: q9,
    ed25519keyhashes_add: uy,
    ed25519keyhashes_from_bytes: oy,
    ed25519keyhashes_from_hex: ay,
    ed25519keyhashes_from_json: dy,
    ed25519keyhashes_get: py,
    ed25519keyhashes_len: b5,
    ed25519keyhashes_new: ly,
    ed25519keyhashes_to_bytes: ny,
    ed25519keyhashes_to_hex: sy,
    ed25519keyhashes_to_js_value: cy,
    ed25519keyhashes_to_json: iy,
    ed25519keyhashes_to_option: wy,
    ed25519signature_from_bech32: $9,
    ed25519signature_from_bytes: M9,
    ed25519signature_from_hex: U9,
    ed25519signature_to_bech32: R9,
    ed25519signature_to_bytes: T9,
    ed25519signature_to_hex: D9,
    encode_arbitrary_bytes_as_metadatum: jN,
    encode_json_str_to_metadatum: EN,
    encode_json_str_to_native_script: I8,
    encode_json_str_to_plutus_datum: $T,
    encrypt_with_password: xS,
    enterpriseaddress_from_address: sU,
    enterpriseaddress_new: nU,
    enterpriseaddress_payment_cred: UU,
    enterpriseaddress_to_address: oU,
    exunitprices_from_bytes: TF,
    exunitprices_from_hex: DF,
    exunitprices_from_json: MF,
    exunitprices_mem_price: IF,
    exunitprices_new: QF,
    exunitprices_step_price: WF,
    exunitprices_to_bytes: PF,
    exunitprices_to_hex: RF,
    exunitprices_to_js_value: UF,
    exunitprices_to_json: $F,
    exunits_from_bytes: AF,
    exunits_from_hex: YF,
    exunits_from_json: KF,
    exunits_mem: ZF,
    exunits_new: GF,
    exunits_steps: JF,
    exunits_to_bytes: BF,
    exunits_to_hex: HF,
    exunits_to_js_value: qF,
    exunits_to_json: XF,
    fixedtransaction_auxiliary_data: mR,
    fixedtransaction_body: lR,
    fixedtransaction_from_bytes: sR,
    fixedtransaction_from_hex: iR,
    fixedtransaction_is_valid: hR,
    fixedtransaction_new: cR,
    fixedtransaction_new_with_auxiliary: dR,
    fixedtransaction_raw_auxiliary_data: vR,
    fixedtransaction_raw_body: pR,
    fixedtransaction_raw_witness_set: gR,
    fixedtransaction_set_auxiliary_data: yR,
    fixedtransaction_set_body: uR,
    fixedtransaction_set_is_valid: bR,
    fixedtransaction_set_witness_set: wR,
    fixedtransaction_to_bytes: oR,
    fixedtransaction_to_hex: aR,
    fixedtransaction_witness_set: fR,
    generaltransactionmetadata_from_bytes: KL,
    generaltransactionmetadata_from_hex: JL,
    generaltransactionmetadata_from_json: eN,
    generaltransactionmetadata_get: oN,
    generaltransactionmetadata_insert: nN,
    generaltransactionmetadata_keys: sN,
    generaltransactionmetadata_len: rN,
    generaltransactionmetadata_new: _N,
    generaltransactionmetadata_to_bytes: qL,
    generaltransactionmetadata_to_hex: ZL,
    generaltransactionmetadata_to_js_value: tN,
    generaltransactionmetadata_to_json: GL,
    genesisdelegatehash_from_bech32: nC,
    genesisdelegatehash_from_bytes: rC,
    genesisdelegatehash_from_hex: oC,
    genesisdelegatehash_to_bech32: SO,
    genesisdelegatehash_to_bytes: $O,
    genesisdelegatehash_to_hex: pO,
    genesishash_from_bech32: aC,
    genesishash_from_bytes: sC,
    genesishash_from_hex: iC,
    genesishash_to_bech32: EO,
    genesishash_to_bytes: UO,
    genesishash_to_hex: uO,
    genesishashes_add: z6,
    genesishashes_from_bytes: m6,
    genesishashes_from_hex: k6,
    genesishashes_from_json: S6,
    genesishashes_get: E6,
    genesishashes_len: x5,
    genesishashes_new: cS,
    genesishashes_to_bytes: y6,
    genesishashes_to_hex: v6,
    genesishashes_to_js_value: j6,
    genesishashes_to_json: x6,
    genesiskeydelegation_from_bytes: pm,
    genesiskeydelegation_from_hex: wm,
    genesiskeydelegation_from_json: bm,
    genesiskeydelegation_genesis_delegate_hash: ym,
    genesiskeydelegation_genesishash: hm,
    genesiskeydelegation_new: vm,
    genesiskeydelegation_to_bytes: lm,
    genesiskeydelegation_to_hex: um,
    genesiskeydelegation_to_js_value: gm,
    genesiskeydelegation_to_json: fm,
    genesiskeydelegation_vrf_keyhash: mm,
    get_deposit: $8,
    get_implicit_input: D8,
    hash_auxiliary_data: F8,
    hash_plutus_data: T8,
    hash_script_data: R8,
    hash_transaction: P8,
    header_body_signature: _j,
    header_from_bytes: q2,
    header_from_hex: Z2,
    header_from_json: tj,
    header_header_body: ej,
    header_new: rj,
    header_to_bytes: X2,
    header_to_hex: K2,
    header_to_js_value: G2,
    header_to_json: J2,
    headerbody_block_body_hash: $j,
    headerbody_block_body_size: Dj,
    headerbody_block_number: Sj,
    headerbody_from_bytes: yj,
    headerbody_from_hex: vj,
    headerbody_from_json: jj,
    headerbody_has_nonce_and_leader_vrf: Nj,
    headerbody_has_vrf_result: Tj,
    headerbody_issuer_vkey: Oj,
    headerbody_leader_vrf_or_nothing: Pj,
    headerbody_new: Ij,
    headerbody_new_headerbody: Wj,
    headerbody_nonce_vrf_or_nothing: Fj,
    headerbody_operational_cert: Uj,
    headerbody_prev_hash: Cj,
    headerbody_protocol_version: Mj,
    headerbody_slot: Ej,
    headerbody_slot_bignum: zj,
    headerbody_to_bytes: hj,
    headerbody_to_hex: mj,
    headerbody_to_js_value: xj,
    headerbody_to_json: kj,
    headerbody_vrf_result_or_nothing: Rj,
    headerbody_vrf_vkey: Lj,
    inputswithscriptwitness_add: p7,
    inputswithscriptwitness_get: u7,
    inputswithscriptwitness_len: w7,
    inputswithscriptwitness_new: l7,
    inputwithscriptwitness_input: c7,
    inputwithscriptwitness_new_with_native_script_witness: a7,
    inputwithscriptwitness_new_with_plutus_witness: i7,
    int_as_i32: a8,
    int_as_i32_or_fail: i8,
    int_as_i32_or_nothing: W8,
    int_as_negative: s8,
    int_as_positive: o8,
    int_from_bytes: qE,
    int_from_hex: ZE,
    int_from_json: t8,
    int_from_str: d8,
    int_is_positive: n8,
    int_new: e8,
    int_new_i32: r8,
    int_new_negative: _8,
    int_to_bytes: XE,
    int_to_hex: KE,
    int_to_js_value: GE,
    int_to_json: JE,
    int_to_str: c8,
    ipv4_from_bytes: Cv,
    ipv4_from_hex: Lv,
    ipv4_from_json: Pv,
    ipv4_ip: Rv,
    ipv4_new: Tv,
    ipv4_to_bytes: zv,
    ipv4_to_hex: Ov,
    ipv4_to_js_value: Fv,
    ipv4_to_json: Nv,
    ipv6_from_bytes: Uv,
    ipv6_from_hex: Iv,
    ipv6_from_json: Vv,
    ipv6_ip: Av,
    ipv6_new: Bv,
    ipv6_to_bytes: $v,
    ipv6_to_hex: Mv,
    ipv6_to_js_value: Qv,
    ipv6_to_json: Wv,
    kessignature_from_bytes: MC,
    kessignature_to_bytes: UC,
    kesvkey_from_bech32: RC,
    kesvkey_from_bytes: TC,
    kesvkey_from_hex: DC,
    kesvkey_to_bech32: TO,
    kesvkey_to_bytes: HO,
    kesvkey_to_hex: vO,
    language_from_bytes: _P,
    language_from_hex: nP,
    language_from_json: aP,
    language_kind: dP,
    language_new_plutus_v1: iP,
    language_new_plutus_v2: cP,
    language_to_bytes: eP,
    language_to_hex: rP,
    language_to_js_value: sP,
    language_to_json: oP,
    languages_add: wP,
    languages_get: uP,
    languages_len: BT,
    languages_list: fP,
    languages_new: pP,
    legacydaedalusprivatekey_as_bytes: Q9,
    legacydaedalusprivatekey_chaincode: V9,
    legacydaedalusprivatekey_from_bytes: W9,
    linearfee_coefficient: qD,
    linearfee_constant: XD,
    linearfee_new: KD,
    make_daedalus_bootstrap_witness: O8,
    make_icarus_bootstrap_witness: L8,
    make_vkey_witness: N8,
    memory: _g,
    metadatalist_add: SL,
    metadatalist_from_bytes: vL,
    metadatalist_from_hex: xL,
    metadatalist_get: jL,
    metadatalist_len: QT,
    metadatalist_new: _R,
    metadatalist_to_bytes: mL,
    metadatalist_to_hex: kL,
    metadatamap_from_bytes: iL,
    metadatamap_from_hex: dL,
    metadatamap_get: wL,
    metadatamap_get_i32: gL,
    metadatamap_get_str: fL,
    metadatamap_has: bL,
    metadatamap_insert: lL,
    metadatamap_insert_i32: uL,
    metadatamap_insert_str: pL,
    metadatamap_keys: hL,
    metadatamap_len: IT,
    metadatamap_new: GT,
    metadatamap_to_bytes: aL,
    metadatamap_to_hex: cL,
    min_ada_for_output: U8,
    min_ada_required: M8,
    min_fee: ZD,
    min_script_fee: GD,
    mint_as_negative_multiasset: _5,
    mint_as_positive_multiasset: e5,
    mint_from_bytes: B3,
    mint_from_hex: H3,
    mint_from_json: q3,
    mint_get: J3,
    mint_get_all: G3,
    mint_insert: Z3,
    mint_keys: t5,
    mint_len: T5,
    mint_new: gS,
    mint_new_from_entry: K3,
    mint_to_bytes: V3,
    mint_to_hex: A3,
    mint_to_js_value: X3,
    mint_to_json: Y3,
    mintassets_get: I3,
    mintassets_insert: M3,
    mintassets_keys: W3,
    mintassets_len: P5,
    mintassets_new: fS,
    mintassets_new_from_entry: U3,
    mintbuilder_add_asset: OU,
    mintbuilder_build: NU,
    mintbuilder_get_native_scripts: FU,
    mintbuilder_get_plutus_witnesses: PU,
    mintbuilder_get_redeeemers: RU,
    mintbuilder_get_ref_inputs: TU,
    mintbuilder_has_native_scripts: $U,
    mintbuilder_has_plutus_scripts: DU,
    mintbuilder_new: CU,
    mintbuilder_set_asset: LU,
    mintwitness_new_native_script: SU,
    mintwitness_new_plutus_script: EU,
    mirtostakecredentials_from_bytes: rv,
    mirtostakecredentials_from_hex: ov,
    mirtostakecredentials_from_json: iv,
    mirtostakecredentials_get: dv,
    mirtostakecredentials_insert: cv,
    mirtostakecredentials_keys: lv,
    mirtostakecredentials_len: O5,
    mirtostakecredentials_new: G5,
    mirtostakecredentials_to_bytes: _v,
    mirtostakecredentials_to_hex: nv,
    mirtostakecredentials_to_js_value: av,
    mirtostakecredentials_to_json: sv,
    moveinstantaneousreward_as_to_other_pot: jv,
    moveinstantaneousreward_as_to_stake_creds: Sv,
    moveinstantaneousreward_from_bytes: wv,
    moveinstantaneousreward_from_hex: gv,
    moveinstantaneousreward_from_json: yv,
    moveinstantaneousreward_kind: xv,
    moveinstantaneousreward_new_to_other_pot: mv,
    moveinstantaneousreward_new_to_stake_creds: vv,
    moveinstantaneousreward_pot: kv,
    moveinstantaneousreward_to_bytes: uv,
    moveinstantaneousreward_to_hex: fv,
    moveinstantaneousreward_to_js_value: hv,
    moveinstantaneousreward_to_json: bv,
    moveinstantaneousrewardscert_from_bytes: jm,
    moveinstantaneousrewardscert_from_hex: Em,
    moveinstantaneousrewardscert_from_json: Om,
    moveinstantaneousrewardscert_move_instantaneous_reward: Lm,
    moveinstantaneousrewardscert_new: Nm,
    moveinstantaneousrewardscert_to_bytes: xm,
    moveinstantaneousrewardscert_to_hex: Sm,
    moveinstantaneousrewardscert_to_js_value: Cm,
    moveinstantaneousrewardscert_to_json: zm,
    multiasset_from_bytes: j3,
    multiasset_from_hex: E3,
    multiasset_from_json: O3,
    multiasset_get: N3,
    multiasset_get_asset: P3,
    multiasset_insert: L3,
    multiasset_keys: T3,
    multiasset_len: F5,
    multiasset_new: wS,
    multiasset_set_asset: F3,
    multiasset_sub: R3,
    multiasset_to_bytes: x3,
    multiasset_to_hex: S3,
    multiasset_to_js_value: C3,
    multiasset_to_json: z3,
    multihostname_dns_name: B1,
    multihostname_from_bytes: U1,
    multihostname_from_hex: I1,
    multihostname_from_json: V1,
    multihostname_new: A1,
    multihostname_to_bytes: $1,
    multihostname_to_hex: M1,
    multihostname_to_js_value: Q1,
    multihostname_to_json: W1,
    nativescript_as_script_all: J4,
    nativescript_as_script_any: G4,
    nativescript_as_script_n_of_k: t6,
    nativescript_as_script_pubkey: Z4,
    nativescript_as_timelock_expiry: _6,
    nativescript_as_timelock_start: e6,
    nativescript_from_bytes: $4,
    nativescript_from_hex: M4,
    nativescript_from_json: Q4,
    nativescript_get_required_signers: r6,
    nativescript_hash: V4,
    nativescript_kind: K4,
    nativescript_new_script_all: A4,
    nativescript_new_script_any: H4,
    nativescript_new_script_n_of_k: Y4,
    nativescript_new_script_pubkey: B4,
    nativescript_new_timelock_expiry: q4,
    nativescript_new_timelock_start: X4,
    nativescript_to_bytes: D4,
    nativescript_to_hex: U4,
    nativescript_to_js_value: W4,
    nativescript_to_json: I4,
    nativescripts_add: s6,
    nativescripts_get: o6,
    nativescripts_len: k5,
    nativescripts_new: uS,
    networkid_from_bytes: o5,
    networkid_from_hex: a5,
    networkid_from_json: d5,
    networkid_kind: u5,
    networkid_mainnet: p5,
    networkid_testnet: l5,
    networkid_to_bytes: n5,
    networkid_to_hex: s5,
    networkid_to_js_value: c5,
    networkid_to_json: i5,
    networkinfo_mainnet: w$,
    networkinfo_network_id: c$,
    networkinfo_new: i$,
    networkinfo_protocol_magic: d$,
    networkinfo_testnet: u$,
    networkinfo_testnet_preprod: p$,
    networkinfo_testnet_preview: l$,
    nonce_from_bytes: QC,
    nonce_from_hex: BC,
    nonce_from_json: YC,
    nonce_get_hash: KC,
    nonce_new_from_hash: qC,
    nonce_new_identity: XC,
    nonce_to_bytes: WC,
    nonce_to_hex: VC,
    nonce_to_js_value: HC,
    nonce_to_json: AC,
    operationalcert_from_bytes: sj,
    operationalcert_from_hex: ij,
    operationalcert_from_json: lj,
    operationalcert_hot_vkey: pj,
    operationalcert_kes_period: wj,
    operationalcert_new: gj,
    operationalcert_sequence_number: uj,
    operationalcert_sigma: fj,
    operationalcert_to_bytes: oj,
    operationalcert_to_hex: aj,
    operationalcert_to_js_value: dj,
    operationalcert_to_json: cj,
    outputdatum_data: T4,
    outputdatum_data_hash: P4,
    outputdatum_new_data: F4,
    outputdatum_new_data_hash: N4,
    plutusdata_as_bytes: WP,
    plutusdata_as_constr_plutus_data: $P,
    plutusdata_as_integer: IP,
    plutusdata_as_list: MP,
    plutusdata_as_map: UP,
    plutusdata_from_address: QP,
    plutusdata_from_bytes: EP,
    plutusdata_from_hex: CP,
    plutusdata_from_json: KT,
    plutusdata_kind: DP,
    plutusdata_new_bytes: RP,
    plutusdata_new_constr_plutus_data: OP,
    plutusdata_new_empty_constr_plutus_data: LP,
    plutusdata_new_integer: TP,
    plutusdata_new_list: PP,
    plutusdata_new_map: FP,
    plutusdata_new_single_value_constr_plutus_data: NP,
    plutusdata_to_bytes: SP,
    plutusdata_to_hex: zP,
    plutusdata_to_json: ZT,
    plutuslist_add: KP,
    plutuslist_from_bytes: AP,
    plutuslist_from_hex: YP,
    plutuslist_get: qP,
    plutuslist_len: YT,
    plutuslist_new: XP,
    plutuslist_to_bytes: BP,
    plutuslist_to_hex: HP,
    plutusmap_from_bytes: hP,
    plutusmap_from_hex: mP,
    plutusmap_get: kP,
    plutusmap_insert: vP,
    plutusmap_keys: xP,
    plutusmap_len: AT,
    plutusmap_new: JT,
    plutusmap_to_bytes: bP,
    plutusmap_to_hex: yP,
    plutusscript_bytes: DN,
    plutusscript_from_bytes: LN,
    plutusscript_from_bytes_v2: $N,
    plutusscript_from_bytes_with_version: UN,
    plutusscript_from_hex: FN,
    plutusscript_from_hex_with_version: MN,
    plutusscript_hash: IN,
    plutusscript_language_version: WN,
    plutusscript_new: PN,
    plutusscript_new_v2: TN,
    plutusscript_new_with_version: RN,
    plutusscript_to_bytes: ON,
    plutusscript_to_hex: NN,
    plutusscripts_add: JN,
    plutusscripts_from_bytes: BN,
    plutusscripts_from_hex: HN,
    plutusscripts_from_json: qN,
    plutusscripts_get: ZN,
    plutusscripts_len: WT,
    plutusscripts_new: KN,
    plutusscripts_to_bytes: VN,
    plutusscripts_to_hex: AN,
    plutusscripts_to_js_value: XN,
    plutusscripts_to_json: YN,
    plutusscriptsource_new: g7,
    plutusscriptsource_new_ref_input: b7,
    plutusscriptsource_new_ref_input_with_lang_ver: h7,
    plutuswitness_datum: C7,
    plutuswitness_new: x7,
    plutuswitness_new_with_ref: j7,
    plutuswitness_new_with_ref_without_datum: E7,
    plutuswitness_new_without_datum: S7,
    plutuswitness_redeemer: O7,
    plutuswitness_script: z7,
    plutuswitnesses_add: F7,
    plutuswitnesses_get: N7,
    plutuswitnesses_len: rL,
    plutuswitnesses_new: oL,
    pointer_cert_index: wU,
    pointer_cert_index_bignum: bU,
    pointer_new: dU,
    pointer_new_pointer: lU,
    pointer_slot: pU,
    pointer_slot_bignum: fU,
    pointer_tx_index: uU,
    pointer_tx_index_bignum: gU,
    pointeraddress_from_address: xU,
    pointeraddress_new: yU,
    pointeraddress_payment_cred: mU,
    pointeraddress_stake_pointer: vU,
    pointeraddress_to_address: kU,
    poolmetadata_from_bytes: ck,
    poolmetadata_from_hex: lk,
    poolmetadata_from_json: wk,
    poolmetadata_new: bk,
    poolmetadata_pool_metadata_hash: gk,
    poolmetadata_to_bytes: ik,
    poolmetadata_to_hex: dk,
    poolmetadata_to_js_value: uk,
    poolmetadata_to_json: pk,
    poolmetadata_url: fk,
    poolmetadatahash_from_bech32: bC,
    poolmetadatahash_from_bytes: gC,
    poolmetadatahash_from_hex: hC,
    poolmetadatahash_to_bech32: CO,
    poolmetadatahash_to_bytes: IO,
    poolmetadatahash_to_hex: fO,
    poolparams_cost: Dy,
    poolparams_from_bytes: zy,
    poolparams_from_hex: Oy,
    poolparams_from_json: Fy,
    poolparams_margin: $y,
    poolparams_new: Qy,
    poolparams_operator: Py,
    poolparams_pledge: Ry,
    poolparams_pool_metadata: Wy,
    poolparams_pool_owners: My,
    poolparams_relays: Iy,
    poolparams_reward_account: Uy,
    poolparams_to_bytes: Ey,
    poolparams_to_hex: Cy,
    poolparams_to_js_value: Ny,
    poolparams_to_json: Ly,
    poolparams_vrf_keyhash: Ty,
    poolregistration_from_bytes: Ay,
    poolregistration_from_hex: Yy,
    poolregistration_from_json: Ky,
    poolregistration_new: Jy,
    poolregistration_pool_params: Zy,
    poolregistration_to_bytes: By,
    poolregistration_to_hex: Hy,
    poolregistration_to_js_value: qy,
    poolregistration_to_json: Xy,
    poolretirement_epoch: im,
    poolretirement_from_bytes: em,
    poolretirement_from_hex: rm,
    poolretirement_from_json: sm,
    poolretirement_new: cm,
    poolretirement_pool_keyhash: am,
    poolretirement_to_bytes: tm,
    poolretirement_to_hex: _m,
    poolretirement_to_js_value: om,
    poolretirement_to_json: nm,
    privatekey_as_bytes: yz,
    privatekey_from_bech32: bz,
    privatekey_from_extended_bytes: mz,
    privatekey_from_hex: jz,
    privatekey_from_normal_bytes: vz,
    privatekey_generate_ed25519: fz,
    privatekey_generate_ed25519extended: gz,
    privatekey_sign: kz,
    privatekey_to_bech32: hz,
    privatekey_to_hex: xz,
    privatekey_to_public: wz,
    proposedprotocolparameterupdates_from_bytes: I6,
    proposedprotocolparameterupdates_from_hex: Q6,
    proposedprotocolparameterupdates_from_json: A6,
    proposedprotocolparameterupdates_get: Y6,
    proposedprotocolparameterupdates_insert: H6,
    proposedprotocolparameterupdates_keys: X6,
    proposedprotocolparameterupdates_len: S5,
    proposedprotocolparameterupdates_new: J5,
    proposedprotocolparameterupdates_to_bytes: M6,
    proposedprotocolparameterupdates_to_hex: W6,
    proposedprotocolparameterupdates_to_js_value: B6,
    proposedprotocolparameterupdates_to_json: V6,
    protocolparamupdate_ada_per_utxo_byte: Ax,
    protocolparamupdate_collateral_percentage: r2,
    protocolparamupdate_cost_models: Yx,
    protocolparamupdate_d: Ux,
    protocolparamupdate_execution_costs: qx,
    protocolparamupdate_expansion_rate: Rx,
    protocolparamupdate_extra_entropy: Mx,
    protocolparamupdate_from_bytes: ix,
    protocolparamupdate_from_hex: dx,
    protocolparamupdate_from_json: ux,
    protocolparamupdate_key_deposit: Sx,
    protocolparamupdate_max_block_body_size: yx,
    protocolparamupdate_max_block_ex_units: Gx,
    protocolparamupdate_max_block_header_size: xx,
    protocolparamupdate_max_collateral_inputs: o2,
    protocolparamupdate_max_epoch: Ox,
    protocolparamupdate_max_tx_ex_units: Zx,
    protocolparamupdate_max_tx_size: vx,
    protocolparamupdate_max_value_size: e2,
    protocolparamupdate_min_pool_cost: Vx,
    protocolparamupdate_minfee_a: fx,
    protocolparamupdate_minfee_b: bx,
    protocolparamupdate_n_opt: Nx,
    protocolparamupdate_new: s2,
    protocolparamupdate_pool_deposit: zx,
    protocolparamupdate_pool_pledge_influence: Px,
    protocolparamupdate_protocol_version: Wx,
    protocolparamupdate_set_ada_per_utxo_byte: Bx,
    protocolparamupdate_set_collateral_percentage: _2,
    protocolparamupdate_set_cost_models: Hx,
    protocolparamupdate_set_execution_costs: Xx,
    protocolparamupdate_set_expansion_rate: Tx,
    protocolparamupdate_set_key_deposit: jx,
    protocolparamupdate_set_max_block_body_size: hx,
    protocolparamupdate_set_max_block_ex_units: Jx,
    protocolparamupdate_set_max_block_header_size: kx,
    protocolparamupdate_set_max_collateral_inputs: n2,
    protocolparamupdate_set_max_epoch: Cx,
    protocolparamupdate_set_max_tx_ex_units: Kx,
    protocolparamupdate_set_max_tx_size: mx,
    protocolparamupdate_set_max_value_size: t2,
    protocolparamupdate_set_min_pool_cost: Qx,
    protocolparamupdate_set_minfee_a: wx,
    protocolparamupdate_set_minfee_b: gx,
    protocolparamupdate_set_n_opt: Lx,
    protocolparamupdate_set_pool_deposit: Ex,
    protocolparamupdate_set_pool_pledge_influence: Fx,
    protocolparamupdate_set_protocol_version: Ix,
    protocolparamupdate_set_treasury_growth_rate: Dx,
    protocolparamupdate_to_bytes: ax,
    protocolparamupdate_to_hex: cx,
    protocolparamupdate_to_js_value: px,
    protocolparamupdate_to_json: lx,
    protocolparamupdate_treasury_growth_rate: $x,
    protocolversion_from_bytes: Z6,
    protocolversion_from_hex: G6,
    protocolversion_from_json: _x,
    protocolversion_major: rx,
    protocolversion_minor: nx,
    protocolversion_new: ox,
    protocolversion_to_bytes: K6,
    protocolversion_to_hex: J6,
    protocolversion_to_js_value: ex,
    protocolversion_to_json: tx,
    publickey_as_bytes: MO,
    publickey_from_bech32: Ez,
    publickey_from_bytes: Cz,
    publickey_from_hex: Fz,
    publickey_hash: Lz,
    publickey_to_bech32: zz,
    publickey_to_hex: Nz,
    publickey_verify: Oz,
    publickeys_add: F9,
    publickeys_get: N9,
    publickeys_new: L9,
    publickeys_size: cO,
    redeemer_data: aT,
    redeemer_ex_units: iT,
    redeemer_from_bytes: GP,
    redeemer_from_hex: eT,
    redeemer_from_json: nT,
    redeemer_index: sT,
    redeemer_new: cT,
    redeemer_tag: oT,
    redeemer_to_bytes: JP,
    redeemer_to_hex: tT,
    redeemer_to_js_value: rT,
    redeemer_to_json: _T,
    redeemers_add: FT,
    redeemers_from_bytes: ST,
    redeemers_from_hex: zT,
    redeemers_from_json: LT,
    redeemers_get: NT,
    redeemers_len: XT,
    redeemers_new: rR,
    redeemers_to_bytes: jT,
    redeemers_to_hex: ET,
    redeemers_to_js_value: OT,
    redeemers_to_json: CT,
    redeemers_total_ex_units: PT,
    redeemertag_from_bytes: pT,
    redeemertag_from_hex: wT,
    redeemertag_from_json: bT,
    redeemertag_kind: kT,
    redeemertag_new_cert: mT,
    redeemertag_new_mint: yT,
    redeemertag_new_reward: vT,
    redeemertag_new_spend: hT,
    redeemertag_to_bytes: lT,
    redeemertag_to_hex: uT,
    redeemertag_to_js_value: gT,
    redeemertag_to_json: fT,
    relay_as_multi_host_name: sk,
    relay_as_single_host_addr: nk,
    relay_as_single_host_name: ok,
    relay_from_bytes: X1,
    relay_from_hex: K1,
    relay_from_json: G1,
    relay_kind: rk,
    relay_new_multi_host_name: _k,
    relay_new_single_host_addr: tk,
    relay_new_single_host_name: ek,
    relay_to_bytes: Y1,
    relay_to_hex: q1,
    relay_to_js_value: J1,
    relay_to_json: Z1,
    relays_add: jy,
    relays_from_bytes: by,
    relays_from_hex: yy,
    relays_from_json: ky,
    relays_get: xy,
    relays_len: h5,
    relays_new: rS,
    relays_to_bytes: gy,
    relays_to_hex: hy,
    relays_to_js_value: vy,
    relays_to_json: my,
    rewardaddress_from_address: iU,
    rewardaddress_new: IU,
    rewardaddress_payment_cred: MU,
    rewardaddress_to_address: aU,
    rewardaddresses_add: $k,
    rewardaddresses_from_bytes: Lk,
    rewardaddresses_from_hex: Fk,
    rewardaddresses_from_json: Rk,
    rewardaddresses_get: Dk,
    rewardaddresses_len: m5,
    rewardaddresses_new: sS,
    rewardaddresses_to_bytes: Ok,
    rewardaddresses_to_hex: Nk,
    rewardaddresses_to_js_value: Tk,
    rewardaddresses_to_json: Pk,
    scriptall_from_bytes: C0,
    scriptall_from_hex: L0,
    scriptall_from_json: P0,
    scriptall_native_scripts: T0,
    scriptall_new: R0,
    scriptall_to_bytes: z0,
    scriptall_to_hex: O0,
    scriptall_to_js_value: F0,
    scriptall_to_json: N0,
    scriptany_from_bytes: $0,
    scriptany_from_hex: M0,
    scriptany_from_json: W0,
    scriptany_native_scripts: R5,
    scriptany_new: aS,
    scriptany_to_bytes: D0,
    scriptany_to_hex: U0,
    scriptany_to_js_value: I0,
    scriptany_to_json: yS,
    scriptdatahash_from_bech32: OC,
    scriptdatahash_from_bytes: CC,
    scriptdatahash_from_hex: LC,
    scriptdatahash_to_bech32: FO,
    scriptdatahash_to_bytes: BO,
    scriptdatahash_to_hex: yO,
    scripthash_from_bech32: J9,
    scripthash_from_bytes: Z9,
    scripthash_from_hex: G9,
    scripthash_to_bech32: jO,
    scripthash_to_bytes: RO,
    scripthash_to_hex: lO,
    scripthashes_add: $6,
    scripthashes_from_bytes: L6,
    scripthashes_from_hex: F6,
    scripthashes_from_json: R6,
    scripthashes_get: D6,
    scripthashes_len: j5,
    scripthashes_new: dS,
    scripthashes_to_bytes: O6,
    scripthashes_to_hex: N6,
    scripthashes_to_js_value: T6,
    scripthashes_to_json: P6,
    scriptnofk_from_bytes: B0,
    scriptnofk_from_hex: H0,
    scriptnofk_from_json: q0,
    scriptnofk_n: E5,
    scriptnofk_native_scripts: K0,
    scriptnofk_new: Z0,
    scriptnofk_to_bytes: V0,
    scriptnofk_to_hex: A0,
    scriptnofk_to_js_value: X0,
    scriptnofk_to_json: Y0,
    scriptpubkey_addr_keyhash: j0,
    scriptpubkey_from_bytes: h0,
    scriptpubkey_from_hex: m0,
    scriptpubkey_from_json: x0,
    scriptpubkey_new: S0,
    scriptpubkey_to_bytes: b0,
    scriptpubkey_to_hex: y0,
    scriptpubkey_to_js_value: k0,
    scriptpubkey_to_json: v0,
    scriptref_from_bytes: h4,
    scriptref_from_hex: m4,
    scriptref_from_json: x4,
    scriptref_is_native_script: E4,
    scriptref_is_plutus_script: z4,
    scriptref_native_script: C4,
    scriptref_new_native_script: j4,
    scriptref_new_plutus_script: S4,
    scriptref_plutus_script: O4,
    scriptref_to_bytes: b4,
    scriptref_to_hex: y4,
    scriptref_to_js_value: k4,
    scriptref_to_json: v4,
    singlehostaddr_from_bytes: g1,
    singlehostaddr_from_hex: h1,
    singlehostaddr_from_json: v1,
    singlehostaddr_ipv4: x1,
    singlehostaddr_ipv6: j1,
    singlehostaddr_new: S1,
    singlehostaddr_port: k1,
    singlehostaddr_to_bytes: f1,
    singlehostaddr_to_hex: b1,
    singlehostaddr_to_js_value: m1,
    singlehostaddr_to_json: y1,
    singlehostname_dns_name: nS,
    singlehostname_from_bytes: C1,
    singlehostname_from_hex: L1,
    singlehostname_from_json: P1,
    singlehostname_new: R1,
    singlehostname_port: T1,
    singlehostname_to_bytes: z1,
    singlehostname_to_hex: O1,
    singlehostname_to_js_value: F1,
    singlehostname_to_json: N1,
    stakecredential_from_bytes: k$,
    stakecredential_from_hex: j$,
    stakecredential_from_json: z$,
    stakecredential_from_keyhash: g$,
    stakecredential_from_scripthash: b$,
    stakecredential_kind: m$,
    stakecredential_to_bytes: v$,
    stakecredential_to_hex: x$,
    stakecredential_to_js_value: E$,
    stakecredential_to_json: S$,
    stakecredential_to_keyhash: h$,
    stakecredential_to_scripthash: y$,
    stakecredentials_add: zk,
    stakecredentials_from_bytes: mk,
    stakecredentials_from_hex: kk,
    stakecredentials_from_json: Sk,
    stakecredentials_get: Ek,
    stakecredentials_len: y5,
    stakecredentials_new: oS,
    stakecredentials_to_bytes: yk,
    stakecredentials_to_hex: vk,
    stakecredentials_to_js_value: jk,
    stakecredentials_to_json: xk,
    stakedelegation_from_bytes: qh,
    stakedelegation_from_hex: Zh,
    stakedelegation_from_json: ty,
    stakedelegation_new: _y,
    stakedelegation_pool_keyhash: X5,
    stakedelegation_stake_credential: ey,
    stakedelegation_to_bytes: Xh,
    stakedelegation_to_hex: Kh,
    stakedelegation_to_js_value: Gh,
    stakedelegation_to_json: Jh,
    stakederegistration_from_bytes: Mh,
    stakederegistration_from_hex: Wh,
    stakederegistration_from_json: Bh,
    stakederegistration_new: Hh,
    stakederegistration_stake_credential: Ah,
    stakederegistration_to_bytes: Uh,
    stakederegistration_to_hex: Ih,
    stakederegistration_to_js_value: Vh,
    stakederegistration_to_json: Qh,
    stakeregistration_from_bytes: Fh,
    stakeregistration_from_hex: Th,
    stakeregistration_from_json: Dh,
    stakeregistration_new: _S,
    stakeregistration_stake_credential: I5,
    stakeregistration_to_bytes: Nh,
    stakeregistration_to_hex: Ph,
    stakeregistration_to_js_value: Rh,
    stakeregistration_to_json: hS,
    strings_add: DT,
    strings_get: RT,
    strings_len: qT,
    strings_new: eR,
    timelockexpiry_from_bytes: s4,
    timelockexpiry_from_hex: i4,
    timelockexpiry_from_json: l4,
    timelockexpiry_new: w4,
    timelockexpiry_new_timelockexpiry: f4,
    timelockexpiry_slot: p4,
    timelockexpiry_slot_bignum: u4,
    timelockexpiry_to_bytes: o4,
    timelockexpiry_to_hex: a4,
    timelockexpiry_to_js_value: d4,
    timelockexpiry_to_json: c4,
    timelockstart_from_bytes: G0,
    timelockstart_from_hex: e4,
    timelockstart_from_json: r4,
    timelockstart_new: q5,
    timelockstart_new_timelockstart: tS,
    timelockstart_slot: U5,
    timelockstart_slot_bignum: $5,
    timelockstart_to_bytes: J0,
    timelockstart_to_hex: t4,
    timelockstart_to_js_value: _4,
    timelockstart_to_json: mS,
    transaction_auxiliary_data: xg,
    transaction_body: mg,
    transaction_from_bytes: wg,
    transaction_from_hex: gg,
    transaction_from_json: yg,
    transaction_is_valid: kg,
    transaction_new: Sg,
    transaction_set_is_valid: jg,
    transaction_to_bytes: ug,
    transaction_to_hex: fg,
    transaction_to_js_value: hg,
    transaction_to_json: bg,
    transaction_witness_set: vg,
    transactionbatch_get: n$,
    transactionbatch_len: r$,
    transactionbatchlist_get: e$,
    transactionbatchlist_len: s$,
    transactionbodies_add: g2,
    transactionbodies_from_bytes: c2,
    transactionbodies_from_hex: l2,
    transactionbodies_from_json: w2,
    transactionbodies_get: f2,
    transactionbodies_len: z5,
    transactionbodies_new: lS,
    transactionbodies_to_bytes: i2,
    transactionbodies_to_hex: d2,
    transactionbodies_to_js_value: u2,
    transactionbodies_to_json: p2,
    transactionbody_auxiliary_data_hash: Lb,
    transactionbody_certs: jb,
    transactionbody_collateral: Qb,
    transactionbody_collateral_return: Xb,
    transactionbody_fee: hb,
    transactionbody_from_bytes: db,
    transactionbody_from_hex: pb,
    transactionbody_from_json: fb,
    transactionbody_inputs: gb,
    transactionbody_mint: Db,
    transactionbody_multiassets: M5,
    transactionbody_network_id: Hb,
    transactionbody_new: Zb,
    transactionbody_new_tx_body: Jb,
    transactionbody_outputs: bb,
    transactionbody_reference_inputs: Ub,
    transactionbody_remove_ttl: kb,
    transactionbody_required_signers: Bb,
    transactionbody_script_data_hash: Ib,
    transactionbody_set_auxiliary_data_hash: Ob,
    transactionbody_set_certs: xb,
    transactionbody_set_collateral: Wb,
    transactionbody_set_collateral_return: Yb,
    transactionbody_set_mint: Rb,
    transactionbody_set_network_id: Ab,
    transactionbody_set_reference_inputs: $b,
    transactionbody_set_required_signers: Vb,
    transactionbody_set_script_data_hash: Mb,
    transactionbody_set_total_collateral: qb,
    transactionbody_set_ttl: vb,
    transactionbody_set_update: zb,
    transactionbody_set_validity_start_interval: Nb,
    transactionbody_set_validity_start_interval_bignum: Fb,
    transactionbody_set_withdrawals: Sb,
    transactionbody_to_bytes: cb,
    transactionbody_to_hex: lb,
    transactionbody_to_js_value: wb,
    transactionbody_to_json: ub,
    transactionbody_total_collateral: Kb,
    transactionbody_ttl: yb,
    transactionbody_ttl_bignum: mb,
    transactionbody_update: Cb,
    transactionbody_validity_start_interval: Tb,
    transactionbody_validity_start_interval_bignum: Pb,
    transactionbody_withdrawals: Eb,
    transactionbuilder_add_bootstrap_input: XR,
    transactionbuilder_add_change_if_needed: RD,
    transactionbuilder_add_change_if_needed_with_datum: DD,
    transactionbuilder_add_input: qR,
    transactionbuilder_add_inputs_from: DR,
    transactionbuilder_add_json_metadatum: fD,
    transactionbuilder_add_json_metadatum_with_schema: gD,
    transactionbuilder_add_key_input: BR,
    transactionbuilder_add_metadatum: wD,
    transactionbuilder_add_mint_asset: xD,
    transactionbuilder_add_mint_asset_and_output: jD,
    transactionbuilder_add_mint_asset_and_output_min_required_coin: SD,
    transactionbuilder_add_native_script_input: HR,
    transactionbuilder_add_output: _D,
    transactionbuilder_add_plutus_script_input: YR,
    transactionbuilder_add_reference_input: VR,
    transactionbuilder_add_required_native_input_scripts: ZR,
    transactionbuilder_add_required_plutus_input_scripts: JR,
    transactionbuilder_add_required_signer: ID,
    transactionbuilder_add_script_input: AR,
    transactionbuilder_build: VD,
    transactionbuilder_build_tx: BD,
    transactionbuilder_build_tx_unsafe: AD,
    transactionbuilder_calc_script_data_hash: $D,
    transactionbuilder_count_missing_input_scripts: KR,
    transactionbuilder_fee_for_input: eD,
    transactionbuilder_fee_for_output: rD,
    transactionbuilder_full_size: WD,
    transactionbuilder_get_auxiliary_data: lD,
    transactionbuilder_get_deposit: PD,
    transactionbuilder_get_explicit_input: CD,
    transactionbuilder_get_explicit_output: FD,
    transactionbuilder_get_fee_if_set: TD,
    transactionbuilder_get_implicit_input: OD,
    transactionbuilder_get_mint: mD,
    transactionbuilder_get_mint_builder: hD,
    transactionbuilder_get_mint_scripts: vD,
    transactionbuilder_get_native_input_scripts: GR,
    transactionbuilder_get_plutus_input_scripts: tD,
    transactionbuilder_get_reference_inputs: zD,
    transactionbuilder_get_total_input: LD,
    transactionbuilder_get_total_output: ND,
    transactionbuilder_min_fee: HD,
    transactionbuilder_new: ED,
    transactionbuilder_output_sizes: QD,
    transactionbuilder_remove_script_data_hash: MD,
    transactionbuilder_set_auxiliary_data: pD,
    transactionbuilder_set_certs: cD,
    transactionbuilder_set_collateral: UR,
    transactionbuilder_set_collateral_return: MR,
    transactionbuilder_set_collateral_return_and_total: IR,
    transactionbuilder_set_fee: nD,
    transactionbuilder_set_inputs: $R,
    transactionbuilder_set_metadata: uD,
    transactionbuilder_set_mint: yD,
    transactionbuilder_set_mint_asset: kD,
    transactionbuilder_set_mint_builder: bD,
    transactionbuilder_set_script_data_hash: UD,
    transactionbuilder_set_total_collateral: WR,
    transactionbuilder_set_total_collateral_and_return: QR,
    transactionbuilder_set_ttl: oD,
    transactionbuilder_set_ttl_bignum: sD,
    transactionbuilder_set_validity_start_interval: aD,
    transactionbuilder_set_validity_start_interval_bignum: iD,
    transactionbuilder_set_withdrawals: dD,
    transactionbuilderconfigbuilder_build: TR,
    transactionbuilderconfigbuilder_coins_per_utxo_byte: zR,
    transactionbuilderconfigbuilder_coins_per_utxo_word: ER,
    transactionbuilderconfigbuilder_ex_unit_prices: CR,
    transactionbuilderconfigbuilder_fee_algo: SR,
    transactionbuilderconfigbuilder_key_deposit: LR,
    transactionbuilderconfigbuilder_max_tx_size: FR,
    transactionbuilderconfigbuilder_max_value_size: NR,
    transactionbuilderconfigbuilder_new: jR,
    transactionbuilderconfigbuilder_pool_deposit: OR,
    transactionbuilderconfigbuilder_prefer_pure_change: PR,
    transactionhash_from_bech32: eC,
    transactionhash_from_bytes: tC,
    transactionhash_from_hex: _C,
    transactionhash_to_bech32: zO,
    transactionhash_to_bytes: DO,
    transactionhash_to_hex: wO,
    transactioninput_from_bytes: eh,
    transactioninput_from_hex: rh,
    transactioninput_from_json: sh,
    transactioninput_index: ih,
    transactioninput_new: ch,
    transactioninput_to_bytes: th,
    transactioninput_to_hex: _h,
    transactioninput_to_js_value: oh,
    transactioninput_to_json: nh,
    transactioninput_transaction_id: ah,
    transactioninputs_add: Rg,
    transactioninputs_from_bytes: Cg,
    transactioninputs_from_hex: Lg,
    transactioninputs_from_json: Pg,
    transactioninputs_get: Tg,
    transactioninputs_len: g5,
    transactioninputs_new: eS,
    transactioninputs_to_bytes: zg,
    transactioninputs_to_hex: Og,
    transactioninputs_to_js_value: Fg,
    transactioninputs_to_json: Ng,
    transactioninputs_to_option: Dg,
    transactionmetadatum_as_bytes: ML,
    transactionmetadatum_as_int: UL,
    transactionmetadatum_as_list: $L,
    transactionmetadatum_as_map: DL,
    transactionmetadatum_as_text: IL,
    transactionmetadatum_from_bytes: CL,
    transactionmetadatum_from_hex: LL,
    transactionmetadatum_kind: HT,
    transactionmetadatum_new_bytes: TL,
    transactionmetadatum_new_int: PL,
    transactionmetadatum_new_list: FL,
    transactionmetadatum_new_map: NL,
    transactionmetadatum_new_text: RL,
    transactionmetadatum_to_bytes: zL,
    transactionmetadatum_to_hex: OL,
    transactionmetadatumlabels_add: YL,
    transactionmetadatumlabels_from_bytes: VL,
    transactionmetadatumlabels_from_hex: AL,
    transactionmetadatumlabels_get: HL,
    transactionmetadatumlabels_len: MT,
    transactionmetadatumlabels_new: tR,
    transactionmetadatumlabels_to_bytes: QL,
    transactionmetadatumlabels_to_hex: BL,
    transactionoutput_address: hh,
    transactionoutput_amount: yh,
    transactionoutput_data_hash: mh,
    transactionoutput_from_bytes: ph,
    transactionoutput_from_hex: wh,
    transactionoutput_from_json: bh,
    transactionoutput_has_data_hash: zh,
    transactionoutput_has_plutus_data: Eh,
    transactionoutput_has_script_ref: Ch,
    transactionoutput_new: Oh,
    transactionoutput_plutus_data: vh,
    transactionoutput_script_ref: kh,
    transactionoutput_serialization_format: Lh,
    transactionoutput_set_data_hash: Sh,
    transactionoutput_set_plutus_data: jh,
    transactionoutput_set_script_ref: xh,
    transactionoutput_to_bytes: lh,
    transactionoutput_to_hex: uh,
    transactionoutput_to_js_value: gh,
    transactionoutput_to_json: fh,
    transactionoutputamountbuilder_build: US,
    transactionoutputamountbuilder_with_asset_and_min_required_coin: DS,
    transactionoutputamountbuilder_with_asset_and_min_required_coin_by_utxo_cost: $S,
    transactionoutputamountbuilder_with_coin: TS,
    transactionoutputamountbuilder_with_coin_and_asset: RS,
    transactionoutputamountbuilder_with_value: PS,
    transactionoutputbuilder_new: ES,
    transactionoutputbuilder_next: NS,
    transactionoutputbuilder_with_address: zS,
    transactionoutputbuilder_with_data_hash: CS,
    transactionoutputbuilder_with_plutus_data: OS,
    transactionoutputbuilder_with_script_ref: LS,
    transactionoutputs_add: Hg,
    transactionoutputs_from_bytes: Mg,
    transactionoutputs_from_hex: Wg,
    transactionoutputs_from_json: Bg,
    transactionoutputs_get: Ag,
    transactionoutputs_len: f5,
    transactionoutputs_new: iS,
    transactionoutputs_to_bytes: Ug,
    transactionoutputs_to_hex: Ig,
    transactionoutputs_to_js_value: Vg,
    transactionoutputs_to_json: Qg,
    transactionunspentoutput_from_bytes: WS,
    transactionunspentoutput_from_hex: VS,
    transactionunspentoutput_from_json: HS,
    transactionunspentoutput_input: XS,
    transactionunspentoutput_new: YS,
    transactionunspentoutput_output: qS,
    transactionunspentoutput_to_bytes: IS,
    transactionunspentoutput_to_hex: QS,
    transactionunspentoutput_to_js_value: AS,
    transactionunspentoutput_to_json: BS,
    transactionunspentoutputs_add: rE,
    transactionunspentoutputs_from_json: GS,
    transactionunspentoutputs_get: _E,
    transactionunspentoutputs_len: eE,
    transactionunspentoutputs_new: tE,
    transactionunspentoutputs_to_js_value: JS,
    transactionunspentoutputs_to_json: ZS,
    transactionwitnessset_bootstraps: i0,
    transactionwitnessset_from_bytes: Zk,
    transactionwitnessset_from_hex: Gk,
    transactionwitnessset_from_json: _0,
    transactionwitnessset_native_scripts: s0,
    transactionwitnessset_new: f0,
    transactionwitnessset_plutus_data: p0,
    transactionwitnessset_plutus_scripts: d0,
    transactionwitnessset_redeemers: w0,
    transactionwitnessset_set_bootstraps: a0,
    transactionwitnessset_set_native_scripts: o0,
    transactionwitnessset_set_plutus_data: l0,
    transactionwitnessset_set_plutus_scripts: c0,
    transactionwitnessset_set_redeemers: u0,
    transactionwitnessset_set_vkeys: r0,
    transactionwitnessset_to_bytes: Kk,
    transactionwitnessset_to_hex: Jk,
    transactionwitnessset_to_js_value: e0,
    transactionwitnessset_to_json: t0,
    transactionwitnessset_vkeys: n0,
    transactionwitnesssets_add: E2,
    transactionwitnesssets_from_bytes: y2,
    transactionwitnesssets_from_hex: v2,
    transactionwitnesssets_from_json: j2,
    transactionwitnesssets_get: S2,
    transactionwitnesssets_len: C5,
    transactionwitnesssets_new: pS,
    transactionwitnesssets_to_bytes: h2,
    transactionwitnesssets_to_hex: m2,
    transactionwitnesssets_to_js_value: x2,
    transactionwitnesssets_to_json: k2,
    txbuilderconstants_plutus_alonzo_cost_models: _L,
    txbuilderconstants_plutus_default_cost_models: eL,
    txbuilderconstants_plutus_vasil_cost_models: nL,
    txinputsbuilder_add_bootstrap_input: M7,
    txinputsbuilder_add_input: I7,
    txinputsbuilder_add_key_input: R7,
    txinputsbuilder_add_native_script_input: $7,
    txinputsbuilder_add_plutus_script_input: U7,
    txinputsbuilder_add_required_native_input_scripts: Q7,
    txinputsbuilder_add_required_plutus_input_scripts: V7,
    txinputsbuilder_add_required_script_input_witnesses: B7,
    txinputsbuilder_add_required_signer: q7,
    txinputsbuilder_add_required_signers: K7,
    txinputsbuilder_add_script_input: D7,
    txinputsbuilder_count_missing_input_scripts: W7,
    txinputsbuilder_get_native_input_scripts: H7,
    txinputsbuilder_get_plutus_input_scripts: Y7,
    txinputsbuilder_get_ref_inputs: A7,
    txinputsbuilder_inputs: J7,
    txinputsbuilder_inputs_option: G7,
    txinputsbuilder_len: X7,
    txinputsbuilder_new: T7,
    txinputsbuilder_total_value: Z7,
    unitinterval_denominator: dg,
    unitinterval_from_bytes: ng,
    unitinterval_from_hex: sg,
    unitinterval_from_json: cg,
    unitinterval_new: lg,
    unitinterval_numerator: D5,
    unitinterval_to_bytes: rg,
    unitinterval_to_hex: og,
    unitinterval_to_js_value: ig,
    unitinterval_to_json: ag,
    update_epoch: g6,
    update_from_bytes: c6,
    update_from_hex: l6,
    update_from_json: w6,
    update_new: b6,
    update_proposed_protocol_parameter_updates: f6,
    update_to_bytes: i6,
    update_to_hex: d6,
    update_to_js_value: u6,
    update_to_json: p6,
    url_from_bytes: Yv,
    url_from_hex: qv,
    url_from_json: Kv,
    url_new: Zv,
    url_to_bytes: Hv,
    url_to_hex: Xv,
    url_to_js_value: V5,
    url_to_json: vS,
    url_url: W5,
    value_checked_add: VE,
    value_checked_sub: BE,
    value_clamped_sub: AE,
    value_coin: ME,
    value_compare: HE,
    value_from_bytes: CE,
    value_from_hex: LE,
    value_from_json: PE,
    value_is_zero: UE,
    value_multiasset: WE,
    value_new: TE,
    value_new_from_assets: RE,
    value_new_with_assets: DE,
    value_set_coin: IE,
    value_set_multiasset: QE,
    value_to_bytes: zE,
    value_to_hex: OE,
    value_to_js_value: FE,
    value_to_json: NE,
    value_zero: $E,
    vkey_from_bytes: Rz,
    vkey_from_hex: $z,
    vkey_from_json: Iz,
    vkey_new: Wz,
    vkey_public_key: Qz,
    vkey_to_bytes: Tz,
    vkey_to_hex: Dz,
    vkey_to_js_value: Mz,
    vkey_to_json: Uz,
    vkeys_add: Az,
    vkeys_get: Bz,
    vkeys_len: iO,
    vkeys_new: XO,
    vkeywitness_from_bytes: Xz,
    vkeywitness_from_hex: Kz,
    vkeywitness_from_json: Gz,
    vkeywitness_new: t9,
    vkeywitness_signature: xO,
    vkeywitness_to_bytes: Yz,
    vkeywitness_to_hex: qz,
    vkeywitness_to_js_value: Jz,
    vkeywitness_to_json: Zz,
    vkeywitness_vkey: kO,
    vkeywitnesses_add: d9,
    vkeywitnesses_from_bytes: r9,
    vkeywitnesses_from_hex: o9,
    vkeywitnesses_from_json: i9,
    vkeywitnesses_get: c9,
    vkeywitnesses_len: aO,
    vkeywitnesses_new: YO,
    vkeywitnesses_to_bytes: _9,
    vkeywitnesses_to_hex: n9,
    vkeywitnesses_to_js_value: a9,
    vkeywitnesses_to_json: s9,
    vrfcert_from_bytes: GC,
    vrfcert_from_hex: eO,
    vrfcert_from_json: nO,
    vrfcert_new: sO,
    vrfcert_output: dO,
    vrfcert_proof: oO,
    vrfcert_to_bytes: JC,
    vrfcert_to_hex: tO,
    vrfcert_to_js_value: rO,
    vrfcert_to_json: _O,
    vrfkeyhash_from_bech32: mC,
    vrfkeyhash_from_bytes: yC,
    vrfkeyhash_from_hex: vC,
    vrfkeyhash_to_bech32: OO,
    vrfkeyhash_to_bytes: WO,
    vrfkeyhash_to_hex: gO,
    vrfvkey_from_bech32: FC,
    vrfvkey_from_bytes: NC,
    vrfvkey_from_hex: PC,
    vrfvkey_to_bech32: PO,
    vrfvkey_to_bytes: AO,
    vrfvkey_to_hex: mO,
    withdrawals_from_bytes: Ik,
    withdrawals_from_hex: Qk,
    withdrawals_from_json: Ak,
    withdrawals_get: Yk,
    withdrawals_insert: Hk,
    withdrawals_keys: Xk,
    withdrawals_len: v5,
    withdrawals_new: Z5,
    withdrawals_to_bytes: Mk,
    withdrawals_to_hex: Wk,
    withdrawals_to_js_value: Bk,
    withdrawals_to_json: Vk
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  Gw(YU);
  function XU(r) {
    const t = r.trim().toLowerCase().replace(/^0x/, "");
    if (t.length % 2 !== 0) throw new Error("Hex string has odd length");
    const e = new Uint8Array(t.length / 2);
    for (let s = 0; s < t.length; s += 2) e[s / 2] = parseInt(t.slice(s, s + 2), 16);
    return e;
  }
  function Cn(r) {
    return Array.from(r).map((t) => t.toString(16).padStart(2, "0")).join("");
  }
  function qU(r) {
    const t = r.trim();
    if (!t) return "";
    if (t.startsWith("{")) try {
      const e = JSON.parse(t);
      if (e && typeof e.cborHex == "string") return e.cborHex;
    } catch {
    }
    return t;
  }
  function KU() {
    const [r, t] = Ne.useState(false), [e, s] = Ne.useState(""), [o, n] = Ne.useState(""), [c, d] = Ne.useState("");
    Ne.useEffect(() => {
      let x = false;
      try {
        typeof M_ == "function" ? x || t(true) : d("Cardano Serialization Lib not available");
      } catch (k) {
        d((k == null ? void 0 : k.message) ?? String(k));
      }
      return () => {
        x = true;
      };
    }, []), Ne.useEffect(() => {
      const k = new URLSearchParams(window.location.search).get("cborHex");
      k && s(k);
    }, []);
    function p(x) {
      const k = x.coin().to_str(), O = x.multiasset(), L = {
        lovelace: k
      };
      if (O) {
        const N = O.keys(), A = {};
        for (let m = 0; m < N.len(); m++) {
          const h = N.get(m), v = O.get(h), E = v.keys(), F = Cn(h.to_bytes()), R = {};
          for (let D = 0; D < E.len(); D++) {
            const $ = E.get(D), G = v.get($).to_str(), W = Cn($.name());
            R[W] = G;
          }
          A[F] = R;
        }
        L.assets = A;
      }
      return L;
    }
    function l(x) {
      const k = x.body(), O = k.inputs(), L = k.outputs(), N = [];
      for (let v = 0; v < O.len(); v++) {
        const E = O.get(v);
        N.push({
          txId: Cn(E.transaction_id().to_bytes()),
          index: E.index()
        });
      }
      const A = [];
      for (let v = 0; v < L.len(); v++) {
        const E = L.get(v), F = E.address().to_bech32(), R = p(E.amount());
        A.push({
          address: F,
          value: R
        });
      }
      const m = k.fee().to_str(), h = k.ttl() ? k.ttl() : null;
      return {
        inputs: N,
        outputs: A,
        fee: m,
        ttl: h,
        raw: {
          body: Cn(k.to_bytes()),
          hash: Cn(nf(k).to_bytes())
        }
      };
    }
    const y = (x) => {
      x && x.preventDefault();
      try {
        d(""), n("");
        const k = qU(e);
        if (!k) throw new Error("Please enter a CBOR hex string");
        const O = M_.from_bytes(XU(k)), L = l(O);
        n(JSON.stringify(L, null, 2));
      } catch (k) {
        d((k == null ? void 0 : k.message) ?? String(k));
      }
    };
    return wt.jsxs("div", {
      className: "container",
      children: [
        wt.jsxs("header", {
          children: [
            wt.jsx("h1", {
              children: "Cardano Transaction Decoder"
            }),
            wt.jsx("p", {
              children: "Paste your CBOR hex string to decode the transaction (runs fully in your browser)"
            })
          ]
        }),
        wt.jsx("div", {
          className: "form-container",
          children: wt.jsxs("form", {
            onSubmit: y,
            children: [
              wt.jsxs("div", {
                className: "input-group",
                children: [
                  wt.jsx("label", {
                    htmlFor: "cbor",
                    children: "CBOR Hex String:"
                  }),
                  wt.jsx("textarea", {
                    id: "cbor",
                    value: e,
                    onChange: (x) => s(x.target.value),
                    placeholder: "Paste your CBOR hex string here...",
                    rows: 4
                  })
                ]
              }),
              wt.jsx("button", {
                type: "submit",
                disabled: !r,
                children: r ? "Decode Transaction" : "Loading CSL..."
              })
            ]
          })
        }),
        o && wt.jsxs("div", {
          className: "result-container",
          children: [
            wt.jsx("h3", {
              children: "Decoded Transaction:"
            }),
            wt.jsx("pre", {
              children: o
            })
          ]
        }),
        c && wt.jsxs("div", {
          className: "error-container",
          children: [
            wt.jsx("h3", {
              children: "Error:"
            }),
            wt.jsx("pre", {
              children: c
            })
          ]
        })
      ]
    });
  }
  const vp = document.getElementById("root");
  if (!vp) throw new Error("Root container not found");
  yp(vp).render(wt.jsx(Mp.StrictMode, {
    children: wt.jsx(KU, {})
  }));
})();
