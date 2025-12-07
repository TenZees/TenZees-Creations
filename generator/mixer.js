// mixer.js - simple, robust version
(() => {
  const rand = arr => arr[Math.floor(Math.random() * arr.length)];

  const COLOR_PALETTES = [
    { name: "Cotton Candy Pastels", colors: ["#ffd6e6","#ffdbe9","#e7d7ff","#dfe8ff"] },
    { name: "Muted Earth Tones", colors: ["#D6C3A5","#BFA089","#8D6E63","#5A4A3D"] },
    { name: "Neon Cyberpunk", colors: ["#FF00CC","#00E5FF","#7CFF00","#FFB400"] },
    { name: "Vintage Sepia", colors: ["#DAB89E","#C9A37A","#8F6C47","#4D2B16"] }
  ];

  const OBJECTS = [
    "Pocket Watch","Paper Airplane","Rusty Key","Glass Jar","Brass Compass",
    "Bottle Cap (Worn Post-Apoc)","Vintage Camera","Ceramic Teapot"
  ];

  const LOCATIONS = [
    "Abandoned Train Station","Rooftop Garden","Foggy Harbor","Deserted Arcade",
    "Hidden Alley Market","Forest Ruins","Cozy Attic"
  ];

  // Select DOM elements
  const mixBtn = document.getElementById('mixBtn');
  const toggleRows = Array.from(document.querySelectorAll('.toggle-row'));
  const resultCards = Array.from(document.querySelectorAll('.result-card'));

  // Build mapping from card title text -> card element + value element
  const normalize = s => (s || '').trim().replace(/\s+/g,' ').toUpperCase();
  const mappings = {}; // key -> { cardEl, valueEl, checkbox }

  resultCards.forEach(card => {
    const h3 = card.querySelector('h3');
    const p = card.querySelector('.value') || card.querySelector('p') || null;
    if (!h3) return;
    const key = normalize(h3.textContent);
    mappings[key] = mappings[key] || {};
    mappings[key].cardEl = card;
    mappings[key].valueEl = p;
  });

  toggleRows.forEach(row => {
    const label = row.querySelector('span');
    const input = row.querySelector('input[type="checkbox"]');
    if (!label || !input) return;
    const key = normalize(label.textContent);
    mappings[key] = mappings[key] || {};
    mappings[key].checkbox = input;

    // on change: show/hide corresponding card
    input.addEventListener('change', () => {
      const map = mappings[key];
      if (!map || !map.cardEl) return;
      if (input.checked) {
        map.cardEl.classList.remove('card-hidden');
        if (map.valueEl) map.valueEl.textContent = 'Ready to roll...';
      } else {
        map.cardEl.classList.add('card-hidden');
        // if palette swatches exist, remove them
        const sw = map.cardEl.querySelector('.palette-swatches');
        if (sw) sw.remove();
      }
    });

    // initialize initial visibility (in case default checked differs)
    if (!input.checked && mappings[key] && mappings[key].cardEl) {
      mappings[key].cardEl.classList.add('card-hidden');
    }
  });

  // helper to render palette swatches inside a card
  function renderSwatches(cardEl, palette) {
    // remove existing
    const old = cardEl.querySelector('.palette-swatches');
    if (old) old.remove();
    const wrap = document.createElement('div');
    wrap.className = 'palette-swatches';
    palette.colors.forEach(c => {
      const s = document.createElement('div');
      s.className = 'swatch';
      s.style.width = '28px';
      s.style.height = '28px';
      s.style.borderRadius = '6px';
      s.style.background = c;
      s.style.boxShadow = '0 2px 6px rgba(0,0,0,.12)';
      wrap.appendChild(s);
    });
    cardEl.appendChild(wrap);
  }

  // Flip/small animation for a card (simple)
  function animateCard(cardEl) {
    cardEl.style.transition = 'transform .26s ease';
    cardEl.style.transform = 'rotateX(8deg) scale(.998)';
    setTimeout(()=> {
      cardEl.style.transform = '';
    }, 260);
  }

  // Main mix function
  function doMix() {
    // For each mapping (cards)
    Object.keys(mappings).forEach(key => {
      const map = mappings[key];
      if (!map || !map.cardEl) return;
      // if checkbox exists and is unchecked -> skip (hidden)
      if (map.checkbox && !map.checkbox.checked) return;

      // decide which pool to pick from by key
      if (key.includes('COLOR') || key.includes('PALETTE')) {
        const p = rand(COLOR_PALETTES);
        if (map.valueEl) map.valueEl.textContent = p.name;
        renderSwatches(map.cardEl, p);
        animateCard(map.cardEl);
      } else if (key.includes('OBJECT')) {
        const o = rand(OBJECTS);
        if (map.valueEl) map.valueEl.textContent = o;
        const sw = map.cardEl.querySelector('.palette-swatches');
        if (sw) sw.remove();
        animateCard(map.cardEl);
      } else if (key.includes('LOCATION')) {
        const l = rand(LOCATIONS);
        if (map.valueEl) map.valueEl.textContent = l;
        const sw = map.cardEl.querySelector('.palette-swatches');
        if (sw) sw.remove();
        animateCard(map.cardEl);
      } else {
        // generic fallback
        const fallback = rand([...OBJECTS, ...LOCATIONS, COLOR_PALETTES.map(p=>p.name)]);
        if (map.valueEl) map.valueEl.textContent = fallback;
        animateCard(map.cardEl);
      }
    });
  }

  // wire mix button
  if (mixBtn) {
    mixBtn.addEventListener('click', () => {
      doMix();
    });
  } else {
    console.error('mixBtn not found');
  }

  // expose for debugging
  window.__mixer_debug = { mappings, doMix };
})();
