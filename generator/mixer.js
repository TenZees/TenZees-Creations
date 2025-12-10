// mixer.js — Element Mixer logic (module)
import { DATA, sections } from './data.js'; // make sure sections is exported from dataSource

// Utility function to pick a random element
const rand = arr => arr[Math.floor(Math.random() * arr.length)];
const lockBtn = document.querySelector('#lock-palettes');
const paletteLocked = document.querySelector('#lock-palettes')?.dataset.locked === 'true';


// Convert palette object to HTML
function paletteToHtml(p) {
  if (!p) return 'Ready to roll...';
  const swatches = p.swatches
    .map(hex => `<span class="swatch" style="background:${hex};display:inline-block;width:36px;height:36px;border-radius:8px;margin-right:8px;box-shadow:inset 0 -4px 6px rgba(0,0,0,0.08);vertical-align:middle;"></span>`)
    .join('');
  return `<div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
            <div style="font-weight:700">${p.title}</div>
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

  // If value is an object/array, stringify it for display
  if (typeof value === 'objects') {
    box.innerHTML = JSON.stringify(value, null, 2);
  } else {
    box.innerHTML = value;
  }
}

// Main roll function
function roll(enabledSections) {
  const paletteLocked = document.querySelector('#lock-palettes')?.dataset.locked === 'true';

  Object.keys(sections).forEach(key => {
    if (key === 'palettes') {
      if (enabledSections.includes('palettes')) {
        if (!paletteLocked) setSection('palettes', paletteToHtml(rand(DATA.palettes)));
      } else {
        setSection('palettes', 'Ready to roll...');
      }
    } else {
      if (enabledSections.includes(key)) setSection(key, rand(DATA[key]));
      else setSection(key, 'Ready to roll...');
    }
  });
}

// Get all toggles that are checked
function getEnabledToggles() {
  const toggles = Array.from(document.querySelectorAll('.config-grid input[type="checkbox"]'));
  return toggles.filter(t => t.checked).map(t => t.id.replace('toggle-', ''));
}

// Initialize everything
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
  const lockBtn = document.querySelector('#lock-palettes');
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
    if (!card) return;

    // Initial visibility
    card.classList.toggle('hidden', !toggle.checked);

    // Listen for changes
    toggle.addEventListener('change', () => {
      card.classList.toggle('hidden', !toggle.checked);
    });
  });

  // Initial roll
  roll(getEnabledToggles());

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
