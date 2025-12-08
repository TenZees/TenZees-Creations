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
  return Array.from({ length: 5 }, () =>
    "#" + Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
  );
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
  if (document.getElementById("toggle-palette").checked) {
    const box = document.querySelector(".value-palette");
    const palette = generatePalette();

    box.innerHTML = `
      <div class="palette-swatches">
        ${palette
          .map(color => {
            const textColor =
              parseInt(color.slice(1), 16) < 0x888888 ? "#fff" : "#333";
            return `<div class="swatch" style="background:${color};color:${textColor}">${color}</div>`;
          })
          .join("")}
      </div>
    `;
  }

  if (document.getElementById("toggle-object").checked)
    document.querySelector(".value-object").textContent =
      pickFromData("objects");

  if (document.getElementById("toggle-location").checked)
    document.querySelector(".value-location").textContent =
      pickFromData("locations");

  if (document.getElementById("toggle-theme").checked)
    document.querySelector(".value-theme").textContent =
      pickFromData("themes");

  if (document.getElementById("toggle-mood").checked)
    document.querySelector(".value-mood").textContent =
      pickFromData("moods");

  if (document.getElementById("toggle-art").checked)
    document.querySelector(".value-art").textContent =
      pickFromData("artStyles");

  if (document.getElementById("toggle-season").checked)
    document.querySelector(".value-season").textContent =
      pickFromData("seasons");

  if (document.getElementById("toggle-person").checked)
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
