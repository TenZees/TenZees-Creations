// darkMode.js — Robust Midnight Ink Dark Mode

(function () {
  const body = document.body;
  const toggleButton = document.getElementById("dark-mode-toggle");
  const icon = document.getElementById("icon");

  // List of elements to apply glow/accent in dark mode
  const accentSelectors = [
    ".card",
    ".art-btn",
    ".roll-btn",
    ".artblock-generate",
    ".artblock-box"
  ];

  // Apply dark mode class if stored
  if (localStorage.getItem("dark-mode") === "enabled") {
    enableDarkMode();
  }

  // Toggle button listener
  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      if (body.classList.contains("dark-mode")) {
        disableDarkMode();
      } else {
        enableDarkMode();
      }
    });
  }

  // Enable Dark Mode
  function enableDarkMode() {
    body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "enabled");

    if (icon) icon.classList.replace("fa-moon", "fa-sun");

    // Apply accent glow styles
    accentSelectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((el) => {
        el.style.transition = "all 0.3s ease";
        el.style.boxShadow = "0 0 12px var(--accent-dark)";
      });
    });
  }

  // Disable Dark Mode
  function disableDarkMode() {
    body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "disabled");

    if (icon) icon.classList.replace("fa-sun", "fa-moon");

    // Remove accent glow styles
    accentSelectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((el) => {
        el.style.boxShadow = "";
      });
    });
  }
})();
