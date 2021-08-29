const btn = document.getElementById("dark-mode-button");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
var colorScheme = window.matchMedia("(prefers-color-scheme: dark)") ? "dark" : "light";

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.documentElement.style.setProperty("color-scheme", "dark");
  document.body.classList.toggle("dark-theme");
  colorScheme = "dark";
} else if (currentTheme == "light") {
  document.documentElement.style.setProperty("color-scheme", "light");
  document.body.classList.toggle("light-theme");
  colorScheme = "light";
}

btn.addEventListener("click", function() {
  var theme = "";
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    theme = document.styleSheets.classList.contains("light-theme")
      ? "light"
      : "dark";
      toggleColorScheme();
  } else {
    document.body.classList.toggle("dark-theme");
    theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
    toggleColorScheme();
  }
  localStorage.setItem("theme", theme);
});

function toggleColorScheme() {
  if(colorScheme == "dark") {
    colorScheme = "light";
    document.documentElement.style.setProperty("color-scheme", "light");
  }
  else {
    colorScheme = "dark"
    document.documentElement.style.setProperty("color-scheme", "dark");
  }
}

/* From https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/ */
