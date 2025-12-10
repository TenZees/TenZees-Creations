// darkMode.js — robust toggle with localStorage and visual accents
(function () {
  const body = document.body;
  const toggleButton = document.getElementById("dark-mode-toggle");
  const icon = document.getElementById("icon");

  // selectors to apply subtle glow in dark mode
  const accentSelectors = [
    ".result-card",
    ".mix-btn",
    ".lock-btn",
    ".config-box",
    ".art-btn"
  ];

  // init from storage
  const stored = localStorage.getItem("dark-mode");
  if (stored === "enabled") {
    enableDarkMode(false);
  }

  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      if (body.classList.contains("dark-mode")) {
        disableDarkMode(true);
      } else {
        enableDarkMode(true);
      }
    });
  }

  // enable
  function enableDarkMode(save = true) {
    body.classList.add("dark-mode");
    if (save) localStorage.setItem("dark-mode", "enabled");
    if (icon) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    }

    accentSelectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => {
        el.style.transition = "box-shadow .26s ease, transform .18s ease";
        // small glow adapted to dark mode
        el.style.boxShadow = "0 10px 28px rgba(160,123,255,0.06)";
      });
    });
  }

  // disable
  function disableDarkMode(save = true) {
    body.classList.remove("dark-mode");
    if (save) localStorage.setItem("dark-mode", "disabled");
    if (icon) {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }

    accentSelectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => {
        el.style.boxShadow = ""; // revert
      });
    });
  }

  // expose for debug
  window.__DarkModeController = { enableDarkMode, disableDarkMode };
})();
