/*!
 * VERSION: 2.1.2
 * DATE: 2019-03-01
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";
  _gsScope._gsDefine(
    "TimelineLite",
    ["core.Animation", "core.SimpleTimeline", "TweenLite"],
    function (a, b, c) {
      var d = function (a) {
          b.call(this, a);
          var c,
            d,
            e = this,
            f = e.vars;
          (e._labels = {}), (e.autoRemoveChildren = !!f.autoRemoveChildren), (e.smoothChildTiming = !!f.smoothChildTiming), (e._sortChildren = !0), (e._onUpdate = f.onUpdate);
          for (d in f) (c = f[d]), i(c) && -1 !== c.join("").indexOf("{self}") && (f[d] = e._swapSelfInParams(c));
          i(f.tweens) && e.add(f.tweens, 0, f.align, f.stagger);
        },
        e = 1e-8,
        f = c._internals,
        g = (d._internals = {}),
        h = f.isSelector,
        i = f.isArray,
        j = f.lazyTweens,
        k = f.lazyRender,
        l = _gsScope._gsDefine.globals,
        m = function (a) {
          var b,
            c = {};
          for (b in a) c[b] = a[b];
          return c;
        },
        n = function (a, b, c) {
          var d,
            e,
            f = a.cycle;
          for (d in f) (e = f[d]), (a[d] = "function" == typeof e ? e(c, b[c], b) : e[c % e.length]);
          delete a.cycle;
        },
        o = (g.pauseCallback = function () {}),
        p = function (a) {
          var b,
            c = [],
            d = a.length;
          for (b = 0; b !== d; c.push(a[b++]));
          return c;
        },
        q = function (a, b, c, d) {
          var e = "immediateRender";
          return e in b || (b[e] = !((c && c[e] === !1) || d)), b;
        },
        r = function (a) {
          if ("function" == typeof a) return a;
          var b = "object" == typeof a ? a : { each: a },
            c = b.ease,
            d = b.from || 0,
            e = b.base || 0,
            f = {},
            g = isNaN(d),
            h = b.axis,
            i = { center: 0.5, end: 1 }[d] || 0;
          return function (a, j, k) {
            var l,
              m,
              n,
              o,
              p,
              q,
              r,
              s,
              t,
              u = (k || b).length,
              v = f[u];
            if (!v) {
              if (((t = "auto" === b.grid ? 0 : (b.grid || [1 / 0])[0]), !t)) {
                for (r = -(1 / 0); r < (r = k[t++].getBoundingClientRect().left) && u > t; );
                t--;
              }
              for (v = f[u] = [], l = g ? Math.min(t, u) * i - 0.5 : d % t, m = g ? (u * i) / t - 0.5 : (d / t) | 0, r = 0, s = 1 / 0, q = 0; u > q; q++) (n = (q % t) - l), (o = m - ((q / t) | 0)), (v[q] = p = h ? Math.abs("y" === h ? o : n) : Math.sqrt(n * n + o * o)), p > r && (r = p), s > p && (s = p);
              (v.max = r - s), (v.min = s), (v.v = u = b.amount || b.each * (t > u ? u : h ? ("y" === h ? u / t : t) : Math.max(t, u / t)) || 0), (v.b = 0 > u ? e - u : e);
            }
            return (u = (v[a] - v.min) / v.max), v.b + (c ? c.getRatio(u) : u) * v.v;
          };
        },
        s = (d.prototype = new b());
      return (
        (d.version = "2.1.2"),
        (d.distribute = r),
        (s.constructor = d),
        (s.kill()._gc = s._forcingPlayhead = s._hasPause = !1),
        (s.to = function (a, b, d, e) {
          var f = (d.repeat && l.TweenMax) || c;
          return b ? this.add(new f(a, b, d), e) : this.set(a, d, e);
        }),
        (s.from = function (a, b, d, e) {
          return this.add(((d.repeat && l.TweenMax) || c).from(a, b, q(this, d)), e);
        }),
        (s.fromTo = function (a, b, d, e, f) {
          var g = (e.repeat && l.TweenMax) || c;
          return (e = q(this, e, d)), b ? this.add(g.fromTo(a, b, d, e), f) : this.set(a, e, f);
        }),
        (s.staggerTo = function (a, b, e, f, g, i, j, k) {
          var l,
            o,
            q = new d({ onComplete: i, onCompleteParams: j, callbackScope: k, smoothChildTiming: this.smoothChildTiming }),
            s = r(e.stagger || f),
            t = e.startAt,
            u = e.cycle;
          for ("string" == typeof a && (a = c.selector(a) || a), a = a || [], h(a) && (a = p(a)), o = 0; o < a.length; o++) (l = m(e)), t && ((l.startAt = m(t)), t.cycle && n(l.startAt, a, o)), u && (n(l, a, o), null != l.duration && ((b = l.duration), delete l.duration)), q.to(a[o], b, l, s(o, a[o], a));
          return this.add(q, g);
        }),
        (s.staggerFrom = function (a, b, c, d, e, f, g, h) {
          return (c.runBackwards = !0), this.staggerTo(a, b, q(this, c), d, e, f, g, h);
        }),
        (s.staggerFromTo = function (a, b, c, d, e, f, g, h, i) {
          return (d.startAt = c), this.staggerTo(a, b, q(this, d, c), e, f, g, h, i);
        }),
        (s.call = function (a, b, d, e) {
          return this.add(c.delayedCall(0, a, b, d), e);
        }),
        (s.set = function (a, b, d) {
          return this.add(new c(a, 0, q(this, b, null, !0)), d);
        }),
        (d.exportRoot = function (a, b) {
          (a = a || {}), null == a.smoothChildTiming && (a.smoothChildTiming = !0);
          var e,
            f,
            g,
            h,
            i = new d(a),
            j = i._timeline;
          for (null == b && (b = !0), j._remove(i, !0), i._startTime = 0, i._rawPrevTime = i._time = i._totalTime = j._time, g = j._first; g; ) (h = g._next), (b && g instanceof c && g.target === g.vars.onComplete) || ((f = g._startTime - g._delay), 0 > f && (e = 1), i.add(g, f)), (g = h);
          return j.add(i, 0), e && i.totalDuration(), i;
        }),
        (s.add = function (e, f, g, h) {
          var j,
            k,
            l,
            m,
            n,
            o,
            p = this;
          if (("number" != typeof f && (f = p._parseTimeOrLabel(f, 0, !0, e)), !(e instanceof a))) {
            if (e instanceof Array || (e && e.push && i(e))) {
              for (g = g || "normal", h = h || 0, j = f, k = e.length, l = 0; k > l; l++) i((m = e[l])) && (m = new d({ tweens: m })), p.add(m, j), "string" != typeof m && "function" != typeof m && ("sequence" === g ? (j = m._startTime + m.totalDuration() / m._timeScale) : "start" === g && (m._startTime -= m.delay())), (j += h);
              return p._uncache(!0);
            }
            if ("string" == typeof e) return p.addLabel(e, f);
            if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
            e = c.delayedCall(0, e);
          }
          if ((b.prototype.add.call(p, e, f), (e._time || (!e._duration && e._initted)) && ((j = (p.rawTime() - e._startTime) * e._timeScale), (!e._duration || Math.abs(Math.max(0, Math.min(e.totalDuration(), j))) - e._totalTime > 1e-5) && e.render(j, !1, !1)), (p._gc || p._time === p._duration) && !p._paused && p._duration < p.duration())) for (n = p, o = n.rawTime() > e._startTime; n._timeline; ) o && n._timeline.smoothChildTiming ? n.totalTime(n._totalTime, !0) : n._gc && n._enabled(!0, !1), (n = n._timeline);
          return p;
        }),
        (s.remove = function (b) {
          if (b instanceof a) {
            this._remove(b, !1);
            var c = (b._timeline = b.vars.useFrames ? a._rootFramesTimeline : a._rootTimeline);
            return (b._startTime = (b._paused ? b._pauseTime : c._time) - (b._reversed ? b.totalDuration() - b._totalTime : b._totalTime) / b._timeScale), this;
          }
          if (b instanceof Array || (b && b.push && i(b))) {
            for (var d = b.length; --d > -1; ) this.remove(b[d]);
            return this;
          }
          return "string" == typeof b ? this.removeLabel(b) : this.kill(null, b);
        }),
        (s._remove = function (a, c) {
          b.prototype._remove.call(this, a, c);
          var d = this._last;
          return d ? this._time > this.duration() && ((this._time = this._duration), (this._totalTime = this._totalDuration)) : (this._time = this._totalTime = this._duration = this._totalDuration = 0), this;
        }),
        (s.append = function (a, b) {
          return this.add(a, this._parseTimeOrLabel(null, b, !0, a));
        }),
        (s.insert = s.insertMultiple = function (a, b, c, d) {
          return this.add(a, b || 0, c, d);
        }),
        (s.appendMultiple = function (a, b, c, d) {
          return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d);
        }),
        (s.addLabel = function (a, b) {
          return (this._labels[a] = this._parseTimeOrLabel(b)), this;
        }),
        (s.addPause = function (a, b, d, e) {
          var f = c.delayedCall(0, o, d, e || this);
          return (f.vars.onComplete = f.vars.onReverseComplete = b), (f.data = "isPause"), (this._hasPause = !0), this.add(f, a);
        }),
        (s.removeLabel = function (a) {
          return delete this._labels[a], this;
        }),
        (s.getLabelTime = function (a) {
          return null != this._labels[a] ? this._labels[a] : -1;
        }),
        (s._parseTimeOrLabel = function (b, c, d, e) {
          var f, g;
          if (e instanceof a && e.timeline === this) this.remove(e);
          else if (e && (e instanceof Array || (e.push && i(e)))) for (g = e.length; --g > -1; ) e[g] instanceof a && e[g].timeline === this && this.remove(e[g]);
          if (((f = "number" != typeof b || c ? (this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration) : 0), "string" == typeof c)) return this._parseTimeOrLabel(c, d && "number" == typeof b && null == this._labels[c] ? b - f : 0, d);
          if (((c = c || 0), "string" != typeof b || (!isNaN(b) && null == this._labels[b]))) null == b && (b = f);
          else {
            if (((g = b.indexOf("=")), -1 === g)) return null == this._labels[b] ? (d ? (this._labels[b] = f + c) : c) : this._labels[b] + c;
            (c = parseInt(b.charAt(g - 1) + "1", 10) * Number(b.substr(g + 1))), (b = g > 1 ? this._parseTimeOrLabel(b.substr(0, g - 1), 0, d) : f);
          }
          return Number(b) + c;
        }),
        (s.seek = function (a, b) {
          return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), b !== !1);
        }),
        (s.stop = function () {
          return this.paused(!0);
        }),
        (s.gotoAndPlay = function (a, b) {
          return this.play(a, b);
        }),
        (s.gotoAndStop = function (a, b) {
          return this.pause(a, b);
        }),
        (s.render = function (a, b, c) {
          this._gc && this._enabled(!0, !1);
          var d,
            f,
            g,
            h,
            i,
            l,
            m,
            n,
            o = this,
            p = o._time,
            q = o._dirty ? o.totalDuration() : o._totalDuration,
            r = o._startTime,
            s = o._timeScale,
            t = o._paused;
          if ((p !== o._time && (a += o._time - p), a >= q - e && a >= 0)) (o._totalTime = o._time = q), o._reversed || o._hasPausedChild() || ((f = !0), (h = "onComplete"), (i = !!o._timeline.autoRemoveChildren), 0 === o._duration && ((0 >= a && a >= -e) || o._rawPrevTime < 0 || o._rawPrevTime === e) && o._rawPrevTime !== a && o._first && ((i = !0), o._rawPrevTime > e && (h = "onReverseComplete"))), (o._rawPrevTime = o._duration || !b || a || o._rawPrevTime === a ? a : e), (a = q + 1e-4);
          else if (e > a)
            if (((o._totalTime = o._time = 0), a > -e && (a = 0), (0 !== p || (0 === o._duration && o._rawPrevTime !== e && (o._rawPrevTime > 0 || (0 > a && o._rawPrevTime >= 0)))) && ((h = "onReverseComplete"), (f = o._reversed)), 0 > a)) (o._active = !1), o._timeline.autoRemoveChildren && o._reversed ? ((i = f = !0), (h = "onReverseComplete")) : o._rawPrevTime >= 0 && o._first && (i = !0), (o._rawPrevTime = a);
            else {
              if (((o._rawPrevTime = o._duration || !b || a || o._rawPrevTime === a ? a : e), 0 === a && f)) for (d = o._first; d && 0 === d._startTime; ) d._duration || (f = !1), (d = d._next);
              (a = 0), o._initted || (i = !0);
            }
          else {
            if (o._hasPause && !o._forcingPlayhead && !b) {
              if (a >= p) for (d = o._first; d && d._startTime <= a && !l; ) d._duration || "isPause" !== d.data || d.ratio || (0 === d._startTime && 0 === o._rawPrevTime) || (l = d), (d = d._next);
              else for (d = o._last; d && d._startTime >= a && !l; ) d._duration || ("isPause" === d.data && d._rawPrevTime > 0 && (l = d)), (d = d._prev);
              l && ((o._time = o._totalTime = a = l._startTime), (n = o._startTime + a / o._timeScale));
            }
            o._totalTime = o._time = o._rawPrevTime = a;
          }
          if ((o._time !== p && o._first) || c || i || l) {
            if ((o._initted || (o._initted = !0), o._active || (!o._paused && o._time !== p && a > 0 && (o._active = !0)), 0 === p && o.vars.onStart && ((0 === o._time && o._duration) || b || o._callback("onStart")), (m = o._time), m >= p)) for (d = o._first; d && ((g = d._next), m === o._time && (!o._paused || t)); ) (d._active || (d._startTime <= m && !d._paused && !d._gc)) && (l === d && (o.pause(), (o._pauseTime = n)), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), (d = g);
            else
              for (d = o._last; d && ((g = d._prev), m === o._time && (!o._paused || t)); ) {
                if (d._active || (d._startTime <= p && !d._paused && !d._gc)) {
                  if (l === d) {
                    for (l = d._prev; l && l.endTime() > o._time; ) l.render(l._reversed ? l.totalDuration() - (a - l._startTime) * l._timeScale : (a - l._startTime) * l._timeScale, b, c), (l = l._prev);
                    (l = null), o.pause(), (o._pauseTime = n);
                  }
                  d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c);
                }
                d = g;
              }
            o._onUpdate && (b || (j.length && k(), o._callback("onUpdate"))), h && (o._gc || ((r === o._startTime || s !== o._timeScale) && (0 === o._time || q >= o.totalDuration()) && (f && (j.length && k(), o._timeline.autoRemoveChildren && o._enabled(!1, !1), (o._active = !1)), !b && o.vars[h] && o._callback(h))));
          }
        }),
        (s._hasPausedChild = function () {
          for (var a = this._first; a; ) {
            if (a._paused || (a instanceof d && a._hasPausedChild())) return !0;
            a = a._next;
          }
          return !1;
        }),
        (s.getChildren = function (a, b, d, e) {
          e = e || -9999999999;
          for (var f = [], g = this._first, h = 0; g; ) g._startTime < e || (g instanceof c ? b !== !1 && (f[h++] = g) : (d !== !1 && (f[h++] = g), a !== !1 && ((f = f.concat(g.getChildren(!0, b, d))), (h = f.length)))), (g = g._next);
          return f;
        }),
        (s.getTweensOf = function (a, b) {
          var d,
            e,
            f = this._gc,
            g = [],
            h = 0;
          for (f && this._enabled(!0, !0), d = c.getTweensOf(a), e = d.length; --e > -1; ) (d[e].timeline === this || (b && this._contains(d[e]))) && (g[h++] = d[e]);
          return f && this._enabled(!1, !0), g;
        }),
        (s.recent = function () {
          return this._recent;
        }),
        (s._contains = function (a) {
          for (var b = a.timeline; b; ) {
            if (b === this) return !0;
            b = b.timeline;
          }
          return !1;
        }),
        (s.shiftChildren = function (a, b, c) {
          c = c || 0;
          for (var d, e = this._first, f = this._labels; e; ) e._startTime >= c && (e._startTime += a), (e = e._next);
          if (b) for (d in f) f[d] >= c && (f[d] += a);
          return this._uncache(!0);
        }),
        (s._kill = function (a, b) {
          if (!a && !b) return this._enabled(!1, !1);
          for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, e = !1; --d > -1; ) c[d]._kill(a, b) && (e = !0);
          return e;
        }),
        (s.clear = function (a) {
          var b = this.getChildren(!1, !0, !0),
            c = b.length;
          for (this._time = this._totalTime = 0; --c > -1; ) b[c]._enabled(!1, !1);
          return a !== !1 && (this._labels = {}), this._uncache(!0);
        }),
        (s.invalidate = function () {
          for (var b = this._first; b; ) b.invalidate(), (b = b._next);
          return a.prototype.invalidate.call(this);
        }),
        (s._enabled = function (a, c) {
          if (a === this._gc) for (var d = this._first; d; ) d._enabled(a, !0), (d = d._next);
          return b.prototype._enabled.call(this, a, c);
        }),
        (s.totalTime = function (b, c, d) {
          this._forcingPlayhead = !0;
          var e = a.prototype.totalTime.apply(this, arguments);
          return (this._forcingPlayhead = !1), e;
        }),
        (s.duration = function (a) {
          return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), this) : (this._dirty && this.totalDuration(), this._duration);
        }),
        (s.totalDuration = function (a) {
          if (!arguments.length) {
            if (this._dirty) {
              for (var b, c, d = 0, e = this, f = e._last, g = 999999999999; f; ) (b = f._prev), f._dirty && f.totalDuration(), f._startTime > g && e._sortChildren && !f._paused && !e._calculatingDuration ? ((e._calculatingDuration = 1), e.add(f, f._startTime - f._delay), (e._calculatingDuration = 0)) : (g = f._startTime), f._startTime < 0 && !f._paused && ((d -= f._startTime), e._timeline.smoothChildTiming && ((e._startTime += f._startTime / e._timeScale), (e._time -= f._startTime), (e._totalTime -= f._startTime), (e._rawPrevTime -= f._startTime)), e.shiftChildren(-f._startTime, !1, -9999999999), (g = 0)), (c = f._startTime + f._totalDuration / f._timeScale), c > d && (d = c), (f = b);
              (e._duration = e._totalDuration = d), (e._dirty = !1);
            }
            return this._totalDuration;
          }
          return a && this.totalDuration() ? this.timeScale(this._totalDuration / a) : this;
        }),
        (s.paused = function (b) {
          if (b === !1 && this._paused) for (var c = this._first; c; ) c._startTime === this._time && "isPause" === c.data && (c._rawPrevTime = 0), (c = c._next);
          return a.prototype.paused.apply(this, arguments);
        }),
        (s.usesFrames = function () {
          for (var b = this._timeline; b._timeline; ) b = b._timeline;
          return b === a._rootFramesTimeline;
        }),
        (s.rawTime = function (a) {
          return a && (this._paused || (this._repeat && this.time() > 0 && this.totalProgress() < 1)) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(a) - this._startTime) * this._timeScale;
        }),
        d
      );
    },
    !0
  );
}),
  _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
  (function (a) {
    "use strict";
    var b = function () {
      return (_gsScope.GreenSockGlobals || _gsScope)[a];
    };
    "undefined" != typeof module && module.exports ? (require("./TweenLite.min.js"), (module.exports = b())) : "function" == typeof define && define.amd && define(["TweenLite"], b);
  })("TimelineLite");
