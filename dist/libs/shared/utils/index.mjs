var kt = (e) => {
  throw TypeError(e);
};
var rt = (e, t, r) => t.has(e) || kt("Cannot " + r);
var d = (e, t, r) => (rt(e, t, "read from private field"), r ? r.call(e) : t.get(e)), T = (e, t, r) => t.has(e) ? kt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), E = (e, t, r, s) => (rt(e, t, "write to private field"), s ? s.call(e, r) : t.set(e, r), r), A = (e, t, r) => (rt(e, t, "access private method"), r);
import * as O from "react";
import { useState as Fe, useEffect as le, forwardRef as Vr, useRef as at, useImperativeHandle as Jr } from "react";
import "react/jsx-runtime";
const Vo = (e, t) => {
  const [r, s] = Fe(e);
  return le(() => {
    const n = setTimeout(() => {
      s(e);
    }, t);
    return () => {
      clearTimeout(n);
    };
  }, [e, t]), [r, s];
};
var Qe = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(e) {
    return this.listeners.add(e), this.onSubscribe(), () => {
      this.listeners.delete(e), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}, Ne = typeof window > "u" || "Deno" in globalThis;
function Qr() {
}
function Dt(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Kr(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Ie(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Y(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function jt(e) {
  return JSON.stringify(
    e,
    (t, r) => ut(r) ? Object.keys(r).sort().reduce((s, n) => (s[n] = r[n], s), {}) : r
  );
}
function ct(e, t) {
  if (e === t)
    return e;
  const r = Bt(e) && Bt(t);
  if (r || ut(e) && ut(t)) {
    const s = r ? e : Object.keys(e), n = s.length, o = r ? t : Object.keys(t), i = o.length, a = r ? [] : {};
    let u = 0;
    for (let l = 0; l < i; l++) {
      const f = r ? l : o[l];
      (!r && s.includes(f) || r) && e[f] === void 0 && t[f] === void 0 ? (a[f] = void 0, u++) : (a[f] = ct(e[f], t[f]), a[f] === e[f] && e[f] !== void 0 && u++);
    }
    return n === i && u === n ? e : a;
  }
  return t;
}
function ze(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const r in e)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Bt(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function ut(e) {
  if (!It(e))
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const r = t.prototype;
  return !(!It(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function It(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Mt(e, t, r) {
  if (typeof r.structuralSharing == "function")
    return r.structuralSharing(e, t);
  if (r.structuralSharing !== !1) {
    if (process.env.NODE_ENV !== "production")
      try {
        return ct(e, t);
      } catch (s) {
        throw console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${r.queryHash}]: ${s}`
        ), s;
      }
    return ct(e, t);
  }
  return t;
}
var he, se, we, ir, Wr = (ir = class extends Qe {
  constructor() {
    super();
    T(this, he);
    T(this, se);
    T(this, we);
    E(this, we, (t) => {
      if (!Ne && window.addEventListener) {
        const r = () => t();
        return window.addEventListener("visibilitychange", r, !1), () => {
          window.removeEventListener("visibilitychange", r);
        };
      }
    });
  }
  onSubscribe() {
    d(this, se) || this.setEventListener(d(this, we));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = d(this, se)) == null || t.call(this), E(this, se, void 0));
  }
  setEventListener(t) {
    var r;
    E(this, we, t), (r = d(this, se)) == null || r.call(this), E(this, se, t((s) => {
      typeof s == "boolean" ? this.setFocused(s) : this.onFocus();
    }));
  }
  setFocused(t) {
    d(this, he) !== t && (E(this, he, t), this.onFocus());
  }
  onFocus() {
    const t = this.isFocused();
    this.listeners.forEach((r) => {
      r(t);
    });
  }
  isFocused() {
    var t;
    return typeof d(this, he) == "boolean" ? d(this, he) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
  }
}, he = new WeakMap(), se = new WeakMap(), we = new WeakMap(), ir), Yr = new Wr(), Ee, ne, Re, ar, Xr = (ar = class extends Qe {
  constructor() {
    super();
    T(this, Ee, !0);
    T(this, ne);
    T(this, Re);
    E(this, Re, (t) => {
      if (!Ne && window.addEventListener) {
        const r = () => t(!0), s = () => t(!1);
        return window.addEventListener("online", r, !1), window.addEventListener("offline", s, !1), () => {
          window.removeEventListener("online", r), window.removeEventListener("offline", s);
        };
      }
    });
  }
  onSubscribe() {
    d(this, ne) || this.setEventListener(d(this, Re));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = d(this, ne)) == null || t.call(this), E(this, ne, void 0));
  }
  setEventListener(t) {
    var r;
    E(this, Re, t), (r = d(this, ne)) == null || r.call(this), E(this, ne, t(this.setOnline.bind(this)));
  }
  setOnline(t) {
    d(this, Ee) !== t && (E(this, Ee, t), this.listeners.forEach((s) => {
      s(t);
    }));
  }
  isOnline() {
    return d(this, Ee);
  }
}, Ee = new WeakMap(), ne = new WeakMap(), Re = new WeakMap(), ar), Gr = new Xr();
function qt() {
  let e, t;
  const r = new Promise((n, o) => {
    e = n, t = o;
  });
  r.status = "pending", r.catch(() => {
  });
  function s(n) {
    Object.assign(r, n), delete r.resolve, delete r.reject;
  }
  return r.resolve = (n) => {
    s({
      status: "fulfilled",
      value: n
    }), e(n);
  }, r.reject = (n) => {
    s({
      status: "rejected",
      reason: n
    }), t(n);
  }, r;
}
function Zr(e) {
  return (e ?? "online") === "online" ? Gr.isOnline() : !0;
}
var es = (e) => setTimeout(e, 0);
function ts() {
  let e = [], t = 0, r = (a) => {
    a();
  }, s = (a) => {
    a();
  }, n = es;
  const o = (a) => {
    t ? e.push(a) : n(() => {
      r(a);
    });
  }, i = () => {
    const a = e;
    e = [], a.length && n(() => {
      s(() => {
        a.forEach((u) => {
          r(u);
        });
      });
    });
  };
  return {
    batch: (a) => {
      let u;
      t++;
      try {
        u = a();
      } finally {
        t--, t || i();
      }
      return u;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (a) => (...u) => {
      o(() => {
        a(...u);
      });
    },
    schedule: o,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (a) => {
      r = a;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (a) => {
      s = a;
    },
    setScheduler: (a) => {
      n = a;
    }
  };
}
var Ke = ts();
function rs(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Zr(t.networkMode) ? "fetching" : "paused",
    ...e === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function ss() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  };
}
var M, S, Le, B, pe, Se, oe, ie, Ue, Oe, xe, me, ye, ae, ve, v, _e, lt, ft, dt, ht, pt, mt, yt, lr, cr, ns = (cr = class extends Qe {
  constructor(t, r) {
    super();
    T(this, v);
    T(this, M);
    T(this, S);
    T(this, Le);
    T(this, B);
    T(this, pe);
    T(this, Se);
    T(this, oe);
    T(this, ie);
    T(this, Ue);
    T(this, Oe);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    T(this, xe);
    T(this, me);
    T(this, ye);
    T(this, ae);
    T(this, ve, /* @__PURE__ */ new Set());
    this.options = r, E(this, M, t), E(this, ie, null), E(this, oe, qt()), this.options.experimental_prefetchInRender || d(this, oe).reject(
      new Error("experimental_prefetchInRender feature flag is not enabled")
    ), this.bindMethods(), this.setOptions(r);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (d(this, S).addObserver(this), $t(d(this, S), this.options) ? A(this, v, _e).call(this) : this.updateResult(), A(this, v, ht).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return bt(
      d(this, S),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return bt(
      d(this, S),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), A(this, v, pt).call(this), A(this, v, mt).call(this), d(this, S).removeObserver(this);
  }
  setOptions(t) {
    const r = this.options, s = d(this, S);
    if (this.options = d(this, M).defaultQueryOptions(t), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Y(this.options.enabled, d(this, S)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    A(this, v, yt).call(this), d(this, S).setOptions(this.options), r._defaulted && !ze(this.options, r) && d(this, M).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: d(this, S),
      observer: this
    });
    const n = this.hasListeners();
    n && Ht(
      d(this, S),
      s,
      this.options,
      r
    ) && A(this, v, _e).call(this), this.updateResult(), n && (d(this, S) !== s || Y(this.options.enabled, d(this, S)) !== Y(r.enabled, d(this, S)) || Ie(this.options.staleTime, d(this, S)) !== Ie(r.staleTime, d(this, S))) && A(this, v, lt).call(this);
    const o = A(this, v, ft).call(this);
    n && (d(this, S) !== s || Y(this.options.enabled, d(this, S)) !== Y(r.enabled, d(this, S)) || o !== d(this, ae)) && A(this, v, dt).call(this, o);
  }
  getOptimisticResult(t) {
    const r = d(this, M).getQueryCache().build(d(this, M), t), s = this.createResult(r, t);
    return is(this, s) && (E(this, B, s), E(this, Se, this.options), E(this, pe, d(this, S).state)), s;
  }
  getCurrentResult() {
    return d(this, B);
  }
  trackResult(t, r) {
    const s = {};
    return Object.keys(t).forEach((n) => {
      Object.defineProperty(s, n, {
        configurable: !1,
        enumerable: !0,
        get: () => (this.trackProp(n), r == null || r(n), t[n])
      });
    }), s;
  }
  trackProp(t) {
    d(this, ve).add(t);
  }
  getCurrentQuery() {
    return d(this, S);
  }
  refetch({ ...t } = {}) {
    return this.fetch({
      ...t
    });
  }
  fetchOptimistic(t) {
    const r = d(this, M).defaultQueryOptions(t), s = d(this, M).getQueryCache().build(d(this, M), r);
    return s.fetch().then(() => this.createResult(s, r));
  }
  fetch(t) {
    return A(this, v, _e).call(this, {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), d(this, B)));
  }
  createResult(t, r) {
    var K;
    const s = d(this, S), n = this.options, o = d(this, B), i = d(this, pe), a = d(this, Se), l = t !== s ? t.state : d(this, Le), { state: f } = t;
    let h = { ...f }, g = !1, w;
    if (r._optimisticResults) {
      const k = this.hasListeners(), te = !k && $t(t, r), L = k && Ht(t, s, r, n);
      (te || L) && (h = {
        ...h,
        ...rs(f.data, t.options)
      }), r._optimisticResults === "isRestoring" && (h.fetchStatus = "idle");
    }
    let { error: m, errorUpdatedAt: y, status: p } = h;
    w = h.data;
    let R = !1;
    if (r.placeholderData !== void 0 && w === void 0 && p === "pending") {
      let k;
      o != null && o.isPlaceholderData && r.placeholderData === (a == null ? void 0 : a.placeholderData) ? (k = o.data, R = !0) : k = typeof r.placeholderData == "function" ? r.placeholderData(
        (K = d(this, xe)) == null ? void 0 : K.state.data,
        d(this, xe)
      ) : r.placeholderData, k !== void 0 && (p = "success", w = Mt(
        o == null ? void 0 : o.data,
        k,
        r
      ), g = !0);
    }
    if (r.select && w !== void 0 && !R)
      if (o && w === (i == null ? void 0 : i.data) && r.select === d(this, Ue))
        w = d(this, Oe);
      else
        try {
          E(this, Ue, r.select), w = r.select(w), w = Mt(o == null ? void 0 : o.data, w, r), E(this, Oe, w), E(this, ie, null);
        } catch (k) {
          E(this, ie, k);
        }
    d(this, ie) && (m = d(this, ie), w = d(this, Oe), y = Date.now(), p = "error");
    const x = h.fetchStatus === "fetching", C = p === "pending", U = p === "error", P = C && x, H = w !== void 0, N = {
      status: p,
      fetchStatus: h.fetchStatus,
      isPending: C,
      isSuccess: p === "success",
      isError: U,
      isInitialLoading: P,
      isLoading: P,
      data: w,
      dataUpdatedAt: h.dataUpdatedAt,
      error: m,
      errorUpdatedAt: y,
      failureCount: h.fetchFailureCount,
      failureReason: h.fetchFailureReason,
      errorUpdateCount: h.errorUpdateCount,
      isFetched: h.dataUpdateCount > 0 || h.errorUpdateCount > 0,
      isFetchedAfterMount: h.dataUpdateCount > l.dataUpdateCount || h.errorUpdateCount > l.errorUpdateCount,
      isFetching: x,
      isRefetching: x && !C,
      isLoadingError: U && !H,
      isPaused: h.fetchStatus === "paused",
      isPlaceholderData: g,
      isRefetchError: U && H,
      isStale: Ft(t, r),
      refetch: this.refetch,
      promise: d(this, oe)
    };
    if (this.options.experimental_prefetchInRender) {
      const k = (F) => {
        N.status === "error" ? F.reject(N.error) : N.data !== void 0 && F.resolve(N.data);
      }, te = () => {
        const F = E(this, oe, N.promise = qt());
        k(F);
      }, L = d(this, oe);
      switch (L.status) {
        case "pending":
          t.queryHash === s.queryHash && k(L);
          break;
        case "fulfilled":
          (N.status === "error" || N.data !== L.value) && te();
          break;
        case "rejected":
          (N.status !== "error" || N.error !== L.reason) && te();
          break;
      }
    }
    return N;
  }
  updateResult() {
    const t = d(this, B), r = this.createResult(d(this, S), this.options);
    if (E(this, pe, d(this, S).state), E(this, Se, this.options), d(this, pe).data !== void 0 && E(this, xe, d(this, S)), ze(r, t))
      return;
    E(this, B, r);
    const s = () => {
      if (!t)
        return !0;
      const { notifyOnChangeProps: n } = this.options, o = typeof n == "function" ? n() : n;
      if (o === "all" || !o && !d(this, ve).size)
        return !0;
      const i = new Set(
        o ?? d(this, ve)
      );
      return this.options.throwOnError && i.add("error"), Object.keys(d(this, B)).some((a) => {
        const u = a;
        return d(this, B)[u] !== t[u] && i.has(u);
      });
    };
    A(this, v, lr).call(this, { listeners: s() });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && A(this, v, ht).call(this);
  }
}, M = new WeakMap(), S = new WeakMap(), Le = new WeakMap(), B = new WeakMap(), pe = new WeakMap(), Se = new WeakMap(), oe = new WeakMap(), ie = new WeakMap(), Ue = new WeakMap(), Oe = new WeakMap(), xe = new WeakMap(), me = new WeakMap(), ye = new WeakMap(), ae = new WeakMap(), ve = new WeakMap(), v = new WeakSet(), _e = function(t) {
  A(this, v, yt).call(this);
  let r = d(this, S).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (r = r.catch(Qr)), r;
}, lt = function() {
  A(this, v, pt).call(this);
  const t = Ie(
    this.options.staleTime,
    d(this, S)
  );
  if (Ne || d(this, B).isStale || !Dt(t))
    return;
  const s = Kr(d(this, B).dataUpdatedAt, t) + 1;
  E(this, me, setTimeout(() => {
    d(this, B).isStale || this.updateResult();
  }, s));
}, ft = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(d(this, S)) : this.options.refetchInterval) ?? !1;
}, dt = function(t) {
  A(this, v, mt).call(this), E(this, ae, t), !(Ne || Y(this.options.enabled, d(this, S)) === !1 || !Dt(d(this, ae)) || d(this, ae) === 0) && E(this, ye, setInterval(() => {
    (this.options.refetchIntervalInBackground || Yr.isFocused()) && A(this, v, _e).call(this);
  }, d(this, ae)));
}, ht = function() {
  A(this, v, lt).call(this), A(this, v, dt).call(this, A(this, v, ft).call(this));
}, pt = function() {
  d(this, me) && (clearTimeout(d(this, me)), E(this, me, void 0));
}, mt = function() {
  d(this, ye) && (clearInterval(d(this, ye)), E(this, ye, void 0));
}, yt = function() {
  const t = d(this, M).getQueryCache().build(d(this, M), this.options);
  if (t === d(this, S))
    return;
  const r = d(this, S);
  E(this, S, t), E(this, Le, t.state), this.hasListeners() && (r == null || r.removeObserver(this), t.addObserver(this));
}, lr = function(t) {
  Ke.batch(() => {
    t.listeners && this.listeners.forEach((r) => {
      r(d(this, B));
    }), d(this, M).getQueryCache().notify({
      query: d(this, S),
      type: "observerResultsUpdated"
    });
  });
}, cr);
function os(e, t) {
  return Y(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && t.retryOnMount === !1);
}
function $t(e, t) {
  return os(e, t) || e.state.data !== void 0 && bt(e, t, t.refetchOnMount);
}
function bt(e, t, r) {
  if (Y(t.enabled, e) !== !1) {
    const s = typeof r == "function" ? r(e) : r;
    return s === "always" || s !== !1 && Ft(e, t);
  }
  return !1;
}
function Ht(e, t, r, s) {
  return (e !== t || Y(s.enabled, e) === !1) && (!r.suspense || e.state.status !== "error") && Ft(e, r);
}
function Ft(e, t) {
  return Y(t.enabled, e) !== !1 && e.isStaleByTime(Ie(t.staleTime, e));
}
function is(e, t) {
  return !ze(e.getCurrentResult(), t);
}
var ce, ue, q, G, Z, Me, gt, ur, as = (ur = class extends Qe {
  constructor(t, r) {
    super();
    T(this, Z);
    T(this, ce);
    T(this, ue);
    T(this, q);
    T(this, G);
    E(this, ce, t), this.setOptions(r), this.bindMethods(), A(this, Z, Me).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(t) {
    var s;
    const r = this.options;
    this.options = d(this, ce).defaultMutationOptions(t), ze(this.options, r) || d(this, ce).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: d(this, q),
      observer: this
    }), r != null && r.mutationKey && this.options.mutationKey && jt(r.mutationKey) !== jt(this.options.mutationKey) ? this.reset() : ((s = d(this, q)) == null ? void 0 : s.state.status) === "pending" && d(this, q).setOptions(this.options);
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || (t = d(this, q)) == null || t.removeObserver(this);
  }
  onMutationUpdate(t) {
    A(this, Z, Me).call(this), A(this, Z, gt).call(this, t);
  }
  getCurrentResult() {
    return d(this, ue);
  }
  reset() {
    var t;
    (t = d(this, q)) == null || t.removeObserver(this), E(this, q, void 0), A(this, Z, Me).call(this), A(this, Z, gt).call(this);
  }
  mutate(t, r) {
    var s;
    return E(this, G, r), (s = d(this, q)) == null || s.removeObserver(this), E(this, q, d(this, ce).getMutationCache().build(d(this, ce), this.options)), d(this, q).addObserver(this), d(this, q).execute(t);
  }
}, ce = new WeakMap(), ue = new WeakMap(), q = new WeakMap(), G = new WeakMap(), Z = new WeakSet(), Me = function() {
  var r;
  const t = ((r = d(this, q)) == null ? void 0 : r.state) ?? ss();
  E(this, ue, {
    ...t,
    isPending: t.status === "pending",
    isSuccess: t.status === "success",
    isError: t.status === "error",
    isIdle: t.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, gt = function(t) {
  Ke.batch(() => {
    var r, s, n, o, i, a, u, l;
    if (d(this, G) && this.hasListeners()) {
      const f = d(this, ue).variables, h = d(this, ue).context;
      (t == null ? void 0 : t.type) === "success" ? ((s = (r = d(this, G)).onSuccess) == null || s.call(r, t.data, f, h), (o = (n = d(this, G)).onSettled) == null || o.call(n, t.data, null, f, h)) : (t == null ? void 0 : t.type) === "error" && ((a = (i = d(this, G)).onError) == null || a.call(i, t.error, f, h), (l = (u = d(this, G)).onSettled) == null || l.call(
        u,
        void 0,
        t.error,
        f,
        h
      ));
    }
    this.listeners.forEach((f) => {
      f(d(this, ue));
    });
  });
}, ur), cs = O.createContext(
  void 0
), fr = (e) => {
  const t = O.useContext(cs);
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, dr = O.createContext(!1), us = () => O.useContext(dr);
dr.Provider;
function ls() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e
  };
}
var fs = O.createContext(ls()), ds = () => O.useContext(fs);
function hr(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
function wt() {
}
var hs = (e, t) => {
  (e.suspense || e.throwOnError || e.experimental_prefetchInRender) && (t.isReset() || (e.retryOnMount = !1));
}, ps = (e) => {
  O.useEffect(() => {
    e.clearReset();
  }, [e]);
}, ms = ({
  result: e,
  errorResetBoundary: t,
  throwOnError: r,
  query: s,
  suspense: n
}) => e.isError && !t.isReset() && !e.isFetching && s && (n && e.data === void 0 || hr(r, [e.error, s])), ys = (e) => {
  const t = e.staleTime;
  e.suspense && (e.staleTime = typeof t == "function" ? (...r) => Math.max(t(...r), 1e3) : Math.max(t ?? 1e3, 1e3), typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3)));
}, bs = (e, t) => e.isLoading && e.isFetching && !t, gs = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending, zt = (e, t, r) => t.fetchOptimistic(e).catch(() => {
  r.clearReset();
});
function ws(e, t, r) {
  var h, g, w, m, y;
  if (process.env.NODE_ENV !== "production" && (typeof e != "object" || Array.isArray(e)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const s = fr(), n = us(), o = ds(), i = s.defaultQueryOptions(e);
  (g = (h = s.getDefaultOptions().queries) == null ? void 0 : h._experimental_beforeQuery) == null || g.call(
    h,
    i
  ), process.env.NODE_ENV !== "production" && (i.queryFn || console.error(
    `[${i.queryHash}]: No queryFn was passed as an option, and no default queryFn was found. The queryFn parameter is only optional when using a default queryFn. More info here: https://tanstack.com/query/latest/docs/framework/react/guides/default-query-function`
  )), i._optimisticResults = n ? "isRestoring" : "optimistic", ys(i), hs(i, o), ps(o);
  const a = !s.getQueryCache().get(i.queryHash), [u] = O.useState(
    () => new t(
      s,
      i
    )
  ), l = u.getOptimisticResult(i), f = !n && e.subscribed !== !1;
  if (O.useSyncExternalStore(
    O.useCallback(
      (p) => {
        const R = f ? u.subscribe(Ke.batchCalls(p)) : wt;
        return u.updateResult(), R;
      },
      [u, f]
    ),
    () => u.getCurrentResult(),
    () => u.getCurrentResult()
  ), O.useEffect(() => {
    u.setOptions(i);
  }, [i, u]), gs(i, l))
    throw zt(i, u, o);
  if (ms({
    result: l,
    errorResetBoundary: o,
    throwOnError: i.throwOnError,
    query: s.getQueryCache().get(i.queryHash),
    suspense: i.suspense
  }))
    throw l.error;
  if ((m = (w = s.getDefaultOptions().queries) == null ? void 0 : w._experimental_afterQuery) == null || m.call(
    w,
    i,
    l
  ), i.experimental_prefetchInRender && !Ne && bs(l, n)) {
    const p = a ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      zt(i, u, o)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      (y = s.getQueryCache().get(i.queryHash)) == null ? void 0 : y.promise
    );
    p == null || p.catch(wt).finally(() => {
      u.updateResult();
    });
  }
  return i.notifyOnChangeProps ? l : u.trackResult(l);
}
function Es(e, t) {
  return ws(e, ns);
}
function Rs(e, t) {
  const r = fr(), [s] = O.useState(
    () => new as(
      r,
      e
    )
  );
  O.useEffect(() => {
    s.setOptions(e);
  }, [s, e]);
  const n = O.useSyncExternalStore(
    O.useCallback(
      (i) => s.subscribe(Ke.batchCalls(i)),
      [s]
    ),
    () => s.getCurrentResult(),
    () => s.getCurrentResult()
  ), o = O.useCallback(
    (i, a) => {
      s.mutate(i, a).catch(wt);
    },
    [s]
  );
  if (n.error && hr(s.options.throwOnError, [n.error]))
    throw n.error;
  return { ...n, mutate: o, mutateAsync: n.mutate };
}
var Ss = () => {
};
function Os(e, t, r) {
  let s = at(Ss);
  le(() => {
    s.current = e;
  }), le(() => {
  }, [r]), le(() => {
    if (t === null || t === !1) return;
    let n = setInterval(() => s.current(), t);
    return () => clearInterval(n);
  }, [t]);
}
function pr(e, t) {
  return Math.random() * (t - e + 1) + e;
}
function Be(e, t) {
  return Math.floor(pr(e, t));
}
Vr(({ progress: e, height: t = 2, className: r = "", color: s = "red", background: n = "transparent", onLoaderFinished: o, transitionTime: i = 300, loaderSpeed: a = 500, waitingTime: u = 1e3, shadow: l = !0, containerStyle: f = {}, style: h = {}, shadowStyle: g = {}, containerClassName: w = "" }, m) => {
  let y = at(!1), [p, R] = Fe(0), x = at({ active: !1, refreshRate: 1e3 }), [C, U] = Fe({ active: !1, value: 60 }), P = { height: "100%", background: s, transition: `all ${a}ms ease`, width: "0%" }, H = { position: "fixed", top: 0, left: 0, height: t, background: n, zIndex: 99999999999, width: "100%" }, Q = { boxShadow: `0 0 10px ${s}, 0 0 10px ${s}`, width: "5%", opacity: 1, position: "absolute", height: "100%", transition: `all ${a}ms ease`, transform: "rotate(2deg) translate(0px, -2px)", left: "-10rem" }, [N, K] = Fe(P), [k, te] = Fe(Q);
  le(() => (y.current = !0, () => {
    y.current = !1;
  }), []), Jr(m, () => ({ continuousStart(F, D = 1e3) {
    if (C.active) return;
    if (e !== void 0) {
      console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!");
      return;
    }
    let I = F || Be(10, 20);
    x.current = { active: !0, refreshRate: D }, R(I), L(I);
  }, staticStart(F) {
    if (x.current.active) return;
    if (e !== void 0) {
      console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!");
      return;
    }
    let D = F || Be(30, 60);
    U({ active: !0, value: D }), R(D), L(D);
  }, start(F = "continuous", D, I) {
    if (e !== void 0) {
      console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!");
      return;
    }
    F === "continuous" ? x.current = { active: !0, refreshRate: I || 1e3 } : U({ active: !0, value: D || 20 });
    let Hr = Be(10, 20), zr = Be(30, 70), Ut = D || (F === "continuous" ? Hr : zr);
    R(Ut), L(Ut);
  }, complete() {
    if (e !== void 0) {
      console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!");
      return;
    }
    R(100), L(100);
  }, increase(F) {
    if (e !== void 0) {
      console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!");
      return;
    }
    R((D) => {
      let I = D + F;
      return L(I), I;
    });
  }, decrease(F) {
    if (e !== void 0) {
      console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!");
      return;
    }
    R((D) => {
      let I = D - F;
      return L(I), I;
    });
  }, getProgress() {
    return p;
  } })), le(() => {
    K({ ...N, background: s }), te({ ...k, boxShadow: `0 0 10px ${s}, 0 0 5px ${s}` });
  }, [s]), le(() => {
    if (m) {
      if (m && e !== void 0) {
        console.warn(`react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar! Please use only props or only ref methods! Ref methods will override props if "ref" property is available.`);
        return;
      }
      L(p);
    } else e && L(e);
  }, [e]);
  let L = (F) => {
    F >= 100 ? (K({ ...N, width: "100%" }), l && te({ ...k, left: F - 10 + "%" }), setTimeout(() => {
      y.current && (K({ ...N, opacity: 0, width: "100%", transition: `all ${i}ms ease-out`, color: s }), setTimeout(() => {
        y.current && (x.current.active && (x.current = { ...x.current, active: !1 }, R(0), L(0)), C.active && (U({ ...C, active: !1 }), R(0), L(0)), o && o(), R(0), L(0));
      }, i));
    }, u)) : (K((D) => ({ ...D, width: F + "%", opacity: 1, transition: F > 0 ? `all ${a}ms ease` : "" })), l && te({ ...k, left: F - 5.5 + "%", transition: F > 0 ? `all ${a}ms ease` : "" }));
  };
  return Os(() => {
    let F = Math.min(10, (100 - p) / 5), D = Math.min(20, (100 - p) / 3), I = pr(F, D);
    p + I < 95 && (R(p + I), L(p + I));
  }, x.current.active ? x.current.refreshRate : null), O.createElement("div", { className: w, style: { ...H, ...f } }, O.createElement("div", { className: r, style: { ...N, ...h } }, l ? O.createElement("div", { style: { ...k, ...g } }) : null));
});
var xs = O.createContext(void 0), mr = (e) => {
  let t = O.useContext(xs);
  if (!t) throw new Error("[react-top-loading-bar] useLoadingBar hook must be used within a LoadingBarContainer. Try wrapping parent component in <LoadingBarContainer>.");
  return le(() => {
    e && t.setProps(e);
  }, []), { start: t.start, complete: t.complete, increase: t.increase, decrease: t.decrease, getProgress: t.getProgress };
};
let vs = { data: "" }, Ts = (e) => typeof window == "object" ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), { innerHTML: " ", id: "_goober" })).firstChild : e || vs, Cs = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g, As = /\/\*[^]*?\*\/|  +/g, Vt = /\n+/g, re = (e, t) => {
  let r = "", s = "", n = "";
  for (let o in e) {
    let i = e[o];
    o[0] == "@" ? o[1] == "i" ? r = o + " " + i + ";" : s += o[1] == "f" ? re(i, o) : o + "{" + re(i, o[1] == "k" ? "" : t) + "}" : typeof i == "object" ? s += re(i, t ? t.replace(/([^,])+/g, (a) => o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (u) => /&/.test(u) ? u.replace(/&/g, a) : a ? a + " " + u : u)) : o) : i != null && (o = /^--/.test(o) ? o : o.replace(/[A-Z]/g, "-$&").toLowerCase(), n += re.p ? re.p(o, i) : o + ":" + i + ";");
  }
  return r + (t && n ? t + "{" + n + "}" : n) + s;
}, X = {}, yr = (e) => {
  if (typeof e == "object") {
    let t = "";
    for (let r in e) t += r + yr(e[r]);
    return t;
  }
  return e;
}, Fs = (e, t, r, s, n) => {
  let o = yr(e), i = X[o] || (X[o] = ((u) => {
    let l = 0, f = 11;
    for (; l < u.length; ) f = 101 * f + u.charCodeAt(l++) >>> 0;
    return "go" + f;
  })(o));
  if (!X[i]) {
    let u = o !== e ? e : ((l) => {
      let f, h, g = [{}];
      for (; f = Cs.exec(l.replace(As, "")); ) f[4] ? g.shift() : f[3] ? (h = f[3].replace(Vt, " ").trim(), g.unshift(g[0][h] = g[0][h] || {})) : g[0][f[1]] = f[2].replace(Vt, " ").trim();
      return g[0];
    })(e);
    X[i] = re(n ? { ["@keyframes " + i]: u } : u, r ? "" : "." + i);
  }
  let a = r && X.g ? X.g : null;
  return r && (X.g = X[i]), ((u, l, f, h) => {
    h ? l.data = l.data.replace(h, u) : l.data.indexOf(u) === -1 && (l.data = f ? u + l.data : l.data + u);
  })(X[i], t, s, a), i;
}, _s = (e, t, r) => e.reduce((s, n, o) => {
  let i = t[o];
  if (i && i.call) {
    let a = i(r), u = a && a.props && a.props.className || /^go/.test(a) && a;
    i = u ? "." + u : a && typeof a == "object" ? a.props ? "" : re(a, "") : a === !1 ? "" : a;
  }
  return s + n + (i ?? "");
}, "");
function We(e) {
  let t = this || {}, r = e.call ? e(t.p) : e;
  return Fs(r.unshift ? r.raw ? _s(r, [].slice.call(arguments, 1), t.p) : r.reduce((s, n) => Object.assign(s, n && n.call ? n(t.p) : n), {}) : r, Ts(t.target), t.g, t.o, t.k);
}
let br, Et, Rt;
We.bind({ g: 1 });
let ee = We.bind({ k: 1 });
function Ns(e, t, r, s) {
  re.p = t, br = e, Et = r, Rt = s;
}
function fe(e, t) {
  let r = this || {};
  return function() {
    let s = arguments;
    function n(o, i) {
      let a = Object.assign({}, o), u = a.className || n.className;
      r.p = Object.assign({ theme: Et && Et() }, a), r.o = / *go\d+/.test(u), a.className = We.apply(r, s) + (u ? " " + u : "");
      let l = e;
      return e[0] && (l = a.as || e, delete a.as), Rt && l[0] && Rt(a), br(l, a);
    }
    return n;
  };
}
var Ps = (e) => typeof e == "function", St = (e, t) => Ps(e) ? e(t) : e, Ls = /* @__PURE__ */ (() => {
  let e = 0;
  return () => (++e).toString();
})(), Us = /* @__PURE__ */ (() => {
  let e;
  return () => {
    if (e === void 0 && typeof window < "u") {
      let t = matchMedia("(prefers-reduced-motion: reduce)");
      e = !t || t.matches;
    }
    return e;
  };
})(), ks = 20, gr = (e, t) => {
  switch (t.type) {
    case 0:
      return { ...e, toasts: [t.toast, ...e.toasts].slice(0, ks) };
    case 1:
      return { ...e, toasts: e.toasts.map((o) => o.id === t.toast.id ? { ...o, ...t.toast } : o) };
    case 2:
      let { toast: r } = t;
      return gr(e, { type: e.toasts.find((o) => o.id === r.id) ? 1 : 0, toast: r });
    case 3:
      let { toastId: s } = t;
      return { ...e, toasts: e.toasts.map((o) => o.id === s || s === void 0 ? { ...o, dismissed: !0, visible: !1 } : o) };
    case 4:
      return t.toastId === void 0 ? { ...e, toasts: [] } : { ...e, toasts: e.toasts.filter((o) => o.id !== t.toastId) };
    case 5:
      return { ...e, pausedAt: t.time };
    case 6:
      let n = t.time - (e.pausedAt || 0);
      return { ...e, pausedAt: void 0, toasts: e.toasts.map((o) => ({ ...o, pauseDuration: o.pauseDuration + n })) };
  }
}, Ds = [], st = { toasts: [], pausedAt: void 0 }, _t = (e) => {
  st = gr(st, e), Ds.forEach((t) => {
    t(st);
  });
}, js = (e, t = "blank", r) => ({ createdAt: Date.now(), visible: !0, dismissed: !1, type: t, ariaProps: { role: "status", "aria-live": "polite" }, message: e, pauseDuration: 0, ...r, id: (r == null ? void 0 : r.id) || Ls() }), ke = (e) => (t, r) => {
  let s = js(t, e, r);
  return _t({ type: 2, toast: s }), s.id;
}, z = (e, t) => ke("blank")(e, t);
z.error = ke("error");
z.success = ke("success");
z.loading = ke("loading");
z.custom = ke("custom");
z.dismiss = (e) => {
  _t({ type: 3, toastId: e });
};
z.remove = (e) => _t({ type: 4, toastId: e });
z.promise = (e, t, r) => {
  let s = z.loading(t.loading, { ...r, ...r == null ? void 0 : r.loading });
  return typeof e == "function" && (e = e()), e.then((n) => {
    let o = t.success ? St(t.success, n) : void 0;
    return o ? z.success(o, { id: s, ...r, ...r == null ? void 0 : r.success }) : z.dismiss(s), n;
  }).catch((n) => {
    let o = t.error ? St(t.error, n) : void 0;
    o ? z.error(o, { id: s, ...r, ...r == null ? void 0 : r.error }) : z.dismiss(s);
  }), e;
};
var Bs = ee`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`, Is = ee`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`, Ms = ee`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`, qs = fe("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Bs} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Is} 0.15s ease-out forwards;
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
    animation: ${Ms} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`, $s = ee`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, Hs = fe("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${$s} 1s linear infinite;
`, zs = ee`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`, Vs = ee`
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
}`, Js = fe("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${zs} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Vs} 0.2s ease-out forwards;
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
`, Qs = fe("div")`
  position: absolute;
`, Ks = fe("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`, Ws = ee`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`, Ys = fe("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Ws} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`, Xs = ({ toast: e }) => {
  let { icon: t, type: r, iconTheme: s } = e;
  return t !== void 0 ? typeof t == "string" ? O.createElement(Ys, null, t) : t : r === "blank" ? null : O.createElement(Ks, null, O.createElement(Hs, { ...s }), r !== "loading" && O.createElement(Qs, null, r === "error" ? O.createElement(qs, { ...s }) : O.createElement(Js, { ...s })));
}, Gs = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`, Zs = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`, en = "0%{opacity:0;} 100%{opacity:1;}", tn = "0%{opacity:1;} 100%{opacity:0;}", rn = fe("div")`
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
`, sn = fe("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`, nn = (e, t) => {
  let r = e.includes("top") ? 1 : -1, [s, n] = Us() ? [en, tn] : [Gs(r), Zs(r)];
  return { animation: t ? `${ee(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${ee(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)` };
};
O.memo(({ toast: e, position: t, style: r, children: s }) => {
  let n = e.height ? nn(e.position || t || "top-center", e.visible) : { opacity: 0 }, o = O.createElement(Xs, { toast: e }), i = O.createElement(sn, { ...e.ariaProps }, St(e.message, e));
  return O.createElement(rn, { className: e.className, style: { ...n, ...r, ...e.style } }, typeof s == "function" ? s({ icon: o, message: i }) : O.createElement(O.Fragment, null, o, i));
});
Ns(O.createElement);
We`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;
var on = z;
const an = ({
  queryKey: e,
  onProgress: t,
  showLoader: r = !0,
  showErrorToast: s = !0,
  callBack: n
}) => {
  const { start: o, complete: i } = mr({ color: "green", height: 2 }), a = Es({
    queryKey: e,
    retry: !1,
    queryFn: async () => {
      r && o();
      const u = await n();
      return u.status === 200 && console.log("response", u), u.data;
    }
  });
  return i(), a;
}, cn = ({
  queryKey: e,
  showLoader: t = !0,
  showErrorToast: r = !0,
  callBack: s,
  onSuccess: n
}) => {
  console.log("response", e);
  const { start: o, complete: i } = mr({ color: "green", height: 2 });
  return Rs({
    mutationKey: e,
    mutationFn: async (u) => {
      t && o();
      const l = await s(u);
      return t && i(), l.data;
    },
    onError: (u) => {
      t && i(), r && on.error(u.message), console.log("error", u);
    },
    onSuccess: (u) => {
      n && n(u), t && i(), console.log("data", u);
    }
  });
}, Jo = {
  query: an,
  mutate: cn
};
function wr(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: un } = Object.prototype, { getPrototypeOf: Nt } = Object, Ye = /* @__PURE__ */ ((e) => (t) => {
  const r = un.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), J = (e) => (e = e.toLowerCase(), (t) => Ye(t) === e), Xe = (e) => (t) => typeof t === e, { isArray: Te } = Array, Pe = Xe("undefined");
function ln(e) {
  return e !== null && !Pe(e) && e.constructor !== null && !Pe(e.constructor) && V(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Er = J("ArrayBuffer");
function fn(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Er(e.buffer), t;
}
const dn = Xe("string"), V = Xe("function"), Rr = Xe("number"), Ge = (e) => e !== null && typeof e == "object", hn = (e) => e === !0 || e === !1, qe = (e) => {
  if (Ye(e) !== "object")
    return !1;
  const t = Nt(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, pn = J("Date"), mn = J("File"), yn = J("Blob"), bn = J("FileList"), gn = (e) => Ge(e) && V(e.pipe), wn = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || V(e.append) && ((t = Ye(e)) === "formdata" || // detect form-data instance
  t === "object" && V(e.toString) && e.toString() === "[object FormData]"));
}, En = J("URLSearchParams"), [Rn, Sn, On, xn] = ["ReadableStream", "Request", "Response", "Headers"].map(J), vn = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function De(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let s, n;
  if (typeof e != "object" && (e = [e]), Te(e))
    for (s = 0, n = e.length; s < n; s++)
      t.call(null, e[s], s, e);
  else {
    const o = r ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let a;
    for (s = 0; s < i; s++)
      a = o[s], t.call(null, e[a], a, e);
  }
}
function Sr(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let s = r.length, n;
  for (; s-- > 0; )
    if (n = r[s], t === n.toLowerCase())
      return n;
  return null;
}
const de = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Or = (e) => !Pe(e) && e !== de;
function Ot() {
  const { caseless: e } = Or(this) && this || {}, t = {}, r = (s, n) => {
    const o = e && Sr(t, n) || n;
    qe(t[o]) && qe(s) ? t[o] = Ot(t[o], s) : qe(s) ? t[o] = Ot({}, s) : Te(s) ? t[o] = s.slice() : t[o] = s;
  };
  for (let s = 0, n = arguments.length; s < n; s++)
    arguments[s] && De(arguments[s], r);
  return t;
}
const Tn = (e, t, r, { allOwnKeys: s } = {}) => (De(t, (n, o) => {
  r && V(n) ? e[o] = wr(n, r) : e[o] = n;
}, { allOwnKeys: s }), e), Cn = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), An = (e, t, r, s) => {
  e.prototype = Object.create(t.prototype, s), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, Fn = (e, t, r, s) => {
  let n, o, i;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (n = Object.getOwnPropertyNames(e), o = n.length; o-- > 0; )
      i = n[o], (!s || s(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = r !== !1 && Nt(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, _n = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const s = e.indexOf(t, r);
  return s !== -1 && s === r;
}, Nn = (e) => {
  if (!e) return null;
  if (Te(e)) return e;
  let t = e.length;
  if (!Rr(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Pn = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Nt(Uint8Array)), Ln = (e, t) => {
  const s = (e && e[Symbol.iterator]).call(e);
  let n;
  for (; (n = s.next()) && !n.done; ) {
    const o = n.value;
    t.call(e, o[0], o[1]);
  }
}, Un = (e, t) => {
  let r;
  const s = [];
  for (; (r = e.exec(t)) !== null; )
    s.push(r);
  return s;
}, kn = J("HTMLFormElement"), Dn = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, s, n) {
    return s.toUpperCase() + n;
  }
), Jt = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), jn = J("RegExp"), xr = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), s = {};
  De(r, (n, o) => {
    let i;
    (i = t(n, o, e)) !== !1 && (s[o] = i || n);
  }), Object.defineProperties(e, s);
}, Bn = (e) => {
  xr(e, (t, r) => {
    if (V(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const s = e[r];
    if (V(s)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, In = (e, t) => {
  const r = {}, s = (n) => {
    n.forEach((o) => {
      r[o] = !0;
    });
  };
  return Te(e) ? s(e) : s(String(e).split(t)), r;
}, Mn = () => {
}, qn = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function $n(e) {
  return !!(e && V(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Hn = (e) => {
  const t = new Array(10), r = (s, n) => {
    if (Ge(s)) {
      if (t.indexOf(s) >= 0)
        return;
      if (!("toJSON" in s)) {
        t[n] = s;
        const o = Te(s) ? [] : {};
        return De(s, (i, a) => {
          const u = r(i, n + 1);
          !Pe(u) && (o[a] = u);
        }), t[n] = void 0, o;
      }
    }
    return s;
  };
  return r(e, 0);
}, zn = J("AsyncFunction"), Vn = (e) => e && (Ge(e) || V(e)) && V(e.then) && V(e.catch), vr = ((e, t) => e ? setImmediate : t ? ((r, s) => (de.addEventListener("message", ({ source: n, data: o }) => {
  n === de && o === r && s.length && s.shift()();
}, !1), (n) => {
  s.push(n), de.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  V(de.postMessage)
), Jn = typeof queueMicrotask < "u" ? queueMicrotask.bind(de) : typeof process < "u" && process.nextTick || vr, c = {
  isArray: Te,
  isArrayBuffer: Er,
  isBuffer: ln,
  isFormData: wn,
  isArrayBufferView: fn,
  isString: dn,
  isNumber: Rr,
  isBoolean: hn,
  isObject: Ge,
  isPlainObject: qe,
  isReadableStream: Rn,
  isRequest: Sn,
  isResponse: On,
  isHeaders: xn,
  isUndefined: Pe,
  isDate: pn,
  isFile: mn,
  isBlob: yn,
  isRegExp: jn,
  isFunction: V,
  isStream: gn,
  isURLSearchParams: En,
  isTypedArray: Pn,
  isFileList: bn,
  forEach: De,
  merge: Ot,
  extend: Tn,
  trim: vn,
  stripBOM: Cn,
  inherits: An,
  toFlatObject: Fn,
  kindOf: Ye,
  kindOfTest: J,
  endsWith: _n,
  toArray: Nn,
  forEachEntry: Ln,
  matchAll: Un,
  isHTMLForm: kn,
  hasOwnProperty: Jt,
  hasOwnProp: Jt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: xr,
  freezeMethods: Bn,
  toObjectSet: In,
  toCamelCase: Dn,
  noop: Mn,
  toFiniteNumber: qn,
  findKey: Sr,
  global: de,
  isContextDefined: Or,
  isSpecCompliantForm: $n,
  toJSONObject: Hn,
  isAsyncFn: zn,
  isThenable: Vn,
  setImmediate: vr,
  asap: Jn
};
function b(e, t, r, s, n) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), s && (this.request = s), n && (this.response = n, this.status = n.status ? n.status : null);
}
c.inherits(b, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: c.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Tr = b.prototype, Cr = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Cr[e] = { value: e };
});
Object.defineProperties(b, Cr);
Object.defineProperty(Tr, "isAxiosError", { value: !0 });
b.from = (e, t, r, s, n, o) => {
  const i = Object.create(Tr);
  return c.toFlatObject(e, i, function(u) {
    return u !== Error.prototype;
  }, (a) => a !== "isAxiosError"), b.call(i, e.message, t, r, s, n), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const Qn = null;
function xt(e) {
  return c.isPlainObject(e) || c.isArray(e);
}
function Ar(e) {
  return c.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Qt(e, t, r) {
  return e ? e.concat(t).map(function(n, o) {
    return n = Ar(n), !r && o ? "[" + n + "]" : n;
  }).join(r ? "." : "") : t;
}
function Kn(e) {
  return c.isArray(e) && !e.some(xt);
}
const Wn = c.toFlatObject(c, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Ze(e, t, r) {
  if (!c.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = c.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, p) {
    return !c.isUndefined(p[y]);
  });
  const s = r.metaTokens, n = r.visitor || f, o = r.dots, i = r.indexes, u = (r.Blob || typeof Blob < "u" && Blob) && c.isSpecCompliantForm(t);
  if (!c.isFunction(n))
    throw new TypeError("visitor must be a function");
  function l(m) {
    if (m === null) return "";
    if (c.isDate(m))
      return m.toISOString();
    if (!u && c.isBlob(m))
      throw new b("Blob is not supported. Use a Buffer instead.");
    return c.isArrayBuffer(m) || c.isTypedArray(m) ? u && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function f(m, y, p) {
    let R = m;
    if (m && !p && typeof m == "object") {
      if (c.endsWith(y, "{}"))
        y = s ? y : y.slice(0, -2), m = JSON.stringify(m);
      else if (c.isArray(m) && Kn(m) || (c.isFileList(m) || c.endsWith(y, "[]")) && (R = c.toArray(m)))
        return y = Ar(y), R.forEach(function(C, U) {
          !(c.isUndefined(C) || C === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Qt([y], U, o) : i === null ? y : y + "[]",
            l(C)
          );
        }), !1;
    }
    return xt(m) ? !0 : (t.append(Qt(p, y, o), l(m)), !1);
  }
  const h = [], g = Object.assign(Wn, {
    defaultVisitor: f,
    convertValue: l,
    isVisitable: xt
  });
  function w(m, y) {
    if (!c.isUndefined(m)) {
      if (h.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      h.push(m), c.forEach(m, function(R, x) {
        (!(c.isUndefined(R) || R === null) && n.call(
          t,
          R,
          c.isString(x) ? x.trim() : x,
          y,
          g
        )) === !0 && w(R, y ? y.concat(x) : [x]);
      }), h.pop();
    }
  }
  if (!c.isObject(e))
    throw new TypeError("data must be an object");
  return w(e), t;
}
function Kt(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(s) {
    return t[s];
  });
}
function Pt(e, t) {
  this._pairs = [], e && Ze(e, this, t);
}
const Fr = Pt.prototype;
Fr.append = function(t, r) {
  this._pairs.push([t, r]);
};
Fr.toString = function(t) {
  const r = t ? function(s) {
    return t.call(this, s, Kt);
  } : Kt;
  return this._pairs.map(function(n) {
    return r(n[0]) + "=" + r(n[1]);
  }, "").join("&");
};
function Yn(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function _r(e, t, r) {
  if (!t)
    return e;
  const s = r && r.encode || Yn;
  c.isFunction(r) && (r = {
    serialize: r
  });
  const n = r && r.serialize;
  let o;
  if (n ? o = n(t, r) : o = c.isURLSearchParams(t) ? t.toString() : new Pt(t, r).toString(s), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Wt {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, s) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: s ? s.synchronous : !1,
      runWhen: s ? s.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    c.forEach(this.handlers, function(s) {
      s !== null && t(s);
    });
  }
}
const Nr = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Xn = typeof URLSearchParams < "u" ? URLSearchParams : Pt, Gn = typeof FormData < "u" ? FormData : null, Zn = typeof Blob < "u" ? Blob : null, eo = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Xn,
    FormData: Gn,
    Blob: Zn
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Lt = typeof window < "u" && typeof document < "u", vt = typeof navigator == "object" && navigator || void 0, to = Lt && (!vt || ["ReactNative", "NativeScript", "NS"].indexOf(vt.product) < 0), ro = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", so = Lt && window.location.href || "http://localhost", no = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Lt,
  hasStandardBrowserEnv: to,
  hasStandardBrowserWebWorkerEnv: ro,
  navigator: vt,
  origin: so
}, Symbol.toStringTag, { value: "Module" })), j = {
  ...no,
  ...eo
};
function oo(e, t) {
  return Ze(e, new j.classes.URLSearchParams(), Object.assign({
    visitor: function(r, s, n, o) {
      return j.isNode && c.isBuffer(r) ? (this.append(s, r.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function io(e) {
  return c.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function ao(e) {
  const t = {}, r = Object.keys(e);
  let s;
  const n = r.length;
  let o;
  for (s = 0; s < n; s++)
    o = r[s], t[o] = e[o];
  return t;
}
function Pr(e) {
  function t(r, s, n, o) {
    let i = r[o++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i), u = o >= r.length;
    return i = !i && c.isArray(n) ? n.length : i, u ? (c.hasOwnProp(n, i) ? n[i] = [n[i], s] : n[i] = s, !a) : ((!n[i] || !c.isObject(n[i])) && (n[i] = []), t(r, s, n[i], o) && c.isArray(n[i]) && (n[i] = ao(n[i])), !a);
  }
  if (c.isFormData(e) && c.isFunction(e.entries)) {
    const r = {};
    return c.forEachEntry(e, (s, n) => {
      t(io(s), n, r, 0);
    }), r;
  }
  return null;
}
function co(e, t, r) {
  if (c.isString(e))
    try {
      return (t || JSON.parse)(e), c.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (r || JSON.stringify)(e);
}
const je = {
  transitional: Nr,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const s = r.getContentType() || "", n = s.indexOf("application/json") > -1, o = c.isObject(t);
    if (o && c.isHTMLForm(t) && (t = new FormData(t)), c.isFormData(t))
      return n ? JSON.stringify(Pr(t)) : t;
    if (c.isArrayBuffer(t) || c.isBuffer(t) || c.isStream(t) || c.isFile(t) || c.isBlob(t) || c.isReadableStream(t))
      return t;
    if (c.isArrayBufferView(t))
      return t.buffer;
    if (c.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (o) {
      if (s.indexOf("application/x-www-form-urlencoded") > -1)
        return oo(t, this.formSerializer).toString();
      if ((a = c.isFileList(t)) || s.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return Ze(
          a ? { "files[]": t } : t,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return o || n ? (r.setContentType("application/json", !1), co(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || je.transitional, s = r && r.forcedJSONParsing, n = this.responseType === "json";
    if (c.isResponse(t) || c.isReadableStream(t))
      return t;
    if (t && c.isString(t) && (s && !this.responseType || n)) {
      const i = !(r && r.silentJSONParsing) && n;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? b.from(a, b.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: j.classes.FormData,
    Blob: j.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
c.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  je.headers[e] = {};
});
const uo = c.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), lo = (e) => {
  const t = {};
  let r, s, n;
  return e && e.split(`
`).forEach(function(i) {
    n = i.indexOf(":"), r = i.substring(0, n).trim().toLowerCase(), s = i.substring(n + 1).trim(), !(!r || t[r] && uo[r]) && (r === "set-cookie" ? t[r] ? t[r].push(s) : t[r] = [s] : t[r] = t[r] ? t[r] + ", " + s : s);
  }), t;
}, Yt = Symbol("internals");
function Ae(e) {
  return e && String(e).trim().toLowerCase();
}
function $e(e) {
  return e === !1 || e == null ? e : c.isArray(e) ? e.map($e) : String(e);
}
function fo(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; s = r.exec(e); )
    t[s[1]] = s[2];
  return t;
}
const ho = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function nt(e, t, r, s, n) {
  if (c.isFunction(s))
    return s.call(this, t, r);
  if (n && (t = r), !!c.isString(t)) {
    if (c.isString(s))
      return t.indexOf(s) !== -1;
    if (c.isRegExp(s))
      return s.test(t);
  }
}
function po(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, s) => r.toUpperCase() + s);
}
function mo(e, t) {
  const r = c.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(e, s + r, {
      value: function(n, o, i) {
        return this[s].call(this, t, n, o, i);
      },
      configurable: !0
    });
  });
}
let $ = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, s) {
    const n = this;
    function o(a, u, l) {
      const f = Ae(u);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const h = c.findKey(n, f);
      (!h || n[h] === void 0 || l === !0 || l === void 0 && n[h] !== !1) && (n[h || u] = $e(a));
    }
    const i = (a, u) => c.forEach(a, (l, f) => o(l, f, u));
    if (c.isPlainObject(t) || t instanceof this.constructor)
      i(t, r);
    else if (c.isString(t) && (t = t.trim()) && !ho(t))
      i(lo(t), r);
    else if (c.isHeaders(t))
      for (const [a, u] of t.entries())
        o(u, a, s);
    else
      t != null && o(r, t, s);
    return this;
  }
  get(t, r) {
    if (t = Ae(t), t) {
      const s = c.findKey(this, t);
      if (s) {
        const n = this[s];
        if (!r)
          return n;
        if (r === !0)
          return fo(n);
        if (c.isFunction(r))
          return r.call(this, n, s);
        if (c.isRegExp(r))
          return r.exec(n);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Ae(t), t) {
      const s = c.findKey(this, t);
      return !!(s && this[s] !== void 0 && (!r || nt(this, this[s], s, r)));
    }
    return !1;
  }
  delete(t, r) {
    const s = this;
    let n = !1;
    function o(i) {
      if (i = Ae(i), i) {
        const a = c.findKey(s, i);
        a && (!r || nt(s, s[a], a, r)) && (delete s[a], n = !0);
      }
    }
    return c.isArray(t) ? t.forEach(o) : o(t), n;
  }
  clear(t) {
    const r = Object.keys(this);
    let s = r.length, n = !1;
    for (; s--; ) {
      const o = r[s];
      (!t || nt(this, this[o], o, t, !0)) && (delete this[o], n = !0);
    }
    return n;
  }
  normalize(t) {
    const r = this, s = {};
    return c.forEach(this, (n, o) => {
      const i = c.findKey(s, o);
      if (i) {
        r[i] = $e(n), delete r[o];
        return;
      }
      const a = t ? po(o) : String(o).trim();
      a !== o && delete r[o], r[a] = $e(n), s[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return c.forEach(this, (s, n) => {
      s != null && s !== !1 && (r[n] = t && c.isArray(s) ? s.join(", ") : s);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const s = new this(t);
    return r.forEach((n) => s.set(n)), s;
  }
  static accessor(t) {
    const s = (this[Yt] = this[Yt] = {
      accessors: {}
    }).accessors, n = this.prototype;
    function o(i) {
      const a = Ae(i);
      s[a] || (mo(n, i), s[a] = !0);
    }
    return c.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
$.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
c.reduceDescriptors($.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(s) {
      this[r] = s;
    }
  };
});
c.freezeMethods($);
function ot(e, t) {
  const r = this || je, s = t || r, n = $.from(s.headers);
  let o = s.data;
  return c.forEach(e, function(a) {
    o = a.call(r, o, n.normalize(), t ? t.status : void 0);
  }), n.normalize(), o;
}
function Lr(e) {
  return !!(e && e.__CANCEL__);
}
function Ce(e, t, r) {
  b.call(this, e ?? "canceled", b.ERR_CANCELED, t, r), this.name = "CanceledError";
}
c.inherits(Ce, b, {
  __CANCEL__: !0
});
function Ur(e, t, r) {
  const s = r.config.validateStatus;
  !r.status || !s || s(r.status) ? e(r) : t(new b(
    "Request failed with status code " + r.status,
    [b.ERR_BAD_REQUEST, b.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function yo(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function bo(e, t) {
  e = e || 10;
  const r = new Array(e), s = new Array(e);
  let n = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(u) {
    const l = Date.now(), f = s[o];
    i || (i = l), r[n] = u, s[n] = l;
    let h = o, g = 0;
    for (; h !== n; )
      g += r[h++], h = h % e;
    if (n = (n + 1) % e, n === o && (o = (o + 1) % e), l - i < t)
      return;
    const w = f && l - f;
    return w ? Math.round(g * 1e3 / w) : void 0;
  };
}
function go(e, t) {
  let r = 0, s = 1e3 / t, n, o;
  const i = (l, f = Date.now()) => {
    r = f, n = null, o && (clearTimeout(o), o = null), e.apply(null, l);
  };
  return [(...l) => {
    const f = Date.now(), h = f - r;
    h >= s ? i(l, f) : (n = l, o || (o = setTimeout(() => {
      o = null, i(n);
    }, s - h)));
  }, () => n && i(n)];
}
const Ve = (e, t, r = 3) => {
  let s = 0;
  const n = bo(50, 250);
  return go((o) => {
    const i = o.loaded, a = o.lengthComputable ? o.total : void 0, u = i - s, l = n(u), f = i <= a;
    s = i;
    const h = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: u,
      rate: l || void 0,
      estimated: l && a && f ? (a - i) / l : void 0,
      event: o,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    e(h);
  }, r);
}, Xt = (e, t) => {
  const r = e != null;
  return [(s) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: s
  }), t[1]];
}, Gt = (e) => (...t) => c.asap(() => e(...t)), wo = j.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, j.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(j.origin),
  j.navigator && /(msie|trident)/i.test(j.navigator.userAgent)
) : () => !0, Eo = j.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, s, n, o) {
      const i = [e + "=" + encodeURIComponent(t)];
      c.isNumber(r) && i.push("expires=" + new Date(r).toGMTString()), c.isString(s) && i.push("path=" + s), c.isString(n) && i.push("domain=" + n), o === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Ro(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function So(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function kr(e, t, r) {
  let s = !Ro(t);
  return e && (s || r == !1) ? So(e, t) : t;
}
const Zt = (e) => e instanceof $ ? { ...e } : e;
function ge(e, t) {
  t = t || {};
  const r = {};
  function s(l, f, h, g) {
    return c.isPlainObject(l) && c.isPlainObject(f) ? c.merge.call({ caseless: g }, l, f) : c.isPlainObject(f) ? c.merge({}, f) : c.isArray(f) ? f.slice() : f;
  }
  function n(l, f, h, g) {
    if (c.isUndefined(f)) {
      if (!c.isUndefined(l))
        return s(void 0, l, h, g);
    } else return s(l, f, h, g);
  }
  function o(l, f) {
    if (!c.isUndefined(f))
      return s(void 0, f);
  }
  function i(l, f) {
    if (c.isUndefined(f)) {
      if (!c.isUndefined(l))
        return s(void 0, l);
    } else return s(void 0, f);
  }
  function a(l, f, h) {
    if (h in t)
      return s(l, f);
    if (h in e)
      return s(void 0, l);
  }
  const u = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: a,
    headers: (l, f, h) => n(Zt(l), Zt(f), h, !0)
  };
  return c.forEach(Object.keys(Object.assign({}, e, t)), function(f) {
    const h = u[f] || n, g = h(e[f], t[f], f);
    c.isUndefined(g) && h !== a || (r[f] = g);
  }), r;
}
const Dr = (e) => {
  const t = ge({}, e);
  let { data: r, withXSRFToken: s, xsrfHeaderName: n, xsrfCookieName: o, headers: i, auth: a } = t;
  t.headers = i = $.from(i), t.url = _r(kr(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && i.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let u;
  if (c.isFormData(r)) {
    if (j.hasStandardBrowserEnv || j.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((u = i.getContentType()) !== !1) {
      const [l, ...f] = u ? u.split(";").map((h) => h.trim()).filter(Boolean) : [];
      i.setContentType([l || "multipart/form-data", ...f].join("; "));
    }
  }
  if (j.hasStandardBrowserEnv && (s && c.isFunction(s) && (s = s(t)), s || s !== !1 && wo(t.url))) {
    const l = n && o && Eo.read(o);
    l && i.set(n, l);
  }
  return t;
}, Oo = typeof XMLHttpRequest < "u", xo = Oo && function(e) {
  return new Promise(function(r, s) {
    const n = Dr(e);
    let o = n.data;
    const i = $.from(n.headers).normalize();
    let { responseType: a, onUploadProgress: u, onDownloadProgress: l } = n, f, h, g, w, m;
    function y() {
      w && w(), m && m(), n.cancelToken && n.cancelToken.unsubscribe(f), n.signal && n.signal.removeEventListener("abort", f);
    }
    let p = new XMLHttpRequest();
    p.open(n.method.toUpperCase(), n.url, !0), p.timeout = n.timeout;
    function R() {
      if (!p)
        return;
      const C = $.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), P = {
        data: !a || a === "text" || a === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: C,
        config: e,
        request: p
      };
      Ur(function(Q) {
        r(Q), y();
      }, function(Q) {
        s(Q), y();
      }, P), p = null;
    }
    "onloadend" in p ? p.onloadend = R : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(R);
    }, p.onabort = function() {
      p && (s(new b("Request aborted", b.ECONNABORTED, e, p)), p = null);
    }, p.onerror = function() {
      s(new b("Network Error", b.ERR_NETWORK, e, p)), p = null;
    }, p.ontimeout = function() {
      let U = n.timeout ? "timeout of " + n.timeout + "ms exceeded" : "timeout exceeded";
      const P = n.transitional || Nr;
      n.timeoutErrorMessage && (U = n.timeoutErrorMessage), s(new b(
        U,
        P.clarifyTimeoutError ? b.ETIMEDOUT : b.ECONNABORTED,
        e,
        p
      )), p = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in p && c.forEach(i.toJSON(), function(U, P) {
      p.setRequestHeader(P, U);
    }), c.isUndefined(n.withCredentials) || (p.withCredentials = !!n.withCredentials), a && a !== "json" && (p.responseType = n.responseType), l && ([g, m] = Ve(l, !0), p.addEventListener("progress", g)), u && p.upload && ([h, w] = Ve(u), p.upload.addEventListener("progress", h), p.upload.addEventListener("loadend", w)), (n.cancelToken || n.signal) && (f = (C) => {
      p && (s(!C || C.type ? new Ce(null, e, p) : C), p.abort(), p = null);
    }, n.cancelToken && n.cancelToken.subscribe(f), n.signal && (n.signal.aborted ? f() : n.signal.addEventListener("abort", f)));
    const x = yo(n.url);
    if (x && j.protocols.indexOf(x) === -1) {
      s(new b("Unsupported protocol " + x + ":", b.ERR_BAD_REQUEST, e));
      return;
    }
    p.send(o || null);
  });
}, vo = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let s = new AbortController(), n;
    const o = function(l) {
      if (!n) {
        n = !0, a();
        const f = l instanceof Error ? l : this.reason;
        s.abort(f instanceof b ? f : new Ce(f instanceof Error ? f.message : f));
      }
    };
    let i = t && setTimeout(() => {
      i = null, o(new b(`timeout ${t} of ms exceeded`, b.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((l) => {
        l.unsubscribe ? l.unsubscribe(o) : l.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((l) => l.addEventListener("abort", o));
    const { signal: u } = s;
    return u.unsubscribe = () => c.asap(a), u;
  }
}, To = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let s = 0, n;
  for (; s < r; )
    n = s + t, yield e.slice(s, n), s = n;
}, Co = async function* (e, t) {
  for await (const r of Ao(e))
    yield* To(r, t);
}, Ao = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: r, value: s } = await t.read();
      if (r)
        break;
      yield s;
    }
  } finally {
    await t.cancel();
  }
}, er = (e, t, r, s) => {
  const n = Co(e, t);
  let o = 0, i, a = (u) => {
    i || (i = !0, s && s(u));
  };
  return new ReadableStream({
    async pull(u) {
      try {
        const { done: l, value: f } = await n.next();
        if (l) {
          a(), u.close();
          return;
        }
        let h = f.byteLength;
        if (r) {
          let g = o += h;
          r(g);
        }
        u.enqueue(new Uint8Array(f));
      } catch (l) {
        throw a(l), l;
      }
    },
    cancel(u) {
      return a(u), n.return();
    }
  }, {
    highWaterMark: 2
  });
}, et = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", jr = et && typeof ReadableStream == "function", Fo = et && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Br = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, _o = jr && Br(() => {
  let e = !1;
  const t = new Request(j.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), tr = 64 * 1024, Tt = jr && Br(() => c.isReadableStream(new Response("").body)), Je = {
  stream: Tt && ((e) => e.body)
};
et && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Je[t] && (Je[t] = c.isFunction(e[t]) ? (r) => r[t]() : (r, s) => {
      throw new b(`Response type '${t}' is not supported`, b.ERR_NOT_SUPPORT, s);
    });
  });
})(new Response());
const No = async (e) => {
  if (e == null)
    return 0;
  if (c.isBlob(e))
    return e.size;
  if (c.isSpecCompliantForm(e))
    return (await new Request(j.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (c.isArrayBufferView(e) || c.isArrayBuffer(e))
    return e.byteLength;
  if (c.isURLSearchParams(e) && (e = e + ""), c.isString(e))
    return (await Fo(e)).byteLength;
}, Po = async (e, t) => {
  const r = c.toFiniteNumber(e.getContentLength());
  return r ?? No(t);
}, Lo = et && (async (e) => {
  let {
    url: t,
    method: r,
    data: s,
    signal: n,
    cancelToken: o,
    timeout: i,
    onDownloadProgress: a,
    onUploadProgress: u,
    responseType: l,
    headers: f,
    withCredentials: h = "same-origin",
    fetchOptions: g
  } = Dr(e);
  l = l ? (l + "").toLowerCase() : "text";
  let w = vo([n, o && o.toAbortSignal()], i), m;
  const y = w && w.unsubscribe && (() => {
    w.unsubscribe();
  });
  let p;
  try {
    if (u && _o && r !== "get" && r !== "head" && (p = await Po(f, s)) !== 0) {
      let P = new Request(t, {
        method: "POST",
        body: s,
        duplex: "half"
      }), H;
      if (c.isFormData(s) && (H = P.headers.get("content-type")) && f.setContentType(H), P.body) {
        const [Q, N] = Xt(
          p,
          Ve(Gt(u))
        );
        s = er(P.body, tr, Q, N);
      }
    }
    c.isString(h) || (h = h ? "include" : "omit");
    const R = "credentials" in Request.prototype;
    m = new Request(t, {
      ...g,
      signal: w,
      method: r.toUpperCase(),
      headers: f.normalize().toJSON(),
      body: s,
      duplex: "half",
      credentials: R ? h : void 0
    });
    let x = await fetch(m);
    const C = Tt && (l === "stream" || l === "response");
    if (Tt && (a || C && y)) {
      const P = {};
      ["status", "statusText", "headers"].forEach((K) => {
        P[K] = x[K];
      });
      const H = c.toFiniteNumber(x.headers.get("content-length")), [Q, N] = a && Xt(
        H,
        Ve(Gt(a), !0)
      ) || [];
      x = new Response(
        er(x.body, tr, Q, () => {
          N && N(), y && y();
        }),
        P
      );
    }
    l = l || "text";
    let U = await Je[c.findKey(Je, l) || "text"](x, e);
    return !C && y && y(), await new Promise((P, H) => {
      Ur(P, H, {
        data: U,
        headers: $.from(x.headers),
        status: x.status,
        statusText: x.statusText,
        config: e,
        request: m
      });
    });
  } catch (R) {
    throw y && y(), R && R.name === "TypeError" && /fetch/i.test(R.message) ? Object.assign(
      new b("Network Error", b.ERR_NETWORK, e, m),
      {
        cause: R.cause || R
      }
    ) : b.from(R, R && R.code, e, m);
  }
}), Ct = {
  http: Qn,
  xhr: xo,
  fetch: Lo
};
c.forEach(Ct, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const rr = (e) => `- ${e}`, Uo = (e) => c.isFunction(e) || e === null || e === !1, Ir = {
  getAdapter: (e) => {
    e = c.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, s;
    const n = {};
    for (let o = 0; o < t; o++) {
      r = e[o];
      let i;
      if (s = r, !Uo(r) && (s = Ct[(i = String(r)).toLowerCase()], s === void 0))
        throw new b(`Unknown adapter '${i}'`);
      if (s)
        break;
      n[i || "#" + o] = s;
    }
    if (!s) {
      const o = Object.entries(n).map(
        ([a, u]) => `adapter ${a} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(rr).join(`
`) : " " + rr(o[0]) : "as no adapter specified";
      throw new b(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return s;
  },
  adapters: Ct
};
function it(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ce(null, e);
}
function sr(e) {
  return it(e), e.headers = $.from(e.headers), e.data = ot.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Ir.getAdapter(e.adapter || je.adapter)(e).then(function(s) {
    return it(e), s.data = ot.call(
      e,
      e.transformResponse,
      s
    ), s.headers = $.from(s.headers), s;
  }, function(s) {
    return Lr(s) || (it(e), s && s.response && (s.response.data = ot.call(
      e,
      e.transformResponse,
      s.response
    ), s.response.headers = $.from(s.response.headers))), Promise.reject(s);
  });
}
const Mr = "1.8.4", tt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  tt[e] = function(s) {
    return typeof s === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const nr = {};
tt.transitional = function(t, r, s) {
  function n(o, i) {
    return "[Axios v" + Mr + "] Transitional option '" + o + "'" + i + (s ? ". " + s : "");
  }
  return (o, i, a) => {
    if (t === !1)
      throw new b(
        n(i, " has been removed" + (r ? " in " + r : "")),
        b.ERR_DEPRECATED
      );
    return r && !nr[i] && (nr[i] = !0, console.warn(
      n(
        i,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(o, i, a) : !0;
  };
};
tt.spelling = function(t) {
  return (r, s) => (console.warn(`${s} is likely a misspelling of ${t}`), !0);
};
function ko(e, t, r) {
  if (typeof e != "object")
    throw new b("options must be an object", b.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(e);
  let n = s.length;
  for (; n-- > 0; ) {
    const o = s[n], i = t[o];
    if (i) {
      const a = e[o], u = a === void 0 || i(a, o, e);
      if (u !== !0)
        throw new b("option " + o + " must be " + u, b.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new b("Unknown option " + o, b.ERR_BAD_OPTION);
  }
}
const He = {
  assertOptions: ko,
  validators: tt
}, W = He.validators;
let be = class {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Wt(),
      response: new Wt()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (s) {
      if (s instanceof Error) {
        let n = {};
        Error.captureStackTrace ? Error.captureStackTrace(n) : n = new Error();
        const o = n.stack ? n.stack.replace(/^.+\n/, "") : "";
        try {
          s.stack ? o && !String(s.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (s.stack += `
` + o) : s.stack = o;
        } catch {
        }
      }
      throw s;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = ge(this.defaults, r);
    const { transitional: s, paramsSerializer: n, headers: o } = r;
    s !== void 0 && He.assertOptions(s, {
      silentJSONParsing: W.transitional(W.boolean),
      forcedJSONParsing: W.transitional(W.boolean),
      clarifyTimeoutError: W.transitional(W.boolean)
    }, !1), n != null && (c.isFunction(n) ? r.paramsSerializer = {
      serialize: n
    } : He.assertOptions(n, {
      encode: W.function,
      serialize: W.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), He.assertOptions(r, {
      baseUrl: W.spelling("baseURL"),
      withXsrfToken: W.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let i = o && c.merge(
      o.common,
      o[r.method]
    );
    o && c.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete o[m];
      }
    ), r.headers = $.concat(i, o);
    const a = [];
    let u = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(r) === !1 || (u = u && y.synchronous, a.unshift(y.fulfilled, y.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(y) {
      l.push(y.fulfilled, y.rejected);
    });
    let f, h = 0, g;
    if (!u) {
      const m = [sr.bind(this), void 0];
      for (m.unshift.apply(m, a), m.push.apply(m, l), g = m.length, f = Promise.resolve(r); h < g; )
        f = f.then(m[h++], m[h++]);
      return f;
    }
    g = a.length;
    let w = r;
    for (h = 0; h < g; ) {
      const m = a[h++], y = a[h++];
      try {
        w = m(w);
      } catch (p) {
        y.call(this, p);
        break;
      }
    }
    try {
      f = sr.call(this, w);
    } catch (m) {
      return Promise.reject(m);
    }
    for (h = 0, g = l.length; h < g; )
      f = f.then(l[h++], l[h++]);
    return f;
  }
  getUri(t) {
    t = ge(this.defaults, t);
    const r = kr(t.baseURL, t.url, t.allowAbsoluteUrls);
    return _r(r, t.params, t.paramsSerializer);
  }
};
c.forEach(["delete", "get", "head", "options"], function(t) {
  be.prototype[t] = function(r, s) {
    return this.request(ge(s || {}, {
      method: t,
      url: r,
      data: (s || {}).data
    }));
  };
});
c.forEach(["post", "put", "patch"], function(t) {
  function r(s) {
    return function(o, i, a) {
      return this.request(ge(a || {}, {
        method: t,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  be.prototype[t] = r(), be.prototype[t + "Form"] = r(!0);
});
let Do = class qr {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(o) {
      r = o;
    });
    const s = this;
    this.promise.then((n) => {
      if (!s._listeners) return;
      let o = s._listeners.length;
      for (; o-- > 0; )
        s._listeners[o](n);
      s._listeners = null;
    }), this.promise.then = (n) => {
      let o;
      const i = new Promise((a) => {
        s.subscribe(a), o = a;
      }).then(n);
      return i.cancel = function() {
        s.unsubscribe(o);
      }, i;
    }, t(function(o, i, a) {
      s.reason || (s.reason = new Ce(o, i, a), r(s.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), r = (s) => {
      t.abort(s);
    };
    return this.subscribe(r), t.signal.unsubscribe = () => this.unsubscribe(r), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new qr(function(n) {
        t = n;
      }),
      cancel: t
    };
  }
};
function jo(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Bo(e) {
  return c.isObject(e) && e.isAxiosError === !0;
}
const At = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(At).forEach(([e, t]) => {
  At[t] = e;
});
function $r(e) {
  const t = new be(e), r = wr(be.prototype.request, t);
  return c.extend(r, be.prototype, t, { allOwnKeys: !0 }), c.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(n) {
    return $r(ge(e, n));
  }, r;
}
const _ = $r(je);
_.Axios = be;
_.CanceledError = Ce;
_.CancelToken = Do;
_.isCancel = Lr;
_.VERSION = Mr;
_.toFormData = Ze;
_.AxiosError = b;
_.Cancel = _.CanceledError;
_.all = function(t) {
  return Promise.all(t);
};
_.spread = jo;
_.isAxiosError = Bo;
_.mergeConfig = ge;
_.AxiosHeaders = $;
_.formToJSON = (e) => Pr(c.isHTMLForm(e) ? new FormData(e) : e);
_.getAdapter = Ir.getAdapter;
_.HttpStatusCode = At;
_.default = _;
const {
  Axios: Wo,
  AxiosError: Yo,
  CanceledError: Xo,
  isCancel: Go,
  CancelToken: Zo,
  VERSION: ei,
  all: ti,
  Cancel: ri,
  isAxiosError: si,
  spread: ni,
  toFormData: oi,
  AxiosHeaders: ii,
  HttpStatusCode: ai,
  formToJSON: ci,
  getAdapter: ui,
  mergeConfig: li
} = _, Io = async ({
  url: e,
  method: t,
  headers: r,
  body: s,
  onProgress: n
}) => {
  const o = await _({
    url: `${qo.VITE_BASE_URL}/${e}`,
    method: t,
    headers: r,
    data: s,
    responseType: "stream",
    onDownloadProgress: (a) => {
      const u = a.loaded / a.bytes * 100;
      n && n(u);
    }
  });
  var i = o.data;
  return i && (i = JSON.parse(i)), { ...o, data: i };
}, fi = {
  run: Io
}, Mo = { VITE_BASE_URL: "https://staging.instanvi.com", VITE_MAP_BOX_KEY: "pk.eyJ1IjoiYW1haG51aTI0IiwiYSI6ImNtOWlicHZ3ODAwaDQyanNiM2l4eXp5emUifQ.Y6iIWMc-pwARbs7nbhnHGQ" }, or = Mo, qo = {
  VITE_BASE_URL: or.VITE_BASE_URL,
  VITE_MAP_BOX_KEY: or.VITE_MAP_BOX_KEY
}, di = {
  dashboard: "dashboard",
  home: "home",
  audience_home: "audience",
  add_audience: "audience/groups/new",
  edit_audience: "audience/groups/edit",
  surveys_home: "surveys",
  add_survey: "surveys/new",
  edit_survey: "surveys/edit",
  survey_templates: "surveys/templates"
};
export {
  qo as AppConfig,
  di as RouteNames,
  fi as http,
  cn as mutate,
  an as query,
  Io as run,
  Jo as useApi,
  Vo as useDebounce
};
