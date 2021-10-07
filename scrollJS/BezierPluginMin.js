/*!
 * VERSION: 1.3.8
 * DATE: 2018-02-15
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";
  var a = 180 / Math.PI,
    b = [],
    c = [],
    d = [],
    e = {},
    f = _gsScope._gsDefine.globals,
    g = function (a, b, c, d) {
      c === d && (c = d - (d - b) / 1e6), a === b && (b = a + (c - a) / 1e6), (this.a = a), (this.b = b), (this.c = c), (this.d = d), (this.da = d - a), (this.ca = c - a), (this.ba = b - a);
    },
    h = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
    i = function (a, b, c, d) {
      var e = { a: a },
        f = {},
        g = {},
        h = { c: d },
        i = (a + b) / 2,
        j = (b + c) / 2,
        k = (c + d) / 2,
        l = (i + j) / 2,
        m = (j + k) / 2,
        n = (m - l) / 8;
      return (e.b = i + (a - i) / 4), (f.b = l + n), (e.c = f.a = (e.b + f.b) / 2), (f.c = g.a = (l + m) / 2), (g.b = m - n), (h.b = k + (d - k) / 4), (g.c = h.a = (g.b + h.b) / 2), [e, f, g, h];
    },
    j = function (a, e, f, g, h) {
      var j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u,
        v,
        w = a.length - 1,
        x = 0,
        y = a[0].a;
      for (j = 0; w > j; j++) (n = a[x]), (k = n.a), (l = n.d), (m = a[x + 1].d), h ? ((t = b[j]), (u = c[j]), (v = ((u + t) * e * 0.25) / (g ? 0.5 : d[j] || 0.5)), (o = l - (l - k) * (g ? 0.5 * e : 0 !== t ? v / t : 0)), (p = l + (m - l) * (g ? 0.5 * e : 0 !== u ? v / u : 0)), (q = l - (o + (((p - o) * ((3 * t) / (t + u) + 0.5)) / 4 || 0)))) : ((o = l - (l - k) * e * 0.5), (p = l + (m - l) * e * 0.5), (q = l - (o + p) / 2)), (o += q), (p += q), (n.c = r = o), 0 !== j ? (n.b = y) : (n.b = y = n.a + 0.6 * (n.c - n.a)), (n.da = l - k), (n.ca = r - k), (n.ba = y - k), f ? ((s = i(k, y, r, l)), a.splice(x, 1, s[0], s[1], s[2], s[3]), (x += 4)) : x++, (y = p);
      (n = a[x]), (n.b = y), (n.c = y + 0.4 * (n.d - y)), (n.da = n.d - n.a), (n.ca = n.c - n.a), (n.ba = y - n.a), f && ((s = i(n.a, y, n.c, n.d)), a.splice(x, 1, s[0], s[1], s[2], s[3]));
    },
    k = function (a, d, e, f) {
      var h,
        i,
        j,
        k,
        l,
        m,
        n = [];
      if (f) for (a = [f].concat(a), i = a.length; --i > -1; ) "string" == typeof (m = a[i][d]) && "=" === m.charAt(1) && (a[i][d] = f[d] + Number(m.charAt(0) + m.substr(2)));
      if (((h = a.length - 2), 0 > h)) return (n[0] = new g(a[0][d], 0, 0, a[0][d])), n;
      for (i = 0; h > i; i++) (j = a[i][d]), (k = a[i + 1][d]), (n[i] = new g(j, 0, 0, k)), e && ((l = a[i + 2][d]), (b[i] = (b[i] || 0) + (k - j) * (k - j)), (c[i] = (c[i] || 0) + (l - k) * (l - k)));
      return (n[i] = new g(a[i][d], 0, 0, a[i + 1][d])), n;
    },
    l = function (a, f, g, i, l, m) {
      var n,
        o,
        p,
        q,
        r,
        s,
        t,
        u,
        v = {},
        w = [],
        x = m || a[0];
      (l = "string" == typeof l ? "," + l + "," : h), null == f && (f = 1);
      for (o in a[0]) w.push(o);
      if (a.length > 1) {
        for (u = a[a.length - 1], t = !0, n = w.length; --n > -1; )
          if (((o = w[n]), Math.abs(x[o] - u[o]) > 0.05)) {
            t = !1;
            break;
          }
        t && ((a = a.concat()), m && a.unshift(m), a.push(a[1]), (m = a[a.length - 3]));
      }
      for (b.length = c.length = d.length = 0, n = w.length; --n > -1; ) (o = w[n]), (e[o] = -1 !== l.indexOf("," + o + ",")), (v[o] = k(a, o, e[o], m));
      for (n = b.length; --n > -1; ) (b[n] = Math.sqrt(b[n])), (c[n] = Math.sqrt(c[n]));
      if (!i) {
        for (n = w.length; --n > -1; ) if (e[o]) for (p = v[w[n]], s = p.length - 1, q = 0; s > q; q++) (r = p[q + 1].da / c[q] + p[q].da / b[q] || 0), (d[q] = (d[q] || 0) + r * r);
        for (n = d.length; --n > -1; ) d[n] = Math.sqrt(d[n]);
      }
      for (n = w.length, q = g ? 4 : 1; --n > -1; ) (o = w[n]), (p = v[o]), j(p, f, g, i, e[o]), t && (p.splice(0, q), p.splice(p.length - q, q));
      return v;
    },
    m = function (a, b, c) {
      b = b || "soft";
      var d,
        e,
        f,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p = {},
        q = "cubic" === b ? 3 : 2,
        r = "soft" === b,
        s = [];
      if ((r && c && (a = [c].concat(a)), null == a || a.length < q + 1)) throw "invalid Bezier data";
      for (m in a[0]) s.push(m);
      for (j = s.length; --j > -1; ) {
        for (m = s[j], p[m] = i = [], n = 0, l = a.length, k = 0; l > k; k++) (d = null == c ? a[k][m] : "string" == typeof (o = a[k][m]) && "=" === o.charAt(1) ? c[m] + Number(o.charAt(0) + o.substr(2)) : Number(o)), r && k > 1 && l - 1 > k && (i[n++] = (d + i[n - 2]) / 2), (i[n++] = d);
        for (l = n - q + 1, n = 0, k = 0; l > k; k += q) (d = i[k]), (e = i[k + 1]), (f = i[k + 2]), (h = 2 === q ? 0 : i[k + 3]), (i[n++] = o = 3 === q ? new g(d, e, f, h) : new g(d, (2 * e + d) / 3, (2 * e + f) / 3, f));
        i.length = n;
      }
      return p;
    },
    n = function (a, b, c) {
      for (var d, e, f, g, h, i, j, k, l, m, n, o = 1 / c, p = a.length; --p > -1; ) for (m = a[p], f = m.a, g = m.d - f, h = m.c - f, i = m.b - f, d = e = 0, k = 1; c >= k; k++) (j = o * k), (l = 1 - j), (d = e - (e = (j * j * g + 3 * l * (j * h + l * i)) * j)), (n = p * c + k - 1), (b[n] = (b[n] || 0) + d * d);
    },
    o = function (a, b) {
      b = b >> 0 || 6;
      var c,
        d,
        e,
        f,
        g = [],
        h = [],
        i = 0,
        j = 0,
        k = b - 1,
        l = [],
        m = [];
      for (c in a) n(a[c], g, b);
      for (e = g.length, d = 0; e > d; d++) (i += Math.sqrt(g[d])), (f = d % b), (m[f] = i), f === k && ((j += i), (f = (d / b) >> 0), (l[f] = m), (h[f] = j), (i = 0), (m = []));
      return { length: j, lengths: h, segments: l };
    },
    p = _gsScope._gsDefine.plugin({
      propName: "bezier",
      priority: -1,
      version: "1.3.8",
      API: 2,
      global: !0,
      init: function (a, b, c) {
        (this._target = a), b instanceof Array && (b = { values: b }), (this._func = {}), (this._mod = {}), (this._props = []), (this._timeRes = null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10));
        var d,
          e,
          f,
          g,
          h,
          i = b.values || [],
          j = {},
          k = i[0],
          n = b.autoRotate || c.vars.orientToBezier;
        this._autoRotate = n ? (n instanceof Array ? n : [["x", "y", "rotation", n === !0 ? 0 : Number(n) || 0]]) : null;
        for (d in k) this._props.push(d);
        for (f = this._props.length; --f > -1; ) (d = this._props[f]), this._overwriteProps.push(d), (e = this._func[d] = "function" == typeof a[d]), (j[d] = e ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)]() : parseFloat(a[d])), h || (j[d] !== i[0][d] && (h = j));
        if (((this._beziers = "cubic" !== b.type && "quadratic" !== b.type && "soft" !== b.type ? l(i, isNaN(b.curviness) ? 1 : b.curviness, !1, "thruBasic" === b.type, b.correlate, h) : m(i, b.type, j)), (this._segCount = this._beziers[d].length), this._timeRes)) {
          var p = o(this._beziers, this._timeRes);
          (this._length = p.length), (this._lengths = p.lengths), (this._segments = p.segments), (this._l1 = this._li = this._s1 = this._si = 0), (this._l2 = this._lengths[0]), (this._curSeg = this._segments[0]), (this._s2 = this._curSeg[0]), (this._prec = 1 / this._curSeg.length);
        }
        if ((n = this._autoRotate))
          for (this._initialRotations = [], n[0] instanceof Array || (this._autoRotate = n = [n]), f = n.length; --f > -1; ) {
            for (g = 0; 3 > g; g++) (d = n[f][g]), (this._func[d] = "function" == typeof a[d] ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)] : !1);
            (d = n[f][2]), (this._initialRotations[f] = (this._func[d] ? this._func[d].call(this._target) : this._target[d]) || 0), this._overwriteProps.push(d);
          }
        return (this._startRatio = c.vars.runBackwards ? 1 : 0), !0;
      },
      set: function (b) {
        var c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m = this._segCount,
          n = this._func,
          o = this._target,
          p = b !== this._startRatio;
        if (this._timeRes) {
          if (((k = this._lengths), (l = this._curSeg), (b *= this._length), (e = this._li), b > this._l2 && m - 1 > e)) {
            for (j = m - 1; j > e && (this._l2 = k[++e]) <= b; );
            (this._l1 = k[e - 1]), (this._li = e), (this._curSeg = l = this._segments[e]), (this._s2 = l[(this._s1 = this._si = 0)]);
          } else if (b < this._l1 && e > 0) {
            for (; e > 0 && (this._l1 = k[--e]) >= b; );
            0 === e && b < this._l1 ? (this._l1 = 0) : e++, (this._l2 = k[e]), (this._li = e), (this._curSeg = l = this._segments[e]), (this._s1 = l[(this._si = l.length - 1) - 1] || 0), (this._s2 = l[this._si]);
          }
          if (((c = e), (b -= this._l1), (e = this._si), b > this._s2 && e < l.length - 1)) {
            for (j = l.length - 1; j > e && (this._s2 = l[++e]) <= b; );
            (this._s1 = l[e - 1]), (this._si = e);
          } else if (b < this._s1 && e > 0) {
            for (; e > 0 && (this._s1 = l[--e]) >= b; );
            0 === e && b < this._s1 ? (this._s1 = 0) : e++, (this._s2 = l[e]), (this._si = e);
          }
          h = (e + (b - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
        } else (c = 0 > b ? 0 : b >= 1 ? m - 1 : (m * b) >> 0), (h = (b - c * (1 / m)) * m);
        for (d = 1 - h, e = this._props.length; --e > -1; ) (f = this._props[e]), (g = this._beziers[f][c]), (i = (h * h * g.da + 3 * d * (h * g.ca + d * g.ba)) * h + g.a), this._mod[f] && (i = this._mod[f](i, o)), n[f] ? o[f](i) : (o[f] = i);
        if (this._autoRotate) {
          var q,
            r,
            s,
            t,
            u,
            v,
            w,
            x = this._autoRotate;
          for (e = x.length; --e > -1; ) (f = x[e][2]), (v = x[e][3] || 0), (w = x[e][4] === !0 ? 1 : a), (g = this._beziers[x[e][0]]), (q = this._beziers[x[e][1]]), g && q && ((g = g[c]), (q = q[c]), (r = g.a + (g.b - g.a) * h), (t = g.b + (g.c - g.b) * h), (r += (t - r) * h), (t += (g.c + (g.d - g.c) * h - t) * h), (s = q.a + (q.b - q.a) * h), (u = q.b + (q.c - q.b) * h), (s += (u - s) * h), (u += (q.c + (q.d - q.c) * h - u) * h), (i = p ? Math.atan2(u - s, t - r) * w + v : this._initialRotations[e]), this._mod[f] && (i = this._mod[f](i, o)), n[f] ? o[f](i) : (o[f] = i));
        }
      },
    }),
    q = p.prototype;
  (p.bezierThrough = l),
    (p.cubicToQuadratic = i),
    (p._autoCSS = !0),
    (p.quadraticToCubic = function (a, b, c) {
      return new g(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
    }),
    (p._cssRegister = function () {
      var a = f.CSSPlugin;
      if (a) {
        var b = a._internals,
          c = b._parseToProxy,
          d = b._setPluginRatio,
          e = b.CSSPropTween;
        b._registerComplexSpecialProp("bezier", {
          parser: function (a, b, f, g, h, i) {
            b instanceof Array && (b = { values: b }), (i = new p());
            var j,
              k,
              l,
              m = b.values,
              n = m.length - 1,
              o = [],
              q = {};
            if (0 > n) return h;
            for (j = 0; n >= j; j++) (l = c(a, m[j], g, h, i, n !== j)), (o[j] = l.end);
            for (k in b) q[k] = b[k];
            return (q.values = o), (h = new e(a, "bezier", 0, 0, l.pt, 2)), (h.data = l), (h.plugin = i), (h.setRatio = d), 0 === q.autoRotate && (q.autoRotate = !0), !q.autoRotate || q.autoRotate instanceof Array || ((j = q.autoRotate === !0 ? 0 : Number(q.autoRotate)), (q.autoRotate = null != l.end.left ? [["left", "top", "rotation", j, !1]] : null != l.end.x ? [["x", "y", "rotation", j, !1]] : !1)), q.autoRotate && (g._transform || g._enableTransforms(!1), (l.autoRotate = g._target._gsTransform), (l.proxy.rotation = l.autoRotate.rotation || 0), g._overwriteProps.push("rotation")), i._onInitTween(l.proxy, q, g._tween), h;
          },
        });
      }
    }),
    (q._mod = function (a) {
      for (var b, c = this._overwriteProps, d = c.length; --d > -1; ) (b = a[c[d]]), b && "function" == typeof b && (this._mod[c[d]] = b);
    }),
    (q._kill = function (a) {
      var b,
        c,
        d = this._props;
      for (b in this._beziers) if (b in a) for (delete this._beziers[b], delete this._func[b], c = d.length; --c > -1; ) d[c] === b && d.splice(c, 1);
      if ((d = this._autoRotate)) for (c = d.length; --c > -1; ) a[d[c][2]] && d.splice(c, 1);
      return this._super._kill.call(this, a);
    });
}),
  _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
  (function (a) {
    "use strict";
    var b = function () {
      return (_gsScope.GreenSockGlobals || _gsScope)[a];
    };
    "undefined" != typeof module && module.exports ? (require("../TweenLite.min.js"), (module.exports = b())) : "function" == typeof define && define.amd && define(["TweenLite"], b);
  })("BezierPlugin");
