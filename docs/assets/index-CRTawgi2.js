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
  function Qp(r) {
    return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
  }
  var jd = {
    exports: {}
  }, Os = {}, Sd = {
    exports: {}
  }, B = {};
  var mo = Symbol.for("react.element"), Vp = Symbol.for("react.portal"), Bp = Symbol.for("react.fragment"), Ap = Symbol.for("react.strict_mode"), Hp = Symbol.for("react.profiler"), qp = Symbol.for("react.provider"), Yp = Symbol.for("react.context"), Xp = Symbol.for("react.forward_ref"), Kp = Symbol.for("react.suspense"), Zp = Symbol.for("react.memo"), Jp = Symbol.for("react.lazy"), uc = Symbol.iterator;
  function Gp(r) {
    return r === null || typeof r != "object" ? null : (r = uc && r[uc] || r["@@iterator"], typeof r == "function" ? r : null);
  }
  var Ed = {
    isMounted: function() {
      return false;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, zd = Object.assign, Cd = {};
  function Cn(r, t, e) {
    this.props = r, this.context = t, this.refs = Cd, this.updater = e || Ed;
  }
  Cn.prototype.isReactComponent = {};
  Cn.prototype.setState = function(r, t) {
    if (typeof r != "object" && typeof r != "function" && r != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, r, t, "setState");
  };
  Cn.prototype.forceUpdate = function(r) {
    this.updater.enqueueForceUpdate(this, r, "forceUpdate");
  };
  function Od() {
  }
  Od.prototype = Cn.prototype;
  function wi(r, t, e) {
    this.props = r, this.context = t, this.refs = Cd, this.updater = e || Ed;
  }
  var fi = wi.prototype = new Od();
  fi.constructor = wi;
  zd(fi, Cn.prototype);
  fi.isPureReactComponent = true;
  var wc = Array.isArray, Ld = Object.prototype.hasOwnProperty, gi = {
    current: null
  }, Nd = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function Fd(r, t, e) {
    var s, o = {}, n = null, c = null;
    if (t != null) for (s in t.ref !== void 0 && (c = t.ref), t.key !== void 0 && (n = "" + t.key), t) Ld.call(t, s) && !Nd.hasOwnProperty(s) && (o[s] = t[s]);
    var d = arguments.length - 2;
    if (d === 1) o.children = e;
    else if (1 < d) {
      for (var p = Array(d), l = 0; l < d; l++) p[l] = arguments[l + 2];
      o.children = p;
    }
    if (r && r.defaultProps) for (s in d = r.defaultProps, d) o[s] === void 0 && (o[s] = d[s]);
    return {
      $$typeof: mo,
      type: r,
      key: n,
      ref: c,
      props: o,
      _owner: gi.current
    };
  }
  function tu(r, t) {
    return {
      $$typeof: mo,
      type: r.type,
      key: t,
      ref: r.ref,
      props: r.props,
      _owner: r._owner
    };
  }
  function bi(r) {
    return typeof r == "object" && r !== null && r.$$typeof === mo;
  }
  function eu(r) {
    var t = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + r.replace(/[=:]/g, function(e) {
      return t[e];
    });
  }
  var fc = /\/+/g;
  function Xs(r, t) {
    return typeof r == "object" && r !== null && r.key != null ? eu("" + r.key) : t.toString(36);
  }
  function Ho(r, t, e, s, o) {
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
          case mo:
          case Vp:
            c = true;
        }
    }
    if (c) return c = r, o = o(c), r = s === "" ? "." + Xs(c, 0) : s, wc(o) ? (e = "", r != null && (e = r.replace(fc, "$&/") + "/"), Ho(o, t, e, "", function(l) {
      return l;
    })) : o != null && (bi(o) && (o = tu(o, e + (!o.key || c && c.key === o.key ? "" : ("" + o.key).replace(fc, "$&/") + "/") + r)), t.push(o)), 1;
    if (c = 0, s = s === "" ? "." : s + ":", wc(r)) for (var d = 0; d < r.length; d++) {
      n = r[d];
      var p = s + Xs(n, d);
      c += Ho(n, t, e, p, o);
    }
    else if (p = Gp(r), typeof p == "function") for (r = p.call(r), d = 0; !(n = r.next()).done; ) n = n.value, p = s + Xs(n, d++), c += Ho(n, t, e, p, o);
    else if (n === "object") throw t = String(r), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return c;
  }
  function zo(r, t, e) {
    if (r == null) return r;
    var s = [], o = 0;
    return Ho(r, s, "", "", function(n) {
      return t.call(e, n, o++);
    }), s;
  }
  function _u(r) {
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
  var Wt = {
    current: null
  }, qo = {
    transition: null
  }, ru = {
    ReactCurrentDispatcher: Wt,
    ReactCurrentBatchConfig: qo,
    ReactCurrentOwner: gi
  };
  function Td() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  B.Children = {
    map: zo,
    forEach: function(r, t, e) {
      zo(r, function() {
        t.apply(this, arguments);
      }, e);
    },
    count: function(r) {
      var t = 0;
      return zo(r, function() {
        t++;
      }), t;
    },
    toArray: function(r) {
      return zo(r, function(t) {
        return t;
      }) || [];
    },
    only: function(r) {
      if (!bi(r)) throw Error("React.Children.only expected to receive a single React element child.");
      return r;
    }
  };
  B.Component = Cn;
  B.Fragment = Bp;
  B.Profiler = Hp;
  B.PureComponent = wi;
  B.StrictMode = Ap;
  B.Suspense = Kp;
  B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ru;
  B.act = Td;
  B.cloneElement = function(r, t, e) {
    if (r == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + r + ".");
    var s = zd({}, r.props), o = r.key, n = r.ref, c = r._owner;
    if (t != null) {
      if (t.ref !== void 0 && (n = t.ref, c = gi.current), t.key !== void 0 && (o = "" + t.key), r.type && r.type.defaultProps) var d = r.type.defaultProps;
      for (p in t) Ld.call(t, p) && !Nd.hasOwnProperty(p) && (s[p] = t[p] === void 0 && d !== void 0 ? d[p] : t[p]);
    }
    var p = arguments.length - 2;
    if (p === 1) s.children = e;
    else if (1 < p) {
      d = Array(p);
      for (var l = 0; l < p; l++) d[l] = arguments[l + 2];
      s.children = d;
    }
    return {
      $$typeof: mo,
      type: r.type,
      key: o,
      ref: n,
      props: s,
      _owner: c
    };
  };
  B.createContext = function(r) {
    return r = {
      $$typeof: Yp,
      _currentValue: r,
      _currentValue2: r,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }, r.Provider = {
      $$typeof: qp,
      _context: r
    }, r.Consumer = r;
  };
  B.createElement = Fd;
  B.createFactory = function(r) {
    var t = Fd.bind(null, r);
    return t.type = r, t;
  };
  B.createRef = function() {
    return {
      current: null
    };
  };
  B.forwardRef = function(r) {
    return {
      $$typeof: Xp,
      render: r
    };
  };
  B.isValidElement = bi;
  B.lazy = function(r) {
    return {
      $$typeof: Jp,
      _payload: {
        _status: -1,
        _result: r
      },
      _init: _u
    };
  };
  B.memo = function(r, t) {
    return {
      $$typeof: Zp,
      type: r,
      compare: t === void 0 ? null : t
    };
  };
  B.startTransition = function(r) {
    var t = qo.transition;
    qo.transition = {};
    try {
      r();
    } finally {
      qo.transition = t;
    }
  };
  B.unstable_act = Td;
  B.useCallback = function(r, t) {
    return Wt.current.useCallback(r, t);
  };
  B.useContext = function(r) {
    return Wt.current.useContext(r);
  };
  B.useDebugValue = function() {
  };
  B.useDeferredValue = function(r) {
    return Wt.current.useDeferredValue(r);
  };
  B.useEffect = function(r, t) {
    return Wt.current.useEffect(r, t);
  };
  B.useId = function() {
    return Wt.current.useId();
  };
  B.useImperativeHandle = function(r, t, e) {
    return Wt.current.useImperativeHandle(r, t, e);
  };
  B.useInsertionEffect = function(r, t) {
    return Wt.current.useInsertionEffect(r, t);
  };
  B.useLayoutEffect = function(r, t) {
    return Wt.current.useLayoutEffect(r, t);
  };
  B.useMemo = function(r, t) {
    return Wt.current.useMemo(r, t);
  };
  B.useReducer = function(r, t, e) {
    return Wt.current.useReducer(r, t, e);
  };
  B.useRef = function(r) {
    return Wt.current.useRef(r);
  };
  B.useState = function(r) {
    return Wt.current.useState(r);
  };
  B.useSyncExternalStore = function(r, t, e) {
    return Wt.current.useSyncExternalStore(r, t, e);
  };
  B.useTransition = function() {
    return Wt.current.useTransition();
  };
  B.version = "18.3.1";
  Sd.exports = B;
  var Me = Sd.exports;
  const nu = Qp(Me);
  var ou = Me, su = Symbol.for("react.element"), au = Symbol.for("react.fragment"), iu = Object.prototype.hasOwnProperty, cu = ou.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, du = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function Pd(r, t, e) {
    var s, o = {}, n = null, c = null;
    e !== void 0 && (n = "" + e), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (c = t.ref);
    for (s in t) iu.call(t, s) && !du.hasOwnProperty(s) && (o[s] = t[s]);
    if (r && r.defaultProps) for (s in t = r.defaultProps, t) o[s] === void 0 && (o[s] = t[s]);
    return {
      $$typeof: su,
      type: r,
      key: n,
      ref: c,
      props: o,
      _owner: cu.current
    };
  }
  Os.Fragment = au;
  Os.jsx = Pd;
  Os.jsxs = Pd;
  jd.exports = Os;
  var K = jd.exports, Rd = {
    exports: {}
  }, oe = {}, $d = {
    exports: {}
  }, Dd = {};
  (function(r) {
    function t(R, U) {
      var V = R.length;
      R.push(U);
      t: for (; 0 < V; ) {
        var ot = V - 1 >>> 1, st = R[ot];
        if (0 < o(st, U)) R[ot] = U, R[V] = st, V = ot;
        else break t;
      }
    }
    function e(R) {
      return R.length === 0 ? null : R[0];
    }
    function s(R) {
      if (R.length === 0) return null;
      var U = R[0], V = R.pop();
      if (V !== U) {
        R[0] = V;
        t: for (var ot = 0, st = R.length, vr = st >>> 1; ot < vr; ) {
          var fe = 2 * (ot + 1) - 1, So = R[fe], M = fe + 1, I = R[M];
          if (0 > o(So, V)) M < st && 0 > o(I, So) ? (R[ot] = I, R[M] = V, ot = M) : (R[ot] = So, R[fe] = V, ot = fe);
          else if (M < st && 0 > o(I, V)) R[ot] = I, R[M] = V, ot = M;
          else break t;
        }
      }
      return U;
    }
    function o(R, U) {
      var V = R.sortIndex - U.sortIndex;
      return V !== 0 ? V : R.id - U.id;
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
    var p = [], l = [], m = 1, x = null, k = 3, j = false, L = false, N = false, A = typeof setTimeout == "function" ? setTimeout : null, y = typeof clearTimeout == "function" ? clearTimeout : null, b = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(R) {
      for (var U = e(l); U !== null; ) {
        if (U.callback === null) s(l);
        else if (U.startTime <= R) s(l), U.sortIndex = U.expirationTime, t(p, U);
        else break;
        U = e(l);
      }
    }
    function z(R) {
      if (N = false, v(R), !L) if (e(p) !== null) L = true, mr(F);
      else {
        var U = e(l);
        U !== null && Kr(z, U.startTime - R);
      }
    }
    function F(R, U) {
      L = false, N && (N = false, y(P), P = -1), j = true;
      var V = k;
      try {
        for (v(U), x = e(p); x !== null && (!(x.expirationTime > U) || R && !wt()); ) {
          var ot = x.callback;
          if (typeof ot == "function") {
            x.callback = null, k = x.priorityLevel;
            var st = ot(x.expirationTime <= U);
            U = r.unstable_now(), typeof st == "function" ? x.callback = st : x === e(p) && s(p), v(U);
          } else s(p);
          x = e(p);
        }
        if (x !== null) var vr = true;
        else {
          var fe = e(l);
          fe !== null && Kr(z, fe.startTime - U), vr = false;
        }
        return vr;
      } finally {
        x = null, k = V, j = false;
      }
    }
    var D = false, T = null, P = -1, Y = 5, W = -1;
    function wt() {
      return !(r.unstable_now() - W < Y);
    }
    function Vt() {
      if (T !== null) {
        var R = r.unstable_now();
        W = R;
        var U = true;
        try {
          U = T(true, R);
        } finally {
          U ? Se() : (D = false, T = null);
        }
      } else D = false;
    }
    var Se;
    if (typeof b == "function") Se = function() {
      b(Vt);
    };
    else if (typeof MessageChannel < "u") {
      var Xr = new MessageChannel(), As = Xr.port2;
      Xr.port1.onmessage = Vt, Se = function() {
        As.postMessage(null);
      };
    } else Se = function() {
      A(Vt, 0);
    };
    function mr(R) {
      T = R, D || (D = true, Se());
    }
    function Kr(R, U) {
      P = A(function() {
        R(r.unstable_now());
      }, U);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(R) {
      R.callback = null;
    }, r.unstable_continueExecution = function() {
      L || j || (L = true, mr(F));
    }, r.unstable_forceFrameRate = function(R) {
      0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Y = 0 < R ? Math.floor(1e3 / R) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return k;
    }, r.unstable_getFirstCallbackNode = function() {
      return e(p);
    }, r.unstable_next = function(R) {
      switch (k) {
        case 1:
        case 2:
        case 3:
          var U = 3;
          break;
        default:
          U = k;
      }
      var V = k;
      k = U;
      try {
        return R();
      } finally {
        k = V;
      }
    }, r.unstable_pauseExecution = function() {
    }, r.unstable_requestPaint = function() {
    }, r.unstable_runWithPriority = function(R, U) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var V = k;
      k = R;
      try {
        return U();
      } finally {
        k = V;
      }
    }, r.unstable_scheduleCallback = function(R, U, V) {
      var ot = r.unstable_now();
      switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? ot + V : ot) : V = ot, R) {
        case 1:
          var st = -1;
          break;
        case 2:
          st = 250;
          break;
        case 5:
          st = 1073741823;
          break;
        case 4:
          st = 1e4;
          break;
        default:
          st = 5e3;
      }
      return st = V + st, R = {
        id: m++,
        callback: U,
        priorityLevel: R,
        startTime: V,
        expirationTime: st,
        sortIndex: -1
      }, V > ot ? (R.sortIndex = V, t(l, R), e(p) === null && R === e(l) && (N ? (y(P), P = -1) : N = true, Kr(z, V - ot))) : (R.sortIndex = st, t(p, R), L || j || (L = true, mr(F))), R;
    }, r.unstable_shouldYield = wt, r.unstable_wrapCallback = function(R) {
      var U = k;
      return function() {
        var V = k;
        k = U;
        try {
          return R.apply(this, arguments);
        } finally {
          k = V;
        }
      };
    };
  })(Dd);
  $d.exports = Dd;
  var lu = $d.exports;
  var pu = Me, re = lu;
  function C(r) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + r, e = 1; e < arguments.length; e++) t += "&args[]=" + encodeURIComponent(arguments[e]);
    return "Minified React error #" + r + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Id = /* @__PURE__ */ new Set(), eo = {};
  function qr(r, t) {
    vn(r, t), vn(r + "Capture", t);
  }
  function vn(r, t) {
    for (eo[r] = t, r = 0; r < t.length; r++) Id.add(t[r]);
  }
  var n_ = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), va = Object.prototype.hasOwnProperty, uu = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, gc = {}, bc = {};
  function wu(r) {
    return va.call(bc, r) ? true : va.call(gc, r) ? false : uu.test(r) ? bc[r] = true : (gc[r] = true, false);
  }
  function fu(r, t, e, s) {
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
  function gu(r, t, e, s) {
    if (t === null || typeof t > "u" || fu(r, t, e, s)) return true;
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
  function Qt(r, t, e, s, o, n, c) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = s, this.attributeNamespace = o, this.mustUseProperty = e, this.propertyName = r, this.type = t, this.sanitizeURL = n, this.removeEmptyString = c;
  }
  var Ct = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r) {
    Ct[r] = new Qt(r, 0, false, r, null, false, false);
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
    Ct[t] = new Qt(t, 1, false, r[1], null, false, false);
  });
  [
    "contentEditable",
    "draggable",
    "spellCheck",
    "value"
  ].forEach(function(r) {
    Ct[r] = new Qt(r, 2, false, r.toLowerCase(), null, false, false);
  });
  [
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha"
  ].forEach(function(r) {
    Ct[r] = new Qt(r, 2, false, r, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r) {
    Ct[r] = new Qt(r, 3, false, r.toLowerCase(), null, false, false);
  });
  [
    "checked",
    "multiple",
    "muted",
    "selected"
  ].forEach(function(r) {
    Ct[r] = new Qt(r, 3, true, r, null, false, false);
  });
  [
    "capture",
    "download"
  ].forEach(function(r) {
    Ct[r] = new Qt(r, 4, false, r, null, false, false);
  });
  [
    "cols",
    "rows",
    "size",
    "span"
  ].forEach(function(r) {
    Ct[r] = new Qt(r, 6, false, r, null, false, false);
  });
  [
    "rowSpan",
    "start"
  ].forEach(function(r) {
    Ct[r] = new Qt(r, 5, false, r.toLowerCase(), null, false, false);
  });
  var hi = /[\-:]([a-z])/g;
  function yi(r) {
    return r[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r) {
    var t = r.replace(hi, yi);
    Ct[t] = new Qt(t, 1, false, r, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r) {
    var t = r.replace(hi, yi);
    Ct[t] = new Qt(t, 1, false, r, "http://www.w3.org/1999/xlink", false, false);
  });
  [
    "xml:base",
    "xml:lang",
    "xml:space"
  ].forEach(function(r) {
    var t = r.replace(hi, yi);
    Ct[t] = new Qt(t, 1, false, r, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  [
    "tabIndex",
    "crossOrigin"
  ].forEach(function(r) {
    Ct[r] = new Qt(r, 1, false, r.toLowerCase(), null, false, false);
  });
  Ct.xlinkHref = new Qt("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  [
    "src",
    "href",
    "action",
    "formAction"
  ].forEach(function(r) {
    Ct[r] = new Qt(r, 1, false, r.toLowerCase(), null, true, true);
  });
  function mi(r, t, e, s) {
    var o = Ct.hasOwnProperty(t) ? Ct[t] : null;
    (o !== null ? o.type !== 0 : s || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (gu(t, e, o, s) && (e = null), s || o === null ? wu(t) && (e === null ? r.removeAttribute(t) : r.setAttribute(t, "" + e)) : o.mustUseProperty ? r[o.propertyName] = e === null ? o.type === 3 ? false : "" : e : (t = o.attributeName, s = o.attributeNamespace, e === null ? r.removeAttribute(t) : (o = o.type, e = o === 3 || o === 4 && e === true ? "" : "" + e, s ? r.setAttributeNS(s, t, e) : r.setAttribute(t, e))));
  }
  var i_ = pu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Co = Symbol.for("react.element"), Gr = Symbol.for("react.portal"), tn = Symbol.for("react.fragment"), vi = Symbol.for("react.strict_mode"), ka = Symbol.for("react.profiler"), Ud = Symbol.for("react.provider"), Md = Symbol.for("react.context"), ki = Symbol.for("react.forward_ref"), xa = Symbol.for("react.suspense"), ja = Symbol.for("react.suspense_list"), xi = Symbol.for("react.memo"), p_ = Symbol.for("react.lazy"), Wd = Symbol.for("react.offscreen"), hc = Symbol.iterator;
  function Nn(r) {
    return r === null || typeof r != "object" ? null : (r = hc && r[hc] || r["@@iterator"], typeof r == "function" ? r : null);
  }
  var ct = Object.assign, Ks;
  function Un(r) {
    if (Ks === void 0) try {
      throw Error();
    } catch (e) {
      var t = e.stack.trim().match(/\n( *(at )?)/);
      Ks = t && t[1] || "";
    }
    return `
` + Ks + r;
  }
  var Zs = false;
  function Js(r, t) {
    if (!r || Zs) return "";
    Zs = true;
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
      Zs = false, Error.prepareStackTrace = e;
    }
    return (r = r ? r.displayName || r.name : "") ? Un(r) : "";
  }
  function bu(r) {
    switch (r.tag) {
      case 5:
        return Un(r.type);
      case 16:
        return Un("Lazy");
      case 13:
        return Un("Suspense");
      case 19:
        return Un("SuspenseList");
      case 0:
      case 2:
      case 15:
        return r = Js(r.type, false), r;
      case 11:
        return r = Js(r.type.render, false), r;
      case 1:
        return r = Js(r.type, true), r;
      default:
        return "";
    }
  }
  function Sa(r) {
    if (r == null) return null;
    if (typeof r == "function") return r.displayName || r.name || null;
    if (typeof r == "string") return r;
    switch (r) {
      case tn:
        return "Fragment";
      case Gr:
        return "Portal";
      case ka:
        return "Profiler";
      case vi:
        return "StrictMode";
      case xa:
        return "Suspense";
      case ja:
        return "SuspenseList";
    }
    if (typeof r == "object") switch (r.$$typeof) {
      case Md:
        return (r.displayName || "Context") + ".Consumer";
      case Ud:
        return (r._context.displayName || "Context") + ".Provider";
      case ki:
        var t = r.render;
        return r = r.displayName, r || (r = t.displayName || t.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
      case xi:
        return t = r.displayName || null, t !== null ? t : Sa(r.type) || "Memo";
      case p_:
        t = r._payload, r = r._init;
        try {
          return Sa(r(t));
        } catch {
        }
    }
    return null;
  }
  function hu(r) {
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
        return Sa(t);
      case 8:
        return t === vi ? "StrictMode" : "Mode";
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
  function fr(r) {
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
  function Qd(r) {
    var t = r.type;
    return (r = r.nodeName) && r.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function yu(r) {
    var t = Qd(r) ? "checked" : "value", e = Object.getOwnPropertyDescriptor(r.constructor.prototype, t), s = "" + r[t];
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
  function Oo(r) {
    r._valueTracker || (r._valueTracker = yu(r));
  }
  function Vd(r) {
    if (!r) return false;
    var t = r._valueTracker;
    if (!t) return true;
    var e = t.getValue(), s = "";
    return r && (s = Qd(r) ? r.checked ? "true" : "false" : r.value), r = s, r !== e ? (t.setValue(r), true) : false;
  }
  function os(r) {
    if (r = r || (typeof document < "u" ? document : void 0), typeof r > "u") return null;
    try {
      return r.activeElement || r.body;
    } catch {
      return r.body;
    }
  }
  function Ea(r, t) {
    var e = t.checked;
    return ct({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: e ?? r._wrapperState.initialChecked
    });
  }
  function yc(r, t) {
    var e = t.defaultValue == null ? "" : t.defaultValue, s = t.checked != null ? t.checked : t.defaultChecked;
    e = fr(t.value != null ? t.value : e), r._wrapperState = {
      initialChecked: s,
      initialValue: e,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    };
  }
  function Bd(r, t) {
    t = t.checked, t != null && mi(r, "checked", t, false);
  }
  function za(r, t) {
    Bd(r, t);
    var e = fr(t.value), s = t.type;
    if (e != null) s === "number" ? (e === 0 && r.value === "" || r.value != e) && (r.value = "" + e) : r.value !== "" + e && (r.value = "" + e);
    else if (s === "submit" || s === "reset") {
      r.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Ca(r, t.type, e) : t.hasOwnProperty("defaultValue") && Ca(r, t.type, fr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (r.defaultChecked = !!t.defaultChecked);
  }
  function mc(r, t, e) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var s = t.type;
      if (!(s !== "submit" && s !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + r._wrapperState.initialValue, e || t === r.value || (r.value = t), r.defaultValue = t;
    }
    e = r.name, e !== "" && (r.name = ""), r.defaultChecked = !!r._wrapperState.initialChecked, e !== "" && (r.name = e);
  }
  function Ca(r, t, e) {
    (t !== "number" || os(r.ownerDocument) !== r) && (e == null ? r.defaultValue = "" + r._wrapperState.initialValue : r.defaultValue !== "" + e && (r.defaultValue = "" + e));
  }
  var Mn = Array.isArray;
  function un(r, t, e, s) {
    if (r = r.options, t) {
      t = {};
      for (var o = 0; o < e.length; o++) t["$" + e[o]] = true;
      for (e = 0; e < r.length; e++) o = t.hasOwnProperty("$" + r[e].value), r[e].selected !== o && (r[e].selected = o), o && s && (r[e].defaultSelected = true);
    } else {
      for (e = "" + fr(e), t = null, o = 0; o < r.length; o++) {
        if (r[o].value === e) {
          r[o].selected = true, s && (r[o].defaultSelected = true);
          return;
        }
        t !== null || r[o].disabled || (t = r[o]);
      }
      t !== null && (t.selected = true);
    }
  }
  function Oa(r, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
    return ct({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + r._wrapperState.initialValue
    });
  }
  function vc(r, t) {
    var e = t.value;
    if (e == null) {
      if (e = t.children, t = t.defaultValue, e != null) {
        if (t != null) throw Error(C(92));
        if (Mn(e)) {
          if (1 < e.length) throw Error(C(93));
          e = e[0];
        }
        t = e;
      }
      t == null && (t = ""), e = t;
    }
    r._wrapperState = {
      initialValue: fr(e)
    };
  }
  function Ad(r, t) {
    var e = fr(t.value), s = fr(t.defaultValue);
    e != null && (e = "" + e, e !== r.value && (r.value = e), t.defaultValue == null && r.defaultValue !== e && (r.defaultValue = e)), s != null && (r.defaultValue = "" + s);
  }
  function kc(r) {
    var t = r.textContent;
    t === r._wrapperState.initialValue && t !== "" && t !== null && (r.value = t);
  }
  function Hd(r) {
    switch (r) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function La(r, t) {
    return r == null || r === "http://www.w3.org/1999/xhtml" ? Hd(t) : r === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : r;
  }
  var Lo, qd = function(r) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, e, s, o) {
      MSApp.execUnsafeLocalFunction(function() {
        return r(t, e, s, o);
      });
    } : r;
  }(function(r, t) {
    if (r.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in r) r.innerHTML = t;
    else {
      for (Lo = Lo || document.createElement("div"), Lo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Lo.firstChild; r.firstChild; ) r.removeChild(r.firstChild);
      for (; t.firstChild; ) r.appendChild(t.firstChild);
    }
  });
  function _o(r, t) {
    if (t) {
      var e = r.firstChild;
      if (e && e === r.lastChild && e.nodeType === 3) {
        e.nodeValue = t;
        return;
      }
    }
    r.textContent = t;
  }
  var Vn = {
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
  }, mu = [
    "Webkit",
    "ms",
    "Moz",
    "O"
  ];
  Object.keys(Vn).forEach(function(r) {
    mu.forEach(function(t) {
      t = t + r.charAt(0).toUpperCase() + r.substring(1), Vn[t] = Vn[r];
    });
  });
  function Yd(r, t, e) {
    return t == null || typeof t == "boolean" || t === "" ? "" : e || typeof t != "number" || t === 0 || Vn.hasOwnProperty(r) && Vn[r] ? ("" + t).trim() : t + "px";
  }
  function Xd(r, t) {
    r = r.style;
    for (var e in t) if (t.hasOwnProperty(e)) {
      var s = e.indexOf("--") === 0, o = Yd(e, t[e], s);
      e === "float" && (e = "cssFloat"), s ? r.setProperty(e, o) : r[e] = o;
    }
  }
  var vu = ct({
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
  function Na(r, t) {
    if (t) {
      if (vu[r] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(C(137, r));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(C(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(C(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(C(62));
    }
  }
  function Fa(r, t) {
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
  var Ta = null;
  function ji(r) {
    return r = r.target || r.srcElement || window, r.correspondingUseElement && (r = r.correspondingUseElement), r.nodeType === 3 ? r.parentNode : r;
  }
  var Pa = null, wn = null, fn = null;
  function xc(r) {
    if (r = xo(r)) {
      if (typeof Pa != "function") throw Error(C(280));
      var t = r.stateNode;
      t && (t = Ps(t), Pa(r.stateNode, r.type, t));
    }
  }
  function Kd(r) {
    wn ? fn ? fn.push(r) : fn = [
      r
    ] : wn = r;
  }
  function Zd() {
    if (wn) {
      var r = wn, t = fn;
      if (fn = wn = null, xc(r), t) for (r = 0; r < t.length; r++) xc(t[r]);
    }
  }
  function Jd(r, t) {
    return r(t);
  }
  function Gd() {
  }
  var Gs = false;
  function tl(r, t, e) {
    if (Gs) return r(t, e);
    Gs = true;
    try {
      return Jd(r, t, e);
    } finally {
      Gs = false, (wn !== null || fn !== null) && (Gd(), Zd());
    }
  }
  function ro(r, t) {
    var e = r.stateNode;
    if (e === null) return null;
    var s = Ps(e);
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
    if (e && typeof e != "function") throw Error(C(231, t, typeof e));
    return e;
  }
  var Ra = false;
  if (n_) try {
    var Fn = {};
    Object.defineProperty(Fn, "passive", {
      get: function() {
        Ra = true;
      }
    }), window.addEventListener("test", Fn, Fn), window.removeEventListener("test", Fn, Fn);
  } catch {
    Ra = false;
  }
  function ku(r, t, e, s, o, n, c, d, p) {
    var l = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(e, l);
    } catch (m) {
      this.onError(m);
    }
  }
  var Bn = false, ss = null, as = false, $a = null, xu = {
    onError: function(r) {
      Bn = true, ss = r;
    }
  };
  function ju(r, t, e, s, o, n, c, d, p) {
    Bn = false, ss = null, ku.apply(xu, arguments);
  }
  function Su(r, t, e, s, o, n, c, d, p) {
    if (ju.apply(this, arguments), Bn) {
      if (Bn) {
        var l = ss;
        Bn = false, ss = null;
      } else throw Error(C(198));
      as || (as = true, $a = l);
    }
  }
  function Yr(r) {
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
  function el(r) {
    if (r.tag === 13) {
      var t = r.memoizedState;
      if (t === null && (r = r.alternate, r !== null && (t = r.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function jc(r) {
    if (Yr(r) !== r) throw Error(C(188));
  }
  function Eu(r) {
    var t = r.alternate;
    if (!t) {
      if (t = Yr(r), t === null) throw Error(C(188));
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
          if (n === e) return jc(o), r;
          if (n === s) return jc(o), t;
          n = n.sibling;
        }
        throw Error(C(188));
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
          if (!c) throw Error(C(189));
        }
      }
      if (e.alternate !== s) throw Error(C(190));
    }
    if (e.tag !== 3) throw Error(C(188));
    return e.stateNode.current === e ? r : t;
  }
  function _l(r) {
    return r = Eu(r), r !== null ? rl(r) : null;
  }
  function rl(r) {
    if (r.tag === 5 || r.tag === 6) return r;
    for (r = r.child; r !== null; ) {
      var t = rl(r);
      if (t !== null) return t;
      r = r.sibling;
    }
    return null;
  }
  var nl = re.unstable_scheduleCallback, Sc = re.unstable_cancelCallback, zu = re.unstable_shouldYield, Cu = re.unstable_requestPaint, ut = re.unstable_now, Ou = re.unstable_getCurrentPriorityLevel, Si = re.unstable_ImmediatePriority, ol = re.unstable_UserBlockingPriority, is = re.unstable_NormalPriority, Lu = re.unstable_LowPriority, sl = re.unstable_IdlePriority, Ls = null, Re = null;
  function Nu(r) {
    if (Re && typeof Re.onCommitFiberRoot == "function") try {
      Re.onCommitFiberRoot(Ls, r, void 0, (r.current.flags & 128) === 128);
    } catch {
    }
  }
  var ke = Math.clz32 ? Math.clz32 : Pu, Fu = Math.log, Tu = Math.LN2;
  function Pu(r) {
    return r >>>= 0, r === 0 ? 32 : 31 - (Fu(r) / Tu | 0) | 0;
  }
  var No = 64, Fo = 4194304;
  function Wn(r) {
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
  function cs(r, t) {
    var e = r.pendingLanes;
    if (e === 0) return 0;
    var s = 0, o = r.suspendedLanes, n = r.pingedLanes, c = e & 268435455;
    if (c !== 0) {
      var d = c & ~o;
      d !== 0 ? s = Wn(d) : (n &= c, n !== 0 && (s = Wn(n)));
    } else c = e & ~o, c !== 0 ? s = Wn(c) : n !== 0 && (s = Wn(n));
    if (s === 0) return 0;
    if (t !== 0 && t !== s && !(t & o) && (o = s & -s, n = t & -t, o >= n || o === 16 && (n & 4194240) !== 0)) return t;
    if (s & 4 && (s |= e & 16), t = r.entangledLanes, t !== 0) for (r = r.entanglements, t &= s; 0 < t; ) e = 31 - ke(t), o = 1 << e, s |= r[e], t &= ~o;
    return s;
  }
  function Ru(r, t) {
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
  function $u(r, t) {
    for (var e = r.suspendedLanes, s = r.pingedLanes, o = r.expirationTimes, n = r.pendingLanes; 0 < n; ) {
      var c = 31 - ke(n), d = 1 << c, p = o[c];
      p === -1 ? (!(d & e) || d & s) && (o[c] = Ru(d, t)) : p <= t && (r.expiredLanes |= d), n &= ~d;
    }
  }
  function Da(r) {
    return r = r.pendingLanes & -1073741825, r !== 0 ? r : r & 1073741824 ? 1073741824 : 0;
  }
  function al() {
    var r = No;
    return No <<= 1, !(No & 4194240) && (No = 64), r;
  }
  function ta(r) {
    for (var t = [], e = 0; 31 > e; e++) t.push(r);
    return t;
  }
  function vo(r, t, e) {
    r.pendingLanes |= t, t !== 536870912 && (r.suspendedLanes = 0, r.pingedLanes = 0), r = r.eventTimes, t = 31 - ke(t), r[t] = e;
  }
  function Du(r, t) {
    var e = r.pendingLanes & ~t;
    r.pendingLanes = t, r.suspendedLanes = 0, r.pingedLanes = 0, r.expiredLanes &= t, r.mutableReadLanes &= t, r.entangledLanes &= t, t = r.entanglements;
    var s = r.eventTimes;
    for (r = r.expirationTimes; 0 < e; ) {
      var o = 31 - ke(e), n = 1 << o;
      t[o] = 0, s[o] = -1, r[o] = -1, e &= ~n;
    }
  }
  function Ei(r, t) {
    var e = r.entangledLanes |= t;
    for (r = r.entanglements; e; ) {
      var s = 31 - ke(e), o = 1 << s;
      o & t | r[s] & t && (r[s] |= t), e &= ~o;
    }
  }
  var Z = 0;
  function il(r) {
    return r &= -r, 1 < r ? 4 < r ? r & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var cl, zi, dl, ll, pl, Ia = false, To = [], ar = null, ir = null, cr = null, no = /* @__PURE__ */ new Map(), oo = /* @__PURE__ */ new Map(), f_ = [], Iu = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ec(r, t) {
    switch (r) {
      case "focusin":
      case "focusout":
        ar = null;
        break;
      case "dragenter":
      case "dragleave":
        ir = null;
        break;
      case "mouseover":
      case "mouseout":
        cr = null;
        break;
      case "pointerover":
      case "pointerout":
        no.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        oo.delete(t.pointerId);
    }
  }
  function Tn(r, t, e, s, o, n) {
    return r === null || r.nativeEvent !== n ? (r = {
      blockedOn: t,
      domEventName: e,
      eventSystemFlags: s,
      nativeEvent: n,
      targetContainers: [
        o
      ]
    }, t !== null && (t = xo(t), t !== null && zi(t)), r) : (r.eventSystemFlags |= s, t = r.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), r);
  }
  function Uu(r, t, e, s, o) {
    switch (t) {
      case "focusin":
        return ar = Tn(ar, r, t, e, s, o), true;
      case "dragenter":
        return ir = Tn(ir, r, t, e, s, o), true;
      case "mouseover":
        return cr = Tn(cr, r, t, e, s, o), true;
      case "pointerover":
        var n = o.pointerId;
        return no.set(n, Tn(no.get(n) || null, r, t, e, s, o)), true;
      case "gotpointercapture":
        return n = o.pointerId, oo.set(n, Tn(oo.get(n) || null, r, t, e, s, o)), true;
    }
    return false;
  }
  function ul(r) {
    var t = zr(r.target);
    if (t !== null) {
      var e = Yr(t);
      if (e !== null) {
        if (t = e.tag, t === 13) {
          if (t = el(e), t !== null) {
            r.blockedOn = t, pl(r.priority, function() {
              dl(e);
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
  function Yo(r) {
    if (r.blockedOn !== null) return false;
    for (var t = r.targetContainers; 0 < t.length; ) {
      var e = Ua(r.domEventName, r.eventSystemFlags, t[0], r.nativeEvent);
      if (e === null) {
        e = r.nativeEvent;
        var s = new e.constructor(e.type, e);
        Ta = s, e.target.dispatchEvent(s), Ta = null;
      } else return t = xo(e), t !== null && zi(t), r.blockedOn = e, false;
      t.shift();
    }
    return true;
  }
  function zc(r, t, e) {
    Yo(r) && e.delete(t);
  }
  function Mu() {
    Ia = false, ar !== null && Yo(ar) && (ar = null), ir !== null && Yo(ir) && (ir = null), cr !== null && Yo(cr) && (cr = null), no.forEach(zc), oo.forEach(zc);
  }
  function Pn(r, t) {
    r.blockedOn === t && (r.blockedOn = null, Ia || (Ia = true, re.unstable_scheduleCallback(re.unstable_NormalPriority, Mu)));
  }
  function so(r) {
    function t(o) {
      return Pn(o, r);
    }
    if (0 < To.length) {
      Pn(To[0], r);
      for (var e = 1; e < To.length; e++) {
        var s = To[e];
        s.blockedOn === r && (s.blockedOn = null);
      }
    }
    for (ar !== null && Pn(ar, r), ir !== null && Pn(ir, r), cr !== null && Pn(cr, r), no.forEach(t), oo.forEach(t), e = 0; e < f_.length; e++) s = f_[e], s.blockedOn === r && (s.blockedOn = null);
    for (; 0 < f_.length && (e = f_[0], e.blockedOn === null); ) ul(e), e.blockedOn === null && f_.shift();
  }
  var gn = i_.ReactCurrentBatchConfig, ds = true;
  function Wu(r, t, e, s) {
    var o = Z, n = gn.transition;
    gn.transition = null;
    try {
      Z = 1, Ci(r, t, e, s);
    } finally {
      Z = o, gn.transition = n;
    }
  }
  function Qu(r, t, e, s) {
    var o = Z, n = gn.transition;
    gn.transition = null;
    try {
      Z = 4, Ci(r, t, e, s);
    } finally {
      Z = o, gn.transition = n;
    }
  }
  function Ci(r, t, e, s) {
    if (ds) {
      var o = Ua(r, t, e, s);
      if (o === null) da(r, t, s, ls, e), Ec(r, s);
      else if (Uu(o, r, t, e, s)) s.stopPropagation();
      else if (Ec(r, s), t & 4 && -1 < Iu.indexOf(r)) {
        for (; o !== null; ) {
          var n = xo(o);
          if (n !== null && cl(n), n = Ua(r, t, e, s), n === null && da(r, t, s, ls, e), n === o) break;
          o = n;
        }
        o !== null && s.stopPropagation();
      } else da(r, t, s, null, e);
    }
  }
  var ls = null;
  function Ua(r, t, e, s) {
    if (ls = null, r = ji(s), r = zr(r), r !== null) if (t = Yr(r), t === null) r = null;
    else if (e = t.tag, e === 13) {
      if (r = el(t), r !== null) return r;
      r = null;
    } else if (e === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      r = null;
    } else t !== r && (r = null);
    return ls = r, null;
  }
  function wl(r) {
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
        switch (Ou()) {
          case Si:
            return 1;
          case ol:
            return 4;
          case is:
          case Lu:
            return 16;
          case sl:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var rr = null, Oi = null, Xo = null;
  function fl() {
    if (Xo) return Xo;
    var r, t = Oi, e = t.length, s, o = "value" in rr ? rr.value : rr.textContent, n = o.length;
    for (r = 0; r < e && t[r] === o[r]; r++) ;
    var c = e - r;
    for (s = 1; s <= c && t[e - s] === o[n - s]; s++) ;
    return Xo = o.slice(r, 1 < s ? 1 - s : void 0);
  }
  function Ko(r) {
    var t = r.keyCode;
    return "charCode" in r ? (r = r.charCode, r === 0 && t === 13 && (r = 13)) : r = t, r === 10 && (r = 13), 32 <= r || r === 13 ? r : 0;
  }
  function Po() {
    return true;
  }
  function Cc() {
    return false;
  }
  function se(r) {
    function t(e, s, o, n, c) {
      this._reactName = e, this._targetInst = o, this.type = s, this.nativeEvent = n, this.target = c, this.currentTarget = null;
      for (var d in r) r.hasOwnProperty(d) && (e = r[d], this[d] = e ? e(n) : n[d]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === false) ? Po : Cc, this.isPropagationStopped = Cc, this;
    }
    return ct(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = true;
        var e = this.nativeEvent;
        e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = false), this.isDefaultPrevented = Po);
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = true), this.isPropagationStopped = Po);
      },
      persist: function() {
      },
      isPersistent: Po
    }), t;
  }
  var On = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(r) {
      return r.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Li = se(On), ko = ct({}, On, {
    view: 0,
    detail: 0
  }), Vu = se(ko), ea, _a, Rn, Ns = ct({}, ko, {
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
    getModifierState: Ni,
    button: 0,
    buttons: 0,
    relatedTarget: function(r) {
      return r.relatedTarget === void 0 ? r.fromElement === r.srcElement ? r.toElement : r.fromElement : r.relatedTarget;
    },
    movementX: function(r) {
      return "movementX" in r ? r.movementX : (r !== Rn && (Rn && r.type === "mousemove" ? (ea = r.screenX - Rn.screenX, _a = r.screenY - Rn.screenY) : _a = ea = 0, Rn = r), ea);
    },
    movementY: function(r) {
      return "movementY" in r ? r.movementY : _a;
    }
  }), Oc = se(Ns), Bu = ct({}, Ns, {
    dataTransfer: 0
  }), Au = se(Bu), Hu = ct({}, ko, {
    relatedTarget: 0
  }), ra = se(Hu), qu = ct({}, On, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Yu = se(qu), Xu = ct({}, On, {
    clipboardData: function(r) {
      return "clipboardData" in r ? r.clipboardData : window.clipboardData;
    }
  }), Ku = se(Xu), Zu = ct({}, On, {
    data: 0
  }), Lc = se(Zu), Ju = {
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
  }, Gu = {
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
  }, tw = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function ew(r) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(r) : (r = tw[r]) ? !!t[r] : false;
  }
  function Ni() {
    return ew;
  }
  var _w = ct({}, ko, {
    key: function(r) {
      if (r.key) {
        var t = Ju[r.key] || r.key;
        if (t !== "Unidentified") return t;
      }
      return r.type === "keypress" ? (r = Ko(r), r === 13 ? "Enter" : String.fromCharCode(r)) : r.type === "keydown" || r.type === "keyup" ? Gu[r.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ni,
    charCode: function(r) {
      return r.type === "keypress" ? Ko(r) : 0;
    },
    keyCode: function(r) {
      return r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0;
    },
    which: function(r) {
      return r.type === "keypress" ? Ko(r) : r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0;
    }
  }), rw = se(_w), nw = ct({}, Ns, {
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
  }), Nc = se(nw), ow = ct({}, ko, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ni
  }), sw = se(ow), aw = ct({}, On, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), iw = se(aw), cw = ct({}, Ns, {
    deltaX: function(r) {
      return "deltaX" in r ? r.deltaX : "wheelDeltaX" in r ? -r.wheelDeltaX : 0;
    },
    deltaY: function(r) {
      return "deltaY" in r ? r.deltaY : "wheelDeltaY" in r ? -r.wheelDeltaY : "wheelDelta" in r ? -r.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), dw = se(cw), lw = [
    9,
    13,
    27,
    32
  ], Fi = n_ && "CompositionEvent" in window, An = null;
  n_ && "documentMode" in document && (An = document.documentMode);
  var pw = n_ && "TextEvent" in window && !An, gl = n_ && (!Fi || An && 8 < An && 11 >= An), Fc = " ", Tc = false;
  function bl(r, t) {
    switch (r) {
      case "keyup":
        return lw.indexOf(t.keyCode) !== -1;
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
  function hl(r) {
    return r = r.detail, typeof r == "object" && "data" in r ? r.data : null;
  }
  var en = false;
  function uw(r, t) {
    switch (r) {
      case "compositionend":
        return hl(t);
      case "keypress":
        return t.which !== 32 ? null : (Tc = true, Fc);
      case "textInput":
        return r = t.data, r === Fc && Tc ? null : r;
      default:
        return null;
    }
  }
  function ww(r, t) {
    if (en) return r === "compositionend" || !Fi && bl(r, t) ? (r = fl(), Xo = Oi = rr = null, en = false, r) : null;
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
        return gl && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var fw = {
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
  function Pc(r) {
    var t = r && r.nodeName && r.nodeName.toLowerCase();
    return t === "input" ? !!fw[r.type] : t === "textarea";
  }
  function yl(r, t, e, s) {
    Kd(s), t = ps(t, "onChange"), 0 < t.length && (e = new Li("onChange", "change", null, e, s), r.push({
      event: e,
      listeners: t
    }));
  }
  var Hn = null, ao = null;
  function gw(r) {
    Ll(r, 0);
  }
  function Fs(r) {
    var t = nn(r);
    if (Vd(t)) return r;
  }
  function bw(r, t) {
    if (r === "change") return t;
  }
  var ml = false;
  if (n_) {
    var na;
    if (n_) {
      var oa = "oninput" in document;
      if (!oa) {
        var Rc = document.createElement("div");
        Rc.setAttribute("oninput", "return;"), oa = typeof Rc.oninput == "function";
      }
      na = oa;
    } else na = false;
    ml = na && (!document.documentMode || 9 < document.documentMode);
  }
  function $c() {
    Hn && (Hn.detachEvent("onpropertychange", vl), ao = Hn = null);
  }
  function vl(r) {
    if (r.propertyName === "value" && Fs(ao)) {
      var t = [];
      yl(t, ao, r, ji(r)), tl(gw, t);
    }
  }
  function hw(r, t, e) {
    r === "focusin" ? ($c(), Hn = t, ao = e, Hn.attachEvent("onpropertychange", vl)) : r === "focusout" && $c();
  }
  function yw(r) {
    if (r === "selectionchange" || r === "keyup" || r === "keydown") return Fs(ao);
  }
  function mw(r, t) {
    if (r === "click") return Fs(t);
  }
  function vw(r, t) {
    if (r === "input" || r === "change") return Fs(t);
  }
  function kw(r, t) {
    return r === t && (r !== 0 || 1 / r === 1 / t) || r !== r && t !== t;
  }
  var je = typeof Object.is == "function" ? Object.is : kw;
  function io(r, t) {
    if (je(r, t)) return true;
    if (typeof r != "object" || r === null || typeof t != "object" || t === null) return false;
    var e = Object.keys(r), s = Object.keys(t);
    if (e.length !== s.length) return false;
    for (s = 0; s < e.length; s++) {
      var o = e[s];
      if (!va.call(t, o) || !je(r[o], t[o])) return false;
    }
    return true;
  }
  function Dc(r) {
    for (; r && r.firstChild; ) r = r.firstChild;
    return r;
  }
  function Ic(r, t) {
    var e = Dc(r);
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
      e = Dc(e);
    }
  }
  function kl(r, t) {
    return r && t ? r === t ? true : r && r.nodeType === 3 ? false : t && t.nodeType === 3 ? kl(r, t.parentNode) : "contains" in r ? r.contains(t) : r.compareDocumentPosition ? !!(r.compareDocumentPosition(t) & 16) : false : false;
  }
  function xl() {
    for (var r = window, t = os(); t instanceof r.HTMLIFrameElement; ) {
      try {
        var e = typeof t.contentWindow.location.href == "string";
      } catch {
        e = false;
      }
      if (e) r = t.contentWindow;
      else break;
      t = os(r.document);
    }
    return t;
  }
  function Ti(r) {
    var t = r && r.nodeName && r.nodeName.toLowerCase();
    return t && (t === "input" && (r.type === "text" || r.type === "search" || r.type === "tel" || r.type === "url" || r.type === "password") || t === "textarea" || r.contentEditable === "true");
  }
  function xw(r) {
    var t = xl(), e = r.focusedElem, s = r.selectionRange;
    if (t !== e && e && e.ownerDocument && kl(e.ownerDocument.documentElement, e)) {
      if (s !== null && Ti(e)) {
        if (t = s.start, r = s.end, r === void 0 && (r = t), "selectionStart" in e) e.selectionStart = t, e.selectionEnd = Math.min(r, e.value.length);
        else if (r = (t = e.ownerDocument || document) && t.defaultView || window, r.getSelection) {
          r = r.getSelection();
          var o = e.textContent.length, n = Math.min(s.start, o);
          s = s.end === void 0 ? n : Math.min(s.end, o), !r.extend && n > s && (o = s, s = n, n = o), o = Ic(e, n);
          var c = Ic(e, s);
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
  var jw = n_ && "documentMode" in document && 11 >= document.documentMode, _n = null, Ma = null, qn = null, Wa = false;
  function Uc(r, t, e) {
    var s = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Wa || _n == null || _n !== os(s) || (s = _n, "selectionStart" in s && Ti(s) ? s = {
      start: s.selectionStart,
      end: s.selectionEnd
    } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = {
      anchorNode: s.anchorNode,
      anchorOffset: s.anchorOffset,
      focusNode: s.focusNode,
      focusOffset: s.focusOffset
    }), qn && io(qn, s) || (qn = s, s = ps(Ma, "onSelect"), 0 < s.length && (t = new Li("onSelect", "select", null, t, e), r.push({
      event: t,
      listeners: s
    }), t.target = _n)));
  }
  function Ro(r, t) {
    var e = {};
    return e[r.toLowerCase()] = t.toLowerCase(), e["Webkit" + r] = "webkit" + t, e["Moz" + r] = "moz" + t, e;
  }
  var rn = {
    animationend: Ro("Animation", "AnimationEnd"),
    animationiteration: Ro("Animation", "AnimationIteration"),
    animationstart: Ro("Animation", "AnimationStart"),
    transitionend: Ro("Transition", "TransitionEnd")
  }, sa = {}, jl = {};
  n_ && (jl = document.createElement("div").style, "AnimationEvent" in window || (delete rn.animationend.animation, delete rn.animationiteration.animation, delete rn.animationstart.animation), "TransitionEvent" in window || delete rn.transitionend.transition);
  function Ts(r) {
    if (sa[r]) return sa[r];
    if (!rn[r]) return r;
    var t = rn[r], e;
    for (e in t) if (t.hasOwnProperty(e) && e in jl) return sa[r] = t[e];
    return r;
  }
  var Sl = Ts("animationend"), El = Ts("animationiteration"), zl = Ts("animationstart"), Cl = Ts("transitionend"), Ol = /* @__PURE__ */ new Map(), Mc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function br(r, t) {
    Ol.set(r, t), qr(t, [
      r
    ]);
  }
  for (var aa = 0; aa < Mc.length; aa++) {
    var ia = Mc[aa], Sw = ia.toLowerCase(), Ew = ia[0].toUpperCase() + ia.slice(1);
    br(Sw, "on" + Ew);
  }
  br(Sl, "onAnimationEnd");
  br(El, "onAnimationIteration");
  br(zl, "onAnimationStart");
  br("dblclick", "onDoubleClick");
  br("focusin", "onFocus");
  br("focusout", "onBlur");
  br(Cl, "onTransitionEnd");
  vn("onMouseEnter", [
    "mouseout",
    "mouseover"
  ]);
  vn("onMouseLeave", [
    "mouseout",
    "mouseover"
  ]);
  vn("onPointerEnter", [
    "pointerout",
    "pointerover"
  ]);
  vn("onPointerLeave", [
    "pointerout",
    "pointerover"
  ]);
  qr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  qr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  qr("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]);
  qr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  qr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  qr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Qn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), zw = new Set("cancel close invalid load scroll toggle".split(" ").concat(Qn));
  function Wc(r, t, e) {
    var s = r.type || "unknown-event";
    r.currentTarget = e, Su(s, t, void 0, r), r.currentTarget = null;
  }
  function Ll(r, t) {
    t = (t & 4) !== 0;
    for (var e = 0; e < r.length; e++) {
      var s = r[e], o = s.event;
      s = s.listeners;
      t: {
        var n = void 0;
        if (t) for (var c = s.length - 1; 0 <= c; c--) {
          var d = s[c], p = d.instance, l = d.currentTarget;
          if (d = d.listener, p !== n && o.isPropagationStopped()) break t;
          Wc(o, d, l), n = p;
        }
        else for (c = 0; c < s.length; c++) {
          if (d = s[c], p = d.instance, l = d.currentTarget, d = d.listener, p !== n && o.isPropagationStopped()) break t;
          Wc(o, d, l), n = p;
        }
      }
    }
    if (as) throw r = $a, as = false, $a = null, r;
  }
  function tt(r, t) {
    var e = t[Ha];
    e === void 0 && (e = t[Ha] = /* @__PURE__ */ new Set());
    var s = r + "__bubble";
    e.has(s) || (Nl(t, r, 2, false), e.add(s));
  }
  function ca(r, t, e) {
    var s = 0;
    t && (s |= 4), Nl(e, r, s, t);
  }
  var $o = "_reactListening" + Math.random().toString(36).slice(2);
  function co(r) {
    if (!r[$o]) {
      r[$o] = true, Id.forEach(function(e) {
        e !== "selectionchange" && (zw.has(e) || ca(e, false, r), ca(e, true, r));
      });
      var t = r.nodeType === 9 ? r : r.ownerDocument;
      t === null || t[$o] || (t[$o] = true, ca("selectionchange", false, t));
    }
  }
  function Nl(r, t, e, s) {
    switch (wl(t)) {
      case 1:
        var o = Wu;
        break;
      case 4:
        o = Qu;
        break;
      default:
        o = Ci;
    }
    e = o.bind(null, t, e, r), o = void 0, !Ra || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = true), s ? o !== void 0 ? r.addEventListener(t, e, {
      capture: true,
      passive: o
    }) : r.addEventListener(t, e, true) : o !== void 0 ? r.addEventListener(t, e, {
      passive: o
    }) : r.addEventListener(t, e, false);
  }
  function da(r, t, e, s, o) {
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
          if (c = zr(d), c === null) return;
          if (p = c.tag, p === 5 || p === 6) {
            s = n = c;
            continue t;
          }
          d = d.parentNode;
        }
      }
      s = s.return;
    }
    tl(function() {
      var l = n, m = ji(e), x = [];
      t: {
        var k = Ol.get(r);
        if (k !== void 0) {
          var j = Li, L = r;
          switch (r) {
            case "keypress":
              if (Ko(e) === 0) break t;
            case "keydown":
            case "keyup":
              j = rw;
              break;
            case "focusin":
              L = "focus", j = ra;
              break;
            case "focusout":
              L = "blur", j = ra;
              break;
            case "beforeblur":
            case "afterblur":
              j = ra;
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
              j = Oc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              j = Au;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              j = sw;
              break;
            case Sl:
            case El:
            case zl:
              j = Yu;
              break;
            case Cl:
              j = iw;
              break;
            case "scroll":
              j = Vu;
              break;
            case "wheel":
              j = dw;
              break;
            case "copy":
            case "cut":
            case "paste":
              j = Ku;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              j = Nc;
          }
          var N = (t & 4) !== 0, A = !N && r === "scroll", y = N ? k !== null ? k + "Capture" : null : k;
          N = [];
          for (var b = l, v; b !== null; ) {
            v = b;
            var z = v.stateNode;
            if (v.tag === 5 && z !== null && (v = z, y !== null && (z = ro(b, y), z != null && N.push(lo(b, z, v)))), A) break;
            b = b.return;
          }
          0 < N.length && (k = new j(k, L, null, e, m), x.push({
            event: k,
            listeners: N
          }));
        }
      }
      if (!(t & 7)) {
        t: {
          if (k = r === "mouseover" || r === "pointerover", j = r === "mouseout" || r === "pointerout", k && e !== Ta && (L = e.relatedTarget || e.fromElement) && (zr(L) || L[o_])) break t;
          if ((j || k) && (k = m.window === m ? m : (k = m.ownerDocument) ? k.defaultView || k.parentWindow : window, j ? (L = e.relatedTarget || e.toElement, j = l, L = L ? zr(L) : null, L !== null && (A = Yr(L), L !== A || L.tag !== 5 && L.tag !== 6) && (L = null)) : (j = null, L = l), j !== L)) {
            if (N = Oc, z = "onMouseLeave", y = "onMouseEnter", b = "mouse", (r === "pointerout" || r === "pointerover") && (N = Nc, z = "onPointerLeave", y = "onPointerEnter", b = "pointer"), A = j == null ? k : nn(j), v = L == null ? k : nn(L), k = new N(z, b + "leave", j, e, m), k.target = A, k.relatedTarget = v, z = null, zr(m) === l && (N = new N(y, b + "enter", L, e, m), N.target = v, N.relatedTarget = A, z = N), A = z, j && L) e: {
              for (N = j, y = L, b = 0, v = N; v; v = Zr(v)) b++;
              for (v = 0, z = y; z; z = Zr(z)) v++;
              for (; 0 < b - v; ) N = Zr(N), b--;
              for (; 0 < v - b; ) y = Zr(y), v--;
              for (; b--; ) {
                if (N === y || y !== null && N === y.alternate) break e;
                N = Zr(N), y = Zr(y);
              }
              N = null;
            }
            else N = null;
            j !== null && Qc(x, k, j, N, false), L !== null && A !== null && Qc(x, A, L, N, true);
          }
        }
        t: {
          if (k = l ? nn(l) : window, j = k.nodeName && k.nodeName.toLowerCase(), j === "select" || j === "input" && k.type === "file") var F = bw;
          else if (Pc(k)) if (ml) F = vw;
          else {
            F = yw;
            var D = hw;
          }
          else (j = k.nodeName) && j.toLowerCase() === "input" && (k.type === "checkbox" || k.type === "radio") && (F = mw);
          if (F && (F = F(r, l))) {
            yl(x, F, e, m);
            break t;
          }
          D && D(r, k, l), r === "focusout" && (D = k._wrapperState) && D.controlled && k.type === "number" && Ca(k, "number", k.value);
        }
        switch (D = l ? nn(l) : window, r) {
          case "focusin":
            (Pc(D) || D.contentEditable === "true") && (_n = D, Ma = l, qn = null);
            break;
          case "focusout":
            qn = Ma = _n = null;
            break;
          case "mousedown":
            Wa = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Wa = false, Uc(x, e, m);
            break;
          case "selectionchange":
            if (jw) break;
          case "keydown":
          case "keyup":
            Uc(x, e, m);
        }
        var T;
        if (Fi) t: {
          switch (r) {
            case "compositionstart":
              var P = "onCompositionStart";
              break t;
            case "compositionend":
              P = "onCompositionEnd";
              break t;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break t;
          }
          P = void 0;
        }
        else en ? bl(r, e) && (P = "onCompositionEnd") : r === "keydown" && e.keyCode === 229 && (P = "onCompositionStart");
        P && (gl && e.locale !== "ko" && (en || P !== "onCompositionStart" ? P === "onCompositionEnd" && en && (T = fl()) : (rr = m, Oi = "value" in rr ? rr.value : rr.textContent, en = true)), D = ps(l, P), 0 < D.length && (P = new Lc(P, r, null, e, m), x.push({
          event: P,
          listeners: D
        }), T ? P.data = T : (T = hl(e), T !== null && (P.data = T)))), (T = pw ? uw(r, e) : ww(r, e)) && (l = ps(l, "onBeforeInput"), 0 < l.length && (m = new Lc("onBeforeInput", "beforeinput", null, e, m), x.push({
          event: m,
          listeners: l
        }), m.data = T));
      }
      Ll(x, t);
    });
  }
  function lo(r, t, e) {
    return {
      instance: r,
      listener: t,
      currentTarget: e
    };
  }
  function ps(r, t) {
    for (var e = t + "Capture", s = []; r !== null; ) {
      var o = r, n = o.stateNode;
      o.tag === 5 && n !== null && (o = n, n = ro(r, e), n != null && s.unshift(lo(r, n, o)), n = ro(r, t), n != null && s.push(lo(r, n, o))), r = r.return;
    }
    return s;
  }
  function Zr(r) {
    if (r === null) return null;
    do
      r = r.return;
    while (r && r.tag !== 5);
    return r || null;
  }
  function Qc(r, t, e, s, o) {
    for (var n = t._reactName, c = []; e !== null && e !== s; ) {
      var d = e, p = d.alternate, l = d.stateNode;
      if (p !== null && p === s) break;
      d.tag === 5 && l !== null && (d = l, o ? (p = ro(e, n), p != null && c.unshift(lo(e, p, d))) : o || (p = ro(e, n), p != null && c.push(lo(e, p, d)))), e = e.return;
    }
    c.length !== 0 && r.push({
      event: t,
      listeners: c
    });
  }
  var Cw = /\r\n?/g, Ow = /\u0000|\uFFFD/g;
  function Vc(r) {
    return (typeof r == "string" ? r : "" + r).replace(Cw, `
`).replace(Ow, "");
  }
  function Do(r, t, e) {
    if (t = Vc(t), Vc(r) !== t && e) throw Error(C(425));
  }
  function us() {
  }
  var Qa = null, Va = null;
  function Ba(r, t) {
    return r === "textarea" || r === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Aa = typeof setTimeout == "function" ? setTimeout : void 0, Lw = typeof clearTimeout == "function" ? clearTimeout : void 0, Bc = typeof Promise == "function" ? Promise : void 0, Nw = typeof queueMicrotask == "function" ? queueMicrotask : typeof Bc < "u" ? function(r) {
    return Bc.resolve(null).then(r).catch(Fw);
  } : Aa;
  function Fw(r) {
    setTimeout(function() {
      throw r;
    });
  }
  function la(r, t) {
    var e = t, s = 0;
    do {
      var o = e.nextSibling;
      if (r.removeChild(e), o && o.nodeType === 8) if (e = o.data, e === "/$") {
        if (s === 0) {
          r.removeChild(o), so(t);
          return;
        }
        s--;
      } else e !== "$" && e !== "$?" && e !== "$!" || s++;
      e = o;
    } while (e);
    so(t);
  }
  function dr(r) {
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
  function Ac(r) {
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
  var Ln = Math.random().toString(36).slice(2), Le = "__reactFiber$" + Ln, po = "__reactProps$" + Ln, o_ = "__reactContainer$" + Ln, Ha = "__reactEvents$" + Ln, Tw = "__reactListeners$" + Ln, Pw = "__reactHandles$" + Ln;
  function zr(r) {
    var t = r[Le];
    if (t) return t;
    for (var e = r.parentNode; e; ) {
      if (t = e[o_] || e[Le]) {
        if (e = t.alternate, t.child !== null || e !== null && e.child !== null) for (r = Ac(r); r !== null; ) {
          if (e = r[Le]) return e;
          r = Ac(r);
        }
        return t;
      }
      r = e, e = r.parentNode;
    }
    return null;
  }
  function xo(r) {
    return r = r[Le] || r[o_], !r || r.tag !== 5 && r.tag !== 6 && r.tag !== 13 && r.tag !== 3 ? null : r;
  }
  function nn(r) {
    if (r.tag === 5 || r.tag === 6) return r.stateNode;
    throw Error(C(33));
  }
  function Ps(r) {
    return r[po] || null;
  }
  var qa = [], on = -1;
  function hr(r) {
    return {
      current: r
    };
  }
  function rt(r) {
    0 > on || (r.current = qa[on], qa[on] = null, on--);
  }
  function G(r, t) {
    on++, qa[on] = r.current, r.current = t;
  }
  var gr = {}, Rt = hr(gr), Kt = hr(false), Qr = gr;
  function kn(r, t) {
    var e = r.type.contextTypes;
    if (!e) return gr;
    var s = r.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === t) return s.__reactInternalMemoizedMaskedChildContext;
    var o = {}, n;
    for (n in e) o[n] = t[n];
    return s && (r = r.stateNode, r.__reactInternalMemoizedUnmaskedChildContext = t, r.__reactInternalMemoizedMaskedChildContext = o), o;
  }
  function Zt(r) {
    return r = r.childContextTypes, r != null;
  }
  function ws() {
    rt(Kt), rt(Rt);
  }
  function Hc(r, t, e) {
    if (Rt.current !== gr) throw Error(C(168));
    G(Rt, t), G(Kt, e);
  }
  function Fl(r, t, e) {
    var s = r.stateNode;
    if (t = t.childContextTypes, typeof s.getChildContext != "function") return e;
    s = s.getChildContext();
    for (var o in s) if (!(o in t)) throw Error(C(108, hu(r) || "Unknown", o));
    return ct({}, e, s);
  }
  function fs(r) {
    return r = (r = r.stateNode) && r.__reactInternalMemoizedMergedChildContext || gr, Qr = Rt.current, G(Rt, r), G(Kt, Kt.current), true;
  }
  function qc(r, t, e) {
    var s = r.stateNode;
    if (!s) throw Error(C(169));
    e ? (r = Fl(r, t, Qr), s.__reactInternalMemoizedMergedChildContext = r, rt(Kt), rt(Rt), G(Rt, r)) : rt(Kt), G(Kt, e);
  }
  var We = null, Rs = false, pa = false;
  function Tl(r) {
    We === null ? We = [
      r
    ] : We.push(r);
  }
  function Rw(r) {
    Rs = true, Tl(r);
  }
  function yr() {
    if (!pa && We !== null) {
      pa = true;
      var r = 0, t = Z;
      try {
        var e = We;
        for (Z = 1; r < e.length; r++) {
          var s = e[r];
          do
            s = s(true);
          while (s !== null);
        }
        We = null, Rs = false;
      } catch (o) {
        throw We !== null && (We = We.slice(r + 1)), nl(Si, yr), o;
      } finally {
        Z = t, pa = false;
      }
    }
    return null;
  }
  var sn = [], an = 0, gs = null, bs = 0, ae = [], ie = 0, Vr = null, t_ = 1, e_ = "";
  function kr(r, t) {
    sn[an++] = bs, sn[an++] = gs, gs = r, bs = t;
  }
  function Pl(r, t, e) {
    ae[ie++] = t_, ae[ie++] = e_, ae[ie++] = Vr, Vr = r;
    var s = t_;
    r = e_;
    var o = 32 - ke(s) - 1;
    s &= ~(1 << o), e += 1;
    var n = 32 - ke(t) + o;
    if (30 < n) {
      var c = o - o % 5;
      n = (s & (1 << c) - 1).toString(32), s >>= c, o -= c, t_ = 1 << 32 - ke(t) + o | e << o | s, e_ = n + r;
    } else t_ = 1 << n | e << o | s, e_ = r;
  }
  function Pi(r) {
    r.return !== null && (kr(r, 1), Pl(r, 1, 0));
  }
  function Ri(r) {
    for (; r === gs; ) gs = sn[--an], sn[an] = null, bs = sn[--an], sn[an] = null;
    for (; r === Vr; ) Vr = ae[--ie], ae[ie] = null, e_ = ae[--ie], ae[ie] = null, t_ = ae[--ie], ae[ie] = null;
  }
  var _e = null, ee = null, nt = false, me = null;
  function Rl(r, t) {
    var e = de(5, null, null, 0);
    e.elementType = "DELETED", e.stateNode = t, e.return = r, t = r.deletions, t === null ? (r.deletions = [
      e
    ], r.flags |= 16) : t.push(e);
  }
  function Yc(r, t) {
    switch (r.tag) {
      case 5:
        var e = r.type;
        return t = t.nodeType !== 1 || e.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (r.stateNode = t, _e = r, ee = dr(t.firstChild), true) : false;
      case 6:
        return t = r.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (r.stateNode = t, _e = r, ee = null, true) : false;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (e = Vr !== null ? {
          id: t_,
          overflow: e_
        } : null, r.memoizedState = {
          dehydrated: t,
          treeContext: e,
          retryLane: 1073741824
        }, e = de(18, null, null, 0), e.stateNode = t, e.return = r, r.child = e, _e = r, ee = null, true) : false;
      default:
        return false;
    }
  }
  function Ya(r) {
    return (r.mode & 1) !== 0 && (r.flags & 128) === 0;
  }
  function Xa(r) {
    if (nt) {
      var t = ee;
      if (t) {
        var e = t;
        if (!Yc(r, t)) {
          if (Ya(r)) throw Error(C(418));
          t = dr(e.nextSibling);
          var s = _e;
          t && Yc(r, t) ? Rl(s, e) : (r.flags = r.flags & -4097 | 2, nt = false, _e = r);
        }
      } else {
        if (Ya(r)) throw Error(C(418));
        r.flags = r.flags & -4097 | 2, nt = false, _e = r;
      }
    }
  }
  function Xc(r) {
    for (r = r.return; r !== null && r.tag !== 5 && r.tag !== 3 && r.tag !== 13; ) r = r.return;
    _e = r;
  }
  function Io(r) {
    if (r !== _e) return false;
    if (!nt) return Xc(r), nt = true, false;
    var t;
    if ((t = r.tag !== 3) && !(t = r.tag !== 5) && (t = r.type, t = t !== "head" && t !== "body" && !Ba(r.type, r.memoizedProps)), t && (t = ee)) {
      if (Ya(r)) throw $l(), Error(C(418));
      for (; t; ) Rl(r, t), t = dr(t.nextSibling);
    }
    if (Xc(r), r.tag === 13) {
      if (r = r.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(C(317));
      t: {
        for (r = r.nextSibling, t = 0; r; ) {
          if (r.nodeType === 8) {
            var e = r.data;
            if (e === "/$") {
              if (t === 0) {
                ee = dr(r.nextSibling);
                break t;
              }
              t--;
            } else e !== "$" && e !== "$!" && e !== "$?" || t++;
          }
          r = r.nextSibling;
        }
        ee = null;
      }
    } else ee = _e ? dr(r.stateNode.nextSibling) : null;
    return true;
  }
  function $l() {
    for (var r = ee; r; ) r = dr(r.nextSibling);
  }
  function xn() {
    ee = _e = null, nt = false;
  }
  function $i(r) {
    me === null ? me = [
      r
    ] : me.push(r);
  }
  var $w = i_.ReactCurrentBatchConfig;
  function $n(r, t, e) {
    if (r = e.ref, r !== null && typeof r != "function" && typeof r != "object") {
      if (e._owner) {
        if (e = e._owner, e) {
          if (e.tag !== 1) throw Error(C(309));
          var s = e.stateNode;
        }
        if (!s) throw Error(C(147, r));
        var o = s, n = "" + r;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === n ? t.ref : (t = function(c) {
          var d = o.refs;
          c === null ? delete d[n] : d[n] = c;
        }, t._stringRef = n, t);
      }
      if (typeof r != "string") throw Error(C(284));
      if (!e._owner) throw Error(C(290, r));
    }
    return r;
  }
  function Uo(r, t) {
    throw r = Object.prototype.toString.call(t), Error(C(31, r === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : r));
  }
  function Kc(r) {
    var t = r._init;
    return t(r._payload);
  }
  function Dl(r) {
    function t(y, b) {
      if (r) {
        var v = y.deletions;
        v === null ? (y.deletions = [
          b
        ], y.flags |= 16) : v.push(b);
      }
    }
    function e(y, b) {
      if (!r) return null;
      for (; b !== null; ) t(y, b), b = b.sibling;
      return null;
    }
    function s(y, b) {
      for (y = /* @__PURE__ */ new Map(); b !== null; ) b.key !== null ? y.set(b.key, b) : y.set(b.index, b), b = b.sibling;
      return y;
    }
    function o(y, b) {
      return y = wr(y, b), y.index = 0, y.sibling = null, y;
    }
    function n(y, b, v) {
      return y.index = v, r ? (v = y.alternate, v !== null ? (v = v.index, v < b ? (y.flags |= 2, b) : v) : (y.flags |= 2, b)) : (y.flags |= 1048576, b);
    }
    function c(y) {
      return r && y.alternate === null && (y.flags |= 2), y;
    }
    function d(y, b, v, z) {
      return b === null || b.tag !== 6 ? (b = ya(v, y.mode, z), b.return = y, b) : (b = o(b, v), b.return = y, b);
    }
    function p(y, b, v, z) {
      var F = v.type;
      return F === tn ? m(y, b, v.props.children, z, v.key) : b !== null && (b.elementType === F || typeof F == "object" && F !== null && F.$$typeof === p_ && Kc(F) === b.type) ? (z = o(b, v.props), z.ref = $n(y, b, v), z.return = y, z) : (z = rs(v.type, v.key, v.props, null, y.mode, z), z.ref = $n(y, b, v), z.return = y, z);
    }
    function l(y, b, v, z) {
      return b === null || b.tag !== 4 || b.stateNode.containerInfo !== v.containerInfo || b.stateNode.implementation !== v.implementation ? (b = ma(v, y.mode, z), b.return = y, b) : (b = o(b, v.children || []), b.return = y, b);
    }
    function m(y, b, v, z, F) {
      return b === null || b.tag !== 7 ? (b = Wr(v, y.mode, z, F), b.return = y, b) : (b = o(b, v), b.return = y, b);
    }
    function x(y, b, v) {
      if (typeof b == "string" && b !== "" || typeof b == "number") return b = ya("" + b, y.mode, v), b.return = y, b;
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case Co:
            return v = rs(b.type, b.key, b.props, null, y.mode, v), v.ref = $n(y, null, b), v.return = y, v;
          case Gr:
            return b = ma(b, y.mode, v), b.return = y, b;
          case p_:
            var z = b._init;
            return x(y, z(b._payload), v);
        }
        if (Mn(b) || Nn(b)) return b = Wr(b, y.mode, v, null), b.return = y, b;
        Uo(y, b);
      }
      return null;
    }
    function k(y, b, v, z) {
      var F = b !== null ? b.key : null;
      if (typeof v == "string" && v !== "" || typeof v == "number") return F !== null ? null : d(y, b, "" + v, z);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case Co:
            return v.key === F ? p(y, b, v, z) : null;
          case Gr:
            return v.key === F ? l(y, b, v, z) : null;
          case p_:
            return F = v._init, k(y, b, F(v._payload), z);
        }
        if (Mn(v) || Nn(v)) return F !== null ? null : m(y, b, v, z, null);
        Uo(y, v);
      }
      return null;
    }
    function j(y, b, v, z, F) {
      if (typeof z == "string" && z !== "" || typeof z == "number") return y = y.get(v) || null, d(b, y, "" + z, F);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case Co:
            return y = y.get(z.key === null ? v : z.key) || null, p(b, y, z, F);
          case Gr:
            return y = y.get(z.key === null ? v : z.key) || null, l(b, y, z, F);
          case p_:
            var D = z._init;
            return j(y, b, v, D(z._payload), F);
        }
        if (Mn(z) || Nn(z)) return y = y.get(v) || null, m(b, y, z, F, null);
        Uo(b, z);
      }
      return null;
    }
    function L(y, b, v, z) {
      for (var F = null, D = null, T = b, P = b = 0, Y = null; T !== null && P < v.length; P++) {
        T.index > P ? (Y = T, T = null) : Y = T.sibling;
        var W = k(y, T, v[P], z);
        if (W === null) {
          T === null && (T = Y);
          break;
        }
        r && T && W.alternate === null && t(y, T), b = n(W, b, P), D === null ? F = W : D.sibling = W, D = W, T = Y;
      }
      if (P === v.length) return e(y, T), nt && kr(y, P), F;
      if (T === null) {
        for (; P < v.length; P++) T = x(y, v[P], z), T !== null && (b = n(T, b, P), D === null ? F = T : D.sibling = T, D = T);
        return nt && kr(y, P), F;
      }
      for (T = s(y, T); P < v.length; P++) Y = j(T, y, P, v[P], z), Y !== null && (r && Y.alternate !== null && T.delete(Y.key === null ? P : Y.key), b = n(Y, b, P), D === null ? F = Y : D.sibling = Y, D = Y);
      return r && T.forEach(function(wt) {
        return t(y, wt);
      }), nt && kr(y, P), F;
    }
    function N(y, b, v, z) {
      var F = Nn(v);
      if (typeof F != "function") throw Error(C(150));
      if (v = F.call(v), v == null) throw Error(C(151));
      for (var D = F = null, T = b, P = b = 0, Y = null, W = v.next(); T !== null && !W.done; P++, W = v.next()) {
        T.index > P ? (Y = T, T = null) : Y = T.sibling;
        var wt = k(y, T, W.value, z);
        if (wt === null) {
          T === null && (T = Y);
          break;
        }
        r && T && wt.alternate === null && t(y, T), b = n(wt, b, P), D === null ? F = wt : D.sibling = wt, D = wt, T = Y;
      }
      if (W.done) return e(y, T), nt && kr(y, P), F;
      if (T === null) {
        for (; !W.done; P++, W = v.next()) W = x(y, W.value, z), W !== null && (b = n(W, b, P), D === null ? F = W : D.sibling = W, D = W);
        return nt && kr(y, P), F;
      }
      for (T = s(y, T); !W.done; P++, W = v.next()) W = j(T, y, P, W.value, z), W !== null && (r && W.alternate !== null && T.delete(W.key === null ? P : W.key), b = n(W, b, P), D === null ? F = W : D.sibling = W, D = W);
      return r && T.forEach(function(Vt) {
        return t(y, Vt);
      }), nt && kr(y, P), F;
    }
    function A(y, b, v, z) {
      if (typeof v == "object" && v !== null && v.type === tn && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case Co:
            t: {
              for (var F = v.key, D = b; D !== null; ) {
                if (D.key === F) {
                  if (F = v.type, F === tn) {
                    if (D.tag === 7) {
                      e(y, D.sibling), b = o(D, v.props.children), b.return = y, y = b;
                      break t;
                    }
                  } else if (D.elementType === F || typeof F == "object" && F !== null && F.$$typeof === p_ && Kc(F) === D.type) {
                    e(y, D.sibling), b = o(D, v.props), b.ref = $n(y, D, v), b.return = y, y = b;
                    break t;
                  }
                  e(y, D);
                  break;
                } else t(y, D);
                D = D.sibling;
              }
              v.type === tn ? (b = Wr(v.props.children, y.mode, z, v.key), b.return = y, y = b) : (z = rs(v.type, v.key, v.props, null, y.mode, z), z.ref = $n(y, b, v), z.return = y, y = z);
            }
            return c(y);
          case Gr:
            t: {
              for (D = v.key; b !== null; ) {
                if (b.key === D) if (b.tag === 4 && b.stateNode.containerInfo === v.containerInfo && b.stateNode.implementation === v.implementation) {
                  e(y, b.sibling), b = o(b, v.children || []), b.return = y, y = b;
                  break t;
                } else {
                  e(y, b);
                  break;
                }
                else t(y, b);
                b = b.sibling;
              }
              b = ma(v, y.mode, z), b.return = y, y = b;
            }
            return c(y);
          case p_:
            return D = v._init, A(y, b, D(v._payload), z);
        }
        if (Mn(v)) return L(y, b, v, z);
        if (Nn(v)) return N(y, b, v, z);
        Uo(y, v);
      }
      return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, b !== null && b.tag === 6 ? (e(y, b.sibling), b = o(b, v), b.return = y, y = b) : (e(y, b), b = ya(v, y.mode, z), b.return = y, y = b), c(y)) : e(y, b);
    }
    return A;
  }
  var jn = Dl(true), Il = Dl(false), hs = hr(null), ys = null, cn = null, Di = null;
  function Ii() {
    Di = cn = ys = null;
  }
  function Ui(r) {
    var t = hs.current;
    rt(hs), r._currentValue = t;
  }
  function Ka(r, t, e) {
    for (; r !== null; ) {
      var s = r.alternate;
      if ((r.childLanes & t) !== t ? (r.childLanes |= t, s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t), r === e) break;
      r = r.return;
    }
  }
  function bn(r, t) {
    ys = r, Di = cn = null, r = r.dependencies, r !== null && r.firstContext !== null && (r.lanes & t && (Xt = true), r.firstContext = null);
  }
  function ue(r) {
    var t = r._currentValue;
    if (Di !== r) if (r = {
      context: r,
      memoizedValue: t,
      next: null
    }, cn === null) {
      if (ys === null) throw Error(C(308));
      cn = r, ys.dependencies = {
        lanes: 0,
        firstContext: r
      };
    } else cn = cn.next = r;
    return t;
  }
  var Cr = null;
  function Mi(r) {
    Cr === null ? Cr = [
      r
    ] : Cr.push(r);
  }
  function Ul(r, t, e, s) {
    var o = t.interleaved;
    return o === null ? (e.next = e, Mi(t)) : (e.next = o.next, o.next = e), t.interleaved = e, s_(r, s);
  }
  function s_(r, t) {
    r.lanes |= t;
    var e = r.alternate;
    for (e !== null && (e.lanes |= t), e = r, r = r.return; r !== null; ) r.childLanes |= t, e = r.alternate, e !== null && (e.childLanes |= t), e = r, r = r.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var u_ = false;
  function Wi(r) {
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
  function Ml(r, t) {
    r = r.updateQueue, t.updateQueue === r && (t.updateQueue = {
      baseState: r.baseState,
      firstBaseUpdate: r.firstBaseUpdate,
      lastBaseUpdate: r.lastBaseUpdate,
      shared: r.shared,
      effects: r.effects
    });
  }
  function r_(r, t) {
    return {
      eventTime: r,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function lr(r, t, e) {
    var s = r.updateQueue;
    if (s === null) return null;
    if (s = s.shared, q & 2) {
      var o = s.pending;
      return o === null ? t.next = t : (t.next = o.next, o.next = t), s.pending = t, s_(r, e);
    }
    return o = s.interleaved, o === null ? (t.next = t, Mi(s)) : (t.next = o.next, o.next = t), s.interleaved = t, s_(r, e);
  }
  function Zo(r, t, e) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (e & 4194240) !== 0)) {
      var s = t.lanes;
      s &= r.pendingLanes, e |= s, t.lanes = e, Ei(r, e);
    }
  }
  function Zc(r, t) {
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
  function ms(r, t, e, s) {
    var o = r.updateQueue;
    u_ = false;
    var n = o.firstBaseUpdate, c = o.lastBaseUpdate, d = o.shared.pending;
    if (d !== null) {
      o.shared.pending = null;
      var p = d, l = p.next;
      p.next = null, c === null ? n = l : c.next = l, c = p;
      var m = r.alternate;
      m !== null && (m = m.updateQueue, d = m.lastBaseUpdate, d !== c && (d === null ? m.firstBaseUpdate = l : d.next = l, m.lastBaseUpdate = p));
    }
    if (n !== null) {
      var x = o.baseState;
      c = 0, m = l = p = null, d = n;
      do {
        var k = d.lane, j = d.eventTime;
        if ((s & k) === k) {
          m !== null && (m = m.next = {
            eventTime: j,
            lane: 0,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null
          });
          t: {
            var L = r, N = d;
            switch (k = t, j = e, N.tag) {
              case 1:
                if (L = N.payload, typeof L == "function") {
                  x = L.call(j, x, k);
                  break t;
                }
                x = L;
                break t;
              case 3:
                L.flags = L.flags & -65537 | 128;
              case 0:
                if (L = N.payload, k = typeof L == "function" ? L.call(j, x, k) : L, k == null) break t;
                x = ct({}, x, k);
                break t;
              case 2:
                u_ = true;
            }
          }
          d.callback !== null && d.lane !== 0 && (r.flags |= 64, k = o.effects, k === null ? o.effects = [
            d
          ] : k.push(d));
        } else j = {
          eventTime: j,
          lane: k,
          tag: d.tag,
          payload: d.payload,
          callback: d.callback,
          next: null
        }, m === null ? (l = m = j, p = x) : m = m.next = j, c |= k;
        if (d = d.next, d === null) {
          if (d = o.shared.pending, d === null) break;
          k = d, d = k.next, k.next = null, o.lastBaseUpdate = k, o.shared.pending = null;
        }
      } while (true);
      if (m === null && (p = x), o.baseState = p, o.firstBaseUpdate = l, o.lastBaseUpdate = m, t = o.shared.interleaved, t !== null) {
        o = t;
        do
          c |= o.lane, o = o.next;
        while (o !== t);
      } else n === null && (o.shared.lanes = 0);
      Ar |= c, r.lanes = c, r.memoizedState = x;
    }
  }
  function Jc(r, t, e) {
    if (r = t.effects, t.effects = null, r !== null) for (t = 0; t < r.length; t++) {
      var s = r[t], o = s.callback;
      if (o !== null) {
        if (s.callback = null, s = e, typeof o != "function") throw Error(C(191, o));
        o.call(s);
      }
    }
  }
  var jo = {}, $e = hr(jo), uo = hr(jo), wo = hr(jo);
  function Or(r) {
    if (r === jo) throw Error(C(174));
    return r;
  }
  function Qi(r, t) {
    switch (G(wo, t), G(uo, r), G($e, jo), r = t.nodeType, r) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : La(null, "");
        break;
      default:
        r = r === 8 ? t.parentNode : t, t = r.namespaceURI || null, r = r.tagName, t = La(t, r);
    }
    rt($e), G($e, t);
  }
  function Sn() {
    rt($e), rt(uo), rt(wo);
  }
  function Wl(r) {
    Or(wo.current);
    var t = Or($e.current), e = La(t, r.type);
    t !== e && (G(uo, r), G($e, e));
  }
  function Vi(r) {
    uo.current === r && (rt($e), rt(uo));
  }
  var at = hr(0);
  function vs(r) {
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
  var ua = [];
  function Bi() {
    for (var r = 0; r < ua.length; r++) ua[r]._workInProgressVersionPrimary = null;
    ua.length = 0;
  }
  var Jo = i_.ReactCurrentDispatcher, wa = i_.ReactCurrentBatchConfig, Br = 0, it = null, gt = null, vt = null, ks = false, Yn = false, fo = 0, Dw = 0;
  function Lt() {
    throw Error(C(321));
  }
  function Ai(r, t) {
    if (t === null) return false;
    for (var e = 0; e < t.length && e < r.length; e++) if (!je(r[e], t[e])) return false;
    return true;
  }
  function Hi(r, t, e, s, o, n) {
    if (Br = n, it = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Jo.current = r === null || r.memoizedState === null ? Ww : Qw, r = e(s, o), Yn) {
      n = 0;
      do {
        if (Yn = false, fo = 0, 25 <= n) throw Error(C(301));
        n += 1, vt = gt = null, t.updateQueue = null, Jo.current = Vw, r = e(s, o);
      } while (Yn);
    }
    if (Jo.current = xs, t = gt !== null && gt.next !== null, Br = 0, vt = gt = it = null, ks = false, t) throw Error(C(300));
    return r;
  }
  function qi() {
    var r = fo !== 0;
    return fo = 0, r;
  }
  function ze() {
    var r = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return vt === null ? it.memoizedState = vt = r : vt = vt.next = r, vt;
  }
  function we() {
    if (gt === null) {
      var r = it.alternate;
      r = r !== null ? r.memoizedState : null;
    } else r = gt.next;
    var t = vt === null ? it.memoizedState : vt.next;
    if (t !== null) vt = t, gt = r;
    else {
      if (r === null) throw Error(C(310));
      gt = r, r = {
        memoizedState: gt.memoizedState,
        baseState: gt.baseState,
        baseQueue: gt.baseQueue,
        queue: gt.queue,
        next: null
      }, vt === null ? it.memoizedState = vt = r : vt = vt.next = r;
    }
    return vt;
  }
  function go(r, t) {
    return typeof t == "function" ? t(r) : t;
  }
  function fa(r) {
    var t = we(), e = t.queue;
    if (e === null) throw Error(C(311));
    e.lastRenderedReducer = r;
    var s = gt, o = s.baseQueue, n = e.pending;
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
        var m = l.lane;
        if ((Br & m) === m) p !== null && (p = p.next = {
          lane: 0,
          action: l.action,
          hasEagerState: l.hasEagerState,
          eagerState: l.eagerState,
          next: null
        }), s = l.hasEagerState ? l.eagerState : r(s, l.action);
        else {
          var x = {
            lane: m,
            action: l.action,
            hasEagerState: l.hasEagerState,
            eagerState: l.eagerState,
            next: null
          };
          p === null ? (d = p = x, c = s) : p = p.next = x, it.lanes |= m, Ar |= m;
        }
        l = l.next;
      } while (l !== null && l !== n);
      p === null ? c = s : p.next = d, je(s, t.memoizedState) || (Xt = true), t.memoizedState = s, t.baseState = c, t.baseQueue = p, e.lastRenderedState = s;
    }
    if (r = e.interleaved, r !== null) {
      o = r;
      do
        n = o.lane, it.lanes |= n, Ar |= n, o = o.next;
      while (o !== r);
    } else o === null && (e.lanes = 0);
    return [
      t.memoizedState,
      e.dispatch
    ];
  }
  function ga(r) {
    var t = we(), e = t.queue;
    if (e === null) throw Error(C(311));
    e.lastRenderedReducer = r;
    var s = e.dispatch, o = e.pending, n = t.memoizedState;
    if (o !== null) {
      e.pending = null;
      var c = o = o.next;
      do
        n = r(n, c.action), c = c.next;
      while (c !== o);
      je(n, t.memoizedState) || (Xt = true), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), e.lastRenderedState = n;
    }
    return [
      n,
      s
    ];
  }
  function Ql() {
  }
  function Vl(r, t) {
    var e = it, s = we(), o = t(), n = !je(s.memoizedState, o);
    if (n && (s.memoizedState = o, Xt = true), s = s.queue, Yi(Hl.bind(null, e, s, r), [
      r
    ]), s.getSnapshot !== t || n || vt !== null && vt.memoizedState.tag & 1) {
      if (e.flags |= 2048, bo(9, Al.bind(null, e, s, o, t), void 0, null), xt === null) throw Error(C(349));
      Br & 30 || Bl(e, t, o);
    }
    return o;
  }
  function Bl(r, t, e) {
    r.flags |= 16384, r = {
      getSnapshot: t,
      value: e
    }, t = it.updateQueue, t === null ? (t = {
      lastEffect: null,
      stores: null
    }, it.updateQueue = t, t.stores = [
      r
    ]) : (e = t.stores, e === null ? t.stores = [
      r
    ] : e.push(r));
  }
  function Al(r, t, e, s) {
    t.value = e, t.getSnapshot = s, ql(t) && Yl(r);
  }
  function Hl(r, t, e) {
    return e(function() {
      ql(t) && Yl(r);
    });
  }
  function ql(r) {
    var t = r.getSnapshot;
    r = r.value;
    try {
      var e = t();
      return !je(r, e);
    } catch {
      return true;
    }
  }
  function Yl(r) {
    var t = s_(r, 1);
    t !== null && xe(t, r, 1, -1);
  }
  function Gc(r) {
    var t = ze();
    return typeof r == "function" && (r = r()), t.memoizedState = t.baseState = r, r = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: go,
      lastRenderedState: r
    }, t.queue = r, r = r.dispatch = Mw.bind(null, it, r), [
      t.memoizedState,
      r
    ];
  }
  function bo(r, t, e, s) {
    return r = {
      tag: r,
      create: t,
      destroy: e,
      deps: s,
      next: null
    }, t = it.updateQueue, t === null ? (t = {
      lastEffect: null,
      stores: null
    }, it.updateQueue = t, t.lastEffect = r.next = r) : (e = t.lastEffect, e === null ? t.lastEffect = r.next = r : (s = e.next, e.next = r, r.next = s, t.lastEffect = r)), r;
  }
  function Xl() {
    return we().memoizedState;
  }
  function Go(r, t, e, s) {
    var o = ze();
    it.flags |= r, o.memoizedState = bo(1 | t, e, void 0, s === void 0 ? null : s);
  }
  function $s(r, t, e, s) {
    var o = we();
    s = s === void 0 ? null : s;
    var n = void 0;
    if (gt !== null) {
      var c = gt.memoizedState;
      if (n = c.destroy, s !== null && Ai(s, c.deps)) {
        o.memoizedState = bo(t, e, n, s);
        return;
      }
    }
    it.flags |= r, o.memoizedState = bo(1 | t, e, n, s);
  }
  function td(r, t) {
    return Go(8390656, 8, r, t);
  }
  function Yi(r, t) {
    return $s(2048, 8, r, t);
  }
  function Kl(r, t) {
    return $s(4, 2, r, t);
  }
  function Zl(r, t) {
    return $s(4, 4, r, t);
  }
  function Jl(r, t) {
    if (typeof t == "function") return r = r(), t(r), function() {
      t(null);
    };
    if (t != null) return r = r(), t.current = r, function() {
      t.current = null;
    };
  }
  function Gl(r, t, e) {
    return e = e != null ? e.concat([
      r
    ]) : null, $s(4, 4, Jl.bind(null, t, r), e);
  }
  function Xi() {
  }
  function tp(r, t) {
    var e = we();
    t = t === void 0 ? null : t;
    var s = e.memoizedState;
    return s !== null && t !== null && Ai(t, s[1]) ? s[0] : (e.memoizedState = [
      r,
      t
    ], r);
  }
  function ep(r, t) {
    var e = we();
    t = t === void 0 ? null : t;
    var s = e.memoizedState;
    return s !== null && t !== null && Ai(t, s[1]) ? s[0] : (r = r(), e.memoizedState = [
      r,
      t
    ], r);
  }
  function _p(r, t, e) {
    return Br & 21 ? (je(e, t) || (e = al(), it.lanes |= e, Ar |= e, r.baseState = true), t) : (r.baseState && (r.baseState = false, Xt = true), r.memoizedState = e);
  }
  function Iw(r, t) {
    var e = Z;
    Z = e !== 0 && 4 > e ? e : 4, r(true);
    var s = wa.transition;
    wa.transition = {};
    try {
      r(false), t();
    } finally {
      Z = e, wa.transition = s;
    }
  }
  function rp() {
    return we().memoizedState;
  }
  function Uw(r, t, e) {
    var s = ur(r);
    if (e = {
      lane: s,
      action: e,
      hasEagerState: false,
      eagerState: null,
      next: null
    }, np(r)) op(t, e);
    else if (e = Ul(r, t, e, s), e !== null) {
      var o = Mt();
      xe(e, r, s, o), sp(e, t, s);
    }
  }
  function Mw(r, t, e) {
    var s = ur(r), o = {
      lane: s,
      action: e,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (np(r)) op(t, o);
    else {
      var n = r.alternate;
      if (r.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null)) try {
        var c = t.lastRenderedState, d = n(c, e);
        if (o.hasEagerState = true, o.eagerState = d, je(d, c)) {
          var p = t.interleaved;
          p === null ? (o.next = o, Mi(t)) : (o.next = p.next, p.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
      e = Ul(r, t, o, s), e !== null && (o = Mt(), xe(e, r, s, o), sp(e, t, s));
    }
  }
  function np(r) {
    var t = r.alternate;
    return r === it || t !== null && t === it;
  }
  function op(r, t) {
    Yn = ks = true;
    var e = r.pending;
    e === null ? t.next = t : (t.next = e.next, e.next = t), r.pending = t;
  }
  function sp(r, t, e) {
    if (e & 4194240) {
      var s = t.lanes;
      s &= r.pendingLanes, e |= s, t.lanes = e, Ei(r, e);
    }
  }
  var xs = {
    readContext: ue,
    useCallback: Lt,
    useContext: Lt,
    useEffect: Lt,
    useImperativeHandle: Lt,
    useInsertionEffect: Lt,
    useLayoutEffect: Lt,
    useMemo: Lt,
    useReducer: Lt,
    useRef: Lt,
    useState: Lt,
    useDebugValue: Lt,
    useDeferredValue: Lt,
    useTransition: Lt,
    useMutableSource: Lt,
    useSyncExternalStore: Lt,
    useId: Lt,
    unstable_isNewReconciler: false
  }, Ww = {
    readContext: ue,
    useCallback: function(r, t) {
      return ze().memoizedState = [
        r,
        t === void 0 ? null : t
      ], r;
    },
    useContext: ue,
    useEffect: td,
    useImperativeHandle: function(r, t, e) {
      return e = e != null ? e.concat([
        r
      ]) : null, Go(4194308, 4, Jl.bind(null, t, r), e);
    },
    useLayoutEffect: function(r, t) {
      return Go(4194308, 4, r, t);
    },
    useInsertionEffect: function(r, t) {
      return Go(4, 2, r, t);
    },
    useMemo: function(r, t) {
      var e = ze();
      return t = t === void 0 ? null : t, r = r(), e.memoizedState = [
        r,
        t
      ], r;
    },
    useReducer: function(r, t, e) {
      var s = ze();
      return t = e !== void 0 ? e(t) : t, s.memoizedState = s.baseState = t, r = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: r,
        lastRenderedState: t
      }, s.queue = r, r = r.dispatch = Uw.bind(null, it, r), [
        s.memoizedState,
        r
      ];
    },
    useRef: function(r) {
      var t = ze();
      return r = {
        current: r
      }, t.memoizedState = r;
    },
    useState: Gc,
    useDebugValue: Xi,
    useDeferredValue: function(r) {
      return ze().memoizedState = r;
    },
    useTransition: function() {
      var r = Gc(false), t = r[0];
      return r = Iw.bind(null, r[1]), ze().memoizedState = r, [
        t,
        r
      ];
    },
    useMutableSource: function() {
    },
    useSyncExternalStore: function(r, t, e) {
      var s = it, o = ze();
      if (nt) {
        if (e === void 0) throw Error(C(407));
        e = e();
      } else {
        if (e = t(), xt === null) throw Error(C(349));
        Br & 30 || Bl(s, t, e);
      }
      o.memoizedState = e;
      var n = {
        value: e,
        getSnapshot: t
      };
      return o.queue = n, td(Hl.bind(null, s, n, r), [
        r
      ]), s.flags |= 2048, bo(9, Al.bind(null, s, n, e, t), void 0, null), e;
    },
    useId: function() {
      var r = ze(), t = xt.identifierPrefix;
      if (nt) {
        var e = e_, s = t_;
        e = (s & ~(1 << 32 - ke(s) - 1)).toString(32) + e, t = ":" + t + "R" + e, e = fo++, 0 < e && (t += "H" + e.toString(32)), t += ":";
      } else e = Dw++, t = ":" + t + "r" + e.toString(32) + ":";
      return r.memoizedState = t;
    },
    unstable_isNewReconciler: false
  }, Qw = {
    readContext: ue,
    useCallback: tp,
    useContext: ue,
    useEffect: Yi,
    useImperativeHandle: Gl,
    useInsertionEffect: Kl,
    useLayoutEffect: Zl,
    useMemo: ep,
    useReducer: fa,
    useRef: Xl,
    useState: function() {
      return fa(go);
    },
    useDebugValue: Xi,
    useDeferredValue: function(r) {
      var t = we();
      return _p(t, gt.memoizedState, r);
    },
    useTransition: function() {
      var r = fa(go)[0], t = we().memoizedState;
      return [
        r,
        t
      ];
    },
    useMutableSource: Ql,
    useSyncExternalStore: Vl,
    useId: rp,
    unstable_isNewReconciler: false
  }, Vw = {
    readContext: ue,
    useCallback: tp,
    useContext: ue,
    useEffect: Yi,
    useImperativeHandle: Gl,
    useInsertionEffect: Kl,
    useLayoutEffect: Zl,
    useMemo: ep,
    useReducer: ga,
    useRef: Xl,
    useState: function() {
      return ga(go);
    },
    useDebugValue: Xi,
    useDeferredValue: function(r) {
      var t = we();
      return gt === null ? t.memoizedState = r : _p(t, gt.memoizedState, r);
    },
    useTransition: function() {
      var r = ga(go)[0], t = we().memoizedState;
      return [
        r,
        t
      ];
    },
    useMutableSource: Ql,
    useSyncExternalStore: Vl,
    useId: rp,
    unstable_isNewReconciler: false
  };
  function be(r, t) {
    if (r && r.defaultProps) {
      t = ct({}, t), r = r.defaultProps;
      for (var e in r) t[e] === void 0 && (t[e] = r[e]);
      return t;
    }
    return t;
  }
  function Za(r, t, e, s) {
    t = r.memoizedState, e = e(s, t), e = e == null ? t : ct({}, t, e), r.memoizedState = e, r.lanes === 0 && (r.updateQueue.baseState = e);
  }
  var Ds = {
    isMounted: function(r) {
      return (r = r._reactInternals) ? Yr(r) === r : false;
    },
    enqueueSetState: function(r, t, e) {
      r = r._reactInternals;
      var s = Mt(), o = ur(r), n = r_(s, o);
      n.payload = t, e != null && (n.callback = e), t = lr(r, n, o), t !== null && (xe(t, r, o, s), Zo(t, r, o));
    },
    enqueueReplaceState: function(r, t, e) {
      r = r._reactInternals;
      var s = Mt(), o = ur(r), n = r_(s, o);
      n.tag = 1, n.payload = t, e != null && (n.callback = e), t = lr(r, n, o), t !== null && (xe(t, r, o, s), Zo(t, r, o));
    },
    enqueueForceUpdate: function(r, t) {
      r = r._reactInternals;
      var e = Mt(), s = ur(r), o = r_(e, s);
      o.tag = 2, t != null && (o.callback = t), t = lr(r, o, s), t !== null && (xe(t, r, s, e), Zo(t, r, s));
    }
  };
  function ed(r, t, e, s, o, n, c) {
    return r = r.stateNode, typeof r.shouldComponentUpdate == "function" ? r.shouldComponentUpdate(s, n, c) : t.prototype && t.prototype.isPureReactComponent ? !io(e, s) || !io(o, n) : true;
  }
  function ap(r, t, e) {
    var s = false, o = gr, n = t.contextType;
    return typeof n == "object" && n !== null ? n = ue(n) : (o = Zt(t) ? Qr : Rt.current, s = t.contextTypes, n = (s = s != null) ? kn(r, o) : gr), t = new t(e, n), r.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ds, r.stateNode = t, t._reactInternals = r, s && (r = r.stateNode, r.__reactInternalMemoizedUnmaskedChildContext = o, r.__reactInternalMemoizedMaskedChildContext = n), t;
  }
  function _d(r, t, e, s) {
    r = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(e, s), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(e, s), t.state !== r && Ds.enqueueReplaceState(t, t.state, null);
  }
  function Ja(r, t, e, s) {
    var o = r.stateNode;
    o.props = e, o.state = r.memoizedState, o.refs = {}, Wi(r);
    var n = t.contextType;
    typeof n == "object" && n !== null ? o.context = ue(n) : (n = Zt(t) ? Qr : Rt.current, o.context = kn(r, n)), o.state = r.memoizedState, n = t.getDerivedStateFromProps, typeof n == "function" && (Za(r, t, n, e), o.state = r.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Ds.enqueueReplaceState(o, o.state, null), ms(r, e, o, s), o.state = r.memoizedState), typeof o.componentDidMount == "function" && (r.flags |= 4194308);
  }
  function En(r, t) {
    try {
      var e = "", s = t;
      do
        e += bu(s), s = s.return;
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
  function ba(r, t, e) {
    return {
      value: r,
      source: null,
      stack: e ?? null,
      digest: t ?? null
    };
  }
  function Ga(r, t) {
    try {
      console.error(t.value);
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  var Bw = typeof WeakMap == "function" ? WeakMap : Map;
  function ip(r, t, e) {
    e = r_(-1, e), e.tag = 3, e.payload = {
      element: null
    };
    var s = t.value;
    return e.callback = function() {
      Ss || (Ss = true, ci = s), Ga(r, t);
    }, e;
  }
  function cp(r, t, e) {
    e = r_(-1, e), e.tag = 3;
    var s = r.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var o = t.value;
      e.payload = function() {
        return s(o);
      }, e.callback = function() {
        Ga(r, t);
      };
    }
    var n = r.stateNode;
    return n !== null && typeof n.componentDidCatch == "function" && (e.callback = function() {
      Ga(r, t), typeof s != "function" && (pr === null ? pr = /* @__PURE__ */ new Set([
        this
      ]) : pr.add(this));
      var c = t.stack;
      this.componentDidCatch(t.value, {
        componentStack: c !== null ? c : ""
      });
    }), e;
  }
  function rd(r, t, e) {
    var s = r.pingCache;
    if (s === null) {
      s = r.pingCache = new Bw();
      var o = /* @__PURE__ */ new Set();
      s.set(t, o);
    } else o = s.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), s.set(t, o));
    o.has(e) || (o.add(e), r = nf.bind(null, r, t, e), t.then(r, r));
  }
  function nd(r) {
    do {
      var t;
      if ((t = r.tag === 13) && (t = r.memoizedState, t = t !== null ? t.dehydrated !== null : true), t) return r;
      r = r.return;
    } while (r !== null);
    return null;
  }
  function od(r, t, e, s, o) {
    return r.mode & 1 ? (r.flags |= 65536, r.lanes = o, r) : (r === t ? r.flags |= 65536 : (r.flags |= 128, e.flags |= 131072, e.flags &= -52805, e.tag === 1 && (e.alternate === null ? e.tag = 17 : (t = r_(-1, 1), t.tag = 2, lr(e, t, 1))), e.lanes |= 1), r);
  }
  var Aw = i_.ReactCurrentOwner, Xt = false;
  function Dt(r, t, e, s) {
    t.child = r === null ? Il(t, null, e, s) : jn(t, r.child, e, s);
  }
  function sd(r, t, e, s, o) {
    e = e.render;
    var n = t.ref;
    return bn(t, o), s = Hi(r, t, e, s, n, o), e = qi(), r !== null && !Xt ? (t.updateQueue = r.updateQueue, t.flags &= -2053, r.lanes &= ~o, a_(r, t, o)) : (nt && e && Pi(t), t.flags |= 1, Dt(r, t, s, o), t.child);
  }
  function ad(r, t, e, s, o) {
    if (r === null) {
      var n = e.type;
      return typeof n == "function" && !rc(n) && n.defaultProps === void 0 && e.compare === null && e.defaultProps === void 0 ? (t.tag = 15, t.type = n, dp(r, t, n, s, o)) : (r = rs(e.type, null, s, t, t.mode, o), r.ref = t.ref, r.return = t, t.child = r);
    }
    if (n = r.child, !(r.lanes & o)) {
      var c = n.memoizedProps;
      if (e = e.compare, e = e !== null ? e : io, e(c, s) && r.ref === t.ref) return a_(r, t, o);
    }
    return t.flags |= 1, r = wr(n, s), r.ref = t.ref, r.return = t, t.child = r;
  }
  function dp(r, t, e, s, o) {
    if (r !== null) {
      var n = r.memoizedProps;
      if (io(n, s) && r.ref === t.ref) if (Xt = false, t.pendingProps = s = n, (r.lanes & o) !== 0) r.flags & 131072 && (Xt = true);
      else return t.lanes = r.lanes, a_(r, t, o);
    }
    return ti(r, t, e, s, o);
  }
  function lp(r, t, e) {
    var s = t.pendingProps, o = s.children, n = r !== null ? r.memoizedState : null;
    if (s.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
      baseLanes: 0,
      cachePool: null,
      transitions: null
    }, G(ln, Gt), Gt |= e;
    else {
      if (!(e & 1073741824)) return r = n !== null ? n.baseLanes | e : e, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
        baseLanes: r,
        cachePool: null,
        transitions: null
      }, t.updateQueue = null, G(ln, Gt), Gt |= r, null;
      t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      }, s = n !== null ? n.baseLanes : e, G(ln, Gt), Gt |= s;
    }
    else n !== null ? (s = n.baseLanes | e, t.memoizedState = null) : s = e, G(ln, Gt), Gt |= s;
    return Dt(r, t, o, e), t.child;
  }
  function pp(r, t) {
    var e = t.ref;
    (r === null && e !== null || r !== null && r.ref !== e) && (t.flags |= 512, t.flags |= 2097152);
  }
  function ti(r, t, e, s, o) {
    var n = Zt(e) ? Qr : Rt.current;
    return n = kn(t, n), bn(t, o), e = Hi(r, t, e, s, n, o), s = qi(), r !== null && !Xt ? (t.updateQueue = r.updateQueue, t.flags &= -2053, r.lanes &= ~o, a_(r, t, o)) : (nt && s && Pi(t), t.flags |= 1, Dt(r, t, e, o), t.child);
  }
  function id(r, t, e, s, o) {
    if (Zt(e)) {
      var n = true;
      fs(t);
    } else n = false;
    if (bn(t, o), t.stateNode === null) ts(r, t), ap(t, e, s), Ja(t, e, s, o), s = true;
    else if (r === null) {
      var c = t.stateNode, d = t.memoizedProps;
      c.props = d;
      var p = c.context, l = e.contextType;
      typeof l == "object" && l !== null ? l = ue(l) : (l = Zt(e) ? Qr : Rt.current, l = kn(t, l));
      var m = e.getDerivedStateFromProps, x = typeof m == "function" || typeof c.getSnapshotBeforeUpdate == "function";
      x || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (d !== s || p !== l) && _d(t, c, s, l), u_ = false;
      var k = t.memoizedState;
      c.state = k, ms(t, s, c, o), p = t.memoizedState, d !== s || k !== p || Kt.current || u_ ? (typeof m == "function" && (Za(t, e, m, s), p = t.memoizedState), (d = u_ || ed(t, e, d, s, k, p, l)) ? (x || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = s, t.memoizedState = p), c.props = s, c.state = p, c.context = l, s = d) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), s = false);
    } else {
      c = t.stateNode, Ml(r, t), d = t.memoizedProps, l = t.type === t.elementType ? d : be(t.type, d), c.props = l, x = t.pendingProps, k = c.context, p = e.contextType, typeof p == "object" && p !== null ? p = ue(p) : (p = Zt(e) ? Qr : Rt.current, p = kn(t, p));
      var j = e.getDerivedStateFromProps;
      (m = typeof j == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (d !== x || k !== p) && _d(t, c, s, p), u_ = false, k = t.memoizedState, c.state = k, ms(t, s, c, o);
      var L = t.memoizedState;
      d !== x || k !== L || Kt.current || u_ ? (typeof j == "function" && (Za(t, e, j, s), L = t.memoizedState), (l = u_ || ed(t, e, l, s, k, L, p) || false) ? (m || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(s, L, p), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(s, L, p)), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || d === r.memoizedProps && k === r.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || d === r.memoizedProps && k === r.memoizedState || (t.flags |= 1024), t.memoizedProps = s, t.memoizedState = L), c.props = s, c.state = L, c.context = p, s = l) : (typeof c.componentDidUpdate != "function" || d === r.memoizedProps && k === r.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || d === r.memoizedProps && k === r.memoizedState || (t.flags |= 1024), s = false);
    }
    return ei(r, t, e, s, n, o);
  }
  function ei(r, t, e, s, o, n) {
    pp(r, t);
    var c = (t.flags & 128) !== 0;
    if (!s && !c) return o && qc(t, e, false), a_(r, t, n);
    s = t.stateNode, Aw.current = t;
    var d = c && typeof e.getDerivedStateFromError != "function" ? null : s.render();
    return t.flags |= 1, r !== null && c ? (t.child = jn(t, r.child, null, n), t.child = jn(t, null, d, n)) : Dt(r, t, d, n), t.memoizedState = s.state, o && qc(t, e, true), t.child;
  }
  function up(r) {
    var t = r.stateNode;
    t.pendingContext ? Hc(r, t.pendingContext, t.pendingContext !== t.context) : t.context && Hc(r, t.context, false), Qi(r, t.containerInfo);
  }
  function cd(r, t, e, s, o) {
    return xn(), $i(o), t.flags |= 256, Dt(r, t, e, s), t.child;
  }
  var _i = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
  };
  function ri(r) {
    return {
      baseLanes: r,
      cachePool: null,
      transitions: null
    };
  }
  function wp(r, t, e) {
    var s = t.pendingProps, o = at.current, n = false, c = (t.flags & 128) !== 0, d;
    if ((d = c) || (d = r !== null && r.memoizedState === null ? false : (o & 2) !== 0), d ? (n = true, t.flags &= -129) : (r === null || r.memoizedState !== null) && (o |= 1), G(at, o & 1), r === null) return Xa(t), r = t.memoizedState, r !== null && (r = r.dehydrated, r !== null) ? (t.mode & 1 ? r.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (c = s.children, r = s.fallback, n ? (s = t.mode, n = t.child, c = {
      mode: "hidden",
      children: c
    }, !(s & 1) && n !== null ? (n.childLanes = 0, n.pendingProps = c) : n = Ms(c, s, 0, null), r = Wr(r, s, e, null), n.return = t, r.return = t, n.sibling = r, t.child = n, t.child.memoizedState = ri(e), t.memoizedState = _i, r) : Ki(t, c));
    if (o = r.memoizedState, o !== null && (d = o.dehydrated, d !== null)) return Hw(r, t, c, s, d, o, e);
    if (n) {
      n = s.fallback, c = t.mode, o = r.child, d = o.sibling;
      var p = {
        mode: "hidden",
        children: s.children
      };
      return !(c & 1) && t.child !== o ? (s = t.child, s.childLanes = 0, s.pendingProps = p, t.deletions = null) : (s = wr(o, p), s.subtreeFlags = o.subtreeFlags & 14680064), d !== null ? n = wr(d, n) : (n = Wr(n, c, e, null), n.flags |= 2), n.return = t, s.return = t, s.sibling = n, t.child = s, s = n, n = t.child, c = r.child.memoizedState, c = c === null ? ri(e) : {
        baseLanes: c.baseLanes | e,
        cachePool: null,
        transitions: c.transitions
      }, n.memoizedState = c, n.childLanes = r.childLanes & ~e, t.memoizedState = _i, s;
    }
    return n = r.child, r = n.sibling, s = wr(n, {
      mode: "visible",
      children: s.children
    }), !(t.mode & 1) && (s.lanes = e), s.return = t, s.sibling = null, r !== null && (e = t.deletions, e === null ? (t.deletions = [
      r
    ], t.flags |= 16) : e.push(r)), t.child = s, t.memoizedState = null, s;
  }
  function Ki(r, t) {
    return t = Ms({
      mode: "visible",
      children: t
    }, r.mode, 0, null), t.return = r, r.child = t;
  }
  function Mo(r, t, e, s) {
    return s !== null && $i(s), jn(t, r.child, null, e), r = Ki(t, t.pendingProps.children), r.flags |= 2, t.memoizedState = null, r;
  }
  function Hw(r, t, e, s, o, n, c) {
    if (e) return t.flags & 256 ? (t.flags &= -257, s = ba(Error(C(422))), Mo(r, t, c, s)) : t.memoizedState !== null ? (t.child = r.child, t.flags |= 128, null) : (n = s.fallback, o = t.mode, s = Ms({
      mode: "visible",
      children: s.children
    }, o, 0, null), n = Wr(n, o, c, null), n.flags |= 2, s.return = t, n.return = t, s.sibling = n, t.child = s, t.mode & 1 && jn(t, r.child, null, c), t.child.memoizedState = ri(c), t.memoizedState = _i, n);
    if (!(t.mode & 1)) return Mo(r, t, c, null);
    if (o.data === "$!") {
      if (s = o.nextSibling && o.nextSibling.dataset, s) var d = s.dgst;
      return s = d, n = Error(C(419)), s = ba(n, s, void 0), Mo(r, t, c, s);
    }
    if (d = (c & r.childLanes) !== 0, Xt || d) {
      if (s = xt, s !== null) {
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
        o = o & (s.suspendedLanes | c) ? 0 : o, o !== 0 && o !== n.retryLane && (n.retryLane = o, s_(r, o), xe(s, r, o, -1));
      }
      return _c(), s = ba(Error(C(421))), Mo(r, t, c, s);
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = r.child, t = of.bind(null, r), o._reactRetry = t, null) : (r = n.treeContext, ee = dr(o.nextSibling), _e = t, nt = true, me = null, r !== null && (ae[ie++] = t_, ae[ie++] = e_, ae[ie++] = Vr, t_ = r.id, e_ = r.overflow, Vr = t), t = Ki(t, s.children), t.flags |= 4096, t);
  }
  function dd(r, t, e) {
    r.lanes |= t;
    var s = r.alternate;
    s !== null && (s.lanes |= t), Ka(r.return, t, e);
  }
  function ha(r, t, e, s, o) {
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
  function fp(r, t, e) {
    var s = t.pendingProps, o = s.revealOrder, n = s.tail;
    if (Dt(r, t, s.children, e), s = at.current, s & 2) s = s & 1 | 2, t.flags |= 128;
    else {
      if (r !== null && r.flags & 128) t: for (r = t.child; r !== null; ) {
        if (r.tag === 13) r.memoizedState !== null && dd(r, e, t);
        else if (r.tag === 19) dd(r, e, t);
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
    if (G(at, s), !(t.mode & 1)) t.memoizedState = null;
    else switch (o) {
      case "forwards":
        for (e = t.child, o = null; e !== null; ) r = e.alternate, r !== null && vs(r) === null && (o = e), e = e.sibling;
        e = o, e === null ? (o = t.child, t.child = null) : (o = e.sibling, e.sibling = null), ha(t, false, o, e, n);
        break;
      case "backwards":
        for (e = null, o = t.child, t.child = null; o !== null; ) {
          if (r = o.alternate, r !== null && vs(r) === null) {
            t.child = o;
            break;
          }
          r = o.sibling, o.sibling = e, e = o, o = r;
        }
        ha(t, true, e, null, n);
        break;
      case "together":
        ha(t, false, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function ts(r, t) {
    !(t.mode & 1) && r !== null && (r.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function a_(r, t, e) {
    if (r !== null && (t.dependencies = r.dependencies), Ar |= t.lanes, !(e & t.childLanes)) return null;
    if (r !== null && t.child !== r.child) throw Error(C(153));
    if (t.child !== null) {
      for (r = t.child, e = wr(r, r.pendingProps), t.child = e, e.return = t; r.sibling !== null; ) r = r.sibling, e = e.sibling = wr(r, r.pendingProps), e.return = t;
      e.sibling = null;
    }
    return t.child;
  }
  function qw(r, t, e) {
    switch (t.tag) {
      case 3:
        up(t), xn();
        break;
      case 5:
        Wl(t);
        break;
      case 1:
        Zt(t.type) && fs(t);
        break;
      case 4:
        Qi(t, t.stateNode.containerInfo);
        break;
      case 10:
        var s = t.type._context, o = t.memoizedProps.value;
        G(hs, s._currentValue), s._currentValue = o;
        break;
      case 13:
        if (s = t.memoizedState, s !== null) return s.dehydrated !== null ? (G(at, at.current & 1), t.flags |= 128, null) : e & t.child.childLanes ? wp(r, t, e) : (G(at, at.current & 1), r = a_(r, t, e), r !== null ? r.sibling : null);
        G(at, at.current & 1);
        break;
      case 19:
        if (s = (e & t.childLanes) !== 0, r.flags & 128) {
          if (s) return fp(r, t, e);
          t.flags |= 128;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), G(at, at.current), s) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, lp(r, t, e);
    }
    return a_(r, t, e);
  }
  var gp, ni, bp, hp;
  gp = function(r, t) {
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
  ni = function() {
  };
  bp = function(r, t, e, s) {
    var o = r.memoizedProps;
    if (o !== s) {
      r = t.stateNode, Or($e.current);
      var n = null;
      switch (e) {
        case "input":
          o = Ea(r, o), s = Ea(r, s), n = [];
          break;
        case "select":
          o = ct({}, o, {
            value: void 0
          }), s = ct({}, s, {
            value: void 0
          }), n = [];
          break;
        case "textarea":
          o = Oa(r, o), s = Oa(r, s), n = [];
          break;
        default:
          typeof o.onClick != "function" && typeof s.onClick == "function" && (r.onclick = us);
      }
      Na(e, s);
      var c;
      e = null;
      for (l in o) if (!s.hasOwnProperty(l) && o.hasOwnProperty(l) && o[l] != null) if (l === "style") {
        var d = o[l];
        for (c in d) d.hasOwnProperty(c) && (e || (e = {}), e[c] = "");
      } else l !== "dangerouslySetInnerHTML" && l !== "children" && l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (eo.hasOwnProperty(l) ? n || (n = []) : (n = n || []).push(l, null));
      for (l in s) {
        var p = s[l];
        if (d = o == null ? void 0 : o[l], s.hasOwnProperty(l) && p !== d && (p != null || d != null)) if (l === "style") if (d) {
          for (c in d) !d.hasOwnProperty(c) || p && p.hasOwnProperty(c) || (e || (e = {}), e[c] = "");
          for (c in p) p.hasOwnProperty(c) && d[c] !== p[c] && (e || (e = {}), e[c] = p[c]);
        } else e || (n || (n = []), n.push(l, e)), e = p;
        else l === "dangerouslySetInnerHTML" ? (p = p ? p.__html : void 0, d = d ? d.__html : void 0, p != null && d !== p && (n = n || []).push(l, p)) : l === "children" ? typeof p != "string" && typeof p != "number" || (n = n || []).push(l, "" + p) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && (eo.hasOwnProperty(l) ? (p != null && l === "onScroll" && tt("scroll", r), n || d === p || (n = [])) : (n = n || []).push(l, p));
      }
      e && (n = n || []).push("style", e);
      var l = n;
      (t.updateQueue = l) && (t.flags |= 4);
    }
  };
  hp = function(r, t, e, s) {
    e !== s && (t.flags |= 4);
  };
  function Dn(r, t) {
    if (!nt) switch (r.tailMode) {
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
  function Nt(r) {
    var t = r.alternate !== null && r.alternate.child === r.child, e = 0, s = 0;
    if (t) for (var o = r.child; o !== null; ) e |= o.lanes | o.childLanes, s |= o.subtreeFlags & 14680064, s |= o.flags & 14680064, o.return = r, o = o.sibling;
    else for (o = r.child; o !== null; ) e |= o.lanes | o.childLanes, s |= o.subtreeFlags, s |= o.flags, o.return = r, o = o.sibling;
    return r.subtreeFlags |= s, r.childLanes = e, t;
  }
  function Yw(r, t, e) {
    var s = t.pendingProps;
    switch (Ri(t), t.tag) {
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
        return Nt(t), null;
      case 1:
        return Zt(t.type) && ws(), Nt(t), null;
      case 3:
        return s = t.stateNode, Sn(), rt(Kt), rt(Rt), Bi(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (r === null || r.child === null) && (Io(t) ? t.flags |= 4 : r === null || r.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, me !== null && (pi(me), me = null))), ni(r, t), Nt(t), null;
      case 5:
        Vi(t);
        var o = Or(wo.current);
        if (e = t.type, r !== null && t.stateNode != null) bp(r, t, e, s, o), r.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(C(166));
            return Nt(t), null;
          }
          if (r = Or($e.current), Io(t)) {
            s = t.stateNode, e = t.type;
            var n = t.memoizedProps;
            switch (s[Le] = t, s[po] = n, r = (t.mode & 1) !== 0, e) {
              case "dialog":
                tt("cancel", s), tt("close", s);
                break;
              case "iframe":
              case "object":
              case "embed":
                tt("load", s);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Qn.length; o++) tt(Qn[o], s);
                break;
              case "source":
                tt("error", s);
                break;
              case "img":
              case "image":
              case "link":
                tt("error", s), tt("load", s);
                break;
              case "details":
                tt("toggle", s);
                break;
              case "input":
                yc(s, n), tt("invalid", s);
                break;
              case "select":
                s._wrapperState = {
                  wasMultiple: !!n.multiple
                }, tt("invalid", s);
                break;
              case "textarea":
                vc(s, n), tt("invalid", s);
            }
            Na(e, n), o = null;
            for (var c in n) if (n.hasOwnProperty(c)) {
              var d = n[c];
              c === "children" ? typeof d == "string" ? s.textContent !== d && (n.suppressHydrationWarning !== true && Do(s.textContent, d, r), o = [
                "children",
                d
              ]) : typeof d == "number" && s.textContent !== "" + d && (n.suppressHydrationWarning !== true && Do(s.textContent, d, r), o = [
                "children",
                "" + d
              ]) : eo.hasOwnProperty(c) && d != null && c === "onScroll" && tt("scroll", s);
            }
            switch (e) {
              case "input":
                Oo(s), mc(s, n, true);
                break;
              case "textarea":
                Oo(s), kc(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof n.onClick == "function" && (s.onclick = us);
            }
            s = o, t.updateQueue = s, s !== null && (t.flags |= 4);
          } else {
            c = o.nodeType === 9 ? o : o.ownerDocument, r === "http://www.w3.org/1999/xhtml" && (r = Hd(e)), r === "http://www.w3.org/1999/xhtml" ? e === "script" ? (r = c.createElement("div"), r.innerHTML = "<script><\/script>", r = r.removeChild(r.firstChild)) : typeof s.is == "string" ? r = c.createElement(e, {
              is: s.is
            }) : (r = c.createElement(e), e === "select" && (c = r, s.multiple ? c.multiple = true : s.size && (c.size = s.size))) : r = c.createElementNS(r, e), r[Le] = t, r[po] = s, gp(r, t, false, false), t.stateNode = r;
            t: {
              switch (c = Fa(e, s), e) {
                case "dialog":
                  tt("cancel", r), tt("close", r), o = s;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  tt("load", r), o = s;
                  break;
                case "video":
                case "audio":
                  for (o = 0; o < Qn.length; o++) tt(Qn[o], r);
                  o = s;
                  break;
                case "source":
                  tt("error", r), o = s;
                  break;
                case "img":
                case "image":
                case "link":
                  tt("error", r), tt("load", r), o = s;
                  break;
                case "details":
                  tt("toggle", r), o = s;
                  break;
                case "input":
                  yc(r, s), o = Ea(r, s), tt("invalid", r);
                  break;
                case "option":
                  o = s;
                  break;
                case "select":
                  r._wrapperState = {
                    wasMultiple: !!s.multiple
                  }, o = ct({}, s, {
                    value: void 0
                  }), tt("invalid", r);
                  break;
                case "textarea":
                  vc(r, s), o = Oa(r, s), tt("invalid", r);
                  break;
                default:
                  o = s;
              }
              Na(e, o), d = o;
              for (n in d) if (d.hasOwnProperty(n)) {
                var p = d[n];
                n === "style" ? Xd(r, p) : n === "dangerouslySetInnerHTML" ? (p = p ? p.__html : void 0, p != null && qd(r, p)) : n === "children" ? typeof p == "string" ? (e !== "textarea" || p !== "") && _o(r, p) : typeof p == "number" && _o(r, "" + p) : n !== "suppressContentEditableWarning" && n !== "suppressHydrationWarning" && n !== "autoFocus" && (eo.hasOwnProperty(n) ? p != null && n === "onScroll" && tt("scroll", r) : p != null && mi(r, n, p, c));
              }
              switch (e) {
                case "input":
                  Oo(r), mc(r, s, false);
                  break;
                case "textarea":
                  Oo(r), kc(r);
                  break;
                case "option":
                  s.value != null && r.setAttribute("value", "" + fr(s.value));
                  break;
                case "select":
                  r.multiple = !!s.multiple, n = s.value, n != null ? un(r, !!s.multiple, n, false) : s.defaultValue != null && un(r, !!s.multiple, s.defaultValue, true);
                  break;
                default:
                  typeof o.onClick == "function" && (r.onclick = us);
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
        return Nt(t), null;
      case 6:
        if (r && t.stateNode != null) hp(r, t, r.memoizedProps, s);
        else {
          if (typeof s != "string" && t.stateNode === null) throw Error(C(166));
          if (e = Or(wo.current), Or($e.current), Io(t)) {
            if (s = t.stateNode, e = t.memoizedProps, s[Le] = t, (n = s.nodeValue !== e) && (r = _e, r !== null)) switch (r.tag) {
              case 3:
                Do(s.nodeValue, e, (r.mode & 1) !== 0);
                break;
              case 5:
                r.memoizedProps.suppressHydrationWarning !== true && Do(s.nodeValue, e, (r.mode & 1) !== 0);
            }
            n && (t.flags |= 4);
          } else s = (e.nodeType === 9 ? e : e.ownerDocument).createTextNode(s), s[Le] = t, t.stateNode = s;
        }
        return Nt(t), null;
      case 13:
        if (rt(at), s = t.memoizedState, r === null || r.memoizedState !== null && r.memoizedState.dehydrated !== null) {
          if (nt && ee !== null && t.mode & 1 && !(t.flags & 128)) $l(), xn(), t.flags |= 98560, n = false;
          else if (n = Io(t), s !== null && s.dehydrated !== null) {
            if (r === null) {
              if (!n) throw Error(C(318));
              if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(C(317));
              n[Le] = t;
            } else xn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            Nt(t), n = false;
          } else me !== null && (pi(me), me = null), n = true;
          if (!n) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = e, t) : (s = s !== null, s !== (r !== null && r.memoizedState !== null) && s && (t.child.flags |= 8192, t.mode & 1 && (r === null || at.current & 1 ? ht === 0 && (ht = 3) : _c())), t.updateQueue !== null && (t.flags |= 4), Nt(t), null);
      case 4:
        return Sn(), ni(r, t), r === null && co(t.stateNode.containerInfo), Nt(t), null;
      case 10:
        return Ui(t.type._context), Nt(t), null;
      case 17:
        return Zt(t.type) && ws(), Nt(t), null;
      case 19:
        if (rt(at), n = t.memoizedState, n === null) return Nt(t), null;
        if (s = (t.flags & 128) !== 0, c = n.rendering, c === null) if (s) Dn(n, false);
        else {
          if (ht !== 0 || r !== null && r.flags & 128) for (r = t.child; r !== null; ) {
            if (c = vs(r), c !== null) {
              for (t.flags |= 128, Dn(n, false), s = c.updateQueue, s !== null && (t.updateQueue = s, t.flags |= 4), t.subtreeFlags = 0, s = e, e = t.child; e !== null; ) n = e, r = s, n.flags &= 14680066, c = n.alternate, c === null ? (n.childLanes = 0, n.lanes = r, n.child = null, n.subtreeFlags = 0, n.memoizedProps = null, n.memoizedState = null, n.updateQueue = null, n.dependencies = null, n.stateNode = null) : (n.childLanes = c.childLanes, n.lanes = c.lanes, n.child = c.child, n.subtreeFlags = 0, n.deletions = null, n.memoizedProps = c.memoizedProps, n.memoizedState = c.memoizedState, n.updateQueue = c.updateQueue, n.type = c.type, r = c.dependencies, n.dependencies = r === null ? null : {
                lanes: r.lanes,
                firstContext: r.firstContext
              }), e = e.sibling;
              return G(at, at.current & 1 | 2), t.child;
            }
            r = r.sibling;
          }
          n.tail !== null && ut() > zn && (t.flags |= 128, s = true, Dn(n, false), t.lanes = 4194304);
        }
        else {
          if (!s) if (r = vs(c), r !== null) {
            if (t.flags |= 128, s = true, e = r.updateQueue, e !== null && (t.updateQueue = e, t.flags |= 4), Dn(n, true), n.tail === null && n.tailMode === "hidden" && !c.alternate && !nt) return Nt(t), null;
          } else 2 * ut() - n.renderingStartTime > zn && e !== 1073741824 && (t.flags |= 128, s = true, Dn(n, false), t.lanes = 4194304);
          n.isBackwards ? (c.sibling = t.child, t.child = c) : (e = n.last, e !== null ? e.sibling = c : t.child = c, n.last = c);
        }
        return n.tail !== null ? (t = n.tail, n.rendering = t, n.tail = t.sibling, n.renderingStartTime = ut(), t.sibling = null, e = at.current, G(at, s ? e & 1 | 2 : e & 1), t) : (Nt(t), null);
      case 22:
      case 23:
        return ec(), s = t.memoizedState !== null, r !== null && r.memoizedState !== null !== s && (t.flags |= 8192), s && t.mode & 1 ? Gt & 1073741824 && (Nt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Nt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(C(156, t.tag));
  }
  function Xw(r, t) {
    switch (Ri(t), t.tag) {
      case 1:
        return Zt(t.type) && ws(), r = t.flags, r & 65536 ? (t.flags = r & -65537 | 128, t) : null;
      case 3:
        return Sn(), rt(Kt), rt(Rt), Bi(), r = t.flags, r & 65536 && !(r & 128) ? (t.flags = r & -65537 | 128, t) : null;
      case 5:
        return Vi(t), null;
      case 13:
        if (rt(at), r = t.memoizedState, r !== null && r.dehydrated !== null) {
          if (t.alternate === null) throw Error(C(340));
          xn();
        }
        return r = t.flags, r & 65536 ? (t.flags = r & -65537 | 128, t) : null;
      case 19:
        return rt(at), null;
      case 4:
        return Sn(), null;
      case 10:
        return Ui(t.type._context), null;
      case 22:
      case 23:
        return ec(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Wo = false, Tt = false, Kw = typeof WeakSet == "function" ? WeakSet : Set, $ = null;
  function dn(r, t) {
    var e = r.ref;
    if (e !== null) if (typeof e == "function") try {
      e(null);
    } catch (s) {
      lt(r, t, s);
    }
    else e.current = null;
  }
  function oi(r, t, e) {
    try {
      e();
    } catch (s) {
      lt(r, t, s);
    }
  }
  var ld = false;
  function Zw(r, t) {
    if (Qa = ds, r = xl(), Ti(r)) {
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
          var c = 0, d = -1, p = -1, l = 0, m = 0, x = r, k = null;
          e: for (; ; ) {
            for (var j; x !== e || o !== 0 && x.nodeType !== 3 || (d = c + o), x !== n || s !== 0 && x.nodeType !== 3 || (p = c + s), x.nodeType === 3 && (c += x.nodeValue.length), (j = x.firstChild) !== null; ) k = x, x = j;
            for (; ; ) {
              if (x === r) break e;
              if (k === e && ++l === o && (d = c), k === n && ++m === s && (p = c), (j = x.nextSibling) !== null) break;
              x = k, k = x.parentNode;
            }
            x = j;
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
    for (Va = {
      focusedElem: r,
      selectionRange: e
    }, ds = false, $ = t; $ !== null; ) if (t = $, r = t.child, (t.subtreeFlags & 1028) !== 0 && r !== null) r.return = t, $ = r;
    else for (; $ !== null; ) {
      t = $;
      try {
        var L = t.alternate;
        if (t.flags & 1024) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (L !== null) {
              var N = L.memoizedProps, A = L.memoizedState, y = t.stateNode, b = y.getSnapshotBeforeUpdate(t.elementType === t.type ? N : be(t.type, N), A);
              y.__reactInternalSnapshotBeforeUpdate = b;
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
            throw Error(C(163));
        }
      } catch (z) {
        lt(t, t.return, z);
      }
      if (r = t.sibling, r !== null) {
        r.return = t.return, $ = r;
        break;
      }
      $ = t.return;
    }
    return L = ld, ld = false, L;
  }
  function Xn(r, t, e) {
    var s = t.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var o = s = s.next;
      do {
        if ((o.tag & r) === r) {
          var n = o.destroy;
          o.destroy = void 0, n !== void 0 && oi(t, e, n);
        }
        o = o.next;
      } while (o !== s);
    }
  }
  function Is(r, t) {
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
  function si(r) {
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
  function yp(r) {
    var t = r.alternate;
    t !== null && (r.alternate = null, yp(t)), r.child = null, r.deletions = null, r.sibling = null, r.tag === 5 && (t = r.stateNode, t !== null && (delete t[Le], delete t[po], delete t[Ha], delete t[Tw], delete t[Pw])), r.stateNode = null, r.return = null, r.dependencies = null, r.memoizedProps = null, r.memoizedState = null, r.pendingProps = null, r.stateNode = null, r.updateQueue = null;
  }
  function mp(r) {
    return r.tag === 5 || r.tag === 3 || r.tag === 4;
  }
  function pd(r) {
    t: for (; ; ) {
      for (; r.sibling === null; ) {
        if (r.return === null || mp(r.return)) return null;
        r = r.return;
      }
      for (r.sibling.return = r.return, r = r.sibling; r.tag !== 5 && r.tag !== 6 && r.tag !== 18; ) {
        if (r.flags & 2 || r.child === null || r.tag === 4) continue t;
        r.child.return = r, r = r.child;
      }
      if (!(r.flags & 2)) return r.stateNode;
    }
  }
  function ai(r, t, e) {
    var s = r.tag;
    if (s === 5 || s === 6) r = r.stateNode, t ? e.nodeType === 8 ? e.parentNode.insertBefore(r, t) : e.insertBefore(r, t) : (e.nodeType === 8 ? (t = e.parentNode, t.insertBefore(r, e)) : (t = e, t.appendChild(r)), e = e._reactRootContainer, e != null || t.onclick !== null || (t.onclick = us));
    else if (s !== 4 && (r = r.child, r !== null)) for (ai(r, t, e), r = r.sibling; r !== null; ) ai(r, t, e), r = r.sibling;
  }
  function ii(r, t, e) {
    var s = r.tag;
    if (s === 5 || s === 6) r = r.stateNode, t ? e.insertBefore(r, t) : e.appendChild(r);
    else if (s !== 4 && (r = r.child, r !== null)) for (ii(r, t, e), r = r.sibling; r !== null; ) ii(r, t, e), r = r.sibling;
  }
  var Et = null, ye = false;
  function l_(r, t, e) {
    for (e = e.child; e !== null; ) vp(r, t, e), e = e.sibling;
  }
  function vp(r, t, e) {
    if (Re && typeof Re.onCommitFiberUnmount == "function") try {
      Re.onCommitFiberUnmount(Ls, e);
    } catch {
    }
    switch (e.tag) {
      case 5:
        Tt || dn(e, t);
      case 6:
        var s = Et, o = ye;
        Et = null, l_(r, t, e), Et = s, ye = o, Et !== null && (ye ? (r = Et, e = e.stateNode, r.nodeType === 8 ? r.parentNode.removeChild(e) : r.removeChild(e)) : Et.removeChild(e.stateNode));
        break;
      case 18:
        Et !== null && (ye ? (r = Et, e = e.stateNode, r.nodeType === 8 ? la(r.parentNode, e) : r.nodeType === 1 && la(r, e), so(r)) : la(Et, e.stateNode));
        break;
      case 4:
        s = Et, o = ye, Et = e.stateNode.containerInfo, ye = true, l_(r, t, e), Et = s, ye = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Tt && (s = e.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          o = s = s.next;
          do {
            var n = o, c = n.destroy;
            n = n.tag, c !== void 0 && (n & 2 || n & 4) && oi(e, t, c), o = o.next;
          } while (o !== s);
        }
        l_(r, t, e);
        break;
      case 1:
        if (!Tt && (dn(e, t), s = e.stateNode, typeof s.componentWillUnmount == "function")) try {
          s.props = e.memoizedProps, s.state = e.memoizedState, s.componentWillUnmount();
        } catch (d) {
          lt(e, t, d);
        }
        l_(r, t, e);
        break;
      case 21:
        l_(r, t, e);
        break;
      case 22:
        e.mode & 1 ? (Tt = (s = Tt) || e.memoizedState !== null, l_(r, t, e), Tt = s) : l_(r, t, e);
        break;
      default:
        l_(r, t, e);
    }
  }
  function ud(r) {
    var t = r.updateQueue;
    if (t !== null) {
      r.updateQueue = null;
      var e = r.stateNode;
      e === null && (e = r.stateNode = new Kw()), t.forEach(function(s) {
        var o = sf.bind(null, r, s);
        e.has(s) || (e.add(s), s.then(o, o));
      });
    }
  }
  function ge(r, t) {
    var e = t.deletions;
    if (e !== null) for (var s = 0; s < e.length; s++) {
      var o = e[s];
      try {
        var n = r, c = t, d = c;
        t: for (; d !== null; ) {
          switch (d.tag) {
            case 5:
              Et = d.stateNode, ye = false;
              break t;
            case 3:
              Et = d.stateNode.containerInfo, ye = true;
              break t;
            case 4:
              Et = d.stateNode.containerInfo, ye = true;
              break t;
          }
          d = d.return;
        }
        if (Et === null) throw Error(C(160));
        vp(n, c, o), Et = null, ye = false;
        var p = o.alternate;
        p !== null && (p.return = null), o.return = null;
      } catch (l) {
        lt(o, t, l);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) kp(t, r), t = t.sibling;
  }
  function kp(r, t) {
    var e = r.alternate, s = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ge(t, r), Ee(r), s & 4) {
          try {
            Xn(3, r, r.return), Is(3, r);
          } catch (N) {
            lt(r, r.return, N);
          }
          try {
            Xn(5, r, r.return);
          } catch (N) {
            lt(r, r.return, N);
          }
        }
        break;
      case 1:
        ge(t, r), Ee(r), s & 512 && e !== null && dn(e, e.return);
        break;
      case 5:
        if (ge(t, r), Ee(r), s & 512 && e !== null && dn(e, e.return), r.flags & 32) {
          var o = r.stateNode;
          try {
            _o(o, "");
          } catch (N) {
            lt(r, r.return, N);
          }
        }
        if (s & 4 && (o = r.stateNode, o != null)) {
          var n = r.memoizedProps, c = e !== null ? e.memoizedProps : n, d = r.type, p = r.updateQueue;
          if (r.updateQueue = null, p !== null) try {
            d === "input" && n.type === "radio" && n.name != null && Bd(o, n), Fa(d, c);
            var l = Fa(d, n);
            for (c = 0; c < p.length; c += 2) {
              var m = p[c], x = p[c + 1];
              m === "style" ? Xd(o, x) : m === "dangerouslySetInnerHTML" ? qd(o, x) : m === "children" ? _o(o, x) : mi(o, m, x, l);
            }
            switch (d) {
              case "input":
                za(o, n);
                break;
              case "textarea":
                Ad(o, n);
                break;
              case "select":
                var k = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!n.multiple;
                var j = n.value;
                j != null ? un(o, !!n.multiple, j, false) : k !== !!n.multiple && (n.defaultValue != null ? un(o, !!n.multiple, n.defaultValue, true) : un(o, !!n.multiple, n.multiple ? [] : "", false));
            }
            o[po] = n;
          } catch (N) {
            lt(r, r.return, N);
          }
        }
        break;
      case 6:
        if (ge(t, r), Ee(r), s & 4) {
          if (r.stateNode === null) throw Error(C(162));
          o = r.stateNode, n = r.memoizedProps;
          try {
            o.nodeValue = n;
          } catch (N) {
            lt(r, r.return, N);
          }
        }
        break;
      case 3:
        if (ge(t, r), Ee(r), s & 4 && e !== null && e.memoizedState.isDehydrated) try {
          so(t.containerInfo);
        } catch (N) {
          lt(r, r.return, N);
        }
        break;
      case 4:
        ge(t, r), Ee(r);
        break;
      case 13:
        ge(t, r), Ee(r), o = r.child, o.flags & 8192 && (n = o.memoizedState !== null, o.stateNode.isHidden = n, !n || o.alternate !== null && o.alternate.memoizedState !== null || (Gi = ut())), s & 4 && ud(r);
        break;
      case 22:
        if (m = e !== null && e.memoizedState !== null, r.mode & 1 ? (Tt = (l = Tt) || m, ge(t, r), Tt = l) : ge(t, r), Ee(r), s & 8192) {
          if (l = r.memoizedState !== null, (r.stateNode.isHidden = l) && !m && r.mode & 1) for ($ = r, m = r.child; m !== null; ) {
            for (x = $ = m; $ !== null; ) {
              switch (k = $, j = k.child, k.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Xn(4, k, k.return);
                  break;
                case 1:
                  dn(k, k.return);
                  var L = k.stateNode;
                  if (typeof L.componentWillUnmount == "function") {
                    s = k, e = k.return;
                    try {
                      t = s, L.props = t.memoizedProps, L.state = t.memoizedState, L.componentWillUnmount();
                    } catch (N) {
                      lt(s, e, N);
                    }
                  }
                  break;
                case 5:
                  dn(k, k.return);
                  break;
                case 22:
                  if (k.memoizedState !== null) {
                    fd(x);
                    continue;
                  }
              }
              j !== null ? (j.return = k, $ = j) : fd(x);
            }
            m = m.sibling;
          }
          t: for (m = null, x = r; ; ) {
            if (x.tag === 5) {
              if (m === null) {
                m = x;
                try {
                  o = x.stateNode, l ? (n = o.style, typeof n.setProperty == "function" ? n.setProperty("display", "none", "important") : n.display = "none") : (d = x.stateNode, p = x.memoizedProps.style, c = p != null && p.hasOwnProperty("display") ? p.display : null, d.style.display = Yd("display", c));
                } catch (N) {
                  lt(r, r.return, N);
                }
              }
            } else if (x.tag === 6) {
              if (m === null) try {
                x.stateNode.nodeValue = l ? "" : x.memoizedProps;
              } catch (N) {
                lt(r, r.return, N);
              }
            } else if ((x.tag !== 22 && x.tag !== 23 || x.memoizedState === null || x === r) && x.child !== null) {
              x.child.return = x, x = x.child;
              continue;
            }
            if (x === r) break t;
            for (; x.sibling === null; ) {
              if (x.return === null || x.return === r) break t;
              m === x && (m = null), x = x.return;
            }
            m === x && (m = null), x.sibling.return = x.return, x = x.sibling;
          }
        }
        break;
      case 19:
        ge(t, r), Ee(r), s & 4 && ud(r);
        break;
      case 21:
        break;
      default:
        ge(t, r), Ee(r);
    }
  }
  function Ee(r) {
    var t = r.flags;
    if (t & 2) {
      try {
        t: {
          for (var e = r.return; e !== null; ) {
            if (mp(e)) {
              var s = e;
              break t;
            }
            e = e.return;
          }
          throw Error(C(160));
        }
        switch (s.tag) {
          case 5:
            var o = s.stateNode;
            s.flags & 32 && (_o(o, ""), s.flags &= -33);
            var n = pd(r);
            ii(r, n, o);
            break;
          case 3:
          case 4:
            var c = s.stateNode.containerInfo, d = pd(r);
            ai(r, d, c);
            break;
          default:
            throw Error(C(161));
        }
      } catch (p) {
        lt(r, r.return, p);
      }
      r.flags &= -3;
    }
    t & 4096 && (r.flags &= -4097);
  }
  function Jw(r, t, e) {
    $ = r, xp(r);
  }
  function xp(r, t, e) {
    for (var s = (r.mode & 1) !== 0; $ !== null; ) {
      var o = $, n = o.child;
      if (o.tag === 22 && s) {
        var c = o.memoizedState !== null || Wo;
        if (!c) {
          var d = o.alternate, p = d !== null && d.memoizedState !== null || Tt;
          d = Wo;
          var l = Tt;
          if (Wo = c, (Tt = p) && !l) for ($ = o; $ !== null; ) c = $, p = c.child, c.tag === 22 && c.memoizedState !== null ? gd(o) : p !== null ? (p.return = c, $ = p) : gd(o);
          for (; n !== null; ) $ = n, xp(n), n = n.sibling;
          $ = o, Wo = d, Tt = l;
        }
        wd(r);
      } else o.subtreeFlags & 8772 && n !== null ? (n.return = o, $ = n) : wd(r);
    }
  }
  function wd(r) {
    for (; $ !== null; ) {
      var t = $;
      if (t.flags & 8772) {
        var e = t.alternate;
        try {
          if (t.flags & 8772) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Tt || Is(5, t);
              break;
            case 1:
              var s = t.stateNode;
              if (t.flags & 4 && !Tt) if (e === null) s.componentDidMount();
              else {
                var o = t.elementType === t.type ? e.memoizedProps : be(t.type, e.memoizedProps);
                s.componentDidUpdate(o, e.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
              }
              var n = t.updateQueue;
              n !== null && Jc(t, n, s);
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
                Jc(t, c, e);
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
                  var m = l.memoizedState;
                  if (m !== null) {
                    var x = m.dehydrated;
                    x !== null && so(x);
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
              throw Error(C(163));
          }
          Tt || t.flags & 512 && si(t);
        } catch (k) {
          lt(t, t.return, k);
        }
      }
      if (t === r) {
        $ = null;
        break;
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, $ = e;
        break;
      }
      $ = t.return;
    }
  }
  function fd(r) {
    for (; $ !== null; ) {
      var t = $;
      if (t === r) {
        $ = null;
        break;
      }
      var e = t.sibling;
      if (e !== null) {
        e.return = t.return, $ = e;
        break;
      }
      $ = t.return;
    }
  }
  function gd(r) {
    for (; $ !== null; ) {
      var t = $;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var e = t.return;
            try {
              Is(4, t);
            } catch (p) {
              lt(t, e, p);
            }
            break;
          case 1:
            var s = t.stateNode;
            if (typeof s.componentDidMount == "function") {
              var o = t.return;
              try {
                s.componentDidMount();
              } catch (p) {
                lt(t, o, p);
              }
            }
            var n = t.return;
            try {
              si(t);
            } catch (p) {
              lt(t, n, p);
            }
            break;
          case 5:
            var c = t.return;
            try {
              si(t);
            } catch (p) {
              lt(t, c, p);
            }
        }
      } catch (p) {
        lt(t, t.return, p);
      }
      if (t === r) {
        $ = null;
        break;
      }
      var d = t.sibling;
      if (d !== null) {
        d.return = t.return, $ = d;
        break;
      }
      $ = t.return;
    }
  }
  var Gw = Math.ceil, js = i_.ReactCurrentDispatcher, Zi = i_.ReactCurrentOwner, pe = i_.ReactCurrentBatchConfig, q = 0, xt = null, ft = null, zt = 0, Gt = 0, ln = hr(0), ht = 0, ho = null, Ar = 0, Us = 0, Ji = 0, Kn = null, Yt = null, Gi = 0, zn = 1 / 0, Ue = null, Ss = false, ci = null, pr = null, Qo = false, nr = null, Es = 0, Zn = 0, di = null, es = -1, _s = 0;
  function Mt() {
    return q & 6 ? ut() : es !== -1 ? es : es = ut();
  }
  function ur(r) {
    return r.mode & 1 ? q & 2 && zt !== 0 ? zt & -zt : $w.transition !== null ? (_s === 0 && (_s = al()), _s) : (r = Z, r !== 0 || (r = window.event, r = r === void 0 ? 16 : wl(r.type)), r) : 1;
  }
  function xe(r, t, e, s) {
    if (50 < Zn) throw Zn = 0, di = null, Error(C(185));
    vo(r, e, s), (!(q & 2) || r !== xt) && (r === xt && (!(q & 2) && (Us |= e), ht === 4 && g_(r, zt)), Jt(r, s), e === 1 && q === 0 && !(t.mode & 1) && (zn = ut() + 500, Rs && yr()));
  }
  function Jt(r, t) {
    var e = r.callbackNode;
    $u(r, t);
    var s = cs(r, r === xt ? zt : 0);
    if (s === 0) e !== null && Sc(e), r.callbackNode = null, r.callbackPriority = 0;
    else if (t = s & -s, r.callbackPriority !== t) {
      if (e != null && Sc(e), t === 1) r.tag === 0 ? Rw(bd.bind(null, r)) : Tl(bd.bind(null, r)), Nw(function() {
        !(q & 6) && yr();
      }), e = null;
      else {
        switch (il(s)) {
          case 1:
            e = Si;
            break;
          case 4:
            e = ol;
            break;
          case 16:
            e = is;
            break;
          case 536870912:
            e = sl;
            break;
          default:
            e = is;
        }
        e = Np(e, jp.bind(null, r));
      }
      r.callbackPriority = t, r.callbackNode = e;
    }
  }
  function jp(r, t) {
    if (es = -1, _s = 0, q & 6) throw Error(C(327));
    var e = r.callbackNode;
    if (hn() && r.callbackNode !== e) return null;
    var s = cs(r, r === xt ? zt : 0);
    if (s === 0) return null;
    if (s & 30 || s & r.expiredLanes || t) t = zs(r, s);
    else {
      t = s;
      var o = q;
      q |= 2;
      var n = Ep();
      (xt !== r || zt !== t) && (Ue = null, zn = ut() + 500, Mr(r, t));
      do
        try {
          _f();
          break;
        } catch (d) {
          Sp(r, d);
        }
      while (true);
      Ii(), js.current = n, q = o, ft !== null ? t = 0 : (xt = null, zt = 0, t = ht);
    }
    if (t !== 0) {
      if (t === 2 && (o = Da(r), o !== 0 && (s = o, t = li(r, o))), t === 1) throw e = ho, Mr(r, 0), g_(r, s), Jt(r, ut()), e;
      if (t === 6) g_(r, s);
      else {
        if (o = r.current.alternate, !(s & 30) && !tf(o) && (t = zs(r, s), t === 2 && (n = Da(r), n !== 0 && (s = n, t = li(r, n))), t === 1)) throw e = ho, Mr(r, 0), g_(r, s), Jt(r, ut()), e;
        switch (r.finishedWork = o, r.finishedLanes = s, t) {
          case 0:
          case 1:
            throw Error(C(345));
          case 2:
            xr(r, Yt, Ue);
            break;
          case 3:
            if (g_(r, s), (s & 130023424) === s && (t = Gi + 500 - ut(), 10 < t)) {
              if (cs(r, 0) !== 0) break;
              if (o = r.suspendedLanes, (o & s) !== s) {
                Mt(), r.pingedLanes |= r.suspendedLanes & o;
                break;
              }
              r.timeoutHandle = Aa(xr.bind(null, r, Yt, Ue), t);
              break;
            }
            xr(r, Yt, Ue);
            break;
          case 4:
            if (g_(r, s), (s & 4194240) === s) break;
            for (t = r.eventTimes, o = -1; 0 < s; ) {
              var c = 31 - ke(s);
              n = 1 << c, c = t[c], c > o && (o = c), s &= ~n;
            }
            if (s = o, s = ut() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * Gw(s / 1960)) - s, 10 < s) {
              r.timeoutHandle = Aa(xr.bind(null, r, Yt, Ue), s);
              break;
            }
            xr(r, Yt, Ue);
            break;
          case 5:
            xr(r, Yt, Ue);
            break;
          default:
            throw Error(C(329));
        }
      }
    }
    return Jt(r, ut()), r.callbackNode === e ? jp.bind(null, r) : null;
  }
  function li(r, t) {
    var e = Kn;
    return r.current.memoizedState.isDehydrated && (Mr(r, t).flags |= 256), r = zs(r, t), r !== 2 && (t = Yt, Yt = e, t !== null && pi(t)), r;
  }
  function pi(r) {
    Yt === null ? Yt = r : Yt.push.apply(Yt, r);
  }
  function tf(r) {
    for (var t = r; ; ) {
      if (t.flags & 16384) {
        var e = t.updateQueue;
        if (e !== null && (e = e.stores, e !== null)) for (var s = 0; s < e.length; s++) {
          var o = e[s], n = o.getSnapshot;
          o = o.value;
          try {
            if (!je(n(), o)) return false;
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
  function g_(r, t) {
    for (t &= ~Ji, t &= ~Us, r.suspendedLanes |= t, r.pingedLanes &= ~t, r = r.expirationTimes; 0 < t; ) {
      var e = 31 - ke(t), s = 1 << e;
      r[e] = -1, t &= ~s;
    }
  }
  function bd(r) {
    if (q & 6) throw Error(C(327));
    hn();
    var t = cs(r, 0);
    if (!(t & 1)) return Jt(r, ut()), null;
    var e = zs(r, t);
    if (r.tag !== 0 && e === 2) {
      var s = Da(r);
      s !== 0 && (t = s, e = li(r, s));
    }
    if (e === 1) throw e = ho, Mr(r, 0), g_(r, t), Jt(r, ut()), e;
    if (e === 6) throw Error(C(345));
    return r.finishedWork = r.current.alternate, r.finishedLanes = t, xr(r, Yt, Ue), Jt(r, ut()), null;
  }
  function tc(r, t) {
    var e = q;
    q |= 1;
    try {
      return r(t);
    } finally {
      q = e, q === 0 && (zn = ut() + 500, Rs && yr());
    }
  }
  function Hr(r) {
    nr !== null && nr.tag === 0 && !(q & 6) && hn();
    var t = q;
    q |= 1;
    var e = pe.transition, s = Z;
    try {
      if (pe.transition = null, Z = 1, r) return r();
    } finally {
      Z = s, pe.transition = e, q = t, !(q & 6) && yr();
    }
  }
  function ec() {
    Gt = ln.current, rt(ln);
  }
  function Mr(r, t) {
    r.finishedWork = null, r.finishedLanes = 0;
    var e = r.timeoutHandle;
    if (e !== -1 && (r.timeoutHandle = -1, Lw(e)), ft !== null) for (e = ft.return; e !== null; ) {
      var s = e;
      switch (Ri(s), s.tag) {
        case 1:
          s = s.type.childContextTypes, s != null && ws();
          break;
        case 3:
          Sn(), rt(Kt), rt(Rt), Bi();
          break;
        case 5:
          Vi(s);
          break;
        case 4:
          Sn();
          break;
        case 13:
          rt(at);
          break;
        case 19:
          rt(at);
          break;
        case 10:
          Ui(s.type._context);
          break;
        case 22:
        case 23:
          ec();
      }
      e = e.return;
    }
    if (xt = r, ft = r = wr(r.current, null), zt = Gt = t, ht = 0, ho = null, Ji = Us = Ar = 0, Yt = Kn = null, Cr !== null) {
      for (t = 0; t < Cr.length; t++) if (e = Cr[t], s = e.interleaved, s !== null) {
        e.interleaved = null;
        var o = s.next, n = e.pending;
        if (n !== null) {
          var c = n.next;
          n.next = o, s.next = c;
        }
        e.pending = s;
      }
      Cr = null;
    }
    return r;
  }
  function Sp(r, t) {
    do {
      var e = ft;
      try {
        if (Ii(), Jo.current = xs, ks) {
          for (var s = it.memoizedState; s !== null; ) {
            var o = s.queue;
            o !== null && (o.pending = null), s = s.next;
          }
          ks = false;
        }
        if (Br = 0, vt = gt = it = null, Yn = false, fo = 0, Zi.current = null, e === null || e.return === null) {
          ht = 1, ho = t, ft = null;
          break;
        }
        t: {
          var n = r, c = e.return, d = e, p = t;
          if (t = zt, d.flags |= 32768, p !== null && typeof p == "object" && typeof p.then == "function") {
            var l = p, m = d, x = m.tag;
            if (!(m.mode & 1) && (x === 0 || x === 11 || x === 15)) {
              var k = m.alternate;
              k ? (m.updateQueue = k.updateQueue, m.memoizedState = k.memoizedState, m.lanes = k.lanes) : (m.updateQueue = null, m.memoizedState = null);
            }
            var j = nd(c);
            if (j !== null) {
              j.flags &= -257, od(j, c, d, n, t), j.mode & 1 && rd(n, l, t), t = j, p = l;
              var L = t.updateQueue;
              if (L === null) {
                var N = /* @__PURE__ */ new Set();
                N.add(p), t.updateQueue = N;
              } else L.add(p);
              break t;
            } else {
              if (!(t & 1)) {
                rd(n, l, t), _c();
                break t;
              }
              p = Error(C(426));
            }
          } else if (nt && d.mode & 1) {
            var A = nd(c);
            if (A !== null) {
              !(A.flags & 65536) && (A.flags |= 256), od(A, c, d, n, t), $i(En(p, d));
              break t;
            }
          }
          n = p = En(p, d), ht !== 4 && (ht = 2), Kn === null ? Kn = [
            n
          ] : Kn.push(n), n = c;
          do {
            switch (n.tag) {
              case 3:
                n.flags |= 65536, t &= -t, n.lanes |= t;
                var y = ip(n, p, t);
                Zc(n, y);
                break t;
              case 1:
                d = p;
                var b = n.type, v = n.stateNode;
                if (!(n.flags & 128) && (typeof b.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (pr === null || !pr.has(v)))) {
                  n.flags |= 65536, t &= -t, n.lanes |= t;
                  var z = cp(n, d, t);
                  Zc(n, z);
                  break t;
                }
            }
            n = n.return;
          } while (n !== null);
        }
        Cp(e);
      } catch (F) {
        t = F, ft === e && e !== null && (ft = e = e.return);
        continue;
      }
      break;
    } while (true);
  }
  function Ep() {
    var r = js.current;
    return js.current = xs, r === null ? xs : r;
  }
  function _c() {
    (ht === 0 || ht === 3 || ht === 2) && (ht = 4), xt === null || !(Ar & 268435455) && !(Us & 268435455) || g_(xt, zt);
  }
  function zs(r, t) {
    var e = q;
    q |= 2;
    var s = Ep();
    (xt !== r || zt !== t) && (Ue = null, Mr(r, t));
    do
      try {
        ef();
        break;
      } catch (o) {
        Sp(r, o);
      }
    while (true);
    if (Ii(), q = e, js.current = s, ft !== null) throw Error(C(261));
    return xt = null, zt = 0, ht;
  }
  function ef() {
    for (; ft !== null; ) zp(ft);
  }
  function _f() {
    for (; ft !== null && !zu(); ) zp(ft);
  }
  function zp(r) {
    var t = Lp(r.alternate, r, Gt);
    r.memoizedProps = r.pendingProps, t === null ? Cp(r) : ft = t, Zi.current = null;
  }
  function Cp(r) {
    var t = r;
    do {
      var e = t.alternate;
      if (r = t.return, t.flags & 32768) {
        if (e = Xw(e, t), e !== null) {
          e.flags &= 32767, ft = e;
          return;
        }
        if (r !== null) r.flags |= 32768, r.subtreeFlags = 0, r.deletions = null;
        else {
          ht = 6, ft = null;
          return;
        }
      } else if (e = Yw(e, t, Gt), e !== null) {
        ft = e;
        return;
      }
      if (t = t.sibling, t !== null) {
        ft = t;
        return;
      }
      ft = t = r;
    } while (t !== null);
    ht === 0 && (ht = 5);
  }
  function xr(r, t, e) {
    var s = Z, o = pe.transition;
    try {
      pe.transition = null, Z = 1, rf(r, t, e, s);
    } finally {
      pe.transition = o, Z = s;
    }
    return null;
  }
  function rf(r, t, e, s) {
    do
      hn();
    while (nr !== null);
    if (q & 6) throw Error(C(327));
    e = r.finishedWork;
    var o = r.finishedLanes;
    if (e === null) return null;
    if (r.finishedWork = null, r.finishedLanes = 0, e === r.current) throw Error(C(177));
    r.callbackNode = null, r.callbackPriority = 0;
    var n = e.lanes | e.childLanes;
    if (Du(r, n), r === xt && (ft = xt = null, zt = 0), !(e.subtreeFlags & 2064) && !(e.flags & 2064) || Qo || (Qo = true, Np(is, function() {
      return hn(), null;
    })), n = (e.flags & 15990) !== 0, e.subtreeFlags & 15990 || n) {
      n = pe.transition, pe.transition = null;
      var c = Z;
      Z = 1;
      var d = q;
      q |= 4, Zi.current = null, Zw(r, e), kp(e, r), xw(Va), ds = !!Qa, Va = Qa = null, r.current = e, Jw(e), Cu(), q = d, Z = c, pe.transition = n;
    } else r.current = e;
    if (Qo && (Qo = false, nr = r, Es = o), n = r.pendingLanes, n === 0 && (pr = null), Nu(e.stateNode), Jt(r, ut()), t !== null) for (s = r.onRecoverableError, e = 0; e < t.length; e++) o = t[e], s(o.value, {
      componentStack: o.stack,
      digest: o.digest
    });
    if (Ss) throw Ss = false, r = ci, ci = null, r;
    return Es & 1 && r.tag !== 0 && hn(), n = r.pendingLanes, n & 1 ? r === di ? Zn++ : (Zn = 0, di = r) : Zn = 0, yr(), null;
  }
  function hn() {
    if (nr !== null) {
      var r = il(Es), t = pe.transition, e = Z;
      try {
        if (pe.transition = null, Z = 16 > r ? 16 : r, nr === null) var s = false;
        else {
          if (r = nr, nr = null, Es = 0, q & 6) throw Error(C(331));
          var o = q;
          for (q |= 4, $ = r.current; $ !== null; ) {
            var n = $, c = n.child;
            if ($.flags & 16) {
              var d = n.deletions;
              if (d !== null) {
                for (var p = 0; p < d.length; p++) {
                  var l = d[p];
                  for ($ = l; $ !== null; ) {
                    var m = $;
                    switch (m.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Xn(8, m, n);
                    }
                    var x = m.child;
                    if (x !== null) x.return = m, $ = x;
                    else for (; $ !== null; ) {
                      m = $;
                      var k = m.sibling, j = m.return;
                      if (yp(m), m === l) {
                        $ = null;
                        break;
                      }
                      if (k !== null) {
                        k.return = j, $ = k;
                        break;
                      }
                      $ = j;
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
                $ = n;
              }
            }
            if (n.subtreeFlags & 2064 && c !== null) c.return = n, $ = c;
            else t: for (; $ !== null; ) {
              if (n = $, n.flags & 2048) switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  Xn(9, n, n.return);
              }
              var y = n.sibling;
              if (y !== null) {
                y.return = n.return, $ = y;
                break t;
              }
              $ = n.return;
            }
          }
          var b = r.current;
          for ($ = b; $ !== null; ) {
            c = $;
            var v = c.child;
            if (c.subtreeFlags & 2064 && v !== null) v.return = c, $ = v;
            else t: for (c = b; $ !== null; ) {
              if (d = $, d.flags & 2048) try {
                switch (d.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Is(9, d);
                }
              } catch (F) {
                lt(d, d.return, F);
              }
              if (d === c) {
                $ = null;
                break t;
              }
              var z = d.sibling;
              if (z !== null) {
                z.return = d.return, $ = z;
                break t;
              }
              $ = d.return;
            }
          }
          if (q = o, yr(), Re && typeof Re.onPostCommitFiberRoot == "function") try {
            Re.onPostCommitFiberRoot(Ls, r);
          } catch {
          }
          s = true;
        }
        return s;
      } finally {
        Z = e, pe.transition = t;
      }
    }
    return false;
  }
  function hd(r, t, e) {
    t = En(e, t), t = ip(r, t, 1), r = lr(r, t, 1), t = Mt(), r !== null && (vo(r, 1, t), Jt(r, t));
  }
  function lt(r, t, e) {
    if (r.tag === 3) hd(r, r, e);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        hd(t, r, e);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (pr === null || !pr.has(s))) {
          r = En(e, r), r = cp(t, r, 1), t = lr(t, r, 1), r = Mt(), t !== null && (vo(t, 1, r), Jt(t, r));
          break;
        }
      }
      t = t.return;
    }
  }
  function nf(r, t, e) {
    var s = r.pingCache;
    s !== null && s.delete(t), t = Mt(), r.pingedLanes |= r.suspendedLanes & e, xt === r && (zt & e) === e && (ht === 4 || ht === 3 && (zt & 130023424) === zt && 500 > ut() - Gi ? Mr(r, 0) : Ji |= e), Jt(r, t);
  }
  function Op(r, t) {
    t === 0 && (r.mode & 1 ? (t = Fo, Fo <<= 1, !(Fo & 130023424) && (Fo = 4194304)) : t = 1);
    var e = Mt();
    r = s_(r, t), r !== null && (vo(r, t, e), Jt(r, e));
  }
  function of(r) {
    var t = r.memoizedState, e = 0;
    t !== null && (e = t.retryLane), Op(r, e);
  }
  function sf(r, t) {
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
        throw Error(C(314));
    }
    s !== null && s.delete(t), Op(r, e);
  }
  var Lp;
  Lp = function(r, t, e) {
    if (r !== null) if (r.memoizedProps !== t.pendingProps || Kt.current) Xt = true;
    else {
      if (!(r.lanes & e) && !(t.flags & 128)) return Xt = false, qw(r, t, e);
      Xt = !!(r.flags & 131072);
    }
    else Xt = false, nt && t.flags & 1048576 && Pl(t, bs, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var s = t.type;
        ts(r, t), r = t.pendingProps;
        var o = kn(t, Rt.current);
        bn(t, e), o = Hi(null, t, s, r, o, e);
        var n = qi();
        return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Zt(s) ? (n = true, fs(t)) : n = false, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Wi(t), o.updater = Ds, t.stateNode = o, o._reactInternals = t, Ja(t, s, r, e), t = ei(null, t, s, true, n, e)) : (t.tag = 0, nt && n && Pi(t), Dt(null, t, o, e), t = t.child), t;
      case 16:
        s = t.elementType;
        t: {
          switch (ts(r, t), r = t.pendingProps, o = s._init, s = o(s._payload), t.type = s, o = t.tag = cf(s), r = be(s, r), o) {
            case 0:
              t = ti(null, t, s, r, e);
              break t;
            case 1:
              t = id(null, t, s, r, e);
              break t;
            case 11:
              t = sd(null, t, s, r, e);
              break t;
            case 14:
              t = ad(null, t, s, be(s.type, r), e);
              break t;
          }
          throw Error(C(306, s, ""));
        }
        return t;
      case 0:
        return s = t.type, o = t.pendingProps, o = t.elementType === s ? o : be(s, o), ti(r, t, s, o, e);
      case 1:
        return s = t.type, o = t.pendingProps, o = t.elementType === s ? o : be(s, o), id(r, t, s, o, e);
      case 3:
        t: {
          if (up(t), r === null) throw Error(C(387));
          s = t.pendingProps, n = t.memoizedState, o = n.element, Ml(r, t), ms(t, s, null, e);
          var c = t.memoizedState;
          if (s = c.element, n.isDehydrated) if (n = {
            element: s,
            isDehydrated: false,
            cache: c.cache,
            pendingSuspenseBoundaries: c.pendingSuspenseBoundaries,
            transitions: c.transitions
          }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
            o = En(Error(C(423)), t), t = cd(r, t, s, e, o);
            break t;
          } else if (s !== o) {
            o = En(Error(C(424)), t), t = cd(r, t, s, e, o);
            break t;
          } else for (ee = dr(t.stateNode.containerInfo.firstChild), _e = t, nt = true, me = null, e = Il(t, null, s, e), t.child = e; e; ) e.flags = e.flags & -3 | 4096, e = e.sibling;
          else {
            if (xn(), s === o) {
              t = a_(r, t, e);
              break t;
            }
            Dt(r, t, s, e);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Wl(t), r === null && Xa(t), s = t.type, o = t.pendingProps, n = r !== null ? r.memoizedProps : null, c = o.children, Ba(s, o) ? c = null : n !== null && Ba(s, n) && (t.flags |= 32), pp(r, t), Dt(r, t, c, e), t.child;
      case 6:
        return r === null && Xa(t), null;
      case 13:
        return wp(r, t, e);
      case 4:
        return Qi(t, t.stateNode.containerInfo), s = t.pendingProps, r === null ? t.child = jn(t, null, s, e) : Dt(r, t, s, e), t.child;
      case 11:
        return s = t.type, o = t.pendingProps, o = t.elementType === s ? o : be(s, o), sd(r, t, s, o, e);
      case 7:
        return Dt(r, t, t.pendingProps, e), t.child;
      case 8:
        return Dt(r, t, t.pendingProps.children, e), t.child;
      case 12:
        return Dt(r, t, t.pendingProps.children, e), t.child;
      case 10:
        t: {
          if (s = t.type._context, o = t.pendingProps, n = t.memoizedProps, c = o.value, G(hs, s._currentValue), s._currentValue = c, n !== null) if (je(n.value, c)) {
            if (n.children === o.children && !Kt.current) {
              t = a_(r, t, e);
              break t;
            }
          } else for (n = t.child, n !== null && (n.return = t); n !== null; ) {
            var d = n.dependencies;
            if (d !== null) {
              c = n.child;
              for (var p = d.firstContext; p !== null; ) {
                if (p.context === s) {
                  if (n.tag === 1) {
                    p = r_(-1, e & -e), p.tag = 2;
                    var l = n.updateQueue;
                    if (l !== null) {
                      l = l.shared;
                      var m = l.pending;
                      m === null ? p.next = p : (p.next = m.next, m.next = p), l.pending = p;
                    }
                  }
                  n.lanes |= e, p = n.alternate, p !== null && (p.lanes |= e), Ka(n.return, e, t), d.lanes |= e;
                  break;
                }
                p = p.next;
              }
            } else if (n.tag === 10) c = n.type === t.type ? null : n.child;
            else if (n.tag === 18) {
              if (c = n.return, c === null) throw Error(C(341));
              c.lanes |= e, d = c.alternate, d !== null && (d.lanes |= e), Ka(c, e, t), c = n.sibling;
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
          Dt(r, t, o.children, e), t = t.child;
        }
        return t;
      case 9:
        return o = t.type, s = t.pendingProps.children, bn(t, e), o = ue(o), s = s(o), t.flags |= 1, Dt(r, t, s, e), t.child;
      case 14:
        return s = t.type, o = be(s, t.pendingProps), o = be(s.type, o), ad(r, t, s, o, e);
      case 15:
        return dp(r, t, t.type, t.pendingProps, e);
      case 17:
        return s = t.type, o = t.pendingProps, o = t.elementType === s ? o : be(s, o), ts(r, t), t.tag = 1, Zt(s) ? (r = true, fs(t)) : r = false, bn(t, e), ap(t, s, o), Ja(t, s, o, e), ei(null, t, s, true, r, e);
      case 19:
        return fp(r, t, e);
      case 22:
        return lp(r, t, e);
    }
    throw Error(C(156, t.tag));
  };
  function Np(r, t) {
    return nl(r, t);
  }
  function af(r, t, e, s) {
    this.tag = r, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function de(r, t, e, s) {
    return new af(r, t, e, s);
  }
  function rc(r) {
    return r = r.prototype, !(!r || !r.isReactComponent);
  }
  function cf(r) {
    if (typeof r == "function") return rc(r) ? 1 : 0;
    if (r != null) {
      if (r = r.$$typeof, r === ki) return 11;
      if (r === xi) return 14;
    }
    return 2;
  }
  function wr(r, t) {
    var e = r.alternate;
    return e === null ? (e = de(r.tag, t, r.key, r.mode), e.elementType = r.elementType, e.type = r.type, e.stateNode = r.stateNode, e.alternate = r, r.alternate = e) : (e.pendingProps = t, e.type = r.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = r.flags & 14680064, e.childLanes = r.childLanes, e.lanes = r.lanes, e.child = r.child, e.memoizedProps = r.memoizedProps, e.memoizedState = r.memoizedState, e.updateQueue = r.updateQueue, t = r.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }, e.sibling = r.sibling, e.index = r.index, e.ref = r.ref, e;
  }
  function rs(r, t, e, s, o, n) {
    var c = 2;
    if (s = r, typeof r == "function") rc(r) && (c = 1);
    else if (typeof r == "string") c = 5;
    else t: switch (r) {
      case tn:
        return Wr(e.children, o, n, t);
      case vi:
        c = 8, o |= 8;
        break;
      case ka:
        return r = de(12, e, t, o | 2), r.elementType = ka, r.lanes = n, r;
      case xa:
        return r = de(13, e, t, o), r.elementType = xa, r.lanes = n, r;
      case ja:
        return r = de(19, e, t, o), r.elementType = ja, r.lanes = n, r;
      case Wd:
        return Ms(e, o, n, t);
      default:
        if (typeof r == "object" && r !== null) switch (r.$$typeof) {
          case Ud:
            c = 10;
            break t;
          case Md:
            c = 9;
            break t;
          case ki:
            c = 11;
            break t;
          case xi:
            c = 14;
            break t;
          case p_:
            c = 16, s = null;
            break t;
        }
        throw Error(C(130, r == null ? r : typeof r, ""));
    }
    return t = de(c, e, t, o), t.elementType = r, t.type = s, t.lanes = n, t;
  }
  function Wr(r, t, e, s) {
    return r = de(7, r, s, t), r.lanes = e, r;
  }
  function Ms(r, t, e, s) {
    return r = de(22, r, s, t), r.elementType = Wd, r.lanes = e, r.stateNode = {
      isHidden: false
    }, r;
  }
  function ya(r, t, e) {
    return r = de(6, r, null, t), r.lanes = e, r;
  }
  function ma(r, t, e) {
    return t = de(4, r.children !== null ? r.children : [], r.key, t), t.lanes = e, t.stateNode = {
      containerInfo: r.containerInfo,
      pendingChildren: null,
      implementation: r.implementation
    }, t;
  }
  function df(r, t, e, s, o) {
    this.tag = t, this.containerInfo = r, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ta(0), this.expirationTimes = ta(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ta(0), this.identifierPrefix = s, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
  }
  function nc(r, t, e, s, o, n, c, d, p) {
    return r = new df(r, t, e, d, p), t === 1 ? (t = 1, n === true && (t |= 8)) : t = 0, n = de(3, null, null, t), r.current = n, n.stateNode = r, n.memoizedState = {
      element: s,
      isDehydrated: e,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    }, Wi(n), r;
  }
  function lf(r, t, e) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Gr,
      key: s == null ? null : "" + s,
      children: r,
      containerInfo: t,
      implementation: e
    };
  }
  function Fp(r) {
    if (!r) return gr;
    r = r._reactInternals;
    t: {
      if (Yr(r) !== r || r.tag !== 1) throw Error(C(170));
      var t = r;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break t;
          case 1:
            if (Zt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break t;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(C(171));
    }
    if (r.tag === 1) {
      var e = r.type;
      if (Zt(e)) return Fl(r, e, t);
    }
    return t;
  }
  function Tp(r, t, e, s, o, n, c, d, p) {
    return r = nc(e, s, true, r, o, n, c, d, p), r.context = Fp(null), e = r.current, s = Mt(), o = ur(e), n = r_(s, o), n.callback = t ?? null, lr(e, n, o), r.current.lanes = o, vo(r, o, s), Jt(r, s), r;
  }
  function Ws(r, t, e, s) {
    var o = t.current, n = Mt(), c = ur(o);
    return e = Fp(e), t.context === null ? t.context = e : t.pendingContext = e, t = r_(n, c), t.payload = {
      element: r
    }, s = s === void 0 ? null : s, s !== null && (t.callback = s), r = lr(o, t, c), r !== null && (xe(r, o, c, n), Zo(r, o, c)), c;
  }
  function Cs(r) {
    if (r = r.current, !r.child) return null;
    switch (r.child.tag) {
      case 5:
        return r.child.stateNode;
      default:
        return r.child.stateNode;
    }
  }
  function yd(r, t) {
    if (r = r.memoizedState, r !== null && r.dehydrated !== null) {
      var e = r.retryLane;
      r.retryLane = e !== 0 && e < t ? e : t;
    }
  }
  function oc(r, t) {
    yd(r, t), (r = r.alternate) && yd(r, t);
  }
  function pf() {
    return null;
  }
  var Pp = typeof reportError == "function" ? reportError : function(r) {
    console.error(r);
  };
  function sc(r) {
    this._internalRoot = r;
  }
  Qs.prototype.render = sc.prototype.render = function(r) {
    var t = this._internalRoot;
    if (t === null) throw Error(C(409));
    Ws(r, t, null, null);
  };
  Qs.prototype.unmount = sc.prototype.unmount = function() {
    var r = this._internalRoot;
    if (r !== null) {
      this._internalRoot = null;
      var t = r.containerInfo;
      Hr(function() {
        Ws(null, r, null, null);
      }), t[o_] = null;
    }
  };
  function Qs(r) {
    this._internalRoot = r;
  }
  Qs.prototype.unstable_scheduleHydration = function(r) {
    if (r) {
      var t = ll();
      r = {
        blockedOn: null,
        target: r,
        priority: t
      };
      for (var e = 0; e < f_.length && t !== 0 && t < f_[e].priority; e++) ;
      f_.splice(e, 0, r), e === 0 && ul(r);
    }
  };
  function ac(r) {
    return !(!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11);
  }
  function Vs(r) {
    return !(!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11 && (r.nodeType !== 8 || r.nodeValue !== " react-mount-point-unstable "));
  }
  function md() {
  }
  function uf(r, t, e, s, o) {
    if (o) {
      if (typeof s == "function") {
        var n = s;
        s = function() {
          var l = Cs(c);
          n.call(l);
        };
      }
      var c = Tp(t, s, r, 0, null, false, false, "", md);
      return r._reactRootContainer = c, r[o_] = c.current, co(r.nodeType === 8 ? r.parentNode : r), Hr(), c;
    }
    for (; o = r.lastChild; ) r.removeChild(o);
    if (typeof s == "function") {
      var d = s;
      s = function() {
        var l = Cs(p);
        d.call(l);
      };
    }
    var p = nc(r, 0, false, null, null, false, false, "", md);
    return r._reactRootContainer = p, r[o_] = p.current, co(r.nodeType === 8 ? r.parentNode : r), Hr(function() {
      Ws(t, p, e, s);
    }), p;
  }
  function Bs(r, t, e, s, o) {
    var n = e._reactRootContainer;
    if (n) {
      var c = n;
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var p = Cs(c);
          d.call(p);
        };
      }
      Ws(t, c, r, o);
    } else c = uf(e, t, r, o, s);
    return Cs(c);
  }
  cl = function(r) {
    switch (r.tag) {
      case 3:
        var t = r.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var e = Wn(t.pendingLanes);
          e !== 0 && (Ei(t, e | 1), Jt(t, ut()), !(q & 6) && (zn = ut() + 500, yr()));
        }
        break;
      case 13:
        Hr(function() {
          var s = s_(r, 1);
          if (s !== null) {
            var o = Mt();
            xe(s, r, 1, o);
          }
        }), oc(r, 1);
    }
  };
  zi = function(r) {
    if (r.tag === 13) {
      var t = s_(r, 134217728);
      if (t !== null) {
        var e = Mt();
        xe(t, r, 134217728, e);
      }
      oc(r, 134217728);
    }
  };
  dl = function(r) {
    if (r.tag === 13) {
      var t = ur(r), e = s_(r, t);
      if (e !== null) {
        var s = Mt();
        xe(e, r, t, s);
      }
      oc(r, t);
    }
  };
  ll = function() {
    return Z;
  };
  pl = function(r, t) {
    var e = Z;
    try {
      return Z = r, t();
    } finally {
      Z = e;
    }
  };
  Pa = function(r, t, e) {
    switch (t) {
      case "input":
        if (za(r, e), t = e.name, e.type === "radio" && t != null) {
          for (e = r; e.parentNode; ) e = e.parentNode;
          for (e = e.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < e.length; t++) {
            var s = e[t];
            if (s !== r && s.form === r.form) {
              var o = Ps(s);
              if (!o) throw Error(C(90));
              Vd(s), za(s, o);
            }
          }
        }
        break;
      case "textarea":
        Ad(r, e);
        break;
      case "select":
        t = e.value, t != null && un(r, !!e.multiple, t, false);
    }
  };
  Jd = tc;
  Gd = Hr;
  var wf = {
    usingClientEntryPoint: false,
    Events: [
      xo,
      nn,
      Ps,
      Kd,
      Zd,
      tc
    ]
  }, In = {
    findFiberByHostInstance: zr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
  }, ff = {
    bundleType: In.bundleType,
    version: In.version,
    rendererPackageName: In.rendererPackageName,
    rendererConfig: In.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: i_.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(r) {
      return r = _l(r), r === null ? null : r.stateNode;
    },
    findFiberByHostInstance: In.findFiberByHostInstance || pf,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vo.isDisabled && Vo.supportsFiber) try {
      Ls = Vo.inject(ff), Re = Vo;
    } catch {
    }
  }
  oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wf;
  oe.createPortal = function(r, t) {
    var e = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ac(t)) throw Error(C(200));
    return lf(r, t, null, e);
  };
  oe.createRoot = function(r, t) {
    if (!ac(r)) throw Error(C(299));
    var e = false, s = "", o = Pp;
    return t != null && (t.unstable_strictMode === true && (e = true), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = nc(r, 1, false, null, null, e, false, s, o), r[o_] = t.current, co(r.nodeType === 8 ? r.parentNode : r), new sc(t);
  };
  oe.findDOMNode = function(r) {
    if (r == null) return null;
    if (r.nodeType === 1) return r;
    var t = r._reactInternals;
    if (t === void 0) throw typeof r.render == "function" ? Error(C(188)) : (r = Object.keys(r).join(","), Error(C(268, r)));
    return r = _l(t), r = r === null ? null : r.stateNode, r;
  };
  oe.flushSync = function(r) {
    return Hr(r);
  };
  oe.hydrate = function(r, t, e) {
    if (!Vs(t)) throw Error(C(200));
    return Bs(null, r, t, true, e);
  };
  oe.hydrateRoot = function(r, t, e) {
    if (!ac(r)) throw Error(C(405));
    var s = e != null && e.hydratedSources || null, o = false, n = "", c = Pp;
    if (e != null && (e.unstable_strictMode === true && (o = true), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onRecoverableError !== void 0 && (c = e.onRecoverableError)), t = Tp(t, null, r, 1, e ?? null, o, false, n, c), r[o_] = t.current, co(r), s) for (r = 0; r < s.length; r++) e = s[r], o = e._getVersion, o = o(e._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [
      e,
      o
    ] : t.mutableSourceEagerHydrationData.push(e, o);
    return new Qs(t);
  };
  oe.render = function(r, t, e) {
    if (!Vs(t)) throw Error(C(200));
    return Bs(null, r, t, false, e);
  };
  oe.unmountComponentAtNode = function(r) {
    if (!Vs(r)) throw Error(C(40));
    return r._reactRootContainer ? (Hr(function() {
      Bs(null, null, r, false, function() {
        r._reactRootContainer = null, r[o_] = null;
      });
    }), true) : false;
  };
  oe.unstable_batchedUpdates = tc;
  oe.unstable_renderSubtreeIntoContainer = function(r, t, e, s) {
    if (!Vs(e)) throw Error(C(200));
    if (r == null || r._reactInternals === void 0) throw Error(C(38));
    return Bs(r, t, e, false, s);
  };
  oe.version = "18.3.1-next-f1338f8080-20240426";
  function Rp() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rp);
    } catch (r) {
      console.error(r);
    }
  }
  Rp(), Rd.exports = oe;
  var gf = Rd.exports, $p, vd = gf;
  $p = vd.createRoot, vd.hydrateRoot;
  const bf = "" + new URL("cardano_serialization_lib_bg-DYSGQNOE.wasm", import.meta.url).href, hf = async (r = {}, t) => {
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
  function yf(r) {
    _ = r;
  }
  const Xe = new Array(128).fill(void 0);
  Xe.push(void 0, null, true, false);
  function Q(r) {
    return Xe[r];
  }
  let Jn = Xe.length;
  function mf(r) {
    r < 132 || (Xe[r] = Jn, Jn = r);
  }
  function u(r) {
    const t = Q(r);
    return mf(r), t;
  }
  const vf = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
  let Dp = new vf("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  Dp.decode();
  let Bo = null;
  function yn() {
    return (Bo === null || Bo.byteLength === 0) && (Bo = new Uint8Array(_.memory.buffer)), Bo;
  }
  function h(r, t) {
    return r = r >>> 0, Dp.decode(yn().subarray(r, r + t));
  }
  function H(r) {
    Jn === Xe.length && Xe.push(Xe.length + 1);
    const t = Jn;
    return Jn = Xe[t], Xe[t] = r, t;
  }
  let w = 0;
  const kf = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
  let ns = new kf("utf-8");
  const xf = typeof ns.encodeInto == "function" ? function(r, t) {
    return ns.encodeInto(r, t);
  } : function(r, t) {
    const e = ns.encode(r);
    return t.set(e), {
      read: r.length,
      written: e.length
    };
  };
  function g(r, t, e) {
    if (e === void 0) {
      const d = ns.encode(r), p = t(d.length, 1) >>> 0;
      return yn().subarray(p, p + d.length).set(d), w = d.length, p;
    }
    let s = r.length, o = t(s, 1) >>> 0;
    const n = yn();
    let c = 0;
    for (; c < s; c++) {
      const d = r.charCodeAt(c);
      if (d > 127) break;
      n[o + c] = d;
    }
    if (c !== s) {
      c !== 0 && (r = r.slice(c)), o = e(o, s, s = c + r.length * 3, 1) >>> 0;
      const d = yn().subarray(o + c, o + s), p = xf(r, d);
      c += p.written;
    }
    return w = c, o;
  }
  function De(r) {
    return r == null;
  }
  let Ao = null;
  function a() {
    return (Ao === null || Ao.byteLength === 0) && (Ao = new Int32Array(_.memory.buffer)), Ao;
  }
  function ui(r) {
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
      o > 0 && (n += ui(r[0]));
      for (let c = 1; c < o; c++) n += ", " + ui(r[c]);
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
  function E(r, t) {
    return r = r >>> 0, yn().subarray(r / 1, r / 1 + t);
  }
  function S(r, t) {
    const e = t(r.length * 1, 1) >>> 0;
    return yn().set(r, e / 1), w = r.length, e;
  }
  function f(r, t) {
    if (!(r instanceof t)) throw new Error(`expected instance of ${t.name}`);
    return r.ptr;
  }
  function c_(r, t) {
    try {
      return r.apply(this, t);
    } catch (e) {
      _.__wbindgen_exn_store(H(e));
    }
  }
  class Pt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Pt.prototype);
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
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.address_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Pt.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return Pt.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return Pt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.address_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const k = _.__wbindgen_add_to_stack_pointer(-16);
        var o = De(t) ? 0 : g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), n = w;
        _.address_to_bech32(k, this.__wbg_ptr, o, n);
        var c = a()[k / 4 + 0], d = a()[k / 4 + 1], p = a()[k / 4 + 2], l = a()[k / 4 + 3], m = c, x = d;
        if (l) throw m = 0, x = 0, u(p);
        return e = m, s = x, h(m, x);
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
        return Pt.__wrap(e);
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
  class Ut {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ut.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.assetname_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ut.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return Ut.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return Ut.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.assetname_new(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ut.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    name() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.assetname_name(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
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
      _.__wbg_assetnames_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.assetnames_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.assetnames_from_bytes(n, c, d);
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
        _.assetnames_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return b_.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return b_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.assetnames_new();
      return b_.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.assetnames_get(this.__wbg_ptr, t);
      return Ut.__wrap(e);
    }
    add(t) {
      f(t, Ut), _.assetnames_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class Ke {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ke.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.assets_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ke.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return Ke.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return Ke.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.assets_new();
      return Ke.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, Ut), f(e, O);
      const s = _.assets_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : O.__wrap(s);
    }
    get(t) {
      f(t, Ut);
      const e = _.assets_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : O.__wrap(e);
    }
    keys() {
      const t = _.assets_keys(this.__wbg_ptr);
      return b_.__wrap(t);
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
      _.__wbg_auxiliarydata_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydata_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.auxiliarydata_from_bytes(n, c, d);
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
        _.auxiliarydata_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return h_.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return h_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.auxiliarydata_new();
      return h_.__wrap(t);
    }
    metadata() {
      const t = _.auxiliarydata_metadata(this.__wbg_ptr);
      return t === 0 ? void 0 : j_.__wrap(t);
    }
    set_metadata(t) {
      f(t, j_), _.auxiliarydata_set_metadata(this.__wbg_ptr, t.__wbg_ptr);
    }
    native_scripts() {
      const t = _.auxiliarydata_native_scripts(this.__wbg_ptr);
      return t === 0 ? void 0 : ne.__wrap(t);
    }
    set_native_scripts(t) {
      f(t, ne), _.auxiliarydata_set_native_scripts(this.__wbg_ptr, t.__wbg_ptr);
    }
    plutus_scripts() {
      const t = _.auxiliarydata_plutus_scripts(this.__wbg_ptr);
      return t === 0 ? void 0 : Ne.__wrap(t);
    }
    set_plutus_scripts(t) {
      f(t, Ne), _.auxiliarydata_set_plutus_scripts(this.__wbg_ptr, t.__wbg_ptr);
    }
    prefer_alonzo_format() {
      return _.auxiliarydata_prefer_alonzo_format(this.__wbg_ptr) !== 0;
    }
    set_prefer_alonzo_format(t) {
      _.auxiliarydata_set_prefer_alonzo_format(this.__wbg_ptr, t);
    }
  }
  class Lr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Lr.prototype);
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
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.auxiliarydatahash_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Lr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydatahash_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const m = _.__wbindgen_add_to_stack_pointer(-16), x = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), k = w;
        _.auxiliarydatahash_to_bech32(m, this.__wbg_ptr, x, k);
        var o = a()[m / 4 + 0], n = a()[m / 4 + 1], c = a()[m / 4 + 2], d = a()[m / 4 + 3], p = o, l = n;
        if (d) throw p = 0, l = 0, u(c);
        return e = p, s = l, h(p, l);
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
        return Lr.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return Lr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class Gn {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Gn.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_baseaddress_free(t);
    }
    static new(t, e, s) {
      f(e, _t), f(s, _t);
      const o = _.baseaddress_new(t, e.__wbg_ptr, s.__wbg_ptr);
      return Gn.__wrap(o);
    }
    payment_cred() {
      const t = _.baseaddress_payment_cred(this.__wbg_ptr);
      return _t.__wrap(t);
    }
    stake_cred() {
      const t = _.baseaddress_stake_cred(this.__wbg_ptr);
      return _t.__wrap(t);
    }
    to_address() {
      const t = _.baseaddress_to_address(this.__wbg_ptr);
      return Pt.__wrap(t);
    }
    static from_address(t) {
      f(t, Pt);
      const e = _.baseaddress_from_address(t.__wbg_ptr);
      return e === 0 ? void 0 : Gn.__wrap(e);
    }
  }
  class Ft {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ft.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.bigint_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ft.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return Ft.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return Ft.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    is_zero() {
      return _.bigint_is_zero(this.__wbg_ptr) !== 0;
    }
    as_u64() {
      const t = _.bigint_as_u64(this.__wbg_ptr);
      return t === 0 ? void 0 : O.__wrap(t);
    }
    as_int() {
      const t = _.bigint_as_int(this.__wbg_ptr);
      return t === 0 ? void 0 : pt.__wrap(t);
    }
    static from_str(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.bigint_from_str(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ft.__wrap(e);
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
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    add(t) {
      f(t, Ft);
      const e = _.bigint_add(this.__wbg_ptr, t.__wbg_ptr);
      return Ft.__wrap(e);
    }
    mul(t) {
      f(t, Ft);
      const e = _.bigint_mul(this.__wbg_ptr, t.__wbg_ptr);
      return Ft.__wrap(e);
    }
    static one() {
      const t = _.bigint_one();
      return Ft.__wrap(t);
    }
    increment() {
      const t = _.bigint_increment(this.__wbg_ptr);
      return Ft.__wrap(t);
    }
    div_ceil(t) {
      f(t, Ft);
      const e = _.bigint_div_ceil(this.__wbg_ptr, t.__wbg_ptr);
      return Ft.__wrap(e);
    }
  }
  class O {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(O.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.bignum_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return O.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return O.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return O.__wrap(e);
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
        return O.__wrap(e);
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
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static zero() {
      const t = _.bignum_zero();
      return O.__wrap(t);
    }
    static one() {
      const t = _.bignum_one();
      return O.__wrap(t);
    }
    is_zero() {
      return _.bignum_is_zero(this.__wbg_ptr) !== 0;
    }
    div_floor(t) {
      f(t, O);
      const e = _.bignum_div_floor(this.__wbg_ptr, t.__wbg_ptr);
      return O.__wrap(e);
    }
    checked_mul(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        f(t, O), _.bignum_checked_mul(n, this.__wbg_ptr, t.__wbg_ptr);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return O.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    checked_add(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        f(t, O), _.bignum_checked_add(n, this.__wbg_ptr, t.__wbg_ptr);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return O.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    checked_sub(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        f(t, O), _.bignum_checked_sub(n, this.__wbg_ptr, t.__wbg_ptr);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return O.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    clamped_sub(t) {
      f(t, O);
      const e = _.bignum_clamped_sub(this.__wbg_ptr, t.__wbg_ptr);
      return O.__wrap(e);
    }
    compare(t) {
      return f(t, O), _.bignum_compare(this.__wbg_ptr, t.__wbg_ptr);
    }
    less_than(t) {
      return f(t, O), _.bignum_less_than(this.__wbg_ptr, t.__wbg_ptr) !== 0;
    }
    static max_value() {
      const t = _.bignum_max_value();
      return O.__wrap(t);
    }
    static max(t, e) {
      f(t, O), f(e, O);
      const s = _.bignum_max(t.__wbg_ptr, e.__wbg_ptr);
      return O.__wrap(s);
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
      _.__wbg_bootstrapwitness_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.bootstrapwitness_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.bootstrapwitness_from_bytes(n, c, d);
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
        _.bootstrapwitness_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return y_.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return y_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    vkey() {
      const t = _.bootstrapwitness_vkey(this.__wbg_ptr);
      return Te.__wrap(t);
    }
    signature() {
      const t = _.bootstrapwitness_signature(this.__wbg_ptr);
      return Pe.__wrap(t);
    }
    chain_code() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.bootstrapwitness_chain_code(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    attributes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.bootstrapwitness_attributes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t, e, s, o) {
      f(t, Te), f(e, Pe);
      const n = S(s, _.__wbindgen_malloc), c = w, d = S(o, _.__wbindgen_malloc), p = w, l = _.bootstrapwitness_new(t.__wbg_ptr, e.__wbg_ptr, n, c, d, p);
      return y_.__wrap(l);
    }
  }
  class yo {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(yo.prototype);
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
      return yo.__wrap(t);
    }
    len() {
      return _.bootstrapwitnesses_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.bootstrapwitnesses_get(this.__wbg_ptr, t);
      return y_.__wrap(e);
    }
    add(t) {
      f(t, y_), _.bootstrapwitnesses_add(this.__wbg_ptr, t.__wbg_ptr);
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
      _.__wbg_certificate_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.certificate_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.certificate_from_bytes(n, c, d);
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
        _.certificate_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return Bt.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return Bt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_stake_registration(t) {
      f(t, X_);
      const e = _.certificate_new_stake_registration(t.__wbg_ptr);
      return Bt.__wrap(e);
    }
    static new_stake_deregistration(t) {
      f(t, Y_);
      const e = _.certificate_new_stake_deregistration(t.__wbg_ptr);
      return Bt.__wrap(e);
    }
    static new_stake_delegation(t) {
      f(t, q_);
      const e = _.certificate_new_stake_delegation(t.__wbg_ptr);
      return Bt.__wrap(e);
    }
    static new_pool_registration(t) {
      f(t, T_);
      const e = _.certificate_new_pool_registration(t.__wbg_ptr);
      return Bt.__wrap(e);
    }
    static new_pool_retirement(t) {
      f(t, P_);
      const e = _.certificate_new_pool_retirement(t.__wbg_ptr);
      return Bt.__wrap(e);
    }
    static new_genesis_key_delegation(t) {
      f(t, S_);
      const e = _.certificate_new_genesis_key_delegation(t.__wbg_ptr);
      return Bt.__wrap(e);
    }
    static new_move_instantaneous_rewards_cert(t) {
      f(t, O_);
      const e = _.certificate_new_move_instantaneous_rewards_cert(t.__wbg_ptr);
      return Bt.__wrap(e);
    }
    kind() {
      return _.certificate_kind(this.__wbg_ptr) >>> 0;
    }
    as_stake_registration() {
      const t = _.certificate_as_stake_registration(this.__wbg_ptr);
      return t === 0 ? void 0 : X_.__wrap(t);
    }
    as_stake_deregistration() {
      const t = _.certificate_as_stake_deregistration(this.__wbg_ptr);
      return t === 0 ? void 0 : Y_.__wrap(t);
    }
    as_stake_delegation() {
      const t = _.certificate_as_stake_delegation(this.__wbg_ptr);
      return t === 0 ? void 0 : q_.__wrap(t);
    }
    as_pool_registration() {
      const t = _.certificate_as_pool_registration(this.__wbg_ptr);
      return t === 0 ? void 0 : T_.__wrap(t);
    }
    as_pool_retirement() {
      const t = _.certificate_as_pool_retirement(this.__wbg_ptr);
      return t === 0 ? void 0 : P_.__wrap(t);
    }
    as_genesis_key_delegation() {
      const t = _.certificate_as_genesis_key_delegation(this.__wbg_ptr);
      return t === 0 ? void 0 : S_.__wrap(t);
    }
    as_move_instantaneous_rewards_cert() {
      const t = _.certificate_as_move_instantaneous_rewards_cert(this.__wbg_ptr);
      return t === 0 ? void 0 : O_.__wrap(t);
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
      _.__wbg_certificates_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.certificates_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.certificates_from_bytes(n, c, d);
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
        _.certificates_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return m_.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return m_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.certificates_new();
      return m_.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.certificates_get(this.__wbg_ptr, t);
      return Bt.__wrap(e);
    }
    add(t) {
      f(t, Bt), _.certificates_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class Nr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Nr.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.constrplutusdata_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Nr.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return Nr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    alternative() {
      const t = _.constrplutusdata_alternative(this.__wbg_ptr);
      return O.__wrap(t);
    }
    data() {
      const t = _.constrplutusdata_data(this.__wbg_ptr);
      return le.__wrap(t);
    }
    static new(t, e) {
      f(t, O), f(e, le);
      const s = _.constrplutusdata_new(t.__wbg_ptr, e.__wbg_ptr);
      return Nr.__wrap(s);
    }
  }
  class Ze {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ze.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.costmodel_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ze.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return Ze.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return Ze.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.costmodel_new();
      return Ze.__wrap(t);
    }
    set(t, e) {
      try {
        const c = _.__wbindgen_add_to_stack_pointer(-16);
        f(e, pt), _.costmodel_set(c, this.__wbg_ptr, t, e.__wbg_ptr);
        var s = a()[c / 4 + 0], o = a()[c / 4 + 1], n = a()[c / 4 + 2];
        if (n) throw u(o);
        return pt.__wrap(s);
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
        return pt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    len() {
      return _.costmdls_len(this.__wbg_ptr) >>> 0;
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
      _.__wbg_costmdls_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.costmdls_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.costmdls_from_bytes(n, c, d);
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
        _.costmdls_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return Qe.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return Qe.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.costmdls_new();
      return Qe.__wrap(t);
    }
    len() {
      return _.costmdls_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, It), f(e, Ze);
      const s = _.costmdls_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : Ze.__wrap(s);
    }
    get(t) {
      f(t, It);
      const e = _.costmdls_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : Ze.__wrap(e);
    }
    keys() {
      const t = _.costmdls_keys(this.__wbg_ptr);
      return mn.__wrap(t);
    }
    retain_language_versions(t) {
      f(t, mn);
      const e = _.costmdls_retain_language_versions(this.__wbg_ptr, t.__wbg_ptr);
      return Qe.__wrap(e);
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
      _.__wbg_dnsrecordaoraaaa_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.dnsrecordaoraaaa_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.dnsrecordaoraaaa_from_bytes(n, c, d);
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
        _.dnsrecordaoraaaa_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return v_.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return v_.__wrap(e);
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
        return v_.__wrap(e);
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
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
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
      _.__wbg_dnsrecordsrv_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.dnsrecordsrv_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.dnsrecordsrv_from_bytes(n, c, d);
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
        _.dnsrecordsrv_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return k_.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return k_.__wrap(e);
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
        return k_.__wrap(e);
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
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
  }
  class Fr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Fr.prototype);
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
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.datahash_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Fr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydatahash_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const m = _.__wbindgen_add_to_stack_pointer(-16), x = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), k = w;
        _.auxiliarydatahash_to_bech32(m, this.__wbg_ptr, x, k);
        var o = a()[m / 4 + 0], n = a()[m / 4 + 1], c = a()[m / 4 + 2], d = a()[m / 4 + 3], p = o, l = n;
        if (d) throw p = 0, l = 0, u(c);
        return e = p, s = l, h(p, l);
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
        return Fr.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return Fr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class kt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(kt.prototype);
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
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.ed25519keyhash_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return kt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ed25519keyhash_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const m = _.__wbindgen_add_to_stack_pointer(-16), x = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), k = w;
        _.ed25519keyhash_to_bech32(m, this.__wbg_ptr, x, k);
        var o = a()[m / 4 + 0], n = a()[m / 4 + 1], c = a()[m / 4 + 2], d = a()[m / 4 + 3], p = o, l = n;
        if (d) throw p = 0, l = 0, u(c);
        return e = p, s = l, h(p, l);
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
        return kt.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return kt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class ce {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(ce.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.ed25519keyhashes_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return ce.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return ce.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return ce.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.ed25519keyhashes_new();
      return ce.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.ed25519keyhashes_get(this.__wbg_ptr, t);
      return kt.__wrap(e);
    }
    add(t) {
      f(t, kt), _.ed25519keyhashes_add(this.__wbg_ptr, t.__wbg_ptr);
    }
    to_option() {
      const t = _.ed25519keyhashes_to_option(this.__wbg_ptr);
      return t === 0 ? void 0 : ce.__wrap(t);
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
      _.__wbg_ed25519signature_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ed25519signature_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return t = s, e = o, h(s, o);
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
        return t = s, e = o, h(s, o);
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
        return Pe.__wrap(e);
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
        return Pe.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.ed25519signature_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Pe.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class to {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(to.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_enterpriseaddress_free(t);
    }
    static new(t, e) {
      f(e, _t);
      const s = _.enterpriseaddress_new(t, e.__wbg_ptr);
      return to.__wrap(s);
    }
    payment_cred() {
      const t = _.baseaddress_payment_cred(this.__wbg_ptr);
      return _t.__wrap(t);
    }
    to_address() {
      const t = _.enterpriseaddress_to_address(this.__wbg_ptr);
      return Pt.__wrap(t);
    }
    static from_address(t) {
      f(t, Pt);
      const e = _.enterpriseaddress_from_address(t.__wbg_ptr);
      return e === 0 ? void 0 : to.__wrap(e);
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
      _.__wbg_exunitprices_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.exunitprices_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.exunitprices_from_bytes(n, c, d);
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
        _.exunitprices_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return x_.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return x_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    mem_price() {
      const t = _.exunitprices_mem_price(this.__wbg_ptr);
      return bt.__wrap(t);
    }
    step_price() {
      const t = _.exunitprices_step_price(this.__wbg_ptr);
      return bt.__wrap(t);
    }
    static new(t, e) {
      f(t, bt), f(e, bt);
      const s = _.exunitprices_new(t.__wbg_ptr, e.__wbg_ptr);
      return x_.__wrap(s);
    }
  }
  class te {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(te.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.exunits_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return te.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return te.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return te.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    mem() {
      const t = _.exunits_mem(this.__wbg_ptr);
      return O.__wrap(t);
    }
    steps() {
      const t = _.exunits_steps(this.__wbg_ptr);
      return O.__wrap(t);
    }
    static new(t, e) {
      f(t, O), f(e, O);
      const s = _.exunits_new(t.__wbg_ptr, e.__wbg_ptr);
      return te.__wrap(s);
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
      _.__wbg_generaltransactionmetadata_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.generaltransactionmetadata_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.generaltransactionmetadata_from_bytes(n, c, d);
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
        _.generaltransactionmetadata_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return j_.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return j_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.generaltransactionmetadata_new();
      return j_.__wrap(t);
    }
    len() {
      return _.generaltransactionmetadata_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, O), f(e, J);
      const s = _.generaltransactionmetadata_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : J.__wrap(s);
    }
    get(t) {
      f(t, O);
      const e = _.generaltransactionmetadata_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : J.__wrap(e);
    }
    keys() {
      const t = _.generaltransactionmetadata_keys(this.__wbg_ptr);
      return pn.__wrap(t);
    }
  }
  class Tr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Tr.prototype);
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
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.genesisdelegatehash_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Tr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ed25519keyhash_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const m = _.__wbindgen_add_to_stack_pointer(-16), x = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), k = w;
        _.ed25519keyhash_to_bech32(m, this.__wbg_ptr, x, k);
        var o = a()[m / 4 + 0], n = a()[m / 4 + 1], c = a()[m / 4 + 2], d = a()[m / 4 + 3], p = o, l = n;
        if (d) throw p = 0, l = 0, u(c);
        return e = p, s = l, h(p, l);
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
        return Tr.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return Tr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class ve {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(ve.prototype);
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
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.genesishash_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return ve.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ed25519keyhash_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const m = _.__wbindgen_add_to_stack_pointer(-16), x = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), k = w;
        _.ed25519keyhash_to_bech32(m, this.__wbg_ptr, x, k);
        var o = a()[m / 4 + 0], n = a()[m / 4 + 1], c = a()[m / 4 + 2], d = a()[m / 4 + 3], p = o, l = n;
        if (d) throw p = 0, l = 0, u(c);
        return e = p, s = l, h(p, l);
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
        return ve.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return ve.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
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
      _.__wbg_genesishashes_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.genesishashes_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.genesishashes_from_bytes(n, c, d);
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
        _.genesishashes_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return jr.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return jr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.ed25519keyhashes_new();
      return jr.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.genesishashes_get(this.__wbg_ptr, t);
      return ve.__wrap(e);
    }
    add(t) {
      f(t, ve), _.genesishashes_add(this.__wbg_ptr, t.__wbg_ptr);
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
      _.__wbg_genesiskeydelegation_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.genesiskeydelegation_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.genesiskeydelegation_from_bytes(n, c, d);
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
        _.genesiskeydelegation_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return S_.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return S_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    genesishash() {
      const t = _.genesiskeydelegation_genesishash(this.__wbg_ptr);
      return ve.__wrap(t);
    }
    genesis_delegate_hash() {
      const t = _.genesiskeydelegation_genesis_delegate_hash(this.__wbg_ptr);
      return Tr.__wrap(t);
    }
    vrf_keyhash() {
      const t = _.genesiskeydelegation_vrf_keyhash(this.__wbg_ptr);
      return __.__wrap(t);
    }
    static new(t, e, s) {
      f(t, ve), f(e, Tr), f(s, __);
      const o = _.genesiskeydelegation_new(t.__wbg_ptr, e.__wbg_ptr, s.__wbg_ptr);
      return S_.__wrap(o);
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
      _.__wbg_int_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.int_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.int_from_bytes(n, c, d);
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
        _.int_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return pt.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return pt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t) {
      f(t, O);
      const e = _.int_new(t.__wbg_ptr);
      return pt.__wrap(e);
    }
    static new_negative(t) {
      f(t, O);
      const e = _.int_new_negative(t.__wbg_ptr);
      return pt.__wrap(e);
    }
    static new_i32(t) {
      const e = _.int_new_i32(t);
      return pt.__wrap(e);
    }
    is_positive() {
      return _.int_is_positive(this.__wbg_ptr) !== 0;
    }
    as_positive() {
      const t = _.int_as_positive(this.__wbg_ptr);
      return t === 0 ? void 0 : O.__wrap(t);
    }
    as_negative() {
      const t = _.int_as_negative(this.__wbg_ptr);
      return t === 0 ? void 0 : O.__wrap(t);
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
        return t = s, e = o, h(s, o);
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
        return pt.__wrap(e);
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
      _.__wbg_ipv4_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ipv4_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.ipv4_from_bytes(n, c, d);
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
        _.ipv4_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return E_.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return E_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.ipv4_new(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return E_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    ip() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ipv4_ip(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
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
      _.__wbg_ipv6_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ipv6_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.ipv6_from_bytes(n, c, d);
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
        _.ipv6_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return z_.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return z_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.ipv6_new(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return z_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    ip() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ipv6_ip(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class It {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(It.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.language_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return It.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return It.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return It.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_plutus_v1() {
      const t = _.language_new_plutus_v1();
      return It.__wrap(t);
    }
    static new_plutus_v2() {
      const t = _.language_new_plutus_v2();
      return It.__wrap(t);
    }
    kind() {
      return _.language_kind(this.__wbg_ptr) >>> 0;
    }
  }
  class mn {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(mn.prototype);
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
      return mn.__wrap(t);
    }
    len() {
      return _.costmdls_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.languages_get(this.__wbg_ptr, t);
      return It.__wrap(e);
    }
    add(t) {
      f(t, It);
      var e = t.__destroy_into_raw();
      _.languages_add(this.__wbg_ptr, e);
    }
    static list() {
      const t = _.languages_list();
      return mn.__wrap(t);
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
      _.__wbg_mirtostakecredentials_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.mirtostakecredentials_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.mirtostakecredentials_from_bytes(n, c, d);
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
        _.mirtostakecredentials_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return C_.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return C_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.auxiliarydataset_new();
      return C_.__wrap(t);
    }
    len() {
      return _.auxiliarydataset_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, _t), f(e, pt);
      const s = _.mirtostakecredentials_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : pt.__wrap(s);
    }
    get(t) {
      f(t, _t);
      const e = _.mirtostakecredentials_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : pt.__wrap(e);
    }
    keys() {
      const t = _.mirtostakecredentials_keys(this.__wbg_ptr);
      return Er.__wrap(t);
    }
  }
  class or {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(or.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.metadatalist_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return or.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return or.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.costmodel_new();
      return or.__wrap(t);
    }
    len() {
      return _.costmdls_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.metadatalist_get(this.__wbg_ptr, t);
      return J.__wrap(e);
    }
    add(t) {
      f(t, J), _.metadatalist_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class Pr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Pr.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.metadatamap_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Pr.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return Pr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.generaltransactionmetadata_new();
      return Pr.__wrap(t);
    }
    len() {
      return _.generaltransactionmetadata_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, J), f(e, J);
      const s = _.metadatamap_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : J.__wrap(s);
    }
    insert_str(t, e) {
      try {
        const c = _.__wbindgen_add_to_stack_pointer(-16), d = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), p = w;
        f(e, J), _.metadatamap_insert_str(c, this.__wbg_ptr, d, p, e.__wbg_ptr);
        var s = a()[c / 4 + 0], o = a()[c / 4 + 1], n = a()[c / 4 + 2];
        if (n) throw u(o);
        return s === 0 ? void 0 : J.__wrap(s);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    insert_i32(t, e) {
      f(e, J);
      const s = _.metadatamap_insert_i32(this.__wbg_ptr, t, e.__wbg_ptr);
      return s === 0 ? void 0 : J.__wrap(s);
    }
    get(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        f(t, J), _.metadatamap_get(n, this.__wbg_ptr, t.__wbg_ptr);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return J.__wrap(e);
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
        return J.__wrap(e);
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
        return J.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    has(t) {
      return f(t, J), _.metadatamap_has(this.__wbg_ptr, t.__wbg_ptr) !== 0;
    }
    keys() {
      const t = _.metadatamap_keys(this.__wbg_ptr);
      return or.__wrap(t);
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
      _.__wbg_mint_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.mint_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.mint_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Oe.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return Oe.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return Oe.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.assetnames_new();
      return Oe.__wrap(t);
    }
    static new_from_entry(t, e) {
      f(t, yt), f(e, sr);
      const s = _.mint_new_from_entry(t.__wbg_ptr, e.__wbg_ptr);
      return Oe.__wrap(s);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, yt), f(e, sr);
      const s = _.mint_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : sr.__wrap(s);
    }
    get(t) {
      f(t, yt);
      const e = _.mint_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : sr.__wrap(e);
    }
    get_all(t) {
      f(t, yt);
      const e = _.mint_get_all(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : ic.__wrap(e);
    }
    keys() {
      const t = _.mint_keys(this.__wbg_ptr);
      return Q_.__wrap(t);
    }
    as_positive_multiasset() {
      const t = _.mint_as_positive_multiasset(this.__wbg_ptr);
      return Ht.__wrap(t);
    }
    as_negative_multiasset() {
      const t = _.mint_as_negative_multiasset(this.__wbg_ptr);
      return Ht.__wrap(t);
    }
  }
  class sr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(sr.prototype);
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
      return sr.__wrap(t);
    }
    static new_from_entry(t, e) {
      f(t, Ut), f(e, pt);
      var s = e.__destroy_into_raw();
      const o = _.mintassets_new_from_entry(t.__wbg_ptr, s);
      return sr.__wrap(o);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, Ut), f(e, pt);
      var s = e.__destroy_into_raw();
      const o = _.mintassets_insert(this.__wbg_ptr, t.__wbg_ptr, s);
      return o === 0 ? void 0 : pt.__wrap(o);
    }
    get(t) {
      f(t, Ut);
      const e = _.mintassets_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : pt.__wrap(e);
    }
    keys() {
      const t = _.mintassets_keys(this.__wbg_ptr);
      return b_.__wrap(t);
    }
  }
  class ic {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(ic.prototype);
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
      _.__wbg_moveinstantaneousreward_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.moveinstantaneousreward_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.moveinstantaneousreward_from_bytes(n, c, d);
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
        _.moveinstantaneousreward_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return Ve.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return Ve.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_to_other_pot(t, e) {
      f(e, O);
      const s = _.moveinstantaneousreward_new_to_other_pot(t, e.__wbg_ptr);
      return Ve.__wrap(s);
    }
    static new_to_stake_creds(t, e) {
      f(e, C_);
      const s = _.moveinstantaneousreward_new_to_stake_creds(t, e.__wbg_ptr);
      return Ve.__wrap(s);
    }
    pot() {
      return _.moveinstantaneousreward_pot(this.__wbg_ptr) >>> 0;
    }
    kind() {
      return _.moveinstantaneousreward_kind(this.__wbg_ptr) >>> 0;
    }
    as_to_other_pot() {
      const t = _.moveinstantaneousreward_as_to_other_pot(this.__wbg_ptr);
      return t === 0 ? void 0 : O.__wrap(t);
    }
    as_to_stake_creds() {
      const t = _.moveinstantaneousreward_as_to_stake_creds(this.__wbg_ptr);
      return t === 0 ? void 0 : C_.__wrap(t);
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
      _.__wbg_moveinstantaneousrewardscert_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.moveinstantaneousrewardscert_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.moveinstantaneousrewardscert_from_bytes(n, c, d);
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
        _.moveinstantaneousrewardscert_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return O_.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return O_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    move_instantaneous_reward() {
      const t = _.moveinstantaneousrewardscert_move_instantaneous_reward(this.__wbg_ptr);
      return Ve.__wrap(t);
    }
    static new(t) {
      f(t, Ve);
      const e = _.moveinstantaneousrewardscert_new(t.__wbg_ptr);
      return O_.__wrap(e);
    }
  }
  class Ht {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ht.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.multiasset_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ht.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return Ht.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return Ht.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.assets_new();
      return Ht.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, yt), f(e, Ke);
      const s = _.multiasset_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : Ke.__wrap(s);
    }
    get(t) {
      f(t, yt);
      const e = _.multiasset_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : Ke.__wrap(e);
    }
    set_asset(t, e, s) {
      f(t, yt), f(e, Ut), f(s, O);
      var o = s.__destroy_into_raw();
      const n = _.multiasset_set_asset(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, o);
      return n === 0 ? void 0 : O.__wrap(n);
    }
    get_asset(t, e) {
      f(t, yt), f(e, Ut);
      const s = _.multiasset_get_asset(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return O.__wrap(s);
    }
    keys() {
      const t = _.multiasset_keys(this.__wbg_ptr);
      return Q_.__wrap(t);
    }
    sub(t) {
      f(t, Ht);
      const e = _.multiasset_sub(this.__wbg_ptr, t.__wbg_ptr);
      return Ht.__wrap(e);
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
      _.__wbg_multihostname_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.multihostname_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.multihostname_from_bytes(n, c, d);
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
        _.multihostname_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return L_.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return L_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    dns_name() {
      const t = _.multihostname_dns_name(this.__wbg_ptr);
      return k_.__wrap(t);
    }
    static new(t) {
      f(t, k_);
      const e = _.multihostname_new(t.__wbg_ptr);
      return L_.__wrap(e);
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
      _.__wbg_nativescript_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.nativescript_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.nativescript_from_bytes(n, c, d);
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
        _.nativescript_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return $t.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return $t.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    hash() {
      const t = _.nativescript_hash(this.__wbg_ptr);
      return yt.__wrap(t);
    }
    static new_script_pubkey(t) {
      f(t, B_);
      const e = _.nativescript_new_script_pubkey(t.__wbg_ptr);
      return $t.__wrap(e);
    }
    static new_script_all(t) {
      f(t, M_);
      const e = _.nativescript_new_script_all(t.__wbg_ptr);
      return $t.__wrap(e);
    }
    static new_script_any(t) {
      f(t, W_);
      const e = _.nativescript_new_script_any(t.__wbg_ptr);
      return $t.__wrap(e);
    }
    static new_script_n_of_k(t) {
      f(t, V_);
      const e = _.nativescript_new_script_n_of_k(t.__wbg_ptr);
      return $t.__wrap(e);
    }
    static new_timelock_start(t) {
      f(t, qe);
      const e = _.nativescript_new_timelock_start(t.__wbg_ptr);
      return $t.__wrap(e);
    }
    static new_timelock_expiry(t) {
      f(t, He);
      const e = _.nativescript_new_timelock_expiry(t.__wbg_ptr);
      return $t.__wrap(e);
    }
    kind() {
      return _.nativescript_kind(this.__wbg_ptr) >>> 0;
    }
    as_script_pubkey() {
      const t = _.nativescript_as_script_pubkey(this.__wbg_ptr);
      return t === 0 ? void 0 : B_.__wrap(t);
    }
    as_script_all() {
      const t = _.nativescript_as_script_all(this.__wbg_ptr);
      return t === 0 ? void 0 : M_.__wrap(t);
    }
    as_script_any() {
      const t = _.nativescript_as_script_any(this.__wbg_ptr);
      return t === 0 ? void 0 : W_.__wrap(t);
    }
    as_script_n_of_k() {
      const t = _.nativescript_as_script_n_of_k(this.__wbg_ptr);
      return t === 0 ? void 0 : V_.__wrap(t);
    }
    as_timelock_start() {
      const t = _.nativescript_as_timelock_start(this.__wbg_ptr);
      return t === 0 ? void 0 : qe.__wrap(t);
    }
    as_timelock_expiry() {
      const t = _.nativescript_as_timelock_expiry(this.__wbg_ptr);
      return t === 0 ? void 0 : He.__wrap(t);
    }
    get_required_signers() {
      const t = _.nativescript_get_required_signers(this.__wbg_ptr);
      return ce.__wrap(t);
    }
  }
  class ne {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(ne.prototype);
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
      return ne.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.nativescripts_get(this.__wbg_ptr, t);
      return $t.__wrap(e);
    }
    add(t) {
      f(t, $t), _.nativescripts_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class Be {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Be.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.networkid_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Be.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return Be.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return Be.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static testnet() {
      const t = _.networkid_testnet();
      return Be.__wrap(t);
    }
    static mainnet() {
      const t = _.networkid_mainnet();
      return Be.__wrap(t);
    }
    kind() {
      return _.networkid_kind(this.__wbg_ptr) >>> 0;
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
      _.__wbg_nonce_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.nonce_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.nonce_from_bytes(n, c, d);
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
        _.nonce_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return w_.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return w_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_identity() {
      const t = _.nonce_new_identity();
      return w_.__wrap(t);
    }
    static new_from_hash(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.nonce_new_from_hash(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return w_.__wrap(e);
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
        return t !== 0 && (o = E(t, e).slice(), _.__wbindgen_free(t, e * 1)), o;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class et {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(et.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.plutusdata_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return et.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return et.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_constr_plutus_data(t) {
      f(t, Nr);
      const e = _.plutusdata_new_constr_plutus_data(t.__wbg_ptr);
      return et.__wrap(e);
    }
    static new_empty_constr_plutus_data(t) {
      f(t, O);
      const e = _.plutusdata_new_empty_constr_plutus_data(t.__wbg_ptr);
      return et.__wrap(e);
    }
    static new_single_value_constr_plutus_data(t, e) {
      f(t, O), f(e, et);
      const s = _.plutusdata_new_single_value_constr_plutus_data(t.__wbg_ptr, e.__wbg_ptr);
      return et.__wrap(s);
    }
    static new_map(t) {
      f(t, Rr);
      const e = _.plutusdata_new_map(t.__wbg_ptr);
      return et.__wrap(e);
    }
    static new_list(t) {
      f(t, le);
      const e = _.plutusdata_new_list(t.__wbg_ptr);
      return et.__wrap(e);
    }
    static new_integer(t) {
      f(t, Ft);
      const e = _.plutusdata_new_integer(t.__wbg_ptr);
      return et.__wrap(e);
    }
    static new_bytes(t) {
      const e = S(t, _.__wbindgen_malloc), s = w, o = _.plutusdata_new_bytes(e, s);
      return et.__wrap(o);
    }
    kind() {
      return _.plutusdata_kind(this.__wbg_ptr) >>> 0;
    }
    as_constr_plutus_data() {
      const t = _.plutusdata_as_constr_plutus_data(this.__wbg_ptr);
      return t === 0 ? void 0 : Nr.__wrap(t);
    }
    as_map() {
      const t = _.plutusdata_as_map(this.__wbg_ptr);
      return t === 0 ? void 0 : Rr.__wrap(t);
    }
    as_list() {
      const t = _.plutusdata_as_list(this.__wbg_ptr);
      return t === 0 ? void 0 : le.__wrap(t);
    }
    as_integer() {
      const t = _.plutusdata_as_integer(this.__wbg_ptr);
      return t === 0 ? void 0 : Ft.__wrap(t);
    }
    as_bytes() {
      try {
        const s = _.__wbindgen_add_to_stack_pointer(-16);
        _.plutusdata_as_bytes(s, this.__wbg_ptr);
        var t = a()[s / 4 + 0], e = a()[s / 4 + 1];
        let o;
        return t !== 0 && (o = E(t, e).slice(), _.__wbindgen_free(t, e * 1)), o;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json(t) {
      let e, s;
      try {
        const m = _.__wbindgen_add_to_stack_pointer(-16);
        _.decode_plutus_datum_to_json_str(m, this.__wbg_ptr, t);
        var o = a()[m / 4 + 0], n = a()[m / 4 + 1], c = a()[m / 4 + 2], d = a()[m / 4 + 3], p = o, l = n;
        if (d) throw p = 0, l = 0, u(c);
        return e = p, s = l, h(p, l);
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
        return et.__wrap(s);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_address(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        f(t, Pt), _.plutusdata_from_address(n, t.__wbg_ptr);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return et.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
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
      _.__wbg_plutuslist_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.plutuslist_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.plutuslist_from_bytes(n, c, d);
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
        _.plutuslist_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return le.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.plutuslist_new();
      return le.__wrap(t);
    }
    len() {
      return _.costmdls_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.plutuslist_get(this.__wbg_ptr, t);
      return et.__wrap(e);
    }
    add(t) {
      f(t, et), _.plutuslist_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class Rr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Rr.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.plutusmap_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Rr.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return Rr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.generaltransactionmetadata_new();
      return Rr.__wrap(t);
    }
    len() {
      return _.generaltransactionmetadata_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, et), f(e, et);
      const s = _.plutusmap_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : et.__wrap(s);
    }
    get(t) {
      f(t, et);
      const e = _.plutusmap_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : et.__wrap(e);
    }
    keys() {
      const t = _.plutusmap_keys(this.__wbg_ptr);
      return le.__wrap(t);
    }
  }
  class At {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(At.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.plutusscript_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return At.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return At.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t) {
      const e = S(t, _.__wbindgen_malloc), s = w, o = _.plutusscript_new(e, s);
      return At.__wrap(o);
    }
    static new_v2(t) {
      const e = S(t, _.__wbindgen_malloc), s = w, o = _.plutusscript_new_v2(e, s);
      return At.__wrap(o);
    }
    static new_with_version(t, e) {
      const s = S(t, _.__wbindgen_malloc), o = w;
      f(e, It);
      const n = _.plutusscript_new_with_version(s, o, e.__wbg_ptr);
      return At.__wrap(n);
    }
    bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.plutusscript_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes_v2(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.plutusscript_from_bytes_v2(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return At.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes_with_version(t, e) {
      try {
        const c = _.__wbindgen_add_to_stack_pointer(-16), d = S(t, _.__wbindgen_malloc), p = w;
        f(e, It), _.plutusscript_from_bytes_with_version(c, d, p, e.__wbg_ptr);
        var s = a()[c / 4 + 0], o = a()[c / 4 + 1], n = a()[c / 4 + 2];
        if (n) throw u(o);
        return At.__wrap(s);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_hex_with_version(t, e) {
      try {
        const c = _.__wbindgen_add_to_stack_pointer(-16), d = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), p = w;
        f(e, It), _.plutusscript_from_hex_with_version(c, d, p, e.__wbg_ptr);
        var s = a()[c / 4 + 0], o = a()[c / 4 + 1], n = a()[c / 4 + 2];
        if (n) throw u(o);
        return At.__wrap(s);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    hash() {
      const t = _.plutusscript_hash(this.__wbg_ptr);
      return yt.__wrap(t);
    }
    language_version() {
      const t = _.plutusscript_language_version(this.__wbg_ptr);
      return It.__wrap(t);
    }
  }
  class Ne {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ne.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.plutusscripts_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ne.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return Ne.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return Ne.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.plutusscripts_new();
      return Ne.__wrap(t);
    }
    len() {
      return _.costmdls_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.plutusscripts_get(this.__wbg_ptr, t);
      return At.__wrap(e);
    }
    add(t) {
      f(t, At), _.plutusscripts_add(this.__wbg_ptr, t.__wbg_ptr);
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
      _.__wbg_poolmetadata_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolmetadata_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.poolmetadata_from_bytes(n, c, d);
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
        _.poolmetadata_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return N_.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return N_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    url() {
      const t = _.poolmetadata_url(this.__wbg_ptr);
      return kd.__wrap(t);
    }
    pool_metadata_hash() {
      const t = _.poolmetadata_pool_metadata_hash(this.__wbg_ptr);
      return $r.__wrap(t);
    }
    static new(t, e) {
      f(t, kd), f(e, $r);
      const s = _.poolmetadata_new(t.__wbg_ptr, e.__wbg_ptr);
      return N_.__wrap(s);
    }
  }
  class $r {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create($r.prototype);
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
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.poolmetadatahash_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return $r.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydatahash_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const m = _.__wbindgen_add_to_stack_pointer(-16), x = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), k = w;
        _.auxiliarydatahash_to_bech32(m, this.__wbg_ptr, x, k);
        var o = a()[m / 4 + 0], n = a()[m / 4 + 1], c = a()[m / 4 + 2], d = a()[m / 4 + 3], p = o, l = n;
        if (d) throw p = 0, l = 0, u(c);
        return e = p, s = l, h(p, l);
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
        return $r.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return $r.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
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
      _.__wbg_poolparams_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolparams_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.poolparams_from_bytes(n, c, d);
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
        _.poolparams_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return F_.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return F_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    operator() {
      const t = _.poolparams_operator(this.__wbg_ptr);
      return kt.__wrap(t);
    }
    vrf_keyhash() {
      const t = _.poolparams_vrf_keyhash(this.__wbg_ptr);
      return __.__wrap(t);
    }
    pledge() {
      const t = _.poolparams_pledge(this.__wbg_ptr);
      return O.__wrap(t);
    }
    cost() {
      const t = _.poolparams_cost(this.__wbg_ptr);
      return O.__wrap(t);
    }
    margin() {
      const t = _.poolparams_margin(this.__wbg_ptr);
      return bt.__wrap(t);
    }
    reward_account() {
      const t = _.poolparams_reward_account(this.__wbg_ptr);
      return Ie.__wrap(t);
    }
    pool_owners() {
      const t = _.poolparams_pool_owners(this.__wbg_ptr);
      return ce.__wrap(t);
    }
    relays() {
      const t = _.poolparams_relays(this.__wbg_ptr);
      return U_.__wrap(t);
    }
    pool_metadata() {
      const t = _.poolparams_pool_metadata(this.__wbg_ptr);
      return t === 0 ? void 0 : N_.__wrap(t);
    }
    static new(t, e, s, o, n, c, d, p, l) {
      f(t, kt), f(e, __), f(s, O), f(o, O), f(n, bt), f(c, Ie), f(d, ce), f(p, U_);
      let m = 0;
      De(l) || (f(l, N_), m = l.__destroy_into_raw());
      const x = _.poolparams_new(t.__wbg_ptr, e.__wbg_ptr, s.__wbg_ptr, o.__wbg_ptr, n.__wbg_ptr, c.__wbg_ptr, d.__wbg_ptr, p.__wbg_ptr, m);
      return F_.__wrap(x);
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
      _.__wbg_poolregistration_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolregistration_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.poolregistration_from_bytes(n, c, d);
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
        _.poolregistration_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return T_.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return T_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    pool_params() {
      const t = _.poolregistration_pool_params(this.__wbg_ptr);
      return F_.__wrap(t);
    }
    static new(t) {
      f(t, F_);
      const e = _.poolregistration_new(t.__wbg_ptr);
      return T_.__wrap(e);
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
      _.__wbg_poolretirement_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolretirement_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.poolretirement_from_bytes(n, c, d);
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
        _.poolretirement_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return P_.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return P_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    pool_keyhash() {
      const t = _.poolretirement_pool_keyhash(this.__wbg_ptr);
      return kt.__wrap(t);
    }
    epoch() {
      return _.poolretirement_epoch(this.__wbg_ptr) >>> 0;
    }
    static new(t, e) {
      f(t, kt);
      const s = _.poolretirement_new(t.__wbg_ptr, e);
      return P_.__wrap(s);
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
      _.__wbg_proposedprotocolparameterupdates_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.proposedprotocolparameterupdates_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.proposedprotocolparameterupdates_from_bytes(n, c, d);
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
        _.proposedprotocolparameterupdates_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return R_.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return R_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.auxiliarydataset_new();
      return R_.__wrap(t);
    }
    len() {
      return _.auxiliarydataset_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, ve), f(e, Je);
      const s = _.proposedprotocolparameterupdates_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : Je.__wrap(s);
    }
    get(t) {
      f(t, ve);
      const e = _.proposedprotocolparameterupdates_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : Je.__wrap(e);
    }
    keys() {
      const t = _.proposedprotocolparameterupdates_keys(this.__wbg_ptr);
      return jr.__wrap(t);
    }
  }
  class Je {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Je.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.protocolparamupdate_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Je.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return Je.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return Je.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    set_minfee_a(t) {
      f(t, O), _.protocolparamupdate_set_minfee_a(this.__wbg_ptr, t.__wbg_ptr);
    }
    minfee_a() {
      const t = _.protocolparamupdate_minfee_a(this.__wbg_ptr);
      return t === 0 ? void 0 : O.__wrap(t);
    }
    set_minfee_b(t) {
      f(t, O), _.protocolparamupdate_set_minfee_b(this.__wbg_ptr, t.__wbg_ptr);
    }
    minfee_b() {
      const t = _.protocolparamupdate_minfee_b(this.__wbg_ptr);
      return t === 0 ? void 0 : O.__wrap(t);
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
      f(t, O), _.protocolparamupdate_set_key_deposit(this.__wbg_ptr, t.__wbg_ptr);
    }
    key_deposit() {
      const t = _.protocolparamupdate_key_deposit(this.__wbg_ptr);
      return t === 0 ? void 0 : O.__wrap(t);
    }
    set_pool_deposit(t) {
      f(t, O), _.protocolparamupdate_set_pool_deposit(this.__wbg_ptr, t.__wbg_ptr);
    }
    pool_deposit() {
      const t = _.protocolparamupdate_pool_deposit(this.__wbg_ptr);
      return t === 0 ? void 0 : O.__wrap(t);
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
      f(t, bt), _.protocolparamupdate_set_pool_pledge_influence(this.__wbg_ptr, t.__wbg_ptr);
    }
    pool_pledge_influence() {
      const t = _.protocolparamupdate_pool_pledge_influence(this.__wbg_ptr);
      return t === 0 ? void 0 : bt.__wrap(t);
    }
    set_expansion_rate(t) {
      f(t, bt), _.protocolparamupdate_set_expansion_rate(this.__wbg_ptr, t.__wbg_ptr);
    }
    expansion_rate() {
      const t = _.protocolparamupdate_expansion_rate(this.__wbg_ptr);
      return t === 0 ? void 0 : bt.__wrap(t);
    }
    set_treasury_growth_rate(t) {
      f(t, bt), _.protocolparamupdate_set_treasury_growth_rate(this.__wbg_ptr, t.__wbg_ptr);
    }
    treasury_growth_rate() {
      const t = _.protocolparamupdate_treasury_growth_rate(this.__wbg_ptr);
      return t === 0 ? void 0 : bt.__wrap(t);
    }
    d() {
      const t = _.protocolparamupdate_d(this.__wbg_ptr);
      return t === 0 ? void 0 : bt.__wrap(t);
    }
    extra_entropy() {
      const t = _.protocolparamupdate_extra_entropy(this.__wbg_ptr);
      return t === 0 ? void 0 : w_.__wrap(t);
    }
    set_protocol_version(t) {
      f(t, $_), _.protocolparamupdate_set_protocol_version(this.__wbg_ptr, t.__wbg_ptr);
    }
    protocol_version() {
      const t = _.protocolparamupdate_protocol_version(this.__wbg_ptr);
      return t === 0 ? void 0 : $_.__wrap(t);
    }
    set_min_pool_cost(t) {
      f(t, O), _.protocolparamupdate_set_min_pool_cost(this.__wbg_ptr, t.__wbg_ptr);
    }
    min_pool_cost() {
      const t = _.protocolparamupdate_min_pool_cost(this.__wbg_ptr);
      return t === 0 ? void 0 : O.__wrap(t);
    }
    set_ada_per_utxo_byte(t) {
      f(t, O), _.protocolparamupdate_set_ada_per_utxo_byte(this.__wbg_ptr, t.__wbg_ptr);
    }
    ada_per_utxo_byte() {
      const t = _.protocolparamupdate_ada_per_utxo_byte(this.__wbg_ptr);
      return t === 0 ? void 0 : O.__wrap(t);
    }
    set_cost_models(t) {
      f(t, Qe), _.protocolparamupdate_set_cost_models(this.__wbg_ptr, t.__wbg_ptr);
    }
    cost_models() {
      const t = _.protocolparamupdate_cost_models(this.__wbg_ptr);
      return t === 0 ? void 0 : Qe.__wrap(t);
    }
    set_execution_costs(t) {
      f(t, x_), _.protocolparamupdate_set_execution_costs(this.__wbg_ptr, t.__wbg_ptr);
    }
    execution_costs() {
      const t = _.protocolparamupdate_execution_costs(this.__wbg_ptr);
      return t === 0 ? void 0 : x_.__wrap(t);
    }
    set_max_tx_ex_units(t) {
      f(t, te), _.protocolparamupdate_set_max_tx_ex_units(this.__wbg_ptr, t.__wbg_ptr);
    }
    max_tx_ex_units() {
      const t = _.protocolparamupdate_max_tx_ex_units(this.__wbg_ptr);
      return t === 0 ? void 0 : te.__wrap(t);
    }
    set_max_block_ex_units(t) {
      f(t, te), _.protocolparamupdate_set_max_block_ex_units(this.__wbg_ptr, t.__wbg_ptr);
    }
    max_block_ex_units() {
      const t = _.protocolparamupdate_max_block_ex_units(this.__wbg_ptr);
      return t === 0 ? void 0 : te.__wrap(t);
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
      return Je.__wrap(t);
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
      _.__wbg_protocolversion_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.protocolversion_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.protocolversion_from_bytes(n, c, d);
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
        _.protocolversion_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return $_.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return $_.__wrap(e);
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
      return $_.__wrap(s);
    }
  }
  class Dr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Dr.prototype);
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
        return Dr.__wrap(e);
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
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    as_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydatahash_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.publickey_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Dr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    verify(t, e) {
      const s = S(t, _.__wbindgen_malloc), o = w;
      return f(e, Pe), _.publickey_verify(this.__wbg_ptr, s, o, e.__wbg_ptr) !== 0;
    }
    hash() {
      const t = _.publickey_hash(this.__wbg_ptr);
      return kt.__wrap(t);
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.publickey_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return Dr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
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
      _.__wbg_redeemer_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.redeemer_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.redeemer_from_bytes(n, c, d);
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
        _.redeemer_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return D_.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return D_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    tag() {
      const t = _.redeemer_tag(this.__wbg_ptr);
      return he.__wrap(t);
    }
    index() {
      const t = _.redeemer_index(this.__wbg_ptr);
      return O.__wrap(t);
    }
    data() {
      const t = _.redeemer_data(this.__wbg_ptr);
      return et.__wrap(t);
    }
    ex_units() {
      const t = _.redeemer_ex_units(this.__wbg_ptr);
      return te.__wrap(t);
    }
    static new(t, e, s, o) {
      f(t, he), f(e, O), f(s, et), f(o, te);
      const n = _.redeemer_new(t.__wbg_ptr, e.__wbg_ptr, s.__wbg_ptr, o.__wbg_ptr);
      return D_.__wrap(n);
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
      _.__wbg_redeemertag_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.redeemertag_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.redeemertag_from_bytes(n, c, d);
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
        _.redeemertag_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return he.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return he.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_spend() {
      const t = _.redeemertag_new_spend();
      return he.__wrap(t);
    }
    static new_mint() {
      const t = _.redeemertag_new_mint();
      return he.__wrap(t);
    }
    static new_cert() {
      const t = _.redeemertag_new_cert();
      return he.__wrap(t);
    }
    static new_reward() {
      const t = _.redeemertag_new_reward();
      return he.__wrap(t);
    }
    kind() {
      return _.redeemertag_kind(this.__wbg_ptr) >>> 0;
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
      _.__wbg_redeemers_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.redeemers_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.redeemers_from_bytes(n, c, d);
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
        _.redeemers_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return I_.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return I_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.costmodel_new();
      return I_.__wrap(t);
    }
    len() {
      return _.costmdls_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.redeemers_get(this.__wbg_ptr, t);
      return D_.__wrap(e);
    }
    add(t) {
      f(t, D_), _.redeemers_add(this.__wbg_ptr, t.__wbg_ptr);
    }
    total_ex_units() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.redeemers_total_ex_units(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return te.__wrap(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class Ce {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ce.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.relay_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ce.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return Ce.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return Ce.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_single_host_addr(t) {
      f(t, A_);
      const e = _.relay_new_single_host_addr(t.__wbg_ptr);
      return Ce.__wrap(e);
    }
    static new_single_host_name(t) {
      f(t, H_);
      const e = _.relay_new_single_host_name(t.__wbg_ptr);
      return Ce.__wrap(e);
    }
    static new_multi_host_name(t) {
      f(t, L_);
      const e = _.relay_new_multi_host_name(t.__wbg_ptr);
      return Ce.__wrap(e);
    }
    kind() {
      return _.relay_kind(this.__wbg_ptr) >>> 0;
    }
    as_single_host_addr() {
      const t = _.relay_as_single_host_addr(this.__wbg_ptr);
      return t === 0 ? void 0 : A_.__wrap(t);
    }
    as_single_host_name() {
      const t = _.relay_as_single_host_name(this.__wbg_ptr);
      return t === 0 ? void 0 : H_.__wrap(t);
    }
    as_multi_host_name() {
      const t = _.relay_as_multi_host_name(this.__wbg_ptr);
      return t === 0 ? void 0 : L_.__wrap(t);
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
      _.__wbg_relays_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.relays_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.relays_from_bytes(n, c, d);
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
        _.relays_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return U_.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return U_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.assetnames_new();
      return U_.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.relays_get(this.__wbg_ptr, t);
      return Ce.__wrap(e);
    }
    add(t) {
      f(t, Ce), _.relays_add(this.__wbg_ptr, t.__wbg_ptr);
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
      _.__wbg_rewardaddress_free(t);
    }
    static new(t, e) {
      f(e, _t);
      const s = _.enterpriseaddress_new(t, e.__wbg_ptr);
      return Ie.__wrap(s);
    }
    payment_cred() {
      const t = _.baseaddress_payment_cred(this.__wbg_ptr);
      return _t.__wrap(t);
    }
    to_address() {
      const t = _.rewardaddress_to_address(this.__wbg_ptr);
      return Pt.__wrap(t);
    }
    static from_address(t) {
      f(t, Pt);
      const e = _.rewardaddress_from_address(t.__wbg_ptr);
      return e === 0 ? void 0 : Ie.__wrap(e);
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
      _.__wbg_rewardaddresses_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.rewardaddresses_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.rewardaddresses_from_bytes(n, c, d);
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
        _.rewardaddresses_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return Sr.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return Sr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.ed25519keyhashes_new();
      return Sr.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.rewardaddresses_get(this.__wbg_ptr, t);
      return Ie.__wrap(e);
    }
    add(t) {
      f(t, Ie), _.rewardaddresses_add(this.__wbg_ptr, t.__wbg_ptr);
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
      _.__wbg_scriptall_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptall_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.scriptall_from_bytes(n, c, d);
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
        _.scriptall_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return M_.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return M_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    native_scripts() {
      const t = _.scriptall_native_scripts(this.__wbg_ptr);
      return ne.__wrap(t);
    }
    static new(t) {
      f(t, ne);
      const e = _.scriptall_new(t.__wbg_ptr);
      return M_.__wrap(e);
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
      _.__wbg_scriptany_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptany_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.scriptany_from_bytes(n, c, d);
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
        _.scriptany_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return W_.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return W_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    native_scripts() {
      const t = _.scriptall_native_scripts(this.__wbg_ptr);
      return ne.__wrap(t);
    }
    static new(t) {
      f(t, ne);
      const e = _.scriptall_new(t.__wbg_ptr);
      return W_.__wrap(e);
    }
  }
  class Ir {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ir.prototype);
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
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.scriptdatahash_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ir.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydatahash_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const m = _.__wbindgen_add_to_stack_pointer(-16), x = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), k = w;
        _.auxiliarydatahash_to_bech32(m, this.__wbg_ptr, x, k);
        var o = a()[m / 4 + 0], n = a()[m / 4 + 1], c = a()[m / 4 + 2], d = a()[m / 4 + 3], p = o, l = n;
        if (d) throw p = 0, l = 0, u(c);
        return e = p, s = l, h(p, l);
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
        return Ir.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return Ir.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class yt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(yt.prototype);
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
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.scripthash_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return yt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ed25519keyhash_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const m = _.__wbindgen_add_to_stack_pointer(-16), x = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), k = w;
        _.ed25519keyhash_to_bech32(m, this.__wbg_ptr, x, k);
        var o = a()[m / 4 + 0], n = a()[m / 4 + 1], c = a()[m / 4 + 2], d = a()[m / 4 + 3], p = o, l = n;
        if (d) throw p = 0, l = 0, u(c);
        return e = p, s = l, h(p, l);
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
        return yt.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return yt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
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
      _.__wbg_scripthashes_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.scripthashes_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.scripthashes_from_bytes(n, c, d);
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
        _.scripthashes_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return Q_.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return Q_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.ed25519keyhashes_new();
      return Q_.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.scripthashes_get(this.__wbg_ptr, t);
      return yt.__wrap(e);
    }
    add(t) {
      f(t, yt), _.scripthashes_add(this.__wbg_ptr, t.__wbg_ptr);
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
      _.__wbg_scriptnofk_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptnofk_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.scriptnofk_from_bytes(n, c, d);
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
        _.scriptnofk_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return V_.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return V_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    n() {
      return _.protocolversion_major(this.__wbg_ptr) >>> 0;
    }
    native_scripts() {
      const t = _.scriptnofk_native_scripts(this.__wbg_ptr);
      return ne.__wrap(t);
    }
    static new(t, e) {
      f(e, ne);
      const s = _.scriptnofk_new(t, e.__wbg_ptr);
      return V_.__wrap(s);
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
      _.__wbg_scriptpubkey_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptpubkey_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.scriptpubkey_from_bytes(n, c, d);
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
        _.scriptpubkey_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return B_.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return B_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    addr_keyhash() {
      const t = _.scriptpubkey_addr_keyhash(this.__wbg_ptr);
      return kt.__wrap(t);
    }
    static new(t) {
      f(t, kt);
      const e = _.scriptpubkey_new(t.__wbg_ptr);
      return B_.__wrap(e);
    }
  }
  class Ae {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ae.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.scriptref_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ae.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return Ae.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return Ae.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_native_script(t) {
      f(t, $t);
      const e = _.scriptref_new_native_script(t.__wbg_ptr);
      return Ae.__wrap(e);
    }
    static new_plutus_script(t) {
      f(t, At);
      const e = _.scriptref_new_plutus_script(t.__wbg_ptr);
      return Ae.__wrap(e);
    }
    is_native_script() {
      return _.scriptref_is_native_script(this.__wbg_ptr) !== 0;
    }
    is_plutus_script() {
      return _.scriptref_is_plutus_script(this.__wbg_ptr) !== 0;
    }
    native_script() {
      const t = _.scriptref_native_script(this.__wbg_ptr);
      return t === 0 ? void 0 : $t.__wrap(t);
    }
    plutus_script() {
      const t = _.scriptref_plutus_script(this.__wbg_ptr);
      return t === 0 ? void 0 : At.__wrap(t);
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
      _.__wbg_singlehostaddr_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.singlehostaddr_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.singlehostaddr_from_bytes(n, c, d);
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
        _.singlehostaddr_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return A_.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return A_.__wrap(e);
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
      return t === 0 ? void 0 : E_.__wrap(t);
    }
    ipv6() {
      const t = _.singlehostaddr_ipv6(this.__wbg_ptr);
      return t === 0 ? void 0 : z_.__wrap(t);
    }
    static new(t, e, s) {
      let o = 0;
      De(e) || (f(e, E_), o = e.__destroy_into_raw());
      let n = 0;
      De(s) || (f(s, z_), n = s.__destroy_into_raw());
      const c = _.singlehostaddr_new(De(t) ? 16777215 : t, o, n);
      return A_.__wrap(c);
    }
  }
  class H_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(H_.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.singlehostname_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return H_.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return H_.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return H_.__wrap(e);
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
      return v_.__wrap(t);
    }
    static new(t, e) {
      f(e, v_);
      const s = _.singlehostname_new(De(t) ? 16777215 : t, e.__wbg_ptr);
      return H_.__wrap(s);
    }
  }
  class _t {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(_t.prototype);
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
      f(t, kt);
      const e = _.stakecredential_from_keyhash(t.__wbg_ptr);
      return _t.__wrap(e);
    }
    static from_scripthash(t) {
      f(t, yt);
      const e = _.stakecredential_from_scripthash(t.__wbg_ptr);
      return _t.__wrap(e);
    }
    to_keyhash() {
      const t = _.stakecredential_to_keyhash(this.__wbg_ptr);
      return t === 0 ? void 0 : kt.__wrap(t);
    }
    to_scripthash() {
      const t = _.stakecredential_to_scripthash(this.__wbg_ptr);
      return t === 0 ? void 0 : yt.__wrap(t);
    }
    kind() {
      return _.stakecredential_kind(this.__wbg_ptr) >>> 0;
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakecredential_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.stakecredential_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return _t.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return _t.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return _t.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
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
      _.__wbg_stakecredentials_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakecredentials_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.stakecredentials_from_bytes(n, c, d);
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
        _.stakecredentials_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return Er.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return Er.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.ed25519keyhashes_new();
      return Er.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.stakecredentials_get(this.__wbg_ptr, t);
      return _t.__wrap(e);
    }
    add(t) {
      f(t, _t), _.stakecredentials_add(this.__wbg_ptr, t.__wbg_ptr);
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
      _.__wbg_stakedelegation_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakedelegation_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.stakedelegation_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return q_.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return q_.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return q_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    stake_credential() {
      const t = _.stakedelegation_stake_credential(this.__wbg_ptr);
      return _t.__wrap(t);
    }
    pool_keyhash() {
      const t = _.scriptpubkey_addr_keyhash(this.__wbg_ptr);
      return kt.__wrap(t);
    }
    static new(t, e) {
      f(t, _t), f(e, kt);
      const s = _.stakedelegation_new(t.__wbg_ptr, e.__wbg_ptr);
      return q_.__wrap(s);
    }
  }
  class Y_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Y_.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.stakederegistration_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Y_.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return Y_.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return Y_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    stake_credential() {
      const t = _.stakederegistration_stake_credential(this.__wbg_ptr);
      return _t.__wrap(t);
    }
    static new(t) {
      f(t, _t);
      const e = _.stakederegistration_new(t.__wbg_ptr);
      return Y_.__wrap(e);
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
      _.__wbg_stakeregistration_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakeregistration_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.stakeregistration_from_bytes(n, c, d);
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
        _.stakeregistration_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return X_.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return X_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    stake_credential() {
      const t = _.stakederegistration_stake_credential(this.__wbg_ptr);
      return _t.__wrap(t);
    }
    static new(t) {
      f(t, _t);
      const e = _.stakederegistration_new(t.__wbg_ptr);
      return X_.__wrap(e);
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
      _.__wbg_timelockexpiry_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.timelockexpiry_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.timelockexpiry_from_bytes(n, c, d);
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
        _.timelockexpiry_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return He.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return He.__wrap(e);
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
      return O.__wrap(t);
    }
    static new(t) {
      const e = _.timelockexpiry_new(t);
      return He.__wrap(e);
    }
    static new_timelockexpiry(t) {
      f(t, O);
      const e = _.timelockexpiry_new_timelockexpiry(t.__wbg_ptr);
      return He.__wrap(e);
    }
  }
  class qe {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(qe.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.timelockstart_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return qe.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return qe.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return qe.__wrap(e);
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
      return O.__wrap(t);
    }
    static new(t) {
      const e = _.timelockexpiry_new(t);
      return qe.__wrap(e);
    }
    static new_timelockstart(t) {
      f(t, O);
      const e = _.timelockexpiry_new_timelockexpiry(t.__wbg_ptr);
      return qe.__wrap(e);
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
      _.__wbg_transaction_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transaction_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.transaction_from_bytes(n, c, d);
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
        _.transaction_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return K_.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return K_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    body() {
      const t = _.transaction_body(this.__wbg_ptr);
      return Ye.__wrap(t);
    }
    witness_set() {
      const t = _.transaction_witness_set(this.__wbg_ptr);
      return J_.__wrap(t);
    }
    is_valid() {
      return _.transaction_is_valid(this.__wbg_ptr) !== 0;
    }
    auxiliary_data() {
      const t = _.transaction_auxiliary_data(this.__wbg_ptr);
      return t === 0 ? void 0 : h_.__wrap(t);
    }
    set_is_valid(t) {
      _.transaction_set_is_valid(this.__wbg_ptr, t);
    }
    static new(t, e, s) {
      f(t, Ye), f(e, J_);
      let o = 0;
      De(s) || (f(s, h_), o = s.__destroy_into_raw());
      const n = _.transaction_new(t.__wbg_ptr, e.__wbg_ptr, o);
      return K_.__wrap(n);
    }
  }
  class Ye {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ye.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.transactionbody_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ye.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return Ye.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return Ye.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    inputs() {
      const t = _.transactionbody_inputs(this.__wbg_ptr);
      return qt.__wrap(t);
    }
    outputs() {
      const t = _.transactionbody_outputs(this.__wbg_ptr);
      return Ge.__wrap(t);
    }
    fee() {
      const t = _.transactionbody_fee(this.__wbg_ptr);
      return O.__wrap(t);
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
      return t === 0 ? void 0 : O.__wrap(t);
    }
    set_ttl(t) {
      f(t, O), _.transactionbody_set_ttl(this.__wbg_ptr, t.__wbg_ptr);
    }
    remove_ttl() {
      _.transactionbody_remove_ttl(this.__wbg_ptr);
    }
    set_certs(t) {
      f(t, m_), _.transactionbody_set_certs(this.__wbg_ptr, t.__wbg_ptr);
    }
    certs() {
      const t = _.transactionbody_certs(this.__wbg_ptr);
      return t === 0 ? void 0 : m_.__wrap(t);
    }
    set_withdrawals(t) {
      f(t, _r), _.transactionbody_set_withdrawals(this.__wbg_ptr, t.__wbg_ptr);
    }
    withdrawals() {
      const t = _.transactionbody_withdrawals(this.__wbg_ptr);
      return t === 0 ? void 0 : _r.__wrap(t);
    }
    set_update(t) {
      f(t, G_), _.transactionbody_set_update(this.__wbg_ptr, t.__wbg_ptr);
    }
    update() {
      const t = _.transactionbody_update(this.__wbg_ptr);
      return t === 0 ? void 0 : G_.__wrap(t);
    }
    set_auxiliary_data_hash(t) {
      f(t, Lr), _.transactionbody_set_auxiliary_data_hash(this.__wbg_ptr, t.__wbg_ptr);
    }
    auxiliary_data_hash() {
      const t = _.transactionbody_auxiliary_data_hash(this.__wbg_ptr);
      return t === 0 ? void 0 : Lr.__wrap(t);
    }
    set_validity_start_interval(t) {
      _.transactionbody_set_validity_start_interval(this.__wbg_ptr, t);
    }
    set_validity_start_interval_bignum(t) {
      f(t, O);
      var e = t.__destroy_into_raw();
      _.transactionbody_set_validity_start_interval_bignum(this.__wbg_ptr, e);
    }
    validity_start_interval_bignum() {
      const t = _.transactionbody_validity_start_interval_bignum(this.__wbg_ptr);
      return t === 0 ? void 0 : O.__wrap(t);
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
      f(t, Oe), _.transactionbody_set_mint(this.__wbg_ptr, t.__wbg_ptr);
    }
    mint() {
      const t = _.transactionbody_mint(this.__wbg_ptr);
      return t === 0 ? void 0 : Oe.__wrap(t);
    }
    multiassets() {
      const t = _.transactionbody_mint(this.__wbg_ptr);
      return t === 0 ? void 0 : Oe.__wrap(t);
    }
    set_reference_inputs(t) {
      f(t, qt), _.transactionbody_set_reference_inputs(this.__wbg_ptr, t.__wbg_ptr);
    }
    reference_inputs() {
      const t = _.transactionbody_reference_inputs(this.__wbg_ptr);
      return t === 0 ? void 0 : qt.__wrap(t);
    }
    set_script_data_hash(t) {
      f(t, Ir), _.transactionbody_set_script_data_hash(this.__wbg_ptr, t.__wbg_ptr);
    }
    script_data_hash() {
      const t = _.transactionbody_script_data_hash(this.__wbg_ptr);
      return t === 0 ? void 0 : Ir.__wrap(t);
    }
    set_collateral(t) {
      f(t, qt), _.transactionbody_set_collateral(this.__wbg_ptr, t.__wbg_ptr);
    }
    collateral() {
      const t = _.transactionbody_collateral(this.__wbg_ptr);
      return t === 0 ? void 0 : qt.__wrap(t);
    }
    set_required_signers(t) {
      f(t, ce), _.transactionbody_set_required_signers(this.__wbg_ptr, t.__wbg_ptr);
    }
    required_signers() {
      const t = _.transactionbody_required_signers(this.__wbg_ptr);
      return t === 0 ? void 0 : ce.__wrap(t);
    }
    set_network_id(t) {
      f(t, Be), _.transactionbody_set_network_id(this.__wbg_ptr, t.__wbg_ptr);
    }
    network_id() {
      const t = _.transactionbody_network_id(this.__wbg_ptr);
      return t === 0 ? void 0 : Be.__wrap(t);
    }
    set_collateral_return(t) {
      f(t, Fe), _.transactionbody_set_collateral_return(this.__wbg_ptr, t.__wbg_ptr);
    }
    collateral_return() {
      const t = _.transactionbody_collateral_return(this.__wbg_ptr);
      return t === 0 ? void 0 : Fe.__wrap(t);
    }
    set_total_collateral(t) {
      f(t, O), _.transactionbody_set_total_collateral(this.__wbg_ptr, t.__wbg_ptr);
    }
    total_collateral() {
      const t = _.transactionbody_total_collateral(this.__wbg_ptr);
      return t === 0 ? void 0 : O.__wrap(t);
    }
    static new(t, e, s, o) {
      f(t, qt), f(e, Ge), f(s, O);
      const n = _.transactionbody_new(t.__wbg_ptr, e.__wbg_ptr, s.__wbg_ptr, !De(o), De(o) ? 0 : o);
      return Ye.__wrap(n);
    }
    static new_tx_body(t, e, s) {
      f(t, qt), f(e, Ge), f(s, O);
      const o = _.transactionbody_new_tx_body(t.__wbg_ptr, e.__wbg_ptr, s.__wbg_ptr);
      return Ye.__wrap(o);
    }
  }
  class Ur {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ur.prototype);
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
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.transactionhash_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ur.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydatahash_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const m = _.__wbindgen_add_to_stack_pointer(-16), x = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), k = w;
        _.auxiliarydatahash_to_bech32(m, this.__wbg_ptr, x, k);
        var o = a()[m / 4 + 0], n = a()[m / 4 + 1], c = a()[m / 4 + 2], d = a()[m / 4 + 3], p = o, l = n;
        if (d) throw p = 0, l = 0, u(c);
        return e = p, s = l, h(p, l);
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
        return Ur.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return Ur.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class Z_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Z_.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.transactioninput_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Z_.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return Z_.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return Z_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    transaction_id() {
      const t = _.transactioninput_transaction_id(this.__wbg_ptr);
      return Ur.__wrap(t);
    }
    index() {
      return _.transactioninput_index(this.__wbg_ptr) >>> 0;
    }
    static new(t, e) {
      f(t, Ur);
      const s = _.transactioninput_new(t.__wbg_ptr, e);
      return Z_.__wrap(s);
    }
  }
  class qt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(qt.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.transactioninputs_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return qt.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return qt.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return qt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.assetnames_new();
      return qt.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.transactioninputs_get(this.__wbg_ptr, t);
      return Z_.__wrap(e);
    }
    add(t) {
      f(t, Z_), _.transactioninputs_add(this.__wbg_ptr, t.__wbg_ptr);
    }
    to_option() {
      const t = _.transactioninputs_to_option(this.__wbg_ptr);
      return t === 0 ? void 0 : qt.__wrap(t);
    }
  }
  class J {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(J.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.transactionmetadatum_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return J.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return J.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_map(t) {
      f(t, Pr);
      const e = _.transactionmetadatum_new_map(t.__wbg_ptr);
      return J.__wrap(e);
    }
    static new_list(t) {
      f(t, or);
      const e = _.transactionmetadatum_new_list(t.__wbg_ptr);
      return J.__wrap(e);
    }
    static new_int(t) {
      f(t, pt);
      const e = _.transactionmetadatum_new_int(t.__wbg_ptr);
      return J.__wrap(e);
    }
    static new_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.transactionmetadatum_new_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return J.__wrap(e);
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
        return J.__wrap(e);
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
        return Pr.__wrap(t);
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
        return or.__wrap(t);
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
        return pt.__wrap(t);
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
        var n = E(t, e).slice();
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
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
  }
  class pn {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(pn.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.transactionmetadatumlabels_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return pn.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return pn.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.costmodel_new();
      return pn.__wrap(t);
    }
    len() {
      return _.costmdls_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.transactionmetadatumlabels_get(this.__wbg_ptr, t);
      return O.__wrap(e);
    }
    add(t) {
      f(t, O), _.transactionmetadatumlabels_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class Fe {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Fe.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.transactionoutput_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Fe.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return Fe.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return Fe.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    address() {
      const t = _.transactionoutput_address(this.__wbg_ptr);
      return Pt.__wrap(t);
    }
    amount() {
      const t = _.transactionoutput_amount(this.__wbg_ptr);
      return mt.__wrap(t);
    }
    data_hash() {
      const t = _.transactionoutput_data_hash(this.__wbg_ptr);
      return t === 0 ? void 0 : Fr.__wrap(t);
    }
    plutus_data() {
      const t = _.transactionoutput_plutus_data(this.__wbg_ptr);
      return t === 0 ? void 0 : et.__wrap(t);
    }
    script_ref() {
      const t = _.transactionoutput_script_ref(this.__wbg_ptr);
      return t === 0 ? void 0 : Ae.__wrap(t);
    }
    set_script_ref(t) {
      f(t, Ae), _.transactionoutput_set_script_ref(this.__wbg_ptr, t.__wbg_ptr);
    }
    set_plutus_data(t) {
      f(t, et), _.transactionoutput_set_plutus_data(this.__wbg_ptr, t.__wbg_ptr);
    }
    set_data_hash(t) {
      f(t, Fr), _.transactionoutput_set_data_hash(this.__wbg_ptr, t.__wbg_ptr);
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
      f(t, Pt), f(e, mt);
      const s = _.transactionoutput_new(t.__wbg_ptr, e.__wbg_ptr);
      return Fe.__wrap(s);
    }
    serialization_format() {
      const t = _.transactionoutput_serialization_format(this.__wbg_ptr);
      return t === 2 ? void 0 : t;
    }
  }
  class Ge {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ge.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.transactionoutputs_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ge.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return Ge.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return Ge.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.certificates_new();
      return Ge.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.transactionoutputs_get(this.__wbg_ptr, t);
      return Fe.__wrap(e);
    }
    add(t) {
      f(t, Fe), _.transactionoutputs_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class J_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(J_.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.transactionwitnessset_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return J_.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return J_.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return J_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    set_vkeys(t) {
      f(t, er), _.transactionwitnessset_set_vkeys(this.__wbg_ptr, t.__wbg_ptr);
    }
    vkeys() {
      const t = _.transactionwitnessset_vkeys(this.__wbg_ptr);
      return t === 0 ? void 0 : er.__wrap(t);
    }
    set_native_scripts(t) {
      f(t, ne), _.transactionwitnessset_set_native_scripts(this.__wbg_ptr, t.__wbg_ptr);
    }
    native_scripts() {
      const t = _.transactionwitnessset_native_scripts(this.__wbg_ptr);
      return t === 0 ? void 0 : ne.__wrap(t);
    }
    set_bootstraps(t) {
      f(t, yo), _.transactionwitnessset_set_bootstraps(this.__wbg_ptr, t.__wbg_ptr);
    }
    bootstraps() {
      const t = _.transactionwitnessset_bootstraps(this.__wbg_ptr);
      return t === 0 ? void 0 : yo.__wrap(t);
    }
    set_plutus_scripts(t) {
      f(t, Ne), _.transactionwitnessset_set_plutus_scripts(this.__wbg_ptr, t.__wbg_ptr);
    }
    plutus_scripts() {
      const t = _.transactionwitnessset_plutus_scripts(this.__wbg_ptr);
      return t === 0 ? void 0 : Ne.__wrap(t);
    }
    set_plutus_data(t) {
      f(t, le), _.transactionwitnessset_set_plutus_data(this.__wbg_ptr, t.__wbg_ptr);
    }
    plutus_data() {
      const t = _.transactionwitnessset_plutus_data(this.__wbg_ptr);
      return t === 0 ? void 0 : le.__wrap(t);
    }
    set_redeemers(t) {
      f(t, I_), _.transactionwitnessset_set_redeemers(this.__wbg_ptr, t.__wbg_ptr);
    }
    redeemers() {
      const t = _.transactionwitnessset_redeemers(this.__wbg_ptr);
      return t === 0 ? void 0 : I_.__wrap(t);
    }
    static new() {
      const t = _.transactionwitnessset_new();
      return J_.__wrap(t);
    }
  }
  let kd = class Jr {
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
      _.__wbg_url_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.url_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.url_from_bytes(n, c, d);
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
        _.url_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return Jr.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return Jr.__wrap(e);
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
        return Jr.__wrap(e);
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
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
  };
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
      _.__wbg_unitinterval_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.unitinterval_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.unitinterval_from_bytes(n, c, d);
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
        _.unitinterval_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return bt.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return bt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    numerator() {
      const t = _.timelockexpiry_slot_bignum(this.__wbg_ptr);
      return O.__wrap(t);
    }
    denominator() {
      const t = _.unitinterval_denominator(this.__wbg_ptr);
      return O.__wrap(t);
    }
    static new(t, e) {
      f(t, O), f(e, O);
      const s = _.unitinterval_new(t.__wbg_ptr, e.__wbg_ptr);
      return bt.__wrap(s);
    }
  }
  class G_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(G_.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.update_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return G_.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return G_.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return G_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    proposed_protocol_parameter_updates() {
      const t = _.update_proposed_protocol_parameter_updates(this.__wbg_ptr);
      return R_.__wrap(t);
    }
    epoch() {
      return _.update_epoch(this.__wbg_ptr) >>> 0;
    }
    static new(t, e) {
      f(t, R_);
      const s = _.update_new(t.__wbg_ptr, e);
      return G_.__wrap(s);
    }
  }
  class __ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(__.prototype);
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
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.vrfkeyhash_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return __.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydatahash_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const m = _.__wbindgen_add_to_stack_pointer(-16), x = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), k = w;
        _.auxiliarydatahash_to_bech32(m, this.__wbg_ptr, x, k);
        var o = a()[m / 4 + 0], n = a()[m / 4 + 1], c = a()[m / 4 + 2], d = a()[m / 4 + 3], p = o, l = n;
        if (d) throw p = 0, l = 0, u(c);
        return e = p, s = l, h(p, l);
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
        return __.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return __.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class mt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(mt.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.value_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return mt.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return mt.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return mt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t) {
      f(t, O);
      const e = _.value_new(t.__wbg_ptr);
      return mt.__wrap(e);
    }
    static new_from_assets(t) {
      f(t, Ht);
      const e = _.value_new_from_assets(t.__wbg_ptr);
      return mt.__wrap(e);
    }
    static new_with_assets(t, e) {
      f(t, O), f(e, Ht);
      const s = _.value_new_with_assets(t.__wbg_ptr, e.__wbg_ptr);
      return mt.__wrap(s);
    }
    static zero() {
      const t = _.value_zero();
      return mt.__wrap(t);
    }
    is_zero() {
      return _.value_is_zero(this.__wbg_ptr) !== 0;
    }
    coin() {
      const t = _.value_coin(this.__wbg_ptr);
      return O.__wrap(t);
    }
    set_coin(t) {
      f(t, O), _.value_set_coin(this.__wbg_ptr, t.__wbg_ptr);
    }
    multiasset() {
      const t = _.value_multiasset(this.__wbg_ptr);
      return t === 0 ? void 0 : Ht.__wrap(t);
    }
    set_multiasset(t) {
      f(t, Ht), _.value_set_multiasset(this.__wbg_ptr, t.__wbg_ptr);
    }
    checked_add(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        f(t, mt), _.value_checked_add(n, this.__wbg_ptr, t.__wbg_ptr);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return mt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    checked_sub(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        f(t, mt), _.value_checked_sub(n, this.__wbg_ptr, t.__wbg_ptr);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return mt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    clamped_sub(t) {
      f(t, mt);
      const e = _.value_clamped_sub(this.__wbg_ptr, t.__wbg_ptr);
      return mt.__wrap(e);
    }
    compare(t) {
      f(t, mt);
      const e = _.value_compare(this.__wbg_ptr, t.__wbg_ptr);
      return e === 16777215 ? void 0 : e;
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
      _.__wbg_vkey_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.vkey_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.vkey_from_bytes(n, c, d);
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
        _.vkey_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
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
        return Te.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return Te.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t) {
      f(t, Dr);
      const e = _.vkey_new(t.__wbg_ptr);
      return Te.__wrap(e);
    }
    public_key() {
      const t = _.vkey_public_key(this.__wbg_ptr);
      return Dr.__wrap(t);
    }
  }
  class tr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(tr.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.vkeywitness_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return tr.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return tr.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return tr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t, e) {
      f(t, Te), f(e, Pe);
      const s = _.vkeywitness_new(t.__wbg_ptr, e.__wbg_ptr);
      return tr.__wrap(s);
    }
    vkey() {
      const t = _.bootstrapwitness_vkey(this.__wbg_ptr);
      return Te.__wrap(t);
    }
    signature() {
      const t = _.bootstrapwitness_signature(this.__wbg_ptr);
      return Pe.__wrap(t);
    }
  }
  class er {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(er.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.vkeywitnesses_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return er.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return er.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return er.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.publickeys_new();
      return er.__wrap(t);
    }
    len() {
      return _.bootstrapwitnesses_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.vkeywitnesses_get(this.__wbg_ptr, t);
      return tr.__wrap(e);
    }
    add(t) {
      f(t, tr), _.vkeywitnesses_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class _r {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(_r.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = S(t, _.__wbindgen_malloc), d = w;
        _.withdrawals_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return _r.__wrap(e);
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
        return t = s, e = o, h(s, o);
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
        return _r.__wrap(e);
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
        return t = d, e = p, h(d, p);
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
        return _r.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.auxiliarydataset_new();
      return _r.__wrap(t);
    }
    len() {
      return _.auxiliarydataset_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, Ie), f(e, O);
      const s = _.withdrawals_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : O.__wrap(s);
    }
    get(t) {
      f(t, Ie);
      const e = _.withdrawals_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : O.__wrap(e);
    }
    keys() {
      const t = _.withdrawals_keys(this.__wbg_ptr);
      return Sr.__wrap(t);
    }
  }
  function jf(r) {
    u(r);
  }
  function Sf(r, t) {
    const e = h(r, t);
    return H(e);
  }
  function Ef(r, t) {
    const e = new Error(h(r, t));
    return H(e);
  }
  function zf(r, t) {
    const e = Q(t), s = typeof e == "string" ? e : void 0;
    var o = De(s) ? 0 : g(s, _.__wbindgen_malloc, _.__wbindgen_realloc), n = w;
    a()[r / 4 + 1] = n, a()[r / 4 + 0] = o;
  }
  function Cf(r) {
    return H(r);
  }
  function Of(r) {
    const t = Q(r);
    return H(t);
  }
  function Lf(r) {
    const t = Q(r);
    return typeof t == "object" && t !== null;
  }
  function Nf(r, t, e) {
    Q(r)[u(t)] = u(e);
  }
  function Ff(r, t) {
    const e = String(Q(t)), s = g(e, _.__wbindgen_malloc, _.__wbindgen_realloc), o = w;
    a()[r / 4 + 1] = o, a()[r / 4 + 0] = s;
  }
  function Tf() {
    return c_(function(r, t) {
      Q(r).randomFillSync(u(t));
    }, arguments);
  }
  function Pf() {
    return c_(function(r, t) {
      Q(r).getRandomValues(Q(t));
    }, arguments);
  }
  function Rf(r) {
    const t = Q(r).crypto;
    return H(t);
  }
  function $f(r) {
    const t = Q(r).process;
    return H(t);
  }
  function Df(r) {
    const t = Q(r).versions;
    return H(t);
  }
  function If(r) {
    const t = Q(r).node;
    return H(t);
  }
  function Uf(r) {
    return typeof Q(r) == "string";
  }
  function Mf() {
    return c_(function() {
      const r = module.require;
      return H(r);
    }, arguments);
  }
  function Wf(r) {
    const t = Q(r).msCrypto;
    return H(t);
  }
  function Qf() {
    const r = new Array();
    return H(r);
  }
  function Vf(r) {
    return typeof Q(r) == "function";
  }
  function Bf(r, t) {
    const e = new Function(h(r, t));
    return H(e);
  }
  function Af() {
    return H(/* @__PURE__ */ new Map());
  }
  function Hf() {
    return c_(function(r, t) {
      const e = Q(r).call(Q(t));
      return H(e);
    }, arguments);
  }
  function qf() {
    const r = new Object();
    return H(r);
  }
  function Yf() {
    return c_(function() {
      const r = self.self;
      return H(r);
    }, arguments);
  }
  function Xf() {
    return c_(function() {
      const r = window.window;
      return H(r);
    }, arguments);
  }
  function Kf() {
    return c_(function() {
      const r = globalThis.globalThis;
      return H(r);
    }, arguments);
  }
  function Zf() {
    return c_(function() {
      const r = global.global;
      return H(r);
    }, arguments);
  }
  function Jf(r) {
    return Q(r) === void 0;
  }
  function Gf(r, t, e) {
    Q(r)[t >>> 0] = u(e);
  }
  function tg() {
    return c_(function(r, t, e) {
      const s = Q(r).call(Q(t), Q(e));
      return H(s);
    }, arguments);
  }
  function eg(r, t, e) {
    const s = Q(r).set(Q(t), Q(e));
    return H(s);
  }
  function _g(r) {
    const t = Q(r).buffer;
    return H(t);
  }
  function rg(r, t, e) {
    const s = new Uint8Array(Q(r), t >>> 0, e >>> 0);
    return H(s);
  }
  function ng(r) {
    const t = new Uint8Array(Q(r));
    return H(t);
  }
  function og(r, t, e) {
    Q(r).set(Q(t), e >>> 0);
  }
  function sg(r) {
    const t = new Uint8Array(r >>> 0);
    return H(t);
  }
  function ag(r, t, e) {
    const s = Q(r).subarray(t >>> 0, e >>> 0);
    return H(s);
  }
  function ig(r, t) {
    const e = new Function(h(r, t));
    return H(e);
  }
  function cg(r, t) {
    const e = Q(r).call(Q(t));
    return H(e);
  }
  function dg(r, t) {
    return Q(r) === Q(t);
  }
  function lg(r) {
    const t = Q(r).self;
    return H(t);
  }
  function pg(r) {
    const t = Q(r).crypto;
    return H(t);
  }
  function ug(r) {
    const t = Q(r).getRandomValues;
    return H(t);
  }
  function wg(r, t) {
    const e = require(h(r, t));
    return H(e);
  }
  function fg(r, t, e) {
    Q(r).randomFillSync(E(t, e));
  }
  function gg(r, t, e) {
    Q(r).getRandomValues(E(t, e));
  }
  function bg(r, t) {
    const e = ui(Q(t)), s = g(e, _.__wbindgen_malloc, _.__wbindgen_realloc), o = w;
    a()[r / 4 + 1] = o, a()[r / 4 + 0] = s;
  }
  function hg(r, t) {
    throw new Error(h(r, t));
  }
  function yg() {
    const r = _.memory;
    return H(r);
  }
  URL = globalThis.URL;
  const i = await hf({
    "./cardano_serialization_lib_bg.js": {
      __wbindgen_object_drop_ref: jf,
      __wbindgen_string_new: Sf,
      __wbindgen_error_new: Ef,
      __wbindgen_string_get: zf,
      __wbindgen_number_new: Cf,
      __wbindgen_object_clone_ref: Of,
      __wbindgen_is_object: Lf,
      __wbg_set_20cbc34131e76824: Nf,
      __wbg_String_91fba7ded13ba54c: Ff,
      __wbg_randomFillSync_dc1e9a60c158336d: Tf,
      __wbg_getRandomValues_37fa2ca9e4e07fab: Pf,
      __wbg_crypto_c48a774b022d20ac: Rf,
      __wbg_process_298734cf255a885d: $f,
      __wbg_versions_e2e78e134e3e5d01: Df,
      __wbg_node_1cd7a5d853dbea79: If,
      __wbindgen_is_string: Uf,
      __wbg_require_8f08ceecec0f4fee: Mf,
      __wbg_msCrypto_bcb970640f50a1e8: Wf,
      __wbg_new_1d9a920c6bfc44a8: Qf,
      __wbindgen_is_function: Vf,
      __wbg_newnoargs_b5b063fc6c2f0376: Bf,
      __wbg_new_268f7b7dd3430798: Af,
      __wbg_call_97ae9d8645dc388b: Hf,
      __wbg_new_0b9bfdd97583284e: qf,
      __wbg_self_6d479506f72c6a71: Yf,
      __wbg_window_f2557cc78490aceb: Xf,
      __wbg_globalThis_7f206bda628d5286: Kf,
      __wbg_global_ba75c50d1cf384f4: Zf,
      __wbindgen_is_undefined: Jf,
      __wbg_set_a68214f35c417fa9: Gf,
      __wbg_call_168da88779e35f61: tg,
      __wbg_set_933729cf5b66ac11: eg,
      __wbg_buffer_3f3d764d4747d564: _g,
      __wbg_newwithbyteoffsetandlength_d9aa266703cb98be: rg,
      __wbg_new_8c3f0052272a457a: ng,
      __wbg_set_83db9690f9353e79: og,
      __wbg_newwithlength_f5933855e4f48a19: sg,
      __wbg_subarray_58ad4efbb5bcb886: ag,
      __wbg_new_d87f272aec784ec0: ig,
      __wbg_call_eae29933372a39be: cg,
      __wbindgen_jsval_eq: dg,
      __wbg_self_e0b3266d2d9eba1a: lg,
      __wbg_crypto_e95a6e54c5c2e37f: pg,
      __wbg_getRandomValues_dc67302a7bd1aec5: ug,
      __wbg_require_0993fe224bf8e202: wg,
      __wbg_randomFillSync_dd2297de5917c74e: fg,
      __wbg_getRandomValues_02639197c8166a96: gg,
      __wbindgen_debug_string: bg,
      __wbindgen_throw: hg,
      __wbindgen_memory: yg
    }
  }, bf), mg = i.memory, vg = i.unitinterval_to_bytes, kg = i.unitinterval_from_bytes, xg = i.unitinterval_to_hex, jg = i.unitinterval_from_hex, Sg = i.unitinterval_to_json, Eg = i.unitinterval_to_js_value, zg = i.unitinterval_from_json, Cg = i.unitinterval_denominator, Og = i.unitinterval_new, Lg = i.__wbg_transaction_free, Ng = i.transaction_to_bytes, Fg = i.transaction_from_bytes, Tg = i.transaction_to_hex, Pg = i.transaction_from_hex, Rg = i.transaction_to_json, $g = i.transaction_to_js_value, Dg = i.transaction_from_json, Ig = i.transaction_body, Ug = i.transaction_witness_set, Mg = i.transaction_is_valid, Wg = i.transaction_auxiliary_data, Qg = i.transaction_set_is_valid, Vg = i.transaction_new, Bg = i.__wbg_transactioninputs_free, Ag = i.transactioninputs_to_bytes, Hg = i.transactioninputs_from_bytes, qg = i.transactioninputs_to_hex, Yg = i.transactioninputs_from_hex, Xg = i.transactioninputs_to_json, Kg = i.transactioninputs_to_js_value, Zg = i.transactioninputs_from_json, Jg = i.transactioninputs_get, Gg = i.transactioninputs_add, tb = i.transactioninputs_to_option, eb = i.__wbg_transactionoutputs_free, _b = i.transactionoutputs_to_bytes, rb = i.transactionoutputs_from_bytes, nb = i.transactionoutputs_to_hex, ob = i.transactionoutputs_from_hex, sb = i.transactionoutputs_to_json, ab = i.transactionoutputs_to_js_value, ib = i.transactionoutputs_from_json, cb = i.transactionoutputs_get, db = i.transactionoutputs_add, lb = i.__wbg_datacost_free, pb = i.datacost_new_coins_per_word, ub = i.datacost_new_coins_per_byte, wb = i.datacost_coins_per_byte, fb = i.__wbg_certificates_free, gb = i.certificates_to_bytes, bb = i.certificates_from_bytes, hb = i.certificates_to_hex, yb = i.certificates_from_hex, mb = i.certificates_to_json, vb = i.certificates_to_js_value, kb = i.certificates_from_json, xb = i.certificates_new, jb = i.certificates_get, Sb = i.certificates_add, Eb = i.__wbg_transactionbody_free, zb = i.transactionbody_to_bytes, Cb = i.transactionbody_from_bytes, Ob = i.transactionbody_to_hex, Lb = i.transactionbody_from_hex, Nb = i.transactionbody_to_json, Fb = i.transactionbody_to_js_value, Tb = i.transactionbody_from_json, Pb = i.transactionbody_inputs, Rb = i.transactionbody_outputs, $b = i.transactionbody_fee, Db = i.transactionbody_ttl, Ib = i.transactionbody_ttl_bignum, Ub = i.transactionbody_set_ttl, Mb = i.transactionbody_remove_ttl, Wb = i.transactionbody_set_certs, Qb = i.transactionbody_certs, Vb = i.transactionbody_set_withdrawals, Bb = i.transactionbody_withdrawals, Ab = i.transactionbody_set_update, Hb = i.transactionbody_update, qb = i.transactionbody_set_auxiliary_data_hash, Yb = i.transactionbody_auxiliary_data_hash, Xb = i.transactionbody_set_validity_start_interval, Kb = i.transactionbody_set_validity_start_interval_bignum, Zb = i.transactionbody_validity_start_interval_bignum, Jb = i.transactionbody_validity_start_interval, Gb = i.transactionbody_set_mint, th = i.transactionbody_mint, eh = i.transactionbody_set_reference_inputs, _h = i.transactionbody_reference_inputs, rh = i.transactionbody_set_script_data_hash, nh = i.transactionbody_script_data_hash, oh = i.transactionbody_set_collateral, sh = i.transactionbody_collateral, ah = i.transactionbody_set_required_signers, ih = i.transactionbody_required_signers, ch = i.transactionbody_set_network_id, dh = i.transactionbody_network_id, lh = i.transactionbody_set_collateral_return, ph = i.transactionbody_collateral_return, uh = i.transactionbody_set_total_collateral, wh = i.transactionbody_total_collateral, fh = i.transactionbody_new, gh = i.transactionbody_new_tx_body, bh = i.__wbg_transactioninput_free, hh = i.transactioninput_to_bytes, yh = i.transactioninput_from_bytes, mh = i.transactioninput_to_hex, vh = i.transactioninput_from_hex, kh = i.transactioninput_to_json, xh = i.transactioninput_to_js_value, jh = i.transactioninput_from_json, Sh = i.transactioninput_transaction_id, Eh = i.transactioninput_index, zh = i.transactioninput_new, Ch = i.__wbg_transactionoutput_free, Oh = i.transactionoutput_to_bytes, Lh = i.transactionoutput_from_bytes, Nh = i.transactionoutput_to_hex, Fh = i.transactionoutput_from_hex, Th = i.transactionoutput_to_json, Ph = i.transactionoutput_to_js_value, Rh = i.transactionoutput_from_json, $h = i.transactionoutput_address, Dh = i.transactionoutput_amount, Ih = i.transactionoutput_data_hash, Uh = i.transactionoutput_plutus_data, Mh = i.transactionoutput_script_ref, Wh = i.transactionoutput_set_script_ref, Qh = i.transactionoutput_set_plutus_data, Vh = i.transactionoutput_set_data_hash, Bh = i.transactionoutput_has_plutus_data, Ah = i.transactionoutput_has_data_hash, Hh = i.transactionoutput_has_script_ref, qh = i.transactionoutput_new, Yh = i.transactionoutput_serialization_format, Xh = i.stakeregistration_to_bytes, Kh = i.stakeregistration_from_bytes, Zh = i.stakeregistration_to_hex, Jh = i.stakeregistration_from_hex, Gh = i.stakeregistration_to_js_value, ty = i.stakeregistration_from_json, ey = i.__wbg_stakederegistration_free, _y = i.stakederegistration_to_bytes, ry = i.stakederegistration_from_bytes, ny = i.stakederegistration_to_hex, oy = i.stakederegistration_from_hex, sy = i.stakederegistration_to_json, ay = i.stakederegistration_to_js_value, iy = i.stakederegistration_from_json, cy = i.stakederegistration_stake_credential, dy = i.stakederegistration_new, ly = i.__wbg_stakedelegation_free, py = i.stakedelegation_to_bytes, uy = i.stakedelegation_from_bytes, wy = i.stakedelegation_to_hex, fy = i.stakedelegation_from_hex, gy = i.stakedelegation_to_json, by = i.stakedelegation_to_js_value, hy = i.stakedelegation_from_json, yy = i.stakedelegation_stake_credential, my = i.stakedelegation_new, vy = i.__wbg_ed25519keyhashes_free, ky = i.ed25519keyhashes_to_bytes, xy = i.ed25519keyhashes_from_bytes, jy = i.ed25519keyhashes_to_hex, Sy = i.ed25519keyhashes_from_hex, Ey = i.ed25519keyhashes_to_json, zy = i.ed25519keyhashes_to_js_value, Cy = i.ed25519keyhashes_from_json, Oy = i.ed25519keyhashes_new, Ly = i.ed25519keyhashes_get, Ny = i.ed25519keyhashes_add, Fy = i.ed25519keyhashes_to_option, Ty = i.__wbg_relays_free, Py = i.relays_to_bytes, Ry = i.relays_from_bytes, $y = i.relays_to_hex, Dy = i.relays_from_hex, Iy = i.relays_to_json, Uy = i.relays_to_js_value, My = i.relays_from_json, Wy = i.relays_get, Qy = i.relays_add, Vy = i.__wbg_poolparams_free, By = i.poolparams_to_bytes, Ay = i.poolparams_from_bytes, Hy = i.poolparams_to_hex, qy = i.poolparams_from_hex, Yy = i.poolparams_to_json, Xy = i.poolparams_to_js_value, Ky = i.poolparams_from_json, Zy = i.poolparams_operator, Jy = i.poolparams_vrf_keyhash, Gy = i.poolparams_pledge, tm = i.poolparams_cost, em = i.poolparams_margin, _m = i.poolparams_reward_account, rm = i.poolparams_pool_owners, nm = i.poolparams_relays, om = i.poolparams_pool_metadata, sm = i.poolparams_new, am = i.__wbg_poolregistration_free, im = i.poolregistration_to_bytes, cm = i.poolregistration_from_bytes, dm = i.poolregistration_to_hex, lm = i.poolregistration_from_hex, pm = i.poolregistration_to_json, um = i.poolregistration_to_js_value, wm = i.poolregistration_from_json, fm = i.poolregistration_pool_params, gm = i.poolregistration_new, bm = i.__wbg_poolretirement_free, hm = i.poolretirement_to_bytes, ym = i.poolretirement_from_bytes, mm = i.poolretirement_to_hex, vm = i.poolretirement_from_hex, km = i.poolretirement_to_json, xm = i.poolretirement_to_js_value, jm = i.poolretirement_from_json, Sm = i.poolretirement_pool_keyhash, Em = i.poolretirement_epoch, zm = i.poolretirement_new, Cm = i.__wbg_genesiskeydelegation_free, Om = i.genesiskeydelegation_to_bytes, Lm = i.genesiskeydelegation_from_bytes, Nm = i.genesiskeydelegation_to_hex, Fm = i.genesiskeydelegation_from_hex, Tm = i.genesiskeydelegation_to_json, Pm = i.genesiskeydelegation_to_js_value, Rm = i.genesiskeydelegation_from_json, $m = i.genesiskeydelegation_genesishash, Dm = i.genesiskeydelegation_genesis_delegate_hash, Im = i.genesiskeydelegation_vrf_keyhash, Um = i.genesiskeydelegation_new, Mm = i.__wbg_moveinstantaneousrewardscert_free, Wm = i.moveinstantaneousrewardscert_to_bytes, Qm = i.moveinstantaneousrewardscert_from_bytes, Vm = i.moveinstantaneousrewardscert_to_hex, Bm = i.moveinstantaneousrewardscert_from_hex, Am = i.moveinstantaneousrewardscert_to_json, Hm = i.moveinstantaneousrewardscert_to_js_value, qm = i.moveinstantaneousrewardscert_from_json, Ym = i.moveinstantaneousrewardscert_move_instantaneous_reward, Xm = i.moveinstantaneousrewardscert_new, Km = i.__wbg_certificate_free, Zm = i.certificate_to_bytes, Jm = i.certificate_from_bytes, Gm = i.certificate_to_hex, tv = i.certificate_from_hex, ev = i.certificate_to_json, _v = i.certificate_to_js_value, rv = i.certificate_from_json, nv = i.certificate_new_stake_registration, ov = i.certificate_new_stake_deregistration, sv = i.certificate_new_stake_delegation, av = i.certificate_new_pool_registration, iv = i.certificate_new_pool_retirement, cv = i.certificate_new_genesis_key_delegation, dv = i.certificate_new_move_instantaneous_rewards_cert, lv = i.certificate_kind, pv = i.certificate_as_stake_registration, uv = i.certificate_as_stake_deregistration, wv = i.certificate_as_stake_delegation, fv = i.certificate_as_pool_registration, gv = i.certificate_as_pool_retirement, bv = i.certificate_as_genesis_key_delegation, hv = i.certificate_as_move_instantaneous_rewards_cert, yv = i.__wbg_mirtostakecredentials_free, mv = i.mirtostakecredentials_to_bytes, vv = i.mirtostakecredentials_from_bytes, kv = i.mirtostakecredentials_to_hex, xv = i.mirtostakecredentials_from_hex, jv = i.mirtostakecredentials_to_json, Sv = i.mirtostakecredentials_to_js_value, Ev = i.mirtostakecredentials_from_json, zv = i.mirtostakecredentials_insert, Cv = i.mirtostakecredentials_get, Ov = i.mirtostakecredentials_keys, Lv = i.__wbg_moveinstantaneousreward_free, Nv = i.moveinstantaneousreward_to_bytes, Fv = i.moveinstantaneousreward_from_bytes, Tv = i.moveinstantaneousreward_to_hex, Pv = i.moveinstantaneousreward_from_hex, Rv = i.moveinstantaneousreward_to_json, $v = i.moveinstantaneousreward_to_js_value, Dv = i.moveinstantaneousreward_from_json, Iv = i.moveinstantaneousreward_new_to_other_pot, Uv = i.moveinstantaneousreward_new_to_stake_creds, Mv = i.moveinstantaneousreward_pot, Wv = i.moveinstantaneousreward_kind, Qv = i.moveinstantaneousreward_as_to_other_pot, Vv = i.moveinstantaneousreward_as_to_stake_creds, Bv = i.__wbg_ipv4_free, Av = i.ipv4_to_bytes, Hv = i.ipv4_from_bytes, qv = i.ipv4_to_hex, Yv = i.ipv4_from_hex, Xv = i.ipv4_to_json, Kv = i.ipv4_to_js_value, Zv = i.ipv4_from_json, Jv = i.ipv4_new, Gv = i.ipv4_ip, t1 = i.__wbg_ipv6_free, e1 = i.ipv6_to_bytes, _1 = i.ipv6_from_bytes, r1 = i.ipv6_to_hex, n1 = i.ipv6_from_hex, o1 = i.ipv6_to_json, s1 = i.ipv6_to_js_value, a1 = i.ipv6_from_json, i1 = i.ipv6_new, c1 = i.ipv6_ip, d1 = i.url_to_bytes, l1 = i.url_from_bytes, p1 = i.url_to_hex, u1 = i.url_from_hex, w1 = i.url_from_json, f1 = i.url_new, g1 = i.__wbg_dnsrecordaoraaaa_free, b1 = i.dnsrecordaoraaaa_to_bytes, h1 = i.dnsrecordaoraaaa_from_bytes, y1 = i.dnsrecordaoraaaa_to_hex, m1 = i.dnsrecordaoraaaa_from_hex, v1 = i.dnsrecordaoraaaa_to_json, k1 = i.dnsrecordaoraaaa_to_js_value, x1 = i.dnsrecordaoraaaa_from_json, j1 = i.dnsrecordaoraaaa_new, S1 = i.dnsrecordaoraaaa_record, E1 = i.dnsrecordsrv_to_bytes, z1 = i.dnsrecordsrv_from_bytes, C1 = i.dnsrecordsrv_to_hex, O1 = i.dnsrecordsrv_from_hex, L1 = i.dnsrecordsrv_from_json, N1 = i.dnsrecordsrv_new, F1 = i.__wbg_singlehostaddr_free, T1 = i.singlehostaddr_to_bytes, P1 = i.singlehostaddr_from_bytes, R1 = i.singlehostaddr_to_hex, $1 = i.singlehostaddr_from_hex, D1 = i.singlehostaddr_to_json, I1 = i.singlehostaddr_to_js_value, U1 = i.singlehostaddr_from_json, M1 = i.singlehostaddr_port, W1 = i.singlehostaddr_ipv4, Q1 = i.singlehostaddr_ipv6, V1 = i.singlehostaddr_new, B1 = i.__wbg_singlehostname_free, A1 = i.singlehostname_to_bytes, H1 = i.singlehostname_from_bytes, q1 = i.singlehostname_to_hex, Y1 = i.singlehostname_from_hex, X1 = i.singlehostname_to_json, K1 = i.singlehostname_to_js_value, Z1 = i.singlehostname_from_json, J1 = i.singlehostname_port, G1 = i.singlehostname_new, tk = i.__wbg_multihostname_free, ek = i.multihostname_to_bytes, _k = i.multihostname_from_bytes, rk = i.multihostname_to_hex, nk = i.multihostname_from_hex, ok = i.multihostname_to_json, sk = i.multihostname_to_js_value, ak = i.multihostname_from_json, ik = i.multihostname_dns_name, ck = i.multihostname_new, dk = i.__wbg_relay_free, lk = i.relay_to_bytes, pk = i.relay_from_bytes, uk = i.relay_to_hex, wk = i.relay_from_hex, fk = i.relay_to_json, gk = i.relay_to_js_value, bk = i.relay_from_json, hk = i.relay_new_single_host_addr, yk = i.relay_new_single_host_name, mk = i.relay_new_multi_host_name, vk = i.relay_kind, kk = i.relay_as_single_host_addr, xk = i.relay_as_single_host_name, jk = i.relay_as_multi_host_name, Sk = i.__wbg_poolmetadata_free, Ek = i.poolmetadata_to_bytes, zk = i.poolmetadata_from_bytes, Ck = i.poolmetadata_to_hex, Ok = i.poolmetadata_from_hex, Lk = i.poolmetadata_to_json, Nk = i.poolmetadata_to_js_value, Fk = i.poolmetadata_from_json, Tk = i.poolmetadata_url, Pk = i.poolmetadata_pool_metadata_hash, Rk = i.poolmetadata_new, $k = i.__wbg_stakecredentials_free, Dk = i.stakecredentials_to_bytes, Ik = i.stakecredentials_from_bytes, Uk = i.stakecredentials_to_hex, Mk = i.stakecredentials_from_hex, Wk = i.stakecredentials_to_json, Qk = i.stakecredentials_to_js_value, Vk = i.stakecredentials_from_json, Bk = i.stakecredentials_get, Ak = i.stakecredentials_add, Hk = i.__wbg_rewardaddresses_free, qk = i.rewardaddresses_to_bytes, Yk = i.rewardaddresses_from_bytes, Xk = i.rewardaddresses_to_hex, Kk = i.rewardaddresses_from_hex, Zk = i.rewardaddresses_to_json, Jk = i.rewardaddresses_to_js_value, Gk = i.rewardaddresses_from_json, t0 = i.rewardaddresses_get, e0 = i.rewardaddresses_add, _0 = i.__wbg_withdrawals_free, r0 = i.withdrawals_to_bytes, n0 = i.withdrawals_from_bytes, o0 = i.withdrawals_to_hex, s0 = i.withdrawals_from_hex, a0 = i.withdrawals_to_json, i0 = i.withdrawals_to_js_value, c0 = i.withdrawals_from_json, d0 = i.withdrawals_insert, l0 = i.withdrawals_get, p0 = i.withdrawals_keys, u0 = i.__wbg_transactionwitnessset_free, w0 = i.transactionwitnessset_to_bytes, f0 = i.transactionwitnessset_from_bytes, g0 = i.transactionwitnessset_to_hex, b0 = i.transactionwitnessset_from_hex, h0 = i.transactionwitnessset_to_json, y0 = i.transactionwitnessset_to_js_value, m0 = i.transactionwitnessset_from_json, v0 = i.transactionwitnessset_set_vkeys, k0 = i.transactionwitnessset_vkeys, x0 = i.transactionwitnessset_set_native_scripts, j0 = i.transactionwitnessset_native_scripts, S0 = i.transactionwitnessset_set_bootstraps, E0 = i.transactionwitnessset_bootstraps, z0 = i.transactionwitnessset_set_plutus_scripts, C0 = i.transactionwitnessset_plutus_scripts, O0 = i.transactionwitnessset_set_plutus_data, L0 = i.transactionwitnessset_plutus_data, N0 = i.transactionwitnessset_set_redeemers, F0 = i.transactionwitnessset_redeemers, T0 = i.transactionwitnessset_new, P0 = i.__wbg_scriptpubkey_free, R0 = i.scriptpubkey_to_bytes, $0 = i.scriptpubkey_from_bytes, D0 = i.scriptpubkey_to_hex, I0 = i.scriptpubkey_from_hex, U0 = i.scriptpubkey_to_json, M0 = i.scriptpubkey_to_js_value, W0 = i.scriptpubkey_from_json, Q0 = i.scriptpubkey_addr_keyhash, V0 = i.scriptpubkey_new, B0 = i.__wbg_scriptall_free, A0 = i.scriptall_to_bytes, H0 = i.scriptall_from_bytes, q0 = i.scriptall_to_hex, Y0 = i.scriptall_from_hex, X0 = i.scriptall_to_json, K0 = i.scriptall_to_js_value, Z0 = i.scriptall_from_json, J0 = i.scriptall_native_scripts, G0 = i.scriptall_new, t4 = i.scriptany_to_bytes, e4 = i.scriptany_from_bytes, _4 = i.scriptany_to_hex, r4 = i.scriptany_from_hex, n4 = i.scriptany_to_js_value, o4 = i.scriptany_from_json, s4 = i.__wbg_scriptnofk_free, a4 = i.scriptnofk_to_bytes, i4 = i.scriptnofk_from_bytes, c4 = i.scriptnofk_to_hex, d4 = i.scriptnofk_from_hex, l4 = i.scriptnofk_to_json, p4 = i.scriptnofk_to_js_value, u4 = i.scriptnofk_from_json, w4 = i.scriptnofk_native_scripts, f4 = i.scriptnofk_new, g4 = i.timelockstart_to_bytes, b4 = i.timelockstart_from_bytes, h4 = i.timelockstart_to_hex, y4 = i.timelockstart_from_hex, m4 = i.timelockstart_to_js_value, v4 = i.timelockstart_from_json, k4 = i.__wbg_timelockexpiry_free, x4 = i.timelockexpiry_to_bytes, j4 = i.timelockexpiry_from_bytes, S4 = i.timelockexpiry_to_hex, E4 = i.timelockexpiry_from_hex, z4 = i.timelockexpiry_to_json, C4 = i.timelockexpiry_to_js_value, O4 = i.timelockexpiry_from_json, L4 = i.timelockexpiry_slot, N4 = i.timelockexpiry_slot_bignum, F4 = i.timelockexpiry_new, T4 = i.timelockexpiry_new_timelockexpiry, P4 = i.__wbg_scriptref_free, R4 = i.scriptref_to_bytes, $4 = i.scriptref_from_bytes, D4 = i.scriptref_to_hex, I4 = i.scriptref_from_hex, U4 = i.scriptref_to_json, M4 = i.scriptref_to_js_value, W4 = i.scriptref_from_json, Q4 = i.scriptref_new_native_script, V4 = i.scriptref_new_plutus_script, B4 = i.scriptref_is_native_script, A4 = i.scriptref_is_plutus_script, H4 = i.scriptref_native_script, q4 = i.scriptref_plutus_script, Y4 = i.__wbg_outputdatum_free, X4 = i.outputdatum_new_data_hash, K4 = i.outputdatum_new_data, Z4 = i.outputdatum_data_hash, J4 = i.outputdatum_data, G4 = i.__wbg_nativescript_free, t6 = i.nativescript_to_bytes, e6 = i.nativescript_from_bytes, _6 = i.nativescript_to_hex, r6 = i.nativescript_from_hex, n6 = i.nativescript_to_json, o6 = i.nativescript_to_js_value, s6 = i.nativescript_from_json, a6 = i.nativescript_hash, i6 = i.nativescript_new_script_pubkey, c6 = i.nativescript_new_script_all, d6 = i.nativescript_new_script_any, l6 = i.nativescript_new_script_n_of_k, p6 = i.nativescript_new_timelock_start, u6 = i.nativescript_new_timelock_expiry, w6 = i.nativescript_kind, f6 = i.nativescript_as_script_pubkey, g6 = i.nativescript_as_script_all, b6 = i.nativescript_as_script_any, h6 = i.nativescript_as_script_n_of_k, y6 = i.nativescript_as_timelock_start, m6 = i.nativescript_as_timelock_expiry, v6 = i.nativescript_get_required_signers, k6 = i.__wbg_nativescripts_free, x6 = i.nativescripts_get, j6 = i.nativescripts_add, S6 = i.__wbg_update_free, E6 = i.update_to_bytes, z6 = i.update_from_bytes, C6 = i.update_to_hex, O6 = i.update_from_hex, L6 = i.update_to_json, N6 = i.update_to_js_value, F6 = i.update_from_json, T6 = i.update_proposed_protocol_parameter_updates, P6 = i.update_epoch, R6 = i.update_new, $6 = i.__wbg_genesishashes_free, D6 = i.genesishashes_to_bytes, I6 = i.genesishashes_from_bytes, U6 = i.genesishashes_to_hex, M6 = i.genesishashes_from_hex, W6 = i.genesishashes_to_json, Q6 = i.genesishashes_to_js_value, V6 = i.genesishashes_from_json, B6 = i.genesishashes_get, A6 = i.genesishashes_add, H6 = i.__wbg_scripthashes_free, q6 = i.scripthashes_to_bytes, Y6 = i.scripthashes_from_bytes, X6 = i.scripthashes_to_hex, K6 = i.scripthashes_from_hex, Z6 = i.scripthashes_to_json, J6 = i.scripthashes_to_js_value, G6 = i.scripthashes_from_json, tx = i.scripthashes_get, ex = i.scripthashes_add, _x = i.__wbg_proposedprotocolparameterupdates_free, rx = i.proposedprotocolparameterupdates_to_bytes, nx = i.proposedprotocolparameterupdates_from_bytes, ox = i.proposedprotocolparameterupdates_to_hex, sx = i.proposedprotocolparameterupdates_from_hex, ax = i.proposedprotocolparameterupdates_to_json, ix = i.proposedprotocolparameterupdates_to_js_value, cx = i.proposedprotocolparameterupdates_from_json, dx = i.proposedprotocolparameterupdates_insert, lx = i.proposedprotocolparameterupdates_get, px = i.proposedprotocolparameterupdates_keys, ux = i.__wbg_protocolversion_free, wx = i.protocolversion_to_bytes, fx = i.protocolversion_from_bytes, gx = i.protocolversion_to_hex, bx = i.protocolversion_from_hex, hx = i.protocolversion_to_json, yx = i.protocolversion_to_js_value, mx = i.protocolversion_from_json, vx = i.protocolversion_major, kx = i.protocolversion_minor, xx = i.protocolversion_new, jx = i.__wbg_protocolparamupdate_free, Sx = i.protocolparamupdate_to_bytes, Ex = i.protocolparamupdate_from_bytes, zx = i.protocolparamupdate_to_hex, Cx = i.protocolparamupdate_from_hex, Ox = i.protocolparamupdate_to_json, Lx = i.protocolparamupdate_to_js_value, Nx = i.protocolparamupdate_from_json, Fx = i.protocolparamupdate_set_minfee_a, Tx = i.protocolparamupdate_minfee_a, Px = i.protocolparamupdate_set_minfee_b, Rx = i.protocolparamupdate_minfee_b, $x = i.protocolparamupdate_set_max_block_body_size, Dx = i.protocolparamupdate_max_block_body_size, Ix = i.protocolparamupdate_set_max_tx_size, Ux = i.protocolparamupdate_max_tx_size, Mx = i.protocolparamupdate_set_max_block_header_size, Wx = i.protocolparamupdate_max_block_header_size, Qx = i.protocolparamupdate_set_key_deposit, Vx = i.protocolparamupdate_key_deposit, Bx = i.protocolparamupdate_set_pool_deposit, Ax = i.protocolparamupdate_pool_deposit, Hx = i.protocolparamupdate_set_max_epoch, qx = i.protocolparamupdate_max_epoch, Yx = i.protocolparamupdate_set_n_opt, Xx = i.protocolparamupdate_n_opt, Kx = i.protocolparamupdate_set_pool_pledge_influence, Zx = i.protocolparamupdate_pool_pledge_influence, Jx = i.protocolparamupdate_set_expansion_rate, Gx = i.protocolparamupdate_expansion_rate, t2 = i.protocolparamupdate_set_treasury_growth_rate, e2 = i.protocolparamupdate_treasury_growth_rate, _2 = i.protocolparamupdate_d, r2 = i.protocolparamupdate_extra_entropy, n2 = i.protocolparamupdate_set_protocol_version, o2 = i.protocolparamupdate_protocol_version, s2 = i.protocolparamupdate_set_min_pool_cost, a2 = i.protocolparamupdate_min_pool_cost, i2 = i.protocolparamupdate_set_ada_per_utxo_byte, c2 = i.protocolparamupdate_ada_per_utxo_byte, d2 = i.protocolparamupdate_set_cost_models, l2 = i.protocolparamupdate_cost_models, p2 = i.protocolparamupdate_set_execution_costs, u2 = i.protocolparamupdate_execution_costs, w2 = i.protocolparamupdate_set_max_tx_ex_units, f2 = i.protocolparamupdate_max_tx_ex_units, g2 = i.protocolparamupdate_set_max_block_ex_units, b2 = i.protocolparamupdate_max_block_ex_units, h2 = i.protocolparamupdate_set_max_value_size, y2 = i.protocolparamupdate_max_value_size, m2 = i.protocolparamupdate_set_collateral_percentage, v2 = i.protocolparamupdate_collateral_percentage, k2 = i.protocolparamupdate_set_max_collateral_inputs, x2 = i.protocolparamupdate_max_collateral_inputs, j2 = i.protocolparamupdate_new, S2 = i.__wbg_transactionbodies_free, E2 = i.transactionbodies_to_bytes, z2 = i.transactionbodies_from_bytes, C2 = i.transactionbodies_to_hex, O2 = i.transactionbodies_from_hex, L2 = i.transactionbodies_to_json, N2 = i.transactionbodies_to_js_value, F2 = i.transactionbodies_from_json, T2 = i.transactionbodies_get, P2 = i.transactionbodies_add, R2 = i.__wbg_transactionwitnesssets_free, $2 = i.transactionwitnesssets_to_bytes, D2 = i.transactionwitnesssets_from_bytes, I2 = i.transactionwitnesssets_to_hex, U2 = i.transactionwitnesssets_from_hex, M2 = i.transactionwitnesssets_to_json, W2 = i.transactionwitnesssets_to_js_value, Q2 = i.transactionwitnesssets_from_json, V2 = i.transactionwitnesssets_get, B2 = i.transactionwitnesssets_add, A2 = i.__wbg_auxiliarydataset_free, H2 = i.auxiliarydataset_new, q2 = i.auxiliarydataset_len, Y2 = i.auxiliarydataset_insert, X2 = i.auxiliarydataset_get, K2 = i.auxiliarydataset_indices, Z2 = i.__wbg_block_free, J2 = i.block_to_bytes, G2 = i.block_from_bytes, tj = i.block_to_hex, ej = i.block_from_hex, _j = i.block_to_json, rj = i.block_to_js_value, nj = i.block_from_json, oj = i.block_header, sj = i.block_transaction_bodies, aj = i.block_transaction_witness_sets, ij = i.block_auxiliary_data_set, cj = i.block_invalid_transactions, dj = i.block_new, lj = i.__wbg_header_free, pj = i.header_to_bytes, uj = i.header_from_bytes, wj = i.header_to_hex, fj = i.header_from_hex, gj = i.header_to_json, bj = i.header_to_js_value, hj = i.header_from_json, yj = i.header_header_body, mj = i.header_body_signature, vj = i.header_new, kj = i.__wbg_operationalcert_free, xj = i.operationalcert_to_bytes, jj = i.operationalcert_from_bytes, Sj = i.operationalcert_to_hex, Ej = i.operationalcert_from_hex, zj = i.operationalcert_to_json, Cj = i.operationalcert_to_js_value, Oj = i.operationalcert_from_json, Lj = i.operationalcert_hot_vkey, Nj = i.operationalcert_sequence_number, Fj = i.operationalcert_kes_period, Tj = i.operationalcert_sigma, Pj = i.operationalcert_new, Rj = i.__wbg_headerbody_free, $j = i.headerbody_to_bytes, Dj = i.headerbody_from_bytes, Ij = i.headerbody_to_hex, Uj = i.headerbody_from_hex, Mj = i.headerbody_to_json, Wj = i.headerbody_to_js_value, Qj = i.headerbody_from_json, Vj = i.headerbody_block_number, Bj = i.headerbody_slot, Aj = i.headerbody_slot_bignum, Hj = i.headerbody_prev_hash, qj = i.headerbody_issuer_vkey, Yj = i.headerbody_vrf_vkey, Xj = i.headerbody_has_nonce_and_leader_vrf, Kj = i.headerbody_nonce_vrf_or_nothing, Zj = i.headerbody_leader_vrf_or_nothing, Jj = i.headerbody_has_vrf_result, Gj = i.headerbody_vrf_result_or_nothing, t3 = i.headerbody_block_body_size, e3 = i.headerbody_block_body_hash, _3 = i.headerbody_operational_cert, r3 = i.headerbody_protocol_version, n3 = i.headerbody_new, o3 = i.headerbody_new_headerbody, s3 = i.__wbg_assetname_free, a3 = i.assetname_to_bytes, i3 = i.assetname_from_bytes, c3 = i.assetname_to_hex, d3 = i.assetname_from_hex, l3 = i.assetname_to_json, p3 = i.assetname_to_js_value, u3 = i.assetname_from_json, w3 = i.assetname_new, f3 = i.assetname_name, g3 = i.__wbg_assetnames_free, b3 = i.assetnames_to_bytes, h3 = i.assetnames_from_bytes, y3 = i.assetnames_to_hex, m3 = i.assetnames_from_hex, v3 = i.assetnames_to_json, k3 = i.assetnames_to_js_value, x3 = i.assetnames_from_json, j3 = i.assetnames_new, S3 = i.assetnames_len, E3 = i.assetnames_get, z3 = i.assetnames_add, C3 = i.__wbg_assets_free, O3 = i.assets_to_bytes, L3 = i.assets_from_bytes, N3 = i.assets_to_hex, F3 = i.assets_from_hex, T3 = i.assets_to_json, P3 = i.assets_to_js_value, R3 = i.assets_from_json, $3 = i.assets_new, D3 = i.assets_insert, I3 = i.assets_get, U3 = i.assets_keys, M3 = i.__wbg_multiasset_free, W3 = i.multiasset_to_bytes, Q3 = i.multiasset_from_bytes, V3 = i.multiasset_to_hex, B3 = i.multiasset_from_hex, A3 = i.multiasset_to_json, H3 = i.multiasset_to_js_value, q3 = i.multiasset_from_json, Y3 = i.multiasset_insert, X3 = i.multiasset_get, K3 = i.multiasset_set_asset, Z3 = i.multiasset_get_asset, J3 = i.multiasset_keys, G3 = i.multiasset_sub, t5 = i.__wbg_mintsassets_free, e5 = i.__wbg_mintassets_free, _5 = i.mintassets_new_from_entry, r5 = i.mintassets_insert, n5 = i.mintassets_get, o5 = i.mintassets_keys, s5 = i.__wbg_mint_free, a5 = i.mint_to_bytes, i5 = i.mint_from_bytes, c5 = i.mint_to_hex, d5 = i.mint_from_hex, l5 = i.mint_to_json, p5 = i.mint_to_js_value, u5 = i.mint_from_json, w5 = i.mint_new_from_entry, f5 = i.mint_insert, g5 = i.mint_get, b5 = i.mint_get_all, h5 = i.mint_keys, y5 = i.mint_as_positive_multiasset, m5 = i.mint_as_negative_multiasset, v5 = i.__wbg_networkid_free, k5 = i.networkid_to_bytes, x5 = i.networkid_from_bytes, j5 = i.networkid_to_hex, S5 = i.networkid_from_hex, E5 = i.networkid_to_json, z5 = i.networkid_to_js_value, C5 = i.networkid_from_json, O5 = i.networkid_testnet, L5 = i.networkid_mainnet, N5 = i.networkid_kind, F5 = i.__wbg_unitinterval_free, T5 = i.transactionoutputs_len, P5 = i.transactioninputs_len, R5 = i.ed25519keyhashes_len, $5 = i.relays_len, D5 = i.stakecredentials_len, I5 = i.rewardaddresses_len, U5 = i.withdrawals_len, M5 = i.nativescripts_len, W5 = i.genesishashes_len, Q5 = i.scripthashes_len, V5 = i.proposedprotocolparameterupdates_len, B5 = i.scriptnofk_n, A5 = i.transactionbodies_len, H5 = i.transactionwitnesssets_len, q5 = i.mirtostakecredentials_len, Y5 = i.certificates_len, X5 = i.assets_len, K5 = i.multiasset_len, Z5 = i.mintassets_len, J5 = i.mint_len, G5 = i.scriptany_native_scripts, tS = i.unitinterval_numerator, eS = i.timelockstart_slot_bignum, _S = i.timelockstart_slot, rS = i.transactionbody_multiassets, nS = i.stakeregistration_stake_credential, oS = i.url_url, sS = i.dnsrecordsrv_record, aS = i.url_to_js_value, iS = i.dnsrecordsrv_to_js_value, cS = i.__wbg_url_free, dS = i.__wbg_dnsrecordsrv_free, lS = i.__wbg_scriptany_free, pS = i.stakedelegation_pool_keyhash, uS = i.timelockstart_new, wS = i.__wbg_timelockstart_free, fS = i.withdrawals_new, gS = i.proposedprotocolparameterupdates_new, bS = i.mirtostakecredentials_new, hS = i.timelockstart_new_timelockstart, yS = i.transactioninputs_new, mS = i.stakeregistration_new, vS = i.relays_new, kS = i.singlehostname_dns_name, xS = i.stakecredentials_new, jS = i.rewardaddresses_new, SS = i.scriptany_new, ES = i.transactionoutputs_new, zS = i.genesishashes_new, CS = i.scripthashes_new, OS = i.transactionbodies_new, LS = i.transactionwitnesssets_new, NS = i.nativescripts_new, FS = i.multiasset_new, TS = i.mintassets_new, PS = i.mint_new, RS = i.__wbg_stakeregistration_free, $S = i.stakeregistration_to_json, DS = i.scriptany_to_json, IS = i.timelockstart_to_json, US = i.url_to_json, MS = i.dnsrecordsrv_to_json, WS = i.encrypt_with_password, QS = i.decrypt_with_password, VS = i.__wbg_transactionoutputbuilder_free, BS = i.transactionoutputbuilder_new, AS = i.transactionoutputbuilder_with_address, HS = i.transactionoutputbuilder_with_data_hash, qS = i.transactionoutputbuilder_with_plutus_data, YS = i.transactionoutputbuilder_with_script_ref, XS = i.transactionoutputbuilder_next, KS = i.__wbg_transactionoutputamountbuilder_free, ZS = i.transactionoutputamountbuilder_with_value, JS = i.transactionoutputamountbuilder_with_coin, GS = i.transactionoutputamountbuilder_with_coin_and_asset, tE = i.transactionoutputamountbuilder_with_asset_and_min_required_coin, eE = i.transactionoutputamountbuilder_with_asset_and_min_required_coin_by_utxo_cost, _E = i.transactionoutputamountbuilder_build, rE = i.__wbg_transactionunspentoutput_free, nE = i.transactionunspentoutput_to_bytes, oE = i.transactionunspentoutput_from_bytes, sE = i.transactionunspentoutput_to_hex, aE = i.transactionunspentoutput_from_hex, iE = i.transactionunspentoutput_to_json, cE = i.transactionunspentoutput_to_js_value, dE = i.transactionunspentoutput_from_json, lE = i.transactionunspentoutput_new, pE = i.transactionunspentoutput_input, uE = i.transactionunspentoutput_output, wE = i.__wbg_transactionunspentoutputs_free, fE = i.transactionunspentoutputs_to_json, gE = i.transactionunspentoutputs_to_js_value, bE = i.transactionunspentoutputs_from_json, hE = i.transactionunspentoutputs_new, yE = i.transactionunspentoutputs_len, mE = i.transactionunspentoutputs_get, vE = i.transactionunspentoutputs_add, kE = i.__wbg_bignum_free, xE = i.bignum_to_bytes, jE = i.bignum_from_bytes, SE = i.bignum_to_hex, EE = i.bignum_from_hex, zE = i.bignum_to_json, CE = i.bignum_to_js_value, OE = i.bignum_from_json, LE = i.bignum_from_str, NE = i.bignum_to_str, FE = i.bignum_zero, TE = i.bignum_one, PE = i.bignum_is_zero, RE = i.bignum_div_floor, $E = i.bignum_checked_mul, DE = i.bignum_checked_add, IE = i.bignum_checked_sub, UE = i.bignum_clamped_sub, ME = i.bignum_compare, WE = i.bignum_less_than, QE = i.bignum_max_value, VE = i.bignum_max, BE = i.__wbg_value_free, AE = i.value_to_bytes, HE = i.value_from_bytes, qE = i.value_to_hex, YE = i.value_from_hex, XE = i.value_to_json, KE = i.value_to_js_value, ZE = i.value_from_json, JE = i.value_new, GE = i.value_new_from_assets, t8 = i.value_new_with_assets, e8 = i.value_zero, _8 = i.value_is_zero, r8 = i.value_coin, n8 = i.value_set_coin, o8 = i.value_multiasset, s8 = i.value_set_multiasset, a8 = i.value_checked_add, i8 = i.value_checked_sub, c8 = i.value_clamped_sub, d8 = i.value_compare, l8 = i.__wbg_int_free, p8 = i.int_to_bytes, u8 = i.int_from_bytes, w8 = i.int_to_hex, f8 = i.int_from_hex, g8 = i.int_to_json, b8 = i.int_to_js_value, h8 = i.int_from_json, y8 = i.int_new, m8 = i.int_new_negative, v8 = i.int_new_i32, k8 = i.int_is_positive, x8 = i.int_as_positive, j8 = i.int_as_negative, S8 = i.int_as_i32, E8 = i.int_as_i32_or_fail, z8 = i.int_to_str, C8 = i.int_from_str, O8 = i.__wbg_bigint_free, L8 = i.bigint_to_bytes, N8 = i.bigint_from_bytes, F8 = i.bigint_to_hex, T8 = i.bigint_from_hex, P8 = i.bigint_to_json, R8 = i.bigint_to_js_value, $8 = i.bigint_from_json, D8 = i.bigint_is_zero, I8 = i.bigint_as_u64, U8 = i.bigint_as_int, M8 = i.bigint_from_str, W8 = i.bigint_to_str, Q8 = i.bigint_add, V8 = i.bigint_mul, B8 = i.bigint_one, A8 = i.bigint_increment, H8 = i.bigint_div_ceil, q8 = i.make_daedalus_bootstrap_witness, Y8 = i.make_icarus_bootstrap_witness, X8 = i.make_vkey_witness, K8 = i.hash_auxiliary_data, Z8 = i.hash_transaction, J8 = i.hash_plutus_data, G8 = i.hash_script_data, tz = i.get_implicit_input, ez = i.get_deposit, _z = i.min_ada_for_output, rz = i.min_ada_required, nz = i.encode_json_str_to_native_script, oz = i.int_as_i32_or_nothing, sz = i.__wbg_bip32privatekey_free, az = i.bip32privatekey_derive, iz = i.bip32privatekey_from_128_xprv, cz = i.bip32privatekey_to_128_xprv, dz = i.bip32privatekey_generate_ed25519_bip32, lz = i.bip32privatekey_to_raw_key, pz = i.bip32privatekey_to_public, uz = i.bip32privatekey_from_bytes, wz = i.bip32privatekey_as_bytes, fz = i.bip32privatekey_from_bech32, gz = i.bip32privatekey_to_bech32, bz = i.bip32privatekey_from_bip39_entropy, hz = i.bip32privatekey_chaincode, yz = i.bip32privatekey_to_hex, mz = i.bip32privatekey_from_hex, vz = i.__wbg_bip32publickey_free, kz = i.bip32publickey_derive, xz = i.bip32publickey_to_raw_key, jz = i.bip32publickey_from_bytes, Sz = i.bip32publickey_as_bytes, Ez = i.bip32publickey_from_bech32, zz = i.bip32publickey_to_bech32, Cz = i.bip32publickey_chaincode, Oz = i.bip32publickey_to_hex, Lz = i.bip32publickey_from_hex, Nz = i.__wbg_privatekey_free, Fz = i.privatekey_to_public, Tz = i.privatekey_generate_ed25519, Pz = i.privatekey_generate_ed25519extended, Rz = i.privatekey_from_bech32, $z = i.privatekey_to_bech32, Dz = i.privatekey_as_bytes, Iz = i.privatekey_from_extended_bytes, Uz = i.privatekey_from_normal_bytes, Mz = i.privatekey_sign, Wz = i.privatekey_to_hex, Qz = i.privatekey_from_hex, Vz = i.__wbg_publickey_free, Bz = i.publickey_from_bech32, Az = i.publickey_to_bech32, Hz = i.publickey_from_bytes, qz = i.publickey_verify, Yz = i.publickey_hash, Xz = i.publickey_to_hex, Kz = i.publickey_from_hex, Zz = i.__wbg_vkey_free, Jz = i.vkey_to_bytes, Gz = i.vkey_from_bytes, t9 = i.vkey_to_hex, e9 = i.vkey_from_hex, _9 = i.vkey_to_json, r9 = i.vkey_to_js_value, n9 = i.vkey_from_json, o9 = i.vkey_new, s9 = i.vkey_public_key, a9 = i.__wbg_vkeys_free, i9 = i.vkeys_get, c9 = i.vkeys_add, d9 = i.__wbg_vkeywitness_free, l9 = i.vkeywitness_to_bytes, p9 = i.vkeywitness_from_bytes, u9 = i.vkeywitness_to_hex, w9 = i.vkeywitness_from_hex, f9 = i.vkeywitness_to_json, g9 = i.vkeywitness_to_js_value, b9 = i.vkeywitness_from_json, h9 = i.vkeywitness_new, y9 = i.__wbg_vkeywitnesses_free, m9 = i.vkeywitnesses_to_bytes, v9 = i.vkeywitnesses_from_bytes, k9 = i.vkeywitnesses_to_hex, x9 = i.vkeywitnesses_from_hex, j9 = i.vkeywitnesses_to_json, S9 = i.vkeywitnesses_to_js_value, E9 = i.vkeywitnesses_from_json, z9 = i.vkeywitnesses_get, C9 = i.vkeywitnesses_add, O9 = i.__wbg_bootstrapwitness_free, L9 = i.bootstrapwitness_to_bytes, N9 = i.bootstrapwitness_from_bytes, F9 = i.bootstrapwitness_to_hex, T9 = i.bootstrapwitness_from_hex, P9 = i.bootstrapwitness_to_json, R9 = i.bootstrapwitness_to_js_value, $9 = i.bootstrapwitness_from_json, D9 = i.bootstrapwitness_vkey, I9 = i.bootstrapwitness_signature, U9 = i.bootstrapwitness_chain_code, M9 = i.bootstrapwitness_attributes, W9 = i.bootstrapwitness_new, Q9 = i.__wbg_bootstrapwitnesses_free, V9 = i.bootstrapwitnesses_new, B9 = i.bootstrapwitnesses_len, A9 = i.bootstrapwitnesses_get, H9 = i.bootstrapwitnesses_add, q9 = i.__wbg_publickeys_free, Y9 = i.publickeys_new, X9 = i.publickeys_get, K9 = i.publickeys_add, Z9 = i.__wbg_ed25519signature_free, J9 = i.ed25519signature_to_bytes, G9 = i.ed25519signature_to_bech32, tC = i.ed25519signature_to_hex, eC = i.ed25519signature_from_bech32, _C = i.ed25519signature_from_hex, rC = i.ed25519signature_from_bytes, nC = i.__wbg_legacydaedalusprivatekey_free, oC = i.legacydaedalusprivatekey_from_bytes, sC = i.legacydaedalusprivatekey_as_bytes, aC = i.legacydaedalusprivatekey_chaincode, iC = i.__wbg_ed25519keyhash_free, cC = i.ed25519keyhash_from_bytes, dC = i.ed25519keyhash_to_bytes, lC = i.ed25519keyhash_to_bech32, pC = i.ed25519keyhash_from_bech32, uC = i.ed25519keyhash_to_hex, wC = i.ed25519keyhash_from_hex, fC = i.scripthash_from_bytes, gC = i.scripthash_from_bech32, bC = i.scripthash_from_hex, hC = i.transactionhash_from_bytes, yC = i.transactionhash_from_bech32, mC = i.transactionhash_from_hex, vC = i.genesisdelegatehash_from_bytes, kC = i.genesisdelegatehash_from_bech32, xC = i.genesisdelegatehash_from_hex, jC = i.genesishash_from_bytes, SC = i.genesishash_from_bech32, EC = i.genesishash_from_hex, zC = i.__wbg_auxiliarydatahash_free, CC = i.auxiliarydatahash_from_bytes, OC = i.auxiliarydatahash_to_bytes, LC = i.auxiliarydatahash_to_bech32, NC = i.auxiliarydatahash_from_bech32, FC = i.auxiliarydatahash_to_hex, TC = i.auxiliarydatahash_from_hex, PC = i.poolmetadatahash_from_bytes, RC = i.poolmetadatahash_from_bech32, $C = i.poolmetadatahash_from_hex, DC = i.vrfkeyhash_from_bytes, IC = i.vrfkeyhash_from_bech32, UC = i.vrfkeyhash_from_hex, MC = i.blockhash_from_bytes, WC = i.blockhash_from_bech32, QC = i.blockhash_from_hex, VC = i.datahash_from_bytes, BC = i.datahash_from_bech32, AC = i.datahash_from_hex, HC = i.scriptdatahash_from_bytes, qC = i.scriptdatahash_from_bech32, YC = i.scriptdatahash_from_hex, XC = i.vrfvkey_from_bytes, KC = i.vrfvkey_from_bech32, ZC = i.vrfvkey_from_hex, JC = i.kesvkey_from_bytes, GC = i.kesvkey_from_bech32, tO = i.kesvkey_from_hex, eO = i.__wbg_kessignature_free, _O = i.kessignature_to_bytes, rO = i.kessignature_from_bytes, nO = i.__wbg_nonce_free, oO = i.nonce_to_bytes, sO = i.nonce_from_bytes, aO = i.nonce_to_hex, iO = i.nonce_from_hex, cO = i.nonce_to_json, dO = i.nonce_to_js_value, lO = i.nonce_from_json, pO = i.nonce_new_identity, uO = i.nonce_new_from_hash, wO = i.nonce_get_hash, fO = i.__wbg_vrfcert_free, gO = i.vrfcert_to_bytes, bO = i.vrfcert_from_bytes, hO = i.vrfcert_to_hex, yO = i.vrfcert_from_hex, mO = i.vrfcert_to_json, vO = i.vrfcert_to_js_value, kO = i.vrfcert_from_json, xO = i.vrfcert_proof, jO = i.vrfcert_new, SO = i.vkeywitnesses_len, EO = i.vkeys_len, zO = i.publickeys_size, CO = i.vrfcert_output, OO = i.scripthash_to_hex, LO = i.genesisdelegatehash_to_hex, NO = i.genesishash_to_hex, FO = i.transactionhash_to_hex, TO = i.poolmetadatahash_to_hex, PO = i.vrfkeyhash_to_hex, RO = i.blockhash_to_hex, $O = i.datahash_to_hex, DO = i.scriptdatahash_to_hex, IO = i.vrfvkey_to_hex, UO = i.kesvkey_to_hex, MO = i.vkeywitness_vkey, WO = i.vkeywitness_signature, QO = i.scripthash_to_bech32, VO = i.genesisdelegatehash_to_bech32, BO = i.genesishash_to_bech32, AO = i.transactionhash_to_bech32, HO = i.poolmetadatahash_to_bech32, qO = i.vrfkeyhash_to_bech32, YO = i.blockhash_to_bech32, XO = i.datahash_to_bech32, KO = i.scriptdatahash_to_bech32, ZO = i.vrfvkey_to_bech32, JO = i.kesvkey_to_bech32, GO = i.scripthash_to_bytes, t7 = i.transactionhash_to_bytes, e7 = i.genesisdelegatehash_to_bytes, _7 = i.genesishash_to_bytes, r7 = i.publickey_as_bytes, n7 = i.poolmetadatahash_to_bytes, o7 = i.vrfkeyhash_to_bytes, s7 = i.blockhash_to_bytes, a7 = i.datahash_to_bytes, i7 = i.scriptdatahash_to_bytes, c7 = i.vrfvkey_to_bytes, d7 = i.kesvkey_to_bytes, l7 = i.vkeywitnesses_new, p7 = i.vkeys_new, u7 = i.__wbg_scripthash_free, w7 = i.__wbg_genesisdelegatehash_free, f7 = i.__wbg_genesishash_free, g7 = i.__wbg_kesvkey_free, b7 = i.__wbg_poolmetadatahash_free, h7 = i.__wbg_transactionhash_free, y7 = i.__wbg_vrfkeyhash_free, m7 = i.__wbg_blockhash_free, v7 = i.__wbg_scriptdatahash_free, k7 = i.__wbg_datahash_free, x7 = i.__wbg_vrfvkey_free, j7 = i.__wbg_inputwithscriptwitness_free, S7 = i.inputwithscriptwitness_new_with_native_script_witness, E7 = i.inputwithscriptwitness_new_with_plutus_witness, z7 = i.inputwithscriptwitness_input, C7 = i.__wbg_inputswithscriptwitness_free, O7 = i.inputswithscriptwitness_new, L7 = i.inputswithscriptwitness_add, N7 = i.inputswithscriptwitness_get, F7 = i.inputswithscriptwitness_len, T7 = i.__wbg_plutusscriptsource_free, P7 = i.plutusscriptsource_new, R7 = i.plutusscriptsource_new_ref_input, $7 = i.plutusscriptsource_new_ref_input_with_lang_ver, D7 = i.__wbg_datumsource_free, I7 = i.datumsource_new, U7 = i.datumsource_new_ref_input, M7 = i.__wbg_plutuswitness_free, W7 = i.plutuswitness_new, Q7 = i.plutuswitness_new_with_ref, V7 = i.plutuswitness_new_without_datum, B7 = i.plutuswitness_new_with_ref_without_datum, A7 = i.plutuswitness_script, H7 = i.plutuswitness_datum, q7 = i.plutuswitness_redeemer, Y7 = i.__wbg_plutuswitnesses_free, X7 = i.plutuswitnesses_get, K7 = i.plutuswitnesses_add, Z7 = i.__wbg_txinputsbuilder_free, J7 = i.txinputsbuilder_new, G7 = i.txinputsbuilder_add_key_input, tL = i.txinputsbuilder_add_script_input, eL = i.txinputsbuilder_add_native_script_input, _L = i.txinputsbuilder_add_plutus_script_input, rL = i.txinputsbuilder_add_bootstrap_input, nL = i.txinputsbuilder_add_input, oL = i.txinputsbuilder_count_missing_input_scripts, sL = i.txinputsbuilder_add_required_native_input_scripts, aL = i.txinputsbuilder_add_required_plutus_input_scripts, iL = i.txinputsbuilder_add_required_script_input_witnesses, cL = i.txinputsbuilder_get_ref_inputs, dL = i.txinputsbuilder_get_native_input_scripts, lL = i.txinputsbuilder_get_plutus_input_scripts, pL = i.txinputsbuilder_len, uL = i.txinputsbuilder_add_required_signer, wL = i.txinputsbuilder_add_required_signers, fL = i.txinputsbuilder_total_value, gL = i.txinputsbuilder_inputs, bL = i.txinputsbuilder_inputs_option, hL = i.__wbg_txbuilderconstants_free, yL = i.txbuilderconstants_plutus_default_cost_models, mL = i.txbuilderconstants_plutus_alonzo_cost_models, vL = i.plutuswitnesses_len, kL = i.txbuilderconstants_plutus_vasil_cost_models, xL = i.plutuswitnesses_new, jL = i.__wbg_metadatamap_free, SL = i.metadatamap_to_bytes, EL = i.metadatamap_from_bytes, zL = i.metadatamap_to_hex, CL = i.metadatamap_from_hex, OL = i.metadatamap_insert, LL = i.metadatamap_insert_str, NL = i.metadatamap_insert_i32, FL = i.metadatamap_get, TL = i.metadatamap_get_str, PL = i.metadatamap_get_i32, RL = i.metadatamap_has, $L = i.metadatamap_keys, DL = i.__wbg_metadatalist_free, IL = i.metadatalist_to_bytes, UL = i.metadatalist_from_bytes, ML = i.metadatalist_to_hex, WL = i.metadatalist_from_hex, QL = i.metadatalist_get, VL = i.metadatalist_add, BL = i.__wbg_transactionmetadatum_free, AL = i.transactionmetadatum_to_bytes, HL = i.transactionmetadatum_from_bytes, qL = i.transactionmetadatum_to_hex, YL = i.transactionmetadatum_from_hex, XL = i.transactionmetadatum_new_map, KL = i.transactionmetadatum_new_list, ZL = i.transactionmetadatum_new_int, JL = i.transactionmetadatum_new_bytes, GL = i.transactionmetadatum_new_text, tN = i.transactionmetadatum_as_map, eN = i.transactionmetadatum_as_list, _N = i.transactionmetadatum_as_int, rN = i.transactionmetadatum_as_bytes, nN = i.transactionmetadatum_as_text, oN = i.__wbg_transactionmetadatumlabels_free, sN = i.transactionmetadatumlabels_to_bytes, aN = i.transactionmetadatumlabels_from_bytes, iN = i.transactionmetadatumlabels_to_hex, cN = i.transactionmetadatumlabels_from_hex, dN = i.transactionmetadatumlabels_get, lN = i.transactionmetadatumlabels_add, pN = i.__wbg_generaltransactionmetadata_free, uN = i.generaltransactionmetadata_to_bytes, wN = i.generaltransactionmetadata_from_bytes, fN = i.generaltransactionmetadata_to_hex, gN = i.generaltransactionmetadata_from_hex, bN = i.generaltransactionmetadata_to_json, hN = i.generaltransactionmetadata_to_js_value, yN = i.generaltransactionmetadata_from_json, mN = i.generaltransactionmetadata_new, vN = i.generaltransactionmetadata_len, kN = i.generaltransactionmetadata_insert, xN = i.generaltransactionmetadata_get, jN = i.generaltransactionmetadata_keys, SN = i.__wbg_auxiliarydata_free, EN = i.auxiliarydata_to_bytes, zN = i.auxiliarydata_from_bytes, CN = i.auxiliarydata_to_hex, ON = i.auxiliarydata_from_hex, LN = i.auxiliarydata_to_json, NN = i.auxiliarydata_to_js_value, FN = i.auxiliarydata_from_json, TN = i.auxiliarydata_new, PN = i.auxiliarydata_metadata, RN = i.auxiliarydata_set_metadata, $N = i.auxiliarydata_native_scripts, DN = i.auxiliarydata_set_native_scripts, IN = i.auxiliarydata_plutus_scripts, UN = i.auxiliarydata_set_plutus_scripts, MN = i.auxiliarydata_prefer_alonzo_format, WN = i.auxiliarydata_set_prefer_alonzo_format, QN = i.encode_arbitrary_bytes_as_metadatum, VN = i.decode_arbitrary_bytes_from_metadatum, BN = i.encode_json_str_to_metadatum, AN = i.decode_metadatum_to_json_str, HN = i.__wbg_plutusscript_free, qN = i.plutusscript_to_bytes, YN = i.plutusscript_from_bytes, XN = i.plutusscript_to_hex, KN = i.plutusscript_from_hex, ZN = i.plutusscript_new, JN = i.plutusscript_new_v2, GN = i.plutusscript_new_with_version, tF = i.plutusscript_bytes, eF = i.plutusscript_from_bytes_v2, _F = i.plutusscript_from_bytes_with_version, rF = i.plutusscript_from_hex_with_version, nF = i.plutusscript_hash, oF = i.plutusscript_language_version, sF = i.__wbg_plutusscripts_free, aF = i.plutusscripts_to_bytes, iF = i.plutusscripts_from_bytes, cF = i.plutusscripts_to_hex, dF = i.plutusscripts_from_hex, lF = i.plutusscripts_to_json, pF = i.plutusscripts_to_js_value, uF = i.plutusscripts_from_json, wF = i.plutusscripts_new, fF = i.plutusscripts_get, gF = i.plutusscripts_add, bF = i.__wbg_constrplutusdata_free, hF = i.constrplutusdata_to_bytes, yF = i.constrplutusdata_from_bytes, mF = i.constrplutusdata_to_hex, vF = i.constrplutusdata_from_hex, kF = i.constrplutusdata_alternative, xF = i.constrplutusdata_data, jF = i.constrplutusdata_new, SF = i.__wbg_costmodel_free, EF = i.costmodel_to_bytes, zF = i.costmodel_from_bytes, CF = i.costmodel_to_hex, OF = i.costmodel_from_hex, LF = i.costmodel_to_json, NF = i.costmodel_to_js_value, FF = i.costmodel_from_json, TF = i.costmodel_new, PF = i.costmodel_set, RF = i.costmodel_get, $F = i.__wbg_costmdls_free, DF = i.costmdls_to_bytes, IF = i.costmdls_from_bytes, UF = i.costmdls_to_hex, MF = i.costmdls_from_hex, WF = i.costmdls_to_json, QF = i.costmdls_to_js_value, VF = i.costmdls_from_json, BF = i.costmdls_new, AF = i.costmdls_len, HF = i.costmdls_insert, qF = i.costmdls_get, YF = i.costmdls_keys, XF = i.costmdls_retain_language_versions, KF = i.__wbg_exunitprices_free, ZF = i.exunitprices_to_bytes, JF = i.exunitprices_from_bytes, GF = i.exunitprices_to_hex, tT = i.exunitprices_from_hex, eT = i.exunitprices_to_json, _T = i.exunitprices_to_js_value, rT = i.exunitprices_from_json, nT = i.exunitprices_mem_price, oT = i.exunitprices_step_price, sT = i.exunitprices_new, aT = i.__wbg_exunits_free, iT = i.exunits_to_bytes, cT = i.exunits_from_bytes, dT = i.exunits_to_hex, lT = i.exunits_from_hex, pT = i.exunits_to_json, uT = i.exunits_to_js_value, wT = i.exunits_from_json, fT = i.exunits_mem, gT = i.exunits_steps, bT = i.exunits_new, hT = i.__wbg_language_free, yT = i.language_to_bytes, mT = i.language_from_bytes, vT = i.language_to_hex, kT = i.language_from_hex, xT = i.language_to_json, jT = i.language_to_js_value, ST = i.language_from_json, ET = i.language_new_plutus_v1, zT = i.language_new_plutus_v2, CT = i.language_kind, OT = i.__wbg_languages_free, LT = i.languages_new, NT = i.languages_get, FT = i.languages_add, TT = i.languages_list, PT = i.__wbg_plutusmap_free, RT = i.plutusmap_to_bytes, $T = i.plutusmap_from_bytes, DT = i.plutusmap_to_hex, IT = i.plutusmap_from_hex, UT = i.plutusmap_insert, MT = i.plutusmap_get, WT = i.plutusmap_keys, QT = i.__wbg_plutusdata_free, VT = i.plutusdata_to_bytes, BT = i.plutusdata_from_bytes, AT = i.plutusdata_to_hex, HT = i.plutusdata_from_hex, qT = i.plutusdata_new_constr_plutus_data, YT = i.plutusdata_new_empty_constr_plutus_data, XT = i.plutusdata_new_single_value_constr_plutus_data, KT = i.plutusdata_new_map, ZT = i.plutusdata_new_list, JT = i.plutusdata_new_integer, GT = i.plutusdata_new_bytes, tP = i.plutusdata_kind, eP = i.plutusdata_as_constr_plutus_data, _P = i.plutusdata_as_map, rP = i.plutusdata_as_list, nP = i.plutusdata_as_integer, oP = i.plutusdata_as_bytes, sP = i.plutusdata_from_address, aP = i.__wbg_plutuslist_free, iP = i.plutuslist_to_bytes, cP = i.plutuslist_from_bytes, dP = i.plutuslist_to_hex, lP = i.plutuslist_from_hex, pP = i.plutuslist_new, uP = i.plutuslist_get, wP = i.plutuslist_add, fP = i.__wbg_redeemer_free, gP = i.redeemer_to_bytes, bP = i.redeemer_from_bytes, hP = i.redeemer_to_hex, yP = i.redeemer_from_hex, mP = i.redeemer_to_json, vP = i.redeemer_to_js_value, kP = i.redeemer_from_json, xP = i.redeemer_tag, jP = i.redeemer_index, SP = i.redeemer_data, EP = i.redeemer_ex_units, zP = i.redeemer_new, CP = i.__wbg_redeemertag_free, OP = i.redeemertag_to_bytes, LP = i.redeemertag_from_bytes, NP = i.redeemertag_to_hex, FP = i.redeemertag_from_hex, TP = i.redeemertag_to_json, PP = i.redeemertag_to_js_value, RP = i.redeemertag_from_json, $P = i.redeemertag_new_spend, DP = i.redeemertag_new_mint, IP = i.redeemertag_new_cert, UP = i.redeemertag_new_reward, MP = i.redeemertag_kind, WP = i.__wbg_redeemers_free, QP = i.redeemers_to_bytes, VP = i.redeemers_from_bytes, BP = i.redeemers_to_hex, AP = i.redeemers_from_hex, HP = i.redeemers_to_json, qP = i.redeemers_to_js_value, YP = i.redeemers_from_json, XP = i.redeemers_get, KP = i.redeemers_add, ZP = i.redeemers_total_ex_units, JP = i.__wbg_strings_free, GP = i.strings_get, tR = i.strings_add, eR = i.encode_json_str_to_plutus_datum, _R = i.decode_plutus_datum_to_json_str, rR = i.transactionmetadatumlabels_len, nR = i.metadatamap_len, oR = i.plutusscripts_len, sR = i.metadatalist_len, aR = i.costmodel_len, iR = i.languages_len, cR = i.plutusmap_len, dR = i.transactionmetadatum_kind, lR = i.plutuslist_len, pR = i.redeemers_len, uR = i.strings_len, wR = i.plutusdata_from_json, fR = i.plutusdata_to_json, gR = i.plutusmap_new, bR = i.metadatamap_new, hR = i.transactionmetadatumlabels_new, yR = i.strings_new, mR = i.metadatalist_new, vR = i.redeemers_new, kR = i.__wbg_fixedtransaction_free, xR = i.fixedtransaction_to_bytes, jR = i.fixedtransaction_from_bytes, SR = i.fixedtransaction_to_hex, ER = i.fixedtransaction_from_hex, zR = i.fixedtransaction_new, CR = i.fixedtransaction_new_with_auxiliary, OR = i.fixedtransaction_body, LR = i.fixedtransaction_raw_body, NR = i.fixedtransaction_set_body, FR = i.fixedtransaction_set_witness_set, TR = i.fixedtransaction_witness_set, PR = i.fixedtransaction_raw_witness_set, RR = i.fixedtransaction_set_is_valid, $R = i.fixedtransaction_is_valid, DR = i.fixedtransaction_set_auxiliary_data, IR = i.fixedtransaction_auxiliary_data, UR = i.fixedtransaction_raw_auxiliary_data, MR = i.__wbg_transactionbuilderconfig_free, WR = i.__wbg_transactionbuilderconfigbuilder_free, QR = i.transactionbuilderconfigbuilder_new, VR = i.transactionbuilderconfigbuilder_fee_algo, BR = i.transactionbuilderconfigbuilder_coins_per_utxo_word, AR = i.transactionbuilderconfigbuilder_coins_per_utxo_byte, HR = i.transactionbuilderconfigbuilder_ex_unit_prices, qR = i.transactionbuilderconfigbuilder_pool_deposit, YR = i.transactionbuilderconfigbuilder_key_deposit, XR = i.transactionbuilderconfigbuilder_max_value_size, KR = i.transactionbuilderconfigbuilder_max_tx_size, ZR = i.transactionbuilderconfigbuilder_prefer_pure_change, JR = i.transactionbuilderconfigbuilder_build, GR = i.__wbg_transactionbuilder_free, t$ = i.transactionbuilder_add_inputs_from, e$ = i.transactionbuilder_set_inputs, _$ = i.transactionbuilder_set_collateral, r$ = i.transactionbuilder_set_collateral_return, n$ = i.transactionbuilder_set_collateral_return_and_total, o$ = i.transactionbuilder_set_total_collateral, s$ = i.transactionbuilder_set_total_collateral_and_return, a$ = i.transactionbuilder_add_reference_input, i$ = i.transactionbuilder_add_key_input, c$ = i.transactionbuilder_add_script_input, d$ = i.transactionbuilder_add_native_script_input, l$ = i.transactionbuilder_add_plutus_script_input, p$ = i.transactionbuilder_add_bootstrap_input, u$ = i.transactionbuilder_add_input, w$ = i.transactionbuilder_count_missing_input_scripts, f$ = i.transactionbuilder_add_required_native_input_scripts, g$ = i.transactionbuilder_add_required_plutus_input_scripts, b$ = i.transactionbuilder_get_native_input_scripts, h$ = i.transactionbuilder_get_plutus_input_scripts, y$ = i.transactionbuilder_fee_for_input, m$ = i.transactionbuilder_add_output, v$ = i.transactionbuilder_fee_for_output, k$ = i.transactionbuilder_set_fee, x$ = i.transactionbuilder_set_ttl, j$ = i.transactionbuilder_set_ttl_bignum, S$ = i.transactionbuilder_set_validity_start_interval, E$ = i.transactionbuilder_set_validity_start_interval_bignum, z$ = i.transactionbuilder_set_certs, C$ = i.transactionbuilder_set_withdrawals, O$ = i.transactionbuilder_get_auxiliary_data, L$ = i.transactionbuilder_set_auxiliary_data, N$ = i.transactionbuilder_set_metadata, F$ = i.transactionbuilder_add_metadatum, T$ = i.transactionbuilder_add_json_metadatum, P$ = i.transactionbuilder_add_json_metadatum_with_schema, R$ = i.transactionbuilder_set_mint_builder, $$ = i.transactionbuilder_get_mint_builder, D$ = i.transactionbuilder_set_mint, I$ = i.transactionbuilder_get_mint, U$ = i.transactionbuilder_get_mint_scripts, M$ = i.transactionbuilder_set_mint_asset, W$ = i.transactionbuilder_add_mint_asset, Q$ = i.transactionbuilder_add_mint_asset_and_output, V$ = i.transactionbuilder_add_mint_asset_and_output_min_required_coin, B$ = i.transactionbuilder_new, A$ = i.transactionbuilder_get_reference_inputs, H$ = i.transactionbuilder_get_explicit_input, q$ = i.transactionbuilder_get_implicit_input, Y$ = i.transactionbuilder_get_total_input, X$ = i.transactionbuilder_get_total_output, K$ = i.transactionbuilder_get_explicit_output, Z$ = i.transactionbuilder_get_deposit, J$ = i.transactionbuilder_get_fee_if_set, G$ = i.transactionbuilder_add_change_if_needed, tD = i.transactionbuilder_add_change_if_needed_with_datum, eD = i.transactionbuilder_calc_script_data_hash, _D = i.transactionbuilder_set_script_data_hash, rD = i.transactionbuilder_remove_script_data_hash, nD = i.transactionbuilder_add_required_signer, oD = i.transactionbuilder_full_size, sD = i.transactionbuilder_output_sizes, aD = i.transactionbuilder_build, iD = i.transactionbuilder_build_tx, cD = i.transactionbuilder_build_tx_unsafe, dD = i.transactionbuilder_min_fee, lD = i.__wbg_linearfee_free, pD = i.linearfee_constant, uD = i.linearfee_coefficient, wD = i.linearfee_new, fD = i.min_fee, gD = i.calculate_ex_units_ceil_cost, bD = i.min_script_fee, hD = i.__wbg_transactionbatchlist_free, yD = i.transactionbatchlist_get, mD = i.__wbg_transactionbatch_free, vD = i.transactionbatch_len, kD = i.transactionbatch_get, xD = i.create_send_all, jD = i.transactionbatchlist_len, SD = i.__wbg_networkinfo_free, ED = i.networkinfo_new, zD = i.networkinfo_network_id, CD = i.networkinfo_protocol_magic, OD = i.networkinfo_testnet_preview, LD = i.networkinfo_testnet_preprod, ND = i.networkinfo_testnet, FD = i.networkinfo_mainnet, TD = i.__wbg_stakecredential_free, PD = i.stakecredential_from_keyhash, RD = i.stakecredential_from_scripthash, $D = i.stakecredential_to_keyhash, DD = i.stakecredential_to_scripthash, ID = i.stakecredential_kind, UD = i.stakecredential_to_bytes, MD = i.stakecredential_from_bytes, WD = i.stakecredential_to_hex, QD = i.stakecredential_from_hex, VD = i.stakecredential_to_json, BD = i.stakecredential_to_js_value, AD = i.stakecredential_from_json, HD = i.__wbg_byronaddress_free, qD = i.byronaddress_to_base58, YD = i.byronaddress_to_bytes, XD = i.byronaddress_from_bytes, KD = i.byronaddress_byron_protocol_magic, ZD = i.byronaddress_attributes, JD = i.byronaddress_network_id, GD = i.byronaddress_from_base58, tI = i.byronaddress_icarus_from_key, eI = i.byronaddress_is_valid, _I = i.byronaddress_to_address, rI = i.byronaddress_from_address, nI = i.__wbg_address_free, oI = i.address_from_bytes, sI = i.address_to_json, aI = i.address_to_js_value, iI = i.address_from_json, cI = i.address_to_hex, dI = i.address_from_hex, lI = i.address_to_bytes, pI = i.address_to_bech32, uI = i.address_from_bech32, wI = i.address_network_id, fI = i.__wbg_baseaddress_free, gI = i.baseaddress_new, bI = i.baseaddress_payment_cred, hI = i.baseaddress_stake_cred, yI = i.baseaddress_to_address, mI = i.baseaddress_from_address, vI = i.__wbg_enterpriseaddress_free, kI = i.enterpriseaddress_new, xI = i.enterpriseaddress_to_address, jI = i.enterpriseaddress_from_address, SI = i.rewardaddress_to_address, EI = i.rewardaddress_from_address, zI = i.__wbg_pointer_free, CI = i.pointer_new, OI = i.pointer_new_pointer, LI = i.pointer_slot, NI = i.pointer_tx_index, FI = i.pointer_cert_index, TI = i.pointer_slot_bignum, PI = i.pointer_tx_index_bignum, RI = i.pointer_cert_index_bignum, $I = i.__wbg_pointeraddress_free, DI = i.pointeraddress_new, II = i.pointeraddress_payment_cred, UI = i.pointeraddress_stake_pointer, MI = i.pointeraddress_to_address, WI = i.pointeraddress_from_address, QI = i.__wbg_mintwitness_free, VI = i.mintwitness_new_native_script, BI = i.mintwitness_new_plutus_script, AI = i.__wbg_mintbuilder_free, HI = i.mintbuilder_new, qI = i.mintbuilder_add_asset, YI = i.mintbuilder_set_asset, XI = i.mintbuilder_build, KI = i.mintbuilder_get_native_scripts, ZI = i.mintbuilder_get_plutus_witnesses, JI = i.mintbuilder_get_ref_inputs, GI = i.mintbuilder_get_redeeemers, tU = i.mintbuilder_has_plutus_scripts, eU = i.mintbuilder_has_native_scripts, _U = i.enterpriseaddress_payment_cred, rU = i.rewardaddress_payment_cred, nU = i.rewardaddress_new, oU = i.__wbg_rewardaddress_free, sU = i.__wbindgen_malloc, aU = i.__wbindgen_realloc, iU = i.__wbindgen_add_to_stack_pointer, cU = i.__wbindgen_free, dU = i.__wbindgen_exn_store, lU = Object.freeze(Object.defineProperty({
    __proto__: null,
    __wbg_address_free: nI,
    __wbg_assetname_free: s3,
    __wbg_assetnames_free: g3,
    __wbg_assets_free: C3,
    __wbg_auxiliarydata_free: SN,
    __wbg_auxiliarydatahash_free: zC,
    __wbg_auxiliarydataset_free: A2,
    __wbg_baseaddress_free: fI,
    __wbg_bigint_free: O8,
    __wbg_bignum_free: kE,
    __wbg_bip32privatekey_free: sz,
    __wbg_bip32publickey_free: vz,
    __wbg_block_free: Z2,
    __wbg_blockhash_free: m7,
    __wbg_bootstrapwitness_free: O9,
    __wbg_bootstrapwitnesses_free: Q9,
    __wbg_byronaddress_free: HD,
    __wbg_certificate_free: Km,
    __wbg_certificates_free: fb,
    __wbg_constrplutusdata_free: bF,
    __wbg_costmdls_free: $F,
    __wbg_costmodel_free: SF,
    __wbg_datacost_free: lb,
    __wbg_datahash_free: k7,
    __wbg_datumsource_free: D7,
    __wbg_dnsrecordaoraaaa_free: g1,
    __wbg_dnsrecordsrv_free: dS,
    __wbg_ed25519keyhash_free: iC,
    __wbg_ed25519keyhashes_free: vy,
    __wbg_ed25519signature_free: Z9,
    __wbg_enterpriseaddress_free: vI,
    __wbg_exunitprices_free: KF,
    __wbg_exunits_free: aT,
    __wbg_fixedtransaction_free: kR,
    __wbg_generaltransactionmetadata_free: pN,
    __wbg_genesisdelegatehash_free: w7,
    __wbg_genesishash_free: f7,
    __wbg_genesishashes_free: $6,
    __wbg_genesiskeydelegation_free: Cm,
    __wbg_header_free: lj,
    __wbg_headerbody_free: Rj,
    __wbg_inputswithscriptwitness_free: C7,
    __wbg_inputwithscriptwitness_free: j7,
    __wbg_int_free: l8,
    __wbg_ipv4_free: Bv,
    __wbg_ipv6_free: t1,
    __wbg_kessignature_free: eO,
    __wbg_kesvkey_free: g7,
    __wbg_language_free: hT,
    __wbg_languages_free: OT,
    __wbg_legacydaedalusprivatekey_free: nC,
    __wbg_linearfee_free: lD,
    __wbg_metadatalist_free: DL,
    __wbg_metadatamap_free: jL,
    __wbg_mint_free: s5,
    __wbg_mintassets_free: e5,
    __wbg_mintbuilder_free: AI,
    __wbg_mintsassets_free: t5,
    __wbg_mintwitness_free: QI,
    __wbg_mirtostakecredentials_free: yv,
    __wbg_moveinstantaneousreward_free: Lv,
    __wbg_moveinstantaneousrewardscert_free: Mm,
    __wbg_multiasset_free: M3,
    __wbg_multihostname_free: tk,
    __wbg_nativescript_free: G4,
    __wbg_nativescripts_free: k6,
    __wbg_networkid_free: v5,
    __wbg_networkinfo_free: SD,
    __wbg_nonce_free: nO,
    __wbg_operationalcert_free: kj,
    __wbg_outputdatum_free: Y4,
    __wbg_plutusdata_free: QT,
    __wbg_plutuslist_free: aP,
    __wbg_plutusmap_free: PT,
    __wbg_plutusscript_free: HN,
    __wbg_plutusscripts_free: sF,
    __wbg_plutusscriptsource_free: T7,
    __wbg_plutuswitness_free: M7,
    __wbg_plutuswitnesses_free: Y7,
    __wbg_pointer_free: zI,
    __wbg_pointeraddress_free: $I,
    __wbg_poolmetadata_free: Sk,
    __wbg_poolmetadatahash_free: b7,
    __wbg_poolparams_free: Vy,
    __wbg_poolregistration_free: am,
    __wbg_poolretirement_free: bm,
    __wbg_privatekey_free: Nz,
    __wbg_proposedprotocolparameterupdates_free: _x,
    __wbg_protocolparamupdate_free: jx,
    __wbg_protocolversion_free: ux,
    __wbg_publickey_free: Vz,
    __wbg_publickeys_free: q9,
    __wbg_redeemer_free: fP,
    __wbg_redeemers_free: WP,
    __wbg_redeemertag_free: CP,
    __wbg_relay_free: dk,
    __wbg_relays_free: Ty,
    __wbg_rewardaddress_free: oU,
    __wbg_rewardaddresses_free: Hk,
    __wbg_scriptall_free: B0,
    __wbg_scriptany_free: lS,
    __wbg_scriptdatahash_free: v7,
    __wbg_scripthash_free: u7,
    __wbg_scripthashes_free: H6,
    __wbg_scriptnofk_free: s4,
    __wbg_scriptpubkey_free: P0,
    __wbg_scriptref_free: P4,
    __wbg_singlehostaddr_free: F1,
    __wbg_singlehostname_free: B1,
    __wbg_stakecredential_free: TD,
    __wbg_stakecredentials_free: $k,
    __wbg_stakedelegation_free: ly,
    __wbg_stakederegistration_free: ey,
    __wbg_stakeregistration_free: RS,
    __wbg_strings_free: JP,
    __wbg_timelockexpiry_free: k4,
    __wbg_timelockstart_free: wS,
    __wbg_transaction_free: Lg,
    __wbg_transactionbatch_free: mD,
    __wbg_transactionbatchlist_free: hD,
    __wbg_transactionbodies_free: S2,
    __wbg_transactionbody_free: Eb,
    __wbg_transactionbuilder_free: GR,
    __wbg_transactionbuilderconfig_free: MR,
    __wbg_transactionbuilderconfigbuilder_free: WR,
    __wbg_transactionhash_free: h7,
    __wbg_transactioninput_free: bh,
    __wbg_transactioninputs_free: Bg,
    __wbg_transactionmetadatum_free: BL,
    __wbg_transactionmetadatumlabels_free: oN,
    __wbg_transactionoutput_free: Ch,
    __wbg_transactionoutputamountbuilder_free: KS,
    __wbg_transactionoutputbuilder_free: VS,
    __wbg_transactionoutputs_free: eb,
    __wbg_transactionunspentoutput_free: rE,
    __wbg_transactionunspentoutputs_free: wE,
    __wbg_transactionwitnessset_free: u0,
    __wbg_transactionwitnesssets_free: R2,
    __wbg_txbuilderconstants_free: hL,
    __wbg_txinputsbuilder_free: Z7,
    __wbg_unitinterval_free: F5,
    __wbg_update_free: S6,
    __wbg_url_free: cS,
    __wbg_value_free: BE,
    __wbg_vkey_free: Zz,
    __wbg_vkeys_free: a9,
    __wbg_vkeywitness_free: d9,
    __wbg_vkeywitnesses_free: y9,
    __wbg_vrfcert_free: fO,
    __wbg_vrfkeyhash_free: y7,
    __wbg_vrfvkey_free: x7,
    __wbg_withdrawals_free: _0,
    __wbindgen_add_to_stack_pointer: iU,
    __wbindgen_exn_store: dU,
    __wbindgen_free: cU,
    __wbindgen_malloc: sU,
    __wbindgen_realloc: aU,
    address_from_bech32: uI,
    address_from_bytes: oI,
    address_from_hex: dI,
    address_from_json: iI,
    address_network_id: wI,
    address_to_bech32: pI,
    address_to_bytes: lI,
    address_to_hex: cI,
    address_to_js_value: aI,
    address_to_json: sI,
    assetname_from_bytes: i3,
    assetname_from_hex: d3,
    assetname_from_json: u3,
    assetname_name: f3,
    assetname_new: w3,
    assetname_to_bytes: a3,
    assetname_to_hex: c3,
    assetname_to_js_value: p3,
    assetname_to_json: l3,
    assetnames_add: z3,
    assetnames_from_bytes: h3,
    assetnames_from_hex: m3,
    assetnames_from_json: x3,
    assetnames_get: E3,
    assetnames_len: S3,
    assetnames_new: j3,
    assetnames_to_bytes: b3,
    assetnames_to_hex: y3,
    assetnames_to_js_value: k3,
    assetnames_to_json: v3,
    assets_from_bytes: L3,
    assets_from_hex: F3,
    assets_from_json: R3,
    assets_get: I3,
    assets_insert: D3,
    assets_keys: U3,
    assets_len: X5,
    assets_new: $3,
    assets_to_bytes: O3,
    assets_to_hex: N3,
    assets_to_js_value: P3,
    assets_to_json: T3,
    auxiliarydata_from_bytes: zN,
    auxiliarydata_from_hex: ON,
    auxiliarydata_from_json: FN,
    auxiliarydata_metadata: PN,
    auxiliarydata_native_scripts: $N,
    auxiliarydata_new: TN,
    auxiliarydata_plutus_scripts: IN,
    auxiliarydata_prefer_alonzo_format: MN,
    auxiliarydata_set_metadata: RN,
    auxiliarydata_set_native_scripts: DN,
    auxiliarydata_set_plutus_scripts: UN,
    auxiliarydata_set_prefer_alonzo_format: WN,
    auxiliarydata_to_bytes: EN,
    auxiliarydata_to_hex: CN,
    auxiliarydata_to_js_value: NN,
    auxiliarydata_to_json: LN,
    auxiliarydatahash_from_bech32: NC,
    auxiliarydatahash_from_bytes: CC,
    auxiliarydatahash_from_hex: TC,
    auxiliarydatahash_to_bech32: LC,
    auxiliarydatahash_to_bytes: OC,
    auxiliarydatahash_to_hex: FC,
    auxiliarydataset_get: X2,
    auxiliarydataset_indices: K2,
    auxiliarydataset_insert: Y2,
    auxiliarydataset_len: q2,
    auxiliarydataset_new: H2,
    baseaddress_from_address: mI,
    baseaddress_new: gI,
    baseaddress_payment_cred: bI,
    baseaddress_stake_cred: hI,
    baseaddress_to_address: yI,
    bigint_add: Q8,
    bigint_as_int: U8,
    bigint_as_u64: I8,
    bigint_div_ceil: H8,
    bigint_from_bytes: N8,
    bigint_from_hex: T8,
    bigint_from_json: $8,
    bigint_from_str: M8,
    bigint_increment: A8,
    bigint_is_zero: D8,
    bigint_mul: V8,
    bigint_one: B8,
    bigint_to_bytes: L8,
    bigint_to_hex: F8,
    bigint_to_js_value: R8,
    bigint_to_json: P8,
    bigint_to_str: W8,
    bignum_checked_add: DE,
    bignum_checked_mul: $E,
    bignum_checked_sub: IE,
    bignum_clamped_sub: UE,
    bignum_compare: ME,
    bignum_div_floor: RE,
    bignum_from_bytes: jE,
    bignum_from_hex: EE,
    bignum_from_json: OE,
    bignum_from_str: LE,
    bignum_is_zero: PE,
    bignum_less_than: WE,
    bignum_max: VE,
    bignum_max_value: QE,
    bignum_one: TE,
    bignum_to_bytes: xE,
    bignum_to_hex: SE,
    bignum_to_js_value: CE,
    bignum_to_json: zE,
    bignum_to_str: NE,
    bignum_zero: FE,
    bip32privatekey_as_bytes: wz,
    bip32privatekey_chaincode: hz,
    bip32privatekey_derive: az,
    bip32privatekey_from_128_xprv: iz,
    bip32privatekey_from_bech32: fz,
    bip32privatekey_from_bip39_entropy: bz,
    bip32privatekey_from_bytes: uz,
    bip32privatekey_from_hex: mz,
    bip32privatekey_generate_ed25519_bip32: dz,
    bip32privatekey_to_128_xprv: cz,
    bip32privatekey_to_bech32: gz,
    bip32privatekey_to_hex: yz,
    bip32privatekey_to_public: pz,
    bip32privatekey_to_raw_key: lz,
    bip32publickey_as_bytes: Sz,
    bip32publickey_chaincode: Cz,
    bip32publickey_derive: kz,
    bip32publickey_from_bech32: Ez,
    bip32publickey_from_bytes: jz,
    bip32publickey_from_hex: Lz,
    bip32publickey_to_bech32: zz,
    bip32publickey_to_hex: Oz,
    bip32publickey_to_raw_key: xz,
    block_auxiliary_data_set: ij,
    block_from_bytes: G2,
    block_from_hex: ej,
    block_from_json: nj,
    block_header: oj,
    block_invalid_transactions: cj,
    block_new: dj,
    block_to_bytes: J2,
    block_to_hex: tj,
    block_to_js_value: rj,
    block_to_json: _j,
    block_transaction_bodies: sj,
    block_transaction_witness_sets: aj,
    blockhash_from_bech32: WC,
    blockhash_from_bytes: MC,
    blockhash_from_hex: QC,
    blockhash_to_bech32: YO,
    blockhash_to_bytes: s7,
    blockhash_to_hex: RO,
    bootstrapwitness_attributes: M9,
    bootstrapwitness_chain_code: U9,
    bootstrapwitness_from_bytes: N9,
    bootstrapwitness_from_hex: T9,
    bootstrapwitness_from_json: $9,
    bootstrapwitness_new: W9,
    bootstrapwitness_signature: I9,
    bootstrapwitness_to_bytes: L9,
    bootstrapwitness_to_hex: F9,
    bootstrapwitness_to_js_value: R9,
    bootstrapwitness_to_json: P9,
    bootstrapwitness_vkey: D9,
    bootstrapwitnesses_add: H9,
    bootstrapwitnesses_get: A9,
    bootstrapwitnesses_len: B9,
    bootstrapwitnesses_new: V9,
    byronaddress_attributes: ZD,
    byronaddress_byron_protocol_magic: KD,
    byronaddress_from_address: rI,
    byronaddress_from_base58: GD,
    byronaddress_from_bytes: XD,
    byronaddress_icarus_from_key: tI,
    byronaddress_is_valid: eI,
    byronaddress_network_id: JD,
    byronaddress_to_address: _I,
    byronaddress_to_base58: qD,
    byronaddress_to_bytes: YD,
    calculate_ex_units_ceil_cost: gD,
    certificate_as_genesis_key_delegation: bv,
    certificate_as_move_instantaneous_rewards_cert: hv,
    certificate_as_pool_registration: fv,
    certificate_as_pool_retirement: gv,
    certificate_as_stake_delegation: wv,
    certificate_as_stake_deregistration: uv,
    certificate_as_stake_registration: pv,
    certificate_from_bytes: Jm,
    certificate_from_hex: tv,
    certificate_from_json: rv,
    certificate_kind: lv,
    certificate_new_genesis_key_delegation: cv,
    certificate_new_move_instantaneous_rewards_cert: dv,
    certificate_new_pool_registration: av,
    certificate_new_pool_retirement: iv,
    certificate_new_stake_delegation: sv,
    certificate_new_stake_deregistration: ov,
    certificate_new_stake_registration: nv,
    certificate_to_bytes: Zm,
    certificate_to_hex: Gm,
    certificate_to_js_value: _v,
    certificate_to_json: ev,
    certificates_add: Sb,
    certificates_from_bytes: bb,
    certificates_from_hex: yb,
    certificates_from_json: kb,
    certificates_get: jb,
    certificates_len: Y5,
    certificates_new: xb,
    certificates_to_bytes: gb,
    certificates_to_hex: hb,
    certificates_to_js_value: vb,
    certificates_to_json: mb,
    constrplutusdata_alternative: kF,
    constrplutusdata_data: xF,
    constrplutusdata_from_bytes: yF,
    constrplutusdata_from_hex: vF,
    constrplutusdata_new: jF,
    constrplutusdata_to_bytes: hF,
    constrplutusdata_to_hex: mF,
    costmdls_from_bytes: IF,
    costmdls_from_hex: MF,
    costmdls_from_json: VF,
    costmdls_get: qF,
    costmdls_insert: HF,
    costmdls_keys: YF,
    costmdls_len: AF,
    costmdls_new: BF,
    costmdls_retain_language_versions: XF,
    costmdls_to_bytes: DF,
    costmdls_to_hex: UF,
    costmdls_to_js_value: QF,
    costmdls_to_json: WF,
    costmodel_from_bytes: zF,
    costmodel_from_hex: OF,
    costmodel_from_json: FF,
    costmodel_get: RF,
    costmodel_len: aR,
    costmodel_new: TF,
    costmodel_set: PF,
    costmodel_to_bytes: EF,
    costmodel_to_hex: CF,
    costmodel_to_js_value: NF,
    costmodel_to_json: LF,
    create_send_all: xD,
    datacost_coins_per_byte: wb,
    datacost_new_coins_per_byte: ub,
    datacost_new_coins_per_word: pb,
    datahash_from_bech32: BC,
    datahash_from_bytes: VC,
    datahash_from_hex: AC,
    datahash_to_bech32: XO,
    datahash_to_bytes: a7,
    datahash_to_hex: $O,
    datumsource_new: I7,
    datumsource_new_ref_input: U7,
    decode_arbitrary_bytes_from_metadatum: VN,
    decode_metadatum_to_json_str: AN,
    decode_plutus_datum_to_json_str: _R,
    decrypt_with_password: QS,
    dnsrecordaoraaaa_from_bytes: h1,
    dnsrecordaoraaaa_from_hex: m1,
    dnsrecordaoraaaa_from_json: x1,
    dnsrecordaoraaaa_new: j1,
    dnsrecordaoraaaa_record: S1,
    dnsrecordaoraaaa_to_bytes: b1,
    dnsrecordaoraaaa_to_hex: y1,
    dnsrecordaoraaaa_to_js_value: k1,
    dnsrecordaoraaaa_to_json: v1,
    dnsrecordsrv_from_bytes: z1,
    dnsrecordsrv_from_hex: O1,
    dnsrecordsrv_from_json: L1,
    dnsrecordsrv_new: N1,
    dnsrecordsrv_record: sS,
    dnsrecordsrv_to_bytes: E1,
    dnsrecordsrv_to_hex: C1,
    dnsrecordsrv_to_js_value: iS,
    dnsrecordsrv_to_json: MS,
    ed25519keyhash_from_bech32: pC,
    ed25519keyhash_from_bytes: cC,
    ed25519keyhash_from_hex: wC,
    ed25519keyhash_to_bech32: lC,
    ed25519keyhash_to_bytes: dC,
    ed25519keyhash_to_hex: uC,
    ed25519keyhashes_add: Ny,
    ed25519keyhashes_from_bytes: xy,
    ed25519keyhashes_from_hex: Sy,
    ed25519keyhashes_from_json: Cy,
    ed25519keyhashes_get: Ly,
    ed25519keyhashes_len: R5,
    ed25519keyhashes_new: Oy,
    ed25519keyhashes_to_bytes: ky,
    ed25519keyhashes_to_hex: jy,
    ed25519keyhashes_to_js_value: zy,
    ed25519keyhashes_to_json: Ey,
    ed25519keyhashes_to_option: Fy,
    ed25519signature_from_bech32: eC,
    ed25519signature_from_bytes: rC,
    ed25519signature_from_hex: _C,
    ed25519signature_to_bech32: G9,
    ed25519signature_to_bytes: J9,
    ed25519signature_to_hex: tC,
    encode_arbitrary_bytes_as_metadatum: QN,
    encode_json_str_to_metadatum: BN,
    encode_json_str_to_native_script: nz,
    encode_json_str_to_plutus_datum: eR,
    encrypt_with_password: WS,
    enterpriseaddress_from_address: jI,
    enterpriseaddress_new: kI,
    enterpriseaddress_payment_cred: _U,
    enterpriseaddress_to_address: xI,
    exunitprices_from_bytes: JF,
    exunitprices_from_hex: tT,
    exunitprices_from_json: rT,
    exunitprices_mem_price: nT,
    exunitprices_new: sT,
    exunitprices_step_price: oT,
    exunitprices_to_bytes: ZF,
    exunitprices_to_hex: GF,
    exunitprices_to_js_value: _T,
    exunitprices_to_json: eT,
    exunits_from_bytes: cT,
    exunits_from_hex: lT,
    exunits_from_json: wT,
    exunits_mem: fT,
    exunits_new: bT,
    exunits_steps: gT,
    exunits_to_bytes: iT,
    exunits_to_hex: dT,
    exunits_to_js_value: uT,
    exunits_to_json: pT,
    fixedtransaction_auxiliary_data: IR,
    fixedtransaction_body: OR,
    fixedtransaction_from_bytes: jR,
    fixedtransaction_from_hex: ER,
    fixedtransaction_is_valid: $R,
    fixedtransaction_new: zR,
    fixedtransaction_new_with_auxiliary: CR,
    fixedtransaction_raw_auxiliary_data: UR,
    fixedtransaction_raw_body: LR,
    fixedtransaction_raw_witness_set: PR,
    fixedtransaction_set_auxiliary_data: DR,
    fixedtransaction_set_body: NR,
    fixedtransaction_set_is_valid: RR,
    fixedtransaction_set_witness_set: FR,
    fixedtransaction_to_bytes: xR,
    fixedtransaction_to_hex: SR,
    fixedtransaction_witness_set: TR,
    generaltransactionmetadata_from_bytes: wN,
    generaltransactionmetadata_from_hex: gN,
    generaltransactionmetadata_from_json: yN,
    generaltransactionmetadata_get: xN,
    generaltransactionmetadata_insert: kN,
    generaltransactionmetadata_keys: jN,
    generaltransactionmetadata_len: vN,
    generaltransactionmetadata_new: mN,
    generaltransactionmetadata_to_bytes: uN,
    generaltransactionmetadata_to_hex: fN,
    generaltransactionmetadata_to_js_value: hN,
    generaltransactionmetadata_to_json: bN,
    genesisdelegatehash_from_bech32: kC,
    genesisdelegatehash_from_bytes: vC,
    genesisdelegatehash_from_hex: xC,
    genesisdelegatehash_to_bech32: VO,
    genesisdelegatehash_to_bytes: e7,
    genesisdelegatehash_to_hex: LO,
    genesishash_from_bech32: SC,
    genesishash_from_bytes: jC,
    genesishash_from_hex: EC,
    genesishash_to_bech32: BO,
    genesishash_to_bytes: _7,
    genesishash_to_hex: NO,
    genesishashes_add: A6,
    genesishashes_from_bytes: I6,
    genesishashes_from_hex: M6,
    genesishashes_from_json: V6,
    genesishashes_get: B6,
    genesishashes_len: W5,
    genesishashes_new: zS,
    genesishashes_to_bytes: D6,
    genesishashes_to_hex: U6,
    genesishashes_to_js_value: Q6,
    genesishashes_to_json: W6,
    genesiskeydelegation_from_bytes: Lm,
    genesiskeydelegation_from_hex: Fm,
    genesiskeydelegation_from_json: Rm,
    genesiskeydelegation_genesis_delegate_hash: Dm,
    genesiskeydelegation_genesishash: $m,
    genesiskeydelegation_new: Um,
    genesiskeydelegation_to_bytes: Om,
    genesiskeydelegation_to_hex: Nm,
    genesiskeydelegation_to_js_value: Pm,
    genesiskeydelegation_to_json: Tm,
    genesiskeydelegation_vrf_keyhash: Im,
    get_deposit: ez,
    get_implicit_input: tz,
    hash_auxiliary_data: K8,
    hash_plutus_data: J8,
    hash_script_data: G8,
    hash_transaction: Z8,
    header_body_signature: mj,
    header_from_bytes: uj,
    header_from_hex: fj,
    header_from_json: hj,
    header_header_body: yj,
    header_new: vj,
    header_to_bytes: pj,
    header_to_hex: wj,
    header_to_js_value: bj,
    header_to_json: gj,
    headerbody_block_body_hash: e3,
    headerbody_block_body_size: t3,
    headerbody_block_number: Vj,
    headerbody_from_bytes: Dj,
    headerbody_from_hex: Uj,
    headerbody_from_json: Qj,
    headerbody_has_nonce_and_leader_vrf: Xj,
    headerbody_has_vrf_result: Jj,
    headerbody_issuer_vkey: qj,
    headerbody_leader_vrf_or_nothing: Zj,
    headerbody_new: n3,
    headerbody_new_headerbody: o3,
    headerbody_nonce_vrf_or_nothing: Kj,
    headerbody_operational_cert: _3,
    headerbody_prev_hash: Hj,
    headerbody_protocol_version: r3,
    headerbody_slot: Bj,
    headerbody_slot_bignum: Aj,
    headerbody_to_bytes: $j,
    headerbody_to_hex: Ij,
    headerbody_to_js_value: Wj,
    headerbody_to_json: Mj,
    headerbody_vrf_result_or_nothing: Gj,
    headerbody_vrf_vkey: Yj,
    inputswithscriptwitness_add: L7,
    inputswithscriptwitness_get: N7,
    inputswithscriptwitness_len: F7,
    inputswithscriptwitness_new: O7,
    inputwithscriptwitness_input: z7,
    inputwithscriptwitness_new_with_native_script_witness: S7,
    inputwithscriptwitness_new_with_plutus_witness: E7,
    int_as_i32: S8,
    int_as_i32_or_fail: E8,
    int_as_i32_or_nothing: oz,
    int_as_negative: j8,
    int_as_positive: x8,
    int_from_bytes: u8,
    int_from_hex: f8,
    int_from_json: h8,
    int_from_str: C8,
    int_is_positive: k8,
    int_new: y8,
    int_new_i32: v8,
    int_new_negative: m8,
    int_to_bytes: p8,
    int_to_hex: w8,
    int_to_js_value: b8,
    int_to_json: g8,
    int_to_str: z8,
    ipv4_from_bytes: Hv,
    ipv4_from_hex: Yv,
    ipv4_from_json: Zv,
    ipv4_ip: Gv,
    ipv4_new: Jv,
    ipv4_to_bytes: Av,
    ipv4_to_hex: qv,
    ipv4_to_js_value: Kv,
    ipv4_to_json: Xv,
    ipv6_from_bytes: _1,
    ipv6_from_hex: n1,
    ipv6_from_json: a1,
    ipv6_ip: c1,
    ipv6_new: i1,
    ipv6_to_bytes: e1,
    ipv6_to_hex: r1,
    ipv6_to_js_value: s1,
    ipv6_to_json: o1,
    kessignature_from_bytes: rO,
    kessignature_to_bytes: _O,
    kesvkey_from_bech32: GC,
    kesvkey_from_bytes: JC,
    kesvkey_from_hex: tO,
    kesvkey_to_bech32: JO,
    kesvkey_to_bytes: d7,
    kesvkey_to_hex: UO,
    language_from_bytes: mT,
    language_from_hex: kT,
    language_from_json: ST,
    language_kind: CT,
    language_new_plutus_v1: ET,
    language_new_plutus_v2: zT,
    language_to_bytes: yT,
    language_to_hex: vT,
    language_to_js_value: jT,
    language_to_json: xT,
    languages_add: FT,
    languages_get: NT,
    languages_len: iR,
    languages_list: TT,
    languages_new: LT,
    legacydaedalusprivatekey_as_bytes: sC,
    legacydaedalusprivatekey_chaincode: aC,
    legacydaedalusprivatekey_from_bytes: oC,
    linearfee_coefficient: uD,
    linearfee_constant: pD,
    linearfee_new: wD,
    make_daedalus_bootstrap_witness: q8,
    make_icarus_bootstrap_witness: Y8,
    make_vkey_witness: X8,
    memory: mg,
    metadatalist_add: VL,
    metadatalist_from_bytes: UL,
    metadatalist_from_hex: WL,
    metadatalist_get: QL,
    metadatalist_len: sR,
    metadatalist_new: mR,
    metadatalist_to_bytes: IL,
    metadatalist_to_hex: ML,
    metadatamap_from_bytes: EL,
    metadatamap_from_hex: CL,
    metadatamap_get: FL,
    metadatamap_get_i32: PL,
    metadatamap_get_str: TL,
    metadatamap_has: RL,
    metadatamap_insert: OL,
    metadatamap_insert_i32: NL,
    metadatamap_insert_str: LL,
    metadatamap_keys: $L,
    metadatamap_len: nR,
    metadatamap_new: bR,
    metadatamap_to_bytes: SL,
    metadatamap_to_hex: zL,
    min_ada_for_output: _z,
    min_ada_required: rz,
    min_fee: fD,
    min_script_fee: bD,
    mint_as_negative_multiasset: m5,
    mint_as_positive_multiasset: y5,
    mint_from_bytes: i5,
    mint_from_hex: d5,
    mint_from_json: u5,
    mint_get: g5,
    mint_get_all: b5,
    mint_insert: f5,
    mint_keys: h5,
    mint_len: J5,
    mint_new: PS,
    mint_new_from_entry: w5,
    mint_to_bytes: a5,
    mint_to_hex: c5,
    mint_to_js_value: p5,
    mint_to_json: l5,
    mintassets_get: n5,
    mintassets_insert: r5,
    mintassets_keys: o5,
    mintassets_len: Z5,
    mintassets_new: TS,
    mintassets_new_from_entry: _5,
    mintbuilder_add_asset: qI,
    mintbuilder_build: XI,
    mintbuilder_get_native_scripts: KI,
    mintbuilder_get_plutus_witnesses: ZI,
    mintbuilder_get_redeeemers: GI,
    mintbuilder_get_ref_inputs: JI,
    mintbuilder_has_native_scripts: eU,
    mintbuilder_has_plutus_scripts: tU,
    mintbuilder_new: HI,
    mintbuilder_set_asset: YI,
    mintwitness_new_native_script: VI,
    mintwitness_new_plutus_script: BI,
    mirtostakecredentials_from_bytes: vv,
    mirtostakecredentials_from_hex: xv,
    mirtostakecredentials_from_json: Ev,
    mirtostakecredentials_get: Cv,
    mirtostakecredentials_insert: zv,
    mirtostakecredentials_keys: Ov,
    mirtostakecredentials_len: q5,
    mirtostakecredentials_new: bS,
    mirtostakecredentials_to_bytes: mv,
    mirtostakecredentials_to_hex: kv,
    mirtostakecredentials_to_js_value: Sv,
    mirtostakecredentials_to_json: jv,
    moveinstantaneousreward_as_to_other_pot: Qv,
    moveinstantaneousreward_as_to_stake_creds: Vv,
    moveinstantaneousreward_from_bytes: Fv,
    moveinstantaneousreward_from_hex: Pv,
    moveinstantaneousreward_from_json: Dv,
    moveinstantaneousreward_kind: Wv,
    moveinstantaneousreward_new_to_other_pot: Iv,
    moveinstantaneousreward_new_to_stake_creds: Uv,
    moveinstantaneousreward_pot: Mv,
    moveinstantaneousreward_to_bytes: Nv,
    moveinstantaneousreward_to_hex: Tv,
    moveinstantaneousreward_to_js_value: $v,
    moveinstantaneousreward_to_json: Rv,
    moveinstantaneousrewardscert_from_bytes: Qm,
    moveinstantaneousrewardscert_from_hex: Bm,
    moveinstantaneousrewardscert_from_json: qm,
    moveinstantaneousrewardscert_move_instantaneous_reward: Ym,
    moveinstantaneousrewardscert_new: Xm,
    moveinstantaneousrewardscert_to_bytes: Wm,
    moveinstantaneousrewardscert_to_hex: Vm,
    moveinstantaneousrewardscert_to_js_value: Hm,
    moveinstantaneousrewardscert_to_json: Am,
    multiasset_from_bytes: Q3,
    multiasset_from_hex: B3,
    multiasset_from_json: q3,
    multiasset_get: X3,
    multiasset_get_asset: Z3,
    multiasset_insert: Y3,
    multiasset_keys: J3,
    multiasset_len: K5,
    multiasset_new: FS,
    multiasset_set_asset: K3,
    multiasset_sub: G3,
    multiasset_to_bytes: W3,
    multiasset_to_hex: V3,
    multiasset_to_js_value: H3,
    multiasset_to_json: A3,
    multihostname_dns_name: ik,
    multihostname_from_bytes: _k,
    multihostname_from_hex: nk,
    multihostname_from_json: ak,
    multihostname_new: ck,
    multihostname_to_bytes: ek,
    multihostname_to_hex: rk,
    multihostname_to_js_value: sk,
    multihostname_to_json: ok,
    nativescript_as_script_all: g6,
    nativescript_as_script_any: b6,
    nativescript_as_script_n_of_k: h6,
    nativescript_as_script_pubkey: f6,
    nativescript_as_timelock_expiry: m6,
    nativescript_as_timelock_start: y6,
    nativescript_from_bytes: e6,
    nativescript_from_hex: r6,
    nativescript_from_json: s6,
    nativescript_get_required_signers: v6,
    nativescript_hash: a6,
    nativescript_kind: w6,
    nativescript_new_script_all: c6,
    nativescript_new_script_any: d6,
    nativescript_new_script_n_of_k: l6,
    nativescript_new_script_pubkey: i6,
    nativescript_new_timelock_expiry: u6,
    nativescript_new_timelock_start: p6,
    nativescript_to_bytes: t6,
    nativescript_to_hex: _6,
    nativescript_to_js_value: o6,
    nativescript_to_json: n6,
    nativescripts_add: j6,
    nativescripts_get: x6,
    nativescripts_len: M5,
    nativescripts_new: NS,
    networkid_from_bytes: x5,
    networkid_from_hex: S5,
    networkid_from_json: C5,
    networkid_kind: N5,
    networkid_mainnet: L5,
    networkid_testnet: O5,
    networkid_to_bytes: k5,
    networkid_to_hex: j5,
    networkid_to_js_value: z5,
    networkid_to_json: E5,
    networkinfo_mainnet: FD,
    networkinfo_network_id: zD,
    networkinfo_new: ED,
    networkinfo_protocol_magic: CD,
    networkinfo_testnet: ND,
    networkinfo_testnet_preprod: LD,
    networkinfo_testnet_preview: OD,
    nonce_from_bytes: sO,
    nonce_from_hex: iO,
    nonce_from_json: lO,
    nonce_get_hash: wO,
    nonce_new_from_hash: uO,
    nonce_new_identity: pO,
    nonce_to_bytes: oO,
    nonce_to_hex: aO,
    nonce_to_js_value: dO,
    nonce_to_json: cO,
    operationalcert_from_bytes: jj,
    operationalcert_from_hex: Ej,
    operationalcert_from_json: Oj,
    operationalcert_hot_vkey: Lj,
    operationalcert_kes_period: Fj,
    operationalcert_new: Pj,
    operationalcert_sequence_number: Nj,
    operationalcert_sigma: Tj,
    operationalcert_to_bytes: xj,
    operationalcert_to_hex: Sj,
    operationalcert_to_js_value: Cj,
    operationalcert_to_json: zj,
    outputdatum_data: J4,
    outputdatum_data_hash: Z4,
    outputdatum_new_data: K4,
    outputdatum_new_data_hash: X4,
    plutusdata_as_bytes: oP,
    plutusdata_as_constr_plutus_data: eP,
    plutusdata_as_integer: nP,
    plutusdata_as_list: rP,
    plutusdata_as_map: _P,
    plutusdata_from_address: sP,
    plutusdata_from_bytes: BT,
    plutusdata_from_hex: HT,
    plutusdata_from_json: wR,
    plutusdata_kind: tP,
    plutusdata_new_bytes: GT,
    plutusdata_new_constr_plutus_data: qT,
    plutusdata_new_empty_constr_plutus_data: YT,
    plutusdata_new_integer: JT,
    plutusdata_new_list: ZT,
    plutusdata_new_map: KT,
    plutusdata_new_single_value_constr_plutus_data: XT,
    plutusdata_to_bytes: VT,
    plutusdata_to_hex: AT,
    plutusdata_to_json: fR,
    plutuslist_add: wP,
    plutuslist_from_bytes: cP,
    plutuslist_from_hex: lP,
    plutuslist_get: uP,
    plutuslist_len: lR,
    plutuslist_new: pP,
    plutuslist_to_bytes: iP,
    plutuslist_to_hex: dP,
    plutusmap_from_bytes: $T,
    plutusmap_from_hex: IT,
    plutusmap_get: MT,
    plutusmap_insert: UT,
    plutusmap_keys: WT,
    plutusmap_len: cR,
    plutusmap_new: gR,
    plutusmap_to_bytes: RT,
    plutusmap_to_hex: DT,
    plutusscript_bytes: tF,
    plutusscript_from_bytes: YN,
    plutusscript_from_bytes_v2: eF,
    plutusscript_from_bytes_with_version: _F,
    plutusscript_from_hex: KN,
    plutusscript_from_hex_with_version: rF,
    plutusscript_hash: nF,
    plutusscript_language_version: oF,
    plutusscript_new: ZN,
    plutusscript_new_v2: JN,
    plutusscript_new_with_version: GN,
    plutusscript_to_bytes: qN,
    plutusscript_to_hex: XN,
    plutusscripts_add: gF,
    plutusscripts_from_bytes: iF,
    plutusscripts_from_hex: dF,
    plutusscripts_from_json: uF,
    plutusscripts_get: fF,
    plutusscripts_len: oR,
    plutusscripts_new: wF,
    plutusscripts_to_bytes: aF,
    plutusscripts_to_hex: cF,
    plutusscripts_to_js_value: pF,
    plutusscripts_to_json: lF,
    plutusscriptsource_new: P7,
    plutusscriptsource_new_ref_input: R7,
    plutusscriptsource_new_ref_input_with_lang_ver: $7,
    plutuswitness_datum: H7,
    plutuswitness_new: W7,
    plutuswitness_new_with_ref: Q7,
    plutuswitness_new_with_ref_without_datum: B7,
    plutuswitness_new_without_datum: V7,
    plutuswitness_redeemer: q7,
    plutuswitness_script: A7,
    plutuswitnesses_add: K7,
    plutuswitnesses_get: X7,
    plutuswitnesses_len: vL,
    plutuswitnesses_new: xL,
    pointer_cert_index: FI,
    pointer_cert_index_bignum: RI,
    pointer_new: CI,
    pointer_new_pointer: OI,
    pointer_slot: LI,
    pointer_slot_bignum: TI,
    pointer_tx_index: NI,
    pointer_tx_index_bignum: PI,
    pointeraddress_from_address: WI,
    pointeraddress_new: DI,
    pointeraddress_payment_cred: II,
    pointeraddress_stake_pointer: UI,
    pointeraddress_to_address: MI,
    poolmetadata_from_bytes: zk,
    poolmetadata_from_hex: Ok,
    poolmetadata_from_json: Fk,
    poolmetadata_new: Rk,
    poolmetadata_pool_metadata_hash: Pk,
    poolmetadata_to_bytes: Ek,
    poolmetadata_to_hex: Ck,
    poolmetadata_to_js_value: Nk,
    poolmetadata_to_json: Lk,
    poolmetadata_url: Tk,
    poolmetadatahash_from_bech32: RC,
    poolmetadatahash_from_bytes: PC,
    poolmetadatahash_from_hex: $C,
    poolmetadatahash_to_bech32: HO,
    poolmetadatahash_to_bytes: n7,
    poolmetadatahash_to_hex: TO,
    poolparams_cost: tm,
    poolparams_from_bytes: Ay,
    poolparams_from_hex: qy,
    poolparams_from_json: Ky,
    poolparams_margin: em,
    poolparams_new: sm,
    poolparams_operator: Zy,
    poolparams_pledge: Gy,
    poolparams_pool_metadata: om,
    poolparams_pool_owners: rm,
    poolparams_relays: nm,
    poolparams_reward_account: _m,
    poolparams_to_bytes: By,
    poolparams_to_hex: Hy,
    poolparams_to_js_value: Xy,
    poolparams_to_json: Yy,
    poolparams_vrf_keyhash: Jy,
    poolregistration_from_bytes: cm,
    poolregistration_from_hex: lm,
    poolregistration_from_json: wm,
    poolregistration_new: gm,
    poolregistration_pool_params: fm,
    poolregistration_to_bytes: im,
    poolregistration_to_hex: dm,
    poolregistration_to_js_value: um,
    poolregistration_to_json: pm,
    poolretirement_epoch: Em,
    poolretirement_from_bytes: ym,
    poolretirement_from_hex: vm,
    poolretirement_from_json: jm,
    poolretirement_new: zm,
    poolretirement_pool_keyhash: Sm,
    poolretirement_to_bytes: hm,
    poolretirement_to_hex: mm,
    poolretirement_to_js_value: xm,
    poolretirement_to_json: km,
    privatekey_as_bytes: Dz,
    privatekey_from_bech32: Rz,
    privatekey_from_extended_bytes: Iz,
    privatekey_from_hex: Qz,
    privatekey_from_normal_bytes: Uz,
    privatekey_generate_ed25519: Tz,
    privatekey_generate_ed25519extended: Pz,
    privatekey_sign: Mz,
    privatekey_to_bech32: $z,
    privatekey_to_hex: Wz,
    privatekey_to_public: Fz,
    proposedprotocolparameterupdates_from_bytes: nx,
    proposedprotocolparameterupdates_from_hex: sx,
    proposedprotocolparameterupdates_from_json: cx,
    proposedprotocolparameterupdates_get: lx,
    proposedprotocolparameterupdates_insert: dx,
    proposedprotocolparameterupdates_keys: px,
    proposedprotocolparameterupdates_len: V5,
    proposedprotocolparameterupdates_new: gS,
    proposedprotocolparameterupdates_to_bytes: rx,
    proposedprotocolparameterupdates_to_hex: ox,
    proposedprotocolparameterupdates_to_js_value: ix,
    proposedprotocolparameterupdates_to_json: ax,
    protocolparamupdate_ada_per_utxo_byte: c2,
    protocolparamupdate_collateral_percentage: v2,
    protocolparamupdate_cost_models: l2,
    protocolparamupdate_d: _2,
    protocolparamupdate_execution_costs: u2,
    protocolparamupdate_expansion_rate: Gx,
    protocolparamupdate_extra_entropy: r2,
    protocolparamupdate_from_bytes: Ex,
    protocolparamupdate_from_hex: Cx,
    protocolparamupdate_from_json: Nx,
    protocolparamupdate_key_deposit: Vx,
    protocolparamupdate_max_block_body_size: Dx,
    protocolparamupdate_max_block_ex_units: b2,
    protocolparamupdate_max_block_header_size: Wx,
    protocolparamupdate_max_collateral_inputs: x2,
    protocolparamupdate_max_epoch: qx,
    protocolparamupdate_max_tx_ex_units: f2,
    protocolparamupdate_max_tx_size: Ux,
    protocolparamupdate_max_value_size: y2,
    protocolparamupdate_min_pool_cost: a2,
    protocolparamupdate_minfee_a: Tx,
    protocolparamupdate_minfee_b: Rx,
    protocolparamupdate_n_opt: Xx,
    protocolparamupdate_new: j2,
    protocolparamupdate_pool_deposit: Ax,
    protocolparamupdate_pool_pledge_influence: Zx,
    protocolparamupdate_protocol_version: o2,
    protocolparamupdate_set_ada_per_utxo_byte: i2,
    protocolparamupdate_set_collateral_percentage: m2,
    protocolparamupdate_set_cost_models: d2,
    protocolparamupdate_set_execution_costs: p2,
    protocolparamupdate_set_expansion_rate: Jx,
    protocolparamupdate_set_key_deposit: Qx,
    protocolparamupdate_set_max_block_body_size: $x,
    protocolparamupdate_set_max_block_ex_units: g2,
    protocolparamupdate_set_max_block_header_size: Mx,
    protocolparamupdate_set_max_collateral_inputs: k2,
    protocolparamupdate_set_max_epoch: Hx,
    protocolparamupdate_set_max_tx_ex_units: w2,
    protocolparamupdate_set_max_tx_size: Ix,
    protocolparamupdate_set_max_value_size: h2,
    protocolparamupdate_set_min_pool_cost: s2,
    protocolparamupdate_set_minfee_a: Fx,
    protocolparamupdate_set_minfee_b: Px,
    protocolparamupdate_set_n_opt: Yx,
    protocolparamupdate_set_pool_deposit: Bx,
    protocolparamupdate_set_pool_pledge_influence: Kx,
    protocolparamupdate_set_protocol_version: n2,
    protocolparamupdate_set_treasury_growth_rate: t2,
    protocolparamupdate_to_bytes: Sx,
    protocolparamupdate_to_hex: zx,
    protocolparamupdate_to_js_value: Lx,
    protocolparamupdate_to_json: Ox,
    protocolparamupdate_treasury_growth_rate: e2,
    protocolversion_from_bytes: fx,
    protocolversion_from_hex: bx,
    protocolversion_from_json: mx,
    protocolversion_major: vx,
    protocolversion_minor: kx,
    protocolversion_new: xx,
    protocolversion_to_bytes: wx,
    protocolversion_to_hex: gx,
    protocolversion_to_js_value: yx,
    protocolversion_to_json: hx,
    publickey_as_bytes: r7,
    publickey_from_bech32: Bz,
    publickey_from_bytes: Hz,
    publickey_from_hex: Kz,
    publickey_hash: Yz,
    publickey_to_bech32: Az,
    publickey_to_hex: Xz,
    publickey_verify: qz,
    publickeys_add: K9,
    publickeys_get: X9,
    publickeys_new: Y9,
    publickeys_size: zO,
    redeemer_data: SP,
    redeemer_ex_units: EP,
    redeemer_from_bytes: bP,
    redeemer_from_hex: yP,
    redeemer_from_json: kP,
    redeemer_index: jP,
    redeemer_new: zP,
    redeemer_tag: xP,
    redeemer_to_bytes: gP,
    redeemer_to_hex: hP,
    redeemer_to_js_value: vP,
    redeemer_to_json: mP,
    redeemers_add: KP,
    redeemers_from_bytes: VP,
    redeemers_from_hex: AP,
    redeemers_from_json: YP,
    redeemers_get: XP,
    redeemers_len: pR,
    redeemers_new: vR,
    redeemers_to_bytes: QP,
    redeemers_to_hex: BP,
    redeemers_to_js_value: qP,
    redeemers_to_json: HP,
    redeemers_total_ex_units: ZP,
    redeemertag_from_bytes: LP,
    redeemertag_from_hex: FP,
    redeemertag_from_json: RP,
    redeemertag_kind: MP,
    redeemertag_new_cert: IP,
    redeemertag_new_mint: DP,
    redeemertag_new_reward: UP,
    redeemertag_new_spend: $P,
    redeemertag_to_bytes: OP,
    redeemertag_to_hex: NP,
    redeemertag_to_js_value: PP,
    redeemertag_to_json: TP,
    relay_as_multi_host_name: jk,
    relay_as_single_host_addr: kk,
    relay_as_single_host_name: xk,
    relay_from_bytes: pk,
    relay_from_hex: wk,
    relay_from_json: bk,
    relay_kind: vk,
    relay_new_multi_host_name: mk,
    relay_new_single_host_addr: hk,
    relay_new_single_host_name: yk,
    relay_to_bytes: lk,
    relay_to_hex: uk,
    relay_to_js_value: gk,
    relay_to_json: fk,
    relays_add: Qy,
    relays_from_bytes: Ry,
    relays_from_hex: Dy,
    relays_from_json: My,
    relays_get: Wy,
    relays_len: $5,
    relays_new: vS,
    relays_to_bytes: Py,
    relays_to_hex: $y,
    relays_to_js_value: Uy,
    relays_to_json: Iy,
    rewardaddress_from_address: EI,
    rewardaddress_new: nU,
    rewardaddress_payment_cred: rU,
    rewardaddress_to_address: SI,
    rewardaddresses_add: e0,
    rewardaddresses_from_bytes: Yk,
    rewardaddresses_from_hex: Kk,
    rewardaddresses_from_json: Gk,
    rewardaddresses_get: t0,
    rewardaddresses_len: I5,
    rewardaddresses_new: jS,
    rewardaddresses_to_bytes: qk,
    rewardaddresses_to_hex: Xk,
    rewardaddresses_to_js_value: Jk,
    rewardaddresses_to_json: Zk,
    scriptall_from_bytes: H0,
    scriptall_from_hex: Y0,
    scriptall_from_json: Z0,
    scriptall_native_scripts: J0,
    scriptall_new: G0,
    scriptall_to_bytes: A0,
    scriptall_to_hex: q0,
    scriptall_to_js_value: K0,
    scriptall_to_json: X0,
    scriptany_from_bytes: e4,
    scriptany_from_hex: r4,
    scriptany_from_json: o4,
    scriptany_native_scripts: G5,
    scriptany_new: SS,
    scriptany_to_bytes: t4,
    scriptany_to_hex: _4,
    scriptany_to_js_value: n4,
    scriptany_to_json: DS,
    scriptdatahash_from_bech32: qC,
    scriptdatahash_from_bytes: HC,
    scriptdatahash_from_hex: YC,
    scriptdatahash_to_bech32: KO,
    scriptdatahash_to_bytes: i7,
    scriptdatahash_to_hex: DO,
    scripthash_from_bech32: gC,
    scripthash_from_bytes: fC,
    scripthash_from_hex: bC,
    scripthash_to_bech32: QO,
    scripthash_to_bytes: GO,
    scripthash_to_hex: OO,
    scripthashes_add: ex,
    scripthashes_from_bytes: Y6,
    scripthashes_from_hex: K6,
    scripthashes_from_json: G6,
    scripthashes_get: tx,
    scripthashes_len: Q5,
    scripthashes_new: CS,
    scripthashes_to_bytes: q6,
    scripthashes_to_hex: X6,
    scripthashes_to_js_value: J6,
    scripthashes_to_json: Z6,
    scriptnofk_from_bytes: i4,
    scriptnofk_from_hex: d4,
    scriptnofk_from_json: u4,
    scriptnofk_n: B5,
    scriptnofk_native_scripts: w4,
    scriptnofk_new: f4,
    scriptnofk_to_bytes: a4,
    scriptnofk_to_hex: c4,
    scriptnofk_to_js_value: p4,
    scriptnofk_to_json: l4,
    scriptpubkey_addr_keyhash: Q0,
    scriptpubkey_from_bytes: $0,
    scriptpubkey_from_hex: I0,
    scriptpubkey_from_json: W0,
    scriptpubkey_new: V0,
    scriptpubkey_to_bytes: R0,
    scriptpubkey_to_hex: D0,
    scriptpubkey_to_js_value: M0,
    scriptpubkey_to_json: U0,
    scriptref_from_bytes: $4,
    scriptref_from_hex: I4,
    scriptref_from_json: W4,
    scriptref_is_native_script: B4,
    scriptref_is_plutus_script: A4,
    scriptref_native_script: H4,
    scriptref_new_native_script: Q4,
    scriptref_new_plutus_script: V4,
    scriptref_plutus_script: q4,
    scriptref_to_bytes: R4,
    scriptref_to_hex: D4,
    scriptref_to_js_value: M4,
    scriptref_to_json: U4,
    singlehostaddr_from_bytes: P1,
    singlehostaddr_from_hex: $1,
    singlehostaddr_from_json: U1,
    singlehostaddr_ipv4: W1,
    singlehostaddr_ipv6: Q1,
    singlehostaddr_new: V1,
    singlehostaddr_port: M1,
    singlehostaddr_to_bytes: T1,
    singlehostaddr_to_hex: R1,
    singlehostaddr_to_js_value: I1,
    singlehostaddr_to_json: D1,
    singlehostname_dns_name: kS,
    singlehostname_from_bytes: H1,
    singlehostname_from_hex: Y1,
    singlehostname_from_json: Z1,
    singlehostname_new: G1,
    singlehostname_port: J1,
    singlehostname_to_bytes: A1,
    singlehostname_to_hex: q1,
    singlehostname_to_js_value: K1,
    singlehostname_to_json: X1,
    stakecredential_from_bytes: MD,
    stakecredential_from_hex: QD,
    stakecredential_from_json: AD,
    stakecredential_from_keyhash: PD,
    stakecredential_from_scripthash: RD,
    stakecredential_kind: ID,
    stakecredential_to_bytes: UD,
    stakecredential_to_hex: WD,
    stakecredential_to_js_value: BD,
    stakecredential_to_json: VD,
    stakecredential_to_keyhash: $D,
    stakecredential_to_scripthash: DD,
    stakecredentials_add: Ak,
    stakecredentials_from_bytes: Ik,
    stakecredentials_from_hex: Mk,
    stakecredentials_from_json: Vk,
    stakecredentials_get: Bk,
    stakecredentials_len: D5,
    stakecredentials_new: xS,
    stakecredentials_to_bytes: Dk,
    stakecredentials_to_hex: Uk,
    stakecredentials_to_js_value: Qk,
    stakecredentials_to_json: Wk,
    stakedelegation_from_bytes: uy,
    stakedelegation_from_hex: fy,
    stakedelegation_from_json: hy,
    stakedelegation_new: my,
    stakedelegation_pool_keyhash: pS,
    stakedelegation_stake_credential: yy,
    stakedelegation_to_bytes: py,
    stakedelegation_to_hex: wy,
    stakedelegation_to_js_value: by,
    stakedelegation_to_json: gy,
    stakederegistration_from_bytes: ry,
    stakederegistration_from_hex: oy,
    stakederegistration_from_json: iy,
    stakederegistration_new: dy,
    stakederegistration_stake_credential: cy,
    stakederegistration_to_bytes: _y,
    stakederegistration_to_hex: ny,
    stakederegistration_to_js_value: ay,
    stakederegistration_to_json: sy,
    stakeregistration_from_bytes: Kh,
    stakeregistration_from_hex: Jh,
    stakeregistration_from_json: ty,
    stakeregistration_new: mS,
    stakeregistration_stake_credential: nS,
    stakeregistration_to_bytes: Xh,
    stakeregistration_to_hex: Zh,
    stakeregistration_to_js_value: Gh,
    stakeregistration_to_json: $S,
    strings_add: tR,
    strings_get: GP,
    strings_len: uR,
    strings_new: yR,
    timelockexpiry_from_bytes: j4,
    timelockexpiry_from_hex: E4,
    timelockexpiry_from_json: O4,
    timelockexpiry_new: F4,
    timelockexpiry_new_timelockexpiry: T4,
    timelockexpiry_slot: L4,
    timelockexpiry_slot_bignum: N4,
    timelockexpiry_to_bytes: x4,
    timelockexpiry_to_hex: S4,
    timelockexpiry_to_js_value: C4,
    timelockexpiry_to_json: z4,
    timelockstart_from_bytes: b4,
    timelockstart_from_hex: y4,
    timelockstart_from_json: v4,
    timelockstart_new: uS,
    timelockstart_new_timelockstart: hS,
    timelockstart_slot: _S,
    timelockstart_slot_bignum: eS,
    timelockstart_to_bytes: g4,
    timelockstart_to_hex: h4,
    timelockstart_to_js_value: m4,
    timelockstart_to_json: IS,
    transaction_auxiliary_data: Wg,
    transaction_body: Ig,
    transaction_from_bytes: Fg,
    transaction_from_hex: Pg,
    transaction_from_json: Dg,
    transaction_is_valid: Mg,
    transaction_new: Vg,
    transaction_set_is_valid: Qg,
    transaction_to_bytes: Ng,
    transaction_to_hex: Tg,
    transaction_to_js_value: $g,
    transaction_to_json: Rg,
    transaction_witness_set: Ug,
    transactionbatch_get: kD,
    transactionbatch_len: vD,
    transactionbatchlist_get: yD,
    transactionbatchlist_len: jD,
    transactionbodies_add: P2,
    transactionbodies_from_bytes: z2,
    transactionbodies_from_hex: O2,
    transactionbodies_from_json: F2,
    transactionbodies_get: T2,
    transactionbodies_len: A5,
    transactionbodies_new: OS,
    transactionbodies_to_bytes: E2,
    transactionbodies_to_hex: C2,
    transactionbodies_to_js_value: N2,
    transactionbodies_to_json: L2,
    transactionbody_auxiliary_data_hash: Yb,
    transactionbody_certs: Qb,
    transactionbody_collateral: sh,
    transactionbody_collateral_return: ph,
    transactionbody_fee: $b,
    transactionbody_from_bytes: Cb,
    transactionbody_from_hex: Lb,
    transactionbody_from_json: Tb,
    transactionbody_inputs: Pb,
    transactionbody_mint: th,
    transactionbody_multiassets: rS,
    transactionbody_network_id: dh,
    transactionbody_new: fh,
    transactionbody_new_tx_body: gh,
    transactionbody_outputs: Rb,
    transactionbody_reference_inputs: _h,
    transactionbody_remove_ttl: Mb,
    transactionbody_required_signers: ih,
    transactionbody_script_data_hash: nh,
    transactionbody_set_auxiliary_data_hash: qb,
    transactionbody_set_certs: Wb,
    transactionbody_set_collateral: oh,
    transactionbody_set_collateral_return: lh,
    transactionbody_set_mint: Gb,
    transactionbody_set_network_id: ch,
    transactionbody_set_reference_inputs: eh,
    transactionbody_set_required_signers: ah,
    transactionbody_set_script_data_hash: rh,
    transactionbody_set_total_collateral: uh,
    transactionbody_set_ttl: Ub,
    transactionbody_set_update: Ab,
    transactionbody_set_validity_start_interval: Xb,
    transactionbody_set_validity_start_interval_bignum: Kb,
    transactionbody_set_withdrawals: Vb,
    transactionbody_to_bytes: zb,
    transactionbody_to_hex: Ob,
    transactionbody_to_js_value: Fb,
    transactionbody_to_json: Nb,
    transactionbody_total_collateral: wh,
    transactionbody_ttl: Db,
    transactionbody_ttl_bignum: Ib,
    transactionbody_update: Hb,
    transactionbody_validity_start_interval: Jb,
    transactionbody_validity_start_interval_bignum: Zb,
    transactionbody_withdrawals: Bb,
    transactionbuilder_add_bootstrap_input: p$,
    transactionbuilder_add_change_if_needed: G$,
    transactionbuilder_add_change_if_needed_with_datum: tD,
    transactionbuilder_add_input: u$,
    transactionbuilder_add_inputs_from: t$,
    transactionbuilder_add_json_metadatum: T$,
    transactionbuilder_add_json_metadatum_with_schema: P$,
    transactionbuilder_add_key_input: i$,
    transactionbuilder_add_metadatum: F$,
    transactionbuilder_add_mint_asset: W$,
    transactionbuilder_add_mint_asset_and_output: Q$,
    transactionbuilder_add_mint_asset_and_output_min_required_coin: V$,
    transactionbuilder_add_native_script_input: d$,
    transactionbuilder_add_output: m$,
    transactionbuilder_add_plutus_script_input: l$,
    transactionbuilder_add_reference_input: a$,
    transactionbuilder_add_required_native_input_scripts: f$,
    transactionbuilder_add_required_plutus_input_scripts: g$,
    transactionbuilder_add_required_signer: nD,
    transactionbuilder_add_script_input: c$,
    transactionbuilder_build: aD,
    transactionbuilder_build_tx: iD,
    transactionbuilder_build_tx_unsafe: cD,
    transactionbuilder_calc_script_data_hash: eD,
    transactionbuilder_count_missing_input_scripts: w$,
    transactionbuilder_fee_for_input: y$,
    transactionbuilder_fee_for_output: v$,
    transactionbuilder_full_size: oD,
    transactionbuilder_get_auxiliary_data: O$,
    transactionbuilder_get_deposit: Z$,
    transactionbuilder_get_explicit_input: H$,
    transactionbuilder_get_explicit_output: K$,
    transactionbuilder_get_fee_if_set: J$,
    transactionbuilder_get_implicit_input: q$,
    transactionbuilder_get_mint: I$,
    transactionbuilder_get_mint_builder: $$,
    transactionbuilder_get_mint_scripts: U$,
    transactionbuilder_get_native_input_scripts: b$,
    transactionbuilder_get_plutus_input_scripts: h$,
    transactionbuilder_get_reference_inputs: A$,
    transactionbuilder_get_total_input: Y$,
    transactionbuilder_get_total_output: X$,
    transactionbuilder_min_fee: dD,
    transactionbuilder_new: B$,
    transactionbuilder_output_sizes: sD,
    transactionbuilder_remove_script_data_hash: rD,
    transactionbuilder_set_auxiliary_data: L$,
    transactionbuilder_set_certs: z$,
    transactionbuilder_set_collateral: _$,
    transactionbuilder_set_collateral_return: r$,
    transactionbuilder_set_collateral_return_and_total: n$,
    transactionbuilder_set_fee: k$,
    transactionbuilder_set_inputs: e$,
    transactionbuilder_set_metadata: N$,
    transactionbuilder_set_mint: D$,
    transactionbuilder_set_mint_asset: M$,
    transactionbuilder_set_mint_builder: R$,
    transactionbuilder_set_script_data_hash: _D,
    transactionbuilder_set_total_collateral: o$,
    transactionbuilder_set_total_collateral_and_return: s$,
    transactionbuilder_set_ttl: x$,
    transactionbuilder_set_ttl_bignum: j$,
    transactionbuilder_set_validity_start_interval: S$,
    transactionbuilder_set_validity_start_interval_bignum: E$,
    transactionbuilder_set_withdrawals: C$,
    transactionbuilderconfigbuilder_build: JR,
    transactionbuilderconfigbuilder_coins_per_utxo_byte: AR,
    transactionbuilderconfigbuilder_coins_per_utxo_word: BR,
    transactionbuilderconfigbuilder_ex_unit_prices: HR,
    transactionbuilderconfigbuilder_fee_algo: VR,
    transactionbuilderconfigbuilder_key_deposit: YR,
    transactionbuilderconfigbuilder_max_tx_size: KR,
    transactionbuilderconfigbuilder_max_value_size: XR,
    transactionbuilderconfigbuilder_new: QR,
    transactionbuilderconfigbuilder_pool_deposit: qR,
    transactionbuilderconfigbuilder_prefer_pure_change: ZR,
    transactionhash_from_bech32: yC,
    transactionhash_from_bytes: hC,
    transactionhash_from_hex: mC,
    transactionhash_to_bech32: AO,
    transactionhash_to_bytes: t7,
    transactionhash_to_hex: FO,
    transactioninput_from_bytes: yh,
    transactioninput_from_hex: vh,
    transactioninput_from_json: jh,
    transactioninput_index: Eh,
    transactioninput_new: zh,
    transactioninput_to_bytes: hh,
    transactioninput_to_hex: mh,
    transactioninput_to_js_value: xh,
    transactioninput_to_json: kh,
    transactioninput_transaction_id: Sh,
    transactioninputs_add: Gg,
    transactioninputs_from_bytes: Hg,
    transactioninputs_from_hex: Yg,
    transactioninputs_from_json: Zg,
    transactioninputs_get: Jg,
    transactioninputs_len: P5,
    transactioninputs_new: yS,
    transactioninputs_to_bytes: Ag,
    transactioninputs_to_hex: qg,
    transactioninputs_to_js_value: Kg,
    transactioninputs_to_json: Xg,
    transactioninputs_to_option: tb,
    transactionmetadatum_as_bytes: rN,
    transactionmetadatum_as_int: _N,
    transactionmetadatum_as_list: eN,
    transactionmetadatum_as_map: tN,
    transactionmetadatum_as_text: nN,
    transactionmetadatum_from_bytes: HL,
    transactionmetadatum_from_hex: YL,
    transactionmetadatum_kind: dR,
    transactionmetadatum_new_bytes: JL,
    transactionmetadatum_new_int: ZL,
    transactionmetadatum_new_list: KL,
    transactionmetadatum_new_map: XL,
    transactionmetadatum_new_text: GL,
    transactionmetadatum_to_bytes: AL,
    transactionmetadatum_to_hex: qL,
    transactionmetadatumlabels_add: lN,
    transactionmetadatumlabels_from_bytes: aN,
    transactionmetadatumlabels_from_hex: cN,
    transactionmetadatumlabels_get: dN,
    transactionmetadatumlabels_len: rR,
    transactionmetadatumlabels_new: hR,
    transactionmetadatumlabels_to_bytes: sN,
    transactionmetadatumlabels_to_hex: iN,
    transactionoutput_address: $h,
    transactionoutput_amount: Dh,
    transactionoutput_data_hash: Ih,
    transactionoutput_from_bytes: Lh,
    transactionoutput_from_hex: Fh,
    transactionoutput_from_json: Rh,
    transactionoutput_has_data_hash: Ah,
    transactionoutput_has_plutus_data: Bh,
    transactionoutput_has_script_ref: Hh,
    transactionoutput_new: qh,
    transactionoutput_plutus_data: Uh,
    transactionoutput_script_ref: Mh,
    transactionoutput_serialization_format: Yh,
    transactionoutput_set_data_hash: Vh,
    transactionoutput_set_plutus_data: Qh,
    transactionoutput_set_script_ref: Wh,
    transactionoutput_to_bytes: Oh,
    transactionoutput_to_hex: Nh,
    transactionoutput_to_js_value: Ph,
    transactionoutput_to_json: Th,
    transactionoutputamountbuilder_build: _E,
    transactionoutputamountbuilder_with_asset_and_min_required_coin: tE,
    transactionoutputamountbuilder_with_asset_and_min_required_coin_by_utxo_cost: eE,
    transactionoutputamountbuilder_with_coin: JS,
    transactionoutputamountbuilder_with_coin_and_asset: GS,
    transactionoutputamountbuilder_with_value: ZS,
    transactionoutputbuilder_new: BS,
    transactionoutputbuilder_next: XS,
    transactionoutputbuilder_with_address: AS,
    transactionoutputbuilder_with_data_hash: HS,
    transactionoutputbuilder_with_plutus_data: qS,
    transactionoutputbuilder_with_script_ref: YS,
    transactionoutputs_add: db,
    transactionoutputs_from_bytes: rb,
    transactionoutputs_from_hex: ob,
    transactionoutputs_from_json: ib,
    transactionoutputs_get: cb,
    transactionoutputs_len: T5,
    transactionoutputs_new: ES,
    transactionoutputs_to_bytes: _b,
    transactionoutputs_to_hex: nb,
    transactionoutputs_to_js_value: ab,
    transactionoutputs_to_json: sb,
    transactionunspentoutput_from_bytes: oE,
    transactionunspentoutput_from_hex: aE,
    transactionunspentoutput_from_json: dE,
    transactionunspentoutput_input: pE,
    transactionunspentoutput_new: lE,
    transactionunspentoutput_output: uE,
    transactionunspentoutput_to_bytes: nE,
    transactionunspentoutput_to_hex: sE,
    transactionunspentoutput_to_js_value: cE,
    transactionunspentoutput_to_json: iE,
    transactionunspentoutputs_add: vE,
    transactionunspentoutputs_from_json: bE,
    transactionunspentoutputs_get: mE,
    transactionunspentoutputs_len: yE,
    transactionunspentoutputs_new: hE,
    transactionunspentoutputs_to_js_value: gE,
    transactionunspentoutputs_to_json: fE,
    transactionwitnessset_bootstraps: E0,
    transactionwitnessset_from_bytes: f0,
    transactionwitnessset_from_hex: b0,
    transactionwitnessset_from_json: m0,
    transactionwitnessset_native_scripts: j0,
    transactionwitnessset_new: T0,
    transactionwitnessset_plutus_data: L0,
    transactionwitnessset_plutus_scripts: C0,
    transactionwitnessset_redeemers: F0,
    transactionwitnessset_set_bootstraps: S0,
    transactionwitnessset_set_native_scripts: x0,
    transactionwitnessset_set_plutus_data: O0,
    transactionwitnessset_set_plutus_scripts: z0,
    transactionwitnessset_set_redeemers: N0,
    transactionwitnessset_set_vkeys: v0,
    transactionwitnessset_to_bytes: w0,
    transactionwitnessset_to_hex: g0,
    transactionwitnessset_to_js_value: y0,
    transactionwitnessset_to_json: h0,
    transactionwitnessset_vkeys: k0,
    transactionwitnesssets_add: B2,
    transactionwitnesssets_from_bytes: D2,
    transactionwitnesssets_from_hex: U2,
    transactionwitnesssets_from_json: Q2,
    transactionwitnesssets_get: V2,
    transactionwitnesssets_len: H5,
    transactionwitnesssets_new: LS,
    transactionwitnesssets_to_bytes: $2,
    transactionwitnesssets_to_hex: I2,
    transactionwitnesssets_to_js_value: W2,
    transactionwitnesssets_to_json: M2,
    txbuilderconstants_plutus_alonzo_cost_models: mL,
    txbuilderconstants_plutus_default_cost_models: yL,
    txbuilderconstants_plutus_vasil_cost_models: kL,
    txinputsbuilder_add_bootstrap_input: rL,
    txinputsbuilder_add_input: nL,
    txinputsbuilder_add_key_input: G7,
    txinputsbuilder_add_native_script_input: eL,
    txinputsbuilder_add_plutus_script_input: _L,
    txinputsbuilder_add_required_native_input_scripts: sL,
    txinputsbuilder_add_required_plutus_input_scripts: aL,
    txinputsbuilder_add_required_script_input_witnesses: iL,
    txinputsbuilder_add_required_signer: uL,
    txinputsbuilder_add_required_signers: wL,
    txinputsbuilder_add_script_input: tL,
    txinputsbuilder_count_missing_input_scripts: oL,
    txinputsbuilder_get_native_input_scripts: dL,
    txinputsbuilder_get_plutus_input_scripts: lL,
    txinputsbuilder_get_ref_inputs: cL,
    txinputsbuilder_inputs: gL,
    txinputsbuilder_inputs_option: bL,
    txinputsbuilder_len: pL,
    txinputsbuilder_new: J7,
    txinputsbuilder_total_value: fL,
    unitinterval_denominator: Cg,
    unitinterval_from_bytes: kg,
    unitinterval_from_hex: jg,
    unitinterval_from_json: zg,
    unitinterval_new: Og,
    unitinterval_numerator: tS,
    unitinterval_to_bytes: vg,
    unitinterval_to_hex: xg,
    unitinterval_to_js_value: Eg,
    unitinterval_to_json: Sg,
    update_epoch: P6,
    update_from_bytes: z6,
    update_from_hex: O6,
    update_from_json: F6,
    update_new: R6,
    update_proposed_protocol_parameter_updates: T6,
    update_to_bytes: E6,
    update_to_hex: C6,
    update_to_js_value: N6,
    update_to_json: L6,
    url_from_bytes: l1,
    url_from_hex: u1,
    url_from_json: w1,
    url_new: f1,
    url_to_bytes: d1,
    url_to_hex: p1,
    url_to_js_value: aS,
    url_to_json: US,
    url_url: oS,
    value_checked_add: a8,
    value_checked_sub: i8,
    value_clamped_sub: c8,
    value_coin: r8,
    value_compare: d8,
    value_from_bytes: HE,
    value_from_hex: YE,
    value_from_json: ZE,
    value_is_zero: _8,
    value_multiasset: o8,
    value_new: JE,
    value_new_from_assets: GE,
    value_new_with_assets: t8,
    value_set_coin: n8,
    value_set_multiasset: s8,
    value_to_bytes: AE,
    value_to_hex: qE,
    value_to_js_value: KE,
    value_to_json: XE,
    value_zero: e8,
    vkey_from_bytes: Gz,
    vkey_from_hex: e9,
    vkey_from_json: n9,
    vkey_new: o9,
    vkey_public_key: s9,
    vkey_to_bytes: Jz,
    vkey_to_hex: t9,
    vkey_to_js_value: r9,
    vkey_to_json: _9,
    vkeys_add: c9,
    vkeys_get: i9,
    vkeys_len: EO,
    vkeys_new: p7,
    vkeywitness_from_bytes: p9,
    vkeywitness_from_hex: w9,
    vkeywitness_from_json: b9,
    vkeywitness_new: h9,
    vkeywitness_signature: WO,
    vkeywitness_to_bytes: l9,
    vkeywitness_to_hex: u9,
    vkeywitness_to_js_value: g9,
    vkeywitness_to_json: f9,
    vkeywitness_vkey: MO,
    vkeywitnesses_add: C9,
    vkeywitnesses_from_bytes: v9,
    vkeywitnesses_from_hex: x9,
    vkeywitnesses_from_json: E9,
    vkeywitnesses_get: z9,
    vkeywitnesses_len: SO,
    vkeywitnesses_new: l7,
    vkeywitnesses_to_bytes: m9,
    vkeywitnesses_to_hex: k9,
    vkeywitnesses_to_js_value: S9,
    vkeywitnesses_to_json: j9,
    vrfcert_from_bytes: bO,
    vrfcert_from_hex: yO,
    vrfcert_from_json: kO,
    vrfcert_new: jO,
    vrfcert_output: CO,
    vrfcert_proof: xO,
    vrfcert_to_bytes: gO,
    vrfcert_to_hex: hO,
    vrfcert_to_js_value: vO,
    vrfcert_to_json: mO,
    vrfkeyhash_from_bech32: IC,
    vrfkeyhash_from_bytes: DC,
    vrfkeyhash_from_hex: UC,
    vrfkeyhash_to_bech32: qO,
    vrfkeyhash_to_bytes: o7,
    vrfkeyhash_to_hex: PO,
    vrfvkey_from_bech32: KC,
    vrfvkey_from_bytes: XC,
    vrfvkey_from_hex: ZC,
    vrfvkey_to_bech32: ZO,
    vrfvkey_to_bytes: c7,
    vrfvkey_to_hex: IO,
    withdrawals_from_bytes: n0,
    withdrawals_from_hex: s0,
    withdrawals_from_json: c0,
    withdrawals_get: l0,
    withdrawals_insert: d0,
    withdrawals_keys: p0,
    withdrawals_len: U5,
    withdrawals_new: fS,
    withdrawals_to_bytes: r0,
    withdrawals_to_hex: o0,
    withdrawals_to_js_value: i0,
    withdrawals_to_json: a0
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  yf(lU);
  function pU(r) {
    const t = r.trim().toLowerCase().replace(/^0x/, "");
    if (t.length % 2 !== 0) throw new Error("Hex string has odd length");
    const e = new Uint8Array(t.length / 2);
    for (let s = 0; s < t.length; s += 2) e[s / 2] = parseInt(t.slice(s, s + 2), 16);
    return e;
  }
  function St(r) {
    return Array.from(r).map((t) => t.toString(16).padStart(2, "0")).join("");
  }
  function xd(r) {
    try {
      if (r.length % 2 !== 0) return null;
      let t = "";
      for (let e = 0; e < r.length; e += 2) {
        const s = parseInt(r.slice(e, e + 2), 16);
        if (s < 32 || s > 126) return null;
        t += String.fromCharCode(s);
      }
      return t || null;
    } catch {
      return null;
    }
  }
  function uU(r) {
    const t = r.trim();
    if (!t) return "";
    if (t.startsWith("{")) try {
      const e = JSON.parse(t);
      if (e && typeof e.cborHex == "string") return e.cborHex;
    } catch {
    }
    return t;
  }
  function wU() {
    const [r, t] = Me.useState(false), [e, s] = Me.useState(""), [o, n] = Me.useState(""), [c, d] = Me.useState("");
    Me.useEffect(() => {
      let k = false;
      try {
        typeof K_ == "function" ? k || t(true) : d("Cardano Serialization Lib not available");
      } catch (j) {
        d((j == null ? void 0 : j.message) ?? String(j));
      }
      return () => {
        k = true;
      };
    }, []), Me.useEffect(() => {
      const j = new URLSearchParams(window.location.search).get("cborHex");
      j && s(j);
    }, []);
    function p(k) {
      const j = Number(k.coin().to_str()), L = k.multiasset(), N = {
        lovelace: j
      };
      if (L) {
        const A = L.keys();
        for (let y = 0; y < A.len(); y++) {
          const b = A.get(y), v = L.get(b), z = v.keys(), D = `policy ${St(b.to_bytes())}`, T = {};
          for (let P = 0; P < z.len(); P++) {
            const Y = z.get(P), W = Number(v.get(Y).to_str()), wt = St(Y.name()), Vt = xd(wt), Se = Vt ? `asset ${wt} (${Vt})` : `asset ${wt}`;
            T[Se] = W;
          }
          N[D] = T;
        }
      }
      return N;
    }
    function l(k) {
      const j = Pt.from_bech32(k), L = k.startsWith("addr_test") ? "Testnet" : "Mainnet";
      let N = "Shelley", A = null, y = null, b = null, v = null;
      const z = Gn.from_address(j);
      if (z) {
        const T = z.payment_cred(), P = T.to_keyhash(), Y = T.to_scripthash();
        P && (A = St(P.to_bytes())), Y && (y = St(Y.to_bytes()));
        const W = z.stake_cred(), wt = W.to_keyhash(), Vt = W.to_scripthash();
        wt && (b = St(wt.to_bytes())), Vt && (v = St(Vt.to_bytes()));
      } else {
        const T = to.from_address(j);
        if (T) {
          const P = T.payment_cred(), Y = P.to_keyhash(), W = P.to_scripthash();
          Y && (A = St(Y.to_bytes())), W && (y = St(W.to_bytes()));
        }
      }
      return {
        network: L,
        addressEra: N,
        paymentField: A ? {
          "payment credential key hash": A
        } : y ? {
          "payment credential script hash": y
        } : {},
        stakeReference: b || v ? b ? {
          "stake credential key hash": b
        } : {
          "stake credential script hash": v
        } : null,
        referenceScript: null
      };
    }
    function m(k) {
      var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m2, _n2, _o2, _p2, _q, _r2, _s2, _t2, _u2, _v2, _w2, _x2, _y2, _z2, _A, _B, _C2, _D2, _E2, _F2, _G, _H, _I2, _J, _K, _L2, _M, _N2, _O2, _P2, _Q, _R2;
      const j = k.body(), L = j.inputs(), N = j.outputs(), A = [];
      for (let M = 0; M < L.len(); M++) {
        const I = L.get(M), X = St(I.transaction_id().to_bytes());
        A.push(`${X}#${I.index()}`);
      }
      const y = [];
      for (let M = 0; M < N.len(); M++) {
        const I = N.get(M), X = I.address().to_bech32(), { network: dt, addressEra: Ot, paymentField: jt, stakeReference: d_, referenceScript: Eo } = l(X), Hs = p(I.amount());
        y.push({
          address: X,
          "address era": Ot,
          amount: Hs,
          network: dt,
          ...jt,
          "reference script": Eo,
          "stake reference": d_
        });
      }
      const b = `${j.fee().to_str()} Lovelace`, v = j.ttl && typeof j.ttl == "function" ? j.ttl() : null, z = (typeof j.invalid_before == "function" ? j.invalid_before() : null) ?? (typeof j.validity_start_interval == "function" ? j.validity_start_interval() : null), F = typeof j.collateral == "function" ? j.collateral() : typeof j.collateral_inputs == "function" ? j.collateral_inputs() : null, D = [];
      if (F) for (let M = 0; M < F.len(); M++) {
        const I = F.get(M), X = St(I.transaction_id().to_bytes());
        D.push(`${X}#${I.index()}`);
      }
      const T = (_a2 = j.reference_inputs) == null ? void 0 : _a2.call(j), P = [];
      if (T) for (let M = 0; M < T.len(); M++) {
        const I = T.get(M), X = St(I.transaction_id().to_bytes());
        P.push(`${X}#${I.index()}`);
      }
      function Y(M) {
        var _a3;
        if (!M) return null;
        const I = M.keys();
        if (!I || I.len() === 0) return null;
        const X = {};
        for (let dt = 0; dt < I.len(); dt++) {
          const Ot = I.get(dt), jt = M.get(Ot), d_ = jt.keys(), Hs = `policy ${St(Ot.to_bytes())}`, cc = {};
          for (let qs = 0; qs < d_.len(); qs++) {
            const dc = d_.get(qs), lc = jt.get(dc), Up = ((_a3 = lc == null ? void 0 : lc.to_str) == null ? void 0 : _a3.call(lc)) ?? String(lc), Mp = Number(Up), Ys = St(dc.name()), pc = xd(Ys), Wp = pc ? `asset ${Ys} (${pc})` : `asset ${Ys}`;
            cc[Wp] = Mp;
          }
          X[Hs] = cc;
        }
        return X;
      }
      const W = Y((_b2 = j.mint) == null ? void 0 : _b2.call(j));
      function wt(M) {
        const I = M.address().to_bech32(), { network: X, addressEra: dt, paymentField: Ot, stakeReference: jt, referenceScript: d_ } = l(I), Eo = p(M.amount());
        return {
          address: I,
          "address era": dt,
          amount: Eo,
          network: X,
          ...Ot,
          "reference script": d_,
          "stake reference": jt
        };
      }
      const Vt = ((_c2 = j.collateral_return) == null ? void 0 : _c2.call(j)) ? wt(j.collateral_return()) : null, Se = ((_d2 = j.total_collateral) == null ? void 0 : _d2.call(j)) ? Number(j.total_collateral().to_str()) : null, Xr = (_e2 = j.required_signers) == null ? void 0 : _e2.call(j), As = Xr ? (() => {
        const M = [];
        for (let I = 0; I < Xr.len(); I++) M.push(St(Xr.get(I).to_bytes()));
        return M;
      })() : null, mr = (_f2 = j.withdrawals) == null ? void 0 : _f2.call(j);
      let Kr = null;
      if (mr) {
        const M = mr.keys(), I = {};
        for (let X = 0; X < M.len(); X++) {
          const dt = M.get(X), Ot = mr.get(dt);
          try {
            const jt = ((_i2 = (_g2 = dt.to_address) == null ? void 0 : (_h2 = _g2.call(dt)).to_bech32) == null ? void 0 : _i2.call(_h2)) ?? null;
            jt && (I[jt] = Number(Ot.to_str()));
          } catch {
            const jt = St(((_l2 = (_j2 = dt.to_address) == null ? void 0 : (_k2 = _j2.call(dt)).to_bytes) == null ? void 0 : _l2.call(_k2)) ?? new Uint8Array());
            jt && (I[jt] = Number(Ot.to_str()));
          }
        }
        Object.keys(I).length > 0 && (Kr = I);
      }
      const R = ((_m2 = j.update) == null ? void 0 : _m2.call(j)) ? {
        raw: St(((_o2 = (_n2 = j.update()).to_bytes) == null ? void 0 : _o2.call(_n2)) ?? new Uint8Array())
      } : null, U = ((_p2 = k.witness_set) == null ? void 0 : _p2.call(k)) ?? ((_q = k.witnesses) == null ? void 0 : _q.call(k));
      let V = [];
      U && (V = [
        {
          vkeys: ((_t2 = (_s2 = (_r2 = U.vkeys) == null ? void 0 : _r2.call(U)) == null ? void 0 : _s2.len) == null ? void 0 : _t2.call(_s2)) ?? 0,
          native_scripts: ((_w2 = (_v2 = (_u2 = U.native_scripts) == null ? void 0 : _u2.call(U)) == null ? void 0 : _v2.len) == null ? void 0 : _w2.call(_v2)) ?? 0,
          bootstrap_witnesses: ((_z2 = (_y2 = (_x2 = U.bootstraps) == null ? void 0 : _x2.call(U)) == null ? void 0 : _y2.len) == null ? void 0 : _z2.call(_y2)) ?? 0,
          plutus_v1_scripts: ((_C2 = (_B = (_A = U.plutus_scripts) == null ? void 0 : _A.call(U)) == null ? void 0 : _B.len) == null ? void 0 : _C2.call(_B)) ?? ((_F2 = (_E2 = (_D2 = U.plutus_v1_scripts) == null ? void 0 : _D2.call(U)) == null ? void 0 : _E2.len) == null ? void 0 : _F2.call(_E2)) ?? 0,
          plutus_v2_scripts: ((_I2 = (_H = (_G = U.plutus_v2_scripts) == null ? void 0 : _G.call(U)) == null ? void 0 : _H.len) == null ? void 0 : _I2.call(_H)) ?? 0,
          redeemers: ((_L2 = (_K = (_J = U.redeemers) == null ? void 0 : _J.call(U)) == null ? void 0 : _K.len) == null ? void 0 : _L2.call(_K)) ?? 0,
          datums: ((_O2 = (_N2 = (_M = U.plutus_data) == null ? void 0 : _M.call(U)) == null ? void 0 : _N2.len) == null ? void 0 : _O2.call(_N2)) ?? 0
        }
      ]);
      const ot = P.length > 0 || Vt || Se !== null ? "Babbage" : "Alonzo";
      function st(M) {
        var _a3;
        try {
          const I = M.as_text();
          if (typeof I == "string") return I;
        } catch {
        }
        try {
          const I = M.as_int();
          if (I) {
            const X = (_a3 = I.as_i32_or_nothing) == null ? void 0 : _a3.call(I);
            return typeof X == "number" ? X : Number(I.to_str());
          }
        } catch {
        }
        try {
          const I = M.as_bytes();
          if (I) return St(I);
        } catch {
        }
        try {
          const I = M.as_list();
          if (I) {
            const X = [];
            for (let dt = 0; dt < I.len(); dt++) X.push(st(I.get(dt)));
            return X;
          }
        } catch {
        }
        try {
          const I = M.as_map();
          if (I) {
            const X = I.keys(), dt = [];
            for (let Ot = 0; Ot < X.len(); Ot++) {
              const jt = X.get(Ot), d_ = I.get(jt);
              dt.push([
                st(jt),
                st(d_)
              ]);
            }
            return dt;
          }
        } catch {
        }
        return null;
      }
      let vr = null;
      const fe = ((_P2 = k.auxiliary_data) == null ? void 0 : _P2.call(k)) ?? k.auxiliary_data();
      if (fe) {
        const M = ((_Q = fe.metadata) == null ? void 0 : _Q.call(fe)) ?? fe.metadata();
        if (M) {
          const I = M.keys(), X = {};
          for (let dt = 0; dt < I.len(); dt++) {
            const Ot = I.get(dt), jt = M.get(Ot);
            X[Ot.to_str()] = st(jt);
          }
          Object.keys(X).length > 0 && (vr = X);
        }
      }
      return {
        "auxiliary scripts": null,
        certificates: ((_R2 = j.certs) == null ? void 0 : _R2.call(j)) ? "present" : null,
        "collateral inputs": D,
        era: ot,
        fee: b,
        inputs: A,
        metadata: vr,
        mint: W,
        outputs: y,
        "reference inputs": P,
        "required signers (payment key hashes needed for scripts)": As,
        "return collateral": Vt,
        "total collateral": Se,
        "update proposal": R,
        "validity range": {
          "lower bound": z,
          "upper bound": v
        },
        withdrawals: Kr,
        witnesses: V
      };
    }
    const x = (k) => {
      k && k.preventDefault();
      try {
        d(""), n("");
        const j = uU(e);
        if (!j) throw new Error("Please enter a CBOR hex string");
        const L = K_.from_bytes(pU(j)), N = m(L);
        n(JSON.stringify(N, null, 2));
      } catch (j) {
        d((j == null ? void 0 : j.message) ?? String(j));
      }
    };
    return K.jsxs("div", {
      className: "container",
      children: [
        K.jsxs("header", {
          children: [
            K.jsx("h1", {
              children: "Cardano Transaction Decoder"
            }),
            K.jsx("p", {
              children: "Paste your CBOR hex string to decode the transaction (runs fully in your browser)"
            })
          ]
        }),
        K.jsx("div", {
          className: "form-container",
          children: K.jsxs("form", {
            onSubmit: x,
            children: [
              K.jsxs("div", {
                className: "input-group",
                children: [
                  K.jsx("label", {
                    htmlFor: "cbor",
                    children: "CBOR Hex String:"
                  }),
                  K.jsx("textarea", {
                    id: "cbor",
                    value: e,
                    onChange: (k) => s(k.target.value),
                    placeholder: "Paste your CBOR hex string here...",
                    rows: 4
                  })
                ]
              }),
              K.jsx("button", {
                type: "submit",
                disabled: !r,
                children: r ? "Decode Transaction" : "Loading CSL..."
              })
            ]
          })
        }),
        K.jsxs("section", {
          className: "seo-copy",
          style: {
            marginTop: "1rem"
          },
          children: [
            K.jsx("h2", {
              children: "Free Cardano TX Decoder (CBOR)"
            }),
            K.jsx("p", {
              children: "Decode Cardano transactions directly in your browser. This Cardano TX decoder parses CBOR and shows inputs, outputs, multi-asset mint/burn, metadata, collateral inputs, reference inputs, required signers, validity range, withdrawals and more."
            }),
            K.jsx("h3", {
              children: "FAQ"
            }),
            K.jsxs("p", {
              children: [
                K.jsx("strong", {
                  children: "Is it safe?"
                }),
                " Yes. Decoding happens locally in your browser using WebAssembly."
              ]
            }),
            K.jsxs("p", {
              children: [
                K.jsx("strong", {
                  children: "What formats are supported?"
                }),
                " Paste raw CBOR hex or JSON containing a ",
                K.jsx("code", {
                  children: "cborHex"
                }),
                " field."
              ]
            }),
            K.jsxs("p", {
              children: [
                K.jsx("strong", {
                  children: "Which fields are decoded?"
                }),
                " We display a JSON similar to ",
                K.jsx("code", {
                  children: "cardano-cli transaction view"
                }),
                ", including mint, metadata, collateral, and reference inputs when present."
              ]
            })
          ]
        }),
        o && K.jsxs("div", {
          className: "result-container",
          children: [
            K.jsx("h3", {
              children: "Decoded Transaction:"
            }),
            K.jsx("pre", {
              children: o
            })
          ]
        }),
        c && K.jsxs("div", {
          className: "error-container",
          children: [
            K.jsx("h3", {
              children: "Error:"
            }),
            K.jsx("pre", {
              children: c
            })
          ]
        })
      ]
    });
  }
  const Ip = document.getElementById("root");
  if (!Ip) throw new Error("Root container not found");
  $p(Ip).render(K.jsx(nu.StrictMode, {
    children: K.jsx(wU, {})
  }));
})();
