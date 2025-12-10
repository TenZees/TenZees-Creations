// mixer.js — Element Mixer logic (module)
import { DATA, sections } from './data.js';

export const sections = {
  palettes: { id: 'card-palettes', title: 'Color Palette' },
  artStyles: { id: 'card-artStyles', title: 'Art Style' },
  objects: { id: 'card-objects', title: 'Object' },
  locations: { id: 'card-locations', title: 'Location' },
  themes: { id: 'card-theme', title: 'Theme / Culture' },
  moods: { id: 'card-moods', title: 'Mood' },
  seasons: { id: 'card-seasons', title: 'Season / Holiday' },
  people: { id: 'card-people', title: 'Person / Character' }
};


// Utility function to pick a random element
const rand = arr => arr[Math.floor(Math.random() * arr.length)];

// Convert palette object to HTML (updated for 'colors')
function paletteToHtml(p) {
  if (!p) return 'Ready to roll...';
  const swatches = p.colors
    .map(
      hex => `<span class="swatch" style="background:${hex};display:inline-block;width:36px;height:36px;border-radius:8px;margin-right:8px;box-shadow:inset 0 -4px 6px rgba(0,0,0,0.08);vertical-align:middle;"></span>`
    )
    .join('');
  return `<div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
            <div style="font-weight:700">${p.name}</div>
            <div style="padding:8px 14px;background:rgba(0,0,0,0.06);border-radius:12px;margin-top:6px;">${swatches}</div>
          </div>`;
}

// Set a section's HTML
function setSection(key, value) {
  const s = sections[key];
  if (!s) return;
  const el = document.querySelector('#' + s.id);
  if (!el) return;
  const box = el.querySelector('.value-box');
  if (!box) return;

  if (Array.isArray(value) || typeof value === 'object') {
    box.innerHTML = JSON.stringify(value, null, 2);
  } else {
    box.innerHTML = value;
  }
}

// Keep track of locked palette
let lockedPalette = null;

// Build the final prompt
function buildPrompt(enabledSections) {
  const promptParts = [];

  enabledSections.forEach(key => {
    if (key === 'palettes') {
      let palettes;
      if (lockedPalette) {
        palette = lockedPalette;
      } else {
        palette = rand(DATA.palettes);
        lockedPalette = palettes;
      }
      promptParts.push(`Color palette: ${palettes.name}`);
      setSection('palettes', paletteToHtml(palettes));
    } else if (key === 'artStyles') {
      const style = rand(DATA.artStyles);
      promptParts.push(`Art style: ${style}`);
      setSection('artStyles', style);
    } else if (DATA[key]) {
      const val = rand(DATA[key]);
      promptParts.push(`${key}: ${val}`);
      setSection(key, val);
    }
  });

  return promptParts.join(', ');
}

// Get all toggles that are checked
function getEnabledToggles() {
  const toggles = Array.from(document.querySelectorAll('.config-grid input[type="checkbox"]'));
  return toggles.filter(t => t.checked).map(t => t.id.replace('toggle-', ''));
}

// Main roll function
function roll() {
  const enabled = getEnabledToggles();
  const finalPrompt = buildPrompt(enabled);
  if (sections.prompt) {
    setSection('prompt', finalPrompt);
  }
  console.log('Generated prompt:', finalPrompt);
}

// Initialize everything
function init() {
  // Mix button
  const mixBtn = document.querySelector('#mix-btn');
  if (mixBtn) {
    mixBtn.addEventListener('click', () => {
      mixBtn.disabled = true;
      mixBtn.classList.add('mixing');
      setTimeout(() => {
        roll();
        mixBtn.disabled = false;
        mixBtn.classList.remove('mixing');
      }, 250);
    });
  }

  // Lock palette button
  const lockBtn = document.querySelector('#lock-palettes');
  if (lockBtn) {
    lockBtn.dataset.locked = 'false';
    lockBtn.addEventListener('click', () => {
      const isLocked = lockBtn.dataset.locked === 'true';
      lockBtn.dataset.locked = (!isLocked).toString();
      if (!isLocked) {
        // Lock the current palette
        const currentPalette = document.querySelector('#' + sections.palettes.id + ' .value-box');
        if (currentPalette) {
          lockedPalette = DATA.palettes.find(p => p.name === currentPalette.querySelector('div').textContent) || lockedPalette;
        }
      } else {
        lockedPalette = null;
      }
      lockBtn.textContent = isLocked ? '🔓' : '🔒';
      lockBtn.setAttribute('aria-pressed', (!isLocked).toString());
    });
  }

  // Toggle show/hide cards
  const toggles = Array.from(document.querySelectorAll('.config-grid input[type="checkbox"]'));
  toggles.forEach(toggle => {
    const cardId = 'card-' + toggle.id.replace('toggle-', ''); // This is expected to match the card IDs like "card-palettes", etc.
    const card = document.querySelector('#' + cardId);
  
    if (!card) return;

    // Ensure card visibility based on initial checkbox state
    card.classList.toggle('hidden', !toggle.checked);

    // Listen for change to toggle visibility
    toggle.addEventListener('change', () => {
      card.classList.toggle('hidden', !toggle.checked);
    });
  });



  // Initial roll
  roll();

  // Debug
  window.__ElementMixer = { roll, sections, DATA };
}

// Auto-init
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Export
export { roll, sections };
