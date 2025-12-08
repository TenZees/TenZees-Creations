// ===============================
// Mixer JS
// ===============================

// ELEMENT DATA
const colors = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#FF6EC7", "#00C2A0", "#FF9F1C"];
const objects = ["Crystal", "Bottle", "Key", "Feather", "Book", "Candle", "Mask"];
const locations = ["Forest", "Desert", "City", "Mountain", "Beach", "Cave", "Castle"];
const themes = ["Fantasy", "Cyberpunk", "Steampunk", "Gothic", "Nature", "Post-Apocalyptic"];
const moods = ["Happy", "Calm", "Exciting", "Spooky", "Sad", "Energetic"];
const artStyles = ["Pixel", "Digital", "Watercolor", "Illustration", "3D", "Sketch"];
const seasons = ["Spring", "Summer", "Autumn", "Winter", "Halloween", "Christmas"];
const characters = ["Elf", "Robot", "Dragon", "Ghost", "Witch", "Pirate"];

// CHECKBOX ELEMENTS
const togglePalette = document.getElementById("toggle-palette");
const toggleObject = document.getElementById("toggle-object");
const toggleLocation = document.getElementById("toggle-location");
const toggleTheme = document.getElementById("toggle-theme");
const toggleMood = document.getElementById("toggle-mood");
const toggleArt = document.getElementById("toggle-art");
const toggleSeason = document.getElementById("toggle-season");
const togglePerson = document.getElementById("toggle-person");

// CARD ELEMENTS
const cardPalette = document.querySelector(".value-palette");
const cardObject = document.querySelector(".value-object");
const cardLocation = document.querySelector(".value-location");
const cardTheme = document.querySelector(".value-theme");
const cardMood = document.querySelector(".value-mood");
const cardArt = document.querySelector(".value-art");
const cardSeason = document.querySelector(".value-season");
const cardPerson = document.querySelector(".value-person");

// MIX BUTTON
const mixBtn = document.getElementById("mix-btn");

// HELPER: Pick random from array
function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// FUNCTION: Mix Elements
function mixElements() {
    if (togglePalette.checked) {
        const palette = `${pickRandom(colors)}, ${pickRandom(colors)}, ${pickRandom(colors)}`;
        cardPalette.textContent = palette;
        cardPalette.parentElement.classList.add("flash");
    }
    if (toggleObject.checked) {
        cardObject.textContent = pickRandom(objects);
        cardObject.parentElement.classList.add("flash");
    }
    if (toggleLocation.checked) {
        cardLocation.textContent = pickRandom(locations);
        cardLocation.parentElement.classList.add("flash");
    }
    if (toggleTheme.checked) {
        cardTheme.textContent = pickRandom(themes);
        cardTheme.parentElement.classList.add("flash");
    }
    if (toggleMood.checked) {
        cardMood.textContent = pickRandom(moods);
        cardMood.parentElement.classList.add("flash");
    }
    if (toggleArt.checked) {
        cardArt.textContent = pickRandom(artStyles);
        cardArt.parentElement.classList.add("flash");
    }
    if (toggleSeason.checked) {
        cardSeason.textContent = pickRandom(seasons);
        cardSeason.parentElement.classList.add("flash");
    }
    if (togglePerson.checked) {
        cardPerson.textContent = pickRandom(characters);
        cardPerson.parentElement.classList.add("flash");
    }

    // Remove flash after animation
    setTimeout(() => {
        document.querySelectorAll(".result-card").forEach(card => {
            card.classList.remove("flash");
        });
    }, 500);
}

// EVENT LISTENER
mixBtn.addEventListener("click", mixElements);
