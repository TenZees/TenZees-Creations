// darkMode.js

// Check if dark mode is enabled in localStorage
if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
    document.getElementById("icon").classList.replace("fa-moon", "fa-sun"); // Swap icon to sun
}

// Get the dark mode toggle button and icon
const toggleButton = document.getElementById("dark-mode-toggle");
const icon = document.getElementById("icon");

// Add event listener to toggle dark mode
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Swap icons based on the theme
    if (document.body.classList.contains("dark-mode")) {
        icon.classList.replace("fa-moon", "fa-sun"); // Moon to Sun
        localStorage.setItem("dark-mode", "enabled");
    } else {
        icon.classList.replace("fa-sun", "fa-moon"); // Sun to Moon
        localStorage.setItem("dark-mode", "disabled");
    }
});
