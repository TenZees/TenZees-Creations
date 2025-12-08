import { DATA } from "./data.js";

/* =================================================
   HELPERS
================================================= */
function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function pickFromData(key) {
  return pick(DATA[key]);
}

function generatePalette() {
  return Array.from({ length: 5 }, () =>
    "#" + Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
  );
}

/* =================================================
   TOGGLES
================================================= */
function applyToggles() {
  const map = [
    ["toggle-palette", "card-palette"],
    ["toggle-object", "card-object"],
    ["toggle-location", "card-location"],
    ["toggle-theme", "card-theme"],
    ["toggle-mood", "card-mood"],
    ["toggle-art", "card-art"],
    ["toggle-season", "card-season"],
    ["toggle-person", "card-person"]
  ];

  map.forEach(([toggleId, cardId]) => {
    const toggle = document.getElementById(toggleId);
    const card = document.getElementById(cardId);
    card.classList.toggle("card-hidden", !toggle.checked);
  });
}

/* =================================================
   MIX LOGIC
================================================= */
function doMix() {
  const toggle_palette  = document.getElementById("toggle-palette");
  const toggle_object   = document.getElementById("toggle-object");
  const toggle_location = document.getElementById("toggle-location");
  const toggle_theme    = document.getElementById("toggle-theme");
  const toggle_mood     = document.getElementById("toggle-mood");
  const toggle_art      = document.getElementById("toggle-art");
  const toggle_season   = document.getElementById("toggle-season");
  const toggle_person   = document.getElementById("toggle-person");

  // COLOR PALETTE
  if (toggle_palette.checked) {
    const box = document.querySelector(".value-palette");
    const palette = generatePalette();

    box.innerHTML = `
      <div class="palette-swatches">
        ${palette
          .map(color => {
            const textColor =
              parseInt(color.slice(1), 16) < 0x888888 ? "#fff" : "#333";
            return `
              <div class="swatch" style="background:${color}; color:${textColor}">
                ${color}
              </div>
            `;
          })
          .join("")}
      </div>
    `;
  }

  if (toggle_object.checked)
    document.querySelector(".value-object").textContent =
      pickFromData("objects");

  if (toggle_location.checked)
    document.querySelector(".value-location").textContent =
      pickFromData("locations");

  if (toggle_theme.checked)
    document.querySelector(".value-theme").textContent =
      pickFromData("themes");

  if (toggle_mood.checked)
    document.querySelector(".value-mood").textContent =
      pickFromData("moods");

  if (toggle_art.checked)
    document.querySelector(".value-art").textContent =
      pickFromData("artStyles");

  if (toggle_season.checked)
    document.querySelector(".value-season").textContent =
      pickFromData("seasons");

  if (toggle_person.checked)
    document.querySelector(".value-person").textContent =
      pickFromData("people");
}

/* =================================================
   EVENTS
================================================= */
document.getElementById("mix-btn").addEventListener("click", doMix);

document
  .querySelectorAll("input[type=checkbox]")
  .forEach(cb => cb.addEventListener("change", applyToggles));

applyToggles();
