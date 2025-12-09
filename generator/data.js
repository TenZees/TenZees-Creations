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
     THEMES
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
     MOODS
     A list of moods that can be randomly selected.
  ======================== */
  moods: [
    "Serene", "Chaotic", "Cozy", "Mysterious", "Energetic", "Melancholic", "Ethereal", 
    "Somber", "Tranquil", "Haunting", "Dreamy", "Foreboding", "Whimsical", "Introspective", 
    "Nostalgic", "Tense", "Brooding", "Anxious", "Unsettling", "Suspenseful", "Oppressive", 
    "Claustrophobic", "Paranoid", "Dreadful", "Uneasy", "Romantic", "Bittersweet", "Tender", 
    "Longing", "Yearning", "Soft", "Warm", "Affectionate", "Heartfelt", "Comforting", "Eerie",
    "Sinister", "Macabre", "Morbid", "Creeping", "Nocturnal", "Shadowy", "Funereal", "Grim", 
    "Bleak", "Epic", "Heroic", "Triumphant", "Mythic", "Legendary", "Grand", "Majestic", 
    "Awe-Inspiring", "Monumental", "Cinematic", "Playful", "Lighthearted", "Quirky", "Cheerful", 
    "Bubbly", "Silly", "Joyful", "Lively", "Upbeat", "Optimistic", "Surreal", "Abstract", 
    "Hypnotic", "Disorienting", "Otherworldly", "Psychedelic", "Hallucinatory", "Liminal", 
    "Trance-like", "Unreal"
  ],

  /* ========================
     ART STYLES
     A list of art styles that can be randomly selected.
  ======================== */
  artStyles: [
    "Pixel", "Watercolor", "Oil Paint", "Sketch", "Low Poly", "Charcoal Drawing", "Ink Illustration", 
    "Line Art", "Cross-Hatching", "Graphite Drawing", "Digital Painting", "Concept Art", "Matte Painting", 
    "Photobashing", "Illustrative Realism", "Impressionist", "Expressionist", "Surrealist", "Abstract", 
    "Cubist", "Gothic Illustration", "Dark Fantasy", "Grimdark", "Occult Art", "Macabre Illustration", 
    "Anime", "Manga", "Chibi", "Visual Novel Style", "Cel Shaded", "Vaporwave", "Synthwave", "Cyberpunk Neon", 
    "Glitch Art", "Datamosh", "Minimalist", "Flat Design", "Geometric", "Monoline", "Modernist", 
    "Fantasy Illustration", "High Fantasy", "Mythological Art", "Epic Fantasy", "Storybook Illustration", 
    "Art Nouveau", "Art Deco", "Victorian Illustration", "Baroque", "Rococo", "Collage", "Mixed Media", 
    "Assemblage", "Paper Cutout", "Found Object Art", "Graffiti", "Street Art", "Stencil Art", "Spray Paint", 
    "Urban Illustration", "Photorealistic", "Hyperrealism", "Cinematic Lighting", "Dramatic Lighting", 
    "Volumetric Lighting", "Isometric", "Blueprint Style", "Technical Illustration", "Architectural Rendering", 
    "Game Asset Style", "Pop Art", "Retro Poster", "Comic Book Style", "Graphic Novel", "Screen Print"
  ],

  /* ========================
     SEASONS / HOLIDAY
     A list of seasons and holidays that can be randomly selected.
  ======================== */
  seasons: [
    "Spring", "Summer", "Halloween", "Winter", "New Year", "Early Spring", "Late Spring", "High Summer",
    "Late Summer", "Early Autumn", "Mid Autumn", "Late Autumn", "Early Winter", "Mid Winter", "Late Winter",
    "Harvest Season", "Monsoon Season", "Dry Season", "Wet Season", "Storm Season", "Hurricane Season", 
    "Blizzard Season", "Heatwave", "Cold Snap", "Frost Season", "Autumn Equinox", "Spring Equinox", "Summer Solstice",
    "Winter Solstice", "Day of the Dead", "All Souls’ Night", "Samhain", "Yule", "Beltane", "Lunar New Year", 
    "Valentine’s Day", "Easter", "Thanksgiving", "Christmas Eve", "Christmas Morning", "Midnight Mass", 
    "New Year’s Eve", "Festival of Lights", "Carnival", "Mardi Gras", "Golden Hour", "Blue Hour", "Twilight",
    "Dusk", "Dawn", "Midnight", "Witching Hour", "Long Night", "Endless Day", "Eternal Sunset", "Blood Moon", 
    "Harvest Moon", "Full Moon", "New Moon", "Lunar Eclipse", "Solar Eclipse", "Meteor Shower", "Stargazing Night",
    "Aurora Season", "Comet Passing", "Fog Season", "Rainy Evening", "Snowfall", "First Snow", "Last Snow", 
    "Falling Leaves", "Bloom Season", "Thaw", "Freeze", "After the Storm"
  ],

  /* ========================
     PEOPLE
     A list of different characters, professions, and roles that can be randomly selected.
  ======================== */
  people: [
    "Knight", "Scientist", "Wizard", "Villager", "Explorer", "Alchemist", "Necromancer", "Summoner", 
    "Warlock", "Enchantress", "Sorcerer", "Witch", "Rune Keeper", "Spellblade", "Oracle", "Assassin", "Mercenary",
    "Bounty Hunter", "Rogue", "Thief", "Smuggler", "Pirate", "Corsair", "Privateer", "Outlaw", "Monk", "Priest",
    "Inquisitor", "Cultist", "Zealot", "Prophet", "Heretic", "Exorcist", "Confessor", "Acolyte", "King", "Queen",
    "Prince", "Princess", "Duke", "Empress", "Regent", "Noble", "Courtier", "Diplomat", "Blacksmith", "Armorer",
    "Cartographer", "Scholar", "Librarian", "Scribe", "Engineer", "Inventor", "Clockmaker", "Artificer", "Hunter",
    "Tracker", "Ranger", "Beastmaster", "Falconer", "Druid", "Herbalist", "Shaman", "Warden", "Pathfinder", 
    "Detective", "Inspector", "Archivist", "Historian", "Anthropologist", "Professor", "Researcher", "Archaeologist",
    "Linguist", "Theorist", "Android", "Cyborg", "Clone", "AI Entity", "Synthetic Being", "Time Traveler", 
    "Dimension Hopper", "Reality Walker", "Void Wanderer", "Starseer", "Renaissance Polymath (Leonardo da Vinci-inspired)", 
    "Civil Rights Leader", "Freedom Fighter Poet", "Philosopher of Reason", "Enlightenment Scientist", 
    "Pioneering Mathematician", "Abolitionist Speaker", "Women’s Rights Activist", "Labor Movement Organizer",
    "Peace Negotiator", "Romantic Era Poet", "Modernist Novelist", "Surrealist Painter", "Visionary Playwright", 
    "Political Satirist", "Beat Generation Writer", "Queer Memoirist", "Poet of Resistance", "Experimental Filmmaker", 
    "Counterculture Artist", "Computing Pioneer", "Space Race Engineer", "Astrophysicist Communicator", 
    "Medical Breakthrough Researcher", "Environmental Scientist", "Climate Activist Scientist", "AI Ethics Researcher", 
    "Physics Educator", "Biotech Innovator", "Accessibility Technology Designer", "Gender-Bending Rock Icon",
    "Soul Music Trailblazer", "Jazz Revolutionary", "Folk Protest Singer", "Disco Era Icon", "Electronic Music Pioneer", 
    "Queer Pop Superstar", "Theatrical Performance Artist", "Avant-Garde Composer", "Ballroom Scene Legend", 
    "Classic Hollywood Rebel", "Method Acting Icon", "Indie Film Star", "Queer Cinema Pioneer", "Genre-Breaking Actor", 
    "Sci-Fi Franchise Hero", "Award-Winning Character Actor", "Experimental Theatre Performer", 
    "International Art-House Star", "Stage-to-Screen Visionary", "LGBTQ+ Rights Activist", "Trans Rights Advocate",
    "Intersectional Feminist Leader", "Anti-Apartheid Organizer", "Humanitarian Organizer", "Refugee Rights Advocate", 
    "Disability Rights Activist", "Youth Climate Organizer", "Grassroots Community Builder", "Nonviolent Resistance Leader"
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
      name: "Vampire Kiss",
      colors: ["#7A0820", "#480E1A", "#DBC9C4", "#3C1A3F", "#0E0810"]
    },
    {
      name: "Cathedral Glass",
      colors: ["#2E2A4F", "#4E4A8C", "#8E9AAF", "#C9ADA7", "#F2E9E4"]
    },
    {
      name: "Enchanted Orchid Mist",
      colors: ["#B6BBC8", "#5A2E63", "#E8DDCB", "#2C2322", "#4C857F"]
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
    name: "Jewel Berry Muffin",
    colors: ["#B83374", "#283B80", "#F4D7B2", "#4D1E52", "#F8F2ED"]
  },
  {
    name: "Tropical Frost",
    colors: ["#F5C344", "#2FB8B2", "#D9F2A3", "#86D4E8", "#F7FBFF"]
  },
  {
    name: "Winter Wonderland",
    colors: ["#A7CBEF", "#FFFFFF", "#D7D5F5", "#3A4E52", "#CED7DD"]
  },
  {
    name: "Character’s Chaos",
    colors: ["#FF3F61", "#7CF23A", "#2C7CFF", "#FFD93B", "#1A1A1A"]
  },
  {
    name: "Say No More",
    colors: ["#2D2D2E", "#8C7468", "#C7BBAF", "#E6E3DE", "#FFFFFF"]
  },
  {
    name: "Dream’s Embrace",
    colors: ["#E7D7F7", "#F6C9D8", "#B9CCE9", "#D9DDE4", "#C6A9E1"]
  },
  {
    name: "Retro Night",
    colors: ["#FF2E82", "#4B00A5", "#22D7F2", "#742EEC", "#0A0F27"]
  },
  {
    name: "War Rust",
    colors: ["#B56A33", "#3F3F3F", "#D2A547", "#6C7B52", "#8E8E8E"]
  },
  {
    name: "Kingdom of Demon Wings",
    colors: ["#A10A1D", "#1A0F1B", "#2F1E32", "#F05B3E", "#4A185C"]
  },
  {
    name: "Turtles Party",
    colors: ["#3FB24C", "#FFC739", "#792CBA", "#2D7F76", "#9DA2A6"]
  },
  {
    name: "Only Ace",
    colors: ["#000000", "#A1A1A1", "#8B2BD4", "#FFFFFF", "#505050"]
  },
  {
    name: "Jester’s Song",
    colors: ["#D3332F", "#F6C847", "#2ABCB2", "#7A40D7", "#2E6FEB"]
  },
  {
    name: "Serenity Dragon",
    colors: ["#AEE5C8", "#C9D5D0", "#3C7764", "#E5DCCF", "#7BB9D4"]
  },
  {
    name: "Twisted Druid",
    colors: ["#5A3517", "#88A737", "#5C3B75", "#2A1A10", "#C5CBB7"]
  },
  {
    name: "Magic Mayhem",
    colors: ["#FF4DAA", "#CFFD3C", "#3BB7FF", "#832EF5", "#FAD24E"]
  },
  {
    name: "Saturn’s Sunset",
    colors: ["#F3C86A", "#F7A87C", "#7A4F9A", "#E8D7C9", "#3B2346"]
  },
  {
    name: "Serene Universe",
    colors: ["#BFD3E3", "#5D6A73", "#F4F7FA", "#D9A4B9", "#8AAFC8"]
  },
  {
    name: "Cupid’s Paradise",
    colors: ["#F2A8B8", "#FFECEA", "#E36C86", "#C93348", "#D3A4E6"]
  },
  {
    name: "Razor’s Edge",
    colors: ["#7C7F86", "#0B0C0E", "#29D7F3", "#C6FF2E", "#D8D8D8"]
  },
  {
    name: "Gemtastic",
    colors: ["#C12E45", "#0D9A6B", "#214CBA", "#F0B43C", "#8F55C8"]
  },
  {
    name: "Mimic’s Taste",
    colors: ["#D4A64A", "#7A2F1C", "#5B4326", "#6C3DA8", "#C9B9A3"]
  },
  {
    name: "Underworld Sunrise",
    colors: ["#FF8A3A", "#1A1A1A", "#D64228", "#8F8A85", "#F56273"]
  },
  {
    name: "Lawn Gnome",
    colors: ["#CC2C34", "#3A9D4E", "#F4F1EE", "#C46E33", "#3D5EBB"]
  },
  {
    name: "Heavy Metal",
    colors: ["#6F7377", "#0C0D0E", "#C4C7CC", "#F5D40E", "#2A9FD6"]
  },
  {
    name: "Folk Art Flow",
    colors: ["#C7443C", "#5A7CD1", "#F2C94D", "#E38A9B", "#F5ECD6"]
  },
  {
    name: "Flash Flood",
    colors: ["#1E6DAA", "#4CC8E8", "#A6B3BA", "#083F67", "#8D7154"]
  },
  {
    name: "Tornado",
    colors: ["#7E7E7E", "#3B3B3B", "#C7B8A3", "#D92427", "#7CA3C4"]
  },
  {
    name: "Tech 101",
    colors: ["#38C978", "#00A4FF", "#111213", "#D7DBDE", "#A48CE3"]
  },
  {
    name: "Rubber Ducky",
    colors: ["#F7D33C", "#6EC7F2", "#F9F8F3", "#F29B32", "#D9472B"]
  },
  {
    name: "Monster Rush",
    colors: ["#7CF05A", "#5A1C7C", "#D22C38", "#2F7BFF", "#111215"]
  },
  {
    name: "Weird & Creepy",
    colors: ["#4B1E3C", "#8EE38A", "#CBC7C3", "#6A35A2", "#2A242A"]
  },
  {
    name: "Rogue of Olympus",
    colors: ["#F2C468", "#EEE4D7", "#516BCE", "#B2343A", "#5E7D3A"]
  },
  {
    name: "Rage Love",
    colors: ["#E02B3E", "#9C1D29", "#514749", "#FF6A8A", "#F89D4F"]
  },
  {
    name: "Eternal Peace",
    colors: ["#E9F4FF", "#AFC9B8", "#EEC9D2", "#D7D8D3", "#8AB3C9"]
  },
  {
    name: "Tree of Life",
    colors: ["#5A3E20", "#6CB452", "#A67142", "#E6C75A", "#7FAEDB"]
  },
  {
    name: "Coffee Addiction",
    colors: ["#3B2419", "#6A4A33", "#F0E8DA", "#C18A4E", "#8AA3B8"]
  },
  {
    name: "Taco Supreme",
    colors: ["#D9382E", "#F7C648", "#6DBE58", "#D7B48A", "#7C4E2F"]
  },
  {
    name: "Alter Ego",
    colors: ["#1A1A1C", "#F5F5F7", "#7A4EE6", "#A5293E", "#7E8085"]
  },
  {
    name: "Mad as a Hatter",
    colors: ["#AEE8C8", "#7C31C7", "#FF9EC5", "#F2C85A", "#3A6CF0"]
  },
  {
    name: "Zip Zap",
    colors: ["#FFE72B", "#FF4FB8", "#36C3FF", "#FDFDFD", "#121314"]
  },
  {
    name: "Valiant Ghoul",
    colors: ["#D7D9E0", "#86C7A1", "#3A5CBF", "#7B3FA1", "#22242A"]
  },

  /* =================================================
   MAJOR ARCANA
  ================================================= */
  {
    name: "The Fool",
    colors: ["#F6EFD3", "#A9D7F8", "#69B87C", "#C6A888", "#FFE45C"]
  },
  {
    name: "The Magician",
    colors: ["#B8363E", "#EED16A", "#F7F7F0", "#8B5C3C", "#87ADEF"]
  },
  {
    name: "The High Priestess",
    colors: ["#E7E2F1", "#4B3A88", "#C5C7D1", "#1B234A", "#C895B9"]
  },
  {
    name: "The Empress",
    colors: ["#7DBA6F", "#E7C45A", "#A06A43", "#F2C7D5", "#F4E9D6"]
  },
  {
    name: "The Emperor",
    colors: ["#C7423D", "#1E1E1F", "#74777B", "#D4B465", "#A91C2A"]
  },
  {
    name: "The Hierophant",
    colors: ["#EFE9D9", "#DFC67A", "#B04743", "#AEABA3", "#677FA8"]
  },
  {
    name: "The Lovers",
    colors: ["#F4B5C7", "#ECCB6A", "#D44D57", "#9A69D8", "#F9F5F0"]
  },
  {
    name: "The Chariot",
    colors: ["#2C6EBE", "#1B1C23", "#E7C85C", "#7F848A", "#C6BBAA"]
  },
  {
    name: "Strength",
    colors: ["#D9A646", "#C9503A", "#A36A3A", "#F3E7D8", "#A0C48A"]
  },
  {
    name: "The Hermit",
    colors: ["#E8D27A", "#A9AAAE", "#6E89A8", "#4E4E54", "#E8E8EB"]
  },
  {
    name: "Wheel of Fortune",
    colors: ["#EBCB67", "#567FB6", "#B03A41", "#C0C4C7", "#7A55A8"]
  },
  {
    name: "Justice",
    colors: ["#4A6BAF", "#F5F5FA", "#B5383F", "#DDBB63", "#6C6D72"]
  },
  {
    name: "The Hanged Man",
    colors: ["#8BAED7", "#E8D88A", "#C4C8CD", "#B44544", "#FAF9F6"]
  },
  {
    name: "Death",
    colors: ["#111112", "#F2F2F2", "#D2C7B7", "#6E4A8F", "#98343A"]
  },
  {
    name: "Temperance",
    colors: ["#8DCBE5", "#F9F9F4", "#E2CF8F", "#EAAE96", "#7CBF9C"]
  },
  {
    name: "The Devil",
    colors: ["#A01624", "#1A1417", "#544F53", "#791C28", "#D6552F"]
  },
  {
    name: "The Tower",
    colors: ["#F6E454", "#C2312C", "#7C7D80", "#826756", "#F7F7F0"]
  },
  {
    name: "The Star",
    colors: ["#87C6F3", "#1E2245", "#F4DB87", "#C8B7F1", "#A4E7EB"]
  },
  {
    name: "The Moon",
    colors: ["#7AA1D9", "#D4D8E0", "#626677", "#F2F4F8", "#363A68"]
  },
  {
    name: "The Sun",
    colors: ["#FFD33E", "#F39A2E", "#FEF9E8", "#8AC76A", "#D4614B"]
  },
  {
    name: "Judgement",
    colors: ["#E5C978", "#6B92C8", "#F7F5F2", "#C14F4A", "#BFC2C7"]
  },
  {
    name: "The World",
    colors: ["#78BEA4", "#6C9BD8", "#8B6B4E", "#E3C967", "#F1EFE9"]
  },

  /* =================================================
   MINOR ARCANA
  ================================================= */
    {
    name: "Ace of Wands",
    colors: ["#F8C15D", "#D64A2A", "#A63A22", "#F3E8D3", "#8C5E33"]
  },
  {
    name: "Two of Wands",
    colors: ["#C7491D", "#F0D179", "#7E3F29", "#E4A656", "#F5EFE4"]
  },
  {
    name: "Three of Wands",
    colors: ["#E87722", "#F4D37A", "#AF542A", "#8B6535", "#F9F3E8"]
  },
  {
    name: "Four of Wands",
    colors: ["#D0522B", "#F5BF5A", "#F2E7D5", "#A4884A", "#7B3B28"]
  },
  {
    name: "Five of Wands",
    colors: ["#BD2E22", "#F9C052", "#6F3B32", "#CE8E41", "#F7EEE2"]
  },
  {
    name: "Six of Wands",
    colors: ["#E07C36", "#F2D784", "#9C4B29", "#A8773D", "#F9F4E9"]
  },
  {
    name: "Seven of Wands",
    colors: ["#A23125", "#E0B958", "#824538", "#C1793B", "#F6ECDC"]
  },
  {
    name: "Eight of Wands",
    colors: ["#F2A45C", "#D64F1E", "#9E402D", "#ECC689", "#FCF2E6"]
  },
  {
    name: "Nine of Wands",
    colors: ["#A53C24", "#F1C06A", "#8C5937", "#C78442", "#EEE4D8"]
  },
  {
    name: "Ten of Wands",
    colors: ["#82351E", "#E8A95B", "#CA7E3B", "#F4D8A2", "#F8F2E9"]
  },
  {
    name: "Page of Wands",
    colors: ["#E86F3A", "#F5C668", "#97412D", "#F6E8C9", "#B27B34"]
  },
  {
    name: "Knight of Wands",
    colors: ["#C4381D", "#F2AB57", "#7E2E24", "#D28A43", "#F4E9DA"]
  },
  {
    name: "Queen of Wands",
    colors: ["#F29A3E", "#D3452B", "#7C3B32", "#F3D07C", "#FAF4EA"]
  },
  {
    name: "King of Wands",
    colors: ["#B43A21", "#E8C46E", "#834839", "#CB9047", "#F8F1E5"]
  },

      {
    name: "Ace of Cups",
    colors: ["#A6D6E5", "#F7F9FA", "#6BA9C5", "#D5E6EA", "#F4C6D8"]
  },
  {
    name: "Two of Cups",
    colors: ["#89C5D8", "#F4DAE6", "#E67B96", "#B3D8E2", "#FFFFFF"]
  },
  {
    name: "Three of Cups",
    colors: ["#72B9D4", "#E7C7DA", "#F6EDEF", "#A06D9D", "#FBBBB3"]
  },
  {
    name: "Four of Cups",
    colors: ["#6BA3BB", "#D9DCE3", "#425A6A", "#F5E9F0", "#B8C5C9"]
  },
  {
    name: "Five of Cups",
    colors: ["#324A5F", "#7C94A8", "#AEBEC7", "#F5F6F7", "#C54C59"]
  },
  {
    name: "Six of Cups",
    colors: ["#9EDDE6", "#FDECE8", "#F4C5A5", "#A3CDE1", "#FBF9F4"]
  },
  {
    name: "Seven of Cups",
    colors: ["#7DADD2", "#EDE6F8", "#BEA8E6", "#93D4D7", "#F0FBFA"]
  },
  {
    name: "Eight of Cups",
    colors: ["#213447", "#8FA2B2", "#D5E0E6", "#496C89", "#EBF4FB"]
  },
  {
    name: "Nine of Cups",
    colors: ["#6FBBC8", "#F3E4B7", "#ECA297", "#F7F5F1", "#A87D7B"]
  },
  {
    name: "Ten of Cups",
    colors: ["#96D6E3", "#FFE7A1", "#ECA8C7", "#B8DDF4", "#FFFDF6"]
  },
  {
    name: "Page of Cups",
    colors: ["#A5D9E0", "#F8F3FA", "#F1C3E2", "#85BDD0", "#FDFEFF"]
  },
  {
    name: "Knight of Cups",
    colors: ["#77AFC1", "#E4E9EF", "#C9D2DA", "#4A6A7F", "#F3D3E3"]
  },
  {
    name: "Queen of Cups",
    colors: ["#8DC4D6", "#E9D5F3", "#B06FA9", "#F5F3FA", "#549BB1"]
  },
  {
    name: "King of Cups",
    colors: ["#4C7491", "#A3C0CD", "#E2D5B3", "#F9F8F4", "#8DC2D0"]
  },

      {
    name: "Ace of Swords",
    colors: ["#DCE3EA", "#7E92A8", "#425464", "#F9F9FA", "#9BB7CD"]
  },
  {
    name: "Two of Swords",
    colors: ["#7F8EA3", "#D3DBE3", "#3E4B5A", "#E5EFF4", "#A9B7C4"]
  },
  {
    name: "Three of Swords",
    colors: ["#C64755", "#6E7A89", "#E5DFDB", "#9DABB4", "#F8F6F7"]
  },
  {
    name: "Four of Swords",
    colors: ["#8096A9", "#C7D3DB", "#E7EEF1", "#495B67", "#F1F5F7"]
  },
  {
    name: "Five of Swords",
    colors: ["#3B4C5B", "#90A3B3", "#C3CBD1", "#ECEFF1", "#B54348"]
  },
  {
    name: "Six of Swords",
    colors: ["#6E8AA4", "#D9E3EC", "#EFF3F7", "#3D5060", "#A6B7C8"]
  },
  {
    name: "Seven of Swords",
    colors: ["#4A6680", "#9FB3C3", "#D3DCE3", "#F1F4F6", "#B28418"]
  },
  {
    name: "Eight of Swords",
    colors: ["#657A8B", "#C3CDD5", "#F1F2F3", "#455766", "#9EACB6"]
  },
  {
    name: "Nine of Swords",
    colors: ["#2F3C48", "#8694A2", "#B9C1C7", "#F4F6F7", "#D16C79"]
  },
  {
    name: "Ten of Swords",
    colors: ["#1C2530", "#6D7A88", "#A7AFB6", "#E7ECF0", "#8B3244"]
  },
  {
    name: "Page of Swords",
    colors: ["#8AA4B5", "#E0E7ED", "#F9FBFC", "#5C7385", "#C2D2DB"]
  },
  {
    name: "Knight of Swords",
    colors: ["#5B748A", "#A7B9C6", "#E7EBED", "#2E3944", "#D6DDE2"]
  },
  {
    name: "Queen of Swords",
    colors: ["#8DA2B1", "#DDE6EB", "#4B6274", "#F3F7F8", "#BFC7D0"]
  },
  {
    name: "King of Swords",
    colors: ["#3F5364", "#9FB4C1", "#D5DEE3", "#F6F8F9", "#64798A"]
  },

      {
    name: "Ace of Pentacles",
    colors: ["#A7C98C", "#E7E3C2", "#86B066", "#FDFBF2", "#C4A965"]
  },
  {
    name: "Two of Pentacles",
    colors: ["#8EB483", "#E4D18B", "#6E8F5F", "#F7F4E8", "#CFA96C"]
  },
  {
    name: "Three of Pentacles",
    colors: ["#89A573", "#DCCB94", "#A99D7F", "#F1EFE4", "#C6A763"]
  },
  {
    name: "Four of Pentacles",
    colors: ["#6F805C", "#C2C48E", "#DBCBA7", "#F8F4E2", "#B09563"]
  },
  {
    name: "Five of Pentacles",
    colors: ["#4F5B4A", "#A8AB8A", "#D0C8AE", "#F4F3ED", "#9B282A"]
  },
  {
    name: "Six of Pentacles",
    colors: ["#9BB47A", "#E6DDAF", "#B89363", "#FDFBF3", "#CAB982"]
  },
  {
    name: "Seven of Pentacles",
    colors: ["#769B67", "#CDBE8D", "#EDE5CF", "#B69E65", "#F2F1EA"]
  },
  {
    name: "Eight of Pentacles",
    colors: ["#87A979", "#E0D6AD", "#B38D63", "#F7F4E9", "#5D7351"]
  },
  {
    name: "Nine of Pentacles",
    colors: ["#A4CA92", "#F1E7C0", "#C2A36D", "#FFFDF4", "#8B6D3A"]
  },
  {
    name: "Ten of Pentacles",
    colors: ["#AFCC98", "#F5EBBF", "#C7A76F", "#EAE6D3", "#756344"]
  },
  {
    name: "Page of Pentacles",
    colors: ["#A2C48E", "#EDE5C9", "#799C63", "#FDFBF4", "#C1A46F"]
  },
  {
    name: "Knight of Pentacles",
    colors: ["#6D845B", "#D1CB9C", "#A4845A", "#F8F4E6", "#B9A773"]
  },
  {
    name: "Queen of Pentacles",
    colors: ["#9CB884", "#E4DDB5", "#C09D6A", "#FDFBF5", "#6E8B5B"]
  },
  {
    name: "King of Pentacles",
    colors: ["#596C4E", "#B6BA92", "#D7C599", "#EEE9D6", "#A07F53"]
  },
  /* =================================================
            END OF TAROT PALETTES
  ================================================= */
    {
      name: "Mystic Fog",
      colors: ["#3E5A80", "#6B8E8D", "#9AC4D8", "#B9A9C7", "#E0D1DB"]
    },
    {
      name: "Retro POP",
      colors: ["#7DC2E8", "#F48AB3", "#E1466C", "#CBA76D", "#1A1A1A"]
    },
    {
      name: "Sleepy Dreamer",
      colors: ["#69816C", "#C69C6E", "#DE8DDD", "#886247", "#1A1718"]
    },
    {
      name: "Sunset Boulevard",
      colors: ["#FAD02E", "#F28D35", "#D83367", "#F2A7B4", "#9A5C6D"]
    },
    {
      name: "",
      colors: ["#EDDA2B", "#2E2E2E", "#26FFF1", "#FCFFE8", "#58AD7D"]
    },
    {
      name: "NEW NAME HERE",
      colors: ["#628A73", "#A3C0FF", "#3BC4A2", "#242424", "#499ABA"]
    },
    {
      name: "",
      colors: ["#FAD02E", "#F28D35", "#D83367", "#F2A7B4", "#9A5C6D"]
    },
    {
      name: "",
      colors: ["#FAD02E", "#F28D35", "#D83367", "#F2A7B4", "#9A5C6D"]
    }
  ]
};
