// Brandy Perry Photography — static site interactions

(function () {
  "use strict";

  // Active nav link
  const currentPage = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".dock__link, .dock__mobile a").forEach((link) => {
    const href = link.getAttribute("href") || "";
    const isActive = href === currentPage || (currentPage === "" && href === "index.html");
    link.classList.toggle("active", isActive);
    if (isActive) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });

  // Mobile navigation
  const menuBtn = document.getElementById("menu-btn");
  const mobileNav = document.getElementById("mobile-nav");

  const menuIcon = `<line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line>`;
  const closeIcon = `<path d="M18 6 6 18M6 6l12 12"></path>`;

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(isOpen));
      menuBtn.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
      const svg = menuBtn.querySelector("svg");
      if (svg) {
        svg.innerHTML = isOpen ? closeIcon : menuIcon;
      }
    });

    function closeMobileNav() {
      mobileNav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.setAttribute("aria-label", "Open menu");
      const svg = menuBtn.querySelector("svg");
      if (svg) svg.innerHTML = menuIcon;
    }

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMobileNav);
    });
  }

  // Reveal animations
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "-60px 0px -60px 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el) => {
    revealObserver.observe(el);
  });

  // Project filters
  const filterContainer = document.getElementById("project-filters");
  const projectGrid = document.getElementById("project-grid");

  if (filterContainer && projectGrid) {
    const items = Array.from(projectGrid.querySelectorAll("[data-category]"));
    const countLabel = document.getElementById("project-count");

    function updateCount(n) {
      if (countLabel) {
        countLabel.textContent = `${n} series shown`;
      }
    }

    filterContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;

      filterContainer
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      let visibleCount = 0;

      items.forEach((item) => {
        const category = item.dataset.category;
        if (filter === "all" || category === filter) {
          item.style.display = "";
          visibleCount++;
          // Small fade-in effect
          item.style.opacity = "0";
          item.style.transform = "scale(0.98)";
          requestAnimationFrame(() => {
            item.style.transition = "opacity 0.35s, transform 0.35s";
            item.style.opacity = "1";
            item.style.transform = "scale(1)";
          });
        } else {
          item.style.display = "none";
        }
      });

      updateCount(visibleCount);
    });
  }

  // Lightbox for project/print images
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxClose = document.getElementById("lightbox-close");

  if (lightbox && lightboxImg) {
    document.body.addEventListener("click", (e) => {
      const trigger = e.target.closest("[data-lightbox]");
      if (!trigger) return;
      const src = trigger.dataset.lightbox;
      const alt = trigger.alt || "";
      lightboxImg.src = src;
      lightboxImg.alt = alt;
      lightbox.classList.add("open");
      document.body.style.overflow = "hidden";
    });

    function closeLightbox() {
      lightbox.classList.remove("open");
      document.body.style.overflow = "";
    }

    if (lightboxClose) {
      lightboxClose.addEventListener("click", closeLightbox);
    }

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lightbox.classList.contains("open")) {
        closeLightbox();
      }
    });
  }
})();
