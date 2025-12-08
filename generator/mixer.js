let paletteLocked = false;
let currentPalette = null;
import { DATA } from "./data.js";

/* =================================================
   HELPERS
================================================= */
function pick(arr) {
  if (!arr || !arr.length) return "—";
  return arr[Math.floor(Math.random() * arr.length)];
}

function pickFromData(key) {
  return pick(DATA[key]);
}

function generatePalette() {
  // 70% curated, 30% generated
  if (Math.random() < 0.7) {
    return pickFromData("palettes");
  }
  return generateSmartPalette();
}

function generateSmartPalette() {
  const baseHue = Math.floor(Math.random() * 360);
  return {
    name: "Generated Palette",
    colors: Array.from({ length: 5 }, (_, i) => {
      return `hsl(${(baseHue + i * 20) % 360}, 70%, 55%)`;
    })
  };
}

function hasAnyEnabled() {
  return [...document.querySelectorAll("input[type=checkbox]")]
    .some(cb => cb.checked); // Checks if any checkbox is selected
}

const lockPaletteBtn = document.getElementById("lock-palette");

if (lockPaletteBtn) {
  lockPaletteBtn.addEventListener("click", () => {
    // Toggle the lock state for the palette
    paletteLocked = !paletteLocked;
    
    // Update the lock button's text and visual state
    lockPaletteBtn.textContent = paletteLocked ? "🔒" : "🔓";
    
    // Toggle the "locked" class on the button for additional visual feedback
    lockPaletteBtn.classList.toggle("locked", paletteLocked);
  });
}

/* =================================================
   TOGGLES
================================================= */
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

function applyToggles() {
  TOGGLE_MAP.forEach(([toggleId, cardId]) => {
    const toggle = document.getElementById(toggleId);
    const card = document.getElementById(cardId);
    if (!toggle || !card) return;
    card.classList.toggle("card-hidden", !toggle.checked);
  });
}

/* =================================================
   MIX LOGIC
================================================= */
function doMix() {
  /* ===============================
     PALETTE
  =============================== */
  const paletteToggle = document.getElementById("toggle-palette");
  const paletteBox = document.querySelector(".value-palette");

  if (paletteToggle && paletteToggle.checked && paletteBox) {
    if (!paletteLocked || !currentPalette) {
      currentPalette = generatePalette();
    }

    // SAFEGUARD to ensure currentPalette.colors is an array
    if (!currentPalette.colors || !Array.isArray(currentPalette.colors)) {
      console.warn("Invalid palette format", currentPalette);
      return;
    }

    paletteBox.innerHTML = `
      ${currentPalette.name ? `<span class="palette-name">${currentPalette.name}</span>` : ""}
      <div class="palette-swatches">
        ${currentPalette.colors
          .map(color => `<div class="swatch" style="background:${color}"></div>`)
          .join("")}
      </div>
    `;
  }

  /* ===============================
     OBJECT
  =============================== */
  const objectToggle = document.getElementById("toggle-object");
  const objectBox = document.querySelector(".value-object");

  if (objectToggle?.checked && objectBox) {
    objectBox.textContent = pickFromData("objects");
  }

  /* ===============================
     LOCATION
  =============================== */
  const locationToggle = document.getElementById("toggle-location");
  const locationBox = document.querySelector(".value-location");

  if (locationToggle?.checked && locationBox) {
    locationBox.textContent = pickFromData("locations");
  }

  /* ===============================
     THEME
  =============================== */
  const themeToggle = document.getElementById("toggle-theme");
  const themeBox = document.querySelector(".value-theme");

  if (themeToggle?.checked && themeBox) {
    themeBox.textContent = pickFromData("themes");
  }

  /* ===============================
     MOOD
  =============================== */
  const moodToggle = document.getElementById("toggle-mood");
  const moodBox = document.querySelector(".value-mood");

  if (moodToggle?.checked && moodBox) {
    moodBox.textContent = pickFromData("moods");
  }

  /* ===============================
     ART STYLE
  =============================== */
  const artToggle = document.getElementById("toggle-art");
  const artBox = document.querySelector(".value-art");

  if (artToggle?.checked && artBox) {
    artBox.textContent = pickFromData("artStyles");
  }

  /* ===============================
     SEASON
  =============================== */
  const seasonToggle = document.getElementById("toggle-season");
  const seasonBox = document.querySelector(".value-season");

  if (seasonToggle?.checked && seasonBox) {
    seasonBox.textContent = pickFromData("seasons");
  }

  /* ===============================
     PERSON
  =============================== */
  const personToggle = document.getElementById("toggle-person");
  const personBox = document.querySelector(".value-person");

  if (personToggle?.checked && personBox) {
    personBox.textContent = pickFromData("people");
  }
}

/* =================================================
   EVENTS
================================================= */
const mixBtn = document.getElementById("mix-btn");
if (mixBtn) {
  mixBtn.addEventListener("click", () => {
    if (!hasAnyEnabled()) {
      console.log("No options selected, cannot mix.");
      return;
    }
    doMix();
  });
}

document
  .querySelectorAll("input[type=checkbox]")
  .forEach(cb => cb.addEventListener("change", applyToggles));

applyToggles();
