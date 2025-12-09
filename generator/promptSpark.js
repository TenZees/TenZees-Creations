// Get necessary DOM elements
const promptCard = document.getElementById("prompt-card");
const inspireBtn = document.getElementById("inspire-btn");
const tabs = document.querySelectorAll(".ps-tab");

// Default theme
let currentTheme = "all";  // 'all' as the default theme

// Prompt database imports
import { generalPrompts } from './prompts/general.js';
import { slicePrompts } from './prompts/slice.js';
import { surrealPrompts } from './prompts/surreal.js';
import { fantasyPrompts } from './prompts/fantasy.js';
import { sciFiPrompts } from './prompts/sciFi.js';
import { horrorPrompts } from './prompts/horror.js';

// Prompt categories
const prompts = {
    general: [
        ...generalPrompts,
        ...slicePrompts,
        ...surrealPrompts,
        ...fantasyPrompts,
        ...sciFiPrompts,
        ...horrorPrompts
    ],
    all: [...generalPrompts, ...slicePrompts, ...surrealPrompts, ...fantasyPrompts, ...sciFiPrompts, ...horrorPrompts],
    slice: slicePrompts,
    surreal: surrealPrompts,
    fantasy: fantasyPrompts,
    sciFi: sciFiPrompts,
    horror: horrorPrompts
};

// Store the list based on the current theme
let promptList = prompts[currentTheme];

// Function to generate a new prompt
function newPrompt() {
    const prompt = promptList[Math.floor(Math.random() * promptList.length)];

    // Add smooth fade-in effect
    promptCard.style.opacity = 0;
    setTimeout(() => {
        promptCard.textContent = prompt;
        promptCard.style.opacity = 1;
    }, 200);
}

// Event listener for the "Inspire Me" button
inspireBtn.addEventListener("click", () => {
    newPrompt();
    console.log("Inspire button clicked");  // Check if the button works
});


// Tab selection functionality
tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove("active"));

        // Add active class to clicked tab
        tab.classList.add("active");

        // Update current theme and prompt list
        currentTheme = tab.dataset.theme;
        promptList = prompts[currentTheme];  // Update prompt list based on selected theme

        // Generate a new prompt
        newPrompt();
    });
});

// Initial prompt generation on load
document.addEventListener("DOMContentLoaded", () => {
    newPrompt();
});
