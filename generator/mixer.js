// DATA LISTS
const OBJECTS = ["Lantern", "Key", "Feather", "Crystal", "Mask", "Compass"];
const LOCATIONS = ["Forest", "Temple", "Castle Gate", "Marketplace", "Harbor"];
const THEMES = ["Viking", "Cyberpunk", "Witchcraft", "Egyptian", "Steampunk"];
const MOODS  = ["Serene", "Chaotic", "Cozy", "Mysterious", "Energetic"];
const ART    = ["Pixel", "Watercolor", "Oil Paint", "Sketch", "Low Poly"];
const SEASON = ["Spring", "Summer", "Halloween", "Winter", "New Year"];
const PERSON = ["Knight", "Scientist", "Wizard", "Villager", "Explorer"];

// Random helper
function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

// Palette generator
function generatePalette() {
  const colors = [];
  for (let i = 0; i < 5; i++) {
    const c = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6,"0");
    colors.push(c);
  }
  return colors;
}

// Apply toggle visibility
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
    const on = document.getElementById(toggleId).checked;
    const card = document.getElementById(cardId);
    card.classList.toggle("card-hidden", !on);
  });
}

// FLASH animation
function flash(card) {
  card.classList.add("flash");
  setTimeout(() => card.classList.remove("flash"), 250);
}

// MIX MAIN FUNCTION
function doMix() {
  // PALETTE
if (document.getElementById("toggle-palette").checked) {
  const palette = generatePalette();
  const box = document.querySelector(".value-palette");

  box.innerHTML = `
    <div class="palette-swatches">
      ${palette.map(c => {
        const value = parseInt(c.slice(1), 16);
        const textColor = value < 0x888888 ? "#fff" : "#333";

        return `
          <div class="swatch" style="background:${c}; color:${textColor}">
            ${c.toUpperCase()}
          </div>
        `;
      }).join("")}
    </div>
  `;

  flash(document.getElementById("card-palette"));
}


  // OBJECT
  if (document.getElementById("toggle-object").checked) {
    document.querySelector(".value-object").textContent = pick(OBJECTS);
    flash(document.getElementById("card-object"));
  }

  // LOCATION
  if (document.getElementById("toggle-location").checked) {
    document.querySelector(".value-location").textContent = pick(LOCATIONS);
    flash(document.getElementById("card-location"));
  }

  // THEME
  if (document.getElementById("toggle-theme").checked) {
    document.querySelector(".value-theme").textContent = pick(THEMES);
    flash(document.getElementById("card-theme"));
  }

  // MOOD
  if (document.getElementById("toggle-mood").checked) {
    document.querySelector(".value-mood").textContent = pick(MOODS);
    flash(document.getElementById("card-mood"));
  }

  // ART STYLE
  if (document.getElementById("toggle-art").checked) {
    document.querySelector(".value-art").textContent = pick(ART);
    flash(document.getElementById("card-art"));
  }

  // SEASON
  if (document.getElementById("toggle-season").checked) {
    document.querySelector(".value-season").textContent = pick(SEASON);
    flash(document.getElementById("card-season"));
  }

  // PERSON
  if (document.getElementById("toggle-person").checked) {
    document.querySelector(".value-person").textContent = pick(PERSON);
    flash(document.getElementById("card-person"));
  }
}

// BUTTON + TOGGLES
document.getElementById("mix-btn").addEventListener("click", doMix);

[
  "toggle-palette","toggle-object","toggle-location","toggle-theme",
  "toggle-mood","toggle-art","toggle-season","toggle-person"
].forEach(id => {
  document.getElementById(id).addEventListener("change", applyToggles);
});

// initial update
applyToggles();
