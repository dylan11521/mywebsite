"use strict";

const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const navLinks = [...document.querySelectorAll("[data-nav]")];
const sections = [...document.querySelectorAll("[data-section]")];
const themeButtons = [...document.querySelectorAll("[data-theme-toggle]")];
const mediaFrame = document.querySelector(".media-frame");
const mediaToggle = document.querySelector(".media-toggle");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let lastFocusedElement = null;

function focusableElements(container) {
  return [...container.querySelectorAll('a[href], button:not([disabled]), summary, [tabindex]:not([tabindex="-1"])')];
}

function closeMenu({ restoreFocus = true } = {}) {
  if (!menuButton || !mobileMenu) return;

  mobileMenu.hidden = true;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");
  document.body.classList.remove("menu-open");

  if (restoreFocus) lastFocusedElement?.focus();
}

function openMenu() {
  if (!menuButton || !mobileMenu) return;

  lastFocusedElement = document.activeElement;
  mobileMenu.hidden = false;
  menuButton.setAttribute("aria-expanded", "true");
  menuButton.setAttribute("aria-label", "Close navigation");
  document.body.classList.add("menu-open");
  focusableElements(mobileMenu)[0]?.focus();
}

menuButton?.addEventListener("click", () => {
  menuButton.getAttribute("aria-expanded") === "true" ? closeMenu() : openMenu();
});

mobileMenu?.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    return;
  }

  if (event.key !== "Tab") return;

  const focusable = focusableElements(mobileMenu);
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
  navLinks.forEach((link) => {
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
    { rootMargin: "-30% 0px -55%", threshold: [0, 0.2, 0.5] }
  );

  sections.forEach((section) => sectionObserver.observe(section));

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -12%", threshold: 0.08 }
  );

  document.querySelectorAll("[data-reveal]").forEach((element) => revealObserver.observe(element));
} else {
  document.querySelectorAll("[data-reveal]").forEach((element) => element.classList.add("is-visible"));
}

function updateThemeControls() {
  const isDark = document.documentElement.dataset.theme === "dark";
  themeButtons.forEach((button) => {
    button.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} theme`);
    button.setAttribute("title", `Switch to ${isDark ? "light" : "dark"} theme`);
    button.querySelector(".theme-label")?.replaceChildren(isDark ? "Light" : "Dark");
  });
}

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem("dylan-theme", nextTheme);
    updateThemeControls();
  });
});

updateThemeControls();

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

if (mediaFrame && mediaToggle) {
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  let wantsMotion =
    window.matchMedia("(min-width: 761px)").matches &&
    !reducedMotion.matches &&
    !connection?.saveData;
  let mediaIsVisible = false;

  function renderMediaMotion() {
    const isPlaying = wantsMotion && mediaIsVisible && !reducedMotion.matches;
    mediaFrame.classList.toggle("is-playing", isPlaying);
    mediaToggle.setAttribute("aria-pressed", String(isPlaying));
    mediaToggle.querySelector("span").textContent = isPlaying
      ? "Pause preview motion"
      : "Play preview motion";
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
