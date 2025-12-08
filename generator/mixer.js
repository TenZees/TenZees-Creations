// Import the data from the data.js file
import { DATA } from "./data.js"; 

let paletteLocked = false; // To track whether the palette is locked or not
let currentPalette = null; // To store the currently displayed palette

/* =================================================
   HELPERS
================================================= */

// Randomly pick an item from an array
function pick(arr) {
  if (!arr || !arr.length) return "—"; // Return a fallback if array is empty or undefined
  return arr[Math.floor(Math.random() * arr.length)];
}

// Pick an item from a specific category of DATA
function pickFromData(key) {
  return pick(DATA[key]); // Access the appropriate category from the DATA object
}

// Generate a random color palette with a 70% chance of being curated from data, 30% being randomly generated
function generatePalette() {
  if (Math.random() < 0.7) {
    return pickFromData("palettes"); // 70% chance to pick from predefined palettes
  }
  return generateSmartPalette(); // 30% chance to generate a random palette
}

// Generate a "smart" random palette based on HSL color model
function generateSmartPalette() {
  const baseHue = Math.floor(Math.random() * 360); // Randomize the hue for colors
  return {
    name: "Generated Palette", // Name for the generated palette
    colors: Array.from({ length: 5 }, (_, i) => {
      return `hsl(${(baseHue + i * 20) % 360}, 70%, 55%)`; // Generate 5 related colors
    })
  };
}

// Check if any checkbox is checked
function hasAnyEnabled() {
  return [...document.querySelectorAll("input[type=checkbox]")]
    .some(cb => cb.checked); // Returns true if any checkbox is checked
}

/* =================================================
   LOCK PALETTE
================================================= */

// Get reference to the "lock palette" button
const lockPaletteBtn = document.getElementById("lock-palette");

// Add an event listener to toggle the lock state of the palette when the lock button is clicked
if (lockPaletteBtn) {
  lockPaletteBtn.addEventListener("click", () => {
    paletteLocked = !paletteLocked; // Toggle the locked state
    lockPaletteBtn.textContent = paletteLocked ? "🔒" : "🔓"; // Update button text based on lock state
    lockPaletteBtn.classList.toggle("locked", paletteLocked); // Add 'locked' class if locked
  });
}

/* =================================================
   TOGGLES
================================================= */

// Toggle visibility of result cards based on checkbox state
const TOGGLE_MAP = [
  ["toggle-palette", "card-palette"],
  ["toggle-object", "card-object"],
  ["toggle-location", "card-location"],
  ["toggle-theme", "card-theme"],
  ["toggle-mood", "card-mood"],
  ["toggle-art", "card-art"],
  ["toggle-season", "card-season"],
  ["toggle-person", "card-person"]
];

// This function toggles whether the cards are hidden or shown
function applyToggles() {
  TOGGLE_MAP.forEach(([toggleId, cardId]) => {
    const toggle = document.getElementById(toggleId);
    const card = document.getElementById(cardId);
    if (!toggle || !card) return; // Skip if elements are not found
    card.classList.toggle("card-hidden", !toggle.checked); // Hide card if checkbox is unchecked
  });
}

/* =================================================
   MIX LOGIC
================================================= */

// Main function that handles the mixing of all the elements
function doMix() {
  // PALETTE
  const paletteToggle = document.getElementById("toggle-palette");
  const paletteBox = document.querySelector(".value-palette");

  if (paletteToggle && paletteToggle.checked && paletteBox) {
    if (!paletteLocked || !currentPalette) {
      currentPalette = generatePalette(); // Generate a new palette if it's not locked
    }

    // SAFEGUARD to ensure currentPalette.colors is an array
    if (!currentPalette.colors || !Array.isArray(currentPalette.colors)) {
      console.warn("Invalid palette format", currentPalette); // Warn if the palette format is invalid
      return;
    }

    // Update the palette display
    paletteBox.innerHTML = `
      ${currentPalette.name ? `<span class="palette-name">${currentPalette.name}</span>` : ""}
      <div class="palette-swatches">
        ${currentPalette.colors
          .map(color => `<div class="swatch" style="background:${color}"></div>`)
          .join("")}
      </div>
    `;
  }

  // OBJECT
  const objectToggle = document.getElementById("toggle-object");
  const objectBox = document.querySelector(".value-object");

  if (objectToggle?.checked && objectBox) {
    objectBox.textContent = pickFromData("objects"); // Pick a random object from the data
  }

  // LOCATION
  const locationToggle = document.getElementById("toggle-location");
  const locationBox = document.querySelector(".value-location");

  if (locationToggle?.checked && locationBox) {
    locationBox.textContent = pickFromData("locations"); // Pick a random location from the data
  }

  // THEME
  const themeToggle = document.getElementById("toggle-theme");
  const themeBox = document.querySelector(".value-theme");

  if (themeToggle?.checked && themeBox) {
    themeBox.textContent = pickFromData("themes"); // Pick a random theme from the data
  }

  // MOOD
  const moodToggle = document.getElementById("toggle-mood");
  const moodBox = document.querySelector(".value-mood");

  if (moodToggle?.checked && moodBox) {
    moodBox.textContent = pickFromData("moods"); // Pick a random mood from the data
  }

  // ART STYLE
  const artToggle = document.getElementById("toggle-art");
  const artBox = document.querySelector(".value-art");

  if (artToggle?.checked && artBox) {
    artBox.textContent = pickFromData("artStyles"); // Pick a random art style from the data
  }

  // SEASON
  const seasonToggle = document.getElementById("toggle-season");
  const seasonBox = document.querySelector(".value-season");

  if (seasonToggle?.checked && seasonBox) {
    seasonBox.textContent = pickFromData("seasons"); // Pick a random season from the data
  }

  // PERSON
  const personToggle = document.getElementById("toggle-person");
  const personBox = document.querySelector(".value-person");

  if (personToggle?.checked && personBox) {
    personBox.textContent = pickFromData("people"); // Pick a random person/character from the data
  }
}

/* =================================================
   EVENTS
================================================= */

// Add event listener for the "Mix Elements" button
const mixBtn = document.getElementById("mix-btn");
if (mixBtn) {
  mixBtn.addEventListener("click", () => {
    // Ensure that at least one option is enabled before mixing
    if (!hasAnyEnabled()) {
      console.log("No options selected, cannot mix.");
      return; // Do nothing if no checkboxes are checked
    }
    doMix(); // Proceed with mixing
  });
}

// Add event listener for checkbox state changes to apply toggle visibility
document
  .querySelectorAll("input[type=checkbox]")
  .forEach(cb => cb.addEventListener("change", applyToggles));

// Initial check to apply the visibility toggle based on current checkbox state
applyToggles();
