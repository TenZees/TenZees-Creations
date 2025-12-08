/* =================================================
   CENTRAL DATA SOURCE
   This is where all the different data categories
   like objects, locations, themes, moods, etc., are
   stored for easy access and mixing.
================================================= */
export const DATA = {

  /* ========================
     OBJECTS
     A list of objects that can be randomly selected for mixing.
  ======================== */
  objects: [
    "Lantern", "Key", "Feather", "Crystal", "Mask", "Compass",
    "Hourglass", "Ancient Coin", "Broken Sword", "Glowing Orb",
    "Leather Journal", "Sealed Scroll", "Wax Candle", "Glass Bottle",
    "Magnifying Lens", "Pocket Watch", "Rusty Locket", "Silver Ring",
    "Bronze Shield", "Iron Helmet", "Ceremonial Dagger", "Enchanted Amulet",
    "Runestone", "Music Box", "Wind Chime", "Dream Catcher", "Mechanical Gear",
    "Clockwork Key", "Steam Valve", "Brass Goggles", "Pressure Gauge",
    "Copper Pipe", "Automaton Hand", "Flickering Hologram", "Energy Cell",
    "Data Chip", "Neural Implant", "Worn Backpack", "Explorer’s Map",
    "Rope Coil", "Grappling Hook", "Lockpick Set", "Signal Flare",
    "Binoculars", "Field Compass", "Survival Knife", "Crystal Shard", 
    "Potion Vial", "Herbal Satchel", "Phoenix Feather", "Dragon Scale",
    "Wizard Hat", "Spell Tome", "Arcane Focus", "Ritual Chalice",
    "Summoning Bell", "Ceramic Bowl", "Stone Tablet", "Carved Idol",
    "Golden Scarab", "Hieroglyph Seal", "Ivory Comb", "Jeweled Crown",
    "Royal Scepter", "Embroidered Banner", "Ancient Relic", "Mirror Shard",
    "Music Flute", "Calligraphy Brush", "Ink Bottle", "Wooden Puppet",
    "Paper Crane", "Snow Globe", "Star Chart", "Astral Compass", "Void Fragment"
  ],

  /* ========================
     LOCATIONS
     A list of various locations that can be randomly selected.
  ======================== */
  locations: [
    "Forest", "Temple", "Castle Gate", "Marketplace", "Harbor",
    "Ancient Ruins", "Hidden Cave", "Mountain Pass", "Abandoned Village",
    "Underground Catacombs", "Desert Oasis", "Frozen Tundra", "Sunken Shipwreck",
    "Cliffside Path", "Sacred Grove", "Royal Courtyard", "Forgotten Library",
    "Arcane Tower", "Sealed Vault", "Crystal Cavern", "Lava Fields", "Ashen Wasteland",
    "Twilight Meadow", "Whispering Woods", "Haunted Marsh", "Clockwork City",
    "Steam Factory", "Gearworks District", "Inventor’s Workshop", "Skybridge", 
    "Floating Market", "Neon Alley", "Cyber Plaza", "Data Core", "Undercity Slums",
    "Moonlit Beach", "Coral Reef", "Storm Coast", "Fogbound Island", "Iceberg Shelf",
    "Hidden Lagoon", "Waterfall Basin", "River Delta", "Mangrove Swamp", "Salt Flats",
    "Sacrificial Altar", "Sun Temple", "Obsidian Pyramid", "Burial Chamber",
    "Sandstone Canyon", "Caravan Route", "Nomad Encampment", "Ancient Road", 
    "Lost City", "Golden Palace", "Abandoned Observatory", "Starfall Crater",
    "Astral Plane", "Void Nexus", "Dimensional Rift", "Time-Locked Zone",
    "Reality Fracture", "Echo Chamber", "Memory Archive", "Dreamscape", "Snowy Hamlet",
    "Icy Fjord", "Northern Stronghold", "Glacier Cave", "Frozen Ruins", "Blizzard Plains",
    "Aurora Valley", "Ice Fortress", "Seal Hunters’ Camp", "Polar Outpost", "Border Checkpoint",
    "Trade Crossroads", "Railway Terminal", "Abandoned Station", "Old Lighthouse",
    "Smuggler’s Cove", "Hidden Passage", "Forgotten Tunnel", "Collapsed Bridge", 
    "Edge of the World"
  ],

  /* ========================
     THEME
     A list of themes that can be randomly selected.
  ======================== */
  themes: [
    "Viking", "Cyberpunk", "Witchcraft", "Egyptian", "Steampunk",
    "Ancient Greek", "Ancient Roman", "Norse Mythology", "Celtic Mythology", 
    "Aztec", "Mayan", "Incan", "Mesopotamian", "Persian", "Babylonian",
    "Samurai", "Feudal Japan", "Edo Period", "Shinto", "Chinese Mythology", 
    "Korean Folklore", "Mongolian", "Silk Road", "Himalayan", "Tibetan",
    "Medieval Fantasy", "High Fantasy", "Dark Fantasy", "Low Fantasy", "Fairy Tale",
    "Grimdark", "Arthurian", "Elven", "Dwarven", "Dragon Lore", "Solarpunk", 
    "Dieselpunk", "Atompunk", "Biopunk", "Post-Apocalyptic", "Retro Futurism",
    "Hard Sci-Fi", "Space Opera", "Interstellar", "Alien Civilization", "Lovecraftian",
    "Cosmic Horror", "Eldritch", "Occult", "Ritual Magic", "Necromancy", "Blood Magic",
    "Forbidden Knowledge", "Dark Academia", "Gothic", "Victorian", "Edwardian", 
    "Industrial Revolution", "Belle Époque", "Art Nouveau", "Art Deco", "Jazz Age",
    "Roaring Twenties", "Noir", "Film Noir", "Western", "Frontier", "Colonial Era", 
    "Age of Exploration", "Maritime", "Pirate", "Golden Age of Sail", "Nautical Myth", 
    "Whaling Era", "Harbor Town", "Cozy Fantasy", "Cottagecore", "Dark Cottagecore", 
    "Pastoral", "Whimsical", "Storybook", "Children’s Fantasy", "Magical Realism",
    "Mythic Realism", "Urban Fantasy", "Dreamlike", "Surreal", "Abstract", "Psychedelic",
    "Glitchcore", "Vaporwave", "Weirdcore", "Liminal Space", "Dreamcore", "Trance State",
    "Gothic", "High Gothic", "Dark Gothic", "Neo-Gothic", "Romantic Gothic", "Victorian Gothic",
    "Edwardian Gothic", "Gaslight Gothic", "Industrial Gothic", "Cathedral Gothic", "Monastic Gothic",
    "Abbey Ruins", "Catacomb Gothic", "Funereal Gothic", "Gothic Horror", "Literary Gothic",
    "Southern Gothic", "Nordic Gothic", "Urban Gothic", "Baroque Gothic", "Rococo Gothic",
    "Black Romanticism", "Decadent Gothic", "Vampiric", "Nocturnal", "Midnight Court",
    "Bloodlit Romance", "Haunted Aristocracy", "Fallen Nobility", "Ancient Lineage", 
    "Rotting Grandeur", "Dark Chapel", "Bell Tower Shadows", "Stained Glass Dreams", "Raven Court", 
    "Graveyard Elegy", "Fogbound Streets", "Churchyard Mystery", "Candlelit Catacombs", 
    "Occult Gothic", "Ritual Gothic", "Forbidden Abbey", "Monastery of Secrets", 
    "Moonlit Ruins", "Echoes of the Dead", "Whispering Corridors", "Veiled Mourning"
  ],

  /* ========================
     PALETTE DATA SOURCE
     Color palettes used to generate random colors for the mixing. 
     Each palette has a name and an array of colors.
  ======================== */
  palettes: [
    {
      name: "Gothic Rose",
      colors: ["#1B1B3A", "#3A0F2E", "#6D2E46", "#A23B72", "#E2C2C6"]
    },
    {
      name: "Cathedral Glass",
      colors: ["#2E2A4F", "#4E4A8C", "#8E9AAF", "#C9ADA7", "#F2E9E4"]
    },
    {
      name: "Neon Alley",
      colors: ["#0B0C10", "#1F2833", "#66FCF1", "#45A29E", "#C5C6C7"]
    },
    {
      name: "Witching Hour",
      colors: ["#120F2E", "#3A1C71", "#6D2E8D", "#A24FCF", "#E4C1F9"]
    },
    {
      name: "Old Manuscript",
      colors: ["#2B1D0E", "#5A3E2B", "#8C6E54", "#C2A878", "#EFE6D8"]
    },
    {
      name: "Blood Cathedral",
      colors: ["#0B0A0F", "#2A0F14", "#5A1C22", "#8E2F39", "#E6A4A8"]
    },
    {
      name: "Mystic Fog",
      colors: ["#3E5A80", "#6B8E8D", "#9AC4D8", "#B9A9C7", "#E0D1DB"]
    },
    {
      name: "Sunset Boulevard",
      colors: ["#FAD02E", "#F28D35", "#D83367", "#F2A7B4", "#9A5C6D"]
    }
  ]
};
