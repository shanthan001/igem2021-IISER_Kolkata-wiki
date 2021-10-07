/*! ScrollMagic v2.0.6 | (c) 2018 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!(function (e, r) {
  "function" == typeof define && define.amd ? define(["ScrollMagic"], r) : r("object" == typeof exports ? require("scrollmagic") : e.ScrollMagic || (e.jQuery && e.jQuery.ScrollMagic));
})(this, function (e) {
  "use strict";
  var r = "0.85em",
    t = "9999",
    i = 15,
    o = e._util,
    n = 0;
  e.Scene.extend(function () {
    var e,
      r = this;
    (r.addIndicators = function (t) {
      if (!e) {
        var i = { name: "", indent: 0, parent: void 0, colorStart: "green", colorEnd: "red", colorTrigger: "blue" };
        (t = o.extend({}, i, t)), n++, (e = new s(r, t)), r.on("add.plugin_addIndicators", e.add), r.on("remove.plugin_addIndicators", e.remove), r.on("destroy.plugin_addIndicators", r.removeIndicators), r.controller() && e.add();
      }
      return r;
    }),
      (r.removeIndicators = function () {
        return e && (e.remove(), this.off("*.plugin_addIndicators"), (e = void 0)), r;
      });
  }),
    e.Controller.addOption("addIndicators", !1),
    e.Controller.extend(function () {
      var r = this,
        t = r.info(),
        n = t.container,
        s = t.isDocument,
        d = t.vertical,
        a = { groups: [] };
      this._indicators = a;
      var g = function () {
          a.updateBoundsPositions();
        },
        p = function () {
          a.updateTriggerGroupPositions();
        };
      return (
        n.addEventListener("resize", p),
        s || (window.addEventListener("resize", p), window.addEventListener("scroll", p)),
        n.addEventListener("resize", g),
        n.addEventListener("scroll", g),
        (this._indicators.updateBoundsPositions = function (e) {
          for (var r, t, s, g = e ? [o.extend({}, e.triggerGroup, { members: [e] })] : a.groups, p = g.length, u = {}, c = d ? "left" : "top", l = d ? "width" : "height", f = d ? o.get.scrollLeft(n) + o.get.width(n) - i : o.get.scrollTop(n) + o.get.height(n) - i; p--; ) for (s = g[p], r = s.members.length, t = o.get[l](s.element.firstChild); r--; ) (u[c] = f - t), o.css(s.members[r].bounds, u);
        }),
        (this._indicators.updateTriggerGroupPositions = function (e) {
          for (var t, g, p, u, c, l = e ? [e] : a.groups, f = l.length, m = s ? document.body : n, h = s ? { top: 0, left: 0 } : o.get.offset(m, !0), v = d ? o.get.width(n) - i : o.get.height(n) - i, b = d ? "width" : "height", G = d ? "Y" : "X"; f--; ) (t = l[f]), (g = t.element), (p = t.triggerHook * r.info("size")), (u = o.get[b](g.firstChild.firstChild)), (c = p > u ? "translate" + G + "(-100%)" : ""), o.css(g, { top: h.top + (d ? p : v - t.members[0].options.indent), left: h.left + (d ? v - t.members[0].options.indent : p) }), o.css(g.firstChild.firstChild, { "-ms-transform": c, "-webkit-transform": c, transform: c });
        }),
        (this._indicators.updateTriggerGroupLabel = function (e) {
          var r = "trigger" + (e.members.length > 1 ? "" : " " + e.members[0].options.name),
            t = e.element.firstChild.firstChild,
            i = t.textContent !== r;
          i && ((t.textContent = r), d && a.updateBoundsPositions());
        }),
        (this.addScene = function (t) {
          this._options.addIndicators && t instanceof e.Scene && t.controller() === r && t.addIndicators(), this.$super.addScene.apply(this, arguments);
        }),
        (this.destroy = function () {
          n.removeEventListener("resize", p), s || (window.removeEventListener("resize", p), window.removeEventListener("scroll", p)), n.removeEventListener("resize", g), n.removeEventListener("scroll", g), this.$super.destroy.apply(this, arguments);
        }),
        r
      );
    });
  var s = function (e, r) {
      var t,
        i,
        s = this,
        a = d.bounds(),
        g = d.start(r.colorStart),
        p = d.end(r.colorEnd),
        u = r.parent && o.get.elements(r.parent)[0];
      (r.name = r.name || n),
        (g.firstChild.textContent += " " + r.name),
        (p.textContent += " " + r.name),
        a.appendChild(g),
        a.appendChild(p),
        (s.options = r),
        (s.bounds = a),
        (s.triggerGroup = void 0),
        (this.add = function () {
          (i = e.controller()), (t = i.info("vertical"));
          var r = i.info("isDocument");
          u || (u = r ? document.body : i.info("container")),
            r || "static" !== o.css(u, "position") || o.css(u, { position: "relative" }),
            e.on("change.plugin_addIndicators", l),
            e.on("shift.plugin_addIndicators", c),
            G(),
            h(),
            setTimeout(function () {
              i._indicators.updateBoundsPositions(s);
            }, 0);
        }),
        (this.remove = function () {
          if (s.triggerGroup) {
            if ((e.off("change.plugin_addIndicators", l), e.off("shift.plugin_addIndicators", c), s.triggerGroup.members.length > 1)) {
              var r = s.triggerGroup;
              r.members.splice(r.members.indexOf(s), 1), i._indicators.updateTriggerGroupLabel(r), i._indicators.updateTriggerGroupPositions(r), (s.triggerGroup = void 0);
            } else b();
            m();
          }
        });
      var c = function () {
          h();
        },
        l = function (e) {
          "triggerHook" === e.what && G();
        },
        f = function () {
          var e = i.info("vertical");
          o.css(g.firstChild, { "border-bottom-width": e ? 1 : 0, "border-right-width": e ? 0 : 1, bottom: e ? -1 : r.indent, right: e ? r.indent : -1, padding: e ? "0 8px" : "2px 4px" }), o.css(p, { "border-top-width": e ? 1 : 0, "border-left-width": e ? 0 : 1, top: e ? "100%" : "", right: e ? r.indent : "", bottom: e ? "" : r.indent, left: e ? "" : "100%", padding: e ? "0 8px" : "2px 4px" }), u.appendChild(a);
        },
        m = function () {
          a.parentNode.removeChild(a);
        },
        h = function () {
          a.parentNode !== u && f();
          var r = {};
          (r[t ? "top" : "left"] = e.triggerPosition()), (r[t ? "height" : "width"] = e.duration()), o.css(a, r), o.css(p, { display: e.duration() > 0 ? "" : "none" });
        },
        v = function () {
          var n = d.trigger(r.colorTrigger),
            a = {};
          (a[t ? "right" : "bottom"] = 0), (a[t ? "border-top-width" : "border-left-width"] = 1), o.css(n.firstChild, a), o.css(n.firstChild.firstChild, { padding: t ? "0 8px 3px 8px" : "3px 4px" }), document.body.appendChild(n);
          var g = { triggerHook: e.triggerHook(), element: n, members: [s] };
          i._indicators.groups.push(g), (s.triggerGroup = g), i._indicators.updateTriggerGroupLabel(g), i._indicators.updateTriggerGroupPositions(g);
        },
        b = function () {
          i._indicators.groups.splice(i._indicators.groups.indexOf(s.triggerGroup), 1), s.triggerGroup.element.parentNode.removeChild(s.triggerGroup.element), (s.triggerGroup = void 0);
        },
        G = function () {
          var r = e.triggerHook(),
            t = 1e-4;
          if (!(s.triggerGroup && Math.abs(s.triggerGroup.triggerHook - r) < t)) {
            for (var o, n = i._indicators.groups, d = n.length; d--; ) if (((o = n[d]), Math.abs(o.triggerHook - r) < t)) return s.triggerGroup && (1 === s.triggerGroup.members.length ? b() : (s.triggerGroup.members.splice(s.triggerGroup.members.indexOf(s), 1), i._indicators.updateTriggerGroupLabel(s.triggerGroup), i._indicators.updateTriggerGroupPositions(s.triggerGroup))), o.members.push(s), (s.triggerGroup = o), void i._indicators.updateTriggerGroupLabel(o);
            if (s.triggerGroup) {
              if (1 === s.triggerGroup.members.length) return (s.triggerGroup.triggerHook = r), void i._indicators.updateTriggerGroupPositions(s.triggerGroup);
              s.triggerGroup.members.splice(s.triggerGroup.members.indexOf(s), 1), i._indicators.updateTriggerGroupLabel(s.triggerGroup), i._indicators.updateTriggerGroupPositions(s.triggerGroup), (s.triggerGroup = void 0);
            }
            v();
          }
        };
    },
    d = {
      start: function (e) {
        var r = document.createElement("div");
        (r.textContent = "start"), o.css(r, { position: "absolute", overflow: "visible", "border-width": 0, "border-style": "solid", color: e, "border-color": e });
        var t = document.createElement("div");
        return o.css(t, { position: "absolute", overflow: "visible", width: 0, height: 0 }), t.appendChild(r), t;
      },
      end: function (e) {
        var r = document.createElement("div");
        return (r.textContent = "end"), o.css(r, { position: "absolute", overflow: "visible", "border-width": 0, "border-style": "solid", color: e, "border-color": e }), r;
      },
      bounds: function () {
        var e = document.createElement("div");
        return o.css(e, { position: "absolute", overflow: "visible", "white-space": "nowrap", "pointer-events": "none", "font-size": r }), (e.style.zIndex = t), e;
      },
      trigger: function (e) {
        var i = document.createElement("div");
        (i.textContent = "trigger"), o.css(i, { position: "relative" });
        var n = document.createElement("div");
        o.css(n, { position: "absolute", overflow: "visible", "border-width": 0, "border-style": "solid", color: e, "border-color": e }), n.appendChild(i);
        var s = document.createElement("div");
        return o.css(s, { position: "fixed", overflow: "visible", "white-space": "nowrap", "pointer-events": "none", "font-size": r }), (s.style.zIndex = t), s.appendChild(n), s;
      },
    };
});
