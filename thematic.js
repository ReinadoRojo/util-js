/** Thematic.js
*** Author: ReinadoRojo (https://github.com/ReinadoRojo)
***/
// Dark mode
function load_dark_mode() {
  // Get html element
  document.querySelector("html").classList.add(`theme-dark`);
}

// Light mode
function load_light_mode() {
  // Get html element
  document.querySelector("html").classList.add(`theme-light`);
}

if (!localStorage.getItem("theme")) {
  // Media query
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  if (mq.matches) load_dark_mode();
  else load_light_mode();
} else {
  if (
    localStorage.getItem("theme") != "dark" ||
    localStorage.getItem("theme") != "light"
  )
    localStorage.removeItem("theme");
  else {
    if (localStorage.getItem("theme") == "dark") load_dark_mode();
    else load_light_mode();
  }
}
