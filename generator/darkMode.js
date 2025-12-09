// darkMode.js

// Check if dark mode is enabled in localStorage
if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
}

// Get the dark mode toggle button
const toggleButton = document.getElementById("dark-mode-toggle");

// If the toggle button exists, add the event listener
if (toggleButton) {
    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        // Save the current theme preference in localStorage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
        } else {
            localStorage.setItem("dark-mode", "disabled");
        }
    });
}
