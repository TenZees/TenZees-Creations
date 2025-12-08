// ===============================
// Mixer JS v2 - works with toggles & color swatches
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
const toggles = {
    palette: document.getElementById("toggle-palette"),
    object: document.getElementById("toggle-object"),
    location: document.getElementById("toggle-location"),
    theme: document.getElementById("toggle-theme"),
    mood: document.getElementById("toggle-mood"),
    art: document.getElementById("toggle-art"),
    season: document.getElementById("toggle-season"),
    person: document.getElementById("toggle-person")
};

// CARD ELEMENTS
const cards = {
    palette: document.getElementById("card-palette"),
    object: document.getElementById("card-object"),
    location: document.getElementById("card-location"),
    theme: document.getElementById("card-theme"),
    mood: document.getElementById("card-mood"),
    art: document.getElementById("card-art"),
    season: document.getElementById("card-season"),
    person: document.getElementById("card-person")
};

// MIX BUTTON
const mixBtn = document.getElementById("mix-btn");

// HELPER: Pick random from array
function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// FUNCTION: Generate color swatches
function generateColorPalette(arr) {
    return arr.map(color => `<span class="swatch" style="background-color: ${color}"></span>`).join('');
}

// FUNCTION: Mix Elements
function mixElements() {
    // Palette
    if (toggles.palette.checked) {
        const paletteColors = [pickRandom(colors), pickRandom(colors), pickRandom(colors)];
        cards.palette.querySelector(".value-palette").innerHTML = generateColorPalette(paletteColors);
        cards.palette.style.display = "block";
    } else {
        cards.palette.style.display = "none";
    }

    // Object
    if (toggles.object.checked) {
        cards.object.querySelector(".value-object").textContent = pickRandom(objects);
        cards.object.style.display = "block";
    } else {
        cards.object.style.display = "none";
    }

    // Location
    if (toggles.location.checked) {
        cards.location.querySelector(".value-location").textContent = pickRandom(locations);
        cards.location.style.display = "block";
    } else {
        cards.location.style.display = "none";
    }

    // Theme
    if (toggles.theme.checked) {
        cards.theme.querySelector(".value-theme").textContent = pickRandom(themes);
        cards.theme.style.display = "block";
    } else {
        cards.theme.style.display = "none";
    }

    // Mood
    if (toggles.mood.checked) {
        cards.mood.querySelector(".value-mood").textContent = pickRandom(moods);
        cards.mood.style.display = "block";
    } else {
        cards.mood.style.display = "none";
    }

    // Art Style
    if (toggles.art.checked) {
        cards.art.querySelector(".value-art").textContent = pickRandom(artStyles);
        cards.art.style.display = "block";
    } else {
        cards.art.style.display = "none";
    }

    // Season
    if (toggles.season.checked) {
        cards.season.querySelector(".value-season").textContent = pickRandom(seasons);
        cards.season.style.display = "block";
    } else {
        cards.season.style.display = "none";
    }

    // Person
    if (toggles.person.checked) {
        cards.person.querySelector(".value-person").textContent = pickRandom(characters);
        cards.person.style.display = "block";
    } else {
        cards.person.style.display = "none";
    }
}

// EVENT LISTENER
mixBtn.addEventListener("click", mixElements);
