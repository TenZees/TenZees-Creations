// mixer.js — simple but robust mixer logic
// exported as module and attached to window for debugging

const sections = {
  palette: {
    id: 'card-palette',
    name: 'Color Palette',
    locked: false
  },
  object: {
    id: 'card-object',
    name: 'Object'
  },
  location: {
    id: 'card-location',
    name: 'Location'
  },
  theme: { id: 'card-theme', name: 'Theme / Culture' },
  mood: { id: 'card-mood', name: 'Mood' },
  art: { id: 'card-art', name: 'Art Style' },
  season: { id: 'card-season', name: 'Season / Holiday' },
  person: { id: 'card-person', name: 'Person / Character' }
};

// small sample data — expand as needed
const DATA = {
  palette: [
    { title: "Azure Sigil", swatches: ["#4A90E2","#3A78C2","#7AB1E6","#2D5FA0","#91C2F2"] },
    { title: "Sage Mist", swatches: ["#CFEAD6","#A7C9B6","#88B08F","#6B9D77","#93C9A8"] },
    { title: "Sunlit Terrace", swatches: ["#FFDDAA","#F6C79E","#E3A86C","#F9D9B6","#FFD1A6"] }
  ],
  object: [
    "Ceremonial Dagger",
    "Glass Orb",
    "Mechanical Compass",
    "Brass Key",
    "Ancient Tome"
  ],
  location: [
    "Desert Oasis",
    "Frozen Harbor",
    "Hidden Grotto",
    "Forgotten Library",
    "Sky Bazaar"
  ],
  theme: [
    "Neo-Victorian",
    "Mythic Arabian",
    "Cyberpunk Ritual",
    "Folk Horror",
    "Arcane Academia"
  ],
  mood: [
    "Melancholic",
    "Euphoric",
    "Mysterious",
    "Playful",
    "Tense"
  ],
  art: [
    "Painterly",
    "Vector Minimal",
    "Film Noir",
    "High Fantasy Illustration",
    "Pixel Art"
  ],
  season: [
    "Autumn Harvest",
    "Winter Solstice",
    "Summer Carnival",
    "Spring Bloom",
    "Midnight Festival"
  ],
  person: [
    "Wandering Bard",
    "Weathered Captain",
    "Gilded Merchant",
    "Young Inventor",
    "Silent Oracle"
  ]
};


// utilities
function qs(sel){ return document.querySelector(sel); }
function qsa(sel){ return Array.from(document.querySelectorAll(sel)); }
function rand(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

// fill a section with provided value(s)
function setSection(sectionKey, htmlContent){
  const s = sections[sectionKey];
  if(!s) return;
  const el = qs('#' + s.id);
  if(!el) return;
  const box = el.querySelector('.value-box');
  if(box) box.innerHTML = htmlContent;
}

// generate palette HTML for swatches
function paletteToHtml(p){
  if(!p) return 'Ready to roll...';
  const sw = p.swatches.map(hex => `<span class="swatch" style="background:${hex};display:inline-block;width:36px;height:36px;border-radius:8px;margin-right:8px;box-shadow:inset 0 -4px 6px rgba(0,0,0,0.08);vertical-align:middle;"></span>`).join('');
  return `<div style="display:flex;flex-direction:column;align-items:center;gap:8px;"><div style="font-weight:700">${p.title}</div><div style="padding:8px 14px;background:rgba(0,0,0,0.06);border-radius:12px;margin-top:6px;">${sw}</div></div>`;
}

// main roll function
function roll(enabledSections){
  // if palette locked, keep previous
  const paletteLocked = qs('#lock-palette')?.dataset.locked === 'true';

  if(enabledSections.includes('palette') && !paletteLocked){
    const p = rand(DATA.palette);
    setSection('palette', paletteToHtml(p));
  } else if(enabledSections.includes('palette') && paletteLocked) {
    // do nothing (keeps current)
  } else {
    setSection('palette', 'Ready to roll...');
  }

  if(enabledSections.includes('object')) setSection('object', rand(DATA.object));
  else setSection('object', 'Ready to roll...');

  if(enabledSections.includes('location')) setSection('location', rand(DATA.location));
  else setSection('location', 'Ready to roll...');

  if(enabledSections.includes('theme')) setSection('theme', rand(DATA.theme));
  else setSection('theme', 'Ready to roll...');

  if(enabledSections.includes('mood')) setSection('mood', rand(DATA.mood));
  else setSection('mood', 'Ready to roll...');

  if(enabledSections.includes('art')) setSection('art', rand(DATA.art));
  else setSection('art', 'Ready to roll...');

  if(enabledSections.includes('season')) setSection('season', rand(DATA.season));
  else setSection('season', 'Ready to roll...');

  if(enabledSections.includes('person')) setSection('person', rand(DATA.person));
  else setSection('person', 'Ready to roll...');
}


// collect enabled toggles
function getEnabledToggles(){
  const toggles = qsa('.config-grid input[type="checkbox"]');
  return toggles.filter(i => i.checked).map(i => i.id.replace('toggle-',''));
}


// initialize controls & events
function init(){
  // ensure the mix button is always visible (fallback)
  const mixBtn = qs('#mix-btn');
  if(mixBtn){
    mixBtn.addEventListener('click', (e) => {
      const enabled = getEnabledToggles();
      // user-friendly feedback: brief button animation
      mixBtn.disabled = true;
      mixBtn.classList.add('mixing');
      setTimeout(()=> {
        roll(enabled);
        mixBtn.disabled = false;
        mixBtn.classList.remove('mixing');
      }, 250);
    });
  }

  // lock palette button behavior
  const lockBtn = qs('#lock-palette');
  if(lockBtn){
    lockBtn.dataset.locked = 'false';
    lockBtn.addEventListener('click', () => {
      const isLocked = lockBtn.dataset.locked === 'true';
      lockBtn.dataset.locked = (!isLocked).toString();
      lockBtn.textContent = isLocked ? '🔓' : '🔒';
      // small aria change
      lockBtn.setAttribute('aria-pressed', (!isLocked).toString());
    });
  }

  // populate initial state (run a roll for enabled toggles)
  const initialEnabled = getEnabledToggles();
  roll(initialEnabled);

  // expose a debug function
  window.__ElementMixer = { roll, sections, DATA };
}


// auto-init when DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// export nothing in particular (module used mainly to surface loading)
export { roll, DATA, sections };
