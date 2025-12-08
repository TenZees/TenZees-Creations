const OBJECTS = ["Lantern", "Key", "Feather", "Crystal", "Mask", "Compass"];
const LOCATIONS = ["Forest", "Temple", "Castle Gate", "Marketplace", "Harbor"];
const THEMES = ["Viking", "Cyberpunk", "Witchcraft", "Egyptian", "Steampunk"];
const MOODS = ["Serene", "Chaotic", "Cozy", "Mysterious", "Energetic"];
const ART = ["Pixel", "Watercolor", "Oil Paint", "Sketch", "Low Poly"];
const SEASON = ["Spring", "Summer", "Halloween", "Winter", "New Year"];
const PERSON = ["Knight", "Scientist", "Wizard", "Villager", "Explorer"];

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generatePalette() {
  return Array.from({ length: 5 }, () =>
    "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")
  );
}

function applyToggles() {
  [
    ["toggle-palette", "card-palette"],
    ["toggle-object", "card-object"],
    ["toggle-location", "card-location"],
    ["toggle-theme", "card-theme"],
    ["toggle-mood", "card-mood"],
    ["toggle-art", "card-art"],
    ["toggle-season", "card-season"],
    ["toggle-person", "card-person"]
  ].forEach(([t, c]) =>
    document.getElementById(c).classList.toggle(
      "card-hidden",
      !document.getElementById(t).checked
    )
  );
}

function doMix() {
  if (toggle_palette.checked) {
    const box = document.querySelector(".value-palette");
    box.innerHTML = `
      <div class="palette-swatches">
        ${generatePalette()
          .map(
            c =>
              `<div class="swatch" style="background:${c};color:${parseInt(
                c.slice(1),
                16
              ) < 0x888888 ? "#fff" : "#333"}">${c}</div>`
          )
          .join("")}
      </div>`;
  }

  if (toggle_object.checked) document.querySelector(".value-object").textContent = pick(OBJECTS);
  if (toggle_location.checked) document.querySelector(".value-location").textContent = pick(LOCATIONS);
  if (toggle_theme.checked) document.querySelector(".value-theme").textContent = pick(THEMES);
  if (toggle_mood.checked) document.querySelector(".value-mood").textContent = pick(MOODS);
  if (toggle_art.checked) document.querySelector(".value-art").textContent = pick(ART);
  if (toggle_season.checked) document.querySelector(".value-season").textContent = pick(SEASON);
  if (toggle_person.checked) document.querySelector(".value-person").textContent = pick(PERSON);
}

document.getElementById("mix-btn").addEventListener("click", doMix);
document.querySelectorAll("input[type=checkbox]").forEach(cb =>
  cb.addEventListener("change", applyToggles)
);

applyToggles();
