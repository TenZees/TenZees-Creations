// Sample data lists
const colorPalettes = [
  "Cotton Candy Pastels", "Muted Earth Tones", "Neon Cyberpunk",
  "Vintage Sepia", "Monochrome Blues", "Lavender Dream"
];

const objects = [
  "Pocket Watch", "Rusty Key", "Glass Jar",
  "Bottle Cap (Worn Post-Apoc)", "Vintage Camera"
];

const locations = [
  "Abandoned Train Station", "Hidden Alley Market",
  "Forest Ruins", "Cozy Attic", "Foggy Harbor"
];

// Toggle → Target Card Map
const fields = [
  { toggle: "tog-color", valueId: "val-color", list: colorPalettes },
  { toggle: "tog-object", valueId: "val-object", list: objects },
  { toggle: "tog-location", valueId: "val-location", list: locations }
];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Mix Button
document.getElementById("mixBtn").addEventListener("click", () => {
  fields.forEach(f => {
    const toggle = document.getElementById(f.toggle);
    const display = document.getElementById(f.valueId);

    if (toggle.checked) {
      display.textContent = getRandom(f.list);
      display.style.opacity = "1";
    } else {
      display.textContent = "Disabled";
      display.style.opacity = "0.6";
    }
  });
});

// Reset state when toggles change
document.querySelectorAll(".toggle input").forEach(toggle => {
  toggle.addEventListener("change", () => {
    fields.forEach(f => {
      const check = document.getElementById(f.toggle);
      const display = document.getElementById(f.valueId);
      if (!check.checked) {
        display.textContent = "Disabled";
      } else {
        display.textContent = "Ready to roll...";
      }
    });
  });
});
