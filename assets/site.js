/* The Brittany — progressive enhancement for the static site.
   Every page renders fully without this file; it only adds the
   mobile menu, scaling of the product screenshots on small screens,
   and contact-form behaviour. */
(function () {
  "use strict";

  // ---------- Contact form recipient ----------
  // Submissions are emailed by FormSubmit (formsubmit.co): free, no account.
  // FORM_TO is FormSubmit's alias for the wemaketools Google Group, which
  // forwards to the team; manage who receives enquiries in the group.
  var FORM_TO = "f755a65f2b12294e400b4436c65f7616";

  // ---------- Fit product renders to their container ----------
  // Each [data-fit] wrapper holds a UI render designed at a fixed width.
  // Scale it down (never up) so it keeps its layout on narrow screens.
  var fits = document.querySelectorAll("[data-fit]");
  function fitAll() {
    fits.forEach(function (wrap) {
      var inner = wrap.firstElementChild;
      if (!inner) return;
      var designWidth = parseFloat(wrap.getAttribute("data-fit")) || inner.offsetWidth;
      var crop = parseFloat(wrap.getAttribute("data-crop")) || 0;
      var scale = Math.min(1, wrap.clientWidth / designWidth);
      inner.style.transform = scale < 1 ? "scale(" + scale + ")" : "";
      wrap.style.height = Math.ceil((crop || inner.offsetHeight) * scale) + "px";
    });
  }
  if (fits.length) {
    fitAll();
    window.addEventListener("resize", fitAll, { passive: true });
    window.addEventListener("load", fitAll);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitAll);
  }

  // ---------- Mobile menu ----------
  var drawer = document.querySelector("[data-drawer]");
  var openBtn = document.querySelector("[data-drawer-open]");
  var closeBtn = document.querySelector("[data-drawer-close]");
  function setDrawer(open) {
    if (!drawer) return;
    drawer.classList.toggle("open", open);
    document.body.style.overflow = open ? "hidden" : "";
    if (openBtn) openBtn.setAttribute("aria-expanded", open ? "true" : "false");
    if (open && closeBtn) closeBtn.focus();
    if (!open && openBtn) openBtn.focus();
  }
  if (drawer && openBtn) openBtn.addEventListener("click", function () { setDrawer(true); });
  if (closeBtn) closeBtn.addEventListener("click", function () { setDrawer(false); });
  if (drawer) {
    drawer.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { setDrawer(false); });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && drawer.classList.contains("open")) setDrawer(false);
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
      var input = wrap.querySelector("input, textarea, select");
      if (input) input.setAttribute("aria-invalid", msg ? "true" : "false");
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
      if (!name) errs.name = "Enter your name.";
      if (!company) errs.company = "Enter your company.";
      if (!email) errs.email = "Enter your email address.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Use a valid email address, like you@company.com.";
      if (!prob) errs.problem = "Tell us what you're trying to solve.";
      else if (prob.length < 20) errs.problem = "Add a bit more context (at least 20 characters).";

      ["name", "company", "email", "problem"].forEach(function (f) { setErr(f, errs[f]); });
      var firstErr = ["name", "company", "email", "problem"].filter(function (f) { return errs[f]; })[0];
      if (firstErr) { form.querySelector("#" + firstErr).focus(); return; }

      var btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.textContent = "Sending..."; }

      var solution = form.querySelector("#solution");
      var honey = form.querySelector('[name="_honey"]');
      var formErr = form.querySelector("[data-form-error]");
      if (formErr) formErr.hidden = true;

      var showSuccess = function () {
        var wrap = document.querySelector("[data-form-wrap]");
        if (!wrap) return;
        var box = document.createElement("div");
        box.className = "form-success";
        box.setAttribute("role", "status");
        box.innerHTML =
          '<div class="tick" aria-hidden="true">&#10003;</div>' +
          '<h2 class="h2">Message sent</h2>' +
          "<p>We'll reply within 2 working days</p>";

        wrap.innerHTML = "";
        wrap.appendChild(box);
      };

      var showFailure = function () {
        if (btn) { btn.disabled = false; btn.textContent = "Send message"; }
        if (formErr) formErr.hidden = false;
      };

      var payload = {
        _subject: "New enquiry from " + name + " (" + company + ")",
        _template: "table",
        _replyto: email,
        _honey: honey ? honey.value : "",
        Name: name,
        Company: company,
        Email: email,
        Area: solution && solution.value ? solution.options[solution.selectedIndex].text : "Not specified",
        Message: prob
      };

      fetch("https://formsubmit.co/ajax/" + FORM_TO, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload)
      })
        .then(function (res) {
          return res.json().then(function (d) {
            var ok = res.ok && String(d.success) === "true";
            // Keep FormSubmit's reply visible in the console for troubleshooting.
            if (!ok && window.console) console.warn("FormSubmit:", res.status, d.message || d);
            return ok;
          });
        })
        .then(function (ok) { if (ok) showSuccess(); else showFailure(); })
        .catch(function (err) {
          if (window.console) console.warn("FormSubmit request failed:", err);
          showFailure();
        });
    });
  }
})();
