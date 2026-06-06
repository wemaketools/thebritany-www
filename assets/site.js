/* The Brittany — progressive enhancement for the static site.
   The HTML renders fully without this file; this only adds the
   scroll reveals, count-up stats, navbar state, mobile drawer,
   and contact-form behaviour that used to live in React. */
(function () {
  "use strict";

  // ---------- Reveal on scroll ----------
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var revealObs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            revealObs.unobserve(e.target);
          }
        });
      },
      { rootMargin: "-80px 0px" }
    );
    reveals.forEach(function (el) { revealObs.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  // ---------- Count up ----------
  var counters = document.querySelectorAll(".count-up");
  function runCount(el) {
    var to = parseFloat(el.getAttribute("data-to")) || 0;
    var suffix = el.getAttribute("data-suffix") || "";
    var prefix = el.getAttribute("data-prefix") || "";
    var duration = 1400;
    var startTime = null;
    function tick(t) {
      if (startTime === null) startTime = t;
      var p = Math.min(1, (t - startTime) / duration);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + Math.round(to * eased).toLocaleString() + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  if ("IntersectionObserver" in window) {
    var countObs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            runCount(e.target);
            countObs.unobserve(e.target);
          }
        });
      },
      { rootMargin: "-40px 0px" }
    );
    counters.forEach(function (el) { countObs.observe(el); });
  } else {
    counters.forEach(function (el) {
      el.textContent =
        (el.getAttribute("data-prefix") || "") +
        (parseFloat(el.getAttribute("data-to")) || 0).toLocaleString() +
        (el.getAttribute("data-suffix") || "");
    });
  }

  // ---------- Navbar scroll state ----------
  var navbar = document.querySelector("[data-navbar]");
  if (navbar) {
    var onScroll = function () {
      if (window.scrollY > 40) {
        navbar.classList.remove("transparent");
        navbar.classList.add("solid");
      } else {
        navbar.classList.add("transparent");
        navbar.classList.remove("solid");
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // ---------- Mobile drawer ----------
  var drawer = document.querySelector("[data-drawer]");
  var openBtn = document.querySelector("[data-drawer-open]");
  var closeBtn = document.querySelector("[data-drawer-close]");
  function closeDrawer() { if (drawer) drawer.classList.remove("open"); }
  if (drawer && openBtn) openBtn.addEventListener("click", function () { drawer.classList.add("open"); });
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (drawer) {
    drawer.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeDrawer);
    });
  }

  // ---------- Contact form ----------
  var form = document.querySelector("[data-contact-form]");
  if (form) {
    var problem = form.querySelector("#problem");
    var counter = form.querySelector("[data-char-count]");
    if (problem && counter) {
      var updateCount = function () {
        counter.textContent = problem.value.length + " / minimum 20 characters";
      };
      problem.addEventListener("input", updateCount);
      updateCount();
    }

    var setErr = function (field, msg) {
      var wrap = form.querySelector('[data-field="' + field + '"]');
      if (!wrap) return;
      var existing = wrap.querySelector(".err");
      if (existing) existing.remove();
      if (msg) {
        var d = document.createElement("div");
        d.className = "err";
        d.textContent = msg;
        wrap.appendChild(d);
      }
    };

    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var name = form.querySelector("#name").value.trim();
      var company = form.querySelector("#company").value.trim();
      var email = form.querySelector("#email").value.trim();
      var prob = form.querySelector("#problem").value.trim();

      var errs = {};
      if (!name) errs.name = "Your name is required.";
      if (!company) errs.company = "Company is required.";
      if (!email) errs.email = "Email is required.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Use a valid email address.";
      if (!prob) errs.problem = "Tell us what you're trying to solve.";
      else if (prob.length < 20) errs.problem = "A bit more context, please (minimum 20 characters).";

      ["name", "company", "email", "problem"].forEach(function (f) { setErr(f, errs[f]); });
      if (Object.keys(errs).length) return;

      var btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.textContent = "Sending..."; }

      // Simulated submission (matches the original prototype behaviour).
      setTimeout(function () {
        var wrap = document.querySelector("[data-form-wrap]");
        if (!wrap) return;
        var first = name.split(" ")[0] || "there";

        var box = document.createElement("div");
        box.className = "form-success";
        box.innerHTML =
          '<div style="width:48px;height:48px;border-radius:50px;background:var(--teal-100);color:var(--teal-500);display:flex;align-items:center;justify-content:center;font-size:22px;margin-bottom:20px">✓</div>' +
          '<h3 class="h2" style="color:var(--navy-900);margin-bottom:12px">Message received.</h3>' +
          '<p style="color:var(--gray-800);opacity:0.78;margin-bottom:24px;line-height:1.65"></p>' +
          '<button class="btn btn-secondary-light" data-reset>Send another</button>';

        // Build the message text safely (avoid injecting raw user input as HTML).
        var p = box.querySelector("p");
        p.appendChild(document.createTextNode("Thanks, " + first + ". We'll get back to you within two working days at "));
        var strong = document.createElement("strong");
        strong.textContent = email;
        p.appendChild(strong);
        p.appendChild(document.createTextNode("."));

        wrap.innerHTML = "";
        wrap.appendChild(box);

        var reset = box.querySelector("[data-reset]");
        if (reset) reset.addEventListener("click", function () { window.location.reload(); });
      }, 900);
    });
  }
})();
