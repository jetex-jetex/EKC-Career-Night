/* =========================================================
   DATA ENGINEERING CAREER NIGHT — scripts.js
   Smooth scrolling + mobile hamburger menu
   ========================================================= */

(function () {
  "use strict";

  // ----- Hamburger menu toggle -----
  var hamburger = document.getElementById("hamburger");
  var navLinks = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {
      var isOpen = navLinks.classList.toggle("open");
      hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close menu when a nav link is tapped (mobile UX)
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
      }
    });
  }

  // ----- Active nav link highlight on scroll -----
  var sections = document.querySelectorAll("main section[id]");
  var navAnchors = document.querySelectorAll(".nav-links a[href^='#']");

  if (sections.length && navAnchors.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            navAnchors.forEach(function (a) {
              a.classList.remove("active");
              if (a.getAttribute("href") === "#" + entry.target.id) {
                a.classList.add("active");
              }
            });
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach(function (s) {
      observer.observe(s);
    });
  }
})();
