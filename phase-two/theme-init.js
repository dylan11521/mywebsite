document.documentElement.classList.add("js");

const savedTheme = localStorage.getItem("dylan-theme");
const initialTheme =
  savedTheme === "light" || savedTheme === "dark"
    ? savedTheme
    : window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";

document.documentElement.dataset.theme = initialTheme;
document.documentElement.style.colorScheme = initialTheme;
