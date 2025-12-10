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
  /* ========================
     GOTHIC & DARK THEMES
  ======================== */
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

  /* ========================
     SWEET & PLAYFUL
  ======================== */
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
  name: "Mango Lollipop",
  colors: ["#FFB74D", "#FFD180", "#FFEB3B", "#FFF3E0", "#FF8A65"]
},
{
  name: "Citrus Spritz",
  colors: ["#FFA726", "#FFE57F", "#FFD54F", "#FFF8E1", "#FF7043"]
},
{
  name: "Peach Fizz",
  colors: ["#FFCC80", "#FFE0B2", "#FFAB91", "#FFF3E0", "#FFD54F"]
},
{
  name: "Sunny Pop",
  colors: ["#FFF176", "#FFEE58", "#FFD740", "#FFF9C4", "#FF8F00"]
},
{
  name: "Apricot Dreams",
  colors: ["#FFB347", "#FFD699", "#FFE0B2", "#FFF8E1", "#FF7043"]
},
  /* ========================
     RETRO & NEON
  ======================== */
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
  name: "Electric Tangerine",
  colors: ["#FF6F00", "#FFAB00", "#FFC400", "#FF8F00", "#FFD740"]
},
{
  name: "Laser Lemon",
  colors: ["#FFFF33", "#FFF176", "#FFEB3B", "#FFF59D", "#FFEE58"]
},
{
  name: "Neon Coral",
  colors: ["#FF3D00", "#FF6E40", "#FF8A65", "#FF5252", "#FF1744"]
},
{
  name: "Cyber Sunrise",
  colors: ["#FF9100", "#FFC107", "#FFEA00", "#FFD600", "#FFAB00"]
},
{
  name: "Glowstick",
  colors: ["#FFEA00", "#FFFF00", "#FFEE58", "#FFFF33", "#FFF176"]
},
  /* ========================
     CLASSIC NEUTRALS & METALLICS
  ======================== */
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
  /* ========================
     RADIANCE / LIGHT
  ======================== */
  {
  name: "Angel Wings",
  colors: ["#FFF7E8", "#FFE9A0", "#FFD966", "#FFF1C4", "#FFEB99"]
},
{
  name: "Halo Shadow",
  colors: ["#FFF9E5", "#FFEFA3", "#FFD94D", "#FFF3B8", "#FFE680"]
},
{
  name: "Sunlit Grove",
  colors: ["#FFF8E1", "#FFEFA8", "#FFD94F", "#FFF2B9", "#FFE58F"]
},
{
  name: "Golden Ember",
  colors: ["#FFF4E0", "#FFE18C", "#FFC845", "#FFE9B2", "#FFD77A"]
},
{
  name: "Harvest Glow",
  colors: ["#FFF5E2", "#FFEB9A", "#FFD24B", "#FFEAB3", "#FFD78B"]
},
{
  name: "Saffron Spell",
  colors: ["#FFF6E3", "#FFEBA0", "#FFD552", "#FFF2B5", "#FFE18B"]
},
{
  name: "Amber Mist",
  colors: ["#FFF7E5", "#FFEFA5", "#FFD964", "#FFF3B9", "#FFE58F"]
},
{
  name: "Sunbeam Shard",
  colors: ["#FFF8E6", "#FFEFA8", "#FFD84F", "#FFF4BA", "#FFE68C"]
},
{
  name: "Golden Horizon",
  colors: ["#FFF5E1", "#FFEB9F", "#FFD64B", "#FFEAB2", "#FFD68A"]
},
{
  name: "Candlelight Veil",
  colors: ["#FFF6E2", "#FFEBA2", "#FFD552", "#FFF3B5", "#FFE38C"]
},
{
  name: "Morning Nectar",
  colors: ["#FFF8E3", "#FFEFA5", "#FFD84E", "#FFF4BA", "#FFE58D"]
},
{
  name: "Sunflower Waltz",
  colors: ["#FFF7E4", "#FFEFA6", "#FFD851", "#FFF3BB", "#FFE58F"]
},
{
  name: "Golden Lyric",
  colors: ["#FFF5E0", "#FFE99D", "#FFD44B", "#FFE9B1", "#FFD687"]
},
{
  name: "Twilight Marigold",
  colors: ["#FFF6E1", "#FFEBA0", "#FFD654", "#FFF3B5", "#FFE38B"]
},
{
  name: "Luminous Leaf",
  colors: ["#FFF8E3", "#FFEFA7", "#FFD84F", "#FFF4BB", "#FFE68E"]
},
{
  name: "Solar Flare",
  colors: ["#FFF7E2", "#FFEFA4", "#FFD851", "#FFF3BA", "#FFE58D"]
},
{
  name: "Buttercup Veil",
  colors: ["#FFF6E0", "#FFEB9F", "#FFD54B", "#FFF2B3", "#FFE38B"]
},
{
  name: "Golden Mirage",
  colors: ["#FFF8E5", "#FFEFA8", "#FFD950", "#FFF4BD", "#FFE68D"]
},
{
  name: "Auric Dawn",
  colors: ["#FFF5E1", "#FFEB9F", "#FFD44A", "#FFEAB2", "#FFD687"]
},
{
  name: "Sunlit Crown",
  colors: ["#FFF6E2", "#FFEBA2", "#FFD653", "#FFF3B6", "#FFE38C"]
},
  /* ========================
     MAGIC & COSMIC
  ======================== */
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
  name: "Twilight Abyss",
  colors: ["#9BA3E0", "#7D8BCF", "#B2B9F1", "#6672B0", "#C3C9F7"]
},
{
  name: "Mystic Drift",
  colors: ["#A1A8E5", "#7F88D1", "#B5BCF3", "#6571B3", "#C5CBF8"]
},
{
  name: "Starlit Wave",
  colors: ["#9EA0E2", "#7B7FCF", "#B3B5F1", "#6269AF", "#C2C5F6"]
},
{
  name: "Aurora Veil",
  colors: ["#A3A5E8", "#7E7FCC", "#B6B9F4", "#6369B5", "#C6C9F9"]
},
{
  name: "Celestial Frost",
  colors: ["#9DA2E1", "#7A7ECF", "#B2B6F2", "#6169B1", "#C1C5F7"]
},
{
  name: "Moonlit Tide",
  colors: ["#A0A4E6", "#7C7FCF", "#B4B8F4", "#6268B3", "#C4C8F8"]
},
{
  name: "Ethereal Current",
  colors: ["#9FA3E3", "#7B7FCF", "#B3B6F3", "#6168B0", "#C2C6F7"]
},
{
  name: "Iridescent Deep",
  colors: ["#A2A6E7", "#7E80D0", "#B6BAF4", "#636AB4", "#C5CAF9"]
},
{
  name: "Nebula Drift",
  colors: ["#9EA1E4", "#797FCC", "#B3B6F2", "#6168AF", "#C1C5F7"]
},
{
  name: "Frosted Comet",
  colors: ["#A1A5E8", "#7C7FCC", "#B5B9F4", "#6269B2", "#C4C8F8"]
},
{
  name: "Twilight Ember",
  colors: ["#9BA3E0", "#F2C87C", "#7D8BCF", "#B2B9F1", "#FFDFA0"]
},
{
  name: "Mystic Sunrise",
  colors: ["#A1A8E5", "#FFCF7B", "#7F88D1", "#B5BCF3", "#FFE3A5"]
},
{
  name: "Starlit Flame",
  colors: ["#9EA0E2", "#F9D28C", "#7B7FCF", "#B3B5F1", "#FFD9A1"]
},
{
  name: "Aurora Glow",
  colors: ["#A3A5E8", "#F6C878", "#7E7FCC", "#B6B9F4", "#FFE0A2"]
},
{
  name: "Celestial Dawn",
  colors: ["#9DA2E1", "#FFD78B", "#7A7ECF", "#B2B6F2", "#FFE6A0"]
},
{
  name: "Moonlit Radiance",
  colors: ["#A0A4E6", "#FFC87D", "#7C7FCF", "#B4B8F4", "#FFDF9F"]
},
{
  name: "Ethereal Light",
  colors: ["#9FA3E3", "#FCD18A", "#7B7FCF", "#B3B6F3", "#FFE4A3"]
},
{
  name: "Iridescent Glow",
  colors: ["#A2A6E7", "#FFD57B", "#7E80D0", "#B6BAF4", "#FFE8A0"]
},
{
  name: "Nebula Fire",
  colors: ["#9EA1E4", "#F9CC7F", "#797FCC", "#B3B6F2", "#FFE2A1"]
},
{
  name: "Frosted Sun",
  colors: ["#A1A5E8", "#FFC978", "#7C7FCC", "#B5B9F4", "#FFDF9F"]
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


/* ========================
     PASTELS & SOFT PALETTES
  ======================== */
    {
      name: "Mystic Fog",
      colors: ["#3E5A80", "#6B8E8D", "#9AC4D8", "#B9A9C7", "#E0D1DB"]
    },
      {
    name: "Tea Party",
    colors: ["#A2C59B", "#F6E8C8", "#6E8B67", "#D9A78C", "#4F5A4D"]
},
{
    name: "Invasion",
    colors: ["#59FF46", "#1A331A", "#3D8C3D", "#A6FF8E", "#262E26"]
},
{
    name: "Spirit of Adventure",
    colors: ["#4E8B52", "#F2D08B", "#3C4A2A", "#88C07F", "#9E7E4D"]
},
{
    name: "Grunge",
    colors: ["#6B7D3F", "#2F2F2C", "#828B71", "#474E3B", "#C1C6AE"]
},
/* ========================
     ORANGE & FUN
  ======================== */
    {
    name: "Karaoke",
    colors: ["#FF9234", "#FFE4C0", "#FF4F57", "#663399", "#2E1A1C"]
},
{
    name: "Construction Site",
    colors: ["#F4A21C", "#1E1E1E", "#787878", "#D93F2E", "#F9D264"]
},
{
    name: "Comic Book",
    colors: ["#FF6E1D", "#FFE600", "#1E1A41", "#E21C2D", "#FFF7E0"]
},
{
    name: "Carnival",
    colors: ["#FF9A00", "#F42C04", "#FFE7A8", "#008EB4", "#7ACC5E"]
},
/* ========================
    PASTELS / SWEET & SOFT
 ======================== */
    {
    name: "Sugar Cloud",
    colors: ["#F7D8E7", "#B5D8FA", "#FAF2C8", "#C8E8D7", "#F9E9F4"]
},
{
    name: "Bunny Boutique",
    colors: ["#F4C8C3", "#FFF5E3", "#E7D0F6", "#C1E4EE", "#F8E3C9"]
},
{
    name: "Lavender Milk",
    colors: ["#E6DAF7", "#C2B3E0", "#FAF7FF", "#97A3CC", "#FDE7F1"]
},
{
    name: "Bubble Tea",
    colors: ["#EAD3E1", "#C8DEC5", "#F9E0B5", "#D6BFAF", "#F7F4E9"]
},
{
    name: "Frosted Seashell",
    colors: ["#FFE8E2", "#F4DCCD", "#E3CBD6", "#C8D3E1", "#F9F6F4"]
},
{
    name: "Daydream Soda",
    colors: ["#A6D9FF", "#FFEBBB", "#FFBBC8", "#C0F5D0", "#F2F2FF"]
},
{
    name: "Soft Parade",
    colors: ["#FFC6B3", "#FFDCA6", "#F6F8B8", "#B3E5BB", "#C9D7FF"]
},
{
    name: "Pastel Graffiti",
    colors: ["#F9A8D4", "#A7F3D0", "#FDE68A", "#BAE6FD", "#FEF3C7"]
},
{
    name: "Moonlit Porcelain",
    colors: ["#E4E9F1", "#D3D7E4", "#F6E8E0", "#BFC7D1", "#FFFDF8"]
},
{
    name: "Café Meringue",
    colors: ["#FDE8D0", "#E5CAB3", "#F8D8DE", "#D3CEC7", "#FFF6EC"]
},
{
      name: "Butter Blush",
      colors: ["#FFF4AB", "#FBC9D4", "#F7F6F2", "#DFF7D8", "#F9D8B9"]
    },

/* ==============================================
    OCCULT PASTELS / MYSTICAL & GHOSTLY
 ================================================ */
    {
    name: "Ghost Jelly",
    colors: ["#F6E7F2", "#C8B2D9", "#8D82A6", "#FFEFFB", "#6C6D86"]
},
{
    name: "Bruised Halo",
    colors: ["#F7DDE8", "#C5A7C7", "#796689", "#E9C3D6", "#4E3F59"]
},
{
    name: "Poison Baby",
    colors: ["#DEF9E7", "#A7D8BD", "#6A9F94", "#F1FFF9", "#3C5B52"]
},
{
    name: "Chalk Séance",
    colors: ["#F3F1EC", "#CFCFDB", "#A8A3B2", "#7F7A85", "#322F35"]
},
{
    name: "Cursed Confection",
    colors: ["#FFD6E5", "#E1B2C9", "#9D7F94", "#F8E7F5", "#4A3043"]
},
{
    name: "Pastel Possession",
    colors: ["#E4C0FC", "#B38DE0", "#7A6EA0", "#D4F0FF", "#1E2335"]
},

/* ===========================
    EARTH / NATURE / CREATURE
 ============================= */
{
    name: "Hex Milk",
    colors: ["#FFF2E3", "#C8BDA8", "#8A8778", "#F5EEE7", "#423E36"]
},
{
    name: "Rotten Rosewater",
    colors: ["#F5D2D8", "#CF9AA7", "#9C7481", "#F8E6E9", "#4C3941"]
},
{
    name: "Spirit Mold",
    colors: ["#CBE4D1", "#AABFAF", "#798F7C", "#E3F3E8", "#2C3B2F"]
},
{
  name: "Mossmantle",
  colors: ["#6B8E23", "#556B2F", "#8F9779", "#3E5129", "#A0B084"]
},
{
  name: "Forest Whisper",
  colors: ["#4F6D3A", "#2E4D23", "#7B915E", "#3B522B", "#91A77A"]
},
{
  name: "Verdant Grove",
  colors: ["#5A7A3F", "#3E562B", "#8AA278", "#2F4221", "#A1B089"]
},
{
  name: "Golem’s Root",
  colors: ["#6D7B42", "#4A5730", "#9BA587", "#37432A", "#A9B394"]
},
{
  name: "Thornbriar",
  colors: ["#5C7041", "#3B4C28", "#87977C", "#2E3B22", "#9BA98D"]
},
{
  name: "Oakshade",
  colors: ["#667344", "#495536", "#8B9B7B", "#36402A", "#A0AA85"]
},
{
  name: "Earthwarden",
  colors: ["#5F6F3E", "#3E4F2A", "#889675", "#2C3C21", "#98AA83"]
},
{
  name: "Lichenveil",
  colors: ["#6A7B45", "#4A5B30", "#9AA988", "#36422B", "#A7B194"]
},
{
  name: "Wildroot",
  colors: ["#5E6E3C", "#3F5028", "#869676", "#2F3F23", "#99AA87"]
},
{
  name: "Stonebark",
  colors: ["#657545", "#465838", "#8D9D7E", "#333F2C", "#A2B092"]
},
{
    name: "Moonlit Bruja",
    colors: ["#C4C3E0", "#8C8DB4", "#5D587B", "#E7E7F6", "#2D2D43"]
},
    {
    name: "Moss Mothling",
    colors: ["#7D9867", "#C4D9B2", "#4E5B3A", "#E7EBD8", "#8C7F64"]
},
{
    name: "Truffle Troll",
    colors: ["#7B5A44", "#D9C3A4", "#A6846A", "#E8DECB", "#4F3B2F"]
},
{
    name: "Pebble Sprite",
    colors: ["#C4C3BD", "#8C8A82", "#E8E6DF", "#6A6C63", "#524F46"]
},
{
    name: "Honey Gremlin",
    colors: ["#D9A63C", "#F6E2A3", "#9B7C3A", "#ECD59D", "#6D5930"]
},
{
    name: "Swamp Hugger",
    colors: ["#5B6D48", "#A8BE90", "#3F4C35", "#DFE6D3", "#8B7E63"]
},
{
    name: "Burrow Bunt",
    colors: ["#C49F7C", "#8B6C53", "#E9D4BD", "#6E5846", "#BFA488"]
},
{
    name: "Marshmallow Wendigo",
    colors: ["#EDEAE2", "#C8C3B3", "#A4968B", "#776D65", "#F8F4ED"]
},
{
    name: "Root Whisperer",
    colors: ["#715942", "#A88D77", "#D8C4A9", "#4D3C30", "#F1E7D2"]
},
{
    name: "Puddle Pooka",
    colors: ["#A3B5B2", "#6F8683", "#D9E4E2", "#4F5F5D", "#E4EEE9"]
},
{
    name: "Fossil Fawn",
    colors: ["#C6B199", "#948474", "#E9DFD1", "#6F6354", "#B8A189"]
},
/* ===========================
    SKY & ARCANA
 ============================= */
{
  name: "Azure Sigil",
  colors: ["#4A90E2", "#3A78C2", "#7AB1E6", "#2D5FA0", "#91C2F2"]
},
{
  name: "Stormveil",
  colors: ["#4F8ABF", "#3C6C9A", "#7FAED9", "#2B537D", "#91BEE2"]
},
{
  name: "Celestial Tide",
  colors: ["#4C9CD6", "#3A7CB5", "#7EBCE9", "#2E5F93", "#9AC8F4"]
},
{
  name: "Arcane Mist",
  colors: ["#5A9EDC", "#3D7ABB", "#82B8F0", "#2D6195", "#A2C9F7"]
},
{
  name: "Sapphire Rune",
  colors: ["#4983D2", "#3763B0", "#74A7E6", "#2C4D8E", "#8EB8F1"]
},
{
  name: "Moonwater",
  colors: ["#5B9FD9", "#3E7DB7", "#84B9F0", "#2D6195", "#A3C9F6"]
},
{
  name: "Frostglimmer",
  colors: ["#56A1E1", "#3C81C0", "#7EBDF2", "#2C6397", "#9FC9F6"]
},
{
  name: "Windchime",
  colors: ["#4F9ED4", "#397CB2", "#78BAE8", "#2D5E8E", "#95C0F2"]
},
{
  name: "Ethersky",
  colors: ["#5B9DDC", "#3C7CB7", "#83B7F0", "#2D6194", "#A1C8F6"]
},
{
  name: "Glacial Ward",
  colors: ["#4F91D8", "#386FB5", "#7DB6EE", "#2C5690", "#95BDF2"]
},

/* ===========================
    OCEAN / ICE / COOL
 ============================= */
    {
    name: "Tide Pool",
    colors: ["#3AAFB9", "#0E7490", "#74C7C0", "#B9F3E4", "#114A52"]
},
{
    name: "Deep Space Oxygen",
    colors: ["#1C2332", "#233F73", "#51C0EA", "#9BF3FF", "#0D1021"]
},
{
    name: "Frostbite Carnival",
    colors: ["#9FE2F8", "#55B2C8", "#DBF6FF", "#176273", "#003C47"]
},
{
    name: "Cyber Reef",
    colors: ["#00C1B5", "#004E4E", "#2DE3E0", "#85FFF4", "#081F22"]
},
{
    name: "Glacier Library",
    colors: ["#7EA7C3", "#3F6389", "#D8E6EF", "#AEC9E2", "#20354B"]
},
{
    name: "Arctic Observatory",
    colors: ["#8FC6E8", "#24526E", "#A1E3F9", "#F7FFFF", "#092232"]
},
{
    name: "Oceanographer’s Map",
    colors: ["#4A9E9E", "#2D4C50", "#76D3C6", "#A5F6EB", "#163536"]
},
{
    name: "Icebound Arcade",
    colors: ["#6EE7F2", "#25ABBD", "#083D4C", "#47C8D9", "#D9FDFF"]
},
{
    name: "Forgotten Fjord",
    colors: ["#508AA8", "#1D3D49", "#A9D4E0", "#DDF8FF", "#0F242A"]
},
{
    name: "Crystalline Depths",
    colors: ["#05707A", "#024A52", "#29B1BB", "#8FF0F5", "#C7FFFF"]
},

/* ===========================
    SANCTUM & HEARTH 
 ============================= */
{
  name: "Ivory Lantern",
  colors: ["#FDF5E6", "#FAEFD0", "#FFF8E1", "#F8ECD0", "#FDF7E7"]
},
{
  name: "Amber Hearth",
  colors: ["#FBE8C6", "#FADCB3", "#FFF3D9", "#F7E2C0", "#FDF0D8"]
},
{
  name: "Sunlit Cloister",
  colors: ["#FDF1E0", "#FAE6CC", "#FFF8E5", "#F8E0C9", "#FDF5E3"]
},
{
  name: "Blessed Alabaster",
  colors: ["#FEF5EB", "#FAEBDD", "#FFF9F0", "#F9E9DC", "#FEF6EC"]
},
{
  name: "Golden Hearthstone",
  colors: ["#FDE8C4", "#FADBB0", "#FFF3D6", "#F8E0BB", "#FDF0D7"]
},
{
  name: "Sanctuary Veil",
  colors: ["#FDF5E7", "#FAEED3", "#FFF8E2", "#F8ECD3", "#FDF7E8"]
},
{
  name: "Warmspire",
  colors: ["#FBE6C2", "#FAD7AD", "#FFF2D8", "#F7E0BC", "#FDF0D5"]
},
{
  name: "Lumina Hearth",
  colors: ["#FDF3E2", "#FAE8CE", "#FFF9E4", "#F8E4CC", "#FDF6E5"]
},
{
  name: "Golden Lantern",
  colors: ["#FCE7C4", "#FAD8B0", "#FFF3D7", "#F7DFC0", "#FDF0D8"]
},
{
  name: "Celestial Candle",
  colors: ["#FDF5E5", "#FAEED1", "#FFF8E3", "#F8ECD4", "#FDF7E8"]
},

/* ===========================
    RETRO / POP / ENERGETIC
 ============================= */
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
    name: "Gemtastic",
    colors: ["#C12E45", "#0D9A6B", "#214CBA", "#F0B43C", "#8F55C8"]
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
    name: "Zip Zap",
    colors: ["#FFE72B", "#FF4FB8", "#36C3FF", "#FDFDFD", "#121314"]
  },
  {
    name: "Mad as a Hatter",
    colors: ["#AEE8C8", "#7C31C7", "#FF9EC5", "#F2C85A", "#3A6CF0"]
  },

  /* ============================
    RPG / DARK / MYTHICAL / MOODY
 ================================ */
    {
    name: "Lone Sigil",
    colors: ["#000000", "#A1A1A1", "#8B2BD4", "#FFFFFF", "#505050"]
  },
  {
    name: "Mimic’s Taste",
    colors: ["#D4A64A", "#7A2F1C", "#5B4326", "#6C3DA8", "#C9B9A3"]
  },
  {
    name: "Rogue of Olympus",
    colors: ["#F2C468", "#EEE4D7", "#516BCE", "#B2343A", "#5E7D3A"]
  },
  {
    name: "Underworld Sunrise",
    colors: ["#FF8A3A", "#1A1A1A", "#D64228", "#8F8A85", "#F56273"]
  },
  {
  name: "Harvest Lantern",
  colors: ["#D98854", "#A65E3A", "#F2C38F", "#6E3F2B", "#E8B68B"]
},
{
  name: "Ember Hollow",
  colors: ["#C76B3B", "#8B3E28", "#E2A178", "#6F3A25", "#D9A67F"]
},
{
  name: "Autumn’s Sigil",
  colors: ["#D9946B", "#B46542", "#F2C6A3", "#7B4B2F", "#E4B38C"]
},
{
  name: "Copper Warden",
  colors: ["#B76338", "#8E4A2C", "#E6A87F", "#704129", "#D9A37B"]
},
{
  name: "Fallen Leaf",
  colors: ["#D27F4F", "#A65C3A", "#F0BA92", "#6B3B25", "#E7AD85"]
},
{
  name: "Amber Veil",
  colors: ["#C77442", "#8F4A2E", "#E3AA84", "#6F3823", "#D9A37B"]
},
{
  name: "Rustfang",
  colors: ["#B85C32", "#883F27", "#D89E7B", "#633623", "#E0AB84"]
},
{
  name: "Spiced Hearth",
  colors: ["#D68B52", "#A55E3A", "#F0C19A", "#6F3E28", "#EAB78D"]
},
{
  name: "Ochre Mystic",
  colors: ["#C67B44", "#8E4D2F", "#E4AD86", "#6D3B26", "#D9A27D"]
},
{
  name: "Twilight Bonfire",
  colors: ["#D17A3D", "#9C4B2B", "#F0B88C", "#673622", "#E6A77D"]
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
    name: "Weird & Creepy",
    colors: ["#4B1E3C", "#8EE38A", "#CBC7C3", "#6A35A2", "#2A242A"]
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
    name: "Valiant Ghoul",
    colors: ["#D7D9E0", "#86C7A1", "#3A5CBF", "#7B3FA1", "#22242A"]
  },
    {
      name: "10Zees001",
      colors: ["#EDDA2B", "#2E2E2E", "#26FFF1", "#FCFFE8", "#58AD7D"]
    },
    {
      name: "10Zees002",
      colors: ["#628A73", "#A3C0FF", "#3BC4A2", "#242424", "#499ABA"]
    },
    {
      name: "10Zees003",
      colors: ["#1A2348", "#F6F6F6", "#D278AD", "#F9F960", "#FA7689"]
    },
    {
      name: "10Zees004",
      colors: ["#FFFFFF", "#F3456F", "#AF3562", "#DFA234", "#5f65AF"]
    }
  ]
};
