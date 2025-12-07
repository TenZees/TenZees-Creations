/* mixer.js
   Full behavior:
   - map each .toggle-row label -> the matching .result-card by H3 text
   - mix/randomize content when .mix-btn clicked
   - generate color palette swatches inside color card
   - animations: card flip, button pulse, swatch fade
   - persistence: toggle states saved to localStorage
   - mobile/touch improvements
*/

(() => {
  // ----- Utilities -----
  const rand = arr => arr[Math.floor(Math.random() * arr.length)];
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const qs = s => document.querySelector(s);
  const qsa = s => Array.from(document.querySelectorAll(s));
  const lsKey = 'mixer_toggle_state_v1';

  // ----- Data (customize these lists freely) -----
  const COLOR_PALETTES = [
    { name: "Cotton Candy Pastels", colors: ["#ffd6e6","#ffdbe9","#e7d7ff","#dfe8ff"] },
    { name: "Muted Earth Tones", colors: ["#D6C3A5","#BFA089","#8D6E63","#5A4A3D"] },
    { name: "Neon Cyberpunk", colors: ["#FF00CC","#00E5FF","#7CFF00","#FFB400"] },
    { name: "Vintage Sepia", colors: ["#DAB89E","#C9A37A","#8F6C47","#4D2B16"] },
    { name: "Monochrome Blues", colors: ["#E8F3FF","#BFD9FF","#7EAFFF","#2E6BA6"] },
    { name: "Sunset Gradient", colors: ["#FFB57A","#FF7A7A","#CF6EF5","#7A9BFF"] },
    { name: "Mint + Coral", colors: ["#BFF3E1","#80E6D0","#FF8FA3","#FFB199"] },
    { name: "Lavender Dream", colors: ["#F3E6FF","#DCC3FF","#B8A6FF","#7B6BFF"] }
  ];

  const OBJECTS = [
    "Pocket Watch", "Paper Airplane", "Rusty Key", "Glass Jar", "Brass Compass",
    "Bottle Cap (Worn Post-Apoc)", "Vintage Camera", "Ceramic Teapot",
    "Polaroid Photo", "Mechanical Cog", "Feather Quill"
  ];

  const LOCATIONS = [
    "Abandoned Train Station", "Rooftop Garden", "Foggy Harbor", "Deserted Arcade",
    "Hidden Alley Market", "Forest Ruins", "Cozy Attic", "Sunlit Conservatory",
    "Underground Speakeasy", "Starry Dunes", "Clocktower Balcony"
  ];

  // ----- DOM elements -----
  const mixBtn = qs('.mix-btn');
  if (!mixBtn) {
    console.warn('mixer.js: Could not find .mix-btn in the document.');
    return;
  }

  const toggleRows = qsa('.toggle-row'); // expects: <label class="toggle-row"><span>Label</span><input type=checkbox>...
  const resultCards = qsa('.result-card'); // expects each card has an H3 with its title and a <p> for the value

  // Build mapping: labelText -> { checkbox, cardEl, valueEl }
  const mappings = {};

  // Normalize strings to compare (strip, toUpperCase)
  const norm = s => (s || '').trim().replace(/\s+/g,' ').toUpperCase();

  // populate mappings from result cards first (they define targets)
  resultCards.forEach(card => {
    const titleEl = card.querySelector('h3');
    const valueEl = card.querySelector('p');
    if (!titleEl) return;
    const key = norm(titleEl.textContent);
    mappings[key] = mappings[key] || {};
    mappings[key].card = card;
    mappings[key].valueEl = valueEl || createValueEl(card);
  });

  // helper to create a value <p> if missing
  function createValueEl(card) {
    const p = document.createElement('p');
    card.appendChild(p);
    return p;
  }

  // now wire toggles
  toggleRows.forEach(row => {
    const labelSpan = row.querySelector('span');
    const input = row.querySelector('input[type="checkbox"]');
    if (!labelSpan || !input) return;
    const key = norm(labelSpan.textContent);
    mappings[key] = mappings[key] || {};
    mappings[key].checkbox = input;
    // accessible name: ensure input has aria-label
    if (!input.getAttribute('aria-label')) input.setAttribute('aria-label', labelSpan.textContent.trim());

    // load saved states (if stored)
    const saved = loadToggleState();
    if (saved && saved.hasOwnProperty(key)) {
      input.checked = !!saved[key];
    }

    // change handler: update UI text instantly
    input.addEventListener('change', () => {
      saveToggleState(); // persist
      const map = mappings[key];
      if (!map || !map.valueEl) return;
      if (!input.checked) {
        setDisabled(map.valueEl, map.card);
      } else {
        setReady(map.valueEl, map.card);
      }
    });

    // Improve touch target on mobile by preventing accidental toggles and adding a short vibration if available
    row.addEventListener('touchstart', (ev) => {
      // emphasize tactile feedback on touch devices
      if (navigator.vibrate) navigator.vibrate(15);
      // keep browser behavior; user taps to toggle input
    }, {passive:true});
  });

  // Initialize cards UI based on toggles (on first load)
  Object.keys(mappings).forEach(k => {
    const map = mappings[k];
    if (!map.checkbox) {
      // no toggle for this card — treat as enabled by default
      if (map.valueEl) setReady(map.valueEl, map.card);
      return;
    }
    if (map.checkbox.checked) {
      setReady(map.valueEl, map.card);
    } else {
      setDisabled(map.valueEl, map.card);
    }
  });

  // ----- Persistence -----
  function loadToggleState() {
    try {
      const raw = localStorage.getItem(lsKey);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }
  function saveToggleState() {
    const obj = {};
    Object.keys(mappings).forEach(k => {
      if (mappings[k].checkbox) obj[k] = !!mappings[k].checkbox.checked;
    });
    try {
      localStorage.setItem(lsKey, JSON.stringify(obj));
    } catch (e) {
      // ignore
    }
  }

  // ----- Helpers to change card text and visuals -----
  function setDisabled(valueEl, cardEl) {
    valueEl.textContent = '';
    cardEl.classList.add('card-hidden');
  }

  function setReady(valueEl, cardEl) {
    valueEl.textContent = 'Ready to roll...';
    fadeText(valueEl, 180);
    cardEl.classList.remove('card-hidden');
  }


  // Smooth fade on text changes
  function fadeText(el, ms=200) {
    el.style.transition = `opacity ${ms}ms ease, transform ${ms}ms ease`;
    el.style.opacity = '0';
    el.style.transform = 'translateY(6px)';
    requestAnimationFrame(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }

  // Create swatches inside color card
  function renderPaletteSwatches(cardEl, palette) {
    // remove old
    const old = cardEl.querySelector('.palette-swatches');
    if (old) old.remove();

    const wrap = document.createElement('div');
    wrap.className = 'palette-swatches';
    wrap.style.display = 'flex';
    wrap.style.justifyContent = 'center';
    wrap.style.gap = '8px';
    wrap.style.marginTop = '12px';

    palette.colors.forEach(color => {
      const s = document.createElement('div');
      s.className = 'swatch';
      s.style.width = '28px';
      s.style.height = '28px';
      s.style.borderRadius = '6px';
      s.style.boxShadow = '0 2px 6px rgba(0,0,0,0.12)';
      s.style.background = color;
      s.style.transition = 'transform 220ms ease, opacity 220ms ease';
      wrap.appendChild(s);
    });

    cardEl.appendChild(wrap);

    // animate in
    Array.from(wrap.children).forEach((c, i) => {
      c.style.opacity = '0';
      c.style.transform = 'translateY(8px) scale(.98)';
      setTimeout(() => {
        c.style.opacity = '1';
        c.style.transform = 'translateY(0) scale(1)';
      }, 60 * i);
    });

    return wrap;
  }

  // Flip animation for a card using WAAPI
  function flipCard(cardEl, duration = 420) {
    // try using element.animate if available
    if (cardEl.animate) {
      const anim = cardEl.animate([
        { transform: 'rotateX(0deg)', offset: 0 },
        { transform: 'rotateX(90deg)', offset: 0.5 },
        { transform: 'rotateX(0deg)', offset: 1 }
      ], {
        duration,
        easing: 'cubic-bezier(.2,.9,.2,1)'
      });
      return anim.finished.catch(()=>{});
    } else {
      // fallback: small scale pop
      cardEl.style.transition = 'transform 220ms ease';
      cardEl.style.transform = 'scale(.98)';
      setTimeout(()=> cardEl.style.transform = 'scale(1)', 220);
      return Promise.resolve();
    }
  }

  // Button pulse animation to indicate mixing
  function pulseButton(btn) {
    if (!btn) return;
    btn.animate([
      { transform: 'scale(1)' },
      { transform: 'scale(1.04)' },
      { transform: 'scale(1)' }
    ], { duration: 420, easing: 'ease-out' });
  }

  // ----- Main mixing logic -----
  function doMix() {
    pulseButton(mixBtn);

    // For each mapping decide result (if enabled)
    Object.keys(mappings).forEach(async key => {
      const map = mappings[key];
      // no card -> skip
      if (!map || !map.card) return;

      // If there's a checkbox and it's OFF -> disabled
      if (map.checkbox && !map.checkbox.checked) {
        setDisabled(map.valueEl, map.card);
        return;
      }

      // Choose content by key name heuristics
      if (key.includes('COLOR') || key.includes('PALETTE')) {
        // pick a palette
        const p = rand(COLOR_PALETTES);
        // flip animation then update
        await flipCard(map.card);
        map.valueEl.textContent = p.name;
        // render swatches
        renderPaletteSwatches(map.card, p);
        fadeText(map.valueEl, 200);
      } else if (key.includes('OBJECT')) {
        const o = rand(OBJECTS);
        await flipCard(map.card);
        map.valueEl.textContent = o;
        // remove palette swatches if any
        const sw = map.card.querySelector('.palette-swatches');
        if (sw) sw.remove();
        fadeText(map.valueEl, 160);
      } else if (key.includes('LOCATION')) {
        const loc = rand(LOCATIONS);
        await flipCard(map.card);
        map.valueEl.textContent = loc;
        const sw = map.card.querySelector('.palette-swatches');
        if (sw) sw.remove();
        fadeText(map.valueEl, 160);
      } else {
        // Generic: pick from a combined pool if we don't know
        const pool = [...OBJECTS, ...LOCATIONS, ...COLOR_PALETTES.map(p=>p.name)];
        const pick = rand(pool);
        await flipCard(map.card);
        map.valueEl.textContent = pick;
        const sw = map.card.querySelector('.palette-swatches');
        if (sw) sw.remove();
        fadeText(map.valueEl, 160);
      }
    });
  }

  // wire mix button
  mixBtn.addEventListener('click', (e) => {
    e.preventDefault();
    doMix();
  });

  // Also allow keyboard "Enter" when focused
  mixBtn.addEventListener('keyup', (ev) => {
    if (ev.key === 'Enter' || ev.key === ' ') doMix();
  });

  // Optional: double-tap mix on mobile (two quick taps on container)
  let lastTap = 0;
  qs('.mixer-container')?.addEventListener('touchend', (ev) => {
    const now = Date.now();
    if (now - lastTap < 360) {
      // double tap detected
      doMix();
    }
    lastTap = now;
  }, { passive: true });

  // Save on page unload
  window.addEventListener('beforeunload', saveToggleState);

  // Small accessibility: expose a function to programmatically set lists
  window.__mixer = {
    mixNow: doMix,
    setPalettes: (palettes) => {
      if (!Array.isArray(palettes)) return;
      // expected format: [{name:"", colors:["#fff","#000"...]}]
      // Replace palettes
      try {
        // basic validation
        if (palettes.length && palettes[0].colors) {
          // replace in current run only (not persistent across reload)
          // eslint-disable-next-line no-unused-vars
          COLOR_PALETTES.length = 0;
          palettes.forEach(p => COLOR_PALETTES.push(p));
        }
      } catch (e) {
        console.warn('Invalid palettes format');
      }
    }
  };

  // Improve mobile hit targets (increase tap-size by adding padding dynamically)
  function improveMobileHits() {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (!isTouch) return;
    // increase size of toggle sliders and buttons slightly on touch devices
    qsa('.toggle-slider').forEach(el => {
      el.style.width = '52px';
      el.style.height = '26px';
      el.style.borderRadius = '22px';
      const dot = el.querySelector('::after');
      // can't select pseudo, but we can increase row padding
      const row = el.closest('.toggle-row');
      if (row) row.style.padding = '10px 6px';
    });
    if (mixBtn) {
      mixBtn.style.padding = '18px 48px';
      mixBtn.style.fontSize = '20px';
    }
  }

  // Run improvements now
  improveMobileHits();

  // Expose a small debug helper to console
  console.info('Mixer JS loaded — mappings:', Object.keys(mappings));
})();
