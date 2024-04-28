"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*! For license information please see main.js.LICENSE.txt */
(function () {
  var t = {
      349: function _(t) {
        function e() {
          return e = Object.assign ? Object.assign.bind() : function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            }
            return t;
          }, e.apply(this, arguments);
        }
        var n = {
            strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
            stringsElement: null,
            typeSpeed: 0,
            startDelay: 0,
            backSpeed: 0,
            smartBackspace: !0,
            shuffle: !1,
            backDelay: 700,
            fadeOut: !1,
            fadeOutClass: "typed-fade-out",
            fadeOutDelay: 500,
            loop: !1,
            loopCount: 1 / 0,
            showCursor: !0,
            cursorChar: "|",
            autoInsertCss: !0,
            attr: null,
            bindInputFocusEvents: !1,
            contentType: "html",
            onBegin: function onBegin(t) {},
            onComplete: function onComplete(t) {},
            preStringTyped: function preStringTyped(t, e) {},
            onStringTyped: function onStringTyped(t, e) {},
            onLastStringBackspaced: function onLastStringBackspaced(t) {},
            onTypingPaused: function onTypingPaused(t, e) {},
            onTypingResumed: function onTypingResumed(t, e) {},
            onReset: function onReset(t) {},
            onStop: function onStop(t, e) {},
            onStart: function onStart(t, e) {},
            onDestroy: function onDestroy(t) {}
          },
          i = new (function () {
            function t() {}
            var i = t.prototype;
            return i.load = function (t, i, r) {
              if (t.el = "string" == typeof r ? document.querySelector(r) : r, t.options = e({}, n, i), t.isInput = "input" === t.el.tagName.toLowerCase(), t.attr = t.options.attr, t.bindInputFocusEvents = t.options.bindInputFocusEvents, t.showCursor = !t.isInput && t.options.showCursor, t.cursorChar = t.options.cursorChar, t.cursorBlinking = !0, t.elContent = t.attr ? t.el.getAttribute(t.attr) : t.el.textContent, t.contentType = t.options.contentType, t.typeSpeed = t.options.typeSpeed, t.startDelay = t.options.startDelay, t.backSpeed = t.options.backSpeed, t.smartBackspace = t.options.smartBackspace, t.backDelay = t.options.backDelay, t.fadeOut = t.options.fadeOut, t.fadeOutClass = t.options.fadeOutClass, t.fadeOutDelay = t.options.fadeOutDelay, t.isPaused = !1, t.strings = t.options.strings.map(function (t) {
                return t.trim();
              }), t.stringsElement = "string" == typeof t.options.stringsElement ? document.querySelector(t.options.stringsElement) : t.options.stringsElement, t.stringsElement) {
                t.strings = [], t.stringsElement.style.cssText = "clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";
                var o = Array.prototype.slice.apply(t.stringsElement.children),
                  s = o.length;
                if (s) for (var a = 0; a < s; a += 1) t.strings.push(o[a].innerHTML.trim());
              }
              for (var u in t.strPos = 0, t.currentElContent = this.getCurrentElContent(t), t.currentElContent && t.currentElContent.length > 0 && (t.strPos = t.currentElContent.length - 1, t.strings.unshift(t.currentElContent)), t.sequence = [], t.strings) t.sequence[u] = u;
              t.arrayPos = 0, t.stopNum = 0, t.loop = t.options.loop, t.loopCount = t.options.loopCount, t.curLoop = 0, t.shuffle = t.options.shuffle, t.pause = {
                status: !1,
                typewrite: !0,
                curString: "",
                curStrPos: 0
              }, t.typingComplete = !1, t.autoInsertCss = t.options.autoInsertCss, t.autoInsertCss && (this.appendCursorAnimationCss(t), this.appendFadeOutAnimationCss(t));
            }, i.getCurrentElContent = function (t) {
              return t.attr ? t.el.getAttribute(t.attr) : t.isInput ? t.el.value : "html" === t.contentType ? t.el.innerHTML : t.el.textContent;
            }, i.appendCursorAnimationCss = function (t) {
              var e = "data-typed-js-cursor-css";
              if (t.showCursor && !document.querySelector("[" + e + "]")) {
                var n = document.createElement("style");
                n.setAttribute(e, "true"), n.innerHTML = "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ", document.body.appendChild(n);
              }
            }, i.appendFadeOutAnimationCss = function (t) {
              var e = "data-typed-fadeout-js-css";
              if (t.fadeOut && !document.querySelector("[" + e + "]")) {
                var n = document.createElement("style");
                n.setAttribute(e, "true"), n.innerHTML = "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ", document.body.appendChild(n);
              }
            }, t;
          }())(),
          r = new (function () {
            function t() {}
            var e = t.prototype;
            return e.typeHtmlChars = function (t, e, n) {
              if ("html" !== n.contentType) return e;
              var i = t.substring(e).charAt(0);
              if ("<" === i || "&" === i) {
                var r;
                for (r = "<" === i ? ">" : ";"; t.substring(e + 1).charAt(0) !== r && !(1 + ++e > t.length););
                e++;
              }
              return e;
            }, e.backSpaceHtmlChars = function (t, e, n) {
              if ("html" !== n.contentType) return e;
              var i = t.substring(e).charAt(0);
              if (">" === i || ";" === i) {
                var r;
                for (r = ">" === i ? "<" : "&"; t.substring(e - 1).charAt(0) !== r && !(--e < 0););
                e--;
              }
              return e;
            }, t;
          }())();
        t.exports = function () {
          function t(t, e) {
            i.load(this, e, t), this.begin();
          }
          var e = t.prototype;
          return e.toggle = function () {
            this.pause.status ? this.start() : this.stop();
          }, e.stop = function () {
            this.typingComplete || this.pause.status || (this.toggleBlinking(!0), this.pause.status = !0, this.options.onStop(this.arrayPos, this));
          }, e.start = function () {
            this.typingComplete || this.pause.status && (this.pause.status = !1, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this));
          }, e.destroy = function () {
            this.reset(!1), this.options.onDestroy(this);
          }, e.reset = function (t) {
            void 0 === t && (t = !0), clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, t && (this.insertCursor(), this.options.onReset(this), this.begin());
          }, e.begin = function () {
            var t = this;
            this.options.onBegin(this), this.typingComplete = !1, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(function () {
              0 === t.strPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos) : t.backspace(t.strings[t.sequence[t.arrayPos]], t.strPos);
            }, this.startDelay);
          }, e.typewrite = function (t, e) {
            var n = this;
            this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
            var i = this.humanizer(this.typeSpeed),
              o = 1;
            !0 !== this.pause.status ? this.timeout = setTimeout(function () {
              e = r.typeHtmlChars(t, e, n);
              var i = 0,
                s = t.substring(e);
              if ("^" === s.charAt(0) && /^\^\d+/.test(s)) {
                var a = 1;
                a += (s = /\d+/.exec(s)[0]).length, i = parseInt(s), n.temporaryPause = !0, n.options.onTypingPaused(n.arrayPos, n), t = t.substring(0, e) + t.substring(e + a), n.toggleBlinking(!0);
              }
              if ("`" === s.charAt(0)) {
                for (; "`" !== t.substring(e + o).charAt(0) && (o++, !(e + o > t.length)););
                var u = t.substring(0, e),
                  c = t.substring(u.length + 1, e + o),
                  l = t.substring(e + o + 1);
                t = u + c + l, o--;
              }
              n.timeout = setTimeout(function () {
                n.toggleBlinking(!1), e >= t.length ? n.doneTyping(t, e) : n.keepTyping(t, e, o), n.temporaryPause && (n.temporaryPause = !1, n.options.onTypingResumed(n.arrayPos, n));
              }, i);
            }, i) : this.setPauseStatus(t, e, !0);
          }, e.keepTyping = function (t, e, n) {
            0 === e && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this));
            var i = t.substring(0, e += n);
            this.replaceText(i), this.typewrite(t, e);
          }, e.doneTyping = function (t, e) {
            var n = this;
            this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(!0), this.arrayPos === this.strings.length - 1 && (this.complete(), !1 === this.loop || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function () {
              n.backspace(t, e);
            }, this.backDelay));
          }, e.backspace = function (t, e) {
            var n = this;
            if (!0 !== this.pause.status) {
              if (this.fadeOut) return this.initFadeOut();
              this.toggleBlinking(!1);
              var i = this.humanizer(this.backSpeed);
              this.timeout = setTimeout(function () {
                e = r.backSpaceHtmlChars(t, e, n);
                var i = t.substring(0, e);
                if (n.replaceText(i), n.smartBackspace) {
                  var o = n.strings[n.arrayPos + 1];
                  n.stopNum = o && i === o.substring(0, e) ? e : 0;
                }
                e > n.stopNum ? (e--, n.backspace(t, e)) : e <= n.stopNum && (n.arrayPos++, n.arrayPos === n.strings.length ? (n.arrayPos = 0, n.options.onLastStringBackspaced(), n.shuffleStringsIfNeeded(), n.begin()) : n.typewrite(n.strings[n.sequence[n.arrayPos]], e));
              }, i);
            } else this.setPauseStatus(t, e, !1);
          }, e.complete = function () {
            this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = !0;
          }, e.setPauseStatus = function (t, e, n) {
            this.pause.typewrite = n, this.pause.curString = t, this.pause.curStrPos = e;
          }, e.toggleBlinking = function (t) {
            this.cursor && (this.pause.status || this.cursorBlinking !== t && (this.cursorBlinking = t, t ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")));
          }, e.humanizer = function (t) {
            return Math.round(Math.random() * t / 2) + t;
          }, e.shuffleStringsIfNeeded = function () {
            this.shuffle && (this.sequence = this.sequence.sort(function () {
              return Math.random() - .5;
            }));
          }, e.initFadeOut = function () {
            var t = this;
            return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout(function () {
              t.arrayPos++, t.replaceText(""), t.strings.length > t.arrayPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0) : (t.typewrite(t.strings[0], 0), t.arrayPos = 0);
            }, this.fadeOutDelay);
          }, e.replaceText = function (t) {
            this.attr ? this.el.setAttribute(this.attr, t) : this.isInput ? this.el.value = t : "html" === this.contentType ? this.el.innerHTML = t : this.el.textContent = t;
          }, e.bindFocusEvents = function () {
            var t = this;
            this.isInput && (this.el.addEventListener("focus", function (e) {
              t.stop();
            }), this.el.addEventListener("blur", function (e) {
              t.el.value && 0 !== t.el.value.length || t.start();
            }));
          }, e.insertCursor = function () {
            this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.setAttribute("aria-hidden", !0), this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)));
          }, t;
        }();
      },
      685: function _(t, e, n) {
        "use strict";

        n.r(e), n.d(e, {
          create: function create() {
            return o;
          },
          "default": function _default() {
            return r;
          }
        });
        var i = {};
        !function t(e, n, i, r) {
          var o = !!(e.Worker && e.Blob && e.Promise && e.OffscreenCanvas && e.OffscreenCanvasRenderingContext2D && e.HTMLCanvasElement && e.HTMLCanvasElement.prototype.transferControlToOffscreen && e.URL && e.URL.createObjectURL),
            s = "function" == typeof Path2D && "function" == typeof DOMMatrix,
            a = function () {
              if (!e.OffscreenCanvas) return !1;
              var t = new OffscreenCanvas(1, 1),
                n = t.getContext("2d");
              n.fillRect(0, 0, 1, 1);
              var i = t.transferToImageBitmap();
              try {
                n.createPattern(i, "no-repeat");
              } catch (t) {
                return !1;
              }
              return !0;
            }();
          function u() {}
          function c(t) {
            var i = n.exports.Promise,
              r = void 0 !== i ? i : e.Promise;
            return "function" == typeof r ? new r(t) : (t(u, u), null);
          }
          var l,
            f,
            d,
            h,
            p,
            g,
            m,
            v,
            y,
            b,
            w,
            C = (l = a, f = new Map(), {
              transform: function transform(t) {
                if (l) return t;
                if (f.has(t)) return f.get(t);
                var e = new OffscreenCanvas(t.width, t.height);
                return e.getContext("2d").drawImage(t, 0, 0), f.set(t, e), e;
              },
              clear: function clear() {
                f.clear();
              }
            }),
            x = (p = Math.floor(1e3 / 60), g = {}, m = 0, "function" == typeof requestAnimationFrame && "function" == typeof cancelAnimationFrame ? (d = function d(t) {
              var e = Math.random();
              return g[e] = requestAnimationFrame(function n(i) {
                m === i || m + p - 1 < i ? (m = i, delete g[e], t()) : g[e] = requestAnimationFrame(n);
              }), e;
            }, h = function h(t) {
              g[t] && cancelAnimationFrame(g[t]);
            }) : (d = function d(t) {
              return setTimeout(t, p);
            }, h = function h(t) {
              return clearTimeout(t);
            }), {
              frame: d,
              cancel: h
            }),
            S = (b = {}, function () {
              if (v) return v;
              if (!i && o) {
                var e = ["var CONFETTI, SIZE = {}, module = {};", "(" + t.toString() + ")(this, module, true, SIZE);", "onmessage = function(msg) {", "  if (msg.data.options) {", "    CONFETTI(msg.data.options).then(function () {", "      if (msg.data.callback) {", "        postMessage({ callback: msg.data.callback });", "      }", "    });", "  } else if (msg.data.reset) {", "    CONFETTI && CONFETTI.reset();", "  } else if (msg.data.resize) {", "    SIZE.width = msg.data.resize.width;", "    SIZE.height = msg.data.resize.height;", "  } else if (msg.data.canvas) {", "    SIZE.width = msg.data.canvas.width;", "    SIZE.height = msg.data.canvas.height;", "    CONFETTI = module.exports.create(msg.data.canvas);", "  }", "}"].join("\n");
                try {
                  v = new Worker(URL.createObjectURL(new Blob([e])));
                } catch (t) {
                  return void 0 !== (typeof console === "undefined" ? "undefined" : _typeof(console)) && "function" == typeof console.warn && console.warn("🎊 Could not load worker", t), null;
                }
                !function (t) {
                  function e(e, n) {
                    t.postMessage({
                      options: e || {},
                      callback: n
                    });
                  }
                  t.init = function (e) {
                    var n = e.transferControlToOffscreen();
                    t.postMessage({
                      canvas: n
                    }, [n]);
                  }, t.fire = function (n, i, r) {
                    if (y) return e(n, null), y;
                    var o = Math.random().toString(36).slice(2);
                    return y = c(function (i) {
                      function s(e) {
                        e.data.callback === o && (delete b[o], t.removeEventListener("message", s), y = null, C.clear(), r(), i());
                      }
                      t.addEventListener("message", s), e(n, o), b[o] = s.bind(null, {
                        data: {
                          callback: o
                        }
                      });
                    });
                  }, t.reset = function () {
                    for (var e in t.postMessage({
                      reset: !0
                    }), b) b[e](), delete b[e];
                  };
                }(v);
              }
              return v;
            }),
            M = {
              particleCount: 50,
              angle: 90,
              spread: 45,
              startVelocity: 45,
              decay: .9,
              gravity: 1,
              drift: 0,
              ticks: 200,
              x: .5,
              y: .5,
              shapes: ["square", "circle"],
              zIndex: 100,
              colors: ["#26ccff", "#a25afd", "#ff5e7e", "#88ff5a", "#fcff42", "#ffa62d", "#ff36ff"],
              disableForReducedMotion: !1,
              scalar: 1
            };
          function E(t, e, n) {
            return function (t, e) {
              return e ? e(t) : t;
            }(t && null != t[e] ? t[e] : M[e], n);
          }
          function P(t) {
            return t < 0 ? 0 : Math.floor(t);
          }
          function k(t) {
            return parseInt(t, 16);
          }
          function T(t) {
            return t.map(O);
          }
          function O(t) {
            var e = String(t).replace(/[^0-9a-f]/gi, "");
            return e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), {
              r: k(e.substring(0, 2)),
              g: k(e.substring(2, 4)),
              b: k(e.substring(4, 6))
            };
          }
          function I(t) {
            t.width = document.documentElement.clientWidth, t.height = document.documentElement.clientHeight;
          }
          function L(t) {
            var e = t.getBoundingClientRect();
            t.width = e.width, t.height = e.height;
          }
          function A(t, n) {
            var a,
              u = !t,
              l = !!E(n || {}, "resize"),
              f = !1,
              d = E(n, "disableForReducedMotion", Boolean),
              h = o && E(n || {}, "useWorker") ? S() : null,
              p = u ? I : L,
              g = !(!t || !h || !t.__confetti_initialized),
              m = "function" == typeof matchMedia && matchMedia("(prefers-reduced-motion)").matches;
            function v(e, n, o) {
              for (var u, l, f, d, h = E(e, "particleCount", P), g = E(e, "angle", Number), m = E(e, "spread", Number), v = E(e, "startVelocity", Number), y = E(e, "decay", Number), b = E(e, "gravity", Number), w = E(e, "drift", Number), S = E(e, "colors", T), M = E(e, "ticks", Number), k = E(e, "shapes"), O = E(e, "scalar"), I = !!E(e, "flat"), L = function (t) {
                  var e = E(t, "origin", Object);
                  return e.x = E(e, "x", Number), e.y = E(e, "y", Number), e;
                }(e), A = h, D = [], B = t.width * L.x, N = t.height * L.y; A--;) D.push((void 0, void 0, l = (u = {
                x: B,
                y: N,
                angle: g,
                spread: m,
                startVelocity: v,
                color: S[A % S.length],
                shape: k[(0, d = k.length, Math.floor(Math.random() * (d - 0)) + 0)],
                ticks: M,
                decay: y,
                gravity: b,
                drift: w,
                scalar: O,
                flat: I
              }).angle * (Math.PI / 180), f = u.spread * (Math.PI / 180), {
                x: u.x,
                y: u.y,
                wobble: 10 * Math.random(),
                wobbleSpeed: Math.min(.11, .1 * Math.random() + .05),
                velocity: .5 * u.startVelocity + Math.random() * u.startVelocity,
                angle2D: -l + (.5 * f - Math.random() * f),
                tiltAngle: (.5 * Math.random() + .25) * Math.PI,
                color: u.color,
                shape: u.shape,
                tick: 0,
                totalTicks: u.ticks,
                decay: u.decay,
                drift: u.drift,
                random: Math.random() + 2,
                tiltSin: 0,
                tiltCos: 0,
                wobbleX: 0,
                wobbleY: 0,
                gravity: 3 * u.gravity,
                ovalScalar: .6,
                scalar: u.scalar,
                flat: u.flat
              }));
              return a ? a.addFettis(D) : (a = function (t, e, n, o, a) {
                var u,
                  l,
                  f = e.slice(),
                  d = t.getContext("2d"),
                  h = c(function (e) {
                    function c() {
                      u = l = null, d.clearRect(0, 0, o.width, o.height), C.clear(), a(), e();
                    }
                    u = x.frame(function e() {
                      !i || o.width === r.width && o.height === r.height || (o.width = t.width = r.width, o.height = t.height = r.height), o.width || o.height || (n(t), o.width = t.width, o.height = t.height), d.clearRect(0, 0, o.width, o.height), (f = f.filter(function (t) {
                        return function (t, e) {
                          e.x += Math.cos(e.angle2D) * e.velocity + e.drift, e.y += Math.sin(e.angle2D) * e.velocity + e.gravity, e.velocity *= e.decay, e.flat ? (e.wobble = 0, e.wobbleX = e.x + 10 * e.scalar, e.wobbleY = e.y + 10 * e.scalar, e.tiltSin = 0, e.tiltCos = 0, e.random = 1) : (e.wobble += e.wobbleSpeed, e.wobbleX = e.x + 10 * e.scalar * Math.cos(e.wobble), e.wobbleY = e.y + 10 * e.scalar * Math.sin(e.wobble), e.tiltAngle += .1, e.tiltSin = Math.sin(e.tiltAngle), e.tiltCos = Math.cos(e.tiltAngle), e.random = Math.random() + 2);
                          var n = e.tick++ / e.totalTicks,
                            i = e.x + e.random * e.tiltCos,
                            r = e.y + e.random * e.tiltSin,
                            o = e.wobbleX + e.random * e.tiltCos,
                            a = e.wobbleY + e.random * e.tiltSin;
                          if (t.fillStyle = "rgba(" + e.color.r + ", " + e.color.g + ", " + e.color.b + ", " + (1 - n) + ")", t.beginPath(), s && "path" === e.shape.type && "string" == typeof e.shape.path && Array.isArray(e.shape.matrix)) t.fill(function (t, e, n, i, r, o, s) {
                            var a = new Path2D(t),
                              u = new Path2D();
                            u.addPath(a, new DOMMatrix(e));
                            var c = new Path2D();
                            return c.addPath(u, new DOMMatrix([Math.cos(s) * r, Math.sin(s) * r, -Math.sin(s) * o, Math.cos(s) * o, n, i])), c;
                          }(e.shape.path, e.shape.matrix, e.x, e.y, .1 * Math.abs(o - i), .1 * Math.abs(a - r), Math.PI / 10 * e.wobble));else if ("bitmap" === e.shape.type) {
                            var u = Math.PI / 10 * e.wobble,
                              c = .1 * Math.abs(o - i),
                              l = .1 * Math.abs(a - r),
                              f = e.shape.bitmap.width * e.scalar,
                              d = e.shape.bitmap.height * e.scalar,
                              h = new DOMMatrix([Math.cos(u) * c, Math.sin(u) * c, -Math.sin(u) * l, Math.cos(u) * l, e.x, e.y]);
                            h.multiplySelf(new DOMMatrix(e.shape.matrix));
                            var p = t.createPattern(C.transform(e.shape.bitmap), "no-repeat");
                            p.setTransform(h), t.globalAlpha = 1 - n, t.fillStyle = p, t.fillRect(e.x - f / 2, e.y - d / 2, f, d), t.globalAlpha = 1;
                          } else if ("circle" === e.shape) t.ellipse ? t.ellipse(e.x, e.y, Math.abs(o - i) * e.ovalScalar, Math.abs(a - r) * e.ovalScalar, Math.PI / 10 * e.wobble, 0, 2 * Math.PI) : function (t, e, n, i, r, o, s, a, u) {
                            t.save(), t.translate(e, n), t.rotate(o), t.scale(i, r), t.arc(0, 0, 1, 0, a, void 0), t.restore();
                          }(t, e.x, e.y, Math.abs(o - i) * e.ovalScalar, Math.abs(a - r) * e.ovalScalar, Math.PI / 10 * e.wobble, 0, 2 * Math.PI);else if ("star" === e.shape) for (var g = Math.PI / 2 * 3, m = 4 * e.scalar, v = 8 * e.scalar, y = e.x, b = e.y, w = 5, x = Math.PI / w; w--;) y = e.x + Math.cos(g) * v, b = e.y + Math.sin(g) * v, t.lineTo(y, b), g += x, y = e.x + Math.cos(g) * m, b = e.y + Math.sin(g) * m, t.lineTo(y, b), g += x;else t.moveTo(Math.floor(e.x), Math.floor(e.y)), t.lineTo(Math.floor(e.wobbleX), Math.floor(r)), t.lineTo(Math.floor(o), Math.floor(a)), t.lineTo(Math.floor(i), Math.floor(e.wobbleY));
                          return t.closePath(), t.fill(), e.tick < e.totalTicks;
                        }(d, t);
                      })).length ? u = x.frame(e) : c();
                    }), l = c;
                  });
                return {
                  addFettis: function addFettis(t) {
                    return f = f.concat(t), h;
                  },
                  canvas: t,
                  promise: h,
                  reset: function reset() {
                    u && x.cancel(u), l && l();
                  }
                };
              }(t, D, p, n, o), a.promise);
            }
            function y(n) {
              var i = d || E(n, "disableForReducedMotion", Boolean),
                r = E(n, "zIndex", Number);
              if (i && m) return c(function (t) {
                t();
              });
              u && a ? t = a.canvas : u && !t && (t = function (t) {
                var e = document.createElement("canvas");
                return e.style.position = "fixed", e.style.top = "0px", e.style.left = "0px", e.style.pointerEvents = "none", e.style.zIndex = t, e;
              }(r), document.body.appendChild(t)), l && !g && p(t);
              var o = {
                width: t.width,
                height: t.height
              };
              function s() {
                if (h) {
                  var e = {
                    getBoundingClientRect: function getBoundingClientRect() {
                      if (!u) return t.getBoundingClientRect();
                    }
                  };
                  return p(e), void h.postMessage({
                    resize: {
                      width: e.width,
                      height: e.height
                    }
                  });
                }
                o.width = o.height = null;
              }
              function y() {
                a = null, l && (f = !1, e.removeEventListener("resize", s)), u && t && (document.body.removeChild(t), t = null, g = !1);
              }
              return h && !g && h.init(t), g = !0, h && (t.__confetti_initialized = !0), l && !f && (f = !0, e.addEventListener("resize", s, !1)), h ? h.fire(n, o, y) : v(n, o, y);
            }
            return y.reset = function () {
              h && h.reset(), a && a.reset();
            }, y;
          }
          function D() {
            return w || (w = A(null, {
              useWorker: !0,
              resize: !0
            })), w;
          }
          n.exports = function () {
            return D().apply(this, arguments);
          }, n.exports.reset = function () {
            D().reset();
          }, n.exports.create = A, n.exports.shapeFromPath = function (t) {
            if (!s) throw new Error("path confetti are not supported in this browser");
            var e, n;
            "string" == typeof t ? e = t : (e = t.path, n = t.matrix);
            var i = new Path2D(e),
              r = document.createElement("canvas").getContext("2d");
            if (!n) {
              for (var o, a, u = 1e3, c = u, l = u, f = 0, d = 0, h = 0; h < u; h += 2) for (var p = 0; p < u; p += 2) r.isPointInPath(i, h, p, "nonzero") && (c = Math.min(c, h), l = Math.min(l, p), f = Math.max(f, h), d = Math.max(d, p));
              o = f - c, a = d - l;
              var g = Math.min(10 / o, 10 / a);
              n = [g, 0, 0, g, -Math.round(o / 2 + c) * g, -Math.round(a / 2 + l) * g];
            }
            return {
              type: "path",
              path: e,
              matrix: n
            };
          }, n.exports.shapeFromText = function (t) {
            var e,
              n = 1,
              i = "#000000",
              r = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
            "string" == typeof t ? e = t : (e = t.text, n = "scalar" in t ? t.scalar : n, r = "fontFamily" in t ? t.fontFamily : r, i = "color" in t ? t.color : i);
            var o = 10 * n,
              s = o + "px " + r,
              a = new OffscreenCanvas(o, o),
              u = a.getContext("2d");
            u.font = s;
            var c = u.measureText(e),
              l = Math.ceil(c.actualBoundingBoxRight + c.actualBoundingBoxLeft),
              f = Math.ceil(c.actualBoundingBoxAscent + c.actualBoundingBoxDescent),
              d = c.actualBoundingBoxLeft + 2,
              h = c.actualBoundingBoxAscent + 2;
            l += 4, f += 4, (u = (a = new OffscreenCanvas(l, f)).getContext("2d")).font = s, u.fillStyle = i, u.fillText(e, d, h);
            var p = 1 / n;
            return {
              type: "bitmap",
              bitmap: a.transferToImageBitmap(),
              matrix: [p, 0, 0, p, -l * p / 2, -f * p / 2]
            };
          };
        }(function () {
          return "undefined" != typeof window ? window : "undefined" != typeof self ? self : this || {};
        }(), i, !1);
        var r = i.exports;
        var o = i.exports.create;
      }
    },
    e = {};
  function n(i) {
    var r = e[i];
    if (void 0 !== r) return r.exports;
    var o = e[i] = {
      exports: {}
    };
    return t[i](o, o.exports, n), o.exports;
  }
  n.d = function (t, e) {
    for (var i in e) n.o(e, i) && !n.o(t, i) && Object.defineProperty(t, i, {
      enumerable: !0,
      get: e[i]
    });
  }, n.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, n.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, function () {
    "use strict";

    function t(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }
    var e = "(prefers-reduced-motion: reduce)",
      i = {
        CREATED: 1,
        MOUNTED: 2,
        IDLE: 3,
        MOVING: 4,
        SCROLLING: 5,
        DRAGGING: 6,
        DESTROYED: 7
      };
    function r(t) {
      t.length = 0;
    }
    function o(t, e, n) {
      return Array.prototype.slice.call(t, e, n);
    }
    function s(t) {
      return t.bind.apply(t, [null].concat(o(arguments, 1)));
    }
    var a = setTimeout,
      u = function u() {};
    function c(t) {
      return requestAnimationFrame(t);
    }
    function l(t, e) {
      return _typeof(e) === t;
    }
    function f(t) {
      return !m(t) && l("object", t);
    }
    var d = Array.isArray,
      h = s(l, "function"),
      p = s(l, "string"),
      g = s(l, "undefined");
    function m(t) {
      return null === t;
    }
    function v(t) {
      try {
        return t instanceof (t.ownerDocument.defaultView || window).HTMLElement;
      } catch (t) {
        return !1;
      }
    }
    function y(t) {
      return d(t) ? t : [t];
    }
    function b(t, e) {
      y(t).forEach(e);
    }
    function w(t, e) {
      return t.indexOf(e) > -1;
    }
    function C(t, e) {
      return t.push.apply(t, y(e)), t;
    }
    function x(t, e, n) {
      t && b(e, function (e) {
        e && t.classList[n ? "add" : "remove"](e);
      });
    }
    function S(t, e) {
      x(t, p(e) ? e.split(" ") : e, !0);
    }
    function M(t, e) {
      b(e, t.appendChild.bind(t));
    }
    function E(t, e) {
      b(t, function (t) {
        var n = (e || t).parentNode;
        n && n.insertBefore(t, e);
      });
    }
    function P(t, e) {
      return v(t) && (t.msMatchesSelector || t.matches).call(t, e);
    }
    function k(t, e) {
      var n = t ? o(t.children) : [];
      return e ? n.filter(function (t) {
        return P(t, e);
      }) : n;
    }
    function T(t, e) {
      return e ? k(t, e)[0] : t.firstElementChild;
    }
    var O = Object.keys;
    function I(t, e, n) {
      return t && (n ? O(t).reverse() : O(t)).forEach(function (n) {
        "__proto__" !== n && e(t[n], n);
      }), t;
    }
    function L(t) {
      return o(arguments, 1).forEach(function (e) {
        I(e, function (n, i) {
          t[i] = e[i];
        });
      }), t;
    }
    function A(t) {
      return o(arguments, 1).forEach(function (e) {
        I(e, function (e, n) {
          d(e) ? t[n] = e.slice() : f(e) ? t[n] = A({}, f(t[n]) ? t[n] : {}, e) : t[n] = e;
        });
      }), t;
    }
    function D(t, e) {
      b(e || O(t), function (e) {
        delete t[e];
      });
    }
    function B(t, e) {
      b(t, function (t) {
        b(e, function (e) {
          t && t.removeAttribute(e);
        });
      });
    }
    function N(t, e, n) {
      f(e) ? I(e, function (e, n) {
        N(t, n, e);
      }) : b(t, function (t) {
        m(n) || "" === n ? B(t, e) : t.setAttribute(e, String(n));
      });
    }
    function z(t, e, n) {
      var i = document.createElement(t);
      return e && (p(e) ? S(i, e) : N(i, e)), n && M(n, i), i;
    }
    function F(t, e, n) {
      if (g(n)) return getComputedStyle(t)[e];
      m(n) || (t.style[e] = "" + n);
    }
    function _(t, e) {
      F(t, "display", e);
    }
    function j(t) {
      t.setActive && t.setActive() || t.focus({
        preventScroll: !0
      });
    }
    function R(t, e) {
      return t.getAttribute(e);
    }
    function H(t, e) {
      return t && t.classList.contains(e);
    }
    function q(t) {
      return t.getBoundingClientRect();
    }
    function W(t) {
      b(t, function (t) {
        t && t.parentNode && t.parentNode.removeChild(t);
      });
    }
    function X(t) {
      return T(new DOMParser().parseFromString(t, "text/html").body);
    }
    function U(t, e) {
      t.preventDefault(), e && (t.stopPropagation(), t.stopImmediatePropagation());
    }
    function Y(t, e) {
      return t && t.querySelector(e);
    }
    function G(t, e) {
      return e ? o(t.querySelectorAll(e)) : [];
    }
    function V(t, e) {
      x(t, e, !1);
    }
    function Z(t) {
      return t.timeStamp;
    }
    function K(t) {
      return p(t) ? t : t ? t + "px" : "";
    }
    var J = "splide",
      Q = "data-" + J;
    function $(t, e) {
      if (!t) throw new Error("[" + J + "] " + (e || ""));
    }
    var tt = Math.min,
      et = Math.max,
      nt = Math.floor,
      it = Math.ceil,
      rt = Math.abs;
    function ot(t, e, n) {
      return rt(t - e) < n;
    }
    function st(t, e, n, i) {
      var r = tt(e, n),
        o = et(e, n);
      return i ? r < t && t < o : r <= t && t <= o;
    }
    function at(t, e, n) {
      var i = tt(e, n),
        r = et(e, n);
      return tt(et(i, t), r);
    }
    function ut(t) {
      return +(t > 0) - +(t < 0);
    }
    function ct(t, e) {
      return b(e, function (e) {
        t = t.replace("%s", "" + e);
      }), t;
    }
    function lt(t) {
      return t < 10 ? "0" + t : "" + t;
    }
    var ft = {};
    function dt() {
      var t = [];
      function e(t, e, n) {
        b(t, function (t) {
          t && b(e, function (e) {
            e.split(" ").forEach(function (e) {
              var i = e.split(".");
              n(t, i[0], i[1]);
            });
          });
        });
      }
      return {
        bind: function bind(n, i, r, o) {
          e(n, i, function (e, n, i) {
            var s = ("addEventListener" in e),
              a = s ? e.removeEventListener.bind(e, n, r, o) : e.removeListener.bind(e, r);
            s ? e.addEventListener(n, r, o) : e.addListener(r), t.push([e, n, i, r, a]);
          });
        },
        unbind: function unbind(n, i, r) {
          e(n, i, function (e, n, i) {
            t = t.filter(function (t) {
              return !!(t[0] !== e || t[1] !== n || t[2] !== i || r && t[3] !== r) || (t[4](), !1);
            });
          });
        },
        dispatch: function dispatch(t, e, n) {
          var i,
            r = !0;
          return "function" == typeof CustomEvent ? i = new CustomEvent(e, {
            bubbles: r,
            detail: n
          }) : (i = document.createEvent("CustomEvent")).initCustomEvent(e, r, !1, n), t.dispatchEvent(i), i;
        },
        destroy: function destroy() {
          t.forEach(function (t) {
            t[4]();
          }), r(t);
        }
      };
    }
    var ht = "mounted",
      pt = "ready",
      gt = "move",
      mt = "moved",
      vt = "click",
      yt = "refresh",
      bt = "updated",
      wt = "resize",
      Ct = "resized",
      xt = "scroll",
      St = "scrolled",
      Mt = "destroy",
      Et = "navigation:mounted",
      Pt = "autoplay:play",
      kt = "autoplay:pause",
      Tt = "lazyload:loaded",
      Ot = "ei";
    function It(t) {
      var e = t ? t.event.bus : document.createDocumentFragment(),
        n = dt();
      return t && t.event.on(Mt, n.destroy), L(n, {
        bus: e,
        on: function on(t, i) {
          n.bind(e, y(t).join(" "), function (t) {
            i.apply(i, d(t.detail) ? t.detail : []);
          });
        },
        off: s(n.unbind, e),
        emit: function emit(t) {
          n.dispatch(e, t, o(arguments, 1));
        }
      });
    }
    function Lt(t, e, n, i) {
      var r,
        o,
        s = Date.now,
        a = 0,
        u = !0,
        l = 0;
      function f() {
        if (!u) {
          if (a = t ? tt((s() - r) / t, 1) : 1, n && n(a), a >= 1 && (e(), r = s(), i && ++l >= i)) return d();
          o = c(f);
        }
      }
      function d() {
        u = !0;
      }
      function h() {
        o && cancelAnimationFrame(o), a = 0, o = 0, u = !0;
      }
      return {
        start: function start(e) {
          e || h(), r = s() - (e ? a * t : 0), u = !1, o = c(f);
        },
        rewind: function rewind() {
          r = s(), a = 0, n && n(a);
        },
        pause: d,
        cancel: h,
        set: function set(e) {
          t = e;
        },
        isPaused: function isPaused() {
          return u;
        }
      };
    }
    var At = "Arrow",
      Dt = At + "Left",
      Bt = At + "Right",
      Nt = At + "Up",
      zt = At + "Down",
      Ft = "ttb",
      _t = {
        width: ["height"],
        left: ["top", "right"],
        right: ["bottom", "left"],
        x: ["y"],
        X: ["Y"],
        Y: ["X"],
        ArrowLeft: [Nt, Bt],
        ArrowRight: [zt, Dt]
      };
    var jt = "role",
      Rt = "tabindex",
      Ht = "aria-",
      qt = Ht + "controls",
      Wt = Ht + "current",
      Xt = Ht + "selected",
      Ut = Ht + "label",
      Yt = Ht + "labelledby",
      Gt = Ht + "hidden",
      Vt = Ht + "orientation",
      Zt = Ht + "roledescription",
      Kt = Ht + "live",
      Jt = Ht + "busy",
      Qt = Ht + "atomic",
      $t = [jt, Rt, "disabled", qt, Wt, Ut, Yt, Gt, Vt, Zt],
      te = J + "__",
      ee = "is-",
      ne = J,
      ie = te + "track",
      re = te + "list",
      oe = te + "slide",
      se = oe + "--clone",
      ae = oe + "__container",
      ue = te + "arrows",
      ce = te + "arrow",
      le = ce + "--prev",
      fe = ce + "--next",
      de = te + "pagination",
      he = de + "__page",
      pe = te + "progress__bar",
      ge = te + "toggle",
      me = te + "sr",
      ve = ee + "initialized",
      ye = ee + "active",
      be = ee + "prev",
      we = ee + "next",
      Ce = ee + "visible",
      xe = ee + "loading",
      Se = ee + "focus-in",
      Me = ee + "overflow",
      Ee = [ye, Ce, be, we, xe, Se, Me],
      Pe = {
        slide: oe,
        clone: se,
        arrows: ue,
        arrow: ce,
        prev: le,
        next: fe,
        pagination: de,
        page: he,
        spinner: te + "spinner"
      },
      ke = "touchstart mousedown",
      Te = "touchmove mousemove",
      Oe = "touchend touchcancel mouseup click",
      Ie = "slide",
      Le = "loop",
      Ae = "fade";
    var De = Q + "-interval",
      Be = {
        passive: !1,
        capture: !0
      },
      Ne = {
        Spacebar: " ",
        Right: Bt,
        Left: Dt,
        Up: Nt,
        Down: zt
      };
    function ze(t) {
      return t = p(t) ? t : t.key, Ne[t] || t;
    }
    var Fe = "keydown",
      _e = Q + "-lazy",
      je = _e + "-srcset",
      Re = "[" + _e + "], [" + je + "]",
      He = [" ", "Enter"],
      qe = Object.freeze({
        __proto__: null,
        Media: function Media(t, n, i) {
          var r = t.state,
            o = i.breakpoints || {},
            s = i.reducedMotion || {},
            a = dt(),
            u = [];
          function c(t) {
            t && a.destroy();
          }
          function l(t, e) {
            var n = matchMedia(e);
            a.bind(n, "change", f), u.push([t, n]);
          }
          function f() {
            var e = r.is(7),
              n = i.direction,
              o = u.reduce(function (t, e) {
                return A(t, e[1].matches ? e[0] : {});
              }, {});
            D(i), d(o), i.destroy ? t.destroy("completely" === i.destroy) : e ? (c(!0), t.mount()) : n !== i.direction && t.refresh();
          }
          function d(e, n, o) {
            A(i, e), n && A(Object.getPrototypeOf(i), e), !o && r.is(1) || t.emit(bt, i);
          }
          return {
            setup: function setup() {
              var t = "min" === i.mediaQuery;
              O(o).sort(function (e, n) {
                return t ? +e - +n : +n - +e;
              }).forEach(function (e) {
                l(o[e], "(" + (t ? "min" : "max") + "-width:" + e + "px)");
              }), l(s, e), f();
            },
            destroy: c,
            reduce: function reduce(t) {
              matchMedia(e).matches && (t ? A(i, s) : D(i, O(s)));
            },
            set: d
          };
        },
        Direction: function Direction(t, e, n) {
          return {
            resolve: function resolve(t, e, i) {
              var r = "rtl" !== (i = i || n.direction) || e ? i === Ft ? 0 : -1 : 1;
              return _t[t] && _t[t][r] || t.replace(/width|left|right/i, function (t, e) {
                var n = _t[t.toLowerCase()][r] || t;
                return e > 0 ? n.charAt(0).toUpperCase() + n.slice(1) : n;
              });
            },
            orient: function orient(t) {
              return t * ("rtl" === n.direction ? 1 : -1);
            }
          };
        },
        Elements: function Elements(t, e, n) {
          var i,
            o,
            s,
            a = It(t),
            u = a.on,
            c = a.bind,
            l = t.root,
            f = n.i18n,
            d = {},
            p = [],
            g = [],
            m = [];
          function v() {
            var t, e, r;
            i = w("." + ie), o = T(i, "." + re), $(i && o, "A track/list element is missing."), C(p, k(o, "." + oe + ":not(." + se + ")")), I({
              arrows: ue,
              pagination: de,
              prev: le,
              next: fe,
              bar: pe,
              toggle: ge
            }, function (t, e) {
              d[e] = w("." + t);
            }), L(d, {
              root: l,
              track: i,
              list: o,
              slides: p
            }), e = l.id || "" + (t = J) + lt(ft[t] = (ft[t] || 0) + 1), r = n.role, l.id = e, i.id = i.id || e + "-track", o.id = o.id || e + "-list", !R(l, jt) && "SECTION" !== l.tagName && r && N(l, jt, r), N(l, Zt, f.carousel), N(o, jt, "presentation"), b();
          }
          function y(t) {
            var e = $t.concat("style");
            r(p), V(l, g), V(i, m), B([i, o], e), B(l, t ? e : ["style", Zt]);
          }
          function b() {
            V(l, g), V(i, m), g = M(ne), m = M(ie), S(l, g), S(i, m), N(l, Ut, n.label), N(l, Yt, n.labelledby);
          }
          function w(t) {
            var e = Y(l, t);
            return e && function (t, e) {
              if (h(t.closest)) return t.closest(e);
              for (var n = t; n && 1 === n.nodeType && !P(n, e);) n = n.parentElement;
              return n;
            }(e, "." + ne) === l ? e : void 0;
          }
          function M(t) {
            return [t + "--" + n.type, t + "--" + n.direction, n.drag && t + "--draggable", n.isNavigation && t + "--nav", t === ne && ye];
          }
          return L(d, {
            setup: v,
            mount: function mount() {
              u(yt, y), u(yt, v), u(bt, b), c(document, ke + " keydown", function (t) {
                s = "keydown" === t.type;
              }, {
                capture: !0
              }), c(l, "focusin", function () {
                x(l, Se, !!s);
              });
            },
            destroy: y
          });
        },
        Slides: function Slides(t, e, n) {
          var i = It(t),
            o = i.on,
            a = i.emit,
            u = i.bind,
            c = e.Elements,
            l = c.slides,
            f = c.list,
            d = [];
          function g() {
            l.forEach(function (t, e) {
              C(t, e, -1);
            });
          }
          function m() {
            O(function (t) {
              t.destroy();
            }), r(d);
          }
          function C(e, n, i) {
            var r = function (t, e, n, i) {
              var r,
                o = It(t),
                a = o.on,
                u = o.emit,
                c = o.bind,
                l = t.Components,
                f = t.root,
                d = t.options,
                h = d.isNavigation,
                p = d.updateOnMove,
                g = d.i18n,
                m = d.pagination,
                v = d.slideFocus,
                y = l.Direction.resolve,
                b = R(i, "style"),
                w = R(i, Ut),
                C = n > -1,
                S = T(i, "." + ae);
              function M() {
                var r = t.splides.map(function (t) {
                  var n = t.splide.Components.Slides.getAt(e);
                  return n ? n.slide.id : "";
                }).join(" ");
                N(i, Ut, ct(g.slideX, (C ? n : e) + 1)), N(i, qt, r), N(i, jt, v ? "button" : ""), v && B(i, Zt);
              }
              function E() {
                r || P();
              }
              function P() {
                if (!r) {
                  var n = t.index;
                  (o = k()) !== H(i, ye) && (x(i, ye, o), N(i, Wt, h && o || ""), u(o ? "active" : "inactive", O)), function () {
                    var e = function () {
                        if (t.is(Ae)) return k();
                        var e = q(l.Elements.track),
                          n = q(i),
                          r = y("left", !0),
                          o = y("right", !0);
                        return nt(e[r]) <= it(n[r]) && nt(n[o]) <= it(e[o]);
                      }(),
                      n = !e && (!k() || C);
                    if (t.state.is([4, 5]) || N(i, Gt, n || ""), N(G(i, d.focusableNodes || ""), Rt, n ? -1 : ""), v && N(i, Rt, n ? -1 : 0), e !== H(i, Ce) && (x(i, Ce, e), u(e ? "visible" : "hidden", O)), !e && document.activeElement === i) {
                      var r = l.Slides.getAt(t.index);
                      r && j(r.slide);
                    }
                  }(), x(i, be, e === n - 1), x(i, we, e === n + 1);
                }
                var o;
              }
              function k() {
                var i = t.index;
                return i === e || d.cloneStatus && i === n;
              }
              var O = {
                index: e,
                slideIndex: n,
                slide: i,
                container: S,
                isClone: C,
                mount: function mount() {
                  C || (i.id = f.id + "-slide" + lt(e + 1), N(i, jt, m ? "tabpanel" : "group"), N(i, Zt, g.slide), N(i, Ut, w || ct(g.slideLabel, [e + 1, t.length]))), c(i, "click", s(u, vt, O)), c(i, "keydown", s(u, "sk", O)), a([mt, "sh", St], P), a(Et, M), p && a(gt, E);
                },
                destroy: function destroy() {
                  r = !0, o.destroy(), V(i, Ee), B(i, $t), N(i, "style", b), N(i, Ut, w || "");
                },
                update: P,
                style: function style(t, e, n) {
                  F(n && S || i, t, e);
                },
                isWithin: function isWithin(n, i) {
                  var r = rt(n - e);
                  return C || !d.rewind && !t.is(Le) || (r = tt(r, t.length - r)), r <= i;
                }
              };
              return O;
            }(t, n, i, e);
            r.mount(), d.push(r), d.sort(function (t, e) {
              return t.index - e.index;
            });
          }
          function k(t) {
            return t ? I(function (t) {
              return !t.isClone;
            }) : d;
          }
          function O(t, e) {
            k(e).forEach(t);
          }
          function I(t) {
            return d.filter(h(t) ? t : function (e) {
              return p(t) ? P(e.slide, t) : w(y(t), e.index);
            });
          }
          return {
            mount: function mount() {
              g(), o(yt, m), o(yt, g);
            },
            destroy: m,
            update: function update() {
              O(function (t) {
                t.update();
              });
            },
            register: C,
            get: k,
            getIn: function getIn(t) {
              var i = e.Controller,
                r = i.toIndex(t),
                o = i.hasFocus() ? 1 : n.perPage;
              return I(function (t) {
                return st(t.index, r, r + o - 1);
              });
            },
            getAt: function getAt(t) {
              return I(t)[0];
            },
            add: function add(t, e) {
              b(t, function (t) {
                if (p(t) && (t = X(t)), v(t)) {
                  var i = l[e];
                  i ? E(t, i) : M(f, t), S(t, n.classes.slide), r = t, o = s(a, wt), c = G(r, "img"), (d = c.length) ? c.forEach(function (t) {
                    u(t, "load error", function () {
                      --d || o();
                    });
                  }) : o();
                }
                var r, o, c, d;
              }), a(yt);
            },
            remove: function remove(t) {
              W(I(t).map(function (t) {
                return t.slide;
              })), a(yt);
            },
            forEach: O,
            filter: I,
            style: function style(t, e, n) {
              O(function (i) {
                i.style(t, e, n);
              });
            },
            getLength: function getLength(t) {
              return t ? l.length : d.length;
            },
            isEnough: function isEnough() {
              return d.length > n.perPage;
            }
          };
        },
        Layout: function Layout(t, e, n) {
          var i,
            r,
            o,
            a = It(t),
            u = a.on,
            c = a.bind,
            l = a.emit,
            d = e.Slides,
            h = e.Direction.resolve,
            p = e.Elements,
            g = p.root,
            m = p.track,
            v = p.list,
            y = d.getAt,
            b = d.style;
          function w() {
            i = n.direction === Ft, F(g, "maxWidth", K(n.width)), F(m, h("paddingLeft"), S(!1)), F(m, h("paddingRight"), S(!0)), C(!0);
          }
          function C(t) {
            var e,
              s = q(g);
            (t || r.width !== s.width || r.height !== s.height) && (F(m, "height", (e = "", i && ($(e = M(), "height or heightRatio is missing."), e = "calc(" + e + " - " + S(!1) + " - " + S(!0) + ")"), e)), b(h("marginRight"), K(n.gap)), b("width", n.autoWidth ? null : K(n.fixedWidth) || (i ? "" : E())), b("height", K(n.fixedHeight) || (i ? n.autoHeight ? null : E() : M()), !0), r = s, l(Ct), o !== (o = L()) && (x(g, Me, o), l("overflow", o)));
          }
          function S(t) {
            var e = n.padding,
              i = h(t ? "right" : "left");
            return e && K(e[i] || (f(e) ? 0 : e)) || "0px";
          }
          function M() {
            return K(n.height || q(v).width * n.heightRatio);
          }
          function E() {
            var t = K(n.gap);
            return "calc((100%" + (t && " + " + t) + ")/" + (n.perPage || 1) + (t && " - " + t) + ")";
          }
          function P() {
            return q(v)[h("width")];
          }
          function k(t, e) {
            var n = y(t || 0);
            return n ? q(n.slide)[h("width")] + (e ? 0 : I()) : 0;
          }
          function T(t, e) {
            var n = y(t);
            if (n) {
              var i = q(n.slide)[h("right")],
                r = q(v)[h("left")];
              return rt(i - r) + (e ? 0 : I());
            }
            return 0;
          }
          function O(e) {
            return T(t.length - 1) - T(0) + k(0, e);
          }
          function I() {
            var t = y(0);
            return t && parseFloat(F(t.slide, h("marginRight"))) || 0;
          }
          function L() {
            return t.is(Ae) || O(!0) > P();
          }
          return {
            mount: function mount() {
              var t, e;
              w(), c(window, "resize load", (t = s(l, wt), e = Lt(0, t, null, 1), function () {
                e.isPaused() && e.start();
              })), u([bt, yt], w), u(wt, C);
            },
            resize: C,
            listSize: P,
            slideSize: k,
            sliderSize: O,
            totalSize: T,
            getPadding: function getPadding(t) {
              return parseFloat(F(m, h("padding" + (t ? "Right" : "Left")))) || 0;
            },
            isOverflow: L
          };
        },
        Clones: function Clones(t, e, n) {
          var i,
            o = It(t),
            s = o.on,
            a = e.Elements,
            u = e.Slides,
            c = e.Direction.resolve,
            l = [];
          function f() {
            s(yt, d), s([bt, wt], p), (i = m()) && (function (e) {
              var i = u.get().slice(),
                r = i.length;
              if (r) {
                for (; i.length < e;) C(i, i);
                C(i.slice(-e), i.slice(0, e)).forEach(function (o, s) {
                  var c = s < e,
                    f = function (e, i) {
                      var r = e.cloneNode(!0);
                      return S(r, n.classes.clone), r.id = t.root.id + "-clone" + lt(i + 1), r;
                    }(o.slide, s);
                  c ? E(f, i[0].slide) : M(a.list, f), C(l, f), u.register(f, s - e + (c ? 0 : r), o.index);
                });
              }
            }(i), e.Layout.resize(!0));
          }
          function d() {
            h(), f();
          }
          function h() {
            W(l), r(l), o.destroy();
          }
          function p() {
            var t = m();
            i !== t && (i < t || !t) && o.emit(yt);
          }
          function m() {
            var i = n.clones;
            if (t.is(Le)) {
              if (g(i)) {
                var r = n[c("fixedWidth")] && e.Layout.slideSize(0);
                i = r && it(q(a.track)[c("width")] / r) || n[c("autoWidth")] && t.length || 2 * n.perPage;
              }
            } else i = 0;
            return i;
          }
          return {
            mount: f,
            destroy: h
          };
        },
        Move: function Move(t, e, n) {
          var i,
            r = It(t),
            o = r.on,
            s = r.emit,
            a = t.state.set,
            u = e.Layout,
            c = u.slideSize,
            l = u.getPadding,
            f = u.totalSize,
            d = u.listSize,
            h = u.sliderSize,
            p = e.Direction,
            m = p.resolve,
            v = p.orient,
            y = e.Elements,
            b = y.list,
            w = y.track;
          function C() {
            e.Controller.isBusy() || (e.Scroll.cancel(), x(t.index), e.Slides.update());
          }
          function x(t) {
            S(k(t, !0));
          }
          function S(n, i) {
            if (!t.is(Ae)) {
              var r = i ? n : function (n) {
                if (t.is(Le)) {
                  var i = P(n),
                    r = i > e.Controller.getEnd();
                  (i < 0 || r) && (n = M(n, r));
                }
                return n;
              }(n);
              F(b, "transform", "translate" + m("X") + "(" + r + "px)"), n !== r && s("sh");
            }
          }
          function M(t, e) {
            var n = t - O(e),
              i = h();
            return t - v(i * (it(rt(n) / i) || 1)) * (e ? 1 : -1);
          }
          function E() {
            S(T(), !0), i.cancel();
          }
          function P(t) {
            for (var n = e.Slides.get(), i = 0, r = 1 / 0, o = 0; o < n.length; o++) {
              var s = n[o].index,
                a = rt(k(s, !0) - t);
              if (!(a <= r)) break;
              r = a, i = s;
            }
            return i;
          }
          function k(e, i) {
            var r = v(f(e - 1) - function (t) {
              var e = n.focus;
              return "center" === e ? (d() - c(t, !0)) / 2 : +e * c(t) || 0;
            }(e));
            return i ? function (e) {
              return n.trimSpace && t.is(Ie) && (e = at(e, 0, v(h(!0) - d()))), e;
            }(r) : r;
          }
          function T() {
            var t = m("left");
            return q(b)[t] - q(w)[t] + v(l(!1));
          }
          function O(t) {
            return k(t ? e.Controller.getEnd() : 0, !!n.trimSpace);
          }
          return {
            mount: function mount() {
              i = e.Transition, o([ht, Ct, bt, yt], C);
            },
            move: function move(t, e, n, r) {
              var o, u;
              t !== e && (o = t > n, u = v(M(T(), o)), o ? u >= 0 : u <= b[m("scrollWidth")] - q(w)[m("width")]) && (E(), S(M(T(), t > n), !0)), a(4), s(gt, e, n, t), i.start(e, function () {
                a(3), s(mt, e, n, t), r && r();
              });
            },
            jump: x,
            translate: S,
            shift: M,
            cancel: E,
            toIndex: P,
            toPosition: k,
            getPosition: T,
            getLimit: O,
            exceededLimit: function exceededLimit(t, e) {
              e = g(e) ? T() : e;
              var n = !0 !== t && v(e) < v(O(!1)),
                i = !1 !== t && v(e) > v(O(!0));
              return n || i;
            },
            reposition: C
          };
        },
        Controller: function Controller(t, e, n) {
          var i,
            r,
            o,
            a,
            u = It(t),
            c = u.on,
            l = u.emit,
            f = e.Move,
            d = f.getPosition,
            h = f.getLimit,
            m = f.toPosition,
            v = e.Slides,
            y = v.isEnough,
            b = v.getLength,
            w = n.omitEnd,
            C = t.is(Le),
            x = t.is(Ie),
            S = s(O, !1),
            M = s(O, !0),
            E = n.start || 0,
            P = E;
          function k() {
            r = b(!0), o = n.perMove, a = n.perPage, i = A();
            var t = at(E, 0, w ? i : r - 1);
            t !== E && (E = t, f.reposition());
          }
          function T() {
            i !== A() && l(Ot);
          }
          function O(t, e) {
            var n = o || (z() ? 1 : a),
              r = I(E + n * (t ? -1 : 1), E, !(o || z()));
            return -1 === r && x && !ot(d(), h(!t), 1) ? t ? 0 : i : e ? r : L(r);
          }
          function I(e, s, u) {
            if (y() || z()) {
              var c = function (e) {
                if (x && "move" === n.trimSpace && e !== E) for (var i = d(); i === m(e, !0) && st(e, 0, t.length - 1, !n.rewind);) e < E ? --e : ++e;
                return e;
              }(e);
              c !== e && (s = e, e = c, u = !1), e < 0 || e > i ? e = o || !st(0, e, s, !0) && !st(i, s, e, !0) ? C ? u ? e < 0 ? -(r % a || a) : r : e : n.rewind ? e < 0 ? i : 0 : -1 : D(B(e)) : u && e !== s && (e = D(B(s) + (e < s ? -1 : 1)));
            } else e = -1;
            return e;
          }
          function L(t) {
            return C ? (t + r) % r || 0 : t;
          }
          function A() {
            for (var t = r - (z() || C && o ? 1 : a); w && t-- > 0;) if (m(r - 1, !0) !== m(t, !0)) {
              t++;
              break;
            }
            return at(t, 0, r - 1);
          }
          function D(t) {
            return at(z() ? t : a * t, 0, i);
          }
          function B(t) {
            return z() ? tt(t, i) : nt((t >= i ? r - 1 : t) / a);
          }
          function N(t) {
            t !== E && (P = E, E = t);
          }
          function z() {
            return !g(n.focus) || n.isNavigation;
          }
          function F() {
            return t.state.is([4, 5]) && !!n.waitForTransition;
          }
          return {
            mount: function mount() {
              k(), c([bt, yt, Ot], k), c(Ct, T);
            },
            go: function go(t, e, n) {
              if (!F()) {
                var r = function (t) {
                    var e = E;
                    if (p(t)) {
                      var n = t.match(/([+\-<>])(\d+)?/) || [],
                        r = n[1],
                        o = n[2];
                      "+" === r || "-" === r ? e = I(E + +("" + r + (+o || 1)), E) : ">" === r ? e = o ? D(+o) : S(!0) : "<" === r && (e = M(!0));
                    } else e = C ? t : at(t, 0, i);
                    return e;
                  }(t),
                  o = L(r);
                o > -1 && (e || o !== E) && (N(o), f.move(r, o, P, n));
              }
            },
            scroll: function scroll(t, n, r, o) {
              e.Scroll.scroll(t, n, r, function () {
                var t = L(f.toIndex(d()));
                N(w ? tt(t, i) : t), o && o();
              });
            },
            getNext: S,
            getPrev: M,
            getAdjacent: O,
            getEnd: A,
            setIndex: N,
            getIndex: function getIndex(t) {
              return t ? P : E;
            },
            toIndex: D,
            toPage: B,
            toDest: function toDest(t) {
              var e = f.toIndex(t);
              return x ? at(e, 0, i) : e;
            },
            hasFocus: z,
            isBusy: F
          };
        },
        Arrows: function Arrows(t, e, n) {
          var i,
            r,
            o = It(t),
            a = o.on,
            u = o.bind,
            c = o.emit,
            l = n.classes,
            f = n.i18n,
            d = e.Elements,
            h = e.Controller,
            p = d.arrows,
            g = d.track,
            m = p,
            v = d.prev,
            y = d.next,
            b = {};
          function w() {
            var t;
            !(t = n.arrows) || v && y || (m = p || z("div", l.arrows), v = k(!0), y = k(!1), i = !0, M(m, [v, y]), !p && E(m, g)), v && y && (L(b, {
              prev: v,
              next: y
            }), _(m, t ? "" : "none"), S(m, r = ue + "--" + n.direction), t && (a([ht, mt, yt, St, Ot], T), u(y, "click", s(P, ">")), u(v, "click", s(P, "<")), T(), N([v, y], qt, g.id), c("arrows:mounted", v, y))), a(bt, C);
          }
          function C() {
            x(), w();
          }
          function x() {
            o.destroy(), V(m, r), i ? (W(p ? [v, y] : m), v = y = null) : B([v, y], $t);
          }
          function P(t) {
            h.go(t, !0);
          }
          function k(t) {
            return X('<button class="' + l.arrow + " " + (t ? l.prev : l.next) + '" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="' + (n.arrowPath || "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z") + '" />');
          }
          function T() {
            if (v && y) {
              var e = t.index,
                n = h.getPrev(),
                i = h.getNext(),
                r = n > -1 && e < n ? f.last : f.prev,
                o = i > -1 && e > i ? f.first : f.next;
              v.disabled = n < 0, y.disabled = i < 0, N(v, Ut, r), N(y, Ut, o), c("arrows:updated", v, y, n, i);
            }
          }
          return {
            arrows: b,
            mount: w,
            destroy: x,
            update: T
          };
        },
        Autoplay: function Autoplay(t, e, n) {
          var i,
            r,
            o = It(t),
            s = o.on,
            a = o.bind,
            u = o.emit,
            c = Lt(n.interval, t.go.bind(t, ">"), function (t) {
              var e = f.bar;
              e && F(e, "width", 100 * t + "%"), u("autoplay:playing", t);
            }),
            l = c.isPaused,
            f = e.Elements,
            d = e.Elements,
            h = d.root,
            p = d.toggle,
            g = n.autoplay,
            m = "pause" === g;
          function v() {
            l() && e.Slides.isEnough() && (c.start(!n.resetProgress), r = i = m = !1, w(), u(Pt));
          }
          function y(t) {
            void 0 === t && (t = !0), m = !!t, w(), l() || (c.pause(), u(kt));
          }
          function b() {
            m || (i || r ? y(!1) : v());
          }
          function w() {
            p && (x(p, ye, !m), N(p, Ut, n.i18n[m ? "play" : "pause"]));
          }
          function C(t) {
            var i = e.Slides.getAt(t);
            c.set(i && +R(i.slide, De) || n.interval);
          }
          return {
            mount: function mount() {
              g && (n.pauseOnHover && a(h, "mouseenter mouseleave", function (t) {
                i = "mouseenter" === t.type, b();
              }), n.pauseOnFocus && a(h, "focusin focusout", function (t) {
                r = "focusin" === t.type, b();
              }), p && a(p, "click", function () {
                m ? v() : y(!0);
              }), s([gt, xt, yt], c.rewind), s(gt, C), p && N(p, qt, f.track.id), m || v(), w());
            },
            destroy: c.cancel,
            play: v,
            pause: y,
            isPaused: l
          };
        },
        Cover: function Cover(t, e, n) {
          var i = It(t).on;
          function r(t) {
            e.Slides.forEach(function (e) {
              var n = T(e.container || e.slide, "img");
              n && n.src && o(t, n, e);
            });
          }
          function o(t, e, n) {
            n.style("background", t ? 'center/cover no-repeat url("' + e.src + '")' : "", !0), _(e, t ? "none" : "");
          }
          return {
            mount: function mount() {
              n.cover && (i(Tt, s(o, !0)), i([ht, bt, yt], s(r, !0)));
            },
            destroy: s(r, !1)
          };
        },
        Scroll: function Scroll(t, e, n) {
          var i,
            r,
            o = It(t),
            a = o.on,
            u = o.emit,
            c = t.state.set,
            l = e.Move,
            f = l.getPosition,
            d = l.getLimit,
            h = l.exceededLimit,
            p = l.translate,
            g = t.is(Ie),
            m = 1;
          function v(t, n, o, a, d) {
            var p = f();
            if (w(), o && (!g || !h())) {
              var v = e.Layout.sliderSize(),
                C = ut(t) * v * nt(rt(t) / v) || 0;
              t = l.toPosition(e.Controller.toDest(t % v)) + C;
            }
            var x = ot(p, t, 1);
            m = 1, n = x ? 0 : n || et(rt(t - p) / 1.5, 800), r = a, i = Lt(n, y, s(b, p, t, d), 1), c(5), u(xt), i.start();
          }
          function y() {
            c(3), r && r(), u(St);
          }
          function b(t, e, i, o) {
            var s,
              a,
              u = f(),
              c = (t + (e - t) * (s = o, (a = n.easingFunc) ? a(s) : 1 - Math.pow(1 - s, 4)) - u) * m;
            p(u + c), g && !i && h() && (m *= .6, rt(c) < 10 && v(d(h(!0)), 600, !1, r, !0));
          }
          function w() {
            i && i.cancel();
          }
          function C() {
            i && !i.isPaused() && (w(), y());
          }
          return {
            mount: function mount() {
              a(gt, w), a([bt, yt], C);
            },
            destroy: w,
            scroll: v,
            cancel: C
          };
        },
        Drag: function Drag(t, e, n) {
          var i,
            r,
            o,
            s,
            a,
            c,
            l,
            d,
            h = It(t),
            p = h.on,
            g = h.emit,
            m = h.bind,
            v = h.unbind,
            y = t.state,
            b = e.Move,
            w = e.Scroll,
            C = e.Controller,
            x = e.Elements.track,
            S = e.Media.reduce,
            M = e.Direction,
            E = M.resolve,
            k = M.orient,
            T = b.getPosition,
            O = b.exceededLimit,
            I = !1;
          function L() {
            var t = n.drag;
            q(!t), s = "free" === t;
          }
          function A(t) {
            if (c = !1, !l) {
              var e = H(t);
              i = t.target, r = n.noDrag, P(i, "." + he + ", ." + ce) || r && P(i, r) || !e && t.button || (C.isBusy() ? U(t, !0) : (d = e ? x : window, a = y.is([4, 5]), o = null, m(d, Te, D, Be), m(d, Oe, B, Be), b.cancel(), w.cancel(), z(t)));
            }
            var i, r;
          }
          function D(e) {
            if (y.is(6) || (y.set(6), g("drag")), e.cancelable) if (a) {
              b.translate(i + F(e) / (I && t.is(Ie) ? 5 : 1));
              var r = _(e) > 200,
                o = I !== (I = O());
              (r || o) && z(e), c = !0, g("dragging"), U(e);
            } else (function (t) {
              return rt(F(t)) > rt(F(t, !0));
            })(e) && (a = function (t) {
              var e = n.dragMinThreshold,
                i = f(e),
                r = i && e.mouse || 0,
                o = (i ? e.touch : +e) || 10;
              return rt(F(t)) > (H(t) ? o : r);
            }(e), U(e));
          }
          function B(i) {
            y.is(6) && (y.set(3), g("dragged")), a && (function (i) {
              var r = function (e) {
                  if (t.is(Le) || !I) {
                    var n = _(e);
                    if (n && n < 200) return F(e) / n;
                  }
                  return 0;
                }(i),
                o = function (t) {
                  return T() + ut(t) * tt(rt(t) * (n.flickPower || 600), s ? 1 / 0 : e.Layout.listSize() * (n.flickMaxPages || 1));
                }(r),
                a = n.rewind && n.rewindByDrag;
              S(!1), s ? C.scroll(o, 0, n.snap) : t.is(Ae) ? C.go(k(ut(r)) < 0 ? a ? "<" : "-" : a ? ">" : "+") : t.is(Ie) && I && a ? C.go(O(!0) ? ">" : "<") : C.go(C.toDest(o), !0), S(!0);
            }(i), U(i)), v(d, Te, D), v(d, Oe, B), a = !1;
          }
          function N(t) {
            !l && c && U(t, !0);
          }
          function z(t) {
            o = r, r = t, i = T();
          }
          function F(t, e) {
            return R(t, e) - R(j(t), e);
          }
          function _(t) {
            return Z(t) - Z(j(t));
          }
          function j(t) {
            return r === t && o || r;
          }
          function R(t, e) {
            return (H(t) ? t.changedTouches[0] : t)["page" + E(e ? "Y" : "X")];
          }
          function H(t) {
            return "undefined" != typeof TouchEvent && t instanceof TouchEvent;
          }
          function q(t) {
            l = t;
          }
          return {
            mount: function mount() {
              m(x, Te, u, Be), m(x, Oe, u, Be), m(x, ke, A, Be), m(x, "click", N, {
                capture: !0
              }), m(x, "dragstart", U), p([ht, bt], L);
            },
            disable: q,
            isDragging: function isDragging() {
              return a;
            }
          };
        },
        Keyboard: function Keyboard(t, e, n) {
          var i,
            r,
            o = It(t),
            s = o.on,
            u = o.bind,
            c = o.unbind,
            l = t.root,
            f = e.Direction.resolve;
          function d() {
            var t = n.keyboard;
            t && (i = "global" === t ? window : l, u(i, Fe, g));
          }
          function h() {
            c(i, Fe);
          }
          function p() {
            var t = r;
            r = !0, a(function () {
              r = t;
            });
          }
          function g(e) {
            if (!r) {
              var n = ze(e);
              n === f(Dt) ? t.go("<") : n === f(Bt) && t.go(">");
            }
          }
          return {
            mount: function mount() {
              d(), s(bt, h), s(bt, d), s(gt, p);
            },
            destroy: h,
            disable: function disable(t) {
              r = t;
            }
          };
        },
        LazyLoad: function LazyLoad(t, e, n) {
          var i = It(t),
            o = i.on,
            a = i.off,
            u = i.bind,
            c = i.emit,
            l = "sequential" === n.lazyLoad,
            f = [mt, St],
            d = [];
          function h() {
            r(d), e.Slides.forEach(function (t) {
              G(t.slide, Re).forEach(function (e) {
                var i = R(e, _e),
                  r = R(e, je);
                if (i !== e.src || r !== e.srcset) {
                  var o = n.classes.spinner,
                    s = e.parentElement,
                    a = T(s, "." + o) || z("span", o, s);
                  d.push([e, t, a]), e.src || _(e, "none");
                }
              });
            }), l ? v() : (a(f), o(f, p), p());
          }
          function p() {
            (d = d.filter(function (e) {
              var i = n.perPage * ((n.preloadPages || 1) + 1) - 1;
              return !e[1].isWithin(t.index, i) || g(e);
            })).length || a(f);
          }
          function g(t) {
            var e = t[0];
            S(t[1].slide, xe), u(e, "load error", s(m, t)), N(e, "src", R(e, _e)), N(e, "srcset", R(e, je)), B(e, _e), B(e, je);
          }
          function m(t, e) {
            var n = t[0],
              i = t[1];
            V(i.slide, xe), "error" !== e.type && (W(t[2]), _(n, ""), c(Tt, n, i), c(wt)), l && v();
          }
          function v() {
            d.length && g(d.shift());
          }
          return {
            mount: function mount() {
              n.lazyLoad && (h(), o(yt, h));
            },
            destroy: s(r, d),
            check: p
          };
        },
        Pagination: function Pagination(t, e, n) {
          var i,
            a,
            u = It(t),
            c = u.on,
            l = u.emit,
            f = u.bind,
            d = e.Slides,
            h = e.Elements,
            p = e.Controller,
            g = p.hasFocus,
            m = p.getIndex,
            v = p.go,
            y = e.Direction.resolve,
            b = h.pagination,
            w = [];
          function C() {
            i && (W(b ? o(i.children) : i), V(i, a), r(w), i = null), u.destroy();
          }
          function x(t) {
            v(">" + t, !0);
          }
          function M(t, e) {
            var n = w.length,
              i = ze(e),
              r = E(),
              o = -1;
            i === y(Bt, !1, r) ? o = ++t % n : i === y(Dt, !1, r) ? o = (--t + n) % n : "Home" === i ? o = 0 : "End" === i && (o = n - 1);
            var s = w[o];
            s && (j(s.button), v(">" + o), U(e, !0));
          }
          function E() {
            return n.paginationDirection || n.direction;
          }
          function P(t) {
            return w[p.toPage(t)];
          }
          function k() {
            var t = P(m(!0)),
              e = P(m());
            if (t) {
              var n = t.button;
              V(n, ye), B(n, Xt), N(n, Rt, -1);
            }
            if (e) {
              var r = e.button;
              S(r, ye), N(r, Xt, !0), N(r, Rt, "");
            }
            l("pagination:updated", {
              list: i,
              items: w
            }, t, e);
          }
          return {
            items: w,
            mount: function e() {
              C(), c([bt, yt, Ot], e);
              var r = n.pagination;
              b && _(b, r ? "" : "none"), r && (c([gt, xt, St], k), function () {
                var e = t.length,
                  r = n.classes,
                  o = n.i18n,
                  u = n.perPage,
                  c = g() ? p.getEnd() + 1 : it(e / u);
                S(i = b || z("ul", r.pagination, h.track.parentElement), a = de + "--" + E()), N(i, jt, "tablist"), N(i, Ut, o.select), N(i, Vt, E() === Ft ? "vertical" : "");
                for (var l = 0; l < c; l++) {
                  var m = z("li", null, i),
                    v = z("button", {
                      "class": r.page,
                      type: "button"
                    }, m),
                    y = d.getIn(l).map(function (t) {
                      return t.slide.id;
                    }),
                    C = !g() && u > 1 ? o.pageX : o.slideX;
                  f(v, "click", s(x, l)), n.paginationKeyboard && f(v, "keydown", s(M, l)), N(m, jt, "presentation"), N(v, jt, "tab"), N(v, qt, y.join(" ")), N(v, Ut, ct(C, l + 1)), N(v, Rt, -1), w.push({
                    li: m,
                    button: v,
                    page: l
                  });
                }
              }(), k(), l("pagination:mounted", {
                list: i,
                items: w
              }, P(t.index)));
            },
            destroy: C,
            getAt: P,
            update: k
          };
        },
        Sync: function Sync(t, e, n) {
          var i = n.isNavigation,
            o = n.slideFocus,
            a = [];
          function u() {
            var e, n;
            t.splides.forEach(function (e) {
              e.isParent || (l(t, e.splide), l(e.splide, t));
            }), i && ((n = (e = It(t)).on)(vt, d), n("sk", h), n([ht, bt], f), a.push(e), e.emit(Et, t.splides));
          }
          function c() {
            a.forEach(function (t) {
              t.destroy();
            }), r(a);
          }
          function l(t, e) {
            var n = It(t);
            n.on(gt, function (t, n, i) {
              e.go(e.is(Le) ? i : t);
            }), a.push(n);
          }
          function f() {
            N(e.Elements.list, Vt, n.direction === Ft ? "vertical" : "");
          }
          function d(e) {
            t.go(e.index);
          }
          function h(t, e) {
            w(He, ze(e)) && (d(t), U(e));
          }
          return {
            setup: s(e.Media.set, {
              slideFocus: g(o) ? i : o
            }, !0),
            mount: u,
            destroy: c,
            remount: function remount() {
              c(), u();
            }
          };
        },
        Wheel: function Wheel(t, e, n) {
          var i = It(t).bind,
            r = 0;
          function o(i) {
            if (i.cancelable) {
              var o = i.deltaY,
                s = o < 0,
                a = Z(i),
                u = n.wheelMinThreshold || 0,
                c = n.wheelSleep || 0;
              rt(o) > u && a - r > c && (t.go(s ? "<" : ">"), r = a), function (i) {
                return !n.releaseWheel || t.state.is(4) || -1 !== e.Controller.getAdjacent(i);
              }(s) && U(i);
            }
          }
          return {
            mount: function mount() {
              n.wheel && i(e.Elements.track, "wheel", o, Be);
            }
          };
        },
        Live: function Live(t, e, n) {
          var i = It(t).on,
            r = e.Elements.track,
            o = n.live && !n.isNavigation,
            a = z("span", me),
            u = Lt(90, s(c, !1));
          function c(t) {
            N(r, Jt, t), t ? (M(r, a), u.start()) : (W(a), u.cancel());
          }
          function l(t) {
            o && N(r, Kt, t ? "off" : "polite");
          }
          return {
            mount: function mount() {
              o && (l(!e.Autoplay.isPaused()), N(r, Qt, !0), a.textContent = "…", i(Pt, s(l, !0)), i(kt, s(l, !1)), i([mt, St], s(c, !0)));
            },
            disable: l,
            destroy: function destroy() {
              B(r, [Kt, Qt, Jt]), W(a);
            }
          };
        }
      }),
      We = {
        type: "slide",
        role: "region",
        speed: 400,
        perPage: 1,
        cloneStatus: !0,
        arrows: !0,
        pagination: !0,
        paginationKeyboard: !0,
        interval: 5e3,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        resetProgress: !0,
        easing: "cubic-bezier(0.25, 1, 0.5, 1)",
        drag: !0,
        direction: "ltr",
        trimSpace: !0,
        focusableNodes: "a, button, textarea, input, select, iframe",
        live: !0,
        classes: Pe,
        i18n: {
          prev: "Previous slide",
          next: "Next slide",
          first: "Go to first slide",
          last: "Go to last slide",
          slideX: "Go to slide %s",
          pageX: "Go to page %s",
          play: "Start autoplay",
          pause: "Pause autoplay",
          carousel: "carousel",
          slide: "slide",
          select: "Select a slide to show",
          slideLabel: "%s of %s"
        },
        reducedMotion: {
          speed: 0,
          rewindSpeed: 0,
          autoplay: "pause"
        }
      };
    function Xe(t, e, n) {
      var i = e.Slides;
      function r() {
        i.forEach(function (t) {
          t.style("transform", "translateX(-" + 100 * t.index + "%)");
        });
      }
      return {
        mount: function mount() {
          It(t).on([ht, yt], r);
        },
        start: function start(t, e) {
          i.style("transition", "opacity " + n.speed + "ms " + n.easing), a(e);
        },
        cancel: u
      };
    }
    function Ue(t, e, n) {
      var i,
        r = e.Move,
        o = e.Controller,
        a = e.Scroll,
        u = e.Elements.list,
        c = s(F, u, "transition");
      function l() {
        c(""), a.cancel();
      }
      return {
        mount: function mount() {
          It(t).bind(u, "transitionend", function (t) {
            t.target === u && i && (l(), i());
          });
        },
        start: function start(e, s) {
          var u = r.toPosition(e, !0),
            l = r.getPosition(),
            f = function (e) {
              var i = n.rewindSpeed;
              if (t.is(Ie) && i) {
                var r = o.getIndex(!0),
                  s = o.getEnd();
                if (0 === r && e >= s || r >= s && 0 === e) return i;
              }
              return n.speed;
            }(e);
          rt(u - l) >= 1 && f >= 1 ? n.useScroll ? a.scroll(u, f, !1, s) : (c("transform " + f + "ms " + n.easing), r.translate(u, !0), i = s) : (r.jump(e), s());
        },
        cancel: l
      };
    }
    var Ye = function () {
      function e(t, n) {
        var i;
        this.event = It(), this.Components = {}, this.state = (i = 1, {
          set: function set(t) {
            i = t;
          },
          is: function is(t) {
            return w(y(t), i);
          }
        }), this.splides = [], this._o = {}, this._E = {};
        var r = p(t) ? Y(document, t) : t;
        $(r, r + " is invalid."), this.root = r, n = A({
          label: R(r, Ut) || "",
          labelledby: R(r, Yt) || ""
        }, We, e.defaults, n || {});
        try {
          A(n, JSON.parse(R(r, Q)));
        } catch (t) {
          $(!1, "Invalid JSON");
        }
        this._o = Object.create(A({}, n));
      }
      var n,
        i,
        s = e.prototype;
      return s.mount = function (t, e) {
        var n = this,
          i = this.state,
          r = this.Components;
        return $(i.is([1, 7]), "Already mounted!"), i.set(1), this._C = r, this._T = e || this._T || (this.is(Ae) ? Xe : Ue), this._E = t || this._E, I(L({}, qe, this._E, {
          Transition: this._T
        }), function (t, e) {
          var i = t(n, r, n._o);
          r[e] = i, i.setup && i.setup();
        }), I(r, function (t) {
          t.mount && t.mount();
        }), this.emit(ht), S(this.root, ve), i.set(3), this.emit(pt), this;
      }, s.sync = function (t) {
        return this.splides.push({
          splide: t
        }), t.splides.push({
          splide: this,
          isParent: !0
        }), this.state.is(3) && (this._C.Sync.remount(), t.Components.Sync.remount()), this;
      }, s.go = function (t) {
        return this._C.Controller.go(t), this;
      }, s.on = function (t, e) {
        return this.event.on(t, e), this;
      }, s.off = function (t) {
        return this.event.off(t), this;
      }, s.emit = function (t) {
        var e;
        return (e = this.event).emit.apply(e, [t].concat(o(arguments, 1))), this;
      }, s.add = function (t, e) {
        return this._C.Slides.add(t, e), this;
      }, s.remove = function (t) {
        return this._C.Slides.remove(t), this;
      }, s.is = function (t) {
        return this._o.type === t;
      }, s.refresh = function () {
        return this.emit(yt), this;
      }, s.destroy = function (t) {
        void 0 === t && (t = !0);
        var e = this.event,
          n = this.state;
        return n.is(1) ? It(this).on(pt, this.destroy.bind(this, t)) : (I(this._C, function (e) {
          e.destroy && e.destroy(t);
        }, !0), e.emit(Mt), e.destroy(), t && r(this.splides), n.set(7)), this;
      }, n = e, (i = [{
        key: "options",
        get: function get() {
          return this._o;
        },
        set: function set(t) {
          this._C.Media.set(t, !0, !0);
        }
      }, {
        key: "length",
        get: function get() {
          return this._C.Slides.getLength(!0);
        }
      }, {
        key: "index",
        get: function get() {
          return this._C.Controller.getIndex();
        }
      }]) && t(n.prototype, i), Object.defineProperty(n, "prototype", {
        writable: !1
      }), e;
    }();
    Ye.defaults = {}, Ye.STATES = i, new Ye(".splide", {
      type: "loop",
      padding: "5rem",
      perPage: 3
    }).mount(), new (n(349))("#element", {
      strings: ["^1000👋 Hello! Welcome to my website. ^1000 I'm Muhamad Akhlishil Ishlah."],
      typeSpeed: 50,
      loop: !0,
      showCursor: !1
    });
    var Ge = document.getElementById("btnSend"),
      Ve = n(685);
    Ge.addEventListener("click", function () {
      var t = document.createElement("canvas");
      t.style.width = "100vw", t.style.height = "100vh", t.style.position = "fixed", t.style.inset = 0, t.style.zIndex = 9999, document.body.appendChild(t), Ve.create(t, {
        resize: !0,
        useWorker: !0
      })({
        particleCount: 150,
        spread: 100
      });
    });
  }();
})();