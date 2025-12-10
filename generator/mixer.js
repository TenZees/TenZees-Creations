// mixer.js — Element Mixer logic (module)
// Pulls data from data.js and attaches to window for debugging

import { DATA, sections } from './dataSource'; // adjust path if necessary

// Utility function to pick a random element from an array
const rand = arr => arr[Math.floor(Math.random() * arr.length)];

// Example function to generate a random "mix"
export const generateRandomMix = () => {
  return {
    object: rand(DATA.objects),
    location: rand(DATA.locations),
    theme: rand(DATA.themes),
    mood: rand(DATA.moods),
    artStyle: rand(DATA.artStyles),
    season: rand(DATA.seasons),
    person: rand(DATA.people),
    palette: rand(DATA.palettes) // full palette object
  };
};

// Fill a section with HTML
function setSection(sectionKey, htmlContent) {
  const s = sections[sectionKey];
  if (!s) return;
  const el = document.querySelector('#' + s.id);
  if (!el) return;
  const box = el.querySelector('.value-box');
  if (box) box.innerHTML = htmlContent;
}

// Generate palette HTML
function paletteToHtml(p) {
  if (!p) return 'Ready to roll...';
  const swatches = p.swatches
    .map(
      hex =>
        `<span class="swatch" style="background:${hex};display:inline-block;width:36px;height:36px;border-radius:8px;margin-right:8px;box-shadow:inset 0 -4px 6px rgba(0,0,0,0.08);vertical-align:middle;"></span>`
    )
    .join('');
  return `<div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
            <div style="font-weight:700">${p.title}</div>
            <div style="padding:8px 14px;background:rgba(0,0,0,0.06);border-radius:12px;margin-top:6px;">${swatches}</div>
          </div>`;
}

// Main roll function
function roll(enabledSections) {
  const paletteLocked = document.querySelector('#lock-palette')?.dataset.locked === 'true';

  if (enabledSections.includes('palette')) {
    if (!paletteLocked) setSection('palette', paletteToHtml(rand(DATA.palettes)));
  } else setSection('palette', 'Ready to roll...');

  Object.keys(sections).forEach(key => {
    if (key === 'palette') return;
    if (enabledSections.includes(key)) setSection(key, rand(DATA[key]));
    else setSection(key, 'Ready to roll...');
  });
}

// Get currently enabled toggles
function getEnabledToggles() {
  const toggles = Array.from(document.querySelectorAll('.config-grid input[type="checkbox"]'));
  return toggles.filter(i => i.checked).map(i => i.id.replace('toggle-', ''));
}

// Initialize all controls and events
function init() {
  // Mix button
  const mixBtn = document.querySelector('#mix-btn');
  if (mixBtn) {
    mixBtn.addEventListener('click', () => {
      const enabled = getEnabledToggles();
      mixBtn.disabled = true;
      mixBtn.classList.add('mixing');
      setTimeout(() => {
        roll(enabled);
        mixBtn.disabled = false;
        mixBtn.classList.remove('mixing');
      }, 250);
    });
  }

  // Lock palette button
  const lockBtn = document.querySelector('#lock-palette');
  if (lockBtn) {
    lockBtn.dataset.locked = 'false';
    lockBtn.addEventListener('click', () => {
      const isLocked = lockBtn.dataset.locked === 'true';
      lockBtn.dataset.locked = (!isLocked).toString();
      lockBtn.textContent = isLocked ? '🔓' : '🔒';
      lockBtn.setAttribute('aria-pressed', (!isLocked).toString());
    });
  }

  // Toggle show/hide cards
  const toggles = Array.from(document.querySelectorAll('.config-grid input[type="checkbox"]'));
  toggles.forEach(toggle => {
    const cardId = 'card-' + toggle.id.replace('toggle-', '');
    const card = document.querySelector('#' + cardId);
    if (card) {
      card.classList.toggle('hidden', !toggle.checked); // initial visibility
      toggle.addEventListener('change', () => {
        card.classList.toggle('hidden', !toggle.checked);
      });
    }
  });

  // Initial roll
  roll(getEnabledToggles());

  // Expose debug object
  window.__ElementMixer = { roll, sections, DATA };
}

// Auto-init
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Export module
export { roll, sections };
