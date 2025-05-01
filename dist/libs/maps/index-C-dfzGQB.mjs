import { jsx as Y, Fragment as ja, jsxs as Ie } from "react/jsx-runtime";
import * as T from "react";
import Ve, { forwardRef as En, useContext as Ot, useState as Fe, useEffect as ye, useRef as at, useImperativeHandle as Tn, useCallback as Do, useMemo as qt, useLayoutEffect as La, memo as $t } from "react";
import * as za from "react-dom";
import In, { createPortal as fs } from "react-dom";
function jh() {
  return /* @__PURE__ */ Y(ja, {});
}
function fo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function ht(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var o = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var qn = { exports: {} }, Va = qn.exports, jo;
function Wa() {
  return jo || (jo = 1, function(e, t) {
    (function(n, r) {
      e.exports = r();
    })(Va, function() {
      var n = 1e3, r = 6e4, o = 36e5, s = "millisecond", a = "second", l = "minute", c = "hour", u = "day", d = "week", p = "month", h = "quarter", b = "year", y = "date", f = "Invalid Date", S = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, x = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(A) {
        var O = ["th", "st", "nd", "rd"], _ = A % 100;
        return "[" + A + (O[(_ - 20) % 10] || O[_] || O[0]) + "]";
      } }, v = function(A, O, _) {
        var D = String(A);
        return !D || D.length >= O ? A : "" + Array(O + 1 - D.length).join(_) + A;
      }, E = { s: v, z: function(A) {
        var O = -A.utcOffset(), _ = Math.abs(O), D = Math.floor(_ / 60), F = _ % 60;
        return (O <= 0 ? "+" : "-") + v(D, 2, "0") + ":" + v(F, 2, "0");
      }, m: function A(O, _) {
        if (O.date() < _.date()) return -A(_, O);
        var D = 12 * (_.year() - O.year()) + (_.month() - O.month()), F = O.clone().add(D, p), W = _ - F < 0, $ = O.clone().add(D + (W ? -1 : 1), p);
        return +(-(D + (_ - F) / (W ? F - $ : $ - F)) || 0);
      }, a: function(A) {
        return A < 0 ? Math.ceil(A) || 0 : Math.floor(A);
      }, p: function(A) {
        return { M: p, y: b, w: d, d: u, D: y, h: c, m: l, s: a, ms: s, Q: h }[A] || String(A || "").toLowerCase().replace(/s$/, "");
      }, u: function(A) {
        return A === void 0;
      } }, g = "en", P = {};
      P[g] = M;
      var m = "$isDayjsObject", w = function(A) {
        return A instanceof j || !(!A || !A[m]);
      }, R = function A(O, _, D) {
        var F;
        if (!O) return g;
        if (typeof O == "string") {
          var W = O.toLowerCase();
          P[W] && (F = W), _ && (P[W] = _, F = W);
          var $ = O.split("-");
          if (!F && $.length > 1) return A($[0]);
        } else {
          var z = O.name;
          P[z] = O, F = z;
        }
        return !D && F && (g = F), F || !D && g;
      }, k = function(A, O) {
        if (w(A)) return A.clone();
        var _ = typeof O == "object" ? O : {};
        return _.date = A, _.args = arguments, new j(_);
      }, I = E;
      I.l = R, I.i = w, I.w = function(A, O) {
        return k(A, { locale: O.$L, utc: O.$u, x: O.$x, $offset: O.$offset });
      };
      var j = function() {
        function A(_) {
          this.$L = R(_.locale, null, !0), this.parse(_), this.$x = this.$x || _.x || {}, this[m] = !0;
        }
        var O = A.prototype;
        return O.parse = function(_) {
          this.$d = function(D) {
            var F = D.date, W = D.utc;
            if (F === null) return /* @__PURE__ */ new Date(NaN);
            if (I.u(F)) return /* @__PURE__ */ new Date();
            if (F instanceof Date) return new Date(F);
            if (typeof F == "string" && !/Z$/i.test(F)) {
              var $ = F.match(S);
              if ($) {
                var z = $[2] - 1 || 0, U = ($[7] || "0").substring(0, 3);
                return W ? new Date(Date.UTC($[1], z, $[3] || 1, $[4] || 0, $[5] || 0, $[6] || 0, U)) : new Date($[1], z, $[3] || 1, $[4] || 0, $[5] || 0, $[6] || 0, U);
              }
            }
            return new Date(F);
          }(_), this.init();
        }, O.init = function() {
          var _ = this.$d;
          this.$y = _.getFullYear(), this.$M = _.getMonth(), this.$D = _.getDate(), this.$W = _.getDay(), this.$H = _.getHours(), this.$m = _.getMinutes(), this.$s = _.getSeconds(), this.$ms = _.getMilliseconds();
        }, O.$utils = function() {
          return I;
        }, O.isValid = function() {
          return this.$d.toString() !== f;
        }, O.isSame = function(_, D) {
          var F = k(_);
          return this.startOf(D) <= F && F <= this.endOf(D);
        }, O.isAfter = function(_, D) {
          return k(_) < this.startOf(D);
        }, O.isBefore = function(_, D) {
          return this.endOf(D) < k(_);
        }, O.$g = function(_, D, F) {
          return I.u(_) ? this[D] : this.set(F, _);
        }, O.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, O.valueOf = function() {
          return this.$d.getTime();
        }, O.startOf = function(_, D) {
          var F = this, W = !!I.u(D) || D, $ = I.p(_), z = function(J, G) {
            var X = I.w(F.$u ? Date.UTC(F.$y, G, J) : new Date(F.$y, G, J), F);
            return W ? X : X.endOf(u);
          }, U = function(J, G) {
            return I.w(F.toDate()[J].apply(F.toDate("s"), (W ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(G)), F);
          }, q = this.$W, V = this.$M, B = this.$D, H = "set" + (this.$u ? "UTC" : "");
          switch ($) {
            case b:
              return W ? z(1, 0) : z(31, 11);
            case p:
              return W ? z(1, V) : z(0, V + 1);
            case d:
              var Z = this.$locale().weekStart || 0, K = (q < Z ? q + 7 : q) - Z;
              return z(W ? B - K : B + (6 - K), V);
            case u:
            case y:
              return U(H + "Hours", 0);
            case c:
              return U(H + "Minutes", 1);
            case l:
              return U(H + "Seconds", 2);
            case a:
              return U(H + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, O.endOf = function(_) {
          return this.startOf(_, !1);
        }, O.$set = function(_, D) {
          var F, W = I.p(_), $ = "set" + (this.$u ? "UTC" : ""), z = (F = {}, F[u] = $ + "Date", F[y] = $ + "Date", F[p] = $ + "Month", F[b] = $ + "FullYear", F[c] = $ + "Hours", F[l] = $ + "Minutes", F[a] = $ + "Seconds", F[s] = $ + "Milliseconds", F)[W], U = W === u ? this.$D + (D - this.$W) : D;
          if (W === p || W === b) {
            var q = this.clone().set(y, 1);
            q.$d[z](U), q.init(), this.$d = q.set(y, Math.min(this.$D, q.daysInMonth())).$d;
          } else z && this.$d[z](U);
          return this.init(), this;
        }, O.set = function(_, D) {
          return this.clone().$set(_, D);
        }, O.get = function(_) {
          return this[I.p(_)]();
        }, O.add = function(_, D) {
          var F, W = this;
          _ = Number(_);
          var $ = I.p(D), z = function(V) {
            var B = k(W);
            return I.w(B.date(B.date() + Math.round(V * _)), W);
          };
          if ($ === p) return this.set(p, this.$M + _);
          if ($ === b) return this.set(b, this.$y + _);
          if ($ === u) return z(1);
          if ($ === d) return z(7);
          var U = (F = {}, F[l] = r, F[c] = o, F[a] = n, F)[$] || 1, q = this.$d.getTime() + _ * U;
          return I.w(q, this);
        }, O.subtract = function(_, D) {
          return this.add(-1 * _, D);
        }, O.format = function(_) {
          var D = this, F = this.$locale();
          if (!this.isValid()) return F.invalidDate || f;
          var W = _ || "YYYY-MM-DDTHH:mm:ssZ", $ = I.z(this), z = this.$H, U = this.$m, q = this.$M, V = F.weekdays, B = F.months, H = F.meridiem, Z = function(G, X, N, Q) {
            return G && (G[X] || G(D, W)) || N[X].slice(0, Q);
          }, K = function(G) {
            return I.s(z % 12 || 12, G, "0");
          }, J = H || function(G, X, N) {
            var Q = G < 12 ? "AM" : "PM";
            return N ? Q.toLowerCase() : Q;
          };
          return W.replace(x, function(G, X) {
            return X || function(N) {
              switch (N) {
                case "YY":
                  return String(D.$y).slice(-2);
                case "YYYY":
                  return I.s(D.$y, 4, "0");
                case "M":
                  return q + 1;
                case "MM":
                  return I.s(q + 1, 2, "0");
                case "MMM":
                  return Z(F.monthsShort, q, B, 3);
                case "MMMM":
                  return Z(B, q);
                case "D":
                  return D.$D;
                case "DD":
                  return I.s(D.$D, 2, "0");
                case "d":
                  return String(D.$W);
                case "dd":
                  return Z(F.weekdaysMin, D.$W, V, 2);
                case "ddd":
                  return Z(F.weekdaysShort, D.$W, V, 3);
                case "dddd":
                  return V[D.$W];
                case "H":
                  return String(z);
                case "HH":
                  return I.s(z, 2, "0");
                case "h":
                  return K(1);
                case "hh":
                  return K(2);
                case "a":
                  return J(z, U, !0);
                case "A":
                  return J(z, U, !1);
                case "m":
                  return String(U);
                case "mm":
                  return I.s(U, 2, "0");
                case "s":
                  return String(D.$s);
                case "ss":
                  return I.s(D.$s, 2, "0");
                case "SSS":
                  return I.s(D.$ms, 3, "0");
                case "Z":
                  return $;
              }
              return null;
            }(G) || $.replace(":", "");
          });
        }, O.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, O.diff = function(_, D, F) {
          var W, $ = this, z = I.p(D), U = k(_), q = (U.utcOffset() - this.utcOffset()) * r, V = this - U, B = function() {
            return I.m($, U);
          };
          switch (z) {
            case b:
              W = B() / 12;
              break;
            case p:
              W = B();
              break;
            case h:
              W = B() / 3;
              break;
            case d:
              W = (V - q) / 6048e5;
              break;
            case u:
              W = (V - q) / 864e5;
              break;
            case c:
              W = V / o;
              break;
            case l:
              W = V / r;
              break;
            case a:
              W = V / n;
              break;
            default:
              W = V;
          }
          return F ? W : I.a(W);
        }, O.daysInMonth = function() {
          return this.endOf(p).$D;
        }, O.$locale = function() {
          return P[this.$L];
        }, O.locale = function(_, D) {
          if (!_) return this.$L;
          var F = this.clone(), W = R(_, D, !0);
          return W && (F.$L = W), F;
        }, O.clone = function() {
          return I.w(this.$d, this);
        }, O.toDate = function() {
          return new Date(this.valueOf());
        }, O.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, O.toISOString = function() {
          return this.$d.toISOString();
        }, O.toString = function() {
          return this.$d.toUTCString();
        }, A;
      }(), L = j.prototype;
      return k.prototype = L, [["$ms", s], ["$s", a], ["$m", l], ["$H", c], ["$W", u], ["$M", p], ["$y", b], ["$D", y]].forEach(function(A) {
        L[A[1]] = function(O) {
          return this.$g(O, A[0], A[1]);
        };
      }), k.extend = function(A, O) {
        return A.$i || (A(O, j, k), A.$i = !0), k;
      }, k.locale = R, k.isDayjs = w, k.unix = function(A) {
        return k(1e3 * A);
      }, k.en = P[g], k.Ls = P, k.p = {}, k;
    });
  }(qn)), qn.exports;
}
Wa();
function C() {
  return C = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, C.apply(null, arguments);
}
var An = { exports: {} }, Fn = { exports: {} }, le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lo;
function Ua() {
  if (Lo) return le;
  Lo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, M = e ? Symbol.for("react.scope") : 60119;
  function v(g) {
    if (typeof g == "object" && g !== null) {
      var P = g.$$typeof;
      switch (P) {
        case t:
          switch (g = g.type, g) {
            case c:
            case u:
            case r:
            case s:
            case o:
            case p:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case l:
                case d:
                case y:
                case b:
                case a:
                  return g;
                default:
                  return P;
              }
          }
        case n:
          return P;
      }
    }
  }
  function E(g) {
    return v(g) === u;
  }
  return le.AsyncMode = c, le.ConcurrentMode = u, le.ContextConsumer = l, le.ContextProvider = a, le.Element = t, le.ForwardRef = d, le.Fragment = r, le.Lazy = y, le.Memo = b, le.Portal = n, le.Profiler = s, le.StrictMode = o, le.Suspense = p, le.isAsyncMode = function(g) {
    return E(g) || v(g) === c;
  }, le.isConcurrentMode = E, le.isContextConsumer = function(g) {
    return v(g) === l;
  }, le.isContextProvider = function(g) {
    return v(g) === a;
  }, le.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, le.isForwardRef = function(g) {
    return v(g) === d;
  }, le.isFragment = function(g) {
    return v(g) === r;
  }, le.isLazy = function(g) {
    return v(g) === y;
  }, le.isMemo = function(g) {
    return v(g) === b;
  }, le.isPortal = function(g) {
    return v(g) === n;
  }, le.isProfiler = function(g) {
    return v(g) === s;
  }, le.isStrictMode = function(g) {
    return v(g) === o;
  }, le.isSuspense = function(g) {
    return v(g) === p;
  }, le.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === u || g === s || g === o || g === p || g === h || typeof g == "object" && g !== null && (g.$$typeof === y || g.$$typeof === b || g.$$typeof === a || g.$$typeof === l || g.$$typeof === d || g.$$typeof === S || g.$$typeof === x || g.$$typeof === M || g.$$typeof === f);
  }, le.typeOf = v, le;
}
var ce = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zo;
function qa() {
  return zo || (zo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, M = e ? Symbol.for("react.scope") : 60119;
    function v(N) {
      return typeof N == "string" || typeof N == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      N === r || N === u || N === s || N === o || N === p || N === h || typeof N == "object" && N !== null && (N.$$typeof === y || N.$$typeof === b || N.$$typeof === a || N.$$typeof === l || N.$$typeof === d || N.$$typeof === S || N.$$typeof === x || N.$$typeof === M || N.$$typeof === f);
    }
    function E(N) {
      if (typeof N == "object" && N !== null) {
        var Q = N.$$typeof;
        switch (Q) {
          case t:
            var ee = N.type;
            switch (ee) {
              case c:
              case u:
              case r:
              case s:
              case o:
              case p:
                return ee;
              default:
                var ne = ee && ee.$$typeof;
                switch (ne) {
                  case l:
                  case d:
                  case y:
                  case b:
                  case a:
                    return ne;
                  default:
                    return Q;
                }
            }
          case n:
            return Q;
        }
      }
    }
    var g = c, P = u, m = l, w = a, R = t, k = d, I = r, j = y, L = b, A = n, O = s, _ = o, D = p, F = !1;
    function W(N) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), $(N) || E(N) === c;
    }
    function $(N) {
      return E(N) === u;
    }
    function z(N) {
      return E(N) === l;
    }
    function U(N) {
      return E(N) === a;
    }
    function q(N) {
      return typeof N == "object" && N !== null && N.$$typeof === t;
    }
    function V(N) {
      return E(N) === d;
    }
    function B(N) {
      return E(N) === r;
    }
    function H(N) {
      return E(N) === y;
    }
    function Z(N) {
      return E(N) === b;
    }
    function K(N) {
      return E(N) === n;
    }
    function J(N) {
      return E(N) === s;
    }
    function G(N) {
      return E(N) === o;
    }
    function X(N) {
      return E(N) === p;
    }
    ce.AsyncMode = g, ce.ConcurrentMode = P, ce.ContextConsumer = m, ce.ContextProvider = w, ce.Element = R, ce.ForwardRef = k, ce.Fragment = I, ce.Lazy = j, ce.Memo = L, ce.Portal = A, ce.Profiler = O, ce.StrictMode = _, ce.Suspense = D, ce.isAsyncMode = W, ce.isConcurrentMode = $, ce.isContextConsumer = z, ce.isContextProvider = U, ce.isElement = q, ce.isForwardRef = V, ce.isFragment = B, ce.isLazy = H, ce.isMemo = Z, ce.isPortal = K, ce.isProfiler = J, ce.isStrictMode = G, ce.isSuspense = X, ce.isValidElementType = v, ce.typeOf = E;
  }()), ce;
}
var Vo;
function ps() {
  return Vo || (Vo = 1, process.env.NODE_ENV === "production" ? Fn.exports = Ua() : Fn.exports = qa()), Fn.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Mr, Wo;
function Ba() {
  if (Wo) return Mr;
  Wo = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var a = {}, l = 0; l < 10; l++)
        a["_" + String.fromCharCode(l)] = l;
      var c = Object.getOwnPropertyNames(a).map(function(d) {
        return a[d];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        u[d] = d;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Mr = o() ? Object.assign : function(s, a) {
    for (var l, c = r(s), u, d = 1; d < arguments.length; d++) {
      l = Object(arguments[d]);
      for (var p in l)
        t.call(l, p) && (c[p] = l[p]);
      if (e) {
        u = e(l);
        for (var h = 0; h < u.length; h++)
          n.call(l, u[h]) && (c[u[h]] = l[u[h]]);
      }
    }
    return c;
  }, Mr;
}
var kr, Uo;
function po() {
  if (Uo) return kr;
  Uo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return kr = e, kr;
}
var Ir, qo;
function ms() {
  return qo || (qo = 1, Ir = Function.call.bind(Object.prototype.hasOwnProperty)), Ir;
}
var Ar, Bo;
function Ha() {
  if (Bo) return Ar;
  Bo = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ po(), n = {}, r = /* @__PURE__ */ ms();
    e = function(s) {
      var a = "Warning: " + s;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(s, a, l, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in s)
        if (r(s, d)) {
          var p;
          try {
            if (typeof s[d] != "function") {
              var h = Error(
                (c || "React class") + ": " + l + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            p = s[d](a, d, c, l, null, t);
          } catch (y) {
            p = y;
          }
          if (p && !(p instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in n)) {
            n[p.message] = !0;
            var b = u ? u() : "";
            e(
              "Failed " + l + " type: " + p.message + (b ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Ar = o, Ar;
}
var Fr, Ho;
function Ya() {
  if (Ho) return Fr;
  Ho = 1;
  var e = ps(), t = Ba(), n = /* @__PURE__ */ po(), r = /* @__PURE__ */ ms(), o = /* @__PURE__ */ Ha(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(l) {
    var c = "Warning: " + l;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Fr = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function p($) {
      var z = $ && (u && $[u] || $[d]);
      if (typeof z == "function")
        return z;
    }
    var h = "<<anonymous>>", b = {
      array: x("array"),
      bigint: x("bigint"),
      bool: x("boolean"),
      func: x("function"),
      number: x("number"),
      object: x("object"),
      string: x("string"),
      symbol: x("symbol"),
      any: M(),
      arrayOf: v,
      element: E(),
      elementType: g(),
      instanceOf: P,
      node: k(),
      objectOf: w,
      oneOf: m,
      oneOfType: R,
      shape: j,
      exact: L
    };
    function y($, z) {
      return $ === z ? $ !== 0 || 1 / $ === 1 / z : $ !== $ && z !== z;
    }
    function f($, z) {
      this.message = $, this.data = z && typeof z == "object" ? z : {}, this.stack = "";
    }
    f.prototype = Error.prototype;
    function S($) {
      if (process.env.NODE_ENV !== "production")
        var z = {}, U = 0;
      function q(B, H, Z, K, J, G, X) {
        if (K = K || h, G = G || Z, X !== n) {
          if (c) {
            var N = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw N.name = "Invariant Violation", N;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Q = K + ":" + Z;
            !z[Q] && // Avoid spamming the console because they are often not actionable except for lib authors
            U < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + G + "` prop on `" + K + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), z[Q] = !0, U++);
          }
        }
        return H[Z] == null ? B ? H[Z] === null ? new f("The " + J + " `" + G + "` is marked as required " + ("in `" + K + "`, but its value is `null`.")) : new f("The " + J + " `" + G + "` is marked as required in " + ("`" + K + "`, but its value is `undefined`.")) : null : $(H, Z, K, J, G);
      }
      var V = q.bind(null, !1);
      return V.isRequired = q.bind(null, !0), V;
    }
    function x($) {
      function z(U, q, V, B, H, Z) {
        var K = U[q], J = _(K);
        if (J !== $) {
          var G = D(K);
          return new f(
            "Invalid " + B + " `" + H + "` of type " + ("`" + G + "` supplied to `" + V + "`, expected ") + ("`" + $ + "`."),
            { expectedType: $ }
          );
        }
        return null;
      }
      return S(z);
    }
    function M() {
      return S(a);
    }
    function v($) {
      function z(U, q, V, B, H) {
        if (typeof $ != "function")
          return new f("Property `" + H + "` of component `" + V + "` has invalid PropType notation inside arrayOf.");
        var Z = U[q];
        if (!Array.isArray(Z)) {
          var K = _(Z);
          return new f("Invalid " + B + " `" + H + "` of type " + ("`" + K + "` supplied to `" + V + "`, expected an array."));
        }
        for (var J = 0; J < Z.length; J++) {
          var G = $(Z, J, V, B, H + "[" + J + "]", n);
          if (G instanceof Error)
            return G;
        }
        return null;
      }
      return S(z);
    }
    function E() {
      function $(z, U, q, V, B) {
        var H = z[U];
        if (!l(H)) {
          var Z = _(H);
          return new f("Invalid " + V + " `" + B + "` of type " + ("`" + Z + "` supplied to `" + q + "`, expected a single ReactElement."));
        }
        return null;
      }
      return S($);
    }
    function g() {
      function $(z, U, q, V, B) {
        var H = z[U];
        if (!e.isValidElementType(H)) {
          var Z = _(H);
          return new f("Invalid " + V + " `" + B + "` of type " + ("`" + Z + "` supplied to `" + q + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return S($);
    }
    function P($) {
      function z(U, q, V, B, H) {
        if (!(U[q] instanceof $)) {
          var Z = $.name || h, K = W(U[q]);
          return new f("Invalid " + B + " `" + H + "` of type " + ("`" + K + "` supplied to `" + V + "`, expected ") + ("instance of `" + Z + "`."));
        }
        return null;
      }
      return S(z);
    }
    function m($) {
      if (!Array.isArray($))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), a;
      function z(U, q, V, B, H) {
        for (var Z = U[q], K = 0; K < $.length; K++)
          if (y(Z, $[K]))
            return null;
        var J = JSON.stringify($, function(X, N) {
          var Q = D(N);
          return Q === "symbol" ? String(N) : N;
        });
        return new f("Invalid " + B + " `" + H + "` of value `" + String(Z) + "` " + ("supplied to `" + V + "`, expected one of " + J + "."));
      }
      return S(z);
    }
    function w($) {
      function z(U, q, V, B, H) {
        if (typeof $ != "function")
          return new f("Property `" + H + "` of component `" + V + "` has invalid PropType notation inside objectOf.");
        var Z = U[q], K = _(Z);
        if (K !== "object")
          return new f("Invalid " + B + " `" + H + "` of type " + ("`" + K + "` supplied to `" + V + "`, expected an object."));
        for (var J in Z)
          if (r(Z, J)) {
            var G = $(Z, J, V, B, H + "." + J, n);
            if (G instanceof Error)
              return G;
          }
        return null;
      }
      return S(z);
    }
    function R($) {
      if (!Array.isArray($))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var z = 0; z < $.length; z++) {
        var U = $[z];
        if (typeof U != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + F(U) + " at index " + z + "."
          ), a;
      }
      function q(V, B, H, Z, K) {
        for (var J = [], G = 0; G < $.length; G++) {
          var X = $[G], N = X(V, B, H, Z, K, n);
          if (N == null)
            return null;
          N.data && r(N.data, "expectedType") && J.push(N.data.expectedType);
        }
        var Q = J.length > 0 ? ", expected one of type [" + J.join(", ") + "]" : "";
        return new f("Invalid " + Z + " `" + K + "` supplied to " + ("`" + H + "`" + Q + "."));
      }
      return S(q);
    }
    function k() {
      function $(z, U, q, V, B) {
        return A(z[U]) ? null : new f("Invalid " + V + " `" + B + "` supplied to " + ("`" + q + "`, expected a ReactNode."));
      }
      return S($);
    }
    function I($, z, U, q, V) {
      return new f(
        ($ || "React class") + ": " + z + " type `" + U + "." + q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + V + "`."
      );
    }
    function j($) {
      function z(U, q, V, B, H) {
        var Z = U[q], K = _(Z);
        if (K !== "object")
          return new f("Invalid " + B + " `" + H + "` of type `" + K + "` " + ("supplied to `" + V + "`, expected `object`."));
        for (var J in $) {
          var G = $[J];
          if (typeof G != "function")
            return I(V, B, H, J, D(G));
          var X = G(Z, J, V, B, H + "." + J, n);
          if (X)
            return X;
        }
        return null;
      }
      return S(z);
    }
    function L($) {
      function z(U, q, V, B, H) {
        var Z = U[q], K = _(Z);
        if (K !== "object")
          return new f("Invalid " + B + " `" + H + "` of type `" + K + "` " + ("supplied to `" + V + "`, expected `object`."));
        var J = t({}, U[q], $);
        for (var G in J) {
          var X = $[G];
          if (r($, G) && typeof X != "function")
            return I(V, B, H, G, D(X));
          if (!X)
            return new f(
              "Invalid " + B + " `" + H + "` key `" + G + "` supplied to `" + V + "`.\nBad object: " + JSON.stringify(U[q], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys($), null, "  ")
            );
          var N = X(Z, G, V, B, H + "." + G, n);
          if (N)
            return N;
        }
        return null;
      }
      return S(z);
    }
    function A($) {
      switch (typeof $) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !$;
        case "object":
          if (Array.isArray($))
            return $.every(A);
          if ($ === null || l($))
            return !0;
          var z = p($);
          if (z) {
            var U = z.call($), q;
            if (z !== $.entries) {
              for (; !(q = U.next()).done; )
                if (!A(q.value))
                  return !1;
            } else
              for (; !(q = U.next()).done; ) {
                var V = q.value;
                if (V && !A(V[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function O($, z) {
      return $ === "symbol" ? !0 : z ? z["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && z instanceof Symbol : !1;
    }
    function _($) {
      var z = typeof $;
      return Array.isArray($) ? "array" : $ instanceof RegExp ? "object" : O(z, $) ? "symbol" : z;
    }
    function D($) {
      if (typeof $ > "u" || $ === null)
        return "" + $;
      var z = _($);
      if (z === "object") {
        if ($ instanceof Date)
          return "date";
        if ($ instanceof RegExp)
          return "regexp";
      }
      return z;
    }
    function F($) {
      var z = D($);
      switch (z) {
        case "array":
        case "object":
          return "an " + z;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + z;
        default:
          return z;
      }
    }
    function W($) {
      return !$.constructor || !$.constructor.name ? h : $.constructor.name;
    }
    return b.checkPropTypes = o, b.resetWarningCache = o.resetWarningCache, b.PropTypes = b, b;
  }, Fr;
}
var Dr, Yo;
function Ka() {
  if (Yo) return Dr;
  Yo = 1;
  var e = /* @__PURE__ */ po();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Dr = function() {
    function r(a, l, c, u, d, p) {
      if (p !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
      }
    }
    r.isRequired = r;
    function o() {
      return r;
    }
    var s = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: o,
      element: r,
      elementType: r,
      instanceOf: o,
      node: r,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, Dr;
}
var Ko;
function Ga() {
  if (Ko) return An.exports;
  if (Ko = 1, process.env.NODE_ENV !== "production") {
    var e = ps(), t = !0;
    An.exports = /* @__PURE__ */ Ya()(e.isElement, t);
  } else
    An.exports = /* @__PURE__ */ Ka()();
  return An.exports;
}
var Xa = /* @__PURE__ */ Ga();
const i = /* @__PURE__ */ fo(Xa);
function wt(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Za = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: wt
}, Symbol.toStringTag, { value: "Module" }));
function Ja(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Qa(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var el = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(o) {
      var s;
      r.tags.length === 0 ? r.insertionPoint ? s = r.insertionPoint.nextSibling : r.prepend ? s = r.container.firstChild : s = r.before : s = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, s), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Qa(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var s = Ja(o);
      try {
        s.insertRule(r, s.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      var o;
      return (o = r.parentNode) == null ? void 0 : o.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), ke = "-ms-", Gn = "-moz-", se = "-webkit-", hs = "comm", mo = "rule", ho = "decl", tl = "@import", gs = "@keyframes", nl = "@layer", rl = Math.abs, ar = String.fromCharCode, ol = Object.assign;
function il(e, t) {
  return Ne(e, 0) ^ 45 ? (((t << 2 ^ Ne(e, 0)) << 2 ^ Ne(e, 1)) << 2 ^ Ne(e, 2)) << 2 ^ Ne(e, 3) : 0;
}
function ys(e) {
  return e.trim();
}
function sl(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ae(e, t, n) {
  return e.replace(t, n);
}
function Xr(e, t) {
  return e.indexOf(t);
}
function Ne(e, t) {
  return e.charCodeAt(t) | 0;
}
function hn(e, t, n) {
  return e.slice(t, n);
}
function Je(e) {
  return e.length;
}
function go(e) {
  return e.length;
}
function Dn(e, t) {
  return t.push(e), e;
}
function al(e, t) {
  return e.map(t).join("");
}
var lr = 1, Bt = 1, bs = 0, Le = 0, Te = 0, Xt = "";
function cr(e, t, n, r, o, s, a) {
  return { value: e, root: t, parent: n, type: r, props: o, children: s, line: lr, column: Bt, length: a, return: "" };
}
function nn(e, t) {
  return ol(cr("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function ll() {
  return Te;
}
function cl() {
  return Te = Le > 0 ? Ne(Xt, --Le) : 0, Bt--, Te === 10 && (Bt = 1, lr--), Te;
}
function We() {
  return Te = Le < bs ? Ne(Xt, Le++) : 0, Bt++, Te === 10 && (Bt = 1, lr++), Te;
}
function et() {
  return Ne(Xt, Le);
}
function Bn() {
  return Le;
}
function Sn(e, t) {
  return hn(Xt, e, t);
}
function gn(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function vs(e) {
  return lr = Bt = 1, bs = Je(Xt = e), Le = 0, [];
}
function xs(e) {
  return Xt = "", e;
}
function Hn(e) {
  return ys(Sn(Le - 1, Zr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ul(e) {
  for (; (Te = et()) && Te < 33; )
    We();
  return gn(e) > 2 || gn(Te) > 3 ? "" : " ";
}
function dl(e, t) {
  for (; --t && We() && !(Te < 48 || Te > 102 || Te > 57 && Te < 65 || Te > 70 && Te < 97); )
    ;
  return Sn(e, Bn() + (t < 6 && et() == 32 && We() == 32));
}
function Zr(e) {
  for (; We(); )
    switch (Te) {
      // ] ) " '
      case e:
        return Le;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Zr(Te);
        break;
      // (
      case 40:
        e === 41 && Zr(e);
        break;
      // \
      case 92:
        We();
        break;
    }
  return Le;
}
function fl(e, t) {
  for (; We() && e + Te !== 57; )
    if (e + Te === 84 && et() === 47)
      break;
  return "/*" + Sn(t, Le - 1) + "*" + ar(e === 47 ? e : We());
}
function pl(e) {
  for (; !gn(et()); )
    We();
  return Sn(e, Le);
}
function ml(e) {
  return xs(Yn("", null, null, null, [""], e = vs(e), 0, [0], e));
}
function Yn(e, t, n, r, o, s, a, l, c) {
  for (var u = 0, d = 0, p = a, h = 0, b = 0, y = 0, f = 1, S = 1, x = 1, M = 0, v = "", E = o, g = s, P = r, m = v; S; )
    switch (y = M, M = We()) {
      // (
      case 40:
        if (y != 108 && Ne(m, p - 1) == 58) {
          Xr(m += ae(Hn(M), "&", "&\f"), "&\f") != -1 && (x = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        m += Hn(M);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        m += ul(y);
        break;
      // \
      case 92:
        m += dl(Bn() - 1, 7);
        continue;
      // /
      case 47:
        switch (et()) {
          case 42:
          case 47:
            Dn(hl(fl(We(), Bn()), t, n), c);
            break;
          default:
            m += "/";
        }
        break;
      // {
      case 123 * f:
        l[u++] = Je(m) * x;
      // } ; \0
      case 125 * f:
      case 59:
      case 0:
        switch (M) {
          // \0 }
          case 0:
          case 125:
            S = 0;
          // ;
          case 59 + d:
            x == -1 && (m = ae(m, /\f/g, "")), b > 0 && Je(m) - p && Dn(b > 32 ? Xo(m + ";", r, n, p - 1) : Xo(ae(m, " ", "") + ";", r, n, p - 2), c);
            break;
          // @ ;
          case 59:
            m += ";";
          // { rule/at-rule
          default:
            if (Dn(P = Go(m, t, n, u, d, o, l, v, E = [], g = [], p), s), M === 123)
              if (d === 0)
                Yn(m, t, P, P, E, s, p, l, g);
              else
                switch (h === 99 && Ne(m, 3) === 110 ? 100 : h) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Yn(e, P, P, r && Dn(Go(e, P, P, 0, 0, o, l, v, o, E = [], p), g), o, g, p, l, r ? E : g);
                    break;
                  default:
                    Yn(m, P, P, P, [""], g, 0, l, g);
                }
        }
        u = d = b = 0, f = x = 1, v = m = "", p = a;
        break;
      // :
      case 58:
        p = 1 + Je(m), b = y;
      default:
        if (f < 1) {
          if (M == 123)
            --f;
          else if (M == 125 && f++ == 0 && cl() == 125)
            continue;
        }
        switch (m += ar(M), M * f) {
          // &
          case 38:
            x = d > 0 ? 1 : (m += "\f", -1);
            break;
          // ,
          case 44:
            l[u++] = (Je(m) - 1) * x, x = 1;
            break;
          // @
          case 64:
            et() === 45 && (m += Hn(We())), h = et(), d = p = Je(v = m += pl(Bn())), M++;
            break;
          // -
          case 45:
            y === 45 && Je(m) == 2 && (f = 0);
        }
    }
  return s;
}
function Go(e, t, n, r, o, s, a, l, c, u, d) {
  for (var p = o - 1, h = o === 0 ? s : [""], b = go(h), y = 0, f = 0, S = 0; y < r; ++y)
    for (var x = 0, M = hn(e, p + 1, p = rl(f = a[y])), v = e; x < b; ++x)
      (v = ys(f > 0 ? h[x] + " " + M : ae(M, /&\f/g, h[x]))) && (c[S++] = v);
  return cr(e, t, n, o === 0 ? mo : l, c, u, d);
}
function hl(e, t, n) {
  return cr(e, t, n, hs, ar(ll()), hn(e, 2, -2), 0);
}
function Xo(e, t, n, r) {
  return cr(e, t, n, ho, hn(e, 0, r), hn(e, r + 1, -1), r);
}
function Wt(e, t) {
  for (var n = "", r = go(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function gl(e, t, n, r) {
  switch (e.type) {
    case nl:
      if (e.children.length) break;
    case tl:
    case ho:
      return e.return = e.return || e.value;
    case hs:
      return "";
    case gs:
      return e.return = e.value + "{" + Wt(e.children, r) + "}";
    case mo:
      e.value = e.props.join(",");
  }
  return Je(n = Wt(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function yl(e) {
  var t = go(e);
  return function(n, r, o, s) {
    for (var a = "", l = 0; l < t; l++)
      a += e[l](n, r, o, s) || "";
    return a;
  };
}
function bl(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Es(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var vl = function(t, n, r) {
  for (var o = 0, s = 0; o = s, s = et(), o === 38 && s === 12 && (n[r] = 1), !gn(s); )
    We();
  return Sn(t, Le);
}, xl = function(t, n) {
  var r = -1, o = 44;
  do
    switch (gn(o)) {
      case 0:
        o === 38 && et() === 12 && (n[r] = 1), t[r] += vl(Le - 1, n, r);
        break;
      case 2:
        t[r] += Hn(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = et() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      // fallthrough
      default:
        t[r] += ar(o);
    }
  while (o = We());
  return t;
}, El = function(t, n) {
  return xs(xl(vs(t), n));
}, Zo = /* @__PURE__ */ new WeakMap(), Tl = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Zo.get(r)) && !o) {
      Zo.set(t, !0);
      for (var s = [], a = El(n, s), l = r.props, c = 0, u = 0; c < a.length; c++)
        for (var d = 0; d < l.length; d++, u++)
          t.props[u] = s[c] ? a[c].replace(/&\f/g, l[d]) : l[d] + " " + a[c];
    }
  }
}, Sl = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Ts(e, t) {
  switch (il(e, t)) {
    // color-adjust
    case 5103:
      return se + "print-" + e + e;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return se + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return se + e + Gn + e + ke + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return se + e + ke + e + e;
    // order
    case 6165:
      return se + e + ke + "flex-" + e + e;
    // align-items
    case 5187:
      return se + e + ae(e, /(\w+).+(:[^]+)/, se + "box-$1$2" + ke + "flex-$1$2") + e;
    // align-self
    case 5443:
      return se + e + ke + "flex-item-" + ae(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return se + e + ke + "flex-line-pack" + ae(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return se + e + ke + ae(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return se + e + ke + ae(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return se + "box-" + ae(e, "-grow", "") + se + e + ke + ae(e, "grow", "positive") + e;
    // transition
    case 4554:
      return se + ae(e, /([^-])(transform)/g, "$1" + se + "$2") + e;
    // cursor
    case 6187:
      return ae(ae(ae(e, /(zoom-|grab)/, se + "$1"), /(image-set)/, se + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return ae(e, /(image-set\([^]*)/, se + "$1$`$1");
    // justify-content
    case 4968:
      return ae(ae(e, /(.+:)(flex-)?(.*)/, se + "box-pack:$3" + ke + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + se + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ae(e, /(.+)-inline(.+)/, se + "$1$2") + e;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Je(e) - 1 - t > 6) switch (Ne(e, t + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (Ne(e, t + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return ae(e, /(.+:)(.+)-([^]+)/, "$1" + se + "$2-$3$1" + Gn + (Ne(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~Xr(e, "stretch") ? Ts(ae(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (Ne(e, t + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (Ne(e, Je(e) - 3 - (~Xr(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return ae(e, ":", ":" + se) + e;
        // (inline-)?fl(e)x
        case 101:
          return ae(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + se + (Ne(e, 14) === 45 ? "inline-" : "") + "box$3$1" + se + "$2$3$1" + ke + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (Ne(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return se + e + ke + ae(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return se + e + ke + ae(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return se + e + ke + ae(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return se + e + ke + e + e;
  }
  return e;
}
var Ol = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case ho:
      t.return = Ts(t.value, t.length);
      break;
    case gs:
      return Wt([nn(t, {
        value: ae(t.value, "@", "@" + se)
      })], o);
    case mo:
      if (t.length) return al(t.props, function(s) {
        switch (sl(s, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return Wt([nn(t, {
              props: [ae(s, /:(read-\w+)/, ":" + Gn + "$1")]
            })], o);
          // :placeholder
          case "::placeholder":
            return Wt([nn(t, {
              props: [ae(s, /:(plac\w+)/, ":" + se + "input-$1")]
            }), nn(t, {
              props: [ae(s, /:(plac\w+)/, ":" + Gn + "$1")]
            }), nn(t, {
              props: [ae(s, /:(plac\w+)/, ke + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, wl = [Ol], Ss = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(f) {
      var S = f.getAttribute("data-emotion");
      S.indexOf(" ") !== -1 && (document.head.appendChild(f), f.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || wl, s = {}, a, l = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(f) {
      for (var S = f.getAttribute("data-emotion").split(" "), x = 1; x < S.length; x++)
        s[S[x]] = !0;
      l.push(f);
    }
  );
  var c, u = [Tl, Sl];
  {
    var d, p = [gl, bl(function(f) {
      d.insert(f);
    })], h = yl(u.concat(o, p)), b = function(S) {
      return Wt(ml(S), h);
    };
    c = function(S, x, M, v) {
      d = M, b(S ? S + "{" + x.styles + "}" : x.styles), v && (y.inserted[x.name] = !0);
    };
  }
  var y = {
    key: n,
    sheet: new el({
      key: n,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: s,
    registered: {},
    insert: c
  };
  return y.sheet.hydrate(l), y;
}, jn = { exports: {} }, ue = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jo;
function _l() {
  if (Jo) return ue;
  Jo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, M = e ? Symbol.for("react.scope") : 60119;
  function v(g) {
    if (typeof g == "object" && g !== null) {
      var P = g.$$typeof;
      switch (P) {
        case t:
          switch (g = g.type, g) {
            case c:
            case u:
            case r:
            case s:
            case o:
            case p:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case l:
                case d:
                case y:
                case b:
                case a:
                  return g;
                default:
                  return P;
              }
          }
        case n:
          return P;
      }
    }
  }
  function E(g) {
    return v(g) === u;
  }
  return ue.AsyncMode = c, ue.ConcurrentMode = u, ue.ContextConsumer = l, ue.ContextProvider = a, ue.Element = t, ue.ForwardRef = d, ue.Fragment = r, ue.Lazy = y, ue.Memo = b, ue.Portal = n, ue.Profiler = s, ue.StrictMode = o, ue.Suspense = p, ue.isAsyncMode = function(g) {
    return E(g) || v(g) === c;
  }, ue.isConcurrentMode = E, ue.isContextConsumer = function(g) {
    return v(g) === l;
  }, ue.isContextProvider = function(g) {
    return v(g) === a;
  }, ue.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, ue.isForwardRef = function(g) {
    return v(g) === d;
  }, ue.isFragment = function(g) {
    return v(g) === r;
  }, ue.isLazy = function(g) {
    return v(g) === y;
  }, ue.isMemo = function(g) {
    return v(g) === b;
  }, ue.isPortal = function(g) {
    return v(g) === n;
  }, ue.isProfiler = function(g) {
    return v(g) === s;
  }, ue.isStrictMode = function(g) {
    return v(g) === o;
  }, ue.isSuspense = function(g) {
    return v(g) === p;
  }, ue.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === u || g === s || g === o || g === p || g === h || typeof g == "object" && g !== null && (g.$$typeof === y || g.$$typeof === b || g.$$typeof === a || g.$$typeof === l || g.$$typeof === d || g.$$typeof === S || g.$$typeof === x || g.$$typeof === M || g.$$typeof === f);
  }, ue.typeOf = v, ue;
}
var de = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qo;
function Cl() {
  return Qo || (Qo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, M = e ? Symbol.for("react.scope") : 60119;
    function v(N) {
      return typeof N == "string" || typeof N == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      N === r || N === u || N === s || N === o || N === p || N === h || typeof N == "object" && N !== null && (N.$$typeof === y || N.$$typeof === b || N.$$typeof === a || N.$$typeof === l || N.$$typeof === d || N.$$typeof === S || N.$$typeof === x || N.$$typeof === M || N.$$typeof === f);
    }
    function E(N) {
      if (typeof N == "object" && N !== null) {
        var Q = N.$$typeof;
        switch (Q) {
          case t:
            var ee = N.type;
            switch (ee) {
              case c:
              case u:
              case r:
              case s:
              case o:
              case p:
                return ee;
              default:
                var ne = ee && ee.$$typeof;
                switch (ne) {
                  case l:
                  case d:
                  case y:
                  case b:
                  case a:
                    return ne;
                  default:
                    return Q;
                }
            }
          case n:
            return Q;
        }
      }
    }
    var g = c, P = u, m = l, w = a, R = t, k = d, I = r, j = y, L = b, A = n, O = s, _ = o, D = p, F = !1;
    function W(N) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), $(N) || E(N) === c;
    }
    function $(N) {
      return E(N) === u;
    }
    function z(N) {
      return E(N) === l;
    }
    function U(N) {
      return E(N) === a;
    }
    function q(N) {
      return typeof N == "object" && N !== null && N.$$typeof === t;
    }
    function V(N) {
      return E(N) === d;
    }
    function B(N) {
      return E(N) === r;
    }
    function H(N) {
      return E(N) === y;
    }
    function Z(N) {
      return E(N) === b;
    }
    function K(N) {
      return E(N) === n;
    }
    function J(N) {
      return E(N) === s;
    }
    function G(N) {
      return E(N) === o;
    }
    function X(N) {
      return E(N) === p;
    }
    de.AsyncMode = g, de.ConcurrentMode = P, de.ContextConsumer = m, de.ContextProvider = w, de.Element = R, de.ForwardRef = k, de.Fragment = I, de.Lazy = j, de.Memo = L, de.Portal = A, de.Profiler = O, de.StrictMode = _, de.Suspense = D, de.isAsyncMode = W, de.isConcurrentMode = $, de.isContextConsumer = z, de.isContextProvider = U, de.isElement = q, de.isForwardRef = V, de.isFragment = B, de.isLazy = H, de.isMemo = Z, de.isPortal = K, de.isProfiler = J, de.isStrictMode = G, de.isSuspense = X, de.isValidElementType = v, de.typeOf = E;
  }()), de;
}
var ei;
function Rl() {
  return ei || (ei = 1, process.env.NODE_ENV === "production" ? jn.exports = _l() : jn.exports = Cl()), jn.exports;
}
var jr, ti;
function $l() {
  if (ti) return jr;
  ti = 1;
  var e = Rl(), t = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, n = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, r = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, o = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, s = {};
  s[e.ForwardRef] = r, s[e.Memo] = o;
  function a(y) {
    return e.isMemo(y) ? o : s[y.$$typeof] || t;
  }
  var l = Object.defineProperty, c = Object.getOwnPropertyNames, u = Object.getOwnPropertySymbols, d = Object.getOwnPropertyDescriptor, p = Object.getPrototypeOf, h = Object.prototype;
  function b(y, f, S) {
    if (typeof f != "string") {
      if (h) {
        var x = p(f);
        x && x !== h && b(y, x, S);
      }
      var M = c(f);
      u && (M = M.concat(u(f)));
      for (var v = a(y), E = a(f), g = 0; g < M.length; ++g) {
        var P = M[g];
        if (!n[P] && !(S && S[P]) && !(E && E[P]) && !(v && v[P])) {
          var m = d(f, P);
          try {
            l(y, P, m);
          } catch {
          }
        }
      }
    }
    return y;
  }
  return jr = b, jr;
}
$l();
var Pl = !0;
function Os(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var yo = function(t, n, r) {
  var o = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Pl === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, bo = function(t, n, r) {
  yo(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var s = n;
    do
      t.insert(n === s ? "." + o : "", s, t.sheet, !0), s = s.next;
    while (s !== void 0);
  }
};
function Nl(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var Ml = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, kl = /[A-Z]|^ms/g, Il = /_EMO_([^_]+?)_([^]*?)_EMO_/g, ws = function(t) {
  return t.charCodeAt(1) === 45;
}, ni = function(t) {
  return t != null && typeof t != "boolean";
}, Lr = /* @__PURE__ */ Es(function(e) {
  return ws(e) ? e : e.replace(kl, "-$&").toLowerCase();
}), ri = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Il, function(r, o, s) {
          return Qe = {
            name: o,
            styles: s,
            next: Qe
          }, o;
        });
  }
  return Ml[t] !== 1 && !ws(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function yn(e, t, n) {
  if (n == null)
    return "";
  var r = n;
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var o = n;
      if (o.anim === 1)
        return Qe = {
          name: o.name,
          styles: o.styles,
          next: Qe
        }, o.name;
      var s = n;
      if (s.styles !== void 0) {
        var a = s.next;
        if (a !== void 0)
          for (; a !== void 0; )
            Qe = {
              name: a.name,
              styles: a.styles,
              next: Qe
            }, a = a.next;
        var l = s.styles + ";";
        return l;
      }
      return Al(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var c = Qe, u = n(e);
        return Qe = c, yn(e, t, u);
      }
      break;
    }
  }
  var d = n;
  if (t == null)
    return d;
  var p = t[d];
  return p !== void 0 ? p : d;
}
function Al(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += yn(e, t, n[o]) + ";";
  else
    for (var s in n) {
      var a = n[s];
      if (typeof a != "object") {
        var l = a;
        t != null && t[l] !== void 0 ? r += s + "{" + t[l] + "}" : ni(l) && (r += Lr(s) + ":" + ri(s, l) + ";");
      } else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var c = 0; c < a.length; c++)
          ni(a[c]) && (r += Lr(s) + ":" + ri(s, a[c]) + ";");
      else {
        var u = yn(e, t, a);
        switch (s) {
          case "animation":
          case "animationName": {
            r += Lr(s) + ":" + u + ";";
            break;
          }
          default:
            r += s + "{" + u + "}";
        }
      }
    }
  return r;
}
var oi = /label:\s*([^\s;{]+)\s*(;|$)/g, Qe;
function ur(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  Qe = void 0;
  var s = e[0];
  if (s == null || s.raw === void 0)
    r = !1, o += yn(n, t, s);
  else {
    var a = s;
    o += a[0];
  }
  for (var l = 1; l < e.length; l++)
    if (o += yn(n, t, e[l]), r) {
      var c = s;
      o += c[l];
    }
  oi.lastIndex = 0;
  for (var u = "", d; (d = oi.exec(o)) !== null; )
    u += "-" + d[1];
  var p = Nl(o) + u;
  return {
    name: p,
    styles: o,
    next: Qe
  };
}
var Fl = function(t) {
  return t();
}, _s = T.useInsertionEffect ? T.useInsertionEffect : !1, Cs = _s || Fl, ii = _s || T.useLayoutEffect, Rs = /* @__PURE__ */ T.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Ss({
    key: "css"
  }) : null
), Dl = Rs.Provider, vo = function(t) {
  return /* @__PURE__ */ En(function(n, r) {
    var o = Ot(Rs);
    return t(n, o, r);
  });
}, On = /* @__PURE__ */ T.createContext({}), xo = {}.hasOwnProperty, Jr = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", jl = function(t, n) {
  var r = {};
  for (var o in n)
    xo.call(n, o) && (r[o] = n[o]);
  return r[Jr] = t, r;
}, Ll = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return yo(n, r, o), Cs(function() {
    return bo(n, r, o);
  }), null;
}, zl = /* @__PURE__ */ vo(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[Jr], s = [r], a = "";
  typeof e.className == "string" ? a = Os(t.registered, s, e.className) : e.className != null && (a = e.className + " ");
  var l = ur(s, void 0, T.useContext(On));
  a += t.key + "-" + l.name;
  var c = {};
  for (var u in e)
    xo.call(e, u) && u !== "css" && u !== Jr && (c[u] = e[u]);
  return c.className = a, n && (c.ref = n), /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement(Ll, {
    cache: t,
    serialized: l,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ T.createElement(o, c));
}), Vl = zl, si = function(t, n) {
  var r = arguments;
  if (n == null || !xo.call(n, "css"))
    return T.createElement.apply(void 0, r);
  var o = r.length, s = new Array(o);
  s[0] = Vl, s[1] = jl(t, n);
  for (var a = 2; a < o; a++)
    s[a] = r[a];
  return T.createElement.apply(null, s);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(si || (si = {}));
var Wl = /* @__PURE__ */ vo(function(e, t) {
  var n = e.styles, r = ur([n], void 0, T.useContext(On)), o = T.useRef();
  return ii(function() {
    var s = t.key + "-global", a = new t.sheet.constructor({
      key: s,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, c = document.querySelector('style[data-emotion="' + s + " " + r.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), c !== null && (l = !0, c.setAttribute("data-emotion", s), a.hydrate([c])), o.current = [a, l], function() {
      a.flush();
    };
  }, [t]), ii(function() {
    var s = o.current, a = s[0], l = s[1];
    if (l) {
      s[1] = !1;
      return;
    }
    if (r.next !== void 0 && bo(t, r.next, !0), a.tags.length) {
      var c = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = c, a.flush();
    }
    t.insert("", r, a, !1);
  }, [t, r.name]), null;
});
function $s() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return ur(t);
}
function Ul() {
  var e = $s.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var ql = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Bl = /* @__PURE__ */ Es(
  function(e) {
    return ql.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Hl = Bl, Yl = function(t) {
  return t !== "theme";
}, ai = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Hl : Yl;
}, li = function(t, n, r) {
  var o;
  if (n) {
    var s = n.shouldForwardProp;
    o = t.__emotion_forwardProp && s ? function(a) {
      return t.__emotion_forwardProp(a) && s(a);
    } : s;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, Kl = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return yo(n, r, o), Cs(function() {
    return bo(n, r, o);
  }), null;
}, Gl = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, s, a;
  n !== void 0 && (s = n.label, a = n.target);
  var l = li(t, n, r), c = l || ai(o), u = !c("as");
  return function() {
    var d = arguments, p = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (s !== void 0 && p.push("label:" + s + ";"), d[0] == null || d[0].raw === void 0)
      p.push.apply(p, d);
    else {
      var h = d[0];
      p.push(h[0]);
      for (var b = d.length, y = 1; y < b; y++)
        p.push(d[y], h[y]);
    }
    var f = vo(function(S, x, M) {
      var v = u && S.as || o, E = "", g = [], P = S;
      if (S.theme == null) {
        P = {};
        for (var m in S)
          P[m] = S[m];
        P.theme = T.useContext(On);
      }
      typeof S.className == "string" ? E = Os(x.registered, g, S.className) : S.className != null && (E = S.className + " ");
      var w = ur(p.concat(g), x.registered, P);
      E += x.key + "-" + w.name, a !== void 0 && (E += " " + a);
      var R = u && l === void 0 ? ai(v) : c, k = {};
      for (var I in S)
        u && I === "as" || R(I) && (k[I] = S[I]);
      return k.className = E, M && (k.ref = M), /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement(Kl, {
        cache: x,
        serialized: w,
        isStringTag: typeof v == "string"
      }), /* @__PURE__ */ T.createElement(v, k));
    });
    return f.displayName = s !== void 0 ? s : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", f.defaultProps = t.defaultProps, f.__emotion_real = f, f.__emotion_base = o, f.__emotion_styles = p, f.__emotion_forwardProp = l, Object.defineProperty(f, "toString", {
      value: function() {
        return "." + a;
      }
    }), f.withComponent = function(S, x) {
      var M = e(S, C({}, n, x, {
        shouldForwardProp: li(f, x, !0)
      }));
      return M.apply(void 0, p);
    }, f;
  };
}, Xl = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Qr = Gl.bind(null);
Xl.forEach(function(e) {
  Qr[e] = Qr(e);
});
let eo;
typeof document == "object" && (eo = Ss({
  key: "css",
  prepend: !0
}));
function Ps(e) {
  const {
    injectFirst: t,
    children: n
  } = e;
  return t && eo ? /* @__PURE__ */ Y(Dl, {
    value: eo,
    children: n
  }) : n;
}
process.env.NODE_ENV !== "production" && (Ps.propTypes = {
  /**
   * Your component tree.
   */
  children: i.node,
  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override MUI's styles, set this prop.
   */
  injectFirst: i.bool
});
function Zl(e) {
  return e == null || Object.keys(e).length === 0;
}
function Eo(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ Y(Wl, {
    styles: typeof t == "function" ? (o) => t(Zl(o) ? n : o) : t
  });
}
process.env.NODE_ENV !== "production" && (Eo.propTypes = {
  defaultTheme: i.object,
  styles: i.oneOfType([i.array, i.string, i.object, i.func])
});
/**
 * @mui/styled-engine v5.16.14
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Jl(e, t) {
  const n = Qr(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((s) => s === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
const Ql = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, ec = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalStyles: Eo,
  StyledEngineProvider: Ps,
  ThemeContext: On,
  css: $s,
  default: Jl,
  internal_processStyles: Ql,
  keyframes: Ul
}, Symbol.toStringTag, { value: "Module" }));
function re(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function ft(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Ns(e) {
  if (/* @__PURE__ */ T.isValidElement(e) || !ft(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Ns(e[n]);
  }), t;
}
function Ue(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? C({}, e) : e;
  return ft(e) && ft(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ T.isValidElement(t[o]) ? r[o] = t[o] : ft(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && ft(e[o]) ? r[o] = Ue(e[o], t[o], n) : n.clone ? r[o] = ft(t[o]) ? Ns(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const tc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ue,
  isPlainObject: ft
}, Symbol.toStringTag, { value: "Module" })), nc = ["values", "unit", "step"], rc = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => C({}, n, {
    [r.key]: r.val
  }), {});
};
function Ms(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: n = "px",
    step: r = 5
  } = e, o = re(e, nc), s = rc(t), a = Object.keys(s);
  function l(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n})`;
  }
  function c(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - r / 100}${n})`;
  }
  function u(h, b) {
    const y = a.indexOf(b);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n}) and (max-width:${(y !== -1 && typeof t[a[y]] == "number" ? t[a[y]] : b) - r / 100}${n})`;
  }
  function d(h) {
    return a.indexOf(h) + 1 < a.length ? u(h, a[a.indexOf(h) + 1]) : l(h);
  }
  function p(h) {
    const b = a.indexOf(h);
    return b === 0 ? l(a[1]) : b === a.length - 1 ? c(a[b]) : u(h, a[a.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return C({
    keys: a,
    values: s,
    up: l,
    down: c,
    between: u,
    only: d,
    not: p,
    unit: n
  }, o);
}
const oc = {
  borderRadius: 4
}, gt = process.env.NODE_ENV !== "production" ? i.oneOfType([i.number, i.string, i.object, i.array]) : {};
function fn(e, t) {
  return t ? Ue(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const To = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, ci = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${To[e]}px)`
};
function lt(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const s = r.breakpoints || ci;
    return t.reduce((a, l, c) => (a[s.up(s.keys[c])] = n(t[c]), a), {});
  }
  if (typeof t == "object") {
    const s = r.breakpoints || ci;
    return Object.keys(t).reduce((a, l) => {
      if (Object.keys(s.values || To).indexOf(l) !== -1) {
        const c = s.up(l);
        a[c] = n(t[l], l);
      } else {
        const c = l;
        a[c] = t[c];
      }
      return a;
    }, {});
  }
  return n(t);
}
function ic(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, o) => {
    const s = e.up(o);
    return r[s] = {}, r;
  }, {})) || {};
}
function sc(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function Se(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : wt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const ac = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Se
}, Symbol.toStringTag, { value: "Module" }));
function dr(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, s) => o && o[s] ? o[s] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function Xn(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = dr(e, n) || r, t && (o = t(o, r, e)), o;
}
function Ee(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, s = (a) => {
    if (a[t] == null)
      return null;
    const l = a[t], c = a.theme, u = dr(c, r) || {};
    return lt(a, l, (p) => {
      let h = Xn(u, o, p);
      return p === h && typeof p == "string" && (h = Xn(u, o, `${t}${p === "default" ? "" : Se(p)}`, p)), n === !1 ? h : {
        [n]: h
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: gt
  } : {}, s.filterProps = [t], s;
}
function lc(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const cc = {
  m: "margin",
  p: "padding"
}, uc = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, ui = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, dc = lc((e) => {
  if (e.length > 2)
    if (ui[e])
      e = ui[e];
    else
      return [e];
  const [t, n] = e.split(""), r = cc[t], o = uc[n] || "";
  return Array.isArray(o) ? o.map((s) => r + s) : [r + o];
}), fr = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], pr = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], fc = [...fr, ...pr];
function wn(e, t, n, r) {
  var o;
  const s = (o = dr(e, t, !1)) != null ? o : n;
  return typeof s == "number" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${a}.`), s * a) : Array.isArray(s) ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > s.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(s)}.`, `${a} > ${s.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), s[a]) : typeof s == "function" ? s : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${s}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function ks(e) {
  return wn(e, "spacing", 8, "spacing");
}
function _n(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function pc(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = _n(t, n), r), {});
}
function mc(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const o = dc(n), s = pc(o, r), a = e[n];
  return lt(e, a, s);
}
function Is(e, t) {
  const n = ks(e.theme);
  return Object.keys(e).map((r) => mc(e, t, r, n)).reduce(fn, {});
}
function be(e) {
  return Is(e, fr);
}
be.propTypes = process.env.NODE_ENV !== "production" ? fr.reduce((e, t) => (e[t] = gt, e), {}) : {};
be.filterProps = fr;
function ve(e) {
  return Is(e, pr);
}
ve.propTypes = process.env.NODE_ENV !== "production" ? pr.reduce((e, t) => (e[t] = gt, e), {}) : {};
ve.filterProps = pr;
process.env.NODE_ENV !== "production" && fc.reduce((e, t) => (e[t] = gt, e), {});
function hc(e = 8) {
  if (e.mui)
    return e;
  const t = ks({
    spacing: e
  }), n = (...r) => (process.env.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((s) => {
    const a = t(s);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return n.mui = !0, n;
}
function mr(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((s) => {
    r[s] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, s) => t[s] ? fn(o, t[s](r)) : o, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, o) => Object.assign(r, o.propTypes), {}) : {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function Ye(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Ke(e, t) {
  return Ee({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const gc = Ke("border", Ye), yc = Ke("borderTop", Ye), bc = Ke("borderRight", Ye), vc = Ke("borderBottom", Ye), xc = Ke("borderLeft", Ye), Ec = Ke("borderColor"), Tc = Ke("borderTopColor"), Sc = Ke("borderRightColor"), Oc = Ke("borderBottomColor"), wc = Ke("borderLeftColor"), _c = Ke("outline", Ye), Cc = Ke("outlineColor"), hr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = wn(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: _n(t, r)
    });
    return lt(e, e.borderRadius, n);
  }
  return null;
};
hr.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: gt
} : {};
hr.filterProps = ["borderRadius"];
mr(gc, yc, bc, vc, xc, Ec, Tc, Sc, Oc, wc, hr, _c, Cc);
const gr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = wn(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: _n(t, r)
    });
    return lt(e, e.gap, n);
  }
  return null;
};
gr.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: gt
} : {};
gr.filterProps = ["gap"];
const yr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = wn(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: _n(t, r)
    });
    return lt(e, e.columnGap, n);
  }
  return null;
};
yr.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: gt
} : {};
yr.filterProps = ["columnGap"];
const br = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = wn(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: _n(t, r)
    });
    return lt(e, e.rowGap, n);
  }
  return null;
};
br.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: gt
} : {};
br.filterProps = ["rowGap"];
const Rc = Ee({
  prop: "gridColumn"
}), $c = Ee({
  prop: "gridRow"
}), Pc = Ee({
  prop: "gridAutoFlow"
}), Nc = Ee({
  prop: "gridAutoColumns"
}), Mc = Ee({
  prop: "gridAutoRows"
}), kc = Ee({
  prop: "gridTemplateColumns"
}), Ic = Ee({
  prop: "gridTemplateRows"
}), Ac = Ee({
  prop: "gridTemplateAreas"
}), Fc = Ee({
  prop: "gridArea"
});
mr(gr, yr, br, Rc, $c, Pc, Nc, Mc, kc, Ic, Ac, Fc);
function Ut(e, t) {
  return t === "grey" ? t : e;
}
const Dc = Ee({
  prop: "color",
  themeKey: "palette",
  transform: Ut
}), jc = Ee({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Ut
}), Lc = Ee({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Ut
});
mr(Dc, jc, Lc);
function ze(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const zc = Ee({
  prop: "width",
  transform: ze
}), So = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, o;
      const s = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || To[n];
      return s ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${s}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: s
      } : {
        maxWidth: ze(n)
      };
    };
    return lt(e, e.maxWidth, t);
  }
  return null;
};
So.filterProps = ["maxWidth"];
const Vc = Ee({
  prop: "minWidth",
  transform: ze
}), Wc = Ee({
  prop: "height",
  transform: ze
}), Uc = Ee({
  prop: "maxHeight",
  transform: ze
}), qc = Ee({
  prop: "minHeight",
  transform: ze
});
Ee({
  prop: "size",
  cssProperty: "width",
  transform: ze
});
Ee({
  prop: "size",
  cssProperty: "height",
  transform: ze
});
const Bc = Ee({
  prop: "boxSizing"
});
mr(zc, So, Vc, Wc, Uc, qc, Bc);
const Cn = {
  // borders
  border: {
    themeKey: "borders",
    transform: Ye
  },
  borderTop: {
    themeKey: "borders",
    transform: Ye
  },
  borderRight: {
    themeKey: "borders",
    transform: Ye
  },
  borderBottom: {
    themeKey: "borders",
    transform: Ye
  },
  borderLeft: {
    themeKey: "borders",
    transform: Ye
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Ye
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: hr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Ut
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Ut
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Ut
  },
  // spacing
  p: {
    style: ve
  },
  pt: {
    style: ve
  },
  pr: {
    style: ve
  },
  pb: {
    style: ve
  },
  pl: {
    style: ve
  },
  px: {
    style: ve
  },
  py: {
    style: ve
  },
  padding: {
    style: ve
  },
  paddingTop: {
    style: ve
  },
  paddingRight: {
    style: ve
  },
  paddingBottom: {
    style: ve
  },
  paddingLeft: {
    style: ve
  },
  paddingX: {
    style: ve
  },
  paddingY: {
    style: ve
  },
  paddingInline: {
    style: ve
  },
  paddingInlineStart: {
    style: ve
  },
  paddingInlineEnd: {
    style: ve
  },
  paddingBlock: {
    style: ve
  },
  paddingBlockStart: {
    style: ve
  },
  paddingBlockEnd: {
    style: ve
  },
  m: {
    style: be
  },
  mt: {
    style: be
  },
  mr: {
    style: be
  },
  mb: {
    style: be
  },
  ml: {
    style: be
  },
  mx: {
    style: be
  },
  my: {
    style: be
  },
  margin: {
    style: be
  },
  marginTop: {
    style: be
  },
  marginRight: {
    style: be
  },
  marginBottom: {
    style: be
  },
  marginLeft: {
    style: be
  },
  marginX: {
    style: be
  },
  marginY: {
    style: be
  },
  marginInline: {
    style: be
  },
  marginInlineStart: {
    style: be
  },
  marginInlineEnd: {
    style: be
  },
  marginBlock: {
    style: be
  },
  marginBlockStart: {
    style: be
  },
  marginBlockEnd: {
    style: be
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: gr
  },
  rowGap: {
    style: br
  },
  columnGap: {
    style: yr
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: ze
  },
  maxWidth: {
    style: So
  },
  minWidth: {
    transform: ze
  },
  height: {
    transform: ze
  },
  maxHeight: {
    transform: ze
  },
  minHeight: {
    transform: ze
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function Hc(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function Yc(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function As() {
  function e(n, r, o, s) {
    const a = {
      [n]: r,
      theme: o
    }, l = s[n];
    if (!l)
      return {
        [n]: r
      };
    const {
      cssProperty: c = n,
      themeKey: u,
      transform: d,
      style: p
    } = l;
    if (r == null)
      return null;
    if (u === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const h = dr(o, u) || {};
    return p ? p(a) : lt(a, r, (y) => {
      let f = Xn(h, d, y);
      return y === f && typeof y == "string" && (f = Xn(h, d, `${n}${y === "default" ? "" : Se(y)}`, y)), c === !1 ? f : {
        [c]: f
      };
    });
  }
  function t(n) {
    var r;
    const {
      sx: o,
      theme: s = {}
    } = n || {};
    if (!o)
      return null;
    const a = (r = s.unstable_sxConfig) != null ? r : Cn;
    function l(c) {
      let u = c;
      if (typeof c == "function")
        u = c(s);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const d = ic(s.breakpoints), p = Object.keys(d);
      let h = d;
      return Object.keys(u).forEach((b) => {
        const y = Yc(u[b], s);
        if (y != null)
          if (typeof y == "object")
            if (a[b])
              h = fn(h, e(b, y, s, a));
            else {
              const f = lt({
                theme: s
              }, y, (S) => ({
                [b]: S
              }));
              Hc(f, y) ? h[b] = t({
                sx: y,
                theme: s
              }) : h = fn(h, f);
            }
          else
            h = fn(h, e(b, y, s, a));
      }), sc(p, h);
    }
    return Array.isArray(o) ? o.map(l) : l(o);
  }
  return t;
}
const vr = As();
vr.filterProps = ["sx"];
function Fs(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const Kc = ["breakpoints", "palette", "spacing", "shape"];
function Oo(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: s = {}
  } = e, a = re(e, Kc), l = Ms(n), c = hc(o);
  let u = Ue({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: C({
      mode: "light"
    }, r),
    spacing: c,
    shape: C({}, oc, s)
  }, a);
  return u.applyStyles = Fs, u = t.reduce((d, p) => Ue(d, p), u), u.unstable_sxConfig = C({}, Cn, a == null ? void 0 : a.unstable_sxConfig), u.unstable_sx = function(p) {
    return vr({
      sx: p,
      theme: this
    });
  }, u;
}
const Gc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Oo,
  private_createBreakpoints: Ms,
  unstable_applyStyles: Fs
}, Symbol.toStringTag, { value: "Module" }));
function Xc(e) {
  return Object.keys(e).length === 0;
}
function Zc(e = null) {
  const t = T.useContext(On);
  return !t || Xc(t) ? e : t;
}
const Jc = Oo();
function Ds(e = Jc) {
  return Zc(e);
}
function js({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = Ds(n), o = typeof e == "function" ? e(t && r[t] || r) : e;
  return /* @__PURE__ */ Y(Eo, {
    styles: o
  });
}
process.env.NODE_ENV !== "production" && (js.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: i.object,
  /**
   * @ignore
   */
  styles: i.oneOfType([i.array, i.func, i.number, i.object, i.string, i.bool]),
  /**
   * @ignore
   */
  themeId: i.string
});
const Qc = ["sx"], eu = (e) => {
  var t, n;
  const r = {
    systemProps: {},
    otherProps: {}
  }, o = (t = e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) != null ? t : Cn;
  return Object.keys(e).forEach((s) => {
    o[s] ? r.systemProps[s] = e[s] : r.otherProps[s] = e[s];
  }), r;
};
function tu(e) {
  const {
    sx: t
  } = e, n = re(e, Qc), {
    systemProps: r,
    otherProps: o
  } = eu(n);
  let s;
  return Array.isArray(t) ? s = [r, ...t] : typeof t == "function" ? s = (...a) => {
    const l = t(...a);
    return ft(l) ? C({}, r, l) : r;
  } : s = C({}, r, t), C({}, o, {
    sx: s
  });
}
const nu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vr,
  extendSxProp: tu,
  unstable_createStyleFunctionSx: As,
  unstable_defaultSxConfig: Cn
}, Symbol.toStringTag, { value: "Module" })), di = (e) => e, ru = () => {
  let e = di;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = di;
    }
  };
}, ou = ru();
function Ls(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Ls(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function xe() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Ls(e)) && (r && (r += " "), r += t);
  return r;
}
const iu = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Oe(e, t, n = "Mui") {
  const r = iu[t];
  return r ? `${n}-${r}` : `${ou.generate(e)}-${t}`;
}
function Ce(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = Oe(e, o, n);
  }), r;
}
var Ln = { exports: {} }, pe = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fi;
function su() {
  if (fi) return pe;
  fi = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), b = Symbol.for("react.client.reference");
  function y(f) {
    if (typeof f == "object" && f !== null) {
      var S = f.$$typeof;
      switch (S) {
        case e:
          switch (f = f.type, f) {
            case n:
            case o:
            case r:
            case c:
            case u:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case a:
                case l:
                case p:
                case d:
                  return f;
                case s:
                  return f;
                default:
                  return S;
              }
          }
        case t:
          return S;
      }
    }
  }
  return pe.ContextConsumer = s, pe.ContextProvider = a, pe.Element = e, pe.ForwardRef = l, pe.Fragment = n, pe.Lazy = p, pe.Memo = d, pe.Portal = t, pe.Profiler = o, pe.StrictMode = r, pe.Suspense = c, pe.SuspenseList = u, pe.isContextConsumer = function(f) {
    return y(f) === s;
  }, pe.isContextProvider = function(f) {
    return y(f) === a;
  }, pe.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, pe.isForwardRef = function(f) {
    return y(f) === l;
  }, pe.isFragment = function(f) {
    return y(f) === n;
  }, pe.isLazy = function(f) {
    return y(f) === p;
  }, pe.isMemo = function(f) {
    return y(f) === d;
  }, pe.isPortal = function(f) {
    return y(f) === t;
  }, pe.isProfiler = function(f) {
    return y(f) === o;
  }, pe.isStrictMode = function(f) {
    return y(f) === r;
  }, pe.isSuspense = function(f) {
    return y(f) === c;
  }, pe.isSuspenseList = function(f) {
    return y(f) === u;
  }, pe.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === n || f === o || f === r || f === c || f === u || f === h || typeof f == "object" && f !== null && (f.$$typeof === p || f.$$typeof === d || f.$$typeof === a || f.$$typeof === s || f.$$typeof === l || f.$$typeof === b || f.getModuleId !== void 0);
  }, pe.typeOf = y, pe;
}
var me = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pi;
function au() {
  return pi || (pi = 1, process.env.NODE_ENV !== "production" && function() {
    function e(f) {
      if (typeof f == "object" && f !== null) {
        var S = f.$$typeof;
        switch (S) {
          case t:
            switch (f = f.type, f) {
              case r:
              case s:
              case o:
              case u:
              case d:
                return f;
              default:
                switch (f = f && f.$$typeof, f) {
                  case l:
                  case c:
                  case h:
                  case p:
                    return f;
                  case a:
                    return f;
                  default:
                    return S;
                }
            }
          case n:
            return S;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), y = Symbol.for("react.client.reference");
    me.ContextConsumer = a, me.ContextProvider = l, me.Element = t, me.ForwardRef = c, me.Fragment = r, me.Lazy = h, me.Memo = p, me.Portal = n, me.Profiler = s, me.StrictMode = o, me.Suspense = u, me.SuspenseList = d, me.isContextConsumer = function(f) {
      return e(f) === a;
    }, me.isContextProvider = function(f) {
      return e(f) === l;
    }, me.isElement = function(f) {
      return typeof f == "object" && f !== null && f.$$typeof === t;
    }, me.isForwardRef = function(f) {
      return e(f) === c;
    }, me.isFragment = function(f) {
      return e(f) === r;
    }, me.isLazy = function(f) {
      return e(f) === h;
    }, me.isMemo = function(f) {
      return e(f) === p;
    }, me.isPortal = function(f) {
      return e(f) === n;
    }, me.isProfiler = function(f) {
      return e(f) === s;
    }, me.isStrictMode = function(f) {
      return e(f) === o;
    }, me.isSuspense = function(f) {
      return e(f) === u;
    }, me.isSuspenseList = function(f) {
      return e(f) === d;
    }, me.isValidElementType = function(f) {
      return typeof f == "string" || typeof f == "function" || f === r || f === s || f === o || f === u || f === d || f === b || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === p || f.$$typeof === l || f.$$typeof === a || f.$$typeof === c || f.$$typeof === y || f.getModuleId !== void 0);
    }, me.typeOf = e;
  }()), me;
}
var mi;
function lu() {
  return mi || (mi = 1, process.env.NODE_ENV === "production" ? Ln.exports = /* @__PURE__ */ su() : Ln.exports = /* @__PURE__ */ au()), Ln.exports;
}
var bn = /* @__PURE__ */ lu();
const cu = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function zs(e) {
  const t = `${e}`.match(cu);
  return t && t[1] || "";
}
function Vs(e, t = "") {
  return e.displayName || e.name || zs(e) || t;
}
function hi(e, t, n) {
  const r = Vs(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function uu(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Vs(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case bn.ForwardRef:
          return hi(e, e.render, "ForwardRef");
        case bn.Memo:
          return hi(e, e.type, "memo");
        default:
          return;
      }
  }
}
const du = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: uu,
  getFunctionName: zs
}, Symbol.toStringTag, { value: "Module" }));
function to(e, t) {
  const n = C({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      n[r] = C({}, e[r], n[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[r] || {}, s = t[r];
      n[r] = {}, !s || !Object.keys(s) ? n[r] = o : !o || !Object.keys(o) ? n[r] = s : (n[r] = C({}, s), Object.keys(o).forEach((a) => {
        n[r][a] = to(o[a], s[a]);
      }));
    } else n[r] === void 0 && (n[r] = e[r]);
  }), n;
}
const _t = typeof window < "u" ? T.useLayoutEffect : T.useEffect;
function fu(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
const pu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fu
}, Symbol.toStringTag, { value: "Module" }));
function Rn(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function mu(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Ws(e, t, n, r, o) {
  const s = e[t], a = o || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = s.type;
  return typeof c == "function" && !mu(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const $n = Rn(i.element, Ws);
$n.isRequired = Rn(i.element.isRequired, Ws);
function hu(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function gu(e, t, n, r, o) {
  const s = e[t], a = o || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof s == "function" && !hu(s) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Us = Rn(i.elementType, gu), yu = "exact-prop: ​";
function qs(e) {
  return process.env.NODE_ENV === "production" ? e : C({}, e, {
    [yu]: (t) => {
      const n = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function vn(e, t, n, r, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = e[t], a = o || t;
  return s == null ? null : s && s.nodeType !== 1 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
const yt = i.oneOfType([i.func, i.object]);
function gi(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function Bs(e, t = 166) {
  let n;
  function r(...o) {
    const s = () => {
      e.apply(this, o);
    };
    clearTimeout(n), n = setTimeout(s, t);
  }
  return r.clear = () => {
    clearTimeout(n);
  }, r;
}
function zr(e, t) {
  var n, r;
  return /* @__PURE__ */ T.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (n = e.type.muiName) != null ? n : (r = e.type) == null || (r = r._payload) == null || (r = r.value) == null ? void 0 : r.muiName
  ) !== -1;
}
function qe(e) {
  return e && e.ownerDocument || document;
}
function Ct(e) {
  return qe(e).defaultView || window;
}
function no(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let yi = 0;
function bu(e) {
  const [t, n] = T.useState(e), r = e || t;
  return T.useEffect(() => {
    t == null && (yi += 1, n(`mui-${yi}`));
  }, [t]), r;
}
const bi = T.useId;
function Hs(e) {
  if (bi !== void 0) {
    const t = bi();
    return e ?? t;
  }
  return bu(e);
}
function vi({
  controlled: e,
  default: t,
  name: n,
  state: r = "value"
}) {
  const {
    current: o
  } = T.useRef(e !== void 0), [s, a] = T.useState(t), l = o ? e : s;
  if (process.env.NODE_ENV !== "production") {
    T.useEffect(() => {
      o !== (e !== void 0) && console.error([`MUI: A component is changing the ${o ? "" : "un"}controlled ${r} state of ${n} to be ${o ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [r, n, e]);
    const {
      current: u
    } = T.useRef(t);
    T.useEffect(() => {
      !o && !Object.is(u, t) && console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = T.useCallback((u) => {
    o || a(u);
  }, []);
  return [l, c];
}
function ro(e) {
  const t = T.useRef(e);
  return _t(() => {
    t.current = e;
  }), T.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function Ge(...e) {
  return T.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      no(n, t);
    });
  }, e);
}
const xi = {};
function vu(e, t) {
  const n = T.useRef(xi);
  return n.current === xi && (n.current = e(t)), n;
}
const xu = [];
function Eu(e) {
  T.useEffect(e, xu);
}
class wo {
  constructor() {
    this.currentId = null, this.clear = () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new wo();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, n) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, n();
    }, t);
  }
}
function Tu() {
  const e = vu(wo.create).current;
  return Eu(e.disposeEffect), e;
}
function Ys(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function Su(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return t;
  }
}
function Ou(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const wu = Number.isInteger || Ou;
function Ks(e, t, n, r) {
  const o = e[t];
  if (o == null || !wu(o)) {
    const s = Su(o);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${s}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function Gs(e, t, ...n) {
  return e[t] === void 0 ? null : Ks(e, t, ...n);
}
function oo() {
  return null;
}
Gs.isRequired = Ks;
oo.isRequired = oo;
const Xs = process.env.NODE_ENV === "production" ? oo : Gs;
function Re(e, t, n = void 0) {
  const r = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (o) => {
      r[o] = e[o].reduce((s, a) => {
        if (a) {
          const l = t(a);
          l !== "" && s.push(l), n && n[a] && s.push(n[a]);
        }
        return s;
      }, []).join(" ");
    }
  ), r;
}
function Zn(e) {
  return typeof e == "string";
}
function _u(e, t, n) {
  return e === void 0 || Zn(e) ? t : C({}, t, {
    ownerState: C({}, t.ownerState, n)
  });
}
function Zs(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function Ei(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function Cu(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: s
  } = e;
  if (!t) {
    const b = xe(n == null ? void 0 : n.className, s, o == null ? void 0 : o.className, r == null ? void 0 : r.className), y = C({}, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style), f = C({}, n, o, r);
    return b.length > 0 && (f.className = b), Object.keys(y).length > 0 && (f.style = y), {
      props: f,
      internalRef: void 0
    };
  }
  const a = Zs(C({}, o, r)), l = Ei(r), c = Ei(o), u = t(a), d = xe(u == null ? void 0 : u.className, n == null ? void 0 : n.className, s, o == null ? void 0 : o.className, r == null ? void 0 : r.className), p = C({}, u == null ? void 0 : u.style, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style), h = C({}, u, n, c, l);
  return d.length > 0 && (h.className = d), Object.keys(p).length > 0 && (h.style = p), {
    props: h,
    internalRef: u.ref
  };
}
function Ru(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
const $u = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function Ht(e) {
  var t;
  const {
    elementType: n,
    externalSlotProps: r,
    ownerState: o,
    skipResolvingSlotProps: s = !1
  } = e, a = re(e, $u), l = s ? {} : Ru(r, o), {
    props: c,
    internalRef: u
  } = Cu(C({}, a, {
    externalSlotProps: l
  })), d = Ge(u, l == null ? void 0 : l.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return _u(n, C({}, c, {
    ref: d
  }), o);
}
function Pn(e) {
  if (parseInt(T.version, 10) >= 19) {
    var t;
    return (e == null || (t = e.props) == null ? void 0 : t.ref) || null;
  }
  return (e == null ? void 0 : e.ref) || null;
}
const Pu = /* @__PURE__ */ T.createContext();
process.env.NODE_ENV !== "production" && (i.node, i.bool);
const Nu = () => {
  const e = T.useContext(Pu);
  return e ?? !1;
}, Mu = /* @__PURE__ */ T.createContext(void 0);
process.env.NODE_ENV !== "production" && (i.node, i.object);
function ku(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const o = t.components[n];
  return o.defaultProps ? to(o.defaultProps, r) : !o.styleOverrides && !o.variants ? to(o, r) : r;
}
function Iu({
  props: e,
  name: t
}) {
  const n = T.useContext(Mu);
  return ku({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
var xt = {}, Vr = { exports: {} }, Ti;
function Js() {
  return Ti || (Ti = 1, function(e) {
    function t(n) {
      return n && n.__esModule ? n : {
        default: n
      };
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Vr)), Vr.exports;
}
var Wr = { exports: {} }, Si;
function Au() {
  return Si || (Si = 1, function(e) {
    function t() {
      return e.exports = t = Object.assign ? Object.assign.bind() : function(n) {
        for (var r = 1; r < arguments.length; r++) {
          var o = arguments[r];
          for (var s in o) ({}).hasOwnProperty.call(o, s) && (n[s] = o[s]);
        }
        return n;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(null, arguments);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Wr)), Wr.exports;
}
var Ur = { exports: {} }, Oi;
function Fu() {
  return Oi || (Oi = 1, function(e) {
    function t(n, r) {
      if (n == null) return {};
      var o = {};
      for (var s in n) if ({}.hasOwnProperty.call(n, s)) {
        if (r.indexOf(s) !== -1) continue;
        o[s] = n[s];
      }
      return o;
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Ur)), Ur.exports;
}
const Du = /* @__PURE__ */ ht(ec), ju = /* @__PURE__ */ ht(tc), Lu = /* @__PURE__ */ ht(ac), zu = /* @__PURE__ */ ht(du), Vu = /* @__PURE__ */ ht(Gc), Wu = /* @__PURE__ */ ht(nu);
var wi;
function Uu() {
  if (wi) return xt;
  wi = 1;
  var e = Js();
  Object.defineProperty(xt, "__esModule", {
    value: !0
  }), xt.default = P, xt.shouldForwardProp = S, xt.systemDefaultTheme = void 0;
  var t = e(Au()), n = e(Fu()), r = b(Du), o = ju, s = e(Lu), a = e(zu), l = e(Vu), c = e(Wu);
  const u = ["ownerState"], d = ["variants"], p = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
  function h(m) {
    if (typeof WeakMap != "function") return null;
    var w = /* @__PURE__ */ new WeakMap(), R = /* @__PURE__ */ new WeakMap();
    return (h = function(k) {
      return k ? R : w;
    })(m);
  }
  function b(m, w) {
    if (m && m.__esModule) return m;
    if (m === null || typeof m != "object" && typeof m != "function") return { default: m };
    var R = h(w);
    if (R && R.has(m)) return R.get(m);
    var k = { __proto__: null }, I = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var j in m) if (j !== "default" && Object.prototype.hasOwnProperty.call(m, j)) {
      var L = I ? Object.getOwnPropertyDescriptor(m, j) : null;
      L && (L.get || L.set) ? Object.defineProperty(k, j, L) : k[j] = m[j];
    }
    return k.default = m, R && R.set(m, k), k;
  }
  function y(m) {
    return Object.keys(m).length === 0;
  }
  function f(m) {
    return typeof m == "string" && // 96 is one less than the char code
    // for "a" so this is checking that
    // it's a lowercase character
    m.charCodeAt(0) > 96;
  }
  function S(m) {
    return m !== "ownerState" && m !== "theme" && m !== "sx" && m !== "as";
  }
  const x = xt.systemDefaultTheme = (0, l.default)(), M = (m) => m && m.charAt(0).toLowerCase() + m.slice(1);
  function v({
    defaultTheme: m,
    theme: w,
    themeId: R
  }) {
    return y(w) ? m : w[R] || w;
  }
  function E(m) {
    return m ? (w, R) => R[m] : null;
  }
  function g(m, w) {
    let {
      ownerState: R
    } = w, k = (0, n.default)(w, u);
    const I = typeof m == "function" ? m((0, t.default)({
      ownerState: R
    }, k)) : m;
    if (Array.isArray(I))
      return I.flatMap((j) => g(j, (0, t.default)({
        ownerState: R
      }, k)));
    if (I && typeof I == "object" && Array.isArray(I.variants)) {
      const {
        variants: j = []
      } = I;
      let A = (0, n.default)(I, d);
      return j.forEach((O) => {
        let _ = !0;
        typeof O.props == "function" ? _ = O.props((0, t.default)({
          ownerState: R
        }, k, R)) : Object.keys(O.props).forEach((D) => {
          (R == null ? void 0 : R[D]) !== O.props[D] && k[D] !== O.props[D] && (_ = !1);
        }), _ && (Array.isArray(A) || (A = [A]), A.push(typeof O.style == "function" ? O.style((0, t.default)({
          ownerState: R
        }, k, R)) : O.style));
      }), A;
    }
    return I;
  }
  function P(m = {}) {
    const {
      themeId: w,
      defaultTheme: R = x,
      rootShouldForwardProp: k = S,
      slotShouldForwardProp: I = S
    } = m, j = (L) => (0, c.default)((0, t.default)({}, L, {
      theme: v((0, t.default)({}, L, {
        defaultTheme: R,
        themeId: w
      }))
    }));
    return j.__mui_systemSx = !0, (L, A = {}) => {
      (0, r.internal_processStyles)(L, (K) => K.filter((J) => !(J != null && J.__mui_systemSx)));
      const {
        name: O,
        slot: _,
        skipVariantsResolver: D,
        skipSx: F,
        // TODO v6: remove `lowercaseFirstLetter()` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        overridesResolver: W = E(M(_))
      } = A, $ = (0, n.default)(A, p), z = D !== void 0 ? D : (
        // TODO v6: remove `Root` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        _ && _ !== "Root" && _ !== "root" || !1
      ), U = F || !1;
      let q;
      process.env.NODE_ENV !== "production" && O && (q = `${O}-${M(_ || "Root")}`);
      let V = S;
      _ === "Root" || _ === "root" ? V = k : _ ? V = I : f(L) && (V = void 0);
      const B = (0, r.default)(L, (0, t.default)({
        shouldForwardProp: V,
        label: q
      }, $)), H = (K) => typeof K == "function" && K.__emotion_real !== K || (0, o.isPlainObject)(K) ? (J) => g(K, (0, t.default)({}, J, {
        theme: v({
          theme: J.theme,
          defaultTheme: R,
          themeId: w
        })
      })) : K, Z = (K, ...J) => {
        let G = H(K);
        const X = J ? J.map(H) : [];
        O && W && X.push((ee) => {
          const ne = v((0, t.default)({}, ee, {
            defaultTheme: R,
            themeId: w
          }));
          if (!ne.components || !ne.components[O] || !ne.components[O].styleOverrides)
            return null;
          const $e = ne.components[O].styleOverrides, Ae = {};
          return Object.entries($e).forEach(([Be, Xe]) => {
            Ae[Be] = g(Xe, (0, t.default)({}, ee, {
              theme: ne
            }));
          }), W(ee, Ae);
        }), O && !z && X.push((ee) => {
          var ne;
          const $e = v((0, t.default)({}, ee, {
            defaultTheme: R,
            themeId: w
          })), Ae = $e == null || (ne = $e.components) == null || (ne = ne[O]) == null ? void 0 : ne.variants;
          return g({
            variants: Ae
          }, (0, t.default)({}, ee, {
            theme: $e
          }));
        }), U || X.push(j);
        const N = X.length - J.length;
        if (Array.isArray(K) && N > 0) {
          const ee = new Array(N).fill("");
          G = [...K, ...ee], G.raw = [...K.raw, ...ee];
        }
        const Q = B(G, ...X);
        if (process.env.NODE_ENV !== "production") {
          let ee;
          O && (ee = `${O}${(0, s.default)(_ || "")}`), ee === void 0 && (ee = `Styled(${(0, a.default)(L)})`), Q.displayName = ee;
        }
        return L.muiName && (Q.muiName = L.muiName), Q;
      };
      return B.withConfig && (Z.withConfig = B.withConfig), Z;
    };
  }
  return xt;
}
var qu = /* @__PURE__ */ Uu();
const Bu = /* @__PURE__ */ fo(qu);
function Hu(e, t) {
  return C({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, t);
}
var ge = {};
const Yu = /* @__PURE__ */ ht(Za), Ku = /* @__PURE__ */ ht(pu);
var _i;
function Gu() {
  if (_i) return ge;
  _i = 1;
  var e = Js();
  Object.defineProperty(ge, "__esModule", {
    value: !0
  }), ge.alpha = y, ge.blend = P, ge.colorChannel = void 0, ge.darken = S, ge.decomposeColor = a, ge.emphasize = E, ge.getContrastRatio = b, ge.getLuminance = h, ge.hexToRgb = o, ge.hslToRgb = p, ge.lighten = M, ge.private_safeAlpha = f, ge.private_safeColorChannel = void 0, ge.private_safeDarken = x, ge.private_safeEmphasize = g, ge.private_safeLighten = v, ge.recomposeColor = u, ge.rgbToHex = d;
  var t = e(Yu), n = e(Ku);
  function r(m, w = 0, R = 1) {
    return process.env.NODE_ENV !== "production" && (m < w || m > R) && console.error(`MUI: The value provided ${m} is out of range [${w}, ${R}].`), (0, n.default)(m, w, R);
  }
  function o(m) {
    m = m.slice(1);
    const w = new RegExp(`.{1,${m.length >= 6 ? 2 : 1}}`, "g");
    let R = m.match(w);
    return R && R[0].length === 1 && (R = R.map((k) => k + k)), R ? `rgb${R.length === 4 ? "a" : ""}(${R.map((k, I) => I < 3 ? parseInt(k, 16) : Math.round(parseInt(k, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
  }
  function s(m) {
    const w = m.toString(16);
    return w.length === 1 ? `0${w}` : w;
  }
  function a(m) {
    if (m.type)
      return m;
    if (m.charAt(0) === "#")
      return a(o(m));
    const w = m.indexOf("("), R = m.substring(0, w);
    if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(R) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${m}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, t.default)(9, m));
    let k = m.substring(w + 1, m.length - 1), I;
    if (R === "color") {
      if (k = k.split(" "), I = k.shift(), k.length === 4 && k[3].charAt(0) === "/" && (k[3] = k[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(I) === -1)
        throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${I}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, t.default)(10, I));
    } else
      k = k.split(",");
    return k = k.map((j) => parseFloat(j)), {
      type: R,
      values: k,
      colorSpace: I
    };
  }
  const l = (m) => {
    const w = a(m);
    return w.values.slice(0, 3).map((R, k) => w.type.indexOf("hsl") !== -1 && k !== 0 ? `${R}%` : R).join(" ");
  };
  ge.colorChannel = l;
  const c = (m, w) => {
    try {
      return l(m);
    } catch {
      return w && process.env.NODE_ENV !== "production" && console.warn(w), m;
    }
  };
  ge.private_safeColorChannel = c;
  function u(m) {
    const {
      type: w,
      colorSpace: R
    } = m;
    let {
      values: k
    } = m;
    return w.indexOf("rgb") !== -1 ? k = k.map((I, j) => j < 3 ? parseInt(I, 10) : I) : w.indexOf("hsl") !== -1 && (k[1] = `${k[1]}%`, k[2] = `${k[2]}%`), w.indexOf("color") !== -1 ? k = `${R} ${k.join(" ")}` : k = `${k.join(", ")}`, `${w}(${k})`;
  }
  function d(m) {
    if (m.indexOf("#") === 0)
      return m;
    const {
      values: w
    } = a(m);
    return `#${w.map((R, k) => s(k === 3 ? Math.round(255 * R) : R)).join("")}`;
  }
  function p(m) {
    m = a(m);
    const {
      values: w
    } = m, R = w[0], k = w[1] / 100, I = w[2] / 100, j = k * Math.min(I, 1 - I), L = (_, D = (_ + R / 30) % 12) => I - j * Math.max(Math.min(D - 3, 9 - D, 1), -1);
    let A = "rgb";
    const O = [Math.round(L(0) * 255), Math.round(L(8) * 255), Math.round(L(4) * 255)];
    return m.type === "hsla" && (A += "a", O.push(w[3])), u({
      type: A,
      values: O
    });
  }
  function h(m) {
    m = a(m);
    let w = m.type === "hsl" || m.type === "hsla" ? a(p(m)).values : m.values;
    return w = w.map((R) => (m.type !== "color" && (R /= 255), R <= 0.03928 ? R / 12.92 : ((R + 0.055) / 1.055) ** 2.4)), Number((0.2126 * w[0] + 0.7152 * w[1] + 0.0722 * w[2]).toFixed(3));
  }
  function b(m, w) {
    const R = h(m), k = h(w);
    return (Math.max(R, k) + 0.05) / (Math.min(R, k) + 0.05);
  }
  function y(m, w) {
    return m = a(m), w = r(w), (m.type === "rgb" || m.type === "hsl") && (m.type += "a"), m.type === "color" ? m.values[3] = `/${w}` : m.values[3] = w, u(m);
  }
  function f(m, w, R) {
    try {
      return y(m, w);
    } catch {
      return R && process.env.NODE_ENV !== "production" && console.warn(R), m;
    }
  }
  function S(m, w) {
    if (m = a(m), w = r(w), m.type.indexOf("hsl") !== -1)
      m.values[2] *= 1 - w;
    else if (m.type.indexOf("rgb") !== -1 || m.type.indexOf("color") !== -1)
      for (let R = 0; R < 3; R += 1)
        m.values[R] *= 1 - w;
    return u(m);
  }
  function x(m, w, R) {
    try {
      return S(m, w);
    } catch {
      return R && process.env.NODE_ENV !== "production" && console.warn(R), m;
    }
  }
  function M(m, w) {
    if (m = a(m), w = r(w), m.type.indexOf("hsl") !== -1)
      m.values[2] += (100 - m.values[2]) * w;
    else if (m.type.indexOf("rgb") !== -1)
      for (let R = 0; R < 3; R += 1)
        m.values[R] += (255 - m.values[R]) * w;
    else if (m.type.indexOf("color") !== -1)
      for (let R = 0; R < 3; R += 1)
        m.values[R] += (1 - m.values[R]) * w;
    return u(m);
  }
  function v(m, w, R) {
    try {
      return M(m, w);
    } catch {
      return R && process.env.NODE_ENV !== "production" && console.warn(R), m;
    }
  }
  function E(m, w = 0.15) {
    return h(m) > 0.5 ? S(m, w) : M(m, w);
  }
  function g(m, w, R) {
    try {
      return E(m, w);
    } catch {
      return R && process.env.NODE_ENV !== "production" && console.warn(R), m;
    }
  }
  function P(m, w, R, k = 1) {
    const I = (O, _) => Math.round((O ** (1 / k) * (1 - R) + _ ** (1 / k) * R) ** k), j = a(m), L = a(w), A = [I(j.values[0], L.values[0]), I(j.values[1], L.values[1]), I(j.values[2], L.values[2])];
    return u({
      type: "rgb",
      values: A
    });
  }
  return ge;
}
var Yt = /* @__PURE__ */ Gu();
const xn = {
  black: "#000",
  white: "#fff"
}, Xu = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, kt = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, It = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, rn = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, At = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Ft = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Dt = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, Zu = ["mode", "contrastThreshold", "tonalOffset"], Ci = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: xn.white,
    default: xn.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, qr = {
  text: {
    primary: xn.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: xn.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function Ri(e, t, n, r) {
  const o = r.light || r, s = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Yt.lighten(e.main, o) : t === "dark" && (e.dark = Yt.darken(e.main, s)));
}
function Ju(e = "light") {
  return e === "dark" ? {
    main: At[200],
    light: At[50],
    dark: At[400]
  } : {
    main: At[700],
    light: At[400],
    dark: At[800]
  };
}
function Qu(e = "light") {
  return e === "dark" ? {
    main: kt[200],
    light: kt[50],
    dark: kt[400]
  } : {
    main: kt[500],
    light: kt[300],
    dark: kt[700]
  };
}
function ed(e = "light") {
  return e === "dark" ? {
    main: It[500],
    light: It[300],
    dark: It[700]
  } : {
    main: It[700],
    light: It[400],
    dark: It[800]
  };
}
function td(e = "light") {
  return e === "dark" ? {
    main: Ft[400],
    light: Ft[300],
    dark: Ft[700]
  } : {
    main: Ft[700],
    light: Ft[500],
    dark: Ft[900]
  };
}
function nd(e = "light") {
  return e === "dark" ? {
    main: Dt[400],
    light: Dt[300],
    dark: Dt[700]
  } : {
    main: Dt[800],
    light: Dt[500],
    dark: Dt[900]
  };
}
function rd(e = "light") {
  return e === "dark" ? {
    main: rn[400],
    light: rn[300],
    dark: rn[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: rn[500],
    dark: rn[900]
  };
}
function od(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2
  } = e, o = re(e, Zu), s = e.primary || Ju(t), a = e.secondary || Qu(t), l = e.error || ed(t), c = e.info || td(t), u = e.success || nd(t), d = e.warning || rd(t);
  function p(f) {
    const S = Yt.getContrastRatio(f, qr.text.primary) >= n ? qr.text.primary : Ci.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const x = Yt.getContrastRatio(f, S);
      x < 3 && console.error([`MUI: The contrast ratio of ${x}:1 for ${S} on ${f}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return S;
  }
  const h = ({
    color: f,
    name: S,
    mainShade: x = 500,
    lightShade: M = 300,
    darkShade: v = 700
  }) => {
    if (f = C({}, f), !f.main && f[x] && (f.main = f[x]), !f.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${S ? ` (${S})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${x}\` property.` : wt(11, S ? ` (${S})` : "", x));
    if (typeof f.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${S ? ` (${S})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(f.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : wt(12, S ? ` (${S})` : "", JSON.stringify(f.main)));
    return Ri(f, "light", M, r), Ri(f, "dark", v, r), f.contrastText || (f.contrastText = p(f.main)), f;
  }, b = {
    dark: qr,
    light: Ci
  };
  return process.env.NODE_ENV !== "production" && (b[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Ue(C({
    // A collection of common colors.
    common: C({}, xn),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: h({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: h({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: h({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: h({
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: h({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: h({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: Xu,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: h,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r
  }, b[t]), o);
}
const id = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function sd(e) {
  return Math.round(e * 1e5) / 1e5;
}
const $i = {
  textTransform: "uppercase"
}, Pi = '"Roboto", "Helvetica", "Arial", sans-serif';
function ad(e, t) {
  const n = typeof t == "function" ? t(e) : t, {
    fontFamily: r = Pi,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: s = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: l = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: p
  } = n, h = re(n, id);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const b = o / 14, y = p || ((x) => `${x / u * b}rem`), f = (x, M, v, E, g) => C({
    fontFamily: r,
    fontWeight: x,
    fontSize: y(M),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: v
  }, r === Pi ? {
    letterSpacing: `${sd(E / M)}em`
  } : {}, g, d), S = {
    h1: f(s, 96, 1.167, -1.5),
    h2: f(s, 60, 1.2, -0.5),
    h3: f(a, 48, 1.167, 0),
    h4: f(a, 34, 1.235, 0.25),
    h5: f(a, 24, 1.334, 0),
    h6: f(l, 20, 1.6, 0.15),
    subtitle1: f(a, 16, 1.75, 0.15),
    subtitle2: f(l, 14, 1.57, 0.1),
    body1: f(a, 16, 1.5, 0.15),
    body2: f(a, 14, 1.43, 0.15),
    button: f(l, 14, 1.75, 0.4, $i),
    caption: f(a, 12, 1.66, 0.4),
    overline: f(a, 12, 2.66, 1, $i),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Ue(C({
    htmlFontSize: u,
    pxToRem: y,
    fontFamily: r,
    fontSize: o,
    fontWeightLight: s,
    fontWeightRegular: a,
    fontWeightMedium: l,
    fontWeightBold: c
  }, S), h, {
    clone: !1
    // No need to clone deep
  });
}
const ld = 0.2, cd = 0.14, ud = 0.12;
function he(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${ld})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${cd})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${ud})`].join(",");
}
const dd = ["none", he(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), he(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), he(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), he(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), he(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), he(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), he(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), he(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), he(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), he(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), he(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), he(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), he(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), he(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), he(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), he(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), he(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), he(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), he(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), he(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), he(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), he(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), he(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), he(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], fd = ["duration", "easing", "delay"], pd = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, md = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Ni(e) {
  return `${Math.round(e)}ms`;
}
function hd(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function gd(e) {
  const t = C({}, pd, e.easing), n = C({}, md, e.duration);
  return C({
    getAutoHeightDuration: hd,
    create: (o = ["all"], s = {}) => {
      const {
        duration: a = n.standard,
        easing: l = t.easeInOut,
        delay: c = 0
      } = s, u = re(s, fd);
      if (process.env.NODE_ENV !== "production") {
        const d = (h) => typeof h == "string", p = (h) => !isNaN(parseFloat(h));
        !d(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !p(a) && !d(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), d(l) || console.error('MUI: Argument "easing" must be a string.'), !p(c) && !d(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof s != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((d) => `${d} ${typeof a == "string" ? a : Ni(a)} ${l} ${typeof c == "string" ? c : Ni(c)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: n
  });
}
const yd = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, bd = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function vd(e = {}, ...t) {
  const {
    mixins: n = {},
    palette: r = {},
    transitions: o = {},
    typography: s = {}
  } = e, a = re(e, bd);
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateCssVars` is the closest identifier for checking that the `options` is a result of `extendTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateCssVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : wt(18));
  const l = od(r), c = Oo(e);
  let u = Ue(c, {
    mixins: Hu(c.breakpoints, n),
    palette: l,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: dd.slice(),
    typography: ad(l, s),
    transitions: gd(o),
    zIndex: C({}, yd)
  });
  if (u = Ue(u, a), u = t.reduce((d, p) => Ue(d, p), u), process.env.NODE_ENV !== "production") {
    const d = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], p = (h, b) => {
      let y;
      for (y in h) {
        const f = h[y];
        if (d.indexOf(y) !== -1 && Object.keys(f).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const S = Oe("", y);
            console.error([`MUI: The \`${b}\` component increases the CSS specificity of the \`${y}\` internal state.`, "You can not override it like this: ", JSON.stringify(h, null, 2), "", `Instead, you need to use the '&.${S}' syntax:`, JSON.stringify({
              root: {
                [`&.${S}`]: f
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          h[y] = {};
        }
      }
    };
    Object.keys(u.components).forEach((h) => {
      const b = u.components[h].styleOverrides;
      b && h.indexOf("Mui") === 0 && p(b, h);
    });
  }
  return u.unstable_sxConfig = C({}, Cn, a == null ? void 0 : a.unstable_sxConfig), u.unstable_sx = function(p) {
    return vr({
      sx: p,
      theme: this
    });
  }, u;
}
const _o = vd(), Co = "$$material";
function Qs(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const tt = (e) => Qs(e) && e !== "classes", oe = Bu({
  themeId: Co,
  defaultTheme: _o,
  rootShouldForwardProp: tt
});
process.env.NODE_ENV !== "production" && (i.node, i.object.isRequired);
function Me(e) {
  return Iu(e);
}
const xd = ["onChange", "maxRows", "minRows", "style", "value"];
function zn(e) {
  return parseInt(e, 10) || 0;
}
const Ed = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function Td(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Mi(e) {
  return Td(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
const ea = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: o,
    minRows: s = 1,
    style: a,
    value: l
  } = t, c = re(t, xd), {
    current: u
  } = T.useRef(l != null), d = T.useRef(null), p = Ge(n, d), h = T.useRef(null), b = T.useRef(null), y = T.useCallback(() => {
    const v = d.current, E = b.current;
    if (!v || !E)
      return;
    const P = Ct(v).getComputedStyle(v);
    if (P.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    E.style.width = P.width, E.value = v.value || t.placeholder || "x", E.value.slice(-1) === `
` && (E.value += " ");
    const m = P.boxSizing, w = zn(P.paddingBottom) + zn(P.paddingTop), R = zn(P.borderBottomWidth) + zn(P.borderTopWidth), k = E.scrollHeight;
    E.value = "x";
    const I = E.scrollHeight;
    let j = k;
    s && (j = Math.max(Number(s) * I, j)), o && (j = Math.min(Number(o) * I, j)), j = Math.max(j, I);
    const L = j + (m === "border-box" ? w + R : 0), A = Math.abs(j - k) <= 1;
    return {
      outerHeightStyle: L,
      overflowing: A
    };
  }, [o, s, t.placeholder]), f = ro(() => {
    const v = d.current, E = y();
    if (!v || !E || Mi(E))
      return !1;
    const g = E.outerHeightStyle;
    return h.current != null && h.current !== g;
  }), S = T.useCallback(() => {
    const v = d.current, E = y();
    if (!v || !E || Mi(E))
      return;
    const g = E.outerHeightStyle;
    h.current !== g && (h.current = g, v.style.height = `${g}px`), v.style.overflow = E.overflowing ? "hidden" : "";
  }, [y]), x = T.useRef(-1);
  _t(() => {
    const v = Bs(S), E = d == null ? void 0 : d.current;
    if (!E)
      return;
    const g = Ct(E);
    g.addEventListener("resize", v);
    let P;
    return typeof ResizeObserver < "u" && (P = new ResizeObserver(() => {
      f() && (P.unobserve(E), cancelAnimationFrame(x.current), S(), x.current = requestAnimationFrame(() => {
        P.observe(E);
      }));
    }), P.observe(E)), () => {
      v.clear(), cancelAnimationFrame(x.current), g.removeEventListener("resize", v), P && P.disconnect();
    };
  }, [y, S, f]), _t(() => {
    S();
  });
  const M = (v) => {
    u || S(), r && r(v);
  };
  return /* @__PURE__ */ Ie(T.Fragment, {
    children: [/* @__PURE__ */ Y("textarea", C({
      value: l,
      onChange: M,
      ref: p,
      rows: s,
      style: a
    }, c)), /* @__PURE__ */ Y("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: b,
      tabIndex: -1,
      style: C({}, Ed.shadow, a, {
        paddingTop: 0,
        paddingBottom: 0
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (ea.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  className: i.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: i.oneOfType([i.number, i.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: i.oneOfType([i.number, i.string]),
  /**
   * @ignore
   */
  onChange: i.func,
  /**
   * @ignore
   */
  placeholder: i.string,
  /**
   * @ignore
   */
  style: i.object,
  /**
   * @ignore
   */
  value: i.oneOfType([i.arrayOf(i.string), i.number, i.string])
});
function Zt({
  props: e,
  states: t,
  muiFormControl: n
}) {
  return t.reduce((r, o) => (r[o] = e[o], n && typeof e[o] > "u" && (r[o] = n[o]), r), {});
}
const xr = /* @__PURE__ */ T.createContext(void 0);
process.env.NODE_ENV !== "production" && (xr.displayName = "FormControlContext");
function Jt() {
  return T.useContext(xr);
}
function ta(e) {
  return /* @__PURE__ */ Y(js, C({}, e, {
    defaultTheme: _o,
    themeId: Co
  }));
}
process.env.NODE_ENV !== "production" && (ta.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: i.oneOfType([i.array, i.func, i.number, i.object, i.string, i.bool])
});
function ki(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Jn(e, t = !1) {
  return e && (ki(e.value) && e.value !== "" || t && ki(e.defaultValue) && e.defaultValue !== "");
}
function Sd(e) {
  return e.startAdornment;
}
function Od(e) {
  return Oe("MuiInputBase", e);
}
const Kt = Ce("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), wd = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"], Er = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${Se(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, Tr = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.size === "small" && t.inputSizeSmall, n.multiline && t.inputMultiline, n.type === "search" && t.inputTypeSearch, n.startAdornment && t.inputAdornedStart, n.endAdornment && t.inputAdornedEnd, n.hiddenLabel && t.inputHiddenLabel];
}, _d = (e) => {
  const {
    classes: t,
    color: n,
    disabled: r,
    error: o,
    endAdornment: s,
    focused: a,
    formControl: l,
    fullWidth: c,
    hiddenLabel: u,
    multiline: d,
    readOnly: p,
    size: h,
    startAdornment: b,
    type: y
  } = e, f = {
    root: ["root", `color${Se(n)}`, r && "disabled", o && "error", c && "fullWidth", a && "focused", l && "formControl", h && h !== "medium" && `size${Se(h)}`, d && "multiline", b && "adornedStart", s && "adornedEnd", u && "hiddenLabel", p && "readOnly"],
    input: ["input", r && "disabled", y === "search" && "inputTypeSearch", d && "inputMultiline", h === "small" && "inputSizeSmall", u && "inputHiddenLabel", b && "inputAdornedStart", s && "inputAdornedEnd", p && "readOnly"]
  };
  return Re(f, Od, t);
}, Sr = oe("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: Er
})(({
  theme: e,
  ownerState: t
}) => C({}, e.typography.body1, {
  color: (e.vars || e).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${Kt.disabled}`]: {
    color: (e.vars || e).palette.text.disabled,
    cursor: "default"
  }
}, t.multiline && C({
  padding: "4px 0 5px"
}, t.size === "small" && {
  paddingTop: 1
}), t.fullWidth && {
  width: "100%"
})), Or = oe("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: Tr
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light", r = C({
    color: "currentColor"
  }, e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: n ? 0.42 : 0.5
  }, {
    transition: e.transitions.create("opacity", {
      duration: e.transitions.duration.shorter
    })
  }), o = {
    opacity: "0 !important"
  }, s = e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: n ? 0.42 : 0.5
  };
  return C({
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%",
    // Fix IE11 width issue
    animationName: "mui-auto-fill-cancel",
    animationDuration: "10ms",
    "&::-webkit-input-placeholder": r,
    "&::-moz-placeholder": r,
    // Firefox 19+
    "&:-ms-input-placeholder": r,
    // IE11
    "&::-ms-input-placeholder": r,
    // Edge
    "&:focus": {
      outline: 0
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none"
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${Kt.formControl} &`]: {
      "&::-webkit-input-placeholder": o,
      "&::-moz-placeholder": o,
      // Firefox 19+
      "&:-ms-input-placeholder": o,
      // IE11
      "&::-ms-input-placeholder": o,
      // Edge
      "&:focus::-webkit-input-placeholder": s,
      "&:focus::-moz-placeholder": s,
      // Firefox 19+
      "&:focus:-ms-input-placeholder": s,
      // IE11
      "&:focus::-ms-input-placeholder": s
      // Edge
    },
    [`&.${Kt.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (e.vars || e).palette.text.disabled
      // Fix opacity Safari bug
    },
    "&:-webkit-autofill": {
      animationDuration: "5000s",
      animationName: "mui-auto-fill"
    }
  }, t.size === "small" && {
    paddingTop: 1
  }, t.multiline && {
    height: "auto",
    resize: "none",
    padding: 0,
    paddingTop: 0
  }, t.type === "search" && {
    // Improve type search style.
    MozAppearance: "textfield"
  });
}), Cd = /* @__PURE__ */ Y(ta, {
  styles: {
    "@keyframes mui-auto-fill": {
      from: {
        display: "block"
      }
    },
    "@keyframes mui-auto-fill-cancel": {
      from: {
        display: "block"
      }
    }
  }
}), wr = /* @__PURE__ */ T.forwardRef(function(t, n) {
  var r;
  const o = Me({
    props: t,
    name: "MuiInputBase"
  }), {
    "aria-describedby": s,
    autoComplete: a,
    autoFocus: l,
    className: c,
    components: u = {},
    componentsProps: d = {},
    defaultValue: p,
    disabled: h,
    disableInjectingGlobalStyles: b,
    endAdornment: y,
    fullWidth: f = !1,
    id: S,
    inputComponent: x = "input",
    inputProps: M = {},
    inputRef: v,
    maxRows: E,
    minRows: g,
    multiline: P = !1,
    name: m,
    onBlur: w,
    onChange: R,
    onClick: k,
    onFocus: I,
    onKeyDown: j,
    onKeyUp: L,
    placeholder: A,
    readOnly: O,
    renderSuffix: _,
    rows: D,
    slotProps: F = {},
    slots: W = {},
    startAdornment: $,
    type: z = "text",
    value: U
  } = o, q = re(o, wd), V = M.value != null ? M.value : U, {
    current: B
  } = T.useRef(V != null), H = T.useRef(), Z = T.useCallback((fe) => {
    process.env.NODE_ENV !== "production" && fe && fe.nodeName !== "INPUT" && !fe.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), K = Ge(H, v, M.ref, Z), [J, G] = T.useState(!1), X = Jt();
  process.env.NODE_ENV !== "production" && T.useEffect(() => {
    if (X)
      return X.registerEffect();
  }, [X]);
  const N = Zt({
    props: o,
    muiFormControl: X,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  N.focused = X ? X.focused : J, T.useEffect(() => {
    !X && h && J && (G(!1), w && w());
  }, [X, h, J, w]);
  const Q = X && X.onFilled, ee = X && X.onEmpty, ne = T.useCallback((fe) => {
    Jn(fe) ? Q && Q() : ee && ee();
  }, [Q, ee]);
  _t(() => {
    B && ne({
      value: V
    });
  }, [V, ne, B]);
  const $e = (fe) => {
    if (N.disabled) {
      fe.stopPropagation();
      return;
    }
    I && I(fe), M.onFocus && M.onFocus(fe), X && X.onFocus ? X.onFocus(fe) : G(!0);
  }, Ae = (fe) => {
    w && w(fe), M.onBlur && M.onBlur(fe), X && X.onBlur ? X.onBlur(fe) : G(!1);
  }, Be = (fe, ...tn) => {
    if (!B) {
      const vt = fe.target || H.current;
      if (vt == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : wt(1));
      ne({
        value: vt.value
      });
    }
    M.onChange && M.onChange(fe, ...tn), R && R(fe, ...tn);
  };
  T.useEffect(() => {
    ne(H.current);
  }, []);
  const Xe = (fe) => {
    H.current && fe.currentTarget === fe.target && H.current.focus(), k && k(fe);
  };
  let ut = x, we = M;
  P && ut === "input" && (D ? (process.env.NODE_ENV !== "production" && (g || E) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), we = C({
    type: void 0,
    minRows: D,
    maxRows: D
  }, we)) : we = C({
    type: void 0,
    maxRows: E,
    minRows: g
  }, we), ut = ea);
  const Ze = (fe) => {
    ne(fe.animationName === "mui-auto-fill-cancel" ? H.current : {
      value: "x"
    });
  };
  T.useEffect(() => {
    X && X.setAdornedStart(!!$);
  }, [X, $]);
  const He = C({}, o, {
    color: N.color || "primary",
    disabled: N.disabled,
    endAdornment: y,
    error: N.error,
    focused: N.focused,
    formControl: X,
    fullWidth: f,
    hiddenLabel: N.hiddenLabel,
    multiline: P,
    size: N.size,
    startAdornment: $,
    type: z
  }), _e = _d(He), Nt = W.root || u.Root || Sr, Qt = F.root || d.root || {}, en = W.input || u.Input || Or;
  return we = C({}, we, (r = F.input) != null ? r : d.input), /* @__PURE__ */ Ie(T.Fragment, {
    children: [!b && Cd, /* @__PURE__ */ Ie(Nt, C({}, Qt, !Zn(Nt) && {
      ownerState: C({}, He, Qt.ownerState)
    }, {
      ref: n,
      onClick: Xe
    }, q, {
      className: xe(_e.root, Qt.className, c, O && "MuiInputBase-readOnly"),
      children: [$, /* @__PURE__ */ Y(xr.Provider, {
        value: null,
        children: /* @__PURE__ */ Y(en, C({
          ownerState: He,
          "aria-invalid": N.error,
          "aria-describedby": s,
          autoComplete: a,
          autoFocus: l,
          defaultValue: p,
          disabled: N.disabled,
          id: S,
          onAnimationStart: Ze,
          name: m,
          placeholder: A,
          readOnly: O,
          required: N.required,
          rows: D,
          value: V,
          onKeyDown: j,
          onKeyUp: L,
          type: z
        }, we, !Zn(en) && {
          as: ut,
          ownerState: C({}, He, we.ownerState)
        }, {
          ref: K,
          className: xe(_e.input, we.className, O && "MuiInputBase-readOnly"),
          onBlur: Ae,
          onChange: Be,
          onFocus: $e
        }))
      }), y, _ ? _(C({}, N, {
        startAdornment: $
      })) : null]
    }))]
  });
});
process.env.NODE_ENV !== "production" && (wr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  "aria-describedby": i.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: i.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: i.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), i.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: i.shape({
    Input: i.elementType,
    Root: i.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: i.shape({
    input: i.object,
    root: i.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: i.bool,
  /**
   * If `true`, GlobalStyles for the auto-fill keyframes will not be injected/removed on mount/unmount. Make sure to inject them at the top of your application.
   * This option is intended to help with boosting the initial rendering performance if you are loading a big amount of Input components at once.
   * @default false
   */
  disableInjectingGlobalStyles: i.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: i.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: i.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * The id of the `input` element.
   */
  id: i.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: Us,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: i.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: yt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: i.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: i.oneOfType([i.number, i.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: i.oneOfType([i.number, i.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: i.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: i.string,
  /**
   * Callback fired when the `input` is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: i.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: i.func,
  /**
   * @ignore
   */
  onClick: i.func,
  /**
   * @ignore
   */
  onFocus: i.func,
  /**
   * Callback fired when the `input` doesn't satisfy its constraints.
   */
  onInvalid: i.func,
  /**
   * @ignore
   */
  onKeyDown: i.func,
  /**
   * @ignore
   */
  onKeyUp: i.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: i.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: i.bool,
  /**
   * @ignore
   */
  renderSuffix: i.func,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: i.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: i.oneOfType([i.number, i.string]),
  /**
   * The size of the component.
   */
  size: i.oneOfType([i.oneOf(["medium", "small"]), i.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: i.shape({
    input: i.object,
    root: i.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: i.shape({
    input: i.elementType,
    root: i.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: i.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: i.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: i.any
});
function Rd(e) {
  return Oe("MuiInput", e);
}
const on = C({}, Kt, Ce("MuiInput", ["root", "underline", "input"])), $d = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"], Pd = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, o = Re({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, Rd, t);
  return C({}, t, o);
}, Nd = oe(Sr, {
  shouldForwardProp: (e) => tt(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Er(e, t), !n.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  let r = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), C({
    position: "relative"
  }, t.formControl && {
    "label + &": {
      marginTop: 16
    }
  }, !t.disableUnderline && {
    "&::after": {
      borderBottom: `2px solid ${(e.vars || e).palette[t.color].main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: e.transitions.create("transform", {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${on.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${on.error}`]: {
      "&::before, &::after": {
        borderBottomColor: (e.vars || e).palette.error.main
      }
    },
    "&::before": {
      borderBottom: `1px solid ${r}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: e.transitions.create("border-bottom-color", {
        duration: e.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${on.disabled}, .${on.error}):before`]: {
      borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        borderBottom: `1px solid ${r}`
      }
    },
    [`&.${on.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  });
}), Md = oe(Or, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: Tr
})({}), _r = /* @__PURE__ */ T.forwardRef(function(t, n) {
  var r, o, s, a;
  const l = Me({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: c,
    components: u = {},
    componentsProps: d,
    fullWidth: p = !1,
    inputComponent: h = "input",
    multiline: b = !1,
    slotProps: y,
    slots: f = {},
    type: S = "text"
  } = l, x = re(l, $d), M = Pd(l), E = {
    root: {
      ownerState: {
        disableUnderline: c
      }
    }
  }, g = y ?? d ? Ue(y ?? d, E) : E, P = (r = (o = f.root) != null ? o : u.Root) != null ? r : Nd, m = (s = (a = f.input) != null ? a : u.Input) != null ? s : Md;
  return /* @__PURE__ */ Y(wr, C({
    slots: {
      root: P,
      input: m
    },
    slotProps: g,
    fullWidth: p,
    inputComponent: h,
    multiline: b,
    ref: n,
    type: S
  }, x, {
    classes: M
  }));
});
process.env.NODE_ENV !== "production" && (_r.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: i.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: i.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary"]), i.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: i.shape({
    Input: i.elementType,
    Root: i.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: i.shape({
    input: i.object,
    root: i.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: i.bool,
  /**
   * If `true`, the `input` will not have an underline.
   */
  disableUnderline: i.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: i.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: i.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * The id of the `input` element.
   */
  id: i.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: i.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: i.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: yt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: i.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: i.oneOfType([i.number, i.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: i.oneOfType([i.number, i.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: i.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: i.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: i.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: i.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: i.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: i.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: i.oneOfType([i.number, i.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: i.shape({
    input: i.object,
    root: i.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: i.shape({
    input: i.elementType,
    root: i.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: i.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: i.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: i.any
});
_r.muiName = "Input";
function kd(e) {
  return Oe("MuiFilledInput", e);
}
const Et = C({}, Kt, Ce("MuiFilledInput", ["root", "underline", "input"])), Id = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"], Ad = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, o = Re({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, kd, t);
  return C({}, t, o);
}, Fd = oe(Sr, {
  shouldForwardProp: (e) => tt(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Er(e, t), !n.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n;
  const r = e.palette.mode === "light", o = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", s = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", a = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", l = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return C({
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : s,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create("background-color", {
      duration: e.transitions.duration.shorter,
      easing: e.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : a,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : s
      }
    },
    [`&.${Et.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : s
    },
    [`&.${Et.disabled}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : l
    }
  }, !t.disableUnderline && {
    "&::after": {
      borderBottom: `2px solid ${(n = (e.vars || e).palette[t.color || "primary"]) == null ? void 0 : n.main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: e.transitions.create("transform", {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${Et.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${Et.error}`]: {
      "&::before, &::after": {
        borderBottomColor: (e.vars || e).palette.error.main
      }
    },
    "&::before": {
      borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : o}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: e.transitions.create("border-bottom-color", {
        duration: e.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${Et.disabled}, .${Et.error}):before`]: {
      borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
    },
    [`&.${Et.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  }, t.startAdornment && {
    paddingLeft: 12
  }, t.endAdornment && {
    paddingRight: 12
  }, t.multiline && C({
    padding: "25px 12px 8px"
  }, t.size === "small" && {
    paddingTop: 21,
    paddingBottom: 4
  }, t.hiddenLabel && {
    paddingTop: 16,
    paddingBottom: 17
  }, t.hiddenLabel && t.size === "small" && {
    paddingTop: 8,
    paddingBottom: 9
  }));
}), Dd = oe(Or, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: Tr
})(({
  theme: e,
  ownerState: t
}) => C({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12
}, !e.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
    caretColor: e.palette.mode === "light" ? null : "#fff",
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  }
}, e.vars && {
  "&:-webkit-autofill": {
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  },
  [e.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, t.size === "small" && {
  paddingTop: 21,
  paddingBottom: 4
}, t.hiddenLabel && {
  paddingTop: 16,
  paddingBottom: 17
}, t.startAdornment && {
  paddingLeft: 0
}, t.endAdornment && {
  paddingRight: 0
}, t.hiddenLabel && t.size === "small" && {
  paddingTop: 8,
  paddingBottom: 9
}, t.multiline && {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0
})), Cr = /* @__PURE__ */ T.forwardRef(function(t, n) {
  var r, o, s, a;
  const l = Me({
    props: t,
    name: "MuiFilledInput"
  }), {
    components: c = {},
    componentsProps: u,
    fullWidth: d = !1,
    // declare here to prevent spreading to DOM
    inputComponent: p = "input",
    multiline: h = !1,
    slotProps: b,
    slots: y = {},
    type: f = "text"
  } = l, S = re(l, Id), x = C({}, l, {
    fullWidth: d,
    inputComponent: p,
    multiline: h,
    type: f
  }), M = Ad(l), v = {
    root: {
      ownerState: x
    },
    input: {
      ownerState: x
    }
  }, E = b ?? u ? Ue(v, b ?? u) : v, g = (r = (o = y.root) != null ? o : c.Root) != null ? r : Fd, P = (s = (a = y.input) != null ? a : c.Input) != null ? s : Dd;
  return /* @__PURE__ */ Y(wr, C({
    slots: {
      root: g,
      input: P
    },
    componentsProps: E,
    fullWidth: d,
    inputComponent: p,
    multiline: h,
    ref: n,
    type: f
  }, S, {
    classes: M
  }));
});
process.env.NODE_ENV !== "production" && (Cr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: i.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: i.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary"]), i.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: i.shape({
    Input: i.elementType,
    Root: i.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: i.shape({
    input: i.object,
    root: i.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: i.bool,
  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: i.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: i.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: i.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: i.bool,
  /**
   * The id of the `input` element.
   */
  id: i.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: i.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: i.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: yt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: i.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: i.oneOfType([i.number, i.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: i.oneOfType([i.number, i.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: i.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: i.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: i.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: i.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: i.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: i.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: i.oneOfType([i.number, i.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: i.shape({
    input: i.object,
    root: i.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: i.shape({
    input: i.elementType,
    root: i.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: i.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: i.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: i.any
});
Cr.muiName = "Input";
var Ii;
const jd = ["children", "classes", "className", "label", "notched"], Ld = oe("fieldset", {
  shouldForwardProp: tt
})({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
}), zd = oe("legend", {
  shouldForwardProp: tt
})(({
  ownerState: e,
  theme: t
}) => C({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden"
}, !e.withLabel && {
  padding: 0,
  lineHeight: "11px",
  // sync with `height` in `legend` styles
  transition: t.transitions.create("width", {
    duration: 150,
    easing: t.transitions.easing.easeOut
  })
}, e.withLabel && C({
  display: "block",
  // Fix conflict with normalize.css and sanitize.css
  padding: 0,
  height: 11,
  // sync with `lineHeight` in `legend` styles
  fontSize: "0.75em",
  visibility: "hidden",
  maxWidth: 0.01,
  transition: t.transitions.create("max-width", {
    duration: 50,
    easing: t.transitions.easing.easeOut
  }),
  whiteSpace: "nowrap",
  "& > span": {
    paddingLeft: 5,
    paddingRight: 5,
    display: "inline-block",
    opacity: 0,
    visibility: "visible"
  }
}, e.notched && {
  maxWidth: "100%",
  transition: t.transitions.create("max-width", {
    duration: 100,
    easing: t.transitions.easing.easeOut,
    delay: 50
  })
})));
function na(e) {
  const {
    className: t,
    label: n,
    notched: r
  } = e, o = re(e, jd), s = n != null && n !== "", a = C({}, e, {
    notched: r,
    withLabel: s
  });
  return /* @__PURE__ */ Y(Ld, C({
    "aria-hidden": !0,
    className: t,
    ownerState: a
  }, o, {
    children: /* @__PURE__ */ Y(zd, {
      ownerState: a,
      children: s ? /* @__PURE__ */ Y("span", {
        children: n
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Ii || (Ii = /* @__PURE__ */ Y("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  }));
}
process.env.NODE_ENV !== "production" && (na.propTypes = {
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The label.
   */
  label: i.node,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: i.bool.isRequired,
  /**
   * @ignore
   */
  style: i.object
});
function Vd(e) {
  return Oe("MuiOutlinedInput", e);
}
const dt = C({}, Kt, Ce("MuiOutlinedInput", ["root", "notchedOutline", "input"])), Wd = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"], Ud = (e) => {
  const {
    classes: t
  } = e, r = Re({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, Vd, t);
  return C({}, t, r);
}, qd = oe(Sr, {
  shouldForwardProp: (e) => tt(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: Er
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return C({
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${dt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${dt.notchedOutline}`]: {
        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : n
      }
    },
    [`&.${dt.focused} .${dt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette[t.color].main,
      borderWidth: 2
    },
    [`&.${dt.error} .${dt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.error.main
    },
    [`&.${dt.disabled} .${dt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.action.disabled
    }
  }, t.startAdornment && {
    paddingLeft: 14
  }, t.endAdornment && {
    paddingRight: 14
  }, t.multiline && C({
    padding: "16.5px 14px"
  }, t.size === "small" && {
    padding: "8.5px 14px"
  }));
}), Bd = oe(na, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (e, t) => t.notchedOutline
})(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
  };
}), Hd = oe(Or, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: Tr
})(({
  theme: e,
  ownerState: t
}) => C({
  padding: "16.5px 14px"
}, !e.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
    caretColor: e.palette.mode === "light" ? null : "#fff",
    borderRadius: "inherit"
  }
}, e.vars && {
  "&:-webkit-autofill": {
    borderRadius: "inherit"
  },
  [e.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, t.size === "small" && {
  padding: "8.5px 14px"
}, t.multiline && {
  padding: 0
}, t.startAdornment && {
  paddingLeft: 0
}, t.endAdornment && {
  paddingRight: 0
})), Rr = /* @__PURE__ */ T.forwardRef(function(t, n) {
  var r, o, s, a, l;
  const c = Me({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    components: u = {},
    fullWidth: d = !1,
    inputComponent: p = "input",
    label: h,
    multiline: b = !1,
    notched: y,
    slots: f = {},
    type: S = "text"
  } = c, x = re(c, Wd), M = Ud(c), v = Jt(), E = Zt({
    props: c,
    muiFormControl: v,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), g = C({}, c, {
    color: E.color || "primary",
    disabled: E.disabled,
    error: E.error,
    focused: E.focused,
    formControl: v,
    fullWidth: d,
    hiddenLabel: E.hiddenLabel,
    multiline: b,
    size: E.size,
    type: S
  }), P = (r = (o = f.root) != null ? o : u.Root) != null ? r : qd, m = (s = (a = f.input) != null ? a : u.Input) != null ? s : Hd;
  return /* @__PURE__ */ Y(wr, C({
    slots: {
      root: P,
      input: m
    },
    renderSuffix: (w) => /* @__PURE__ */ Y(Bd, {
      ownerState: g,
      className: M.notchedOutline,
      label: h != null && h !== "" && E.required ? l || (l = /* @__PURE__ */ Ie(T.Fragment, {
        children: [h, " ", "*"]
      })) : h,
      notched: typeof y < "u" ? y : !!(w.startAdornment || w.filled || w.focused)
    }),
    fullWidth: d,
    inputComponent: p,
    multiline: b,
    ref: n,
    type: S
  }, x, {
    classes: C({}, M, {
      notchedOutline: null
    })
  }));
});
process.env.NODE_ENV !== "production" && (Rr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: i.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: i.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary"]), i.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: i.shape({
    Input: i.elementType,
    Root: i.elementType
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: i.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: i.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: i.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * The id of the `input` element.
   */
  id: i.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: i.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: i.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: yt,
  /**
   * The label of the `input`. It is only used for layout. The actual labelling
   * is handled by `InputLabel`.
   */
  label: i.node,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: i.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: i.oneOfType([i.number, i.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: i.oneOfType([i.number, i.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: i.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: i.string,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: i.bool,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: i.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: i.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: i.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: i.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: i.oneOfType([i.number, i.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: i.shape({
    input: i.elementType,
    root: i.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: i.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: i.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: i.any
});
Rr.muiName = "Input";
function Yd(e) {
  return Oe("MuiFormLabel", e);
}
const pn = Ce("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), Kd = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"], Gd = (e) => {
  const {
    classes: t,
    color: n,
    focused: r,
    disabled: o,
    error: s,
    filled: a,
    required: l
  } = e, c = {
    root: ["root", `color${Se(n)}`, o && "disabled", s && "error", a && "filled", r && "focused", l && "required"],
    asterisk: ["asterisk", s && "error"]
  };
  return Re(c, Yd, t);
}, Xd = oe("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => C({}, t.root, e.color === "secondary" && t.colorSecondary, e.filled && t.filled)
})(({
  theme: e,
  ownerState: t
}) => C({
  color: (e.vars || e).palette.text.secondary
}, e.typography.body1, {
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  [`&.${pn.focused}`]: {
    color: (e.vars || e).palette[t.color].main
  },
  [`&.${pn.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${pn.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), Zd = oe("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(({
  theme: e
}) => ({
  [`&.${pn.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), ra = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Me({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: o,
    className: s,
    component: a = "label"
  } = r, l = re(r, Kd), c = Jt(), u = Zt({
    props: r,
    muiFormControl: c,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), d = C({}, r, {
    color: u.color || "primary",
    component: a,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), p = Gd(d);
  return /* @__PURE__ */ Ie(Xd, C({
    as: a,
    ownerState: d,
    className: xe(p.root, s),
    ref: n
  }, l, {
    children: [o, u.required && /* @__PURE__ */ Ie(Zd, {
      ownerState: d,
      "aria-hidden": !0,
      className: p.asterisk,
      children: [" ", "*"]
    })]
  }));
});
process.env.NODE_ENV !== "production" && (ra.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: i.oneOfType([i.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), i.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: i.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: i.bool,
  /**
   * If `true`, the label should use filled classes key.
   */
  filled: i.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: i.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: i.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object])
});
function Jd(e) {
  return Oe("MuiInputLabel", e);
}
Ce("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const Qd = ["disableAnimation", "margin", "shrink", "variant", "className"], ef = (e) => {
  const {
    classes: t,
    formControl: n,
    size: r,
    shrink: o,
    disableAnimation: s,
    variant: a,
    required: l
  } = e, c = {
    root: ["root", n && "formControl", !s && "animated", o && "shrink", r && r !== "normal" && `size${Se(r)}`, a],
    asterisk: [l && "asterisk"]
  }, u = Re(c, Jd, t);
  return C({}, t, u);
}, tf = oe(ra, {
  shouldForwardProp: (e) => tt(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${pn.asterisk}`]: t.asterisk
    }, t.root, n.formControl && t.formControl, n.size === "small" && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, n.focused && t.focused, t[n.variant]];
  }
})(({
  theme: e,
  ownerState: t
}) => C({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%"
}, t.formControl && {
  position: "absolute",
  left: 0,
  top: 0,
  // slight alteration to spec spacing to match visual spec result
  transform: "translate(0, 20px) scale(1)"
}, t.size === "small" && {
  // Compensation for the `Input.inputSizeSmall` style.
  transform: "translate(0, 17px) scale(1)"
}, t.shrink && {
  transform: "translate(0, -1.5px) scale(0.75)",
  transformOrigin: "top left",
  maxWidth: "133%"
}, !t.disableAnimation && {
  transition: e.transitions.create(["color", "transform", "max-width"], {
    duration: e.transitions.duration.shorter,
    easing: e.transitions.easing.easeOut
  })
}, t.variant === "filled" && C({
  // Chrome's autofill feature gives the input field a yellow background.
  // Since the input field is behind the label in the HTML tree,
  // the input field is drawn last and hides the label with an opaque background color.
  // zIndex: 1 will raise the label above opaque background-colors of input.
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(12px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, t.size === "small" && {
  transform: "translate(12px, 13px) scale(1)"
}, t.shrink && C({
  userSelect: "none",
  pointerEvents: "auto",
  transform: "translate(12px, 7px) scale(0.75)",
  maxWidth: "calc(133% - 24px)"
}, t.size === "small" && {
  transform: "translate(12px, 4px) scale(0.75)"
})), t.variant === "outlined" && C({
  // see comment above on filled.zIndex
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(14px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, t.size === "small" && {
  transform: "translate(14px, 9px) scale(1)"
}, t.shrink && {
  userSelect: "none",
  pointerEvents: "auto",
  // Theoretically, we should have (8+5)*2/0.75 = 34px
  // but it feels a better when it bleeds a bit on the left, so 32px.
  maxWidth: "calc(133% - 32px)",
  transform: "translate(14px, -9px) scale(0.75)"
}))), oa = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Me({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: o = !1,
    shrink: s,
    className: a
  } = r, l = re(r, Qd), c = Jt();
  let u = s;
  typeof u > "u" && c && (u = c.filled || c.focused || c.adornedStart);
  const d = Zt({
    props: r,
    muiFormControl: c,
    states: ["size", "variant", "required", "focused"]
  }), p = C({}, r, {
    disableAnimation: o,
    formControl: c,
    shrink: u,
    size: d.size,
    variant: d.variant,
    required: d.required,
    focused: d.focused
  }), h = ef(p);
  return /* @__PURE__ */ Y(tf, C({
    "data-shrink": u,
    ownerState: p,
    ref: n,
    className: xe(h.root, a)
  }, l, {
    classes: h
  }));
});
process.env.NODE_ENV !== "production" && (oa.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: i.oneOfType([i.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), i.string]),
  /**
   * If `true`, the transition animation is disabled.
   * @default false
   */
  disableAnimation: i.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: i.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: i.bool,
  /**
   * If `true`, the `input` of this label is focused.
   */
  focused: i.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: i.oneOf(["dense"]),
  /**
   * if `true`, the label will indicate that the `input` is required.
   */
  required: i.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: i.bool,
  /**
   * The size of the component.
   * @default 'normal'
   */
  size: i.oneOfType([i.oneOf(["normal", "small"]), i.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The variant to use.
   */
  variant: i.oneOf(["filled", "outlined", "standard"])
});
function nf(e) {
  return Oe("MuiFormControl", e);
}
Ce("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const rf = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"], of = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, o = {
    root: ["root", n !== "none" && `margin${Se(n)}`, r && "fullWidth"]
  };
  return Re(o, nf, t);
}, sf = oe("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => C({}, t.root, t[`margin${Se(e.margin)}`], e.fullWidth && t.fullWidth)
})(({
  ownerState: e
}) => C({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top"
}, e.margin === "normal" && {
  marginTop: 16,
  marginBottom: 8
}, e.margin === "dense" && {
  marginTop: 8,
  marginBottom: 4
}, e.fullWidth && {
  width: "100%"
})), ia = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Me({
    props: t,
    name: "MuiFormControl"
  }), {
    children: o,
    className: s,
    color: a = "primary",
    component: l = "div",
    disabled: c = !1,
    error: u = !1,
    focused: d,
    fullWidth: p = !1,
    hiddenLabel: h = !1,
    margin: b = "none",
    required: y = !1,
    size: f = "medium",
    variant: S = "outlined"
  } = r, x = re(r, rf), M = C({}, r, {
    color: a,
    component: l,
    disabled: c,
    error: u,
    fullWidth: p,
    hiddenLabel: h,
    margin: b,
    required: y,
    size: f,
    variant: S
  }), v = of(M), [E, g] = T.useState(() => {
    let L = !1;
    return o && T.Children.forEach(o, (A) => {
      if (!zr(A, ["Input", "Select"]))
        return;
      const O = zr(A, ["Select"]) ? A.props.input : A;
      O && Sd(O.props) && (L = !0);
    }), L;
  }), [P, m] = T.useState(() => {
    let L = !1;
    return o && T.Children.forEach(o, (A) => {
      zr(A, ["Input", "Select"]) && (Jn(A.props, !0) || Jn(A.props.inputProps, !0)) && (L = !0);
    }), L;
  }), [w, R] = T.useState(!1);
  c && w && R(!1);
  const k = d !== void 0 && !c ? d : w;
  let I;
  if (process.env.NODE_ENV !== "production") {
    const L = T.useRef(!1);
    I = () => (L.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), L.current = !0, () => {
      L.current = !1;
    });
  }
  const j = T.useMemo(() => ({
    adornedStart: E,
    setAdornedStart: g,
    color: a,
    disabled: c,
    error: u,
    filled: P,
    focused: k,
    fullWidth: p,
    hiddenLabel: h,
    size: f,
    onBlur: () => {
      R(!1);
    },
    onEmpty: () => {
      m(!1);
    },
    onFilled: () => {
      m(!0);
    },
    onFocus: () => {
      R(!0);
    },
    registerEffect: I,
    required: y,
    variant: S
  }), [E, a, c, u, P, k, p, h, I, y, f, S]);
  return /* @__PURE__ */ Y(xr.Provider, {
    value: j,
    children: /* @__PURE__ */ Y(sf, C({
      as: l,
      ownerState: M,
      className: xe(v.root, s),
      ref: n
    }, x, {
      children: o
    }))
  });
});
process.env.NODE_ENV !== "production" && (ia.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), i.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: i.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: i.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: i.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: i.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: i.oneOf(["dense", "none", "normal"]),
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: i.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: i.oneOfType([i.oneOf(["medium", "small"]), i.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: i.oneOf(["filled", "outlined", "standard"])
});
function af(e) {
  return Oe("MuiFormHelperText", e);
}
const Ai = Ce("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var Fi;
const lf = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"], cf = (e) => {
  const {
    classes: t,
    contained: n,
    size: r,
    disabled: o,
    error: s,
    filled: a,
    focused: l,
    required: c
  } = e, u = {
    root: ["root", o && "disabled", s && "error", r && `size${Se(r)}`, n && "contained", l && "focused", a && "filled", c && "required"]
  };
  return Re(u, af, t);
}, uf = oe("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${Se(n.size)}`], n.contained && t.contained, n.filled && t.filled];
  }
})(({
  theme: e,
  ownerState: t
}) => C({
  color: (e.vars || e).palette.text.secondary
}, e.typography.caption, {
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${Ai.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Ai.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}, t.size === "small" && {
  marginTop: 4
}, t.contained && {
  marginLeft: 14,
  marginRight: 14
})), sa = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Me({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: o,
    className: s,
    component: a = "p"
  } = r, l = re(r, lf), c = Jt(), u = Zt({
    props: r,
    muiFormControl: c,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), d = C({}, r, {
    component: a,
    contained: u.variant === "filled" || u.variant === "outlined",
    variant: u.variant,
    size: u.size,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), p = cf(d);
  return /* @__PURE__ */ Y(uf, C({
    as: a,
    ownerState: d,
    className: xe(p.root, s),
    ref: n
  }, l, {
    children: o === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      Fi || (Fi = /* @__PURE__ */ Y("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : o
  }));
});
process.env.NODE_ENV !== "production" && (sa.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: i.bool,
  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: i.bool,
  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: i.bool,
  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: i.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: i.oneOf(["dense"]),
  /**
   * If `true`, the helper text should use required classes key.
   */
  required: i.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The variant to use.
   */
  variant: i.oneOfType([i.oneOf(["filled", "outlined", "standard"]), i.string])
});
const aa = /* @__PURE__ */ T.createContext({});
process.env.NODE_ENV !== "production" && (aa.displayName = "ListContext");
function df(e) {
  return Oe("MuiList", e);
}
Ce("MuiList", ["root", "padding", "dense", "subheader"]);
const ff = ["children", "className", "component", "dense", "disablePadding", "subheader"], pf = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: o
  } = e;
  return Re({
    root: ["root", !n && "padding", r && "dense", o && "subheader"]
  }, df, t);
}, mf = oe("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disablePadding && t.padding, n.dense && t.dense, n.subheader && t.subheader];
  }
})(({
  ownerState: e
}) => C({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !e.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, e.subheader && {
  paddingTop: 0
})), la = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Me({
    props: t,
    name: "MuiList"
  }), {
    children: o,
    className: s,
    component: a = "ul",
    dense: l = !1,
    disablePadding: c = !1,
    subheader: u
  } = r, d = re(r, ff), p = T.useMemo(() => ({
    dense: l
  }), [l]), h = C({}, r, {
    component: a,
    dense: l,
    disablePadding: c
  }), b = pf(h);
  return /* @__PURE__ */ Y(aa.Provider, {
    value: p,
    children: /* @__PURE__ */ Ie(mf, C({
      as: a,
      className: xe(b.root, s),
      ref: n,
      ownerState: h
    }, d, {
      children: [u, o]
    }))
  });
});
process.env.NODE_ENV !== "production" && (la.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: i.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: i.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: i.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object])
});
const hf = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function Br(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function Di(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function ca(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.indexOf(t.keys.join("")) === 0;
}
function sn(e, t, n, r, o, s) {
  let a = !1, l = o(e, t, t ? n : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (a)
        return !1;
      a = !0;
    }
    const c = r ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !ca(l, s) || c)
      l = o(e, l, n);
    else
      return l.focus(), !0;
  }
  return !1;
}
const ua = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: o = !1,
    autoFocusItem: s = !1,
    children: a,
    className: l,
    disabledItemsFocusable: c = !1,
    disableListWrap: u = !1,
    onKeyDown: d,
    variant: p = "selectedMenu"
  } = t, h = re(t, hf), b = T.useRef(null), y = T.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  _t(() => {
    o && b.current.focus();
  }, [o]), T.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (v, {
      direction: E
    }) => {
      const g = !b.current.style.width;
      if (v.clientHeight < b.current.clientHeight && g) {
        const P = `${Ys(qe(v))}px`;
        b.current.style[E === "rtl" ? "paddingLeft" : "paddingRight"] = P, b.current.style.width = `calc(100% + ${P})`;
      }
      return b.current;
    }
  }), []);
  const f = (v) => {
    const E = b.current, g = v.key, P = qe(E).activeElement;
    if (g === "ArrowDown")
      v.preventDefault(), sn(E, P, u, c, Br);
    else if (g === "ArrowUp")
      v.preventDefault(), sn(E, P, u, c, Di);
    else if (g === "Home")
      v.preventDefault(), sn(E, null, u, c, Br);
    else if (g === "End")
      v.preventDefault(), sn(E, null, u, c, Di);
    else if (g.length === 1) {
      const m = y.current, w = g.toLowerCase(), R = performance.now();
      m.keys.length > 0 && (R - m.lastTime > 500 ? (m.keys = [], m.repeating = !0, m.previousKeyMatched = !0) : m.repeating && w !== m.keys[0] && (m.repeating = !1)), m.lastTime = R, m.keys.push(w);
      const k = P && !m.repeating && ca(P, m);
      m.previousKeyMatched && (k || sn(E, P, !1, c, Br, m)) ? v.preventDefault() : m.previousKeyMatched = !1;
    }
    d && d(v);
  }, S = Ge(b, n);
  let x = -1;
  T.Children.forEach(a, (v, E) => {
    if (!/* @__PURE__ */ T.isValidElement(v)) {
      x === E && (x += 1, x >= a.length && (x = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && bn.isFragment(v) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), v.props.disabled || (p === "selectedMenu" && v.props.selected || x === -1) && (x = E), x === E && (v.props.disabled || v.props.muiSkipListHighlight || v.type.muiSkipListHighlight) && (x += 1, x >= a.length && (x = -1));
  });
  const M = T.Children.map(a, (v, E) => {
    if (E === x) {
      const g = {};
      return s && (g.autoFocus = !0), v.props.tabIndex === void 0 && p === "selectedMenu" && (g.tabIndex = 0), /* @__PURE__ */ T.cloneElement(v, g);
    }
    return v;
  });
  return /* @__PURE__ */ Y(la, C({
    role: "menu",
    ref: S,
    className: l,
    onKeyDown: f,
    tabIndex: o ? 0 : -1
  }, h, {
    children: M
  }));
});
process.env.NODE_ENV !== "production" && (ua.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: i.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: i.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: i.node,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: i.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: i.bool,
  /**
   * @ignore
   */
  onKeyDown: i.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: i.oneOf(["menu", "selectedMenu"])
});
function io(e, t) {
  return io = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, io(e, t);
}
function gf(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, io(e, t);
}
const ji = {
  disabled: !1
};
var yf = process.env.NODE_ENV !== "production" ? i.oneOfType([i.number, i.shape({
  enter: i.number,
  exit: i.number,
  appear: i.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && i.oneOfType([i.string, i.shape({
  enter: i.string,
  exit: i.string,
  active: i.string
}), i.shape({
  enter: i.string,
  enterDone: i.string,
  enterActive: i.string,
  exit: i.string,
  exitDone: i.string,
  exitActive: i.string
})]);
const da = Ve.createContext(null);
var bf = function(t) {
  return t.scrollTop;
}, dn = "unmounted", Tt = "exited", St = "entering", zt = "entered", so = "exiting", nt = /* @__PURE__ */ function(e) {
  gf(t, e);
  function t(r, o) {
    var s;
    s = e.call(this, r, o) || this;
    var a = o, l = a && !a.isMounting ? r.enter : r.appear, c;
    return s.appearStatus = null, r.in ? l ? (c = Tt, s.appearStatus = St) : c = zt : r.unmountOnExit || r.mountOnEnter ? c = dn : c = Tt, s.state = {
      status: c
    }, s.nextCallback = null, s;
  }
  t.getDerivedStateFromProps = function(o, s) {
    var a = o.in;
    return a && s.status === dn ? {
      status: Tt
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(o) {
    var s = null;
    if (o !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== St && a !== zt && (s = St) : (a === St || a === zt) && (s = so);
    }
    this.updateStatus(!1, s);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var o = this.props.timeout, s, a, l;
    return s = a = l = o, o != null && typeof o != "number" && (s = o.exit, a = o.enter, l = o.appear !== void 0 ? o.appear : a), {
      exit: s,
      enter: a,
      appear: l
    };
  }, n.updateStatus = function(o, s) {
    if (o === void 0 && (o = !1), s !== null)
      if (this.cancelNextCallback(), s === St) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : In.findDOMNode(this);
          a && bf(a);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Tt && this.setState({
      status: dn
    });
  }, n.performEnter = function(o) {
    var s = this, a = this.props.enter, l = this.context ? this.context.isMounting : o, c = this.props.nodeRef ? [l] : [In.findDOMNode(this), l], u = c[0], d = c[1], p = this.getTimeouts(), h = l ? p.appear : p.enter;
    if (!o && !a || ji.disabled) {
      this.safeSetState({
        status: zt
      }, function() {
        s.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, d), this.safeSetState({
      status: St
    }, function() {
      s.props.onEntering(u, d), s.onTransitionEnd(h, function() {
        s.safeSetState({
          status: zt
        }, function() {
          s.props.onEntered(u, d);
        });
      });
    });
  }, n.performExit = function() {
    var o = this, s = this.props.exit, a = this.getTimeouts(), l = this.props.nodeRef ? void 0 : In.findDOMNode(this);
    if (!s || ji.disabled) {
      this.safeSetState({
        status: Tt
      }, function() {
        o.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: so
    }, function() {
      o.props.onExiting(l), o.onTransitionEnd(a.exit, function() {
        o.safeSetState({
          status: Tt
        }, function() {
          o.props.onExited(l);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(o, s) {
    s = this.setNextCallback(s), this.setState(o, s);
  }, n.setNextCallback = function(o) {
    var s = this, a = !0;
    return this.nextCallback = function(l) {
      a && (a = !1, s.nextCallback = null, o(l));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(o, s) {
    this.setNextCallback(s);
    var a = this.props.nodeRef ? this.props.nodeRef.current : In.findDOMNode(this), l = o == null && !this.props.addEndListener;
    if (!a || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], u = c[0], d = c[1];
      this.props.addEndListener(u, d);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, n.render = function() {
    var o = this.state.status;
    if (o === dn)
      return null;
    var s = this.props, a = s.children;
    s.in, s.mountOnEnter, s.unmountOnExit, s.appear, s.enter, s.exit, s.timeout, s.addEndListener, s.onEnter, s.onEntering, s.onEntered, s.onExit, s.onExiting, s.onExited, s.nodeRef;
    var l = re(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Ve.createElement(da.Provider, {
        value: null
      }, typeof a == "function" ? a(o, l) : Ve.cloneElement(Ve.Children.only(a), l))
    );
  }, t;
}(Ve.Component);
nt.contextType = da;
nt.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: i.shape({
    current: typeof Element > "u" ? i.any : function(e, t, n, r, o, s) {
      var a = e[t];
      return i.instanceOf(a && "ownerDocument" in a ? a.ownerDocument.defaultView.Element : Element)(e, t, n, r, o, s);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: i.oneOfType([i.func.isRequired, i.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: i.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: i.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: i.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: i.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: i.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: i.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var n = yf;
    t.addEndListener || (n = n.isRequired);
    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
      o[s - 1] = arguments[s];
    return n.apply(void 0, [t].concat(o));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: i.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: i.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: i.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: i.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: i.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: i.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: i.func
} : {};
function jt() {
}
nt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: jt,
  onEntering: jt,
  onEntered: jt,
  onExit: jt,
  onExiting: jt,
  onExited: jt
};
nt.UNMOUNTED = dn;
nt.EXITED = Tt;
nt.ENTERING = St;
nt.ENTERED = zt;
nt.EXITING = so;
function Ro() {
  const e = Ds(_o);
  return process.env.NODE_ENV !== "production" && T.useDebugValue(e), e[Co] || e;
}
const fa = (e) => e.scrollTop;
function Qn(e, t) {
  var n, r;
  const {
    timeout: o,
    easing: s,
    style: a = {}
  } = e;
  return {
    duration: (n = a.transitionDuration) != null ? n : typeof o == "number" ? o : o[t.mode] || 0,
    easing: (r = a.transitionTimingFunction) != null ? r : typeof s == "object" ? s[t.mode] : s,
    delay: a.transitionDelay
  };
}
const vf = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function ao(e) {
  return `scale(${e}, ${e ** 2})`;
}
const xf = {
  entering: {
    opacity: 1,
    transform: ao(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Hr = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), $o = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: o = !0,
    children: s,
    easing: a,
    in: l,
    onEnter: c,
    onEntered: u,
    onEntering: d,
    onExit: p,
    onExited: h,
    onExiting: b,
    style: y,
    timeout: f = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: S = nt
  } = t, x = re(t, vf), M = Tu(), v = T.useRef(), E = Ro(), g = T.useRef(null), P = Ge(g, Pn(s), n), m = (O) => (_) => {
    if (O) {
      const D = g.current;
      _ === void 0 ? O(D) : O(D, _);
    }
  }, w = m(d), R = m((O, _) => {
    fa(O);
    const {
      duration: D,
      delay: F,
      easing: W
    } = Qn({
      style: y,
      timeout: f,
      easing: a
    }, {
      mode: "enter"
    });
    let $;
    f === "auto" ? ($ = E.transitions.getAutoHeightDuration(O.clientHeight), v.current = $) : $ = D, O.style.transition = [E.transitions.create("opacity", {
      duration: $,
      delay: F
    }), E.transitions.create("transform", {
      duration: Hr ? $ : $ * 0.666,
      delay: F,
      easing: W
    })].join(","), c && c(O, _);
  }), k = m(u), I = m(b), j = m((O) => {
    const {
      duration: _,
      delay: D,
      easing: F
    } = Qn({
      style: y,
      timeout: f,
      easing: a
    }, {
      mode: "exit"
    });
    let W;
    f === "auto" ? (W = E.transitions.getAutoHeightDuration(O.clientHeight), v.current = W) : W = _, O.style.transition = [E.transitions.create("opacity", {
      duration: W,
      delay: D
    }), E.transitions.create("transform", {
      duration: Hr ? W : W * 0.666,
      delay: Hr ? D : D || W * 0.333,
      easing: F
    })].join(","), O.style.opacity = 0, O.style.transform = ao(0.75), p && p(O);
  }), L = m(h);
  return /* @__PURE__ */ Y(S, C({
    appear: o,
    in: l,
    nodeRef: g,
    onEnter: R,
    onEntered: k,
    onEntering: w,
    onExit: j,
    onExited: L,
    onExiting: I,
    addEndListener: (O) => {
      f === "auto" && M.start(v.current || 0, O), r && r(g.current, O);
    },
    timeout: f === "auto" ? null : f
  }, x, {
    children: (O, _) => /* @__PURE__ */ T.cloneElement(s, C({
      style: C({
        opacity: 0,
        transform: ao(0.75),
        visibility: O === "exited" && !l ? "hidden" : void 0
      }, xf[O], y, s.props.style),
      ref: P
    }, _))
  }));
});
process.env.NODE_ENV !== "production" && ($o.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: i.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: i.bool,
  /**
   * A single child content element.
   */
  children: $n.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: i.oneOfType([i.shape({
    enter: i.string,
    exit: i.string
  }), i.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: i.bool,
  /**
   * @ignore
   */
  onEnter: i.func,
  /**
   * @ignore
   */
  onEntered: i.func,
  /**
   * @ignore
   */
  onEntering: i.func,
  /**
   * @ignore
   */
  onExit: i.func,
  /**
   * @ignore
   */
  onExited: i.func,
  /**
   * @ignore
   */
  onExiting: i.func,
  /**
   * @ignore
   */
  style: i.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: i.oneOfType([i.oneOf(["auto"]), i.number, i.shape({
    appear: i.number,
    enter: i.number,
    exit: i.number
  })])
});
$o.muiSupportAuto = !0;
function Ef(e) {
  const t = qe(e);
  return t.body === e ? Ct(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function mn(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Li(e) {
  return parseInt(Ct(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Tf(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function zi(e, t, n, r, o) {
  const s = [t, n, ...r];
  [].forEach.call(e.children, (a) => {
    const l = s.indexOf(a) === -1, c = !Tf(a);
    l && c && mn(a, o);
  });
}
function Yr(e, t) {
  let n = -1;
  return e.some((r, o) => t(r) ? (n = o, !0) : !1), n;
}
function Sf(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (Ef(r)) {
      const a = Ys(qe(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${Li(r) + a}px`;
      const l = qe(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        n.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${Li(c) + a}px`;
      });
    }
    let s;
    if (r.parentNode instanceof DocumentFragment)
      s = qe(r).body;
    else {
      const a = r.parentElement, l = Ct(r);
      s = (a == null ? void 0 : a.nodeName) === "HTML" && l.getComputedStyle(a).overflowY === "scroll" ? a : r;
    }
    n.push({
      value: s.style.overflow,
      property: "overflow",
      el: s
    }, {
      value: s.style.overflowX,
      property: "overflow-x",
      el: s
    }, {
      value: s.style.overflowY,
      property: "overflow-y",
      el: s
    }), s.style.overflow = "hidden";
  }
  return () => {
    n.forEach(({
      value: s,
      el: a,
      property: l
    }) => {
      s ? a.style.setProperty(l, s) : a.style.removeProperty(l);
    });
  };
}
function Of(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class wf {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && mn(t.modalRef, !1);
    const o = Of(n);
    zi(n, t.mount, t.modalRef, o, !0);
    const s = Yr(this.containers, (a) => a.container === n);
    return s !== -1 ? (this.containers[s].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: o
    }), r);
  }
  mount(t, n) {
    const r = Yr(this.containers, (s) => s.modals.indexOf(t) !== -1), o = this.containers[r];
    o.restore || (o.restore = Sf(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = Yr(this.containers, (a) => a.modals.indexOf(t) !== -1), s = this.containers[o];
    if (s.modals.splice(s.modals.indexOf(t), 1), this.modals.splice(r, 1), s.modals.length === 0)
      s.restore && s.restore(), t.modalRef && mn(t.modalRef, n), zi(s.container, t.mount, t.modalRef, s.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const a = s.modals[s.modals.length - 1];
      a.modalRef && mn(a.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const _f = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Cf(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Rf(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function $f(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Rf(e));
}
function Pf(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(_f)).forEach((r, o) => {
    const s = Cf(r);
    s === -1 || !$f(r) || (s === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: s,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function Nf() {
  return !0;
}
function er(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: s = Pf,
    isEnabled: a = Nf,
    open: l
  } = e, c = T.useRef(!1), u = T.useRef(null), d = T.useRef(null), p = T.useRef(null), h = T.useRef(null), b = T.useRef(!1), y = T.useRef(null), f = Ge(Pn(t), y), S = T.useRef(null);
  T.useEffect(() => {
    !l || !y.current || (b.current = !n);
  }, [n, l]), T.useEffect(() => {
    if (!l || !y.current)
      return;
    const v = qe(y.current);
    return y.current.contains(v.activeElement) || (y.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), y.current.setAttribute("tabIndex", "-1")), b.current && y.current.focus()), () => {
      o || (p.current && p.current.focus && (c.current = !0, p.current.focus()), p.current = null);
    };
  }, [l]), T.useEffect(() => {
    if (!l || !y.current)
      return;
    const v = qe(y.current), E = (m) => {
      S.current = m, !(r || !a() || m.key !== "Tab") && v.activeElement === y.current && m.shiftKey && (c.current = !0, d.current && d.current.focus());
    }, g = () => {
      const m = y.current;
      if (m === null)
        return;
      if (!v.hasFocus() || !a() || c.current) {
        c.current = !1;
        return;
      }
      if (m.contains(v.activeElement) || r && v.activeElement !== u.current && v.activeElement !== d.current)
        return;
      if (v.activeElement !== h.current)
        h.current = null;
      else if (h.current !== null)
        return;
      if (!b.current)
        return;
      let w = [];
      if ((v.activeElement === u.current || v.activeElement === d.current) && (w = s(y.current)), w.length > 0) {
        var R, k;
        const I = !!((R = S.current) != null && R.shiftKey && ((k = S.current) == null ? void 0 : k.key) === "Tab"), j = w[0], L = w[w.length - 1];
        typeof j != "string" && typeof L != "string" && (I ? L.focus() : j.focus());
      } else
        m.focus();
    };
    v.addEventListener("focusin", g), v.addEventListener("keydown", E, !0);
    const P = setInterval(() => {
      v.activeElement && v.activeElement.tagName === "BODY" && g();
    }, 50);
    return () => {
      clearInterval(P), v.removeEventListener("focusin", g), v.removeEventListener("keydown", E, !0);
    };
  }, [n, r, o, a, l, s]);
  const x = (v) => {
    p.current === null && (p.current = v.relatedTarget), b.current = !0, h.current = v.target;
    const E = t.props.onFocus;
    E && E(v);
  }, M = (v) => {
    p.current === null && (p.current = v.relatedTarget), b.current = !0;
  };
  return /* @__PURE__ */ Ie(T.Fragment, {
    children: [/* @__PURE__ */ Y("div", {
      tabIndex: l ? 0 : -1,
      onFocus: M,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ T.cloneElement(t, {
      ref: f,
      onFocus: x
    }), /* @__PURE__ */ Y("div", {
      tabIndex: l ? 0 : -1,
      onFocus: M,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (er.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: $n,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: i.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: i.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: i.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: i.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: i.func,
  /**
   * If `true`, focus is locked.
   */
  open: i.bool.isRequired
});
process.env.NODE_ENV !== "production" && (er.propTypes = qs(er.propTypes));
function Mf(e) {
  return typeof e == "function" ? e() : e;
}
const tr = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: s = !1
  } = t, [a, l] = T.useState(null), c = Ge(/* @__PURE__ */ T.isValidElement(r) ? Pn(r) : null, n);
  if (_t(() => {
    s || l(Mf(o) || document.body);
  }, [o, s]), _t(() => {
    if (a && !s)
      return no(n, a), () => {
        no(n, null);
      };
  }, [n, a, s]), s) {
    if (/* @__PURE__ */ T.isValidElement(r)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ T.cloneElement(r, u);
    }
    return /* @__PURE__ */ Y(T.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ Y(T.Fragment, {
    children: a && /* @__PURE__ */ za.createPortal(r, a)
  });
});
process.env.NODE_ENV !== "production" && (tr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: i.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: i.oneOfType([vn, i.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: i.bool
});
process.env.NODE_ENV !== "production" && (tr.propTypes = qs(tr.propTypes));
const kf = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], If = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, pa = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Ro(), o = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: s,
    appear: a = !0,
    children: l,
    easing: c,
    in: u,
    onEnter: d,
    onEntered: p,
    onEntering: h,
    onExit: b,
    onExited: y,
    onExiting: f,
    style: S,
    timeout: x = o,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: M = nt
  } = t, v = re(t, kf), E = T.useRef(null), g = Ge(E, Pn(l), n), P = (A) => (O) => {
    if (A) {
      const _ = E.current;
      O === void 0 ? A(_) : A(_, O);
    }
  }, m = P(h), w = P((A, O) => {
    fa(A);
    const _ = Qn({
      style: S,
      timeout: x,
      easing: c
    }, {
      mode: "enter"
    });
    A.style.webkitTransition = r.transitions.create("opacity", _), A.style.transition = r.transitions.create("opacity", _), d && d(A, O);
  }), R = P(p), k = P(f), I = P((A) => {
    const O = Qn({
      style: S,
      timeout: x,
      easing: c
    }, {
      mode: "exit"
    });
    A.style.webkitTransition = r.transitions.create("opacity", O), A.style.transition = r.transitions.create("opacity", O), b && b(A);
  }), j = P(y);
  return /* @__PURE__ */ Y(M, C({
    appear: a,
    in: u,
    nodeRef: E,
    onEnter: w,
    onEntered: R,
    onEntering: m,
    onExit: I,
    onExited: j,
    onExiting: k,
    addEndListener: (A) => {
      s && s(E.current, A);
    },
    timeout: x
  }, v, {
    children: (A, O) => /* @__PURE__ */ T.cloneElement(l, C({
      style: C({
        opacity: 0,
        visibility: A === "exited" && !u ? "hidden" : void 0
      }, If[A], S, l.props.style),
      ref: g
    }, O))
  }));
});
process.env.NODE_ENV !== "production" && (pa.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: i.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: i.bool,
  /**
   * A single child content element.
   */
  children: $n.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: i.oneOfType([i.shape({
    enter: i.string,
    exit: i.string
  }), i.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: i.bool,
  /**
   * @ignore
   */
  onEnter: i.func,
  /**
   * @ignore
   */
  onEntered: i.func,
  /**
   * @ignore
   */
  onEntering: i.func,
  /**
   * @ignore
   */
  onExit: i.func,
  /**
   * @ignore
   */
  onExited: i.func,
  /**
   * @ignore
   */
  onExiting: i.func,
  /**
   * @ignore
   */
  style: i.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: i.oneOfType([i.number, i.shape({
    appear: i.number,
    enter: i.number,
    exit: i.number
  })])
});
function Af(e) {
  return Oe("MuiBackdrop", e);
}
Ce("MuiBackdrop", ["root", "invisible"]);
const Ff = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], Df = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return Re({
    root: ["root", n && "invisible"]
  }, Af, t);
}, jf = oe("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.invisible && t.invisible];
  }
})(({
  ownerState: e
}) => C({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent"
}, e.invisible && {
  backgroundColor: "transparent"
})), ma = /* @__PURE__ */ T.forwardRef(function(t, n) {
  var r, o, s;
  const a = Me({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: l,
    className: c,
    component: u = "div",
    components: d = {},
    componentsProps: p = {},
    invisible: h = !1,
    open: b,
    slotProps: y = {},
    slots: f = {},
    TransitionComponent: S = pa,
    transitionDuration: x
  } = a, M = re(a, Ff), v = C({}, a, {
    component: u,
    invisible: h
  }), E = Df(v), g = (r = y.root) != null ? r : p.root;
  return /* @__PURE__ */ Y(S, C({
    in: b,
    timeout: x
  }, M, {
    children: /* @__PURE__ */ Y(jf, C({
      "aria-hidden": !0
    }, g, {
      as: (o = (s = f.root) != null ? s : d.Root) != null ? o : u,
      className: xe(E.root, c, g == null ? void 0 : g.className),
      ownerState: C({}, v, g == null ? void 0 : g.ownerState),
      classes: E,
      ref: n,
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (ma.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: i.shape({
    Root: i.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: i.shape({
    root: i.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: i.bool,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool.isRequired,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: i.shape({
    root: i.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: i.shape({
    root: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: i.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: i.oneOfType([i.number, i.shape({
    appear: i.number,
    enter: i.number,
    exit: i.number
  })])
});
function Lf(e) {
  return typeof e == "function" ? e() : e;
}
function zf(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Vf = new wf();
function Wf(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: r = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: o = Vf,
    closeAfterTransition: s = !1,
    onTransitionEnter: a,
    onTransitionExited: l,
    children: c,
    onClose: u,
    open: d,
    rootRef: p
  } = e, h = T.useRef({}), b = T.useRef(null), y = T.useRef(null), f = Ge(y, p), [S, x] = T.useState(!d), M = zf(c);
  let v = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (v = !1);
  const E = () => qe(b.current), g = () => (h.current.modalRef = y.current, h.current.mount = b.current, h.current), P = () => {
    o.mount(g(), {
      disableScrollLock: r
    }), y.current && (y.current.scrollTop = 0);
  }, m = ro(() => {
    const _ = Lf(t) || E().body;
    o.add(g(), _), y.current && P();
  }), w = T.useCallback(() => o.isTopModal(g()), [o]), R = ro((_) => {
    b.current = _, _ && (d && w() ? P() : y.current && mn(y.current, v));
  }), k = T.useCallback(() => {
    o.remove(g(), v);
  }, [v, o]);
  T.useEffect(() => () => {
    k();
  }, [k]), T.useEffect(() => {
    d ? m() : (!M || !s) && k();
  }, [d, k, M, s, m]);
  const I = (_) => (D) => {
    var F;
    (F = _.onKeyDown) == null || F.call(_, D), !(D.key !== "Escape" || D.which === 229 || // Wait until IME is settled.
    !w()) && (n || (D.stopPropagation(), u && u(D, "escapeKeyDown")));
  }, j = (_) => (D) => {
    var F;
    (F = _.onClick) == null || F.call(_, D), D.target === D.currentTarget && u && u(D, "backdropClick");
  };
  return {
    getRootProps: (_ = {}) => {
      const D = Zs(e);
      delete D.onTransitionEnter, delete D.onTransitionExited;
      const F = C({}, D, _);
      return C({
        role: "presentation"
      }, F, {
        onKeyDown: I(F),
        ref: f
      });
    },
    getBackdropProps: (_ = {}) => {
      const D = _;
      return C({
        "aria-hidden": !0
      }, D, {
        onClick: j(D),
        open: d
      });
    },
    getTransitionProps: () => {
      const _ = () => {
        x(!1), a && a();
      }, D = () => {
        x(!0), l && l(), s && k();
      };
      return {
        onEnter: gi(_, c == null ? void 0 : c.props.onEnter),
        onExited: gi(D, c == null ? void 0 : c.props.onExited)
      };
    },
    rootRef: f,
    portalRef: R,
    isTopModal: w,
    exited: S,
    hasTransition: M
  };
}
function Uf(e) {
  return Oe("MuiModal", e);
}
Ce("MuiModal", ["root", "hidden", "backdrop"]);
const qf = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], Bf = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return Re({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, Uf, r);
}, Hf = oe("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(({
  theme: e,
  ownerState: t
}) => C({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !t.open && t.exited && {
  visibility: "hidden"
})), Yf = oe(ma, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), ha = /* @__PURE__ */ T.forwardRef(function(t, n) {
  var r, o, s, a, l, c;
  const u = Me({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: d = Yf,
    BackdropProps: p,
    className: h,
    closeAfterTransition: b = !1,
    children: y,
    container: f,
    component: S,
    components: x = {},
    componentsProps: M = {},
    disableAutoFocus: v = !1,
    disableEnforceFocus: E = !1,
    disableEscapeKeyDown: g = !1,
    disablePortal: P = !1,
    disableRestoreFocus: m = !1,
    disableScrollLock: w = !1,
    hideBackdrop: R = !1,
    keepMounted: k = !1,
    onBackdropClick: I,
    open: j,
    slotProps: L,
    slots: A
    // eslint-disable-next-line react/prop-types
  } = u, O = re(u, qf), _ = C({}, u, {
    closeAfterTransition: b,
    disableAutoFocus: v,
    disableEnforceFocus: E,
    disableEscapeKeyDown: g,
    disablePortal: P,
    disableRestoreFocus: m,
    disableScrollLock: w,
    hideBackdrop: R,
    keepMounted: k
  }), {
    getRootProps: D,
    getBackdropProps: F,
    getTransitionProps: W,
    portalRef: $,
    isTopModal: z,
    exited: U,
    hasTransition: q
  } = Wf(C({}, _, {
    rootRef: n
  })), V = C({}, _, {
    exited: U
  }), B = Bf(V), H = {};
  if (y.props.tabIndex === void 0 && (H.tabIndex = "-1"), q) {
    const {
      onEnter: Q,
      onExited: ee
    } = W();
    H.onEnter = Q, H.onExited = ee;
  }
  const Z = (r = (o = A == null ? void 0 : A.root) != null ? o : x.Root) != null ? r : Hf, K = (s = (a = A == null ? void 0 : A.backdrop) != null ? a : x.Backdrop) != null ? s : d, J = (l = L == null ? void 0 : L.root) != null ? l : M.root, G = (c = L == null ? void 0 : L.backdrop) != null ? c : M.backdrop, X = Ht({
    elementType: Z,
    externalSlotProps: J,
    externalForwardedProps: O,
    getSlotProps: D,
    additionalProps: {
      ref: n,
      as: S
    },
    ownerState: V,
    className: xe(h, J == null ? void 0 : J.className, B == null ? void 0 : B.root, !V.open && V.exited && (B == null ? void 0 : B.hidden))
  }), N = Ht({
    elementType: K,
    externalSlotProps: G,
    additionalProps: p,
    getSlotProps: (Q) => F(C({}, Q, {
      onClick: (ee) => {
        I && I(ee), Q != null && Q.onClick && Q.onClick(ee);
      }
    })),
    className: xe(G == null ? void 0 : G.className, p == null ? void 0 : p.className, B == null ? void 0 : B.backdrop),
    ownerState: V
  });
  return !k && !j && (!q || U) ? null : /* @__PURE__ */ Y(tr, {
    ref: $,
    container: f,
    disablePortal: P,
    children: /* @__PURE__ */ Ie(Z, C({}, X, {
      children: [!R && d ? /* @__PURE__ */ Y(K, C({}, N)) : null, /* @__PURE__ */ Y(er, {
        disableEnforceFocus: E,
        disableAutoFocus: v,
        disableRestoreFocus: m,
        isEnabled: z,
        open: j,
        children: /* @__PURE__ */ T.cloneElement(y, H)
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (ha.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: i.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: i.object,
  /**
   * A single child content element.
   */
  children: $n.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: i.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: i.shape({
    Backdrop: i.elementType,
    Root: i.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: i.shape({
    backdrop: i.oneOfType([i.func, i.object]),
    root: i.oneOfType([i.func, i.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: i.oneOfType([vn, i.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: i.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: i.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: i.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: i.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: i.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: i.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: i.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: i.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: i.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: i.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: i.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: i.func,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: i.shape({
    backdrop: i.oneOfType([i.func, i.object]),
    root: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: i.shape({
    backdrop: i.elementType,
    root: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object])
});
const Vi = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
};
function Kf(e) {
  return Oe("MuiPaper", e);
}
Ce("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Gf = ["className", "component", "elevation", "square", "variant"], Xf = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, s = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return Re(s, Kf, o);
}, Zf = oe("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n;
  return C({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !t.square && {
    borderRadius: e.shape.borderRadius
  }, t.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, t.variant === "elevation" && C({
    boxShadow: (e.vars || e).shadows[t.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${Yt.alpha("#fff", Vi(t.elevation))}, ${Yt.alpha("#fff", Vi(t.elevation))})`
  }, e.vars && {
    backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[t.elevation]
  }));
}), ga = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Me({
    props: t,
    name: "MuiPaper"
  }), {
    className: o,
    component: s = "div",
    elevation: a = 1,
    square: l = !1,
    variant: c = "elevation"
  } = r, u = re(r, Gf), d = C({}, r, {
    component: s,
    elevation: a,
    square: l,
    variant: c
  }), p = Xf(d);
  return process.env.NODE_ENV !== "production" && Ro().shadows[a] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${a}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${a}]\` is defined.`].join(`
`)), /* @__PURE__ */ Y(Zf, C({
    as: s,
    ownerState: d,
    className: xe(p.root, o),
    ref: n
  }, u));
});
process.env.NODE_ENV !== "production" && (ga.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: Rn(Xs, (e) => {
    const {
      elevation: t,
      variant: n
    } = e;
    return t > 0 && n === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${n}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: i.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: i.oneOfType([i.oneOf(["elevation", "outlined"]), i.string])
});
function Jf(e) {
  return Oe("MuiPopover", e);
}
Ce("MuiPopover", ["root", "paper"]);
const Qf = ["onEntering"], ep = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps", "disableScrollLock"], tp = ["slotProps"];
function Wi(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function Ui(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function qi(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Kn(e) {
  return typeof e == "function" ? e() : e;
}
const np = (e) => {
  const {
    classes: t
  } = e;
  return Re({
    root: ["root"],
    paper: ["paper"]
  }, Jf, t);
}, rp = oe(ha, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), ya = oe(ga, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), ba = /* @__PURE__ */ T.forwardRef(function(t, n) {
  var r, o, s;
  const a = Me({
    props: t,
    name: "MuiPopover"
  }), {
    action: l,
    anchorEl: c,
    anchorOrigin: u = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: d,
    anchorReference: p = "anchorEl",
    children: h,
    className: b,
    container: y,
    elevation: f = 8,
    marginThreshold: S = 16,
    open: x,
    PaperProps: M = {},
    slots: v,
    slotProps: E,
    transformOrigin: g = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: P = $o,
    transitionDuration: m = "auto",
    TransitionProps: {
      onEntering: w
    } = {},
    disableScrollLock: R = !1
  } = a, k = re(a.TransitionProps, Qf), I = re(a, ep), j = (r = E == null ? void 0 : E.paper) != null ? r : M, L = T.useRef(), A = Ge(L, j.ref), O = C({}, a, {
    anchorOrigin: u,
    anchorReference: p,
    elevation: f,
    marginThreshold: S,
    externalPaperSlotProps: j,
    transformOrigin: g,
    TransitionComponent: P,
    transitionDuration: m,
    TransitionProps: k
  }), _ = np(O), D = T.useCallback(() => {
    if (p === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (d || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), d;
    const Q = Kn(c), ee = Q && Q.nodeType === 1 ? Q : qe(L.current).body, ne = ee.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const $e = ee.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && $e.top === 0 && $e.left === 0 && $e.right === 0 && $e.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: ne.top + Wi(ne, u.vertical),
      left: ne.left + Ui(ne, u.horizontal)
    };
  }, [c, u.horizontal, u.vertical, d, p]), F = T.useCallback((Q) => ({
    vertical: Wi(Q, g.vertical),
    horizontal: Ui(Q, g.horizontal)
  }), [g.horizontal, g.vertical]), W = T.useCallback((Q) => {
    const ee = {
      width: Q.offsetWidth,
      height: Q.offsetHeight
    }, ne = F(ee);
    if (p === "none")
      return {
        top: null,
        left: null,
        transformOrigin: qi(ne)
      };
    const $e = D();
    let Ae = $e.top - ne.vertical, Be = $e.left - ne.horizontal;
    const Xe = Ae + ee.height, ut = Be + ee.width, we = Ct(Kn(c)), Ze = we.innerHeight - S, He = we.innerWidth - S;
    if (S !== null && Ae < S) {
      const _e = Ae - S;
      Ae -= _e, ne.vertical += _e;
    } else if (S !== null && Xe > Ze) {
      const _e = Xe - Ze;
      Ae -= _e, ne.vertical += _e;
    }
    if (process.env.NODE_ENV !== "production" && ee.height > Ze && ee.height && Ze && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${ee.height - Ze}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), S !== null && Be < S) {
      const _e = Be - S;
      Be -= _e, ne.horizontal += _e;
    } else if (ut > He) {
      const _e = ut - He;
      Be -= _e, ne.horizontal += _e;
    }
    return {
      top: `${Math.round(Ae)}px`,
      left: `${Math.round(Be)}px`,
      transformOrigin: qi(ne)
    };
  }, [c, p, D, F, S]), [$, z] = T.useState(x), U = T.useCallback(() => {
    const Q = L.current;
    if (!Q)
      return;
    const ee = W(Q);
    ee.top !== null && (Q.style.top = ee.top), ee.left !== null && (Q.style.left = ee.left), Q.style.transformOrigin = ee.transformOrigin, z(!0);
  }, [W]);
  T.useEffect(() => (R && window.addEventListener("scroll", U), () => window.removeEventListener("scroll", U)), [c, R, U]);
  const q = (Q, ee) => {
    w && w(Q, ee), U();
  }, V = () => {
    z(!1);
  };
  T.useEffect(() => {
    x && U();
  }), T.useImperativeHandle(l, () => x ? {
    updatePosition: () => {
      U();
    }
  } : null, [x, U]), T.useEffect(() => {
    if (!x)
      return;
    const Q = Bs(() => {
      U();
    }), ee = Ct(c);
    return ee.addEventListener("resize", Q), () => {
      Q.clear(), ee.removeEventListener("resize", Q);
    };
  }, [c, x, U]);
  let B = m;
  m === "auto" && !P.muiSupportAuto && (B = void 0);
  const H = y || (c ? qe(Kn(c)).body : void 0), Z = (o = v == null ? void 0 : v.root) != null ? o : rp, K = (s = v == null ? void 0 : v.paper) != null ? s : ya, J = Ht({
    elementType: K,
    externalSlotProps: C({}, j, {
      style: $ ? j.style : C({}, j.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation: f,
      ref: A
    },
    ownerState: O,
    className: xe(_.paper, j == null ? void 0 : j.className)
  }), G = Ht({
    elementType: Z,
    externalSlotProps: (E == null ? void 0 : E.root) || {},
    externalForwardedProps: I,
    additionalProps: {
      ref: n,
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: H,
      open: x
    },
    ownerState: O,
    className: xe(_.root, b)
  }), {
    slotProps: X
  } = G, N = re(G, tp);
  return /* @__PURE__ */ Y(Z, C({}, N, !Zn(Z) && {
    slotProps: X,
    disableScrollLock: R
  }, {
    children: /* @__PURE__ */ Y(P, C({
      appear: !0,
      in: x,
      onEntering: q,
      onExited: V,
      timeout: B
    }, k, {
      children: /* @__PURE__ */ Y(K, C({}, J, {
        children: h
      }))
    }))
  }));
});
process.env.NODE_ENV !== "production" && (ba.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: yt,
  /**
   * An HTML element, [PopoverVirtualElement](/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: Rn(i.oneOfType([vn, i.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = Kn(e.anchorEl);
      if (t && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", `It should be an Element or PopoverVirtualElement instance but it's \`${t}\` instead.`].join(`
`));
    }
    return null;
  }),
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  anchorOrigin: i.shape({
    horizontal: i.oneOfType([i.oneOf(["center", "left", "right"]), i.number]).isRequired,
    vertical: i.oneOfType([i.oneOf(["bottom", "center", "top"]), i.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: i.shape({
    left: i.number.isRequired,
    top: i.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: i.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: i.oneOfType([vn, i.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: i.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: Xs,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: i.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: i.func,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool.isRequired,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: i.shape({
    component: Us
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: i.shape({
    paper: i.oneOfType([i.func, i.object]),
    root: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: i.shape({
    paper: i.elementType,
    root: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  transformOrigin: i.shape({
    horizontal: i.oneOfType([i.oneOf(["center", "left", "right"]), i.number]).isRequired,
    vertical: i.oneOfType([i.oneOf(["bottom", "center", "top"]), i.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: i.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: i.oneOfType([i.oneOf(["auto"]), i.number, i.shape({
    appear: i.number,
    enter: i.number,
    exit: i.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: i.object
});
function op(e) {
  return Oe("MuiMenu", e);
}
Ce("MuiMenu", ["root", "paper", "list"]);
const ip = ["onEntering"], sp = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"], ap = {
  vertical: "top",
  horizontal: "right"
}, lp = {
  vertical: "top",
  horizontal: "left"
}, cp = (e) => {
  const {
    classes: t
  } = e;
  return Re({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, op, t);
}, up = oe(ba, {
  shouldForwardProp: (e) => tt(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), dp = oe(ya, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), fp = oe(ua, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), va = /* @__PURE__ */ T.forwardRef(function(t, n) {
  var r, o;
  const s = Me({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: a = !0,
    children: l,
    className: c,
    disableAutoFocusItem: u = !1,
    MenuListProps: d = {},
    onClose: p,
    open: h,
    PaperProps: b = {},
    PopoverClasses: y,
    transitionDuration: f = "auto",
    TransitionProps: {
      onEntering: S
    } = {},
    variant: x = "selectedMenu",
    slots: M = {},
    slotProps: v = {}
  } = s, E = re(s.TransitionProps, ip), g = re(s, sp), P = Nu(), m = C({}, s, {
    autoFocus: a,
    disableAutoFocusItem: u,
    MenuListProps: d,
    onEntering: S,
    PaperProps: b,
    transitionDuration: f,
    TransitionProps: E,
    variant: x
  }), w = cp(m), R = a && !u && h, k = T.useRef(null), I = (F, W) => {
    k.current && k.current.adjustStyleForScrollbar(F, {
      direction: P ? "rtl" : "ltr"
    }), S && S(F, W);
  }, j = (F) => {
    F.key === "Tab" && (F.preventDefault(), p && p(F, "tabKeyDown"));
  };
  let L = -1;
  T.Children.map(l, (F, W) => {
    /* @__PURE__ */ T.isValidElement(F) && (process.env.NODE_ENV !== "production" && bn.isFragment(F) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), F.props.disabled || (x === "selectedMenu" && F.props.selected || L === -1) && (L = W));
  });
  const A = (r = M.paper) != null ? r : dp, O = (o = v.paper) != null ? o : b, _ = Ht({
    elementType: M.root,
    externalSlotProps: v.root,
    ownerState: m,
    className: [w.root, c]
  }), D = Ht({
    elementType: A,
    externalSlotProps: O,
    ownerState: m,
    className: w.paper
  });
  return /* @__PURE__ */ Y(up, C({
    onClose: p,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: P ? "right" : "left"
    },
    transformOrigin: P ? ap : lp,
    slots: {
      paper: A,
      root: M.root
    },
    slotProps: {
      root: _,
      paper: D
    },
    open: h,
    ref: n,
    transitionDuration: f,
    TransitionProps: C({
      onEntering: I
    }, E),
    ownerState: m
  }, g, {
    classes: y,
    children: /* @__PURE__ */ Y(fp, C({
      onKeyDown: j,
      actions: k,
      autoFocus: a && (L === -1 || u),
      autoFocusItem: R,
      variant: x
    }, d, {
      className: xe(w.list, d.className),
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (va.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: i.oneOfType([vn, i.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: i.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: i.bool,
  /**
   * Props applied to the [`MenuList`](/material-ui/api/menu-list/) element.
   * @default {}
   */
  MenuListProps: i.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: i.func,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: i.object,
  /**
   * `classes` prop applied to the [`Popover`](/material-ui/api/popover/) element.
   */
  PopoverClasses: i.object,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: i.shape({
    paper: i.oneOfType([i.func, i.object]),
    root: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: i.shape({
    paper: i.elementType,
    root: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: i.oneOfType([i.oneOf(["auto"]), i.number, i.shape({
    appear: i.number,
    enter: i.number,
    exit: i.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: i.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: i.oneOf(["menu", "selectedMenu"])
});
function pp(e) {
  return Oe("MuiNativeSelect", e);
}
const Po = Ce("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), mp = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"], hp = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: s,
    error: a
  } = e, l = {
    select: ["select", n, r && "disabled", o && "multiple", a && "error"],
    icon: ["icon", `icon${Se(n)}`, s && "iconOpen", r && "disabled"]
  };
  return Re(l, pp, t);
}, xa = ({
  ownerState: e,
  theme: t
}) => C({
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  borderRadius: 0,
  // Reset
  cursor: "pointer",
  "&:focus": C({}, t.vars ? {
    backgroundColor: `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`
  } : {
    backgroundColor: t.palette.mode === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)"
  }, {
    borderRadius: 0
    // Reset Chrome style
  }),
  // Remove IE11 arrow
  "&::-ms-expand": {
    display: "none"
  },
  [`&.${Po.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (t.vars || t).palette.background.paper
  },
  // Bump specificity to allow extending custom inputs
  "&&&": {
    paddingRight: 24,
    minWidth: 16
    // So it doesn't collapse.
  }
}, e.variant === "filled" && {
  "&&&": {
    paddingRight: 32
  }
}, e.variant === "outlined" && {
  borderRadius: (t.vars || t).shape.borderRadius,
  "&:focus": {
    borderRadius: (t.vars || t).shape.borderRadius
    // Reset the reset for Chrome style
  },
  "&&&": {
    paddingRight: 32
  }
}), gp = oe("select", {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: tt,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${Po.multiple}`]: t.multiple
    }];
  }
})(xa), Ea = ({
  ownerState: e,
  theme: t
}) => C({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  top: "calc(50% - .5em)",
  // Center vertically, height is 1em
  pointerEvents: "none",
  // Don't block pointer events on the select under the icon.
  color: (t.vars || t).palette.action.active,
  [`&.${Po.disabled}`]: {
    color: (t.vars || t).palette.action.disabled
  }
}, e.open && {
  transform: "rotate(180deg)"
}, e.variant === "filled" && {
  right: 7
}, e.variant === "outlined" && {
  right: 7
}), yp = oe("svg", {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${Se(n.variant)}`], n.open && t.iconOpen];
  }
})(Ea), Ta = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const {
    className: r,
    disabled: o,
    error: s,
    IconComponent: a,
    inputRef: l,
    variant: c = "standard"
  } = t, u = re(t, mp), d = C({}, t, {
    disabled: o,
    variant: c,
    error: s
  }), p = hp(d);
  return /* @__PURE__ */ Ie(T.Fragment, {
    children: [/* @__PURE__ */ Y(gp, C({
      ownerState: d,
      className: xe(p.select, r),
      disabled: o,
      ref: l || n
    }, u)), t.multiple ? null : /* @__PURE__ */ Y(yp, {
      as: a,
      ownerState: d,
      className: p.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && (Ta.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * The CSS class name of the select element.
   */
  className: i.string,
  /**
   * If `true`, the select is disabled.
   */
  disabled: i.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: i.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: i.elementType.isRequired,
  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: yt,
  /**
   * @ignore
   */
  multiple: i.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: i.string,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: i.func,
  /**
   * The input value.
   */
  value: i.any,
  /**
   * The variant to use.
   */
  variant: i.oneOf(["standard", "outlined", "filled"])
});
function bp(e) {
  return Oe("MuiSelect", e);
}
const an = Ce("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var Bi;
const vp = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"], xp = oe("div", {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${an.select}`]: t.select
      },
      {
        [`&.${an.select}`]: t[n.variant]
      },
      {
        [`&.${an.error}`]: t.error
      },
      {
        [`&.${an.multiple}`]: t.multiple
      }
    ];
  }
})(xa, {
  // Win specificity over the input base
  [`&.${an.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), Ep = oe("svg", {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${Se(n.variant)}`], n.open && t.iconOpen];
  }
})(Ea), Tp = oe("input", {
  shouldForwardProp: (e) => Qs(e) && e !== "classes",
  name: "MuiSelect",
  slot: "NativeInput",
  overridesResolver: (e, t) => t.nativeInput
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
});
function Hi(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function Sp(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const Op = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: s,
    error: a
  } = e, l = {
    select: ["select", n, r && "disabled", o && "multiple", a && "error"],
    icon: ["icon", `icon${Se(n)}`, s && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return Re(l, bp, t);
}, Sa = /* @__PURE__ */ T.forwardRef(function(t, n) {
  var r;
  const {
    "aria-describedby": o,
    "aria-label": s,
    autoFocus: a,
    autoWidth: l,
    children: c,
    className: u,
    defaultOpen: d,
    defaultValue: p,
    disabled: h,
    displayEmpty: b,
    error: y = !1,
    IconComponent: f,
    inputRef: S,
    labelId: x,
    MenuProps: M = {},
    multiple: v,
    name: E,
    onBlur: g,
    onChange: P,
    onClose: m,
    onFocus: w,
    onOpen: R,
    open: k,
    readOnly: I,
    renderValue: j,
    SelectDisplayProps: L = {},
    tabIndex: A,
    value: O,
    variant: _ = "standard"
  } = t, D = re(t, vp), [F, W] = vi({
    controlled: O,
    default: p,
    name: "Select"
  }), [$, z] = vi({
    controlled: k,
    default: d,
    name: "Select"
  }), U = T.useRef(null), q = T.useRef(null), [V, B] = T.useState(null), {
    current: H
  } = T.useRef(k != null), [Z, K] = T.useState(), J = Ge(n, S), G = T.useCallback((te) => {
    q.current = te, te && B(te);
  }, []), X = V == null ? void 0 : V.parentNode;
  T.useImperativeHandle(J, () => ({
    focus: () => {
      q.current.focus();
    },
    node: U.current,
    value: F
  }), [F]), T.useEffect(() => {
    d && $ && V && !H && (K(l ? null : X.clientWidth), q.current.focus());
  }, [V, l]), T.useEffect(() => {
    a && q.current.focus();
  }, [a]), T.useEffect(() => {
    if (!x)
      return;
    const te = qe(q.current).getElementById(x);
    if (te) {
      const ie = () => {
        getSelection().isCollapsed && q.current.focus();
      };
      return te.addEventListener("click", ie), () => {
        te.removeEventListener("click", ie);
      };
    }
  }, [x]);
  const N = (te, ie) => {
    te ? R && R(ie) : m && m(ie), H || (K(l ? null : X.clientWidth), z(te));
  }, Q = (te) => {
    te.button === 0 && (te.preventDefault(), q.current.focus(), N(!0, te));
  }, ee = (te) => {
    N(!1, te);
  }, ne = T.Children.toArray(c), $e = (te) => {
    const ie = ne.find((Pe) => Pe.props.value === te.target.value);
    ie !== void 0 && (W(ie.props.value), P && P(te, ie));
  }, Ae = (te) => (ie) => {
    let Pe;
    if (ie.currentTarget.hasAttribute("tabindex")) {
      if (v) {
        Pe = Array.isArray(F) ? F.slice() : [];
        const Mt = F.indexOf(te.props.value);
        Mt === -1 ? Pe.push(te.props.value) : Pe.splice(Mt, 1);
      } else
        Pe = te.props.value;
      if (te.props.onClick && te.props.onClick(ie), F !== Pe && (W(Pe), P)) {
        const Mt = ie.nativeEvent || ie, Fo = new Mt.constructor(Mt.type, Mt);
        Object.defineProperty(Fo, "target", {
          writable: !0,
          value: {
            value: Pe,
            name: E
          }
        }), P(Fo, te);
      }
      v || N(!1, ie);
    }
  }, Be = (te) => {
    I || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].indexOf(te.key) !== -1 && (te.preventDefault(), N(!0, te));
  }, Xe = V !== null && $, ut = (te) => {
    !Xe && g && (Object.defineProperty(te, "target", {
      writable: !0,
      value: {
        value: F,
        name: E
      }
    }), g(te));
  };
  delete D["aria-invalid"];
  let we, Ze;
  const He = [];
  let _e = !1, Nt = !1;
  (Jn({
    value: F
  }) || b) && (j ? we = j(F) : _e = !0);
  const Qt = ne.map((te) => {
    if (!/* @__PURE__ */ T.isValidElement(te))
      return null;
    process.env.NODE_ENV !== "production" && bn.isFragment(te) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let ie;
    if (v) {
      if (!Array.isArray(F))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : wt(2));
      ie = F.some((Pe) => Hi(Pe, te.props.value)), ie && _e && He.push(te.props.children);
    } else
      ie = Hi(F, te.props.value), ie && _e && (Ze = te.props.children);
    return ie && (Nt = !0), /* @__PURE__ */ T.cloneElement(te, {
      "aria-selected": ie ? "true" : "false",
      onClick: Ae(te),
      onKeyUp: (Pe) => {
        Pe.key === " " && Pe.preventDefault(), te.props.onKeyUp && te.props.onKeyUp(Pe);
      },
      role: "option",
      selected: ie,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": te.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  process.env.NODE_ENV !== "production" && T.useEffect(() => {
    if (!Nt && !v && F !== "") {
      const te = ne.map((ie) => ie.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${F}\` for the select ${E ? `(name="${E}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${te.filter((ie) => ie != null).map((ie) => `\`${ie}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [Nt, ne, v, E, F]), _e && (v ? He.length === 0 ? we = null : we = He.reduce((te, ie, Pe) => (te.push(ie), Pe < He.length - 1 && te.push(", "), te), []) : we = Ze);
  let en = Z;
  !l && H && V && (en = X.clientWidth);
  let fe;
  typeof A < "u" ? fe = A : fe = h ? null : 0;
  const tn = L.id || (E ? `mui-component-select-${E}` : void 0), vt = C({}, t, {
    variant: _,
    value: F,
    open: Xe,
    error: y
  }), Pr = Op(vt), Nr = C({}, M.PaperProps, (r = M.slotProps) == null ? void 0 : r.paper), Ao = Hs();
  return /* @__PURE__ */ Ie(T.Fragment, {
    children: [/* @__PURE__ */ Y(xp, C({
      ref: G,
      tabIndex: fe,
      role: "combobox",
      "aria-controls": Ao,
      "aria-disabled": h ? "true" : void 0,
      "aria-expanded": Xe ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": s,
      "aria-labelledby": [x, tn].filter(Boolean).join(" ") || void 0,
      "aria-describedby": o,
      onKeyDown: Be,
      onMouseDown: h || I ? null : Q,
      onBlur: ut,
      onFocus: w
    }, L, {
      ownerState: vt,
      className: xe(L.className, Pr.select, u),
      id: tn,
      children: Sp(we) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Bi || (Bi = /* @__PURE__ */ Y("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : we
    })), /* @__PURE__ */ Y(Tp, C({
      "aria-invalid": y,
      value: Array.isArray(F) ? F.join(",") : F,
      name: E,
      ref: U,
      "aria-hidden": !0,
      onChange: $e,
      tabIndex: -1,
      disabled: h,
      className: Pr.nativeInput,
      autoFocus: a,
      ownerState: vt
    }, D)), /* @__PURE__ */ Y(Ep, {
      as: f,
      className: Pr.icon,
      ownerState: vt
    }), /* @__PURE__ */ Y(va, C({
      id: `menu-${E || ""}`,
      anchorEl: X,
      open: Xe,
      onClose: ee,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      }
    }, M, {
      MenuListProps: C({
        "aria-labelledby": x,
        role: "listbox",
        "aria-multiselectable": v ? "true" : void 0,
        disableListWrap: !0,
        id: Ao
      }, M.MenuListProps),
      slotProps: C({}, M.slotProps, {
        paper: C({}, Nr, {
          style: C({
            minWidth: en
          }, Nr != null ? Nr.style : null)
        })
      }),
      children: Qt
    }))]
  });
});
process.env.NODE_ENV !== "production" && (Sa.propTypes = {
  /**
   * @ignore
   */
  "aria-describedby": i.string,
  /**
   * @ignore
   */
  "aria-label": i.string,
  /**
   * @ignore
   */
  autoFocus: i.bool,
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: i.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * The CSS class name of the select element.
   */
  className: i.string,
  /**
   * If `true`, the component is toggled on mount. Use when the component open state is not controlled.
   * You can only use it when the `native` prop is `false` (default).
   */
  defaultOpen: i.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, the select is disabled.
   */
  disabled: i.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: i.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: i.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: i.elementType.isRequired,
  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: yt,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: i.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: i.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: i.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: i.string,
  /**
   * @ignore
   */
  onBlur: i.func,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: i.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: i.func,
  /**
   * @ignore
   */
  onFocus: i.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: i.func,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool,
  /**
   * @ignore
   */
  readOnly: i.bool,
  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: i.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: i.object,
  /**
   * @ignore
   */
  tabIndex: i.oneOfType([i.number, i.string]),
  /**
   * @ignore
   */
  type: i.any,
  /**
   * The input value.
   */
  value: i.any,
  /**
   * The variant to use.
   */
  variant: i.oneOf(["standard", "outlined", "filled"])
});
function wp(e) {
  return Oe("MuiSvgIcon", e);
}
Ce("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const _p = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], Cp = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${Se(t)}`, `fontSize${Se(n)}`]
  };
  return Re(o, wp, r);
}, Rp = oe("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${Se(n.color)}`], t[`fontSize${Se(n.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, r, o, s, a, l, c, u, d, p, h, b, y;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // for example heroicons uses fill="none" and stroke="currentColor"
    fill: t.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (n = e.transitions) == null || (r = n.create) == null ? void 0 : r.call(n, "fill", {
      duration: (o = e.transitions) == null || (o = o.duration) == null ? void 0 : o.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((s = e.typography) == null || (a = s.pxToRem) == null ? void 0 : a.call(s, 20)) || "1.25rem",
      medium: ((l = e.typography) == null || (c = l.pxToRem) == null ? void 0 : c.call(l, 24)) || "1.5rem",
      large: ((u = e.typography) == null || (d = u.pxToRem) == null ? void 0 : d.call(u, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (p = (h = (e.vars || e).palette) == null || (h = h[t.color]) == null ? void 0 : h.main) != null ? p : {
      action: (b = (e.vars || e).palette) == null || (b = b.action) == null ? void 0 : b.active,
      disabled: (y = (e.vars || e).palette) == null || (y = y.action) == null ? void 0 : y.disabled,
      inherit: void 0
    }[t.color]
  };
}), nr = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Me({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: s,
    color: a = "inherit",
    component: l = "svg",
    fontSize: c = "medium",
    htmlColor: u,
    inheritViewBox: d = !1,
    titleAccess: p,
    viewBox: h = "0 0 24 24"
  } = r, b = re(r, _p), y = /* @__PURE__ */ T.isValidElement(o) && o.type === "svg", f = C({}, r, {
    color: a,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: h,
    hasSvgAsChild: y
  }), S = {};
  d || (S.viewBox = h);
  const x = Cp(f);
  return /* @__PURE__ */ Ie(Rp, C({
    as: l,
    className: xe(x.root, s),
    focusable: "false",
    color: u,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: n
  }, S, b, y && o.props, {
    ownerState: f,
    children: [y ? o.props.children : o, p ? /* @__PURE__ */ Y("title", {
      children: p
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (nr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: i.oneOfType([i.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), i.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: i.oneOfType([i.oneOf(["inherit", "large", "medium", "small"]), i.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: i.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: i.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: i.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: i.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: i.string
});
nr.muiName = "SvgIcon";
function $p(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ Y(nr, C({
      "data-testid": `${t}Icon`,
      ref: o
    }, r, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = nr.muiName, /* @__PURE__ */ T.memo(/* @__PURE__ */ T.forwardRef(n));
}
const Pp = $p(/* @__PURE__ */ Y("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), Np = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"], Mp = ["root"], kp = (e) => {
  const {
    classes: t
  } = e;
  return t;
}, No = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => tt(e) && e !== "variant",
  slot: "Root"
}, Ip = oe(_r, No)(""), Ap = oe(Rr, No)(""), Fp = oe(Cr, No)(""), Mo = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Me({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: o = !1,
    children: s,
    classes: a = {},
    className: l,
    defaultOpen: c = !1,
    displayEmpty: u = !1,
    IconComponent: d = Pp,
    id: p,
    input: h,
    inputProps: b,
    label: y,
    labelId: f,
    MenuProps: S,
    multiple: x = !1,
    native: M = !1,
    onClose: v,
    onOpen: E,
    open: g,
    renderValue: P,
    SelectDisplayProps: m,
    variant: w = "outlined"
  } = r, R = re(r, Np), k = M ? Ta : Sa, I = Jt(), j = Zt({
    props: r,
    muiFormControl: I,
    states: ["variant", "error"]
  }), L = j.variant || w, A = C({}, r, {
    variant: L,
    classes: a
  }), O = kp(A), _ = re(O, Mp), D = h || {
    standard: /* @__PURE__ */ Y(Ip, {
      ownerState: A
    }),
    outlined: /* @__PURE__ */ Y(Ap, {
      label: y,
      ownerState: A
    }),
    filled: /* @__PURE__ */ Y(Fp, {
      ownerState: A
    })
  }[L], F = Ge(n, Pn(D));
  return /* @__PURE__ */ Y(T.Fragment, {
    children: /* @__PURE__ */ T.cloneElement(D, C({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: k,
      inputProps: C({
        children: s,
        error: j.error,
        IconComponent: d,
        variant: L,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: x
      }, M ? {
        id: p
      } : {
        autoWidth: o,
        defaultOpen: c,
        displayEmpty: u,
        labelId: f,
        MenuProps: S,
        onClose: v,
        onOpen: E,
        open: g,
        renderValue: P,
        SelectDisplayProps: C({
          id: p
        }, m)
      }, b, {
        classes: b ? Ue(_, b.classes) : _
      }, h ? h.props.inputProps : {})
    }, (x && M || u) && L === "outlined" ? {
      notched: !0
    } : {}, {
      ref: F,
      className: xe(D.props.className, l, O.root)
    }, !h && {
      variant: L
    }, R))
  });
});
process.env.NODE_ENV !== "production" && (Mo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   * @default false
   */
  autoWidth: i.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   * @default {}
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * If `true`, the component is initially open. Use when the component open state is not controlled (i.e. the `open` prop is not defined).
   * You can only use it when the `native` prop is `false` (default).
   * @default false
   */
  defaultOpen: i.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, a value is displayed even if no items are selected.
   *
   * In order to display a meaningful value, a function can be passed to the `renderValue` prop which
   * returns the value to be displayed when no items are selected.
   *
   * ⚠️ When using this prop, make sure the label doesn't overlap with the empty displayed value.
   * The label should either be hidden or forced to a shrunk state.
   * @default false
   */
  displayEmpty: i.bool,
  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent: i.elementType,
  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: i.string,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: i.element,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: i.object,
  /**
   * See [OutlinedInput#label](/material-ui/api/outlined-input/#props)
   */
  label: i.node,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: i.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: i.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: i.bool,
  /**
   * If `true`, the component uses a native `select` element.
   * @default false
   */
  native: i.bool,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {SelectChangeEvent<Value>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event, not a change event, unless the change event is caused by browser autofill.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: i.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select collapses).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: i.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select expands).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: i.func,
  /**
   * If `true`, the component is shown.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: i.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: i.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: i.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: i.oneOfType([i.oneOf([""]), i.any]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: i.oneOf(["filled", "outlined", "standard"])
});
Mo.muiName = "Select";
function Dp(e) {
  return Oe("MuiTextField", e);
}
Ce("MuiTextField", ["root"]);
const jp = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"], Lp = {
  standard: _r,
  filled: Cr,
  outlined: Rr
}, zp = (e) => {
  const {
    classes: t
  } = e;
  return Re({
    root: ["root"]
  }, Dp, t);
}, Vp = oe(ia, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Oa = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Me({
    props: t,
    name: "MuiTextField"
  }), {
    autoComplete: o,
    autoFocus: s = !1,
    children: a,
    className: l,
    color: c = "primary",
    defaultValue: u,
    disabled: d = !1,
    error: p = !1,
    FormHelperTextProps: h,
    fullWidth: b = !1,
    helperText: y,
    id: f,
    InputLabelProps: S,
    inputProps: x,
    InputProps: M,
    inputRef: v,
    label: E,
    maxRows: g,
    minRows: P,
    multiline: m = !1,
    name: w,
    onBlur: R,
    onChange: k,
    onFocus: I,
    placeholder: j,
    required: L = !1,
    rows: A,
    select: O = !1,
    SelectProps: _,
    type: D,
    value: F,
    variant: W = "outlined"
  } = r, $ = re(r, jp), z = C({}, r, {
    autoFocus: s,
    color: c,
    disabled: d,
    error: p,
    fullWidth: b,
    multiline: m,
    required: L,
    select: O,
    variant: W
  }), U = zp(z);
  process.env.NODE_ENV !== "production" && O && !a && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const q = {};
  W === "outlined" && (S && typeof S.shrink < "u" && (q.notched = S.shrink), q.label = E), O && ((!_ || !_.native) && (q.id = void 0), q["aria-describedby"] = void 0);
  const V = Hs(f), B = y && V ? `${V}-helper-text` : void 0, H = E && V ? `${V}-label` : void 0, Z = Lp[W], K = /* @__PURE__ */ Y(Z, C({
    "aria-describedby": B,
    autoComplete: o,
    autoFocus: s,
    defaultValue: u,
    fullWidth: b,
    multiline: m,
    name: w,
    rows: A,
    maxRows: g,
    minRows: P,
    type: D,
    value: F,
    id: V,
    inputRef: v,
    onBlur: R,
    onChange: k,
    onFocus: I,
    placeholder: j,
    inputProps: x
  }, q, M));
  return /* @__PURE__ */ Ie(Vp, C({
    className: xe(U.root, l),
    disabled: d,
    error: p,
    fullWidth: b,
    ref: n,
    required: L,
    color: c,
    variant: W,
    ownerState: z
  }, $, {
    children: [E != null && E !== "" && /* @__PURE__ */ Y(oa, C({
      htmlFor: V,
      id: H
    }, S, {
      children: E
    })), O ? /* @__PURE__ */ Y(Mo, C({
      "aria-describedby": B,
      id: V,
      labelId: H,
      value: F,
      input: K
    }, _, {
      children: a
    })) : K, y && /* @__PURE__ */ Y(sa, C({
      id: B
    }, h, {
      children: y
    }))]
  }));
});
process.env.NODE_ENV !== "production" && (Oa.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: i.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: i.bool,
  /**
   * @ignore
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), i.string]),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: i.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: i.bool,
  /**
   * Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.
   */
  FormHelperTextProps: i.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * The helper text content.
   */
  helperText: i.node,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: i.string,
  /**
   * Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   */
  InputLabelProps: i.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: i.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: i.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: yt,
  /**
   * The label content.
   */
  label: i.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: i.oneOf(["dense", "none", "normal"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: i.oneOfType([i.number, i.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: i.oneOfType([i.number, i.string]),
  /**
   * If `true`, a `textarea` element is rendered instead of an input.
   * @default false
   */
  multiline: i.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: i.string,
  /**
   * @ignore
   */
  onBlur: i.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: i.func,
  /**
   * @ignore
   */
  onFocus: i.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: i.string,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: i.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: i.oneOfType([i.number, i.string]),
  /**
   * Render a [`Select`](/material-ui/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   * @default false
   */
  select: i.bool,
  /**
   * Props applied to the [`Select`](/material-ui/api/select/) element.
   */
  SelectProps: i.object,
  /**
   * The size of the component.
   */
  size: i.oneOfType([i.oneOf(["medium", "small"]), i.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: i.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: i.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: i.oneOf(["filled", "outlined", "standard"])
});
const Wp = ({ ...e }) => /* @__PURE__ */ Ie("div", { className: "flex flex-col", children: [
  e.label && e.label.length > 2 && /* @__PURE__ */ Y("label", { className: "block text-sm/6 font-medium text-gray-900", children: e.label }),
  /* @__PURE__ */ Y(
    Oa,
    {
      type: e.type,
      fullWidth: !0,
      variant: "outlined",
      size: "small",
      id: e.id,
      value: e.value,
      placeholder: e.placeholder,
      onChange: (t) => {
        e.onChange && e.onChange(t);
      },
      InputProps: {
        startAdornment: e.startAdornment,
        // maxLength: props.maxLength,
        // minLength: props.minLength,
        type: e.type,
        style: e.style
      },
      className: e.className,
      sx: e.hideBorders == !1 || e.hideBorders == null ? {
        "& .MuiFormLabel-root": {
          fontSize: "0.875rem"
        },
        "& input::placeholder": {
          fontSize: "0.875rem"
        }
      } : {
        border: "none",
        fontStyle: "italic",
        "& fieldset": { border: "none" },
        ":focus": {
          border: "1px solid #FFFFFF",
          "& fieldset": { border: "none" }
        },
        ":hover": {
          border: "none",
          "& fieldset": { border: "none" }
        }
      }
    }
  )
] });
var Kr, Yi;
function Up() {
  if (Yi) return Kr;
  Yi = 1;
  function e(x) {
    this._maxSize = x, this.clear();
  }
  e.prototype.clear = function() {
    this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
  }, e.prototype.get = function(x) {
    return this._values[x];
  }, e.prototype.set = function(x, M) {
    return this._size >= this._maxSize && this.clear(), x in this._values || this._size++, this._values[x] = M;
  };
  var t = /[^.^\]^[]+|(?=\[\]|\.\.)/g, n = /^\d+$/, r = /^\d/, o = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, s = /^\s*(['"]?)(.*?)(\1)\s*$/, a = 512, l = new e(a), c = new e(a), u = new e(a);
  Kr = {
    Cache: e,
    split: p,
    normalizePath: d,
    setter: function(x) {
      var M = d(x);
      return c.get(x) || c.set(x, function(E, g) {
        for (var P = 0, m = M.length, w = E; P < m - 1; ) {
          var R = M[P];
          if (R === "__proto__" || R === "constructor" || R === "prototype")
            return E;
          w = w[M[P++]];
        }
        w[M[P]] = g;
      });
    },
    getter: function(x, M) {
      var v = d(x);
      return u.get(x) || u.set(x, function(g) {
        for (var P = 0, m = v.length; P < m; )
          if (g != null || !M) g = g[v[P++]];
          else return;
        return g;
      });
    },
    join: function(x) {
      return x.reduce(function(M, v) {
        return M + (b(v) || n.test(v) ? "[" + v + "]" : (M ? "." : "") + v);
      }, "");
    },
    forEach: function(x, M, v) {
      h(Array.isArray(x) ? x : p(x), M, v);
    }
  };
  function d(x) {
    return l.get(x) || l.set(
      x,
      p(x).map(function(M) {
        return M.replace(s, "$2");
      })
    );
  }
  function p(x) {
    return x.match(t) || [""];
  }
  function h(x, M, v) {
    var E = x.length, g, P, m, w;
    for (P = 0; P < E; P++)
      g = x[P], g && (S(g) && (g = '"' + g + '"'), w = b(g), m = !w && /^\d+$/.test(g), M.call(v, g, w, m, P, x));
  }
  function b(x) {
    return typeof x == "string" && x && ["'", '"'].indexOf(x.charAt(0)) !== -1;
  }
  function y(x) {
    return x.match(r) && !x.match(n);
  }
  function f(x) {
    return o.test(x);
  }
  function S(x) {
    return !b(x) && (y(x) || f(x));
  }
  return Kr;
}
var wa = Up(), Vn = { exports: {} }, Ki;
function qp() {
  if (Ki) return Vn.exports;
  Ki = 1, Vn.exports = function(o) {
    return e(t(o), o);
  }, Vn.exports.array = e;
  function e(o, s) {
    var a = o.length, l = new Array(a), c = {}, u = a, d = n(s), p = r(o);
    for (s.forEach(function(b) {
      if (!p.has(b[0]) || !p.has(b[1]))
        throw new Error("Unknown node. There is an unknown node in the supplied edges.");
    }); u--; )
      c[u] || h(o[u], u, /* @__PURE__ */ new Set());
    return l;
    function h(b, y, f) {
      if (f.has(b)) {
        var S;
        try {
          S = ", node was:" + JSON.stringify(b);
        } catch {
          S = "";
        }
        throw new Error("Cyclic dependency" + S);
      }
      if (!p.has(b))
        throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(b));
      if (!c[y]) {
        c[y] = !0;
        var x = d.get(b) || /* @__PURE__ */ new Set();
        if (x = Array.from(x), y = x.length) {
          f.add(b);
          do {
            var M = x[--y];
            h(M, p.get(M), f);
          } while (y);
          f.delete(b);
        }
        l[--a] = b;
      }
    }
  }
  function t(o) {
    for (var s = /* @__PURE__ */ new Set(), a = 0, l = o.length; a < l; a++) {
      var c = o[a];
      s.add(c[0]), s.add(c[1]);
    }
    return Array.from(s);
  }
  function n(o) {
    for (var s = /* @__PURE__ */ new Map(), a = 0, l = o.length; a < l; a++) {
      var c = o[a];
      s.has(c[0]) || s.set(c[0], /* @__PURE__ */ new Set()), s.has(c[1]) || s.set(c[1], /* @__PURE__ */ new Set()), s.get(c[0]).add(c[1]);
    }
    return s;
  }
  function r(o) {
    for (var s = /* @__PURE__ */ new Map(), a = 0, l = o.length; a < l; a++)
      s.set(o[a], a);
    return s;
  }
  return Vn.exports;
}
qp();
const Bp = Object.prototype.toString, Hp = Error.prototype.toString, Yp = RegExp.prototype.toString, Kp = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", Gp = /^Symbol\((.*)\)(.*)$/;
function Xp(e) {
  return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
}
function Gi(e, t = !1) {
  if (e == null || e === !0 || e === !1) return "" + e;
  const n = typeof e;
  if (n === "number") return Xp(e);
  if (n === "string") return t ? `"${e}"` : e;
  if (n === "function") return "[Function " + (e.name || "anonymous") + "]";
  if (n === "symbol") return Kp.call(e).replace(Gp, "Symbol($1)");
  const r = Bp.call(e).slice(8, -1);
  return r === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : r === "Error" || e instanceof Error ? "[" + Hp.call(e) + "]" : r === "RegExp" ? Yp.call(e) : null;
}
function mt(e, t) {
  let n = Gi(e, t);
  return n !== null ? n : JSON.stringify(e, function(r, o) {
    let s = Gi(this[r], t);
    return s !== null ? s : o;
  }, 2);
}
function _a(e) {
  return e == null ? [] : [].concat(e);
}
let Ca, Ra, $a, Zp = /\$\{\s*(\w+)\s*\}/g;
Ca = Symbol.toStringTag;
class Xi {
  constructor(t, n, r, o) {
    this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[Ca] = "Error", this.name = "ValidationError", this.value = n, this.path = r, this.type = o, this.errors = [], this.inner = [], _a(t).forEach((s) => {
      if (je.isError(s)) {
        this.errors.push(...s.errors);
        const a = s.inner.length ? s.inner : [s];
        this.inner.push(...a);
      } else
        this.errors.push(s);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
  }
}
Ra = Symbol.hasInstance;
$a = Symbol.toStringTag;
class je extends Error {
  static formatError(t, n) {
    const r = n.label || n.path || "this";
    return n = Object.assign({}, n, {
      path: r,
      originalPath: n.path
    }), typeof t == "string" ? t.replace(Zp, (o, s) => mt(n[s])) : typeof t == "function" ? t(n) : t;
  }
  static isError(t) {
    return t && t.name === "ValidationError";
  }
  constructor(t, n, r, o, s) {
    const a = new Xi(t, n, r, o);
    if (s)
      return a;
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[$a] = "Error", this.name = a.name, this.message = a.message, this.type = a.type, this.value = a.value, this.path = a.path, this.errors = a.errors, this.inner = a.inner, Error.captureStackTrace && Error.captureStackTrace(this, je);
  }
  static [Ra](t) {
    return Xi[Symbol.hasInstance](t) || super[Symbol.hasInstance](t);
  }
}
let it = {
  default: "${path} is invalid",
  required: "${path} is a required field",
  defined: "${path} must be defined",
  notNull: "${path} cannot be null",
  oneOf: "${path} must be one of the following values: ${values}",
  notOneOf: "${path} must not be one of the following values: ${values}",
  notType: ({
    path: e,
    type: t,
    value: n,
    originalValue: r
  }) => {
    const o = r != null && r !== n ? ` (cast from the value \`${mt(r, !0)}\`).` : ".";
    return t !== "mixed" ? `${e} must be a \`${t}\` type, but the final value was: \`${mt(n, !0)}\`` + o : `${e} must match the configured type. The validated value was: \`${mt(n, !0)}\`` + o;
  }
}, Jp = {
  length: "${path} must be exactly ${length} characters",
  min: "${path} must be at least ${min} characters",
  max: "${path} must be at most ${max} characters",
  matches: '${path} must match the following: "${regex}"',
  email: "${path} must be a valid email",
  url: "${path} must be a valid URL",
  uuid: "${path} must be a valid UUID",
  datetime: "${path} must be a valid ISO date-time",
  datetime_precision: "${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",
  datetime_offset: '${path} must be a valid ISO date-time with UTC "Z" timezone',
  trim: "${path} must be a trimmed string",
  lowercase: "${path} must be a lowercase string",
  uppercase: "${path} must be a upper case string"
}, Qp = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, lo = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, em = {
  isValue: "${path} field must be ${value}"
}, tm = {
  noUnknown: "${path} field has unspecified keys: ${unknown}",
  exact: "${path} object contains unknown properties: ${properties}"
}, nm = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
}, rm = {
  notType: (e) => {
    const {
      path: t,
      value: n,
      spec: r
    } = e, o = r.types.length;
    if (Array.isArray(n)) {
      if (n.length < o) return `${t} tuple value has too few items, expected a length of ${o} but got ${n.length} for value: \`${mt(n, !0)}\``;
      if (n.length > o) return `${t} tuple value has too many items, expected a length of ${o} but got ${n.length} for value: \`${mt(n, !0)}\``;
    }
    return je.formatError(it.notType, e);
  }
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: it,
  string: Jp,
  number: Qp,
  date: lo,
  object: tm,
  array: nm,
  boolean: em,
  tuple: rm
});
const Pa = (e) => e && e.__isYupSchema__;
class rr {
  static fromOptions(t, n) {
    if (!n.then && !n.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: r,
      then: o,
      otherwise: s
    } = n, a = typeof r == "function" ? r : (...l) => l.every((c) => c === r);
    return new rr(t, (l, c) => {
      var u;
      let d = a(...l) ? o : s;
      return (u = d == null ? void 0 : d(c)) != null ? u : c;
    });
  }
  constructor(t, n) {
    this.fn = void 0, this.refs = t, this.refs = t, this.fn = n;
  }
  resolve(t, n) {
    let r = this.refs.map((s) => (
      // TODO: ? operator here?
      s.getValue(n == null ? void 0 : n.value, n == null ? void 0 : n.parent, n == null ? void 0 : n.context)
    )), o = this.fn(r, t, n);
    if (o === void 0 || // @ts-ignore this can be base
    o === t)
      return t;
    if (!Pa(o)) throw new TypeError("conditions must return a schema object");
    return o.resolve(n);
  }
}
const Wn = {
  context: "$",
  value: "."
};
class Nn {
  constructor(t, n = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof t != "string") throw new TypeError("ref must be a string, got: " + t);
    if (this.key = t.trim(), t === "") throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === Wn.context, this.isValue = this.key[0] === Wn.value, this.isSibling = !this.isContext && !this.isValue;
    let r = this.isContext ? Wn.context : this.isValue ? Wn.value : "";
    this.path = this.key.slice(r.length), this.getter = this.path && wa.getter(this.path, !0), this.map = n.map;
  }
  getValue(t, n, r) {
    let o = this.isContext ? r : this.isValue ? t : n;
    return this.getter && (o = this.getter(o || {})), this.map && (o = this.map(o)), o;
  }
  /**
   *
   * @param {*} value
   * @param {Object} options
   * @param {Object=} options.context
   * @param {Object=} options.parent
   */
  cast(t, n) {
    return this.getValue(t, n == null ? void 0 : n.parent, n == null ? void 0 : n.context);
  }
  resolve() {
    return this;
  }
  describe() {
    return {
      type: "ref",
      key: this.key
    };
  }
  toString() {
    return `Ref(${this.key})`;
  }
  static isRef(t) {
    return t && t.__isYupRef;
  }
}
Nn.prototype.__isYupRef = !0;
const Na = (e) => e == null;
function Lt(e) {
  function t({
    value: n,
    path: r = "",
    options: o,
    originalValue: s,
    schema: a
  }, l, c) {
    const {
      name: u,
      test: d,
      params: p,
      message: h,
      skipAbsent: b
    } = e;
    let {
      parent: y,
      context: f,
      abortEarly: S = a.spec.abortEarly,
      disableStackTrace: x = a.spec.disableStackTrace
    } = o;
    function M(I) {
      return Nn.isRef(I) ? I.getValue(n, y, f) : I;
    }
    function v(I = {}) {
      const j = Object.assign({
        value: n,
        originalValue: s,
        label: a.spec.label,
        path: I.path || r,
        spec: a.spec,
        disableStackTrace: I.disableStackTrace || x
      }, p, I.params);
      for (const A of Object.keys(j)) j[A] = M(j[A]);
      const L = new je(je.formatError(I.message || h, j), n, j.path, I.type || u, j.disableStackTrace);
      return L.params = j, L;
    }
    const E = S ? l : c;
    let g = {
      path: r,
      parent: y,
      type: u,
      from: o.from,
      createError: v,
      resolve: M,
      options: o,
      originalValue: s,
      schema: a
    };
    const P = (I) => {
      je.isError(I) ? E(I) : I ? c(null) : E(v());
    }, m = (I) => {
      je.isError(I) ? E(I) : l(I);
    };
    if (b && Na(n))
      return P(!0);
    let R;
    try {
      var k;
      if (R = d.call(g, n, g), typeof ((k = R) == null ? void 0 : k.then) == "function") {
        if (o.sync)
          throw new Error(`Validation test of type: "${g.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(R).then(P, m);
      }
    } catch (I) {
      m(I);
      return;
    }
    P(R);
  }
  return t.OPTIONS = e, t;
}
function om(e, t, n, r = n) {
  let o, s, a;
  return t ? (wa.forEach(t, (l, c, u) => {
    let d = c ? l.slice(1, l.length - 1) : l;
    e = e.resolve({
      context: r,
      parent: o,
      value: n
    });
    let p = e.type === "tuple", h = u ? parseInt(d, 10) : 0;
    if (e.innerType || p) {
      if (p && !u) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);
      if (n && h >= n.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${l}, in the path: ${t}. because there is no value at that index. `);
      o = n, n = n && n[h], e = p ? e.spec.types[h] : e.innerType;
    }
    if (!u) {
      if (!e.fields || !e.fields[d]) throw new Error(`The schema does not contain the path: ${t}. (failed at: ${a} which is a type: "${e.type}")`);
      o = n, n = n && n[d], e = e.fields[d];
    }
    s = d, a = c ? "[" + l + "]" : "." + l;
  }), {
    schema: e,
    parent: o,
    parentPath: s
  }) : {
    parent: o,
    parentPath: t,
    schema: e
  };
}
class or extends Set {
  describe() {
    const t = [];
    for (const n of this.values())
      t.push(Nn.isRef(n) ? n.describe() : n);
    return t;
  }
  resolveAll(t) {
    let n = [];
    for (const r of this.values())
      n.push(t(r));
    return n;
  }
  clone() {
    return new or(this.values());
  }
  merge(t, n) {
    const r = this.clone();
    return t.forEach((o) => r.add(o)), n.forEach((o) => r.delete(o)), r;
  }
}
function Vt(e, t = /* @__PURE__ */ new Map()) {
  if (Pa(e) || !e || typeof e != "object") return e;
  if (t.has(e)) return t.get(e);
  let n;
  if (e instanceof Date)
    n = new Date(e.getTime()), t.set(e, n);
  else if (e instanceof RegExp)
    n = new RegExp(e), t.set(e, n);
  else if (Array.isArray(e)) {
    n = new Array(e.length), t.set(e, n);
    for (let r = 0; r < e.length; r++) n[r] = Vt(e[r], t);
  } else if (e instanceof Map) {
    n = /* @__PURE__ */ new Map(), t.set(e, n);
    for (const [r, o] of e.entries()) n.set(r, Vt(o, t));
  } else if (e instanceof Set) {
    n = /* @__PURE__ */ new Set(), t.set(e, n);
    for (const r of e) n.add(Vt(r, t));
  } else if (e instanceof Object) {
    n = {}, t.set(e, n);
    for (const [r, o] of Object.entries(e)) n[r] = Vt(o, t);
  } else
    throw Error(`Unable to clone ${e}`);
  return n;
}
class Rt {
  constructor(t) {
    this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new or(), this._blacklist = new or(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(it.notType);
    }), this.type = t.type, this._typeCheck = t.check, this.spec = Object.assign({
      strip: !1,
      strict: !1,
      abortEarly: !0,
      recursive: !0,
      disableStackTrace: !1,
      nullable: !1,
      optional: !0,
      coerce: !0
    }, t == null ? void 0 : t.spec), this.withMutation((n) => {
      n.nonNullable();
    });
  }
  // TODO: remove
  get _type() {
    return this.type;
  }
  clone(t) {
    if (this._mutate)
      return t && Object.assign(this.spec, t), this;
    const n = Object.create(Object.getPrototypeOf(this));
    return n.type = this.type, n._typeCheck = this._typeCheck, n._whitelist = this._whitelist.clone(), n._blacklist = this._blacklist.clone(), n.internalTests = Object.assign({}, this.internalTests), n.exclusiveTests = Object.assign({}, this.exclusiveTests), n.deps = [...this.deps], n.conditions = [...this.conditions], n.tests = [...this.tests], n.transforms = [...this.transforms], n.spec = Vt(Object.assign({}, this.spec, t)), n;
  }
  label(t) {
    let n = this.clone();
    return n.spec.label = t, n;
  }
  meta(...t) {
    if (t.length === 0) return this.spec.meta;
    let n = this.clone();
    return n.spec.meta = Object.assign(n.spec.meta || {}, t[0]), n;
  }
  withMutation(t) {
    let n = this._mutate;
    this._mutate = !0;
    let r = t(this);
    return this._mutate = n, r;
  }
  concat(t) {
    if (!t || t === this) return this;
    if (t.type !== this.type && this.type !== "mixed") throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);
    let n = this, r = t.clone();
    const o = Object.assign({}, n.spec, r.spec);
    return r.spec = o, r.internalTests = Object.assign({}, n.internalTests, r.internalTests), r._whitelist = n._whitelist.merge(t._whitelist, t._blacklist), r._blacklist = n._blacklist.merge(t._blacklist, t._whitelist), r.tests = n.tests, r.exclusiveTests = n.exclusiveTests, r.withMutation((s) => {
      t.tests.forEach((a) => {
        s.test(a.OPTIONS);
      });
    }), r.transforms = [...n.transforms, ...r.transforms], r;
  }
  isType(t) {
    return t == null ? !!(this.spec.nullable && t === null || this.spec.optional && t === void 0) : this._typeCheck(t);
  }
  resolve(t) {
    let n = this;
    if (n.conditions.length) {
      let r = n.conditions;
      n = n.clone(), n.conditions = [], n = r.reduce((o, s) => s.resolve(o, t), n), n = n.resolve(t);
    }
    return n;
  }
  resolveOptions(t) {
    var n, r, o, s;
    return Object.assign({}, t, {
      from: t.from || [],
      strict: (n = t.strict) != null ? n : this.spec.strict,
      abortEarly: (r = t.abortEarly) != null ? r : this.spec.abortEarly,
      recursive: (o = t.recursive) != null ? o : this.spec.recursive,
      disableStackTrace: (s = t.disableStackTrace) != null ? s : this.spec.disableStackTrace
    });
  }
  /**
   * Run the configured transform pipeline over an input value.
   */
  cast(t, n = {}) {
    let r = this.resolve(Object.assign({
      value: t
    }, n)), o = n.assert === "ignore-optionality", s = r._cast(t, n);
    if (n.assert !== !1 && !r.isType(s)) {
      if (o && Na(s))
        return s;
      let a = mt(t), l = mt(s);
      throw new TypeError(`The value of ${n.path || "field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${a} 
` + (l !== a ? `result of cast: ${l}` : ""));
    }
    return s;
  }
  _cast(t, n) {
    let r = t === void 0 ? t : this.transforms.reduce((o, s) => s.call(this, o, t, this), t);
    return r === void 0 && (r = this.getDefault(n)), r;
  }
  _validate(t, n = {}, r, o) {
    let {
      path: s,
      originalValue: a = t,
      strict: l = this.spec.strict
    } = n, c = t;
    l || (c = this._cast(c, Object.assign({
      assert: !1
    }, n)));
    let u = [];
    for (let d of Object.values(this.internalTests))
      d && u.push(d);
    this.runTests({
      path: s,
      value: c,
      originalValue: a,
      options: n,
      tests: u
    }, r, (d) => {
      if (d.length)
        return o(d, c);
      this.runTests({
        path: s,
        value: c,
        originalValue: a,
        options: n,
        tests: this.tests
      }, r, o);
    });
  }
  /**
   * Executes a set of validations, either schema, produced Tests or a nested
   * schema validate result.
   */
  runTests(t, n, r) {
    let o = !1, {
      tests: s,
      value: a,
      originalValue: l,
      path: c,
      options: u
    } = t, d = (f) => {
      o || (o = !0, n(f, a));
    }, p = (f) => {
      o || (o = !0, r(f, a));
    }, h = s.length, b = [];
    if (!h) return p([]);
    let y = {
      value: a,
      originalValue: l,
      path: c,
      options: u,
      schema: this
    };
    for (let f = 0; f < s.length; f++) {
      const S = s[f];
      S(y, d, function(M) {
        M && (Array.isArray(M) ? b.push(...M) : b.push(M)), --h <= 0 && p(b);
      });
    }
  }
  asNestedTest({
    key: t,
    index: n,
    parent: r,
    parentPath: o,
    originalParent: s,
    options: a
  }) {
    const l = t ?? n;
    if (l == null)
      throw TypeError("Must include `key` or `index` for nested validations");
    const c = typeof l == "number";
    let u = r[l];
    const d = Object.assign({}, a, {
      // Nested validations fields are always strict:
      //    1. parent isn't strict so the casting will also have cast inner values
      //    2. parent is strict in which case the nested values weren't cast either
      strict: !0,
      parent: r,
      value: u,
      originalValue: s[l],
      // FIXME: tests depend on `index` being passed around deeply,
      //   we should not let the options.key/index bleed through
      key: void 0,
      // index: undefined,
      [c ? "index" : "key"]: l,
      path: c || l.includes(".") ? `${o || ""}[${c ? l : `"${l}"`}]` : (o ? `${o}.` : "") + t
    });
    return (p, h, b) => this.resolve(d)._validate(u, d, h, b);
  }
  validate(t, n) {
    var r;
    let o = this.resolve(Object.assign({}, n, {
      value: t
    })), s = (r = n == null ? void 0 : n.disableStackTrace) != null ? r : o.spec.disableStackTrace;
    return new Promise((a, l) => o._validate(t, n, (c, u) => {
      je.isError(c) && (c.value = u), l(c);
    }, (c, u) => {
      c.length ? l(new je(c, u, void 0, void 0, s)) : a(u);
    }));
  }
  validateSync(t, n) {
    var r;
    let o = this.resolve(Object.assign({}, n, {
      value: t
    })), s, a = (r = n == null ? void 0 : n.disableStackTrace) != null ? r : o.spec.disableStackTrace;
    return o._validate(t, Object.assign({}, n, {
      sync: !0
    }), (l, c) => {
      throw je.isError(l) && (l.value = c), l;
    }, (l, c) => {
      if (l.length) throw new je(l, t, void 0, void 0, a);
      s = c;
    }), s;
  }
  isValid(t, n) {
    return this.validate(t, n).then(() => !0, (r) => {
      if (je.isError(r)) return !1;
      throw r;
    });
  }
  isValidSync(t, n) {
    try {
      return this.validateSync(t, n), !0;
    } catch (r) {
      if (je.isError(r)) return !1;
      throw r;
    }
  }
  _getDefault(t) {
    let n = this.spec.default;
    return n == null ? n : typeof n == "function" ? n.call(this, t) : Vt(n);
  }
  getDefault(t) {
    return this.resolve(t || {})._getDefault(t);
  }
  default(t) {
    return arguments.length === 0 ? this._getDefault() : this.clone({
      default: t
    });
  }
  strict(t = !0) {
    return this.clone({
      strict: t
    });
  }
  nullability(t, n) {
    const r = this.clone({
      nullable: t
    });
    return r.internalTests.nullable = Lt({
      message: n,
      name: "nullable",
      test(o) {
        return o === null ? this.schema.spec.nullable : !0;
      }
    }), r;
  }
  optionality(t, n) {
    const r = this.clone({
      optional: t
    });
    return r.internalTests.optionality = Lt({
      message: n,
      name: "optionality",
      test(o) {
        return o === void 0 ? this.schema.spec.optional : !0;
      }
    }), r;
  }
  optional() {
    return this.optionality(!0);
  }
  defined(t = it.defined) {
    return this.optionality(!1, t);
  }
  nullable() {
    return this.nullability(!0);
  }
  nonNullable(t = it.notNull) {
    return this.nullability(!1, t);
  }
  required(t = it.required) {
    return this.clone().withMutation((n) => n.nonNullable(t).defined(t));
  }
  notRequired() {
    return this.clone().withMutation((t) => t.nullable().optional());
  }
  transform(t) {
    let n = this.clone();
    return n.transforms.push(t), n;
  }
  /**
   * Adds a test function to the schema's queue of tests.
   * tests can be exclusive or non-exclusive.
   *
   * - exclusive tests, will replace any existing tests of the same name.
   * - non-exclusive: can be stacked
   *
   * If a non-exclusive test is added to a schema with an exclusive test of the same name
   * the exclusive test is removed and further tests of the same name will be stacked.
   *
   * If an exclusive test is added to a schema with non-exclusive tests of the same name
   * the previous tests are removed and further tests of the same name will replace each other.
   */
  test(...t) {
    let n;
    if (t.length === 1 ? typeof t[0] == "function" ? n = {
      test: t[0]
    } : n = t[0] : t.length === 2 ? n = {
      name: t[0],
      test: t[1]
    } : n = {
      name: t[0],
      message: t[1],
      test: t[2]
    }, n.message === void 0 && (n.message = it.default), typeof n.test != "function") throw new TypeError("`test` is a required parameters");
    let r = this.clone(), o = Lt(n), s = n.exclusive || n.name && r.exclusiveTests[n.name] === !0;
    if (n.exclusive && !n.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return n.name && (r.exclusiveTests[n.name] = !!n.exclusive), r.tests = r.tests.filter((a) => !(a.OPTIONS.name === n.name && (s || a.OPTIONS.test === o.OPTIONS.test))), r.tests.push(o), r;
  }
  when(t, n) {
    !Array.isArray(t) && typeof t != "string" && (n = t, t = ".");
    let r = this.clone(), o = _a(t).map((s) => new Nn(s));
    return o.forEach((s) => {
      s.isSibling && r.deps.push(s.key);
    }), r.conditions.push(typeof n == "function" ? new rr(o, n) : rr.fromOptions(o, n)), r;
  }
  typeError(t) {
    let n = this.clone();
    return n.internalTests.typeError = Lt({
      message: t,
      name: "typeError",
      skipAbsent: !0,
      test(r) {
        return this.schema._typeCheck(r) ? !0 : this.createError({
          params: {
            type: this.schema.type
          }
        });
      }
    }), n;
  }
  oneOf(t, n = it.oneOf) {
    let r = this.clone();
    return t.forEach((o) => {
      r._whitelist.add(o), r._blacklist.delete(o);
    }), r.internalTests.whiteList = Lt({
      message: n,
      name: "oneOf",
      skipAbsent: !0,
      test(o) {
        let s = this.schema._whitelist, a = s.resolveAll(this.resolve);
        return a.includes(o) ? !0 : this.createError({
          params: {
            values: Array.from(s).join(", "),
            resolved: a
          }
        });
      }
    }), r;
  }
  notOneOf(t, n = it.notOneOf) {
    let r = this.clone();
    return t.forEach((o) => {
      r._blacklist.add(o), r._whitelist.delete(o);
    }), r.internalTests.blacklist = Lt({
      message: n,
      name: "notOneOf",
      test(o) {
        let s = this.schema._blacklist, a = s.resolveAll(this.resolve);
        return a.includes(o) ? this.createError({
          params: {
            values: Array.from(s).join(", "),
            resolved: a
          }
        }) : !0;
      }
    }), r;
  }
  strip(t = !0) {
    let n = this.clone();
    return n.spec.strip = t, n;
  }
  /**
   * Return a serialized description of the schema including validations, flags, types etc.
   *
   * @param options Provide any needed context for resolving runtime schema alterations (lazy, when conditions, etc).
   */
  describe(t) {
    const n = (t ? this.resolve(t) : this).clone(), {
      label: r,
      meta: o,
      optional: s,
      nullable: a
    } = n.spec;
    return {
      meta: o,
      label: r,
      optional: s,
      nullable: a,
      default: n.getDefault(t),
      type: n.type,
      oneOf: n._whitelist.describe(),
      notOneOf: n._blacklist.describe(),
      tests: n.tests.map((c) => ({
        name: c.OPTIONS.name,
        params: c.OPTIONS.params
      })).filter((c, u, d) => d.findIndex((p) => p.name === c.name) === u)
    };
  }
}
Rt.prototype.__isYupSchema__ = !0;
for (const e of ["validate", "validateSync"]) Rt.prototype[`${e}At`] = function(t, n, r = {}) {
  const {
    parent: o,
    parentPath: s,
    schema: a
  } = om(this, t, n, r.context);
  return a[e](o && o[s], Object.assign({}, r, {
    parent: o,
    path: t
  }));
};
for (const e of ["equals", "is"]) Rt.prototype[e] = Rt.prototype.oneOf;
for (const e of ["not", "nope"]) Rt.prototype[e] = Rt.prototype.notOneOf;
const im = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function sm(e) {
  const t = am(e);
  if (!t) return Date.parse ? Date.parse(e) : Number.NaN;
  if (t.z === void 0 && t.plusMinus === void 0)
    return new Date(t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond).valueOf();
  let n = 0;
  return t.z !== "Z" && t.plusMinus !== void 0 && (n = t.hourOffset * 60 + t.minuteOffset, t.plusMinus === "+" && (n = 0 - n)), Date.UTC(t.year, t.month, t.day, t.hour, t.minute + n, t.second, t.millisecond);
}
function am(e) {
  var t, n;
  const r = im.exec(e);
  return r ? {
    year: rt(r[1]),
    month: rt(r[2], 1) - 1,
    day: rt(r[3], 1),
    hour: rt(r[4]),
    minute: rt(r[5]),
    second: rt(r[6]),
    millisecond: r[7] ? (
      // allow arbitrary sub-second precision beyond milliseconds
      rt(r[7].substring(0, 3))
    ) : 0,
    precision: (t = (n = r[7]) == null ? void 0 : n.length) != null ? t : void 0,
    z: r[8] || void 0,
    plusMinus: r[9] || void 0,
    hourOffset: rt(r[10]),
    minuteOffset: rt(r[11])
  } : null;
}
function rt(e, t = 0) {
  return Number(e) || t;
}
let lm = /* @__PURE__ */ new Date(""), cm = (e) => Object.prototype.toString.call(e) === "[object Date]";
class ko extends Rt {
  constructor() {
    super({
      type: "date",
      check(t) {
        return cm(t) && !isNaN(t.getTime());
      }
    }), this.withMutation(() => {
      this.transform((t, n, r) => !r.spec.coerce || r.isType(t) || t === null ? t : (t = sm(t), isNaN(t) ? ko.INVALID_DATE : new Date(t)));
    });
  }
  prepareParam(t, n) {
    let r;
    if (Nn.isRef(t))
      r = t;
    else {
      let o = this.cast(t);
      if (!this._typeCheck(o)) throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);
      r = o;
    }
    return r;
  }
  min(t, n = lo.min) {
    let r = this.prepareParam(t, "min");
    return this.test({
      message: n,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      skipAbsent: !0,
      test(o) {
        return o >= this.resolve(r);
      }
    });
  }
  max(t, n = lo.max) {
    let r = this.prepareParam(t, "max");
    return this.test({
      message: n,
      name: "max",
      exclusive: !0,
      params: {
        max: t
      },
      skipAbsent: !0,
      test(o) {
        return o <= this.resolve(r);
      }
    });
  }
}
ko.INVALID_DATE = lm;
var De = {}, ln = {}, Zi;
function um() {
  if (Zi) return ln;
  Zi = 1, Object.defineProperty(ln, "__esModule", { value: !0 }), ln.calculateRgba = void 0;
  var e;
  (function(r) {
    r.maroon = "#800000", r.red = "#FF0000", r.orange = "#FFA500", r.yellow = "#FFFF00", r.olive = "#808000", r.green = "#008000", r.purple = "#800080", r.fuchsia = "#FF00FF", r.lime = "#00FF00", r.teal = "#008080", r.aqua = "#00FFFF", r.blue = "#0000FF", r.navy = "#000080", r.black = "#000000", r.gray = "#808080", r.silver = "#C0C0C0", r.white = "#FFFFFF";
  })(e || (e = {}));
  var t = function(r, o) {
    if (r.includes("/"))
      return r.replace("rgb(", "rgba(");
    var s = r.substring(r.startsWith("rgba(") ? 5 : 4, r.length - 1).trim(), a = s.split(",");
    return a.length === 4 ? r.replace("rgb(", "rgba(") : a.length === 3 ? "rgba(".concat(s, ", ").concat(o, ")") : "rgba(".concat(s, " / ").concat(o, ")");
  }, n = function(r, o) {
    if (r.startsWith("rgb"))
      return t(r, o);
    if (Object.keys(e).includes(r) && (r = e[r]), r[0] === "#" && (r = r.slice(1)), r.length === 3) {
      var s = "";
      r.split("").forEach(function(l) {
        s += l, s += l;
      }), r = s;
    }
    var a = (r.match(/.{2}/g) || []).map(function(l) {
      return parseInt(l, 16);
    }).join(", ");
    return "rgba(".concat(a, ", ").concat(o, ")");
  };
  return ln.calculateRgba = n, ln;
}
var cn = {}, Ji;
function dm() {
  if (Ji) return cn;
  Ji = 1, Object.defineProperty(cn, "__esModule", { value: !0 }), cn.parseLengthAndUnit = t, cn.cssValue = n;
  var e = {
    cm: !0,
    mm: !0,
    in: !0,
    px: !0,
    pt: !0,
    pc: !0,
    em: !0,
    ex: !0,
    ch: !0,
    rem: !0,
    vw: !0,
    vh: !0,
    vmin: !0,
    vmax: !0,
    "%": !0
  };
  function t(r) {
    if (typeof r == "number")
      return {
        value: r,
        unit: "px"
      };
    var o, s = (r.match(/^[0-9.]*/) || "").toString();
    s.includes(".") ? o = parseFloat(s) : o = parseInt(s, 10);
    var a = (r.match(/[^0-9]*$/) || "").toString();
    return e[a] ? {
      value: o,
      unit: a
    } : (console.warn("React Spinners: ".concat(r, " is not a valid css value. Defaulting to ").concat(o, "px.")), {
      value: o,
      unit: "px"
    });
  }
  function n(r) {
    var o = t(r);
    return "".concat(o.value).concat(o.unit);
  }
  return cn;
}
var un = {}, Qi;
function fm() {
  if (Qi) return un;
  Qi = 1, Object.defineProperty(un, "__esModule", { value: !0 }), un.createAnimation = void 0;
  var e = function(t, n, r) {
    var o = "react-spinners-".concat(t, "-").concat(r);
    if (typeof window > "u" || !window.document)
      return o;
    var s = document.createElement("style");
    document.head.appendChild(s);
    var a = s.sheet, l = `
    @keyframes `.concat(o, ` {
      `).concat(n, `
    }
  `);
    return a && a.insertRule(l, 0), o;
  };
  return un.createAnimation = e, un;
}
var es;
function pm() {
  if (es) return De;
  es = 1;
  var e = De && De.__assign || function() {
    return e = Object.assign || function(d) {
      for (var p, h = 1, b = arguments.length; h < b; h++) {
        p = arguments[h];
        for (var y in p) Object.prototype.hasOwnProperty.call(p, y) && (d[y] = p[y]);
      }
      return d;
    }, e.apply(this, arguments);
  }, t = De && De.__createBinding || (Object.create ? function(d, p, h, b) {
    b === void 0 && (b = h);
    var y = Object.getOwnPropertyDescriptor(p, h);
    (!y || ("get" in y ? !p.__esModule : y.writable || y.configurable)) && (y = { enumerable: !0, get: function() {
      return p[h];
    } }), Object.defineProperty(d, b, y);
  } : function(d, p, h, b) {
    b === void 0 && (b = h), d[b] = p[h];
  }), n = De && De.__setModuleDefault || (Object.create ? function(d, p) {
    Object.defineProperty(d, "default", { enumerable: !0, value: p });
  } : function(d, p) {
    d.default = p;
  }), r = De && De.__importStar || /* @__PURE__ */ function() {
    var d = function(p) {
      return d = Object.getOwnPropertyNames || function(h) {
        var b = [];
        for (var y in h) Object.prototype.hasOwnProperty.call(h, y) && (b[b.length] = y);
        return b;
      }, d(p);
    };
    return function(p) {
      if (p && p.__esModule) return p;
      var h = {};
      if (p != null) for (var b = d(p), y = 0; y < b.length; y++) b[y] !== "default" && t(h, p, b[y]);
      return n(h, p), h;
    };
  }(), o = De && De.__rest || function(d, p) {
    var h = {};
    for (var b in d) Object.prototype.hasOwnProperty.call(d, b) && p.indexOf(b) < 0 && (h[b] = d[b]);
    if (d != null && typeof Object.getOwnPropertySymbols == "function")
      for (var y = 0, b = Object.getOwnPropertySymbols(d); y < b.length; y++)
        p.indexOf(b[y]) < 0 && Object.prototype.propertyIsEnumerable.call(d, b[y]) && (h[b[y]] = d[b[y]]);
    return h;
  };
  Object.defineProperty(De, "__esModule", { value: !0 });
  var s = r(Ve), a = /* @__PURE__ */ um(), l = /* @__PURE__ */ dm(), c = /* @__PURE__ */ fm();
  function u(d) {
    var p = d.loading, h = p === void 0 ? !0 : p, b = d.color, y = b === void 0 ? "#000000" : b, f = d.speedMultiplier, S = f === void 0 ? 1 : f, x = d.cssOverride, M = x === void 0 ? {} : x, v = d.size, E = v === void 0 ? 50 : v, g = o(d, ["loading", "color", "speedMultiplier", "cssOverride", "size"]), P = (0, l.parseLengthAndUnit)(E), m = P.value, w = P.unit, R = e({ display: "inherit", position: "relative", width: (0, l.cssValue)(E), height: (0, l.cssValue)(E), transform: "rotate(165deg)" }, M), k = m / 5, I = (m - k) / 2, j = I - k, L = (0, a.calculateRgba)(y, 0.75), A = (0, c.createAnimation)("HashLoader", "0% {width: ".concat(k, "px; box-shadow: ").concat(I, "px ").concat(-j, "px ").concat(L, ", ").concat(-I, "px ").concat(j, "px ").concat(L, `}
    35% {width: `).concat((0, l.cssValue)(E), "; box-shadow: 0 ").concat(-j, "px ").concat(L, ", 0 ").concat(j, "px ").concat(L, `}
    70% {width: `).concat(k, "px; box-shadow: ").concat(-I, "px ").concat(-j, "px ").concat(L, ", ").concat(I, "px ").concat(j, "px ").concat(L, `}
    100% {box-shadow: `).concat(I, "px ").concat(-j, "px ").concat(L, ", ").concat(-I, "px ").concat(j, "px ").concat(L, "}"), "before"), O = (0, c.createAnimation)("HashLoader", "0% {height: ".concat(k, "px; box-shadow: ").concat(j, "px ").concat(I, "px ").concat(y, ", ").concat(-j, "px ").concat(-I, "px ").concat(y, `}
    35% {height: `).concat((0, l.cssValue)(E), "; box-shadow: ").concat(j, "px 0 ").concat(y, ", ").concat(-j, "px 0 ").concat(y, `}
    70% {height: `).concat(k, "px; box-shadow: ").concat(j, "px ").concat(-I, "px ").concat(y, ", ").concat(-j, "px ").concat(I, "px ").concat(y, `}
    100% {box-shadow: `).concat(j, "px ").concat(I, "px ").concat(y, ", ").concat(-j, "px ").concat(-I, "px ").concat(y, "}"), "after"), _ = function(D) {
      return {
        position: "absolute",
        top: "50%",
        left: "50%",
        display: "block",
        width: "".concat(m / 5).concat(w),
        height: "".concat(m / 5).concat(w),
        borderRadius: "".concat(m / 10).concat(w),
        transform: "translate(-50%, -50%)",
        animationFillMode: "none",
        animation: "".concat(D === 1 ? A : O, " ").concat(2 / S, "s infinite")
      };
    };
    return h ? s.createElement(
      "span",
      e({ style: R }, g),
      s.createElement("span", { style: _(1) }),
      s.createElement("span", { style: _(2) })
    ) : null;
  }
  return De.default = u, De;
}
var mm = /* @__PURE__ */ pm();
const hm = /* @__PURE__ */ fo(mm), gm = ({
  size: e = 35,
  ...t
}) => /* @__PURE__ */ Y(
  hm,
  {
    size: e,
    className: "text-primary-500 fill-primary-500",
    ...t
  }
), ym = (e, t) => {
  const [n, r] = Fe(e);
  return ye(() => {
    const o = setTimeout(() => {
      r(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e, t]), [n, r];
};
var bm = () => {
};
function vm(e, t, n) {
  let r = at(bm);
  ye(() => {
    r.current = e;
  }), ye(() => {
  }, [n]), ye(() => {
    if (t === null || t === !1) return;
    let o = setInterval(() => r.current(), t);
    return () => clearInterval(o);
  }, [t]);
}
function Ma(e, t) {
  return Math.random() * (t - e + 1) + e;
}
function Un(e, t) {
  return Math.floor(Ma(e, t));
}
En(({ progress: e, height: t = 2, className: n = "", color: r = "red", background: o = "transparent", onLoaderFinished: s, transitionTime: a = 300, loaderSpeed: l = 500, waitingTime: c = 1e3, shadow: u = !0, containerStyle: d = {}, style: p = {}, shadowStyle: h = {}, containerClassName: b = "" }, y) => {
  let f = at(!1), [S, x] = Fe(0), M = at({ active: !1, refreshRate: 1e3 }), [v, E] = Fe({ active: !1, value: 60 }), g = { height: "100%", background: r, transition: `all ${l}ms ease`, width: "0%" }, P = { position: "fixed", top: 0, left: 0, height: t, background: o, zIndex: 99999999999, width: "100%" }, m = { boxShadow: `0 0 10px ${r}, 0 0 10px ${r}`, width: "5%", opacity: 1, position: "absolute", height: "100%", transition: `all ${l}ms ease`, transform: "rotate(2deg) translate(0px, -2px)", left: "-10rem" }, [w, R] = Fe(g), [k, I] = Fe(m);
  ye(() => (f.current = !0, () => {
    f.current = !1;
  }), []), Tn(y, () => ({ continuousStart(L, A = 1e3) {
    if (v.active) return;
    if (e !== void 0) {
      console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!");
      return;
    }
    let O = L || Un(10, 20);
    M.current = { active: !0, refreshRate: A }, x(O), j(O);
  }, staticStart(L) {
    if (M.current.active) return;
    if (e !== void 0) {
      console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!");
      return;
    }
    let A = L || Un(30, 60);
    E({ active: !0, value: A }), x(A), j(A);
  }, start(L = "continuous", A, O) {
    if (e !== void 0) {
      console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!");
      return;
    }
    L === "continuous" ? M.current = { active: !0, refreshRate: O || 1e3 } : E({ active: !0, value: A || 20 });
    let _ = Un(10, 20), D = Un(30, 70), F = A || (L === "continuous" ? _ : D);
    x(F), j(F);
  }, complete() {
    if (e !== void 0) {
      console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!");
      return;
    }
    x(100), j(100);
  }, increase(L) {
    if (e !== void 0) {
      console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!");
      return;
    }
    x((A) => {
      let O = A + L;
      return j(O), O;
    });
  }, decrease(L) {
    if (e !== void 0) {
      console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!");
      return;
    }
    x((A) => {
      let O = A - L;
      return j(O), O;
    });
  }, getProgress() {
    return S;
  } })), ye(() => {
    R({ ...w, background: r }), I({ ...k, boxShadow: `0 0 10px ${r}, 0 0 5px ${r}` });
  }, [r]), ye(() => {
    if (y) {
      if (y && e !== void 0) {
        console.warn(`react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar! Please use only props or only ref methods! Ref methods will override props if "ref" property is available.`);
        return;
      }
      j(S);
    } else e && j(e);
  }, [e]);
  let j = (L) => {
    L >= 100 ? (R({ ...w, width: "100%" }), u && I({ ...k, left: L - 10 + "%" }), setTimeout(() => {
      f.current && (R({ ...w, opacity: 0, width: "100%", transition: `all ${a}ms ease-out`, color: r }), setTimeout(() => {
        f.current && (M.current.active && (M.current = { ...M.current, active: !1 }, x(0), j(0)), v.active && (E({ ...v, active: !1 }), x(0), j(0)), s && s(), x(0), j(0));
      }, a));
    }, c)) : (R((A) => ({ ...A, width: L + "%", opacity: 1, transition: L > 0 ? `all ${l}ms ease` : "" })), u && I({ ...k, left: L - 5.5 + "%", transition: L > 0 ? `all ${l}ms ease` : "" }));
  };
  return vm(() => {
    let L = Math.min(10, (100 - S) / 5), A = Math.min(20, (100 - S) / 3), O = Ma(L, A);
    S + O < 95 && (x(S + O), j(S + O));
  }, M.current.active ? M.current.refreshRate : null), T.createElement("div", { className: b, style: { ...P, ...d } }, T.createElement("div", { className: n, style: { ...w, ...p } }, u ? T.createElement("div", { style: { ...k, ...h } }) : null));
});
T.createContext(void 0);
let xm = { data: "" }, Em = (e) => typeof window == "object" ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), { innerHTML: " ", id: "_goober" })).firstChild : e || xm, Tm = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g, Sm = /\/\*[^]*?\*\/|  +/g, ts = /\n+/g, pt = (e, t) => {
  let n = "", r = "", o = "";
  for (let s in e) {
    let a = e[s];
    s[0] == "@" ? s[1] == "i" ? n = s + " " + a + ";" : r += s[1] == "f" ? pt(a, s) : s + "{" + pt(a, s[1] == "k" ? "" : t) + "}" : typeof a == "object" ? r += pt(a, t ? t.replace(/([^,])+/g, (l) => s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (c) => /&/.test(c) ? c.replace(/&/g, l) : l ? l + " " + c : c)) : s) : a != null && (s = /^--/.test(s) ? s : s.replace(/[A-Z]/g, "-$&").toLowerCase(), o += pt.p ? pt.p(s, a) : s + ":" + a + ";");
  }
  return n + (t && o ? t + "{" + o + "}" : o) + r;
}, ot = {}, ka = (e) => {
  if (typeof e == "object") {
    let t = "";
    for (let n in e) t += n + ka(e[n]);
    return t;
  }
  return e;
}, Om = (e, t, n, r, o) => {
  let s = ka(e), a = ot[s] || (ot[s] = ((c) => {
    let u = 0, d = 11;
    for (; u < c.length; ) d = 101 * d + c.charCodeAt(u++) >>> 0;
    return "go" + d;
  })(s));
  if (!ot[a]) {
    let c = s !== e ? e : ((u) => {
      let d, p, h = [{}];
      for (; d = Tm.exec(u.replace(Sm, "")); ) d[4] ? h.shift() : d[3] ? (p = d[3].replace(ts, " ").trim(), h.unshift(h[0][p] = h[0][p] || {})) : h[0][d[1]] = d[2].replace(ts, " ").trim();
      return h[0];
    })(e);
    ot[a] = pt(o ? { ["@keyframes " + a]: c } : c, n ? "" : "." + a);
  }
  let l = n && ot.g ? ot.g : null;
  return n && (ot.g = ot[a]), ((c, u, d, p) => {
    p ? u.data = u.data.replace(p, c) : u.data.indexOf(c) === -1 && (u.data = d ? c + u.data : u.data + c);
  })(ot[a], t, r, l), a;
}, wm = (e, t, n) => e.reduce((r, o, s) => {
  let a = t[s];
  if (a && a.call) {
    let l = a(n), c = l && l.props && l.props.className || /^go/.test(l) && l;
    a = c ? "." + c : l && typeof l == "object" ? l.props ? "" : pt(l, "") : l === !1 ? "" : l;
  }
  return r + o + (a ?? "");
}, "");
function $r(e) {
  let t = this || {}, n = e.call ? e(t.p) : e;
  return Om(n.unshift ? n.raw ? wm(n, [].slice.call(arguments, 1), t.p) : n.reduce((r, o) => Object.assign(r, o && o.call ? o(t.p) : o), {}) : n, Em(t.target), t.g, t.o, t.k);
}
let Ia, co, uo;
$r.bind({ g: 1 });
let ct = $r.bind({ k: 1 });
function _m(e, t, n, r) {
  pt.p = t, Ia = e, co = n, uo = r;
}
function bt(e, t) {
  let n = this || {};
  return function() {
    let r = arguments;
    function o(s, a) {
      let l = Object.assign({}, s), c = l.className || o.className;
      n.p = Object.assign({ theme: co && co() }, l), n.o = / *go\d+/.test(c), l.className = $r.apply(n, r) + (c ? " " + c : "");
      let u = e;
      return e[0] && (u = l.as || e, delete l.as), uo && u[0] && uo(l), Ia(u, l);
    }
    return o;
  };
}
var Cm = (e) => typeof e == "function", Rm = (e, t) => Cm(e) ? e(t) : e, $m = /* @__PURE__ */ (() => {
  let e;
  return () => {
    if (e === void 0 && typeof window < "u") {
      let t = matchMedia("(prefers-reduced-motion: reduce)");
      e = !t || t.matches;
    }
    return e;
  };
})(), Pm = ct`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`, Nm = ct`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`, Mm = ct`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`, km = bt("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Pm} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Nm} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Mm} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`, Im = ct`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, Am = bt("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${Im} 1s linear infinite;
`, Fm = ct`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`, Dm = ct`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`, jm = bt("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Fm} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Dm} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`, Lm = bt("div")`
  position: absolute;
`, zm = bt("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`, Vm = ct`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`, Wm = bt("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Vm} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`, Um = ({ toast: e }) => {
  let { icon: t, type: n, iconTheme: r } = e;
  return t !== void 0 ? typeof t == "string" ? T.createElement(Wm, null, t) : t : n === "blank" ? null : T.createElement(zm, null, T.createElement(Am, { ...r }), n !== "loading" && T.createElement(Lm, null, n === "error" ? T.createElement(km, { ...r }) : T.createElement(jm, { ...r })));
}, qm = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`, Bm = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`, Hm = "0%{opacity:0;} 100%{opacity:1;}", Ym = "0%{opacity:1;} 100%{opacity:0;}", Km = bt("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`, Gm = bt("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`, Xm = (e, t) => {
  let n = e.includes("top") ? 1 : -1, [r, o] = $m() ? [Hm, Ym] : [qm(n), Bm(n)];
  return { animation: t ? `${ct(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${ct(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)` };
};
T.memo(({ toast: e, position: t, style: n, children: r }) => {
  let o = e.height ? Xm(e.position || t || "top-center", e.visible) : { opacity: 0 }, s = T.createElement(Um, { toast: e }), a = T.createElement(Gm, { ...e.ariaProps }, Rm(e.message, e));
  return T.createElement(Km, { className: e.className, style: { ...o, ...n, ...e.style } }, typeof r == "function" ? r({ icon: s, message: a }) : T.createElement(T.Fragment, null, s, a));
});
_m(T.createElement);
$r`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;
const Zm = { VITE_MAP_BOX_KEY: "pk.eyJ1IjoiYW1haG51aTI0IiwiYSI6ImNtOWlicHZ3ODAwaDQyanNiM2l4eXp5emUifQ.Y6iIWMc-pwARbs7nbhnHGQ" }, Jm = Zm, Qm = {
  VITE_MAP_BOX_KEY: Jm.VITE_MAP_BOX_KEY
}, Io = T.createContext(null), eh = (e) => {
  const [t, n] = Fe({}), r = Do((s, a = "default") => {
    n((l) => {
      if (a === "current")
        throw new Error("'current' cannot be used as map id");
      if (l[a])
        throw new Error(`Multiple maps with the same id: ${a}`);
      return { ...l, [a]: s };
    });
  }, []), o = Do((s = "default") => {
    n((a) => {
      if (a[s]) {
        const l = { ...a };
        return delete l[s], l;
      }
      return a;
    });
  }, []);
  return T.createElement(Io.Provider, { value: {
    maps: t,
    onMapMount: r,
    onMapUnmount: o
  } }, e.children);
};
function th() {
  var r;
  const e = (r = Ot(Io)) == null ? void 0 : r.maps, t = Ot(Mn);
  return qt(() => ({ ...e, current: t == null ? void 0 : t.map }), [e, t]);
}
function nh(e, t) {
  const n = Array.isArray(e) ? e[0] : e ? e.x : 0, r = Array.isArray(e) ? e[1] : e ? e.y : 0, o = Array.isArray(t) ? t[0] : t ? t.x : 0, s = Array.isArray(t) ? t[1] : t ? t.y : 0;
  return n === o && r === s;
}
function st(e, t) {
  if (e === t)
    return !0;
  if (!e || !t)
    return !1;
  if (Array.isArray(e)) {
    if (!Array.isArray(t) || e.length !== t.length)
      return !1;
    for (let n = 0; n < e.length; n++)
      if (!st(e[n], t[n]))
        return !1;
    return !0;
  } else if (Array.isArray(t))
    return !1;
  if (typeof e == "object" && typeof t == "object") {
    const n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length)
      return !1;
    for (const o of n)
      if (!t.hasOwnProperty(o) || !st(e[o], t[o]))
        return !1;
    return !0;
  }
  return !1;
}
function rh(e) {
  const t = e.clone();
  return t.pixelsToGLUnits = e.pixelsToGLUnits, t;
}
function ns(e, t) {
  if (!e.getProjection)
    return;
  const n = e.getProjection(), r = t.getProjection();
  st(n, r) || t.setProjection(n);
}
function rs(e) {
  return {
    longitude: e.center.lng,
    latitude: e.center.lat,
    zoom: e.zoom,
    pitch: e.pitch,
    bearing: e.bearing,
    padding: e.padding
  };
}
function os(e, t) {
  const n = t.viewState || t;
  let r = !1;
  if ("zoom" in n) {
    const o = e.zoom;
    e.zoom = n.zoom, r = r || o !== e.zoom;
  }
  if ("bearing" in n) {
    const o = e.bearing;
    e.bearing = n.bearing, r = r || o !== e.bearing;
  }
  if ("pitch" in n) {
    const o = e.pitch;
    e.pitch = n.pitch, r = r || o !== e.pitch;
  }
  if (n.padding && !e.isPaddingEqual(n.padding) && (r = !0, e.padding = n.padding), "longitude" in n && "latitude" in n) {
    const o = e.center;
    e.center = new o.constructor(n.longitude, n.latitude), r = r || o !== e.center;
  }
  return r;
}
const oh = ["type", "source", "source-layer", "minzoom", "maxzoom", "filter", "layout"];
function is(e) {
  if (!e)
    return null;
  if (typeof e == "string" || ("toJS" in e && (e = e.toJS()), !e.layers))
    return e;
  const t = {};
  for (const r of e.layers)
    t[r.id] = r;
  const n = e.layers.map((r) => {
    let o = null;
    "interactive" in r && (o = Object.assign({}, r), delete o.interactive);
    const s = t[r.ref];
    if (s) {
      o = o || Object.assign({}, r), delete o.ref;
      for (const a of oh)
        a in s && (o[a] = s[a]);
    }
    return o || r;
  });
  return { ...e, layers: n };
}
const ss = { version: 8, sources: {}, layers: [] }, as = {
  mousedown: "onMouseDown",
  mouseup: "onMouseUp",
  mouseover: "onMouseOver",
  mousemove: "onMouseMove",
  click: "onClick",
  dblclick: "onDblClick",
  mouseenter: "onMouseEnter",
  mouseleave: "onMouseLeave",
  mouseout: "onMouseOut",
  contextmenu: "onContextMenu",
  touchstart: "onTouchStart",
  touchend: "onTouchEnd",
  touchmove: "onTouchMove",
  touchcancel: "onTouchCancel"
}, Gr = {
  movestart: "onMoveStart",
  move: "onMove",
  moveend: "onMoveEnd",
  dragstart: "onDragStart",
  drag: "onDrag",
  dragend: "onDragEnd",
  zoomstart: "onZoomStart",
  zoom: "onZoom",
  zoomend: "onZoomEnd",
  rotatestart: "onRotateStart",
  rotate: "onRotate",
  rotateend: "onRotateEnd",
  pitchstart: "onPitchStart",
  pitch: "onPitch",
  pitchend: "onPitchEnd"
}, ls = {
  wheel: "onWheel",
  boxzoomstart: "onBoxZoomStart",
  boxzoomend: "onBoxZoomEnd",
  boxzoomcancel: "onBoxZoomCancel",
  resize: "onResize",
  load: "onLoad",
  render: "onRender",
  idle: "onIdle",
  remove: "onRemove",
  data: "onData",
  styledata: "onStyleData",
  sourcedata: "onSourceData",
  error: "onError"
}, ih = [
  "minZoom",
  "maxZoom",
  "minPitch",
  "maxPitch",
  "maxBounds",
  "projection",
  "renderWorldCopies"
], sh = [
  "scrollZoom",
  "boxZoom",
  "dragRotate",
  "dragPan",
  "keyboard",
  "doubleClickZoom",
  "touchZoomRotate",
  "touchPitch"
];
class Gt {
  constructor(t, n, r) {
    this._map = null, this._internalUpdate = !1, this._inRender = !1, this._hoveredFeatures = null, this._deferredEvents = {
      move: !1,
      zoom: !1,
      pitch: !1,
      rotate: !1
    }, this._onEvent = (o) => {
      const s = this.props[ls[o.type]];
      s ? s(o) : o.type === "error" && console.error(o.error);
    }, this._onPointerEvent = (o) => {
      (o.type === "mousemove" || o.type === "mouseout") && this._updateHover(o);
      const s = this.props[as[o.type]];
      s && (this.props.interactiveLayerIds && o.type !== "mouseover" && o.type !== "mouseout" && (o.features = this._hoveredFeatures || this._queryRenderedFeatures(o.point)), s(o), delete o.features);
    }, this._onCameraEvent = (o) => {
      if (!this._internalUpdate) {
        const s = this.props[Gr[o.type]];
        s && s(o);
      }
      o.type in this._deferredEvents && (this._deferredEvents[o.type] = !1);
    }, this._MapClass = t, this.props = n, this._initialize(r);
  }
  get map() {
    return this._map;
  }
  get transform() {
    return this._renderTransform;
  }
  setProps(t) {
    const n = this.props;
    this.props = t;
    const r = this._updateSettings(t, n);
    r && this._createShadowTransform(this._map);
    const o = this._updateSize(t), s = this._updateViewState(t, !0);
    this._updateStyle(t, n), this._updateStyleComponents(t, n), this._updateHandlers(t, n), (r || o || s && !this._map.isMoving()) && this.redraw();
  }
  static reuse(t, n) {
    const r = Gt.savedMaps.pop();
    if (!r)
      return null;
    const o = r.map, s = o.getContainer();
    for (n.className = s.className; s.childNodes.length > 0; )
      n.appendChild(s.childNodes[0]);
    o._container = n, r.setProps({ ...t, styleDiffing: !1 }), o.resize();
    const { initialViewState: a } = t;
    return a && (a.bounds ? o.fitBounds(a.bounds, { ...a.fitBoundsOptions, duration: 0 }) : r._updateViewState(a, !1)), o.isStyleLoaded() ? o.fire("load") : o.once("styledata", () => o.fire("load")), o._update(), r;
  }
  /* eslint-disable complexity,max-statements */
  _initialize(t) {
    const { props: n } = this, { mapStyle: r = ss } = n, o = {
      ...n,
      ...n.initialViewState,
      accessToken: n.mapboxAccessToken || ah() || null,
      container: t,
      style: is(r)
    }, s = o.initialViewState || o.viewState || o;
    if (Object.assign(o, {
      center: [s.longitude || 0, s.latitude || 0],
      zoom: s.zoom || 0,
      pitch: s.pitch || 0,
      bearing: s.bearing || 0
    }), n.gl) {
      const d = HTMLCanvasElement.prototype.getContext;
      HTMLCanvasElement.prototype.getContext = () => (HTMLCanvasElement.prototype.getContext = d, n.gl);
    }
    const a = new this._MapClass(o);
    s.padding && a.setPadding(s.padding), n.cursor && (a.getCanvas().style.cursor = n.cursor), this._createShadowTransform(a);
    const l = a._render;
    a._render = (d) => {
      this._inRender = !0, l.call(a, d), this._inRender = !1;
    };
    const c = a._renderTaskQueue.run;
    a._renderTaskQueue.run = (d) => {
      c.call(a._renderTaskQueue, d), this._onBeforeRepaint();
    }, a.on("render", () => this._onAfterRepaint());
    const u = a.fire;
    a.fire = this._fireEvent.bind(this, u), a.on("resize", () => {
      this._renderTransform.resize(a.transform.width, a.transform.height);
    }), a.on("styledata", () => {
      this._updateStyleComponents(this.props, {}), ns(a.transform, this._renderTransform);
    }), a.on("sourcedata", () => this._updateStyleComponents(this.props, {}));
    for (const d in as)
      a.on(d, this._onPointerEvent);
    for (const d in Gr)
      a.on(d, this._onCameraEvent);
    for (const d in ls)
      a.on(d, this._onEvent);
    this._map = a;
  }
  /* eslint-enable complexity,max-statements */
  recycle() {
    const n = this.map.getContainer().querySelector("[mapboxgl-children]");
    n == null || n.remove(), Gt.savedMaps.push(this);
  }
  destroy() {
    this._map.remove();
  }
  // Force redraw the map now. Typically resize() and jumpTo() is reflected in the next
  // render cycle, which is managed by Mapbox's animation loop.
  // This removes the synchronization issue caused by requestAnimationFrame.
  redraw() {
    const t = this._map;
    !this._inRender && t.style && (t._frame && (t._frame.cancel(), t._frame = null), t._render());
  }
  _createShadowTransform(t) {
    const n = rh(t.transform);
    t.painter.transform = n, this._renderTransform = n;
  }
  /* Trigger map resize if size is controlled
     @param {object} nextProps
     @returns {bool} true if size has changed
   */
  _updateSize(t) {
    const { viewState: n } = t;
    if (n) {
      const r = this._map;
      if (n.width !== r.transform.width || n.height !== r.transform.height)
        return r.resize(), !0;
    }
    return !1;
  }
  // Adapted from map.jumpTo
  /* Update camera to match props
     @param {object} nextProps
     @param {bool} triggerEvents - should fire camera events
     @returns {bool} true if anything is changed
   */
  _updateViewState(t, n) {
    if (this._internalUpdate)
      return !1;
    const r = this._map, o = this._renderTransform, { zoom: s, pitch: a, bearing: l } = o, c = r.isMoving();
    c && (o.cameraElevationReference = "sea");
    const u = os(o, {
      ...rs(r.transform),
      ...t
    });
    if (c && (o.cameraElevationReference = "ground"), u && n) {
      const d = this._deferredEvents;
      d.move = !0, d.zoom || (d.zoom = s !== o.zoom), d.rotate || (d.rotate = l !== o.bearing), d.pitch || (d.pitch = a !== o.pitch);
    }
    return c || os(r.transform, t), u;
  }
  /* Update camera constraints and projection settings to match props
     @param {object} nextProps
     @param {object} currProps
     @returns {bool} true if anything is changed
   */
  _updateSettings(t, n) {
    const r = this._map;
    let o = !1;
    for (const s of ih)
      if (s in t && !st(t[s], n[s])) {
        o = !0;
        const a = r[`set${s[0].toUpperCase()}${s.slice(1)}`];
        a == null || a.call(r, t[s]);
      }
    return o;
  }
  /* Update map style to match props
     @param {object} nextProps
     @param {object} currProps
     @returns {bool} true if style is changed
   */
  _updateStyle(t, n) {
    if (t.cursor !== n.cursor && (this._map.getCanvas().style.cursor = t.cursor || ""), t.mapStyle !== n.mapStyle) {
      const { mapStyle: r = ss, styleDiffing: o = !0 } = t, s = {
        diff: o
      };
      return "localIdeographFontFamily" in t && (s.localIdeographFontFamily = t.localIdeographFontFamily), this._map.setStyle(is(r), s), !0;
    }
    return !1;
  }
  /* Update fog, light and terrain to match props
     @param {object} nextProps
     @param {object} currProps
     @returns {bool} true if anything is changed
   */
  _updateStyleComponents(t, n) {
    const r = this._map;
    let o = !1;
    return r.isStyleLoaded() && ("light" in t && r.setLight && !st(t.light, n.light) && (o = !0, r.setLight(t.light)), "fog" in t && r.setFog && !st(t.fog, n.fog) && (o = !0, r.setFog(t.fog)), "terrain" in t && r.setTerrain && !st(t.terrain, n.terrain) && (!t.terrain || r.getSource(t.terrain.source)) && (o = !0, r.setTerrain(t.terrain))), o;
  }
  /* Update interaction handlers to match props
     @param {object} nextProps
     @param {object} currProps
     @returns {bool} true if anything is changed
   */
  _updateHandlers(t, n) {
    const r = this._map;
    let o = !1;
    for (const s of sh) {
      const a = t[s] ?? !0, l = n[s] ?? !0;
      st(a, l) || (o = !0, a ? r[s].enable(a) : r[s].disable());
    }
    return o;
  }
  _queryRenderedFeatures(t) {
    const n = this._map, r = n.transform, { interactiveLayerIds: o = [] } = this.props;
    try {
      return n.transform = this._renderTransform, n.queryRenderedFeatures(t, {
        layers: o.filter(n.getLayer.bind(n))
      });
    } catch {
      return [];
    } finally {
      n.transform = r;
    }
  }
  _updateHover(t) {
    var o;
    const { props: n } = this;
    if (n.interactiveLayerIds && (n.onMouseMove || n.onMouseEnter || n.onMouseLeave)) {
      const s = t.type, a = ((o = this._hoveredFeatures) == null ? void 0 : o.length) > 0, l = this._queryRenderedFeatures(t.point), c = l.length > 0;
      !c && a && (t.type = "mouseleave", this._onPointerEvent(t)), this._hoveredFeatures = l, c && !a && (t.type = "mouseenter", this._onPointerEvent(t)), t.type = s;
    } else
      this._hoveredFeatures = null;
  }
  _fireEvent(t, n, r) {
    const o = this._map, s = o.transform, a = typeof n == "string" ? n : n.type;
    return a === "move" && this._updateViewState(this.props, !1), a in Gr && (typeof n == "object" && (n.viewState = rs(s)), this._map.isMoving()) ? (o.transform = this._renderTransform, t.call(o, n, r), o.transform = s, o) : (t.call(o, n, r), o);
  }
  // All camera manipulations are complete, ready to repaint
  _onBeforeRepaint() {
    const t = this._map;
    this._internalUpdate = !0;
    for (const r in this._deferredEvents)
      this._deferredEvents[r] && t.fire(r);
    this._internalUpdate = !1;
    const n = this._map.transform;
    t.transform = this._renderTransform, this._onAfterRepaint = () => {
      ns(this._renderTransform, n), t.transform = n;
    };
  }
}
Gt.savedMaps = [];
function ah() {
  let e = null;
  if (typeof location < "u") {
    const t = /access_token=([^&\/]*)/.exec(location.search);
    e = t && t[1];
  }
  try {
    e = e || process.env.MapboxAccessToken;
  } catch {
  }
  try {
    e = e || process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
  } catch {
  }
  return e;
}
const lh = [
  "setMaxBounds",
  "setMinZoom",
  "setMaxZoom",
  "setMinPitch",
  "setMaxPitch",
  "setRenderWorldCopies",
  "setProjection",
  "setStyle",
  "addSource",
  "removeSource",
  "addLayer",
  "removeLayer",
  "setLayerZoomRange",
  "setFilter",
  "setPaintProperty",
  "setLayoutProperty",
  "setLight",
  "setTerrain",
  "setFog",
  "remove"
];
function ch(e) {
  if (!e)
    return null;
  const t = e.map, n = {
    getMap: () => t,
    // Overwrite getters to use our shadow transform
    getCenter: () => e.transform.center,
    getZoom: () => e.transform.zoom,
    getBearing: () => e.transform.bearing,
    getPitch: () => e.transform.pitch,
    getPadding: () => e.transform.padding,
    getBounds: () => e.transform.getBounds(),
    project: (r) => {
      const o = t.transform;
      t.transform = e.transform;
      const s = t.project(r);
      return t.transform = o, s;
    },
    unproject: (r) => {
      const o = t.transform;
      t.transform = e.transform;
      const s = t.unproject(r);
      return t.transform = o, s;
    },
    // options diverge between mapbox and maplibre
    queryTerrainElevation: (r, o) => {
      const s = t.transform;
      t.transform = e.transform;
      const a = t.queryTerrainElevation(r, o);
      return t.transform = s, a;
    },
    queryRenderedFeatures: (r, o) => {
      const s = t.transform;
      t.transform = e.transform;
      const a = t.queryRenderedFeatures(r, o);
      return t.transform = s, a;
    }
  };
  for (const r of uh(t))
    !(r in n) && !lh.includes(r) && (n[r] = t[r].bind(t));
  return n;
}
function uh(e) {
  const t = /* @__PURE__ */ new Set();
  let n = e;
  for (; n; ) {
    for (const r of Object.getOwnPropertyNames(n))
      r[0] !== "_" && typeof e[r] == "function" && r !== "fire" && r !== "setEventedParent" && t.add(r);
    n = Object.getPrototypeOf(n);
  }
  return Array.from(t);
}
const dh = typeof document < "u" ? La : ye, fh = [
  "baseApiUrl",
  "maxParallelImageRequests",
  "workerClass",
  "workerCount",
  "workerUrl"
];
function ph(e, t) {
  for (const r of fh)
    r in t && (e[r] = t[r]);
  const { RTLTextPlugin: n = "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js" } = t;
  n && e.getRTLTextPluginStatus && e.getRTLTextPluginStatus() === "unavailable" && e.setRTLTextPlugin(n, (r) => {
    r && console.error(r);
  }, !0);
}
const Mn = T.createContext(null);
function mh(e, t) {
  const n = Ot(Io), [r, o] = Fe(null), s = at(), { current: a } = at({ mapLib: null, map: null });
  ye(() => {
    const u = e.mapLib;
    let d = !0, p;
    return Promise.resolve(u || import("./mapbox-gl-RB5KVpoc.mjs").then((h) => h.m)).then((h) => {
      if (!d)
        return;
      if (!h)
        throw new Error("Invalid mapLib");
      const b = "Map" in h ? h : h.default;
      if (!b.Map)
        throw new Error("Invalid mapLib");
      ph(b, e), e.reuseMaps && (p = Gt.reuse(e, s.current)), p || (p = new Gt(b.Map, e, s.current)), a.map = ch(p), a.mapLib = b, o(p), n == null || n.onMapMount(a.map, e.id);
    }).catch((h) => {
      const { onError: b } = e;
      b ? b({
        type: "error",
        target: null,
        error: h
      }) : console.error(h);
    }), () => {
      d = !1, p && (n == null || n.onMapUnmount(e.id), e.reuseMaps ? p.recycle() : p.destroy());
    };
  }, []), dh(() => {
    r && r.setProps(e);
  }), Tn(t, () => a.map, [r]);
  const l = qt(() => ({
    position: "relative",
    width: "100%",
    height: "100%",
    ...e.style
  }), [e.style]), c = {
    height: "100%"
  };
  return T.createElement("div", { id: e.id, ref: s, style: l }, r && T.createElement(
    Mn.Provider,
    { value: a },
    T.createElement("div", { "mapboxgl-children": "", style: c }, e.children)
  ));
}
const hh = T.forwardRef(mh), gh = /box|flex|grid|column|lineHeight|fontWeight|opacity|order|tabSize|zIndex/;
function Pt(e, t) {
  if (!e || !t)
    return;
  const n = e.style;
  for (const r in t) {
    const o = t[r];
    Number.isFinite(o) && !gh.test(r) ? n[r] = `${o}px` : n[r] = o;
  }
}
function Aa(e, t) {
  if (e === t)
    return null;
  const n = cs(e), r = cs(t), o = [];
  for (const s of r)
    n.has(s) || o.push(s);
  for (const s of n)
    r.has(s) || o.push(s);
  return o.length === 0 ? null : o;
}
function cs(e) {
  return new Set(e ? e.trim().split(/\s+/) : []);
}
$t(En((e, t) => {
  const { map: n, mapLib: r } = Ot(Mn), o = at({ props: e }), s = qt(() => {
    let x = !1;
    T.Children.forEach(e.children, (E) => {
      E && (x = !0);
    });
    const M = {
      ...e,
      element: x ? document.createElement("div") : null
    }, v = new r.Marker(M);
    return v.setLngLat([e.longitude, e.latitude]), v.getElement().addEventListener("click", (E) => {
      var g, P;
      (P = (g = o.current.props).onClick) == null || P.call(g, {
        type: "click",
        target: v,
        originalEvent: E
      });
    }), v.on("dragstart", (E) => {
      var P, m;
      const g = E;
      g.lngLat = s.getLngLat(), (m = (P = o.current.props).onDragStart) == null || m.call(P, g);
    }), v.on("drag", (E) => {
      var P, m;
      const g = E;
      g.lngLat = s.getLngLat(), (m = (P = o.current.props).onDrag) == null || m.call(P, g);
    }), v.on("dragend", (E) => {
      var P, m;
      const g = E;
      g.lngLat = s.getLngLat(), (m = (P = o.current.props).onDragEnd) == null || m.call(P, g);
    }), v;
  }, []);
  ye(() => (s.addTo(n.getMap()), () => {
    s.remove();
  }), []);
  const { longitude: a, latitude: l, offset: c, style: u, draggable: d = !1, popup: p = null, rotation: h = 0, rotationAlignment: b = "auto", pitchAlignment: y = "auto" } = e;
  ye(() => {
    Pt(s.getElement(), u);
  }, [u]), Tn(t, () => s, []);
  const f = o.current.props;
  (s.getLngLat().lng !== a || s.getLngLat().lat !== l) && s.setLngLat([a, l]), c && !nh(s.getOffset(), c) && s.setOffset(c), s.isDraggable() !== d && s.setDraggable(d), s.getRotation() !== h && s.setRotation(h), s.getRotationAlignment() !== b && s.setRotationAlignment(b), s.getPitchAlignment() !== y && s.setPitchAlignment(y), s.getPopup() !== p && s.setPopup(p);
  const S = Aa(f.className, e.className);
  if (S)
    for (const x of S)
      s.toggleClassName(x);
  return o.current.props = e, fs(e.children, s.getElement());
}));
$t(En((e, t) => {
  const { map: n, mapLib: r } = Ot(Mn), o = qt(() => document.createElement("div"), []), s = at({ props: e }), a = qt(() => {
    const l = { ...e }, c = new r.Popup(l);
    return c.setLngLat([e.longitude, e.latitude]), c.once("open", (u) => {
      var d, p;
      (p = (d = s.current.props).onOpen) == null || p.call(d, u);
    }), c;
  }, []);
  if (ye(() => {
    const l = (c) => {
      var u, d;
      (d = (u = s.current.props).onClose) == null || d.call(u, c);
    };
    return a.on("close", l), a.setDOMContent(o).addTo(n.getMap()), () => {
      a.off("close", l), a.isOpen() && a.remove();
    };
  }, []), ye(() => {
    Pt(a.getElement(), e.style);
  }, [e.style]), Tn(t, () => a, []), a.isOpen()) {
    const l = s.current.props;
    (a.getLngLat().lng !== e.longitude || a.getLngLat().lat !== e.latitude) && a.setLngLat([e.longitude, e.latitude]), e.offset && !st(l.offset, e.offset) && (a.options.anchor = e.anchor, a.setOffset(e.offset)), (l.anchor !== e.anchor || l.maxWidth !== e.maxWidth) && a.setMaxWidth(e.maxWidth);
    const c = Aa(l.className, e.className);
    if (c)
      for (const u of c)
        a.toggleClassName(u);
    s.current.props = e;
  }
  return fs(e.children, o);
}));
function kn(e, t, n, r) {
  const o = Ot(Mn), s = qt(() => e(o), []);
  return ye(() => {
    const a = t, l = null, c = typeof t == "function" ? t : null, { map: u } = o;
    return u.hasControl(s) || (u.addControl(s, a == null ? void 0 : a.position), l && l(o)), () => {
      c && c(o), u.hasControl(s) && u.removeControl(s);
    };
  }, []), s;
}
function yh(e) {
  const t = kn(({ mapLib: n }) => new n.AttributionControl(e), {
    position: e.position
  });
  return ye(() => {
    Pt(t._container, e.style);
  }, [e.style]), null;
}
$t(yh);
function bh(e) {
  const t = kn(({ mapLib: n }) => new n.FullscreenControl({
    container: e.containerId && document.getElementById(e.containerId)
  }), { position: e.position });
  return ye(() => {
    Pt(t._controlContainer, e.style);
  }, [e.style]), null;
}
$t(bh);
function vh(e, t) {
  const n = at({ props: e }), r = kn(({ mapLib: o }) => {
    const s = new o.GeolocateControl(e), a = s._setupUI.bind(s);
    return s._setupUI = (l) => {
      s._container.hasChildNodes() || a(l);
    }, s.on("geolocate", (l) => {
      var c, u;
      (u = (c = n.current.props).onGeolocate) == null || u.call(c, l);
    }), s.on("error", (l) => {
      var c, u;
      (u = (c = n.current.props).onError) == null || u.call(c, l);
    }), s.on("outofmaxbounds", (l) => {
      var c, u;
      (u = (c = n.current.props).onOutOfMaxBounds) == null || u.call(c, l);
    }), s.on("trackuserlocationstart", (l) => {
      var c, u;
      (u = (c = n.current.props).onTrackUserLocationStart) == null || u.call(c, l);
    }), s.on("trackuserlocationend", (l) => {
      var c, u;
      (u = (c = n.current.props).onTrackUserLocationEnd) == null || u.call(c, l);
    }), s;
  }, { position: e.position });
  return n.current.props = e, Tn(t, () => r, []), ye(() => {
    Pt(r._container, e.style);
  }, [e.style]), null;
}
$t(En(vh));
function xh(e) {
  const t = kn(({ mapLib: n }) => new n.NavigationControl(e), {
    position: e.position
  });
  return ye(() => {
    Pt(t._container, e.style);
  }, [e.style]), null;
}
$t(xh);
function Eh(e) {
  const t = kn(({ mapLib: s }) => new s.ScaleControl(e), {
    position: e.position
  }), n = at(e), r = n.current;
  n.current = e;
  const { style: o } = e;
  return e.maxWidth !== void 0 && e.maxWidth !== r.maxWidth && (t.options.maxWidth = e.maxWidth), e.unit !== void 0 && e.unit !== r.unit && t.setUnit(e.unit), ye(() => {
    Pt(t._container, o);
  }, [o]), null;
}
$t(Eh);
const Th = (e = !1) => {
  const [t, n] = Fe(null), [r, o] = Fe(null), [s, a] = Fe(null), l = () => {
    navigator.geolocation ? navigator.geolocation.getCurrentPosition(
      (c) => {
        const { latitude: u, longitude: d } = c.coords;
        n({ latitude: u, longitude: d });
      },
      (c) => {
        o(c.message);
      }
    ) : o("Geolocation is not supported by this browser.");
  };
  return ye(() => {
    if (e && navigator.geolocation) {
      const c = navigator.geolocation.watchPosition(
        (u) => {
          const { latitude: d, longitude: p } = u.coords;
          n({ latitude: d, longitude: p });
        },
        (u) => {
          o(u.message);
        }
      );
      return a(c), () => {
        s !== null && navigator.geolocation.clearWatch(s);
      };
    } else
      l();
  }, [e, s]), { location: t, error: r, setLocation: n };
}, Sh = { VITE_MAP_BOX_KEY: "pk.eyJ1IjoiYW1haG51aTI0IiwiYSI6ImNtOWlicHZ3ODAwaDQyanNiM2l4eXp5emUifQ.Y6iIWMc-pwARbs7nbhnHGQ" }, Oh = () => {
  const [e, t] = Fe(!1), [n, r] = Fe(
    void 0
  ), [o, s] = Fe(null);
  return { geoData: n, error: o, geocode: async (l) => {
    const u = Sh.VITE_MAP_BOX_KEY, d = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
      l
    )}.json?access_token=${u}`;
    try {
      t(!0);
      const h = await (await fetch(d)).json();
      if (h.features && h.features.length > 0) {
        const { center: b, place_name: y, text: f } = h.features[0];
        r({
          coordinates: { latitude: b[1], longitude: b[0] },
          place_name: y,
          text: f
        }), s(null);
      } else
        s("Geocoding failed. Please try another address.");
      return n;
    } catch {
      s("Error fetching geolocation data.");
    } finally {
      t(!1);
    }
  }, loading: e };
};
var Fa = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, us = Ve.createContext && /* @__PURE__ */ Ve.createContext(Fa), wh = ["attr", "size", "title"];
function _h(e, t) {
  if (e == null) return {};
  var n = Ch(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (o = 0; o < s.length; o++)
      r = s[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Ch(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function ir() {
  return ir = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ir.apply(this, arguments);
}
function ds(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function sr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ds(Object(n), !0).forEach(function(r) {
      Rh(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ds(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Rh(e, t, n) {
  return t = $h(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function $h(e) {
  var t = Ph(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Ph(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Da(e) {
  return e && e.map((t, n) => /* @__PURE__ */ Ve.createElement(t.tag, sr({
    key: n
  }, t.attr), Da(t.child)));
}
function Nh(e) {
  return (t) => /* @__PURE__ */ Ve.createElement(Mh, ir({
    attr: sr({}, e.attr)
  }, t), Da(e.child));
}
function Mh(e) {
  var t = (n) => {
    var {
      attr: r,
      size: o,
      title: s
    } = e, a = _h(e, wh), l = o || n.size || "1em", c;
    return n.className && (c = n.className), e.className && (c = (c ? c + " " : "") + e.className), /* @__PURE__ */ Ve.createElement("svg", ir({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, r, a, {
      className: c,
      style: sr(sr({
        color: e.color || n.color
      }, n.style), e.style),
      height: l,
      width: l,
      xmlns: "http://www.w3.org/2000/svg"
    }), s && /* @__PURE__ */ Ve.createElement("title", null, s), e.children);
  };
  return us !== void 0 ? /* @__PURE__ */ Ve.createElement(us.Consumer, null, (n) => t(n)) : t(Fa);
}
function kh(e) {
  return Nh({ attr: { version: "1.1", id: "search", x: "0px", y: "0px", viewBox: "0 0 24 24", style: "enable-background:new 0 0 24 24;" }, child: [{ tag: "g", attr: {}, child: [{ tag: "path", attr: { d: `M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
		c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
		 M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
		z` }, child: [] }] }] })(e);
}
const Lh = (e) => {
  const t = Qm.VITE_MAP_BOX_KEY, [n, r] = Fe(!1), { setLocation: o } = Th(!1), [s, a] = Fe(""), { loading: l, geoData: c, geocode: u } = Oh(), [d] = ym(s, 500), p = (h) => {
    a(h.target.value);
  };
  return ye(() => {
    d && u(d);
  }, [d]), ye(() => {
    c && (o(c == null ? void 0 : c.coordinates), e.onLocationUpdate(c));
  }, [c]), /* @__PURE__ */ Ie("div", { ...e, children: [
    /* @__PURE__ */ Y(
      Wp,
      {
        type: "text",
        id: "",
        onChange: p,
        placeholder: "Search city",
        startAdornment: /* @__PURE__ */ Y(kh, { size: 30, className: "mr-2" })
      }
    ),
    /* @__PURE__ */ Y(eh, { children: /* @__PURE__ */ Ie("div", { className: "w-full mt-2 relative h-[40vh]", children: [
      /* @__PURE__ */ Y(
        hh,
        {
          onLoad: (h) => {
            h.type === "load" && r(!0), console.log(h);
          },
          mapboxAccessToken: t,
          initialViewState: {
            longitude: c == null ? void 0 : c.coordinates.longitude,
            latitude: c == null ? void 0 : c.coordinates.latitude,
            zoom: 6
          },
          style: {
            width: "100%",
            height: "40vh",
            borderRadius: "0.2rem",
            position: "absolute",
            top: 0,
            left: 0
          },
          mapStyle: "mapbox://styles/mapbox/streets-v9",
          children: /* @__PURE__ */ Y(Ih, { coordinates: c == null ? void 0 : c.coordinates })
        }
      ),
      !n || l ? /* @__PURE__ */ Y(gm, { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" }) : null
    ] }) })
  ] });
}, Ih = ({ coordinates: e }) => {
  const { current: t } = th();
  return ye(() => {
    t && e && t.flyTo({
      center: [e.longitude, e.latitude],
      zoom: 8,
      essential: !0
    });
  }, [t, e]), null;
};
export {
  Lh as A,
  jh as M,
  fo as g
};
