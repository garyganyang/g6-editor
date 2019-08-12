!function(t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.G6Editor = e() : t.G6Editor = e()
}(window, function() {
  return function(t) {
    var e = {};
    function n(r) {
      if (e[r])
        return e[r].exports;
      var i = e[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return t[r].call(i.exports, i, i.exports, n),
        i.l = !0,
        i.exports
    }
    return n.m = t,
      n.c = e,
      n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
          enumerable: !0,
          get: r
        })
      }
      ,
      n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        }),
          Object.defineProperty(t, "__esModule", {
            value: !0
          })
      }
      ,
      n.t = function(t, e) {
        if (1 & e && (t = n(t)),
        8 & e)
          return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
          return t;
        var r = Object.create(null);
        if (n.r(r),
          Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
          }),
        2 & e && "string" != typeof t)
          for (var i in t)
            n.d(r, i, function(e) {
              return t[e]
            }
              .bind(null, i));
        return r
      }
      ,
      n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
          }
          : function() {
            return t
          }
        ;
        return n.d(e, "a", e),
          e
      }
      ,
      n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
      }
      ,
      n.p = "",
      n(n.s = 19)
  }([, , , , , , , function(t, e, n) {
    function r(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {}
          , r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
          return Object.getOwnPropertyDescriptor(n, t).enumerable
        }))),
          r.forEach(function(e) {
            i(t, e, n[e])
          })
      }
      return t
    }
    function i(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = n,
        t
    }
    var o = n(16)
      , a = n(9)
      , u = n(14)
      , s = {
      getActivedStyle: function() {},
      getSelectedStyle: function() {},
      getStyle: function() {},
      getPath: function() {}
    };
    function c(t, e, n) {
      var r = [];
      return u.isString(t) ? r = [e, t] : u.isArray(t) ? (t.unshift(e),
        r = t) : r = [e],
      n && r.unshift(n + "-base"),
        r
    }
    o.registerNode("page-base", r({}, s)),
      o.registerEdge("page-base", r({}, s)),
      o.registerGroup("page-base", r({}, s)),
      o.registerGuide("page-base", r({}, s)),
      a.setRegister = function(t, e, n) {
        t.registerNode = function(t, r, i) {
          o.registerNode(t, r, c(i, e + "-base", n))
        }
          ,
          t.registerEdge = function(t, r, i) {
            o.registerEdge(t, r, c(i, e + "-base", n))
          }
          ,
          t.registerGroup = function(t, r, i) {
            o.registerGroup(t, r, c(i, e + "-base", n))
          }
          ,
          t.registerGuide = function(t, r, i) {
            o.registerGuide(t, r, c(i, e + "-base", n))
          }
          ,
          t.registerBehaviour = function(t, e, n) {
            o.registerBehaviour(t, function(t) {
              var n = t.get("page");
              n.set("_graph", t),
                e(n)
            }, n)
          }
      }
      ,
      a.setRegister(a, "page"),
      n(161),
      t.exports = a
  }
    , function(t, e, n) {
      function r(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n,
          t
      }
      var i = n(16)
        , o = n(55)
        , a = n(142)
        , u = n(141)
        , s = function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
            , i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
          }))),
            i.forEach(function(e) {
              r(t, e, n[e])
            })
        }
        return t
      }({}, i.Util, o, a, u);
      t.exports = s
    }
    , function(t, e, n) {
      function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
              return typeof t
            }
            : function(t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
        )(t)
      }
      function i(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
            , r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
          }))),
            r.forEach(function(e) {
              o(t, e, n[e])
            })
        }
        return t
      }
      function o(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n,
          t
      }
      function a(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1,
            r.configurable = !0,
          "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
      }
      function u(t, e) {
        return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
          if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(t) : e
      }
      function s(t) {
        return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
          }
        )(t)
      }
      function c(t, e) {
        return (c = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
              t
          }
        )(t, e)
      }
      var h = n(56)
        , l = n(14)
        , f = n(25)
        , d = n(171)
        , p = n(170)
        , g = n(168)
        , m = [d, n(167), n(166), p, g, n(165), n(163), n(162)]
        , v = function(t) {
        function e(t) {
          var n;
          !function(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function")
          }(this, e);
          var r = {
            defaultData: null,
            shortcut: {
              redo: !0,
              undo: !0,
              delete: !0,
              resetZoom: !0,
              autoZoom: !0,
              zoomIn: !0,
              zoomOut: !0
            },
            _controllers: {},
            _signals: {}
          };
          return l.each(m, function(t) {
            l.mix(r, t.CFG)
          }),
            l.mix(!0, r, t),
            (n = u(this, s(e).call(this, r))).isPage = !0,
            n.type = "page",
            n._init(),
            n
        }
        return function(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }),
          e && c(t, e)
        }(e, h),
          function(t, e, n) {
            e && a(t.prototype, e),
            n && a(t, n)
          }(e, [{
            key: "getDelegation",
            value: function(t, e) {
              var n;
              e || (e = this.getGraph().getRootGroup());
              if (1 !== t.length || t[0].isNode || t[0].isGroup) {
                var r = l.getTotalBBox(t.map(function(t) {
                  return t.getBBox()
                }));
                (n = l.getRectByBox(r, e, f.nodeDelegationStyle)).set("capture", !1)
              } else
                t[0].isEdge ? n = e.addShape("path", {
                  attrs: i({
                    path: "M0 0L 1 1"
                  }, f.edgeDelegationStyle),
                  capture: !1
                }) : (n = l.getRectByBox(t[0], e, f.nodeDelegationStyle)).set("capture", !1);
              return n
            }
          }, {
            key: "focusGraphWrapper",
            value: function() {
              this.getGraph().getKeyboardEventWrapper().focus()
            }
          }, {
            key: "saveImage",
            value: function(t) {
              var e, n, r = this, o = this.getGraph(), a = o.getBBox(), u = o.getFitViewPadding();
              return o.saveImage(i({
                width: a.width + u[1] + u[3],
                height: a.height + u[0] + u[2],
                beforeTransform: function() {
                  e = r.getSelected().map(function(t) {
                    return t.id
                  }),
                    n = r.getSelected().map(function(t) {
                      return t.id
                    }),
                    r.clearSelected(),
                    r.clearActived()
                },
                afterTransform: function() {
                  r.setSelected(e, !0),
                    r.setActived(n, !0)
                }
              }, t))
            }
          }, {
            key: "_init",
            value: function() {
              var t = this;
              l.each(m, function(e) {
                e.INIT && t[e.INIT]()
              }),
                this.bindEvent(),
                this._cacheBBox()
            }
          }, {
            key: "executeCommand",
            value: function(t, e) {
              var n = this.editor;
              n ? n.executeCommand(t, e) : t()
            }
          }, {
            key: "_cacheBBox",
            value: function() {
              var t = this.getGraph();
              this.set("bboxCache", t.getBBox())
            }
          }, {
            key: "bindEvent",
            value: function() {
              var t = this;
              this.getGraph().on("afterchange", function() {
                t._cacheBBox()
              })
            }
          }, {
            key: "translateLimt",
            value: function(t) {
              var e = this.getGraph()
                , n = this.get("bboxCache")
                , r = e.getWidth()
                , i = e.getHeight()
                , o = [n.minX, n.minY, 1]
                , a = [n.maxX, n.maxY, 1];
              return l.vec3.transformMat3(o, o, t),
                l.vec3.transformMat3(a, a, t),
              a[0] < 100 && l.mat3.translate(t, t, [100 - a[0], 0]),
              a[1] < 100 && l.mat3.translate(t, t, [0, 100 - a[1]]),
              o[1] > i - 100 && l.mat3.translate(t, t, [0, i - 100 - o[1]]),
              o[0] > r - 100 && l.mat3.translate(t, t, [r - 100 - o[0], 0]),
                !0
            }
          }, {
            key: "setSignal",
            value: function(t, e) {
              this.get("_signals")[t] = e
            }
          }, {
            key: "getSignal",
            value: function(t) {
              return this.get("_signals")[t]
            }
          }, {
            key: "setController",
            value: function(t, e) {
              this.get("_controllers")[t] = e
            }
          }, {
            key: "getController",
            value: function(t) {
              return this.get("_controllers")[t]
            }
          }, {
            key: "destroy",
            value: function() {
              var t = this.get("_graph")
                , e = this.get("_controllers");
              l.each(e, function(t) {
                t.destroy()
              }),
                t.destroy()
            }
          }]),
          e
      }();
      l.each(m, function(t) {
        l.mix(v.prototype, t.AUGMENT)
      }),
        t.exports = v
    }
    , , , , function(t, e) {
      t.exports = {
        orbitGap: 10,
        nodeDefaultShape: "flow-node",
        edgeDefaultShape: "flow-smooth",
        groupDefaultShape: "flow-group",
        nodeActivedOutterStyle: {
          lineWidth: 0
        },
        groupSelectedOutterStyle: {
          stroke: "#E0F0FF",
          lineWidth: 2
        },
        nodeSelectedOutterStyle: {
          stroke: "#E0F0FF",
          lineWidth: 2
        },
        edgeActivedStyle: {
          stroke: "#1890FF",
          strokeOpacity: .92
        },
        nodeActivedStyle: {
          fill: "#F3F9FF",
          stroke: "#1890FF"
        },
        groupActivedStyle: {
          stroke: "#1890FF"
        },
        edgeSelectedStyle: {
          lineWidth: 2,
          strokeOpacity: .92,
          stroke: "#A3B1BF"
        },
        nodeSelectedStyle: {
          fill: "#F3F9FF",
          stroke: "#1890FF"
        },
        groupSelectedStyle: {
          stroke: "#1890FF",
          fillOpacity: .92
        },
        nodeStyle: {
          stroke: "#CED4D9",
          fill: "#FFFFFF",
          shadowOffsetX: 0,
          shadowOffsetY: 4,
          shadowBlur: 10,
          shadowColor: "rgba(13, 26, 38, 0.08)",
          lineWidth: 1,
          radius: 4,
          fillOpacity: .92
        },
        edgeStyle: {
          stroke: "#A3B1BF",
          strokeOpacity: .92,
          lineWidth: 1,
          lineAppendWidth: 8,
          endArrow: !0
        },
        groupBackgroundPadding: [40, 10, 10, 10],
        groupLabelOffsetX: 10,
        groupLabelOffsetY: 10,
        edgeLabelStyle: {
          fill: "#666",
          textAlign: "center",
          textBaseline: "middle"
        },
        edgeLabelRectPadding: 4,
        edgeLabelRectStyle: {
          fill: "white"
        },
        nodeLabelStyle: {
          fill: "#666",
          textAlign: "center",
          textBaseline: "middle"
        },
        groupStyle: {
          stroke: "#CED4D9",
          radius: 4
        },
        groupLabelStyle: {
          fill: "#666",
          textAlign: "left",
          textBaseline: "top"
        },
        multiSelectRectStyle: {
          fill: "#1890FF",
          fillOpacity: .08,
          stroke: "#1890FF",
          opacity: .1
        },
        dragNodeHoverToGroupStyle: {
          stroke: "#1890FF",
          lineWidth: 2
        },
        dragNodeLeaveFromGroupStyle: {
          stroke: "#BAE7FF",
          lineWidth: 2
        },
        anchorPointStyle: {
          radius: 3.5,
          fill: "#fff",
          stroke: "#1890FF",
          lineAppendWidth: 12
        },
        anchorHotsoptStyle: {
          radius: 12,
          fill: "#1890FF",
          fillOpacity: .25
        },
        anchorHotsoptActivedStyle: {
          radius: 14
        },
        anchorPointHoverStyle: {
          radius: 4,
          fill: "#1890FF",
          fillOpacity: 1,
          stroke: "#1890FF"
        },
        nodeControlPointStyle: {
          radius: 4,
          fill: "#fff",
          shadowBlur: 4,
          shadowColor: "#666"
        },
        edgeControlPointStyle: {
          radius: 6,
          symbol: "square",
          lineAppendWidth: 6,
          fillOpacity: 0,
          strokeOpacity: 0
        },
        nodeSelectedBoxStyle: {
          stroke: "#C2C2C2"
        },
        cursor: {
          panningCanvas: "-webkit-grabbing",
          beforePanCanvas: "-webkit-grab",
          hoverNode: "move",
          hoverEffectiveAnchor: "crosshair",
          hoverEdge: "default",
          hoverGroup: "move",
          hoverUnEffectiveAnchor: "default",
          hoverEdgeControllPoint: "crosshair",
          multiSelect: "crosshair"
        },
        zIndex: {
          anchorPoint: 3,
          anchorHotsopt: 2,
          selectedBox: 1,
          controlPoint: 4
        },
        polylineEdgeStyle: {
          offset: 10,
          borderRadius: 5
        },
        addToGroupDelayTime: 400,
        outFromGroupDelayTime: 400
      }
    }
    , function(t, e, n) {
      function r(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n,
          t
      }
      var i = n(18)
        , o = n(25)
        , a = i.createDOM("<canvas>").getContext("2d");
      t.exports = function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
            , i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
          }))),
            i.forEach(function(e) {
              r(t, e, n[e])
            })
        }
        return t
      }({}, i, {
        getPanCanvasBehaviour: function(t) {
          return function(e) {
            var n, r, a = e.getGraph();
            a.behaviourOn("canvas:mouseenter", function() {
              e.css({
                cursor: o.cursor.beforePanCanvas
              })
            }),
              a.behaviourOn("mouseleave", function(t) {
                t.toShape || e.css({
                  cursor: o.cursor.beforePanCanvas
                })
              }),
              a.behaviourOn("dragstart", function(i) {
                (2 !== i.button && !t || !i.shape || i.item && !1 === i.item.dragable) && (n = {
                  x: i.domX,
                  y: i.domY
                },
                  e.css({
                    cursor: o.cursor.panningCanvas
                  }),
                  r = a.getMatrix(),
                  e.setCapture(!1))
              }),
              a.behaviourOn("drag", function(t) {
                if (n) {
                  var o = t.domX - n.x
                    , u = t.domY - n.y
                    , s = [];
                  i.mat3.translate(s, r, [o, u]),
                  e.translateLimt(s) && (a.updateMatrix(s),
                    a.draw())
                }
              }),
              a.behaviourOn("dragend", function() {
                n = void 0,
                  r = void 0,
                  e.setCapture(!0),
                  e.css({
                    cursor: o.cursor.beforePanCanvas
                  })
              })
          }
        },
        getLabelTextByTextLineWidth: function(t, e) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 320;
          a.font = e;
          var r = a.measureText(t).width;
          if (r > n) {
            r = 0;
            for (var i = 1; i < t.length; i++)
              (r += a.measureText(t[i]).width) >= n && (t = t.substring(0, i) + "\n" + t.substring(i, t.length),
                i += 1,
                r = 0)
          }
          return t
        }
      })
    }
    , , function(t, e, n) {
      window,
        t.exports = function(t) {
          var e = {};
          function n(r) {
            if (e[r])
              return e[r].exports;
            var i = e[r] = {
              i: r,
              l: !1,
              exports: {}
            };
            return t[r].call(i.exports, i, i.exports, n),
              i.l = !0,
              i.exports
          }
          return n.m = t,
            n.c = e,
            n.d = function(t, e, r) {
              n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: r
              })
            }
            ,
            n.r = function(t) {
              "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
              }),
                Object.defineProperty(t, "__esModule", {
                  value: !0
                })
            }
            ,
            n.t = function(t, e) {
              if (1 & e && (t = n(t)),
              8 & e)
                return t;
              if (4 & e && "object" == typeof t && t && t.__esModule)
                return t;
              var r = Object.create(null);
              if (n.r(r),
                Object.defineProperty(r, "default", {
                  enumerable: !0,
                  value: t
                }),
              2 & e && "string" != typeof t)
                for (var i in t)
                  n.d(r, i, function(e) {
                    return t[e]
                  }
                    .bind(null, i));
              return r
            }
            ,
            n.n = function(t) {
              var e = t && t.__esModule ? function() {
                  return t.default
                }
                : function() {
                  return t
                }
              ;
              return n.d(e, "a", e),
                e
            }
            ,
            n.o = function(t, e) {
              return Object.prototype.hasOwnProperty.call(t, e)
            }
            ,
            n.p = "",
            n(n.s = 594)
        }([, function(t, e, n) {
          "use strict";
          var r = function(t, e, n) {
            t.prototype = e.prototype = n,
              n.constructor = t
          };
          function i(t, e) {
            var n = Object.create(t.prototype);
            for (var r in e)
              n[r] = e[r];
            return n
          }
          function o() {}
          var a = "\\s*([+-]?\\d+)\\s*"
            , u = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*"
            , s = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*"
            , c = /^#([0-9a-f]{3})$/
            , h = /^#([0-9a-f]{6})$/
            , l = new RegExp("^rgb\\(" + [a, a, a] + "\\)$")
            , f = new RegExp("^rgb\\(" + [s, s, s] + "\\)$")
            , d = new RegExp("^rgba\\(" + [a, a, a, u] + "\\)$")
            , p = new RegExp("^rgba\\(" + [s, s, s, u] + "\\)$")
            , g = new RegExp("^hsl\\(" + [u, s, s] + "\\)$")
            , m = new RegExp("^hsla\\(" + [u, s, s, u] + "\\)$")
            , v = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074
          };
          function y(t) {
            var e;
            return t = (t + "").trim().toLowerCase(),
              (e = c.exec(t)) ? new S((e = parseInt(e[1], 16)) >> 8 & 15 | e >> 4 & 240,e >> 4 & 15 | 240 & e,(15 & e) << 4 | 15 & e,1) : (e = h.exec(t)) ? x(parseInt(e[1], 16)) : (e = l.exec(t)) ? new S(e[1],e[2],e[3],1) : (e = f.exec(t)) ? new S(255 * e[1] / 100,255 * e[2] / 100,255 * e[3] / 100,1) : (e = d.exec(t)) ? b(e[1], e[2], e[3], e[4]) : (e = p.exec(t)) ? b(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, e[4]) : (e = g.exec(t)) ? P(e[1], e[2] / 100, e[3] / 100, 1) : (e = m.exec(t)) ? P(e[1], e[2] / 100, e[3] / 100, e[4]) : v.hasOwnProperty(t) ? x(v[t]) : "transparent" === t ? new S(NaN,NaN,NaN,0) : null
          }
          function x(t) {
            return new S(t >> 16 & 255,t >> 8 & 255,255 & t,1)
          }
          function b(t, e, n, r) {
            return r <= 0 && (t = e = n = NaN),
              new S(t,e,n,r)
          }
          function w(t) {
            return t instanceof o || (t = y(t)),
              t ? new S((t = t.rgb()).r,t.g,t.b,t.opacity) : new S
          }
          function _(t, e, n, r) {
            return 1 === arguments.length ? w(t) : new S(t,e,n,null == r ? 1 : r)
          }
          function S(t, e, n, r) {
            this.r = +t,
              this.g = +e,
              this.b = +n,
              this.opacity = +r
          }
          function M(t) {
            return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16)
          }
          function P(t, e, n, r) {
            return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN),
              new E(t,e,n,r)
          }
          function O(t, e, n, r) {
            return 1 === arguments.length ? function(t) {
              if (t instanceof E)
                return new E(t.h,t.s,t.l,t.opacity);
              if (t instanceof o || (t = y(t)),
                !t)
                return new E;
              if (t instanceof E)
                return t;
              var e = (t = t.rgb()).r / 255
                , n = t.g / 255
                , r = t.b / 255
                , i = Math.min(e, n, r)
                , a = Math.max(e, n, r)
                , u = NaN
                , s = a - i
                , c = (a + i) / 2;
              return s ? (u = e === a ? (n - r) / s + 6 * (n < r) : n === a ? (r - e) / s + 2 : (e - n) / s + 4,
                s /= c < .5 ? a + i : 2 - a - i,
                u *= 60) : s = c > 0 && c < 1 ? 0 : u,
                new E(u,s,c,t.opacity)
            }(t) : new E(t,e,n,null == r ? 1 : r)
          }
          function E(t, e, n, r) {
            this.h = +t,
              this.s = +e,
              this.l = +n,
              this.opacity = +r
          }
          function A(t, e, n) {
            return 255 * (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e)
          }
          r(o, y, {
            displayable: function() {
              return this.rgb().displayable()
            },
            hex: function() {
              return this.rgb().hex()
            },
            toString: function() {
              return this.rgb() + ""
            }
          }),
            r(S, _, i(o, {
              brighter: function(t) {
                return t = null == t ? 1 / .7 : Math.pow(1 / .7, t),
                  new S(this.r * t,this.g * t,this.b * t,this.opacity)
              },
              darker: function(t) {
                return t = null == t ? .7 : Math.pow(.7, t),
                  new S(this.r * t,this.g * t,this.b * t,this.opacity)
              },
              rgb: function() {
                return this
              },
              displayable: function() {
                return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1
              },
              hex: function() {
                return "#" + M(this.r) + M(this.g) + M(this.b)
              },
              toString: function() {
                var t = this.opacity;
                return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
              }
            })),
            r(E, O, i(o, {
              brighter: function(t) {
                return t = null == t ? 1 / .7 : Math.pow(1 / .7, t),
                  new E(this.h,this.s,this.l * t,this.opacity)
              },
              darker: function(t) {
                return t = null == t ? .7 : Math.pow(.7, t),
                  new E(this.h,this.s,this.l * t,this.opacity)
              },
              rgb: function() {
                var t = this.h % 360 + 360 * (this.h < 0)
                  , e = isNaN(t) || isNaN(this.s) ? 0 : this.s
                  , n = this.l
                  , r = n + (n < .5 ? n : 1 - n) * e
                  , i = 2 * n - r;
                return new S(A(t >= 240 ? t - 240 : t + 120, i, r),A(t, i, r),A(t < 120 ? t + 240 : t - 120, i, r),this.opacity)
              },
              displayable: function() {
                return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
              }
            }));
          var C = Math.PI / 180
            , k = 180 / Math.PI
            , I = .96422
            , B = 1
            , j = .82521
            , T = 4 / 29
            , L = 6 / 29
            , N = 3 * L * L
            , D = L * L * L;
          function G(t) {
            if (t instanceof F)
              return new F(t.l,t.a,t.b,t.opacity);
            if (t instanceof K) {
              if (isNaN(t.h))
                return new F(t.l,0,0,t.opacity);
              var e = t.h * C;
              return new F(t.l,Math.cos(e) * t.c,Math.sin(e) * t.c,t.opacity)
            }
            t instanceof S || (t = w(t));
            var n, r, i = q(t.r), o = q(t.g), a = q(t.b), u = R((.2225045 * i + .7168786 * o + .0606169 * a) / B);
            return i === o && o === a ? n = r = u : (n = R((.4360747 * i + .3850649 * o + .1430804 * a) / I),
              r = R((.0139322 * i + .0971045 * o + .7141733 * a) / j)),
              new F(116 * u - 16,500 * (n - u),200 * (u - r),t.opacity)
          }
          function Y(t, e) {
            return new F(t,0,0,null == e ? 1 : e)
          }
          function X(t, e, n, r) {
            return 1 === arguments.length ? G(t) : new F(t,e,n,null == r ? 1 : r)
          }
          function F(t, e, n, r) {
            this.l = +t,
              this.a = +e,
              this.b = +n,
              this.opacity = +r
          }
          function R(t) {
            return t > D ? Math.pow(t, 1 / 3) : t / N + T
          }
          function H(t) {
            return t > L ? t * t * t : N * (t - T)
          }
          function z(t) {
            return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
          }
          function q(t) {
            return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
          }
          function U(t) {
            if (t instanceof K)
              return new K(t.h,t.c,t.l,t.opacity);
            if (t instanceof F || (t = G(t)),
            0 === t.a && 0 === t.b)
              return new K(NaN,0,t.l,t.opacity);
            var e = Math.atan2(t.b, t.a) * k;
            return new K(e < 0 ? e + 360 : e,Math.sqrt(t.a * t.a + t.b * t.b),t.l,t.opacity)
          }
          function W(t, e, n, r) {
            return 1 === arguments.length ? U(t) : new K(n,e,t,null == r ? 1 : r)
          }
          function V(t, e, n, r) {
            return 1 === arguments.length ? U(t) : new K(t,e,n,null == r ? 1 : r)
          }
          function K(t, e, n, r) {
            this.h = +t,
              this.c = +e,
              this.l = +n,
              this.opacity = +r
          }
          r(F, X, i(o, {
            brighter: function(t) {
              return new F(this.l + 18 * (null == t ? 1 : t),this.a,this.b,this.opacity)
            },
            darker: function(t) {
              return new F(this.l - 18 * (null == t ? 1 : t),this.a,this.b,this.opacity)
            },
            rgb: function() {
              var t = (this.l + 16) / 116
                , e = isNaN(this.a) ? t : t + this.a / 500
                , n = isNaN(this.b) ? t : t - this.b / 200;
              return new S(z(3.1338561 * (e = I * H(e)) - 1.6168667 * (t = B * H(t)) - .4906146 * (n = j * H(n))),z(-.9787684 * e + 1.9161415 * t + .033454 * n),z(.0719453 * e - .2289914 * t + 1.4052427 * n),this.opacity)
            }
          })),
            r(K, V, i(o, {
              brighter: function(t) {
                return new K(this.h,this.c,this.l + 18 * (null == t ? 1 : t),this.opacity)
              },
              darker: function(t) {
                return new K(this.h,this.c,this.l - 18 * (null == t ? 1 : t),this.opacity)
              },
              rgb: function() {
                return G(this).rgb()
              }
            }));
          var Z = -.14861
            , Q = 1.78277
            , $ = -.29227
            , J = -.90649
            , tt = 1.97294
            , et = tt * J
            , nt = tt * Q
            , rt = Q * $ - J * Z;
          function it(t, e, n, r) {
            return 1 === arguments.length ? function(t) {
              if (t instanceof ot)
                return new ot(t.h,t.s,t.l,t.opacity);
              t instanceof S || (t = w(t));
              var e = t.r / 255
                , n = t.g / 255
                , r = t.b / 255
                , i = (rt * r + et * e - nt * n) / (rt + et - nt)
                , o = r - i
                , a = (tt * (n - i) - $ * o) / J
                , u = Math.sqrt(a * a + o * o) / (tt * i * (1 - i))
                , s = u ? Math.atan2(a, o) * k - 120 : NaN;
              return new ot(s < 0 ? s + 360 : s,u,i,t.opacity)
            }(t) : new ot(t,e,n,null == r ? 1 : r)
          }
          function ot(t, e, n, r) {
            this.h = +t,
              this.s = +e,
              this.l = +n,
              this.opacity = +r
          }
          r(ot, it, i(o, {
            brighter: function(t) {
              return t = null == t ? 1 / .7 : Math.pow(1 / .7, t),
                new ot(this.h,this.s,this.l * t,this.opacity)
            },
            darker: function(t) {
              return t = null == t ? .7 : Math.pow(.7, t),
                new ot(this.h,this.s,this.l * t,this.opacity)
            },
            rgb: function() {
              var t = isNaN(this.h) ? 0 : (this.h + 120) * C
                , e = +this.l
                , n = isNaN(this.s) ? 0 : this.s * e * (1 - e)
                , r = Math.cos(t)
                , i = Math.sin(t);
              return new S(255 * (e + n * (Z * r + Q * i)),255 * (e + n * ($ * r + J * i)),255 * (e + n * (tt * r)),this.opacity)
            }
          })),
            n.d(e, "a", function() {
              return y
            }),
            n.d(e, "h", function() {
              return _
            }),
            n.d(e, "e", function() {
              return O
            }),
            n.d(e, "f", function() {
              return X
            }),
            n.d(e, "d", function() {
              return V
            }),
            n.d(e, "g", function() {
              return W
            }),
            n.d(e, "c", function() {
              return Y
            }),
            n.d(e, "b", function() {
              return it
            })
        }
          , , , , , , , , , , , , , , function(t, e, n) {
            "use strict";
            n.r(e);
            var r, i, o = 0, a = 0, u = 0, s = 1e3, c = 0, h = 0, l = 0, f = "object" == typeof performance && performance.now ? performance : Date, d = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
                setTimeout(t, 17)
              }
            ;
            function p() {
              return h || (d(g),
                h = f.now() + l)
            }
            function g() {
              h = 0
            }
            function m() {
              this._call = this._time = this._next = null
            }
            function v(t, e, n) {
              var r = new m;
              return r.restart(t, e, n),
                r
            }
            function y() {
              p(),
                ++o;
              for (var t, e = r; e; )
                (t = h - e._time) >= 0 && e._call.call(null, t),
                  e = e._next;
              --o
            }
            function x() {
              h = (c = f.now()) + l,
                o = a = 0;
              try {
                y()
              } finally {
                o = 0,
                  function() {
                    for (var t, e, n = r, o = 1 / 0; n; )
                      n._call ? (o > n._time && (o = n._time),
                        t = n,
                        n = n._next) : (e = n._next,
                        n._next = null,
                        n = t ? t._next = e : r = e);
                    i = t,
                      w(o)
                  }(),
                  h = 0
              }
            }
            function b() {
              var t = f.now()
                , e = t - c;
              e > s && (l -= e,
                c = t)
            }
            function w(t) {
              o || (a && (a = clearTimeout(a)),
                t - h > 24 ? (t < 1 / 0 && (a = setTimeout(x, t - f.now() - l)),
                u && (u = clearInterval(u))) : (u || (c = f.now(),
                  u = setInterval(b, s)),
                  o = 1,
                  d(x)))
            }
            m.prototype = v.prototype = {
              constructor: m,
              restart: function(t, e, n) {
                if ("function" != typeof t)
                  throw new TypeError("callback is not a function");
                n = (null == n ? p() : +n) + (null == e ? 0 : +e),
                this._next || i === this || (i ? i._next = this : r = this,
                  i = this),
                  this._call = t,
                  this._time = n,
                  w()
              },
              stop: function() {
                this._call && (this._call = null,
                  this._time = 1 / 0,
                  w())
              }
            };
            var _ = function(t, e, n) {
              var r = new m;
              return e = null == e ? 0 : +e,
                r.restart(function(n) {
                  r.stop(),
                    t(n + e)
                }, e, n),
                r
            }
              , S = function(t, e, n) {
              var r = new m
                , i = e;
              return null == e ? (r.restart(t, e, n),
                r) : (e = +e,
                n = null == n ? p() : +n,
                r.restart(function o(a) {
                  a += i,
                    r.restart(o, i += e, n),
                    t(a)
                }, e, n),
                r)
            };
            n.d(e, "now", function() {
              return p
            }),
              n.d(e, "timer", function() {
                return v
              }),
              n.d(e, "timerFlush", function() {
                return y
              }),
              n.d(e, "timeout", function() {
                return _
              }),
              n.d(e, "interval", function() {
                return S
              })
          }
          , , function(t, e, n) {
            var r = n(408)
              , i = {};
            r.merge(i, r, {
              mixin: function(t, e) {
                var n = t.CFG ? "CFG" : "ATTRS";
                if (t && e) {
                  t._mixins = e,
                    t[n] = t[n] || {};
                  var r = {};
                  i.each(e, function(e) {
                    i.augment(t, e);
                    var o = e[n];
                    o && i.merge(r, o)
                  }),
                    t[n] = i.merge(r, t[n])
                }
              }
            }),
              t.exports = i
          }
          , , , , , function(t, e, n) {
            var r = {}
              , i = n(448)
              , o = n(514)
              , a = n(152)
              , u = n(493)
              , s = n(492)
              , c = n(491);
            a.mix(r, a, s, c, u, o, i),
              t.exports = r
          }
          , , , , , , function(t, e, n) {
            "use strict";
            function r(t) {
              return +t
            }
            function i(t) {
              return t * t
            }
            function o(t) {
              return t * (2 - t)
            }
            function a(t) {
              return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2
            }
            function u(t) {
              return t * t * t
            }
            function s(t) {
              return --t * t * t + 1
            }
            function c(t) {
              return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
            }
            n.r(e);
            var h = function t(e) {
              function n(t) {
                return Math.pow(t, e)
              }
              return e = +e,
                n.exponent = t,
                n
            }(3)
              , l = function t(e) {
              function n(t) {
                return 1 - Math.pow(1 - t, e)
              }
              return e = +e,
                n.exponent = t,
                n
            }(3)
              , f = function t(e) {
              function n(t) {
                return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2
              }
              return e = +e,
                n.exponent = t,
                n
            }(3)
              , d = Math.PI
              , p = d / 2;
            function g(t) {
              return 1 - Math.cos(t * p)
            }
            function m(t) {
              return Math.sin(t * p)
            }
            function v(t) {
              return (1 - Math.cos(d * t)) / 2
            }
            function y(t) {
              return Math.pow(2, 10 * t - 10)
            }
            function x(t) {
              return 1 - Math.pow(2, -10 * t)
            }
            function b(t) {
              return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2
            }
            function w(t) {
              return 1 - Math.sqrt(1 - t * t)
            }
            function _(t) {
              return Math.sqrt(1 - --t * t)
            }
            function S(t) {
              return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2
            }
            var M = 4 / 11
              , P = 6 / 11
              , O = 8 / 11
              , E = .75
              , A = 9 / 11
              , C = 10 / 11
              , k = .9375
              , I = 21 / 22
              , B = 63 / 64
              , j = 1 / M / M;
            function T(t) {
              return 1 - L(1 - t)
            }
            function L(t) {
              return (t = +t) < M ? j * t * t : t < O ? j * (t -= P) * t + E : t < C ? j * (t -= A) * t + k : j * (t -= I) * t + B
            }
            function N(t) {
              return ((t *= 2) <= 1 ? 1 - L(1 - t) : L(t - 1) + 1) / 2
            }
            var D = function t(e) {
              function n(t) {
                return t * t * ((e + 1) * t - e)
              }
              return e = +e,
                n.overshoot = t,
                n
            }(1.70158)
              , G = function t(e) {
              function n(t) {
                return --t * t * ((e + 1) * t + e) + 1
              }
              return e = +e,
                n.overshoot = t,
                n
            }(1.70158)
              , Y = function t(e) {
              function n(t) {
                return ((t *= 2) < 1 ? t * t * ((e + 1) * t - e) : (t -= 2) * t * ((e + 1) * t + e) + 2) / 2
              }
              return e = +e,
                n.overshoot = t,
                n
            }(1.70158)
              , X = 2 * Math.PI
              , F = function t(e, n) {
              var r = Math.asin(1 / (e = Math.max(1, e))) * (n /= X);
              function i(t) {
                return e * Math.pow(2, 10 * --t) * Math.sin((r - t) / n)
              }
              return i.amplitude = function(e) {
                return t(e, n * X)
              }
                ,
                i.period = function(n) {
                  return t(e, n)
                }
                ,
                i
            }(1, .3)
              , R = function t(e, n) {
              var r = Math.asin(1 / (e = Math.max(1, e))) * (n /= X);
              function i(t) {
                return 1 - e * Math.pow(2, -10 * (t = +t)) * Math.sin((t + r) / n)
              }
              return i.amplitude = function(e) {
                return t(e, n * X)
              }
                ,
                i.period = function(n) {
                  return t(e, n)
                }
                ,
                i
            }(1, .3)
              , H = function t(e, n) {
              var r = Math.asin(1 / (e = Math.max(1, e))) * (n /= X);
              function i(t) {
                return ((t = 2 * t - 1) < 0 ? e * Math.pow(2, 10 * t) * Math.sin((r - t) / n) : 2 - e * Math.pow(2, -10 * t) * Math.sin((r + t) / n)) / 2
              }
              return i.amplitude = function(e) {
                return t(e, n * X)
              }
                ,
                i.period = function(n) {
                  return t(e, n)
                }
                ,
                i
            }(1, .3);
            n.d(e, "easeLinear", function() {
              return r
            }),
              n.d(e, "easeQuad", function() {
                return a
              }),
              n.d(e, "easeQuadIn", function() {
                return i
              }),
              n.d(e, "easeQuadOut", function() {
                return o
              }),
              n.d(e, "easeQuadInOut", function() {
                return a
              }),
              n.d(e, "easeCubic", function() {
                return c
              }),
              n.d(e, "easeCubicIn", function() {
                return u
              }),
              n.d(e, "easeCubicOut", function() {
                return s
              }),
              n.d(e, "easeCubicInOut", function() {
                return c
              }),
              n.d(e, "easePoly", function() {
                return f
              }),
              n.d(e, "easePolyIn", function() {
                return h
              }),
              n.d(e, "easePolyOut", function() {
                return l
              }),
              n.d(e, "easePolyInOut", function() {
                return f
              }),
              n.d(e, "easeSin", function() {
                return v
              }),
              n.d(e, "easeSinIn", function() {
                return g
              }),
              n.d(e, "easeSinOut", function() {
                return m
              }),
              n.d(e, "easeSinInOut", function() {
                return v
              }),
              n.d(e, "easeExp", function() {
                return b
              }),
              n.d(e, "easeExpIn", function() {
                return y
              }),
              n.d(e, "easeExpOut", function() {
                return x
              }),
              n.d(e, "easeExpInOut", function() {
                return b
              }),
              n.d(e, "easeCircle", function() {
                return S
              }),
              n.d(e, "easeCircleIn", function() {
                return w
              }),
              n.d(e, "easeCircleOut", function() {
                return _
              }),
              n.d(e, "easeCircleInOut", function() {
                return S
              }),
              n.d(e, "easeBounce", function() {
                return L
              }),
              n.d(e, "easeBounceIn", function() {
                return T
              }),
              n.d(e, "easeBounceOut", function() {
                return L
              }),
              n.d(e, "easeBounceInOut", function() {
                return N
              }),
              n.d(e, "easeBack", function() {
                return Y
              }),
              n.d(e, "easeBackIn", function() {
                return D
              }),
              n.d(e, "easeBackOut", function() {
                return G
              }),
              n.d(e, "easeBackInOut", function() {
                return Y
              }),
              n.d(e, "easeElastic", function() {
                return R
              }),
              n.d(e, "easeElasticIn", function() {
                return F
              }),
              n.d(e, "easeElasticOut", function() {
                return R
              }),
              n.d(e, "easeElasticInOut", function() {
                return H
              })
          }
          , function(t, e, n) {
            var r = n(60)
              , i = Array.isArray ? Array.isArray : function(t) {
                return r(t, "Array")
              }
            ;
            t.exports = i
          }
          , function(t, e, n) {
            var r = n(385)
              , i = n(29);
            t.exports = function(t, e) {
              if (t)
                if (i(t))
                  for (var n = 0, o = t.length; n < o && !1 !== e(t[n], n); n++)
                    ;
                else if (r(t))
                  for (var a in t)
                    if (t.hasOwnProperty(a) && !1 === e(t[a], a))
                      break
            }
          }
          , , , , , , , function(t, e, n) {
            var r = n(17)
              , i = n(508)
              , o = n(405)
              , a = n(376)
              , u = function t(e) {
              t.superclass.constructor.call(this, e)
            };
            u.ATTRS = {},
              r.extend(u, o);
            var s = {
              matrix: "matrix",
              path: "path",
              points: "points",
              lineDash: "lineDash"
            };
            r.augment(u, i, {
              isShape: !0,
              drawInner: function(t) {
                var e = this._attrs;
                this.createPath(t);
                var n = t.globalAlpha;
                if (this.hasFill()) {
                  var i = e.fillOpacity;
                  r.isNil(i) || 1 === i ? t.fill() : (t.globalAlpha = i,
                    t.fill(),
                    t.globalAlpha = n)
                }
                if (this.hasStroke() && this._attrs.lineWidth > 0) {
                  var o = e.strokeOpacity;
                  r.isNil(o) || 1 === o || (t.globalAlpha = o),
                    t.stroke()
                }
                this.afterPath(t)
              },
              afterPath: function() {},
              isHitBox: function() {
                return !0
              },
              isHit: function(t, e) {
                var n = [t, e, 1];
                if (this.invert(n),
                  this.isHitBox()) {
                  var r = this.getBBox();
                  if (r && !a.box(r.minX, r.maxX, r.minY, r.maxY, n[0], n[1]))
                    return !1
                }
                var i = this._attrs.clip;
                return i ? (i.invert(n, this.get("canvas")),
                !!i.isPointInPath(n[0], n[1]) && this.isPointInPath(n[0], n[1])) : this.isPointInPath(n[0], n[1])
              },
              calculateBox: function() {
                return null
              },
              getHitLineWidth: function() {
                var t = this._attrs
                  , e = t.lineAppendWidth || 0;
                return (t.lineWidth || 0) + e
              },
              clearTotalMatrix: function() {
                this._cfg.totalMatrix = null,
                  this._cfg.region = null
              },
              clearBBox: function() {
                this._cfg.box = null,
                  this._cfg.region = null
              },
              getBBox: function() {
                var t = this._cfg.box;
                return t || ((t = this.calculateBox()) && (t.x = t.minX,
                  t.y = t.minY,
                  t.width = t.maxX - t.minX,
                  t.height = t.maxY - t.minY),
                  this._cfg.box = t),
                  t
              },
              clone: function() {
                var t = null
                  , e = this._attrs
                  , n = {};
                return r.each(e, function(t, i) {
                  s[i] && r.isArray(e[i]) ? n[i] = function(t) {
                    for (var e = [], n = 0; n < t.length; n++)
                      r.isArray(t[n]) ? e.push([].concat(t[n])) : e.push(t[n]);
                    return e
                  }(e[i]) : n[i] = e[i]
                }),
                  (t = new this.constructor({
                    attrs: n
                  }))._cfg.zIndex = this._cfg.zIndex,
                  t
              }
            }),
              t.exports = u
          }
          , function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
              value: !0
            }),
              e.setMatrixArrayType = function(t) {
                e.ARRAY_TYPE = t
              }
              ,
              e.toRadian = function(t) {
                return t * i
              }
              ,
              e.equals = function(t, e) {
                return Math.abs(t - e) <= r * Math.max(1, Math.abs(t), Math.abs(e))
              }
            ;
            var r = e.EPSILON = 1e-6;
            e.ARRAY_TYPE = "undefined" != typeof Float32Array ? Float32Array : Array,
              e.RANDOM = Math.random;
            var i = Math.PI / 180
          }
          , , , , , , , , , function(t, e, n) {
            var r = n(60);
            t.exports = function(t) {
              return r(t, "Function")
            }
          }
          , , , , , , , , , , , , , function(t, e) {
            var n = {}.toString;
            t.exports = function(t, e) {
              return n.call(t) === "[object " + e + "]"
            }
          }
          , function(t, e, n) {
            var r;
            /*!
     * EventEmitter v5.1.0 - git.io/ee
     * Unlicense - http://unlicense.org/
     * Oliver Caldwell - http://oli.me.uk/
     * @preserve
     */
            !function(e) {
              "use strict";
              function i() {}
              var o = i.prototype
                , a = e.EventEmitter;
              function u(t, e) {
                for (var n = t.length; n--; )
                  if (t[n].listener === e)
                    return n;
                return -1
              }
              function s(t) {
                return function() {
                  return this[t].apply(this, arguments)
                }
              }
              o.getListeners = function(t) {
                var e, n, r = this._getEvents();
                if (t instanceof RegExp)
                  for (n in e = {},
                    r)
                    r.hasOwnProperty(n) && t.test(n) && (e[n] = r[n]);
                else
                  e = r[t] || (r[t] = []);
                return e
              }
                ,
                o.flattenListeners = function(t) {
                  var e, n = [];
                  for (e = 0; e < t.length; e += 1)
                    n.push(t[e].listener);
                  return n
                }
                ,
                o.getListenersAsObject = function(t) {
                  var e, n = this.getListeners(t);
                  return n instanceof Array && ((e = {})[t] = n),
                  e || n
                }
                ,
                o.addListener = function(t, e) {
                  if (!function t(e) {
                    return "function" == typeof e || e instanceof RegExp || !(!e || "object" != typeof e) && t(e.listener)
                  }(e))
                    throw new TypeError("listener must be a function");
                  var n, r = this.getListenersAsObject(t), i = "object" == typeof e;
                  for (n in r)
                    r.hasOwnProperty(n) && -1 === u(r[n], e) && r[n].push(i ? e : {
                      listener: e,
                      once: !1
                    });
                  return this
                }
                ,
                o.on = s("addListener"),
                o.addOnceListener = function(t, e) {
                  return this.addListener(t, {
                    listener: e,
                    once: !0
                  })
                }
                ,
                o.once = s("addOnceListener"),
                o.defineEvent = function(t) {
                  return this.getListeners(t),
                    this
                }
                ,
                o.defineEvents = function(t) {
                  for (var e = 0; e < t.length; e += 1)
                    this.defineEvent(t[e]);
                  return this
                }
                ,
                o.removeListener = function(t, e) {
                  var n, r, i = this.getListenersAsObject(t);
                  for (r in i)
                    i.hasOwnProperty(r) && -1 !== (n = u(i[r], e)) && i[r].splice(n, 1);
                  return this
                }
                ,
                o.off = s("removeListener"),
                o.addListeners = function(t, e) {
                  return this.manipulateListeners(!1, t, e)
                }
                ,
                o.removeListeners = function(t, e) {
                  return this.manipulateListeners(!0, t, e)
                }
                ,
                o.manipulateListeners = function(t, e, n) {
                  var r, i, o = t ? this.removeListener : this.addListener, a = t ? this.removeListeners : this.addListeners;
                  if ("object" != typeof e || e instanceof RegExp)
                    for (r = n.length; r--; )
                      o.call(this, e, n[r]);
                  else
                    for (r in e)
                      e.hasOwnProperty(r) && (i = e[r]) && ("function" == typeof i ? o.call(this, r, i) : a.call(this, r, i));
                  return this
                }
                ,
                o.removeEvent = function(t) {
                  var e, n = typeof t, r = this._getEvents();
                  if ("string" === n)
                    delete r[t];
                  else if (t instanceof RegExp)
                    for (e in r)
                      r.hasOwnProperty(e) && t.test(e) && delete r[e];
                  else
                    delete this._events;
                  return this
                }
                ,
                o.removeAllListeners = s("removeEvent"),
                o.emitEvent = function(t, e) {
                  var n, r, i, o, a = this.getListenersAsObject(t);
                  for (o in a)
                    if (a.hasOwnProperty(o))
                      for (n = a[o].slice(0),
                             i = 0; i < n.length; i++)
                        !0 === (r = n[i]).once && this.removeListener(t, r.listener),
                        r.listener.apply(this, e || []) === this._getOnceReturnValue() && this.removeListener(t, r.listener);
                  return this
                }
                ,
                o.trigger = s("emitEvent"),
                o.emit = function(t) {
                  var e = Array.prototype.slice.call(arguments, 1);
                  return this.emitEvent(t, e)
                }
                ,
                o.setOnceReturnValue = function(t) {
                  return this._onceReturnValue = t,
                    this
                }
                ,
                o._getOnceReturnValue = function() {
                  return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
                }
                ,
                o._getEvents = function() {
                  return this._events || (this._events = {})
                }
                ,
                i.noConflict = function() {
                  return e.EventEmitter = a,
                    i
                }
                ,
              void 0 === (r = function() {
                return i
              }
                .call(e, n, e, t)) || (t.exports = r)
            }(this || {})
          }
          , function(t, e) {
            t.exports = function(t) {
              return null !== t && "function" != typeof t && isFinite(t.length)
            }
          }
          , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
            var r = n(60);
            t.exports = function(t) {
              return r(t, "Number")
            }
          }
          , function(t, e) {
            t.exports = function(t) {
              return null === t || void 0 === t
            }
          }
          , function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(1);
            function i(t, e, n, r, i) {
              var o = t * t
                , a = o * t;
              return ((1 - 3 * t + 3 * o - a) * e + (4 - 6 * o + 3 * a) * n + (1 + 3 * t + 3 * o - 3 * a) * r + a * i) / 6
            }
            var o = function(t) {
              var e = t.length - 1;
              return function(n) {
                var r = n <= 0 ? n = 0 : n >= 1 ? (n = 1,
                e - 1) : Math.floor(n * e)
                  , o = t[r]
                  , a = t[r + 1]
                  , u = r > 0 ? t[r - 1] : 2 * o - a
                  , s = r < e - 1 ? t[r + 2] : 2 * a - o;
                return i((n - r / e) * e, u, o, a, s)
              }
            }
              , a = function(t) {
              var e = t.length;
              return function(n) {
                var r = Math.floor(((n %= 1) < 0 ? ++n : n) * e)
                  , o = t[(r + e - 1) % e]
                  , a = t[r % e]
                  , u = t[(r + 1) % e]
                  , s = t[(r + 2) % e];
                return i((n - r / e) * e, o, a, u, s)
              }
            }
              , u = function(t) {
              return function() {
                return t
              }
            };
            function s(t, e) {
              return function(n) {
                return t + n * e
              }
            }
            function c(t, e) {
              var n = e - t;
              return n ? s(t, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : u(isNaN(t) ? e : t)
            }
            function h(t, e) {
              var n = e - t;
              return n ? s(t, n) : u(isNaN(t) ? e : t)
            }
            var l = function t(e) {
              var n = function(t) {
                return 1 == (t = +t) ? h : function(e, n) {
                  return n - e ? function(t, e, n) {
                    return t = Math.pow(t, n),
                      e = Math.pow(e, n) - t,
                      n = 1 / n,
                      function(r) {
                        return Math.pow(t + r * e, n)
                      }
                  }(e, n, t) : u(isNaN(e) ? n : e)
                }
              }(e);
              function i(t, e) {
                var i = n((t = Object(r.h)(t)).r, (e = Object(r.h)(e)).r)
                  , o = n(t.g, e.g)
                  , a = n(t.b, e.b)
                  , u = h(t.opacity, e.opacity);
                return function(e) {
                  return t.r = i(e),
                    t.g = o(e),
                    t.b = a(e),
                    t.opacity = u(e),
                  t + ""
                }
              }
              return i.gamma = t,
                i
            }(1);
            function f(t) {
              return function(e) {
                var n, i, o = e.length, a = new Array(o), u = new Array(o), s = new Array(o);
                for (n = 0; n < o; ++n)
                  i = Object(r.h)(e[n]),
                    a[n] = i.r || 0,
                    u[n] = i.g || 0,
                    s[n] = i.b || 0;
                return a = t(a),
                  u = t(u),
                  s = t(s),
                  i.opacity = 1,
                  function(t) {
                    return i.r = a(t),
                      i.g = u(t),
                      i.b = s(t),
                    i + ""
                  }
              }
            }
            var d, p, g, m, v = f(o), y = f(a), x = function(t, e) {
              var n, r = e ? e.length : 0, i = t ? Math.min(r, t.length) : 0, o = new Array(i), a = new Array(r);
              for (n = 0; n < i; ++n)
                o[n] = O(t[n], e[n]);
              for (; n < r; ++n)
                a[n] = e[n];
              return function(t) {
                for (n = 0; n < i; ++n)
                  a[n] = o[n](t);
                return a
              }
            }, b = function(t, e) {
              var n = new Date;
              return e -= t = +t,
                function(r) {
                  return n.setTime(t + e * r),
                    n
                }
            }, w = function(t, e) {
              return e -= t = +t,
                function(n) {
                  return t + e * n
                }
            }, _ = function(t, e) {
              var n, r = {}, i = {};
              for (n in null !== t && "object" == typeof t || (t = {}),
              null !== e && "object" == typeof e || (e = {}),
                e)
                n in t ? r[n] = O(t[n], e[n]) : i[n] = e[n];
              return function(t) {
                for (n in r)
                  i[n] = r[n](t);
                return i
              }
            }, S = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, M = new RegExp(S.source,"g"), P = function(t, e) {
              var n, r, i, o = S.lastIndex = M.lastIndex = 0, a = -1, u = [], s = [];
              for (t += "",
                     e += ""; (n = S.exec(t)) && (r = M.exec(e)); )
                (i = r.index) > o && (i = e.slice(o, i),
                  u[a] ? u[a] += i : u[++a] = i),
                  (n = n[0]) === (r = r[0]) ? u[a] ? u[a] += r : u[++a] = r : (u[++a] = null,
                    s.push({
                      i: a,
                      x: w(n, r)
                    })),
                  o = M.lastIndex;
              return o < e.length && (i = e.slice(o),
                u[a] ? u[a] += i : u[++a] = i),
                u.length < 2 ? s[0] ? function(t) {
                  return function(e) {
                    return t(e) + ""
                  }
                }(s[0].x) : function(t) {
                  return function() {
                    return t
                  }
                }(e) : (e = s.length,
                    function(t) {
                      for (var n, r = 0; r < e; ++r)
                        u[(n = s[r]).i] = n.x(t);
                      return u.join("")
                    }
                )
            }, O = function(t, e) {
              var n, i = typeof e;
              return null == e || "boolean" === i ? u(e) : ("number" === i ? w : "string" === i ? (n = Object(r.a)(e)) ? (e = n,
                l) : P : e instanceof r.a ? l : e instanceof Date ? b : Array.isArray(e) ? x : "function" != typeof e.valueOf && "function" != typeof e.toString || isNaN(e) ? _ : w)(t, e)
            }, E = function(t, e) {
              return e -= t = +t,
                function(n) {
                  return Math.round(t + e * n)
                }
            }, A = 180 / Math.PI, C = {
              translateX: 0,
              translateY: 0,
              rotate: 0,
              skewX: 0,
              scaleX: 1,
              scaleY: 1
            }, k = function(t, e, n, r, i, o) {
              var a, u, s;
              return (a = Math.sqrt(t * t + e * e)) && (t /= a,
                e /= a),
              (s = t * n + e * r) && (n -= t * s,
                r -= e * s),
              (u = Math.sqrt(n * n + r * r)) && (n /= u,
                r /= u,
                s /= u),
              t * r < e * n && (t = -t,
                e = -e,
                s = -s,
                a = -a),
                {
                  translateX: i,
                  translateY: o,
                  rotate: Math.atan2(e, t) * A,
                  skewX: Math.atan(s) * A,
                  scaleX: a,
                  scaleY: u
                }
            };
            function I(t, e, n, r) {
              function i(t) {
                return t.length ? t.pop() + " " : ""
              }
              return function(o, a) {
                var u = []
                  , s = [];
                return o = t(o),
                  a = t(a),
                  function(t, r, i, o, a, u) {
                    if (t !== i || r !== o) {
                      var s = a.push("translate(", null, e, null, n);
                      u.push({
                        i: s - 4,
                        x: w(t, i)
                      }, {
                        i: s - 2,
                        x: w(r, o)
                      })
                    } else
                      (i || o) && a.push("translate(" + i + e + o + n)
                  }(o.translateX, o.translateY, a.translateX, a.translateY, u, s),
                  function(t, e, n, o) {
                    t !== e ? (t - e > 180 ? e += 360 : e - t > 180 && (t += 360),
                      o.push({
                        i: n.push(i(n) + "rotate(", null, r) - 2,
                        x: w(t, e)
                      })) : e && n.push(i(n) + "rotate(" + e + r)
                  }(o.rotate, a.rotate, u, s),
                  function(t, e, n, o) {
                    t !== e ? o.push({
                      i: n.push(i(n) + "skewX(", null, r) - 2,
                      x: w(t, e)
                    }) : e && n.push(i(n) + "skewX(" + e + r)
                  }(o.skewX, a.skewX, u, s),
                  function(t, e, n, r, o, a) {
                    if (t !== n || e !== r) {
                      var u = o.push(i(o) + "scale(", null, ",", null, ")");
                      a.push({
                        i: u - 4,
                        x: w(t, n)
                      }, {
                        i: u - 2,
                        x: w(e, r)
                      })
                    } else
                      1 === n && 1 === r || o.push(i(o) + "scale(" + n + "," + r + ")")
                  }(o.scaleX, o.scaleY, a.scaleX, a.scaleY, u, s),
                  o = a = null,
                  function(t) {
                    for (var e, n = -1, r = s.length; ++n < r; )
                      u[(e = s[n]).i] = e.x(t);
                    return u.join("")
                  }
              }
            }
            var B = I(function(t) {
              return "none" === t ? C : (d || (d = document.createElement("DIV"),
                p = document.documentElement,
                g = document.defaultView),
                d.style.transform = t,
                t = g.getComputedStyle(p.appendChild(d), null).getPropertyValue("transform"),
                p.removeChild(d),
                t = t.slice(7, -1).split(","),
                k(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
            }, "px, ", "px)", "deg)")
              , j = I(function(t) {
              return null == t ? C : (m || (m = document.createElementNS("http://www.w3.org/2000/svg", "g")),
                m.setAttribute("transform", t),
                (t = m.transform.baseVal.consolidate()) ? (t = t.matrix,
                  k(t.a, t.b, t.c, t.d, t.e, t.f)) : C)
            }, ", ", ")", ")")
              , T = Math.SQRT2;
            function L(t) {
              return ((t = Math.exp(t)) + 1 / t) / 2
            }
            var N = function(t, e) {
              var n, r, i = t[0], o = t[1], a = t[2], u = e[0], s = e[1], c = e[2], h = u - i, l = s - o, f = h * h + l * l;
              if (f < 1e-12)
                r = Math.log(c / a) / T,
                  n = function(t) {
                    return [i + t * h, o + t * l, a * Math.exp(T * t * r)]
                  }
                ;
              else {
                var d = Math.sqrt(f)
                  , p = (c * c - a * a + 4 * f) / (2 * a * 2 * d)
                  , g = (c * c - a * a - 4 * f) / (2 * c * 2 * d)
                  , m = Math.log(Math.sqrt(p * p + 1) - p)
                  , v = Math.log(Math.sqrt(g * g + 1) - g);
                r = (v - m) / T,
                  n = function(t) {
                    var e = t * r
                      , n = L(m)
                      , u = a / (2 * d) * (n * function(t) {
                      return ((t = Math.exp(2 * t)) - 1) / (t + 1)
                    }(T * e + m) - function(t) {
                      return ((t = Math.exp(t)) - 1 / t) / 2
                    }(m));
                    return [i + u * h, o + u * l, a * n / L(T * e + m)]
                  }
              }
              return n.duration = 1e3 * r,
                n
            };
            function D(t) {
              return function(e, n) {
                var i = t((e = Object(r.e)(e)).h, (n = Object(r.e)(n)).h)
                  , o = h(e.s, n.s)
                  , a = h(e.l, n.l)
                  , u = h(e.opacity, n.opacity);
                return function(t) {
                  return e.h = i(t),
                    e.s = o(t),
                    e.l = a(t),
                    e.opacity = u(t),
                  e + ""
                }
              }
            }
            var G = D(c)
              , Y = D(h);
            function X(t, e) {
              var n = h((t = Object(r.f)(t)).l, (e = Object(r.f)(e)).l)
                , i = h(t.a, e.a)
                , o = h(t.b, e.b)
                , a = h(t.opacity, e.opacity);
              return function(e) {
                return t.l = n(e),
                  t.a = i(e),
                  t.b = o(e),
                  t.opacity = a(e),
                t + ""
              }
            }
            function F(t) {
              return function(e, n) {
                var i = t((e = Object(r.d)(e)).h, (n = Object(r.d)(n)).h)
                  , o = h(e.c, n.c)
                  , a = h(e.l, n.l)
                  , u = h(e.opacity, n.opacity);
                return function(t) {
                  return e.h = i(t),
                    e.c = o(t),
                    e.l = a(t),
                    e.opacity = u(t),
                  e + ""
                }
              }
            }
            var R = F(c)
              , H = F(h);
            function z(t) {
              return function e(n) {
                function i(e, i) {
                  var o = t((e = Object(r.b)(e)).h, (i = Object(r.b)(i)).h)
                    , a = h(e.s, i.s)
                    , u = h(e.l, i.l)
                    , s = h(e.opacity, i.opacity);
                  return function(t) {
                    return e.h = o(t),
                      e.s = a(t),
                      e.l = u(Math.pow(t, n)),
                      e.opacity = s(t),
                    e + ""
                  }
                }
                return n = +n,
                  i.gamma = e,
                  i
              }(1)
            }
            var q = z(c)
              , U = z(h)
              , W = function(t, e) {
              for (var n = new Array(e), r = 0; r < e; ++r)
                n[r] = t(r / (e - 1));
              return n
            };
            n.d(e, "interpolate", function() {
              return O
            }),
              n.d(e, "interpolateArray", function() {
                return x
              }),
              n.d(e, "interpolateBasis", function() {
                return o
              }),
              n.d(e, "interpolateBasisClosed", function() {
                return a
              }),
              n.d(e, "interpolateDate", function() {
                return b
              }),
              n.d(e, "interpolateNumber", function() {
                return w
              }),
              n.d(e, "interpolateObject", function() {
                return _
              }),
              n.d(e, "interpolateRound", function() {
                return E
              }),
              n.d(e, "interpolateString", function() {
                return P
              }),
              n.d(e, "interpolateTransformCss", function() {
                return B
              }),
              n.d(e, "interpolateTransformSvg", function() {
                return j
              }),
              n.d(e, "interpolateZoom", function() {
                return N
              }),
              n.d(e, "interpolateRgb", function() {
                return l
              }),
              n.d(e, "interpolateRgbBasis", function() {
                return v
              }),
              n.d(e, "interpolateRgbBasisClosed", function() {
                return y
              }),
              n.d(e, "interpolateHsl", function() {
                return G
              }),
              n.d(e, "interpolateHslLong", function() {
                return Y
              }),
              n.d(e, "interpolateLab", function() {
                return X
              }),
              n.d(e, "interpolateHcl", function() {
                return R
              }),
              n.d(e, "interpolateHclLong", function() {
                return H
              }),
              n.d(e, "interpolateCubehelix", function() {
                return q
              }),
              n.d(e, "interpolateCubehelixLong", function() {
                return U
              }),
              n.d(e, "quantize", function() {
                return W
              })
          }
          , , , , , , , , , function(t, e, n) {
            var r = n(372);
            t.exports = {
              track: !0,
              defaultNodeSize: 40,
              labelStyle: {
                fill: "#595959",
                textAlign: "center",
                textBaseline: "middle"
              },
              groupStyle: {
                stroke: "#CED4D9",
                fill: "#F2F4F5",
                radius: 2
              },
              groupBackgroundPadding: [40, 10, 10, 10],
              updateDuration: 450,
              enterDuration: 450,
              leaveDuration: 450,
              updateEasing: "easeQuadOut",
              enterEasing: "easeQuadOut",
              leaveEasing: "easeQuadOut",
              version: r
            }
          }
          , function(t, e, n) {
            t.exports = {
              Canvas: n(513),
              Group: n(406),
              Shape: n(37),
              Arc: n(402),
              Circle: n(401),
              Dom: n(400),
              Ellipse: n(399),
              Fan: n(398),
              Image: n(397),
              Line: n(396),
              Marker: n(374),
              Path: n(395),
              Polygon: n(394),
              Polyline: n(393),
              Rect: n(392),
              Text: n(391),
              PathSegment: n(363),
              PathUtil: n(373),
              Event: n(407),
              version: "3.3.5"
            }
          }
          , function(t, e) {
            var n;
            n = function() {
              return this
            }();
            try {
              n = n || Function("return this")() || (0,
                eval)("this")
            } catch (t) {
              "object" == typeof window && (n = window)
            }
            t.exports = n
          }
          , function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
              value: !0
            }),
              e.forEach = e.sqrLen = e.len = e.sqrDist = e.dist = e.div = e.mul = e.sub = void 0,
              e.create = i,
              e.clone = function(t) {
                var e = new r.ARRAY_TYPE(3);
                return e[0] = t[0],
                  e[1] = t[1],
                  e[2] = t[2],
                  e
              }
              ,
              e.length = o,
              e.fromValues = a,
              e.copy = function(t, e) {
                return t[0] = e[0],
                  t[1] = e[1],
                  t[2] = e[2],
                  t
              }
              ,
              e.set = function(t, e, n, r) {
                return t[0] = e,
                  t[1] = n,
                  t[2] = r,
                  t
              }
              ,
              e.add = function(t, e, n) {
                return t[0] = e[0] + n[0],
                  t[1] = e[1] + n[1],
                  t[2] = e[2] + n[2],
                  t
              }
              ,
              e.subtract = u,
              e.multiply = s,
              e.divide = c,
              e.ceil = function(t, e) {
                return t[0] = Math.ceil(e[0]),
                  t[1] = Math.ceil(e[1]),
                  t[2] = Math.ceil(e[2]),
                  t
              }
              ,
              e.floor = function(t, e) {
                return t[0] = Math.floor(e[0]),
                  t[1] = Math.floor(e[1]),
                  t[2] = Math.floor(e[2]),
                  t
              }
              ,
              e.min = function(t, e, n) {
                return t[0] = Math.min(e[0], n[0]),
                  t[1] = Math.min(e[1], n[1]),
                  t[2] = Math.min(e[2], n[2]),
                  t
              }
              ,
              e.max = function(t, e, n) {
                return t[0] = Math.max(e[0], n[0]),
                  t[1] = Math.max(e[1], n[1]),
                  t[2] = Math.max(e[2], n[2]),
                  t
              }
              ,
              e.round = function(t, e) {
                return t[0] = Math.round(e[0]),
                  t[1] = Math.round(e[1]),
                  t[2] = Math.round(e[2]),
                  t
              }
              ,
              e.scale = function(t, e, n) {
                return t[0] = e[0] * n,
                  t[1] = e[1] * n,
                  t[2] = e[2] * n,
                  t
              }
              ,
              e.scaleAndAdd = function(t, e, n, r) {
                return t[0] = e[0] + n[0] * r,
                  t[1] = e[1] + n[1] * r,
                  t[2] = e[2] + n[2] * r,
                  t
              }
              ,
              e.distance = h,
              e.squaredDistance = l,
              e.squaredLength = f,
              e.negate = function(t, e) {
                return t[0] = -e[0],
                  t[1] = -e[1],
                  t[2] = -e[2],
                  t
              }
              ,
              e.inverse = function(t, e) {
                return t[0] = 1 / e[0],
                  t[1] = 1 / e[1],
                  t[2] = 1 / e[2],
                  t
              }
              ,
              e.normalize = d,
              e.dot = p,
              e.cross = function(t, e, n) {
                var r = e[0]
                  , i = e[1]
                  , o = e[2]
                  , a = n[0]
                  , u = n[1]
                  , s = n[2];
                return t[0] = i * s - o * u,
                  t[1] = o * a - r * s,
                  t[2] = r * u - i * a,
                  t
              }
              ,
              e.lerp = function(t, e, n, r) {
                var i = e[0]
                  , o = e[1]
                  , a = e[2];
                return t[0] = i + r * (n[0] - i),
                  t[1] = o + r * (n[1] - o),
                  t[2] = a + r * (n[2] - a),
                  t
              }
              ,
              e.hermite = function(t, e, n, r, i, o) {
                var a = o * o
                  , u = a * (2 * o - 3) + 1
                  , s = a * (o - 2) + o
                  , c = a * (o - 1)
                  , h = a * (3 - 2 * o);
                return t[0] = e[0] * u + n[0] * s + r[0] * c + i[0] * h,
                  t[1] = e[1] * u + n[1] * s + r[1] * c + i[1] * h,
                  t[2] = e[2] * u + n[2] * s + r[2] * c + i[2] * h,
                  t
              }
              ,
              e.bezier = function(t, e, n, r, i, o) {
                var a = 1 - o
                  , u = a * a
                  , s = o * o
                  , c = u * a
                  , h = 3 * o * u
                  , l = 3 * s * a
                  , f = s * o;
                return t[0] = e[0] * c + n[0] * h + r[0] * l + i[0] * f,
                  t[1] = e[1] * c + n[1] * h + r[1] * l + i[1] * f,
                  t[2] = e[2] * c + n[2] * h + r[2] * l + i[2] * f,
                  t
              }
              ,
              e.random = function(t, e) {
                e = e || 1;
                var n = 2 * r.RANDOM() * Math.PI
                  , i = 2 * r.RANDOM() - 1
                  , o = Math.sqrt(1 - i * i) * e;
                return t[0] = Math.cos(n) * o,
                  t[1] = Math.sin(n) * o,
                  t[2] = i * e,
                  t
              }
              ,
              e.transformMat4 = function(t, e, n) {
                var r = e[0]
                  , i = e[1]
                  , o = e[2]
                  , a = n[3] * r + n[7] * i + n[11] * o + n[15];
                return a = a || 1,
                  t[0] = (n[0] * r + n[4] * i + n[8] * o + n[12]) / a,
                  t[1] = (n[1] * r + n[5] * i + n[9] * o + n[13]) / a,
                  t[2] = (n[2] * r + n[6] * i + n[10] * o + n[14]) / a,
                  t
              }
              ,
              e.transformMat3 = function(t, e, n) {
                var r = e[0]
                  , i = e[1]
                  , o = e[2];
                return t[0] = r * n[0] + i * n[3] + o * n[6],
                  t[1] = r * n[1] + i * n[4] + o * n[7],
                  t[2] = r * n[2] + i * n[5] + o * n[8],
                  t
              }
              ,
              e.transformQuat = function(t, e, n) {
                var r = n[0]
                  , i = n[1]
                  , o = n[2]
                  , a = n[3]
                  , u = e[0]
                  , s = e[1]
                  , c = e[2]
                  , h = i * c - o * s
                  , l = o * u - r * c
                  , f = r * s - i * u
                  , d = i * f - o * l
                  , p = o * h - r * f
                  , g = r * l - i * h
                  , m = 2 * a;
                return h *= m,
                  l *= m,
                  f *= m,
                  d *= 2,
                  p *= 2,
                  g *= 2,
                  t[0] = u + h + d,
                  t[1] = s + l + p,
                  t[2] = c + f + g,
                  t
              }
              ,
              e.rotateX = function(t, e, n, r) {
                var i = []
                  , o = [];
                return i[0] = e[0] - n[0],
                  i[1] = e[1] - n[1],
                  i[2] = e[2] - n[2],
                  o[0] = i[0],
                  o[1] = i[1] * Math.cos(r) - i[2] * Math.sin(r),
                  o[2] = i[1] * Math.sin(r) + i[2] * Math.cos(r),
                  t[0] = o[0] + n[0],
                  t[1] = o[1] + n[1],
                  t[2] = o[2] + n[2],
                  t
              }
              ,
              e.rotateY = function(t, e, n, r) {
                var i = []
                  , o = [];
                return i[0] = e[0] - n[0],
                  i[1] = e[1] - n[1],
                  i[2] = e[2] - n[2],
                  o[0] = i[2] * Math.sin(r) + i[0] * Math.cos(r),
                  o[1] = i[1],
                  o[2] = i[2] * Math.cos(r) - i[0] * Math.sin(r),
                  t[0] = o[0] + n[0],
                  t[1] = o[1] + n[1],
                  t[2] = o[2] + n[2],
                  t
              }
              ,
              e.rotateZ = function(t, e, n, r) {
                var i = []
                  , o = [];
                return i[0] = e[0] - n[0],
                  i[1] = e[1] - n[1],
                  i[2] = e[2] - n[2],
                  o[0] = i[0] * Math.cos(r) - i[1] * Math.sin(r),
                  o[1] = i[0] * Math.sin(r) + i[1] * Math.cos(r),
                  o[2] = i[2],
                  t[0] = o[0] + n[0],
                  t[1] = o[1] + n[1],
                  t[2] = o[2] + n[2],
                  t
              }
              ,
              e.angle = function(t, e) {
                var n = a(t[0], t[1], t[2])
                  , r = a(e[0], e[1], e[2]);
                d(n, n),
                  d(r, r);
                var i = p(n, r);
                return i > 1 ? 0 : i < -1 ? Math.PI : Math.acos(i)
              }
              ,
              e.str = function(t) {
                return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
              }
              ,
              e.exactEquals = function(t, e) {
                return t[0] === e[0] && t[1] === e[1] && t[2] === e[2]
              }
              ,
              e.equals = function(t, e) {
                var n = t[0]
                  , i = t[1]
                  , o = t[2]
                  , a = e[0]
                  , u = e[1]
                  , s = e[2];
                return Math.abs(n - a) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(a)) && Math.abs(i - u) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(u)) && Math.abs(o - s) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(s))
              }
            ;
            var r = function(t) {
              if (t && t.__esModule)
                return t;
              var e = {};
              if (null != t)
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e.default = t,
                e
            }(n(38));
            function i() {
              var t = new r.ARRAY_TYPE(3);
              return r.ARRAY_TYPE != Float32Array && (t[0] = 0,
                t[1] = 0,
                t[2] = 0),
                t
            }
            function o(t) {
              var e = t[0]
                , n = t[1]
                , r = t[2];
              return Math.sqrt(e * e + n * n + r * r)
            }
            function a(t, e, n) {
              var i = new r.ARRAY_TYPE(3);
              return i[0] = t,
                i[1] = e,
                i[2] = n,
                i
            }
            function u(t, e, n) {
              return t[0] = e[0] - n[0],
                t[1] = e[1] - n[1],
                t[2] = e[2] - n[2],
                t
            }
            function s(t, e, n) {
              return t[0] = e[0] * n[0],
                t[1] = e[1] * n[1],
                t[2] = e[2] * n[2],
                t
            }
            function c(t, e, n) {
              return t[0] = e[0] / n[0],
                t[1] = e[1] / n[1],
                t[2] = e[2] / n[2],
                t
            }
            function h(t, e) {
              var n = e[0] - t[0]
                , r = e[1] - t[1]
                , i = e[2] - t[2];
              return Math.sqrt(n * n + r * r + i * i)
            }
            function l(t, e) {
              var n = e[0] - t[0]
                , r = e[1] - t[1]
                , i = e[2] - t[2];
              return n * n + r * r + i * i
            }
            function f(t) {
              var e = t[0]
                , n = t[1]
                , r = t[2];
              return e * e + n * n + r * r
            }
            function d(t, e) {
              var n = e[0]
                , r = e[1]
                , i = e[2]
                , o = n * n + r * r + i * i;
              return o > 0 && (o = 1 / Math.sqrt(o),
                t[0] = e[0] * o,
                t[1] = e[1] * o,
                t[2] = e[2] * o),
                t
            }
            function p(t, e) {
              return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
            }
            e.sub = u,
              e.mul = s,
              e.div = c,
              e.dist = h,
              e.sqrDist = l,
              e.len = o,
              e.sqrLen = f,
              e.forEach = function() {
                var t = i();
                return function(e, n, r, i, o, a) {
                  var u = void 0
                    , s = void 0;
                  for (n || (n = 3),
                       r || (r = 0),
                         s = i ? Math.min(i * n + r, e.length) : e.length,
                         u = r; u < s; u += n)
                    t[0] = e[u],
                      t[1] = e[u + 1],
                      t[2] = e[u + 2],
                      o(t, t, a),
                      e[u] = t[0],
                      e[u + 1] = t[1],
                      e[u + 2] = t[2];
                  return e
                }
              }()
          }
          , function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
              value: !0
            }),
              e.forEach = e.sqrLen = e.sqrDist = e.dist = e.div = e.mul = e.sub = e.len = void 0,
              e.create = i,
              e.clone = function(t) {
                var e = new r.ARRAY_TYPE(2);
                return e[0] = t[0],
                  e[1] = t[1],
                  e
              }
              ,
              e.fromValues = function(t, e) {
                var n = new r.ARRAY_TYPE(2);
                return n[0] = t,
                  n[1] = e,
                  n
              }
              ,
              e.copy = function(t, e) {
                return t[0] = e[0],
                  t[1] = e[1],
                  t
              }
              ,
              e.set = function(t, e, n) {
                return t[0] = e,
                  t[1] = n,
                  t
              }
              ,
              e.add = function(t, e, n) {
                return t[0] = e[0] + n[0],
                  t[1] = e[1] + n[1],
                  t
              }
              ,
              e.subtract = o,
              e.multiply = a,
              e.divide = u,
              e.ceil = function(t, e) {
                return t[0] = Math.ceil(e[0]),
                  t[1] = Math.ceil(e[1]),
                  t
              }
              ,
              e.floor = function(t, e) {
                return t[0] = Math.floor(e[0]),
                  t[1] = Math.floor(e[1]),
                  t
              }
              ,
              e.min = function(t, e, n) {
                return t[0] = Math.min(e[0], n[0]),
                  t[1] = Math.min(e[1], n[1]),
                  t
              }
              ,
              e.max = function(t, e, n) {
                return t[0] = Math.max(e[0], n[0]),
                  t[1] = Math.max(e[1], n[1]),
                  t
              }
              ,
              e.round = function(t, e) {
                return t[0] = Math.round(e[0]),
                  t[1] = Math.round(e[1]),
                  t
              }
              ,
              e.scale = function(t, e, n) {
                return t[0] = e[0] * n,
                  t[1] = e[1] * n,
                  t
              }
              ,
              e.scaleAndAdd = function(t, e, n, r) {
                return t[0] = e[0] + n[0] * r,
                  t[1] = e[1] + n[1] * r,
                  t
              }
              ,
              e.distance = s,
              e.squaredDistance = c,
              e.length = h,
              e.squaredLength = l,
              e.negate = function(t, e) {
                return t[0] = -e[0],
                  t[1] = -e[1],
                  t
              }
              ,
              e.inverse = function(t, e) {
                return t[0] = 1 / e[0],
                  t[1] = 1 / e[1],
                  t
              }
              ,
              e.normalize = function(t, e) {
                var n = e[0]
                  , r = e[1]
                  , i = n * n + r * r;
                return i > 0 && (i = 1 / Math.sqrt(i),
                  t[0] = e[0] * i,
                  t[1] = e[1] * i),
                  t
              }
              ,
              e.dot = function(t, e) {
                return t[0] * e[0] + t[1] * e[1]
              }
              ,
              e.cross = function(t, e, n) {
                var r = e[0] * n[1] - e[1] * n[0];
                return t[0] = t[1] = 0,
                  t[2] = r,
                  t
              }
              ,
              e.lerp = function(t, e, n, r) {
                var i = e[0]
                  , o = e[1];
                return t[0] = i + r * (n[0] - i),
                  t[1] = o + r * (n[1] - o),
                  t
              }
              ,
              e.random = function(t, e) {
                e = e || 1;
                var n = 2 * r.RANDOM() * Math.PI;
                return t[0] = Math.cos(n) * e,
                  t[1] = Math.sin(n) * e,
                  t
              }
              ,
              e.transformMat2 = function(t, e, n) {
                var r = e[0]
                  , i = e[1];
                return t[0] = n[0] * r + n[2] * i,
                  t[1] = n[1] * r + n[3] * i,
                  t
              }
              ,
              e.transformMat2d = function(t, e, n) {
                var r = e[0]
                  , i = e[1];
                return t[0] = n[0] * r + n[2] * i + n[4],
                  t[1] = n[1] * r + n[3] * i + n[5],
                  t
              }
              ,
              e.transformMat3 = function(t, e, n) {
                var r = e[0]
                  , i = e[1];
                return t[0] = n[0] * r + n[3] * i + n[6],
                  t[1] = n[1] * r + n[4] * i + n[7],
                  t
              }
              ,
              e.transformMat4 = function(t, e, n) {
                var r = e[0]
                  , i = e[1];
                return t[0] = n[0] * r + n[4] * i + n[12],
                  t[1] = n[1] * r + n[5] * i + n[13],
                  t
              }
              ,
              e.rotate = function(t, e, n, r) {
                var i = e[0] - n[0]
                  , o = e[1] - n[1]
                  , a = Math.sin(r)
                  , u = Math.cos(r);
                return t[0] = i * u - o * a + n[0],
                  t[1] = i * a + o * u + n[1],
                  t
              }
              ,
              e.angle = function(t, e) {
                var n = t[0]
                  , r = t[1]
                  , i = e[0]
                  , o = e[1]
                  , a = n * n + r * r;
                a > 0 && (a = 1 / Math.sqrt(a));
                var u = i * i + o * o;
                u > 0 && (u = 1 / Math.sqrt(u));
                var s = (n * i + r * o) * a * u;
                return s > 1 ? 0 : s < -1 ? Math.PI : Math.acos(s)
              }
              ,
              e.str = function(t) {
                return "vec2(" + t[0] + ", " + t[1] + ")"
              }
              ,
              e.exactEquals = function(t, e) {
                return t[0] === e[0] && t[1] === e[1]
              }
              ,
              e.equals = function(t, e) {
                var n = t[0]
                  , i = t[1]
                  , o = e[0]
                  , a = e[1];
                return Math.abs(n - o) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(o)) && Math.abs(i - a) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(a))
              }
            ;
            var r = function(t) {
              if (t && t.__esModule)
                return t;
              var e = {};
              if (null != t)
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e.default = t,
                e
            }(n(38));
            function i() {
              var t = new r.ARRAY_TYPE(2);
              return r.ARRAY_TYPE != Float32Array && (t[0] = 0,
                t[1] = 0),
                t
            }
            function o(t, e, n) {
              return t[0] = e[0] - n[0],
                t[1] = e[1] - n[1],
                t
            }
            function a(t, e, n) {
              return t[0] = e[0] * n[0],
                t[1] = e[1] * n[1],
                t
            }
            function u(t, e, n) {
              return t[0] = e[0] / n[0],
                t[1] = e[1] / n[1],
                t
            }
            function s(t, e) {
              var n = e[0] - t[0]
                , r = e[1] - t[1];
              return Math.sqrt(n * n + r * r)
            }
            function c(t, e) {
              var n = e[0] - t[0]
                , r = e[1] - t[1];
              return n * n + r * r
            }
            function h(t) {
              var e = t[0]
                , n = t[1];
              return Math.sqrt(e * e + n * n)
            }
            function l(t) {
              var e = t[0]
                , n = t[1];
              return e * e + n * n
            }
            e.len = h,
              e.sub = o,
              e.mul = a,
              e.div = u,
              e.dist = s,
              e.sqrDist = c,
              e.sqrLen = l,
              e.forEach = function() {
                var t = i();
                return function(e, n, r, i, o, a) {
                  var u = void 0
                    , s = void 0;
                  for (n || (n = 2),
                       r || (r = 0),
                         s = i ? Math.min(i * n + r, e.length) : e.length,
                         u = r; u < s; u += n)
                    t[0] = e[u],
                      t[1] = e[u + 1],
                      o(t, t, a),
                      e[u] = t[0],
                      e[u + 1] = t[1];
                  return e
                }
              }()
          }
          , function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
              value: !0
            }),
              e.sub = e.mul = void 0,
              e.create = function() {
                var t = new r.ARRAY_TYPE(9);
                return r.ARRAY_TYPE != Float32Array && (t[1] = 0,
                  t[2] = 0,
                  t[3] = 0,
                  t[5] = 0,
                  t[6] = 0,
                  t[7] = 0),
                  t[0] = 1,
                  t[4] = 1,
                  t[8] = 1,
                  t
              }
              ,
              e.fromMat4 = function(t, e) {
                return t[0] = e[0],
                  t[1] = e[1],
                  t[2] = e[2],
                  t[3] = e[4],
                  t[4] = e[5],
                  t[5] = e[6],
                  t[6] = e[8],
                  t[7] = e[9],
                  t[8] = e[10],
                  t
              }
              ,
              e.clone = function(t) {
                var e = new r.ARRAY_TYPE(9);
                return e[0] = t[0],
                  e[1] = t[1],
                  e[2] = t[2],
                  e[3] = t[3],
                  e[4] = t[4],
                  e[5] = t[5],
                  e[6] = t[6],
                  e[7] = t[7],
                  e[8] = t[8],
                  e
              }
              ,
              e.copy = function(t, e) {
                return t[0] = e[0],
                  t[1] = e[1],
                  t[2] = e[2],
                  t[3] = e[3],
                  t[4] = e[4],
                  t[5] = e[5],
                  t[6] = e[6],
                  t[7] = e[7],
                  t[8] = e[8],
                  t
              }
              ,
              e.fromValues = function(t, e, n, i, o, a, u, s, c) {
                var h = new r.ARRAY_TYPE(9);
                return h[0] = t,
                  h[1] = e,
                  h[2] = n,
                  h[3] = i,
                  h[4] = o,
                  h[5] = a,
                  h[6] = u,
                  h[7] = s,
                  h[8] = c,
                  h
              }
              ,
              e.set = function(t, e, n, r, i, o, a, u, s, c) {
                return t[0] = e,
                  t[1] = n,
                  t[2] = r,
                  t[3] = i,
                  t[4] = o,
                  t[5] = a,
                  t[6] = u,
                  t[7] = s,
                  t[8] = c,
                  t
              }
              ,
              e.identity = function(t) {
                return t[0] = 1,
                  t[1] = 0,
                  t[2] = 0,
                  t[3] = 0,
                  t[4] = 1,
                  t[5] = 0,
                  t[6] = 0,
                  t[7] = 0,
                  t[8] = 1,
                  t
              }
              ,
              e.transpose = function(t, e) {
                if (t === e) {
                  var n = e[1]
                    , r = e[2]
                    , i = e[5];
                  t[1] = e[3],
                    t[2] = e[6],
                    t[3] = n,
                    t[5] = e[7],
                    t[6] = r,
                    t[7] = i
                } else
                  t[0] = e[0],
                    t[1] = e[3],
                    t[2] = e[6],
                    t[3] = e[1],
                    t[4] = e[4],
                    t[5] = e[7],
                    t[6] = e[2],
                    t[7] = e[5],
                    t[8] = e[8];
                return t
              }
              ,
              e.invert = function(t, e) {
                var n = e[0]
                  , r = e[1]
                  , i = e[2]
                  , o = e[3]
                  , a = e[4]
                  , u = e[5]
                  , s = e[6]
                  , c = e[7]
                  , h = e[8]
                  , l = h * a - u * c
                  , f = -h * o + u * s
                  , d = c * o - a * s
                  , p = n * l + r * f + i * d;
                return p ? (p = 1 / p,
                  t[0] = l * p,
                  t[1] = (-h * r + i * c) * p,
                  t[2] = (u * r - i * a) * p,
                  t[3] = f * p,
                  t[4] = (h * n - i * s) * p,
                  t[5] = (-u * n + i * o) * p,
                  t[6] = d * p,
                  t[7] = (-c * n + r * s) * p,
                  t[8] = (a * n - r * o) * p,
                  t) : null
              }
              ,
              e.adjoint = function(t, e) {
                var n = e[0]
                  , r = e[1]
                  , i = e[2]
                  , o = e[3]
                  , a = e[4]
                  , u = e[5]
                  , s = e[6]
                  , c = e[7]
                  , h = e[8];
                return t[0] = a * h - u * c,
                  t[1] = i * c - r * h,
                  t[2] = r * u - i * a,
                  t[3] = u * s - o * h,
                  t[4] = n * h - i * s,
                  t[5] = i * o - n * u,
                  t[6] = o * c - a * s,
                  t[7] = r * s - n * c,
                  t[8] = n * a - r * o,
                  t
              }
              ,
              e.determinant = function(t) {
                var e = t[0]
                  , n = t[1]
                  , r = t[2]
                  , i = t[3]
                  , o = t[4]
                  , a = t[5]
                  , u = t[6]
                  , s = t[7]
                  , c = t[8];
                return e * (c * o - a * s) + n * (-c * i + a * u) + r * (s * i - o * u)
              }
              ,
              e.multiply = i,
              e.translate = function(t, e, n) {
                var r = e[0]
                  , i = e[1]
                  , o = e[2]
                  , a = e[3]
                  , u = e[4]
                  , s = e[5]
                  , c = e[6]
                  , h = e[7]
                  , l = e[8]
                  , f = n[0]
                  , d = n[1];
                return t[0] = r,
                  t[1] = i,
                  t[2] = o,
                  t[3] = a,
                  t[4] = u,
                  t[5] = s,
                  t[6] = f * r + d * a + c,
                  t[7] = f * i + d * u + h,
                  t[8] = f * o + d * s + l,
                  t
              }
              ,
              e.rotate = function(t, e, n) {
                var r = e[0]
                  , i = e[1]
                  , o = e[2]
                  , a = e[3]
                  , u = e[4]
                  , s = e[5]
                  , c = e[6]
                  , h = e[7]
                  , l = e[8]
                  , f = Math.sin(n)
                  , d = Math.cos(n);
                return t[0] = d * r + f * a,
                  t[1] = d * i + f * u,
                  t[2] = d * o + f * s,
                  t[3] = d * a - f * r,
                  t[4] = d * u - f * i,
                  t[5] = d * s - f * o,
                  t[6] = c,
                  t[7] = h,
                  t[8] = l,
                  t
              }
              ,
              e.scale = function(t, e, n) {
                var r = n[0]
                  , i = n[1];
                return t[0] = r * e[0],
                  t[1] = r * e[1],
                  t[2] = r * e[2],
                  t[3] = i * e[3],
                  t[4] = i * e[4],
                  t[5] = i * e[5],
                  t[6] = e[6],
                  t[7] = e[7],
                  t[8] = e[8],
                  t
              }
              ,
              e.fromTranslation = function(t, e) {
                return t[0] = 1,
                  t[1] = 0,
                  t[2] = 0,
                  t[3] = 0,
                  t[4] = 1,
                  t[5] = 0,
                  t[6] = e[0],
                  t[7] = e[1],
                  t[8] = 1,
                  t
              }
              ,
              e.fromRotation = function(t, e) {
                var n = Math.sin(e)
                  , r = Math.cos(e);
                return t[0] = r,
                  t[1] = n,
                  t[2] = 0,
                  t[3] = -n,
                  t[4] = r,
                  t[5] = 0,
                  t[6] = 0,
                  t[7] = 0,
                  t[8] = 1,
                  t
              }
              ,
              e.fromScaling = function(t, e) {
                return t[0] = e[0],
                  t[1] = 0,
                  t[2] = 0,
                  t[3] = 0,
                  t[4] = e[1],
                  t[5] = 0,
                  t[6] = 0,
                  t[7] = 0,
                  t[8] = 1,
                  t
              }
              ,
              e.fromMat2d = function(t, e) {
                return t[0] = e[0],
                  t[1] = e[1],
                  t[2] = 0,
                  t[3] = e[2],
                  t[4] = e[3],
                  t[5] = 0,
                  t[6] = e[4],
                  t[7] = e[5],
                  t[8] = 1,
                  t
              }
              ,
              e.fromQuat = function(t, e) {
                var n = e[0]
                  , r = e[1]
                  , i = e[2]
                  , o = e[3]
                  , a = n + n
                  , u = r + r
                  , s = i + i
                  , c = n * a
                  , h = r * a
                  , l = r * u
                  , f = i * a
                  , d = i * u
                  , p = i * s
                  , g = o * a
                  , m = o * u
                  , v = o * s;
                return t[0] = 1 - l - p,
                  t[3] = h - v,
                  t[6] = f + m,
                  t[1] = h + v,
                  t[4] = 1 - c - p,
                  t[7] = d - g,
                  t[2] = f - m,
                  t[5] = d + g,
                  t[8] = 1 - c - l,
                  t
              }
              ,
              e.normalFromMat4 = function(t, e) {
                var n = e[0]
                  , r = e[1]
                  , i = e[2]
                  , o = e[3]
                  , a = e[4]
                  , u = e[5]
                  , s = e[6]
                  , c = e[7]
                  , h = e[8]
                  , l = e[9]
                  , f = e[10]
                  , d = e[11]
                  , p = e[12]
                  , g = e[13]
                  , m = e[14]
                  , v = e[15]
                  , y = n * u - r * a
                  , x = n * s - i * a
                  , b = n * c - o * a
                  , w = r * s - i * u
                  , _ = r * c - o * u
                  , S = i * c - o * s
                  , M = h * g - l * p
                  , P = h * m - f * p
                  , O = h * v - d * p
                  , E = l * m - f * g
                  , A = l * v - d * g
                  , C = f * v - d * m
                  , k = y * C - x * A + b * E + w * O - _ * P + S * M;
                return k ? (k = 1 / k,
                  t[0] = (u * C - s * A + c * E) * k,
                  t[1] = (s * O - a * C - c * P) * k,
                  t[2] = (a * A - u * O + c * M) * k,
                  t[3] = (i * A - r * C - o * E) * k,
                  t[4] = (n * C - i * O + o * P) * k,
                  t[5] = (r * O - n * A - o * M) * k,
                  t[6] = (g * S - m * _ + v * w) * k,
                  t[7] = (m * b - p * S - v * x) * k,
                  t[8] = (p * _ - g * b + v * y) * k,
                  t) : null
              }
              ,
              e.projection = function(t, e, n) {
                return t[0] = 2 / e,
                  t[1] = 0,
                  t[2] = 0,
                  t[3] = 0,
                  t[4] = -2 / n,
                  t[5] = 0,
                  t[6] = -1,
                  t[7] = 1,
                  t[8] = 1,
                  t
              }
              ,
              e.str = function(t) {
                return "mat3(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ")"
              }
              ,
              e.frob = function(t) {
                return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2))
              }
              ,
              e.add = function(t, e, n) {
                return t[0] = e[0] + n[0],
                  t[1] = e[1] + n[1],
                  t[2] = e[2] + n[2],
                  t[3] = e[3] + n[3],
                  t[4] = e[4] + n[4],
                  t[5] = e[5] + n[5],
                  t[6] = e[6] + n[6],
                  t[7] = e[7] + n[7],
                  t[8] = e[8] + n[8],
                  t
              }
              ,
              e.subtract = o,
              e.multiplyScalar = function(t, e, n) {
                return t[0] = e[0] * n,
                  t[1] = e[1] * n,
                  t[2] = e[2] * n,
                  t[3] = e[3] * n,
                  t[4] = e[4] * n,
                  t[5] = e[5] * n,
                  t[6] = e[6] * n,
                  t[7] = e[7] * n,
                  t[8] = e[8] * n,
                  t
              }
              ,
              e.multiplyScalarAndAdd = function(t, e, n, r) {
                return t[0] = e[0] + n[0] * r,
                  t[1] = e[1] + n[1] * r,
                  t[2] = e[2] + n[2] * r,
                  t[3] = e[3] + n[3] * r,
                  t[4] = e[4] + n[4] * r,
                  t[5] = e[5] + n[5] * r,
                  t[6] = e[6] + n[6] * r,
                  t[7] = e[7] + n[7] * r,
                  t[8] = e[8] + n[8] * r,
                  t
              }
              ,
              e.exactEquals = function(t, e) {
                return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8]
              }
              ,
              e.equals = function(t, e) {
                var n = t[0]
                  , i = t[1]
                  , o = t[2]
                  , a = t[3]
                  , u = t[4]
                  , s = t[5]
                  , c = t[6]
                  , h = t[7]
                  , l = t[8]
                  , f = e[0]
                  , d = e[1]
                  , p = e[2]
                  , g = e[3]
                  , m = e[4]
                  , v = e[5]
                  , y = e[6]
                  , x = e[7]
                  , b = e[8];
                return Math.abs(n - f) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(f)) && Math.abs(i - d) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(d)) && Math.abs(o - p) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(p)) && Math.abs(a - g) <= r.EPSILON * Math.max(1, Math.abs(a), Math.abs(g)) && Math.abs(u - m) <= r.EPSILON * Math.max(1, Math.abs(u), Math.abs(m)) && Math.abs(s - v) <= r.EPSILON * Math.max(1, Math.abs(s), Math.abs(v)) && Math.abs(c - y) <= r.EPSILON * Math.max(1, Math.abs(c), Math.abs(y)) && Math.abs(h - x) <= r.EPSILON * Math.max(1, Math.abs(h), Math.abs(x)) && Math.abs(l - b) <= r.EPSILON * Math.max(1, Math.abs(l), Math.abs(b))
              }
            ;
            var r = function(t) {
              if (t && t.__esModule)
                return t;
              var e = {};
              if (null != t)
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e.default = t,
                e
            }(n(38));
            function i(t, e, n) {
              var r = e[0]
                , i = e[1]
                , o = e[2]
                , a = e[3]
                , u = e[4]
                , s = e[5]
                , c = e[6]
                , h = e[7]
                , l = e[8]
                , f = n[0]
                , d = n[1]
                , p = n[2]
                , g = n[3]
                , m = n[4]
                , v = n[5]
                , y = n[6]
                , x = n[7]
                , b = n[8];
              return t[0] = f * r + d * a + p * c,
                t[1] = f * i + d * u + p * h,
                t[2] = f * o + d * s + p * l,
                t[3] = g * r + m * a + v * c,
                t[4] = g * i + m * u + v * h,
                t[5] = g * o + m * s + v * l,
                t[6] = y * r + x * a + b * c,
                t[7] = y * i + x * u + b * h,
                t[8] = y * o + x * s + b * l,
                t
            }
            function o(t, e, n) {
              return t[0] = e[0] - n[0],
                t[1] = e[1] - n[1],
                t[2] = e[2] - n[2],
                t[3] = e[3] - n[3],
                t[4] = e[4] - n[4],
                t[5] = e[5] - n[5],
                t[6] = e[6] - n[6],
                t[7] = e[7] - n[7],
                t[8] = e[8] - n[8],
                t
            }
            e.mul = i,
              e.sub = o
          }
          , function(t, e, n) {
            function r(t, e, n) {
              return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : t[e] = n,
                t
            }
            var i = 5
              , o = n(593);
            Math.sign = function(t) {
              return 0 == (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1
            }
            ;
            var a = function(t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {}
                  , i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                  return Object.getOwnPropertyDescriptor(n, t).enumerable
                }))),
                  i.forEach(function(e) {
                    r(t, e, n[e])
                  })
              }
              return t
            }({}, o, {
              throttle: n(523),
              debounce: n(411),
              omit: function(t, e) {
                var n = {};
                return o.each(t, function(t, r) {
                  -1 === e.indexOf(r) && (n[r] = t)
                }),
                  n
              },
              traverseTree: function(t, e, n, r) {
                void 0 === r && (r = !1);
                var i = n(t);
                r && e(t, null, null),
                i && a.each(i, function(r, i) {
                  e(r, t, i),
                    a.traverseTree(r, e, n)
                })
              },
              toAllPadding: function(t) {
                var e = 0
                  , n = 0
                  , r = 0
                  , i = 0;
                return a.isNumber(t) || a.isString(t) ? e = n = r = i = t : a.isArray(t) && (e = t[0],
                  r = a.isNil(t[1]) ? t[0] : t[1],
                  i = a.isNil(t[2]) ? t[0] : t[2],
                  n = a.isNil(t[3]) ? r : t[3]),
                  [e, r, i, n]
              },
              guid: function() {
                return "xxxxxxxx".replace(/[xy]/g, function(t) {
                  var e = 16 * Math.random() | 0;
                  return ("x" === t ? e : 3 & e | 8).toString(16)
                })
              },
              mix: function() {
                var t, e, n = a.toArray(arguments), r = n[0];
                if (!0 === r)
                  for (r = n[1],
                         e = 2; e < n.length; e++)
                    u(r, t = n[e]);
                else
                  for (e = 1; e < n.length; e++)
                    for (var i in t = n[e])
                      t.hasOwnProperty(i) && "constructor" !== i && (r[i] = t[i]);
                return r
              },
              mixin: function(t, e) {
                t && e && (t._mixins = e,
                  t.ATTRS = t.ATTRS || {},
                  a.each(e, function(e) {
                    a.augment(t, e)
                  }),
                  t.ATTRS = a.mix({}, t.ATTRS))
              }
            });
            function u(t, e, n) {
              for (var r in n = n || 0,
                e)
                if (e.hasOwnProperty(r)) {
                  var o = e[r];
                  null !== o && a.isPlainObject(o) ? (a.isPlainObject(t[r]) || (t[r] = {}),
                    n < i ? u(t[r], e[r], n + 1) : t[r] = e[r]) : a.isArray(o) ? (t[r] = [],
                    t[r] = t[r].concat(o)) : void 0 !== o && (t[r] = e[r])
                }
            }
            a.Array = {
              remove: function(t, e) {
                var n = a.indexOf(t, e);
                -1 !== n && t.splice(n, 1)
              }
            },
              t.exports = a
          }
          , function(t, e, n) {
            var r = n(22)
              , i = {}
              , o = {
              draw: function() {}
            }
              , a = {
              defaultShapeType: null,
              getShape: function(t, e) {
                return this[t] || this[e] || this[this.defaultShapeType] || o
              },
              getExtendShape: function(t, e) {
                var n = this;
                if (r.isArray(t)) {
                  var i = {};
                  return t.forEach(function(t) {
                    n[t] && (i = r.mix({}, i, n.getShape(t, e)))
                  }),
                    i
                }
                return this.getShape(t, e)
              }
            };
            i.registerShapeManager = function(t, e) {
              var n = r.mix({}, a, e)
                , o = r.upperFirst(t);
              return i[o] = n,
                i["register" + o] = function(t, e, i, o) {
                  r.isNil(i) && r.isNil(o) && (i = t);
                  var a = n.getExtendShape(i, o)
                    , u = r.mix(!0, {}, a, e);
                  return u.type = t,
                    n[t] = u,
                    u
                }
                ,
                n
            }
              ,
              t.exports = i
          }
          , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
            var r = n(17)
              , i = /[MLHVQTCSAZ]([^MLHVQTCSAZ]*)/gi
              , o = /[^\s\,]+/gi;
            t.exports = {
              parseRadius: function(t) {
                var e = 0
                  , n = 0
                  , i = 0
                  , o = 0;
                return r.isArray(t) ? 1 === t.length ? e = n = i = o = t[0] : 2 === t.length ? (e = i = t[0],
                  n = o = t[1]) : 3 === t.length ? (e = t[0],
                  n = o = t[1],
                  i = t[2]) : (e = t[0],
                  n = t[1],
                  i = t[2],
                  o = t[3]) : e = n = i = o = t,
                  {
                    r1: e,
                    r2: n,
                    r3: i,
                    r4: o
                  }
              },
              parsePath: function(t) {
                return t = t || [],
                  r.isArray(t) ? t : r.isString(t) ? (t = t.match(i),
                    r.each(t, function(e, n) {
                      if ((e = e.match(o))[0].length > 1) {
                        var i = e[0].charAt(0);
                        e.splice(1, 0, e[0].substr(1)),
                          e[0] = i
                      }
                      r.each(e, function(t, n) {
                        isNaN(t) || (e[n] = +t)
                      }),
                        t[n] = e
                    }),
                    t) : void 0
              }
            }
          }
          , function(t, e, n) {
            var r = n(136);
            t.exports = function(t) {
              return r(t) ? "" : t.toString()
            }
          }
          , function(t, e, n) {
            var r = n(60);
            t.exports = function(t) {
              return r(t, "String")
            }
          }
          , function(t, e, n) {
            var r = n(383)
              , i = n(60);
            t.exports = function(t) {
              if (!r(t) || !i(t, "Object"))
                return !1;
              if (null === Object.getPrototypeOf(t))
                return !0;
              for (var e = t; null !== Object.getPrototypeOf(e); )
                e = Object.getPrototypeOf(e);
              return Object.getPrototypeOf(t) === e
            }
          }
          , function(t, e, n) {
            var r = function(t) {
              function e(e) {
                var n;
                return (n = t.call(this) || this).options = e,
                  n
              }
              return function(t, e) {
                t.prototype = Object.create(e.prototype),
                  t.prototype.constructor = t,
                  t.__proto__ = e
              }(e, t),
                e.prototype.execute = function() {
                  var t = this
                    , e = this.options;
                  this.roots.forEach(function(n) {
                    t.layout(n, e).eachNode(function(t) {
                      t.data.x = t.x + t.data.width / 2 + t.hgap,
                        t.data.y = t.y + t.data.height / 2 + t.vgap
                    })
                  })
                }
                ,
                e
            }(n(386));
            t.exports = r
          }
          , function(t, e, n) {
            "undefined" != typeof self && self,
              t.exports = function(t) {
                var e = {};
                function n(r) {
                  if (e[r])
                    return e[r].exports;
                  var i = e[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                  };
                  return t[r].call(i.exports, i, i.exports, n),
                    i.l = !0,
                    i.exports
                }
                return n.m = t,
                  n.c = e,
                  n.d = function(t, e, r) {
                    n.o(t, e) || Object.defineProperty(t, e, {
                      configurable: !1,
                      enumerable: !0,
                      get: r
                    })
                  }
                  ,
                  n.n = function(t) {
                    var e = t && t.__esModule ? function() {
                        return t.default
                      }
                      : function() {
                        return t
                      }
                    ;
                    return n.d(e, "a", e),
                      e
                  }
                  ,
                  n.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                  }
                  ,
                  n.p = "",
                  n(n.s = 5)
              }([function(t, e, n) {
                var r = n(7);
                t.exports = {
                  assign: r
                }
              }
                , function(t, e, n) {
                  var r = n(3)
                    , i = function() {
                    function t(t, e) {
                      void 0 === e && (e = {}),
                        this.options = e,
                        this.rootNode = r(t, e)
                    }
                    return t.prototype.execute = function() {
                      throw new Error("please override this method")
                    }
                      ,
                      t
                  }();
                  t.exports = i
                }
                , function(t, e, n) {
                  var r = n(4)
                    , i = ["LR", "RL", "TB", "BT", "H", "V"]
                    , o = ["LR", "RL", "H"]
                    , a = i[0];
                  t.exports = function(t, e, n) {
                    var u = e.direction || a;
                    if (e.isHorizontal = function(t) {
                      return o.indexOf(t) > -1
                    }(u),
                    u && -1 === i.indexOf(u))
                      throw new TypeError("Invalid direction: " + u);
                    if (u === i[0])
                      n(t, e);
                    else if (u === i[1])
                      n(t, e),
                        t.right2left();
                    else if (u === i[2])
                      n(t, e);
                    else if (u === i[3])
                      n(t, e),
                        t.bottom2top();
                    else if (u === i[4] || u === i[5]) {
                      var s = r(t, e)
                        , c = s.left
                        , h = s.right;
                      n(c, e),
                        n(h, e),
                        e.isHorizontal ? c.right2left() : c.bottom2top(),
                        h.translate(c.x - h.x, c.y - h.y),
                        t.x = c.x,
                        t.y = h.y;
                      var l = t.getBoundingBox();
                      e.isHorizontal ? l.top < 0 && t.translate(0, -l.top) : l.left < 0 && t.translate(-l.left, 0)
                    }
                    return t.translate(-(t.x + t.width / 2 + t.hgap), -(t.y + t.height / 2 + t.vgap)),
                      t
                  }
                }
                , function(t, e, n) {
                  var r = n(0)
                    , i = {
                    getId: function(t) {
                      return t.id || t.name
                    },
                    getHGap: function(t) {
                      return t.hgap || 18
                    },
                    getVGap: function(t) {
                      return t.vgap || 18
                    },
                    getChildren: function(t) {
                      return t.children
                    },
                    getHeight: function(t) {
                      return t.height || 36
                    },
                    getWidth: function(t) {
                      var e = t.name || " ";
                      return t.width || 18 * e.split("").length
                    }
                  };
                  function o(t, e) {
                    var n = this;
                    if (n.vgap = n.hgap = 0,
                    t instanceof o)
                      return t;
                    n.data = t;
                    var r = e.getHGap(t)
                      , i = e.getVGap(t);
                    return n.width = e.getWidth(t),
                      n.height = e.getHeight(t),
                      n.id = e.getId(t),
                      n.x = n.y = 0,
                      n.depth = 0,
                    n.children || (n.children = []),
                      n.addGap(r, i),
                      n
                  }
                  r.assign(o.prototype, {
                    isRoot: function() {
                      return 0 === this.depth
                    },
                    isLeaf: function() {
                      return 0 === this.children.length
                    },
                    addGap: function(t, e) {
                      this.hgap += t,
                        this.vgap += e,
                        this.width += 2 * t,
                        this.height += 2 * e
                    },
                    eachNode: function(t) {
                      for (var e, n = [this]; e = n.pop(); )
                        t(e),
                          n = n.concat(e.children)
                    },
                    DFTraverse: function(t) {
                      this.eachNode(t)
                    },
                    BFTraverse: function(t) {
                      for (var e, n = [this]; e = n.shift(); )
                        t(e),
                          n = n.concat(e.children)
                    },
                    getBoundingBox: function() {
                      var t = {
                        left: Number.MAX_VALUE,
                        top: Number.MAX_VALUE,
                        width: 0,
                        height: 0
                      };
                      return this.eachNode(function(e) {
                        t.left = Math.min(t.left, e.x),
                          t.top = Math.min(t.top, e.y),
                          t.width = Math.max(t.width, e.x + e.width),
                          t.height = Math.max(t.height, e.y + e.height)
                      }),
                        t
                    },
                    translate: function(t, e) {
                      void 0 === t && (t = 0),
                      void 0 === e && (e = 0),
                        this.eachNode(function(n) {
                          n.x += t,
                            n.y += e
                        })
                    },
                    right2left: function() {
                      var t = this.getBoundingBox();
                      this.eachNode(function(e) {
                        e.x = e.x - 2 * (e.x - t.left) - e.width
                      }),
                        this.translate(t.width, 0)
                    },
                    bottom2top: function() {
                      var t = this.getBoundingBox();
                      this.eachNode(function(e) {
                        e.y = e.y - 2 * (e.y - t.top) - e.height
                      }),
                        this.translate(0, t.height)
                    }
                  }),
                    t.exports = function(t, e, n) {
                      void 0 === e && (e = {});
                      var a, u = new o(t,e = r.assign({}, i, e)), s = [u];
                      if (!n && !t.collapsed)
                        for (; a = s.pop(); )
                          if (!a.data.collapsed) {
                            var c = e.getChildren(a.data)
                              , h = c ? c.length : 0;
                            if (a.children = new Array(h),
                            c && h)
                              for (var l = 0; l < h; l++) {
                                var f = new o(c[l],e);
                                a.children[l] = f,
                                  s.push(f),
                                  f.parent = a,
                                  f.depth = a.depth + 1
                              }
                          }
                      return u
                    }
                }
                , function(t, e, n) {
                  var r = n(3);
                  t.exports = function(t, e) {
                    for (var n = r(t.data, e, !0), i = r(t.data, e, !0), o = t.children.length, a = Math.round(o / 2), u = e.getSide || function(t, e) {
                      return e < a ? "right" : "left"
                    }
                           , s = 0; s < o; s++) {
                      var c = t.children[s];
                      "right" === u(c, s) ? i.children.push(c) : n.children.push(c)
                    }
                    return n.eachNode(function(t) {
                      t.isRoot() || (t.side = "left")
                    }),
                      i.eachNode(function(t) {
                        t.isRoot() || (t.side = "right")
                      }),
                      {
                        left: n,
                        right: i
                      }
                  }
                }
                , function(t, e, n) {
                  var r = {
                    compactBox: n(6),
                    dendrogram: n(9),
                    indented: n(11),
                    mindmap: n(13)
                  };
                  t.exports = r
                }
                , function(t, e, n) {
                  var r = n(1)
                    , i = n(8)
                    , o = n(2)
                    , a = n(0)
                    , u = function(t) {
                    function e() {
                      return t.apply(this, arguments) || this
                    }
                    return function(t, e) {
                      t.prototype = Object.create(e.prototype),
                        t.prototype.constructor = t,
                        t.__proto__ = e
                    }(e, t),
                      e.prototype.execute = function() {
                        return o(this.rootNode, this.options, i)
                      }
                      ,
                      e
                  }(r)
                    , s = {};
                  t.exports = function(t, e) {
                    return e = a.assign({}, s, e),
                      new u(t,e).execute()
                  }
                }
                , function(t, e) {
                  function n(t, e) {
                    for (var n in e)
                      e.hasOwnProperty(n) && "constructor" !== n && void 0 !== e[n] && (t[n] = e[n])
                  }
                  t.exports = function(t, e, r, i) {
                    return e && n(t, e),
                    r && n(t, r),
                    i && n(t, i),
                      t
                  }
                }
                , function(t, e) {
                  function n(t, e, n, r) {
                    void 0 === r && (r = []);
                    var i = this;
                    i.w = t || 0,
                      i.h = e || 0,
                      i.y = n || 0,
                      i.x = 0,
                      i.c = r || [],
                      i.cs = r.length,
                      i.prelim = 0,
                      i.mod = 0,
                      i.shift = 0,
                      i.change = 0,
                      i.tl = null,
                      i.tr = null,
                      i.el = null,
                      i.er = null,
                      i.msel = 0,
                      i.mser = 0
                  }
                  n.fromNode = function(t, e) {
                    if (!t)
                      return null;
                    var r = [];
                    return t.children.forEach(function(t) {
                      r.push(n.fromNode(t, e))
                    }),
                      e ? new n(t.height,t.width,t.x,r) : new n(t.width,t.height,t.y,r)
                  }
                    ,
                    t.exports = function(t, e) {
                      void 0 === e && (e = {});
                      var r = e.isHorizontal;
                      function i(t) {
                        0 === t.cs ? (t.el = t,
                          t.er = t,
                          t.msel = t.mser = 0) : (t.el = t.c[0].el,
                          t.msel = t.c[0].msel,
                          t.er = t.c[t.cs - 1].er,
                          t.mser = t.c[t.cs - 1].mser)
                      }
                      function o(t, e, n) {
                        for (var r = t.c[e - 1], i = r.mod, o = t.c[e], h = o.mod; null !== r && null !== o; ) {
                          c(r) > n.low && (n = n.nxt);
                          var l = i + r.prelim + r.w - (h + o.prelim);
                          l > 0 && (h += l,
                            a(t, e, n.index, l));
                          var f = c(r)
                            , d = c(o);
                          f <= d && null !== (r = s(r)) && (i += r.mod),
                          f >= d && null !== (o = u(o)) && (h += o.mod)
                        }
                        !r && o ? function(t, e, n, r) {
                          var i = t.c[0].el;
                          i.tl = n;
                          var o = r - n.mod - t.c[0].msel;
                          i.mod += o,
                            i.prelim -= o,
                            t.c[0].el = t.c[e].el,
                            t.c[0].msel = t.c[e].msel
                        }(t, e, o, h) : r && !o && function(t, e, n, r) {
                          var i = t.c[e].er;
                          i.tr = n;
                          var o = r - n.mod - t.c[e].mser;
                          i.mod += o,
                            i.prelim -= o,
                            t.c[e].er = t.c[e - 1].er,
                            t.c[e].mser = t.c[e - 1].mser
                        }(t, e, r, i)
                      }
                      function a(t, e, n, r) {
                        t.c[e].mod += r,
                          t.c[e].msel += r,
                          t.c[e].mser += r,
                          function(t, e, n, r) {
                            if (n !== e - 1) {
                              var i = e - n;
                              t.c[n + 1].shift += r / i,
                                t.c[e].shift -= r / i,
                                t.c[e].change -= r - r / i
                            }
                          }(t, e, n, r)
                      }
                      function u(t) {
                        return 0 === t.cs ? t.tl : t.c[0]
                      }
                      function s(t) {
                        return 0 === t.cs ? t.tr : t.c[t.cs - 1]
                      }
                      function c(t) {
                        return t.y + t.h
                      }
                      function h(t, e, n) {
                        for (; null !== n && t >= n.low; )
                          n = n.nxt;
                        return {
                          low: t,
                          index: e,
                          nxt: n
                        }
                      }
                      !function t(e, n, r) {
                        void 0 === r && (r = 0),
                          n ? (e.x = r,
                            r += e.width) : (e.y = r,
                            r += e.height),
                          e.children.forEach(function(e) {
                            t(e, n, r)
                          })
                      }(t, r);
                      var l = n.fromNode(t, r);
                      return function t(e) {
                        if (0 !== e.cs) {
                          t(e.c[0]);
                          for (var n = h(c(e.c[0].el), 0, null), r = 1; r < e.cs; ++r) {
                            t(e.c[r]);
                            var a = c(e.c[r].er);
                            o(e, r, n),
                              n = h(a, r, n)
                          }
                          !function(t) {
                            t.prelim = (t.c[0].prelim + t.c[0].mod + t.c[t.cs - 1].mod + t.c[t.cs - 1].prelim + t.c[t.cs - 1].w) / 2 - t.w / 2
                          }(e),
                            i(e)
                        } else
                          i(e)
                      }(l),
                        function t(e, n) {
                          n += e.mod,
                            e.x = e.prelim + n,
                            function(t) {
                              for (var e = 0, n = 0, r = 0; r < t.cs; r++)
                                e += t.c[r].shift,
                                  n += e + t.c[r].change,
                                  t.c[r].mod += n
                            }(e);
                          for (var r = 0; r < e.cs; r++)
                            t(e.c[r], n)
                        }(l, 0),
                        function t(e, n, r) {
                          r ? n.y = e.x : n.x = e.x,
                            e.c.forEach(function(e, i) {
                              t(e, n.children[i], r)
                            })
                        }(l, t, r),
                        function(t, e) {
                          !function t(e, n, r) {
                            r ? e.y += n : e.x += n,
                              e.children.forEach(function(e) {
                                t(e, n, r)
                              })
                          }(t, -function t(e, n) {
                            var r = n ? e.y : e.x;
                            return e.children.forEach(function(e) {
                              r = Math.min(t(e, n), r)
                            }),
                              r
                          }(t, e), e)
                        }(t, r),
                        t
                    }
                }
                , function(t, e, n) {
                  var r = n(1)
                    , i = n(10)
                    , o = n(2)
                    , a = n(0)
                    , u = function(t) {
                    function e() {
                      return t.apply(this, arguments) || this
                    }
                    return function(t, e) {
                      t.prototype = Object.create(e.prototype),
                        t.prototype.constructor = t,
                        t.__proto__ = e
                    }(e, t),
                      e.prototype.execute = function() {
                        return this.rootNode.width = 0,
                          o(this.rootNode, this.options, i)
                      }
                      ,
                      e
                  }(r)
                    , s = {};
                  t.exports = function(t, e) {
                    return e = a.assign({}, s, e),
                      new u(t,e).execute()
                  }
                }
                , function(t, e, n) {
                  var r = n(0)
                    , i = {
                    isHorizontal: !0,
                    nodeSep: 20,
                    nodeSize: 20,
                    rankSep: 200,
                    subTreeSep: 10
                  };
                  t.exports = function(t, e) {
                    void 0 === e && (e = {}),
                      e = r.assign({}, i, e);
                    var n, o = 0, a = function t(e) {
                      if (!e)
                        return null;
                      e.width = 0,
                      e.depth && e.depth > o && (o = e.depth);
                      var n = e.children
                        , r = n.length
                        , i = new function(t, e) {
                        void 0 === t && (t = 0),
                        void 0 === e && (e = []);
                        var n = this;
                        n.x = n.y = 0,
                          n.leftChild = n.rightChild = null,
                          n.height = 0,
                          n.children = e
                      }
                      (e.height,[]);
                      return n.forEach(function(e, n) {
                        var o = t(e);
                        i.children.push(o),
                        0 === n && (i.leftChild = o),
                        n === r - 1 && (i.rightChild = o)
                      }),
                        i.originNode = e,
                        i.isLeaf = e.isLeaf(),
                        i
                    }(t);
                    return function t(e) {
                      if (e.isLeaf || 0 === e.children.length)
                        e.drawingDepth = o;
                      else {
                        var n = e.children.map(function(e) {
                          return t(e)
                        })
                          , r = Math.min.apply(null, n);
                        e.drawingDepth = r - 1
                      }
                      return e.drawingDepth
                    }(a),
                      function t(r) {
                        r.x = r.drawingDepth * e.rankSep,
                          r.isLeaf ? (r.y = 0,
                          n && (r.y = n.y + n.height + e.nodeSep,
                          r.originNode.parent !== n.originNode.parent && (r.y += e.subTreeSep)),
                            n = r) : (r.children.forEach(function(e) {
                            t(e)
                          }),
                            r.y = (r.leftChild.y + r.rightChild.y) / 2)
                      }(a),
                      function t(e, n, r) {
                        r ? (n.x = e.x,
                          n.y = e.y) : (n.x = e.y,
                          n.y = e.x),
                          e.children.forEach(function(e, i) {
                            t(e, n.children[i], r)
                          })
                      }(a, t, e.isHorizontal),
                      t
                  }
                }
                , function(t, e, n) {
                  var r = n(1)
                    , i = n(12)
                    , o = n(4)
                    , a = n(0)
                    , u = ["LR", "RL", "H"]
                    , s = u[0]
                    , c = function(t) {
                    function e() {
                      return t.apply(this, arguments) || this
                    }
                    return function(t, e) {
                      t.prototype = Object.create(e.prototype),
                        t.prototype.constructor = t,
                        t.__proto__ = e
                    }(e, t),
                      e.prototype.execute = function() {
                        var t = this.options
                          , e = this.rootNode;
                        t.isHorizontal = !0;
                        var n = t.indent
                          , r = t.direction || s;
                        if (r && -1 === u.indexOf(r))
                          throw new TypeError("Invalid direction: " + r);
                        if (r === u[0])
                          i(e, n);
                        else if (r === u[1])
                          i(e, n),
                            e.right2left();
                        else if (r === u[2]) {
                          var a = o(e, t)
                            , c = a.left
                            , h = a.right;
                          i(c, n),
                            c.right2left(),
                            i(h, n);
                          var l = c.getBoundingBox();
                          h.translate(l.width, 0),
                            e.x = h.x - e.width / 2
                        }
                        return e
                      }
                      ,
                      e
                  }(r)
                    , h = {};
                  t.exports = function(t, e) {
                    return e = a.assign({}, h, e),
                      new c(t,e).execute()
                  }
                }
                , function(t, e) {
                  t.exports = function(t, e) {
                    void 0 === e && (e = 20);
                    var n = null;
                    t.eachNode(function(t) {
                      !function(t, e, n) {
                        t.x += n * t.depth,
                          t.y = e ? e.y + e.height : 0
                      }(t, n, e),
                        n = t
                    })
                  }
                }
                , function(t, e, n) {
                  var r = n(1)
                    , i = n(14)
                    , o = n(2)
                    , a = n(0)
                    , u = function(t) {
                    function e() {
                      return t.apply(this, arguments) || this
                    }
                    return function(t, e) {
                      t.prototype = Object.create(e.prototype),
                        t.prototype.constructor = t,
                        t.__proto__ = e
                    }(e, t),
                      e.prototype.execute = function() {
                        return o(this.rootNode, this.options, i)
                      }
                      ,
                      e
                  }(r)
                    , s = {};
                  t.exports = function(t, e) {
                    return e = a.assign({}, s, e),
                      new u(t,e).execute()
                  }
                }
                , function(t, e, n) {
                  var r = n(0)
                    , i = {
                    getSubTreeSep: function() {
                      return 0
                    }
                  };
                  t.exports = function(t, e) {
                    void 0 === e && (e = {}),
                      e = r.assign({}, i, e),
                      t.parent = {
                        x: 0,
                        width: 0,
                        height: 0,
                        y: 0
                      },
                      t.BFTraverse(function(t) {
                        t.x = t.parent.x + t.parent.width
                      }),
                      t.parent = null,
                      function t(e, n) {
                        var r = 0;
                        return e.children.length ? e.children.forEach(function(e) {
                          r += t(e, n)
                        }) : r = e.height,
                          e._subTreeSep = n.getSubTreeSep(e.data),
                          e.totalHeight = Math.max(e.height, r) + 2 * e._subTreeSep,
                          e.totalHeight
                      }(t, e),
                      t.startY = 0,
                      t.y = t.totalHeight / 2 - t.height / 2,
                      t.eachNode(function(t) {
                        var e = t.children
                          , n = e.length;
                        if (n) {
                          var r = e[0];
                          if (r.startY = t.startY + t._subTreeSep,
                          1 === n)
                            r.y = t.y + t.height / 2 - r.height / 2;
                          else {
                            r.y = r.startY + r.totalHeight / 2 - r.height / 2;
                            for (var i = 1; i < n; i++) {
                              var o = e[i];
                              o.startY = e[i - 1].startY + e[i - 1].totalHeight,
                                o.y = o.startY + o.totalHeight / 2 - o.height / 2
                            }
                          }
                        }
                      }),
                      function t(e) {
                        var n = e.children
                          , r = n.length;
                        if (r) {
                          n.forEach(function(e) {
                            t(e)
                          });
                          var i = n[0]
                            , o = n[r - 1]
                            , a = o.y - i.y + o.height
                            , u = 0;
                          if (n.forEach(function(t) {
                            u += t.totalHeight
                          }),
                          a > e.height)
                            e.y = i.y + a / 2 - e.height / 2;
                          else if (1 !== n.length || e.height > u) {
                            var s = e.y + (e.height - a) / 2 - i.y;
                            n.forEach(function(t) {
                              t.translate(0, s)
                            })
                          } else
                            e.y = (i.y + i.height / 2 + o.y + o.height / 2) / 2 - e.height / 2
                        }
                      }(t)
                  }
                }
              ])
          }
          , function(t, e, n) {
            var r = n(22)
              , i = function() {
              var t = e.prototype;
              function e(t) {
                var e = this.getDefaultCfg();
                r.mix(this, e, t),
                  this._init()
              }
              return t.getDefaultCfg = function() {
                return {}
              }
                ,
                t._init = function() {}
                ,
                t.destroy = function() {}
                ,
                e
            }();
            t.exports = i
          }
          , function(t, e, n) {
            var r = n(17)
              , i = n(376)
              , o = n(375)
              , a = n(404)
              , u = n(403)
              , s = r.vec3
              , c = r.mat3
              , h = ["m", "l", "c", "a", "q", "h", "v", "t", "s", "z"];
            function l(t, e, n) {
              return {
                x: n.x + t,
                y: n.y + e
              }
            }
            function f(t, e) {
              return {
                x: e.x + (e.x - t.x),
                y: e.y + (e.y - t.y)
              }
            }
            function d(t) {
              return Math.sqrt(t[0] * t[0] + t[1] * t[1])
            }
            function p(t, e) {
              return (t[0] * e[0] + t[1] * e[1]) / (d(t) * d(e))
            }
            function g(t, e) {
              return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(p(t, e))
            }
            var m = function(t, e, n) {
              this.preSegment = e,
                this.isLast = n,
                this.init(t, e)
            };
            r.augment(m, {
              init: function(t, e) {
                var n = t[0];
                e = e || {
                  endPoint: {
                    x: 0,
                    y: 0
                  }
                };
                var i, o, a, u, s = h.indexOf(n) >= 0, c = s ? n.toUpperCase() : n, d = t, m = e.endPoint, v = d[1], y = d[2];
                switch (c) {
                  default:
                    break;
                  case "M":
                    u = s ? l(v, y, m) : {
                      x: v,
                      y: y
                    },
                      this.command = "M",
                      this.params = [m, u],
                      this.subStart = u,
                      this.endPoint = u;
                    break;
                  case "L":
                    u = s ? l(v, y, m) : {
                      x: v,
                      y: y
                    },
                      this.command = "L",
                      this.params = [m, u],
                      this.subStart = e.subStart,
                      this.endPoint = u,
                      this.endTangent = function() {
                        return [u.x - m.x, u.y - m.y]
                      }
                      ,
                      this.startTangent = function() {
                        return [m.x - u.x, m.y - u.y]
                      }
                    ;
                    break;
                  case "H":
                    u = s ? l(v, 0, m) : {
                      x: v,
                      y: m.y
                    },
                      this.command = "L",
                      this.params = [m, u],
                      this.subStart = e.subStart,
                      this.endPoint = u,
                      this.endTangent = function() {
                        return [u.x - m.x, u.y - m.y]
                      }
                      ,
                      this.startTangent = function() {
                        return [m.x - u.x, m.y - u.y]
                      }
                    ;
                    break;
                  case "V":
                    u = s ? l(0, v, m) : {
                      x: m.x,
                      y: v
                    },
                      this.command = "L",
                      this.params = [m, u],
                      this.subStart = e.subStart,
                      this.endPoint = u,
                      this.endTangent = function() {
                        return [u.x - m.x, u.y - m.y]
                      }
                      ,
                      this.startTangent = function() {
                        return [m.x - u.x, m.y - u.y]
                      }
                    ;
                    break;
                  case "Q":
                    s ? (i = l(v, y, m),
                      o = l(d[3], d[4], m)) : (i = {
                      x: v,
                      y: y
                    },
                      o = {
                        x: d[3],
                        y: d[4]
                      }),
                      this.command = "Q",
                      this.params = [m, i, o],
                      this.subStart = e.subStart,
                      this.endPoint = o,
                      this.endTangent = function() {
                        return [o.x - i.x, o.y - i.y]
                      }
                      ,
                      this.startTangent = function() {
                        return [m.x - i.x, m.y - i.y]
                      }
                    ;
                    break;
                  case "T":
                    o = s ? l(v, y, m) : {
                      x: v,
                      y: y
                    },
                      "Q" === e.command ? (i = f(e.params[1], m),
                          this.command = "Q",
                          this.params = [m, i, o],
                          this.subStart = e.subStart,
                          this.endPoint = o,
                          this.endTangent = function() {
                            return [o.x - i.x, o.y - i.y]
                          }
                          ,
                          this.startTangent = function() {
                            return [m.x - i.x, m.y - i.y]
                          }
                      ) : (this.command = "TL",
                          this.params = [m, o],
                          this.subStart = e.subStart,
                          this.endPoint = o,
                          this.endTangent = function() {
                            return [o.x - m.x, o.y - m.y]
                          }
                          ,
                          this.startTangent = function() {
                            return [m.x - o.x, m.y - o.y]
                          }
                      );
                    break;
                  case "C":
                    s ? (i = l(v, y, m),
                      o = l(d[3], d[4], m),
                      a = l(d[5], d[6], m)) : (i = {
                      x: v,
                      y: y
                    },
                      o = {
                        x: d[3],
                        y: d[4]
                      },
                      a = {
                        x: d[5],
                        y: d[6]
                      }),
                      this.command = "C",
                      this.params = [m, i, o, a],
                      this.subStart = e.subStart,
                      this.endPoint = a,
                      this.endTangent = function() {
                        return [a.x - o.x, a.y - o.y]
                      }
                      ,
                      this.startTangent = function() {
                        return [m.x - i.x, m.y - i.y]
                      }
                    ;
                    break;
                  case "S":
                    s ? (o = l(v, y, m),
                      a = l(d[3], d[4], m)) : (o = {
                      x: v,
                      y: y
                    },
                      a = {
                        x: d[3],
                        y: d[4]
                      }),
                      "C" === e.command ? (i = f(e.params[2], m),
                          this.command = "C",
                          this.params = [m, i, o, a],
                          this.subStart = e.subStart,
                          this.endPoint = a,
                          this.endTangent = function() {
                            return [a.x - o.x, a.y - o.y]
                          }
                          ,
                          this.startTangent = function() {
                            return [m.x - i.x, m.y - i.y]
                          }
                      ) : (this.command = "SQ",
                          this.params = [m, o, a],
                          this.subStart = e.subStart,
                          this.endPoint = a,
                          this.endTangent = function() {
                            return [a.x - o.x, a.y - o.y]
                          }
                          ,
                          this.startTangent = function() {
                            return [m.x - o.x, m.y - o.y]
                          }
                      );
                    break;
                  case "A":
                    var x = v
                      , b = y
                      , w = d[3]
                      , _ = d[4]
                      , S = d[5];
                    u = s ? l(d[6], d[7], m) : {
                      x: d[6],
                      y: d[7]
                    },
                      this.command = "A";
                    var M = function(t, e, n, i, o, a, u) {
                      var s = r.mod(r.toRadian(u), 2 * Math.PI)
                        , c = t.x
                        , h = t.y
                        , l = e.x
                        , f = e.y
                        , d = Math.cos(s) * (c - l) / 2 + Math.sin(s) * (h - f) / 2
                        , m = -1 * Math.sin(s) * (c - l) / 2 + Math.cos(s) * (h - f) / 2
                        , v = d * d / (o * o) + m * m / (a * a);
                      v > 1 && (o *= Math.sqrt(v),
                        a *= Math.sqrt(v));
                      var y = o * o * (m * m) + a * a * (d * d)
                        , x = Math.sqrt((o * o * (a * a) - y) / y);
                      n === i && (x *= -1),
                      isNaN(x) && (x = 0);
                      var b = x * o * m / a
                        , w = x * -a * d / o
                        , _ = (c + l) / 2 + Math.cos(s) * b - Math.sin(s) * w
                        , S = (h + f) / 2 + Math.sin(s) * b + Math.cos(s) * w
                        , M = g([1, 0], [(d - b) / o, (m - w) / a])
                        , P = [(d - b) / o, (m - w) / a]
                        , O = [(-1 * d - b) / o, (-1 * m - w) / a]
                        , E = g(P, O);
                      return p(P, O) <= -1 && (E = Math.PI),
                      p(P, O) >= 1 && (E = 0),
                      0 === i && E > 0 && (E -= 2 * Math.PI),
                      1 === i && E < 0 && (E += 2 * Math.PI),
                        [t, _, S, o, a, M, E, s, i]
                    }(m, u, _, S, x, b, w);
                    this.params = M;
                    var P = e.subStart;
                    this.subStart = P,
                      this.endPoint = u;
                    var O = M[5] % (2 * Math.PI);
                    r.isNumberEqual(O, 2 * Math.PI) && (O = 0);
                    var E = M[6] % (2 * Math.PI);
                    r.isNumberEqual(E, 2 * Math.PI) && (E = 0);
                    var A = .001;
                    this.startTangent = function() {
                      0 === S && (A *= -1);
                      var t = M[3] * Math.cos(O - A) + M[1]
                        , e = M[4] * Math.sin(O - A) + M[2];
                      return [t - P.x, e - P.y]
                    }
                      ,
                      this.endTangent = function() {
                        var t = M[6];
                        t - 2 * Math.PI < 1e-4 && (t = 0);
                        var e = M[3] * Math.cos(O + t + A) + M[1]
                          , n = M[4] * Math.sin(O + t - A) + M[2];
                        return [m.x - e, m.y - n]
                      }
                    ;
                    break;
                  case "Z":
                    this.command = "Z",
                      this.params = [m, e.subStart],
                      this.subStart = e.subStart,
                      this.endPoint = e.subStart
                }
              },
              isInside: function(t, e, n) {
                var r = this.command
                  , o = this.params
                  , a = this.box;
                if (a && !i.box(a.minX, a.maxX, a.minY, a.maxY, t, e))
                  return !1;
                switch (r) {
                  default:
                    break;
                  case "M":
                    return !1;
                  case "TL":
                  case "L":
                  case "Z":
                    return i.line(o[0].x, o[0].y, o[1].x, o[1].y, n, t, e);
                  case "SQ":
                  case "Q":
                    return i.quadraticline(o[0].x, o[0].y, o[1].x, o[1].y, o[2].x, o[2].y, n, t, e);
                  case "C":
                    return i.cubicline(o[0].x, o[0].y, o[1].x, o[1].y, o[2].x, o[2].y, o[3].x, o[3].y, n, t, e);
                  case "A":
                    var u = o
                      , h = u[1]
                      , l = u[2]
                      , f = u[3]
                      , d = u[4]
                      , p = u[5]
                      , g = u[6]
                      , m = u[7]
                      , v = u[8]
                      , y = f > d ? f : d
                      , x = f > d ? 1 : f / d
                      , b = f > d ? d / f : 1;
                    u = [t, e, 1];
                    var w = [1, 0, 0, 0, 1, 0, 0, 0, 1];
                    return c.translate(w, w, [-h, -l]),
                      c.rotate(w, w, -m),
                      c.scale(w, w, [1 / x, 1 / b]),
                      s.transformMat3(u, u, w),
                      i.arcline(0, 0, y, p, p + g, 1 - v, n, u[0], u[1])
                }
                return !1
              },
              draw: function(t) {
                var e, n, r, i = this.command, o = this.params;
                switch (i) {
                  default:
                    break;
                  case "M":
                    t.moveTo(o[1].x, o[1].y);
                    break;
                  case "TL":
                  case "L":
                    t.lineTo(o[1].x, o[1].y);
                    break;
                  case "SQ":
                  case "Q":
                    e = o[1],
                      n = o[2],
                      t.quadraticCurveTo(e.x, e.y, n.x, n.y);
                    break;
                  case "C":
                    e = o[1],
                      n = o[2],
                      r = o[3],
                      t.bezierCurveTo(e.x, e.y, n.x, n.y, r.x, r.y);
                    break;
                  case "A":
                    var a = o
                      , u = a[1]
                      , s = a[2]
                      , c = a[3]
                      , h = a[4]
                      , l = a[5]
                      , f = a[6]
                      , d = a[7]
                      , p = a[8]
                      , g = c > h ? c : h
                      , m = c > h ? 1 : c / h
                      , v = c > h ? h / c : 1;
                    t.translate(u, s),
                      t.rotate(d),
                      t.scale(m, v),
                      t.arc(0, 0, g, l, l + f, 1 - p),
                      t.scale(1 / m, 1 / v),
                      t.rotate(-d),
                      t.translate(-u, -s);
                    break;
                  case "Z":
                    t.closePath()
                }
              },
              getBBox: function(t) {
                var e, n, r, i, s = t / 2, c = this.params;
                switch (this.command) {
                  default:
                  case "M":
                  case "Z":
                    break;
                  case "TL":
                  case "L":
                    this.box = {
                      minX: Math.min(c[0].x, c[1].x) - s,
                      maxX: Math.max(c[0].x, c[1].x) + s,
                      minY: Math.min(c[0].y, c[1].y) - s,
                      maxY: Math.max(c[0].y, c[1].y) + s
                    };
                    break;
                  case "SQ":
                  case "Q":
                    for (r = 0,
                           i = (n = a.extrema(c[0].x, c[1].x, c[2].x)).length; r < i; r++)
                      n[r] = a.at(c[0].x, c[1].x, c[2].x, n[r]);
                    for (n.push(c[0].x, c[2].x),
                           r = 0,
                           i = (e = a.extrema(c[0].y, c[1].y, c[2].y)).length; r < i; r++)
                      e[r] = a.at(c[0].y, c[1].y, c[2].y, e);
                    e.push(c[0].y, c[2].y),
                      this.box = {
                        minX: Math.min.apply(Math, n) - s,
                        maxX: Math.max.apply(Math, n) + s,
                        minY: Math.min.apply(Math, e) - s,
                        maxY: Math.max.apply(Math, e) + s
                      };
                    break;
                  case "C":
                    for (r = 0,
                           i = (n = o.extrema(c[0].x, c[1].x, c[2].x, c[3].x)).length; r < i; r++)
                      n[r] = o.at(c[0].x, c[1].x, c[2].x, c[3].x, n[r]);
                    for (r = 0,
                           i = (e = o.extrema(c[0].y, c[1].y, c[2].y, c[3].y)).length; r < i; r++)
                      e[r] = o.at(c[0].y, c[1].y, c[2].y, c[3].y, e[r]);
                    n.push(c[0].x, c[3].x),
                      e.push(c[0].y, c[3].y),
                      this.box = {
                        minX: Math.min.apply(Math, n) - s,
                        maxX: Math.max.apply(Math, n) + s,
                        minY: Math.min.apply(Math, e) - s,
                        maxY: Math.max.apply(Math, e) + s
                      };
                    break;
                  case "A":
                    var h = c
                      , l = h[1]
                      , f = h[2]
                      , d = h[3]
                      , p = h[4]
                      , g = h[5]
                      , m = h[6]
                      , v = h[7]
                      , y = h[8]
                      , x = g
                      , b = g + m
                      , w = u.xExtrema(v, d, p)
                      , _ = 1 / 0
                      , S = -1 / 0
                      , M = [x, b];
                    for (r = 2 * -Math.PI; r <= 2 * Math.PI; r += Math.PI) {
                      var P = w + r;
                      1 === y ? x < P && P < b && M.push(P) : b < P && P < x && M.push(P)
                    }
                    for (r = 0,
                           i = M.length; r < i; r++) {
                      var O = u.xAt(v, d, p, l, M[r]);
                      O < _ && (_ = O),
                      O > S && (S = O)
                    }
                    var E = u.yExtrema(v, d, p)
                      , A = 1 / 0
                      , C = -1 / 0
                      , k = [x, b];
                    for (r = 2 * -Math.PI; r <= 2 * Math.PI; r += Math.PI) {
                      var I = E + r;
                      1 === y ? x < I && I < b && k.push(I) : b < I && I < x && k.push(I)
                    }
                    for (r = 0,
                           i = k.length; r < i; r++) {
                      var B = u.yAt(v, d, p, f, k[r]);
                      B < A && (A = B),
                      B > C && (C = B)
                    }
                    this.box = {
                      minX: _ - s,
                      maxX: S + s,
                      minY: A - s,
                      maxY: C + s
                    }
                }
              }
            }),
              t.exports = m
          }
          , function(t, e, n) {
            var r = n(356)
              , i = n(363)
              , o = Math.PI
              , a = Math.sin
              , u = Math.cos
              , s = Math.atan2
              , c = 10
              , h = o / 3;
            function l(t, e, n, r, i, l, f) {
              var d, p, g, m, v, y, x;
              if (!e.fill) {
                var b = e.arrowLength || c
                  , w = e.arrowAngle ? e.arrowAngle * o / 180 : h;
                x = s(r - l, n - i),
                  v = Math.abs(e.lineWidth * u(x)) / 2,
                  y = Math.abs(e.lineWidth * a(x)) / 2,
                f && (v = -v,
                  y = -y),
                  d = i + b * u(x + w / 2),
                  p = l + b * a(x + w / 2),
                  g = i + b * u(x - w / 2),
                  m = l + b * a(x - w / 2),
                  t.beginPath(),
                  t.moveTo(d - v, p - y),
                  t.lineTo(i - v, l - y),
                  t.lineTo(g - v, m - y),
                  t.moveTo(i - v, l - y),
                  t.lineTo(i + v, l + y),
                  t.moveTo(i, l),
                  t.stroke()
              }
            }
            function f(t, e, n, o, a, u, s) {
              var c = s ? e.startArrow : e.endArrow
                , h = c.d
                , l = 0
                , f = a - n
                , d = u - o
                , p = Math.atan(f / d);
              0 === d && f < 0 ? l = Math.PI : f > 0 && d > 0 ? l = Math.PI / 2 - p : f < 0 && d < 0 ? l = -Math.PI / 2 - p : f >= 0 && d < 0 ? l = -p - Math.PI / 2 : f <= 0 && d > 0 && (l = Math.PI / 2 - p);
              var g = function(t) {
                var e, n = [], o = r.parsePath(t.path);
                if (!Array.isArray(o) || 0 === o.length || "M" !== o[0][0] && "m" !== o[0][0])
                  return !1;
                for (var a = o.length, u = 0; u < o.length; u++) {
                  var s = o[u];
                  e = new i(s,e,u === a - 1),
                    n.push(e)
                }
                return n
              }(c);
              if (g) {
                h && (s ? (a += Math.sin(Math.abs(p)) * h,
                  u = u + Math.cos(Math.abs(p)) * h - .5 * t.lineWidth) : (a -= Math.sin(Math.abs(p)) * h,
                  u = u - Math.cos(Math.abs(p)) * h + .5 * t.lineWidth)),
                  t.save(),
                  t.beginPath(),
                  t.translate(a, u),
                  t.rotate(l);
                for (var m = 0; m < g.length; m++)
                  g[m].draw(t);
                t.setTransform(1, 0, 0, 1, 0, 0),
                  t.fillStyle = t.strokeStyle,
                  t.fill(),
                  t.restore()
              }
            }
            t.exports = {
              addStartArrow: function(t, e, n, r, i, o) {
                "object" == typeof e.startArrow ? f(t, e, n, r, i, o, !0) : e.startArrow && l(t, e, n, r, i, o, !0)
              },
              addEndArrow: function(t, e, n, r, i, o) {
                "object" == typeof e.endArrow ? f(t, e, n, r, i, o, !1) : e.endArrow && l(t, e, n, r, i, o, !1)
              }
            }
          }
          , function(t, e, n) {
            var r = n(17);
            function i(t, e, n, r) {
              return {
                x: Math.cos(r) * n + t,
                y: Math.sin(r) * n + e
              }
            }
            function o(t, e, n, r) {
              var i, o;
              return r ? t < e ? (i = e - t,
                o = 2 * Math.PI - n + t) : t > n && (i = 2 * Math.PI - t + e,
                o = t - n) : (i = t - e,
                o = n - t),
                i > o ? n : e
            }
            function a(t, e, n, i) {
              var a = 0;
              return n - e >= 2 * Math.PI && (a = 2 * Math.PI),
                e = r.mod(e, 2 * Math.PI),
                n = r.mod(n, 2 * Math.PI) + a,
                t = r.mod(t, 2 * Math.PI),
                i ? e >= n ? t > n && t < e ? t : o(t, n, e, !0) : t < e || t > n ? t : o(t, e, n) : e <= n ? e < t && t < n ? t : o(t, e, n, !0) : t > e || t < n ? t : o(t, n, e)
            }
            function u(t, e, n, i, o, u, s, c, h) {
              var l = [s, c]
                , f = [t, e]
                , d = r.vec2.subtract([], l, f)
                , p = r.vec2.angleTo([1, 0], d);
              p = a(p, i, o, u);
              var g = [n * Math.cos(p) + t, n * Math.sin(p) + e];
              return h && (h.x = g[0],
                h.y = g[1]),
                r.vec2.distance(g, l)
            }
            t.exports = {
              nearAngle: a,
              projectPoint: function(t, e, n, r, i, o, a, s) {
                var c = {};
                return u(t, e, n, r, i, o, a, s, c),
                  c
              },
              pointDistance: u,
              box: function(t, e, n, o, u, s) {
                var c = Math.PI / 2
                  , h = Math.PI
                  , l = 3 * Math.PI / 2
                  , f = []
                  , d = a(0, o, u, s);
                0 === d && f.push(i(t, e, n, 0)),
                (d = a(c, o, u, s)) === c && f.push(i(t, e, n, c)),
                (d = a(h, o, u, s)) === h && f.push(i(t, e, n, h)),
                (d = a(l, o, u, s)) === l && f.push(i(t, e, n, l)),
                  f.push(i(t, e, n, o)),
                  f.push(i(t, e, n, u));
                var p = 1 / 0
                  , g = -1 / 0
                  , m = 1 / 0
                  , v = -1 / 0;
                return r.each(f, function(t) {
                  p > t.x && (p = t.x),
                  g < t.x && (g = t.x),
                  m > t.y && (m = t.y),
                  v < t.y && (v = t.y)
                }),
                  {
                    minX: p,
                    minY: m,
                    maxX: g,
                    maxY: v
                  }
              }
            }
          }
          , function(t, e, n) {
            var r = n(17).vec2;
            t.exports = {
              at: function(t, e, n) {
                return (e - t) * n + t
              },
              pointDistance: function(t, e, n, i, o, a) {
                var u = [n - t, i - e];
                if (r.exactEquals(u, [0, 0]))
                  return NaN;
                var s = [-u[1], u[0]];
                r.normalize(s, s);
                var c = [o - t, a - e];
                return Math.abs(r.dot(c, s))
              },
              box: function(t, e, n, r, i) {
                var o = i / 2
                  , a = Math.min(t, n)
                  , u = Math.max(t, n);
                return {
                  minX: a - o,
                  minY: Math.min(e, r) - o,
                  maxX: u + o,
                  maxY: Math.max(e, r) + o
                }
              },
              len: function(t, e, n, r) {
                return Math.sqrt((n - t) * (n - t) + (r - e) * (r - e))
              }
            }
          }
          , function(t, e, n) {
            var r = n(62);
            t.exports = function(t) {
              return r(t) ? Array.prototype.slice.call(t) : []
            }
          }
          , function(t, e, n) {
            var r = n(62)
              , i = Array.prototype.indexOf;
            t.exports = function(t, e) {
              return !!r(t) && i.call(t, e) > -1
            }
          }
          , function(t, e) {
            function n(t, e) {
              for (var n in e)
                e.hasOwnProperty(n) && "constructor" !== n && void 0 !== e[n] && (t[n] = e[n])
            }
            t.exports = function(t, e, r, i) {
              return e && n(t, e),
              r && n(t, r),
              i && n(t, i),
                t
            }
          }
          , , function(t, e, n) {
            var r = n(22)
              , i = function() {
              function t(t) {
                r.mix(this, {
                  id: "",
                  type: null,
                  model: {},
                  group: null,
                  animate: !1,
                  modelCache: {},
                  isItem: !0,
                  visible: !0
                }, t),
                  this._init()
              }
              var e = t.prototype;
              return e._init = function() {
                this._initGroup(),
                  this.draw()
              }
                ,
                e._mapping = function() {
                  var t = this.mapper
                    , e = this.model;
                  t.mapping(e)
                }
                ,
                e._initGroup = function() {
                  var t = this.group
                    , e = this.model
                    , n = this.type;
                  t.isItemContainer = !0,
                    t.id = e.id,
                    t.itemType = n,
                    t.model = e,
                    t.item = this
                }
                ,
                e._calculateBBox = function() {
                  var t = this.keyShape
                    , e = this.group
                    , n = r.getBBox(t, e);
                  return n.width = n.maxX - n.minX,
                    n.height = n.maxY - n.minY,
                    n.centerX = (n.minX + n.maxX) / 2,
                    n.centerY = (n.minY + n.maxY) / 2,
                    n
                }
                ,
                e.getLabel = function() {
                  return this.group.findByClass("label")[0]
                }
                ,
                e.getGraph = function() {
                  return this.graph
                }
                ,
                e._setShapeObj = function() {
                  var t = this.graph
                    , e = this.type
                    , n = this.getModel();
                  this.shapeObj = t.getShapeObj(e, n)
                }
                ,
                e._afterDraw = function() {
                  var t = this.graph;
                  this._setGId(),
                    this._cacheModel(),
                    t.emit("afteritemdraw", {
                      item: this
                    })
                }
                ,
                e._cacheModel = function() {
                  this.modelCache = r.mix({}, this.model)
                }
                ,
                e._setGId = function() {
                  var t = this.group
                    , e = this.id
                    , n = this.type;
                  t.gid = e,
                    t.deepEach(function(t, r, i) {
                      var o = r.gid;
                      if (t.id = e,
                        t.eventPreFix = n,
                        t.gid = o + "-" + i,
                        t.isShape) {
                        var a = t.get("type");
                        t.gid += "-" + a
                      }
                    })
                }
                ,
                e._beforeDraw = function() {
                  var t = this.graph
                    , e = this.group;
                  t.emit("beforeitemdraw", {
                    item: this
                  }),
                    e.resetMatrix(),
                    this.updateCollapsedParent()
                }
                ,
                e._shouldDraw = function() {
                  return !0
                }
                ,
                e._getDiff = function() {
                  var t = []
                    , e = this.model
                    , n = this.modelCache;
                  return r.each(e, function(e, i) {
                    r.isEqual(e, n[i]) || t.push(i)
                  }),
                  0 !== t.length && t
                }
                ,
                e._drawInner = function() {
                  var t = this.animate;
                  this.group.clear(!t),
                    this._mapping(),
                    this._setShapeObj();
                  var e = this.shapeObj
                    , n = e.draw(this);
                  n && (n.isKeyShape = !0,
                    this.keyShape = n),
                  e.afterDraw && e.afterDraw(this)
                }
                ,
                e.deepEach = function(t, e) {
                  r.traverseTree(this, t, e || function(t) {
                    return t.getChildren()
                  }
                  )
                }
                ,
                e.getShapeObj = function() {
                  return this.shapeObj
                }
                ,
                e.updateCollapsedParent = function() {
                  var t = this.dataMap;
                  this.collapsedParent = function t(e, n) {
                    var r = n[e.parent];
                    if (!r)
                      return !1;
                    if (r) {
                      var i = t(r, n);
                      if (i)
                        return i
                    }
                    return r.collapsed ? r : void 0
                  }(this.model, t)
                }
                ,
                e.isVisible = function() {
                  return this.visible
                }
                ,
                e.hide = function() {
                  var t = this.group
                    , e = this.graph;
                  e.emit("beforeitemhide", {
                    item: this
                  }),
                    t.hide(),
                    this.visible = !1,
                    e.emit("afteritemhide", {
                      item: this
                    })
                }
                ,
                e.show = function() {
                  var t = this.group
                    , e = this.graph;
                  e.emit("beforeitemshow", {
                    item: this
                  }),
                    t.show(),
                    this.visible = !0,
                    e.emit("afteritemshow", {
                      item: this
                    })
                }
                ,
                e.draw = function() {
                  this._beforeDraw(),
                  this._shouldDraw() && this._drawInner(),
                    this._afterDraw()
                }
                ,
                e.forceUpdate = function() {
                  this._beforeDraw(),
                    this._drawInner(),
                    this._afterDraw()
                }
                ,
                e.getCenter = function() {
                  var t = this.getBBox();
                  return {
                    x: t.centerX,
                    y: t.centerY
                  }
                }
                ,
                e.getBBox = function() {
                  return this.bbox || this._calculateBBox()
                }
                ,
                e.layoutUpdate = function() {
                  this.isVisible() && this.draw()
                }
                ,
                e.update = function() {
                  this.draw()
                }
                ,
                e.getModel = function() {
                  return this.model
                }
                ,
                e.getKeyShape = function() {
                  return this.keyShape
                }
                ,
                e.getGraphicGroup = function() {
                  return this.group
                }
                ,
                e.getHierarchy = function() {
                  return this.graph.getHierarchy(this)
                }
                ,
                e.getParent = function() {
                  var t = this.model;
                  return this.itemMap[t.parent]
                }
                ,
                e.getAllParents = function() {
                  for (var t = this.model, e = this.itemMap, n = [], r = t.parent; r && e[r]; ) {
                    var i = e[r]
                      , o = i.getModel();
                    n.push(i),
                      r = o.parent
                  }
                  return n
                }
                ,
                e.getAllChildren = function() {
                  var t = [];
                  return this.deepEach(function(e) {
                    t.push(e)
                  }),
                    t
                }
                ,
                e.getChildren = function() {
                  var t = this.id;
                  return this.graph.getItems().filter(function(e) {
                    return e.model.parent === t
                  })
                }
                ,
                e.toFront = function() {
                  this.group.toFront()
                }
                ,
                e.toBack = function() {
                  this.group.toBack()
                }
                ,
                e.destroy = function() {
                  if (!this.destroyed) {
                    var t = this.animate
                      , e = this.graph;
                    e.emit("beforeitemdestroy", {
                      item: this
                    }),
                      this.group.remove(!t),
                      this.destroyed = !0,
                      e.emit("afteritemdestroy", {
                        item: this
                      })
                  }
                }
                ,
                t
            }();
            t.exports = i
          }
          , function(t, e) {
            t.exports = "2.2.1"
          }
          , function(t, e, n) {
            var r = n(408)
              , i = "\t\n\v\f\r   ᠎             　\u2028\u2029"
              , o = new RegExp("([a-z])[" + i + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + i + "]*,?[" + i + "]*)+)","ig")
              , a = new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[" + i + "]*,?[" + i + "]*","ig")
              , u = function(t) {
              if (!t)
                return null;
              if (typeof t == typeof [])
                return t;
              var e = {
                a: 7,
                c: 6,
                o: 2,
                h: 1,
                l: 2,
                m: 2,
                r: 4,
                q: 4,
                s: 4,
                t: 2,
                v: 1,
                u: 3,
                z: 0
              }
                , n = [];
              return String(t).replace(o, function(t, r, i) {
                var o = []
                  , u = r.toLowerCase();
                if (i.replace(a, function(t, e) {
                  e && o.push(+e)
                }),
                "m" === u && o.length > 2 && (n.push([r].concat(o.splice(0, 2))),
                  u = "l",
                  r = "m" === r ? "l" : "L"),
                "o" === u && 1 === o.length && n.push([r, o[0]]),
                "r" === u)
                  n.push([r].concat(o));
                else
                  for (; o.length >= e[u] && (n.push([r].concat(o.splice(0, e[u]))),
                    e[u]); )
                    ;
              }),
                n
            }
              , s = function(t, e) {
              for (var n = [], r = 0, i = t.length; i - 2 * !e > r; r += 2) {
                var o = [{
                  x: +t[r - 2],
                  y: +t[r - 1]
                }, {
                  x: +t[r],
                  y: +t[r + 1]
                }, {
                  x: +t[r + 2],
                  y: +t[r + 3]
                }, {
                  x: +t[r + 4],
                  y: +t[r + 5]
                }];
                e ? r ? i - 4 === r ? o[3] = {
                  x: +t[0],
                  y: +t[1]
                } : i - 2 === r && (o[2] = {
                  x: +t[0],
                  y: +t[1]
                },
                  o[3] = {
                    x: +t[2],
                    y: +t[3]
                  }) : o[0] = {
                  x: +t[i - 2],
                  y: +t[i - 1]
                } : i - 4 === r ? o[3] = o[2] : r || (o[0] = {
                  x: +t[r],
                  y: +t[r + 1]
                }),
                  n.push(["C", (-o[0].x + 6 * o[1].x + o[2].x) / 6, (-o[0].y + 6 * o[1].y + o[2].y) / 6, (o[1].x + 6 * o[2].x - o[3].x) / 6, (o[1].y + 6 * o[2].y - o[3].y) / 6, o[2].x, o[2].y])
              }
              return n
            }
              , c = function(t, e, n, r, i) {
              var o = [];
              if (null === i && null === r && (r = n),
                t = +t,
                e = +e,
                n = +n,
                r = +r,
              null !== i) {
                var a = Math.PI / 180
                  , u = t + n * Math.cos(-r * a)
                  , s = t + n * Math.cos(-i * a);
                o = [["M", u, e + n * Math.sin(-r * a)], ["A", n, n, 0, +(i - r > 180), 0, s, e + n * Math.sin(-i * a)]]
              } else
                o = [["M", t, e], ["m", 0, -r], ["a", n, r, 0, 1, 1, 0, 2 * r], ["a", n, r, 0, 1, 1, 0, -2 * r], ["z"]];
              return o
            }
              , h = function(t) {
              if (!(t = u(t)) || !t.length)
                return [["M", 0, 0]];
              var e, n, r = [], i = 0, o = 0, a = 0, h = 0, l = 0;
              "M" === t[0][0] && (a = i = +t[0][1],
                h = o = +t[0][2],
                l++,
                r[0] = ["M", i, o]);
              for (var f, d, p = 3 === t.length && "M" === t[0][0] && "R" === t[1][0].toUpperCase() && "Z" === t[2][0].toUpperCase(), g = l, m = t.length; g < m; g++) {
                if (r.push(f = []),
                (e = (d = t[g])[0]) !== e.toUpperCase())
                  switch (f[0] = e.toUpperCase(),
                    f[0]) {
                    case "A":
                      f[1] = d[1],
                        f[2] = d[2],
                        f[3] = d[3],
                        f[4] = d[4],
                        f[5] = d[5],
                        f[6] = +d[6] + i,
                        f[7] = +d[7] + o;
                      break;
                    case "V":
                      f[1] = +d[1] + o;
                      break;
                    case "H":
                      f[1] = +d[1] + i;
                      break;
                    case "R":
                      for (var v = 2, y = (n = [i, o].concat(d.slice(1))).length; v < y; v++)
                        n[v] = +n[v] + i,
                          n[++v] = +n[v] + o;
                      r.pop(),
                        r = r.concat(s(n, p));
                      break;
                    case "O":
                      r.pop(),
                        (n = c(i, o, d[1], d[2])).push(n[0]),
                        r = r.concat(n);
                      break;
                    case "U":
                      r.pop(),
                        r = r.concat(c(i, o, d[1], d[2], d[3])),
                        f = ["U"].concat(r[r.length - 1].slice(-2));
                      break;
                    case "M":
                      a = +d[1] + i,
                        h = +d[2] + o;
                      break;
                    default:
                      for (var x = 1, b = d.length; x < b; x++)
                        f[x] = +d[x] + (x % 2 ? i : o)
                  }
                else if ("R" === e)
                  n = [i, o].concat(d.slice(1)),
                    r.pop(),
                    r = r.concat(s(n, p)),
                    f = ["R"].concat(d.slice(-2));
                else if ("O" === e)
                  r.pop(),
                    (n = c(i, o, d[1], d[2])).push(n[0]),
                    r = r.concat(n);
                else if ("U" === e)
                  r.pop(),
                    r = r.concat(c(i, o, d[1], d[2], d[3])),
                    f = ["U"].concat(r[r.length - 1].slice(-2));
                else
                  for (var w = 0, _ = d.length; w < _; w++)
                    f[w] = d[w];
                if ("O" !== (e = e.toUpperCase()))
                  switch (f[0]) {
                    case "Z":
                      i = +a,
                        o = +h;
                      break;
                    case "H":
                      i = f[1];
                      break;
                    case "V":
                      o = f[1];
                      break;
                    case "M":
                      a = f[f.length - 2],
                        h = f[f.length - 1];
                      break;
                    default:
                      i = f[f.length - 2],
                        o = f[f.length - 1]
                  }
              }
              return r
            }
              , l = function(t, e, n, r) {
              return [t, e, n, r, n, r]
            }
              , f = function(t, e, n, r, i, o) {
              return [1 / 3 * t + 2 / 3 * n, 1 / 3 * e + 2 / 3 * r, 1 / 3 * i + 2 / 3 * n, 1 / 3 * o + 2 / 3 * r, i, o]
            }
              , d = function(t, e) {
              var n, r = h(t), i = e && h(e), o = {
                x: 0,
                y: 0,
                bx: 0,
                by: 0,
                X: 0,
                Y: 0,
                qx: null,
                qy: null
              }, a = {
                x: 0,
                y: 0,
                bx: 0,
                by: 0,
                X: 0,
                Y: 0,
                qx: null,
                qy: null
              }, u = [], s = [], c = "", d = "", p = function(t, e, n) {
                var r, i;
                if (!t)
                  return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
                switch (!(t[0]in {
                  T: 1,
                  Q: 1
                }) && (e.qx = e.qy = null),
                  t[0]) {
                  case "M":
                    e.X = t[1],
                      e.Y = t[2];
                    break;
                  case "A":
                    t = ["C"].concat(function t(e, n, r, i, o, a, u, s, c, h) {
                      r === i && (r += 1);
                      var l, f, d, p, g, m = 120 * Math.PI / 180, v = Math.PI / 180 * (+o || 0), y = [], x = function(t, e, n) {
                        return {
                          x: t * Math.cos(n) - e * Math.sin(n),
                          y: t * Math.sin(n) + e * Math.cos(n)
                        }
                      };
                      if (h)
                        f = h[0],
                          d = h[1],
                          p = h[2],
                          g = h[3];
                      else {
                        e = (l = x(e, n, -v)).x,
                          n = l.y,
                          s = (l = x(s, c, -v)).x,
                          c = l.y,
                        e === s && n === c && (s += 1,
                          c += 1);
                        var b = (e - s) / 2
                          , w = (n - c) / 2
                          , _ = b * b / (r * r) + w * w / (i * i);
                        _ > 1 && (r *= _ = Math.sqrt(_),
                          i *= _);
                        var S = r * r
                          , M = i * i
                          , P = (a === u ? -1 : 1) * Math.sqrt(Math.abs((S * M - S * w * w - M * b * b) / (S * w * w + M * b * b)));
                        p = P * r * w / i + (e + s) / 2,
                          g = P * -i * b / r + (n + c) / 2,
                          f = Math.asin(((n - g) / i).toFixed(9)),
                          d = Math.asin(((c - g) / i).toFixed(9)),
                          f = e < p ? Math.PI - f : f,
                          d = s < p ? Math.PI - d : d,
                        f < 0 && (f = 2 * Math.PI + f),
                        d < 0 && (d = 2 * Math.PI + d),
                        u && f > d && (f -= 2 * Math.PI),
                        !u && d > f && (d -= 2 * Math.PI)
                      }
                      var O = d - f;
                      if (Math.abs(O) > m) {
                        var E = d
                          , A = s
                          , C = c;
                        d = f + m * (u && d > f ? 1 : -1),
                          y = t(s = p + r * Math.cos(d), c = g + i * Math.sin(d), r, i, o, 0, u, A, C, [d, E, p, g])
                      }
                      O = d - f;
                      var k = Math.cos(f)
                        , I = Math.sin(f)
                        , B = Math.cos(d)
                        , j = Math.sin(d)
                        , T = Math.tan(O / 4)
                        , L = 4 / 3 * r * T
                        , N = 4 / 3 * i * T
                        , D = [e, n]
                        , G = [e + L * I, n - N * k]
                        , Y = [s + L * j, c - N * B]
                        , X = [s, c];
                      if (G[0] = 2 * D[0] - G[0],
                        G[1] = 2 * D[1] - G[1],
                        h)
                        return [G, Y, X].concat(y);
                      for (var F = [], R = 0, H = (y = [G, Y, X].concat(y).join().split(",")).length; R < H; R++)
                        F[R] = R % 2 ? x(y[R - 1], y[R], v).y : x(y[R], y[R + 1], v).x;
                      return F
                    }
                      .apply(0, [e.x, e.y].concat(t.slice(1))));
                    break;
                  case "S":
                    "C" === n || "S" === n ? (r = 2 * e.x - e.bx,
                      i = 2 * e.y - e.by) : (r = e.x,
                      i = e.y),
                      t = ["C", r, i].concat(t.slice(1));
                    break;
                  case "T":
                    "Q" === n || "T" === n ? (e.qx = 2 * e.x - e.qx,
                      e.qy = 2 * e.y - e.qy) : (e.qx = e.x,
                      e.qy = e.y),
                      t = ["C"].concat(f(e.x, e.y, e.qx, e.qy, t[1], t[2]));
                    break;
                  case "Q":
                    e.qx = t[1],
                      e.qy = t[2],
                      t = ["C"].concat(f(e.x, e.y, t[1], t[2], t[3], t[4]));
                    break;
                  case "L":
                    t = ["C"].concat(l(e.x, e.y, t[1], t[2]));
                    break;
                  case "H":
                    t = ["C"].concat(l(e.x, e.y, t[1], e.y));
                    break;
                  case "V":
                    t = ["C"].concat(l(e.x, e.y, e.x, t[1]));
                    break;
                  case "Z":
                    t = ["C"].concat(l(e.x, e.y, e.X, e.Y))
                }
                return t
              }, g = function(t, e) {
                if (t[e].length > 7) {
                  t[e].shift();
                  for (var o = t[e]; o.length; )
                    u[e] = "A",
                    i && (s[e] = "A"),
                      t.splice(e++, 0, ["C"].concat(o.splice(0, 6)));
                  t.splice(e, 1),
                    n = Math.max(r.length, i && i.length || 0)
                }
              }, m = function(t, e, o, a, u) {
                t && e && "M" === t[u][0] && "M" !== e[u][0] && (e.splice(u, 0, ["M", a.x, a.y]),
                  o.bx = 0,
                  o.by = 0,
                  o.x = t[u][1],
                  o.y = t[u][2],
                  n = Math.max(r.length, i && i.length || 0))
              };
              n = Math.max(r.length, i && i.length || 0);
              for (var v = 0; v < n; v++) {
                r[v] && (c = r[v][0]),
                "C" !== c && (u[v] = c,
                v && (d = u[v - 1])),
                  r[v] = p(r[v], o, d),
                "A" !== u[v] && "C" === c && (u[v] = "C"),
                  g(r, v),
                i && (i[v] && (c = i[v][0]),
                "C" !== c && (s[v] = c,
                v && (d = s[v - 1])),
                  i[v] = p(i[v], a, d),
                "A" !== s[v] && "C" === c && (s[v] = "C"),
                  g(i, v)),
                  m(r, i, o, a, v),
                  m(i, r, a, o, v);
                var y = r[v]
                  , x = i && i[v]
                  , b = y.length
                  , w = i && x.length;
                o.x = y[b - 2],
                  o.y = y[b - 1],
                  o.bx = parseFloat(y[b - 4]) || o.x,
                  o.by = parseFloat(y[b - 3]) || o.y,
                  a.bx = i && (parseFloat(x[w - 4]) || a.x),
                  a.by = i && (parseFloat(x[w - 3]) || a.y),
                  a.x = i && x[w - 2],
                  a.y = i && x[w - 1]
              }
              return i ? [r, i] : r
            }
              , p = /,?([a-z]),?/gi
              , g = function(t) {
              return t.join(",").replace(p, "$1")
            }
              , m = function(t, e, n, r, i) {
              return t * (t * (-3 * e + 9 * n - 9 * r + 3 * i) + 6 * e - 12 * n + 6 * r) - 3 * e + 3 * n
            }
              , v = function(t, e, n, r, i, o, a, u, s) {
              null === s && (s = 1);
              for (var c = (s = s > 1 ? 1 : s < 0 ? 0 : s) / 2, h = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], l = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], f = 0, d = 0; d < 12; d++) {
                var p = c * h[d] + c
                  , g = m(p, t, n, i, a)
                  , v = m(p, e, r, o, u)
                  , y = g * g + v * v;
                f += l[d] * Math.sqrt(y)
              }
              return c * f
            }
              , y = function(t, e, n, r, i, o, a, u) {
              if (!(Math.max(t, n) < Math.min(i, a) || Math.min(t, n) > Math.max(i, a) || Math.max(e, r) < Math.min(o, u) || Math.min(e, r) > Math.max(o, u))) {
                var s = (t - n) * (o - u) - (e - r) * (i - a);
                if (s) {
                  var c = ((t * r - e * n) * (i - a) - (t - n) * (i * u - o * a)) / s
                    , h = ((t * r - e * n) * (o - u) - (e - r) * (i * u - o * a)) / s
                    , l = +c.toFixed(2)
                    , f = +h.toFixed(2);
                  if (!(l < +Math.min(t, n).toFixed(2) || l > +Math.max(t, n).toFixed(2) || l < +Math.min(i, a).toFixed(2) || l > +Math.max(i, a).toFixed(2) || f < +Math.min(e, r).toFixed(2) || f > +Math.max(e, r).toFixed(2) || f < +Math.min(o, u).toFixed(2) || f > +Math.max(o, u).toFixed(2)))
                    return {
                      x: c,
                      y: h
                    }
                }
              }
            }
              , x = function(t, e, n) {
              return e >= t.x && e <= t.x + t.width && n >= t.y && n <= t.y + t.height
            }
              , b = function(t, e, n, r, i) {
              if (i)
                return [["M", +t + +i, e], ["l", n - 2 * i, 0], ["a", i, i, 0, 0, 1, i, i], ["l", 0, r - 2 * i], ["a", i, i, 0, 0, 1, -i, i], ["l", 2 * i - n, 0], ["a", i, i, 0, 0, 1, -i, -i], ["l", 0, 2 * i - r], ["a", i, i, 0, 0, 1, i, -i], ["z"]];
              var o = [["M", t, e], ["l", n, 0], ["l", 0, r], ["l", -n, 0], ["z"]];
              return o.parsePathArray = g,
                o
            }
              , w = function(t, e, n, r) {
              return null === t && (t = e = n = r = 0),
              null === e && (e = t.y,
                n = t.width,
                r = t.height,
                t = t.x),
                {
                  x: t,
                  y: e,
                  width: n,
                  w: n,
                  height: r,
                  h: r,
                  x2: t + n,
                  y2: e + r,
                  cx: t + n / 2,
                  cy: e + r / 2,
                  r1: Math.min(n, r) / 2,
                  r2: Math.max(n, r) / 2,
                  r0: Math.sqrt(n * n + r * r) / 2,
                  path: b(t, e, n, r),
                  vb: [t, e, n, r].join(" ")
                }
            }
              , _ = function(t, e, n, i, o, a, u, s) {
              r.isArray(t) || (t = [t, e, n, i, o, a, u, s]);
              var c = function(t, e, n, r, i, o, a, u) {
                for (var s, c, h, l, f = [], d = [[], []], p = 0; p < 2; ++p)
                  if (0 === p ? (c = 6 * t - 12 * n + 6 * i,
                    s = -3 * t + 9 * n - 9 * i + 3 * a,
                    h = 3 * n - 3 * t) : (c = 6 * e - 12 * r + 6 * o,
                    s = -3 * e + 9 * r - 9 * o + 3 * u,
                    h = 3 * r - 3 * e),
                  Math.abs(s) < 1e-12) {
                    if (Math.abs(c) < 1e-12)
                      continue;
                    (l = -h / c) > 0 && l < 1 && f.push(l)
                  } else {
                    var g = c * c - 4 * h * s
                      , m = Math.sqrt(g);
                    if (!(g < 0)) {
                      var v = (-c + m) / (2 * s);
                      v > 0 && v < 1 && f.push(v);
                      var y = (-c - m) / (2 * s);
                      y > 0 && y < 1 && f.push(y)
                    }
                  }
                for (var x, b = f.length, w = b; b--; )
                  x = 1 - (l = f[b]),
                    d[0][b] = x * x * x * t + 3 * x * x * l * n + 3 * x * l * l * i + l * l * l * a,
                    d[1][b] = x * x * x * e + 3 * x * x * l * r + 3 * x * l * l * o + l * l * l * u;
                return d[0][w] = t,
                  d[1][w] = e,
                  d[0][w + 1] = a,
                  d[1][w + 1] = u,
                  d[0].length = d[1].length = w + 2,
                  {
                    min: {
                      x: Math.min.apply(0, d[0]),
                      y: Math.min.apply(0, d[1])
                    },
                    max: {
                      x: Math.max.apply(0, d[0]),
                      y: Math.max.apply(0, d[1])
                    }
                  }
              }
                .apply(null, t);
              return w(c.min.x, c.min.y, c.max.x - c.min.x, c.max.y - c.min.y)
            }
              , S = function(t, e, n, r, i, o, a, u, s) {
              var c = 1 - s
                , h = Math.pow(c, 3)
                , l = Math.pow(c, 2)
                , f = s * s
                , d = f * s
                , p = t + 2 * s * (n - t) + f * (i - 2 * n + t)
                , g = e + 2 * s * (r - e) + f * (o - 2 * r + e)
                , m = n + 2 * s * (i - n) + f * (a - 2 * i + n)
                , v = r + 2 * s * (o - r) + f * (u - 2 * o + r);
              return {
                x: h * t + 3 * l * s * n + 3 * c * s * s * i + d * a,
                y: h * e + 3 * l * s * r + 3 * c * s * s * o + d * u,
                m: {
                  x: p,
                  y: g
                },
                n: {
                  x: m,
                  y: v
                },
                start: {
                  x: c * t + s * n,
                  y: c * e + s * r
                },
                end: {
                  x: c * i + s * a,
                  y: c * o + s * u
                },
                alpha: 90 - 180 * Math.atan2(p - m, g - v) / Math.PI
              }
            }
              , M = function(t, e, n) {
              if (!function(t, e) {
                return t = w(t),
                  e = w(e),
                x(e, t.x, t.y) || x(e, t.x2, t.y) || x(e, t.x, t.y2) || x(e, t.x2, t.y2) || x(t, e.x, e.y) || x(t, e.x2, e.y) || x(t, e.x, e.y2) || x(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y)
              }(_(t), _(e)))
                return n ? 0 : [];
              for (var r = ~~(v.apply(0, t) / 8), i = ~~(v.apply(0, e) / 8), o = [], a = [], u = {}, s = n ? 0 : [], c = 0; c < r + 1; c++) {
                var h = S.apply(0, t.concat(c / r));
                o.push({
                  x: h.x,
                  y: h.y,
                  t: c / r
                })
              }
              for (var l = 0; l < i + 1; l++) {
                var f = S.apply(0, e.concat(l / i));
                a.push({
                  x: f.x,
                  y: f.y,
                  t: l / i
                })
              }
              for (var d = 0; d < r; d++)
                for (var p = 0; p < i; p++) {
                  var g = o[d]
                    , m = o[d + 1]
                    , b = a[p]
                    , M = a[p + 1]
                    , P = Math.abs(m.x - g.x) < .001 ? "y" : "x"
                    , O = Math.abs(M.x - b.x) < .001 ? "y" : "x"
                    , E = y(g.x, g.y, m.x, m.y, b.x, b.y, M.x, M.y);
                  if (E) {
                    if (u[E.x.toFixed(4)] === E.y.toFixed(4))
                      continue;
                    u[E.x.toFixed(4)] = E.y.toFixed(4);
                    var A = g.t + Math.abs((E[P] - g[P]) / (m[P] - g[P])) * (m.t - g.t)
                      , C = b.t + Math.abs((E[O] - b[O]) / (M[O] - b[O])) * (M.t - b.t);
                    A >= 0 && A <= 1 && C >= 0 && C <= 1 && (n ? s++ : s.push({
                      x: E.x,
                      y: E.y,
                      t1: A,
                      t2: C
                    }))
                  }
                }
              return s
            };
            function P(t, e) {
              var n = []
                , r = [];
              return t.length && function t(e, i) {
                if (1 === e.length)
                  n.push(e[0]),
                    r.push(e[0]);
                else {
                  for (var o = [], a = 0; a < e.length - 1; a++)
                    0 === a && n.push(e[0]),
                    a === e.length - 2 && r.push(e[a + 1]),
                      o[a] = [(1 - i) * e[a][0] + i * e[a + 1][0], (1 - i) * e[a][1] + i * e[a + 1][1]];
                  t(o, i)
                }
              }(t, e),
                {
                  left: n,
                  right: r.reverse()
                }
            }
            var O = function(t, e) {
              if (t.length !== e.length)
                return !1;
              var n = !0;
              return r.each(t, function(t, r) {
                if (t !== e[r])
                  return n = !1,
                    !1
              }),
                n
            };
            function E(t, e, n) {
              var r = null
                , i = n;
              return e < i && (i = e,
                r = "add"),
              t < i && (i = t,
                r = "del"),
                {
                  type: r,
                  min: i
                }
            }
            function A(t, e, n) {
              for (var r, i = [].concat(t), o = 1 / (n + 1), a = C(e)[0], u = 1; u <= n; u++)
                o *= u,
                  0 === (r = Math.floor(t.length * o)) ? i.unshift([a[0] * o + t[r][0] * (1 - o), a[1] * o + t[r][1] * (1 - o)]) : i.splice(r, 0, [a[0] * o + t[r][0] * (1 - o), a[1] * o + t[r][1] * (1 - o)]);
              return i
            }
            function C(t) {
              var e = [];
              switch (t[0]) {
                case "M":
                case "L":
                  e.push([t[1], t[2]]);
                  break;
                case "A":
                  e.push([t[6], t[7]]);
                  break;
                case "Q":
                  e.push([t[3], t[4]]),
                    e.push([t[1], t[2]]);
                  break;
                case "T":
                  e.push([t[1], t[2]]);
                  break;
                case "C":
                  e.push([t[5], t[6]]),
                    e.push([t[1], t[2]]),
                    e.push([t[3], t[4]]);
                  break;
                case "S":
                  e.push([t[3], t[4]]),
                    e.push([t[1], t[2]]);
                  break;
                case "H":
                case "V":
                  e.push([t[1], t[1]])
              }
              return e
            }
            t.exports = {
              parsePathString: u,
              parsePathArray: g,
              pathTocurve: d,
              pathToAbsolute: h,
              catmullRomToBezier: s,
              rectPath: b,
              fillPath: function(t, e) {
                if (1 === t.length)
                  return t;
                var n = t.length - 1
                  , r = e.length - 1
                  , i = n / r
                  , o = [];
                if (1 === t.length && "M" === t[0][0]) {
                  for (var a = 0; a < r - n; a++)
                    t.push(t[0]);
                  return t
                }
                for (var u = 0; u < r; u++) {
                  var s = Math.floor(i * u);
                  o[s] = (o[s] || 0) + 1
                }
                var c = o.reduce(function(e, r, i) {
                  return i === n ? e.concat(t[n]) : e.concat(function(t, e, n) {
                    if (1 === n)
                      return [[].concat(t)];
                    var r = [];
                    if ("L" === e[0] || "C" === e[0] || "Q" === e[0])
                      r = r.concat(function(t, e, n) {
                        var r = [[t[1], t[2]]];
                        n = n || 2;
                        var i = [];
                        "A" === e[0] ? (r.push(e[6]),
                          r.push(e[7])) : "C" === e[0] ? (r.push([e[1], e[2]]),
                          r.push([e[3], e[4]]),
                          r.push([e[5], e[6]])) : "S" === e[0] || "Q" === e[0] ? (r.push([e[1], e[2]]),
                          r.push([e[3], e[4]])) : r.push([e[1], e[2]]);
                        for (var o = r, a = 1 / n, u = 0; u < n - 1; u++) {
                          var s = P(o, a / (1 - a * u));
                          i.push(s.left),
                            o = s.right
                        }
                        return i.push(o),
                          i.map(function(t) {
                            var e = [];
                            return 4 === t.length && (e.push("C"),
                              e = e.concat(t[2])),
                            t.length >= 3 && (3 === t.length && e.push("Q"),
                              e = e.concat(t[1])),
                            2 === t.length && e.push("L"),
                              e = e.concat(t[t.length - 1])
                          })
                      }(t, e, n));
                    else {
                      var i = [].concat(t);
                      "M" === i[0] && (i[0] = "L");
                      for (var o = 0; o <= n - 1; o++)
                        r.push(i)
                    }
                    return r
                  }(t[i], t[i + 1], r))
                }, []);
                return c.unshift(t[0]),
                "Z" !== e[r] && "z" !== e[r] || c.push("Z"),
                  c
              },
              fillPathByDiff: function(t, e) {
                var n = function(t, e) {
                  var n, r, i = t.length, o = e.length, a = 0;
                  if (0 === i || 0 === o)
                    return null;
                  for (var u = [], s = 0; s <= i; s++)
                    u[s] = [],
                      u[s][0] = {
                        min: s
                      };
                  for (var c = 0; c <= o; c++)
                    u[0][c] = {
                      min: c
                    };
                  for (var h = 1; h <= i; h++) {
                    n = t[h - 1];
                    for (var l = 1; l <= o; l++) {
                      r = e[l - 1],
                        a = O(n, r) ? 0 : 1;
                      var f = u[h - 1][l].min + 1
                        , d = u[h][l - 1].min + 1
                        , p = u[h - 1][l - 1].min + a;
                      u[h][l] = E(f, d, p)
                    }
                  }
                  return u
                }(t, e)
                  , r = t.length
                  , i = e.length
                  , o = []
                  , a = 1
                  , u = 1;
                if (n[r][i] !== r) {
                  for (var s = 1; s <= r; s++) {
                    var c = n[s][s].min;
                    u = s;
                    for (var h = a; h <= i; h++)
                      n[s][h].min < c && (c = n[s][h].min,
                        u = h);
                    a = u,
                    n[s][a].type && o.push({
                      index: s - 1,
                      type: n[s][a].type
                    })
                  }
                  for (var l = o.length - 1; l >= 0; l--)
                    a = o[l].index,
                      "add" === o[l].type ? t.splice(a, 0, [].concat(t[a])) : t.splice(a, 1)
                }
                var f = i - (r = t.length);
                if (r < i)
                  for (var d = 0; d < f; d++)
                    "z" === t[r - 1][0] || "Z" === t[r - 1][0] ? t.splice(r - 2, 0, t[r - 2]) : t.push(t[r - 1]),
                      r += 1;
                return t
              },
              formatPath: function(t, e) {
                if (t.length <= 1)
                  return t;
                for (var n, r = 0; r < e.length; r++)
                  if (t[r][0] !== e[r][0])
                    switch (n = C(t[r]),
                      e[r][0]) {
                      case "M":
                        t[r] = ["M"].concat(n[0]);
                        break;
                      case "L":
                        t[r] = ["L"].concat(n[0]);
                        break;
                      case "A":
                        t[r] = [].concat(e[r]),
                          t[r][6] = n[0][0],
                          t[r][7] = n[0][1];
                        break;
                      case "Q":
                        if (n.length < 2) {
                          if (!(r > 0)) {
                            t[r] = e[r];
                            break
                          }
                          n = A(n, t[r - 1], 1)
                        }
                        t[r] = ["Q"].concat(n.reduce(function(t, e) {
                          return t.concat(e)
                        }, []));
                        break;
                      case "T":
                        t[r] = ["T"].concat(n[0]);
                        break;
                      case "C":
                        if (n.length < 3) {
                          if (!(r > 0)) {
                            t[r] = e[r];
                            break
                          }
                          n = A(n, t[r - 1], 2)
                        }
                        t[r] = ["C"].concat(n.reduce(function(t, e) {
                          return t.concat(e)
                        }, []));
                        break;
                      case "S":
                        if (n.length < 2) {
                          if (!(r > 0)) {
                            t[r] = e[r];
                            break
                          }
                          n = A(n, t[r - 1], 1)
                        }
                        t[r] = ["S"].concat(n.reduce(function(t, e) {
                          return t.concat(e)
                        }, []));
                        break;
                      default:
                        t[r] = e[r]
                    }
                return t
              },
              intersection: function(t, e) {
                return function(t, e, n) {
                  var r, i, o, a, u, s, c, h, l, f;
                  t = d(t),
                    e = d(e);
                  for (var p = [], g = 0, m = t.length; g < m; g++) {
                    var v = t[g];
                    if ("M" === v[0])
                      r = u = v[1],
                        i = s = v[2];
                    else {
                      "C" === v[0] ? (r = (l = [r, i].concat(v.slice(1)))[6],
                        i = l[7]) : (l = [r, i, r, i, u, s, u, s],
                        r = u,
                        i = s);
                      for (var y = 0, x = e.length; y < x; y++) {
                        var b = e[y];
                        if ("M" === b[0])
                          o = c = b[1],
                            a = h = b[2];
                        else {
                          "C" === b[0] ? (o = (f = [o, a].concat(b.slice(1)))[6],
                            a = f[7]) : (f = [o, a, o, a, c, h, c, h],
                            o = c,
                            a = h);
                          for (var w = M(l, f, n), _ = 0, S = w.length; _ < S; _++)
                            w[_].segment1 = g,
                              w[_].segment2 = y,
                              w[_].bez1 = l,
                              w[_].bez2 = f;
                          p = p.concat(w)
                        }
                      }
                    }
                  }
                  return p
                }(t, e)
              }
            }
          }
          , function(t, e, n) {
            var r = n(17)
              , i = n(37)
              , o = n(356)
              , a = n(363)
              , u = function t(e) {
              t.superclass.constructor.call(this, e)
            };
            u.Symbols = {
              circle: function(t, e, n) {
                return [["M", t, e], ["m", -n, 0], ["a", n, n, 0, 1, 0, 2 * n, 0], ["a", n, n, 0, 1, 0, 2 * -n, 0]]
              },
              square: function(t, e, n) {
                return [["M", t - n, e - n], ["L", t + n, e - n], ["L", t + n, e + n], ["L", t - n, e + n], ["Z"]]
              },
              diamond: function(t, e, n) {
                return [["M", t - n, e], ["L", t, e - n], ["L", t + n, e], ["L", t, e + n], ["Z"]]
              },
              triangle: function(t, e, n) {
                var r = n * Math.sin(1 / 3 * Math.PI);
                return [["M", t - n, e + r], ["L", t, e - r], ["L", t + n, e + r], ["z"]]
              },
              "triangle-down": function(t, e, n) {
                var r = n * Math.sin(1 / 3 * Math.PI);
                return [["M", t - n, e - r], ["L", t + n, e - r], ["L", t, e + r], ["Z"]]
              }
            },
              u.ATTRS = {
                path: null,
                lineWidth: 1
              },
              r.extend(u, i),
              r.augment(u, {
                type: "marker",
                canFill: !0,
                canStroke: !0,
                getDefaultAttrs: function() {
                  return {
                    x: 0,
                    y: 0,
                    lineWidth: 1
                  }
                },
                calculateBox: function() {
                  var t = this._attrs
                    , e = t.x
                    , n = t.y
                    , r = t.radius
                    , i = this.getHitLineWidth() / 2 + r;
                  return {
                    minX: e - i,
                    minY: n - i,
                    maxX: e + i,
                    maxY: n + i
                  }
                },
                _getPath: function() {
                  var t = this._attrs
                    , e = t.x
                    , n = t.y
                    , i = t.radius || t.r
                    , o = t.symbol || "circle";
                  return (r.isFunction(o) ? o : u.Symbols[o])(e, n, i)
                },
                createPath: function(t) {
                  var e = this._cfg.segments;
                  if (!e || this._cfg.hasUpdate) {
                    var n, r = o.parsePath(this._getPath());
                    t.beginPath(),
                      e = [];
                    for (var i = 0; i < r.length; i++) {
                      var u = r[i];
                      n = new a(u,n,i === r.length - 1),
                        e.push(n),
                        n.draw(t)
                    }
                    this._cfg.segments = e,
                      this._cfg.hasUpdate = !1
                  } else {
                    t.beginPath();
                    for (var s = 0; s < e.length; s++)
                      e[s].draw(t)
                  }
                }
              }),
              t.exports = u
          }
          , function(t, e, n) {
            var r = n(17)
              , i = r.vec2;
            function o(t, e, n, r, i) {
              var o = 1 - i;
              return o * o * (o * r + 3 * i * n) + i * i * (i * t + 3 * o * e)
            }
            function a(t, e, n, r, a, u, s, c, h, l, f) {
              var d, p, g, m, v, y, x, b, w = .005, _ = 1 / 0, S = [h, l];
              for (p = 0; p < 1; p += .05)
                g = [o(t, n, a, s, p), o(e, r, u, c, p)],
                (m = i.squaredDistance(S, g)) < _ && (d = p,
                  _ = m);
              _ = 1 / 0;
              for (var M = 0; M < 32 && !(w < 1e-4); M++)
                b = d + w,
                  g = [o(t, n, a, s, x = d - w), o(e, r, u, c, x)],
                  m = i.squaredDistance(S, g),
                  x >= 0 && m < _ ? (d = x,
                    _ = m) : (y = [o(t, n, a, s, b), o(e, r, u, c, b)],
                    v = i.squaredDistance(S, y),
                    b <= 1 && v < _ ? (d = b,
                      _ = v) : w *= .5);
              return f && (f.x = o(t, n, a, s, d),
                f.y = o(e, r, u, c, d)),
                Math.sqrt(_)
            }
            function u(t, e, n, r, i) {
              return t * (t * (-3 * e + 9 * n - 9 * r + 3 * i) + 6 * e - 12 * n + 6 * r) - 3 * e + 3 * n
            }
            t.exports = {
              at: o,
              derivativeAt: function(t, e, n, r, i) {
                var o = 1 - i;
                return 3 * (((e - t) * o + 2 * (n - e) * i) * o + (r - n) * i * i)
              },
              projectPoint: function(t, e, n, r, i, o, u, s, c, h) {
                var l = {};
                return a(t, e, n, r, i, o, u, s, c, h, l),
                  l
              },
              pointDistance: a,
              extrema: function(t, e, n, i) {
                var o, a, u, s = 3 * t - 9 * e + 9 * n - 3 * i, c = 6 * e - 12 * n + 6 * i, h = 3 * n - 3 * i, l = [];
                if (r.isNumberEqual(s, 0))
                  r.isNumberEqual(c, 0) || (o = -h / c) >= 0 && o <= 1 && l.push(o);
                else {
                  var f = c * c - 4 * s * h;
                  r.isNumberEqual(f, 0) ? l.push(-c / (2 * s)) : f > 0 && (a = (-c - (u = Math.sqrt(f))) / (2 * s),
                  (o = (-c + u) / (2 * s)) >= 0 && o <= 1 && l.push(o),
                  a >= 0 && a <= 1 && l.push(a))
                }
                return l
              },
              len: function(t, e, n, i, o, a, s, c, h) {
                r.isNil(h) && (h = 1);
                for (var l = (h = h > 1 ? 1 : h < 0 ? 0 : h) / 2, f = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], d = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], p = 0, g = 0; g < 12; g++) {
                  var m = l * f[g] + l
                    , v = u(m, t, n, o, s)
                    , y = u(m, e, i, a, c)
                    , x = v * v + y * y;
                  p += d[g] * Math.sqrt(x)
                }
                return l * p
              }
            }
          }
          , function(t, e, n) {
            var r = n(366)
              , i = n(404)
              , o = n(375)
              , a = n(365);
            t.exports = {
              line: function(t, e, n, i, o, a, u) {
                var s = r.box(t, e, n, i, o);
                if (!this.box(s.minX, s.maxX, s.minY, s.maxY, a, u))
                  return !1;
                var c = r.pointDistance(t, e, n, i, a, u);
                return !isNaN(c) && c <= o / 2
              },
              polyline: function(t, e, n, r) {
                var i = t.length - 1;
                if (i < 1)
                  return !1;
                for (var o = 0; o < i; o++) {
                  var a = t[o][0]
                    , u = t[o][1]
                    , s = t[o + 1][0]
                    , c = t[o + 1][1];
                  if (this.line(a, u, s, c, e, n, r))
                    return !0
                }
                return !1
              },
              cubicline: function(t, e, n, r, i, a, u, s, c, h, l) {
                return o.pointDistance(t, e, n, r, i, a, u, s, h, l) <= c / 2
              },
              quadraticline: function(t, e, n, r, o, a, u, s, c) {
                return i.pointDistance(t, e, n, r, o, a, s, c) <= u / 2
              },
              arcline: function(t, e, n, r, i, o, u, s, c) {
                return a.pointDistance(t, e, n, r, i, o, s, c) <= u / 2
              },
              rect: function(t, e, n, r, i, o) {
                return t <= i && i <= t + n && e <= o && o <= e + r
              },
              circle: function(t, e, n, r, i) {
                return Math.pow(r - t, 2) + Math.pow(i - e, 2) <= Math.pow(n, 2)
              },
              box: function(t, e, n, r, i, o) {
                return t <= i && i <= e && n <= o && o <= r
              }
            }
          }
          , function(t, e) {
            t.exports = function(t) {
              var e = typeof t;
              return null != t && ("object" == e || "function" == e)
            }
          }
          , function(t, e, n) {
            var r = n(383)
              , i = n(62)
              , o = n(358);
            t.exports = function t(e, n) {
              if (e === n)
                return !0;
              if (!e || !n)
                return !1;
              if (o(e) || o(n))
                return !1;
              if (i(e) || i(n)) {
                if (e.length !== n.length)
                  return !1;
                for (var a = !0, u = 0; u < e.length && (a = t(e[u], n[u])); u++)
                  ;
                return a
              }
              if (r(e) || r(n)) {
                var s = Object.keys(e)
                  , c = Object.keys(n);
                if (s.length !== c.length)
                  return !1;
                for (var h = !0, l = 0; l < s.length && (h = t(e[s[l]], n[s[l]])); l++)
                  ;
                return h
              }
              return !1
            }
          }
          , function(t, e, n) {
            var r = n(359)
              , i = n(29)
              , o = 5;
            function a(t, e, n, u) {
              for (var s in n = n || 0,
                u = u || o,
                e)
                if (e.hasOwnProperty(s)) {
                  var c = e[s];
                  null !== c && r(c) ? (r(t[s]) || (t[s] = {}),
                    n < u ? a(t[s], c, n + 1, u) : t[s] = e[s]) : i(c) ? (t[s] = [],
                    t[s] = t[s].concat(c)) : void 0 !== c && (t[s] = c)
                }
            }
            t.exports = function() {
              for (var t = new Array(arguments.length), e = t.length, n = 0; n < e; n++)
                t[n] = arguments[n];
              for (var r = t[0], i = 1; i < e; i++)
                a(r, t[i]);
              return r
            }
          }
          , function(t, e, n) {
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
              }
              : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
              }
              , i = n(29);
            t.exports = function t(e) {
              if ("object" !== (void 0 === e ? "undefined" : r(e)) || null === e)
                return e;
              var n = void 0;
              if (i(e)) {
                n = [];
                for (var o = 0, a = e.length; o < a; o++)
                  "object" === r(e[o]) && null != e[o] ? n[o] = t(e[o]) : n[o] = e[o]
              } else
                for (var u in n = {},
                  e)
                  "object" === r(e[u]) && null != e[u] ? n[u] = t(e[u]) : n[u] = e[u];
              return n
            }
          }
          , function(t, e, n) {
            var r = n(151);
            r.translate = function(t, e, n) {
              var i = new Array(9);
              return r.fromTranslation(i, n),
                r.multiply(t, i, e)
            }
              ,
              r.rotate = function(t, e, n) {
                var i = new Array(9);
                return r.fromRotation(i, n),
                  r.multiply(t, i, e)
              }
              ,
              r.scale = function(t, e, n) {
                var i = new Array(9);
                return r.fromScaling(i, n),
                  r.multiply(t, i, e)
              }
              ,
              t.exports = r
          }
          , function(t, e) {
            t.exports = function(t, e, n) {
              return t < e ? e : t > n ? n : t
            }
          }
          , function(t, e) {
            var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
              }
              : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
              }
            ;
            t.exports = function(t) {
              return "object" === (void 0 === t ? "undefined" : n(t)) && null !== t
            }
          }
          , function(t, e, n) {
            var r = n(30)
              , i = n(62);
            t.exports = function(t, e) {
              if (!i(t))
                return t;
              var n = [];
              return r(t, function(t, r) {
                e(t, r) && n.push(t)
              }),
                n
            }
          }
          , function(t, e) {
            var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
              }
              : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
              }
            ;
            t.exports = function(t) {
              var e = void 0 === t ? "undefined" : n(t);
              return null !== t && "object" === e || "function" === e
            }
          }
          , function(t, e) {
            var n = function() {
              function t() {}
              return t.prototype.execute = function() {
                throw new Error("please override this method")
              }
                ,
                t
            }();
            t.exports = n
          }
          , function(t, e, n) {
            t.exports = {
              CompactBoxTree: n(454),
              Dendrogram: n(453),
              IndentedTree: n(452),
              Mindmap: n(451),
              Base: n(386)
            }
          }
          , function(t, e, n) {
            var r = n(22)
              , i = function(t) {
              function e(e) {
                var n = {
                  type: "node",
                  isNode: !0,
                  zIndex: 3,
                  edges: [],
                  linkable: !0
                };
                return r.mix(n, e),
                t.call(this, n) || this
              }
              !function(t, e) {
                t.prototype = Object.create(e.prototype),
                  t.prototype.constructor = t,
                  t.__proto__ = e
              }(e, t);
              var n = e.prototype;
              return n.updatePosition = function() {
                var t = this.group
                  , e = this.model;
                t.setMatrix([1, 0, 0, 0, 1, 0, e.x ? e.x : 0, e.y ? e.y : 0, 1]),
                  this.bbox = this._calculateBBox()
              }
                ,
                n._shouldDraw = function() {
                  var e = this._getDiff()
                    , n = t.prototype._shouldDraw.call(this);
                  return e && !(2 === e.length && -1 !== e.indexOf("x") && -1 !== e.indexOf("y")) && !(1 === e.length && ("x" === e[0] || "y" === e[0])) && n
                }
                ,
                n._afterDraw = function() {
                  this.updatePosition(),
                    t.prototype._afterDraw.call(this)
                }
                ,
                n.layoutUpdate = function() {
                  this._beforeDraw(),
                    this._afterDraw()
                }
                ,
                n.getEdges = function() {
                  var t = this;
                  return this.graph.getEdges().filter(function(e) {
                    var n = e.getModel();
                    return n.source === t.id || n.target === t.id
                  })
                }
                ,
                n.getInEdges = function() {
                  var t = this;
                  return this.getEdges().filter(function(e) {
                    return e.target === t
                  })
                }
                ,
                n.getOutEdges = function() {
                  var t = this;
                  return this.getEdges().filter(function(e) {
                    return e.source === t
                  })
                }
                ,
                n.getLinkPoints = function(t) {
                  var e = this.getAnchorPoints();
                  if (r.isNumber(t) && e[t])
                    return [e[t]];
                  var n = t.x
                    , i = t.y
                    , o = this.getBBox()
                    , a = o.centerX
                    , u = o.centerY
                    , s = n - a
                    , c = i - u
                    , h = this.shapeObj
                    , l = h.anchor || {}
                    , f = this.defaultIntersectBox
                    , d = [];
                  if (r.isEmpty(e)) {
                    switch (h.intersectBox || l.intersectBox || l.type || f) {
                      case "rect":
                        d = [r.getIntersectPointRect(o, t)];
                        break;
                      case "path":
                        if (this.keyShape && "path" === this.keyShape.get("type")) {
                          var p = r.parsePathArray(["M", n, i, "L", a, u]);
                          d = [r.intersection(p, this.keyShape.get("path"))]
                        }
                        break;
                      default:
                        d = [r.getIntersectPointCircle(n, i, o.centerX, o.centerY, Math.max(o.width, o.height) / 2)]
                    }
                    r.isEmpty(d[0]) && (d = [{
                      x: a,
                      y: u
                    }])
                  } else
                    d = e.map(function(t) {
                      var e = t.x - a
                        , n = t.y - u
                        , i = r.getArcOfVectors({
                        x: s,
                        y: c
                      }, {
                        x: e,
                        y: n
                      });
                      return r.mix({}, t, {
                        arc: i
                      })
                    }).sort(function(t, e) {
                      return t.arc - e.arc
                    });
                  return d
                }
                ,
                n.getAnchorPoints = function(t) {
                  var e, n = this.shapeObj, i = this.getBBox(), o = [], a = n.anchor || {};
                  return e = r.isArray(a) ? a : r.isFunction(a) ? a(this) : r.isFunction(a.points) ? a.points(this) : a.points,
                    r.each(e, function(t, e) {
                      var n = r.mix({
                        x: i.minX + t[0] * i.width,
                        y: i.minY + t[1] * i.height
                      }, t[2], {
                        index: e
                      });
                      o.push(n)
                    }),
                    this._anchorPoints = o,
                    r.isNumber(t) ? this._anchorPoints[t] : this._anchorPoints
                }
                ,
                e
            }(n(371));
            t.exports = i
          }
          , function(t, e, n) {
            function r(t, e, n) {
              return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : t[e] = n,
                t
            }
            n(481),
              n(480),
              n(479);
            var i = n(478)
              , o = n(476)
              , a = n(449)
              , u = n(22)
              , s = n(472)
              , c = n(147)
              , h = n(470)
              , l = n(468)
              , f = n(466)
              , d = n(465)
              , p = n(463)
              , g = n(462)
              , m = n(461)
              , v = n(458)
              , y = n(457)
              , x = [g, l, f, h, m, v, n(456), y, d, p]
              , b = function(t) {
              !function(t, e) {
                t.prototype = Object.create(e.prototype),
                  t.prototype.constructor = t,
                  t.__proto__ = e
              }(n, t);
              var e = n.prototype;
              function n(e) {
                var n, r = {};
                return x.forEach(function(t) {
                  u.mix(r, u.clone(t.CFG), e)
                }),
                  (n = t.call(this, r) || this)._pluginInit(),
                  n.emit("beforeinit"),
                  n._init(),
                  n.emit("afterinit"),
                  n
              }
              return e.getDefaultCfg = function() {
                return {
                  container: void 0,
                  width: void 0,
                  height: void 0,
                  plugins: [],
                  fontFamily: '"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", SimSun, "sans-serif"',
                  nodeDefaultShape: void 0,
                  edgeDefaultShape: void 0,
                  groupDefaultShape: void 0,
                  defaultIntersectBox: "circle",
                  renderer: "canvas",
                  _type: "graph",
                  _controllers: {},
                  _timers: {},
                  _dataMap: {},
                  _itemMap: {},
                  _freezMap: {},
                  _data: {},
                  _delayRunObj: {}
                }
              }
                ,
                e._init = function() {
                  var t = this;
                  this._initData(),
                    this._initContainer(),
                    this._initCanvas(),
                    x.forEach(function(e) {
                      e.INIT && t[e.INIT]()
                    }),
                    this.initEvent()
                }
                ,
                e.initEvent = function() {}
                ,
                e._executeLayout = function(t, e, n, r) {
                  u.isFunction(t) ? t(e, n, this) : u.isObject(t) && (t.nodes = e,
                    t.edges = n,
                    t.groups = r,
                    t.graph = this,
                    t.execute())
                }
                ,
                e._pluginInit = function() {
                  var t = this;
                  this.get("plugins").forEach(function(e) {
                    t._initPlugin(e)
                  })
                }
                ,
                e._initPlugin = function(t) {
                  t.graph = this,
                  t.init && t.init()
                }
                ,
                e._getTimer = function(t) {
                  return this.get("_timers")[t]
                }
                ,
                e._setTimer = function(t, e) {
                  this.get("_timers")[t] = e
                }
                ,
                e._getController = function(t) {
                  return this.get("_controllers")[t]
                }
                ,
                e._initContainer = function() {
                  var t = this.get("container");
                  t || (t = this.get("id")),
                    t = u.initDOMContainer(t, "graph");
                  var e = u.createDOM('<div class="graph-container"></div>', {
                    position: "relative"
                  });
                  t.appendChild(e),
                    this.set("_containerDOM", t),
                    this.set("_graphContainer", e)
                }
                ,
                e._initCanvas = function() {
                  var t = this.get("_graphContainer")
                    , e = this.get("width")
                    , n = this.get("height")
                    , r = this.get("fontFamily")
                    , i = this.get("renderer")
                    , o = {
                    width: e,
                    height: n,
                    fontFamily: r,
                    renderer: i,
                    eventEnable: !1,
                    containerDOM: t
                  };
                  "svg" === i && (o.pixelRatio = 1);
                  var a = new (0,
                    c.Canvas)(o)
                    , u = a.get("el");
                  u.style.top = 0,
                    u.style.left = 0,
                    u.style.overflow = "hidden",
                    this.set("_canvas", a);
                  var s = this.getMouseEventWrapper();
                  s.style.outline = "none",
                    s.style["user-select"] = "none",
                    s.setAttribute("tabindex", 20);
                  var h = a.addGroup()
                    , l = h.addGroup();
                  this.set("_itemGroup", l),
                    this.set("_rootGroup", h)
                }
                ,
                e._initData = function() {
                  this.set("_dataMap", {}),
                    this.set("_itemMap", {
                      _nodes: [],
                      _edges: [],
                      _groups: [],
                      _guides: []
                    }),
                    this.set("_data", {})
                }
                ,
                e._refresh = function() {}
                ,
                e.getKeyboardEventWrapper = function() {
                  var t = this.get("keyboardEventWrapper");
                  return t || this.getMouseEventWrapper()
                }
                ,
                e.getMouseEventWrapper = function() {
                  return this.get("_canvas").get("el")
                }
                ,
                e.addPlugin = function(t) {
                  var e = this.get("plugins");
                  this._initPlugin(t),
                    e.push(t)
                }
                ,
                e.getGraphContainer = function() {
                  return this.get("_graphContainer")
                }
                ,
                e._sortGroup = function(t) {
                  var e = this.get("_dataMap")
                    , n = {};
                  t.forEach(function(t) {
                    var r = t.id
                      , i = t.parent;
                    for (n[r] = 1; i && e[i]; )
                      n[r]++,
                        i = e[i].parent
                  }),
                    t.sort(function(t, e) {
                      return n[e.id] - n[t.id]
                    })
                }
                ,
                e._addItems = function(t, e) {
                  var n = this;
                  this._addDatas(t, e),
                  "group" === t && this._sortGroup(e);
                  var r = u.upperFirst(t)
                    , i = o[r]
                    , a = this.get("_itemMap")
                    , s = this.get("_itemGroup")
                    , c = this.get("_dataMap")
                    , h = this.get("animate")
                    , l = this.get("defaultIntersectBox");
                  if (!i)
                    throw new Error("please set valid item type!");
                  e.forEach(function(e) {
                    var r = new i({
                      id: e.id,
                      type: t,
                      model: e,
                      group: s.addGroup(),
                      graph: n,
                      mapper: n._getController(t + "Mapper"),
                      itemMap: a,
                      animate: h,
                      dataMap: c,
                      defaultIntersectBox: l
                    });
                    a[e.id] = r,
                      a["_" + t + "s"].push(r)
                  })
                }
                ,
                e._removeItems = function(t) {
                  var e = this.get("_dataMap")
                    , n = this.get("_itemMap");
                  t.forEach(function(t) {
                    delete e[t.id],
                      delete n[t.id],
                      u.Array.remove(n["_" + t.type + "s"], t),
                      t.destroy()
                  })
                }
                ,
                e._updateItems = function(t, e) {
                  t.forEach(function(t, n) {
                    var r = e[n];
                    r && u.mix(t.getModel(), r),
                      t.update()
                  })
                }
                ,
                e._getShowEdge = function(t) {
                  var e = t.getSource()
                    , n = t.getTarget();
                  return (e.linkable && e.isVisible() || !e.linkable) && (n.linkable && n.isVisible() || !n.linkable) && t
                }
                ,
                e._addDatas = function(t, e) {
                  var n = this.get("_dataMap");
                  e.forEach(function(t) {
                    if (u.isNil(t.id) && (t.id = u.guid()),
                      n[t.id])
                      throw new Error("id:" + t.id + " has already been set, please set new one");
                    n[t.id] = t
                  })
                }
                ,
                e._drawInner = function() {
                  var t = this.get("_data")
                    , e = this.get("_itemGroup")
                    , n = this.get("_dataMap")
                    , r = this.get("_itemMap");
                  t.nodes && this._addItems("node", t.nodes),
                  t.groups && this._addItems("group", t.groups),
                  t.edges && this._addItems("edge", t.edges),
                  t.guides && this._addItems("guide", t.guides),
                    e.sortBy(function(t) {
                      var e = t.id
                        , i = r[e]
                        , o = n[e];
                      return o && !u.isNil(o.index) ? o.index : !i || i.destroyed || u.isNil(i.zIndex) ? void 0 : i.zIndex
                    })
                }
                ,
                e._clearInner = function() {
                  this.getItems().forEach(function(t) {
                    t && t.destroy()
                  })
                }
                ,
                e.preventAnimate = function(t) {
                  return this.set("_forcePreventAnimate", !0),
                    t(),
                    this.set("_forcePreventAnimate", !1),
                    this
                }
                ,
                e.getShapeObj = function(t, e) {
                  if (!u.isObject(t)) {
                    var n = u.upperFirst(t)
                      , r = a[n]
                      , i = this.get(t + "DefaultShape");
                    return r.getShape(e.shape, i)
                  }
                  return t.getShapeObj()
                }
                ,
                e.getSource = function() {
                  return this.get("_sourceData")
                }
                ,
                e.parseSource = function(t) {
                  return t
                }
                ,
                e.getCanvas = function() {
                  return this.get("_canvas")
                }
                ,
                e.getRootGroup = function() {
                  return this.get("_rootGroup")
                }
                ,
                e.getItemGroup = function() {
                  return this.get("_itemGroup")
                }
                ,
                e.source = function(t) {
                  return this.emit("beforesource"),
                    this.set("_data", t),
                    this.set("_sourceData", t),
                    this.emit("aftersource"),
                    this
                }
                ,
                e.render = function() {
                  return this.emit("beforerender"),
                    this.emit("beforedrawinner"),
                    this._drawInner(),
                    this.emit("afterdrawinner"),
                    this.emit("afterrender"),
                    this
                }
                ,
                e.reRender = function() {
                  var t = this.get("_sourceData");
                  return this.read(t),
                    this
                }
                ,
                e.setCapture = function(t) {
                  this.get("_rootGroup").set("capture", t)
                }
                ,
                e.destroy = function() {
                  this.emit("beforedestroy");
                  var e = this.get("_canvas")
                    , n = this.get("_graphContainer")
                    , r = this.get("_controllers")
                    , i = this.get("_timers")
                    , o = this.get("_windowForceResizeEvent")
                    , a = this.get("plugins");
                  return u.each(i, function(t) {
                    clearTimeout(t)
                  }),
                    u.each(r, function(t) {
                      t.destroy()
                    }),
                    a.forEach(function(t) {
                      t.destroy && t.destroy()
                    }),
                  e && e.destroy(),
                    n.destroy(),
                    window.removeEventListener("resize", o),
                    this.emit("afterdestroy"),
                    t.prototype.destroy.call(this),
                    this
                }
                ,
                e.save = function() {
                  var t = {
                    nodes: [],
                    edges: [],
                    groups: [],
                    guides: []
                  };
                  return this.get("_itemGroup").get("children").forEach(function(e, n) {
                    var r = e.model;
                    if (r) {
                      var i = e.itemType
                        , o = u.clone(r);
                      o.index = n,
                        t[i + "s"].push(o)
                    }
                  }),
                  0 === t.nodes.length && delete t.nodes,
                  0 === t.edges.length && delete t.edges,
                  0 === t.groups.length && delete t.groups,
                  0 === t.guides.length && delete t.guides,
                    t
                }
                ,
                e.add = function(t, e) {
                  var n = []
                    , r = {
                    action: "add",
                    model: e,
                    affectedItemIds: n
                  };
                  this.emit("beforechange", r);
                  var i = this.get("_itemMap");
                  this._addItems(t, [e]);
                  var o = i[e.id];
                  return o.getAllParents().forEach(function(t) {
                    t.update()
                  }),
                    r.item = o,
                    n.push(e.id),
                    this.emit("afterchange", r),
                    o
                }
                ,
                e.remove = function(t) {
                  if ((t = this.getItem(t)) && !t.destroyed) {
                    var e = []
                      , n = []
                      , r = {
                      action: "remove",
                      item: t,
                      affectedItemIds: n
                    };
                    if (t.isNode) {
                      var i = t.getEdges();
                      e = e.concat(i)
                    }
                    if (t.isGroup) {
                      var o = t.getEdges()
                        , a = t.getAllChildren()
                        , s = t.getCrossEdges()
                        , c = t.getInnerEdges();
                      e = e.concat(o, a, s, c),
                        e = u.uniq(e)
                    }
                    e.push(t);
                    var h = t.getAllParents();
                    return h.forEach(function(t) {
                      n.push(t.id)
                    }),
                      e.forEach(function(t) {
                        n.push(t.id)
                      }),
                      this.emit("beforechange", r),
                      this._removeItems(e),
                      h.forEach(function(t) {
                        t.update()
                      }),
                      this.emit("afterchange", r),
                      this
                  }
                }
                ,
                e.simpleUpdate = function(t, e) {
                  return this._updateItems([t], [e]),
                    this.draw(),
                    this
                }
                ,
                e.update = function(t, e) {
                  var n = this.get("_itemMap");
                  if ((t = this.getItem(t)) && !t.destroyed && e) {
                    var r = this.get("animate")
                      , i = []
                      , o = []
                      , a = []
                      , s = t.getModel()
                      , c = u.mix({}, s)
                      , h = {
                      action: "update",
                      item: t,
                      originModel: c,
                      updateModel: e,
                      affectedItemIds: a
                    }
                      , l = n[c.parent];
                    if (i.push(t),
                      o.push(e),
                      a.push(t.id),
                    l && l !== parent && u.isGroup(l) && t.getAllParents().forEach(function(t) {
                      i.push(t),
                        o.push(null),
                        a.push(t.id)
                    }),
                      e.parent) {
                      var f = n[e.parent];
                      if (!f)
                        throw new Error("there is no " + e.parent + " exist, please add a new one!");
                      i.push(f),
                        o.push(null),
                        a.push(f.id),
                        f.getAllParents().forEach(function(t) {
                          i.push(t),
                            o.push(null),
                            a.push(t.id)
                        })
                    }
                    return (t.isNode || t.isGroup) && t.getEdges().forEach(function(t) {
                      i.push(t),
                        o.push(null),
                        a.push(t.id)
                    }),
                    t.isGroup && !u.isNil(e.collapsed) && (r && t.deepEach(function(t) {
                      a.push(t.id)
                    }),
                      t.getCrossEdges().forEach(function(t) {
                        i.push(t),
                          o.push(null),
                          a.push(t.id)
                      })),
                      this.emit("beforechange", h),
                      this._updateItems(i, o),
                      this.emit("afterchange", h),
                      this
                  }
                }
                ,
                e.read = function(t) {
                  var e = this;
                  if (!t)
                    throw new Error("please read valid data!");
                  var n = {
                    action: "changeData",
                    data: t
                  };
                  return this.emit("beforechange", n),
                    this.preventAnimate(function() {
                      e.clear(),
                        e.source(t),
                        e.render()
                    }),
                    this.emit("afterchange", n),
                    this
                }
                ,
                e.clear = function() {
                  return this.emit("beforeclear"),
                    this._clearInner(),
                    this._initData(),
                    this.emit("afterclear"),
                    this
                }
                ,
                e.hide = function(t) {
                  var e = []
                    , n = []
                    , r = {
                    item: t = this.getItem(t),
                    affectedItemIds: n
                  };
                  return e.push(t),
                  t.isNode && t.getEdges().forEach(function(t) {
                    e.push(t)
                  }),
                  t.isGroup && (t.getEdges().forEach(function(t) {
                    e.push(t)
                  }),
                    t.deepEach(function(t) {
                      e.push(t)
                    })),
                    (e = u.uniq(e)).forEach(function(t) {
                      n.push(t.id)
                    }),
                    this.emit("beforehide", r),
                    e.forEach(function(t) {
                      t.hide()
                    }),
                    this.emit("afterhide", r),
                    this
                }
                ,
                e.show = function(t) {
                  var e = this
                    , n = []
                    , r = []
                    , i = {
                    item: t = this.getItem(t),
                    affectedItemIds: r
                  };
                  if (t.visible = !0,
                    t.isEdge) {
                    var o = this._getShowEdge(t);
                    o && n.push(o)
                  } else
                    n.push(t);
                  return t.isNode && t.getEdges().forEach(function(t) {
                    (t = e._getShowEdge(t)) && n.push(t)
                  }),
                  t.isGroup && (t.getEdges().forEach(function(t) {
                    (t = e._getShowEdge(t)) && n.push(t)
                  }),
                    t.deepEach(function(t) {
                      n.push(t)
                    })),
                    (n = u.uniq(n)).forEach(function(t) {
                      r.push(t.id)
                    }),
                    this.emit("beforeshow", i),
                    n.forEach(function(t) {
                      t.show()
                    }),
                    this.emit("aftershow", i),
                    this
                }
                ,
                e.getWidth = function() {
                  return this.get("width")
                }
                ,
                e.getHeight = function() {
                  return this.get("height")
                }
                ,
                e.changeSize = function(t, e) {
                  if (!(Math.abs(t) >= 1 / 0 || Math.abs(e) >= 1 / 0)) {
                    var n = this.get("_canvas");
                    return t === this.get("width") && e === this.get("height") || (this.emit("beforechangesize"),
                      n.changeSize(t, e),
                      this.set("width", t),
                      this.set("height", e),
                      this.emit("afterchangesize"),
                      this.draw()),
                      this
                  }
                  console.warn("size parameter more than the maximum")
                }
                ,
                e.toFront = function(t) {
                  t = this.getItem(t);
                  var e = this.get("_itemGroup")
                    , n = t.getGraphicGroup();
                  u.toFront(n, e),
                    this.draw()
                }
                ,
                e.toBack = function(t) {
                  t = this.getItem(t);
                  var e = this.get("_itemGroup")
                    , n = t.getGraphicGroup();
                  u.toBack(n, e),
                    this.draw()
                }
                ,
                e.css = function(t) {
                  var e = this.getGraphContainer();
                  u.modifyCSS(e, t)
                }
                ,
                e.saveImage = function(t) {
                  var e = this.getBBox()
                    , n = this.getFitViewPadding();
                  return new s(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                      var n = null != arguments[e] ? arguments[e] : {}
                        , i = Object.keys(n);
                      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                      }))),
                        i.forEach(function(e) {
                          r(t, e, n[e])
                        })
                    }
                    return t
                  }({
                    graph: this,
                    width: e.width + n[1] + n[3],
                    height: e.height + n[0] + n[2]
                  }, t)).toCanvas()
                }
                ,
                n
            }(i);
            x.forEach(function(t) {
              u.mix(b.prototype, t.AUGMENT)
            }),
              t.exports = b
          }
          , function(t, e) {
            var n = {
              registerBehaviour: function(t, e, r) {
                e.dependences = r,
                  n[t] = e
              },
              resetMode: function(t, e) {
                var r, i = [];
                e._off();
                for (var o = 0; o < t.length; o++)
                  (r = n[t[o]]) && (r.dependences && r.dependences.forEach(function(t) {
                    t && -1 === i.indexOf(t) && (n[t](e),
                      i.push(t))
                  }),
                  r && -1 === i.indexOf(r) && r(e))
              }
            };
            t.exports = n
          }
          , function(t, e, n) {
            var r = n(17)
              , i = n(37)
              , o = function t(e) {
              t.superclass.constructor.call(this, e)
            };
            o.ATTRS = {
              x: 0,
              y: 0,
              text: null,
              fontSize: 12,
              fontFamily: "sans-serif",
              fontStyle: "normal",
              fontWeight: "normal",
              fontVariant: "normal",
              textAlign: "start",
              textBaseline: "bottom",
              lineHeight: null,
              textArr: null
            },
              r.extend(o, i),
              r.augment(o, {
                canFill: !0,
                canStroke: !0,
                type: "text",
                getDefaultAttrs: function() {
                  return {
                    lineWidth: 1,
                    lineCount: 1,
                    fontSize: 12,
                    fontFamily: "sans-serif",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontVariant: "normal",
                    textAlign: "start",
                    textBaseline: "bottom"
                  }
                },
                initTransform: function() {
                  var t = this._attrs.fontSize;
                  t && +t < 12 && this.transform([["t", -1 * this._attrs.x, -1 * this._attrs.y], ["s", +t / 12, +t / 12], ["t", this._attrs.x, this._attrs.y]])
                },
                _assembleFont: function() {
                  var t = this._attrs
                    , e = t.fontSize
                    , n = t.fontFamily
                    , r = t.fontWeight
                    , i = t.fontStyle
                    , o = t.fontVariant;
                  t.font = [i, o, r, e + "px", n].join(" ")
                },
                _setAttrText: function() {
                  var t = this._attrs
                    , e = t.text
                    , n = null;
                  if (r.isString(e) && -1 !== e.indexOf("\n")) {
                    var i = (n = e.split("\n")).length;
                    t.lineCount = i
                  }
                  t.textArr = n
                },
                _getTextHeight: function() {
                  var t = this._attrs
                    , e = t.lineCount
                    , n = 1 * t.fontSize;
                  return e > 1 ? n * e + this._getSpaceingY() * (e - 1) : n
                },
                isHitBox: function() {
                  return !1
                },
                calculateBox: function() {
                  var t = this._attrs
                    , e = this._cfg;
                  e.attrs && !e.hasUpdate || (this._assembleFont(),
                    this._setAttrText()),
                  t.textArr || this._setAttrText();
                  var n = t.x
                    , r = t.y
                    , i = this.measureText();
                  if (!i)
                    return {
                      minX: n,
                      minY: r,
                      maxX: n,
                      maxY: r
                    };
                  var o = this._getTextHeight()
                    , a = t.textAlign
                    , u = t.textBaseline
                    , s = this.getHitLineWidth()
                    , c = {
                    x: n,
                    y: r - o
                  };
                  a && ("end" === a || "right" === a ? c.x -= i : "center" === a && (c.x -= i / 2)),
                  u && ("top" === u ? c.y += o : "middle" === u && (c.y += o / 2)),
                    this.set("startPoint", c);
                  var h = s / 2;
                  return {
                    minX: c.x - h,
                    minY: c.y - h,
                    maxX: c.x + i + h,
                    maxY: c.y + o + h
                  }
                },
                _getSpaceingY: function() {
                  var t = this._attrs
                    , e = t.lineHeight
                    , n = 1 * t.fontSize;
                  return e ? e - n : .14 * n
                },
                drawInner: function(t) {
                  var e = this._attrs
                    , n = this._cfg;
                  n.attrs && !n.hasUpdate || (this._assembleFont(),
                    this._setAttrText()),
                    t.font = e.font;
                  var i = e.text;
                  if (i) {
                    var o = e.textArr
                      , a = e.x
                      , u = e.y;
                    if (t.beginPath(),
                      this.hasStroke()) {
                      var s = e.strokeOpacity;
                      r.isNil(s) || 1 === s || (t.globalAlpha = s),
                        o ? this._drawTextArr(t, !1) : t.strokeText(i, a, u),
                        t.globalAlpha = 1
                    }
                    if (this.hasFill()) {
                      var c = e.fillOpacity;
                      r.isNil(c) || 1 === c || (t.globalAlpha = c),
                        o ? this._drawTextArr(t, !0) : t.fillText(i, a, u)
                    }
                    n.hasUpdate = !1
                  }
                },
                _drawTextArr: function(t, e) {
                  var n, i = this._attrs.textArr, o = this._attrs.textBaseline, a = 1 * this._attrs.fontSize, u = this._getSpaceingY(), s = this._attrs.x, c = this._attrs.y, h = this.getBBox(), l = h.maxY - h.minY;
                  r.each(i, function(r, i) {
                    n = c + i * (u + a) - l + a,
                    "middle" === o && (n += l - a - (l - a) / 2),
                    "top" === o && (n += l - a),
                      e ? t.fillText(r, s, n) : t.strokeText(r, s, n)
                  })
                },
                measureText: function() {
                  var t, e = this._attrs, n = e.text, i = e.font, o = e.textArr, a = 0;
                  if (!r.isNil(n)) {
                    var u = document.createElement("canvas").getContext("2d");
                    return u.save(),
                      u.font = i,
                      o ? r.each(o, function(e) {
                        t = u.measureText(e).width,
                        a < t && (a = t),
                          u.restore()
                      }) : (a = u.measureText(n).width,
                        u.restore()),
                      a
                  }
                }
              }),
              t.exports = o
          }
          , function(t, e, n) {
            var r = n(17)
              , i = n(356).parseRadius
              , o = n(37)
              , a = function t(e) {
              t.superclass.constructor.call(this, e)
            };
            a.ATTRS = {
              x: 0,
              y: 0,
              width: 0,
              height: 0,
              radius: 0,
              lineWidth: 1
            },
              r.extend(a, o),
              r.augment(a, {
                canFill: !0,
                canStroke: !0,
                type: "rect",
                getDefaultAttrs: function() {
                  return {
                    lineWidth: 1,
                    radius: 0
                  }
                },
                calculateBox: function() {
                  var t = this._attrs
                    , e = t.x
                    , n = t.y
                    , r = t.width
                    , i = t.height
                    , o = this.getHitLineWidth() / 2;
                  return {
                    minX: e - o,
                    minY: n - o,
                    maxX: e + r + o,
                    maxY: n + i + o
                  }
                },
                createPath: function(t) {
                  var e = this._attrs
                    , n = e.x
                    , r = e.y
                    , o = e.width
                    , a = e.height
                    , u = e.radius;
                  if ((t = t || this.get("context")).beginPath(),
                  0 === u)
                    t.rect(n, r, o, a);
                  else {
                    var s = i(u);
                    t.moveTo(n + s.r1, r),
                      t.lineTo(n + o - s.r2, r),
                    0 !== s.r2 && t.arc(n + o - s.r2, r + s.r2, s.r2, -Math.PI / 2, 0),
                      t.lineTo(n + o, r + a - s.r3),
                    0 !== s.r3 && t.arc(n + o - s.r3, r + a - s.r3, s.r3, 0, Math.PI / 2),
                      t.lineTo(n + s.r4, r + a),
                    0 !== s.r4 && t.arc(n + s.r4, r + a - s.r4, s.r4, Math.PI / 2, Math.PI),
                      t.lineTo(n, r + s.r1),
                    0 !== s.r1 && t.arc(n + s.r1, r + s.r1, s.r1, Math.PI, 1.5 * Math.PI),
                      t.closePath()
                  }
                }
              }),
              t.exports = a
          }
          , function(t, e, n) {
            var r = n(17)
              , i = n(37)
              , o = n(364)
              , a = n(366)
              , u = function t(e) {
              t.superclass.constructor.call(this, e)
            };
            u.ATTRS = {
              points: null,
              lineWidth: 1,
              startArrow: !1,
              endArrow: !1,
              tCache: null
            },
              r.extend(u, i),
              r.augment(u, {
                canStroke: !0,
                type: "polyline",
                tCache: null,
                getDefaultAttrs: function() {
                  return {
                    lineWidth: 1,
                    startArrow: !1,
                    endArrow: !1
                  }
                },
                calculateBox: function() {
                  var t = this._attrs
                    , e = this.getHitLineWidth()
                    , n = t.points;
                  if (!n || 0 === n.length)
                    return null;
                  var i = 1 / 0
                    , o = 1 / 0
                    , a = -1 / 0
                    , u = -1 / 0;
                  r.each(n, function(t) {
                    var e = t[0]
                      , n = t[1];
                    e < i && (i = e),
                    e > a && (a = e),
                    n < o && (o = n),
                    n > u && (u = n)
                  });
                  var s = e / 2;
                  return {
                    minX: i - s,
                    minY: o - s,
                    maxX: a + s,
                    maxY: u + s
                  }
                },
                _setTcache: function() {
                  var t, e, n = this._attrs.points, i = 0, o = 0, u = [];
                  n && 0 !== n.length && (r.each(n, function(t, e) {
                    n[e + 1] && (i += a.len(t[0], t[1], n[e + 1][0], n[e + 1][1]))
                  }),
                  i <= 0 || (r.each(n, function(r, s) {
                    n[s + 1] && ((t = [])[0] = o / i,
                      e = a.len(r[0], r[1], n[s + 1][0], n[s + 1][1]),
                      o += e,
                      t[1] = o / i,
                      u.push(t))
                  }),
                    this.tCache = u))
                },
                createPath: function(t) {
                  var e, n, r = this._attrs.points;
                  if (!(r.length < 2)) {
                    for ((t = t || this.get("context")).beginPath(),
                           t.moveTo(r[0][0], r[0][1]),
                           n = 1,
                           e = r.length - 1; n < e; n++)
                      t.lineTo(r[n][0], r[n][1]);
                    t.lineTo(r[e][0], r[e][1])
                  }
                },
                getStartTangent: function() {
                  var t = this.__attrs.points
                    , e = [];
                  return e.push([t[1][0], t[1][1]]),
                    e.push([t[0][0], t[0][1]]),
                    e
                },
                getEndTangent: function() {
                  var t = this.__attrs.points
                    , e = t.length - 1
                    , n = [];
                  return n.push([t[e - 1][0], t[e - 1][1]]),
                    n.push([t[e][0], t[e][1]]),
                    n
                },
                afterPath: function(t) {
                  var e = this._attrs
                    , n = e.points
                    , r = n.length - 1;
                  t = t || this.get("context"),
                  e.startArrow && o.addStartArrow(t, e, n[1][0], n[1][1], n[0][0], n[0][1]),
                  e.endArrow && o.addEndArrow(t, e, n[r - 1][0], n[r - 1][1], n[r][0], n[r][1])
                },
                getPoint: function(t) {
                  var e, n, i = this._attrs.points, o = this.tCache;
                  return o || (this._setTcache(),
                    o = this.tCache),
                    r.each(o, function(r, i) {
                      t >= r[0] && t <= r[1] && (e = (t - r[0]) / (r[1] - r[0]),
                        n = i)
                    }),
                    {
                      x: a.at(i[n][0], i[n + 1][0], e),
                      y: a.at(i[n][1], i[n + 1][1], e)
                    }
                }
              }),
              t.exports = u
          }
          , function(t, e, n) {
            var r = n(17)
              , i = n(37)
              , o = function t(e) {
              t.superclass.constructor.call(this, e)
            };
            o.ATTRS = {
              points: null,
              lineWidth: 1
            },
              r.extend(o, i),
              r.augment(o, {
                canFill: !0,
                canStroke: !0,
                type: "polygon",
                getDefaultAttrs: function() {
                  return {
                    lineWidth: 1
                  }
                },
                calculateBox: function() {
                  var t = this._attrs.points
                    , e = this.getHitLineWidth();
                  if (!t || 0 === t.length)
                    return null;
                  var n = 1 / 0
                    , i = 1 / 0
                    , o = -1 / 0
                    , a = -1 / 0;
                  r.each(t, function(t) {
                    var e = t[0]
                      , r = t[1];
                    e < n && (n = e),
                    e > o && (o = e),
                    r < i && (i = r),
                    r > a && (a = r)
                  });
                  var u = e / 2;
                  return {
                    minX: n - u,
                    minY: i - u,
                    maxX: o + u,
                    maxY: a + u
                  }
                },
                createPath: function(t) {
                  var e = this._attrs.points;
                  e.length < 2 || ((t = t || this.get("context")).beginPath(),
                    r.each(e, function(e, n) {
                      0 === n ? t.moveTo(e[0], e[1]) : t.lineTo(e[0], e[1])
                    }),
                    t.closePath())
                }
              }),
              t.exports = o
          }
          , function(t, e, n) {
            var r = n(17)
              , i = n(37)
              , o = n(363)
              , a = n(356)
              , u = n(364)
              , s = n(373)
              , c = n(375)
              , h = function t(e) {
              t.superclass.constructor.call(this, e)
            };
            h.ATTRS = {
              path: null,
              lineWidth: 1,
              startArrow: !1,
              endArrow: !1
            },
              r.extend(h, i),
              r.augment(h, {
                canFill: !0,
                canStroke: !0,
                type: "path",
                getDefaultAttrs: function() {
                  return {
                    lineWidth: 1,
                    startArrow: !1,
                    endArrow: !1
                  }
                },
                _afterSetAttrPath: function(t) {
                  if (r.isNil(t))
                    return this.setSilent("segments", null),
                      void this.setSilent("box", void 0);
                  var e, n = a.parsePath(t), i = [];
                  if (r.isArray(n) && 0 !== n.length && ("M" === n[0][0] || "m" === n[0][0])) {
                    for (var u = n.length, s = 0; s < n.length; s++) {
                      var c = n[s];
                      e = new o(c,e,s === u - 1),
                        i.push(e)
                    }
                    this.setSilent("segments", i),
                      this.setSilent("tCache", null),
                      this.setSilent("box", null)
                  }
                },
                calculateBox: function() {
                  var t = this.get("segments");
                  if (!t)
                    return null;
                  var e = this.getHitLineWidth()
                    , n = 1 / 0
                    , i = -1 / 0
                    , o = 1 / 0
                    , a = -1 / 0;
                  return r.each(t, function(t) {
                    t.getBBox(e);
                    var r = t.box;
                    r && (r.minX < n && (n = r.minX),
                    r.maxX > i && (i = r.maxX),
                    r.minY < o && (o = r.minY),
                    r.maxY > a && (a = r.maxY))
                  }),
                    n === 1 / 0 || o === 1 / 0 ? {
                      minX: 0,
                      minY: 0,
                      maxX: 0,
                      maxY: 0
                    } : {
                      minX: n,
                      minY: o,
                      maxX: i,
                      maxY: a
                    }
                },
                _setTcache: function() {
                  var t, e, n, i, o = 0, a = 0, u = [], s = this._cfg.curve;
                  s && (r.each(s, function(t, e) {
                    n = s[e + 1],
                      i = t.length,
                    n && (o += c.len(t[i - 2], t[i - 1], n[1], n[2], n[3], n[4], n[5], n[6]))
                  }),
                    r.each(s, function(r, h) {
                      n = s[h + 1],
                        i = r.length,
                      n && ((t = [])[0] = a / o,
                        e = c.len(r[i - 2], r[i - 1], n[1], n[2], n[3], n[4], n[5], n[6]),
                        a += e,
                        t[1] = a / o,
                        u.push(t))
                    }),
                    this._cfg.tCache = u)
                },
                _calculateCurve: function() {
                  var t = this._attrs.path;
                  this._cfg.curve = s.pathTocurve(t)
                },
                getStartTangent: function() {
                  var t, e, n, i, o = this.get("segments");
                  if (o.length > 1)
                    if (t = o[0].endPoint,
                      e = o[1].endPoint,
                      n = o[1].startTangent,
                      i = [],
                      r.isFunction(n)) {
                      var a = n();
                      i.push([t.x - a[0], t.y - a[1]]),
                        i.push([t.x, t.y])
                    } else
                      i.push([e.x, e.y]),
                        i.push([t.x, t.y]);
                  return i
                },
                getEndTangent: function() {
                  var t, e, n, i, o = this.get("segments"), a = o.length;
                  if (a > 1)
                    if (t = o[a - 2].endPoint,
                      e = o[a - 1].endPoint,
                      n = o[a - 1].endTangent,
                      i = [],
                      r.isFunction(n)) {
                      var u = n();
                      i.push([e.x - u[0], e.y - u[1]]),
                        i.push([e.x, e.y])
                    } else
                      i.push([t.x, t.y]),
                        i.push([e.x, e.y]);
                  return i
                },
                getPoint: function(t) {
                  var e, n, i = this._cfg.tCache;
                  i || (this._calculateCurve(),
                    this._setTcache(),
                    i = this._cfg.tCache);
                  var o = this._cfg.curve;
                  if (!i)
                    return o ? {
                      x: o[0][1],
                      y: o[0][2]
                    } : null;
                  r.each(i, function(r, i) {
                    t >= r[0] && t <= r[1] && (e = (t - r[0]) / (r[1] - r[0]),
                      n = i)
                  });
                  var a = o[n];
                  if (r.isNil(a) || r.isNil(n))
                    return null;
                  var u = a.length
                    , s = o[n + 1];
                  return {
                    x: c.at(a[u - 2], s[1], s[3], s[5], 1 - e),
                    y: c.at(a[u - 1], s[2], s[4], s[6], 1 - e)
                  }
                },
                createPath: function(t) {
                  var e = this.get("segments");
                  if (r.isArray(e)) {
                    (t = t || this.get("context")).beginPath();
                    for (var n = e.length, i = 0; i < n; i++)
                      e[i].draw(t)
                  }
                },
                afterPath: function(t) {
                  var e = this._attrs
                    , n = this.get("segments")
                    , i = e.path;
                  if (t = t || this.get("context"),
                  r.isArray(n) && 1 !== n.length && (e.startArrow || e.endArrow) && "z" !== i[i.length - 1] && "Z" !== i[i.length - 1] && !e.fill) {
                    var o = this.getStartTangent();
                    u.addStartArrow(t, e, o[0][0], o[0][1], o[1][0], o[1][1]);
                    var a = this.getEndTangent();
                    u.addEndArrow(t, e, a[0][0], a[0][1], a[1][0], a[1][1])
                  }
                }
              }),
              t.exports = h
          }
          , function(t, e, n) {
            var r = n(17)
              , i = n(37)
              , o = n(364)
              , a = n(366)
              , u = function t(e) {
              t.superclass.constructor.call(this, e)
            };
            u.ATTRS = {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 0,
              lineWidth: 1,
              startArrow: !1,
              endArrow: !1
            },
              r.extend(u, i),
              r.augment(u, {
                canStroke: !0,
                type: "line",
                getDefaultAttrs: function() {
                  return {
                    lineWidth: 1,
                    startArrow: !1,
                    endArrow: !1
                  }
                },
                calculateBox: function() {
                  var t = this._attrs
                    , e = t.x1
                    , n = t.y1
                    , r = t.x2
                    , i = t.y2
                    , o = this.getHitLineWidth();
                  return a.box(e, n, r, i, o)
                },
                createPath: function(t) {
                  var e = this._attrs
                    , n = e.x1
                    , r = e.y1
                    , i = e.x2
                    , o = e.y2;
                  (t = t || self.get("context")).beginPath(),
                    t.moveTo(n, r),
                    t.lineTo(i, o)
                },
                afterPath: function(t) {
                  var e = this._attrs
                    , n = e.x1
                    , r = e.y1
                    , i = e.x2
                    , a = e.y2;
                  t = t || this.get("context"),
                  e.startArrow && o.addStartArrow(t, e, i, a, n, r),
                  e.endArrow && o.addEndArrow(t, e, n, r, i, a)
                },
                getPoint: function(t) {
                  var e = this._attrs;
                  return {
                    x: a.at(e.x1, e.x2, t),
                    y: a.at(e.y1, e.y2, t)
                  }
                }
              }),
              t.exports = u
          }
          , function(t, e, n) {
            var r = n(17)
              , i = n(37)
              , o = function t(e) {
              t.superclass.constructor.call(this, e)
            };
            o.ATTRS = {
              x: 0,
              y: 0,
              img: void 0,
              width: 0,
              height: 0,
              sx: null,
              sy: null,
              swidth: null,
              sheight: null
            },
              r.extend(o, i),
              r.augment(o, {
                type: "image",
                isHitBox: function() {
                  return !1
                },
                calculateBox: function() {
                  var t = this._attrs;
                  this._cfg.attrs && this._cfg.attrs.img === t.img || this._setAttrImg();
                  var e = t.x
                    , n = t.y;
                  return {
                    minX: e,
                    minY: n,
                    maxX: e + t.width,
                    maxY: n + t.height
                  }
                },
                _beforeSetLoading: function(t) {
                  var e = this.get("canvas");
                  return !1 === t && !0 === this.get("toDraw") && (this._cfg.loading = !1,
                    e.draw()),
                    t
                },
                _setAttrImg: function() {
                  var t = this
                    , e = t._attrs
                    , n = e.img;
                  if (!r.isString(n))
                    return n instanceof Image ? (e.width || t.attr("width", n.width),
                    e.height || t.attr("height", n.height),
                      n) : n instanceof HTMLElement && r.isString(n.nodeName) && "CANVAS" === n.nodeName.toUpperCase() ? (e.width || t.attr("width", Number(n.getAttribute("width"))),
                    e.height || t.attr("height", Number(n.getAttribute("height"))),
                      n) : n instanceof ImageData ? (e.width || t.attr("width", n.width),
                    e.height || t.attr("height", n.height),
                      n) : null;
                  var i = new Image;
                  i.onload = function() {
                    if (t.get("destroyed"))
                      return !1;
                    t.attr("imgSrc", n),
                      t.attr("img", i);
                    var e = t.get("callback");
                    e && e.call(t),
                      t.set("loading", !1)
                  }
                    ,
                    i.src = n,
                    i.crossOrigin = "Anonymous",
                    t.set("loading", !0)
                },
                drawInner: function(t) {
                  this._cfg.hasUpdate && this._setAttrImg(),
                    this.get("loading") ? this.set("toDraw", !0) : (this._drawImage(t),
                      this._cfg.hasUpdate = !1)
                },
                _drawImage: function(t) {
                  var e = this._attrs
                    , n = e.x
                    , i = e.y
                    , o = e.img
                    , a = e.width
                    , u = e.height
                    , s = e.sx
                    , c = e.sy
                    , h = e.swidth
                    , l = e.sheight;
                  this.set("toDraw", !1);
                  var f = o;
                  if (f instanceof ImageData && ((f = new Image).src = o),
                  f instanceof Image || f instanceof HTMLElement && r.isString(f.nodeName) && "CANVAS" === f.nodeName.toUpperCase()) {
                    if (r.isNil(s) || r.isNil(c) || r.isNil(h) || r.isNil(l))
                      return void t.drawImage(f, n, i, a, u);
                    if (!(r.isNil(s) || r.isNil(c) || r.isNil(h) || r.isNil(l)))
                      return void t.drawImage(f, s, c, h, l, n, i, a, u)
                  }
                }
              }),
              t.exports = o
          }
          , function(t, e, n) {
            var r = n(17)
              , i = n(37)
              , o = n(365)
              , a = function t(e) {
              t.superclass.constructor.call(this, e)
            };
            a.ATTRS = {
              x: 0,
              y: 0,
              rs: 0,
              re: 0,
              startAngle: 0,
              endAngle: 0,
              clockwise: !1,
              lineWidth: 1
            },
              r.extend(a, i),
              r.augment(a, {
                canFill: !0,
                canStroke: !0,
                type: "fan",
                getDefaultAttrs: function() {
                  return {
                    clockwise: !1,
                    lineWidth: 1,
                    rs: 0,
                    re: 0
                  }
                },
                calculateBox: function() {
                  var t = this._attrs
                    , e = t.x
                    , n = t.y
                    , r = t.rs
                    , i = t.re
                    , a = t.startAngle
                    , u = t.endAngle
                    , s = t.clockwise
                    , c = this.getHitLineWidth()
                    , h = o.box(e, n, r, a, u, s)
                    , l = o.box(e, n, i, a, u, s)
                    , f = c / 2;
                  return {
                    minX: Math.min(h.minX, l.minX) - f,
                    minY: Math.min(h.minY, l.minY) - f,
                    maxX: Math.max(h.maxX, l.maxX) + f,
                    maxY: Math.max(h.maxY, l.maxY) + f
                  }
                },
                createPath: function(t) {
                  var e = this._attrs
                    , n = e.x
                    , r = e.y
                    , i = e.rs
                    , o = e.re
                    , a = e.startAngle
                    , u = e.endAngle
                    , s = e.clockwise
                    , c = {
                    x: Math.cos(a) * i + n,
                    y: Math.sin(a) * i + r
                  }
                    , h = {
                    x: Math.cos(a) * o + n,
                    y: Math.sin(a) * o + r
                  }
                    , l = {
                    x: Math.cos(u) * i + n,
                    y: Math.sin(u) * i + r
                  };
                  (t = t || self.get("context")).beginPath(),
                    t.moveTo(c.x, c.y),
                    t.lineTo(h.x, h.y),
                    t.arc(n, r, o, a, u, s),
                    t.lineTo(l.x, l.y),
                    t.arc(n, r, i, u, a, !s),
                    t.closePath()
                }
              }),
              t.exports = a
          }
          , function(t, e, n) {
            var r = n(17)
              , i = n(37)
              , o = function t(e) {
              t.superclass.constructor.call(this, e)
            };
            o.ATTRS = {
              x: 0,
              y: 0,
              rx: 1,
              ry: 1,
              lineWidth: 1
            },
              r.extend(o, i),
              r.augment(o, {
                canFill: !0,
                canStroke: !0,
                type: "ellipse",
                getDefaultAttrs: function() {
                  return {
                    lineWidth: 1
                  }
                },
                calculateBox: function() {
                  var t = this._attrs
                    , e = t.x
                    , n = t.y
                    , r = t.rx
                    , i = t.ry
                    , o = this.getHitLineWidth()
                    , a = r + o / 2
                    , u = i + o / 2;
                  return {
                    minX: e - a,
                    minY: n - u,
                    maxX: e + a,
                    maxY: n + u
                  }
                },
                createPath: function(t) {
                  var e = this._attrs
                    , n = e.x
                    , i = e.y
                    , o = e.rx
                    , a = e.ry;
                  t = t || self.get("context");
                  var u = o > a ? o : a
                    , s = o > a ? 1 : o / a
                    , c = o > a ? a / o : 1
                    , h = [1, 0, 0, 0, 1, 0, 0, 0, 1];
                  r.mat3.scale(h, h, [s, c]),
                    r.mat3.translate(h, h, [n, i]),
                    t.beginPath(),
                    t.save(),
                    t.transform(h[0], h[1], h[3], h[4], h[6], h[7]),
                    t.arc(0, 0, u, 0, 2 * Math.PI),
                    t.restore(),
                    t.closePath()
                }
              }),
              t.exports = o
          }
          , function(t, e, n) {
            var r = n(17)
              , i = n(37)
              , o = function t(e) {
              t.superclass.constructor.call(this, e)
            };
            r.extend(o, i),
              r.augment(o, {
                canFill: !0,
                canStroke: !0,
                type: "dom",
                calculateBox: function() {
                  var t = this._attrs
                    , e = t.x
                    , n = t.y
                    , r = t.width
                    , i = t.height
                    , o = this.getHitLineWidth() / 2;
                  return {
                    minX: e - o,
                    minY: n - o,
                    maxX: e + r + o,
                    maxY: n + i + o
                  }
                }
              }),
              t.exports = o
          }
          , function(t, e, n) {
            var r = n(17)
              , i = n(37)
              , o = function t(e) {
              t.superclass.constructor.call(this, e)
            };
            o.ATTRS = {
              x: 0,
              y: 0,
              r: 0,
              lineWidth: 1
            },
              r.extend(o, i),
              r.augment(o, {
                canFill: !0,
                canStroke: !0,
                type: "circle",
                getDefaultAttrs: function() {
                  return {
                    lineWidth: 1
                  }
                },
                calculateBox: function() {
                  var t = this._attrs
                    , e = t.x
                    , n = t.y
                    , r = t.r
                    , i = this.getHitLineWidth() / 2 + r;
                  return {
                    minX: e - i,
                    minY: n - i,
                    maxX: e + i,
                    maxY: n + i
                  }
                },
                createPath: function(t) {
                  var e = this._attrs
                    , n = e.x
                    , r = e.y
                    , i = e.r;
                  t.beginPath(),
                    t.arc(n, r, i, 0, 2 * Math.PI, !1),
                    t.closePath()
                }
              }),
              t.exports = o
          }
          , function(t, e, n) {
            var r = n(17)
              , i = n(37)
              , o = n(365)
              , a = n(364);
            function u(t, e, n) {
              return t + e * Math.cos(n)
            }
            function s(t, e, n) {
              return t + e * Math.sin(n)
            }
            var c = function t(e) {
              t.superclass.constructor.call(this, e)
            };
            c.ATTRS = {
              x: 0,
              y: 0,
              r: 0,
              startAngle: 0,
              endAngle: 0,
              clockwise: !1,
              lineWidth: 1,
              startArrow: !1,
              endArrow: !1
            },
              r.extend(c, i),
              r.augment(c, {
                canStroke: !0,
                type: "arc",
                getDefaultAttrs: function() {
                  return {
                    x: 0,
                    y: 0,
                    r: 0,
                    startAngle: 0,
                    endAngle: 0,
                    clockwise: !1,
                    lineWidth: 1,
                    startArrow: !1,
                    endArrow: !1
                  }
                },
                calculateBox: function() {
                  var t = this._attrs
                    , e = t.x
                    , n = t.y
                    , r = t.r
                    , i = t.startAngle
                    , a = t.endAngle
                    , u = t.clockwise
                    , s = this.getHitLineWidth() / 2
                    , c = o.box(e, n, r, i, a, u);
                  return c.minX -= s,
                    c.minY -= s,
                    c.maxX += s,
                    c.maxY += s,
                    c
                },
                getStartTangent: function() {
                  var t = this._attrs
                    , e = t.x
                    , n = t.y
                    , r = t.startAngle
                    , i = t.r
                    , o = t.clockwise
                    , a = Math.PI / 180;
                  o && (a *= -1);
                  var c = []
                    , h = u(e, i, r + a)
                    , l = s(n, i, r + a)
                    , f = u(e, i, r)
                    , d = s(n, i, r);
                  return c.push([h, l]),
                    c.push([f, d]),
                    c
                },
                getEndTangent: function() {
                  var t = this._attrs
                    , e = t.x
                    , n = t.y
                    , r = t.endAngle
                    , i = t.r
                    , o = t.clockwise
                    , a = Math.PI / 180
                    , c = [];
                  o && (a *= -1);
                  var h = u(e, i, r + a)
                    , l = s(n, i, r + a)
                    , f = u(e, i, r)
                    , d = s(n, i, r);
                  return c.push([f, d]),
                    c.push([h, l]),
                    c
                },
                createPath: function(t) {
                  var e = this._attrs
                    , n = e.x
                    , r = e.y
                    , i = e.r
                    , o = e.startAngle
                    , a = e.endAngle
                    , u = e.clockwise;
                  (t = t || self.get("context")).beginPath(),
                    t.arc(n, r, i, o, a, u)
                },
                afterPath: function(t) {
                  var e = this._attrs;
                  if (t = t || this.get("context"),
                    e.startArrow) {
                    var n = this.getStartTangent();
                    a.addStartArrow(t, e, n[0][0], n[0][1], n[1][0], n[1][1])
                  }
                  if (e.endArrow) {
                    var r = this.getEndTangent();
                    a.addEndArrow(t, e, r[0][0], r[0][1], r[1][0], r[1][1])
                  }
                }
              }),
              t.exports = c
          }
          , function(t, e) {
            t.exports = {
              xAt: function(t, e, n, r, i) {
                return e * Math.cos(t) * Math.cos(i) - n * Math.sin(t) * Math.sin(i) + r
              },
              yAt: function(t, e, n, r, i) {
                return e * Math.sin(t) * Math.cos(i) + n * Math.cos(t) * Math.sin(i) + r
              },
              xExtrema: function(t, e, n) {
                return Math.atan(-n / e * Math.tan(t))
              },
              yExtrema: function(t, e, n) {
                return Math.atan(n / (e * Math.tan(t)))
              }
            }
          }
          , function(t, e, n) {
            var r = n(17)
              , i = r.vec2;
            function o(t, e, n, r) {
              var i = 1 - r;
              return i * (i * t + 2 * r * e) + r * r * n
            }
            function a(t, e, n, r, a, u, s, c, h) {
              var l, f, d, p, g, m, v, y = .005, x = 1 / 0, b = [s, c];
              for (g = 0; g < 1; g += .05)
                d = [o(t, n, a, g), o(e, r, u, g)],
                (f = i.squaredDistance(b, d)) < x && (l = g,
                  x = f);
              for (x = 1 / 0,
                     v = 0; v < 32 && !(y < 1e-4); v++) {
                var w = l - y
                  , _ = l + y;
                d = [o(t, n, a, w), o(e, r, u, w)],
                  f = i.squaredDistance(b, d),
                  w >= 0 && f < x ? (l = w,
                    x = f) : (p = [o(t, n, a, _), o(e, r, u, _)],
                    m = i.squaredDistance(b, p),
                    _ <= 1 && m < x ? (l = _,
                      x = m) : y *= .5)
              }
              return h && (h.x = o(t, n, a, l),
                h.y = o(e, r, u, l)),
                Math.sqrt(x)
            }
            t.exports = {
              at: o,
              projectPoint: function(t, e, n, r, i, o, u, s) {
                var c = {};
                return a(t, e, n, r, i, o, u, s, c),
                  c
              },
              pointDistance: a,
              extrema: function(t, e, n) {
                var i = t + n - 2 * e;
                if (r.isNumberEqual(i, 0))
                  return [.5];
                var o = (t - e) / i;
                return o <= 1 && o >= 0 ? [o] : []
              }
            }
          }
          , function(t, e, n) {
            var r = n(17)
              , i = n(512)
              , o = n(511)
              , a = n(510)
              , u = n(61)
              , s = function(t) {
              this._cfg = {
                zIndex: 0,
                capture: !0,
                visible: !0,
                destroyed: !1
              },
                r.assign(this._cfg, this.getDefaultCfg(), t),
                this.initAttrs(this._cfg.attrs),
                this._cfg.attrs = {},
                this.initTransform(),
                this.init()
            };
            s.CFG = {
              id: null,
              zIndex: 0,
              canvas: null,
              parent: null,
              capture: !0,
              context: null,
              visible: !0,
              destroyed: !1
            },
              r.augment(s, i, o, u, a, {
                init: function() {
                  this.setSilent("animable", !0),
                    this.setSilent("animating", !1)
                },
                getParent: function() {
                  return this._cfg.parent
                },
                getDefaultCfg: function() {
                  return {}
                },
                set: function(t, e) {
                  return "zIndex" === t && this._beforeSetZIndex && this._beforeSetZIndex(e),
                  "loading" === t && this._beforeSetLoading && this._beforeSetLoading(e),
                    this._cfg[t] = e,
                    this
                },
                setSilent: function(t, e) {
                  this._cfg[t] = e
                },
                get: function(t) {
                  return this._cfg[t]
                },
                show: function() {
                  return this._cfg.visible = !0,
                    this
                },
                hide: function() {
                  return this._cfg.visible = !1,
                    this
                },
                remove: function(t, e) {
                  var n = this._cfg
                    , i = n.parent
                    , o = n.el;
                  return i && r.remove(i.get("children"), this),
                  o && (e ? i && i._cfg.tobeRemoved.push(o) : o.parentNode.removeChild(o)),
                  (t || void 0 === t) && this.destroy(),
                    this
                },
                destroy: function() {
                  this.get("destroyed") || (this._attrs = null,
                    this.removeEvent(),
                    this._cfg = {
                      destroyed: !0
                    })
                },
                toFront: function() {
                  var t = this._cfg
                    , e = t.parent;
                  if (e) {
                    var n = e._cfg.children
                      , r = t.el
                      , i = n.indexOf(this);
                    n.splice(i, 1),
                      n.push(this),
                    r && (r.parentNode.removeChild(r),
                      t.el = null)
                  }
                },
                toBack: function() {
                  var t = this._cfg
                    , e = t.parent;
                  if (e) {
                    var n = e._cfg.children
                      , r = t.el
                      , i = n.indexOf(this);
                    if (n.splice(i, 1),
                      n.unshift(this),
                      r) {
                      var o = r.parentNode;
                      o.removeChild(r),
                        o.insertBefore(r, o.firstChild)
                    }
                  }
                },
                _beforeSetZIndex: function(t) {
                  var e = this._cfg.parent;
                  this._cfg.zIndex = t,
                  r.isNil(e) || e.sort();
                  var n = this._cfg.el;
                  if (n) {
                    var i = e._cfg.children
                      , o = i.indexOf(this)
                      , a = n.parentNode;
                    a.removeChild(n),
                      o === i.length - 1 ? a.appendChild(n) : a.insertBefore(n, a.childNodes[o])
                  }
                  return t
                },
                _setAttrs: function(t) {
                  return this.attr(t),
                    t
                },
                setZIndex: function(t) {
                  return this._cfg.zIndex = t,
                    this._beforeSetZIndex(t)
                },
                clone: function() {
                  return r.clone(this)
                },
                getBBox: function() {}
              }),
              t.exports = s
          }
          , function(t, e, n) {
            var r = n(17)
              , i = n(405)
              , o = n(509)
              , a = {}
              , u = "_INDEX";
            function s(t, e, n) {
              for (var r, i = t.length - 1; i >= 0; i--) {
                var o = t[i];
                if (o._cfg.visible && o._cfg.capture && (o.isGroup ? r = o.getShape(e, n) : o.isHit(e, n) && (r = o)),
                  r)
                  break
              }
              return r
            }
            var c = function t(e) {
              t.superclass.constructor.call(this, e),
                this.set("children", []),
                this.set("tobeRemoved", []),
                this._beforeRenderUI(),
                this._renderUI(),
                this._bindUI()
            };
            r.extend(c, i),
              r.augment(c, {
                isGroup: !0,
                type: "group",
                canFill: !0,
                canStroke: !0,
                getDefaultCfg: function() {
                  return function t(e) {
                    if (!e._cfg && e !== c) {
                      var n = e.superclass.constructor;
                      n && !n._cfg && t(n),
                        e._cfg = {},
                        r.merge(e._cfg, n._cfg),
                        r.merge(e._cfg, e.CFG)
                    }
                  }(this.constructor),
                    r.merge({}, this.constructor._cfg)
                },
                _beforeRenderUI: function() {},
                _renderUI: function() {},
                _bindUI: function() {},
                addShape: function(t, e) {
                  var n = this.get("canvas");
                  e = e || {};
                  var i = a[t];
                  if (i || (i = r.upperFirst(t),
                    a[t] = i),
                  e.attrs && n) {
                    var u = e.attrs;
                    if ("text" === t) {
                      var s = n.get("fontFamily");
                      s && (u.fontFamily = u.fontFamily ? u.fontFamily : s)
                    }
                  }
                  e.canvas = n,
                    e.type = t;
                  var c = new o[i](e);
                  return this.add(c),
                    c
                },
                addGroup: function(t, e) {
                  var n, i = this.get("canvas");
                  if (e = r.merge({}, e),
                    r.isFunction(t))
                    e ? (e.canvas = i,
                      e.parent = this,
                      n = new t(e)) : n = new t({
                      canvas: i,
                      parent: this
                    }),
                      this.add(n);
                  else if (r.isObject(t))
                    t.canvas = i,
                      n = new c(t),
                      this.add(n);
                  else {
                    if (void 0 !== t)
                      return !1;
                    n = new c,
                      this.add(n)
                  }
                  return n
                },
                renderBack: function(t, e) {
                  var n = this.get("backShape")
                    , i = this.getBBox();
                  return r.merge(e, {
                    x: i.minX - t[3],
                    y: i.minY - t[0],
                    width: i.width + t[1] + t[3],
                    height: i.height + t[0] + t[2]
                  }),
                    n ? n.attr(e) : n = this.addShape("rect", {
                      zIndex: -1,
                      attrs: e
                    }),
                    this.set("backShape", n),
                    this.sort(),
                    n
                },
                removeChild: function(t, e) {
                  if (arguments.length >= 2)
                    this.contain(t) && t.remove(e);
                  else {
                    if (1 === arguments.length) {
                      if (!r.isBoolean(t))
                        return this.contain(t) && t.remove(!0),
                          this;
                      e = t
                    }
                    0 === arguments.length && (e = !0),
                      c.superclass.remove.call(this, e)
                  }
                  return this
                },
                add: function(t) {
                  var e = this
                    , n = e.get("children");
                  if (r.isArray(t))
                    r.each(t, function(t) {
                      var n = t.get("parent");
                      n && n.removeChild(t, !1),
                        e._setCfgProperty(t)
                    }),
                      e._cfg.children = n.concat(t);
                  else {
                    var i = t
                      , o = i.get("parent");
                    o && o.removeChild(i, !1),
                      e._setCfgProperty(i),
                      n.push(i)
                  }
                  return e
                },
                _setCfgProperty: function(t) {
                  var e = this._cfg;
                  t.set("parent", this),
                    t.set("canvas", e.canvas),
                  e.timeline && t.set("timeline", e.timeline)
                },
                contain: function(t) {
                  return this.get("children").indexOf(t) > -1
                },
                getChildByIndex: function(t) {
                  return this.get("children")[t]
                },
                getFirst: function() {
                  return this.getChildByIndex(0)
                },
                getLast: function() {
                  var t = this.get("children").length - 1;
                  return this.getChildByIndex(t)
                },
                getBBox: function() {
                  var t = 1 / 0
                    , e = -1 / 0
                    , n = 1 / 0
                    , i = -1 / 0
                    , o = this.get("children");
                  o.length > 0 ? r.each(o, function(r) {
                    if (r.get("visible")) {
                      if (r.isGroup && 0 === r.get("children").length)
                        return;
                      var o = r.getBBox();
                      if (!o)
                        return !0;
                      var a = [o.minX, o.minY, 1]
                        , u = [o.minX, o.maxY, 1]
                        , s = [o.maxX, o.minY, 1]
                        , c = [o.maxX, o.maxY, 1];
                      r.apply(a),
                        r.apply(u),
                        r.apply(s),
                        r.apply(c);
                      var h = Math.min(a[0], u[0], s[0], c[0])
                        , l = Math.max(a[0], u[0], s[0], c[0])
                        , f = Math.min(a[1], u[1], s[1], c[1])
                        , d = Math.max(a[1], u[1], s[1], c[1]);
                      h < t && (t = h),
                      l > e && (e = l),
                      f < n && (n = f),
                      d > i && (i = d)
                    }
                  }) : (t = 0,
                    e = 0,
                    n = 0,
                    i = 0);
                  var a = {
                    minX: t,
                    minY: n,
                    maxX: e,
                    maxY: i
                  };
                  return a.x = a.minX,
                    a.y = a.minY,
                    a.width = a.maxX - a.minX,
                    a.height = a.maxY - a.minY,
                    a
                },
                getCount: function() {
                  return this.get("children").length
                },
                sort: function() {
                  var t = this.get("children");
                  return r.each(t, function(t, e) {
                    return t[u] = e,
                      t
                  }),
                    t.sort(function(t, e) {
                      var n = function(t, e) {
                        return t.get("zIndex") - e.get("zIndex")
                      }(t, e);
                      return 0 === n ? t[u] - e[u] : n
                    }),
                    this
                },
                findById: function(t) {
                  return this.find(function(e) {
                    return e.get("id") === t
                  })
                },
                find: function(t) {
                  if (r.isString(t))
                    return this.findById(t);
                  var e = this.get("children")
                    , n = null;
                  return r.each(e, function(e) {
                    if (t(e) ? n = e : e.find && (n = e.find(t)),
                      n)
                      return !1
                  }),
                    n
                },
                findAll: function(t) {
                  var e = this.get("children")
                    , n = []
                    , i = [];
                  return r.each(e, function(e) {
                    t(e) && n.push(e),
                    e.findAllBy && (i = e.findAllBy(t),
                      n = n.concat(i))
                  }),
                    n
                },
                findBy: function(t) {
                  var e = this.get("children")
                    , n = null;
                  return r.each(e, function(e) {
                    if (t(e) ? n = e : e.findBy && (n = e.findBy(t)),
                      n)
                      return !1
                  }),
                    n
                },
                findAllBy: function(t) {
                  var e = this.get("children")
                    , n = []
                    , i = [];
                  return r.each(e, function(e) {
                    t(e) && n.push(e),
                    e.findAllBy && (i = e.findAllBy(t),
                      n = n.concat(i))
                  }),
                    n
                },
                getShape: function(t, e) {
                  var n, r = this._attrs.clip, i = this._cfg.children;
                  if (r) {
                    var o = [t, e, 1];
                    r.invert(o, this.get("canvas")),
                    r.isPointInPath(o[0], o[1]) && (n = s(i, t, e))
                  } else
                    n = s(i, t, e);
                  return n
                },
                clearTotalMatrix: function() {
                  if (this.get("totalMatrix")) {
                    this.setSilent("totalMatrix", null);
                    for (var t = this._cfg.children, e = 0; e < t.length; e++)
                      t[e].clearTotalMatrix()
                  }
                },
                clear: function(t) {
                  for (var e = this._cfg.children, n = e.length - 1; n >= 0; n--)
                    e[n].remove(!0, t);
                  return this._cfg.children = [],
                    this
                },
                destroy: function() {
                  this.get("destroyed") || (this.clear(),
                    c.superclass.destroy.call(this))
                },
                clone: function() {
                  var t = this._cfg.children
                    , e = new c;
                  return r.each(t, function(t) {
                    e.add(t.clone())
                  }),
                    e
                }
              }),
              t.exports = c
          }
          , function(t, e, n) {
            var r = n(17)
              , i = function(t, e, n, r) {
              this.type = t,
                this.target = null,
                this.currentTarget = null,
                this.bubbles = n,
                this.cancelable = r,
                this.timeStamp = (new Date).getTime(),
                this.defaultPrevented = !1,
                this.propagationStopped = !1,
                this.removed = !1,
                this.event = e
            };
            r.augment(i, {
              preventDefault: function() {
                this.defaultPrevented = this.cancelable && !0
              },
              stopPropagation: function() {
                this.propagationStopped = !0
              },
              remove: function() {
                this.remove = !0
              },
              clone: function() {
                return r.clone(this)
              },
              toString: function() {
                return "[Event (type=" + this.type + ")]"
              }
            }),
              t.exports = i
          }
          , function(t, e, n) {
            t.exports = {
              isFunction: n(47),
              isObject: n(385),
              isBoolean: n(419),
              isNil: n(136),
              isString: n(358),
              isArray: n(29),
              isNumber: n(135),
              isEmpty: n(413),
              uniqueId: n(412),
              clone: n(380),
              deepMix: n(379),
              assign: n(369),
              merge: n(379),
              upperFirst: n(421),
              each: n(30),
              isEqual: n(378),
              toArray: n(367),
              extend: n(416),
              augment: n(417),
              remove: n(442),
              isNumberEqual: n(439),
              toRadian: n(435),
              toDegree: n(437),
              mod: n(438),
              clamp: n(382),
              createDom: n(447),
              modifyCSS: n(446),
              requestAnimationFrame: n(445),
              getRatio: function() {
                return window.devicePixelRatio ? window.devicePixelRatio : 2
              },
              mat3: n(381),
              vec2: n(434),
              vec3: n(433),
              transform: n(432)
            }
          }
          , function(t, e, n) {
            var r = n(410).Symbol;
            t.exports = r
          }
          , function(t, e, n) {
            var r = n(521)
              , i = "object" == typeof self && self && self.Object === Object && self
              , o = r || i || Function("return this")();
            t.exports = o
          }
          , function(t, e, n) {
            var r = n(377)
              , i = n(522)
              , o = n(520)
              , a = Math.max
              , u = Math.min;
            t.exports = function(t, e, n) {
              var s, c, h, l, f, d, p = 0, g = !1, m = !1, v = !0;
              if ("function" != typeof t)
                throw new TypeError("Expected a function");
              function y(e) {
                var n = s
                  , r = c;
                return s = c = void 0,
                  p = e,
                  l = t.apply(r, n)
              }
              function x(t) {
                var n = t - d;
                return void 0 === d || n >= e || n < 0 || m && t - p >= h
              }
              function b() {
                var t = i();
                if (x(t))
                  return w(t);
                f = setTimeout(b, function(t) {
                  var n = e - (t - d);
                  return m ? u(n, h - (t - p)) : n
                }(t))
              }
              function w(t) {
                return f = void 0,
                  v && s ? y(t) : (s = c = void 0,
                    l)
              }
              function _() {
                var t = i()
                  , n = x(t);
                if (s = arguments,
                  c = this,
                  d = t,
                  n) {
                  if (void 0 === f)
                    return function(t) {
                      return p = t,
                        f = setTimeout(b, e),
                        g ? y(t) : l
                    }(d);
                  if (m)
                    return f = setTimeout(b, e),
                      y(d)
                }
                return void 0 === f && (f = setTimeout(b, e)),
                  l
              }
              return e = o(e) || 0,
              r(n) && (g = !!n.leading,
                h = (m = "maxWait"in n) ? a(o(n.maxWait) || 0, e) : h,
                v = "trailing"in n ? !!n.trailing : v),
                _.cancel = function() {
                  void 0 !== f && clearTimeout(f),
                    p = 0,
                    s = d = c = f = void 0
                }
                ,
                _.flush = function() {
                  return void 0 === f ? l : w(i())
                }
                ,
                _
            }
          }
          , function(t, e) {
            var n = function() {
              var t = {};
              return function(e) {
                return t[e = e || "g"] ? t[e] += 1 : t[e] = 1,
                e + t[e]
              }
            }();
            t.exports = n
          }
          , function(t, e, n) {
            var r = n(136)
              , i = n(62)
              , o = n(420)
              , a = n(418)
              , u = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
              if (r(t))
                return !0;
              if (i(t))
                return !t.length;
              var e = o(t);
              if ("Map" === e || "Set" === e)
                return !t.size;
              if (a(t))
                return !Object.keys(t).length;
              for (var n in t)
                if (u.call(t, n))
                  return !1;
              return !0
            }
          }
          , function(t, e, n) {
            var r = n(30)
              , i = n(29)
              , o = Object.prototype.hasOwnProperty;
            t.exports = function(t, e) {
              if (!e || !i(t))
                return t;
              var n = {}
                , a = null;
              return r(t, function(t) {
                a = e(t),
                  o.call(n, a) ? n[a].push(t) : n[a] = [t]
              }),
                n
            }
          }
          , function(t, e, n) {
            var r = n(47)
              , i = n(29)
              , o = n(414);
            t.exports = function(t, e) {
              if (!e)
                return {
                  0: t
                };
              if (!r(e)) {
                var n = i(e) ? e : e.replace(/\s+/g, "").split("*");
                e = function(t) {
                  for (var e = "_", r = 0, i = n.length; r < i; r++)
                    e += t[n[r]] && t[n[r]].toString();
                  return e
                }
              }
              return o(t, e)
            }
          }
          , function(t, e, n) {
            var r = n(47)
              , i = n(369);
            t.exports = function(t, e, n, o) {
              r(e) || (n = e,
                  e = t,
                  t = function() {}
              );
              var a = Object.create ? function(t, e) {
                  return Object.create(t, {
                    constructor: {
                      value: e
                    }
                  })
                }
                : function(t, e) {
                  function n() {}
                  n.prototype = t;
                  var r = new n;
                  return r.constructor = e,
                    r
                }
                , u = a(e.prototype, t);
              return t.prototype = i(u, t.prototype),
                t.superclass = a(e.prototype, e),
                i(u, n),
                i(t, o),
                t
            }
          }
          , function(t, e, n) {
            var r = n(47)
              , i = n(367)
              , o = n(369);
            t.exports = function(t) {
              for (var e = i(arguments), n = 1; n < e.length; n++) {
                var a = e[n];
                r(a) && (a = a.prototype),
                  o(t.prototype, a)
              }
            }
          }
          , function(t, e) {
            var n = Object.prototype;
            t.exports = function(t) {
              var e = t && t.constructor;
              return t === ("function" == typeof e && e.prototype || n)
            }
          }
          , function(t, e, n) {
            var r = n(60);
            t.exports = function(t) {
              return r(t, "Boolean")
            }
          }
          , function(t, e) {
            var n = {}.toString;
            t.exports = function(t) {
              return n.call(t).replace(/^\[object /, "").replace(/\]$/, "")
            }
          }
          , function(t, e, n) {
            var r = n(357);
            t.exports = function(t) {
              var e = r(t);
              return e.charAt(0).toUpperCase() + e.substring(1)
            }
          }
          , function(t, e, n) {
            var r = n(357);
            t.exports = function(t) {
              return r(t).toUpperCase()
            }
          }
          , function(t, e, n) {
            var r = n(357);
            t.exports = function(t) {
              return r(t).toLowerCase()
            }
          }
          , function(t, e) {
            t.exports = function(t, e) {
              for (var n = [], r = 0, i = t.length; i - 2 * !e > r; r += 2) {
                var o = [{
                  x: +t[r - 2],
                  y: +t[r - 1]
                }, {
                  x: +t[r],
                  y: +t[r + 1]
                }, {
                  x: +t[r + 2],
                  y: +t[r + 3]
                }, {
                  x: +t[r + 4],
                  y: +t[r + 5]
                }];
                e ? r ? i - 4 === r ? o[3] = {
                  x: +t[0],
                  y: +t[1]
                } : i - 2 === r && (o[2] = {
                  x: +t[0],
                  y: +t[1]
                },
                  o[3] = {
                    x: +t[2],
                    y: +t[3]
                  }) : o[0] = {
                  x: +t[i - 2],
                  y: +t[i - 1]
                } : i - 4 === r ? o[3] = o[2] : r || (o[0] = {
                  x: +t[r],
                  y: +t[r + 1]
                }),
                  n.push(["C", (-o[0].x + 6 * o[1].x + o[2].x) / 6, (-o[0].y + 6 * o[1].y + o[2].y) / 6, (o[1].x + 6 * o[2].x - o[3].x) / 6, (o[1].y + 6 * o[2].y - o[3].y) / 6, o[2].x, o[2].y])
              }
              return n
            }
          }
          , function(t, e) {
            var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
              }
              : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
              }
              , r = "\t\n\v\f\r   ᠎             　\u2028\u2029"
              , i = new RegExp("([a-z])[" + r + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + r + "]*,?[" + r + "]*)+)","ig")
              , o = new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[" + r + "]*,?[" + r + "]*","ig");
            t.exports = function(t) {
              if (!t)
                return null;
              if ((void 0 === t ? "undefined" : n(t)) === n([]))
                return t;
              var e = {
                a: 7,
                c: 6,
                o: 2,
                h: 1,
                l: 2,
                m: 2,
                r: 4,
                q: 4,
                s: 4,
                t: 2,
                v: 1,
                u: 3,
                z: 0
              }
                , r = [];
              return String(t).replace(i, function(t, n, i) {
                var a = []
                  , u = n.toLowerCase();
                if (i.replace(o, function(t, e) {
                  e && a.push(+e)
                }),
                "m" === u && a.length > 2 && (r.push([n].concat(a.splice(0, 2))),
                  u = "l",
                  n = "m" === n ? "l" : "L"),
                "o" === u && 1 === a.length && r.push([n, a[0]]),
                "r" === u)
                  r.push([n].concat(a));
                else
                  for (; a.length >= e[u] && (r.push([n].concat(a.splice(0, e[u]))),
                    e[u]); )
                    ;
              }),
                r
            }
          }
          , function(t, e, n) {
            var r = n(425)
              , i = n(424);
            function o(t, e, n, r, i) {
              var o = [];
              if (null === i && null === r && (r = n),
                t = +t,
                e = +e,
                n = +n,
                r = +r,
              null !== i) {
                var a = Math.PI / 180
                  , u = t + n * Math.cos(-r * a)
                  , s = t + n * Math.cos(-i * a);
                o = [["M", u, e + n * Math.sin(-r * a)], ["A", n, n, 0, +(i - r > 180), 0, s, e + n * Math.sin(-i * a)]]
              } else
                o = [["M", t, e], ["m", 0, -r], ["a", n, r, 0, 1, 1, 0, 2 * r], ["a", n, r, 0, 1, 1, 0, -2 * r], ["z"]];
              return o
            }
            t.exports = function(t) {
              if (!(t = r(t)) || !t.length)
                return [["M", 0, 0]];
              var e = []
                , n = 0
                , a = 0
                , u = 0
                , s = 0
                , c = 0
                , h = void 0
                , l = void 0;
              "M" === t[0][0] && (u = n = +t[0][1],
                s = a = +t[0][2],
                c++,
                e[0] = ["M", n, a]);
              for (var f, d, p = 3 === t.length && "M" === t[0][0] && "R" === t[1][0].toUpperCase() && "Z" === t[2][0].toUpperCase(), g = c, m = t.length; g < m; g++) {
                if (e.push(f = []),
                (h = (d = t[g])[0]) !== h.toUpperCase())
                  switch (f[0] = h.toUpperCase(),
                    f[0]) {
                    case "A":
                      f[1] = d[1],
                        f[2] = d[2],
                        f[3] = d[3],
                        f[4] = d[4],
                        f[5] = d[5],
                        f[6] = +d[6] + n,
                        f[7] = +d[7] + a;
                      break;
                    case "V":
                      f[1] = +d[1] + a;
                      break;
                    case "H":
                      f[1] = +d[1] + n;
                      break;
                    case "R":
                      for (var v = 2, y = (l = [n, a].concat(d.slice(1))).length; v < y; v++)
                        l[v] = +l[v] + n,
                          l[++v] = +l[v] + a;
                      e.pop(),
                        e = e.concat(i(l, p));
                      break;
                    case "O":
                      e.pop(),
                        (l = o(n, a, d[1], d[2])).push(l[0]),
                        e = e.concat(l);
                      break;
                    case "U":
                      e.pop(),
                        e = e.concat(o(n, a, d[1], d[2], d[3])),
                        f = ["U"].concat(e[e.length - 1].slice(-2));
                      break;
                    case "M":
                      u = +d[1] + n,
                        s = +d[2] + a;
                      break;
                    default:
                      for (var x = 1, b = d.length; x < b; x++)
                        f[x] = +d[x] + (x % 2 ? n : a)
                  }
                else if ("R" === h)
                  l = [n, a].concat(d.slice(1)),
                    e.pop(),
                    e = e.concat(i(l, p)),
                    f = ["R"].concat(d.slice(-2));
                else if ("O" === h)
                  e.pop(),
                    (l = o(n, a, d[1], d[2])).push(l[0]),
                    e = e.concat(l);
                else if ("U" === h)
                  e.pop(),
                    e = e.concat(o(n, a, d[1], d[2], d[3])),
                    f = ["U"].concat(e[e.length - 1].slice(-2));
                else
                  for (var w = 0, _ = d.length; w < _; w++)
                    f[w] = d[w];
                if ("O" !== (h = h.toUpperCase()))
                  switch (f[0]) {
                    case "Z":
                      n = +u,
                        a = +s;
                      break;
                    case "H":
                      n = f[1];
                      break;
                    case "V":
                      a = f[1];
                      break;
                    case "M":
                      u = f[f.length - 2],
                        s = f[f.length - 1];
                      break;
                    default:
                      n = f[f.length - 2],
                        a = f[f.length - 1]
                  }
              }
              return e
            }
          }
          , function(t, e, n) {
            var r = n(426)
              , i = function(t, e, n, r) {
              return [t, e, n, r, n, r]
            }
              , o = function(t, e, n, r, i, o) {
              return [1 / 3 * t + 2 / 3 * n, 1 / 3 * e + 2 / 3 * r, 1 / 3 * i + 2 / 3 * n, 1 / 3 * o + 2 / 3 * r, i, o]
            };
            t.exports = function(t, e) {
              var n = r(t)
                , a = e && r(e)
                , u = {
                x: 0,
                y: 0,
                bx: 0,
                by: 0,
                X: 0,
                Y: 0,
                qx: null,
                qy: null
              }
                , s = {
                x: 0,
                y: 0,
                bx: 0,
                by: 0,
                X: 0,
                Y: 0,
                qx: null,
                qy: null
              }
                , c = []
                , h = []
                , l = ""
                , f = ""
                , d = void 0
                , p = function(t, e, n) {
                var r = void 0
                  , a = void 0;
                if (!t)
                  return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
                switch (!(t[0]in {
                  T: 1,
                  Q: 1
                }) && (e.qx = e.qy = null),
                  t[0]) {
                  case "M":
                    e.X = t[1],
                      e.Y = t[2];
                    break;
                  case "A":
                    t = ["C"].concat(function t(e, n, r, i, o, a, u, s, c, h) {
                      r === i && (r += 1);
                      var l = 120 * Math.PI / 180
                        , f = Math.PI / 180 * (+o || 0)
                        , d = []
                        , p = void 0
                        , g = void 0
                        , m = void 0
                        , v = void 0
                        , y = void 0
                        , x = function(t, e, n) {
                        return {
                          x: t * Math.cos(n) - e * Math.sin(n),
                          y: t * Math.sin(n) + e * Math.cos(n)
                        }
                      };
                      if (h)
                        g = h[0],
                          m = h[1],
                          v = h[2],
                          y = h[3];
                      else {
                        e = (p = x(e, n, -f)).x,
                          n = p.y,
                          s = (p = x(s, c, -f)).x,
                          c = p.y,
                        e === s && n === c && (s += 1,
                          c += 1);
                        var b = (e - s) / 2
                          , w = (n - c) / 2
                          , _ = b * b / (r * r) + w * w / (i * i);
                        _ > 1 && (r *= _ = Math.sqrt(_),
                          i *= _);
                        var S = r * r
                          , M = i * i
                          , P = (a === u ? -1 : 1) * Math.sqrt(Math.abs((S * M - S * w * w - M * b * b) / (S * w * w + M * b * b)));
                        v = P * r * w / i + (e + s) / 2,
                          y = P * -i * b / r + (n + c) / 2,
                          g = Math.asin(((n - y) / i).toFixed(9)),
                          m = Math.asin(((c - y) / i).toFixed(9)),
                          g = e < v ? Math.PI - g : g,
                          m = s < v ? Math.PI - m : m,
                        g < 0 && (g = 2 * Math.PI + g),
                        m < 0 && (m = 2 * Math.PI + m),
                        u && g > m && (g -= 2 * Math.PI),
                        !u && m > g && (m -= 2 * Math.PI)
                      }
                      var O = m - g;
                      if (Math.abs(O) > l) {
                        var E = m
                          , A = s
                          , C = c;
                        m = g + l * (u && m > g ? 1 : -1),
                          d = t(s = v + r * Math.cos(m), c = y + i * Math.sin(m), r, i, o, 0, u, A, C, [m, E, v, y])
                      }
                      O = m - g;
                      var k = Math.cos(g)
                        , I = Math.sin(g)
                        , B = Math.cos(m)
                        , j = Math.sin(m)
                        , T = Math.tan(O / 4)
                        , L = 4 / 3 * r * T
                        , N = 4 / 3 * i * T
                        , D = [e, n]
                        , G = [e + L * I, n - N * k]
                        , Y = [s + L * j, c - N * B]
                        , X = [s, c];
                      if (G[0] = 2 * D[0] - G[0],
                        G[1] = 2 * D[1] - G[1],
                        h)
                        return [G, Y, X].concat(d);
                      for (var F = [], R = 0, H = (d = [G, Y, X].concat(d).join().split(",")).length; R < H; R++)
                        F[R] = R % 2 ? x(d[R - 1], d[R], f).y : x(d[R], d[R + 1], f).x;
                      return F
                    }
                      .apply(0, [e.x, e.y].concat(t.slice(1))));
                    break;
                  case "S":
                    "C" === n || "S" === n ? (r = 2 * e.x - e.bx,
                      a = 2 * e.y - e.by) : (r = e.x,
                      a = e.y),
                      t = ["C", r, a].concat(t.slice(1));
                    break;
                  case "T":
                    "Q" === n || "T" === n ? (e.qx = 2 * e.x - e.qx,
                      e.qy = 2 * e.y - e.qy) : (e.qx = e.x,
                      e.qy = e.y),
                      t = ["C"].concat(o(e.x, e.y, e.qx, e.qy, t[1], t[2]));
                    break;
                  case "Q":
                    e.qx = t[1],
                      e.qy = t[2],
                      t = ["C"].concat(o(e.x, e.y, t[1], t[2], t[3], t[4]));
                    break;
                  case "L":
                    t = ["C"].concat(i(e.x, e.y, t[1], t[2]));
                    break;
                  case "H":
                    t = ["C"].concat(i(e.x, e.y, t[1], e.y));
                    break;
                  case "V":
                    t = ["C"].concat(i(e.x, e.y, e.x, t[1]));
                    break;
                  case "Z":
                    t = ["C"].concat(i(e.x, e.y, e.X, e.Y))
                }
                return t
              }
                , g = function(t, e) {
                if (t[e].length > 7) {
                  t[e].shift();
                  for (var r = t[e]; r.length; )
                    c[e] = "A",
                    a && (h[e] = "A"),
                      t.splice(e++, 0, ["C"].concat(r.splice(0, 6)));
                  t.splice(e, 1),
                    d = Math.max(n.length, a && a.length || 0)
                }
              }
                , m = function(t, e, r, i, o) {
                t && e && "M" === t[o][0] && "M" !== e[o][0] && (e.splice(o, 0, ["M", i.x, i.y]),
                  r.bx = 0,
                  r.by = 0,
                  r.x = t[o][1],
                  r.y = t[o][2],
                  d = Math.max(n.length, a && a.length || 0))
              };
              d = Math.max(n.length, a && a.length || 0);
              for (var v = 0; v < d; v++) {
                n[v] && (l = n[v][0]),
                "C" !== l && (c[v] = l,
                v && (f = c[v - 1])),
                  n[v] = p(n[v], u, f),
                "A" !== c[v] && "C" === l && (c[v] = "C"),
                  g(n, v),
                a && (a[v] && (l = a[v][0]),
                "C" !== l && (h[v] = l,
                v && (f = h[v - 1])),
                  a[v] = p(a[v], s, f),
                "A" !== h[v] && "C" === l && (h[v] = "C"),
                  g(a, v)),
                  m(n, a, u, s, v),
                  m(a, n, s, u, v);
                var y = n[v]
                  , x = a && a[v]
                  , b = y.length
                  , w = a && x.length;
                u.x = y[b - 2],
                  u.y = y[b - 1],
                  u.bx = parseFloat(y[b - 4]) || u.x,
                  u.by = parseFloat(y[b - 3]) || u.y,
                  s.bx = a && (parseFloat(x[w - 4]) || s.x),
                  s.by = a && (parseFloat(x[w - 3]) || s.y),
                  s.x = a && x[w - 2],
                  s.y = a && x[w - 1]
              }
              return a ? [n, a] : n
            }
          }
          , function(t, e) {
            var n = /,?([a-z]),?/gi;
            t.exports = function(t) {
              return t.join(",").replace(n, "$1")
            }
          }
          , function(t, e, n) {
            var r = n(428);
            t.exports = function(t, e, n, i, o) {
              if (o)
                return [["M", +t + +o, e], ["l", n - 2 * o, 0], ["a", o, o, 0, 0, 1, o, o], ["l", 0, i - 2 * o], ["a", o, o, 0, 0, 1, -o, o], ["l", 2 * o - n, 0], ["a", o, o, 0, 0, 1, -o, -o], ["l", 0, 2 * o - i], ["a", o, o, 0, 0, 1, o, -o], ["z"]];
              var a = [["M", t, e], ["l", n, 0], ["l", 0, i], ["l", -n, 0], ["z"]];
              return a.parsePathArray = r,
                a
            }
          }
          , function(t, e, n) {
            var r = n(30)
              , i = n(47)
              , o = Object.values ? function(t) {
                return Object.values(t)
              }
              : function(t) {
                var e = [];
                return r(t, function(n, r) {
                  i(t) && "prototype" === r || e.push(n)
                }),
                  e
              }
            ;
            t.exports = o
          }
          , function(t, e) {
            t.exports = function(t, e) {
              return t.hasOwnProperty(e)
            }
          }
          , function(t, e, n) {
            var r = n(380)
              , i = n(30)
              , o = n(381);
            t.exports = function(t, e) {
              return t = r(t),
                i(e, function(e) {
                  switch (e[0]) {
                    case "t":
                      o.translate(t, t, [e[1], e[2]]);
                      break;
                    case "s":
                      o.scale(t, t, [e[1], e[2]]);
                      break;
                    case "r":
                      o.rotate(t, t, e[1]);
                      break;
                    case "m":
                      o.multiply(t, t, e[1]);
                      break;
                    default:
                      return !1
                  }
                }),
                t
            }
          }
          , function(t, e, n) {
            var r = n(149);
            t.exports = r
          }
          , function(t, e, n) {
            var r = n(150)
              , i = n(382);
            r.angle = function(t, e) {
              var n = r.dot(t, e) / (r.length(t) * r.length(e));
              return Math.acos(i(n, -1, 1))
            }
              ,
              r.direction = function(t, e) {
                return t[0] * e[1] - e[0] * t[1]
              }
              ,
              r.angleTo = function(t, e, n) {
                var i = r.angle(t, e)
                  , o = r.direction(t, e) >= 0;
                return n ? o ? 2 * Math.PI - i : i : o ? i : 2 * Math.PI - i
              }
              ,
              r.vertical = function(t, e, n) {
                return n ? (t[0] = e[1],
                  t[1] = -1 * e[0]) : (t[0] = -1 * e[1],
                  t[1] = e[0]),
                  t
              }
              ,
              t.exports = r
          }
          , function(t, e) {
            var n = Math.PI / 180;
            t.exports = function(t) {
              return n * t
            }
          }
          , function(t, e) {
            t.exports = parseInt
          }
          , function(t, e) {
            var n = 180 / Math.PI;
            t.exports = function(t) {
              return n * t
            }
          }
          , function(t, e) {
            t.exports = function(t, e) {
              return (t % e + e) % e
            }
          }
          , function(t, e) {
            t.exports = function(t, e) {
              var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e-5;
              return Math.abs(t - e) < n
            }
          }
          , function(t, e, n) {
            var r = n(30)
              , i = n(368);
            t.exports = function(t) {
              var e = [];
              return r(t, function(t) {
                i(e, t) || e.push(t)
              }),
                e
            }
          }
          , function(t, e, n) {
            var r = n(62)
              , i = Array.prototype.splice;
            t.exports = function(t, e) {
              if (!r(t))
                return [];
              for (var n = t ? e.length : 0, o = n - 1; n--; ) {
                var a = void 0
                  , u = e[n];
                n !== o && u === a || (a = u,
                  i.call(t, u, 1))
              }
              return t
            }
          }
          , function(t, e) {
            var n = Array.prototype
              , r = n.splice
              , i = n.indexOf
              , o = n.slice;
            t.exports = function(t) {
              for (var e = o.call(arguments, 1), n = 0; n < e.length; n++)
                for (var a = e[n], u = -1; (u = i.call(t, a)) > -1; )
                  r.call(t, u, 1);
              return t
            }
          }
          , function(t, e, n) {
            var r = n(30)
              , i = n(47)
              , o = Object.keys ? function(t) {
                return Object.keys(t)
              }
              : function(t) {
                var e = [];
                return r(t, function(n, r) {
                  i(t) && "prototype" === r || e.push(r)
                }),
                  e
              }
            ;
            t.exports = o
          }
          , function(t, e, n) {
            var r = n(443)
              , i = n(136);
            t.exports = function(t, e) {
              var n = r(e)
                , o = n.length;
              if (i(t))
                return !o;
              for (var a = 0; a < o; a += 1) {
                var u = n[a];
                if (e[u] !== t[u] || !(u in t))
                  return !1
              }
              return !0
            }
          }
          , function(t, e) {
            t.exports = function(t) {
              return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(t) {
                  return setTimeout(t, 16)
                }
              )(t)
            }
          }
          , function(t, e) {
            t.exports = function(t, e) {
              if (t)
                for (var n in e)
                  e.hasOwnProperty(n) && (t.style[n] = e[n]);
              return t
            }
          }
          , function(t, e) {
            var n = document.createElement("table")
              , r = document.createElement("tr")
              , i = /^\s*<(\w+|!)[^>]*>/
              , o = {
              tr: document.createElement("tbody"),
              tbody: n,
              thead: n,
              tfoot: n,
              td: r,
              th: r,
              "*": document.createElement("div")
            };
            t.exports = function(t) {
              var e = i.test(t) && RegExp.$1;
              e in o || (e = "*");
              var n = o[e];
              t = t.replace(/(^\s*)|(\s*$)/g, ""),
                n.innerHTML = "" + t;
              var r = n.childNodes[0];
              return n.removeChild(r),
                r
            }
          }
          , function(t, e, n) {
            var r = n(152)
              , i = {
              isBetween: function(t, e, n) {
                return t >= e && t <= n
              },
              getLineIntersect: function(t, e, n, r) {
                var o = n.x - t.x
                  , a = n.y - t.y
                  , u = e.x - t.x
                  , s = e.y - t.y
                  , c = r.x - n.x
                  , h = r.y - n.y
                  , l = u * h - s * c
                  , f = null;
                if (l * l > .001 * (u * u + s * s) * (c * c + h * h)) {
                  var d = (o * h - a * c) / l
                    , p = (o * s - a * u) / l;
                  i.isBetween(d, 0, 1) && i.isBetween(p, 0, 1) && (f = {
                    x: t.x + d * u,
                    y: t.y + d * s
                  })
                }
                return f
              },
              getIntersectPointRect: function(t, e) {
                var n = t.minX
                  , r = t.minY
                  , o = t.maxX - t.minX
                  , a = t.maxY - t.minY
                  , u = []
                  , s = {
                  x: n + o / 2,
                  y: r + a / 2
                };
                u.push({
                  x: n,
                  y: r
                }),
                  u.push({
                    x: n + o,
                    y: r
                  }),
                  u.push({
                    x: n + o,
                    y: r + a
                  }),
                  u.push({
                    x: n,
                    y: r + a
                  }),
                  u.push({
                    x: n,
                    y: r
                  });
                for (var c = null, h = 1; h < u.length && !(c = i.getLineIntersect(u[h - 1], u[h], s, e)); h++)
                  ;
                return c
              },
              getIntersectPointCircle: function(t, e, n, r, i) {
                if (Math.sqrt(Math.pow(t - n, 2) + Math.pow(e - r, 2)) < i)
                  return null;
                var o = t - n
                  , a = e - r
                  , u = Math.sign(o)
                  , s = Math.sign(a)
                  , c = Math.atan(a / o);
                return {
                  x: n + Math.abs(i * Math.cos(c)) * u,
                  y: r + Math.abs(i * Math.sin(c)) * s
                }
              },
              applyMatrix: function(t, e, n) {
                void 0 === n && (n = 1);
                var i = [t.x, t.y, n];
                return r.vec3.transformMat3(i, i, e),
                  {
                    x: i[0],
                    y: i[1]
                  }
              },
              invertMatrix: function(t, e, n) {
                void 0 === n && (n = 1);
                var i = r.mat3.invert([], e)
                  , o = [t.x, t.y, n];
                return r.vec3.transformMat3(o, o, i),
                  {
                    x: o[0],
                    y: o[1]
                  }
              },
              radixSort: function(t, e) {
                var n, r, i, o, a, u, s, c = 10, h = 1, l = [], f = 1;
                for (i = 0; i < t.length; i++)
                  n = e(t[i]),
                    r = (n = parseInt(n, 10)).toString().length,
                  n.toString().length > f && (f = r);
                for (i = 0; i < f; i++,
                  h *= 10,
                  c *= 10) {
                  for (o = 0; o < t.length; o++)
                    a = e(t[o]),
                    void 0 === l[a = parseInt(a % c / h, 10)] && (l[a] = []),
                      l[a].push(t[o]);
                  for (u = 0,
                         o = 0; o < l.length; o++)
                    if (s = void 0,
                    void 0 !== l[o])
                      for (s = l[o].shift(); void 0 !== s; )
                        t[u++] = s,
                          s = l[o].shift()
                }
                return t
              },
              getArcOfVectors: function(t, e) {
                var n = t.x
                  , r = t.y
                  , i = e.x
                  , o = e.y
                  , a = Math.sqrt(n * n + r * r)
                  , u = Math.sqrt(i * i + o * o);
                return Math.acos((n * i + r * o) / (a * u))
              }
            };
            t.exports = r.mix({}, r, i)
          }
          , function(t, e, n) {
            var r = n(153);
            r.registerShapeManager("node", {
              defaultShapeType: "common"
            }),
              r.registerShapeManager("edge", {
                defaultShapeType: "common"
              }),
              r.registerShapeManager("group", {
                defaultShapeType: "common"
              }),
              r.registerShapeManager("guide", {
                defaultShapeType: "common"
              }),
              n(490),
              n(487),
              n(485),
              n(483),
              t.exports = r
          }
          , function(t, e, n) {
            var r = n(146)
              , i = n(372)
              , o = n(22);
            setTimeout(function() {
              var t = r.track;
              if (r.track) {
                var e = new Image
                  , n = {
                  pg: document.URL,
                  r: (new Date).getTime(),
                  g6: !0,
                  version: i,
                  page_type: "syslog"
                };
                o.isObject(t) && o.mix(n, t);
                var a = encodeURIComponent(JSON.stringify([n]));
                e.src = "https://kcart.alipay.com/web/bi.do?BIProfile=merge&d=" + a
              }
            }, 2e3)
          }
          , function(t, e, n) {
            var r = n(361)
              , i = function(t) {
              function e(e) {
                var n;
                return (n = t.call(this, e) || this).layout = r.mindmap,
                  n
              }
              return function(t, e) {
                t.prototype = Object.create(e.prototype),
                  t.prototype.constructor = t,
                  t.__proto__ = e
              }(e, t),
                e
            }(n(360));
            t.exports = i
          }
          , function(t, e, n) {
            var r = n(361)
              , i = function(t) {
              function e(e) {
                var n;
                return (n = t.call(this, e) || this).layout = r.indented,
                  n
              }
              return function(t, e) {
                t.prototype = Object.create(e.prototype),
                  t.prototype.constructor = t,
                  t.__proto__ = e
              }(e, t),
                e
            }(n(360));
            t.exports = i
          }
          , function(t, e, n) {
            var r = n(361)
              , i = function(t) {
              function e(e) {
                var n;
                return (n = t.call(this, e) || this).layout = r.dendrogram,
                  n
              }
              return function(t, e) {
                t.prototype = Object.create(e.prototype),
                  t.prototype.constructor = t,
                  t.__proto__ = e
              }(e, t),
                e
            }(n(360));
            t.exports = i
          }
          , function(t, e, n) {
            var r = n(361)
              , i = function(t) {
              function e(e) {
                var n;
                return (n = t.call(this, e) || this).layout = r.compactBox,
                  n
              }
              return function(t, e) {
                t.prototype = Object.create(e.prototype),
                  t.prototype.constructor = t,
                  t.__proto__ = e
              }(e, t),
                e
            }(n(360));
            t.exports = i
          }
          , function(t, e, n) {
            var r = n(22)
              , i = n(389)
              , o = n(387)
              , a = function(t) {
              function e(e) {
                var n = r.mix({
                  layout: new o.CompactBoxTree({
                    getHGap: function() {
                      return 10
                    },
                    getVGap: function() {
                      return 10
                    }
                  }),
                  _type: "tree"
                }, e);
                return t.call(this, n) || this
              }
              !function(t, e) {
                t.prototype = Object.create(e.prototype),
                  t.prototype.constructor = t,
                  t.__proto__ = e
              }(e, t);
              var n = e.prototype;
              return n.initEvent = function() {
                var t = this;
                this.on("afterdrawinner", function() {
                  t.get("_sourceData").roots.forEach(function(e) {
                    var n = t.find(e.id);
                    t._setVisibleByCollapsed(n)
                  })
                })
              }
                ,
                n._executeLayout = function(t) {
                  var e = this.get("_sourceData");
                  r.isFunction(t) ? t(e.roots, this) : r.isObject(t) && (t.roots = e.roots,
                    t.graph = this,
                    t.execute())
                }
                ,
                n.getHierarchy = function(t) {
                  t = this.getItem(t);
                  for (var e = this.get("_dataMap"), n = t.getModel().parent, r = 1; n; )
                    n = e[n].parent,
                      r++;
                  return r
                }
                ,
                n.parseSource = function(t) {
                  var e = t.roots
                    , n = this.get("_dataMap")
                    , i = []
                    , o = [];
                  if (!e)
                    throw new Error("please set data.roots!");
                  return e.forEach(function(t) {
                    r.traverseTree(t, function(t, e) {
                      t.id || (t.id = r.guid()),
                      e || (e = n[t.parent]),
                      e && (t.parent = e.id,
                      e.id || (e.id = r.guid()),
                        o.push({
                          source: e.id,
                          target: t.id,
                          id: e.id + "-" + t.id
                        })),
                        i.push(t)
                    }, function(t) {
                      return t.children
                    }, !0)
                  }),
                    {
                      nodes: i,
                      edges: o
                    }
                }
                ,
                n._setVisibleByCollapsed = function(t) {
                  var e = t.getModel();
                  t.collapsedParent ? (t.hide(),
                    t.getEdges().forEach(function(t) {
                      t.hide()
                    }),
                    t.deepEach(function(t) {
                      t.hide(),
                        t.getEdges().forEach(function(t) {
                          t.hide()
                        })
                    })) : e.collapsed ? t.deepEach(function(t) {
                    t.hide(),
                      t.getEdges().forEach(function(t) {
                        t.hide()
                      })
                  }) : t.deepEach(function(t) {
                    t.collapsedParent && (t.hide(),
                      t.getEdges().forEach(function(t) {
                        t.hide()
                      }))
                  })
                }
                ,
                n.source = function(t) {
                  var e = this.parseSource(t);
                  this.emit("beforesource"),
                    this.set("_sourceData", t),
                    this.set("_data", e),
                    this.emit("aftersource")
                }
                ,
                n._setNodeNth = function(t, e) {
                  var n = (t = this.getItem(t)).getModel()
                    , i = t.getParent().getModel().children;
                  r.Array.remove(i, n),
                    i.splice(e, 0, n)
                }
                ,
                n.getNth = function(t) {
                  var e = (t = this.getItem(t)).getModel();
                  return t.getParent().getModel().children.indexOf(e)
                }
                ,
                n.add = function(t, e) {
                  var n, i = this.get("_dataMap")[e.parent], o = {
                    action: "add",
                    model: e
                  };
                  if ("node" === t || "guide" === t) {
                    if (this.emit("beforechange", o),
                    "node" === t) {
                      if (!i)
                        throw new Error("please set available parent Id !");
                      r.isArray(i.children) ? i.children.push(e) : i.children = [e];
                      var a = this.parseSource({
                        roots: [e]
                      });
                      this._addItems("node", a.nodes),
                        this._addItems("edge", a.edges),
                        n = this.find(e.id),
                        this._setVisibleByCollapsed(n),
                      r.isNil(e.nth) || this._setNodeNth(n, e.nth),
                        this.find(i.id).forceUpdate()
                    } else
                      this._addItems(t, [e]),
                        n = this.find(e.id);
                    return o.item = n,
                      this.emit("afterchange", o),
                      n
                  }
                  console.warn("Tree do not support add type " + t + "!")
                }
                ,
                n.update = function(t, e) {
                  var n = this;
                  if (e) {
                    var i = (t = this.getItem(t)).getModel()
                      , o = r.mix({}, i)
                      , a = {
                      action: "update",
                      item: t,
                      originModel: o,
                      updateModel: e
                    };
                    if (this.emit("beforechange", a),
                      this._updateItems([t], [e]),
                      t.isNode) {
                      if ("collapsed"in e && (e.collapsed ? t.deepEach(function(t) {
                        t.hide(),
                          t.getEdges().forEach(function(t) {
                            t.hide()
                          })
                      }) : t.deepEach(function(t) {
                        t.show(),
                          t.getInEdges().forEach(function(t) {
                            t.show()
                          })
                      }, function(t) {
                        return t.model.collapsed ? null : t.getChildren()
                      })),
                      e.parent && e.parent !== o.parent) {
                        var u = this.find(o.parent).getModel()
                          , s = this.find(e.parent).getModel()
                          , c = this.find(u.id + "-" + o.id)
                          , h = {
                          id: s.id + "-" + o.id,
                          source: s.id,
                          target: o.id
                        };
                        r.Array.remove(u.children, i),
                          s.children ? s.children.push(i) : s.children = [i],
                          this._removeItems([c]),
                          this._addItems("edge", [h]),
                          this.find(s.id).forceUpdate()
                      }
                      r.isArray(e.children) && (o.children && r.each(o.children, function(t) {
                        var e = n.find(t.id)
                          , r = [e];
                        e.getEdges().forEach(function(t) {
                          r.push(t)
                        }),
                          n._removeItems(r)
                      }),
                        r.each(e.children, function(t) {
                          var e = n.parseSource({
                            roots: [t]
                          })
                            , i = r.isNil(t.id) ? r.guid() : t.id;
                          n._addItems("node", e.nodes),
                            n._addItems("edge", e.edges),
                          !t.parent && n._addItems("edge", [{
                            id: o.id + "-" + i,
                            source: o.id,
                            target: i
                          }])
                        })),
                      r.isNil(e.nth) || this._setNodeNth(t, e.nth);
                      var l = this.find(i.parent);
                      l && l.forceUpdate()
                    }
                    return this.emit("afterchange", a),
                      this
                  }
                }
                ,
                n.remove = function(t) {
                  var e = this.get("_dataMap")
                    , n = [];
                  if ((t = this.getItem(t)) && !t.destroyed) {
                    var i = {
                      action: "remove",
                      item: t
                    };
                    if (this.emit("beforechange", i),
                      n.push(t),
                      t.getEdges().forEach(function(t) {
                        n.push(t)
                      }),
                    "node" === t.type) {
                      var o = t.getModel()
                        , a = e[o.parent];
                      t.deepEach(function(t) {
                        n.push(t),
                          t.getEdges().forEach(function(t) {
                            n.push(t)
                          })
                      }),
                        r.Array.remove(a.children, o),
                        this.find(a.id).forceUpdate()
                    }
                    return this._removeItems(r.uniq(n)),
                      this.emit("afterchange", i),
                      this
                  }
                }
                ,
                n.getRoots = function() {
                  var t = this;
                  return this.getSource().roots.map(function(e) {
                    return t.find(e.id)
                  })
                }
                ,
                n.save = function() {
                  var t = {
                    roots: r.clone(this.getSource().roots),
                    guides: this.getGuides().map(function(t) {
                      return t.getModel()
                    })
                  };
                  return 0 === t.roots.length && delete t.roots,
                  0 === t.guides.length && delete t.guides,
                    t
                }
                ,
                e
            }(i);
            t.exports = a
          }
          , function(t, e, n) {
            var r = n(22)
              , i = {
              INIT: "_initForceFit"
            };
            i.AUGMENT = {
              _initForceFit: function() {
                var t = this.get("width")
                  , e = this.get("height");
                return t || e ? t ? e ? void 0 : (this.forceFit("height"),
                  void this._bindForceEvent("height")) : (this.forceFit("width"),
                  void this._bindForceEvent("width")) : (this.forceFit(),
                  void this._bindForceEvent())
              },
              _bindForceEvent: function(t) {
                var e = this
                  , n = this._getTimer("forceFit")
                  , r = function() {
                  var r = setTimeout(function() {
                    e.forceFit(t)
                  }, 200);
                  n && clearTimeout(n),
                    e._setTimer("forceFit", r)
                };
                window.addEventListener("resize", r),
                  this.set("_windowForceResizeEvent", r)
              },
              forceFit: function(t) {
                var e = this.get("_containerDOM")
                  , n = this.get("width")
                  , i = this.get("height")
                  , o = r.getHeight(e)
                  , a = r.getWidth(e);
                return "width" === t ? (this.changeSize(a, i),
                  this) : "height" === t ? (this.changeSize(n, o),
                  this) : (this.changeSize(a, o),
                  this)
              }
            },
              t.exports = i
          }
          , function(t, e, n) {
            var r = n(22)
              , i = {
              CFG: {
                fitView: void 0,
                fitViewPadding: 10,
                minZoom: .2,
                maxZoom: 10
              }
            };
            i.AUGMENT = {
              getBBox: function() {
                var t = this.get("_itemGroup")
                  , e = this.get("_itemMap")
                  , n = t.get("children");
                return n.length > 0 ? (n = n.filter(function(t) {
                  var n = e[t.id];
                  return !!n && !1 !== n.getShapeObj().bboxCalculation
                }),
                  r.getChildrenBBox(n)) : {
                  minX: 0,
                  minY: 0,
                  maxX: this.get("width"),
                  maxY: this.get("height")
                }
              },
              getFitViewPadding: function() {
                return r.toAllPadding(this.get("fitViewPadding"))
              },
              setFitView: function(t) {
                if (!t)
                  return this;
                if ("autoZoom" === t)
                  return this.autoZoom(),
                    this;
                var e = this.getFitViewPadding()
                  , n = this.get("width")
                  , i = this.get("height")
                  , o = this.getBBox()
                  , a = o.maxX - o.minX
                  , u = o.maxY - o.minY
                  , s = {
                  x: 0,
                  y: 0,
                  width: n,
                  height: i
                }
                  , c = r.getNineBoxPosition(t, s, a, u, e)
                  , h = [1, 0, 0, 0, 1, 0, 0, 0, 1];
                r.mat3.translate(h, h, [-o.minX + c.x, -o.minY + c.y]),
                  this.updateMatrix(h)
              },
              _getZoomRatio: function(t) {
                var e = this.get("maxZoom")
                  , n = this.get("minZoom");
                return t < n && (t = n),
                t > e && (t = e),
                  t
              },
              autoZoom: function(t) {
                var e = this;
                t || (t = this.getFitViewPadding());
                var n = this.get("width")
                  , i = this.get("height")
                  , o = this.getBBox()
                  , a = r.getAutoZoomMatrix({
                  minX: 0,
                  minY: 0,
                  maxX: n,
                  maxY: i
                }, o, t, function(t) {
                  return e._getZoomRatio(t)
                });
                this.updateMatrix(a)
              },
              getZoom: function() {
                return this.getMatrix()[0]
              },
              updateMatrix: function(t) {
                var e = this.getMatrix()
                  , n = {
                  updateMatrix: t,
                  originMatrix: e
                }
                  , r = e[0] !== t[0];
                return this.emit("beforeviewportchange", n),
                r && this.emit("beforezoom", n),
                  this.setMatrix(t),
                r && this.emit("afterzoom", n),
                  this.emit("afterviewportchange", n),
                  this.draw(),
                  this
              },
              zoom: function(t, e) {
                if (!r.isNumber(t)) {
                  e = this._getZoomRatio(e);
                  var n = this.get("_rootGroup")
                    , i = r.clone(n.getMatrix())
                    , o = i[6] + i[0] * t.x - e * t.x
                    , a = i[7] + i[0] * t.y - e * t.y;
                  return i[6] = 0,
                    i[7] = 0,
                    i[0] = e,
                    i[4] = e,
                    r.mat3.translate(i, i, [o, a]),
                    this.updateMatrix(i),
                    this
                }
                var u = this.get("width")
                  , s = this.get("height");
                this.zoomByDom({
                  x: u / 2,
                  y: s / 2
                }, t)
              },
              zoomByDom: function(t, e) {
                var n = this.getPoint(t);
                return this.zoom(n, e),
                  this
              },
              translate: function(t, e) {
                var n = this.get("_rootGroup").getMatrix();
                return r.mat3.translate(n, n, [t, e]),
                  this.updateMatrix(n),
                  this
              },
              translateByDom: function(t, e) {
                var n = this.get("_rootGroup").getMatrix()[0];
                return this.translate(t / n, e / n),
                  this
              },
              getMatrix: function() {
                return this.get("_rootGroup").getMatrix()
              },
              setMatrix: function(t) {
                this.get("_rootGroup").setMatrix(t)
              },
              getPoint: function(t) {
                return this.getPointByDom(t)
              },
              getPointByDom: function(t) {
                var e = this.get("_rootGroup").getMatrix();
                return r.invertMatrix(t, e)
              },
              getPointByCanvas: function(t) {
                var e = this.get("_canvas").get("pixelRatio");
                return this.getPoint({
                  x: t.x / e,
                  y: t.y / e
                })
              },
              getPointByClient: function(t) {
                var e = this.get("_canvas").getPointByClient(t.x, t.y);
                return this.getPointByCanvas(e)
              },
              getDomPoint: function(t) {
                var e = this.get("_rootGroup").getMatrix();
                return r.applyMatrix(t, e)
              },
              getCanvasPoint: function(t) {
                var e = this.get("_canvas").get("pixelRatio")
                  , n = this.getDomPoint(t);
                return {
                  x: n.x * e,
                  y: n.y * e
                }
              },
              getClientPoint: function(t) {
                var e = this.getCanvasPoint(t)
                  , n = this.get("_canvas").getClientByPoint(e.x, e.y);
                return {
                  x: n.clientX,
                  y: n.clientY
                }
              },
              focus: function(t) {
                if (r.isString(t) && (t = this.find(t)),
                  t) {
                  var e = t.getCenter();
                  this.focusPoint(e)
                }
                return this
              },
              focusPoint: function(t) {
                var e = this.get("_rootGroup").getMatrix()
                  , n = this.get("width")
                  , r = this.get("height")
                  , i = -e[6] + n / 2 - e[0] * t.x
                  , o = -e[7] + r / 2 - e[0] * t.y;
                return this.translate(i, o),
                  this
              },
              focusPointByDom: function(t) {
                var e = this.getPoint(t);
                return this.focusPoint(e),
                  this
              }
            },
              t.exports = i
          }
          , function(t, e) {
            t.exports = {
              INIT: "_initDraw",
              AUGMENT: {
                _initDraw: function() {
                  var t = this
                    , e = this.get("_controllers").animate;
                  ["clear", "show", "hide", "change", "updatenodeposition"].forEach(function(n) {
                    e && t.on("before" + n, function(n) {
                      var r = t.get("_forcePreventAnimate")
                        , i = n ? n.affectedItemIds : void 0;
                      !0 !== r && e && e.cacheGraph("startCache", i)
                    }),
                      t.on("after" + n, function(n) {
                        var r = n ? n.affectedItemIds : void 0
                          , i = t.get("_forcePreventAnimate");
                        if (n && "changeData" === n.action) {
                          var o = t.get("fitView");
                          o && t.setFitView(o)
                        }
                        !0 !== i && e ? (e.cacheGraph("endCache", r),
                          e.run()) : t.draw()
                      })
                  })
                },
                draw: function() {
                  this.get("_canvas").draw()
                },
                animateDraw: function() {
                  this.get("_controllers").animate.run()
                }
              }
            }
          }
          , function(t, e, n) {
            var r = n(146);
            function i(t, e) {
              var n = t.getGraphicGroup()
                , i = t.getBBox()
                , o = (i.minX + i.maxX) / 2
                , a = (i.minY + i.maxY) / 2
                , u = n.getMatrix()[0];
              n.transform([["t", -o, -a], ["s", .01 / u, .01 / u], ["t", o, a]]),
                n.animate({
                  transform: [["t", -o, -a], ["s", 100 * u, 100 * u], ["t", o, a]]
                }, r.enterDuration, r.enterEasing, e)
            }
            function o(t, e) {
              var n = t.getGraphicGroup()
                , i = t.getBBox()
                , o = (i.minX + i.maxX) / 2
                , a = (i.minY + i.maxY) / 2
                , u = n.getMatrix()[0];
              n.animate({
                transform: [["t", -o, -a], ["s", .01 / u, .01 / u], ["t", o, a]]
              }, r.leaveDuration, r.leaveEasing, e)
            }
            function a(t, e) {
              t.deepEach(function(t) {
                if (t.isShape) {
                  var n = t.attr("fillOpacity")
                    , i = t.attr("strokeOpacity");
                  t.attr({
                    fillOpacity: 0,
                    strokeOpacity: 0
                  }),
                    t.animate({
                      fillOpacity: n,
                      strokeOpacity: i
                    }, r.enterDuration, r.enterEasing, e)
                }
              })
            }
            function u(t, e) {
              t.deepEach(function(t) {
                var n = t.attr("fillOpacity")
                  , i = t.attr("strokeOpacity");
                t.isShape && t.animate({
                  fillOpacity: 0,
                  strokeOpacity: 0
                }, r.leaveDuration, r.leaveEasing, function() {
                  t.attr({
                    fillOpacity: n,
                    strokeOpacity: i
                  }),
                    e()
                })
              })
            }
            t.exports = {
              enterScaleIn: function(t) {
                var e = t.item;
                t.element.isItemContainer && e.getKeyShape() && i(e)
              },
              showScaleIn: function(t) {
                var e = t.item;
                t.element.isItemContainer && e.getKeyShape() && i(e)
              },
              leaveScaleOut: function(t) {
                var e = t.item
                  , n = t.element
                  , r = t.done;
                n.isItemContainer && o(e, function() {
                  r()
                })
              },
              hideScaleOut: function(t) {
                var e = t.item
                  , n = t.element
                  , r = t.done;
                n.isItemContainer && o(e, function() {
                  r()
                })
              },
              enterFadeIn: function(t) {
                var e = t.element
                  , n = t.item;
                e.isItemContainer && n.getKeyShape() && a(e)
              },
              showFadeIn: function(t) {
                var e = t.element
                  , n = t.item;
                e.isItemContainer && n.getKeyShape() && a(e)
              },
              leaveFadeOut: function(t) {
                var e = t.element
                  , n = t.item
                  , r = t.done;
                e.isItemContainer && n.getKeyShape() && u(e, r)
              },
              hideFadeOut: function(t) {
                var e = t.element
                  , n = t.item
                  , r = t.done;
                e.isItemContainer && n.getKeyShape() && u(e, r)
              }
            }
          }
          , function(t, e, n) {
            function r(t, e, n) {
              return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : t[e] = n,
                t
            }
            var i = n(362)
              , o = n(459)
              , a = n(22)
              , u = n(146)
              , s = ["matrix", "fillStyle", "strokeStyle", "endArrow", "startArrow"]
              , c = function(t) {
              function e() {
                return t.apply(this, arguments) || this
              }
              !function(t, e) {
                t.prototype = Object.create(e.prototype),
                  t.prototype.constructor = t,
                  t.__proto__ = e
              }(e, t);
              var n = e.prototype;
              return n.getDefaultCfg = function() {
                return {
                  show: "scaleIn",
                  hide: "scaleOut",
                  enter: "scaleIn",
                  leave: "scaleOut",
                  update: function(t) {
                    var e = t.element
                      , n = t.endKeyFrame.props;
                    e.animate(function(t) {
                      for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {}
                          , i = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                          return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))),
                          i.forEach(function(e) {
                            r(t, e, n[e])
                          })
                      }
                      return t
                    }({
                      matrix: n.matrix
                    }, n.attrs), u.updateDuration, u.updateEasing)
                  },
                  graph: null,
                  startCache: {},
                  endCache: {},
                  keykeyCache: {}
                }
              }
                ,
                n._init = function() {
                  var t = this
                    , e = this.graph
                    , n = this.keykeyCache;
                  e.on("afteritemdraw", function(e) {
                    e.item.getGraphicGroup().deepEach(function(e) {
                      n[e.gid] = t._getCache(e)
                    }, !0)
                  })
                }
                ,
                n.cacheGraph = function(t, e) {
                  var n, r = this, i = this.graph;
                  n = e ? e.map(function(t) {
                    return i.find(t)
                  }) : i.getItems(),
                    this[t] = {},
                    n.forEach(function(e) {
                      e && r.cache(e, r[t], t)
                    })
                }
                ,
                n._getCache = function(t) {
                  var e = this.keykeyCache;
                  if (!a.isObject(t))
                    return e[t];
                  var n = {
                    props: {
                      matrix: a.clone(t.getMatrix()),
                      attrs: {}
                    }
                  };
                  if (t.isShape) {
                    var r = t.attr();
                    r = a.omit(r, s),
                      n.props.attrs = a.clone(r)
                  }
                  return n
                }
                ,
                n._getAnimation = function(t, e) {
                  var n = this.graph
                    , r = t.shapeObj
                    , i = this[e]
                    , u = r[e + "Animation"] || r[e + "Animate"]
                    , s = n.get("_" + e + "Animation")
                    , c = u || s || i;
                  return a.isString(c) ? o[e + a.upperFirst(c)] : c
                }
                ,
                n.cache = function(t, e, n) {
                  var r = this;
                  t.getGraphicGroup().deepEach(function(i) {
                    var o = i.gid
                      , a = "startCache" === n ? r._getCache(i) : r._getCache(i.gid);
                    a.enterAnimate = r._getAnimation(t, "enter"),
                      a.leaveAnimate = r._getAnimation(t, "leave"),
                      a.showAnimate = r._getAnimation(t, "show"),
                      a.hideAnimate = r._getAnimation(t, "hide"),
                      a.updateAnimate = r._getAnimation(t, "update"),
                      a.item = t,
                      a.element = i,
                      a.visible = i.get("visible"),
                      e[o] = a
                  }, !0)
                }
                ,
                n._compare = function() {
                  var t = this.startCache
                    , e = this.endCache
                    , n = []
                    , r = []
                    , i = []
                    , o = []
                    , u = [];
                  a.each(e, function(e, r) {
                    var a = t[r];
                    a ? a.element.get("type") === e.element.get("type") && (a.visible && e.visible ? i.push(r) : a.visible && !e.visible ? o.push(r) : !a.visible && e.visible && u.push(r)) : n.push(r)
                  }),
                    a.each(t, function(t, n) {
                      e[n] || r.push(n)
                    }),
                    this.enterElements = n,
                    this.leaveElements = r,
                    this.updateElements = i,
                    this.hideElements = o,
                    this.showElements = u
                }
                ,
                n._addTween = function() {
                  var t = this.enterElements
                    , e = this.leaveElements
                    , n = this.updateElements
                    , r = this.hideElements
                    , i = this.showElements
                    , o = this.startCache
                    , u = this.endCache;
                  t.forEach(function(t) {
                    var e = u[t]
                      , n = e.enterAnimate;
                    n && n({
                      element: e.element,
                      item: e.item,
                      endKeyFrame: e,
                      startKeyFrame: null,
                      startCache: o,
                      endCache: u,
                      done: function() {}
                    })
                  }),
                    e.forEach(function(t) {
                      var e = o[t]
                        , n = e.leaveAnimate;
                      if (n) {
                        var r = o[t].element;
                        r.isItemContainer && r.getParent().add(r),
                          n({
                            element: r,
                            item: e.item,
                            endKeyFrame: null,
                            startKeyFrame: e,
                            startCache: o,
                            endCache: u,
                            done: function() {
                              r.isItemContainer && r.remove()
                            }
                          })
                      }
                    }),
                    n.forEach(function(t) {
                      var e = u[t]
                        , n = o[t]
                        , r = e.element
                        , i = n.element
                        , s = n.props
                        , c = e.props
                        , h = e.updateAnimate;
                      s.attrs && r.attr(s.attrs),
                      a.isEqual(s.matrix, c.matrix) || r.setMatrix(s.matrix),
                        h({
                          element: r,
                          item: e,
                          endKeyFrame: e,
                          startKeyFrame: n,
                          startCache: o,
                          endCache: u,
                          done: function() {}
                        }),
                      i !== r && i.remove()
                    }),
                    r.forEach(function(t) {
                      var e = u[t]
                        , n = o[t]
                        , r = e.hideAnimate;
                      r && (e.element.show(),
                        r({
                          element: e.element,
                          item: e.item,
                          endKeyFrame: e,
                          startKeyFrame: n,
                          startCache: o,
                          endCache: u,
                          done: function() {
                            var t = e.item
                              , n = t.getGraphicGroup();
                            !t.visible && n.hide()
                          }
                        }))
                    }),
                    i.forEach(function(t) {
                      var e = u[t]
                        , n = o[t]
                        , r = e.showAnimate;
                      r && r({
                        element: e.element,
                        item: e.item,
                        endKeyFrame: e,
                        startKeyFrame: n,
                        startCache: o,
                        endCache: u,
                        done: function() {}
                      })
                    })
                }
                ,
                n.run = function() {
                  this.graph.destroyed || (this._compare(),
                    this._addTween())
                }
                ,
                e
            }(i);
            t.exports = c
          }
          , function(t, e, n) {
            function r(t, e, n) {
              return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : t[e] = n,
                t
            }
            var i = n(22)
              , o = n(460)
              , a = {
              INIT: "_initAnimate",
              CFG: {
                animate: !1
              }
            };
            a.AUGMENT = {
              _initAnimate: function() {
                var t = this.get("animate");
                if (t) {
                  var e = this.get("_controllers")
                    , n = {
                    graph: this
                  };
                  i.isPlainObject(t) && (n = function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                      var n = null != arguments[e] ? arguments[e] : {}
                        , i = Object.keys(n);
                      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                      }))),
                        i.forEach(function(e) {
                          r(t, e, n[e])
                        })
                    }
                    return t
                  }({}, n, t)),
                    e.animate = new o(n)
                }
              }
            },
              t.exports = a
          }
          , function(t, e, n) {
            var r = n(22)
              , i = {
              INIT: "_initFilter",
              CFG: {
                filters: []
              }
            };
            i.AUGMENT = {
              _initFilter: function() {
                var t = this
                  , e = this.get("filters");
                r.isFunction(e) && this.set("filters", [e]),
                  this.on("afterchange", function(n) {
                    var r = n.action;
                    e.length > 0 && "changeData" === r && !t.destroyed && t.filter()
                  })
              },
              addFilter: function(t) {
                return this.get("filters").push(t),
                  t
              },
              removeFilter: function(t) {
                var e = this.get("filters");
                this.set("filters", r.filter(e, t))
              },
              filter: function() {
                this.emit("beforefilter");
                var t = this.get("filters")
                  , e = this.getItems()
                  , n = this._getFilterItems();
                t.forEach(function(t) {
                  n = n.filter(t)
                }),
                  e.forEach(function(t) {
                    -1 === n.indexOf(t) ? t.hide() : t.show()
                  }),
                  this.draw(),
                  this.emit("afterfilter")
              },
              _getFilterItems: function() {
                return this.getItems().filter(function(t) {
                  return !1 !== t.getShapeObj().filter
                })
              }
            },
              t.exports = i
          }
          , function(t, e, n) {
            var r = n(22)
              , i = n(390)
              , o = {
              CFG: {
                modes: {
                  default: []
                },
                mode: "default",
                _eventCache: {}
              },
              INIT: "_initModes"
            };
            o.AUGMENT = {
              _initModes: function() {
                var t = this.get("mode");
                this.changeMode(t)
              },
              changeMode: function(t) {
                var e = this.get("modes");
                r.isEmpty(e) || r.isEmpty(e[t]) || (i.resetMode(e[t], this),
                  this.set("mode", t))
              },
              addBehaviour: function(t, e) {
                var n = this.get("modes");
                e = e || this.get("mode"),
                r.isEmpty(n[e]) && (n[e] = []);
                var o = n[e]
                  , a = [].concat(t);
                return r.each(a, function(t) {
                  -1 === o.indexOf(t) && o.push(t)
                }),
                  i.resetMode(n[e], this),
                  this
              },
              removeBehaviour: function(t) {
                var e = this.get("modes")
                  , n = this.get("mode")
                  , o = e[n];
                if (!r.isEmpty(o)) {
                  var a = [].concat(t);
                  return o = o.filter(function(t) {
                    return -1 === a.indexOf(t)
                  }),
                    e[n] = o,
                    i.resetMode(o, this),
                    this
                }
              },
              behaviourOn: function(t, e) {
                var n = this._eventCache;
                n[t] || (n[t] = []),
                  n[t].push(e),
                  this.on(t, e)
              },
              _off: function() {
                var t = this
                  , e = this._eventCache;
                r.each(e, function(e, n) {
                  r.each(e, function(e) {
                    t.off(n, e)
                  })
                }),
                  this._eventCache = {}
              }
            },
              t.exports = o
          }
          , function(t, e, n) {
            var r = n(362)
              , i = n(22)
              , o = {
              MOUSEMOVE: "mousemove",
              MOUSEDOWN: "mousedown",
              MOUSEUP: "mouseup",
              MOUSEENTER: "mouseenter",
              MOUSELEAVE: "mouseleave",
              CLICK: "click",
              DBLCLICK: "dblclick",
              DRAGSTART: "dragstart",
              DRAG: "drag",
              DRAGENTER: "dragenter",
              DRAGLEAVE: "dragleave",
              DRAGEND: "dragend",
              DROP: "drop",
              CONTEXTMENU: "contextmenu",
              WHEEL: "wheel",
              KEYDOWN: "keydown",
              KEYUP: "keyup",
              KEYPRESS: "keypress",
              MOUSEWHEEL: "mousewheel"
            }
              , a = [o.DBLCLICK, o.MOUSEDOWN, o.MOUSEUP, o.MOUSEENTER, o.MOUSELEAVE, o.MOUSEMOVE, o.CONTEXTMENU, o.WHEEL, o.MOUSEWHEEL]
              , u = [o.KEYDOWN, o.KEYUP, o.KEYPRESS]
              , s = function(t) {
              function e(e) {
                var n;
                return (n = t.call(this, e) || this)._domEvents = [],
                  n._initEventStates(),
                  n._registerEvents(),
                  n
              }
              !function(t, e) {
                t.prototype = Object.create(e.prototype),
                  t.prototype.constructor = t,
                  t.__proto__ = e
              }(e, t);
              var n = e.prototype;
              return n._initEventStates = function() {
                this._pressing = !1,
                  this._dragging = !1,
                  this._currentEventObj = {},
                  this._dragEventObj = {}
              }
                ,
                n._registerEvents = function() {
                  this._registerMouseEvents(),
                    this._registerKeyboardEvents()
                }
                ,
                n._registerKeyboardEvents = function() {
                  var t = this.graph
                    , e = t.getKeyboardEventWrapper()
                    , n = this._domEvents
                    , r = t.get("keyboardEnable");
                  i.each(u, function(o) {
                    n.push(i.addEventListener(e, o, function(e) {
                      var n = !0;
                      i.isFunction(r) && (n = r()),
                      n && t.emit(o, {
                        domEvent: e
                      })
                    }))
                  })
                }
                ,
                n._registerMouseEvents = function() {
                  var t = this
                    , e = this
                    , n = this.graph.getMouseEventWrapper()
                    , r = this._domEvents;
                  i.each(a, function(a) {
                    r.push(i.addEventListener(n, a, function(n) {
                      if (n.type !== o.MOUSEENTER || !n.fromElement || n.fromElement.parentNode && !function(t, e) {
                        for (var n = t.parentNode; n; ) {
                          if ("foreignObject" === n.tagName)
                            return !0;
                          n = n.parentNode
                        }
                        return !1
                      }(n.fromElement)) {
                        var r = t._currentEventObj;
                        t._oldEventObj = r,
                          t._processEventObj(n);
                        var a = t._currentEventObj;
                        e._simulateEvents(n, r, a),
                        -1 !== [o.MOUSELEAVE, o.MOUSEENTER].indexOf(n.type) && e._triggerEvent("canvas:" + n.type),
                          e._triggerEvent(n.type),
                        n.type === o.MOUSELEAVE && (t._dragging && e._triggerEvent(o.DRAGLEAVE, i.mix({}, a, {
                          item: null,
                          shape: null,
                          currentItem: t._dragEventObj.item,
                          currentShape: t._dragEventObj.shape
                        })),
                          e._initEventStates())
                      }
                    }))
                  })
                }
                ,
                n.destroy = function() {
                  var t = this._domEvents;
                  i.each(t, function(t) {
                    t && t.remove()
                  }),
                    this._domEvents = null
                }
                ,
                n._triggerEvent = function(t, e) {
                  if (e || (e = "mouseleave" === t ? this._oldEventObj : this._currentEventObj),
                  "mousedown" === t && (e.button = this._button),
                    e._type = t,
                    this.emitGraphEvent(t, e),
                  -1 === ["canvas:" + o.MOUSELEAVE, "canvas:" + o.MOUSEENTER].indexOf(t)) {
                    var n = e.shape && e.shape.eventPreFix;
                    if (-1 !== [o.DRAGSTART, o.DRAG, o.DRAGEND].indexOf(t) && (n = e.currentShape && e.currentShape.eventPreFix),
                      n) {
                      var r = n + ":" + t;
                      e._type = r,
                        i.isBoolean(e._isItemChange) ? e._isItemChange && this.emitGraphEvent(r, e) : this.emitGraphEvent(r, e)
                    }
                  }
                }
                ,
                n.emitGraphEvent = function(t, e) {
                  this.graph.emit(t, e)
                }
                ,
                n._getDistanceToPress = function(t) {
                  return Math.pow(t.clientX - this._pressX, 2) + Math.pow(t.clientY - this._pressY, 2)
                }
                ,
                n._simulateEvents = function(t, e, n) {
                  void 0 === e && (e = {}),
                  void 0 === n && (n = {});
                  var r = this._dragEventObj.item
                    , a = this._dragEventObj.shape;
                  switch (t.type) {
                    case o.MOUSEDOWN:
                      this._pressing = !0,
                        this._button = t.button,
                        this._pressX = t.clientX,
                        this._pressY = t.clientY;
                      break;
                    case o.MOUSEMOVE:
                      if (this._dragging) {
                        if (this._triggerEvent(o.DRAG, i.mix({}, n, {
                          button: this._button,
                          currentItem: r,
                          currentShape: a
                        })),
                        e.shape !== n.shape) {
                          var u = this._isItemChange(e, n);
                          e.shape && this._triggerEvent(o.DRAGLEAVE, i.mix({}, n, {
                            button: this._button,
                            item: e.item,
                            shape: e.shape,
                            toItem: n.item,
                            toShape: n.shape,
                            currentItem: r,
                            currentShape: a,
                            _isItemChange: u
                          })),
                          n.shape && this._triggerEvent(o.DRAGENTER, i.mix({}, n, {
                            button: this._button,
                            currentItem: r,
                            currentShape: a,
                            fromItem: e.item,
                            fromShape: e.shape,
                            _isItemChange: u
                          }))
                        }
                      } else
                        this._pressing && this._getDistanceToPress(t) > 9 && (this._dragging = !0,
                          this._dragEventObj = e,
                          r = this._dragEventObj.item,
                          a = this._dragEventObj.shape,
                          this._triggerEvent(o.DRAGSTART, i.mix({}, e, {
                            button: this._button,
                            currentItem: r,
                            currentShape: a
                          })));
                      if (e.shape !== n.shape) {
                        var s = this._isItemChange(e, n);
                        e.shape && this._triggerEvent(o.MOUSELEAVE, i.mix({}, n, {
                          item: e.item,
                          shape: e.shape,
                          toItem: n.item,
                          toShape: n.shape,
                          _isItemChange: s
                        })),
                        n.shape && this._triggerEvent(o.MOUSEENTER, i.mix({}, n, {
                          fromtItem: e.item,
                          fromShape: e.shape,
                          _isItemChange: s
                        }))
                      }
                      break;
                    case o.MOUSEUP:
                      !this._dragging && this._pressing ? this._triggerEvent(o.CLICK, i.mix({}, n, {
                        button: this._button
                      })) : (this._triggerEvent(o.DROP, i.mix({}, n, {
                        button: this._button,
                        currentItem: r,
                        currentShape: a
                      })),
                        this._triggerEvent(o.DRAGEND, i.mix({}, n, {
                          button: this._button,
                          currentItem: r,
                          currentShape: a
                        }))),
                        this._pressing = !1,
                        this._dragging = !1,
                        this._dragEventObj = {};
                      break;
                    default:
                      return
                  }
                }
                ,
                n._isItemChange = function(t, e) {
                  var n = t.shape
                    , r = e.shape
                    , o = n && r && (n.get("isItemChange") || r.get("isItemChange"));
                  return o ? o(r, n) : i.isObject(t.item) && i.isObject(e.item) ? t.item.id !== e.item.id : t.item !== e.item
                }
                ,
                n._processEventObj = function(t) {
                  var e = this.graph.get("_canvas")
                    , n = this._getEventObj(t, e);
                  this._currentEventObj = n
                }
                ,
                n._parsePoint = function(t, e) {
                  return this.graph.getPointByCanvas({
                    x: t,
                    y: e
                  })
                }
                ,
                n._getEventObj = function(t, e) {
                  var n = this.graph
                    , r = t.clientX
                    , i = t.clientY
                    , o = e.getPointByClient(r, i)
                    , a = this._parsePoint(o.x, o.y)
                    , u = e.getShape(o.x, o.y, t)
                    , s = n.getItemByShape(u)
                    , c = e.get("pixelRatio");
                  return {
                    item: s,
                    shape: u,
                    x: a.x,
                    y: a.y,
                    domX: o.x / c,
                    domY: o.y / c,
                    domEvent: t
                  }
                }
                ,
                e
            }(r);
            t.exports = s
          }
          , function(t, e, n) {
            var r = {}
              , i = n(464);
            r.INIT = "_initEvents",
              r.CFG = {
                keyboardEnable: !0
              },
              r.AUGMENT = {
                _initEvents: function() {
                  this.get("_controllers").events = new i({
                    graph: this
                  })
                }
              },
              t.exports = r
          }
          , function(t, e, n) {
            var r = n(22)
              , i = {};
            i.AUGMENT = {
              find: function(t) {
                return this.get("_itemMap")[t]
              },
              getNodes: function() {
                return this.get("_itemMap")._nodes
              },
              getEdges: function() {
                return this.get("_itemMap")._edges
              },
              getGroups: function() {
                return this.get("_itemMap")._groups
              },
              getGuides: function() {
                return this.get("_itemMap")._guides
              },
              getItems: function() {
                var t = this.get("_itemMap")
                  , e = [];
                return r.each(t, function(t) {
                  t.type && e.push(t)
                }),
                  e
              },
              getItemByShape: function(t) {
                return t ? this.getItem(t.id) : null
              },
              getItem: function(t) {
                var e = this.get("_itemMap");
                return r.isObject(t) ? t.destroyed && (t = e[t.id]) : t = e[t],
                  t
              }
            },
              t.exports = i
          }
          , function(t, e, n) {
            var r = n(362)
              , i = n(22)
              , o = ["color", "shape", "size", "label", "style"]
              , a = function(t) {
              function e() {
                return t.apply(this, arguments) || this
              }
              !function(t, e) {
                t.prototype = Object.create(e.prototype),
                  t.prototype.constructor = t,
                  t.__proto__ = e
              }(e, t);
              var n = e.prototype;
              return n._init = function() {
                var t = this
                  , e = {};
                i.each(o, function(n) {
                  e[n] = {},
                    t[n] = function(r) {
                      return e[n].input = r,
                        t
                    }
                }),
                  this.channels = e
              }
                ,
                n.addChannels = function(t) {
                  var e = this.channels;
                  i.each(t, function(t, n) {
                    e[n] = {
                      input: t
                    }
                  })
                }
                ,
                n.mapping = function(t) {
                  var e = this.channels;
                  i.each(e, function(e, n) {
                    i.isFunction(e.input) ? t[n] = e.input(t) : e.input && (t[n] = e.input)
                  })
                }
                ,
                e
            }(r);
            t.exports = a
          }
          , function(t, e, n) {
            var r = n(467)
              , i = {
              INIT: "_initMapper"
            };
            i.AUGMENT = {
              _initMapper: function() {
                var t = this.get("_controllers");
                t.nodeMapper = new r({
                  graph: this
                }),
                  t.edgeMapper = new r({
                    graph: this
                  }),
                  t.groupMapper = new r({
                    graph: this
                  }),
                  t.guideMapper = new r({
                    graph: this
                  })
              },
              node: function(t) {
                var e = this._getController("nodeMapper");
                return t && e.addChannels(t),
                  e
              },
              edge: function(t) {
                var e = this._getController("edgeMapper");
                return t && e.addChannels(t),
                  e
              },
              group: function(t) {
                var e = this._getController("groupMapper");
                return t && e.addChannels(t),
                  this._getController("groupMapper")
              },
              guide: function(t) {
                var e = this._getController("guideMapper");
                return t && e.addChannels(t),
                  this._getController("guideMapper")
              }
            },
              t.exports = i
          }
          , function(t, e, n) {
            var r = function(t) {
              function e() {
                return t.apply(this, arguments) || this
              }
              !function(t, e) {
                t.prototype = Object.create(e.prototype),
                  t.prototype.constructor = t,
                  t.__proto__ = e
              }(e, t);
              var n = e.prototype;
              return n.getDefaultCfg = function() {
                return {
                  graph: null,
                  auto: !0,
                  processor: null
                }
              }
                ,
                n._init = function() {
                  var t = this
                    , e = this.graph;
                  e.on("afteritemdraw", function(t) {
                    var e = t.item
                      , n = e.getKeyShape()
                      , r = e.getModel();
                    if (e.isEdge)
                      r.lineWidth = n.attr("lineWidth");
                    else if (e.isNode || e.isGroup) {
                      var i = e.getBBox();
                      r.width = i.width,
                        r.height = i.height
                    }
                  }),
                    e.on("afterchange", function(n) {
                      var r = n.action;
                      "once" === t.auto ? "changeData" === r && (e.destroyed || e.preventAnimate(function() {
                        t.layout()
                      })) : t.auto && !e.destroyed && e.preventAnimate(function() {
                        t.layout()
                      })
                    })
                }
                ,
                n.changeLayout = function(t) {
                  this.processor = t,
                    this.layout()
                }
                ,
                n.layout = function() {
                  var t = this.graph
                    , e = this.getLayoutProcessor();
                  t.emit("beforelayout");
                  var n = t.getNodes().filter(function(t) {
                    return t.isVisible()
                  }).map(function(t) {
                    return t.getModel()
                  })
                    , r = t.getEdges().filter(function(t) {
                    return t.isVisible()
                  }).map(function(t) {
                    return t.getModel()
                  })
                    , i = t.getGroups().filter(function(t) {
                    return t.isVisible()
                  }).map(function(t) {
                    return t.getModel()
                  });
                  t._executeLayout(e, n, r, i),
                    t.updateNodePosition(),
                    t.emit("afterlayout")
                }
                ,
                n.getLayoutProcessor = function() {
                  return this.processor ? this.processor : this.processer
                }
                ,
                e
            }(n(362));
            t.exports = r
          }
          , function(t, e, n) {
            var r = n(22)
              , i = n(469)
              , o = {
              CFG: {
                layout: void 0
              },
              INIT: "_initLayout"
            };
            o.AUGMENT = {
              _initLayout: function() {
                var t = this.get("_controllers")
                  , e = this._getLayoutCfg();
                e && (t.layout = new i(r.mix({
                  graph: this
                }, e)))
              },
              _getLayoutCfg: function() {
                var t = this.get("layout");
                return r.isPlainObject(t) ? t : r.isFunction(t) || r.isObject(t) ? {
                  processor: t
                } : null
              },
              layout: function() {
                return this._getController("layout").layout(),
                  this
              },
              updateNodePosition: function(t) {
                var e = this.getGuides()
                  , n = []
                  , i = [];
                return this.emit("beforeupdatenodeposition"),
                  t ? (t.forEach(function(t) {
                    t.getEdges().forEach(function(t) {
                      i.push(t)
                    });
                    var e = t.getParent();
                    e && n.push(e)
                  }),
                    i = r.uniq(i),
                    n = r.uniq(n)) : (t = this.getNodes(),
                    n = this.getGroups(),
                    i = this.getEdges()),
                  t.forEach(function(t) {
                    t.layoutUpdate()
                  }),
                  n.forEach(function(t) {
                    t.layoutUpdate()
                  }),
                  i.forEach(function(t) {
                    t.layoutUpdate()
                  }),
                  e.forEach(function(t) {
                    t.layoutUpdate()
                  }),
                  this.emit("afterupdatenodeposition"),
                  this
              },
              changeLayout: function(t) {
                return this._getController("layout").changeLayout(t),
                  this
              },
              getLayout: function() {
                return this._getController("layout").getLayoutProcessor()
              }
            },
              t.exports = o
          }
          , function(t, e, n) {
            !function(e) {
              "use strict";
              var n = function() {
                return {
                  escape: function(t) {
                    return t.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1")
                  },
                  parseExtension: t,
                  mimeType: function(e) {
                    var n = t(e).toLowerCase();
                    return function() {
                      var t = "application/font-woff";
                      return {
                        woff: t,
                        woff2: t,
                        ttf: "application/font-truetype",
                        eot: "application/vnd.ms-fontobject",
                        png: "image/png",
                        jpg: "image/jpeg",
                        jpeg: "image/jpeg",
                        gif: "image/gif",
                        tiff: "image/tiff",
                        svg: "image/svg+xml"
                      }
                    }()[n] || ""
                  },
                  dataAsUrl: function(t, e) {
                    return "data:" + e + ";base64," + t
                  },
                  isDataUrl: function(t) {
                    return -1 !== t.search(/^(data:)/)
                  },
                  canvasToBlob: function(t) {
                    return t.toBlob ? new Promise(function(e) {
                        t.toBlob(e)
                      }
                    ) : function(t) {
                      return new Promise(function(e) {
                          for (var n = window.atob(t.toDataURL().split(",")[1]), r = n.length, i = new Uint8Array(r), o = 0; o < r; o++)
                            i[o] = n.charCodeAt(o);
                          e(new Blob([i],{
                            type: "image/png"
                          }))
                        }
                      )
                    }(t)
                  },
                  resolveUrl: function(t, e) {
                    var n = document.implementation.createHTMLDocument()
                      , r = n.createElement("base");
                    n.head.appendChild(r);
                    var i = n.createElement("a");
                    return n.body.appendChild(i),
                      r.href = e,
                      i.href = t,
                      i.href
                  },
                  getAndEncode: function(t) {
                    return u.impl.options.cacheBust && (t += (/\?/.test(t) ? "&" : "?") + (new Date).getTime()),
                      new Promise(function(e) {
                          var n, r = new XMLHttpRequest;
                          if (r.onreadystatechange = function() {
                            if (4 === r.readyState)
                              if (200 === r.status) {
                                var i = new FileReader;
                                i.onloadend = function() {
                                  var t = i.result.split(/,/)[1];
                                  e(t)
                                }
                                  ,
                                  i.readAsDataURL(r.response)
                              } else
                                n ? e(n) : o("cannot fetch resource: " + t + ", status: " + r.status)
                          }
                            ,
                            r.ontimeout = function() {
                              n ? e(n) : o("timeout of 30000ms occured while fetching resource: " + t)
                            }
                            ,
                            r.responseType = "blob",
                            r.timeout = 3e4,
                            r.open("GET", t, !0),
                            r.send(),
                            u.impl.options.imagePlaceholder) {
                            var i = u.impl.options.imagePlaceholder.split(/,/);
                            i && i[1] && (n = i[1])
                          }
                          function o(t) {
                            console.error(t),
                              e("")
                          }
                        }
                      )
                  },
                  uid: function() {
                    var t = 0;
                    return function() {
                      return "u" + ("0000" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4) + t++
                    }
                  }(),
                  delay: function(t) {
                    return function(e) {
                      return new Promise(function(n) {
                          setTimeout(function() {
                            n(e)
                          }, t)
                        }
                      )
                    }
                  },
                  asArray: function(t) {
                    for (var e = [], n = t.length, r = 0; r < n; r++)
                      e.push(t[r]);
                    return e
                  },
                  escapeXhtml: function(t) {
                    return t.replace(/#/g, "%23").replace(/\n/g, "%0A")
                  },
                  makeImage: function(t) {
                    return new Promise(function(e, n) {
                        var r = new Image;
                        r.onload = function() {
                          e(r)
                        }
                          ,
                          r.onerror = n,
                          r.src = t
                      }
                    )
                  },
                  width: function(t) {
                    var n = e(t, "border-left-width")
                      , r = e(t, "border-right-width");
                    return t.scrollWidth + n + r
                  },
                  height: function(t) {
                    var n = e(t, "border-top-width")
                      , r = e(t, "border-bottom-width");
                    return t.scrollHeight + n + r
                  }
                };
                function t(t) {
                  var e = /\.([^\.\/]*?)$/g.exec(t);
                  return e ? e[1] : ""
                }
                function e(t, e) {
                  var n = window.getComputedStyle(t).getPropertyValue(e);
                  return parseFloat(n.replace("px", ""))
                }
              }()
                , r = function() {
                var t = /url\(['"]?([^'"]+?)['"]?\)/g;
                return {
                  inlineAll: function(t, n, o) {
                    return e(t) ? Promise.resolve(t).then(r).then(function(e) {
                      var r = Promise.resolve(t);
                      return e.forEach(function(t) {
                        r = r.then(function(e) {
                          return i(e, t, n, o)
                        })
                      }),
                        r
                    }) : Promise.resolve(t)
                  },
                  shouldProcess: e,
                  impl: {
                    readUrls: r,
                    inline: i
                  }
                };
                function e(e) {
                  return -1 !== e.search(t)
                }
                function r(e) {
                  for (var r, i = []; null !== (r = t.exec(e)); )
                    i.push(r[1]);
                  return i.filter(function(t) {
                    return !n.isDataUrl(t)
                  })
                }
                function i(t, e, r, i) {
                  return Promise.resolve(e).then(function(t) {
                    return r ? n.resolveUrl(t, r) : t
                  }).then(i || n.getAndEncode).then(function(t) {
                    return n.dataAsUrl(t, n.mimeType(e))
                  }).then(function(r) {
                    return t.replace(function(t) {
                      return new RegExp("(url\\(['\"]?)(" + n.escape(t) + ")(['\"]?\\))","g")
                    }(e), "$1" + r + "$3")
                  })
                }
              }()
                , i = function() {
                return {
                  resolveAll: function() {
                    return t(document).then(function(t) {
                      return Promise.all(t.map(function(t) {
                        return t.resolve()
                      }))
                    }).then(function(t) {
                      return t.join("\n")
                    })
                  },
                  impl: {
                    readAll: t
                  }
                };
                function t() {
                  return Promise.resolve(n.asArray(document.styleSheets)).then(function(t) {
                    var e = [];
                    return t.forEach(function(t) {
                      try {
                        n.asArray(t.cssRules || []).forEach(e.push.bind(e))
                      } catch (e) {
                        console.log("Error while reading CSS rules from " + t.href, e.toString())
                      }
                    }),
                      e
                  }).then(function(t) {
                    return t.filter(function(t) {
                      return t.type === CSSRule.FONT_FACE_RULE
                    }).filter(function(t) {
                      return r.shouldProcess(t.style.getPropertyValue("src"))
                    })
                  }).then(function(e) {
                    return e.map(t)
                  });
                  function t(t) {
                    return {
                      resolve: function() {
                        var e = (t.parentStyleSheet || {}).href;
                        return r.inlineAll(t.cssText, e)
                      },
                      src: function() {
                        return t.style.getPropertyValue("src")
                      }
                    }
                  }
                }
              }()
                , o = function() {
                return {
                  inlineAll: function e(i) {
                    return i instanceof Element ? function(t) {
                      var e = t.style.getPropertyValue("background");
                      return e ? r.inlineAll(e).then(function(e) {
                        t.style.setProperty("background", e, t.style.getPropertyPriority("background"))
                      }).then(function() {
                        return t
                      }) : Promise.resolve(t)
                    }(i).then(function() {
                      return i instanceof HTMLImageElement ? t(i).inline() : Promise.all(n.asArray(i.childNodes).map(function(t) {
                        return e(t)
                      }))
                    }) : Promise.resolve(i)
                  },
                  impl: {
                    newImage: t
                  }
                };
                function t(t) {
                  return {
                    inline: function(e) {
                      return n.isDataUrl(t.src) ? Promise.resolve() : Promise.resolve(t.src).then(e || n.getAndEncode).then(function(e) {
                        return n.dataAsUrl(e, n.mimeType(t.src))
                      }).then(function(e) {
                        return new Promise(function(n, r) {
                            t.onload = n,
                              t.onerror = r,
                              t.src = e
                          }
                        )
                      })
                    }
                  }
                }
              }()
                , a = {
                imagePlaceholder: void 0,
                cacheBust: !1
              }
                , u = {
                toSvg: s,
                toPng: function(t, e) {
                  return c(t, e || {}).then(function(t) {
                    return t.toDataURL()
                  })
                },
                toJpeg: function(t, e) {
                  return c(t, e = e || {}).then(function(t) {
                    return t.toDataURL("image/jpeg", e.quality || 1)
                  })
                },
                toBlob: function(t, e) {
                  return c(t, e || {}).then(n.canvasToBlob)
                },
                toPixelData: function(t, e) {
                  return c(t, e || {}).then(function(e) {
                    return e.getContext("2d").getImageData(0, 0, n.width(t), n.height(t)).data
                  })
                },
                impl: {
                  fontFaces: i,
                  images: o,
                  util: n,
                  inliner: r,
                  options: {}
                }
              };
              function s(t, e) {
                return function(t) {
                  void 0 === t.imagePlaceholder ? u.impl.options.imagePlaceholder = a.imagePlaceholder : u.impl.options.imagePlaceholder = t.imagePlaceholder,
                    void 0 === t.cacheBust ? u.impl.options.cacheBust = a.cacheBust : u.impl.options.cacheBust = t.cacheBust
                }(e = e || {}),
                  Promise.resolve(t).then(function(t) {
                    return function(t, e, r) {
                      return Promise.resolve(t).then(function(t) {
                        return t instanceof HTMLCanvasElement ? n.makeImage(t.toDataURL()) : t.cloneNode(!1)
                      }).then(function(r) {
                        return function(t, e, r) {
                          var i = t.childNodes;
                          return 0 === i.length ? Promise.resolve(e) : function(t, e, n) {
                            var r = Promise.resolve();
                            return e.forEach(function(e) {
                              r = r.then(function() {
                                return h(e, n)
                              }).then(function(e) {
                                e && t.appendChild(e)
                              })
                            }),
                              r
                          }(e, n.asArray(i), r).then(function() {
                            return e
                          })
                        }(t, r, e)
                      }).then(function(e) {
                        return function(t, e) {
                          return e instanceof Element ? Promise.resolve().then(function() {
                            !function(t, e) {
                              t.cssText ? e.cssText = t.cssText : function(t, e) {
                                n.asArray(t).forEach(function(n) {
                                  e.setProperty(n, t.getPropertyValue(n), t.getPropertyPriority(n))
                                })
                              }(t, e)
                            }(window.getComputedStyle(t), e.style)
                          }).then(function() {
                            [":before", ":after"].forEach(function(r) {
                              !function(r) {
                                var i = window.getComputedStyle(t, r)
                                  , o = i.getPropertyValue("content");
                                if ("" !== o && "none" !== o) {
                                  var a = n.uid();
                                  e.className = e.className + " " + a;
                                  var u = document.createElement("style");
                                  u.appendChild(function(t, e, r) {
                                    var i = ".0:" + e
                                      , o = r.cssText ? function(t) {
                                      var e = t.getPropertyValue("content");
                                      return t.cssText + " content: " + e + ";"
                                    }(r) : function(t) {
                                      return n.asArray(t).map(function(e) {
                                        return e + ": " + t.getPropertyValue(e) + (t.getPropertyPriority(e) ? " !important" : "")
                                      }).join("; ") + ";"
                                    }(r);
                                    return document.createTextNode(i + "{" + o + "}")
                                  }(0, r, i)),
                                    e.appendChild(u)
                                }
                              }(r)
                            })
                          }).then(function() {
                            t instanceof HTMLTextAreaElement && (e.innerHTML = t.value),
                            t instanceof HTMLInputElement && e.setAttribute("value", t.value)
                          }).then(function() {
                            e instanceof SVGElement && (e.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
                            e instanceof SVGRectElement && ["width", "height"].forEach(function(t) {
                              var n = e.getAttribute(t);
                              n && e.style.setProperty(t, n)
                            }))
                          }).then(function() {
                            return e
                          }) : e
                        }(t, e)
                      })
                    }(t, e.filter)
                  }).then(l).then(f).then(function(t) {
                    return e.bgcolor && (t.style.backgroundColor = e.bgcolor),
                    e.width && (t.style.width = e.width + "px"),
                    e.height && (t.style.height = e.height + "px"),
                    e.style && Object.keys(e.style).forEach(function(n) {
                      t.style[n] = e.style[n]
                    }),
                      t
                  }).then(function(r) {
                    return function(t, e, r) {
                      return Promise.resolve(t).then(function(t) {
                        return t.setAttribute("xmlns", "http://www.w3.org/1999/xhtml"),
                          (new XMLSerializer).serializeToString(t)
                      }).then(n.escapeXhtml).then(function(t) {
                        return '<foreignObject x="0" y="0" width="100%" height="100%">' + t + "</foreignObject>"
                      }).then(function(t) {
                        return '<svg xmlns="http://www.w3.org/2000/svg" width="' + e + '" height="' + r + '">' + t + "</svg>"
                      }).then(function(t) {
                        return "data:image/svg+xml;charset=utf-8," + t
                      })
                    }(r, e.width || n.width(t), e.height || n.height(t))
                  })
              }
              function c(t, e) {
                return s(t, e).then(n.makeImage).then(n.delay(100)).then(function(r) {
                  var i = function(t) {
                    var r = document.createElement("canvas");
                    if (r.width = e.width || n.width(t),
                      r.height = e.height || n.height(t),
                      e.bgcolor) {
                      var i = r.getContext("2d");
                      i.fillStyle = e.bgcolor,
                        i.fillRect(0, 0, r.width, r.height)
                    }
                    return r
                  }(t);
                  return i.getContext("2d").drawImage(r, 0, 0),
                    i
                })
              }
              function h(t, e, r) {
                return r || !e || e(t) ? Promise.resolve(t).then(function(t) {
                  return t instanceof HTMLCanvasElement ? n.makeImage(t.toDataURL()) : t.cloneNode(!1)
                }).then(function(n) {
                  return i(t, n, e)
                }).then(function(e) {
                  return function(t, e) {
                    return e instanceof Element ? Promise.resolve().then(function() {
                      !function(t, e) {
                        t.cssText ? e.cssText = t.cssText : function(t, e) {
                          n.asArray(t).forEach(function(n) {
                            e.setProperty(n, t.getPropertyValue(n), t.getPropertyPriority(n))
                          })
                        }(t, e)
                      }(window.getComputedStyle(t), e.style)
                    }).then(function() {
                      [":before", ":after"].forEach(function(r) {
                        !function(r) {
                          var i = window.getComputedStyle(t, r)
                            , o = i.getPropertyValue("content");
                          if ("" !== o && "none" !== o) {
                            var a = n.uid();
                            e.className = e.className + " " + a;
                            var u = document.createElement("style");
                            u.appendChild(function(t, e, r) {
                              var i = "." + t + ":" + e
                                , o = r.cssText ? function(t) {
                                var e = t.getPropertyValue("content");
                                return t.cssText + " content: " + e + ";"
                              }(r) : function(t) {
                                return n.asArray(t).map(function(e) {
                                  return e + ": " + t.getPropertyValue(e) + (t.getPropertyPriority(e) ? " !important" : "")
                                }).join("; ") + ";"
                              }(r);
                              return document.createTextNode(i + "{" + o + "}")
                            }(a, r, i)),
                              e.appendChild(u)
                          }
                        }(r)
                      })
                    }).then(function() {
                      t instanceof HTMLTextAreaElement && (e.innerHTML = t.value),
                      t instanceof HTMLInputElement && e.setAttribute("value", t.value)
                    }).then(function() {
                      e instanceof SVGElement && (e.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
                      e instanceof SVGRectElement && ["width", "height"].forEach(function(t) {
                        var n = e.getAttribute(t);
                        n && e.style.setProperty(t, n)
                      }))
                    }).then(function() {
                      return e
                    }) : e
                  }(t, e)
                }) : Promise.resolve();
                function i(t, e, r) {
                  var i = t.childNodes;
                  return 0 === i.length ? Promise.resolve(e) : function(t, e, n) {
                    var r = Promise.resolve();
                    return e.forEach(function(e) {
                      r = r.then(function() {
                        return h(e, n)
                      }).then(function(e) {
                        e && t.appendChild(e)
                      })
                    }),
                      r
                  }(e, n.asArray(i), r).then(function() {
                    return e
                  })
                }
              }
              function l(t) {
                return i.resolveAll().then(function(e) {
                  var n = document.createElement("style");
                  return t.appendChild(n),
                    n.appendChild(document.createTextNode(e)),
                    t
                })
              }
              function f(t) {
                return o.inlineAll(t).then(function() {
                  return t
                })
              }
              t.exports = u
            }()
          }
          , function(t, e, n) {
            function r(t, e, n) {
              return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : t[e] = n,
                t
            }
            var i = n(22)
              , o = n(147)
              , a = n(471)
              , u = function() {
              function t(t) {
                this.options = function(t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {}
                      , i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                      return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))),
                      i.forEach(function(e) {
                        r(t, e, n[e])
                      })
                  }
                  return t
                }({
                  graph: null,
                  width: null,
                  height: null,
                  canvas: null,
                  beforeTransform: function() {},
                  afterTransform: function() {},
                  drawCount: 0
                }, t)
              }
              var e = t.prototype;
              return e.getCanvas = function() {
                var t = this.options
                  , e = t.width
                  , n = t.height
                  , r = t.canvas;
                if (!r) {
                  var a = i.createDOM("<canvas></canvas>");
                  r = new o.Canvas({
                    containerDOM: a,
                    width: e,
                    height: n
                  })
                }
                return r.drawCount || (r.drawCount = 0),
                  r
              }
                ,
                e.drawInner = function(t, e) {
                  var n = this.options.graph
                    , r = n.getCanvas()
                    , i = n.get("renderer")
                    , o = t.drawCount;
                  if ("svg" === i) {
                    var u = [];
                    r.deepEach(function(t) {
                      "dom" === t.get("type") && u.push(t)
                    }),
                      u.length > 0 ? u.forEach(function(n) {
                        n.domImageOnload = !1;
                        var r = n.get("el")
                          , i = n.attr("width")
                          , s = n.attr("height");
                        a.toPng(r, {
                          width: i,
                          height: s
                        }).then(function(r) {
                          var i = new Image;
                          i.src = r,
                            i.onload = function() {
                              if (o === t.drawCount - 1) {
                                n.domImage = i,
                                  n.domImageOnload = !0;
                                for (var r = 0; r < u.length; r++) {
                                  var a = u[r];
                                  if (!a.domImageOnload || a.get("destroyed"))
                                    break;
                                  a.domImageOnload && r === u.length - 1 && e()
                                }
                              }
                            }
                        })
                      }) : e()
                  } else
                    e();
                  t.drawCount += 1
                }
                ,
                e.toCanvas = function() {
                  var t = this.options
                    , e = t.graph
                    , n = t.width
                    , r = t.height
                    , o = t.beforeTransform
                    , a = t.afterTransform
                    , u = this.getCanvas()
                    , s = e.getBBox()
                    , c = i.clone(e.getMatrix())
                    , h = e.getFitViewPadding()
                    , l = e.getCanvas()
                    , f = i.getAutoZoomMatrix({
                    minX: 0,
                    minY: 0,
                    maxX: n,
                    maxY: r
                  }, s, h);
                  return this.drawInner(u, function() {
                    var t = l.get("children");
                    u.set("children", t),
                      o(f, c),
                      e.setMatrix(f),
                      u.draw(),
                      e.setMatrix(c),
                      a(f, c)
                  }),
                    u.matrix = f,
                    u.get("el")
                }
                ,
                t
            }();
            t.exports = u
          }
          , function(t, e, n) {
            var r = n(22)
              , i = function(t) {
              function e(e) {
                var n = {
                  type: "guide",
                  isGuide: !0,
                  zIndex: 4
                };
                return r.mix(n, e),
                t.call(this, n) || this
              }
              return function(t, e) {
                t.prototype = Object.create(e.prototype),
                  t.prototype.constructor = t,
                  t.__proto__ = e
              }(e, t),
                e
            }(n(371));
            t.exports = i
          }
          , function(t, e, n) {
            var r = n(22)
              , i = function(t) {
              function e(e) {
                var n = {
                  type: "group",
                  isNode: !1,
                  isGroup: !0,
                  zIndex: 1
                };
                return r.mix(n, e),
                t.call(this, n) || this
              }
              !function(t, e) {
                t.prototype = Object.create(e.prototype),
                  t.prototype.constructor = t,
                  t.__proto__ = e
              }(e, t);
              var n = e.prototype;
              return n._beforeDraw = function() {
                this.deepEach(function(t, e) {
                  e && (t.zIndex = e.zIndex + 1),
                    t.updateCollapsedParent(),
                    t.collapsedParent ? t.hide() : t.show()
                }),
                  this.getInnerEdges().forEach(function(t) {
                    t.linkedItemVisible() ? t.show() : t.hide()
                  }),
                  t.prototype._beforeDraw.call(this)
              }
                ,
                n.updatePosition = function() {}
                ,
                n._shouldDraw = function() {
                  return !0
                }
                ,
                n.getCrossEdges = function() {
                  var t = []
                    , e = this.getInnerEdges();
                  this.deepEach(function(e) {
                    t.push(e.id)
                  });
                  var n = e.filter(function(e) {
                    var n = e.getModel();
                    return -1 === t.indexOf(n.source) || -1 === t.indexOf(n.target)
                  });
                  return r.uniq(n)
                }
                ,
                n.getInnerEdges = function() {
                  var t = [];
                  return this.deepEach(function(e) {
                    e.getEdges().forEach(function(e) {
                      t.push(e)
                    })
                  }),
                    r.uniq(t)
                }
                ,
                n.getChildrenBBox = function() {
                  var t = this.getChildren().map(function(t) {
                    return t.getGraphicGroup()
                  });
                  return r.getChildrenBBox(t)
                }
                ,
                e
            }(n(388));
            t.exports = i
          }
          , function(t, e, n) {
            function r(t, e, n) {
              return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : t[e] = n,
                t
            }
            var i = n(22)
              , o = function(t) {
              function e(e) {
                var n = {
                  type: "edge",
                  isEdge: !0,
                  zIndex: 2
                };
                return i.mix(n, e),
                t.call(this, n) || this
              }
              !function(t, e) {
                t.prototype = Object.create(e.prototype),
                  t.prototype.constructor = t,
                  t.__proto__ = e
              }(e, t);
              var n = e.prototype;
              return n._init = function() {
                t.prototype._init.call(this)
              }
                ,
                n._beforeDraw = function() {
                  var e = this.model
                    , n = this.itemMap;
                  i.isObject(e.source) ? this.source = e.source : this.source = n[e.source],
                    i.isObject(e.target) ? this.target = e.target : this.target = n[e.target],
                    t.prototype._beforeDraw.call(this)
                }
                ,
                n._afterDraw = function() {
                  this.linkedItemVisible() || this.hide(),
                    this._addArrow(),
                    t.prototype._afterDraw.call(this)
                }
                ,
                n._addArrow = function() {
                  var t = this.model
                    , e = this.keyShape;
                  if ("path" === e.get("type")) {
                    var n = this.shapeObj
                      , r = e.attr("endArrow")
                      , i = e.attr("startArrow")
                      , o = t.endArrow || r
                      , a = t.startArrow || i;
                    i && e.attr("startArrow", !1),
                    r && e.attr("endArrow", !1),
                    o && this._drawArrow(n.endArrow, "end"),
                    a && this._drawArrow(n.startArrow, "start")
                  }
                }
                ,
                n._drawArrow = function(t, e) {
                  var n = t.path
                    , o = t.shorten
                    , a = t.tangent
                    , u = t.ratio
                    , s = t.style;
                  a = a(this),
                    o = o(this),
                    n = n(this),
                    s = s(this),
                    u = u();
                  var c = this.group
                    , h = this.keyShape
                    , l = i.parsePathString(h.attr("path"))
                    , f = l[l.length - 1]
                    , d = l[0]
                    , p = h.getPoint(u);
                  if (p && !isNaN(p.x)) {
                    var g = c.addShape("path", {
                      attrs: function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                          var n = null != arguments[e] ? arguments[e] : {}
                            , i = Object.keys(n);
                          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                          }))),
                            i.forEach(function(e) {
                              r(t, e, n[e])
                            })
                        }
                        return t
                      }({
                        path: n
                      }, s)
                    })
                      , m = a[1][0] - a[0][0]
                      , v = a[1][1] - a[0][1]
                      , y = o / Math.sqrt(m * m + v * v)
                      , x = [-m * y, -v * y]
                      , b = 0
                      , w = Math.atan(m / v);
                    0 === v && m < 0 ? b = Math.PI : m > 0 && v > 0 ? b = Math.PI / 2 - w : m < 0 && v < 0 ? b = -Math.PI / 2 - w : m >= 0 && v < 0 ? b = -w - Math.PI / 2 : m <= 0 && v > 0 && (b = Math.PI / 2 - w),
                      g.rotate(b),
                      g.translate(p.x, p.y),
                      "end" === e ? (f[f.length - 1] = x[1] + p.y,
                        f[f.length - 2] = x[0] + p.x) : (d[d.length - 1] = x[1] + p.y,
                        d[d.length - 2] = x[0] + p.x),
                      h.attr("path", l),
                      this[e + "Arrow"] = g
                  }
                }
                ,
                n._getControlPoints = function() {
                  var t = this.model.controlPoints;
                  return i.isArray(t) ? t : []
                }
                ,
                n._shouldDraw = function() {
                  return t.prototype._shouldDraw.call(this) && this.linkedItemVisible()
                }
                ,
                n._getPoint = function(t) {
                  if (t.isItem) {
                    var e = t.getBBox();
                    return {
                      x: e.centerX,
                      y: e.centerY
                    }
                  }
                  return {
                    x: t.x,
                    y: t.y
                  }
                }
                ,
                n.linkedItemVisible = function() {
                  var t = this.source
                    , e = this.target;
                  return i.isPlainObject(t) || i.isPlainObject(e) || t.isVisible() || e.isVisible() || t.collapsedParent !== e.collapsedParent
                }
                ,
                n.getSource = function() {
                  var t = this.source
                    , e = t.collapsedParent
                    , n = this.itemMap;
                  return e ? n[e.id] : t
                }
                ,
                n.getTarget = function() {
                  var t = this.target
                    , e = t.collapsedParent
                    , n = this.itemMap;
                  return e ? n[e.id] : t
                }
                ,
                n.getPoints = function() {
                  var t = this.getSource()
                    , e = this.getTarget()
                    , n = this.model
                    , r = this._getControlPoints()
                    , o = this._getPoint(t)
                    , a = this._getPoint(e)
                    , u = [o].concat(r).concat([a])
                    , s = u.length;
                  if (t.isItem) {
                    var c = i.isNumber(this.model.sourceAnchor) && t.id === n.source ? this.model.sourceAnchor : u[1]
                      , h = t.getLinkPoints(c);
                    u[0] = h[0]
                  }
                  if (e.isItem) {
                    var l = i.isNumber(this.model.targetAnchor) && e.id === n.target ? this.model.targetAnchor : u[s - 2]
                      , f = e.getLinkPoints(l);
                    u[s - 1] = f[0]
                  }
                  return u
                }
                ,
                n.destroy = function() {
                  var e = this.itemMap
                    , n = this.model
                    , r = e[n.source]
                    , o = e[n.target];
                  r && r.isItem && i.Array.remove(r.edges, this),
                  o && o.isItem && i.Array.remove(o.edges, this),
                    t.prototype.destroy.call(this)
                }
                ,
                e
            }(n(371));
            t.exports = o
          }
          , function(t, e, n) {
            t.exports = {
              Node: n(388),
              Edge: n(475),
              Group: n(474),
              Guide: n(473)
            }
          }
          , function(t, e, n) {
            var r;
            /*!
     * EventEmitter v5.2.5 - git.io/ee
     * Unlicense - http://unlicense.org/
     * Oliver Caldwell - http://oli.me.uk/
     * @preserve
     */
            !function(e) {
              "use strict";
              function i() {}
              var o = i.prototype
                , a = e.EventEmitter;
              function u(t, e) {
                for (var n = t.length; n--; )
                  if (t[n].listener === e)
                    return n;
                return -1
              }
              function s(t) {
                return function() {
                  return this[t].apply(this, arguments)
                }
              }
              o.getListeners = function(t) {
                var e, n, r = this._getEvents();
                if (t instanceof RegExp)
                  for (n in e = {},
                    r)
                    r.hasOwnProperty(n) && t.test(n) && (e[n] = r[n]);
                else
                  e = r[t] || (r[t] = []);
                return e
              }
                ,
                o.flattenListeners = function(t) {
                  var e, n = [];
                  for (e = 0; e < t.length; e += 1)
                    n.push(t[e].listener);
                  return n
                }
                ,
                o.getListenersAsObject = function(t) {
                  var e, n = this.getListeners(t);
                  return n instanceof Array && ((e = {})[t] = n),
                  e || n
                }
                ,
                o.addListener = function(t, e) {
                  if (!function t(e) {
                    return "function" == typeof e || e instanceof RegExp || !(!e || "object" != typeof e) && t(e.listener)
                  }(e))
                    throw new TypeError("listener must be a function");
                  var n, r = this.getListenersAsObject(t), i = "object" == typeof e;
                  for (n in r)
                    r.hasOwnProperty(n) && -1 === u(r[n], e) && r[n].push(i ? e : {
                      listener: e,
                      once: !1
                    });
                  return this
                }
                ,
                o.on = s("addListener"),
                o.addOnceListener = function(t, e) {
                  return this.addListener(t, {
                    listener: e,
                    once: !0
                  })
                }
                ,
                o.once = s("addOnceListener"),
                o.defineEvent = function(t) {
                  return this.getListeners(t),
                    this
                }
                ,
                o.defineEvents = function(t) {
                  for (var e = 0; e < t.length; e += 1)
                    this.defineEvent(t[e]);
                  return this
                }
                ,
                o.removeListener = function(t, e) {
                  var n, r, i = this.getListenersAsObject(t);
                  for (r in i)
                    i.hasOwnProperty(r) && -1 !== (n = u(i[r], e)) && i[r].splice(n, 1);
                  return this
                }
                ,
                o.off = s("removeListener"),
                o.addListeners = function(t, e) {
                  return this.manipulateListeners(!1, t, e)
                }
                ,
                o.removeListeners = function(t, e) {
                  return this.manipulateListeners(!0, t, e)
                }
                ,
                o.manipulateListeners = function(t, e, n) {
                  var r, i, o = t ? this.removeListener : this.addListener, a = t ? this.removeListeners : this.addListeners;
                  if ("object" != typeof e || e instanceof RegExp)
                    for (r = n.length; r--; )
                      o.call(this, e, n[r]);
                  else
                    for (r in e)
                      e.hasOwnProperty(r) && (i = e[r]) && ("function" == typeof i ? o.call(this, r, i) : a.call(this, r, i));
                  return this
                }
                ,
                o.removeEvent = function(t) {
                  var e, n = typeof t, r = this._getEvents();
                  if ("string" === n)
                    delete r[t];
                  else if (t instanceof RegExp)
                    for (e in r)
                      r.hasOwnProperty(e) && t.test(e) && delete r[e];
                  else
                    delete this._events;
                  return this
                }
                ,
                o.removeAllListeners = s("removeEvent"),
                o.emitEvent = function(t, e) {
                  var n, r, i, o, a = this.getListenersAsObject(t);
                  for (o in a)
                    if (a.hasOwnProperty(o))
                      for (n = a[o].slice(0),
                             i = 0; i < n.length; i++)
                        !0 === (r = n[i]).once && this.removeListener(t, r.listener),
                        r.listener.apply(this, e || []) === this._getOnceReturnValue() && this.removeListener(t, r.listener);
                  return this
                }
                ,
                o.trigger = s("emitEvent"),
                o.emit = function(t) {
                  var e = Array.prototype.slice.call(arguments, 1);
                  return this.emitEvent(t, e)
                }
                ,
                o.setOnceReturnValue = function(t) {
                  return this._onceReturnValue = t,
                    this
                }
                ,
                o._getOnceReturnValue = function() {
                  return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
                }
                ,
                o._getEvents = function() {
                  return this._events || (this._events = {})
                }
                ,
                i.noConflict = function() {
                  return e.EventEmitter = a,
                    i
                }
                ,
              void 0 === (r = function() {
                return i
              }
                .call(e, n, e, t)) || (t.exports = r)
            }("undefined" != typeof window ? window : this || {})
          }
          , function(t, e, n) {
            var r = n(22)
              , i = function(t) {
              !function(t, e) {
                t.prototype = Object.create(e.prototype),
                  t.prototype.constructor = t,
                  t.__proto__ = e
              }(n, t);
              var e = n.prototype;
              function n(e) {
                var n, i = (n = t.call(this) || this).getDefaultCfg();
                return n._cfg = r.mix({}, i, e),
                  n
              }
              return e.getDefaultCfg = function() {
                return {}
              }
                ,
                e.get = function(t) {
                  return this._cfg[t]
                }
                ,
                e.set = function(t, e) {
                  this._cfg[t] = e
                }
                ,
                e.destroy = function() {
                  this._cfg = {},
                    this.removeAllListeners(),
                    this.destroyed = !0
                }
                ,
                n
            }(n(477));
            t.exports = i
          }
          , function(t, e, n) {
            var r = n(22)
              , i = n(147)
              , o = function() {};
            r.augment(o, {
              drawInner: function(t) {
                var e = r.clone(this.getTotalMatrix())
                  , n = this._attrs
                  , i = n.x
                  , o = n.y
                  , a = n.width
                  , u = n.height;
                t.setTransform(e[0], e[1], e[3], e[4], e[6], e[7]),
                  t.drawImage(this.domImage, i, o, a, u)
              }
            }),
              r.mixin(i.Dom, [o]),
              t.exports = o
          }
          , function(t, e, n) {
            var r = n(22)
              , i = n(147)
              , o = function() {};
            r.augment(o, {
              hasClass: function(t) {
                var e = this.get("class");
                return !(!e || -1 === e.indexOf(t))
              }
            }),
              r.mixin(i.Shape, [o]),
              t.exports = o
          }
          , function(t, e, n) {
            var r = n(147)
              , i = n(22)
              , o = function() {};
            i.augment(o, {
              findByClass: function(t) {
                var e = [];
                return this.deepEach(function(n) {
                  n.hasClass(t) && e.push(n)
                }),
                  e
              },
              hasClass: function(t) {
                var e = this.get("class");
                return !(!e || -1 === e.indexOf(t))
              },
              deepEach: function(t, e) {
                i.traverseTree(this, t, function(t) {
                  return t.get("children")
                }, e)
              },
              sort: function() {
                var t = this.get("children");
                this.set("children", i.radixSort(t, function(t) {
                  return t.get("zIndex")
                }))
              },
              sortBy: function(t) {
                var e = this.get("children");
                this.set("children", i.radixSort(e, t))
              },
              clear: function(t) {
                for (var e = this._cfg.children, n = e.length - 1; n >= 0; n--)
                  e[n].remove(t);
                return this._cfg.children = [],
                  this
              }
            }),
              i.mixin(r.Group, [o]),
              t.exports = o
          }
          , function(t, e, n) {
            n(153).registerGuide("common", {
              draw: function() {
                console.warn("do not have this guide, please register one")
              }
            })
          }
          , function(t, e, n) {
            t.exports = {
              common: n(482)
            }
          }
          , function(t, e, n) {
            function r(t, e, n) {
              return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : t[e] = n,
                t
            }
            var i = n(153)
              , o = n(22)
              , a = n(146);
            i.registerGroup("common", {
              draw: function(t) {
                return t.getModel().collapsed ? this.drawCollapsed(t) : this.drawExpanded(t)
              },
              defaultWidth: 184,
              defaultHeight: 40,
              getLabel: function(t) {
                return t.getModel().label
              },
              drawLabel: function(t, e, n) {
                var r = this.getLabel(t);
                if (r) {
                  var i = t.getGraphicGroup()
                    , u = [8, 8];
                  e += u[0],
                    n += u[1];
                  var s = t.getModel()
                    , c = s.labelOffsetX
                    , h = s.labelOffsetY
                    , l = s.labelRotate;
                  e = c ? c + e : e,
                    n = h ? h + n : n;
                  var f = o.mix(!0, {}, a.labelStyle, {
                    x: e,
                    y: n,
                    textAlign: "left",
                    textBaseline: "top"
                  });
                  o.isObject(r) ? o.mix(f, r) : f.text = r;
                  var d = i.addShape("text", {
                    class: "label",
                    attrs: f
                  });
                  if (l) {
                    var p = d.getBBox()
                      , g = (p.maxX + p.minX) / 2
                      , m = (p.maxY + p.minY) / 2;
                    d.transform([["t", -g, -m], ["r", l, l], ["t", g, m]])
                  }
                }
              },
              drawKeyShape: function(t, e) {
                var n = e.x
                  , r = e.y
                  , i = e.width
                  , u = e.height
                  , s = t.getModel()
                  , c = t.getGraphicGroup()
                  , h = o.mix({}, a.groupStyle, s.style)
                  , l = o.getRectPath(n, r, i, u, h.radius);
                return t.lastChildrenBox = e,
                  c.addShape("path", {
                    attrs: o.mix({}, h, {
                      path: l
                    })
                  })
              },
              getChildrenBBox: function(t) {
                var e = function(t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {}
                      , i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                      return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))),
                      i.forEach(function(e) {
                        r(t, e, n[e])
                      })
                  }
                  return t
                }({}, t.lastChildrenBox)
                  , n = t.getModel();
                if (t.getChildren().length > 0) {
                  var i = t.getChildrenBBox();
                  e.x = i.minX - a.groupBackgroundPadding[3],
                    e.y = i.minY - a.groupBackgroundPadding[0],
                    e.width = i.maxX - i.minX + a.groupBackgroundPadding[3] + a.groupBackgroundPadding[1],
                    e.height = i.maxY - i.minY + a.groupBackgroundPadding[0] + a.groupBackgroundPadding[2]
                } else
                  e.width = this.defaultWidth,
                    e.height = this.defaultHeight;
                return o.isNil(e.x) && !o.isNil(n.x) && (e.x = n.x),
                o.isNil(e.y) && !o.isNil(n.y) && (e.y = n.y),
                  e
              },
              drawExpanded: function(t) {
                var e = this.getChildrenBBox(t)
                  , n = this.drawKeyShape(t, e);
                return this.drawLabel(t, e.x, e.y),
                  n
              },
              drawCollapsed: function(t) {
                var e = this.getChildrenBBox(t);
                e.width = this.defaultWidth,
                  e.height = this.defaultHeight;
                var n = this.drawKeyShape(t, e);
                return this.drawLabel(t, e.x, e.y),
                  n
              },
              anchor: {
                intersectBox: "rect"
              }
            })
          }
          , function(t, e, n) {
            t.exports = {
              common: n(484)
            }
          }
          , function(t, e, n) {
            function r(t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {}
                  , r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                  return Object.getOwnPropertyDescriptor(n, t).enumerable
                }))),
                  r.forEach(function(e) {
                    i(t, e, n[e])
                  })
              }
              return t
            }
            function i(t, e, n) {
              return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : t[e] = n,
                t
            }
            var o = n(153)
              , a = n(22)
              , u = n(146)
              , s = {
              path: function(t) {
                var e = t.getKeyShape().attr("lineWidth")
                  , n = 10 * (e = e > 3 ? e : 3) / 3
                  , r = 4 * e / 3
                  , i = 4 * e;
                return [["M", -n, r], ["L", 0, 0], ["L", -n, -r], ["A", i, i, 0, 0, 1, -n, r], ["Z"]]
              },
              shorten: function(t) {
                var e = t.getKeyShape().attr("lineWidth");
                return 3.1 * (e > 3 ? e : 3)
              },
              style: function(t) {
                var e = t.getKeyShape().attr();
                return {
                  fillOpacity: e.strokeOpacity,
                  fill: e.stroke
                }
              }
            };
            o.registerEdge("common", {
              draw: function(t) {
                var e = this.drawKeyShape(t);
                return this.drawLabel(t, e),
                  e
              },
              drawKeyShape: function(t) {
                var e = t.getGraphicGroup()
                  , n = this.getStyle(t)
                  , r = this.getPath(t);
                return e.addShape("path", {
                  attrs: a.mix({}, n, {
                    path: r
                  })
                })
              },
              getStyle: function(t) {
                var e = t.getModel();
                return a.mix(!0, {}, {
                  stroke: e.color || "#A3B1BF",
                  strokeOpacity: .92,
                  lineAppendWidth: 4,
                  lineWidth: e.size || 1
                }, e.style)
              },
              getPath: function(t) {
                var e = t.getPoints();
                return a.pointsToPolygon(e)
              },
              getLabel: function(t) {
                return t.getModel().label
              },
              getDefaultLabelRectStyle: function() {
                return {
                  fill: "white"
                }
              },
              getDefaultLabelRectPadding: function() {
                return a.toAllPadding([4, 8])
              },
              drawLabel: function(t, e) {
                var n = this.getLabel(t)
                  , r = t.getGraphicGroup()
                  , i = t.getModel()
                  , o = i.labelOffsetX
                  , s = i.labelOffsetY
                  , c = i.labelRotate;
                if (n) {
                  var h = e.getPoint(.5);
                  if (!h)
                    return;
                  h.x = o ? h.x + o : h.x,
                    h.y = s ? h.y + s : h.y;
                  var l = a.mix(!0, {}, u.labelStyle, h);
                  a.isObject(n) ? a.mix(l, n) : l.text = n,
                    n = r.addShape("text", {
                      class: "label",
                      attrs: l
                    });
                  var f = this.getDefaultLabelRectPadding(t)
                    , d = this.getDefaultLabelRectStyle(t)
                    , p = n.getBBox()
                    , g = i.labelRectStyle ? a.mix({}, d, i.labelRectStyle) : d
                    , m = r.addShape("rect", {
                    attrs: a.mix({}, g, {
                      x: p.minX - f[3],
                      y: p.minY - f[0],
                      width: p.maxX - p.minX + f[1] + f[3],
                      height: p.maxY - p.minY + f[0] + f[2]
                    })
                  });
                  if (c) {
                    var v = (p.maxX + p.minX) / 2
                      , y = (p.maxY + p.minY) / 2;
                    n.transform([["t", -v, -y], ["r", c, c], ["t", v, y]]),
                      m.transform([["t", -v, -y], ["r", c, c], ["t", v, y]])
                  }
                  a.toFront(n)
                }
              },
              startArrow: r({}, s, {
                tangent: function(t) {
                  return t.getKeyShape().getStartTangent()
                },
                ratio: function() {
                  return 0
                }
              }),
              endArrow: r({}, s, {
                tangent: function(t) {
                  return t.getKeyShape().getEndTangent()
                },
                ratio: function() {
                  return 1
                }
              })
            })
          }
          , function(t, e, n) {
            t.exports = {
              common: n(486)
            }
          }
          , function(t, e, n) {
            var r = n(153)
              , i = n(22);
            r.registerNode("html", {
              getHtml: function(t) {
                return t.getModel().html
              },
              cssSize: !0,
              draw: function(t) {
                var e = i.createDOM('<div class="g6-html-node-container"></div>')
                  , n = t.getGraphicGroup()
                  , r = t.getGraph();
                if ("svg" !== r.get("renderer"))
                  throw new Error("please use svg renderer draw html element !");
                var o = r.getGraphContainer()
                  , a = this.getSize(t)
                  , u = this.getStyle(t)
                  , s = this.cssSize
                  , c = this.getHtml(t);
                c = i.createDOM(c),
                  e.css({
                    position: "absolute",
                    padding: "0px",
                    margin: "0px"
                  }),
                  e.appendChild(c),
                  o.appendChild(e),
                s && (a[0] = e.width(),
                  a[1] = e.height());
                var h = -a[0] / 2
                  , l = -a[1] / 2
                  , f = a[0]
                  , d = a[1]
                  , p = n.addShape("rect", {
                  attrs: i.mix({}, u, {
                    x: h,
                    y: l,
                    width: f,
                    height: d
                  })
                });
                return n.addShape("dom", {
                  attrs: i.mix({
                    x: h,
                    y: l,
                    width: f,
                    height: d,
                    html: e
                  })
                }),
                  p
              }
            })
          }
          , function(t, e, n) {
            var r = n(153)
              , i = n(22)
              , o = n(146);
            r.registerNode("common", {
              draw: function(t) {
                var e = t.getGraphicGroup()
                  , n = this.drawLabel(t)
                  , r = this.drawKeyShape(t);
                return n && i.toFront(n, e),
                  r
              },
              getSize: function(t) {
                var e = t.getModel().size;
                return i.isArray(e) ? e : i.isNumber(e) ? [e, e] : [o.defaultNodeSize, o.defaultNodeSize]
              },
              getStyle: function(t) {
                var e = t.getModel();
                return i.mix(!0, {
                  lineWidth: 1,
                  fill: e.color || "#40a9ff",
                  stroke: e.color || "#096dd9",
                  fillOpacity: .92
                }, e.style)
              },
              getLabel: function(t) {
                return t.getModel().label
              },
              drawKeyShape: function(t) {
                var e = t.getGraphicGroup()
                  , n = this.getStyle(t)
                  , r = this.getPath(t);
                return e.addShape("path", {
                  attrs: i.mix({}, n, {
                    path: r
                  })
                })
              },
              drawLabel: function(t) {
                var e = t.getGraphicGroup()
                  , n = this.getLabel(t)
                  , r = t.getModel()
                  , a = r.labelOffsetX
                  , u = r.labelOffsetY
                  , s = r.labelRotate;
                if (!i.isNil(n)) {
                  var c = i.mix(!0, {}, o.labelStyle, {
                    x: a || 0,
                    y: u || 0
                  });
                  i.isObject(n) ? i.mix(c, n) : c.text = n;
                  var h = e.addShape("text", {
                    class: "label",
                    attrs: c
                  });
                  return s && h.rotate(s),
                    h
                }
              },
              getPath: function(t) {
                var e = this.getSize(t);
                return i.getEllipsePath(0, 0, e[0] / 2, e[1] / 2)
              }
            })
          }
          , function(t, e, n) {
            t.exports = {
              common: n(489),
              html: n(488)
            }
          }
          , function(t, e, n) {
            var r = n(448)
              , i = n(152)
              , o = {
              getAutoZoomMatrix: function(t, e, n, i) {
                var o = [1, 0, 0, 0, 1, 0, 0, 0, 1]
                  , a = t.maxX - t.minX
                  , u = t.maxY - t.minY
                  , s = (e.maxX + e.minX) / 2
                  , c = (e.maxY + e.minY) / 2
                  , h = a - n[1] - n[3]
                  , l = u - n[0] - n[2]
                  , f = e.maxX - e.minX
                  , d = e.maxY - e.minY
                  , p = Math.min(l / d, h / f);
                return i && (p = i(p)),
                  r.mat3.translate(o, o, [-s, -c]),
                  r.mat3.scale(o, o, [p, p]),
                  r.mat3.translate(o, o, [a / 2, u / 2]),
                  o
              },
              getNineBoxPosition: function(t, e, n, r, i) {
                var o = {};
                switch (t) {
                  case "tl":
                    o.y = e.x + i[0],
                      o.x = e.y + i[3];
                    break;
                  case "lc":
                    o.y = (e.height - r) / 2,
                      o.x = i[3];
                    break;
                  case "bl":
                    o.y = e.height - r - i[2],
                      o.x = i[3];
                    break;
                  case "cc":
                    o.y = (e.height - r) / 2,
                      o.x = (e.width - n) / 2;
                    break;
                  case "tc":
                    o.y = i[0],
                      o.x = (e.width - n) / 2;
                    break;
                  case "tr":
                    o.y = i[0],
                      o.x = e.width - n - i[1];
                    break;
                  case "rc":
                    o.y = (e.height - r) / 2,
                      o.x = e.width - n - i[1];
                    break;
                  case "br":
                    o.y = e.height - r - i[2],
                      o.x = e.width - n - i[1];
                    break;
                  case "bc":
                    o.y = e.height - r - i[2],
                      o.x = (e.width - n) / 2;
                    break;
                  default:
                    o.y = e.x + i[0],
                      o.x = e.y + i[3]
                }
                return o.x += e.x,
                  o.y += e.y,
                  o
              },
              getTotalBBox: function(t) {
                var e = 1 / 0
                  , n = -1 / 0
                  , r = 1 / 0
                  , i = -1 / 0;
                return t.forEach(function(t) {
                  t.minX < e && (e = t.minX),
                  t.maxX > n && (n = t.maxX),
                  t.minY < r && (r = t.minY),
                  t.maxY > i && (i = t.maxY)
                }),
                  {
                    minX: e,
                    minY: r,
                    maxX: n,
                    maxY: i,
                    width: n - e,
                    height: i - r
                  }
              },
              getChildrenBBox: function(t) {
                var e = 1 / 0
                  , n = -1 / 0
                  , r = 1 / 0
                  , a = -1 / 0;
                i.each(t, function(t) {
                  var i = t.isGroup ? o.getChildrenBBox(t.get("children")) : t.getBBox();
                  if (!i)
                    return !0;
                  var u = [i.minX, i.minY, 1]
                    , s = [i.minX, i.maxY, 1]
                    , c = [i.maxX, i.minY, 1]
                    , h = [i.maxX, i.maxY, 1];
                  t.apply(u),
                    t.apply(s),
                    t.apply(c),
                    t.apply(h);
                  var l = Math.min(u[0], s[0], c[0], h[0])
                    , f = Math.max(u[0], s[0], c[0], h[0])
                    , d = Math.min(u[1], s[1], c[1], h[1])
                    , p = Math.max(u[1], s[1], c[1], h[1]);
                  l < e && (e = l),
                  f > n && (n = f),
                  d < r && (r = d),
                  p > a && (a = p)
                });
                var u = {
                  minX: e,
                  minY: r,
                  maxX: n,
                  maxY: a
                };
                return u.x = u.minX,
                  u.y = u.minY,
                  u.width = u.maxX - u.minX,
                  u.height = u.maxY - u.minY,
                  u.centerX = (u.minX + u.maxX) / 2,
                  u.centerY = (u.minY + u.maxY) / 2,
                  u
              },
              getBBox: function(t, e) {
                var n, i = t.getBBox(), o = {
                  x: i.minX,
                  y: i.minY
                }, a = {
                  x: i.maxX,
                  y: i.maxY
                };
                if (e.isGroup) {
                  for (n = t; n !== e; ) {
                    var u = n.getMatrix();
                    o = r.applyMatrix(o, u),
                      a = r.applyMatrix(a, u),
                      n = n.getParent()
                  }
                  var s = n.getMatrix();
                  o = r.applyMatrix(o, s),
                    a = r.applyMatrix(a, s)
                } else
                  o = r.applyMatrix(o, e),
                    a = r.applyMatrix(a, e);
                return {
                  minX: o.x,
                  minY: o.y,
                  maxX: a.x,
                  maxY: a.y
                }
              },
              toBack: function(t) {
                t.toBack()
              },
              toFront: function(t) {
                t.toFront()
              }
            };
            t.exports = o
          }
          , function(t, e, n) {
            var r = n(152);
            t.exports = {
              isNode: function(t) {
                return t && r.isObject(t) && "node" === t.type
              },
              isEdge: function(t) {
                return t && r.isObject(t) && "edge" === t.type
              },
              isGroup: function(t) {
                return t && r.isObject(t) && "group" === t.type
              }
            }
          }
          , function(t, e, n) {
            var r = n(152)
              , i = {};
            r.mix(i, {
              addEventListener: function(t, e, n) {
                return t.attachEvent ? (t.attachEvent("on" + e, n),
                  {
                    remove: function() {
                      t.detachEvent("on" + e, n)
                    }
                  }) : t.addEventListener ? (t.addEventListener(e, n, !1),
                  {
                    remove: function() {
                      t.removeEventListener(e, n, !1)
                    }
                  }) : void 0
              },
              createDOM: function(t, e) {
                var n;
                return (n = r.isString(t) ? r.createDom(t) : t).bbox = n.getBoundingClientRect(),
                  n.hide = function() {
                    return n.style.visibility = "hidden",
                      n
                  }
                  ,
                  n.show = function() {
                    return n.style.visibility = "visible",
                      n
                  }
                  ,
                  n.css = function(t) {
                    return r.modifyCSS(n, t),
                      n
                  }
                  ,
                  n.width = function() {
                    return r.getWidth(n)
                  }
                  ,
                  n.height = function() {
                    return r.getHeight(n)
                  }
                  ,
                  n.destroy = function() {
                    n.parentNode && n.parentNode.removeChild(n)
                  }
                  ,
                  n.on = function(t, e) {
                    n.addEventListener(t, e)
                  }
                  ,
                  n.off = function(t, e) {
                    n.removeEventListener(t, e)
                  }
                  ,
                  n.css(e),
                  n
              },
              initDOMContainer: function(t, e) {
                if (!t)
                  throw new Error("please set the container for the " + e + " !");
                return r.isString(t) && (t = document.getElementById(t)),
                  t
              }
            }),
              t.exports = i
          }
          , function(t, e) {
            var n = {
              svg: "svg",
              circle: "circle",
              rect: "rect",
              text: "text",
              path: "path",
              foreignObject: "foreignObject",
              polygon: "polygon",
              ellipse: "ellipse",
              image: "image"
            };
            t.exports = function(t, e, r) {
              var i = r.target || r.srcElement;
              if (!n[i.tagName]) {
                for (var o = i.parentNode; o && !n[o.tagName]; )
                  o = o.parentNode;
                i = o
              }
              return this._cfg.el === i ? this : this.find(function(t) {
                return t._cfg && t._cfg.el === i
              })
            }
          }
          , function(t, e, n) {
            var r = n(17)
              , i = /^p\s*\(\s*([axyn])\s*\)\s*(.*)/i
              , o = function() {
              function t(t) {
                var e = document.createElementNS("http://www.w3.org/2000/svg", "pattern");
                e.setAttribute("patternUnits", "userSpaceOnUse");
                var n = document.createElementNS("http://www.w3.org/2000/svg", "image");
                e.appendChild(n);
                var o = r.uniqueId("pattern_");
                e.id = o,
                  this.el = e,
                  this.id = o,
                  this.cfg = t;
                var a = i.exec(t)[2];
                n.setAttribute("href", a);
                var u = new Image;
                function s() {
                  console.log(u.width, u.height),
                    e.setAttribute("width", u.width),
                    e.setAttribute("height", u.height)
                }
                return a.match(/^data:/i) || (u.crossOrigin = "Anonymous"),
                  u.src = a,
                  u.complete ? s() : (u.onload = s,
                    u.src = u.src),
                  this
              }
              return t.prototype.match = function(t, e) {
                return this.cfg === e
              }
                ,
                t
            }();
            t.exports = o
          }
          , function(t, e, n) {
            var r = n(17)
              , i = function() {
              function t(t) {
                this.type = "clip";
                var e = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
                this.el = e,
                  this.id = r.uniqueId("clip_"),
                  e.id = this.id;
                var n = t._cfg.el;
                return e.appendChild(n.cloneNode(!0)),
                  this.cfg = t,
                  this
              }
              var e = t.prototype;
              return e.match = function() {
                return !1
              }
                ,
                e.remove = function() {
                  var t = this.el;
                  t.parentNode.removeChild(t)
                }
                ,
                t
            }();
            t.exports = i
          }
          , function(t, e, n) {
            var r = n(17)
              , i = function() {
              function t(t, e) {
                var n = document.createElementNS("http://www.w3.org/2000/svg", "marker")
                  , i = r.uniqueId("marker_");
                n.setAttribute("id", i);
                var o = document.createElementNS("http://www.w3.org/2000/svg", "path");
                return o.setAttribute("stroke", "none"),
                  o.setAttribute("fill", t.stroke || "#000"),
                  n.appendChild(o),
                  n.setAttribute("overflow", "visible"),
                  n.setAttribute("orient", "auto-start-reverse"),
                  this.el = n,
                  this.child = o,
                  this.id = i,
                  this.cfg = t["marker-start" === e ? "startArrow" : "endArrow"],
                  this.stroke = t.stroke || "#000",
                  !0 === this.cfg ? this._setDefaultPath(e, o) : this._setMarker(t.lineWidth, o),
                  this
              }
              var e = t.prototype;
              return e.match = function() {
                return !1
              }
                ,
                e._setDefaultPath = function(t, e) {
                  var n = this.el;
                  e.setAttribute("d", "M0,0 L6,3 L0,6 L3,3Z"),
                    n.setAttribute("refX", 3),
                    n.setAttribute("refY", 3)
                }
                ,
                e._setMarker = function(t, e) {
                  var n = this.el
                    , i = this.cfg.path
                    , o = this.cfg.d;
                  r.isArray(i) && (i = i.map(function(t) {
                    return t.join(" ")
                  }).join("")),
                    e.setAttribute("d", i),
                    n.appendChild(e),
                  o && n.setAttribute("refX", o / t)
                }
                ,
                e.update = function(t) {
                  var e = this.child;
                  e.attr ? e.attr("fill", t) : e.setAttribute("fill", t)
                }
                ,
                t
            }();
            t.exports = i
          }
          , function(t, e, n) {
            var r = n(17)
              , i = {
              shadowColor: "color",
              shadowOpacity: "opacity",
              shadowBlur: "blur",
              shadowOffsetX: "dx",
              shadowOffsetY: "dy"
            }
              , o = {
              x: "-40%",
              y: "-40%",
              width: "200%",
              height: "200%"
            }
              , a = function() {
              function t(t) {
                this.type = "filter";
                var e = document.createElementNS("http://www.w3.org/2000/svg", "filter");
                return r.each(o, function(t, n) {
                  e.setAttribute(n, t)
                }),
                  this.el = e,
                  this.id = r.uniqueId("filter_"),
                  this.el.id = this.id,
                  this.cfg = t,
                  this._parseShadow(t, e),
                  this
              }
              var e = t.prototype;
              return e.match = function(t, e) {
                if (this.type !== t)
                  return !1;
                var n = !0
                  , i = this.cfg;
                return r.each(Object.keys(i), function(t) {
                  if (i[t] !== e[t])
                    return n = !1,
                      !1
                }),
                  n
              }
                ,
                e.update = function(t, e) {
                  var n = this.cfg;
                  return n[i[t]] = e,
                    this._parseShadow(n, this.el),
                    this
                }
                ,
                e._parseShadow = function(t, e) {
                  var n = '<feDropShadow \n      dx="' + (t.dx || 0) + '" \n      dy="' + (t.dy || 0) + '" \n      stdDeviation="' + (t.blur ? t.blur / 10 : 0) + '"\n      flood-color="' + (t.color ? t.color : "#000") + '"\n      flood-opacity="' + (t.opacity ? t.opacity : 1) + '"\n      />';
                  e.innerHTML = n
                }
                ,
                t
            }();
            t.exports = a
          }
          , function(t, e, n) {
            var r = n(17)
              , i = /^l\s*\(\s*([\d.]+)\s*\)\s*(.*)/i
              , o = /^r\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)\s*(.*)/i
              , a = /[\d.]+:(#[^\s]+|[^\)]+\))/gi;
            function u(t) {
              var e = t.match(a);
              if (!e)
                return "";
              var n = "";
              return e.sort(function(t, e) {
                return t = t.split(":"),
                  e = e.split(":"),
                Number(t[0]) - Number(e[0])
              }),
                r.each(e, function(t) {
                  t = t.split(":"),
                    n += '<stop offset="' + t[0] + '" stop-color="' + t[1] + '"></stop>'
                }),
                n
            }
            var s = function() {
              function t(t) {
                var e = null
                  , n = r.uniqueId("gradient_");
                return "l" === t.toLowerCase()[0] ? function(t, e) {
                  var n, o, a = i.exec(t), s = r.mod(r.toRadian(parseFloat(a[1])), 2 * Math.PI), c = a[2];
                  s >= 0 && s < .5 * Math.PI ? (n = {
                    x: 0,
                    y: 0
                  },
                    o = {
                      x: 1,
                      y: 1
                    }) : .5 * Math.PI <= s && s < Math.PI ? (n = {
                    x: 1,
                    y: 0
                  },
                    o = {
                      x: 0,
                      y: 1
                    }) : Math.PI <= s && s < 1.5 * Math.PI ? (n = {
                    x: 1,
                    y: 1
                  },
                    o = {
                      x: 0,
                      y: 0
                    }) : (n = {
                    x: 0,
                    y: 1
                  },
                    o = {
                      x: 1,
                      y: 0
                    });
                  var h = Math.tan(s)
                    , l = h * h
                    , f = (o.x - n.x + h * (o.y - n.y)) / (l + 1) + n.x
                    , d = h * (o.x - n.x + h * (o.y - n.y)) / (l + 1) + n.y;
                  e.setAttribute("x1", n.x),
                    e.setAttribute("y1", n.y),
                    e.setAttribute("x2", f),
                    e.setAttribute("y2", d),
                    e.innerHTML = u(c)
                }(t, e = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient")) : function(t, e) {
                  var n = o.exec(t)
                    , r = parseFloat(n[1])
                    , i = parseFloat(n[2])
                    , a = parseFloat(n[3])
                    , s = n[4];
                  e.setAttribute("cx", r),
                    e.setAttribute("cy", i),
                    e.setAttribute("r", a),
                    e.innerHTML = u(s)
                }(t, e = document.createElementNS("http://www.w3.org/2000/svg", "radialGradient")),
                  e.setAttribute("id", n),
                  this.el = e,
                  this.id = n,
                  this.cfg = t,
                  this
              }
              return t.prototype.match = function(t, e) {
                return this.cfg === e
              }
                ,
                t
            }();
            t.exports = s
          }
          , function(t, e, n) {
            var r = n(17)
              , i = n(499)
              , o = n(498)
              , a = n(497)
              , u = n(496)
              , s = n(495)
              , c = function() {
              function t(t) {
                var e = document.createElementNS("http://www.w3.org/2000/svg", "defs")
                  , n = r.uniqueId("defs_");
                e.id = n,
                  t.appendChild(e),
                  this.children = [],
                  this.defaultArrow = {},
                  this.el = e,
                  this.canvas = t
              }
              var e = t.prototype;
              return e.find = function(t, e) {
                for (var n = this.children, r = null, i = 0; i < n.length; i++)
                  if (n[i].match(t, e)) {
                    r = n[i].id;
                    break
                  }
                return r
              }
                ,
                e.findById = function(t) {
                  for (var e = this.children, n = null, r = 0; r < e.length; r++)
                    if (e[r].id === t) {
                      n = e[r];
                      break
                    }
                  return n
                }
                ,
                e.add = function(t) {
                  this.children.push(t),
                    t.canvas = this.canvas,
                    t.parent = this
                }
                ,
                e.getDefaultArrow = function(t, e) {
                  var n = t.stroke || t.strokeStyle;
                  if (this.defaultArrow[n])
                    return this.defaultArrow[n].id;
                  var r = new a(t,e);
                  return this.defaultArrow[n] = r,
                    this.el.appendChild(r.el),
                    r.id
                }
                ,
                e.addGradient = function(t) {
                  var e = new i(t);
                  return this.el.appendChild(e.el),
                    this.add(e),
                    e.id
                }
                ,
                e.addArrow = function(t, e) {
                  var n = new a(t,e);
                  return this.el.appendChild(n.el),
                    n.id
                }
                ,
                e.addShadow = function(t) {
                  var e = new o(t);
                  return this.el.appendChild(e.el),
                    this.add(e),
                    e.id
                }
                ,
                e.addPattern = function(t) {
                  var e = new s(t);
                  return this.el.appendChild(e.el),
                    this.add(e),
                    e.id
                }
                ,
                e.addClip = function(t) {
                  var e = new u(t);
                  return this.el.appendChild(e.el),
                    this.add(e),
                    e.id
                }
                ,
                t
            }();
            t.exports = c
          }
          , function(t, e, n) {
            var r = n(17)
              , i = n(356).parseRadius
              , o = n(374)
              , a = n(500)
              , u = {
              rect: "path",
              circle: "circle",
              line: "line",
              path: "path",
              marker: "path",
              text: "text",
              polygon: "polygon",
              image: "image",
              ellipse: "ellipse",
              dom: "foreignObject",
              fan: "path",
              group: "g"
            }
              , s = {
              opacity: "opacity",
              fillStyle: "fill",
              strokeOpacity: "stroke-opacity",
              fillOpacity: "fill-opacity",
              strokeStyle: "stroke",
              x: "x",
              y: "y",
              r: "r",
              width: "width",
              height: "height",
              x1: "x1",
              x2: "x2",
              y1: "y1",
              y2: "y2",
              lineCap: "stroke-linecap",
              lineJoin: "stroke-linejoin",
              lineWidth: "stroke-width",
              lineDash: "stroke-dasharray",
              lineDashOffset: "stroke-dashoffset",
              miterLimit: "stroke-miterlimit",
              font: "font",
              fontSize: "font-size",
              fontStyle: "font-style",
              fontVariant: "font-variant",
              fontWeight: "font-weight",
              fontFamily: "font-family",
              startArrow: "marker-start",
              endArrow: "marker-end",
              path: "d",
              class: "class",
              id: "id",
              style: "style",
              preserveAspectRatio: "preserveAspectRatio"
            }
              , c = {
              top: "before-edge",
              middle: "central",
              bottom: "after-edge",
              alphabetic: "baseline",
              hanging: "hanging"
            }
              , h = {
              left: "left",
              start: "left",
              center: "middle",
              right: "end",
              end: "end"
            }
              , l = function() {
              function t(t) {
                if (!t)
                  return null;
                var e = r.uniqueId("canvas_")
                  , n = r.createDom('<svg id="' + e + '"></svg>');
                return t.appendChild(n),
                  this.type = "svg",
                  this.canvas = n,
                  this.context = new a(n),
                  this.toDraw = !1,
                  this
              }
              var e = t.prototype;
              return e.draw = function(t) {
                var e = this;
                e.animateHandler ? e.toDraw = !0 : function n() {
                  e.animateHandler = r.requestAnimationFrame(function() {
                    e.animateHandler = void 0,
                    e.toDraw && n()
                  });
                  try {
                    e._drawChildren(t)
                  } catch (t) {
                    console.warn("error in draw canvas, detail as:"),
                      console.warn(t),
                      e.toDraw = !1
                  }
                  e.toDraw = !1
                }()
              }
                ,
                e.drawSync = function(t) {
                  this._drawChildren(t)
                }
                ,
                e._drawGroup = function(t, e) {
                  var n = t._cfg;
                  n.removed || n.destroyed || (n.tobeRemoved && (r.each(n.tobeRemoved, function(t) {
                    t.parentNode && t.parentNode.removeChild(t)
                  }),
                    n.tobeRemoved = []),
                    this._drawShape(t, e),
                  n.children && n.children.length > 0 && this._drawChildren(t))
                }
                ,
                e._drawChildren = function(t) {
                  var e, n = t._cfg.children;
                  if (n)
                    for (var r = 0; r < n.length; r++)
                      (e = n[r]).isGroup ? this._drawGroup(e, r) : this._drawShape(e, r)
                }
                ,
                e._drawShape = function(t, e) {
                  var n = t._attrs
                    , r = t._cfg
                    , i = r.el;
                  r.removed || r.destroyed ? i && i.parentNode.removeChild(r.el) : (!i && r.parent && (this._createDom(t, e),
                    this._updateShape(t)),
                    i = r.el,
                    !1 !== r.visible ? (r.visible && i.hasAttribute("visibility") && i.removeAttribute("visibility"),
                    r.hasUpdate && this._updateShape(t),
                    n.clip && n.clip._cfg.hasUpdate && this._updateShape(n.clip)) : i.setAttribute("visibility", "hidden"))
                }
                ,
                e._updateShape = function(t) {
                  var e = t._attrs
                    , n = t._cfg.attrs;
                  if (n)
                    if (t._cfg.el || this._createDom(t),
                    "clip"in e && this._setClip(t, e.clip),
                    ("shadowOffsetX"in e || "shadowOffsetY"in e || "shadowBlur"in e || "shadowColor"in e) && this._setShadow(t),
                    "text" !== t.type) {
                      for (var i in "fan" === t.type && this._updateFan(t),
                      "marker" === t.type && t._cfg.el.setAttribute("d", this._assembleMarker(e)),
                      "rect" === t.type && t._cfg.el.setAttribute("d", this._assembleRect(e)),
                        e)
                        e[i] !== n[i] && this._setAttribute(t, i, e[i]);
                      t._cfg.attrs = r.deepMix({}, t._attrs),
                        t._cfg.hasUpdate = !1
                    } else
                      this._updateText(t)
                }
                ,
                e._setAttribute = function(t, e, n) {
                  var i = t.type
                    , o = t._attrs
                    , a = t._cfg.el
                    , u = this.context;
                  if ("marker" !== i && "rect" !== i || !~["x", "y", "radius", "r"].indexOf(e))
                    if (~["circle", "ellipse"].indexOf(i) && ~["x", "y"].indexOf(e))
                      a.setAttribute("c" + e, parseInt(n, 10));
                    else {
                      if ("polygon" === i && "points" === e)
                        return n && 0 !== n.length || (n = ""),
                        r.isArray(n) && (n = (n = n.map(function(t) {
                          return t[0] + "," + t[1]
                        })).join(" ")),
                          void a.setAttribute("points", n);
                      if ("path" === e && r.isArray(n))
                        a.setAttribute("d", this._formatPath(n));
                      else if ("img" !== e) {
                        if ("transform" === e)
                          return n ? void this._setTransform(t) : void a.removeAttribute("transform");
                        if ("rotate" === e)
                          return n ? void this._setTransform(t) : void a.removeAttribute("transform");
                        if ("matrix" !== e)
                          if ("fillStyle" !== e && "strokeStyle" !== e) {
                            if ("clip" !== e)
                              if (~e.indexOf("Arrow"))
                                if (e = s[e],
                                  n) {
                                  var c = null;
                                  c = "boolean" == typeof n ? u.getDefaultArrow(o, e) : u.addArrow(o, e),
                                    a.setAttribute(e, "url(#" + c + ")"),
                                    t._cfg[e] = c
                                } else
                                  t._cfg[e] = null,
                                    a.removeAttribute(e);
                              else
                                "html" === e && ("string" == typeof n ? a.innerHTML = n : (a.innerHTML = "",
                                  a.appendChild(n))),
                                s[e] && a.setAttribute(s[e], n)
                          } else
                            this._setColor(t, e, n);
                        else
                          this._setTransform(t)
                      } else
                        this._setImage(t, n)
                    }
                }
                ,
                e._createDom = function(t, e) {
                  var n = u[t.type]
                    , r = t._attrs
                    , i = t._cfg.parent
                    , o = i._cfg.el;
                  if (!n)
                    throw new Error("the type" + t.type + "is not supported by svg");
                  var a = document.createElementNS("http://www.w3.org/2000/svg", n);
                  if (t._cfg.el = a,
                    i)
                    if (void 0 === e)
                      o.appendChild(a);
                    else {
                      var s = i._cfg.el.childNodes;
                      "svg" === o.tagName && (e += 1),
                        s.length <= e ? o.appendChild(a) : o.insertBefore(a, s[e])
                    }
                  return t._cfg.attrs = {},
                    "text" === t.type ? (a.setAttribute("paint-order", "stroke"),
                      a.setAttribute("style", "stroke-linecap:butt; stroke-linejoin:miter;")) : (r.stroke || r.strokeStyle || a.setAttribute("stroke", "none"),
                    r.fill || r.fillStyle || a.setAttribute("fill", "none")),
                    a
                }
                ,
                e._assembleMarker = function(t) {
                  var e = t.r;
                  if (void 0 === t.r && (e = t.radius),
                  isNaN(Number(t.x)) || isNaN(Number(t.y)) || isNaN(Number(e)))
                    return "";
                  var n = "";
                  return n = "function" == typeof t.symbol ? t.symbol(t.x, t.y, e) : o.Symbols[t.symbol || "circle"](t.x, t.y, e),
                  r.isArray(n) && (n = n.map(function(t) {
                    return t.join(" ")
                  }).join("")),
                    n
                }
                ,
                e._assembleRect = function(t) {
                  var e = t.x
                    , n = t.y
                    , o = t.width
                    , a = t.height
                    , u = t.radius;
                  if (!u)
                    return "M " + e + "," + n + " l " + o + ",0 l 0," + a + " l" + -o + " 0 z";
                  var s = i(u);
                  return r.isArray(u) ? 1 === u.length ? s.r1 = s.r2 = s.r3 = s.r4 = u[0] : 2 === u.length ? (s.r1 = s.r3 = u[0],
                    s.r2 = s.r4 = u[1]) : 3 === u.length ? (s.r1 = u[0],
                    s.r2 = s.r4 = u[1],
                    s.r3 = u[2]) : (s.r1 = u[0],
                    s.r2 = u[1],
                    s.r3 = u[2],
                    s.r4 = u[3]) : s.r1 = s.r2 = s.r3 = s.r4 = u,
                    [["M " + (e + s.r1) + "," + n], ["l " + (o - s.r1 - s.r2) + ",0"], ["a " + s.r2 + "," + s.r2 + ",0,0,1," + s.r2 + "," + s.r2], ["l 0," + (a - s.r2 - s.r3)], ["a " + s.r3 + "," + s.r3 + ",0,0,1," + -s.r3 + "," + s.r3], ["l " + (s.r3 + s.r4 - o) + ",0"], ["a " + s.r4 + "," + s.r4 + ",0,0,1," + -s.r4 + "," + -s.r4], ["l 0," + (s.r4 + s.r1 - a)], ["a " + s.r1 + "," + s.r1 + ",0,0,1," + s.r1 + "," + -s.r1], ["z"]].join(" ")
                }
                ,
                e._formatPath = function(t) {
                  return ~(t = t.map(function(t) {
                    return t.join(" ")
                  }).join("")).indexOf("NaN") ? "" : t
                }
                ,
                e._setTransform = function(t) {
                  for (var e = t._attrs.matrix, n = t._cfg.el, r = [], i = 0; i < 9; i += 3)
                    r.push(e[i] + "," + e[i + 1]);
                  -1 === (r = r.join(",")).indexOf("NaN") ? n.setAttribute("transform", "matrix(" + r + ")") : console.warn("invalid matrix:", e)
                }
                ,
                e._setImage = function(t, e) {
                  var n = t._attrs
                    , i = t._cfg.el;
                  if (r.isString(e))
                    i.setAttribute("href", e);
                  else if (e instanceof Image)
                    n.width || (i.setAttribute("width", e.width),
                      t._attrs.width = e.width),
                    n.height || (i.setAttribute("height", e.height),
                      t._attrs.height = e.height),
                      i.setAttribute("href", e.src);
                  else if (e instanceof HTMLElement && r.isString(e.nodeName) && "CANVAS" === e.nodeName.toUpperCase())
                    i.setAttribute("href", e.toDataURL());
                  else if (e instanceof ImageData) {
                    var o = document.createElement("canvas");
                    o.setAttribute("width", e.width),
                      o.setAttribute("height", e.height),
                      o.getContext("2d").putImageData(e, 0, 0),
                    n.width || (i.setAttribute("width", e.width),
                      t._attrs.width = e.width),
                    n.height || (i.setAttribute("height", e.height),
                      t._attrs.height = e.height),
                      i.setAttribute("href", o.toDataURL())
                  }
                }
                ,
                e._updateFan = function(t) {
                  function e(t, e, n) {
                    return {
                      x: e * Math.cos(t) + n.x,
                      y: e * Math.sin(t) + n.y
                    }
                  }
                  var n = t._attrs
                    , i = t._cfg
                    , o = {
                    x: n.x,
                    y: n.y
                  }
                    , a = []
                    , u = n.startAngle
                    , s = n.endAngle;
                  r.isNumberEqual(s - u, 2 * Math.PI) && (s -= 1e-5);
                  var c = e(u, n.re, o)
                    , h = e(s, n.re, o)
                    , l = s > u ? 1 : 0
                    , f = Math.abs(s - u) > Math.PI ? 1 : 0
                    , d = n.rs
                    , p = n.re
                    , g = e(u, n.rs, o)
                    , m = e(s, n.rs, o);
                  n.rs > 0 ? (a.push("M " + h.x + "," + h.y),
                    a.push("L " + m.x + "," + m.y),
                    a.push("A " + d + "," + d + ",0," + f + "," + (1 === l ? 0 : 1) + "," + g.x + "," + g.y),
                    a.push("L " + c.x + " " + c.y)) : (a.push("M " + o.x + "," + o.y),
                    a.push("L " + c.x + "," + c.y)),
                    a.push("A " + p + "," + p + ",0," + f + "," + l + "," + h.x + "," + h.y),
                    n.rs > 0 ? a.push("L " + m.x + "," + m.y) : a.push("Z"),
                    i.el.setAttribute("d", a.join(" "))
                }
                ,
                e._updateText = function(t) {
                  var e = t._attrs
                    , n = t._cfg.attrs
                    , r = t._cfg.el;
                  for (var i in this._setFont(t),
                    e)
                    if (e[i] !== n[i]) {
                      if ("text" === i) {
                        this._setText(t, "" + e[i]);
                        continue
                      }
                      if ("fillStyle" === i || "strokeStyle" === i) {
                        this._setColor(t, i, e[i]);
                        continue
                      }
                      if ("matrix" === i) {
                        this._setTransform(t);
                        continue
                      }
                      s[i] && r.setAttribute(s[i], e[i])
                    }
                  t._cfg.attrs = Object.assign({}, t._attrs),
                    t._cfg.hasUpdate = !1
                }
                ,
                e._setFont = function(t) {
                  var e = t.get("el")
                    , n = t._attrs
                    , r = n.fontSize;
                  e.setAttribute("alignment-baseline", c[n.textBaseline] || "baseline"),
                    e.setAttribute("text-anchor", h[n.textAlign] || "left"),
                  r && +r < 12 && (n.matrix = [1, 0, 0, 0, 1, 0, 0, 0, 1],
                    t.transform([["t", -n.x, -n.y], ["s", +r / 12, +r / 12], ["t", n.x, n.y]]))
                }
                ,
                e._setText = function(t, e) {
                  var n = t._cfg.el
                    , i = t._attrs.textBaseline || "bottom";
                  if (e)
                    if (~e.indexOf("\n")) {
                      var o = t._attrs.x
                        , a = e.split("\n")
                        , u = a.length - 1
                        , s = "";
                      r.each(a, function(t, e) {
                        0 === e ? "alphabetic" === i ? s += '<tspan x="' + o + '" dy="' + -u + 'em">' + t + "</tspan>" : "top" === i ? s += '<tspan x="' + o + '" dy="0.9em">' + t + "</tspan>" : "middle" === i ? s += '<tspan x="' + o + '" dy="' + -(u - 1) / 2 + 'em">' + t + "</tspan>" : "bottom" === i ? s += '<tspan x="' + o + '" dy="-' + (u + .3) + 'em">' + t + "</tspan>" : "hanging" === i && (s += '<tspan x="' + o + '" dy="' + (-(u - 1) - .3) + 'em">' + t + "</tspan>") : s += '<tspan x="' + o + '" dy="1em">' + t + "</tspan>"
                      }),
                        n.innerHTML = s
                    } else
                      n.innerHTML = e;
                  else
                    n.innerHTML = ""
                }
                ,
                e._setClip = function(t, e) {
                  var n = t._cfg.el;
                  if (e)
                    if (n.hasAttribute("clip-path"))
                      e._cfg.hasUpdate && this._updateShape(e);
                    else {
                      this._createDom(e),
                        this._updateShape(e);
                      var r = this.context.addClip(e);
                      n.setAttribute("clip-path", "url(#" + r + ")")
                    }
                  else
                    n.removeAttribute("clip-path")
                }
                ,
                e._setColor = function(t, e, n) {
                  var r = t._cfg.el
                    , i = this.context;
                  if (n)
                    if (n = n.trim(),
                      /^[r,R,L,l]{1}[\s]*\(/.test(n)) {
                      var o = i.find("gradient", n);
                      o || (o = i.addGradient(n)),
                        r.setAttribute(s[e], "url(#" + o + ")")
                    } else if (/^[p,P]{1}[\s]*\(/.test(n)) {
                      var a = i.find("pattern", n);
                      a || (a = i.addPattern(n)),
                        r.setAttribute(s[e], "url(#" + a + ")")
                    } else
                      r.setAttribute(s[e], n);
                  else
                    r.setAttribute(s[e], "none")
                }
                ,
                e._setShadow = function(t) {
                  var e = t._cfg.el
                    , n = t._attrs
                    , r = {
                    dx: n.shadowOffsetX,
                    dy: n.shadowOffsetY,
                    blur: n.shadowBlur,
                    color: n.shadowColor
                  };
                  if (r.dx || r.dy || r.blur || r.color) {
                    var i = this.context.find("filter", r);
                    i || (i = this.context.addShadow(r, this)),
                      e.setAttribute("filter", "url(#" + i + ")")
                  } else
                    e.removeAttribute("filter")
                }
                ,
                t
            }();
            t.exports = l
          }
          , function(t, e, n) {
            t.exports = {
              painter: n(501),
              getShape: n(494)
            }
          }
          , function(t, e, n) {
            var r = n(17)
              , i = /[MLHVQTCSAZ]([^MLHVQTCSAZ]*)/gi
              , o = /[^\s\,]+/gi
              , a = /^l\s*\(\s*([\d.]+)\s*\)\s*(.*)/i
              , u = /^r\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)\s*(.*)/i
              , s = /^p\s*\(\s*([axyn])\s*\)\s*(.*)/i
              , c = /[\d.]+:(#[^\s]+|[^\)]+\))/gi;
            function h(t, e) {
              var n = t.match(c);
              r.each(n, function(t) {
                t = t.split(":"),
                  e.addColorStop(t[0], t[1])
              })
            }
            t.exports = {
              parsePath: function(t) {
                return t = t || [],
                  r.isArray(t) ? t : r.isString(t) ? (t = t.match(i),
                    r.each(t, function(e, n) {
                      if ((e = e.match(o))[0].length > 1) {
                        var i = e[0].charAt(0);
                        e.splice(1, 0, e[0].substr(1)),
                          e[0] = i
                      }
                      r.each(e, function(t, n) {
                        isNaN(t) || (e[n] = +t)
                      }),
                        t[n] = e
                    }),
                    t) : void 0
              },
              parseStyle: function(t, e, n) {
                if (r.isString(t)) {
                  if ("(" === t[1] || "(" === t[2]) {
                    if ("l" === t[0])
                      return function(t, e, n) {
                        var i, o, u = a.exec(t), s = r.mod(r.toRadian(parseFloat(u[1])), 2 * Math.PI), c = u[2], l = e.getBBox();
                        s >= 0 && s < .5 * Math.PI ? (i = {
                          x: l.minX,
                          y: l.minY
                        },
                          o = {
                            x: l.maxX,
                            y: l.maxY
                          }) : .5 * Math.PI <= s && s < Math.PI ? (i = {
                          x: l.maxX,
                          y: l.minY
                        },
                          o = {
                            x: l.minX,
                            y: l.maxY
                          }) : Math.PI <= s && s < 1.5 * Math.PI ? (i = {
                          x: l.maxX,
                          y: l.maxY
                        },
                          o = {
                            x: l.minX,
                            y: l.minY
                          }) : (i = {
                          x: l.minX,
                          y: l.maxY
                        },
                          o = {
                            x: l.maxX,
                            y: l.minY
                          });
                        var f = Math.tan(s)
                          , d = f * f
                          , p = (o.x - i.x + f * (o.y - i.y)) / (d + 1) + i.x
                          , g = f * (o.x - i.x + f * (o.y - i.y)) / (d + 1) + i.y
                          , m = n.createLinearGradient(i.x, i.y, p, g);
                        return h(c, m),
                          m
                      }(t, e, n);
                    if ("r" === t[0])
                      return function(t, e, n) {
                        var r = u.exec(t)
                          , i = parseFloat(r[1])
                          , o = parseFloat(r[2])
                          , a = parseFloat(r[3])
                          , s = r[4];
                        if (0 === a) {
                          var l = s.match(c);
                          return l[l.length - 1].split(":")[1]
                        }
                        var f = e.getBBox()
                          , d = f.maxX - f.minX
                          , p = f.maxY - f.minY
                          , g = Math.sqrt(d * d + p * p) / 2
                          , m = n.createRadialGradient(f.minX + d * i, f.minY + p * o, a * g, f.minX + d / 2, f.minY + p / 2, g);
                        return h(s, m),
                          m
                      }(t, e, n);
                    if ("p" === t[0])
                      return function(t, e, n) {
                        if (e.get("patternSource") && e.get("patternSource") === t)
                          return e.get("pattern");
                        var r, i, o = s.exec(t), a = o[1], u = o[2];
                        function c() {
                          r = n.createPattern(i, a),
                            e.setSilent("pattern", r),
                            e.setSilent("patternSource", t)
                        }
                        switch (a) {
                          case "a":
                            a = "repeat";
                            break;
                          case "x":
                            a = "repeat-x";
                            break;
                          case "y":
                            a = "repeat-y";
                            break;
                          case "n":
                            a = "no-repeat";
                            break;
                          default:
                            a = "no-repeat"
                        }
                        return i = new Image,
                        u.match(/^data:/i) || (i.crossOrigin = "Anonymous"),
                          i.src = u,
                          i.complete ? c() : (i.onload = c,
                            i.src = i.src),
                          r
                      }(t, e, n)
                  }
                  return t
                }
              }
            }
          }
          , function(t, e, n) {
            var r = n(17)
              , i = n(503)
              , o = ["fillStyle", "font", "globalAlpha", "lineCap", "lineWidth", "lineJoin", "miterLimit", "shadowBlur", "shadowColor", "shadowOffsetX", "shadowOffsetY", "strokeStyle", "textAlign", "textBaseline", "lineDash", "lineDashOffset"]
              , a = function() {
              function t(t) {
                if (!t)
                  return null;
                var e = r.uniqueId("canvas_")
                  , n = r.createDom('<canvas id="' + e + '"></canvas>');
                return t.appendChild(n),
                  this.type = "canvas",
                  this.canvas = n,
                  this.context = n.getContext("2d"),
                  this.toDraw = !1,
                  this
              }
              var e = t.prototype;
              return e.beforeDraw = function() {
                var t = this.canvas;
                this.context && this.context.clearRect(0, 0, t.width, t.height)
              }
                ,
                e.draw = function(t) {
                  var e = this;
                  e.animateHandler ? e.toDraw = !0 : function n() {
                    e.animateHandler = r.requestAnimationFrame(function() {
                      e.animateHandler = void 0,
                      e.toDraw && n()
                    }),
                      e.beforeDraw();
                    try {
                      e._drawGroup(t)
                    } catch (t) {
                      console.warn("error in draw canvas, detail as:"),
                        console.warn(t),
                        e.toDraw = !1
                    }
                    e.toDraw = !1
                  }()
                }
                ,
                e.drawSync = function(t) {
                  this.beforeDraw(),
                    this._drawGroup(t)
                }
                ,
                e._drawGroup = function(t) {
                  if (!t._cfg.removed && !t._cfg.destroyed && t._cfg.visible) {
                    var e = t._cfg.children
                      , n = null;
                    this.setContext(t);
                    for (var r = 0; r < e.length; r++)
                      n = e[r],
                        e[r].isGroup ? this._drawGroup(n) : this._drawShape(n);
                    this.restoreContext(t)
                  }
                }
                ,
                e._drawShape = function(t) {
                  t._cfg.removed || t._cfg.destroyed || !t._cfg.visible || (this.setContext(t),
                    t.drawInner(this.context),
                    this.restoreContext(t),
                    t._cfg.attrs = t._attrs,
                    t._cfg.hasUpdate = !1)
                }
                ,
                e.setContext = function(t) {
                  var e = this.context
                    , n = t._attrs.clip;
                  e.save(),
                  n && (n.resetTransform(e),
                    n.createPath(e),
                    e.clip()),
                    this.resetContext(t),
                    t.resetTransform(e)
                }
                ,
                e.restoreContext = function() {
                  this.context.restore()
                }
                ,
                e.resetContext = function(t) {
                  var e = this.context
                    , n = t._attrs;
                  if (!t.isGroup)
                    for (var a in n)
                      if (o.indexOf(a) > -1) {
                        var u = n[a];
                        "fillStyle" === a && (u = i.parseStyle(u, t, e)),
                        "strokeStyle" === a && (u = i.parseStyle(u, t, e)),
                          "lineDash" === a && e.setLineDash ? r.isArray(u) ? e.setLineDash(u) : r.isString(u) && e.setLineDash(u.split(" ")) : e[a] = u
                      }
                }
                ,
                t
            }();
            t.exports = a
          }
          , function(t, e, n) {
            t.exports = {
              painter: n(504)
            }
          }
          , function(t, e, n) {
            t.exports = {
              canvas: n(505),
              svg: n(502)
            }
          }
          , function(t, e, n) {
            var r = n(17)
              , i = n(373)
              , o = n(15)
              , a = n(28)
              , u = n(137)
              , s = u.interpolate
              , c = u.interpolateArray
              , h = function(t) {
              this._animators = [],
                this._current = 0,
                this._timer = null,
                this.canvas = t
            };
            function l(t, e, n) {
              var o, u = e.startTime;
              if (n < u + e.delay || e.isPaused)
                return !1;
              var h = e.duration
                , l = e.easing;
              if (n = n - u - e.delay,
                e.toAttrs.repeat)
                o = n % h / h,
                  o = a[l](o);
              else {
                if (!((o = n / h) < 1))
                  return t.attr(e.toAttrs),
                  e.toMatrix && t.setMatrix(e.toMatrix),
                    !0;
                o = a[l](o)
              }
              return function(t, e, n) {
                var o = {}
                  , a = e.toAttrs
                  , u = e.fromAttrs
                  , h = e.toMatrix;
                if (!t.get("destroyed")) {
                  var l;
                  for (var f in a)
                    if (!r.isEqual(u[f], a[f]))
                      if ("path" === f) {
                        var d = a[f]
                          , p = u[f];
                        d.length > p.length ? (d = i.parsePathString(a[f]),
                          p = i.parsePathString(u[f]),
                          p = i.fillPathByDiff(p, d),
                          p = i.formatPath(p, d),
                          e.fromAttrs.path = p,
                          e.toAttrs.path = d) : e.pathFormatted || (d = i.parsePathString(a[f]),
                          p = i.parsePathString(u[f]),
                          p = i.formatPath(p, d),
                          e.fromAttrs.path = p,
                          e.toAttrs.path = d,
                          e.pathFormatted = !0),
                          o[f] = [];
                        for (var g = 0; g < d.length; g++) {
                          for (var m = d[g], v = p[g], y = [], x = 0; x < m.length; x++)
                            r.isNumber(m[x]) && v && r.isNumber(v[x]) ? (l = s(v[x], m[x]),
                              y.push(l(n))) : y.push(m[x]);
                          o[f].push(y)
                        }
                      } else
                        l = s(u[f], a[f]),
                          o[f] = l(n);
                  if (h) {
                    var b = c(e.fromMatrix, h)(n);
                    t.setMatrix(b)
                  }
                  t.attr(o)
                }
              }(t, e, o),
                !1
            }
            r.augment(h, {
              initTimer: function() {
                var t, e, n, r = this, i = this;
                i._timer = o.timer(function(o) {
                  if (i._current = o,
                  r._animators.length > 0) {
                    for (var a = r._animators.length - 1; a >= 0; a--)
                      if ((t = r._animators[a]).get("destroyed"))
                        i.removeAnimator(a);
                      else {
                        if (!t.get("pause").isPaused)
                          for (var u = (e = t.get("animators")).length - 1; u >= 0; u--)
                            n = e[u],
                            l(t, n, o) && (e.splice(u, 1),
                            n.callback && n.callback());
                        0 === e.length && i.removeAnimator(a)
                      }
                    r.canvas.draw()
                  }
                })
              },
              addAnimator: function(t) {
                this._animators.push(t)
              },
              removeAnimator: function(t) {
                this._animators.splice(t, 1)
              },
              isAnimating: function() {
                return !!this._animators.length
              },
              stop: function() {
                this._timer && this._timer.stop()
              },
              stopAllAnimations: function() {
                this._animators.forEach(function(t) {
                  t.stopAnimate()
                }),
                  this._animators = [],
                  this.canvas.draw()
              },
              getTime: function() {
                return this._current
              }
            }),
              t.exports = h
          }
          , function(t, e, n) {
            var r = n(17)
              , i = n(376)
              , o = {
              arc: n(365),
              ellipse: n(403),
              line: n(366)
            }
              , a = r.createDom('<canvas width="500" height="500"></canvas>').getContext("2d");
            function u(t, e, n) {
              return n.createPath(a),
                a.isPointInPath(t, e)
            }
            var s = {
              arc: function(t, e) {
                var n = this._attrs
                  , r = n.x
                  , o = n.y
                  , a = n.r
                  , u = n.startAngle
                  , s = n.endAngle
                  , c = n.clockwise
                  , h = this.getHitLineWidth();
                return !!this.hasStroke() && i.arcline(r, o, a, u, s, c, h, t, e)
              },
              circle: function(t, e) {
                var n = this._attrs
                  , r = n.x
                  , o = n.y
                  , a = n.r
                  , u = this.getHitLineWidth()
                  , s = this.hasFill()
                  , c = this.hasStroke();
                return s && c ? i.circle(r, o, a, t, e) || i.arcline(r, o, a, 0, 2 * Math.PI, !1, u, t, e) : s ? i.circle(r, o, a, t, e) : !!c && i.arcline(r, o, a, 0, 2 * Math.PI, !1, u, t, e)
              },
              dom: function(t, e) {
                if (!this._cfg.el)
                  return !1;
                var n = this._cfg.el.getBBox();
                return i.box(n.x, n.x + n.width, n.y, n.y + n.height, t, e)
              },
              ellipse: function(t, e) {
                var n = this._attrs
                  , o = this.hasFill()
                  , a = this.hasStroke()
                  , u = n.x
                  , s = n.y
                  , c = n.rx
                  , h = n.ry
                  , l = this.getHitLineWidth()
                  , f = c > h ? c : h
                  , d = c > h ? 1 : c / h
                  , p = c > h ? h / c : 1
                  , g = [t, e, 1]
                  , m = [1, 0, 0, 0, 1, 0, 0, 0, 1];
                r.mat3.scale(m, m, [d, p]),
                  r.mat3.translate(m, m, [u, s]);
                var v = r.mat3.invert([], m);
                return r.vec3.transformMat3(g, g, v),
                  o && a ? i.circle(0, 0, f, g[0], g[1]) || i.arcline(0, 0, f, 0, 2 * Math.PI, !1, l, g[0], g[1]) : o ? i.circle(0, 0, f, g[0], g[1]) : !!a && i.arcline(0, 0, f, 0, 2 * Math.PI, !1, l, g[0], g[1])
              },
              fan: function(t, e) {
                var n = this
                  , a = n.hasFill()
                  , u = n.hasStroke()
                  , s = n._attrs
                  , c = s.x
                  , h = s.y
                  , l = s.rs
                  , f = s.re
                  , d = s.startAngle
                  , p = s.endAngle
                  , g = s.clockwise
                  , m = [t - c, e - h]
                  , v = r.vec2.angleTo([1, 0], m);
                function y() {
                  var t = o.arc.nearAngle(v, d, p, g);
                  if (r.isNumberEqual(v, t)) {
                    var e = r.vec2.squaredLength(m);
                    if (l * l <= e && e <= f * f)
                      return !0
                  }
                  return !1
                }
                function x() {
                  var r = n.getHitLineWidth()
                    , o = {
                    x: Math.cos(d) * l + c,
                    y: Math.sin(d) * l + h
                  }
                    , a = {
                    x: Math.cos(d) * f + c,
                    y: Math.sin(d) * f + h
                  }
                    , u = {
                    x: Math.cos(p) * l + c,
                    y: Math.sin(p) * l + h
                  }
                    , s = {
                    x: Math.cos(p) * f + c,
                    y: Math.sin(p) * f + h
                  };
                  return !!(i.line(o.x, o.y, a.x, a.y, r, t, e) || i.line(u.x, u.y, s.x, s.y, r, t, e) || i.arcline(c, h, l, d, p, g, r, t, e) || i.arcline(c, h, f, d, p, g, r, t, e))
                }
                return a && u ? y() || x() : a ? y() : !!u && x()
              },
              image: function(t, e) {
                var n = this._attrs;
                if (this.get("toDraw") || !n.img)
                  return !1;
                this._cfg.attrs && this._cfg.attrs.img === n.img || this._setAttrImg();
                var r = n.x
                  , o = n.y
                  , a = n.width
                  , u = n.height;
                return i.rect(r, o, a, u, t, e)
              },
              line: function(t, e) {
                var n = this._attrs
                  , r = n.x1
                  , o = n.y1
                  , a = n.x2
                  , u = n.y2
                  , s = this.getHitLineWidth();
                return !!this.hasStroke() && i.line(r, o, a, u, s, t, e)
              },
              path: function(t, e) {
                var n = this
                  , i = n.get("segments")
                  , o = n.hasFill()
                  , a = n.hasStroke();
                function s() {
                  if (!r.isEmpty(i)) {
                    for (var o = n.getHitLineWidth(), a = 0, u = i.length; a < u; a++)
                      if (i[a].isInside(t, e, o))
                        return !0;
                    return !1
                  }
                }
                return o && a ? u(t, e, n) || s() : o ? u(t, e, n) : !!a && s()
              },
              marker: function(t, e) {
                var n = this._attrs
                  , r = n.x
                  , o = n.y
                  , a = n.radius || n.r
                  , u = this.getHitLineWidth();
                return i.circle(r, o, a + u / 2, t, e)
              },
              polygon: function(t, e) {
                var n = this
                  , r = n.hasFill()
                  , o = n.hasStroke();
                function a() {
                  var r = n._attrs.points;
                  if (r.length < 2)
                    return !1;
                  var o = n.getHitLineWidth()
                    , a = r.slice(0);
                  return r.length >= 3 && a.push(r[0]),
                    i.polyline(a, o, t, e)
                }
                return r && o ? u(t, e, n) || a() : r ? u(t, e, n) : !!o && a()
              },
              polyline: function(t, e) {
                var n = this._attrs;
                if (this.hasStroke()) {
                  var r = n.points;
                  if (r.length < 2)
                    return !1;
                  var o = n.lineWidth;
                  return i.polyline(r, o, t, e)
                }
                return !1
              },
              rect: function(t, e) {
                var n = this
                  , r = n.hasFill()
                  , o = n.hasStroke();
                function a() {
                  var r = n._attrs
                    , o = r.x
                    , a = r.y
                    , u = r.width
                    , s = r.height
                    , c = r.radius
                    , h = n.getHitLineWidth();
                  if (0 === c) {
                    var l = h / 2;
                    return i.line(o - l, a, o + u + l, a, h, t, e) || i.line(o + u, a - l, o + u, a + s + l, h, t, e) || i.line(o + u + l, a + s, o - l, a + s, h, t, e) || i.line(o, a + s + l, o, a - l, h, t, e)
                  }
                  return i.line(o + c, a, o + u - c, a, h, t, e) || i.line(o + u, a + c, o + u, a + s - c, h, t, e) || i.line(o + u - c, a + s, o + c, a + s, h, t, e) || i.line(o, a + s - c, o, a + c, h, t, e) || i.arcline(o + u - c, a + c, c, 1.5 * Math.PI, 2 * Math.PI, !1, h, t, e) || i.arcline(o + u - c, a + s - c, c, 0, .5 * Math.PI, !1, h, t, e) || i.arcline(o + c, a + s - c, c, .5 * Math.PI, Math.PI, !1, h, t, e) || i.arcline(o + c, a + c, c, Math.PI, 1.5 * Math.PI, !1, h, t, e)
                }
                return r && o ? u(t, e, n) || a() : r ? u(t, e, n) : !!o && a()
              },
              text: function(t, e) {
                var n = this.getBBox();
                if (this.hasFill() || this.hasStroke())
                  return i.box(n.minX, n.maxX, n.minY, n.maxY, t, e)
              }
            };
            t.exports = {
              isPointInPath: function(t, e) {
                var n = s[this.type];
                return !!n && n.call(this, t, e)
              }
            }
          }
          , function(t, e, n) {
            var r = n(37);
            r.Arc = n(402),
              r.Circle = n(401),
              r.Dom = n(400),
              r.Ellipse = n(399),
              r.Fan = n(398),
              r.Image = n(397),
              r.Line = n(396),
              r.Marker = n(374),
              r.Path = n(395),
              r.Polygon = n(394),
              r.Polyline = n(393),
              r.Rect = n(392),
              r.Text = n(391),
              t.exports = r
          }
          , function(t, e, n) {
            var r = n(17)
              , i = {
              delay: "delay",
              rotate: "rotate"
            }
              , o = {
              fill: "fill",
              stroke: "stroke",
              fillStyle: "fillStyle",
              strokeStyle: "strokeStyle"
            };
            t.exports = {
              animate: function(t, e, n, a, u) {
                void 0 === u && (u = 0),
                  this.set("animating", !0);
                var s = this.get("timeline");
                s || (s = this.get("canvas").get("timeline"),
                  this.setSilent("timeline", s));
                var c = this.get("animators") || [];
                s._timer || s.initTimer(),
                r.isNumber(a) && (u = a,
                  a = null),
                  r.isFunction(n) ? (a = n,
                    n = "easeLinear") : n = n || "easeLinear";
                var h = function(t, e) {
                  var n = {
                    matrix: null,
                    attrs: {}
                  }
                    , a = e._attrs;
                  for (var u in t)
                    if ("transform" === u)
                      n.matrix = r.transform(e.getMatrix(), t[u]);
                    else if ("rotate" === u)
                      n.matrix = r.transform(e.getMatrix(), [["r", t[u]]]);
                    else if ("matrix" === u)
                      n.matrix = t[u];
                    else {
                      if (o[u] && /^[r,R,L,l]{1}[\s]*\(/.test(t[u]))
                        continue;
                      i[u] || a[u] === t[u] || (n.attrs[u] = t[u])
                    }
                  return n
                }(t, this)
                  , l = {
                  fromAttrs: function(t, e) {
                    var n = {}
                      , r = e._attrs;
                    for (var i in t.attrs)
                      n[i] = r[i];
                    return n
                  }(h, this),
                  toAttrs: h.attrs,
                  fromMatrix: r.clone(this.getMatrix()),
                  toMatrix: h.matrix,
                  duration: e,
                  easing: n,
                  callback: a,
                  delay: u,
                  startTime: s.getTime(),
                  id: r.uniqueId()
                };
                c.length > 0 ? c = function(t, e) {
                  var n = e.delay
                    , i = Object.prototype.hasOwnProperty;
                  return r.each(e.toAttrs, function(e, o) {
                    r.each(t, function(t) {
                      n < t.startTime + t.duration && i.call(t.toAttrs, o) && (delete t.toAttrs[o],
                        delete t.fromAttrs[o])
                    })
                  }),
                  e.toMatrix && r.each(t, function(t) {
                    n < t.startTime + t.duration && t.toMatrix && delete t.toMatrix
                  }),
                    t
                }(c, l) : s.addAnimator(this),
                  c.push(l),
                  this.setSilent("animators", c),
                  this.setSilent("pause", {
                    isPaused: !1
                  })
              },
              stopAnimate: function() {
                var t = this
                  , e = this.get("animators");
                r.each(e, function(e) {
                  t.attr(e.toAttrs),
                  e.toMatrix && t.attr("matrix", e.toMatrix),
                  e.callback && e.callback()
                }),
                  this.setSilent("animating", !1),
                  this.setSilent("animators", [])
              },
              pauseAnimate: function() {
                var t = this.get("timeline");
                return this.setSilent("pause", {
                  isPaused: !0,
                  pauseTime: t.getTime()
                }),
                  this
              },
              resumeAnimate: function() {
                var t = this.get("timeline").getTime()
                  , e = this.get("animators")
                  , n = this.get("pause").pauseTime;
                return r.each(e, function(e) {
                  e.startTime = e.startTime + (t - n),
                    e._paused = !1,
                    e._pauseTime = null
                }),
                  this.setSilent("pause", {
                    isPaused: !1
                  }),
                  this.setSilent("animators", e),
                  this
              }
            }
          }
          , function(t, e, n) {
            var r = n(17);
            function i(t) {
              return 1 === t[0] && 0 === t[1] && 0 === t[3] && 1 === t[4] && 0 === t[6] && 0 === t[7]
            }
            function o(t) {
              return 0 === t[1] && 0 === t[3] && 0 === t[6] && 0 === t[7]
            }
            function a(t, e) {
              i(e) || (o(e) ? (t[0] *= e[0],
                t[4] *= e[4]) : r.mat3.multiply(t, t, e))
            }
            t.exports = {
              initTransform: function() {},
              resetMatrix: function() {
                this.attr("matrix", [1, 0, 0, 0, 1, 0, 0, 0, 1])
              },
              translate: function(t, e) {
                var n = this._attrs.matrix;
                return r.mat3.translate(n, n, [t, e]),
                  this.clearTotalMatrix(),
                  this.attr("matrix", n),
                  this
              },
              rotate: function(t) {
                var e = this._attrs.matrix;
                return r.mat3.rotate(e, e, t),
                  this.clearTotalMatrix(),
                  this.attr("matrix", e),
                  this
              },
              scale: function(t, e) {
                var n = this._attrs.matrix;
                return r.mat3.scale(n, n, [t, e]),
                  this.clearTotalMatrix(),
                  this.attr("matrix", n),
                  this
              },
              rotateAtStart: function(t) {
                var e = this._attrs.x || this._cfg.attrs.x
                  , n = this._attrs.y || this._cfg.attrs.y;
                return Math.abs(t) > 2 * Math.PI && (t = t / 180 * Math.PI),
                  this.transform([["t", -e, -n], ["r", t], ["t", e, n]])
              },
              move: function(t, e) {
                var n = this.get("x") || 0
                  , r = this.get("y") || 0;
                return this.translate(t - n, e - r),
                  this.set("x", t),
                  this.set("y", e),
                  this
              },
              transform: function(t) {
                var e = this
                  , n = this._attrs.matrix;
                return r.each(t, function(t) {
                  switch (t[0]) {
                    case "t":
                      e.translate(t[1], t[2]);
                      break;
                    case "s":
                      e.scale(t[1], t[2]);
                      break;
                    case "r":
                      e.rotate(t[1]);
                      break;
                    case "m":
                      e.attr("matrix", r.mat3.multiply([], n, t[1])),
                        e.clearTotalMatrix()
                  }
                }),
                  e
              },
              setTransform: function(t) {
                return this.attr("matrix", [1, 0, 0, 0, 1, 0, 0, 0, 1]),
                  this.transform(t)
              },
              getMatrix: function() {
                return this.attr("matrix")
              },
              setMatrix: function(t) {
                return this.attr("matrix", t),
                  this.clearTotalMatrix(),
                  this
              },
              apply: function(t, e) {
                var n;
                return n = e ? this._getMatrixByRoot(e) : this.attr("matrix"),
                  r.vec3.transformMat3(t, t, n),
                  this
              },
              _getMatrixByRoot: function(t) {
                t = t || this;
                for (var e = this, n = []; e !== t; )
                  n.unshift(e),
                    e = e.get("parent");
                n.unshift(e);
                var i = [1, 0, 0, 0, 1, 0, 0, 0, 1];
                return r.each(n, function(t) {
                  r.mat3.multiply(i, t.attr("matrix"), i)
                }),
                  i
              },
              getTotalMatrix: function() {
                var t = this._cfg.totalMatrix;
                if (!t) {
                  t = [1, 0, 0, 0, 1, 0, 0, 0, 1];
                  var e = this._cfg.parent;
                  e && a(t, e.getTotalMatrix()),
                    a(t, this.attr("matrix")),
                    this._cfg.totalMatrix = t
                }
                return t
              },
              clearTotalMatrix: function() {},
              invert: function(t) {
                var e = this.getTotalMatrix();
                if (o(e))
                  t[0] /= e[0],
                    t[1] /= e[4];
                else {
                  var n = r.mat3.invert([], e);
                  n && r.vec3.transformMat3(t, t, n)
                }
                return this
              },
              resetTransform: function(t) {
                var e = this.attr("matrix");
                i(e) || t.transform(e[0], e[1], e[3], e[4], e[6], e[7])
              }
            }
          }
          , function(t, e, n) {
            var r = n(17);
            t.exports = {
              canFill: !1,
              canStroke: !1,
              initAttrs: function(t) {
                return this._attrs = {
                  opacity: 1,
                  fillOpacity: 1,
                  strokeOpacity: 1,
                  matrix: [1, 0, 0, 0, 1, 0, 0, 0, 1]
                },
                  this.attr(r.assign(this.getDefaultAttrs(), t)),
                  this
              },
              getDefaultAttrs: function() {
                return {}
              },
              attr: function(t, e) {
                if (0 === arguments.length)
                  return this._attrs;
                if (r.isObject(t)) {
                  for (var n in t)
                    this._setAttr(n, t[n]);
                  return this.clearBBox(),
                    this._cfg.hasUpdate = !0,
                    this
                }
                return 2 === arguments.length ? (this._setAttr(t, e),
                  this.clearBBox(),
                  this._cfg.hasUpdate = !0,
                  this) : this._attrs[t]
              },
              _setAttr: function(t, e) {
                var n = this._attrs;
                n[t] = e,
                  "fill" !== t && "stroke" !== t ? "opacity" !== t ? "clip" === t && e ? this._setClip(e) : "path" === t && this._afterSetAttrPath ? this._afterSetAttrPath(e) : "transform" !== t ? "rotate" === t && this.rotateAtStart(e) : this.transform(e) : n.globalAlpha = e : n[t + "Style"] = e
              },
              clearBBox: function() {
                this.setSilent("box", null)
              },
              hasFill: function() {
                return this.canFill && this._attrs.fillStyle
              },
              hasStroke: function() {
                return this.canStroke && this._attrs.strokeStyle
              },
              _setClip: function(t) {
                t._cfg.renderer = this._cfg.renderer,
                  t._cfg.canvas = this._cfg.canvas,
                  t._cfg.parent = this._cfg.parent,
                  t.hasFill = function() {
                    return !0
                  }
              }
            }
          }
          , function(t, e, n) {
            var r = n(17)
              , i = n(407)
              , o = n(406)
              , a = n(507)
              , u = n(506)
              , s = function t(e) {
              t.superclass.constructor.call(this, e)
            };
            s.CFG = {
              eventEnable: !0,
              width: null,
              height: null,
              widthCanvas: null,
              heightCanvas: null,
              widthStyle: null,
              heightStyle: null,
              containerDOM: null,
              canvasDOM: null,
              pixelRatio: null,
              renderer: "canvas"
            },
              r.extend(s, o),
              r.augment(s, {
                init: function() {
                  s.superclass.init.call(this),
                    this._setGlobalParam(),
                    this._setContainer(),
                    this._initPainter(),
                    this._scale(),
                  this.get("eventEnable") && this._registEvents()
                },
                getEmitter: function(t, e) {
                  if (t) {
                    if (!r.isEmpty(t._getEvents()))
                      return t;
                    var n = t.get("parent");
                    if (n && !e.propagationStopped)
                      return this.getEmitter(n, e)
                  }
                },
                _getEventObj: function(t, e, n, r) {
                  var o = new i(t,e,!0,!0);
                  return o.x = n.x,
                    o.y = n.y,
                    o.clientX = e.clientX,
                    o.clientY = e.clientY,
                    o.currentTarget = r,
                    o.target = r,
                    o
                },
                _triggerEvent: function(t, e) {
                  var n, r = this.getPointByClient(e.clientX, e.clientY), i = this.getShape(r.x, r.y, e), o = this.get("el");
                  if ("mousemove" === t) {
                    var a = this.get("preShape");
                    if (a && a !== i) {
                      var u = this._getEventObj("mouseleave", e, r, a);
                      (n = this.getEmitter(a, e)) && n.emit("mouseleave", u),
                        o.style.cursor = "default"
                    }
                    if (i) {
                      var s = this._getEventObj("mousemove", e, r, i);
                      if ((n = this.getEmitter(i, e)) && n.emit("mousemove", s),
                      a !== i) {
                        var c = this._getEventObj("mouseenter", e, r, i);
                        n && n.emit("mouseenter", c, e)
                      }
                    } else {
                      var h = this._getEventObj("mousemove", e, r, this);
                      this.emit("mousemove", h)
                    }
                    this.set("preShape", i)
                  } else {
                    var l = this._getEventObj(t, e, r, i || this);
                    (n = this.getEmitter(i, e)) && n !== this && n.emit(t, l),
                      this.emit(t, l)
                  }
                  i && !i.get("destroyed") && (o.style.cursor = i.attr("cursor") || "default")
                },
                _registEvents: function() {
                  var t = this
                    , e = t.get("el");
                  r.each(["mouseout", "mouseover", "mousemove", "mousedown", "mouseleave", "mouseup", "click", "dblclick"], function(n) {
                    e.addEventListener(n, function(e) {
                      t._triggerEvent(n, e)
                    }, !1)
                  }),
                    e.addEventListener("touchstart", function(e) {
                      r.isEmpty(e.touches) || t._triggerEvent("touchstart", e.touches[0])
                    }, !1),
                    e.addEventListener("touchmove", function(e) {
                      r.isEmpty(e.touches) || t._triggerEvent("touchmove", e.touches[0])
                    }, !1),
                    e.addEventListener("touchend", function(e) {
                      r.isEmpty(e.changedTouches) || t._triggerEvent("touchend", e.changedTouches[0])
                    }, !1)
                },
                _scale: function() {
                  if ("svg" !== this._cfg.renderType) {
                    var t = this.get("pixelRatio");
                    this.scale(t, t)
                  }
                },
                _setGlobalParam: function() {
                  var t = this.get("renderer") || "canvas";
                  "svg" === t ? this.set("pixelRatio", 1) : this.get("pixelRatio") || this.set("pixelRatio", r.getRatio()),
                    this._cfg.renderType = t;
                  var e = u[t];
                  this._cfg.renderer = e,
                    this._cfg.canvas = this;
                  var n = new a(this);
                  this._cfg.timeline = n
                },
                _setContainer: function() {
                  var t = this.get("containerId")
                    , e = this.get("containerDOM");
                  e || (e = document.getElementById(t),
                    this.set("containerDOM", e)),
                    r.modifyCSS(e, {
                      position: "relative"
                    })
                },
                _initPainter: function() {
                  var t = this.get("containerDOM")
                    , e = new this._cfg.renderer.painter(t);
                  this._cfg.painter = e,
                    this._cfg.canvasDOM = this._cfg.el = e.canvas,
                    this.changeSize(this.get("width"), this.get("height"))
                },
                _resize: function() {
                  var t = this.get("canvasDOM")
                    , e = this.get("widthCanvas")
                    , n = this.get("heightCanvas")
                    , r = this.get("widthStyle")
                    , i = this.get("heightStyle");
                  t.style.width = r,
                    t.style.height = i,
                    t.setAttribute("width", e),
                    t.setAttribute("height", n)
                },
                getWidth: function() {
                  var t = this.get("pixelRatio");
                  return this.get("width") * t
                },
                getHeight: function() {
                  var t = this.get("pixelRatio");
                  return this.get("height") * t
                },
                changeSize: function(t, e) {
                  var n = this.get("pixelRatio")
                    , r = t * n
                    , i = e * n;
                  this.set("widthCanvas", r),
                    this.set("heightCanvas", i),
                    this.set("widthStyle", t + "px"),
                    this.set("heightStyle", e + "px"),
                    this.set("width", t),
                    this.set("height", e),
                    this._resize()
                },
                getPointByClient: function(t, e) {
                  var n = this.get("el")
                    , r = this.get("pixelRatio") || 1
                    , i = n.getBoundingClientRect();
                  return {
                    x: (t - i.left) * r,
                    y: (e - i.top) * r
                  }
                },
                getClientByPoint: function(t, e) {
                  var n = this.get("el").getBoundingClientRect()
                    , r = this.get("pixelRatio") || 1;
                  return {
                    clientX: t / r + n.left,
                    clientY: e / r + n.top
                  }
                },
                draw: function() {
                  this._cfg.painter.draw(this)
                },
                getShape: function(t, e, n) {
                  return 3 === arguments.length && this._cfg.renderer.getShape ? this._cfg.renderer.getShape.call(this, t, e, n) : s.superclass.getShape.call(this, t, e)
                },
                getRenderer: function() {
                  return this._cfg.renderType
                },
                _drawSync: function() {
                  this._cfg.painter.drawSync(this)
                },
                destroy: function() {
                  var t = this._cfg
                    , e = t.containerDOM
                    , n = t.canvasDOM;
                  n && e && e.removeChild(n),
                    t.timeline.stop(),
                    s.superclass.destroy.call(this)
                }
              }),
              t.exports = s
          }
          , function(t, e, n) {
            var r = n(147)
              , i = {};
            n(152).mix(i, r.PathUtil, {
              getRectPath: r.PathUtil.rectPath,
              pointsToPolygon: function(t) {
                for (var e = [["M", t[0].x, t[0].y]], n = 1; n < t.length; n++) {
                  var r = t[n];
                  e.push(["L", r.x, r.y])
                }
                return e
              },
              getEllipsePath: function(t, e, n, r) {
                return [["M", t, e - r], ["a", n, r, 0, 1, 1, 0, 2 * r], ["a", n, r, 0, 1, 1, 0, -2 * r], ["z"]]
              }
            }),
              t.exports = i
          }
          , function(t, e) {
            t.exports = function(t) {
              return null != t && "object" == typeof t
            }
          }
          , function(t, e) {
            var n = Object.prototype.toString;
            t.exports = function(t) {
              return n.call(t)
            }
          }
          , function(t, e, n) {
            var r = n(409)
              , i = Object.prototype
              , o = i.hasOwnProperty
              , a = i.toString
              , u = r ? r.toStringTag : void 0;
            t.exports = function(t) {
              var e = o.call(t, u)
                , n = t[u];
              try {
                t[u] = void 0;
                var r = !0
              } catch (t) {}
              var i = a.call(t);
              return r && (e ? t[u] = n : delete t[u]),
                i
            }
          }
          , function(t, e, n) {
            var r = n(409)
              , i = n(517)
              , o = n(516)
              , a = r ? r.toStringTag : void 0;
            t.exports = function(t) {
              return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : a && a in Object(t) ? i(t) : o(t)
            }
          }
          , function(t, e, n) {
            var r = n(518)
              , i = n(515);
            t.exports = function(t) {
              return "symbol" == typeof t || i(t) && "[object Symbol]" == r(t)
            }
          }
          , function(t, e, n) {
            var r = n(377)
              , i = n(519)
              , o = NaN
              , a = /^\s+|\s+$/g
              , u = /^[-+]0x[0-9a-f]+$/i
              , s = /^0b[01]+$/i
              , c = /^0o[0-7]+$/i
              , h = parseInt;
            t.exports = function(t) {
              if ("number" == typeof t)
                return t;
              if (i(t))
                return o;
              if (r(t)) {
                var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                t = r(e) ? e + "" : e
              }
              if ("string" != typeof t)
                return 0 === t ? t : +t;
              t = t.replace(a, "");
              var n = s.test(t);
              return n || c.test(t) ? h(t.slice(2), n ? 2 : 8) : u.test(t) ? o : +t
            }
          }
          , function(t, e, n) {
            (function(e) {
                var n = "object" == typeof e && e && e.Object === Object && e;
                t.exports = n
              }
            ).call(this, n(148))
          }
          , function(t, e, n) {
            var r = n(410);
            t.exports = function() {
              return r.Date.now()
            }
          }
          , function(t, e, n) {
            var r = n(411)
              , i = n(377);
            t.exports = function(t, e, n) {
              var o = !0
                , a = !0;
              if ("function" != typeof t)
                throw new TypeError("Expected a function");
              return i(n) && (o = "leading"in n ? !!n.leading : o,
                a = "trailing"in n ? !!n.trailing : a),
                r(t, e, {
                  leading: o,
                  maxWait: e,
                  trailing: a
                })
            }
          }
          , function(t, e) {
            t.exports = function(t, e, n) {
              var r = void 0
                , i = void 0
                , o = void 0
                , a = void 0
                , u = 0;
              n || (n = {});
              var s = function() {
                u = !1 === n.leading ? 0 : Date.now(),
                  r = null,
                  a = t.apply(i, o),
                r || (i = o = null)
              }
                , c = function() {
                var c = Date.now();
                u || !1 !== n.leading || (u = c);
                var h = e - (c - u);
                return i = this,
                  o = arguments,
                  h <= 0 || h > e ? (r && (clearTimeout(r),
                    r = null),
                    u = c,
                    a = t.apply(i, o),
                  r || (i = o = null)) : r || !1 === n.trailing || (r = setTimeout(s, h)),
                  a
              };
              return c.cancel = function() {
                clearTimeout(r),
                  u = 0,
                  r = i = o = null
              }
                ,
                c
            }
          }
          , function(t, e, n) {
            var r = n(30)
              , i = n(359)
              , o = Object.prototype.hasOwnProperty;
            t.exports = function(t, e) {
              if (null === t || !i(t))
                return {};
              var n = {};
              return r(e, function(e) {
                o.call(t, e) && (n[e] = t[e])
              }),
                n
            }
          }
          , function(t, e, n) {
            var r = n(30)
              , i = n(62);
            t.exports = function(t, e) {
              if (!i(t))
                return t;
              var n = [];
              return r(t, function(t, r) {
                n.push(e(t, r))
              }),
                n
            }
          }
          , function(t, e, n) {
            var r = n(47)
              , i = n(378);
            t.exports = function(t, e, n) {
              return r(n) ? !!n(t, e) : i(t, e)
            }
          }
          , function(t, e, n) {
            var r = n(62);
            t.exports = function(t, e) {
              if (!r(t))
                return -1;
              var n = Array.prototype.indexOf;
              if (n)
                return n.call(t, e);
              for (var i = -1, o = 0; o < t.length; o++)
                if (t[o] === e) {
                  i = o;
                  break
                }
              return i
            }
          }
          , function(t, e, n) {
            var r = n(415);
            t.exports = function(t, e) {
              if (!e)
                return [t];
              var n = r(t, e)
                , i = [];
              for (var o in n)
                i.push(n[o]);
              return i
            }
          }
          , function(t, e) {
            t.exports = function(t, e, n) {
              var r = void 0;
              return function() {
                var i = this
                  , o = arguments
                  , a = n && !r;
                clearTimeout(r),
                  r = setTimeout(function() {
                    r = null,
                    n || t.apply(i, o)
                  }, e),
                a && t.apply(i, o)
              }
            }
          }
          , function(t, e, n) {
            var r = n(60);
            t.exports = function(t) {
              return r(t, "Error")
            }
          }
          , function(t, e, n) {
            var r = n(60);
            t.exports = function(t) {
              return r(t, "Arguments")
            }
          }
          , function(t, e, n) {
            var r = n(60);
            t.exports = function(t) {
              return r(t, "Date")
            }
          }
          , function(t, e, n) {
            var r = n(60);
            t.exports = function(t) {
              return r(t, "RegExp")
            }
          }
          , function(t, e) {
            t.exports = function(t) {
              return void 0 === t
            }
          }
          , function(t, e) {
            t.exports = function(t) {
              return null === t
            }
          }
          , function(t, e, n) {
            var r = n(60)
              , i = {
              getType: n(420),
              isArray: n(29),
              isArrayLike: n(62),
              isBoolean: n(419),
              isFunction: n(47),
              isNil: n(136),
              isNull: n(536),
              isNumber: n(135),
              isObject: n(385),
              isObjectLike: n(383),
              isPlainObject: n(359),
              isPrototype: n(418),
              isType: r,
              isUndefined: n(535),
              isString: n(358),
              isRegExp: n(534),
              isDate: n(533),
              isArguments: n(532),
              isError: n(531)
            };
            t.exports = i
          }
          , function(t, e, n) {
            t.exports = n(422)
          }
          , function(t, e) {
            t.exports = function(t, e) {
              return t && e ? t.replace(/\\?\{([^{}]+)\}/g, function(t, n) {
                return "\\" === t.charAt(0) ? t.slice(1) : void 0 === e[n] ? "" : e[n]
              }) : t
            }
          }
          , function(t, e, n) {
            var r = n(357);
            t.exports = function(t) {
              var e = r(t);
              return e.charAt(0).toLowerCase() + e.substring(1)
            }
          }
          , function(t, e, n) {
            t.exports = n(423)
          }
          , function(t, e, n) {
            var r = {
              lc: n(541),
              lowerCase: n(423),
              lowerFirst: n(540),
              substitute: n(539),
              uc: n(538),
              upperCase: n(422),
              upperFirst: n(421)
            };
            t.exports = r
          }
          , function(t, e) {
            function n(t) {
              var e = [];
              switch (t[0]) {
                case "M":
                case "L":
                  e.push([t[1], t[2]]);
                  break;
                case "A":
                  e.push([t[6], t[7]]);
                  break;
                case "Q":
                  e.push([t[3], t[4]]),
                    e.push([t[1], t[2]]);
                  break;
                case "T":
                  e.push([t[1], t[2]]);
                  break;
                case "C":
                  e.push([t[5], t[6]]),
                    e.push([t[1], t[2]]),
                    e.push([t[3], t[4]]);
                  break;
                case "S":
                  e.push([t[3], t[4]]),
                    e.push([t[1], t[2]]);
                  break;
                case "H":
                case "V":
                  e.push([t[1], t[1]])
              }
              return e
            }
            function r(t, e, r) {
              for (var i = [].concat(t), o = void 0, a = 1 / (r + 1), u = n(e)[0], s = 1; s <= r; s++)
                a *= s,
                  0 === (o = Math.floor(t.length * a)) ? i.unshift([u[0] * a + t[o][0] * (1 - a), u[1] * a + t[o][1] * (1 - a)]) : i.splice(o, 0, [u[0] * a + t[o][0] * (1 - a), u[1] * a + t[o][1] * (1 - a)]);
              return i
            }
            t.exports = function(t, e) {
              if (t.length <= 1)
                return t;
              for (var i = void 0, o = 0; o < e.length; o++)
                if (t[o][0] !== e[o][0])
                  switch (i = n(t[o]),
                    e[o][0]) {
                    case "M":
                      t[o] = ["M"].concat(i[0]);
                      break;
                    case "L":
                      t[o] = ["L"].concat(i[0]);
                      break;
                    case "A":
                      t[o] = [].concat(e[o]),
                        t[o][6] = i[0][0],
                        t[o][7] = i[0][1];
                      break;
                    case "Q":
                      if (i.length < 2) {
                        if (!(o > 0)) {
                          t[o] = e[o];
                          break
                        }
                        i = r(i, t[o - 1], 1)
                      }
                      t[o] = ["Q"].concat(i.reduce(function(t, e) {
                        return t.concat(e)
                      }, []));
                      break;
                    case "T":
                      t[o] = ["T"].concat(i[0]);
                      break;
                    case "C":
                      if (i.length < 3) {
                        if (!(o > 0)) {
                          t[o] = e[o];
                          break
                        }
                        i = r(i, t[o - 1], 2)
                      }
                      t[o] = ["C"].concat(i.reduce(function(t, e) {
                        return t.concat(e)
                      }, []));
                      break;
                    case "S":
                      if (i.length < 2) {
                        if (!(o > 0)) {
                          t[o] = e[o];
                          break
                        }
                        i = r(i, t[o - 1], 1)
                      }
                      t[o] = ["S"].concat(i.reduce(function(t, e) {
                        return t.concat(e)
                      }, []));
                      break;
                    default:
                      t[o] = e[o]
                  }
              return t
            }
          }
          , function(t, e, n) {
            var r = n(30);
            t.exports = function(t, e) {
              if (t.length !== e.length)
                return !1;
              var n = !0;
              return r(t, function(t, r) {
                if (t !== e[r])
                  return n = !1,
                    !1
              }),
                n
            }
          }
          , function(t, e, n) {
            var r = n(544);
            function i(t, e, n) {
              var r = null
                , i = n;
              return e < i && (i = e,
                r = "add"),
              t < i && (i = t,
                r = "del"),
                {
                  type: r,
                  min: i
                }
            }
            t.exports = function(t, e) {
              var n = function(t, e) {
                var n = t.length
                  , o = e.length
                  , a = void 0
                  , u = void 0
                  , s = 0;
                if (0 === n || 0 === o)
                  return null;
                for (var c = [], h = 0; h <= n; h++)
                  c[h] = [],
                    c[h][0] = {
                      min: h
                    };
                for (var l = 0; l <= o; l++)
                  c[0][l] = {
                    min: l
                  };
                for (var f = 1; f <= n; f++) {
                  a = t[f - 1];
                  for (var d = 1; d <= o; d++) {
                    u = e[d - 1],
                      s = r(a, u) ? 0 : 1;
                    var p = c[f - 1][d].min + 1
                      , g = c[f][d - 1].min + 1
                      , m = c[f - 1][d - 1].min + s;
                    c[f][d] = i(p, g, m)
                  }
                }
                return c
              }(t, e)
                , o = t.length
                , a = e.length
                , u = []
                , s = 1
                , c = 1;
              if (n[o][a] !== o) {
                for (var h = 1; h <= o; h++) {
                  var l = n[h][h].min;
                  c = h;
                  for (var f = s; f <= a; f++)
                    n[h][f].min < l && (l = n[h][f].min,
                      c = f);
                  s = c,
                  n[h][s].type && u.push({
                    index: h - 1,
                    type: n[h][s].type
                  })
                }
                for (var d = u.length - 1; d >= 0; d--)
                  s = u[d].index,
                    "add" === u[d].type ? t.splice(s, 0, [].concat(t[s])) : t.splice(s, 1)
              }
              if ((o = t.length) < a)
                for (var p = 0; p < a - o; p++)
                  "z" === t[o - 1][0] || "Z" === t[o - 1][0] ? t.splice(o - 2, 0, t[o - 2]) : t.push(t[o - 1]);
              return t
            }
          }
          , function(t, e) {
            function n(t, e) {
              var n = []
                , r = [];
              return t.length && function t(e, i) {
                if (1 === e.length)
                  n.push(e[0]),
                    r.push(e[0]);
                else {
                  for (var o = [], a = 0; a < e.length - 1; a++)
                    0 === a && n.push(e[0]),
                    a === e.length - 2 && r.push(e[a + 1]),
                      o[a] = [(1 - i) * e[a][0] + i * e[a + 1][0], (1 - i) * e[a][1] + i * e[a + 1][1]];
                  t(o, i)
                }
              }(t, e),
                {
                  left: n,
                  right: r.reverse()
                }
            }
            function r(t, e, r) {
              if (1 === r)
                return [[].concat(t)];
              var i = [];
              if ("L" === e[0] || "C" === e[0] || "Q" === e[0])
                i = i.concat(function(t, e, r) {
                  var i = [[t[1], t[2]]];
                  r = r || 2;
                  var o = [];
                  "A" === e[0] ? (i.push(e[6]),
                    i.push(e[7])) : "C" === e[0] ? (i.push([e[1], e[2]]),
                    i.push([e[3], e[4]]),
                    i.push([e[5], e[6]])) : "S" === e[0] || "Q" === e[0] ? (i.push([e[1], e[2]]),
                    i.push([e[3], e[4]])) : i.push([e[1], e[2]]);
                  for (var a = i, u = 1 / r, s = 0; s < r - 1; s++) {
                    var c = n(a, u / (1 - u * s));
                    o.push(c.left),
                      a = c.right
                  }
                  return o.push(a),
                    o.map(function(t) {
                      var e = [];
                      return 4 === t.length && (e.push("C"),
                        e = e.concat(t[2])),
                      t.length >= 3 && (3 === t.length && e.push("Q"),
                        e = e.concat(t[1])),
                      2 === t.length && e.push("L"),
                        e = e.concat(t[t.length - 1])
                    })
                }(t, e, r));
              else {
                var o = [].concat(t);
                "M" === o[0] && (o[0] = "L");
                for (var a = 0; a <= r - 1; a++)
                  i.push(o)
              }
              return i
            }
            t.exports = function(t, e) {
              if (1 === t.length)
                return t;
              var n = t.length - 1
                , i = e.length - 1
                , o = n / i
                , a = [];
              if (1 === t.length && "M" === t[0][0]) {
                for (var u = 0; u < i - n; u++)
                  t.push(t[0]);
                return t
              }
              for (var s = 0; s < i; s++) {
                var c = Math.floor(o * s);
                a[c] = (a[c] || 0) + 1
              }
              var h = a.reduce(function(e, i, o) {
                return o === n ? e.concat(t[n]) : e.concat(r(t[o], t[o + 1], i))
              }, []);
              return h.unshift(t[0]),
              "Z" !== e[i] && "z" !== e[i] || h.push("Z"),
                h
            }
          }
          , function(t, e, n) {
            var r = n(29)
              , i = n(429)
              , o = n(427)
              , a = function(t, e, n, r, i) {
              return t * (t * (-3 * e + 9 * n - 9 * r + 3 * i) + 6 * e - 12 * n + 6 * r) - 3 * e + 3 * n
            }
              , u = function(t, e, n, r, i, o, u, s, c) {
              null === c && (c = 1);
              for (var h = (c = c > 1 ? 1 : c < 0 ? 0 : c) / 2, l = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], f = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], d = 0, p = 0; p < 12; p++) {
                var g = h * l[p] + h
                  , m = a(g, t, n, i, u)
                  , v = a(g, e, r, o, s)
                  , y = m * m + v * v;
                d += f[p] * Math.sqrt(y)
              }
              return h * d
            }
              , s = function(t, e, n, r, i, o, a, u) {
              if (!(Math.max(t, n) < Math.min(i, a) || Math.min(t, n) > Math.max(i, a) || Math.max(e, r) < Math.min(o, u) || Math.min(e, r) > Math.max(o, u))) {
                var s = (t - n) * (o - u) - (e - r) * (i - a);
                if (s) {
                  var c = ((t * r - e * n) * (i - a) - (t - n) * (i * u - o * a)) / s
                    , h = ((t * r - e * n) * (o - u) - (e - r) * (i * u - o * a)) / s
                    , l = +c.toFixed(2)
                    , f = +h.toFixed(2);
                  if (!(l < +Math.min(t, n).toFixed(2) || l > +Math.max(t, n).toFixed(2) || l < +Math.min(i, a).toFixed(2) || l > +Math.max(i, a).toFixed(2) || f < +Math.min(e, r).toFixed(2) || f > +Math.max(e, r).toFixed(2) || f < +Math.min(o, u).toFixed(2) || f > +Math.max(o, u).toFixed(2)))
                    return {
                      x: c,
                      y: h
                    }
                }
              }
            }
              , c = function(t, e, n) {
              return e >= t.x && e <= t.x + t.width && n >= t.y && n <= t.y + t.height
            }
              , h = function(t, e, n, r) {
              return null === t && (t = e = n = r = 0),
              null === e && (e = t.y,
                n = t.width,
                r = t.height,
                t = t.x),
                {
                  x: t,
                  y: e,
                  width: n,
                  w: n,
                  height: r,
                  h: r,
                  x2: t + n,
                  y2: e + r,
                  cx: t + n / 2,
                  cy: e + r / 2,
                  r1: Math.min(n, r) / 2,
                  r2: Math.max(n, r) / 2,
                  r0: Math.sqrt(n * n + r * r) / 2,
                  path: i(t, e, n, r),
                  vb: [t, e, n, r].join(" ")
                }
            }
              , l = function(t, e, n, i, o, a, u, s) {
              r(t) || (t = [t, e, n, i, o, a, u, s]);
              var c = function(t, e, n, r, i, o, a, u) {
                for (var s = [], c = [[], []], h = void 0, l = void 0, f = void 0, d = void 0, p = 0; p < 2; ++p)
                  if (0 === p ? (l = 6 * t - 12 * n + 6 * i,
                    h = -3 * t + 9 * n - 9 * i + 3 * a,
                    f = 3 * n - 3 * t) : (l = 6 * e - 12 * r + 6 * o,
                    h = -3 * e + 9 * r - 9 * o + 3 * u,
                    f = 3 * r - 3 * e),
                  Math.abs(h) < 1e-12) {
                    if (Math.abs(l) < 1e-12)
                      continue;
                    (d = -f / l) > 0 && d < 1 && s.push(d)
                  } else {
                    var g = l * l - 4 * f * h
                      , m = Math.sqrt(g);
                    if (!(g < 0)) {
                      var v = (-l + m) / (2 * h);
                      v > 0 && v < 1 && s.push(v);
                      var y = (-l - m) / (2 * h);
                      y > 0 && y < 1 && s.push(y)
                    }
                  }
                for (var x = s.length, b = x, w = void 0; x--; )
                  w = 1 - (d = s[x]),
                    c[0][x] = w * w * w * t + 3 * w * w * d * n + 3 * w * d * d * i + d * d * d * a,
                    c[1][x] = w * w * w * e + 3 * w * w * d * r + 3 * w * d * d * o + d * d * d * u;
                return c[0][b] = t,
                  c[1][b] = e,
                  c[0][b + 1] = a,
                  c[1][b + 1] = u,
                  c[0].length = c[1].length = b + 2,
                  {
                    min: {
                      x: Math.min.apply(0, c[0]),
                      y: Math.min.apply(0, c[1])
                    },
                    max: {
                      x: Math.max.apply(0, c[0]),
                      y: Math.max.apply(0, c[1])
                    }
                  }
              }
                .apply(null, t);
              return h(c.min.x, c.min.y, c.max.x - c.min.x, c.max.y - c.min.y)
            }
              , f = function(t, e, n, r, i, o, a, u, s) {
              var c = 1 - s
                , h = Math.pow(c, 3)
                , l = Math.pow(c, 2)
                , f = s * s
                , d = f * s
                , p = t + 2 * s * (n - t) + f * (i - 2 * n + t)
                , g = e + 2 * s * (r - e) + f * (o - 2 * r + e)
                , m = n + 2 * s * (i - n) + f * (a - 2 * i + n)
                , v = r + 2 * s * (o - r) + f * (u - 2 * o + r);
              return {
                x: h * t + 3 * l * s * n + 3 * c * s * s * i + d * a,
                y: h * e + 3 * l * s * r + 3 * c * s * s * o + d * u,
                m: {
                  x: p,
                  y: g
                },
                n: {
                  x: m,
                  y: v
                },
                start: {
                  x: c * t + s * n,
                  y: c * e + s * r
                },
                end: {
                  x: c * i + s * a,
                  y: c * o + s * u
                },
                alpha: 90 - 180 * Math.atan2(p - m, g - v) / Math.PI
              }
            }
              , d = function(t, e, n) {
              if (!function(t, e) {
                return t = h(t),
                  e = h(e),
                c(e, t.x, t.y) || c(e, t.x2, t.y) || c(e, t.x, t.y2) || c(e, t.x2, t.y2) || c(t, e.x, e.y) || c(t, e.x2, e.y) || c(t, e.x, e.y2) || c(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y)
              }(l(t), l(e)))
                return n ? 0 : [];
              for (var r = ~~(u.apply(0, t) / 8), i = ~~(u.apply(0, e) / 8), o = [], a = [], d = {}, p = n ? 0 : [], g = 0; g < r + 1; g++) {
                var m = f.apply(0, t.concat(g / r));
                o.push({
                  x: m.x,
                  y: m.y,
                  t: g / r
                })
              }
              for (var v = 0; v < i + 1; v++) {
                var y = f.apply(0, e.concat(v / i));
                a.push({
                  x: y.x,
                  y: y.y,
                  t: v / i
                })
              }
              for (var x = 0; x < r; x++)
                for (var b = 0; b < i; b++) {
                  var w = o[x]
                    , _ = o[x + 1]
                    , S = a[b]
                    , M = a[b + 1]
                    , P = Math.abs(_.x - w.x) < .001 ? "y" : "x"
                    , O = Math.abs(M.x - S.x) < .001 ? "y" : "x"
                    , E = s(w.x, w.y, _.x, _.y, S.x, S.y, M.x, M.y);
                  if (E) {
                    if (d[E.x.toFixed(4)] === E.y.toFixed(4))
                      continue;
                    d[E.x.toFixed(4)] = E.y.toFixed(4);
                    var A = w.t + Math.abs((E[P] - w[P]) / (_[P] - w[P])) * (_.t - w.t)
                      , C = S.t + Math.abs((E[O] - S[O]) / (M[O] - S[O])) * (M.t - S.t);
                    A >= 0 && A <= 1 && C >= 0 && C <= 1 && (n ? p++ : p.push({
                      x: E.x,
                      y: E.y,
                      t1: A,
                      t2: C
                    }))
                  }
                }
              return p
            };
            t.exports = function(t, e) {
              return function(t, e, n) {
                t = o(t),
                  e = o(e);
                for (var r = void 0, i = void 0, a = void 0, u = void 0, s = void 0, c = void 0, h = void 0, l = void 0, f = void 0, p = void 0, g = [], m = 0, v = t.length; m < v; m++) {
                  var y = t[m];
                  if ("M" === y[0])
                    r = s = y[1],
                      i = c = y[2];
                  else {
                    "C" === y[0] ? (r = (f = [r, i].concat(y.slice(1)))[6],
                      i = f[7]) : (f = [r, i, r, i, s, c, s, c],
                      r = s,
                      i = c);
                    for (var x = 0, b = e.length; x < b; x++) {
                      var w = e[x];
                      if ("M" === w[0])
                        a = h = w[1],
                          u = l = w[2];
                      else {
                        "C" === w[0] ? (a = (p = [a, u].concat(w.slice(1)))[6],
                          u = p[7]) : (p = [a, u, a, u, h, l, h, l],
                          a = h,
                          u = l);
                        for (var _ = d(f, p, n), S = 0, M = _.length; S < M; S++)
                          _[S].segment1 = m,
                            _[S].segment2 = x,
                            _[S].bez1 = f,
                            _[S].bez2 = p;
                        g = g.concat(_)
                      }
                    }
                  }
                }
                return g
              }(t, e)
            }
          }
          , function(t, e, n) {
            var r = n(547)
              , i = n(426)
              , o = n(427)
              , a = n(424);
            t.exports = {
              catmullRom2Bezier: a,
              catmullRomToBezier: a,
              fillPath: n(546),
              fillPathByDiff: n(545),
              formatPath: n(543),
              intersection: r,
              pathIntersection: r,
              parsePathArray: n(428),
              parsePathString: n(425),
              pathToAbsolute: i,
              path2absolute: i,
              pathTocurve: o,
              path2curve: o,
              rectPath: n(429)
            }
          }
          , function(t, e, n) {
            var r = n(368)
              , i = n(430);
            t.exports = function(t, e) {
              return r(i(t), e)
            }
          }
          , function(t, e, n) {
            t.exports = n(431)
          }
          , function(t, e, n) {
            t.exports = n(30)
          }
          , function(t, e, n) {
            t.exports = {
              forIn: n(551),
              has: n(431),
              hasKey: n(550),
              hasValue: n(549),
              keys: n(443),
              isMatch: n(444),
              values: n(430)
            }
          }
          , function(t, e, n) {
            t.exports = {
              mat3: n(381),
              vec2: n(434),
              vec3: n(433),
              transform: n(432)
            }
          }
          , function(t, e, n) {
            var r = n(29)
              , i = n(47)
              , o = n(30);
            t.exports = function(t, e) {
              if (r(t)) {
                var n = t[0]
                  , a = void 0;
                a = i(e) ? e(t[0]) : t[0][e];
                var u = void 0;
                return o(t, function(t) {
                  (u = i(e) ? e(t) : t[e]) < a && (n = t,
                    a = u)
                }),
                  n
              }
            }
          }
          , function(t, e, n) {
            var r = n(29)
              , i = n(47)
              , o = n(30);
            t.exports = function(t, e) {
              if (r(t)) {
                var n = t[0]
                  , a = void 0;
                a = i(e) ? e(t[0]) : t[0][e];
                var u = void 0;
                return o(t, function(t) {
                  (u = i(e) ? e(t) : t[e]) > a && (n = t,
                    a = u)
                }),
                  n
              }
            }
          }
          , function(t, e, n) {
            var r = n(135);
            t.exports = function(t) {
              return r(t) && t > 0
            }
          }
          , function(t, e, n) {
            var r = n(135);
            t.exports = function(t) {
              return r(t) && t % 2 != 0
            }
          }
          , function(t, e, n) {
            var r = n(135);
            t.exports = function(t) {
              return r(t) && t < 0
            }
          }
          , function(t, e, n) {
            var r = n(135)
              , i = Number.isInteger ? Number.isInteger : function(t) {
                return r(t) && t % 1 == 0
              }
            ;
            t.exports = i
          }
          , function(t, e, n) {
            var r = n(135);
            t.exports = function(t) {
              return r(t) && t % 2 == 0
            }
          }
          , function(t, e, n) {
            var r = n(135);
            t.exports = function(t) {
              return r(t) && t % 1 != 0
            }
          }
          , function(t, e) {
            t.exports = function(t, e) {
              var n = e.toString()
                , r = n.indexOf(".");
              if (-1 === r)
                return Math.round(t);
              var i = n.substr(r + 1).length;
              return i > 20 && (i = 20),
                parseFloat(t.toFixed(i))
            }
          }
          , function(t, e, n) {
            var r = n(439);
            t.exports = {
              clamp: n(382),
              fixedBase: n(562),
              isDecimal: n(561),
              isEven: n(560),
              isInteger: n(559),
              isNegative: n(558),
              isNumberEqual: r,
              isOdd: n(557),
              isPositive: n(556),
              maxBy: n(555),
              minBy: n(554),
              mod: n(438),
              snapEqual: r,
              toDegree: n(437),
              toInt: n(436),
              toInteger: n(436),
              toRadian: n(435)
            }
          }
          , function(t, e, n) {
            var r = n(29);
            t.exports = function(t) {
              var e = 0
                , n = 0
                , i = 0
                , o = 0;
              return r(t) ? 1 === t.length ? e = n = i = o = t[0] : 2 === t.length ? (e = i = t[0],
                n = o = t[1]) : 3 === t.length ? (e = t[0],
                n = o = t[1],
                i = t[2]) : (e = t[0],
                n = t[1],
                i = t[2],
                o = t[3]) : e = n = i = o = t,
                {
                  r1: e,
                  r2: n,
                  r3: i,
                  r4: o
                }
            }
          }
          , function(t, e, n) {
            var r = n(29)
              , i = n(358)
              , o = n(30)
              , a = /[MLHVQTCSAZ]([^MLHVQTCSAZ]*)/gi
              , u = /[^\s\,]+/gi;
            t.exports = function(t) {
              return r(t = t || []) ? t : i(t) ? (t = t.match(a),
                o(t, function(e, n) {
                  if ((e = e.match(u))[0].length > 1) {
                    var r = e[0].charAt(0);
                    e.splice(1, 0, e[0].substr(1)),
                      e[0] = r
                  }
                  o(e, function(t, n) {
                    isNaN(t) || (e[n] = +t)
                  }),
                    t[n] = e
                }),
                t) : void 0
            }
          }
          , function(t, e) {
            var n = {};
            t.exports = function(t) {
              var e = n[t];
              if (!e) {
                for (var r = t.toString(16), i = r.length; i < 6; i++)
                  r = "0" + r;
                e = "#" + r,
                  n[t] = e
              }
              return e
            }
          }
          , function(t, e, n) {
            var r = n(566);
            t.exports = {
              number2color: r,
              numberToColor: r,
              parsePath: n(565),
              parseRadius: n(564)
            }
          }
          , function(t, e) {
            t.exports = function(t, e) {
              if (t["_wrap_" + e])
                return t["_wrap_" + e];
              var n = function(n) {
                t[e](n)
              };
              return t["_wrap_" + e] = n,
                n
            }
          }
          , function(t, e) {
            t.exports = function(t, e) {
              return t["_wrap_" + e]
            }
          }
          , function(t, e, n) {
            t.exports = {
              getWrapBehavior: n(569),
              wrapBehavior: n(568)
            }
          }
          , function(t, e, n) {
            var r = n(136)
              , i = n(29)
              , o = n(30);
            t.exports = function(t, e) {
              for (var n = [], a = {}, u = 0; u < t.length; u++) {
                var s = t[u][e];
                r(s) || (i(s) || (s = [s]),
                  o(s, function(t) {
                    a[t] || (n.push(t),
                      a[t] = !0)
                  }))
              }
              return n
            }
          }
          , function(t, e, n) {
            var r = n(30)
              , i = n(367)
              , o = n(440);
            t.exports = function() {
              var t = []
                , e = i(arguments);
              return r(e, function(e) {
                t = t.concat(e)
              }),
                o(t)
            }
          }
          , function(t, e, n) {
            var r = n(358)
              , i = n(47)
              , o = n(29);
            t.exports = function(t, e) {
              var n = void 0;
              if (i(e))
                n = function(t, n) {
                  return e(t) - e(n)
                }
                ;
              else {
                var a = [];
                r(e) ? a.push(e) : o(e) && (a = e),
                  n = function(t, e) {
                    for (var n = 0; n < a.length; n += 1) {
                      var r = a[n];
                      if (t[r] > e[r])
                        return 1;
                      if (t[r] < e[r])
                        return -1
                    }
                    return 0
                  }
              }
              return t.sort(n),
                t
            }
          }
          , function(t, e, n) {
            var r = n(62)
              , i = n(441);
            t.exports = function(t, e) {
              var n = [];
              if (!r(t))
                return n;
              for (var o = -1, a = [], u = t.length; ++o < u; ) {
                var s = t[o];
                e(s, o, t) && (n.push(s),
                  a.push(o))
              }
              return i(t, a),
                n
            }
          }
          , function(t, e, n) {
            var r = n(29)
              , i = n(359)
              , o = n(30);
            t.exports = function(t, e, n) {
              if (!r(t) && !i(t))
                return t;
              var a = n;
              return o(t, function(t, n) {
                a = e(a, t, n)
              }),
                a
            }
          }
          , function(t, e) {
            t.exports = function(t) {
              for (var e = [], n = 0; n < t.length; n++)
                e = e.concat(t[n]);
              return e
            }
          }
          , function(t, e, n) {
            var r = n(384)
              , i = n(29);
            t.exports = function(t) {
              if (!(t = r(t, function(t) {
                return !isNaN(t)
              })).length)
                return {
                  min: 0,
                  max: 0
                };
              if (i(t[0])) {
                for (var e = [], n = 0; n < t.length; n++)
                  e = e.concat(t[n]);
                t = e
              }
              var o = Math.max.apply(null, t);
              return {
                min: Math.min.apply(null, t),
                max: o
              }
            }
          }
          , function(t, e, n) {
            var r = n(29);
            t.exports = function t(e) {
              var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
              if (r(e))
                for (var i = 0; i < e.length; i += 1)
                  t(e[i], n);
              else
                n.push(e);
              return n
            }
          }
          , function(t, e, n) {
            var r = n(29)
              , i = n(30);
            t.exports = function(t) {
              if (!r(t))
                return t;
              var e = [];
              return i(t, function(t) {
                r(t) ? i(t, function(t) {
                  e.push(t)
                }) : e.push(t)
              }),
                e
            }
          }
          , function(t, e, n) {
            var r = n(136)
              , i = n(29);
            t.exports = function(t, e) {
              for (var n = null, o = 0; o < t.length; o++) {
                var a = t[o][e];
                if (!r(a)) {
                  n = i(a) ? a[0] : a;
                  break
                }
              }
              return n
            }
          }
          , function(t, e, n) {
            var r = n(47)
              , i = n(359)
              , o = n(444);
            t.exports = function(t, e) {
              var n = void 0;
              if (r(e) && (n = e),
              i(e) && (n = function(t) {
                  return o(t, e)
                }
              ),
                n)
                for (var a = 0; a < t.length; a += 1)
                  if (n(t[a]))
                    return t[a];
              return null
            }
          }
          , function(t, e, n) {
            var r = n(384)
              , i = n(368);
            t.exports = function(t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
              return r(t, function(t) {
                return !i(e, t)
              })
            }
          }
          , function(t, e, n) {
            t.exports = {
              contains: n(368),
              difference: n(582),
              find: n(581),
              firstValue: n(580),
              flatten: n(579),
              flattenDeep: n(578),
              getRange: n(577),
              merge: n(576),
              pull: n(442),
              pullAt: n(441),
              reduce: n(575),
              remove: n(574),
              sortBy: n(573),
              union: n(572),
              uniq: n(440),
              valuesOfKey: n(571)
            }
          }
          , function(t, e) {
            t.exports = function(t, e) {
              var n = this.getStyle(t, "width", e);
              return "auto" === n && (n = t.offsetWidth),
                parseFloat(n)
            }
          }
          , function(t, e, n) {
            var r = n(136);
            t.exports = function(t, e, n) {
              try {
                return window.getComputedStyle ? window.getComputedStyle(t, null)[e] : t.currentStyle[e]
              } catch (t) {
                return r(n) ? null : n
              }
            }
          }
          , function(t, e) {
            t.exports = function() {
              return window.devicePixelRatio ? window.devicePixelRatio : 2
            }
          }
          , function(t, e) {
            t.exports = function(t, e) {
              var n = this.getWidth(t, e)
                , r = parseFloat(this.getStyle(t, "borderLeftWidth")) || 0
                , i = parseFloat(this.getStyle(t, "paddingLeft")) || 0
                , o = parseFloat(this.getStyle(t, "paddingRight")) || 0;
              return n + r + (parseFloat(this.getStyle(t, "borderRightWidth")) || 0) + i + o
            }
          }
          , function(t, e) {
            t.exports = function(t, e) {
              var n = this.getHeight(t, e)
                , r = parseFloat(this.getStyle(t, "borderTopWidth")) || 0
                , i = parseFloat(this.getStyle(t, "paddingTop")) || 0
                , o = parseFloat(this.getStyle(t, "paddingBottom")) || 0;
              return n + r + (parseFloat(this.getStyle(t, "borderBottomWidth")) || 0) + i + o
            }
          }
          , function(t, e) {
            t.exports = function(t, e) {
              var n = this.getStyle(t, "height", e);
              return "auto" === n && (n = t.offsetHeight),
                parseFloat(n)
            }
          }
          , function(t, e) {
            t.exports = function(t, e) {
              if (t && t.getBoundingClientRect) {
                var n = t.getBoundingClientRect()
                  , r = document.documentElement.clientTop
                  , i = document.documentElement.clientLeft;
                return {
                  top: n.top - r,
                  bottom: n.bottom - r,
                  left: n.left - i,
                  right: n.right - i
                }
              }
              return e || null
            }
          }
          , function(t, e) {
            t.exports = function(t, e, n) {
              if (t) {
                if (t.addEventListener)
                  return t.addEventListener(e, n, !1),
                    {
                      remove: function() {
                        t.removeEventListener(e, n, !1)
                      }
                    };
                if (t.attachEvent)
                  return t.attachEvent("on" + e, n),
                    {
                      remove: function() {
                        t.detachEvent("on" + e, n)
                      }
                    }
              }
            }
          }
          , function(t, e, n) {
            t.exports = {
              addEventListener: n(591),
              createDom: n(447),
              getBoundingClientRect: n(590),
              getHeight: n(589),
              getOuterHeight: n(588),
              getOuterWidth: n(587),
              getRatio: n(586),
              getStyle: n(585),
              getWidth: n(584),
              modifyCSS: n(446),
              requestAnimationFrame: n(445)
            }
          }
          , function(t, e, n) {
            var r = n(30)
              , i = n(369)
              , o = n(592)
              , a = n(583)
              , u = n(570)
              , s = n(567)
              , c = n(563)
              , h = n(553)
              , l = n(552)
              , f = n(548)
              , d = n(542)
              , p = n(537)
              , g = {
              DOMUtil: o,
              DomUtil: o,
              MatrixUtil: h,
              PathUtil: f,
              arrayUtil: a,
              domUtil: o,
              eventUtil: u,
              formatUtil: s,
              mathUtil: c,
              matrixUtil: h,
              objectUtil: l,
              stringUtil: d,
              pathUtil: f,
              typeUtil: p,
              augment: n(417),
              clone: n(380),
              debounce: n(530),
              deepMix: n(379),
              each: r,
              extend: n(416),
              filter: n(384),
              group: n(529),
              groupBy: n(414),
              groupToMap: n(415),
              indexOf: n(528),
              isEmpty: n(413),
              isEqual: n(378),
              isEqualWith: n(527),
              map: n(526),
              mix: i,
              pick: n(525),
              throttle: n(524),
              toArray: n(367),
              toString: n(357),
              uniqueId: n(412)
            };
            r([o, a, u, s, c, h, l, f, d, p], function(t) {
              i(g, t)
            }),
              t.exports = g
          }
          , function(t, e, n) {
            var r = n(449)
              , i = n(390)
              , o = n(146)
              , a = n(372)
              , u = n(147)
              , s = {
              Graph: n(389),
              Tree: n(455),
              Util: n(22),
              Layouts: n(387),
              G: u,
              Plugins: {},
              Components: {},
              Global: o,
              Shape: r,
              registerNode: r.registerNode,
              registerEdge: r.registerEdge,
              registerGroup: r.registerGroup,
              registerGuide: r.registerGuide,
              registerBehaviour: i.registerBehaviour,
              version: a,
              track: function(t) {
                o.track = t
              }
            };
            n(450),
              t.exports = s
          }
        ])
    }
    , function(t, e, n) {
      function r(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1,
            r.configurable = !0,
          "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
      }
      function i(t, e, n) {
        return e && r(t.prototype, e),
        n && r(t, n),
          t
      }
      var o = n(16).Util
        , a = function() {
        function t(e) {
          !function(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function")
          }(this, t);
          var n = this.getDefaultCfg();
          o.mix(!0, this, n, e),
            this.init()
        }
        return i(t, [{
          key: "getDefaultCfg",
          value: function() {
            return {}
          }
        }]),
          i(t, [{
            key: "init",
            value: function() {}
          }, {
            key: "destroy",
            value: function() {}
          }]),
          t
      }();
      t.exports = a
    }
    , function(t, e, n) {
      function r(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
            , r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
          }))),
            r.forEach(function(e) {
              i(t, e, n[e])
            })
        }
        return t
      }
      function i(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n,
          t
      }
      var o = n(16)
        , a = n(177)
        , u = n(176)
        , s = {
        whitespace: {
          9: "Tab",
          13: "Enter",
          32: "Space"
        },
        fn: {
          112: "f1 ",
          113: "f2 ",
          114: "f3 ",
          115: "f4 ",
          116: "f5 ",
          117: "f6 ",
          118: "f7 ",
          119: "f8 ",
          120: "f9 ",
          121: "f10",
          122: "f11",
          123: "f12"
        },
        letter: {
          65: "a",
          66: "b",
          67: "c",
          68: "d",
          69: "e",
          70: "f",
          71: "g",
          72: "h",
          73: "i",
          74: "j",
          75: "k",
          76: "l",
          77: "m",
          78: "n",
          79: "o",
          80: "p",
          81: "q",
          82: "r",
          83: "s",
          84: "t",
          85: "u",
          86: "v",
          87: "w",
          88: "x",
          89: "y",
          90: "z"
        },
        number: {
          48: "0",
          49: "1",
          50: "2",
          51: "3",
          52: "4",
          53: "5",
          54: "6",
          55: "7",
          56: "8",
          57: "9"
        },
        navigation: {
          37: "ArrowLeft",
          38: "ArrowUp",
          39: "ArrowRight",
          40: "ArrowDown"
        },
        symbol: {
          110: "decimal point",
          186: "semi-colon",
          187: "=",
          188: "comma",
          189: "-",
          190: "period ",
          191: "/",
          192: "grave accent",
          219: "open bracket ",
          220: "back slash ",
          221: "close bracket ",
          222: "single quote "
        },
        smallNumberKey: {
          96: "numpad 0 ",
          97: "numpad 1 ",
          98: "numpad 2 ",
          99: "numpad 3 ",
          100: "numpad 4 ",
          101: "numpad 5 ",
          102: "numpad 6 ",
          103: "numpad 7 ",
          104: "numpad 8 ",
          105: "numpad 9 "
        },
        modifierKey: {
          16: "Shift",
          17: "Ctrl ",
          18: "Alt",
          20: "caps lock"
        },
        escKey: {
          8: "Backspace",
          46: "Delete",
          27: "Escape"
        },
        homeKey: {
          91: "Windows Key / Left command",
          92: "right window key ",
          93: "Windows Menu"
        },
        computeKey: {
          106: "multiply ",
          107: "add",
          109: "subtract ",
          111: "divide "
        }
      }
        , c = r({}, o.Util, a, {
        getNodeSize: function(t) {
          if (t) {
            if (o.Util.isNumber(t))
              return [t, t];
            if (o.Util.isString(t)) {
              if (-1 === t.indexOf("*")) {
                var e = Number(t);
                return [e, e]
              }
              return t.split("*")
            }
            return t
          }
          return [96, 48]
        },
        getTypeAndChar: function(t) {
          var e;
          for (var n in t = "" + t,
            s)
            for (var r in e = n,
              s[n])
              if (r === t)
                return {
                  type: e,
                  character: s[n][r]
                };
          return {}
        },
        getKeyboradKey: function(t) {
          return t.key || c.getTypeAndChar(t.keyCode).character
        },
        getIndex: function(t) {
          return t.getParent().get("children").indexOf(t)
        },
        setId: function(t) {
          t.id || (t.id = o.Util.guid())
        },
        pointLineDistance: function(t, e, n, r, i, a) {
          var u = [n - t, r - e];
          if (o.Util.vec2.exactEquals(u, [0, 0]))
            return NaN;
          var s = [-u[1], u[0]];
          o.Util.vec2.normalize(s, s);
          var c = [i - t, a - e];
          return Math.abs(o.Util.vec2.dot(c, s))
        },
        getRectByBox: function(t, e, n) {
          return e.addShape("rect", {
            attrs: r({}, n, {
              x: t.minX,
              y: t.minY,
              width: t.maxX - t.minX,
              height: t.maxY - t.minY
            })
          })
        },
        objectToValues: function(t) {
          var e, n = [];
          for (e in t)
            t.hasOwnProperty(e) && n.push(t[e]);
          return n
        },
        getValue: function(t) {
          return o.Util.isFunction(t) ? t() : t
        },
        getContrast: function(t, e) {
          var n = {};
          return o.Util.each(e, function(e, r) {
            n[r] = t[r]
          }),
            n
        },
        arrowTo: function(t, e, n, r, i, a, u) {
          var s = [a - r, u - i]
            , c = o.Util.vec2.angleTo(s, [1, 0], !0);
          return t.transform([["r", c], ["t", e, n]]),
            t
        },
        setEndOfContenteditable: function(t) {
          var e, n;
          document.createRange ? ((e = document.createRange()).selectNodeContents(t),
            e.collapse(!1),
            (n = window.getSelection()).removeAllRanges(),
            n.addRange(e)) : document.selection && ((e = document.body.createTextRange()).moveToElementText(t),
            e.collapse(!1),
            e.select())
        },
        matches: function(t, e) {
          return (Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(t) {
              for (var e = (this.document || this.ownerDocument).querySelectorAll(t), n = e.length; --n >= 0 && e.item(n) !== this; )
                ;
              return n > -1
            }
          ).call(t, e)
        },
        delegateEvent: function(t, e, n, r) {
          return c.addEventListener(t, e, function(e) {
            for (var i = e.target || e.srcElement; i !== t; )
              c.matches(i, n) && r.call(i, Array.prototype.slice.call(arguments)),
                i = i.parentNode
          })
        },
        Palettes: u
      });
      t.exports = c
    }
    , function(t, e, n) {
      function r(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n,
          t
      }
      var i = n(179)
        , o = n(18)
        , a = n(30)
        , u = n(172)
        , s = n(16);
      i.Editor = i,
        i.Util = o,
        i.Diagram = n(43),
        i.Page = n(7),
        i.Flow = n(111),
        i.Koni = n(104),
        i.Mind = n(99),
        i.Minimap = n(84),
        i.Toolbar = n(82),
        i.Contextmenu = n(81),
        i.Itempanel = n(80),
        i.Detailpanel = n(79),
        i.Command = n(30),
        i.registerBehaviour = i.Page.registerBehaviour,
        i.registerNode = i.Page.registerNode,
        i.registerEdge = i.Page.registerEdge,
        i.registerGroup = i.Page.registerGroup,
        i.registerGuide = i.Page.registerGuide,
        i.registerCommand = a.registerCommand,
        i.version = u,
        i.Itempannel = i.Itempanel,
        i.Detailpannel = i.Detailpanel,
        i.track = function(t) {
          var e = {
            G6Editor: !0
          };
          o.isObject(t) ? s.track(function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {}
                , i = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable
              }))),
                i.forEach(function(e) {
                  r(t, e, n[e])
                })
            }
            return t
          }({}, e, t)) : t ? s.track(e) : s.track(t)
        }
        ,
        i.track(!0),
        t.exports = i
    }
    , function(t, e, n) {
      function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
              return typeof t
            }
            : function(t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
        )(t)
      }
      function i(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
            , r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
          }))),
            r.forEach(function(e) {
              o(t, e, n[e])
            })
        }
        return t
      }
      function o(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n,
          t
      }
      function a(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1,
            r.configurable = !0,
          "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
      }
      function u(t, e) {
        return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
          if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(t) : e
      }
      function s(t, e, n) {
        return (s = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
            var r = function(t, e) {
              for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = c(t)); )
                ;
              return t
            }(t, e);
            if (r) {
              var i = Object.getOwnPropertyDescriptor(r, e);
              return i.get ? i.get.call(n) : i.value
            }
          }
        )(t, e, n || t)
      }
      function c(t) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
          }
        )(t)
      }
      function h(t, e) {
        return (h = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
              t
          }
        )(t, e)
      }
      var l = n(16)
        , f = n(7)
        , d = n(21)
        , p = []
        , g = function(t) {
        function e(t) {
          var n;
          !function(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function")
          }(this, e);
          var r = {
            showHotArea: !1,
            defaultData: {
              roots: [{
                label: "思维导图",
                children: [{
                  label: "新建节点"
                }, {
                  label: "新建节点"
                }, {
                  label: "新建节点"
                }]
              }]
            },
            shortcut: {
              append: !0,
              appendChild: !0,
              collapseExpand: !0,
              selectAll: !0
            },
            labelEditable: !0,
            graph: {
              modes: {
                default: ["clickNodeSelected", "keydownMoveSelection", "clickCanvasSelected", "hoverMindExpandButton", "keydownEditLabel", "panBlank", "wheelChangeViewport", "panMindNode", "clickCollapsedButton", "clickExpandedButton", "hoverButton", "hoverNodeActived", "dblclickItemEditLabel"],
                readOnly: ["clickNodeSelected", "wheelChangeViewport", "keydownMoveSelection", "hoverNodeActived", "panCanvas", "clickExpandedButton", "hoverButton", "clickCanvasSelected"]
              },
              layout: new l.Layouts.Mindmap({
                direction: "H",
                getSubTreeSep: function(t) {
                  return t.children && t.children.length > 0 ? t.hierarchy <= 2 ? 8 : 2 : 0
                },
                getHGap: function(t) {
                  return 1 === t.hierarchy ? 8 : 2 === t.hierarchy ? 24 : 18
                },
                getVGap: function(t) {
                  return 1 === t.hierarchy ? 24 : 2 === t.hierarchy ? 24 : 2
                },
                getSide: function(t) {
                  return t.data.side ? t.data.side : "right"
                }
              }),
              mode: "default",
              defaultIntersectBox: "rect",
              nodeDefaultShape: "mind-base",
              edgeDefaultShape: "mind-edge",
              minZoom: .2,
              maxZoom: 2
            },
            align: {
              item: !1
            },
            rootShape: "mind-root",
            firstSubShape: "mind-first-sub",
            secondSubShape: "mind-second-sub",
            subShape: "mind-base",
            nodeDefaultShape: "mind-base",
            graphConstructor: l.Tree,
            defaultSide: "right"
          }
            , i = {};
          return d.each(p, function(t) {
            d.mix(i, t.CFG)
          }),
            d.mix(!0, r, i, t),
            (n = u(this, c(e).call(this, r))).isMind = !0,
            n
        }
        return function(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }),
          e && h(t, e)
        }(e, f),
          function(t, e, n) {
            e && a(t.prototype, e),
            n && a(t, n)
          }(e, [{
            key: "_init",
            value: function() {
              var t = this;
              s(c(e.prototype), "_init", this).call(this),
                d.each(p, function(e) {
                  e.INIT && t[e.INIT]()
                });
              var n = this.getGraph()
                , r = this.get("defaultData")
                , i = n.get("mode")
                , o = n.getRootGroup().addGroup();
              if (this.set("hotAreaGroup", o),
                n.edge().shape(function(t) {
                  if (n.find(t.target).getModel().isPlaceholder)
                    return "mind-placeholder-edge"
                }),
              r && this.read(r),
              "default" === i) {
                if (r) {
                  var a = this.getRoot()
                    , u = n.find(a.id);
                  this.setSelected(u, !0)
                }
              } else if ("readOnly" === i) {
                var h = this.get("shortcut");
                h.append = !1,
                  h.appendChild = !1,
                  h.selectAll = !1,
                  h.delete = !1
              }
              if (r) {
                var l = this.getRoot();
                this.focus(l.id)
              }
            }
          }, {
            key: "bindEvent",
            value: function() {
              var t = this;
              s(c(e.prototype), "bindEvent", this).call(this);
              var n = this.get("_graph");
              n.on("keydown", function(t) {
                t.domEvent.preventDefault()
              }),
                n.on("beforechange", function(e) {
                  "add" === e.action ? t._beforeAdd(e) : "changeData" === e.action && t._beforeChangeData(e)
                }),
                n.on("aftersource", function() {
                  t._setHierarchy()
                }),
                n.on("afterchange", function() {
                  t._setHotArea()
                }),
                n.on("afteritemdraw", function(t) {
                  var e = t.item
                    , n = e.getModel();
                  if (e.isEdge) {
                    var r = e.getGraphicGroup();
                    d.toBack(r, r.getParent()),
                      r.setSilent("capture", !1)
                  }
                  n.parent || (e.isRoot = !0,
                    e.deleteable = !1,
                    e.collapseExpand = !1,
                    e.appendable = !1,
                    e.dragable = !1)
                }),
                this.on("beforedelete", function(e) {
                  var n = e.items[0]
                    , r = t._getBrothers(n)
                    , i = t._getNth(n);
                  r[i - 1] ? t.setSelected(r[i - 1].id, !0) : r[i + 1] ? t.setSelected(r[i + 1].id, !0) : t.setSelected(n.getParent(), !0)
                }),
                this.on("afteritemselected", function(e) {
                  t._tryAdjustViewport(e.item)
                })
            }
          }, {
            key: "getRoot",
            value: function() {
              return this.getGraph().getSource().roots[0]
            }
          }, {
            key: "_setHierarchy",
            value: function(t) {
              var e = this.getGraph()
                , n = this.get("firstSubShape")
                , r = this.get("secondSubShape")
                , i = this.get("defaultSide");
              if (t) {
                var o = e.find(t.parent);
                if (o) {
                  var a = o.getModel();
                  t.hierarchy = a.hierarchy + 1,
                  "mind-placeholder" !== t.shape && (2 === t.hierarchy && (t.shape = n,
                  t.side || (t.side = i)),
                  3 === t.hierarchy && (t.shape = r))
                }
              } else
                (t = this.getRoot()).hierarchy = 1;
              d.traverseTree(t, function(t, e) {
                t.hierarchy = e.hierarchy + 1,
                t.side || (t.side = i),
                e.side && (t.side = e.side),
                  2 === t.hierarchy ? t.shape = n : 3 === t.hierarchy && (t.shape = r)
              }, function(t) {
                return t.children
              })
            }
          }, {
            key: "getFirstChildrenBySide",
            value: function(t) {
              var e = [];
              return this.getRoot().children.forEach(function(n) {
                n.side === t && e.push(n)
              }),
                e
            }
          }, {
            key: "_getNth",
            value: function(t) {
              return this.getGraph().getNth(t)
            }
          }, {
            key: "_getBrothers",
            value: function(t) {
              return t.getParent().getModel().children
            }
          }, {
            key: "_getMoveChildModel",
            value: function(t) {
              if (t && t.length > 0) {
                var e = t.length;
                return t[parseInt(e / 2)]
              }
            }
          }, {
            key: "_getVerticalMoveItem",
            value: function(t, e, n) {
              for (var r, i = this.getGraph().getNodes(), o = t.getBBox(), a = [o.minX, o.maxX], u = [], s = 0; s < a.length; s++)
                for (var c = a[s], h = 0; h < i.length; h++) {
                  var l = i[h]
                    , f = l.getBBox();
                  e(f, o, c) && u.push({
                    long: n(f, o),
                    node: l
                  })
                }
              return u.length > 0 && (u.sort(function(t, e) {
                return t.long - e.long
              }),
                r = u[0].node),
                r
            }
          }, {
            key: "_arrowTopItem",
            value: function(t) {
              var e = this._getBrothers(t)
                , n = this._getNth(t);
              return e[n - 1] ? e[n - 1] : this._getVerticalMoveItem(t, function(t, e, n) {
                return t.centerY < e.centerY && n <= t.maxX && n >= t.minX
              }, function(t, e) {
                return e.centerY - t.centerY
              })
            }
          }, {
            key: "_arrowBottomItem",
            value: function(t) {
              var e = this._getBrothers(t)
                , n = this._getNth(t);
              return e[n + 1] ? e[n + 1] : this._getVerticalMoveItem(t, function(t, e, n) {
                return t.centerY > e.centerY && n <= t.maxX && n >= t.minX
              }, function(t, e) {
                return t.centerY - e.centerY
              })
            }
          }, {
            key: "_arrowLeftItem",
            value: function(t) {
              var e = d.getMindNodeSide(t);
              if (t.isRoot) {
                var n = this.getFirstChildrenBySide("left");
                return this._getMoveChildModel(n)
              }
              if ("left" === e) {
                var r = t.getModel().children;
                return this._getMoveChildModel(r)
              }
              return t.getParent()
            }
          }, {
            key: "_arrowRightItem",
            value: function(t) {
              var e = d.getMindNodeSide(t);
              if (t.isRoot) {
                var n = this.getFirstChildrenBySide("right");
                return this._getMoveChildModel(n)
              }
              if ("right" === e) {
                var r = t.getModel().children;
                return this._getMoveChildModel(r)
              }
              return t.getParent()
            }
          }, {
            key: "_moveItemSelection",
            value: function(t) {
              var e = this.getGraph()
                , n = this.getSelected()[0];
              if (n) {
                var r, i = t.domEvent, o = d.getKeyboradKey(i);
                "ArrowUp" !== o || n.isRoot ? "ArrowDown" !== o || n.isRoot ? "ArrowLeft" === o ? r = this._arrowLeftItem(n) : "ArrowRight" === o && (r = this._arrowRightItem(n)) : r = this._arrowBottomItem(n) : r = this._arrowTopItem(n),
                r && (r = e.find(r.id)).isVisible() && (this.clearSelected(),
                  this.setSelected(r, !0))
              }
            }
          }, {
            key: "showLabelEditor",
            value: function(t) {
              var e = t.domEvent
                , n = this.getSelected()[0]
                , r = d.getKeyboradKey(e);
              if (n && 1 === r.length && !e.metaKey && !e.ctrlKey) {
                var i = this.get("labelTextArea");
                n && (this.beginEditLabel(n),
                  i.innerHTML = r,
                  d.setEndOfContenteditable(i))
              }
            }
          }, {
            key: "_tryAdjustViewport",
            value: function(t) {
              var e = this.get("_graph")
                , n = t.getBBox()
                , r = {
                x: n.minX,
                y: n.minY
              }
                , i = {
                x: n.maxX,
                y: n.maxY
              }
                , o = e.getDomPoint(r)
                , a = e.getDomPoint(i)
                , u = e.getWidth()
                , s = e.getHeight();
              o.x < 0 && e.translate(16 - o.x, 0),
              o.y < 0 && e.translate(0, 16 - o.y),
              a.x > u && e.translate(u - a.x - 16, 0),
              a.y > s && e.translate(0, s - a.y - 16)
            }
          }, {
            key: "_beforeChangeData",
            value: function(t) {
              var e = t.data.roots[0]
                , n = this.get("rootShape");
              e.shape = n,
                this._setHierarchy(e)
            }
          }, {
            key: "_beforeAdd",
            value: function(t) {
              var e = this.get("_graph")
                , n = t.model
                , r = e.find(n.parent);
              r.getModel().collapsed && e.update(r, {
                collapsed: !1
              }),
                this._setHierarchy(n)
            }
          }, {
            key: "_drawHotAreaShape",
            value: function() {
              var t = this.get("_graph")
                , e = this.get("hotAreaGroup")
                , n = this.get("hotAreas");
              e.clear(),
                n.forEach(function(t) {
                  e.addShape("rect", {
                    attrs: {
                      x: t.minX,
                      y: t.minY,
                      width: t.maxX - t.minX,
                      height: t.maxY - t.minY,
                      fill: t.color,
                      fillOpacity: .4
                    },
                    capture: !1
                  })
                }),
                t.draw()
            }
          }, {
            key: "_setHotArea",
            value: function() {
              var t = []
                , e = this.get("_graph")
                , n = this.getRoot()
                , r = "placeholder"
                , o = this.get("showHotArea")
                , a = e.find(n.id).getBBox();
              t.push({
                minX: a.minX - 90,
                minY: a.minY - 60,
                maxX: (a.minX + a.maxX) / 2,
                maxY: a.maxY + 60,
                parent: n,
                current: n,
                id: n.id + "left" + r,
                nth: n.children.length,
                side: "left",
                color: "orange"
              }),
                t.push({
                  minX: (a.minX + a.maxX) / 2,
                  minY: a.minY - 60,
                  maxX: a.maxX + 90,
                  maxY: a.maxY + 60,
                  parent: n,
                  current: n,
                  id: n.id + "right" + r,
                  nth: n.children.length,
                  side: "right",
                  color: "pink"
                }),
                d.traverseTree(n, function(n, o, a) {
                  var u = e.find(n.id);
                  if (!n.isPlaceholder && u && u.isVisible()) {
                    var s = function(t, e, n) {
                      var r = n.children
                        , i = t;
                      if (!n.parent)
                        for (; r[i] && r[i].side !== e.side; )
                          i++;
                      for (; r[i] && r[i].isPlaceholder; )
                        i++;
                      if (r[i] && r[i].side === e.side)
                        return r[i]
                    }(a + 1, n, o)
                      , c = function(t, e, n) {
                      var r = n.children
                        , i = t;
                      if (!n.parent)
                        for (; r[i] && r[i].side !== e.side; )
                          i--;
                      for (; r[i] && r[i].isPlaceholder; )
                        i--;
                      if (r[i] && r[i].side === e.side)
                        return r[i]
                    }(a - 1, n, o)
                      , h = e.find(n.id).getBBox()
                      , l = o.children
                      , f = 2 === n.hierarchy && "right" === n.side
                      , d = 2 === n.hierarchy && "left" === n.side;
                    if (c || t.push({
                      minX: f ? h.minX - 90 : h.minX,
                      minY: function() {
                        var t = c ? h.minY : h.minY - 16;
                        l[a - 1] && l[a - 1].isPlaceholder && l[a - 1].side === n.side && (t = e.find(l[a - 1].id).getBBox().minY);
                        return t
                      }(),
                      maxX: d ? h.maxX + 90 : h.maxX,
                      maxY: (h.minY + h.maxY) / 2,
                      parent: o,
                      id: (c ? c.id : void 0) + n.id + o.id + r,
                      side: n.side,
                      color: "yellow",
                      nth: a
                    }),
                      s) {
                      var p = e.find(s.id).getBBox();
                      t.push({
                        minX: "left" === n.side ? Math.max(h.minX, p.minX) : f ? h.minX - 90 : h.minX,
                        minY: (h.minY + h.maxY) / 2,
                        maxX: "right" === n.side ? Math.min(h.maxX, p.maxX) : d ? h.maxX + 90 : h.maxX,
                        maxY: (p.minY + p.maxY) / 2,
                        parent: o,
                        id: n.id + (s ? s.id : void 0) + o.id + r,
                        side: n.side,
                        color: "blue",
                        nth: a + 1
                      })
                    } else
                      t.push({
                        minX: f ? h.minX - 90 : h.minX,
                        minY: (h.minY + h.maxY) / 2,
                        maxX: d ? h.maxX + 90 : h.maxX,
                        maxY: function() {
                          var t = h.maxY + 16;
                          l[a + 1] && l[a + 1].isPlaceholder && l[a + 1].side === n.side && (t = e.find(l[a + 1].id).getBBox().maxY);
                          return t
                        }(),
                        parent: o,
                        id: n.id + void 0 + o.id + r,
                        color: "red",
                        nth: a + 1,
                        addOrder: "push",
                        side: n.side
                      });
                    if (!n.children || 0 === n.children.length || 1 === n.children.length && n.children[0].isPlaceholder) {
                      var g;
                      g = n.x > o.x ? {
                        minX: h.maxX,
                        minY: h.minY - 0,
                        maxX: h.maxX + 100,
                        maxY: h.maxY + 0
                      } : {
                        minX: h.minX - 100,
                        minY: h.minY - 0,
                        maxX: h.minX,
                        maxY: h.maxY + 0
                      },
                        t.push(i({}, g, {
                          parent: n,
                          id: NaN + n.id + r,
                          nth: 0,
                          color: "green",
                          side: n.side,
                          addOrder: "push"
                        }))
                    }
                  }
                }, function(t) {
                  return t.children
                }),
                this.set("hotAreas", t),
              o && this._drawHotAreaShape()
            }
          }, {
            key: "hideHotArea",
            value: function() {
              var t = this.get("_graph");
              this.get("hotAreaGroup").clear(),
                t.draw(),
                this.set("showHotArea", !1)
            }
          }, {
            key: "showHotArea",
            value: function() {
              this._drawHotAreaShape(),
                this.set("showHotArea", !0)
            }
          }, {
            key: "getHotArea",
            value: function(t) {
              var e;
              return this.get("hotAreas").forEach(function(n) {
                if (t.x > n.minX && t.x < n.maxX && t.y > n.minY && t.y < n.maxY)
                  return e = n,
                    !1
              }),
                e
            }
          }, {
            key: "saveExpandImage",
            value: function(t) {
              var e, n, r, o = this, a = this.getGraph(), u = a.getBBox(), s = a.getFitViewPadding();
              return a.saveImage(i({
                width: u.width + s[1] + s[3],
                height: u.height + s[0] + s[2],
                beforeTransform: function() {
                  var t = a.getNodes();
                  (e = t.filter(function(t) {
                    return t.getModel().collapsed
                  }).map(function(t) {
                    return t.getModel().id
                  })).forEach(function(t) {
                    a.update(t, {
                      collapsed: !1
                    })
                  }),
                    a.layout(),
                    n = o.getSelected().map(function(t) {
                      return t.id
                    }),
                    r = o.getSelected().map(function(t) {
                      return t.id
                    }),
                    o.clearSelected(),
                    o.clearActived()
                },
                afterTransform: function() {
                  e.forEach(function(t) {
                    a.update(t, {
                      collapsed: !0
                    })
                  }),
                    o.setSelected(n, !0),
                    o.setActived(r, !0)
                }
              }, t))
            }
          }, {
            key: "save",
            value: function() {
              var t = this.get("_graph").save();
              return t.roots.forEach(function(t) {
                d.traverseTree(t, function(t) {
                  delete t.x,
                    delete t.y,
                    delete t.width,
                    delete t.height,
                    delete t.parent,
                    delete t.nth,
                    delete t.hierarchy,
                    delete t.index,
                    delete t.shape
                }, function(t) {
                  return t.children
                }, !0)
              }),
                t
            }
          }]),
          e
      }();
      d.each(p, function(t) {
        d.mix(g.prototype, t.AUGMENT)
      }),
        f.setRegister(g, "mind", "page"),
        t.exports = g
    }
    , function(t, e, n) {
      function r(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n,
          t
      }
      var i = function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
            , i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
          }))),
            i.forEach(function(e) {
              r(t, e, n[e])
            })
        }
        return t
      }({}, n(14), {
        getMindNodeSide: function(t) {
          var e = t.getModel();
          if (e.side)
            return e.side;
          var n = t.getParent();
          return n ? n.getModel().side ? n.getModel().side : i.getMindNodeSide(n) : void 0
        }
      });
      t.exports = i
    }
    , function(t, e, n) {
      function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
              return typeof t
            }
            : function(t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
        )(t)
      }
      function i(t, e) {
        return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
          if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(t) : e
      }
      function o(t) {
        return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
          }
        )(t)
      }
      function a(t, e) {
        return (a = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
              t
          }
        )(t, e)
      }
      var u = n(7)
        , s = n(43)
        , c = n(42)
        , h = function(t) {
        function e(t) {
          var n;
          !function(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function")
          }(this, e);
          var r = {
            graph: {
              modes: {
                default: ["panBlank", "hoverGroupActived", "keydownCmdWheelZoom", "clickEdgeSelected", "clickNodeSelected", "clickCanvasSelected", "clickGroupSelected", "hoverNodeActived", "hoverEdgeActived", "hoverButton", "clickCollapsedButton", "clickExpandedButton", "wheelChangeViewport", "keydownShiftMultiSelected", "dragNodeAddToGroup", "dragOutFromGroup", "panItem", "hoverEdgeControlPoint", "dragEdgeControlPoint"],
                add: ["dragPanelItemAddNode"],
                readOnly: ["panCanvas"],
                move: ["panCanvas"],
                multiSelect: ["dragMultiSelect"]
              },
              mode: "default",
              defaultIntersectBox: "rect",
              nodeDefaultShape: "flow-base",
              edgeDefaultShape: "flow-smooth",
              groupDefaultShape: "flow-base"
            },
            linkNode: !1
          };
          return c.mix(!0, r, {}, t),
            (n = i(this, o(e).call(this, r))).isFlow = !0,
            n
        }
        return function(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }),
          e && a(t, e)
        }(e, s),
          e
      }();
      u.setRegister(h, "flow", "diagram"),
        t.exports = h
    }
    , , , function(t, e) {
      t.exports = {
        gridStyle: {
          stroke: "#A3B1BF",
          lineWidth: .5
        },
        cursor: {
          panningCanvas: "-webkit-grabbing",
          beforePanCanvas: "-webkit-grab"
        },
        wheelPanRatio: .3,
        alignLineStyle: {
          stroke: "#FA8C16",
          lineWidth: 1
        },
        nodeDelegationStyle: {
          stroke: "#1890FF",
          fill: "#1890FF",
          fillOpacity: .08,
          lineDash: [4, 4],
          radius: 4,
          lineWidth: 1
        },
        edgeDelegationStyle: {
          stroke: "#1890FF",
          lineDash: [4, 4],
          lineWidth: 1
        }
      }
    }
    , , , function(t, e, n) {
      function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
              return typeof t
            }
            : function(t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
        )(t)
      }
      function i(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1,
            r.configurable = !0,
          "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
      }
      function o(t, e) {
        return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
          if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(t) : e
      }
      function a(t, e, n) {
        return (a = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
            var r = function(t, e) {
              for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = u(t)); )
                ;
              return t
            }(t, e);
            if (r) {
              var i = Object.getOwnPropertyDescriptor(r, e);
              return i.get ? i.get.call(n) : i.value
            }
          }
        )(t, e, n || t)
      }
      function u(t) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
          }
        )(t)
      }
      function s(t, e) {
        return (s = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
              t
          }
        )(t, e)
      }
      var c = n(7)
        , h = n(43)
        , l = n(53)
        , f = function(t) {
        function e(t) {
          var n;
          !function(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function")
          }(this, e);
          var r = {
            graph: {
              modes: {
                default: ["panBlank", "hoverGroupActived", "keydownCmdWheelZoom", "clickEdgeSelected", "clickNodeSelected", "clickCanvasSelected", "clickGroupSelected", "hoverNodeActived", "hoverEdgeActived", "hoverButton", "clickCollapsedButton", "clickExpandedButton", "wheelChangeViewport", "keydownShiftMultiSelected", "dragNodeAddToGroup", "dragOutFromGroup", "panItem", "hoverEdgeControlPoint", "dragEdgeControlPoint"],
                add: ["dragPanelItemAddNode", "processAddEdge"],
                readOnly: ["panCanvas"],
                move: ["panCanvas"],
                multiSelect: ["dragMultiSelect"]
              },
              mode: "default",
              defaultIntersectBox: "circle",
              nodeDefaultShape: "koni-base",
              edgeDefaultShape: "koni-base",
              groupDefaultShape: "koni-base",
              minZoom: .5,
              maxZoom: 2
            },
            orbit: {
              satellite: ["forkAndLink"]
            },
            anchorLink: !1,
            noEndEdge: !1
          };
          return l.mix(!0, r, {}, t),
            (n = o(this, u(e).call(this, r))).isKoni = !0,
            n
        }
        return function(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }),
          e && s(t, e)
        }(e, h),
          function(t, e, n) {
            e && i(t.prototype, e),
            n && i(t, n)
          }(e, [{
            key: "bindEvent",
            value: function() {
              a(u(e.prototype), "bindEvent", this).call(this);
              var t = this.getGraph();
              t.on("afterchange", function(e) {
                var n = e.item
                  , r = e.action
                  , i = e.originModel
                  , o = e.updateModel;
                if (n && n.isEdge)
                  if ("add" === r || "remove" === r) {
                    var a = n.getSource()
                      , u = n.getTarget();
                    l.getParallelEdges(a, u, !0).forEach(function(t) {
                      t.update()
                    })
                  } else if ("update" === r) {
                    var s = t.find(i.source)
                      , c = t.find(i.target)
                      , h = [];
                    if (l.getParallelEdges(s, c, !0).forEach(function(t) {
                      t.update()
                    }),
                    l.isNil(o.target) && !l.isNil(o.source)) {
                      var f = t.find(o.source);
                      h = l.getParallelEdges(f, c, !0)
                    } else if (!l.isNil(o.target) && l.isNil(o.source)) {
                      var d = t.find(o.target);
                      h = l.getParallelEdges(s, d, !0)
                    } else if (!l.isNil(o.target) && !l.isNil(o.source)) {
                      var p = t.find(o.source)
                        , g = t.find(o.target);
                      h = l.getParallelEdges(p, g, !0)
                    }
                    h.forEach(function(t) {
                      t.update()
                    })
                  }
                "changeData" === r && t.getEdges().forEach(function(t) {
                  t.update()
                }),
                  t.draw()
              })
            }
          }]),
          e
      }();
      c.setRegister(f, "koni", "diagram"),
        t.exports = f
    }
    , function(t, e, n) {
      function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
              return typeof t
            }
            : function(t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
        )(t)
      }
      function i(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1,
            r.configurable = !0,
          "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
      }
      function o(t, e) {
        return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
          if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(t) : e
      }
      function a(t, e, n) {
        return (a = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
            var r = function(t, e) {
              for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = u(t)); )
                ;
              return t
            }(t, e);
            if (r) {
              var i = Object.getOwnPropertyDescriptor(r, e);
              return i.get ? i.get.call(n) : i.value
            }
          }
        )(t, e, n || t)
      }
      function u(t) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
          }
        )(t)
      }
      function s(t, e) {
        return (s = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
              t
          }
        )(t, e)
      }
      var c = n(16)
        , h = n(7)
        , l = n(8)
        , f = n(140)
        , d = n(139)
        , p = n(137)
        , g = n(133)
        , m = [f, n(132), g, d, p, n(131)]
        , v = function(t) {
        function e(t) {
          var n;
          !function(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function")
          }(this, e);
          var r = {
            shortcut: {
              copy: !0,
              paste: !0,
              selectAll: !0,
              addGroup: !0,
              unGroup: !0
            },
            graph: {
              minZoom: .2,
              maxZoom: 2
            },
            graphConstructor: c.Graph,
            noEndEdge: !0
          }
            , i = {};
          return l.each(m, function(t) {
            l.mix(i, t.CFG)
          }),
            l.mix(!0, r, i, t),
            (n = o(this, u(e).call(this, r))).isFlow = !0,
            n
        }
        return function(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }),
          e && s(t, e)
        }(e, h),
          function(t, e, n) {
            e && i(t.prototype, e),
            n && i(t, n)
          }(e, [{
            key: "_init",
            value: function() {
              var t = this;
              a(u(e.prototype), "_init", this).call(this),
                l.each(m, function(e) {
                  e.INIT && t[e.INIT]()
                })
            }
          }, {
            key: "bindEvent",
            value: function() {
              var t = this;
              a(u(e.prototype), "bindEvent", this).call(this),
                this.on("beforeitemactived", function(e) {
                  var n = e.item
                    , r = t.get("_graph").getShapeObj(n).getActivedOutterStyle(n);
                  n.isNode && t.addOutterShape(n, r)
                }),
                this.on("beforeitemunactived", function(e) {
                  var n = e.item;
                  (n.isNode || n.isGroup) && t.clearOutterShape(n)
                }),
                this.on("beforeitemselected", function(e) {
                  var n = e.item
                    , r = t.get("_graph").getShapeObj(n).getSelectedOutterStyle(n);
                  n.isNode ? t.addOutterShape(n, r) : n.isGroup && t.addOutterShape(n, r)
                }),
                this.on("beforeitemunselected", function(e) {
                  var n = e.item;
                  (n.isNode || n.isGroup) && t.clearOutterShape(n)
                })
            }
          }]),
          e
      }();
      l.each(m, function(t) {
        l.mix(v.prototype, t.AUGMENT)
      }),
        h.setRegister(v, "diagram", "page"),
        t.exports = v
    }
    , function(t, e, n) {
      var r = n(44);
      n(174),
        n(173),
        t.exports = r
    }
    , , , , , , , , , , , , function(t, e, n) {
      t.exports = n(8)
    }
    , function(t, e, n) {
      var r = n(29);
      n(130),
        n(126),
        t.exports = r
    }
    , function(t, e, n) {
      function r(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
            , r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
          }))),
            r.forEach(function(e) {
              i(t, e, n[e])
            })
        }
        return t
      }
      function i(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n,
          t
      }
      var o = n(18)
        , a = {};
      function u(t) {
        return t.getCurrentPage().getSelected().length > 0
      }
      function s(t) {
        var e = t.getCurrentPage();
        this.snapShot = e.save(),
          this.selectedItems = e.getSelected().map(function(t) {
            return t.id
          }),
        this.method && (o.isString(this.method) ? e[this.method]() : this.method(t))
      }
      function c(t) {
        var e = t.getCurrentPage();
        e.read(this.snapShot),
          e.setSelected(this.selectedItems, !0)
      }
      function h(t) {
        return t.getCurrentPage().getMode() !== this.toMode
      }
      function l(t) {
        var e = t.getCurrentPage();
        this.fromMode = e.getMode(),
          e.changeMode(this.toMode)
      }
      function f(t) {
        t.getCurrentPage().changeMode(this.fromMode)
      }
      function d(t) {
        var e = {}
          , n = [];
        return t.forEach(function(t) {
          var i = t.model
            , a = o.mix(!0, {}, r({}, i, {
            id: o.guid()
          }));
          e[i.id] = a.id,
            n.push(r({}, t, {
              model: a
            }))
        }),
          n.forEach(function(t) {
            var n = t.model;
            if (n.parent) {
              var r = e[n.parent];
              r ? n.parent = r : delete n.parent
            }
          }),
          n.sort(function(t, e) {
            return t.index - e.index
          }),
          n
      }
      a.list = [],
        a.registerCommand = function(t, e, n) {
          if (a[t])
            o.mix(a[t], e);
          else {
            var i = r({
              enable: function() {
                return !0
              },
              init: function() {},
              execute: s,
              back: c,
              shortcutCodes: void 0,
              executeTimes: 1,
              name: t,
              queue: !0
            }, e);
            n && a[n] && (i = o.mix({}, a[n], e)),
              a[t] = i,
              a.list.push(i)
          }
        }
        ,
        a.execute = function(t, e, n) {
          var r = o.mix(!0, {}, a[t], n)
            , i = e.get("_command");
          return r.enable(e) && (r.init(),
          r.queue && (i.queue.splice(i.current, i.queue.length - i.current, r),
            i.current += 1),
            e.emit("beforecommandexecute", {
              command: r
            }),
            r.execute(e),
            e.emit("aftercommandexecute", {
              command: r
            }),
            e.setCommandDOMenable()),
            r
        }
        ,
        a.enable = function(t, e) {
          return a[t].enable(e)
        }
        ,
        a.registerCommand("common", {
          back: c
        }),
        a.registerCommand("copyAdjacent", {
          enable: function() {
            return this.copyNode && this.copyNode.isNode && this.x && this.y
          },
          execute: function(t) {
            var e = this.copyNode
              , n = t.getCurrentPage()
              , r = n.getGraph()
              , i = e.getModel()
              , a = o.clone(i);
            a.id = o.guid(),
              a.x = this.x,
              a.y = this.y;
            var u = r.add("node", a)
              , s = r.add("edge", {
              source: i.id,
              target: a.id
            });
            1 === this.executeTimes && (this.addIds = [u.id, s.id],
              this.page = n)
          },
          back: function() {
            var t = this.page.getGraph();
            this.addIds.forEach(function(e) {
              t.remove(e)
            })
          }
        }),
        a.registerCommand("add", {
          enable: function() {
            return this.type && this.addModel
          },
          execute: function(t) {
            var e = t.getCurrentPage()
              , n = e.getGraph().add(this.type, this.addModel);
            1 === this.executeTimes && (this.addId = n.id,
              this.page = e)
          },
          back: function() {
            this.page.getGraph().remove(this.addId)
          }
        }),
        a.registerCommand("update", {
          enable: function() {
            return this.itemId && this.updateModel
          },
          execute: function(t) {
            var e = t.getCurrentPage()
              , n = e.getGraph()
              , r = n.find(this.itemId);
            1 === this.executeTimes && (this.originModel = o.getContrast(r.getModel(), this.updateModel),
              this.page = e),
              n.update(r, this.updateModel)
          },
          back: function() {
            var t = this.page.getGraph()
              , e = t.find(this.itemId);
            t.update(e, this.originModel)
          }
        }),
        a.registerCommand("redo", {
          queue: !1,
          enable: function(t) {
            var e = t.get("_command")
              , n = e.queue;
            return e.current < n.length
          },
          execute: function(t) {
            var e = t.get("_command");
            e.queue[e.current].execute(t),
              e.current += 1
          },
          shortcutCodes: [["metaKey", "shiftKey", "z"], ["ctrlKey", "shiftKey", "z"]]
        }),
        a.registerCommand("undo", {
          queue: !1,
          enable: function(t) {
            return t.get("_command").current > 0
          },
          execute: function(t) {
            var e = t.get("_command")
              , n = e.queue[e.current - 1];
            n.executeTimes++,
              n.back(t),
              e.current -= 1
          },
          shortcutCodes: [["metaKey", "z"], ["ctrlKey", "z"]]
        }),
        a.registerCommand("copy", {
          queue: !1,
          enable: u,
          method: function(t) {
            var e = t.getCurrentPage().getSelected()
              , n = t.get("_command")
              , i = e.map(function(t) {
              return t.getGraphicGroup()
            })
              , a = o.getChildrenBBox(i);
            n.clipboard = [],
              e.forEach(function(t) {
                o.traverseTree(t, function(t) {
                  var e = t.getModel()
                    , r = t.getGraphicGroup();
                  n.clipboard.push({
                    type: t.type,
                    index: o.getIndex(r),
                    model: e
                  })
                }, function(t) {
                  return t.getChildren && t.getChildren()
                }, !0)
              }),
              t.set("copyCenterBox", r({}, a))
          }
        }),
        a.registerCommand("pasteHere", {
          enable: function(t) {
            return t.get("_command").clipboard.length > 0
          },
          method: function(t) {
            var e = t.getCurrentPage()
              , n = t.get("_command")
              , r = this.pasteData ? this.pasteData : d(n.clipboard)
              , i = this.copyCenterBox ? this.copyCenterBox : t.get("copyCenterBox")
              , a = this.contextmenuPoint ? this.contextmenuPoint : t.get("contextmenuPoint");
            e.clearSelected(),
              this.copyCenterBox = o.clone(i),
              this.pasteData = o.clone(r),
              this.contextmenuPoint = o.clone(a),
              r.forEach(function(t) {
                var n = t.model;
                n.x && (n.x += a.x - i.minX),
                n.y && (n.y += a.y - i.minY),
                  e.add(t.type, n)
              })
          },
          back: c
        }),
        a.registerCommand("paste", {
          enable: function(t) {
            return t.get("_command").clipboard.length > 0
          },
          method: function(t) {
            var e = t.getCurrentPage()
              , n = t.get("_command")
              , r = this.pasteData ? this.pasteData : d(n.clipboard);
            e.clearSelected(),
              this.pasteData = o.clone(r),
              r.forEach(function(t) {
                var n = t.model;
                n.x && (n.x += 10),
                n.y && (n.y += 10),
                  e.add(t.type, n)
              })
          },
          back: c
        }),
        a.registerCommand("addGroup", {
          init: function() {
            this.addGroupId = o.guid()
          },
          enable: function(t) {
            return t.getCurrentPage().getSelected().length > 1
          },
          method: function(t) {
            t.getCurrentPage().addGroup({
              id: this.addGroupId
            })
          },
          back: c
        }),
        a.registerCommand("unGroup", {
          enable: function(t) {
            var e = t.getCurrentPage().getSelected();
            return 1 === e.length && e[0].isGroup
          },
          method: "unGroup",
          back: c
        }),
        a.registerCommand("delete", {
          getDeleteItems: function(t) {
            var e = t.getCurrentPage()
              , n = e.getGraph()
              , r = this.itemIds ? this.itemIds.map(function(t) {
              return n.find(t)
            }) : e.getSelected();
            return r = r.filter(function(t) {
              return !1 !== t.deleteable
            })
          },
          enable: function(t) {
            return this.getDeleteItems(t).length > 0
          },
          method: function(t) {
            var e = t.getCurrentPage()
              , n = this.getDeleteItems(t)
              , r = e.getGraph();
            e.emit("beforedelete", {
              items: n
            }),
              o.each(n, function(t) {
                r.remove(t)
              }),
              e.emit("afterdelete", {
                items: n
              }),
              this.itemIds = n.map(function(t) {
                return t.getModel().id
              })
          },
          back: c,
          shortcutCodes: ["Delete", "Backspace"]
        }),
        a.registerCommand("selectAll", {
          method: function(t) {
            var e = t.getCurrentPage();
            e.getGraph().getItems().forEach(function(t) {
              e.setSelected(t, !0)
            })
          },
          back: c,
          shortcutCodes: [["metaKey", "a"]]
        }),
        a.registerCommand("toBack", {
          enable: u,
          method: "toBack",
          back: c
        }),
        a.registerCommand("toFront", {
          enable: u,
          method: "toFront",
          back: c
        }),
        a.registerCommand("clear", {
          enable: function(t) {
            return t.getCurrentPage().getItems().length > 0
          },
          method: "clear",
          back: c
        }),
        a.registerCommand("multiSelect", {
          enable: h,
          toMode: "multiSelect",
          execute: l,
          back: f
        }),
        a.registerCommand("move", {
          enable: h,
          toMode: "move",
          execute: l,
          back: f
        }),
        t.exports = a
    }
    , , , , , , , , , function(t, e, n) {
      t.exports = n(8)
    }
    , function(t, e, n) {
      function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
              return typeof t
            }
            : function(t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
        )(t)
      }
      function i(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1,
            r.configurable = !0,
          "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
      }
      function o(t, e) {
        return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
          if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(t) : e
      }
      function a(t) {
        return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
          }
        )(t)
      }
      function u(t, e) {
        return (u = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
              t
          }
        )(t, e)
      }
      var s = n(17)
        , c = n(8)
        , h = function(t) {
        function e() {
          return function(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function")
          }(this, e),
            o(this, a(e).apply(this, arguments))
        }
        return function(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }),
          e && u(t, e)
        }(e, s),
          function(t, e, n) {
            e && i(t.prototype, e),
            n && i(t, n)
          }(e, [{
            key: "getDefaultCfg",
            value: function() {
              return {
                name: "",
                render: function() {
                  return "<button>satellite</button>"
                },
                bindEvent: function() {
                  return []
                }
              }
            }
          }, {
            key: "_renderDOM",
            value: function() {
              var t = c.createDOM(this.render(this.diagram));
              return this.dom = t,
                t.isSatellite = !0,
                t
            }
          }, {
            key: "getDOM",
            value: function() {
              return this.dom || this._renderDOM()
            }
          }, {
            key: "init",
            value: function() {
              var t = this.getDOM()
                , e = this.diagram.getGraph().getGraphContainer();
              t && (t.css({
                position: "absolute",
                visibility: "hidden"
              }),
                e.appendChild(t),
              t && this.bindEvent(t, this.diagram))
            }
          }, {
            key: "enable",
            value: function() {
              return !0
            }
          }, {
            key: "show",
            value: function() {
              this.getDOM().show()
            }
          }, {
            key: "hide",
            value: function() {
              this.getDOM().hide()
            }
          }, {
            key: "isVisible",
            value: function() {
              return "hidden" !== this.getDOM().style.visibility
            }
          }, {
            key: "destroy",
            value: function() {
              var t = this.events;
              t && t.forEach(function(t) {
                t.remove()
              })
            }
          }]),
          e
      }();
      t.exports = h
    }
    , function(t, e, n) {
      function r(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n,
          t
      }
      var i = n(14);
      t.exports = function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
            , i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
          }))),
            i.forEach(function(e) {
              r(t, e, n[e])
            })
        }
        return t
      }({}, i, {
        getParallelEdges: function(t, e) {
          var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return t.getEdges().filter(function(t) {
            var r = t.getModel();
            return r.target === e.id || n && r.source === e.id
          })
        },
        object2array: function(t) {
          var e = [];
          return i.each(t, function(t) {
            e.push(t)
          }),
            e
        }
      })
    }
    , function(t, e, n) {
      function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
              return typeof t
            }
            : function(t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
        )(t)
      }
      function i(t, e) {
        return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
          if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(t) : e
      }
      function o(t) {
        return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
          }
        )(t)
      }
      function a(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1,
            r.configurable = !0,
          "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
      }
      function u(t, e, n) {
        return e && a(t.prototype, e),
        n && a(t, n),
          t
      }
      function s(t, e) {
        return (s = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
              t
          }
        )(t, e)
      }
      var c = n(178)
        , h = n(18)
        , l = function(t) {
        function e(t) {
          var n;
          !function(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function")
          }(this, e);
          var r = (n = i(this, o(e).call(this))).getDefaultCfg();
          return n._cfg = h.mix(!0, {}, n._cfg, r, t),
            n
        }
        return function(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }),
          e && s(t, e)
        }(e, c),
          u(e, [{
            key: "getDefaultCfg",
            value: function() {
              return {}
            }
          }]),
          u(e, [{
            key: "get",
            value: function(t) {
              return this._cfg[t]
            }
          }, {
            key: "set",
            value: function(t, e) {
              this._cfg[t] = e
            }
          }, {
            key: "destroy",
            value: function() {
              this._cfg = {},
                this.destroyed = !0
            }
          }]),
          e
      }();
      t.exports = l
    }
    , , , , , , , , , , , function(t, e, n) {
      var r;
      !function(i) {
        var o = /^\s+/
          , a = /\s+$/
          , u = 0
          , s = i.round
          , c = i.min
          , h = i.max
          , l = i.random;
        function f(t, e) {
          if (t = t || "",
            e = e || {},
          t instanceof f)
            return t;
          if (!(this instanceof f))
            return new f(t,e);
          var n = function(t) {
            var e = {
              r: 0,
              g: 0,
              b: 0
            }
              , n = 1
              , r = null
              , u = null
              , s = null
              , l = !1
              , f = !1;
            "string" == typeof t && (t = function(t) {
              t = t.replace(o, "").replace(a, "").toLowerCase();
              var e, n = !1;
              if (k[t])
                t = k[t],
                  n = !0;
              else if ("transparent" == t)
                return {
                  r: 0,
                  g: 0,
                  b: 0,
                  a: 0,
                  format: "name"
                };
              if (e = X.rgb.exec(t))
                return {
                  r: e[1],
                  g: e[2],
                  b: e[3]
                };
              if (e = X.rgba.exec(t))
                return {
                  r: e[1],
                  g: e[2],
                  b: e[3],
                  a: e[4]
                };
              if (e = X.hsl.exec(t))
                return {
                  h: e[1],
                  s: e[2],
                  l: e[3]
                };
              if (e = X.hsla.exec(t))
                return {
                  h: e[1],
                  s: e[2],
                  l: e[3],
                  a: e[4]
                };
              if (e = X.hsv.exec(t))
                return {
                  h: e[1],
                  s: e[2],
                  v: e[3]
                };
              if (e = X.hsva.exec(t))
                return {
                  h: e[1],
                  s: e[2],
                  v: e[3],
                  a: e[4]
                };
              if (e = X.hex8.exec(t))
                return {
                  r: L(e[1]),
                  g: L(e[2]),
                  b: L(e[3]),
                  a: Y(e[4]),
                  format: n ? "name" : "hex8"
                };
              if (e = X.hex6.exec(t))
                return {
                  r: L(e[1]),
                  g: L(e[2]),
                  b: L(e[3]),
                  format: n ? "name" : "hex"
                };
              if (e = X.hex4.exec(t))
                return {
                  r: L(e[1] + "" + e[1]),
                  g: L(e[2] + "" + e[2]),
                  b: L(e[3] + "" + e[3]),
                  a: Y(e[4] + "" + e[4]),
                  format: n ? "name" : "hex8"
                };
              if (e = X.hex3.exec(t))
                return {
                  r: L(e[1] + "" + e[1]),
                  g: L(e[2] + "" + e[2]),
                  b: L(e[3] + "" + e[3]),
                  format: n ? "name" : "hex"
                };
              return !1
            }(t));
            "object" == typeof t && (F(t.r) && F(t.g) && F(t.b) ? (e = function(t, e, n) {
              return {
                r: 255 * j(t, 255),
                g: 255 * j(e, 255),
                b: 255 * j(n, 255)
              }
            }(t.r, t.g, t.b),
              l = !0,
              f = "%" === String(t.r).substr(-1) ? "prgb" : "rgb") : F(t.h) && F(t.s) && F(t.v) ? (r = D(t.s),
              u = D(t.v),
              e = function(t, e, n) {
                t = 6 * j(t, 360),
                  e = j(e, 100),
                  n = j(n, 100);
                var r = i.floor(t)
                  , o = t - r
                  , a = n * (1 - e)
                  , u = n * (1 - o * e)
                  , s = n * (1 - (1 - o) * e)
                  , c = r % 6;
                return {
                  r: 255 * [n, u, a, a, s, n][c],
                  g: 255 * [s, n, n, u, a, a][c],
                  b: 255 * [a, a, s, n, n, u][c]
                }
              }(t.h, r, u),
              l = !0,
              f = "hsv") : F(t.h) && F(t.s) && F(t.l) && (r = D(t.s),
              s = D(t.l),
              e = function(t, e, n) {
                var r, i, o;
                function a(t, e, n) {
                  return n < 0 && (n += 1),
                  n > 1 && (n -= 1),
                    n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
                }
                if (t = j(t, 360),
                  e = j(e, 100),
                  n = j(n, 100),
                0 === e)
                  r = i = o = n;
                else {
                  var u = n < .5 ? n * (1 + e) : n + e - n * e
                    , s = 2 * n - u;
                  r = a(s, u, t + 1 / 3),
                    i = a(s, u, t),
                    o = a(s, u, t - 1 / 3)
                }
                return {
                  r: 255 * r,
                  g: 255 * i,
                  b: 255 * o
                }
              }(t.h, r, s),
              l = !0,
              f = "hsl"),
            t.hasOwnProperty("a") && (n = t.a));
            return n = B(n),
              {
                ok: l,
                format: t.format || f,
                r: c(255, h(e.r, 0)),
                g: c(255, h(e.g, 0)),
                b: c(255, h(e.b, 0)),
                a: n
              }
          }(t);
          this._originalInput = t,
            this._r = n.r,
            this._g = n.g,
            this._b = n.b,
            this._a = n.a,
            this._roundA = s(100 * this._a) / 100,
            this._format = e.format || n.format,
            this._gradientType = e.gradientType,
          this._r < 1 && (this._r = s(this._r)),
          this._g < 1 && (this._g = s(this._g)),
          this._b < 1 && (this._b = s(this._b)),
            this._ok = n.ok,
            this._tc_id = u++
        }
        function d(t, e, n) {
          t = j(t, 255),
            e = j(e, 255),
            n = j(n, 255);
          var r, i, o = h(t, e, n), a = c(t, e, n), u = (o + a) / 2;
          if (o == a)
            r = i = 0;
          else {
            var s = o - a;
            switch (i = u > .5 ? s / (2 - o - a) : s / (o + a),
              o) {
              case t:
                r = (e - n) / s + (e < n ? 6 : 0);
                break;
              case e:
                r = (n - t) / s + 2;
                break;
              case n:
                r = (t - e) / s + 4
            }
            r /= 6
          }
          return {
            h: r,
            s: i,
            l: u
          }
        }
        function p(t, e, n) {
          t = j(t, 255),
            e = j(e, 255),
            n = j(n, 255);
          var r, i, o = h(t, e, n), a = c(t, e, n), u = o, s = o - a;
          if (i = 0 === o ? 0 : s / o,
          o == a)
            r = 0;
          else {
            switch (o) {
              case t:
                r = (e - n) / s + (e < n ? 6 : 0);
                break;
              case e:
                r = (n - t) / s + 2;
                break;
              case n:
                r = (t - e) / s + 4
            }
            r /= 6
          }
          return {
            h: r,
            s: i,
            v: u
          }
        }
        function g(t, e, n, r) {
          var i = [N(s(t).toString(16)), N(s(e).toString(16)), N(s(n).toString(16))];
          return r && i[0].charAt(0) == i[0].charAt(1) && i[1].charAt(0) == i[1].charAt(1) && i[2].charAt(0) == i[2].charAt(1) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("")
        }
        function m(t, e, n, r) {
          return [N(G(r)), N(s(t).toString(16)), N(s(e).toString(16)), N(s(n).toString(16))].join("")
        }
        function v(t, e) {
          e = 0 === e ? 0 : e || 10;
          var n = f(t).toHsl();
          return n.s -= e / 100,
            n.s = T(n.s),
            f(n)
        }
        function y(t, e) {
          e = 0 === e ? 0 : e || 10;
          var n = f(t).toHsl();
          return n.s += e / 100,
            n.s = T(n.s),
            f(n)
        }
        function x(t) {
          return f(t).desaturate(100)
        }
        function b(t, e) {
          e = 0 === e ? 0 : e || 10;
          var n = f(t).toHsl();
          return n.l += e / 100,
            n.l = T(n.l),
            f(n)
        }
        function w(t, e) {
          e = 0 === e ? 0 : e || 10;
          var n = f(t).toRgb();
          return n.r = h(0, c(255, n.r - s(-e / 100 * 255))),
            n.g = h(0, c(255, n.g - s(-e / 100 * 255))),
            n.b = h(0, c(255, n.b - s(-e / 100 * 255))),
            f(n)
        }
        function _(t, e) {
          e = 0 === e ? 0 : e || 10;
          var n = f(t).toHsl();
          return n.l -= e / 100,
            n.l = T(n.l),
            f(n)
        }
        function S(t, e) {
          var n = f(t).toHsl()
            , r = (n.h + e) % 360;
          return n.h = r < 0 ? 360 + r : r,
            f(n)
        }
        function M(t) {
          var e = f(t).toHsl();
          return e.h = (e.h + 180) % 360,
            f(e)
        }
        function P(t) {
          var e = f(t).toHsl()
            , n = e.h;
          return [f(t), f({
            h: (n + 120) % 360,
            s: e.s,
            l: e.l
          }), f({
            h: (n + 240) % 360,
            s: e.s,
            l: e.l
          })]
        }
        function O(t) {
          var e = f(t).toHsl()
            , n = e.h;
          return [f(t), f({
            h: (n + 90) % 360,
            s: e.s,
            l: e.l
          }), f({
            h: (n + 180) % 360,
            s: e.s,
            l: e.l
          }), f({
            h: (n + 270) % 360,
            s: e.s,
            l: e.l
          })]
        }
        function E(t) {
          var e = f(t).toHsl()
            , n = e.h;
          return [f(t), f({
            h: (n + 72) % 360,
            s: e.s,
            l: e.l
          }), f({
            h: (n + 216) % 360,
            s: e.s,
            l: e.l
          })]
        }
        function A(t, e, n) {
          e = e || 6,
            n = n || 30;
          var r = f(t).toHsl()
            , i = 360 / n
            , o = [f(t)];
          for (r.h = (r.h - (i * e >> 1) + 720) % 360; --e; )
            r.h = (r.h + i) % 360,
              o.push(f(r));
          return o
        }
        function C(t, e) {
          e = e || 6;
          for (var n = f(t).toHsv(), r = n.h, i = n.s, o = n.v, a = [], u = 1 / e; e--; )
            a.push(f({
              h: r,
              s: i,
              v: o
            })),
              o = (o + u) % 1;
          return a
        }
        f.prototype = {
          isDark: function() {
            return this.getBrightness() < 128
          },
          isLight: function() {
            return !this.isDark()
          },
          isValid: function() {
            return this._ok
          },
          getOriginalInput: function() {
            return this._originalInput
          },
          getFormat: function() {
            return this._format
          },
          getAlpha: function() {
            return this._a
          },
          getBrightness: function() {
            var t = this.toRgb();
            return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3
          },
          getLuminance: function() {
            var t, e, n, r = this.toRgb();
            return t = r.r / 255,
              e = r.g / 255,
              n = r.b / 255,
            .2126 * (t <= .03928 ? t / 12.92 : i.pow((t + .055) / 1.055, 2.4)) + .7152 * (e <= .03928 ? e / 12.92 : i.pow((e + .055) / 1.055, 2.4)) + .0722 * (n <= .03928 ? n / 12.92 : i.pow((n + .055) / 1.055, 2.4))
          },
          setAlpha: function(t) {
            return this._a = B(t),
              this._roundA = s(100 * this._a) / 100,
              this
          },
          toHsv: function() {
            var t = p(this._r, this._g, this._b);
            return {
              h: 360 * t.h,
              s: t.s,
              v: t.v,
              a: this._a
            }
          },
          toHsvString: function() {
            var t = p(this._r, this._g, this._b)
              , e = s(360 * t.h)
              , n = s(100 * t.s)
              , r = s(100 * t.v);
            return 1 == this._a ? "hsv(" + e + ", " + n + "%, " + r + "%)" : "hsva(" + e + ", " + n + "%, " + r + "%, " + this._roundA + ")"
          },
          toHsl: function() {
            var t = d(this._r, this._g, this._b);
            return {
              h: 360 * t.h,
              s: t.s,
              l: t.l,
              a: this._a
            }
          },
          toHslString: function() {
            var t = d(this._r, this._g, this._b)
              , e = s(360 * t.h)
              , n = s(100 * t.s)
              , r = s(100 * t.l);
            return 1 == this._a ? "hsl(" + e + ", " + n + "%, " + r + "%)" : "hsla(" + e + ", " + n + "%, " + r + "%, " + this._roundA + ")"
          },
          toHex: function(t) {
            return g(this._r, this._g, this._b, t)
          },
          toHexString: function(t) {
            return "#" + this.toHex(t)
          },
          toHex8: function(t) {
            return function(t, e, n, r, i) {
              var o = [N(s(t).toString(16)), N(s(e).toString(16)), N(s(n).toString(16)), N(G(r))];
              if (i && o[0].charAt(0) == o[0].charAt(1) && o[1].charAt(0) == o[1].charAt(1) && o[2].charAt(0) == o[2].charAt(1) && o[3].charAt(0) == o[3].charAt(1))
                return o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0);
              return o.join("")
            }(this._r, this._g, this._b, this._a, t)
          },
          toHex8String: function(t) {
            return "#" + this.toHex8(t)
          },
          toRgb: function() {
            return {
              r: s(this._r),
              g: s(this._g),
              b: s(this._b),
              a: this._a
            }
          },
          toRgbString: function() {
            return 1 == this._a ? "rgb(" + s(this._r) + ", " + s(this._g) + ", " + s(this._b) + ")" : "rgba(" + s(this._r) + ", " + s(this._g) + ", " + s(this._b) + ", " + this._roundA + ")"
          },
          toPercentageRgb: function() {
            return {
              r: s(100 * j(this._r, 255)) + "%",
              g: s(100 * j(this._g, 255)) + "%",
              b: s(100 * j(this._b, 255)) + "%",
              a: this._a
            }
          },
          toPercentageRgbString: function() {
            return 1 == this._a ? "rgb(" + s(100 * j(this._r, 255)) + "%, " + s(100 * j(this._g, 255)) + "%, " + s(100 * j(this._b, 255)) + "%)" : "rgba(" + s(100 * j(this._r, 255)) + "%, " + s(100 * j(this._g, 255)) + "%, " + s(100 * j(this._b, 255)) + "%, " + this._roundA + ")"
          },
          toName: function() {
            return 0 === this._a ? "transparent" : !(this._a < 1) && (I[g(this._r, this._g, this._b, !0)] || !1)
          },
          toFilter: function(t) {
            var e = "#" + m(this._r, this._g, this._b, this._a)
              , n = e
              , r = this._gradientType ? "GradientType = 1, " : "";
            if (t) {
              var i = f(t);
              n = "#" + m(i._r, i._g, i._b, i._a)
            }
            return "progid:DXImageTransform.Microsoft.gradient(" + r + "startColorstr=" + e + ",endColorstr=" + n + ")"
          },
          toString: function(t) {
            var e = !!t;
            t = t || this._format;
            var n = !1
              , r = this._a < 1 && this._a >= 0;
            return e || !r || "hex" !== t && "hex6" !== t && "hex3" !== t && "hex4" !== t && "hex8" !== t && "name" !== t ? ("rgb" === t && (n = this.toRgbString()),
            "prgb" === t && (n = this.toPercentageRgbString()),
            "hex" !== t && "hex6" !== t || (n = this.toHexString()),
            "hex3" === t && (n = this.toHexString(!0)),
            "hex4" === t && (n = this.toHex8String(!0)),
            "hex8" === t && (n = this.toHex8String()),
            "name" === t && (n = this.toName()),
            "hsl" === t && (n = this.toHslString()),
            "hsv" === t && (n = this.toHsvString()),
            n || this.toHexString()) : "name" === t && 0 === this._a ? this.toName() : this.toRgbString()
          },
          clone: function() {
            return f(this.toString())
          },
          _applyModification: function(t, e) {
            var n = t.apply(null, [this].concat([].slice.call(e)));
            return this._r = n._r,
              this._g = n._g,
              this._b = n._b,
              this.setAlpha(n._a),
              this
          },
          lighten: function() {
            return this._applyModification(b, arguments)
          },
          brighten: function() {
            return this._applyModification(w, arguments)
          },
          darken: function() {
            return this._applyModification(_, arguments)
          },
          desaturate: function() {
            return this._applyModification(v, arguments)
          },
          saturate: function() {
            return this._applyModification(y, arguments)
          },
          greyscale: function() {
            return this._applyModification(x, arguments)
          },
          spin: function() {
            return this._applyModification(S, arguments)
          },
          _applyCombination: function(t, e) {
            return t.apply(null, [this].concat([].slice.call(e)))
          },
          analogous: function() {
            return this._applyCombination(A, arguments)
          },
          complement: function() {
            return this._applyCombination(M, arguments)
          },
          monochromatic: function() {
            return this._applyCombination(C, arguments)
          },
          splitcomplement: function() {
            return this._applyCombination(E, arguments)
          },
          triad: function() {
            return this._applyCombination(P, arguments)
          },
          tetrad: function() {
            return this._applyCombination(O, arguments)
          }
        },
          f.fromRatio = function(t, e) {
            if ("object" == typeof t) {
              var n = {};
              for (var r in t)
                t.hasOwnProperty(r) && (n[r] = "a" === r ? t[r] : D(t[r]));
              t = n
            }
            return f(t, e)
          }
          ,
          f.equals = function(t, e) {
            return !(!t || !e) && f(t).toRgbString() == f(e).toRgbString()
          }
          ,
          f.random = function() {
            return f.fromRatio({
              r: l(),
              g: l(),
              b: l()
            })
          }
          ,
          f.mix = function(t, e, n) {
            n = 0 === n ? 0 : n || 50;
            var r = f(t).toRgb()
              , i = f(e).toRgb()
              , o = n / 100;
            return f({
              r: (i.r - r.r) * o + r.r,
              g: (i.g - r.g) * o + r.g,
              b: (i.b - r.b) * o + r.b,
              a: (i.a - r.a) * o + r.a
            })
          }
          ,
          f.readability = function(t, e) {
            var n = f(t)
              , r = f(e);
            return (i.max(n.getLuminance(), r.getLuminance()) + .05) / (i.min(n.getLuminance(), r.getLuminance()) + .05)
          }
          ,
          f.isReadable = function(t, e, n) {
            var r, i, o = f.readability(t, e);
            switch (i = !1,
            (r = function(t) {
              var e, n;
              e = ((t = t || {
                level: "AA",
                size: "small"
              }).level || "AA").toUpperCase(),
                n = (t.size || "small").toLowerCase(),
              "AA" !== e && "AAA" !== e && (e = "AA");
              "small" !== n && "large" !== n && (n = "small");
              return {
                level: e,
                size: n
              }
            }(n)).level + r.size) {
              case "AAsmall":
              case "AAAlarge":
                i = o >= 4.5;
                break;
              case "AAlarge":
                i = o >= 3;
                break;
              case "AAAsmall":
                i = o >= 7
            }
            return i
          }
          ,
          f.mostReadable = function(t, e, n) {
            var r, i, o, a, u = null, s = 0;
            i = (n = n || {}).includeFallbackColors,
              o = n.level,
              a = n.size;
            for (var c = 0; c < e.length; c++)
              (r = f.readability(t, e[c])) > s && (s = r,
                u = f(e[c]));
            return f.isReadable(t, u, {
              level: o,
              size: a
            }) || !i ? u : (n.includeFallbackColors = !1,
              f.mostReadable(t, ["#fff", "#000"], n))
          }
        ;
        var k = f.names = {
          aliceblue: "f0f8ff",
          antiquewhite: "faebd7",
          aqua: "0ff",
          aquamarine: "7fffd4",
          azure: "f0ffff",
          beige: "f5f5dc",
          bisque: "ffe4c4",
          black: "000",
          blanchedalmond: "ffebcd",
          blue: "00f",
          blueviolet: "8a2be2",
          brown: "a52a2a",
          burlywood: "deb887",
          burntsienna: "ea7e5d",
          cadetblue: "5f9ea0",
          chartreuse: "7fff00",
          chocolate: "d2691e",
          coral: "ff7f50",
          cornflowerblue: "6495ed",
          cornsilk: "fff8dc",
          crimson: "dc143c",
          cyan: "0ff",
          darkblue: "00008b",
          darkcyan: "008b8b",
          darkgoldenrod: "b8860b",
          darkgray: "a9a9a9",
          darkgreen: "006400",
          darkgrey: "a9a9a9",
          darkkhaki: "bdb76b",
          darkmagenta: "8b008b",
          darkolivegreen: "556b2f",
          darkorange: "ff8c00",
          darkorchid: "9932cc",
          darkred: "8b0000",
          darksalmon: "e9967a",
          darkseagreen: "8fbc8f",
          darkslateblue: "483d8b",
          darkslategray: "2f4f4f",
          darkslategrey: "2f4f4f",
          darkturquoise: "00ced1",
          darkviolet: "9400d3",
          deeppink: "ff1493",
          deepskyblue: "00bfff",
          dimgray: "696969",
          dimgrey: "696969",
          dodgerblue: "1e90ff",
          firebrick: "b22222",
          floralwhite: "fffaf0",
          forestgreen: "228b22",
          fuchsia: "f0f",
          gainsboro: "dcdcdc",
          ghostwhite: "f8f8ff",
          gold: "ffd700",
          goldenrod: "daa520",
          gray: "808080",
          green: "008000",
          greenyellow: "adff2f",
          grey: "808080",
          honeydew: "f0fff0",
          hotpink: "ff69b4",
          indianred: "cd5c5c",
          indigo: "4b0082",
          ivory: "fffff0",
          khaki: "f0e68c",
          lavender: "e6e6fa",
          lavenderblush: "fff0f5",
          lawngreen: "7cfc00",
          lemonchiffon: "fffacd",
          lightblue: "add8e6",
          lightcoral: "f08080",
          lightcyan: "e0ffff",
          lightgoldenrodyellow: "fafad2",
          lightgray: "d3d3d3",
          lightgreen: "90ee90",
          lightgrey: "d3d3d3",
          lightpink: "ffb6c1",
          lightsalmon: "ffa07a",
          lightseagreen: "20b2aa",
          lightskyblue: "87cefa",
          lightslategray: "789",
          lightslategrey: "789",
          lightsteelblue: "b0c4de",
          lightyellow: "ffffe0",
          lime: "0f0",
          limegreen: "32cd32",
          linen: "faf0e6",
          magenta: "f0f",
          maroon: "800000",
          mediumaquamarine: "66cdaa",
          mediumblue: "0000cd",
          mediumorchid: "ba55d3",
          mediumpurple: "9370db",
          mediumseagreen: "3cb371",
          mediumslateblue: "7b68ee",
          mediumspringgreen: "00fa9a",
          mediumturquoise: "48d1cc",
          mediumvioletred: "c71585",
          midnightblue: "191970",
          mintcream: "f5fffa",
          mistyrose: "ffe4e1",
          moccasin: "ffe4b5",
          navajowhite: "ffdead",
          navy: "000080",
          oldlace: "fdf5e6",
          olive: "808000",
          olivedrab: "6b8e23",
          orange: "ffa500",
          orangered: "ff4500",
          orchid: "da70d6",
          palegoldenrod: "eee8aa",
          palegreen: "98fb98",
          paleturquoise: "afeeee",
          palevioletred: "db7093",
          papayawhip: "ffefd5",
          peachpuff: "ffdab9",
          peru: "cd853f",
          pink: "ffc0cb",
          plum: "dda0dd",
          powderblue: "b0e0e6",
          purple: "800080",
          rebeccapurple: "663399",
          red: "f00",
          rosybrown: "bc8f8f",
          royalblue: "4169e1",
          saddlebrown: "8b4513",
          salmon: "fa8072",
          sandybrown: "f4a460",
          seagreen: "2e8b57",
          seashell: "fff5ee",
          sienna: "a0522d",
          silver: "c0c0c0",
          skyblue: "87ceeb",
          slateblue: "6a5acd",
          slategray: "708090",
          slategrey: "708090",
          snow: "fffafa",
          springgreen: "00ff7f",
          steelblue: "4682b4",
          tan: "d2b48c",
          teal: "008080",
          thistle: "d8bfd8",
          tomato: "ff6347",
          turquoise: "40e0d0",
          violet: "ee82ee",
          wheat: "f5deb3",
          white: "fff",
          whitesmoke: "f5f5f5",
          yellow: "ff0",
          yellowgreen: "9acd32"
        }
          , I = f.hexNames = function(t) {
          var e = {};
          for (var n in t)
            t.hasOwnProperty(n) && (e[t[n]] = n);
          return e
        }(k);
        function B(t) {
          return t = parseFloat(t),
          (isNaN(t) || t < 0 || t > 1) && (t = 1),
            t
        }
        function j(t, e) {
          (function(t) {
              return "string" == typeof t && -1 != t.indexOf(".") && 1 === parseFloat(t)
            }
          )(t) && (t = "100%");
          var n = function(t) {
            return "string" == typeof t && -1 != t.indexOf("%")
          }(t);
          return t = c(e, h(0, parseFloat(t))),
          n && (t = parseInt(t * e, 10) / 100),
            i.abs(t - e) < 1e-6 ? 1 : t % e / parseFloat(e)
        }
        function T(t) {
          return c(1, h(0, t))
        }
        function L(t) {
          return parseInt(t, 16)
        }
        function N(t) {
          return 1 == t.length ? "0" + t : "" + t
        }
        function D(t) {
          return t <= 1 && (t = 100 * t + "%"),
            t
        }
        function G(t) {
          return i.round(255 * parseFloat(t)).toString(16)
        }
        function Y(t) {
          return L(t) / 255
        }
        var X = function() {
          var t = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)"
            , e = "[\\s|\\(]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")\\s*\\)?"
            , n = "[\\s|\\(]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")\\s*\\)?";
          return {
            CSS_UNIT: new RegExp(t),
            rgb: new RegExp("rgb" + e),
            rgba: new RegExp("rgba" + n),
            hsl: new RegExp("hsl" + e),
            hsla: new RegExp("hsla" + n),
            hsv: new RegExp("hsv" + e),
            hsva: new RegExp("hsva" + n),
            hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
          }
        }();
        function F(t) {
          return !!X.CSS_UNIT.exec(t)
        }
        void 0 !== t && t.exports ? t.exports = f : void 0 === (r = function() {
          return f
        }
          .call(e, n, e, t)) || (t.exports = r)
      }(Math)
    }
    , , , , , , , , , , , , function(t, e, n) {
      function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
              return typeof t
            }
            : function(t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
        )(t)
      }
      function i(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1,
            r.configurable = !0,
          "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
      }
      function o(t, e) {
        return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
          if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(t) : e
      }
      function a(t) {
        return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
          }
        )(t)
      }
      function u(t, e) {
        return (u = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
              t
          }
        )(t, e)
      }
      var s = n(18)
        , c = n(17)
        , h = function(t) {
        function e() {
          return function(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function")
          }(this, e),
            o(this, a(e).apply(this, arguments))
        }
        return function(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }),
          e && u(t, e)
        }(e, c),
          function(t, e, n) {
            e && i(t.prototype, e),
            n && i(t, n)
          }(e, [{
            key: "getDefaultCfg",
            value: function() {
              return {
                type: "detailpanel",
                container: null
              }
            }
          }, {
            key: "init",
            value: function() {
              this._initContainer()
            }
          }, {
            key: "_initContainer",
            value: function() {
              var t = this.container;
              if (!t)
                throw new Error("please set the container for the detailpanel !");
              s.isString(t) && (t = document.getElementById(t)),
                this.containerDom = t,
                this.switch("canvas-selected")
            }
          }, {
            key: "switch",
            value: function(t) {
              var e = this.containerDom.getElementsByClassName("panel");
              s.each(e, function(e) {
                e.dataset.status === t ? e.style.display = "block" : e.style.display = "none"
              })
            }
          }, {
            key: "bindEvent",
            value: function() {
              var t = this.editor
                , e = this.getItems;
              s.each(e, function(e) {
                s.addEventListener(e, "mousedown", function() {
                  var n = e.dataset;
                  t.getCurrentPage().beginAdd(n.type, {
                    shape: n.shape
                  })
                })
              }),
                s.addEventListener(window, "mouseup", function() {
                  t.getCurrentPage().cancelAdd()
                })
            }
          }]),
          e
      }();
      t.exports = h
    }
    , function(t, e, n) {
      function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
              return typeof t
            }
            : function(t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
        )(t)
      }
      function i(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1,
            r.configurable = !0,
          "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
      }
      function o(t, e) {
        return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
          if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(t) : e
      }
      function a(t) {
        return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
          }
        )(t)
      }
      function u(t, e) {
        return (u = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
              t
          }
        )(t, e)
      }
      var s = n(18)
        , c = n(17)
        , h = function(t) {
        function e() {
          return function(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function")
          }(this, e),
            o(this, a(e).apply(this, arguments))
        }
        return function(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }),
          e && u(t, e)
        }(e, c),
          function(t, e, n) {
            e && i(t.prototype, e),
            n && i(t, n)
          }(e, [{
            key: "getDefaultCfg",
            value: function() {
              return {
                type: "itempanel",
                container: null,
                getItemModel: function(t) {
                  return s.clone(t.dataset)
                },
                dataFormatters: {
                  size: s.getNodeSize,
                  labelOffsetX: Number,
                  labelOffsetY: Number
                }
              }
            }
          }, {
            key: "init",
            value: function() {
              this._initContainer()
            }
          }, {
            key: "_initContainer",
            value: function() {
              var t = this.container;
              if (!t)
                throw new Error("please set the container for the itempanel !");
              s.isString(t) && (t = document.getElementById(t)),
                this.containerDom = t
            }
          }, {
            key: "bindEvent",
            value: function() {
              var t, e = this.editor, n = this;
              function r() {
                var n = e.getCurrentPage();
                t && (n.cancelAdd(),
                  t = void 0)
              }
              s.delegateEvent(this.containerDom, "mousedown", ".getItem", function() {
                var r = n.getItemModel ? n.getItemModel : n.getItemData;
                t = r(this),
                  e.getCurrentPage().beginAdd(t.type, t)
              }),
                s.addEventListener(window, "mouseup", function() {
                  r()
                }),
                s.addEventListener(window, "mouseleave", function() {
                  r()
                })
            }
          }]),
          e
      }();
      t.exports = h
    }
    , function(t, e, n) {
      function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
              return typeof t
            }
            : function(t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
        )(t)
      }
      function i(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1,
            r.configurable = !0,
          "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
      }
      function o(t, e) {
        return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
          if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(t) : e
      }
      function a(t) {
        return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
          }
        )(t)
      }
      function u(t, e) {
        return (u = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
              t
          }
        )(t, e)
      }
      var s = n(18)
        , c = n(17)
        , h = function(t) {
        function e() {
          return function(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function")
          }(this, e),
            o(this, a(e).apply(this, arguments))
        }
        return function(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }),
          e && u(t, e)
        }(e, c),
          function(t, e, n) {
            e && i(t.prototype, e),
            n && i(t, n)
          }(e, [{
            key: "getDefaultCfg",
            value: function() {
              return {
                type: "contextmenu",
                container: null
              }
            }
          }, {
            key: "init",
            value: function() {
              this._initContainer()
            }
          }, {
            key: "_initContainer",
            value: function() {
              var t = this.container;
              if (!t)
                throw new Error("please set the container for the tontextmenu !");
              s.isString(t) && (t = document.getElementById(t));
              var e = t.getElementsByClassName("command");
              t.style.position = "absolute",
                t.style["z-index"] = 2,
                t.style.top = "0px",
                t.style.left = "0px",
                this.commands = e,
                this.containerDom = t
            }
          }, {
            key: "bindEvent",
            value: function() {
              var t = this
                , e = this.commands;
              s.each(e, function(e) {
                s.addEventListener(e, "click", function() {
                  -1 === e.className.indexOf("disable") && t.hide()
                })
              })
            }
          }, {
            key: "switch",
            value: function(t) {
              var e = this.containerDom.getElementsByClassName("menu");
              s.each(e, function(e) {
                e.dataset.status === t ? e.style.display = "block" : e.style.display = "none"
              })
            }
          }, {
            key: "getCommandDoms",
            value: function() {
              return this.commands
            }
          }, {
            key: "show",
            value: function() {
              var t = this.containerDom;
              this.editor.getCurrentPage().setSignal("preventWheelPan", !0),
                t.style.display = "block"
            }
          }, {
            key: "hide",
            value: function() {
              var t = this.containerDom;
              this.editor.getCurrentPage().setSignal("preventWheelPan", !1),
                t.style.display = "none"
            }
          }, {
            key: "move",
            value: function(t, e) {
              var n = this.containerDom
                , r = s.getBoundingClientRect(n)
                , i = parseFloat(s.getStyle(n, "top"))
                , o = parseFloat(s.getStyle(n, "left"));
              n.style.left = o + (t - r.left) + "px",
                n.style.top = i + (e - r.top) + "px"
            }
          }]),
          e
      }();
      t.exports = h
    }
    , function(t, e, n) {
      function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
              return typeof t
            }
            : function(t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
        )(t)
      }
      function i(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1,
            r.configurable = !0,
          "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
      }
      function o(t, e) {
        return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
          if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(t) : e
      }
      function a(t) {
        return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
          }
        )(t)
      }
      function u(t, e) {
        return (u = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
              t
          }
        )(t, e)
      }
      var s = n(18)
        , c = n(17)
        , h = function(t) {
        function e() {
          return function(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function")
          }(this, e),
            o(this, a(e).apply(this, arguments))
        }
        return function(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }),
          e && u(t, e)
        }(e, c),
          function(t, e, n) {
            e && i(t.prototype, e),
            n && i(t, n)
          }(e, [{
            key: "getDefaultCfg",
            value: function() {
              return {
                type: "toolbar",
                container: null
              }
            }
          }, {
            key: "init",
            value: function() {
              this._initContainer()
            }
          }, {
            key: "_initContainer",
            value: function() {
              var t = this.container;
              if (!t)
                throw new Error("please set the container for the toolbar !");
              s.isString(t) && (t = document.getElementById(t));
              var e = t.getElementsByClassName("command");
              this.commands = e
            }
          }, {
            key: "getCommandDoms",
            value: function() {
              return this.commands
            }
          }]),
          e
      }();
      t.exports = h
    }
    , function(t, e, n) {
      window,
        t.exports = function(t) {
          return function(t) {
            var e = {};
            function n(r) {
              if (e[r])
                return e[r].exports;
              var i = e[r] = {
                i: r,
                l: !1,
                exports: {}
              };
              return t[r].call(i.exports, i, i.exports, n),
                i.l = !0,
                i.exports
            }
            return n.m = t,
              n.c = e,
              n.d = function(t, e, r) {
                n.o(t, e) || Object.defineProperty(t, e, {
                  enumerable: !0,
                  get: r
                })
              }
              ,
              n.r = function(t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Module"
                }),
                  Object.defineProperty(t, "__esModule", {
                    value: !0
                  })
              }
              ,
              n.t = function(t, e) {
                if (1 & e && (t = n(t)),
                8 & e)
                  return t;
                if (4 & e && "object" == typeof t && t && t.__esModule)
                  return t;
                var r = Object.create(null);
                if (n.r(r),
                  Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: t
                  }),
                2 & e && "string" != typeof t)
                  for (var i in t)
                    n.d(r, i, function(e) {
                      return t[e]
                    }
                      .bind(null, i));
                return r
              }
              ,
              n.n = function(t) {
                var e = t && t.__esModule ? function() {
                    return t.default
                  }
                  : function() {
                    return t
                  }
                ;
                return n.d(e, "a", e),
                  e
              }
              ,
              n.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
              }
              ,
              n.p = "",
              n(n.s = 162)
          }({
            161: function(t, e, n) {
              function r(t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = null != arguments[e] ? arguments[e] : {}
                    , r = Object.keys(n);
                  "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable
                  }))),
                    r.forEach(function(e) {
                      i(t, e, n[e])
                    })
                }
                return t
              }
              function i(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                }) : t[e] = n,
                  t
              }
              var o = n(3)
                , a = o.Util
                , u = o.G.Canvas
                , s = function() {
                function t(t) {
                  a.mix(this, r({
                    type: "minimap",
                    container: null,
                    isMinimap: !0,
                    backgroundCSS: {
                      height: "100%",
                      position: "absolute",
                      margin: "auto",
                      left: 0,
                      right: 0,
                      "z-index": 0
                    },
                    minimapContainerCSS: {
                      background: "#fff",
                      position: "relative",
                      overflow: "hidden"
                    },
                    viewportCSS: {
                      height: "100%",
                      position: "absolute",
                      margin: "auto",
                      left: 0,
                      right: 0,
                      "z-index": 1
                    },
                    controlLayerCSS: {
                      width: "100%",
                      height: "100%",
                      cursor: "move",
                      position: "absolute",
                      "z-index": 2
                    },
                    viewportWindowStyle: {
                      stroke: "#91D5FF"
                    },
                    viewportBackStyle: {
                      fill: "#EBEEF2",
                      fillOpacity: .65
                    },
                    getGraph: function() {}
                  }, t)),
                    this._initContainer(),
                    this._initMiniMap(),
                    this._bindEvent(),
                    this._assignDebounceRender()
                }
                var e = t.prototype;
                return e._assignDebounceRender = function() {
                  var t = this;
                  this.debounceRender = a.debounce(function() {
                    t.renderBackground(),
                      t.renderViewPort()
                  }, 32)
                }
                  ,
                  e.bindGraph = function(t) {
                    var e = this;
                    t.on("afterchange", function() {
                      e.debounceRender()
                    }),
                      t.on("afterlayout", function() {
                        e.debounceRender()
                      }),
                      t.on("afterviewportchange", function() {
                        e.renderViewPort()
                      }),
                      t.on("afterfilter", function() {
                        e.debounceRender()
                      })
                  }
                  ,
                  e.renderBackground = function(t) {
                    t || (t = this.getGraph());
                    var e = this.miniMapCanvas
                      , n = this.width
                      , r = this.height
                      , i = [];
                    t.saveImage({
                      graph: t,
                      width: n,
                      height: r,
                      canvas: e,
                      beforeTransform: function(e) {
                        var n = e[0];
                        t.getNodes().forEach(function(t) {
                          var e = t.getBBox()
                            , r = t.getModel()
                            , o = e.width;
                          if (o * n < 2) {
                            var u = t.getGraphicGroup()
                              , s = a.clone(u.getMatrix());
                            u.transform([["t", -r.x, -r.y], ["s", 2 / (o * n), 2 / (o * n)], ["t", r.x, r.y]]),
                              i.push({
                                item: t,
                                originMatrix: s
                              })
                          }
                        })
                      },
                      afterTransform: function() {
                        i.forEach(function(t) {
                          var e = t.item
                            , n = t.originMatrix;
                          e.getGraphicGroup().setMatrix(n)
                        })
                      }
                    }),
                      this.miniMapMatrix = e.matrix
                  }
                  ,
                  e._bindEvent = function() {
                    var t, e, n, r, i, o = this, u = this.controlLayer, s = !1;
                    function c() {
                      s = !1,
                        e = void 0,
                        r = void 0,
                        t = void 0,
                        n = void 0,
                        i = void 0
                    }
                    u.on("mousedown", function(u) {
                      o.miniMapMatrix && (i = o.getGraph(),
                        s = !0,
                        t = a.clone(i.getMatrix()),
                        e = o.miniMapMatrix[0],
                        n = t[0],
                        r = {
                          clientX: u.clientX,
                          clientY: u.clientY
                        })
                    }),
                      u.on("mouseup", function() {
                        c()
                      }),
                      u.on("mouseleave", function() {
                        c()
                      }),
                      u.on("mousemove", function(o) {
                        if (s && i) {
                          var u = r.clientX - o.clientX
                            , c = r.clientY - o.clientY
                            , h = a.clone(t);
                          a.mat3.translate(h, h, [n * u / e, n * c / e]),
                            i.updateMatrix(h)
                        }
                      })
                  }
                  ,
                  e._initMiniMap = function() {
                    var t = this.background
                      , e = this.viewPort
                      , n = this.width
                      , i = this.height
                      , o = this.viewportWindowStyle
                      , a = this.viewportBackStyle
                      , s = new u({
                      containerDOM: t,
                      width: n,
                      height: i
                    })
                      , c = new u({
                      containerDOM: e,
                      width: n,
                      height: i
                    })
                      , h = c.addShape("rect", {
                      attrs: r({
                        x: 0,
                        y: 0,
                        width: n,
                        height: i
                      }, o)
                    })
                      , l = c.addShape("path", {
                      attrs: r({
                        path: "M0,0 L1,1"
                      }, a)
                    });
                    t.css({
                      width: n + "px",
                      height: i + "px"
                    }),
                      e.css({
                        position: "absolute"
                      }),
                      this.miniMapCanvas = s,
                      this.viewportCanvas = c,
                      this.viewportWindow = h,
                      this.viewportBack = l
                  }
                  ,
                  e._initContainer = function() {
                    var t = this.container
                      , e = this.width
                      , n = this.height;
                    t = a.initDOMContainer(t, "minimap"),
                    e || (e = a.getWidth(t),
                      this.width = e),
                    n || (n = a.getHeight(t),
                      this.height = n);
                    var r = this.minimapContainerCSS;
                    r.width = e + "px",
                      r.height = n + "px";
                    var i = this.backgroundCSS
                      , o = this.viewportCSS
                      , u = this.controlLayerCSS
                      , s = a.createDOM('<div class="g6-editor-minimap-container"></div>', r)
                      , c = a.createDOM('<div class="g6-editor-minimap-background"></div>', i)
                      , h = a.createDOM('<div class="g6-editor-minimap-viewport">', o)
                      , l = a.createDOM('<div class="g6-editor-minimap-control-layer">', u);
                    t.appendChild(s),
                      s.appendChild(l),
                      s.appendChild(h),
                      s.appendChild(c),
                      this.minimapContainer = s,
                      this.background = c,
                      this.viewPort = h,
                      this.controlLayer = l
                  }
                  ,
                  e.renderViewPort = function(t) {
                    if (t || (t = this.getGraph()),
                    0 !== t.getItems().length) {
                      var e = this.viewportWindow
                        , n = this.viewportCanvas
                        , r = this.viewportBack
                        , i = this.miniMapMatrix
                        , o = t.getWidth()
                        , u = t.getHeight()
                        , s = this.width
                        , c = this.height
                        , h = t.getMatrix();
                      if (i) {
                        var l = a.invertMatrix({
                          x: 0,
                          y: 0
                        }, h)
                          , f = a.invertMatrix({
                          x: o,
                          y: u
                        }, h)
                          , d = a.applyMatrix(l, i)
                          , p = a.applyMatrix(f, i)
                          , g = p.x - d.x
                          , m = p.y - d.y;
                        r.attr({
                          path: [["M", 0, 0], ["L", s, 0], ["L", s, c], ["L", 0, c], ["L", 0, 0], ["M", d.x, d.y], ["L", d.x, p.y], ["L", p.x, p.y], ["L", p.x, d.y], ["L", d.x, d.y]]
                        }),
                          e.attr({
                            x: d.x,
                            y: d.y,
                            width: g,
                            height: m
                          }),
                          n.draw()
                      }
                    }
                  }
                  ,
                  e.destroy = function() {
                    this.minimapContainer.destroy()
                  }
                  ,
                  t
              }();
              t.exports = s
            },
            162: function(t, e, n) {
              function r(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                }) : t[e] = n,
                  t
              }
              var i = n(3)
                , o = n(161)
                , a = function() {
                function t(t) {
                  this.options = t
                }
                var e = t.prototype;
                return e.init = function() {
                  var t = this.graph
                    , e = new o(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                      var n = null != arguments[e] ? arguments[e] : {}
                        , i = Object.keys(n);
                      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                      }))),
                        i.forEach(function(e) {
                          r(t, e, n[e])
                        })
                    }
                    return t
                  }({
                    getGraph: function() {
                      return t
                    }
                  }, this.options));
                  e.bindGraph(t),
                    this.minimap = e
                }
                  ,
                  e.destroy = function() {
                    this.minimap.destroy()
                  }
                  ,
                  t
              }();
              i.Plugins["tool.minimap"] = a,
                i.Components.Minimap = o,
                t.exports = a
            },
            3: function(e, n) {
              e.exports = t
            }
          })
        }(n(16))
    }
    , function(t, e, n) {
      function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
              return typeof t
            }
            : function(t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
        )(t)
      }
      function i(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n,
          t
      }
      function o(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1,
            r.configurable = !0,
          "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
      }
      function a(t, e) {
        return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
          if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(t) : e
      }
      function u(t) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
          }
        )(t)
      }
      function s(t, e) {
        return (s = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
              t
          }
        )(t, e)
      }
      var c = n(16);
      n(83);
      var h = c.Components.Minimap
        , l = function(t) {
        function e(t) {
          return function(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function")
          }(this, e),
            a(this, u(e).call(this, function(t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {}
                  , r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                  return Object.getOwnPropertyDescriptor(n, t).enumerable
                }))),
                  r.forEach(function(e) {
                    i(t, e, n[e])
                  })
              }
              return t
            }({
              type: "minimap"
            }, t)))
        }
        return function(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }),
          e && s(t, e)
        }(e, h),
          function(t, e, n) {
            e && o(t.prototype, e),
            n && o(t, n)
          }(e, [{
            key: "bindPage",
            value: function(t) {
              var e = t.getGraph();
              this.bindGraph(e),
                this.debounceRender()
            }
          }]),
          e
      }();
      t.exports = l
    }
    , function(t, e, n) {
      var r = n(30)
        , i = n(21);
      function o(t, e, n) {
        var r = t.getGraph()
          , i = e.getModel()
          , o = t.getFirstChildrenBySide("left")
          , a = o[0] && r.find(o[0].id);
        return r.add("node", {
          id: n,
          parent: e.id,
          label: "新建节点",
          side: i.children.length > 2 ? "left" : "right",
          nth: a ? r.getNth(a) : void 0
        })
      }
      r.registerCommand("append", {
        enable: function(t) {
          var e = t.getCurrentPage()
            , n = e.getSelected();
          return e.isMind && 1 === n.length
        },
        getItem: function(t) {
          var e = t.getCurrentPage()
            , n = e.getGraph();
          return this.selectedItemId ? n.find(this.selectedItemId) : e.getSelected()[0]
        },
        execute: function(t) {
          var e, n = t.getCurrentPage(), r = n.getGraph(), i = n.getRoot(), a = this.getItem(t), u = a.getModel(), s = u.hierarchy, c = a.getParent();
          if (a.isRoot)
            e = o(n, a, this.addItemId);
          else {
            var h = r.getNth(a);
            e = r.add("node", {
              id: this.addItemId,
              parent: c.id,
              side: 2 === s && 3 === i.children.length ? "left" : u.side,
              label: "新建节点",
              nth: "left" === u.side && 2 === s ? h : h + 1
            })
          }
          n.clearSelected(),
            n.clearActived(),
            n.setSelected(e, !0),
          1 === this.executeTimes && (this.selectedItemId = a.id,
            this.addItemId = e.id,
            n.beginEditLabel(e))
        },
        back: function(t) {
          var e = t.getCurrentPage();
          e.getGraph().remove(this.addItemId),
            e.clearSelected(),
            e.clearActived(),
            e.setSelected(this.selectedItemId, !0)
        },
        shortcutCodes: ["Enter"]
      }),
        r.registerCommand("appendChild", {
          enable: function(t) {
            var e = t.getCurrentPage()
              , n = e.getSelected();
            return e.isMind && n.length > 0
          },
          getItem: function(t) {
            var e = t.getCurrentPage()
              , n = e.getGraph();
            return this.selectedItemId ? n.find(this.selectedItemId) : e.getSelected()[0]
          },
          execute: function(t) {
            var e, n = t.getCurrentPage(), r = n.getGraph(), i = this.getItem(t);
            e = i.isRoot ? o(n, i, this.addItemId) : r.add("node", {
              id: this.addItemId,
              parent: i.id,
              label: "新建节点"
            }),
              n.clearSelected(),
              n.clearActived(),
              n.setSelected(e, !0),
            1 === this.executeTimes && (this.selectedItemId = i.id,
              this.addItemId = e.id,
              n.beginEditLabel(e))
          },
          back: function(t) {
            var e = t.getCurrentPage();
            e.getGraph().remove(this.addItemId),
              e.clearSelected(),
              e.clearActived(),
              e.setSelected(this.selectedItemId, !0)
          },
          shortcutCodes: ["Tab"]
        }),
        r.registerCommand("moveMindNode", {
          enable: function(t) {
            var e = t.getCurrentPage()
              , n = e.get("panItems");
            return e.isMind && n && n.length > 0
          },
          execute: function(t) {
            var e = t.getCurrentPage()
              , n = e.getGraph()
              , r = this.newParentId
              , o = this.newNth
              , a = this.newSide
              , u = i.clone(this.model);
            delete u.shape,
              delete u.side,
              n.remove(u.id),
              i.mix(u, {
                parent: r,
                nth: o,
                side: a
              });
            var s = n.add("node", u);
            e.clearSelected(),
              e.setSelected(s, !0)
          },
          back: function(t) {
            var e = t.getCurrentPage()
              , n = e.getGraph()
              , r = this.originParentId
              , o = this.originNth
              , a = this.originSide
              , u = i.clone(this.model);
            delete u.shape,
              delete u.side,
              n.remove(u.id),
              i.mix(u, {
                parent: r,
                nth: o,
                side: a
              });
            var s = n.add("node", u);
            e.clearSelected(),
              e.setSelected(s, !0)
          }
        })
    }
    , function(t, e, n) {
      function r(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n,
          t
      }
      n(20).registerEdge("mind-placeholder-edge", {
        getOriginShapeObject: function(t) {
          return t.getGraph().getShapeObj("edge", {
            shape: "mind-edge"
          })
        },
        getPath: function(t) {
          return this.getOriginShapeObject(t).getPath(t)
        },
        getStyle: function(t) {
          return function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {}
                , i = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable
              }))),
                i.forEach(function(e) {
                  r(t, e, n[e])
                })
            }
            return t
          }({}, this.getOriginShapeObject(t).getStyle(t), {
            stroke: "#91D5FF"
          })
        }
      })
    }
    , function(t, e, n) {
      n(20).registerEdge("mind-edge", {
        getEdetal: function(t) {
          return t.children && t.children.length > 0 && !t.collapsed ? 2 === t.hierarchy ? 24 : 18 : 0
        },
        getPath: function(t) {
          var e = t.getPoints()
            , n = t.getSource()
            , r = t.getTarget()
            , i = n.getBBox()
            , o = r.getBBox()
            , a = r.getModel()
            , u = 14
            , s = 4;
          if (2 === a.hierarchy && (u = 66,
            s = 30),
          e[0].y === e[1].y) {
            var c = 3 === a.hierarchy ? 24 : 18
              , h = this.getEdetal(a);
            return i.centerX < o.centerX ? [["M", e[0].x + c, e[0].y], ["L", o.maxX + h, o.maxY]] : [["M", e[0].x + 2, e[0].y], ["L", o.minX - h, o.maxY]]
          }
          if (a.hierarchy >= 3) {
            var l = 3 === a.hierarchy ? 24 : 18
              , f = this.getEdetal(a);
            if (i.centerX < o.centerX) {
              var d = e[0].x + l;
              return [["M", e[0].x, e[0].y], ["M", d, e[0].y], ["C", d + s, e[0].y, o.minX - u, o.maxY, o.minX, o.maxY], ["L", o.maxX + f, o.maxY]]
            }
            var p = e[0].x - l;
            return [["M", e[0].x, e[0].y], ["M", p, e[0].y], ["C", p - s, e[0].y, o.maxX + u, o.maxY, o.maxX, o.maxY], ["L", o.minX - f, o.maxY]]
          }
          var g = this.getEdetal(a);
          return i.centerX < o.centerX ? [["M", e[0].x, e[0].y], ["C", e[0].x + s, e[0].y, o.minX - u, o.maxY, o.minX, o.maxY], ["L", o.maxX + g, o.maxY]] : [["M", e[0].x, e[0].y], ["C", e[0].x - s, e[0].y, o.maxX + u, o.maxY, o.maxX, o.maxY], ["L", o.minX - g, o.maxY]]
        },
        getStyle: function(t) {
          var e = t.getTarget()
            , n = 1;
          if (e) {
            var r = e.getModel();
            n = r.hierarchy <= 3 ? 3 : r.hierarchy <= 5 ? 2 : 1
          }
          return {
            stroke: "#959EA6",
            lineWidth: n
          }
        }
      })
    }
    , function(t, e, n) {
      var r = n(20)
        , i = n(21);
      r.registerNode("mind-placeholder", {
        afterDraw: function(t) {
          t.getKeyShape().isPlaceholder = !0
        },
        getPath: function(t) {
          var e, n = t.getModel().parentModel, r = this.getStyle(t), o = 0;
          return n.hierarchy <= 2 ? e = 28 : (e = 20,
            o = 4),
            i.getRectPath(-27.5, -e / 2 + o, 55, e, r.radius)
        },
        getStyle: function() {
          return {
            fill: "#91D5FF",
            radius: 4,
            lineWidth: 3
          }
        },
        drawExpandedButton: function() {},
        drawCollapsedButton: function() {},
        anchor: function() {
          return [[0, 1], [1, 1]]
        }
      })
    }
    , function(t, e, n) {
      var r = n(20)
        , i = n(21);
      r.registerNode("mind-root", {
        adjustLabelPosition: function(t, e) {
          var n = e.getBBox();
          e.attr({
            x: -n.width / 2,
            y: -n.height / 2 - 1
          })
        },
        getPath: function(t) {
          var e = this.getSize(t)
            , n = this.getStyle(t);
          return i.getRectPath(-e[0] / 2, -e[1] / 2, e[0], e[1], n.radius)
        },
        getButtonPositon: function(t, e, n) {
          return "right" === n ? {
            x: t.maxX + 2,
            y: (t.maxY + t.minY) / 2 - (e.maxY - e.minY) / 2
          } : {
            x: t.minX - (e.maxX - e.minX) - 2,
            y: (t.maxY + t.minY) / 2 - (e.maxY - e.minY) / 2
          }
        },
        getPadding: function() {
          return i.toAllPadding([12, 24])
        },
        getStyle: function() {
          return {
            fill: "#587EF7",
            stroke: "#587EF7",
            fillOpacity: 1,
            radius: 4
          }
        },
        getLabelStyle: function() {
          return {
            fontSize: 20,
            fill: "white",
            lineHeight: 28
          }
        },
        drawExpandedButton: function() {},
        drawCollapsedButton: function() {},
        panAble: !1,
        anchor: [[.45, .5], [.55, .5]]
      }, "mind-first-sub")
    }
    , function(t, e, n) {
      n(20).registerNode("mind-second-sub", {
        dy: 0,
        getPadding: function() {
          return [8, 4, 8, 4]
        },
        getLabelStyle: function() {
          return {
            fill: "rgba(38,38,38,0.85)",
            fontSize: 12,
            lineHeight: 20
          }
        }
      })
    }
    , function(t, e, n) {
      n(20).registerNode("mind-first-sub", {
        dy: 0,
        getPadding: function() {
          return [6, 12, 8, 12]
        },
        getLabelStyle: function() {
          return {
            fill: "rgba(38,38,38,0.85)",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: 20
          }
        }
      })
    }
    , function(t, e, n) {
      function r(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
            , r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
          }))),
            r.forEach(function(e) {
              i(t, e, n[e])
            })
        }
        return t
      }
      function i(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n,
          t
      }
      var o = n(20)
        , a = n(21)
        , u = {
        fill: "#000",
        textAlign: "left",
        textBaseline: "top"
      }
        , s = {
        stroke: "#959EA6",
        strokeOpacity: 0,
        fill: "#959EA6",
        cursor: "pointer"
      }
        , c = {
        stroke: "#434B54",
        fill: "#fff",
        cursor: "pointer"
      };
      o.registerNode("mind-base", {
        dy: 4,
        afterDraw: function(t) {
          var e = t.getModel();
          e.children && e.children.length > 0 && e.collapsed && this.drawExpandedButton(t)
        },
        debugDrawLayoutPoint: function(t) {
          var e = t.getModel();
          t.getGraphicGroup().addShape("circle", {
            attrs: {
              x: e.x,
              y: e.y,
              r: 5,
              fill: "red"
            }
          })
        },
        drawExpandedButton: function(t) {
          var e = t.getKeyShape().getBBox()
            , n = t.getGraphicGroup().addGroup()
            , i = n.addShape("path", {
            attrs: r({
              path: a.getRectPath(0, 0, 16, 7, 3)
            }, s)
          })
            , o = i.getBBox()
            , u = a.getMindNodeSide(t)
            , c = this.getButtonPositon(e, o, u)
            , h = {
            fill: "white",
            r: 1
          };
          n.addShape("circle", {
            attrs: r({}, h, {
              x: 4,
              y: 3.5
            }),
            capture: !1
          }),
            n.addShape("circle", {
              attrs: r({}, h, {
                x: 8,
                y: 3.5
              }),
              capture: !1
            }),
            n.addShape("circle", {
              attrs: r({}, h, {
                x: 12,
                y: 3.5
              }),
              capture: !1
            }),
            i.attr("lineAppendWidth", 20),
            n.translate(c.x, c.y),
            i.isExpandedButton = !0,
            i.isButton = !0
        },
        drawCollapsedButton: function(t) {
          var e = t.getKeyShape().getBBox()
            , n = t.getGraphicGroup().addShape("path", {
            attrs: r({
              path: a.getCollapsedButtonPath()
            }, c)
          })
            , i = n.getBBox()
            , o = a.getMindNodeSide(t)
            , u = this.getButtonPositon(e, i, o);
          n.translate(u.x, u.y),
            n.isCollapsedButton = !0,
            n.isButton = !0
        },
        getButtonPositon: function(t, e, n) {
          return "right" === n ? {
            x: t.maxX + 2,
            y: t.maxY - (e.maxY - e.minY) / 2
          } : {
            x: t.minX - (e.maxX - e.minX) - 2,
            y: t.maxY - (e.maxY - e.minY) / 2
          }
        },
        getLabel: function(t) {
          return t.getModel().label
        },
        getPadding: function() {
          return [4, 8, 4, 8]
        },
        getSize: function(t) {
          var e = t.getModel()
            , n = t.getGraphicGroup()
            , r = e.size;
          if (e.size) {
            if (a.isArray(r))
              return r;
            if (a.isNumber(r))
              return [r, r]
          }
          var i = n.findByClass("label")[0]
            , o = this.getPadding(t)
            , u = i.getBBox();
          return [u.width + o[1] + o[3], u.height + o[0] + o[2]]
        },
        getPath: function(t) {
          var e = this.getSize(t)
            , n = this.getStyle(t);
          return a.getRectPath(-e[0] / 2, -e[1] / 2 + this.dy, e[0], e[1], n.radius)
        },
        drawLabel: function(t) {
          var e = t.getGraphicGroup()
            , n = this.getLabel(t)
            , r = this.getLabelStyle(t);
          n || (n = " ");
          var i = a.mix(!0, {}, u, r, {
            x: 0,
            y: 0
          });
          a.isObject(n) ? a.mix(i, n) : i.text = n;
          var o = e.addShape("text", {
            class: "label",
            attrs: i
          });
          return this.adjustLabelText(o),
            this.adjustLabelPosition(t, o),
            o
        },
        adjustLabelText: function(t) {
          var e = t.attr("text")
            , n = t.getBBox();
          if (n.maxX - n.minX > 400) {
            var r = t.attr("font");
            e = a.getLabelTextByTextLineWidth(e, r),
              t.attr("text", e)
          }
        },
        adjustLabelPosition: function(t, e) {
          var n = this.getSize(t)
            , r = this.getPadding()
            , i = n[0]
            , o = e.getBBox();
          e.attr({
            x: -i / 2 + r[3],
            y: -o.height / 2 + this.dy
          })
        },
        getLabelStyle: function() {
          return {
            fill: "rgba(38,38,38,0.85)",
            lineHeight: 18,
            fontSize: 12
          }
        },
        getStyle: function() {
          return {
            fill: "#ccc",
            fillOpacity: 0,
            radius: 4,
            lineWidth: 2
          }
        },
        getActivedStyle: function() {
          return {
            stroke: "#44C0FF",
            lineWidth: 2
          }
        },
        getSelectedStyle: function() {
          return {
            stroke: "#1AA7EE",
            lineWidth: 2
          }
        },
        anchor: [[0, 1], [1, 1]]
      })
    }
    , function(t, e, n) {
      n(92),
        n(91),
        n(90),
        n(89),
        n(88),
        n(87),
        n(86)
    }
    , function(t, e, n) {
      n(7).registerBehaviour("keydownEditLabel", function(t) {
        t.getGraph().behaviourOn("keydown", function(e) {
          t.showLabelEditor(e)
        })
      })
    }
    , function(t, e, n) {
      n(7).registerBehaviour("keydownMoveSelection", function(t) {
        t.getGraph().on("keydown", function(e) {
          t._moveItemSelection(e)
        })
      })
    }
    , function(t, e, n) {
      n(7).registerBehaviour("hoverMindExpandButton", function(t) {
        var e = t.getGraph();
        e.behaviourOn("mouseenter", function(t) {
          var n = t.shape;
          n && n.isExpandedButton && (n.attr("fillOpacity", .8),
            e.draw())
        }),
          e.behaviourOn("mouseleave", function(t) {
            var n = t.shape;
            n && n.isExpandedButton && (n.attr("fillOpacity", 1),
              e.draw())
          })
      })
    }
    , function(t, e, n) {
      var r = n(7)
        , i = n(21);
      r.registerBehaviour("panMindNode", function(t) {
        var e, n, r, o = t.getGraph();
        function a() {
          e.nth = n;
          var i = o.add("node", e);
          t.setSelected(i, !0),
          r && o.remove(r.id)
        }
        function u() {
          o.emit("panitemend"),
            e = void 0,
            r = void 0,
            n = void 0
        }
        o.behaviourOn("beforeshowdelegation", function() {
          t.clearSelected(),
            t.clearActived()
        }),
          o.behaviourOn("node:dragstart", function(t) {
            if (2 !== t.button) {
              var r = t.item;
              !(e = r.getModel()).parent || t.shape.isCollapsedButton || t.shape.isExpandedButton ? u() : (n = o.getNth(r),
                o.remove(r))
            }
          }),
          o.behaviourOn("itempanning", function(e) {
            if (!e.shape || !e.shape.isPlaceholder) {
              var n = t.getHotArea(e)
                , i = t.getRoot();
              if (r && (n ? r.id !== n.id && o.remove(o.find(r.id)) : o.remove(o.find(r.id))),
                r = n,
                n) {
                var a = n.parent;
                if (!o.find(n.id)) {
                  var u = {
                    id: n.id,
                    parent: a.id,
                    isPlaceholder: !0,
                    parentModel: a,
                    baseline: r.parent.id === i.id ? "center" : void 0,
                    shape: "mind-placeholder",
                    nth: n.nth
                  };
                  n.side && (u.side = n.side),
                    o.add("node", u)
                }
              }
            }
          }),
          o.behaviourOn("drop", function() {
            if (e)
              if (r) {
                var s = i.clone(e);
                o.remove(r.id),
                  t.executeCommand("moveMindNode", {
                    model: s,
                    newParentId: r.parent.id,
                    newNth: r.nth,
                    newSide: r.side,
                    originParentId: e.parent,
                    originNth: n,
                    originSide: e.side
                  })
              } else
                a();
            u()
          }),
          o.behaviourOn("canvas:mouseleave", function() {
            e && (a(),
              u())
          })
      }, ["startPanItem", "processPanItem", "endPanItem"])
    }
    , function(t, e, n) {
      n(97),
        n(96),
        n(95),
        n(94)
    }
    , function(t, e, n) {
      var r = n(20);
      r.Util = n(21),
        n(98),
        n(93),
        n(85),
        t.exports = r
    }
    , function(t, e, n) {
      n(28).registerGroup("koni-base", {})
    }
    , function(t, e, n) {
      var r = n(28)
        , i = n(53)
        , o = i.vec2;
      r.registerEdge("koni-base", {
        getDefaultLabelRectPadding: function() {
          return i.toAllPadding([0, 2])
        },
        getPathByPoints: function(t) {
          var e = t.points
            , n = t.source
            , r = t.target
            , a = t.item;
          if (n && r) {
            var u = i.getParallelEdges(r, n)
              , s = i.getParallelEdges(n, r)
              , c = s.indexOf(a);
            return n === r ? (c = (s = s.filter(function(t) {
              var e = t.getModel();
              return e.source === n.id && e.target === r.id
            })).indexOf(a),
              function(t, e) {
                var n = t.getBBox()
                  , r = [n.centerX, n.centerY]
                  , i = n.width / 2
                  , a = 50 * (e + 1) + 50
                  , u = [r[0] - i / 2, r[1] - Math.sqrt(3) / 2 * i]
                  , s = [u[0] - r[0], u[1] - r[1]]
                  , c = o.scale([], s, (i + a) / i)
                  , h = [r[0] + c[0], r[1] + c[1]]
                  , l = [r[0] + i / 2, r[1] - Math.sqrt(3) / 2 * i]
                  , f = [l[0] - r[0], l[1] - r[1]]
                  , d = o.scale([], f, (i + a) / i)
                  , p = [r[0] + d[0], r[1] + d[1]];
                return [["M", u[0], u[1]], ["C", h[0], h[1], p[0], p[1], l[0], l[1]]]
              }(n, c)) : (0 === u.length && c--,
              function(t, e, n) {
                var r = t.getBBox()
                  , i = e.getBBox()
                  , a = r.centerX
                  , u = r.centerY
                  , s = 20 * (n + 1)
                  , c = [.5 * (i.centerX + a) - a, .5 * (i.centerY + u) - u]
                  , h = [-c[1], c[0]]
                  , l = o.length(h);
                o.scale(h, h, s / l);
                var f = {
                  x: c[0] + h[0] + a,
                  y: c[1] + h[1] + u
                }
                  , d = t.getLinkPoints(f)[0]
                  , p = e.getLinkPoints(f)[0];
                return [["M", d.x, d.y], ["Q", f.x, f.y, p.x, p.y]]
              }(n, r, c))
          }
          return i.pointsToPolygon(e)
        }
      })
    }
    , function(t, e, n) {
      n(28).registerNode("koni-base", {
        defaultFillPalette: 5,
        defaultStrokePalette: 5,
        activedFillPalette: 4,
        activedStrokePalette: 6,
        selectedFillPalette: 5,
        selectedStrokePalette: 6,
        anchor: null
      }, "circle")
    }
    , function(t, e, n) {
      n(102),
        n(101),
        n(100)
    }
    , function(t, e, n) {
      var r = n(28);
      n(103),
        t.exports = r
    }
    , function(t, e, n) {
      n(22).registerGroup("flow-base", {})
    }
    , function(t, e, n) {
      function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
              return typeof t
            }
            : function(t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
        )(t)
      }
      function i(t, e) {
        return function(t) {
          if (Array.isArray(t))
            return t
        }(t) || function(t, e) {
          var n = []
            , r = !0
            , i = !1
            , o = void 0;
          try {
            for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value),
            !e || n.length !== e); r = !0)
              ;
          } catch (t) {
            i = !0,
              o = t
          } finally {
            try {
              r || null == u.return || u.return()
            } finally {
              if (i)
                throw o
            }
          }
          return n
        }(t, e) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
      }
      var o = n(42)
        , a = n(22)
        , u = 16
        , s = 5;
      function c(t, e) {
        var n = Math.min(t.minX, e.minX)
          , r = Math.min(t.minY, e.minY)
          , i = Math.max(t.maxX, e.maxX)
          , o = Math.max(t.maxY, e.maxY);
        return {
          centerX: (n + i) / 2,
          centerY: (r + o) / 2,
          minX: n,
          minY: r,
          maxX: i,
          maxY: o,
          height: o - r,
          width: i - n
        }
      }
      function h(t, e) {
        return 2 * Math.abs(t.centerX - e.centerX) < t.width + e.width && 2 * Math.abs(t.centerY - e.centerY) < t.height + e.height
      }
      function l(t) {
        var e = t.x
          , n = t.y;
        return {
          centerX: e,
          centerY: n,
          minX: e,
          minY: n,
          maxX: e,
          maxY: n,
          height: 0,
          width: 0
        }
      }
      function f(t, e) {
        return 0 === t.width && 0 === t.height ? t : {
          centerX: t.centerX,
          centerY: t.centerY,
          minX: t.minX - e,
          minY: t.minY - e,
          maxX: t.maxX + e,
          maxY: t.maxY + e,
          height: t.height + 2 * e,
          width: t.width + 2 * e
        }
      }
      function d(t, e) {
        return function(t, e) {
          var n = Math.abs(t.x - e.centerX)
            , r = Math.abs(t.y - e.centerY);
          return n / e.width > r / e.height
        }(e, t) ? {
          x: e.x > t.centerX ? t.maxX : t.minX,
          y: e.y
        } : {
          x: e.x,
          y: e.y > t.centerY ? t.maxY : t.minY
        }
      }
      function p(t) {
        var e = t.minX
          , n = t.minY
          , r = t.maxX
          , i = t.maxY;
        return [{
          x: e,
          y: n
        }, {
          x: r,
          y: n
        }, {
          x: r,
          y: i
        }, {
          x: e,
          y: i
        }]
      }
      function g(t, e) {
        var n = t.x
          , r = t.y;
        return n < e.minX || n > e.maxX || r < e.minY || r > e.maxY
      }
      function m(t, e, n, r) {
        var i = e.x - t.x
          , o = e.y - t.y
          , a = r.x - n.x
          , u = r.y - n.y
          , s = (-o * (t.x - n.x) + i * (t.y - n.y)) / (-a * o + i * u)
          , c = (a * (t.y - n.y) - u * (t.x - n.x)) / (-a * o + i * u);
        return s >= 0 && s <= 1 && c >= 0 && c <= 1
      }
      function v(t, e, n) {
        if (n.width === n.height === 0)
          return !1;
        var r = i(p(n), 4)
          , o = r[0]
          , a = r[1]
          , u = r[2]
          , s = r[3];
        return m(t, e, o, a) || m(t, e, o, s) || m(t, e, a, u) || m(t, e, u, s)
      }
      function y(t) {
        return t = b(t)
      }
      function x(t, e) {
        return [t, {
          x: t.x,
          y: e.y
        }, e]
      }
      function b(t) {
        var e = []
          , n = {};
        return t.forEach(function(t) {
          var e = t.id = "".concat(t.x, "-").concat(t.y);
          n[e] = t
        }),
          o.each(n, function(t) {
            e.push(t)
          }),
          e
      }
      function w(t, e) {
        return Math.abs(t.x - e.x) + Math.abs(t.y - e.y)
      }
      function _(t, e, n, r, i) {
        return w(t, e) + w(t, n) + function(t, e) {
          var n = 0;
          return e.forEach(function(e) {
            e && (t.x === e.x && (n += -2),
            t.y === e.y && (n += -2))
          }),
            n
        }(t, [e, n, r, i])
      }
      function S(t, e, n, i, o, a, u) {
        var s = []
          , c = [e]
          , h = {}
          , l = {}
          , f = {};
        l[e.id] = 0,
          f[e.id] = _(e, n, e);
        var d = {};
        t.forEach(function(t) {
          d[t.id] = t
        });
        for (var p = function() {
          var r = void 0
            , p = 1 / 0;
          if (c.forEach(function(t) {
            f[t.id] < p && (p = f[t.id],
              r = t)
          }),
          r === n) {
            var g = [];
            return function t(e, n, r, i) {
              var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
              e.unshift(n[i]),
              r[i] && r[i] !== i && o <= 100 && t(e, n, r, r[i], o + 1)
            }(g, d, h, n.id),
              {
                v: g
              }
          }
          !function(t, e) {
            var n = t.indexOf(e);
            n > -1 && t.splice(n, 1)
          }(c, r),
            s.push(r),
            function(t, e, n, r) {
              var i = [];
              return t.forEach(function(t) {
                t !== e && (t.x !== e.x && t.y !== e.y || v(t, e, n) || v(t, e, r) || i.push(t))
              }),
                b(i)
            }(t, r, i, o).forEach(function(t) {
              if (-1 === s.indexOf(t)) {
                -1 === c.indexOf(t) && c.push(t);
                var i = f[r.id] + w(r, t);
                l[t.id] && i >= l[t.id] || (h[t.id] = r.id,
                  l[t.id] = i,
                  f[t.id] = l[t.id] + _(t, n, e, a, u))
              }
            })
        }; c.length; ) {
          var g = p();
          if ("object" === r(g))
            return g.v
        }
        return console.error("cannot find path: ", t, e, n),
          [e, n]
      }
      function M(t, e, n, r, i) {
        var o = n && n.bbox ? n.bbox : l(t)
          , a = r && r.bbox ? r.bbox : l(e);
        if (h(o, a))
          return y(x(t, e));
        var u = f(o, i)
          , s = f(a, i);
        if (h(u, s))
          return y(x(t, e));
        var m = d(u, t)
          , v = d(s, e)
          , w = function() {
          var t = []
            , e = [];
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).forEach(function(n) {
            t.push(n.x),
              e.push(n.y)
          });
          var n = Math.min.apply(Math, t)
            , r = Math.max.apply(Math, t)
            , i = Math.min.apply(Math, e)
            , o = Math.max.apply(Math, e);
          return {
            centerX: (n + r) / 2,
            centerY: (i + o) / 2,
            maxX: r,
            maxY: o,
            minX: n,
            minY: i,
            height: o - i,
            width: r - n
          }
        }([m, v])
          , _ = (c(u, s),
          c(u, w))
          , M = c(s, w)
          , P = [];
        P = (P = P.concat(p(_))).concat(p(M));
        var O = {
          x: (t.x + e.x) / 2,
          y: (t.y + e.y) / 2
        };
        [w, _, M].forEach(function(t) {
          P = P.concat(function(t, e) {
            return function(t, e) {
              return e < t.minX || e > t.maxX ? [] : [{
                x: e,
                y: t.minY
              }, {
                x: e,
                y: t.maxY
              }]
            }(t, e.x).concat(function(t, e) {
              return e < t.minY || e > t.maxY ? [] : [{
                x: t.minX,
                y: e
              }, {
                x: t.maxX,
                y: e
              }]
            }(t, e.y))
          }(t, O).filter(function(t) {
            return g(t, u) && g(t, s)
          }))
        }),
          [{
            x: m.x,
            y: v.y
          }, {
            x: v.x,
            y: m.y
          }].forEach(function(t) {
            g(t, u) && g(t, s) && P.push(t)
          }),
          P.unshift(m),
          P.push(v);
        var E = S(P = b(P), m, v, o, a, t, e);
        return E.unshift(t),
          E.push(e),
          y(E)
      }
      function P(t, e) {
        var n = []
          , r = t[0];
        return n.push("M".concat(r.x, " ").concat(r.y)),
          t.forEach(function(r, o) {
            var a = t[o + 1]
              , u = t[o + 2];
            if (a && u)
              if (function(t, e, n) {
                return !(t.x === e.x === n.x || t.y === e.y === n.y)
              }(r, a, u)) {
                var s = i(function(t, e, n, r) {
                  var i = w(t, e)
                    , o = w(n, e);
                  return i < r && (r = i),
                  o < r && (r = o),
                    [{
                      x: e.x - r / i * (e.x - t.x),
                      y: e.y - r / i * (e.y - t.y)
                    }, {
                      x: e.x - r / o * (e.x - n.x),
                      y: e.y - r / o * (e.y - n.y)
                    }]
                }(r, a, u, e), 2)
                  , c = s[0]
                  , h = s[1];
                n.push("L".concat(c.x, " ").concat(c.y)),
                  n.push("Q".concat(a.x, " ").concat(a.y, " ").concat(h.x, " ").concat(h.y)),
                  n.push("L".concat(h.x, " ").concat(h.y))
              } else
                n.push("L".concat(a.x, " ").concat(a.y));
            else
              a && n.push("L".concat(a.x, " ").concat(a.y))
          }),
          n.join("")
      }
      a.registerEdge("flow-polyline", {
        getPathByPoints: function(t) {
          var e = t.points
            , n = t.source
            , r = t.target
            , i = u
            , a = M(e[0], e[e.length - 1], n, r, i);
          return o.pointsToPolygon(a)
        }
      }),
        a.registerEdge("flow-polyline-round", {
          getPathByPoints: function(t) {
            var e = t.points
              , n = t.source
              , r = t.target
              , i = u
              , o = s;
            return P(y(M(e[0], e[e.length - 1], n, r, i)), o)
          }
        })
    }
    , function(t, e, n) {
      var r = n(42);
      function i(t, e, n, r) {
        var i = r ? r / 2 : 30
          , o = r;
        if (t <= e && e <= n || t >= e && e >= n) {
          var a = (n - e) / 2
            , u = Math.abs(a);
          if (0 === a)
            return t === e ? 0 : (e - t) / Math.abs(e - t) * i;
          if (u > o) {
            var s = a / u * o;
            return Math.abs(s) < i ? a / u * i : s
          }
          return u < i ? a / u * i : a
        }
        var c = i;
        return (c = Math.abs(e - n) < 2 * Math.abs(e - t) ? r * Math.abs(e - n) / (2 * Math.abs(e - t)) : r) > o && (c = o),
        c < i && (c = i),
          e > t ? c : -c
      }
      function o(t, e, n, r) {
        var o, a, u = t.bbox, s = function(t, e) {
          var n = Math.abs(t.x - e.centerX)
            , r = Math.abs(t.y - e.centerY);
          return n / e.width > r / e.height
        }(e, u);
        o = a = 0;
        var c = Math.min(u.height, u.width);
        return r && r.bbox && (c = Math.min(c, r.bbox.height, r.bbox.width)),
          s ? o = i(u.centerX, e.x, n.x, c) : a = i(u.centerY, e.y, n.y, c),
          {
            x: e.x + o,
            y: e.y + a
          }
      }
      var a = .1;
      function u(t, e) {
        var n = t.x
          , r = t.y
          , i = e.x
          , o = e.y;
        return {
          x: n + (i - n) * a,
          y: r + (o - r) * a
        }
      }
      function s(t, e, n) {
        var i = t[0]
          , a = t[t.length - 1]
          , s = ["M", i.x, i.y]
          , c = function(t, e, n, r) {
          return [n && n.bbox ? o(n, t, e, r) : u(t, e), r && r.bbox ? o(r, e, t, n) : u(e, t)]
        }(i, a, e, n)
          , h = ["C"]
          , l = [s];
        return r.each(c, function(t) {
          h.push(t.x, t.y)
        }),
          h.push(a.x, a.y),
          l.push(h),
          l
      }
      n(22).registerEdge("flow-smooth", {
        getPathByPoints: function(t) {
          return s(t.points, t.source, t.target)
        }
      }, "flow-edge")
    }
    , function(t, e, n) {
      n(22).registerEdge("flow-base", {})
    }
    , function(t, e, n) {
      var r = n(22);
      r.registerNode("flow-base", {}),
        r.registerNode("flow-html", {}, ["html"]),
        r.registerNode("flow-rect", {}, "flow-base"),
        r.registerNode("flow-capsule", {}, "capsule"),
        r.registerNode("flow-circle", {}, "circle"),
        r.registerNode("flow-rhombus", {}, "rhombus")
    }
    , function(t, e, n) {
      n(109),
        n(108),
        n(107),
        n(106),
        n(105)
    }
    , function(t, e, n) {
      var r = n(22);
      n(110),
        t.exports = r
    }
    , function(t, e, n) {
      var r = n(7)
        , i = n(13)
        , o = n(8);
      r.registerBehaviour("orbit", function(t) {
        var e, n = t.getGraph();
        n.behaviourOn("beforepanitem", function() {
          t.hideOrbit()
        }),
          n.behaviourOn("node:mouseenter", function(n) {
            var r = n.item;
            t.getSignal("panningItem") || t.getSignal("dragEdge") || (e = r,
              t.showOrbit(r))
          }),
          n.on("beforeviewportchange", function() {
            t.hideOrbit()
          }),
          n.behaviourOn("mousemove", function(r) {
            var a = r.item
              , u = r.x
              , s = r.y;
            if (e) {
              var c = e.getBBox()
                , h = o.euclideanDistance.pointPoint({
                x: c.centerX,
                y: c.centerY
              }, {
                x: u,
                y: s
              })
                , l = n.getMatrix()[0];
              a !== e && h > c.width / 2 + i.orbitGap / l && (t.hideOrbit(),
                e = void 0),
              e && t.layoutOrbit(e, {
                x: u,
                y: s
              })
            }
          })
      })
    }
    , function(t, e, n) {
      n(7).registerBehaviour("hoverNodeAddOutter", function(t) {
        var e, n = t.getGraph();
        n.behaviourOn("node:mouseenter", function(n) {
          var r = n.item;
          t.getSignal("dragEdge") && (e = r,
            t.addOutterShape(r, {
              stroke: "#52C41A",
              strokeOpacity: .45,
              lineWidth: 4
            }))
        }),
          n.behaviourOn("node:mouseleave", function() {
            e && t.clearOutterShape(e)
          }),
          n.behaviourOn("beforedropedge", function() {
            e && t.clearOutterShape(e)
          })
      })
    }
    , function(t, e, n) {
      var r = n(7)
        , i = n(8)
        , o = n(13);
      r.registerBehaviour("processAddEdge", function(t) {
        var e = t.getGraph();
        function n() {
          t.setSignal("dragEdge", !1),
            t.set("addEdgeConfig", {
              addModel: void 0,
              delegation: void 0,
              startPoint: void 0,
              sourceItem: void 0
            })
        }
        e.behaviourOn("mousemove", function(n) {
          var r = t.get("addEdgeConfig");
          if (r) {
            var o = r.addModel
              , a = r.delegation
              , u = r.startPoint
              , s = r.sourceItem;
            a && i.dragingEdgeEndPoint({
              endPointType: "target",
              edgeModel: o,
              graph: e,
              delegation: a,
              startPoint: u,
              ev: n,
              sourceItem: s
            })
          }
        }),
          e.behaviourOn("mouseup", function(r) {
            var a = t.get("addEdgeConfig");
            if (a) {
              var u = a.addModel
                , s = a.delegation
                , c = a.sourceItem
                , h = t.editor;
              if (s)
                e.getNodes().forEach(function(e) {
                  t.clearAnchor(e)
                }),
                  t.clearAnchor(c),
                  t.setActived(c, !1),
                  t.setSelected(c, !1),
                  t.css({
                    cursor: o.cursor.beforePanCanvas
                  }),
                  s.remove(),
                i.dropUpdateEdge({
                  ev: r,
                  endPointType: "target",
                  model: u,
                  diagram: t
                }) && (h ? h.executeCommand("add", {
                  type: "edge",
                  addModel: u
                }) : e.add("edge", u)),
                  e.draw(),
                  t.endAdd(),
                  n();
              else
                n()
            }
          }),
          e.behaviourOn("canvas:mouseleave", function() {
            var r = t.get("addEdgeConfig");
            if (r) {
              var i = r.delegation
                , o = r.sourceItem;
              if (i)
                e.getNodes().forEach(function(e) {
                  t.clearAnchor(e)
                }),
                  t.setActived(o, !1),
                  t.clearAnchor(o),
                  i.remove(),
                  t.cancelAdd(),
                  e.draw(),
                  n();
              else
                n()
            }
          })
      })
    }
    , function(t, e, n) {
      var r = n(7)
        , i = n(13)
        , o = n(8);
      r.registerBehaviour("dragOutFromGroup", function(t) {
        var e, n, r, a = t.getGraph(), u = !1;
        function s() {
          clearTimeout(r),
          n && a.update(n, {
            padding: void 0,
            style: void 0
          }),
            u = !1,
            e = void 0,
            n = void 0
        }
        a.behaviourOn("drag", function(s) {
          t.getSignal("panningItem") && !u && (clearTimeout(r),
            r = setTimeout(function() {
              var r = t.get("panItems");
              if (r) {
                if (e = r[0],
                  n = r[0].getParent(),
                e && 1 === r.length && n && !s.shape) {
                  var c = t.get("panItemDelegation").getBBox()
                    , h = n.getBBox();
                  o.rectRectCrossAlgorithm(c, h) && (a.update(n, {
                    padding: i.groupBackgroundPadding.map(function(t) {
                      return t - 8
                    }),
                    style: i.dragNodeLeaveFromGroupStyle
                  }),
                    u = !0)
                }
                u || (e = void 0,
                  n = void 0)
              }
            }, i.outFromGroupDelayTime))
        }),
          a.behaviourOn("dragenter", function(t) {
            e && n && (n === t.item && a.update(n, {
              padding: i.groupBackgroundPadding.map(function(t) {
                return t + 4
              }),
              style: i.dragNodeHoverToGroupStyle
            }),
              u = !1)
          }),
          a.on("drop", function(t) {
            n && e && !t.shape && (a.update(e, {
              parent: void 0
            }),
              a.update(n, {
                style: void 0
              }),
              s())
          }),
          a.on("dragend", function() {
            s()
          }),
          a.behaviourOn("canvas:mouseleave", function() {
            s()
          })
      })
    }
    , function(t, e, n) {
      var r = n(7)
        , i = n(13);
      r.registerBehaviour("dragNodeAddToGroup", function(t) {
        var e, n, r = t.getGraph();
        function o() {
          t.setSignal("dragaddnodetogroup", !1),
            e = void 0,
            n = void 0
        }
        r.behaviourOn("dragenter", function(o) {
          if (t.getSignal("panningItem")) {
            var a = t.get("panItems");
            a[0] && a[0].isNode && 1 === a.length && o.item && o.item.isGroup && a[0].getParent() !== o.item && (e = a[0],
              n = o.item,
              r.update(n, {
                padding: i.groupBackgroundPadding.map(function(t) {
                  return t + 4
                }),
                style: i.dragNodeHoverToGroupStyle
              }))
          }
        }),
          r.behaviourOn("dragleave", function() {
            n && e && r.update(n, {
              padding: void 0,
              style: void 0
            })
          }),
          r.behaviourOn("drop", function(i) {
            if (n && e && n === i.item) {
              t.setSignal("dragaddnodetogroup", !0);
              var o = e.id
                , a = n.id;
              r.update(a, {
                padding: void 0,
                style: void 0,
                collapsed: !1
              });
              var u = t.editor;
              u ? u.executeCommand(s) : s()
            }
            function s() {
              r.update(o, {
                parent: a
              })
            }
          }),
          r.behaviourOn("dragend", function() {
            o()
          }),
          r.behaviourOn("canvas:mouseleave", function() {
            n && (r.update(n, {
              padding: void 0,
              style: void 0
            }),
              o())
          })
      })
    }
    , function(t, e, n) {
      n(7).registerBehaviour("keydownShiftMultiSelected", function(t) {
        var e = t.getGraph();
        e.behaviourOn("keydown", function(e) {
          e.domEvent.shiftKey && t.setSignal("shiftKeyDown", !0)
        }),
          e.behaviourOn("keyup", function(e) {
            e.domEvent.shiftKey || t.setSignal("shiftKeyDown", !1)
          })
      })
    }
    , function(t, e, n) {
      var r = n(7)
        , i = n(13);
      r.registerBehaviour("dragMultiSelect", function(t) {
        var e, n, r = t.getGraph(), o = r.getRootGroup();
        function a() {
          t.css({
            cursor: i.cursor.beforePanCanvas
          }),
            e = void 0,
            n = void 0
        }
        t.css({
          cursor: i.cursor.multiSelect
        }),
          r.behaviourOn("dragstart", function(t) {
            2 !== t.button && (e = {
              x: t.x,
              y: t.y
            },
              n = o.addShape("rect", {
                attrs: i.multiSelectRectStyle
              }))
          }),
          r.behaviourOn("drag", function(t) {
            n && (n.attr({
              x: Math.min(e.x, t.x),
              y: Math.min(e.y, t.y),
              width: Math.abs(t.x - e.x),
              height: Math.abs(t.y - e.y)
            }),
              r.draw())
          }),
          r.behaviourOn("dragend", function() {
            if (n) {
              var e = r.getNodes().map(function(t) {
                return t.id
              })
                , i = n.getBBox()
                , o = t.editor;
              o ? o.executeCommand(u) : u(),
                n.remove(),
                t.changeMode("default"),
                t.updateStatus(),
                r.draw(),
                a()
            }
            function u() {
              t.clearSelected(),
                e.forEach(function(e) {
                  var n = r.find(e)
                    , o = n.getBBox();
                  o.minX > i.minX && o.minY > i.minY && o.maxX < i.maxX && o.maxY < i.maxY && t.setSelected(n, !0)
                })
            }
          }),
          r.behaviourOn("canvas:mouseleave", function() {
            n && (n.remove(),
              r.draw(),
              a())
          })
      })
    }
    , function(t, e, n) {
      var r = n(7)
        , i = n(8);
      r.registerBehaviour("dragAnchorAddEdge", function(t) {
        var e = t.getGraph()
          , n = e.getRootGroup();
        e.behaviourOn("anchor:dragstart", function(e) {
          if (2 !== e.button) {
            var r = e.shape
              , o = r.get("freezePoint")
              , a = r.getItem()
              , u = i.clone(t.get("addModel"))
              , s = r.getIndex();
            u.source = a.id,
              u.sourceAnchor = s;
            var c = {
              x: o.x,
              y: o.y
            }
              , h = t.getDelegation([{
              isEdge: !0
            }], n);
            t.setSignal("dragEdge", !0),
              t.dragEdgeBeforeShowAnchor(a, s, "target"),
              t.set("addEdgeConfig", {
                addModel: u,
                delegation: h,
                startPoint: c,
                sourceItem: a
              })
          }
        })
      }, ["processAddEdge", "dragHoverAnchorHotspot", "hoverAnchorActived"])
    }
    , function(t, e, n) {
      n(7).registerBehaviour("dragHoverAnchorHotspot", function(t) {
        var e = t.getGraph();
        e.behaviourOn("anchor:dragenter", function(e) {
          if (t.getSignal("dragEdge")) {
            var n = e.shape;
            t.setHotspotActived(n, !0)
          }
        }),
          e.behaviourOn("anchor:dragleave", function(e) {
            if (t.getSignal("dragEdge")) {
              var n = e.shape;
              t.setHotspotActived(n, !1)
            }
          })
      })
    }
    , function(t, e, n) {
      var r = n(7)
        , i = n(8);
      r.registerBehaviour("dragPanelItemAddNode", function(t) {
        var e, n, r, o, a, u = t.getGraph(), s = u.getRootGroup();
        function c() {
          t.setSignal("panningItem", !1),
            t.set("panItemDelegation", void 0),
            t.set("panItemStartBox", void 0),
            t.set("panItemStartPoint", void 0),
            n = void 0,
            r = void 0,
            o = void 0,
            a = void 0
        }
        u.behaviourOn("canvas:mouseenter", function(u) {
          if (!n && (o = t.get("addType"),
            a = t.get("addModel"),
            a = i.clone(a),
          "node" === o)) {
            var c = (r = i.getNodeSize(a.size))[0] / 2
              , h = r[1] / 2;
            e = {
              minX: u.x - c,
              minY: u.y - h,
              maxX: u.x + c,
              maxY: u.y + h,
              width: r[0],
              height: r[1]
            },
              n = t.getDelegation([e], s),
              t.setSignal("panningItem", !0),
              t.set("panItemDelegation", n),
              t.set("panItemStartBox", e),
              t.set("panItemStartPoint", {
                x: u.x,
                y: u.y
              })
          }
        }),
          u.behaviourOn("mouseup", function(e) {
            if (n) {
              a.x = e.x,
                a.y = e.y;
              var r = o;
              i.setId(a);
              var s = t.editor;
              n.remove(),
                t.endAdd(),
                t.clearAlignLine(),
                t.clearSelected(),
                t.focusGraphWrapper(),
                s ? s.executeCommand("add", {
                  type: "node",
                  addModel: a
                }) : u.add(r, a),
                t.setSelected(u.find(a.id), !0),
                c()
            }
          }),
          u.behaviourOn("canvas:mouseleave", function() {
            n && (t.clearAlignLine(),
              n.remove(),
              u.draw(),
              t.cancelAdd(),
              c())
          })
      }, ["processPanItem"])
    }
    , function(t, e, n) {
      var r = n(7)
        , i = n(13)
        , o = n(8);
      r.registerBehaviour("dragEdgeControlPoint", function(t) {
        var e, n, r, a, u, s, c, h, l, f, d = t.getGraph(), p = d.getRootGroup();
        function g(p) {
          if (r) {
            var g = {};
            d.getNodes().forEach(function(e) {
              t.clearAnchor(e)
            }),
              t.css({
                cursor: i.cursor.beforePanCanvas
              }),
              r.remove();
            var m = o.dropUpdateEdge({
              ev: p,
              endPointType: e ? "target" : "source",
              model: g,
              diagram: t
            });
            d.show(l);
            var v = l.id;
            if (m) {
              var y = t.editor;
              y ? y.executeCommand("update", {
                itemId: v,
                updateModel: g
              }) : d.update(v, g)
            }
            t.setSignal("dragEdge", !1),
              e = void 0,
              n = void 0,
              r = void 0,
              a = void 0,
              u = void 0,
              s = void 0,
              c = void 0,
              h = void 0,
              l = void 0,
              f = void 0
          }
        }
        d.behaviourOn("edgeControlPoint:dragstart", function(i) {
          if (2 !== i.button) {
            var o = i.shape;
            o.isTargetEndPoint() ? (l = o.getItem(),
              f = l.getModel(),
              e = o,
              a = o.getSourcePoint(),
              u = l.getSource(),
              c = f.sourceAnchor) : o.isSourceEndPoint() && (l = o.getItem(),
              f = l.getModel(),
              n = o,
              a = o.getTargetPoint(),
              s = l.getTarget(),
              h = f.targetAnchor),
            l && (r = t.getDelegation([l], p),
              u ? t.dragEdgeBeforeShowAnchor(u, c, "target") : s && t.dragEdgeBeforeShowAnchor(s, h, "source"),
              d.hide(l),
              t.setSignal("dragEdge", !0))
          }
        }),
          d.behaviourOn("edgeControlPoint:drag", function(t) {
            r && o.dragingEdgeEndPoint({
              endPointType: u ? "target" : "source",
              edgeModel: f,
              graph: d,
              delegation: r,
              startPoint: a,
              ev: t,
              originSource: u,
              originTarget: s
            })
          }),
          d.behaviourOn("edgeControlPoint:mouseleave", function(r) {
            e || n || r.toShape || t.css({
              cursor: i.cursor.beforePanCanvas
            })
          }),
          d.behaviourOn("edgeControlPoint:dragend", g),
          d.behaviourOn("canvas:mouseleave", g)
      }, ["dragHoverAnchorHotspot"])
    }
    , function(t, e, n) {
      var r = n(7)
        , i = n(13);
      r.registerBehaviour("hoverEdgeControlPoint", function(t) {
        t.getGraph().behaviourOn("edgeControlPoint:mouseenter", function(e) {
          if (!t.getSignal("dragEdge") && !t.getSignal("panningItem")) {
            var n = e.shape;
            (n.isTargetEndPoint() || n.isSourceEndPoint()) && t.css({
              cursor: i.cursor.hoverEdgeControllPoint
            })
          }
        })
      })
    }
    , function(t, e, n) {
      function r(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n,
          t
      }
      var i = n(7)
        , o = n(13);
      i.registerBehaviour("hoverAnchorActived", function(t) {
        var e = t.getGraph();
        e.behaviourOn("anchor:mouseenter", function(n) {
          if (!t.getSignal("panningItem") && !t.getSignal("dragEdge")) {
            var i = n.shape
              , a = i.getItem()
              , u = a.getModel()
              , s = function(t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {}
                  , i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                  return Object.getOwnPropertyDescriptor(n, t).enumerable
                }))),
                  i.forEach(function(e) {
                    r(t, e, n[e])
                  })
              }
              return t
            }({}, t.get("addEdgeModel"), {
              source: u.id
            })
              , c = {
              anchor: i.getPoint(),
              item: a
            };
            t.emit("hoveranchor:beforeaddedge", c),
              c.cancel ? t.css({
                cursor: o.cursor.hoverUnEffectiveAnchor
              }) : (t.css({
                cursor: o.cursor.hoverEffectiveAnchor
              }),
              !i.get("destroyed") && i.setActived(),
                t.beginAdd("edge", s),
                e.draw())
          }
        }),
          e.behaviourOn("anchor:mouseleave", function(n) {
            if (!t.getSignal("dragEdge") && !t.getSignal("panningItem")) {
              var r = n.shape
                , i = r.getItem();
              t.css({
                cursor: o.cursor.beforePanCanvas
              }),
              i.isSelected || (t.clearAnchor(i),
                t.setActived(i, !1)),
              !r.get("destroyed") && r.clearActived(),
                t.cancelAdd(),
                e.draw()
            }
          })
      })
    }
    , function(t, e, n) {
      var r = n(7)
        , i = n(8);
      r.registerBehaviour("panItem", function(t) {
        var e = t.getGraph();
        e.behaviourOn("drop", function() {
          var n = t.get("panItems");
          if (n) {
            var r = n[0]
              , o = n.map(function(t) {
              return t.id
            })
              , a = t.get("panItemDelegation")
              , u = t.get("panItemStartBox")
              , s = r.id
              , c = a.attr("x") - u.minX
              , h = a.attr("y") - u.minY;
            e.emit("afterpanitemdrop", {
              panItems: n
            }),
              t.clearAlignLine();
            var l = t.editor;
            e.emit("panitemend"),
              !l || t.getSignal("dragaddnodetogroup") ? f() : l.executeCommand(f)
          }
          function f() {
            o.forEach(function(t) {
              var n = e.find(t)
                , r = n.getModel();
              n.isGroup ? i.panGroup(n, c, h, e) : (e.update(n, {
                x: r.x + c,
                y: r.y + h
              }),
                e.toFront(n))
            }),
            1 === o.length && (t.clearSelected(),
              t.setSelected(s, !0))
          }
        })
      }, ["startPanItem", "processPanItem", "endPanItem"])
    }
    , function(t, e, n) {
      n(125),
        n(124),
        n(123),
        n(122),
        n(121),
        n(120),
        n(119),
        n(118),
        n(117),
        n(116),
        n(115),
        n(114),
        n(113),
        n(112)
    }
    , function(t, e, n) {
      function r(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
            , r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
          }))),
            r.forEach(function(e) {
              i(t, e, n[e])
            })
        }
        return t
      }
      function i(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n,
          t
      }
      var o = n(29)
        , a = n(13)
        , u = n(8)
        , s = u.getGroupIconPath()
        , c = u.getCollapsedButtonPath()
        , h = u.getExpandedButtonPath()
        , l = {
        fill: "#CED4D9"
      }
        , f = {
        stroke: "#697B8C",
        fill: "#fff",
        fillOpacity: 0
      }
        , d = {
        stroke: "#697B8C",
        fill: "#fff",
        fillOpacity: 0
      }
        , p = {
        fill: "#000000",
        textBaseline: "top",
        textAlign: "left"
      }
        , g = {
        stroke: "#CED4D9",
        fill: "#F2F4F5",
        radius: 4
      }
        , m = a.groupBackgroundPadding
        , v = 40
        , y = 13
        , x = 12
        , b = 12
        , w = 8
        , _ = 12
        , S = 184 - m[1] - m[3]
        , M = 40 - m[0] - m[2];
      o.registerGroup("diagram-base", {
        draw: function(t) {
          var e = t.getModel()
            , n = t.getGraphicGroup()
            , i = t.getChildrenBBox()
            , o = this.getStyle(t)
            , a = e.collapsed
            , g = e.padding ? e.padding : m;
          if (i.minX === 1 / 0 && (i.minX = e.x,
            i.maxX = e.x + S,
            i.minY = e.y,
            i.maxY = e.y + M),
          a && (i.minX = i.maxX - S,
            i.maxY = i.minY + M),
          i.maxX - i.minX < S) {
            var P = S - i.maxX + i.minX;
            i.minX -= P / 2,
              i.maxX += P / 2
          }
          var O = function(t, e) {
            return t.minX - e[3]
          }(i, g)
            , E = function(t, e) {
            return t.minY - e[0]
          }(i, g)
            , A = function(t, e) {
            return t.maxX - t.minX + e[3] + e[1]
          }(i, g)
            , C = function(t, e) {
            return t.maxY - t.minY + e[0] + e[2]
          }(i, g)
            , k = function(t, e, n, i) {
            var o = e.addShape("path", {
              attrs: r({}, i, {
                path: n
              })
            });
            return o.isGroupKeyShape = !0,
              o
          }(0, n, u.getRectPath(O, E, A, C, o.radius), o);
          return function(t, e, n, r) {
            var i = u.mix(!0, {}, p, {
              x: n + v,
              y: r + y
            });
            if(u.isString(t) && t.length > 9) t = t.substr(0,9) + "..."
            u.isString(t) ? i.text = t : u.mix(i, t),
              e.addShape("text", {
                attrs: i
              })
          }(u.isNil(e.label) ? "新建分组" : e.label, n, O, E),
            function(t, e, n, i) {
              var o = e.addShape("path", {
                attrs: r({
                  path: t
                }, l)
              })
                , a = o.getBBox();
              o.translate(n - a.minX + w, i - a.minY + _)
            }(u.isNil(e.icon) ? s : e.icon, n, O, E),
            (function(t, e, n, i, o) {
              var a;
              if (t) {
                var u = (a = e.addShape("path", {
                  attrs: r({
                    path: h
                  }, d)
                })).getBBox()
                  , s = u.maxX - u.minX;
                a.isExpandedButton = !0,
                  a.translate(n + o - u.minX - s - b, i - u.minY + x)
              } else {
                var l = (a = e.addShape("path", {
                  attrs: r({
                    path: c
                  }, f)
                })).getBBox()
                  , p = l.maxX - l.minX;
                a.isCollapsedButton = !0,
                  a.translate(n + o - l.minX - p - b, i - l.minY + x)
              }
              return a.isButton = !0,
                a
            }(a, n, O, E, A)).item = t,
            e.x = i.minX,
            e.y = i.minY,
            k
        },
        getStyle: function(t) {
          var e = t.getModel();
          return u.mix(!0, {}, g, {
            fill: e.color,
            stroke: e.color
          }, e.style)
        },
        getActivedStyle: function() {
          return a.groupActivedStyle
        },
        getSelectedStyle: function() {
          return a.groupSelectedStyle
        },
        getSelectedOutterStyle: function() {
          return a.groupSelectedOutterStyle
        },
        getActivedOutterStyle: function() {},
        intersectBox: "rect"
      })
    }
    , function(t, e, n) {
      var r = n(29)
        , i = n(8)
        , o = n(13);
      r.registerEdge("diagram-base", {
        getPath: function(t) {
          var e = t.getPoints()
            , n = t.getSource()
            , r = t.getTarget();
          return this.getPathByPoints({
            points: e,
            source: n,
            target: r,
            item: t
          })
        },
        getPathByPoints: function(t) {
          var e = t.points;
          return i.pointsToPolygon(e)
        },
        getStyle: function(t) {
          var e = t.getModel();
          return i.mix(!0, {}, o.edgeStyle, {
            stroke: e.color
          }, e.style)
        },
        getActivedStyle: function() {
          return o.edgeActivedStyle
        },
        getSelectedStyle: function() {
          return o.edgeSelectedStyle
        },
        getActivedOutterStyle: function() {},
        getSelectedOutterStyle: function() {}
      })
    }
    , function(t, e, n) {
      function r(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
            , r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
          }))),
            r.forEach(function(e) {
              i(t, e, n[e])
            })
        }
        return t
      }
      function i(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n,
          t
      }
      var o = n(29)
        , a = n(8)
        , u = n(13);
      o.registerNode("diagram-base", {
        getSize: function(t) {
          var e = t.getModel();
          return a.getNodeSize(e.size)
        },
        defaultFillPalette: 0,
        defaultStrokePalette: 3,
        activedFillPalette: 0,
        activedStrokePalette: 5,
        selectedFillPalette: 2,
        selectedStrokePalette: 5,
        getDefaulStyle: function() {
          return u.nodeStyle
        },
        getDefaulActivedStyle: function() {
          return u.nodeActivedStyle
        },
        getDefaulSelectedtyle: function() {
          return u.nodeSelectedStyle
        },
        getStyle: function(t) {
          var e, n, r = t.getModel(), i = r.color;
          if (i) {
            var o = a.Palettes.generate(i);
            e = o[this.defaultFillPalette],
              n = o[this.defaultStrokePalette]
          }
          return a.mix(!0, {}, this.getDefaulStyle(), {
            fill: e,
            stroke: n
          }, r.style)
        },
        getPath: function(t) {
          var e = this.getSize(t)
            , n = this.getStyle(t);
          return a.getRectPath(-e[0] / 2, -e[1] / 2, e[0], e[1], n.radius)
        },
        getActivedOutterStyle: function() {
          return u.nodeActivedOutterStyle
        },
        getActivedStyle: function(t) {
          var e = t.getModel()
            , n = this.getDefaulActivedStyle(t)
            , i = e.color;
          if (i) {
            var o = a.Palettes.generate(i);
            return r({}, n, {
              fill: o[this.activedFillPalette],
              stroke: o[this.activedStrokePalette]
            })
          }
          return n
        },
        getSelectedStyle: function(t) {
          var e = t.getModel()
            , n = this.getDefaulSelectedtyle(t)
            , i = e.color;
          if (i) {
            var o = a.Palettes.generate(i);
            return r({}, n, {
              fill: o[this.selectedFillPalette],
              stroke: o[this.selectedStrokePalette]
            })
          }
          return n
        },
        getSelectedOutterStyle: function(t) {
          var e = t.getModel().color;
          if (e) {
            var n = a.Palettes.generate(e);
            return r({}, u.nodeSelectedOutterStyle, {
              stroke: n[1],
              fill: n[1]
            })
          }
          return u.nodeSelectedOutterStyle
        },
        anchor: [[.5, 0], [1, .5], [.5, 1], [0, .5]]
      }),
        o.registerNode("capsule", {
          getPath: function(t) {
            var e = this.getSize(t);
            return a.getRectPath(-e[0] / 2, -e[1] / 2, e[0], e[1], e[1] / 2)
          }
        }),
        o.registerNode("circle", {
          getPath: function(t) {
            var e = this.getSize(t)
              , n = e[0]
              , r = e[1];
            return a.getEllipsePath(0, 0, n / 2, r / 2)
          }
        }),
        o.registerNode("rhombus", {
          getPath: function(t) {
            var e = this.getSize(t)
              , n = e[0]
              , r = e[1]
              , i = [{
              x: 0,
              y: 0 - r / 2
            }, {
              x: 0 + n / 2,
              y: 0
            }, {
              x: 0,
              y: 0 + r / 2
            }, {
              x: 0 - n / 2,
              y: 0
            }, {
              x: 0,
              y: 0 - r / 2
            }];
            return a.pointsToPolygon(i)
          }
        })
    }
    , function(t, e, n) {
      n(129),
        n(128),
        n(127)
    }
    , function(t, e) {
      var n = {
        CFG: {
          linkNode: !0,
          linkAnchor: !0
        },
        INIT: "_initLink",
        AUGMENT: {
          _initLink: function() {
            var t = this
              , e = this.getGraph()
              , n = this.get("linkAnchor")
              , r = this.get("linkNode")
              , i = e.get("mode");
            n && (this.on("beforeitemactived", function(e) {
              var n = e.item;
              n.isNode && t.hoverShowAnchor(n)
            }),
              this.on("beforeitemunactived", function(e) {
                var n = e.item;
                (n.isNode || n.isGroup) && t.clearAnchor(n)
              }),
              this.on("beforeitemselected", function(e) {
                var n = e.item;
                n.isNode ? t.hoverShowAnchor(n) : n.isGroup && t.hoverShowAnchor(n)
              }),
              this.on("beforeitemunselected", function(e) {
                var n = e.item;
                (n.isNode || n.isGroup) && t.clearAnchor(n)
              }),
              e.addBehaviour("dragAnchorAddEdge", "add"),
              e.addBehaviour("hoverAnchorActived", "default"),
              e.changeMode(i)),
            r && (e.addBehaviour("hoverNodeAddOutter", "add"),
              e.addBehaviour("hoverNodeAddOutter", "default"),
              e.changeMode(i))
          }
        }
      };
      t.exports = n
    }
    , function(t, e, n) {
      function r(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n,
          t
      }
      var i = n(8)
        , o = {};
      o.AUGMENT = {
        addOutterShape: function(t, e) {
          this.clearOutterShape(t);
          var n = e.lineWidth
            , o = t.getKeyShape()
            , a = t.getGraphicGroup()
            , u = o.attr()
            , s = o.get("type")
            , c = o.attr("lineWidth")
            , h = i.clone(u);
          delete h.fillStyle,
            delete h.strokeStyle,
            delete h.matrix;
          var l = a.addShape(s, {
            attrs: function(t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {}
                  , i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                  return Object.getOwnPropertyDescriptor(n, t).enumerable
                }))),
                  i.forEach(function(e) {
                    r(t, e, n[e])
                  })
              }
              return t
            }({}, h, {
              fill: null
            }, e)
          });
          i.toBack(l, a);
          var f = l.getBBox()
            , d = f.maxX - f.minX
            , p = f.maxY - f.minY
            , g = (f.minX + f.maxX) / 2
            , m = (f.minY + f.maxY) / 2;
          l.transform([["t", -g, -m], ["s", (n + d + c) / d, (n + p + c) / p], ["t", g, m]]),
            l.isOutter = !0,
            t.outterShape = l
        },
        clearOutterShape: function(t) {
          t.outterShape && t.outterShape.remove()
        }
      },
        t.exports = o
    }
    , function(t, e, n) {
      var r = n(8)
        , i = n(13)
        , o = {};
      function a(t) {
        t.controlPointShapes && r.each(t.controlPointShapes, function(t) {
          t.remove()
        }),
          t.controlPointShapes = [],
          t.isControlPointShow = !1
      }
      o.INIT = "_initResize",
        o.CFG = {
          nodeResizeable: !1,
          edgeResizeable: !0
        },
        o.AUGMENT = {
          _initResize: function() {
            var t = this
              , e = this.get("_graph")
              , n = this.get("nodeResizeable")
              , i = this.get("edgeResizeable");
            n && e.on("afteritemdraw", function(e) {
              "node" === e.item.type && e.item.isVisible() && t.drawControlPoints(e.item)
            }),
            i && e.on("afteritemdraw", function(e) {
              "edge" === e.item.type && e.item.isVisible() && t.drawControlPoints(e.item)
            }),
              e.on("afteritemhide", function(t) {
                t.item.isControlPointShow && function(t) {
                  t.controlPointShapes && r.each(t.controlPointShapes, function(t) {
                    t.hide()
                  }),
                    t.isControlPointShow = !1
                }(t.item)
              }),
              e.on("afteritemshow", function(t) {
                !t.item.isControlPointShow && function(t) {
                  t.controlPointShapes && r.each(t.controlPointShapes, function(t) {
                    t.show()
                  }),
                    t.isControlPointShow = !0
                }(t.item)
              }),
              e.on("beforeitemdestroy", function(t) {
                t.item.isControlPointShow && a(t.item)
              })
          },
          drawControlPoints: function(t) {
            var e = this.get("_graph").getRootGroup()
              , n = this.get("nodeResizeable")
              , o = this.get("edgeResizeable");
            "node" === t.type ? n && function(t, e) {
              var n = t.getBBox()
                , o = [{
                x: n.minX,
                y: n.minY
              }, {
                x: n.maxX,
                y: n.minY
              }, {
                x: n.minX,
                y: n.maxY
              }, {
                x: n.maxX,
                y: n.maxY
              }];
              a(t);
              var u = e.addShape("rect", {
                attrs: r.mix({}, i.nodeSelectedBoxStyle, {
                  symbol: "square",
                  x: n.minX,
                  y: n.minY,
                  width: n.maxX - n.minX,
                  height: n.maxY - n.minY
                })
              });
              t.controlPointShapes.push(u),
                r.each(o, function(n) {
                  var o = e.addShape("marker", {
                    attrs: r.mix({}, i.nodeControlPointStyle, {
                      symbol: "square",
                      x: n.x,
                      y: n.y
                    }),
                    freezePoint: {
                      x: n.x,
                      y: n.y
                    },
                    item: t
                  });
                  t.controlPointShapes.push(o)
                })
            }(t, e) : "edge" === t.type && o && function(t, e) {
              var n = t.getKeyShape().attr("path")
                , o = n[0]
                , u = o.length
                , s = n[n.length - 1]
                , c = s.length
                , h = [{
                x: o[u - 2],
                y: o[u - 1]
              }, {
                x: s[c - 2],
                y: s[c - 1]
              }]
                , l = t.getModel();
              a(t),
                r.each(h, function(n, o) {
                  var a = e.addShape("marker", {
                    attrs: r.mix({}, i.edgeControlPointStyle, {
                      x: n.x,
                      y: n.y
                    }),
                    freezePoint: {
                      x: n.x,
                      y: n.y
                    },
                    item: t
                  });
                  a.eventPreFix = "edgeControlPoint",
                    a.getSourcePoint = function() {
                      return h[0]
                    }
                    ,
                    a.getTargetPoint = function() {
                      return h[h.length - 1]
                    }
                    ,
                    a.getItem = function() {
                      return t
                    }
                    ,
                    a.isSourceEndPoint = function() {
                      return l.source && 0 === o
                    }
                    ,
                    a.isTargetEndPoint = function() {
                      return l.target && o === h.length - 1
                    }
                    ,
                    t.controlPointShapes.push(a)
                })
            }(t, e),
              t.isControlPointShow = !0
          }
        },
        t.exports = o
    }
    , function(t, e, n) {
      function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
              return typeof t
            }
            : function(t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
        )(t)
      }
      function i(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n,
          t
      }
      function o(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1,
            r.configurable = !0,
          "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
      }
      function a(t, e) {
        return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
          if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(t) : e
      }
      function u(t) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
          }
        )(t)
      }
      function s(t, e) {
        return (s = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
              t
          }
        )(t, e)
      }
      var c = n(54)
        , h = n(8)
        , l = function(t) {
        function e() {
          return function(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function")
          }(this, e),
            a(this, u(e).apply(this, arguments))
        }
        return function(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }),
          e && s(t, e)
        }(e, c),
          function(t, e, n) {
            e && o(t.prototype, e),
            n && o(t, n)
          }(e, [{
            key: "getDefaultCfg",
            value: function() {
              return {
                name: "forkAndLink",
                render: function() {
                  return '\n          <div style="\n            width: 11px;\n            height: 11px;\n            cursor: copy;\n            background-image: url(https://gw.alipayobjects.com/zos/rmsportal/yWAiQOmucbYMCpwkvTBP.svg)\n          "></div>\n        '
                },
                bindEvent: function(t, e) {
                  var n = this
                    , r = e.getGraph()
                    , o = r.getRootGroup();
                  return t.setAttribute("draggable", "true"),
                    [h.addEventListener(t, "dragstart", function() {
                      var r = n.item
                        , a = function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                          var n = null != arguments[e] ? arguments[e] : {}
                            , r = Object.keys(n);
                          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                          }))),
                            r.forEach(function(e) {
                              i(t, e, n[e])
                            })
                        }
                        return t
                      }({}, e.get("addEdgeModel"), {
                        source: r.id
                      })
                        , u = r.getBBox()
                        , s = e.getDelegation([{
                        isEdge: !0
                      }], o);
                      e.setSignal("dragEdge", !0),
                        e.beginAdd("edge", a),
                        e.set("addEdgeConfig", {
                          addModel: a,
                          delegation: s,
                          startPoint: {
                            x: u.centerX,
                            y: u.centerY
                          },
                          sourceItem: r
                        }),
                        t.hide()
                    }), h.addEventListener(t, "click", function(t) {
                      var i = t.clientX
                        , o = t.clientY
                        , a = e.editor
                        , u = n.item
                        , s = r.getPointByClient({
                        x: i,
                        y: o
                      })
                        , c = u.getBBox()
                        , l = u.getModel()
                        , f = [s.x - c.centerX, s.y - c.centerY]
                        , d = h.vec2.length(f);
                      if (h.vec2.scale(f, f, 160 / d),
                        a)
                        a.executeCommand("copyAdjacent", {
                          copyNode: u,
                          x: s.x + f[0],
                          y: s.y + f[1]
                        });
                      else {
                        var p = h.clone(l);
                        p.x = s.x + f[0],
                          p.y = s.y + f[1],
                          r.add(u.type, p)
                      }
                    })]
                }
              }
            }
          }]),
          e
      }();
      t.exports = l
    }
    , function(t, e, n) {
      var r = n(54);
      r.forkAndLink = n(134),
        t.exports = r
    }
    , function(t, e, n) {
      function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
              return typeof t
            }
            : function(t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
        )(t)
      }
      function i(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n,
          t
      }
      function o(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1,
            r.configurable = !0,
          "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
      }
      function a(t, e) {
        return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
          if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(t) : e
      }
      function u(t) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
          }
        )(t)
      }
      function s(t, e) {
        return (s = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
              t
          }
        )(t, e)
      }
      var c = n(17)
        , h = n(13)
        , l = n(135)
        , f = n(8)
        , d = f.vec2
        , p = f.isString
        , g = function(t) {
        function e() {
          return function(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function")
          }(this, e),
            a(this, u(e).apply(this, arguments))
        }
        return function(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }),
          e && s(t, e)
        }(e, c),
          function(t, e, n) {
            e && o(t.prototype, e),
            n && o(t, n)
          }(e, [{
            key: "getDefaultCfg",
            value: function() {
              return {
                satellite: [],
                satelliteCache: []
              }
            }
          }, {
            key: "init",
            value: function() {
              var t = this
                , e = this.satellite
                , n = this.diagram
                , r = {
                diagram: n
              };
              n.getGraph().addBehaviour("orbit"),
                e.forEach(function(e) {
                  p(e) ? t.satelliteCache.push(new l[e](r)) : t.satelliteCache.push(new l(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                      var n = null != arguments[e] ? arguments[e] : {}
                        , r = Object.keys(n);
                      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                      }))),
                        r.forEach(function(e) {
                          i(t, e, n[e])
                        })
                    }
                    return t
                  }({}, r, e)))
                })
            }
          }, {
            key: "layout",
            value: function(t, e) {
              var n = this.diagram
                , r = n.getGraph()
                , i = this.satelliteCache
                , o = t.getBBox()
                , a = o.centerX
                , u = o.centerY
                , s = n.getZoom()
                , c = h.orbitGap / s
                , l = i.filter(function(t) {
                return t.isVisible()
              })
                , f = [e.x - a, e.y - u]
                , p = d.length(f)
                , g = o.width / 2 + c
                , m = d.scale([], f, g / p);
              l.forEach(function(t) {
                var e = t.getDOM()
                  , n = e.width() / 2
                  , i = r.getDomPoint({
                  x: m[0] + a,
                  y: m[1] + u
                });
                e.css({
                  top: i.y - n + "px",
                  left: i.x - n + "px"
                })
              })
            }
          }, {
            key: "show",
            value: function(t) {
              this.satelliteCache.forEach(function(e) {
                e.enable() && (e.item = t,
                  e.show())
              })
            }
          }, {
            key: "hide",
            value: function() {
              this.satelliteCache.forEach(function(t) {
                t.hide()
              })
            }
          }]),
          e
      }();
      t.exports = g
    }
    , function(t, e, n) {
      function r(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n,
          t
      }
      var i = n(136)
        , o = {
        CFG: {
          orbit: null
        },
        INIT: "_initOrbit"
      };
      o.AUGMENT = {
        _initOrbit: function() {
          var t = this.get("orbit");
          if (t) {
            var e = new i(function(t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {}
                  , i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                  return Object.getOwnPropertyDescriptor(n, t).enumerable
                }))),
                  i.forEach(function(e) {
                    r(t, e, n[e])
                  })
              }
              return t
            }({
              diagram: this
            }, t));
            this.setController("orbit", e)
          }
        },
        showOrbit: function(t) {
          this.getController("orbit").show(t)
        },
        hideOrbit: function() {
          this.getController("orbit").hide()
        },
        layoutOrbit: function(t, e) {
          this.getController("orbit").layout(t, e)
        }
      },
        t.exports = o
    }
    , function(t, e, n) {
      function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
              return typeof t
            }
            : function(t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
        )(t)
      }
      function i(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
            , r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
          }))),
            r.forEach(function(e) {
              o(t, e, n[e])
            })
        }
        return t
      }
      function o(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n,
          t
      }
      function a(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1,
            r.configurable = !0,
          "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
      }
      function u(t, e) {
        return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
          if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(t) : e
      }
      function s(t) {
        return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
          }
        )(t)
      }
      function c(t, e) {
        return (c = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
              t
          }
        )(t, e)
      }
      var h = n(17)
        , l = n(13)
        , f = n(8)
        , d = function(t) {
        function e() {
          return function(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function")
          }(this, e),
            u(this, s(e).apply(this, arguments))
        }
        return function(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }),
          e && c(t, e)
        }(e, h),
          function(t, e, n) {
            e && a(t.prototype, e),
            n && a(t, n)
          }(e, [{
            key: "getDefaultCfg",
            value: function() {
              return {
                _anchorItemCache: {}
              }
            }
          }, {
            key: "init",
            value: function() {
              var t = this
                , e = this.graph;
              e.on("afteritemdraw", function(e) {
                e.item.isAnchorShow && t.showAnchor(e.item)
              }),
                e.on("beforeitemdestroy", function(e) {
                  t._clearAnchor(e.item)
                }),
                e.on("afteritemhide", function(e) {
                  e.item.isNode && t._clearAnchor(e.item)
                })
            }
          }, {
            key: "_updateAnchor",
            value: function(t) {
              var e = this.graph;
              t.anchorShapes.forEach(function(t) {
                t.updatePosition()
              }),
                e.draw()
            }
          }, {
            key: "_drawAnchor",
            value: function(t, e, n, r) {
              var o = t.getAnchorPoints();
              this._clearAnchor(t),
                f.each(o, function(o, a) {
                  if (!n || -1 !== n.indexOf(a)) {
                    var u, s = e.addShape("marker", {
                      attrs: i({
                        symbol: "circle"
                      }, l.anchorPointStyle, {
                        x: o.x,
                        y: o.y
                      }),
                      freezePoint: o,
                      item: t,
                      index: a,
                      eventPreFix: "anchor",
                      isItemChange: function() {},
                      zIndex: l.zIndex.anchorPoint
                    });
                    s.toFront(),
                      s.eventPreFix = "anchor",
                      s.showHotspot = function() {
                        u = e.addShape("marker", {
                          attrs: i({
                            symbol: "circle"
                          }, l.anchorHotsoptStyle, {
                            x: o.x,
                            y: o.y
                          }),
                          freezePoint: o,
                          capture: !1,
                          zIndex: l.zIndex.anchorHotsopt
                        }),
                          t.anchorShapes.push(u),
                          s.hasHotspot = !0,
                          u.toFront(),
                          s.toFront()
                      }
                      ,
                      s.getIndex = function() {
                        return a
                      }
                      ,
                      s.getItem = function() {
                        return t
                      }
                      ,
                      s.getPoint = function() {
                        return o
                      }
                      ,
                      s.updatePosition = function() {
                        var e = t.getAnchorPoints()[a];
                        s.attr(e)
                      }
                      ,
                      s.setActived = function() {
                        s.attr(l.anchorPointHoverStyle)
                      }
                      ,
                      s.clearActived = function() {
                        s.attr(l.anchorPointStyle)
                      }
                      ,
                      s.isAnchor = !0,
                      s.setHotspotActived = function(t) {
                        u && (t ? u.attr(l.anchorHotsoptActivedStyle) : u.attr(l.anchorHotsoptStyle))
                      }
                      ,
                    r && s.showHotspot(),
                      t.anchorShapes.push(s),
                      t.getAllAnchors = function() {
                        return t.anchorShapes.filter(function(t) {
                          return t.isAnchor
                        })
                      }
                      ,
                      t.getAnchor = function(e) {
                        return t.anchorShapes.find(function(t) {
                          return t.get("index") === e
                        })
                      }
                  }
                })
            }
          }, {
            key: "_clearAnchor",
            value: function(t) {
              t.anchorShapes && t.anchorShapes.forEach(function(t) {
                t.remove()
              }),
                t.anchorShapes = []
            }
          }, {
            key: "setHotspotActived",
            value: function(t, e) {
              var n = this.diagram.getGraph();
              t.setHotspotActived(e),
                n.draw()
            }
          }, {
            key: "showAnchor",
            value: function(t, e, n) {
              if (t.isVisible()) {
                var r = this.graph
                  , i = this._anchorItemCache
                  , o = r.getRootGroup();
                this._drawAnchor(t, o, e, n),
                  t.isAnchorShow = !0,
                  i[t.id] = t
              }
            }
          }, {
            key: "clearAnchor",
            value: function(t) {
              var e = this
                , n = this.graph
                , r = n.get("itemCache")
                , i = this._anchorItemCache
                , o = t;
              o = f.isObject(t) ? [t] : f.isString(t) ? [r[t]] : i,
                f.each(o, function(t) {
                  e._clearAnchor(t),
                    t.isAnchorShow = !1,
                    delete i[t.id]
                }),
                n.draw()
            }
          }]),
          e
      }();
      t.exports = d
    }
    , function(t, e, n) {
      function r(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n,
          t
      }
      var i = n(138)
        , o = n(8)
        , a = {
        CFG: {
          anchor: {}
        },
        INIT: "_initAnchor"
      };
      a.AUGMENT = {
        _initAnchor: function() {
          var t = this.get("anchor")
            , e = this.get("_graph");
          if (t) {
            var n = new i(function(t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {}
                  , i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                  return Object.getOwnPropertyDescriptor(n, t).enumerable
                }))),
                  i.forEach(function(e) {
                    r(t, e, n[e])
                  })
              }
              return t
            }({
              diagram: this,
              graph: e
            }, t));
            this.setController("anchor", n)
          }
        },
        showAnchor: function(t, e, n) {
          this.getController("anchor").showAnchor(t, e, n)
        },
        clearAnchor: function(t) {
          this.getController("anchor").clearAnchor(t)
        },
        setHotspotActived: function(t, e) {
          this.getController("anchor").setHotspotActived(t, e)
        },
        hoverShowAnchor: function(t) {
          var e = this
            , n = [];
          t.getAnchorPoints().forEach(function(r, i) {
            var o = {
              anchor: r,
              item: t
            };
            e.emit("hovernode:beforeshowanchor", o),
            o.cancel || n.push(i)
          }),
            this.showAnchor(t, n)
        },
        anchorHasBeenLinked: function(t, e) {
          var n = [];
          return t.getEdges().forEach(function(e) {
            var r = e.getModel();
            r.source !== t.id || o.isNil(r.sourceAnchor) || n.push(r.sourceAnchor),
            r.target !== t.id || o.isNil(r.targetAnchor) || n.push(r.targetAnchor)
          }),
            o.isObject(e) ? -1 !== n.indexOf(e.index) : -1 !== n.indexOf(e)
        },
        dragEdgeBeforeShowAnchor: function(t, e, n) {
          var r = this;
          this.getGraph().getNodes().forEach(function(i) {
            var o, a = [], u = i.getAnchorPoints();
            if (t.isNode) {
              var s = t.getAnchorPoints();
              u.forEach(function(u, c) {
                o = "target" === n ? {
                  source: t,
                  sourceAnchor: s[e],
                  target: i,
                  targetAnchor: u,
                  dragEndPointType: n
                } : {
                  target: t,
                  targetAnchor: s[e],
                  source: i,
                  sourceAnchor: u,
                  dragEndPointType: n
                },
                  r.emit("dragedge:beforeshowanchor", o),
                o.cancel || a.push(c)
              })
            } else
              u.forEach(function(t, e) {
                a.push(e)
              });
            i === t && i.isAnchorShow ? a.forEach(function(t) {
              var n = i.getAnchor(t);
              e !== t && n && n.showHotspot()
            }) : r.showAnchor(i, a, !0)
          })
        }
      },
        t.exports = a
    }
    , function(t, e, n) {
      var r = {}
        , i = n(8);
      r.AUGMENT = {
        changeAddEdgeModel: function(t) {
          this.set("addEdgeModel", t)
        },
        cancelAdd: function() {
          this.set("addType", void 0),
            this.set("addModel", void 0),
            this.changeMode("default")
        },
        beginAdd: function(t, e) {
          this.set("addType", t),
            this.set("addModel", e),
            this.changeMode("add")
        },
        endAdd: function() {
          this.set("addType", void 0),
            this.set("addModel", void 0),
            this.changeMode("default")
        },
        delete: function() {
          var t = this.getSelected()
            , e = this.get("_graph");
          i.each(t, function(t) {
            e.remove(t)
          })
        },
        toBack: function() {
          var t = this.getSelected()
            , e = this.get("_graph");
          t.sort(function(t, e) {
            var n = t.getGraphicGroup()
              , r = e.getGraphicGroup();
            return i.getIndex(r) - i.getIndex(n)
          }),
            t.forEach(function(t) {
              e.toBack(t)
            })
        },
        toFront: function() {
          var t = this.getSelected()
            , e = this.get("_graph");
          t.sort(function(t, e) {
            var n = t.getGraphicGroup()
              , r = e.getGraphicGroup();
            return i.getIndex(n) - i.getIndex(r)
          }),
            t.forEach(function(t) {
              e.toFront(t)
            })
        },
        addGroup: function(t) {
          var e, n = this.get("_graph"), r = this.getSelected(), o = !0;
          if (0 !== r.length) {
            t || (t = {
              label: "新建分组"
            }),
              i.setId(t),
              n.add("group", t),
              n.toFront(t.id);
            var a = n.find(t.id);
            if (r.forEach(function(t) {
              var n = t.getParent();
              n && (e ? e !== n && (o = !1) : e = n)
            }),
              o) {
              e && (t.parent = e.getModel().id),
                r.forEach(function(e) {
                  n.update(e, {
                    parent: t.id
                  })
                });
              var u = a.getInnerEdges();
              a.deepEach(function(t) {
                n.toFront(t)
              }),
                u.forEach(function(t) {
                  n.toFront(t)
                })
            } else
              console.warn("add group elements must have the same parent")
          }
        },
        unGroup: function() {
          var t = this.get("_graph")
            , e = this.getSelected()
            , n = e[0];
          1 === e.length && i.isGroup(n) && (n.getChildren().forEach(function(e) {
            t.update(e, {
              parent: void 0
            }),
            e.collapsedParent || e.show(),
            e.isGroup && e.deepEach(function(t) {
              t.collapsedParent || t.show()
            })
          }),
            t.remove(n))
        },
        newGroup: function(t) {
          this.addGroup(t)
        }
      },
        t.exports = r
    }
    , function(t, e) {
      t.exports = {
        rectRectCrossAlgorithm: function(t, e) {
          var n = Math.max(t.minX, e.minX)
            , r = Math.max(t.minY, e.minY)
            , i = Math.min(t.maxX, e.maxX)
            , o = Math.min(t.maxY, e.maxY);
          return n > i || r > o
        },
        euclideanDistance: {
          pointPoint: function(t, e) {
            var n = Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2);
            return Math.sqrt(n)
          }
        }
      }
    }
    , function(t, e, n) {
      var r = n(55);
      t.exports = {
        dragingEdgeEndPoint: function(t) {
          var e = t.endPointType
            , n = t.edgeModel
            , r = t.graph
            , i = t.delegation
            , o = t.startPoint
            , a = t.ev
            , u = t.source
            , s = t.target
            , c = a.item
            , h = r.getShapeObj("edge", n)
            , l = "source" === e ? [a, o] : [o, a];
          c && ("source" === e ? s = c : u = c);
          var f = h.getPathByPoints({
            points: l,
            source: u,
            target: s
          });
          i.attr("path", f),
            r.draw()
        },
        panGroup: function(t, e, n, i) {
          var o = t.getModel();
          r.traverseTree(t, function(t) {
            if ("node" === t.type) {
              var r = t.getModel();
              i.update(t, {
                x: r.x + e,
                y: r.y + n
              })
            }
          }, function(t) {
            return "group" === t.type ? t.getChildren() : []
          }),
            i.update(t, {
              x: o.x + e,
              y: o.y + n
            })
        },
        dropUpdateEdge: function(t) {
          var e = t.ev
            , n = t.endPointType
            , r = t.model
            , i = t.diagram
            , o = i.get("noEndEdge")
            , a = i.get("linkAnchor")
            , u = i.get("linkNode")
            , s = e.item
            , c = e.shape
            , h = e.x
            , l = e.y;
          if (i.getGraph().emit("beforedropedge"),
            c) {
            if (a && c.isAnchor && c.hasHotspot) {
              var f = c
                , d = f.getItem();
              return "target" === n ? (r.target = d.id,
                r.targetAnchor = f.getIndex(),
                !0) : (r.source = d.id,
                r.sourceAnchor = f.getIndex(),
                !0)
            }
            if (u && s && s.isNode)
              return "target" === n ? (r.target = s.id,
                !0) : (r.source = s.id,
                !0)
          } else if (o)
            return "target" === n ? (r.target = {
              x: h,
              y: l
            },
              !0) : (r.source = {
              x: h,
              y: l
            },
              !0);
          return !1
        }
      }
    }
    , function(t, e, n) {
      n(9).registerBehaviour("keydownCmdWheelZoom", function(t) {
        var e = t.getGraph();
        e.behaviourOn("keydown", function(e) {
          91 === e.domEvent.keyCode && t.setSignal("wheelZoom", !0)
        }),
          e.behaviourOn("keyup", function(e) {
            91 === e.domEvent.keyCode && t.setSignal("wheelZoom", !1)
          })
      })
    }
    , function(t, e, n) {
      n(9).registerBehaviour("hoverEdgeActived", function(t) {
        var e = t.getGraph();
        e.behaviourOn("edge:mouseenter", function(e) {
          t.getSignal("panningItem") || e.item && e.item.isSelected || t.getSignal("dragEdge") || t.setActived(e.item, !0)
        }),
          e.behaviourOn("edge:mouseleave", function(e) {
            t.setActived(e.item, !1)
          })
      })
    }
    , function(t, e, n) {
      n(9).registerBehaviour("hoverGroupActived", function(t) {
        var e = t.getGraph();
        e.behaviourOn("mouseenter", function(e) {
          t.getSignal("panningItem") || e.item && e.item.isSelected || t.getSignal("dragEdge") || e.shape && e.shape.isGroupKeyShape && (t.css({
            cursor: "move"
          }),
            t.setActived(e.item, !0))
        }),
          e.behaviourOn("group:mouseleave", function(e) {
            e.item.isActived && !e.item.isSelected && t.setActived(e.item, !1)
          })
      })
    }
    , function(t, e, n) {
      n(9).registerBehaviour("hoverNodeActived", function(t) {
        var e, n = t.getGraph();
        n.behaviourOn("node:mouseenter", function(n) {
          !1 !== n.item.getShapeObj().panAble && t.css({
            cursor: "move"
          }),
          t.getSignal("panningItem") || t.getSignal("dragEdge") || n.item && n.item.isSelected || (e = n.item,
            t.setActived(e, !0))
        }),
          n.behaviourOn("node:mouseleave", function(n) {
            var r = n.toShape;
            e && (r && r.isAnchor && r.getItem() === e || t.getSignal("dragEdge") || (e.isSelected || t.setActived(e, !1),
              e = void 0))
          })
      })
    }
    , function(t, e, n) {
      n(9).registerBehaviour("clickNodeSelected", function(t) {
        t.getGraph().behaviourOn("node:click", function(e) {
          t.get("multiSelectable") && !0 === t.getSignal("shiftKeyDown") ? t.setSelected(e.item.id, !0) : (t.clearActived(),
            t.clearSelected(),
            t.setSelected(e.item.id, !0))
        })
      })
    }
    , function(t, e, n) {
      n(9).registerBehaviour("clickGroupSelected", function(t) {
        t.getGraph().behaviourOn("group:click", function(e) {
          t.get("multiSelectable") && !0 === t.getSignal("shiftKeyDown") ? t.setSelected(e.item.id, !0) : (t.clearActived(),
            t.clearSelected(),
            t.setSelected(e.item.id, !0))
        })
      })
    }
    , function(t, e, n) {
      n(9).registerBehaviour("clickExpandedButton", function(t) {
        var e = t.getGraph();
        e.behaviourOn("click", function(n) {
          var r = n.item
            , i = n.shape;
          if (r && i && i.isExpandedButton) {
            var o = t.editor;
            o ? o.executeCommand("collapseExpand", {
              itemId: r.id
            }) : e.update(r, {
              collapsed: !1
            })
          }
        })
      })
    }
    , function(t, e, n) {
      n(9).registerBehaviour("clickEdgeSelected", function(t) {
        t.getGraph().behaviourOn("edge:click", function(e) {
          t.get("multiSelectable") && !0 === t.getSignal("shiftKeyDown") ? t.setSelected(e.item.id, !0) : (t.clearActived(),
            t.clearSelected(),
            t.setSelected(e.item.id, !0))
        })
      })
    }
    , function(t, e, n) {
      n(9).registerBehaviour("clickCollapsedButton", function(t) {
        var e = t.getGraph();
        e.behaviourOn("click", function(n) {
          var r = n.item
            , i = n.shape;
          if (r && i && i.isCollapsedButton) {
            var o = t.editor;
            o ? o.executeCommand("collapseExpand", {
              itemId: r.id
            }) : e.update(r, {
              collapsed: !0
            })
          }
        })
      })
    }
    , function(t, e, n) {
      n(9).registerBehaviour("clickCanvasSelected", function(t) {
        var e = t.getGraph();
        e.behaviourOn("click", function(e) {
          e.shape || (t.clearSelected(),
            t.clearActived(),
            t.updateStatus())
        }),
          e.behaviourOn("contextmenu", function(e) {
            e.shape || (t.clearSelected(),
              t.clearActived(),
              t.updateStatus())
          })
      })
    }
    , function(t, e, n) {
      n(9).registerBehaviour("dblclickItemEditLabel", function(t) {
        t.getGraph().behaviourOn("node:dblclick", function(e) {
          e.shape && !e.shape.isButton && t.beginEditLabel(e.item)
        })
      })
    }
    , function(t, e, n) {
      n(9).registerBehaviour("endPanItem", function(t) {
        var e = t.getGraph();
        e.behaviourOn("panitemend", function() {
          var n = t.get("panItemDelegation");
          n && (n.remove(),
            e.draw()),
            t.setSignal("panningItem", !1),
            t.set("panItemDelegation", void 0),
            t.set("panItemStartPoint", void 0),
            t.set("panItemStartBox", void 0),
            t.set("panItems", void 0)
        }),
          e.behaviourOn("canvas:mouseleave", function() {
            t.get("panItems") && (t.clearAlignLine(),
              e.emit("panitemend"))
          })
      })
    }
    , function(t, e, n) {
      n(9).registerBehaviour("startPanItem", function(t) {
        var e = t.getGraph()
          , n = e.getRootGroup();
        e.behaviourOn("dragstart", function(r) {
          if (2 !== r.button && r.item && (r.item.isNode || r.item.isGroup)) {
            var i, o = r.item;
            if ((i = (i = o.isSelected ? t.getSelected() : [o]).filter(function(t) {
              return t.isNode || t.isGroup
            }))[0] && !1 !== i[0].dragable) {
              e.emit("beforepanitem", {
                items: i
              }),
                e.emit("beforeshowdelegation", {
                  items: i
                });
              var a = t.getDelegation(i, n)
                , u = a.getBBox();
              t.setSignal("panningItem", !0),
                t.set("panItems", i),
                t.set("panItemDelegation", a),
                t.set("panItemStartBox", u),
                t.set("panItemStartPoint", {
                  x: r.x,
                  y: r.y
                }),
                e.draw()
            }
          }
        })
      })
    }
    , function(t, e, n) {
      n(9).registerBehaviour("processPanItem", function(t) {
        var e = t.getGraph();
        e.behaviourOn("mousemove", function(n) {
          var r = t.get("panItemDelegation");
          if (r) {
            var i = t.get("panItemStartPoint")
              , o = t.get("panItemStartBox")
              , a = n.x - i.x
              , u = n.y - i.y
              , s = t.align({
              x: o.minX + a,
              y: o.minY + u
            }, {
              width: o.width,
              height: o.height
            });
            r.attr({
              x: s.x,
              y: s.y
            }),
              e.emit("itempanning", n),
              e.draw()
          }
        })
      })
    }
    , function(t, e, n) {
      var r = n(9)
        , i = n(25)
        , o = n(14);
      r.registerBehaviour("wheelChangeViewport", function(t) {
        var e, n = t.getGraph();
        n.behaviourOn("wheel", function(t) {
          t.domEvent.preventDefault()
        }),
          n.behaviourOn("wheel", o.throttle(function(r) {
            if (t.getSignal("preventWheelPan"))
              return;
            var a = r.domEvent
              , u = t.getSignal("wheelZoom");
            e || t.setCapture(!1);
            if (u) {
              var s = a.wheelDelta;
              if (Math.abs(s) > 10) {
                var c = n.getMatrix()[0];
                s > 0 ? n.zoom({
                  x: r.x,
                  y: r.y
                }, 1.05 * c) : n.zoom({
                  x: r.x,
                  y: r.y
                }, c * (1 / 1.05))
              }
            } else {
              var h = []
                , l = n.getMatrix();
              o.mat3.translate(h, l, [a.wheelDeltaX * i.wheelPanRatio, a.wheelDeltaY * i.wheelPanRatio]),
              t.translateLimt(h) && n.updateMatrix(h)
            }
            e && clearTimeout(e),
              e = setTimeout(function() {
                t.setCapture(!0),
                  e = void 0
              }, 50)
          }, 16))
      })
    }
    , function(t, e, n) {
      var r = n(9)
        , i = n(14);
      r.registerBehaviour("panCanvas", i.getPanCanvasBehaviour())
    }
    , function(t, e, n) {
      n(9).registerBehaviour("hoverButton", function(t) {
        t.getGraph().behaviourOn("mouseenter", function(e) {
          t.getSignal("panningItem") || e.shape && e.shape.isButton && t.css({
            cursor: "pointer"
          })
        })
      })
    }
    , function(t, e, n) {
      var r = n(9)
        , i = n(14);
      r.registerBehaviour("panBlank", i.getPanCanvasBehaviour(!0))
    }
    , function(t, e, n) {
      n(160),
        n(159),
        n(158),
        n(157),
        n(156),
        n(155),
        n(154),
        n(153),
        n(152),
        n(151),
        n(150),
        n(149),
        n(148),
        n(147),
        n(146),
        n(145),
        n(144),
        n(143)
    }
    , function(t, e) {
      var n = {
        AUGMENT: {
          updateStatus: function() {
            var t, e = this.getSelected();
            0 === e.length ? t = "canvas-selected" : 1 === e.length ? e[0].isNode ? t = "node-selected" : e[0].isEdge ? t = "edge-selected" : e[0].isGroup && (t = "group-selected") : t = "multi-selected",
              this.emit("statuschange", {
                status: t
              })
          }
        }
      };
      t.exports = n
    }
    , function(t, e, n) {
      var r = n(14)
        , i = {
        CFG: {
          labelEditable: !1
        },
        INIT: "_initLabelEditor"
      };
      i.AUGMENT = {
        _initLabelEditor: function() {
          var t = this;
          if (this.get("labelEditable")) {
            var e = this.getGraph()
              , n = r.createDOM('<div contenteditable="true" role="textbox" tabindex="1" class="g6-label-editor"></div>', {
              position: "absolute",
              visibility: "hidden",
              "z-index": "2",
              padding: "0px 2px 0px 0px",
              resize: "none",
              width: "auto",
              height: "auto",
              outline: "none",
              border: "1px solid #1890FF",
              "transform-origin": "left top",
              "max-width": "320px",
              background: "white",
              "box-sizing": "content-box"
            });
            e.getGraphContainer().appendChild(n),
              n.on("blur", function(n) {
                n.stopPropagation(),
                !e.destroyed && t.endEditLabel()
              }),
              n.on("keydown", function(e) {
                e.stopPropagation();
                var n = r.getKeyboradKey(e);
                (e.metaKey && "s" === n || e.ctrlKey && "s" === n) && e.preventDefault(),
                "Enter" !== n && "Escape" !== n || t.endEditLabel()
              }),
              this.set("labelTextArea", n),
              e.on("beforeviewportchange", function() {
                n.focusItem && t.setLabelEditorBeginPosition(n.focusItem)
              })
          }
        },
        _getLabelTextAreaBox: function(t, e) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [0, 0];
          e && t.attr("text", e);
          var i = this.getGraph().getRootGroup()
            , o = r.getBBox(t, i);
          return {
            minX: o.minX - n[1],
            minY: o.minY - n[0],
            maxX: o.maxX + n[1],
            maxY: o.maxY + n[0]
          }
        },
        setLabelEditorBeginPosition: function(t) {
          var e = this.get("labelTextArea")
            , n = t.getLabel();
          if (n) {
            var i = this._getLabelTextAreaBox(n)
              , o = n.attr("lineHeight")
              , a = n.attr("fontSize")
              , u = {
              x: i.minX,
              y: i.minY - o / 4 + a / 4 - 1,
              width: i.maxX - i.minX,
              height: i.maxY - i.minY
            };
            e.css({
              top: u.y + "px",
              left: u.x + "px"
            }),
              e.labelPoint = u
          } else {
            var s = this.getGraph().getRootGroup()
              , c = t.getKeyShape()
              , h = r.getBBox(c, s)
              , l = {
              x: h.minY + (h.maxY - h.minY - e.height()) / 2,
              y: (h.minX + h.maxX) / 2
            };
            e.css({
              top: l.x + "px",
              left: l.y + "px"
            }),
              e.labelPoint = l
          }
        },
        beginEditLabel: function(t) {
          var e = this.get("labelTextArea")
            , n = this.getGraph();
          if (r.isString(t) && (t = n.find(t)),
          t && !t.destroyed && e) {
            this.setSignal("preventWheelPan", !0);
            var i = t.getModel()
              , o = t.getLabel()
              , a = n.getZoom();
            if (e.focusItem = t,
              o) {
              var u = o.attr("lineHeight")
                , s = this._getLabelTextAreaBox(o)
                , c = (s.maxX - s.minX) / a
                , h = (s.maxY - s.minY + u / 4) / a;
              e.innerHTML = i.label,
                e.innerHTML = i.label,
                e.css({
                  "min-width": c + "px",
                  "min-height": h + "px",
                  visibility: "visible",
                  "font-family": o.attr("fontFamily"),
                  "line-height": u + "px",
                  "font-size": o.attr("fontSize") + "px",
                  transform: "scale(" + a + ")"
                })
            } else
              e.innerHTML = "",
                e.css({
                  "min-width": "auto",
                  "min-height": "auto"
                });
            this.setLabelEditorBeginPosition(t),
              e.css({
                visibility: "visible"
              }),
              e.focus(),
              document.execCommand("selectAll", !1, null)
          }
        },
        endEditLabel: function() {
          var t = this.get("labelTextArea");
          if (this.setSignal("preventWheelPan", !1),
            t) {
            var e = t.focusItem;
            if (e) {
              var n = e.getModel()
                , r = this.editor;
              n.label !== t.textContent && r.executeCommand("update", {
                action: "updateLabel",
                itemId: e.id,
                updateModel: {
                  label: t.textContent
                }
              }),
                t.hide(),
                t.focusItem = void 0,
                this.focusGraphWrapper()
            }
          }
        }
      },
        t.exports = i
    }
    , function(t, e, n) {
      function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
              return typeof t
            }
            : function(t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
        )(t)
      }
      function i(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1,
            r.configurable = !0,
          "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
      }
      function o(t, e) {
        return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
          if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(t) : e
      }
      function a(t) {
        return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
          }
        )(t)
      }
      function u(t, e) {
        return (u = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
              t
          }
        )(t, e)
      }
      var s = n(17)
        , c = n(25)
        , h = n(14);
      function l(t, e) {
        return {
          line: t,
          point: e,
          dis: h.pointLineDistance(t[0], t[1], t[2], t[3], e.x, e.y)
        }
      }
      var f = function(t) {
        function e() {
          return function(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function")
          }(this, e),
            o(this, a(e).apply(this, arguments))
        }
        return function(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }),
          e && u(t, e)
        }(e, s),
          function(t, e, n) {
            e && i(t.prototype, e),
            n && i(t, n)
          }(e, [{
            key: "getDefaultCfg",
            value: function() {
              return {
                line: c.alignLineStyle,
                item: !0,
                grid: !1,
                tolerance: 5,
                _horizontalLines: {},
                _verticalLines: {},
                _alignLines: []
              }
            }
          }, {
            key: "init",
            value: function() {
              this.item && this._cacheBoxLine()
            }
          }, {
            key: "_cacheBoxLine",
            value: function() {
              var t = this.graph
                , e = this._horizontalLines
                , n = this._verticalLines
                , r = this.item;
              t.on("afteritemdraw", function(t) {
                var i = t.item;
                if (!h.isEdge(i)) {
                  var o = i.getBBox();
                  !0 === r || "horizontal" === r ? (e[i.id + "tltr"] = [o.minX, o.minY, o.maxX, o.minY, i],
                    e[i.id + "lcrc"] = [o.minX, o.centerY, o.maxX, o.centerY, i],
                    e[i.id + "blbr"] = [o.minX, o.maxY, o.maxX, o.maxY, i]) : "center" === r && (e[i.id + "lcrc"] = [o.minX, o.centerY, o.maxX, o.centerY, i]),
                    !0 === r || "vertical" === r ? (n[i.id + "tlbl"] = [o.minX, o.minY, o.minX, o.maxY, i],
                      n[i.id + "tcbc"] = [o.centerX, o.minY, o.centerX, o.maxY, i],
                      n[i.id + "trbr"] = [o.maxX, o.minY, o.maxX, o.maxY, i]) : "center" === r && (n[i.id + "tcbc"] = [o.centerX, o.minY, o.centerX, o.maxY, i])
                }
              }),
                t.on("beforeitemdestroy", function(t) {
                  var r = t.item;
                  delete e[r.id + "tltr"],
                    delete e[r.id + "lcrc"],
                    delete e[r.id + "blbr"],
                    delete n[r.id + "tlbl"],
                    delete n[r.id + "tcbc"],
                    delete n[r.id + "trbr"]
                })
            }
          }, {
            key: "align",
            value: function(t, e) {
              var n = h.mix({}, t)
                , r = this.flow.getController("grid");
              return this.grid && r && r.visible && this._gridAlign(t, e),
              this.item && this._itemAlign(t, e, n),
                t
            }
          }, {
            key: "_gridAlign",
            value: function(t, e) {
              var n = this.flow
                , r = this.grid
                , i = n.getGridCell();
              if ("cc" === r) {
                var o = Math.round((t.x + e.width / 2) / i) * i
                  , a = Math.round((t.y + e.height / 2) / i) * i;
                t.x = o - e.width / 2,
                  t.y = a - e.height / 2
              } else
                t.x = Math.round(t.x / i) * i,
                  t.y = Math.round(t.y / i) * i
            }
          }, {
            key: "_itemAlign",
            value: function(t, e, n) {
              var r = this._horizontalLines
                , i = this._verticalLines
                , o = this.tolerance
                , a = {
                x: n.x + e.width / 2,
                y: n.y
              }
                , u = {
                x: n.x + e.width / 2,
                y: n.y + e.height / 2
              }
                , s = {
                x: n.x + e.width / 2,
                y: n.y + e.height
              }
                , c = {
                x: n.x,
                y: n.y + e.height / 2
              }
                , f = {
                x: n.x + e.width,
                y: n.y + e.height / 2
              }
                , d = []
                , p = []
                , g = null;
              if (this.clearAlignLine(),
                h.each(r, function(t) {
                  t[4].isVisible() && (d.push(l(t, a)),
                    d.push(l(t, u)),
                    d.push(l(t, s)))
                }),
                h.each(i, function(t) {
                  t[4].isVisible() && (p.push(l(t, c)),
                    p.push(l(t, u)),
                    p.push(l(t, f)))
                }),
                d.sort(function(t, e) {
                  return t.dis - e.dis
                }),
                p.sort(function(t, e) {
                  return t.dis - e.dis
                }),
              0 !== d.length && d[0].dis < o) {
                t.y = d[0].line[1] - d[0].point.y + n.y,
                  g = {
                    type: "item",
                    horizontals: [d[0]]
                  };
                for (var m = 1; m < 3; m++)
                  d[0].dis === d[m].dis && g.horizontals.push(d[m])
              }
              if (0 !== p.length && p[0].dis < o) {
                t.x = p[0].line[0] - p[0].point.x + n.x,
                  g ? g.verticals = [p[0]] : g = {
                    type: "item",
                    verticals: [p[0]]
                  };
                for (var v = 1; v < 3; v++)
                  p[0].dis === p[v].dis && g.verticals.push(p[v])
              }
              g && (g.bbox = e,
                this._addAlignLine(g))
            }
          }, {
            key: "clearAlignLine",
            value: function() {
              var t = this._alignLines;
              h.each(t, function(t) {
                t.remove()
              }),
                this._alignLines = []
            }
          }, {
            key: "_addAlignLine",
            value: function(t) {
              var e = t.bbox
                , n = this.graph.getRootGroup()
                , r = this.line
                , i = this._alignLines;
              "item" === t.type && (t.horizontals && h.each(t.horizontals, function(t) {
                var o, a, u = t.line, s = t.point, c = (u[0] + u[2]) / 2;
                s.x < c ? (o = s.x - e.width / 2,
                  a = Math.max(u[0], u[2])) : (o = s.x + e.width / 2,
                  a = Math.min(u[0], u[2]));
                var l = n.addShape("line", {
                  attrs: h.mix({
                    x1: o,
                    y1: u[1],
                    x2: a,
                    y2: u[1]
                  }, r),
                  capture: !1
                });
                i.push(l)
              }),
              t.verticals && h.each(t.verticals, function(t) {
                var o, a, u = t.line, s = t.point, c = (u[1] + u[3]) / 2;
                s.y < c ? (o = s.y - e.height / 2,
                  a = Math.max(u[1], u[3])) : (o = s.y + e.height / 2,
                  a = Math.min(u[1], u[3]));
                var l = n.addShape("line", {
                  attrs: h.mix({
                    x1: u[0],
                    y1: o,
                    x2: u[0],
                    y2: a
                  }, r),
                  capture: !1
                });
                i.push(l)
              }))
            }
          }]),
          e
      }();
      t.exports = f
    }
    , function(t, e, n) {
      function r(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n,
          t
      }
      var i = n(164)
        , o = {
        CFG: {
          align: {}
        },
        INIT: "_initAlign"
      };
      o.AUGMENT = {
        _initAlign: function() {
          var t = this.get("align")
            , e = this.get("_graph")
            , n = new i(function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {}
                , i = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable
              }))),
                i.forEach(function(e) {
                  r(t, e, n[e])
                })
            }
            return t
          }({
            flow: this,
            graph: e
          }, t));
          this.setController("align", n)
        },
        align: function(t, e, n) {
          return this.getController("align").align(t, e, n)
        },
        clearAlignLine: function() {
          return this.getController("align").clearAlignLine()
        }
      },
        t.exports = o
    }
    , function(t, e, n) {
      var r = n(14)
        , i = {
        CFG: {
          activeable: !0,
          _activedCache: {}
        },
        INIT: "_initActived"
      };
      i.AUGMENT = {
        _initActived: function() {
          var t = this
            , e = this.get("_graph");
          e.on("afteritemdraw", function(e) {
            var n = e.item;
            n.isActived && t.setItemActived(n)
          }),
            e.on("beforeitemdestroy", function(e) {
              t.clearItemActived(e.item)
            })
        },
        setItemActived: function(t) {
          var e = this.get("_graph").getShapeObj(t)
            , n = this.get("_activedCache")
            , r = e.getActivedStyle(t)
            , i = t.getKeyShape();
          n[t.id] = t,
          r && i.attr(r),
          t.isEdge && (t.startArrow && t.startArrow.attr({
            fill: r.stroke
          }),
          t.endArrow && t.endArrow.attr({
            fill: r.stroke
          }))
        },
        clearItemActived: function(t) {
          var e = this.get("_graph")
            , n = t.getKeyShape()
            , i = e.getShapeObj(t)
            , o = i.getStyle(t)
            , a = this.get("_activedCache")
            , u = i.getActivedStyle(t)
            , s = r.getContrast(o, u);
          n.attr(s),
          t.isEdge && (t.startArrow && t.startArrow.attr({
            fill: s.stroke
          }),
          t.endArrow && t.endArrow.attr({
            fill: s.stroke
          })),
            delete a[t.id]
        },
        setActived: function(t, e) {
          var n, i = this, o = this.get("activeable"), a = this.get("_graph");
          o && (n = r.isArray(t) ? t : [t],
            r.each(n, function(t) {
              r.isString(t) && (t = a.find(t)),
              t && !t.destroyed && (e ? (i.emit("beforeitemactived", {
                item: t
              }),
                i.setItemActived(t),
                i.emit("afteritemactived", {
                  item: t
                })) : (i.emit("beforeitemunactived", {
                item: t
              }),
                i.clearItemActived(t),
                i.emit("afteritemunactived", {
                  item: t
                })),
                t.isActived = e)
            }),
            a.draw())
        },
        getActived: function() {
          var t = this.get("_activedCache");
          return r.objectToValues(t)
        },
        clearActived: function() {
          var t = this
            , e = this.get("_graph")
            , n = this.get("_activedCache");
          r.each(n, function(e) {
            e.isActived && t.setActived(e, !1)
          }),
            e.draw()
        }
      },
        t.exports = i
    }
    , function(t, e, n) {
      var r = n(14)
        , i = {
        CFG: {
          selectable: !0,
          multiSelectable: !0,
          _selectedCache: {}
        },
        INIT: "_initSelected"
      };
      i.AUGMENT = {
        _initSelected: function() {
          var t = this
            , e = this.get("_graph");
          e.on("afteritemdraw", function(e) {
            var n = e.item;
            n.isSelected && t.setItemSelected(n)
          }),
            e.on("beforeitemdestroy", function(e) {
              t.clearItemSelected(e.item)
            })
        },
        setItemSelected: function(t) {
          var e = this.get("_graph").getShapeObj(t).getSelectedStyle(t)
            , n = t.getKeyShape();
          this.get("_selectedCache")[t.id] = t,
          e && n.attr(e),
          t.isEdge && (t.startArrow && t.startArrow.attr({
            fill: e.stroke
          }),
          t.endArrow && t.endArrow.attr({
            fill: e.stroke
          }))
        },
        clearItemSelected: function(t) {
          var e = this.get("_graph")
            , n = t.getKeyShape()
            , i = e.getShapeObj(t)
            , o = i.getStyle(t)
            , a = i.getSelectedStyle(t)
            , u = this.get("_selectedCache")
            , s = r.getContrast(o, a);
          n.attr(s),
          t.isEdge && (t.startArrow && t.startArrow.attr({
            fill: s.stroke
          }),
          t.endArrow && t.endArrow.attr({
            fill: s.stroke
          })),
            delete u[t.id]
        },
        setSelected: function(t, e) {
          var n, i = this, o = this.get("selectable"), a = this.get("_graph");
          o && (n = r.isArray(t) ? t : [t],
            r.each(n, function(t) {
              r.isString(t) && (t = a.find(t)),
              t && !t.destroyed && (e ? (i.emit("beforeitemselected", {
                item: t
              }),
                i.setItemSelected(t),
                i.emit("afteritemselected", {
                  item: t
                })) : (i.emit("beforeitemunselected", {
                item: t
              }),
                i.clearItemSelected(t),
                i.emit("afteritemunselected", {
                  item: t
                })),
                t.isSelected = e,
                i.updateStatus(),
                a.draw())
            }))
        },
        getSelected: function() {
          var t = this.get("_selectedCache");
          return r.objectToValues(t)
        },
        clearSelected: function() {
          var t = this
            , e = this.get("_graph")
            , n = this.get("_selectedCache");
          r.each(n, function(e) {
            e.isSelected && t.setSelected(e, !1)
          }),
            e.draw()
        }
      },
        t.exports = i
    }
    , function(t, e) {
      var n = {};
      function r(t, e, n) {
        t.on(n, function(t) {
          e.emit(n, t)
        }),
          t.on("node:" + n, function(t) {
            e.emit("node:" + n, t)
          }),
          t.on("edge:" + n, function(t) {
            e.emit("edge:" + n, t)
          }),
          t.on("group:" + n, function(t) {
            e.emit("group:" + n, t)
          }),
          t.on("anchor:" + n, function(t) {
            e.emit("anchor:" + n, t)
          })
      }
      n.INIT = "_initEvent",
        n.AUGMENT = {
          _initEvent: function() {
            var t = this
              , e = this.get("_graph");
            r(e, this, "click"),
              r(e, this, "dblclick"),
              r(e, this, "mouseenter"),
              r(e, this, "mouseleave"),
              r(e, this, "mousedown"),
              r(e, this, "mouseup"),
              r(e, this, "contextmenu"),
              e.on("keydown", function(e) {
                t.emit("keydown", e)
              }),
              e.on("keyup", function(e) {
                t.emit("keyup", e)
              }),
              e.on("beforechange", function(e) {
                t.emit("beforechange", e)
              }),
              e.on("afterchange", function(e) {
                t.emit("afterchange", e)
              }),
              e.on("afterviewportchange", function(e) {
                t.emit("afterviewportchange", e),
                e.updateMatrix[0] !== e.originMatrix[0] && t.emit("afterzoom", e)
              }),
              e.on("beforeviewportchange", function(e) {
                t.emit("beforeviewportchange", e),
                e.updateMatrix[0] !== e.originMatrix[0] && t.emit("beforezoom", e)
              })
          }
        },
        t.exports = n
    }
    , function(t, e, n) {
      function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
              return typeof t
            }
            : function(t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
        )(t)
      }
      function i(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1,
            r.configurable = !0,
          "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
      }
      function o(t, e) {
        return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
          if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(t) : e
      }
      function a(t) {
        return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
          }
        )(t)
      }
      function u(t, e) {
        return (u = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
              t
          }
        )(t, e)
      }
      var s = n(17)
        , c = n(25)
        , h = n(14)
        , l = function(t) {
        function e() {
          return function(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function")
          }(this, e),
            o(this, a(e).apply(this, arguments))
        }
        return function(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }),
          e && u(t, e)
        }(e, s),
          function(t, e, n) {
            e && i(t.prototype, e),
            n && i(t, n)
          }(e, [{
            key: "getDefaultCfg",
            value: function() {
              return {
                cell: 16,
                line: c.gridStyle,
                type: "point",
                visible: !0
              }
            }
          }, {
            key: "init",
            value: function() {
              this._draw(),
                this._onViewPortChange(),
              !this.visible && this.hide()
            }
          }, {
            key: "_onViewPortChange",
            value: function() {
              var t = this
                , e = this.graph;
              e.on("afterviewportchange", function() {
                t.update()
              }),
                e.on("beforechangesize", function() {
                  t.update()
                })
            }
          }, {
            key: "_draw",
            value: function() {
              var t = this.graph
                , e = this._getPath()
                , n = t.getRootGroup()
                , r = h.mix({}, this.line)
                , i = t.getMatrix()
                , o = this.type
                , a = "line" === o ? 1 / i[0] : 2 / i[0];
              "point" === o && (r.lineDash = null),
                r.lineWidth = a,
                r.path = e;
              var u = n.addShape("path", {
                attrs: r,
                capture: !1,
                zIndex: 0
              });
              h.toBack(u, n),
                this.gridEl = u
            }
          }, {
            key: "show",
            value: function() {
              this.gridEl.show(),
                this.visible = !0
            }
          }, {
            key: "hide",
            value: function() {
              this.gridEl.hide(),
                this.visible = !1
            }
          }, {
            key: "_getLinePath",
            value: function() {
              for (var t = this.graph, e = t.get("width"), n = t.get("height"), r = t.getPoint({
                x: 0,
                y: 0
              }), i = t.getPoint({
                x: e,
                y: n
              }), o = this.cell, a = Math.ceil(r.x / o) * o, u = Math.ceil(r.y / o) * o, s = [], c = 0; c <= i.x - r.x; c += o) {
                var h = a + c;
                s.push(["M", h, r.y]),
                  s.push(["L", h, i.y])
              }
              for (var l = 0; l <= i.y - r.y; l += o) {
                var f = u + l;
                s.push(["M", r.x, f]),
                  s.push(["L", i.x, f])
              }
              return s
            }
          }, {
            key: "_getPointPath",
            value: function() {
              for (var t = this.graph, e = t.get("width"), n = t.get("height"), r = t.getPoint({
                x: 0,
                y: 0
              }), i = 2 / t.getMatrix()[0], o = t.getPoint({
                x: e,
                y: n
              }), a = this.getCell(), u = Math.ceil(r.x / a) * a, s = Math.ceil(r.y / a) * a, c = [], h = 0; h <= o.x - r.x; h += a)
                for (var l = u + h, f = 0; f <= o.y - r.y; f += a) {
                  var d = s + f;
                  c.push(["M", l, d]),
                    c.push(["L", l + i, d])
                }
              return c
            }
          }, {
            key: "getCell",
            value: function() {
              var t = this.cell
                , e = this.graph.getMatrix()[0];
              return t * e < 9.6 ? 9.6 / e : t
            }
          }, {
            key: "_getPath",
            value: function() {
              var t = this.type;
              return this["_get" + h.upperFirst(t) + "Path"]()
            }
          }, {
            key: "update",
            value: function(t) {
              h.mix(this, t);
              var e = this._getPath()
                , n = this.gridEl
                , r = this.graph.getMatrix()
                , i = "line" === this.type ? 1 / r[0] : 2 / r[0];
              n.attr("lineWidth", i),
                n.attr("path", e)
            }
          }, {
            key: "destroy",
            value: function() {
              var t = this.gridEl;
              t && t.remove()
            }
          }]),
          e
      }();
      t.exports = l
    }
    , function(t, e, n) {
      function r(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n,
          t
      }
      var i = n(169)
        , o = n(14)
        , a = {
        CFG: {
          grid: void 0
        },
        INIT: "_initGrid"
      };
      a.AUGMENT = {
        _initGrid: function() {
          var t = this.get("grid")
            , e = this.get("_graph");
          if (t) {
            var n = new i(function(t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {}
                  , i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                  return Object.getOwnPropertyDescriptor(n, t).enumerable
                }))),
                  i.forEach(function(e) {
                    r(t, e, n[e])
                  })
              }
              return t
            }({
              page: this,
              graph: e
            }, t));
            this.setController("grid", n)
          }
        },
        showGrid: function(t) {
          var e = this.get("_graph")
            , n = this.getController("grid");
          n || (t ? o.isObject(t) && this.set("grid", t) : this.set("grid", !0),
            this._initGrid()),
            (n = this.getController("grid")).show(),
            e.draw()
        },
        hideGrid: function() {
          var t = this.get("_graph")
            , e = this.getController("grid");
          e && e.hide(),
            t.draw()
        },
        getGridCell: function() {
          return this.getController("grid").getCell()
        }
      },
        t.exports = a
    }
    , function(t, e, n) {
      function r(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n,
          t
      }
      var i = n(14)
        , o = {
        INIT: "_initGraph"
      };
      o.AUGMENT = {
        _initGraph: function() {
          var t = this.get("graph")
            , e = new (this.get("graphConstructor"))(function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {}
                , i = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable
              }))),
                i.forEach(function(e) {
                  r(t, e, n[e])
                })
            }
            return t
          }({
            page: this
          }, t));
          e.draw(),
            this.set("_graph", e)
        },
        changeMode: function(t) {
          this.get("_graph").changeMode(t)
        },
        updateMatrix: function(t) {
          this.get("_graph").updateMatrix(t)
        },
        getMode: function() {
          return this.get("_graph").get("mode")
        },
        getMatrix: function() {
          return this.get("_graph").getMatrix()
        },
        getZoom: function() {
          return this.get("_graph").getMatrix()[0]
        },
        getMaxZoom: function() {
          return this.get("_graph").get("maxZoom")
        },
        getMinZoom: function() {
          return this.get("_graph").get("minZoom")
        },
        getGraph: function() {
          return this.get("_graph")
        },
        getItems: function() {
          return this.get("_graph").getItems()
        },
        getNodes: function() {
          return this.get("_graph").getNodes()
        },
        translate: function(t, e) {
          return this.get("_graph").translate(t, e)
        },
        getEdges: function() {
          return this.get("_graph").getEdges()
        },
        getGroups: function() {
          return this.get("_graph").getGroups()
        },
        render: function() {
          return this.get("_graph").render(),
            this
        },
        add: function(t, e) {
          return this.get("_graph").add(t, e),
            this
        },
        focusPointByDom: function(t) {
          return this.get("_graph").focusPointByDom(t),
            this
        },
        focusPoint: function(t) {
          return this.get("_graph").focusPoint(t),
            this
        },
        find: function(t) {
          return this.get("_graph").find(t)
        },
        focus: function(t) {
          var e = this.get("_graph")
            , n = e.find(t);
          if (n) {
            var r = n.getCenter();
            e.focusPoint(r)
          }
          return this
        },
        save: function() {
          return this.get("_graph").save()
        },
        read: function(t) {
          this.get("_graph").read(t)
        },
        clear: function() {
          this.get("_graph").clear()
        },
        remove: function(t) {
          return this.get("_graph").remove(t),
            this
        },
        update: function(t, e) {
          return this.get("_graph").update(t, e),
            this
        },
        zoom: function(t, e) {
          return this.get("_graph").zoom(t, e),
            this
        },
        getDomPoint: function(t) {
          return this.get("_graph").getDomPoint(t)
        },
        getPoint: function(t) {
          return this.get("_graph").getPoint(t)
        },
        zoomByDom: function(t, e) {
          var n = this.get("_graph")
            , r = n.getPoint(t);
          return n.zoom(r, e),
            this
        },
        autoZoom: function() {
          return this.get("_graph").autoZoom(),
            this
        },
        resetZoom: function() {
          var t = this.get("_graph")
            , e = t.getWidth()
            , n = t.getHeight();
          return t.zoomByDom({
            x: e / 2,
            y: n / 2
          }, 1),
            this
        },
        css: function(t) {
          var e = this.get("_graph").getMouseEventWrapper();
          i.modifyCSS(e, t)
        },
        setCapture: function(t) {
          this.get("_graph").getRootGroup().set("capture", t)
        },
        destroy: function() {
          this.get("_graph").destroy()
        },
        delete: function() {
          var t = this.getSelected()
            , e = this.get("_graph");
          i.each(t, function(t) {
            e.remove(t)
          })
        }
      },
        t.exports = o
    }
    , function(t, e) {
      t.exports = "1.3.0"
    }
    , function(t, e, n) {
      var r = n(44);
      r.registerCommand("collapseExpand", {
        getItem: function(t) {
          var e = t.getCurrentPage()
            , n = e.getGraph();
          return this.itemId ? n.find(this.itemId) : e.getSelected()[0]
        },
        enable: function(t) {
          var e = this.getItem(t);
          return e && !1 !== e.collapseExpand && e.getChildren().length > 0
        },
        execute: function(t) {
          var e = t.getCurrentPage()
            , n = e.getGraph()
            , r = this.getItem(t);
          r.getModel().collapsed ? (n.update(r, {
            collapsed: !1
          }),
            this.toCollapsed = !1) : (n.update(r, {
            collapsed: !0
          }),
            this.toCollapsed = !0),
            e.clearSelected(),
            e.setSelected(r, !0),
          1 === this.executeTimes && (this.itemId = r.id)
        },
        back: function(t) {
          var e = t.getCurrentPage()
            , n = e.getGraph()
            , r = this.getItem(t);
          this.toCollapsed ? n.update(r, {
            collapsed: !1
          }) : n.update(r, {
            collapsed: !0
          }),
            e.clearSelected(),
            e.setSelected(r, !0)
        },
        shortcutCodes: [["metaKey", "/"], ["ctrlKey", "/"]]
      }),
        r.registerCommand("collapse", {
          enable: function(t) {
            var e = this.getItem(t);
            return e && !1 !== e.collapseExpand && e.getChildren().length > 0 && !e.getModel().collapsed
          }
        }, "collapseExpand"),
        r.registerCommand("expand", {
          enable: function(t) {
            var e = this.getItem(t);
            return e && !1 !== e.collapseExpand && e.getChildren().length > 0 && e.getModel().collapsed
          }
        }, "collapseExpand")
    }
    , function(t, e, n) {
      var r = n(44);
      function i(t) {
        var e = t.getCurrentPage();
        this.matrixCache = e.getMatrix().slice(0),
          this._zoom(t),
          e.updateStatus()
      }
      function o(t) {
        t.getCurrentPage().updateMatrix(this.matrixCache)
      }
      r.registerCommand("zoomTo", {
        _zoom: function(t) {
          t.getCurrentPage().zoom(Number(this.zoom))
        },
        queue: !1,
        execute: i,
        back: o
      }),
        r.registerCommand("zoomIn", {
          enable: function(t) {
            var e = t.getCurrentPage()
              , n = e.getMaxZoom()
              , r = e.getMinZoom()
              , i = e.getZoom();
            return i < n || i === r
          },
          _zoom: function(t) {
            var e = t.getCurrentPage()
              , n = t.get("_command")
              , r = e.getZoom()
              , i = e.getMaxZoom()
              , o = r + n.zoomDelta;
            o >= i && (o = i),
              e.zoom(o)
          },
          queue: !1,
          execute: i,
          back: o,
          shortcutCodes: [["metaKey", "="], ["ctrlKey", "="]]
        }),
        r.registerCommand("zoomOut", {
          enable: function(t) {
            var e = t.getCurrentPage()
              , n = e.getMaxZoom()
              , r = e.getMinZoom()
              , i = e.getZoom();
            return i > r || i === n
          },
          _zoom: function(t) {
            var e = t.getCurrentPage()
              , n = e.getZoom()
              , r = e.getMinZoom()
              , i = n - t.get("_command").zoomDelta;
            i <= r && (i = r),
              e.zoom(i)
          },
          queue: !1,
          execute: i,
          back: o,
          shortcutCodes: [["metaKey", "-"], ["ctrlKey", "-"]]
        }),
        r.registerCommand("autoZoom", {
          enable: function() {
            return !0
          },
          _zoom: function(t) {
            t.getCurrentPage().autoZoom()
          },
          queue: !1,
          execute: i,
          back: o
        }),
        r.registerCommand("resetZoom", {
          enable: function() {
            return !0
          },
          _zoom: function(t) {
            t.getCurrentPage().resetZoom()
          },
          queue: !1,
          execute: i,
          back: o,
          shortcutCodes: [["metaKey", "0"], ["ctrlKey", "0"]]
        })
    }
    , function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }),
        e.default = function(t) {
          for (var e = [], n = (0,
            r.default)(t), i = c; i > 0; i -= 1) {
            var o = n.toHsv()
              , a = (0,
              r.default)({
              h: l(o, i, !0),
              s: f(o, i, !0),
              v: d(o, i, !0)
            }).toHexString();
            e.push(a)
          }
          e.push(n.toHexString());
          for (var u = 1; u <= h; u += 1) {
            var s = n.toHsv()
              , p = (0,
              r.default)({
              h: l(s, u),
              s: f(s, u),
              v: d(s, u)
            }).toHexString();
            e.push(p)
          }
          return e
        }
      ;
      var r = function(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }(n(67));
      var i = 2
        , o = 16
        , a = 5
        , u = 5
        , s = 15
        , c = 5
        , h = 4;
      function l(t, e, n) {
        var r = void 0;
        return (r = Math.round(t.h) >= 60 && Math.round(t.h) <= 240 ? n ? Math.round(t.h) - i * e : Math.round(t.h) + i * e : n ? Math.round(t.h) + i * e : Math.round(t.h) - i * e) < 0 ? r += 360 : r >= 360 && (r -= 360),
          r
      }
      function f(t, e, n) {
        if (0 === t.h && 0 === t.s)
          return t.s;
        var r = void 0;
        return (r = n ? Math.round(100 * t.s) - o * e : e === h ? Math.round(100 * t.s) + o : Math.round(100 * t.s) + a * e) > 100 && (r = 100),
        n && e === c && r > 10 && (r = 10),
        r < 6 && (r = 6),
          r
      }
      function d(t, e, n) {
        return n ? Math.round(100 * t.v) + u * e : Math.round(100 * t.v) - s * e
      }
    }
    , function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }),
        e.presetPrimaryColors = e.presetPalettes = e.generate = void 0;
      var r = function(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }(n(175));
      var i = {
        red: "#F5222D",
        volcano: "#FA541C",
        orange: "#FA8C16",
        gold: "#FAAD14",
        yellow: "#FADB14",
        lime: "#A0D911",
        green: "#52C41A",
        cyan: "#13C2C2",
        blue: "#1890FF",
        geekblue: "#2F54EB",
        purple: "#722ED1",
        magenta: "#EB2F96",
        grey: "#666666"
      }
        , o = {};
      Object.keys(i).forEach(function(t) {
        o[t] = (0,
          r.default)(i[t])
      }),
        e.generate = r.default,
        e.presetPalettes = o,
        e.presetPrimaryColors = i
    }
    , function(t, e, n) {
      var r = n(16).Util;
      t.exports = {
        getGroupIconPath: function() {
          return "M9.75,9.60000014 L3.75,9.60000014 C3.33578644,9.60000014 3,9.2865995 3,8.90000022 C3,8.51340093 3.33578644,8.20000029 3.75,8.20000029 L9.75,8.20000029 C10.1642136,8.20000029 10.5,8.51340093 10.5,8.90000022 C10.5,9.2865995 10.1642136,9.60000014 9.75,9.60000014 M3,11.6999999 C3,11.3134006 3.33578644,11 3.75,11 L6.75,11 C7.16421356,11 7.5,11.3134006 7.5,11.6999999 C7.5,12.0865992 7.16421356,12.3999999 6.75,12.3999999 L3.75,12.3999999 C3.33578644,12.3999999 3,12.0865992 3,11.6999999 M3.75,13.7999997 L6.75,13.7999997 C7.16421356,13.7999997 7.5,14.1134004 7.5,14.4999996 C7.5,14.8865989 7.16421356,15.1999996 6.75,15.1999996 L3.75,15.1999996 C3.33578644,15.1999996 3,14.8865989 3,14.4999996 C3,14.1134004 3.33578644,13.7999997 3.75,13.7999997 M16.4985,4.00000072 L1.5015,4.00000072 C0.674533504,3.99922416 0.00289396564,4.6232696 0,5.39510058 L0,16.6048994 C0.00289396564,17.3767304 0.674533504,18.0007758 1.5015,17.9999993 L16.4985,17.9999993 C17.3254665,18.0007758 17.997106,17.3767304 18,16.6048994 L18,5.39510058 C17.997106,4.6232696 17.3254665,3.99922416 16.4985,4.00000072M19,13.9999993 L19,3 L5,3 L5,1.39510058 C5.00289397,0.623269599 5.6745335,-0.00077583787 6.5015,7.23978642e-07 L21.4985,7.23978642e-07 C22.3254665,-0.00077583787 22.997106,0.623269599 23,1.39510058 L23,12.6048994 C22.997106,13.3767304 22.3254665,14.0007758 21.4985,13.9999993 L19,13.9999993 Z"
        },
        getCollapsedButtonPath: function() {
          return r.getRectPath(0, 0, 14, 14, 2) + "M3,7L11,7"
        },
        getExpandedButtonPath: function() {
          return r.getRectPath(0, 0, 14, 14, 2) + "M3,7L11,7M7,3L7,11"
        }
      }
    }
    , function(t, e, n) {
      var r;
      /*!
 * EventEmitter v5.2.5 - git.io/ee
 * Unlicense - http://unlicense.org/
 * Oliver Caldwell - http://oli.me.uk/
 * @preserve
 */
      !function(e) {
        "use strict";
        function i() {}
        var o = i.prototype
          , a = e.EventEmitter;
        function u(t, e) {
          for (var n = t.length; n--; )
            if (t[n].listener === e)
              return n;
          return -1
        }
        function s(t) {
          return function() {
            return this[t].apply(this, arguments)
          }
        }
        o.getListeners = function(t) {
          var e, n, r = this._getEvents();
          if (t instanceof RegExp)
            for (n in e = {},
              r)
              r.hasOwnProperty(n) && t.test(n) && (e[n] = r[n]);
          else
            e = r[t] || (r[t] = []);
          return e
        }
          ,
          o.flattenListeners = function(t) {
            var e, n = [];
            for (e = 0; e < t.length; e += 1)
              n.push(t[e].listener);
            return n
          }
          ,
          o.getListenersAsObject = function(t) {
            var e, n = this.getListeners(t);
            return n instanceof Array && ((e = {})[t] = n),
            e || n
          }
          ,
          o.addListener = function(t, e) {
            if (!function t(e) {
              return "function" == typeof e || e instanceof RegExp || !(!e || "object" != typeof e) && t(e.listener)
            }(e))
              throw new TypeError("listener must be a function");
            var n, r = this.getListenersAsObject(t), i = "object" == typeof e;
            for (n in r)
              r.hasOwnProperty(n) && -1 === u(r[n], e) && r[n].push(i ? e : {
                listener: e,
                once: !1
              });
            return this
          }
          ,
          o.on = s("addListener"),
          o.addOnceListener = function(t, e) {
            return this.addListener(t, {
              listener: e,
              once: !0
            })
          }
          ,
          o.once = s("addOnceListener"),
          o.defineEvent = function(t) {
            return this.getListeners(t),
              this
          }
          ,
          o.defineEvents = function(t) {
            for (var e = 0; e < t.length; e += 1)
              this.defineEvent(t[e]);
            return this
          }
          ,
          o.removeListener = function(t, e) {
            var n, r, i = this.getListenersAsObject(t);
            for (r in i)
              i.hasOwnProperty(r) && -1 !== (n = u(i[r], e)) && i[r].splice(n, 1);
            return this
          }
          ,
          o.off = s("removeListener"),
          o.addListeners = function(t, e) {
            return this.manipulateListeners(!1, t, e)
          }
          ,
          o.removeListeners = function(t, e) {
            return this.manipulateListeners(!0, t, e)
          }
          ,
          o.manipulateListeners = function(t, e, n) {
            var r, i, o = t ? this.removeListener : this.addListener, a = t ? this.removeListeners : this.addListeners;
            if ("object" != typeof e || e instanceof RegExp)
              for (r = n.length; r--; )
                o.call(this, e, n[r]);
            else
              for (r in e)
                e.hasOwnProperty(r) && (i = e[r]) && ("function" == typeof i ? o.call(this, r, i) : a.call(this, r, i));
            return this
          }
          ,
          o.removeEvent = function(t) {
            var e, n = typeof t, r = this._getEvents();
            if ("string" === n)
              delete r[t];
            else if (t instanceof RegExp)
              for (e in r)
                r.hasOwnProperty(e) && t.test(e) && delete r[e];
            else
              delete this._events;
            return this
          }
          ,
          o.removeAllListeners = s("removeEvent"),
          o.emitEvent = function(t, e) {
            var n, r, i, o, a = this.getListenersAsObject(t);
            for (o in a)
              if (a.hasOwnProperty(o))
                for (n = a[o].slice(0),
                       i = 0; i < n.length; i++)
                  !0 === (r = n[i]).once && this.removeListener(t, r.listener),
                  r.listener.apply(this, e || []) === this._getOnceReturnValue() && this.removeListener(t, r.listener);
            return this
          }
          ,
          o.trigger = s("emitEvent"),
          o.emit = function(t) {
            var e = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(t, e)
          }
          ,
          o.setOnceReturnValue = function(t) {
            return this._onceReturnValue = t,
              this
          }
          ,
          o._getOnceReturnValue = function() {
            return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
          }
          ,
          o._getEvents = function() {
            return this._events || (this._events = {})
          }
          ,
          i.noConflict = function() {
            return e.EventEmitter = a,
              i
          }
          ,
        void 0 === (r = function() {
          return i
        }
          .call(e, n, e, t)) || (t.exports = r)
      }("undefined" != typeof window ? window : this || {})
    }
    , function(t, e, n) {
      function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
              return typeof t
            }
            : function(t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
        )(t)
      }
      function i(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1,
            r.configurable = !0,
          "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
      }
      function o(t, e) {
        return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
          if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(t) : e
      }
      function a(t) {
        return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
          }
        )(t)
      }
      function u(t, e) {
        return (u = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
              t
          }
        )(t, e)
      }
      var s = n(56)
        , c = n(18)
        , h = n(30)
        , l = function(t) {
        function e() {
          return function(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function")
          }(this, e),
            o(this, a(e).apply(this, arguments))
        }
        return function(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }),
          e && u(t, e)
        }(e, s),
          function(t, e, n) {
            e && i(t.prototype, e),
            n && i(t, n)
          }(e, [{
            key: "getDefaultCfg",
            value: function() {
              return {
                _components: [],
                _command: {
                  zoomDelta: .1,
                  queue: [],
                  current: 0,
                  clipboard: []
                }
              }
            }
          }, {
            key: "_getComponentsBy",
            value: function(t) {
              return this.get("_components").filter(t)
            }
          }, {
            key: "_bindCommands",
            value: function(t) {
              var e = this;
              c.each(t, function(t) {
                var n = t.dataset
                  , r = n.command;
                h[r] ? c.addEventListener(t, "click", function() {
                  e.getCurrentPage().focusGraphWrapper(),
                    e.executeCommand(r, n)
                }) : console.warn("请设置有效的命令！")
              })
            }
          }, {
            key: "getCommands",
            value: function() {
              return this.get("_command").queue
            }
          }, {
            key: "getCurrentCommand",
            value: function() {
              var t = this.get("_command");
              return t.queue[t.current - 1]
            }
          }, {
            key: "executeCommand",
            value: function(t, e) {
              c.isString(t) ? h.execute(t, this, e) : h.execute("common", this, {
                method: t
              }, e)
            }
          }, {
            key: "commandEnable",
            value: function(t) {
              return h.enable(t, this)
            }
          }, {
            key: "setCommandDOMenable",
            value: function() {
              var t = this
                , e = this.getComponentsByType("toolbar")
                , n = this.getComponentsByType("contextmenu")
                , r = [];
              e.forEach(function(t) {
                c.each(t.getCommandDoms(), function(t) {
                  r.push(t)
                })
              }),
                n.forEach(function(t) {
                  c.each(t.getCommandDoms(), function(t) {
                    r.push(t)
                  })
                }),
                c.each(r, function(e) {
                  var n = e.dataset.command;
                  h.enable(n, t) ? e.classList.remove("disable") : e.classList.add("disable")
                })
            }
          }, {
            key: "_onPageStatusChange",
            value: function() {
              this.setCommandDOMenable()
            }
          }, {
            key: "_beforeAddMinimap",
            value: function(t) {
              var e = this
                , n = this.getComponentsByType("page");
              t.getGraph = function() {
                return e.getCurrentPage().getGraph()
              }
                ,
              0 !== n.length && n.forEach(function(e) {
                t.bindPage(e)
              })
            }
          }, {
            key: "_afterAddContextmenu",
            value: function() {
              this.getCurrentPage() && this.setCommandDOMenable()
            }
          }, {
            key: "_afterAddPage",
            value: function(t) {
              var e = this
                , n = this.getComponentsByType("minimap");
              this.setCommandDOMenable(),
                n.forEach(function(e) {
                  e.bindPage(t)
                }),
                t.on("statuschange", function(t) {
                  e._onPageStatusChange(t)
                }),
                t.on("mousedown", function() {
                  e.getComponentsByType("contextmenu").forEach(function(t) {
                    t.hide()
                  })
                }),
                t.on("contextmenu", function(n) {
                  var r = e.getComponentsByType("contextmenu")
                    , i = t.getGraph().getCanvas().get("el")
                    , o = c.getBoundingClientRect(i)
                    , a = {
                    x: n.x,
                    y: n.y
                  }
                    , u = n.item;
                  u && !u.isSelected && (t.clearSelected(),
                    t.setSelected(n.item, !0)),
                    e.set("contextmenuPoint", a),
                    n.domEvent.preventDefault(),
                    r.forEach(function(t) {
                      t.show(),
                        t.contextmenuPoint = a,
                        t.move(o.left + n.domX, o.top + n.domY)
                    })
                }),
                t.on("statuschange", function(t) {
                  var n = e.getComponentsByType("contextmenu")
                    , r = e.getComponentsByType("detailpanel");
                  n.forEach(function(e) {
                    e.switch(t.status)
                  }),
                    r.forEach(function(e) {
                      e.switch(t.status)
                    })
                }),
                this._bindShortcut(t)
            }
          }, {
            key: "_beforeAddToolbar",
            value: function(t) {
              var e = t.getCommandDoms();
              this._bindCommands(e)
            }
          }, {
            key: "_beforeAddContextmenu",
            value: function(t) {
              var e = t.getCommandDoms();
              t.bindEvent(),
                this._bindCommands(e)
            }
          }, {
            key: "_beforeAddItempanel",
            value: function(t) {
              t.bindEvent()
            }
          }, {
            key: "getComponentsByType",
            value: function(t) {
              return this._getComponentsBy(function(e) {
                return e.type === t
              })
            }
          }, {
            key: "getCurrentPage",
            value: function() {
              var t, e = this.getComponentsByType("page");
              return e.every(function(e) {
                return !e.isActived || (t = e,
                  !1)
              }),
              t || (t = e[0]),
                t
            }
          }, {
            key: "getComponents",
            value: function() {
              return this.get("_components")
            }
          }, {
            key: "_shortcutEnable",
            value: function(t, e) {
              for (var n = t.shortcutCodes, r = c.getKeyboradKey(e), i = !1, o = 0; o < n.length; o++) {
                var a = n[o];
                if (c.isArray(a)) {
                  for (var u = a.length, s = !0, h = 0; h < u - 1; h++)
                    if (!e[a[h]]) {
                      s = !1;
                      break
                    }
                  a[u - 1] !== r && a[u - 1] !== c.lowerFirst(r) || !s || (i = !0)
                } else
                  a === r && (i = !0);
                if (i)
                  break
              }
              return i
            }
          }, {
            key: "_bindShortcut",
            value: function(t) {
              var e = this
                , n = t.get("shortcut");
              t.getGraph().on("keydown", function(t) {
                var r = e.getComponentsByType("contextmenu")
                  , i = t.domEvent;
                r.forEach(function(t) {
                  t.hide()
                }),
                  i.preventDefault();
                for (var o = h.list.filter(function(t) {
                  return t.shortcutCodes && n[t.name]
                }), a = 0; a < o.length; a++) {
                  var u = o[a];
                  if (e._shortcutEnable(u, i))
                    return e.executeCommand(u.name),
                      !1
                }
              })
            }
          }, {
            key: "add",
            value: function(t) {
              var e = this.get("_components")
                , n = c.upperFirst(t.type);
              t.editor = this,
              this["_beforeAdd" + n] && this["_beforeAdd" + n](t),
                e.push(t),
              this["_afterAdd" + n] && this["_afterAdd" + n](t)
            }
          }, {
            key: "destroy",
            value: function() {
              this.get("_components").forEach(function(t) {
                t.destroy()
              })
            }
          }]),
          e
      }();
      t.exports = l
    }
  ])
});
//# sourceMappingURL=G6Editor.js.map

//////////////////
// WEBPACK FOOTER
// ./node_modules/@sdsd22/sd-g6-editor/build/g6Editor.js
// module id = ./node_modules/@sdsd22/sd-g6-editor/build/g6Editor.js
// module chunks = 57
