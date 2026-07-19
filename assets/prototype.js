const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const sectionLinks = [...document.querySelectorAll("[data-nav]")];
const sections = [...document.querySelectorAll("[data-section]")];
const mediaFrame = document.querySelector(".media-frame");
const mediaToggle = document.querySelector(".media-toggle");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let lastFocusedElement = null;

function getFocusableElements(container) {
  return [...container.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')];
}

function closeMenu({ restoreFocus = true } = {}) {
  if (!mobileMenu || !menuButton) return;

  mobileMenu.hidden = true;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");
  document.body.classList.remove("menu-open");

  if (restoreFocus && lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

function openMenu() {
  if (!mobileMenu || !menuButton) return;

  lastFocusedElement = document.activeElement;
  mobileMenu.hidden = false;
  menuButton.setAttribute("aria-expanded", "true");
  menuButton.setAttribute("aria-label", "Close navigation");
  document.body.classList.add("menu-open");
  getFocusableElements(mobileMenu)[0]?.focus();
}

menuButton?.addEventListener("click", () => {
  if (menuButton.getAttribute("aria-expanded") === "true") {
    closeMenu();
  } else {
    openMenu();
  }
});

mobileMenu?.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    return;
  }

  if (event.key !== "Tab") return;

  const focusable = getFocusableElements(mobileMenu);
  const first = focusable[0];
  const last = focusable.at(-1);

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

mobileMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => closeMenu({ restoreFocus: false }));
});

function setActiveSection(sectionId) {
  sectionLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${sectionId}`;
    link.classList.toggle("is-active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible) setActiveSection(visible.target.id);
    },
    { rootMargin: "-30% 0px -50%", threshold: [0, 0.25, 0.5] }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

document.querySelectorAll(".ride-card button").forEach((button) => {
  button.addEventListener("click", () => {
    const panel = document.getElementById(button.getAttribute("aria-controls"));
    const willExpand = button.getAttribute("aria-expanded") !== "true";

    button.setAttribute("aria-expanded", String(willExpand));
    panel.hidden = !willExpand;
  });
});

if (mediaFrame && mediaToggle) {
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  let wantsMotion = window.matchMedia("(min-width: 761px)").matches && !reducedMotion.matches && !connection?.saveData;
  let mediaIsVisible = false;

  function renderMediaMotion() {
    const isPlaying = wantsMotion && mediaIsVisible && !reducedMotion.matches;
    mediaFrame.classList.toggle("is-playing", isPlaying);
    mediaToggle.setAttribute("aria-pressed", String(isPlaying));
    mediaToggle.querySelector("span").textContent = isPlaying ? "Pause preview motion" : "Play preview motion";
  }

  mediaToggle.addEventListener("click", () => {
    wantsMotion = !mediaFrame.classList.contains("is-playing");
    renderMediaMotion();
  });

  const mediaObserver = new IntersectionObserver(
    ([entry]) => {
      mediaIsVisible = entry.isIntersecting;
      renderMediaMotion();
    },
    { threshold: 0.2 }
  );

  mediaObserver.observe(mediaFrame);
  reducedMotion.addEventListener?.("change", renderMediaMotion);
}
