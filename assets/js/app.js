!(function () {
  "use strict";
  var t,
    e,
    a,
    s,
    n = localStorage.getItem("language"),
    o = "en";

  function r() {
    var t = document.querySelectorAll(".counter-value");
    t &&
      t.forEach(function (n) {
        !(function t() {
          var e = +n.getAttribute("data-target"),
            a = +n.innerText,
            s = e / 250;
          s < 1 && (s = 1),
            a < e
              ? ((n.innerText = (a + s).toFixed(0)), setTimeout(t, 1))
              : (n.innerText = e);
        })();
      });
  }

  function d() {
    for (
      var t = document
          .getElementById("topnav-menu-content")
          .getElementsByTagName("a"),
        e = 0,
        a = t.length;
      e < a;
      e++
    )
      "nav-item dropdown active" === t[e].parentElement.getAttribute("class") &&
        (t[e].parentElement.classList.remove("active"),
        t[e].nextElementSibling.classList.remove("show"));
  }
  function c(t) {
    var e = document.getElementById(t);
    e.style.display = "block";
    var a = setInterval(function () {
      e.style.opacity || (e.style.opacity = 1),
        0 < e.style.opacity
          ? (e.style.opacity -= 0.2)
          : (clearInterval(a), (e.style.display = "none"));
    }, 200);
  }

  document.addEventListener("click", function (event) {
    var sidebar = document.querySelector(".vertical-menu");
    var toggleButton = document.querySelector(".vertical-menu-btn");
    var isClickInsideSidebar = sidebar.contains(event.target);
    var isClickInsideButton = toggleButton.contains(event.target);

    if (!isClickInsideSidebar && !isClickInsideButton) {
      document.body.classList.remove("sidebar-enable");
    }
  });

  function u() {
    var t, e, a;
    feather.replace(),
      window.sessionStorage &&
        ((t = sessionStorage.getItem("is_visited"))
          ? null !== (e = document.querySelector("#" + t)) &&
            ((e.checked = !0),
            (a = t),
            1 == document.getElementById("layout-direction-ltr").checked &&
            "layout-direction-ltr" === a
              ? (document
                  .getElementsByTagName("html")[0]
                  .removeAttribute("dir"),
                (document.getElementById("layout-direction-rtl").checked = !1),
                document
                  .getElementById("bootstrap-style")
                  .setAttribute("href", "assets/css/bootstrap.min.css"),
                document
                  .getElementById("app-style")
                  .setAttribute("href", "assets/css/app.min.css"),
                sessionStorage.setItem("is_visited", "layout-direction-ltr"))
              : 1 == document.getElementById("layout-direction-rtl").checked &&
                "layout-direction-rtl" === a &&
                ((document.getElementById("layout-direction-ltr").checked = !1),
                document
                  .getElementById("bootstrap-style")
                  .setAttribute("href", "assets/css/bootstrap-rtl.min.css"),
                document
                  .getElementById("app-style")
                  .setAttribute("href", "assets/css/app-rtl.min.css"),
                document
                  .getElementsByTagName("html")[0]
                  .setAttribute("dir", "rtl"),
                sessionStorage.setItem("is_visited", "layout-direction-rtl")))
          : sessionStorage.setItem("is_visited", "layout-direction-ltr"));
    var s = document.getElementsByTagName("body")[0];
    s.hasAttribute("data-layout") &&
    "horizontal" == s.getAttribute("data-layout")
      ? (m("layout-horizontal"),
        (document.getElementById("sidebar-setting").style.display = "none"),
        (document.getElementsByClassName("vertical-menu")[0].style.display =
          "none"),
        (document.getElementsByClassName(
          "ishorizontal-topbar"
        )[0].style.display = "block"),
        (document.getElementsByClassName("isvertical-topbar")[0].style.display =
          "none"),
        (document.getElementsByClassName("topnav")[0].style.display = "block"),
        (document.getElementsByClassName("footer")[0].style.display = "block"),
        "light" == s.hasAttribute("data-topbar")
          ? (m("topbar-color-light"),
            document.body.setAttribute("data-topbar", "light"))
          : "dark" == s.hasAttribute("data-topbar") &&
            (m("topbar-color-dark"),
            document.body.setAttribute("data-topbar", "dark")),
        document.body.removeAttribute("data-sidebar"))
      : ((document.getElementsByClassName(
          "isvertical-topbar"
        )[0].style.display = "block"),
        m("layout-vertical"),
        (document.getElementsByClassName("topnav")[0].style.display = "none"),
        (document.getElementsByClassName(
          "ishorizontal-topbar"
        )[0].style.display = "none"));
  }
  function m(t) {
    document.getElementById(t) && (document.getElementById(t).checked = !0);
  }
  function b() {
    document.webkitIsFullScreen ||
      document.mozFullScreen ||
      document.msFullscreenElement ||
      document.body.classList.remove("fullscreen-enable");
  }
  (window.onload = function () {
    document.getElementById("preloader") && (c("pre-status"), c("preloader"));
  }),
    u(),
    document.addEventListener("DOMContentLoaded", function (t) {
      document.getElementById("side-menu") && new MetisMenu("#side-menu");
    }),
    r(),
    (function () {
      var e = document.body.getAttribute("data-sidebar-size");
      window.onload = function () {
        1024 <= window.innerWidth &&
          window.innerWidth <= 1366 &&
          (document.body.setAttribute("data-sidebar-size", "sm"),
          m("sidebar-size-small"));
      };
      for (
        var t = document.getElementsByClassName("vertical-menu-btn"), a = 0;
        a < t.length;
        a++
      )
        t[a] &&
          t[a].addEventListener("click", function (t) {
            t.preventDefault(),
              document.body.classList.toggle("sidebar-enable"),
              992 <= window.innerWidth
                ? null == e
                  ? null == document.body.getAttribute("data-sidebar-size") ||
                    "lg" == document.body.getAttribute("data-sidebar-size")
                    ? document.body.setAttribute("data-sidebar-size", "sm")
                    : document.body.setAttribute("data-sidebar-size", "lg")
                  : "md" == e
                  ? "md" == document.body.getAttribute("data-sidebar-size")
                    ? document.body.setAttribute("data-sidebar-size", "sm")
                    : document.body.setAttribute("data-sidebar-size", "md")
                  : "sm" == document.body.getAttribute("data-sidebar-size")
                  ? document.body.setAttribute("data-sidebar-size", "lg")
                  : document.body.setAttribute("data-sidebar-size", "sm")
                : i();
          });
    })(),
    setTimeout(function () {
      var t = document.querySelectorAll("#sidebar-menu a");
      t &&
        t.forEach(function (t) {
          var e,
            a,
            s,
            n,
            o,
            l = window.location.href.split(/[?#]/)[0];
          t.href == l &&
            (t.classList.add("active"),
            (e = t.parentElement) &&
              "side-menu" !== e.id &&
              (e.classList.add("mm-active"),
              (a = e.parentElement) &&
                "side-menu" !== a.id &&
                (a.classList.add("mm-show"),
                a.classList.contains("mm-collapsing") &&
                  console.log("has mm-collapsing"),
                (s = a.parentElement) &&
                  "side-menu" !== s.id &&
                  (s.classList.add("mm-active"),
                  (n = s.parentElement) &&
                    "side-menu" !== n.id &&
                    (n.classList.add("mm-show"),
                    (o = n.parentElement) &&
                      "side-menu" !== o.id &&
                      o.classList.add("mm-active"))))));
        });
    }, 0),
    (t = document.querySelectorAll(".navbar-nav a")) &&
      t.forEach(function (t) {
        var e,
          a,
          s,
          n,
          o,
          l,
          r = window.location.href.split(/[?#]/)[0];
        t.href == r &&
          (t.classList.add("active"),
          (e = t.parentElement) &&
            (e.classList.add("active"),
            (a = e.parentElement).classList.add("active"),
            (s = a.parentElement) &&
              (s.classList.add("active"),
              (n = s.parentElement).closest("li") &&
                n.closest("li").classList.add("active"),
              n &&
                (n.classList.add("active"),
                (o = n.parentElement) &&
                  (o.classList.add("active"),
                  (l = o.parentElement) && l.classList.add("active"))))));
      }),
    document.addEventListener("fullscreenchange", b),
    document.addEventListener("webkitfullscreenchange", b),
    document.addEventListener("mozfullscreenchange", b),
    (function () {
      if (document.getElementById("topnav-menu-content")) {
        for (
          var t = document
              .getElementById("topnav-menu-content")
              .getElementsByTagName("a"),
            e = 0,
            a = t.length;
          e < a;
          e++
        )
          t[e].onclick = function (t) {
            "#" === t.target.getAttribute("href") &&
              (t.target.parentElement.classList.toggle("active"),
              t.target.nextElementSibling.classList.toggle("show"));
          };
        window.addEventListener("resize", d);
      }
    })(),
    [].slice
      .call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      .map(function (t) {
        return new bootstrap.Tooltip(t);
      }),
    [].slice
      .call(document.querySelectorAll('[data-bs-toggle="popover"]'))
      .map(function (t) {
        return new bootstrap.Popover(t);
      }),
    [].slice.call(document.querySelectorAll(".toast")).map(function (t) {
      return new bootstrap.Toast(t);
    }),
    (function () {
      n && "null" != n && n !== o && l(n);
      var t = document.getElementsByClassName("language");
      t &&
        t.forEach(function (e) {
          e.addEventListener("click", function (t) {
            l(e.getAttribute("data-lang"));
          });
        });
    })(),
    (a = document.body),
    document.getElementsByClassName("right-bar-toggle").forEach(function (t) {
      t.addEventListener("click", function (t) {
        a.classList.toggle("right-bar-enabled");
      });
    }),
    a.addEventListener("click", function (t) {
      (!t.target.parentElement.classList.contains("right-bar-toggle-close") &&
        t.target.closest(".right-bar-toggle, .right-bar")) ||
        document.body.classList.remove("right-bar-enabled");
    }),
    (a = document.getElementsByTagName("body")[0]).hasAttribute(
      "data-layout"
    ) && "horizontal" == a.getAttribute("data-layout")
      ? (m("layout-horizontal"),
        "light" == a.hasAttribute("data-topbar")
          ? (m("topbar-color-light"),
            document.body.setAttribute("data-topbar", "light"))
          : "dark" == a.hasAttribute("data-topbar") &&
            (m("topbar-color-dark"),
            document.body.setAttribute("data-topbar", "dark")),
        (document.getElementById("sidebar-setting").style.display = "none"),
        document.body.removeAttribute("data-sidebar"))
      : (m("layout-vertical"),
        (document.getElementById("sidebar-setting").style.display = "block")),
    a.hasAttribute("data-layout-mode") &&
    "dark" == a.getAttribute("data-layout-mode")
      ? m("layout-mode-dark")
      : m("layout-mode-light"),
    a.hasAttribute("data-layout-size") &&
    "boxed" == a.getAttribute("data-layout-size")
      ? m("layout-width-boxed")
      : m("layout-width-fluid"),
    a.hasAttribute("data-layout-scrollable") &&
    "true" == a.getAttribute("data-layout-scrollable")
      ? m("layout-position-scrollable")
      : m("layout-position-fixed"),
    a.hasAttribute("data-topbar") && "dark" == a.getAttribute("data-topbar")
      ? m("topbar-color-dark")
      : m("topbar-color-light"),
    a.hasAttribute("data-sidebar-size") &&
    "sm" == a.getAttribute("data-sidebar-size")
      ? m("sidebar-size-small")
      : a.hasAttribute("data-sidebar-size") &&
        "md" == a.getAttribute("data-sidebar-size")
      ? m("sidebar-size-compact")
      : m("sidebar-size-default"),
    a.hasAttribute("data-sidebar") && "brand" == a.getAttribute("data-sidebar")
      ? m("sidebar-color-brand")
      : a.hasAttribute("data-sidebar") &&
        "dark" == a.getAttribute("data-sidebar")
      ? m("sidebar-color-dark")
      : m("sidebar-color-light"),
    document
      .querySelectorAll("input[name='layout-mode']")
      .forEach(function (t) {
        t.addEventListener("change", function (t) {
          t &&
            t.target &&
            t.target.value &&
            ("light" == t.target.value
              ? (document.body.setAttribute("data-layout-mode", "light"),
                document.body.setAttribute("data-topbar", "light"),
                document.body.setAttribute("data-sidebar", "light"),
                (a.hasAttribute("data-layout") &&
                  "horizontal" == a.getAttribute("data-layout")) ||
                  document.body.setAttribute("data-sidebar", "light"),
                m("topbar-color-light"),
                m("sidebar-color-light"))
              : (document.body.setAttribute("data-layout-mode", "dark"),
                document.body.setAttribute("data-topbar", "dark"),
                document.body.setAttribute("data-sidebar", "dark"),
                (a.hasAttribute("data-layout") &&
                  "horizontal" == a.getAttribute("data-layout")) ||
                  document.body.setAttribute("data-sidebar", "dark"),
                m("topbar-color-dark"),
                m("sidebar-color-dark")));
        });
      }),
    (s = document.getElementById("checkAll")) &&
      (s.onclick = function () {
        for (
          var t = document.querySelectorAll(
              '.table-check input[type="checkbox"]'
            ),
            e = 0;
          e < t.length;
          e++
        )
          t[e].checked = this.checked;
      });
})();

// sub menu////

!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t = t || self).MetisMenu = e());
})(this, function () {
  "use strict";
  var i = function () {
      return (i =
        Object.assign ||
        function (t) {
          for (var e, i = 1, n = arguments.length; i < n; i++)
            for (var s in (e = arguments[i]))
              Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
          return t;
        }).apply(this, arguments);
    },
    n = { parentTrigger: "li", subMenu: "ul", toggle: !0, triggerElement: "a" },
    g = "mm-active",
    f = "mm-collapse",
    m = "mm-collapsed",
    p = "mm-collapsing",
    t = "metismenu",
    v = "mm-show";
  function y(t, e) {
    if (t.closest) return t.closest(e);
    for (var i, n, s = t; s; ) {
      if (
        ((n = e),
        (
          (i = s).matches ||
          i.webkitMatchesSelector ||
          i.msMatchesSelector
        ).call(i, n))
      )
        return s;
      s = s.parentElement;
    }
    return null;
  }
  function s(t, e) {
    (this.element = s.isElement(t) ? t : document.querySelector(t)),
      (this.config = i(i({}, n), e)),
      (this.disposed = !1),
      (this.triggerArr = []),
      this.init();
  }
  return (
    (s.attach = function (t, e) {
      return new s(t, e);
    }),
    (s.prototype.init = function () {
      var n = this,
        s = g,
        r = f;
      this.element.classList.add(t),
        [].slice
          .call(this.element.querySelectorAll(this.config.subMenu))
          .forEach(function (t) {
            t.classList.add(r);
            var e = y(t, n.config.parentTrigger);
            null != e && e.classList.contains(s) ? n.show(t) : n.hide(t);
            var i =
              null == e ? void 0 : e.querySelector(n.config.triggerElement);
            "true" !== (null == i ? void 0 : i.getAttribute("aria-disabled")) &&
              (null != i && i.setAttribute("aria-expanded", "false"),
              null != i && i.addEventListener("click", n.clickEvent.bind(n)),
              n.triggerArr.push(i));
          });
    }),
    (s.prototype.clickEvent = function (t) {
      var e, i, n;
      this.disposed ||
        ((e = null == t ? void 0 : t.currentTarget) &&
          "A" === e.tagName &&
          t.preventDefault(),
        (n =
          null == (i = y(e, this.config.parentTrigger))
            ? void 0
            : i.querySelector(this.config.subMenu)),
        this.toggle(n));
    }),
    (s.prototype.update = function () {
      (this.disposed = !1), this.init();
    }),
    (s.prototype.dispose = function () {
      var e = this;
      this.triggerArr.forEach(function (t) {
        t.removeEventListener("click", e.clickEvent.bind(e));
      }),
        (this.disposed = !0);
    }),
    (s.prototype.on = function (t, e, i) {
      return this.element.addEventListener(t, e, i), this;
    }),
    (s.prototype.off = function (t, e, i) {
      return this.element.removeEventListener(t, e, i), this;
    }),
    (s.prototype.emit = function (t, e, i) {
      var n;
      return (
        void 0 === i && (i = !1),
        "function" == typeof CustomEvent
          ? (n = new CustomEvent(t, { bubbles: i, detail: e }))
          : (n = document.createEvent("CustomEvent")).initCustomEvent(
              t,
              i,
              !1,
              e
            ),
        this.element.dispatchEvent(n),
        this
      );
    }),
    (s.prototype.toggle = function (t) {
      var e = y(t, this.config.parentTrigger);
      null != e && e.classList.contains(g) ? this.hide(t) : this.show(t);
    }),
    (s.prototype.show = function (t) {
      var e,
        i,
        n,
        s,
        r,
        o = this,
        l = t,
        a = g,
        c = f,
        u = m,
        h = p,
        d = v;
      this.isTransitioning ||
        l.classList.contains(h) ||
        ((i = function () {
          l.classList.remove(h),
            (l.style.height = ""),
            l.removeEventListener("transitionend", i),
            o.setTransitioning(!1),
            o.emit("shown.metisMenu", { shownElement: l });
        }),
        null != (n = y(l, this.config.parentTrigger)) && n.classList.add(a),
        null !=
          (s =
            null == n ? void 0 : n.querySelector(this.config.triggerElement)) &&
          s.setAttribute("aria-expanded", "true"),
        null != s && s.classList.remove(u),
        (l.style.height = "0px"),
        l.classList.remove(c),
        l.classList.remove(d),
        l.classList.add(h),
        (r = [].slice
          .call(
            null === (e = null == n ? void 0 : n.parentNode) || void 0 === e
              ? void 0
              : e.children
          )
          .filter(function (t) {
            return t !== n;
          })),
        this.config.toggle &&
          0 < r.length &&
          r.forEach(function (t) {
            var e = t.querySelector(o.config.subMenu);
            e && o.hide(e);
          }),
        this.setTransitioning(!0),
        l.classList.add(c),
        l.classList.add(d),
        (l.style.height = l.scrollHeight + "px"),
        this.emit("show.metisMenu", { showElement: l }),
        l.addEventListener("transitionend", i));
    }),
    (s.prototype.hide = function (t) {
      var e,
        i,
        n,
        s = this,
        r = g,
        o = f,
        l = m,
        a = p,
        c = v,
        u = t;
      !this.isTransitioning &&
        u.classList.contains(c) &&
        (this.emit("hide.metisMenu", { hideElement: u }),
        null != (e = y(u, this.config.parentTrigger)) && e.classList.remove(r),
        (i = function () {
          u.classList.remove(a),
            u.classList.add(o),
            (u.style.height = ""),
            u.removeEventListener("transitionend", i),
            s.setTransitioning(!1),
            s.emit("hidden.metisMenu", { hiddenElement: u });
        }),
        (u.style.height = u.getBoundingClientRect().height + "px"),
        (u.style.height = u.offsetHeight + "px"),
        u.classList.add(a),
        u.classList.remove(o),
        u.classList.remove(c),
        this.setTransitioning(!0),
        u.addEventListener("transitionend", i),
        (u.style.height = "0px"),
        null !=
          (n =
            null == e ? void 0 : e.querySelector(this.config.triggerElement)) &&
          n.setAttribute("aria-expanded", "false"),
        null != n && n.classList.add(l));
    }),
    (s.prototype.setTransitioning = function (t) {
      this.isTransitioning = t;
    }),
    (s.isElement = function (t) {
      return Boolean(t.classList);
    }),
    s
  );
});

//# submenu
