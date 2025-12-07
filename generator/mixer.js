// ===============================
// Element Mixer JS
// ===============================

// DOM elements
const tabs = document.querySelectorAll('.tab'); // Tabs for sections
const sections = document.querySelectorAll('.section'); // Section containers
const cardsContainer = document.querySelector('.cards-container'); // Container for element cards
const generateBtn = document.getElementById('generate-btn'); // Random element generator
const colorBtn = document.getElementById('color-btn'); // Random color generator
const colorOutput = document.getElementById('color-output'); // Display random color

// ===============================
// Section Toggle Functionality
// ===============================
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.dataset.target;

        // Hide all sections
        sections.forEach(sec => sec.classList.add('hidden'));

        // Show target section
        const activeSection = document.querySelector(`#${target}`);
        if (activeSection) activeSection.classList.remove('hidden');

        // Update active tab styling
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

// ===============================
// Element Card Data
// Example structure: customize as needed
// ===============================
const elements = [
    {
        name: 'Sunset Forest',
        theme: 'Nature',
        mood: 'Calm',
        artStyle: 'Digital',
        season: 'Summer',
        character: 'Elf',
        color: '#FF8C42'
    },
    {
        name: 'Cyber City',
        theme: 'Futuristic',
        mood: 'Exciting',
        artStyle: 'Pixel',
        season: 'Night',
        character: 'Robot',
        color: '#1F1F2E'
    },
    {
        name: 'Haunted Manor',
        theme: 'Gothic',
        mood: 'Spooky',
        artStyle: 'Illustration',
        season: 'Autumn',
        character: 'Ghost',
        color: '#4B1A1A'
    },
    // Add more cards here...
];

// ===============================
// Render Cards
// ===============================
function renderCards(filteredElements) {
    cardsContainer.innerHTML = '';
    if (filteredElements.length === 0) {
        cardsContainer.innerHTML = '<p>No matching elements found.</p>';
        return;
    }

    filteredElements.forEach(el => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.style.borderColor = el.color;
        card.innerHTML = `
            <h3>${el.name}</h3>
            <p>Theme: ${el.theme}</p>
            <p>Mood: ${el.mood}</p>
            <p>Art Style: ${el.artStyle}</p>
            <p>Season: ${el.season}</p>
            <p>Character: ${el.character}</p>
        `;
        cardsContainer.appendChild(card);
    });
}

// ===============================
// Filter Cards
// ===============================
function filterCards() {
    let filtered = [...elements];

    sections.forEach(sec => {
        const select = sec.querySelector('select');
        if (select && select.value !== 'any') {
            const key = select.dataset.key;
            filtered = filtered.filter(el => el[key] === select.value);
        }
    });

    renderCards(filtered);
}

// Attach change event to all selects
sections.forEach(sec => {
    const select = sec.querySelector('select');
    if (select) select.addEventListener('change', filterCards);
});

// ===============================
// Random Element Generator
// ===============================
generateBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * elements.length);
    const randomElement = elements[randomIndex];
    renderCards([randomElement]);
});

// ===============================
// Random Color Generator
// ===============================
colorBtn.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    colorOutput.style.backgroundColor = randomColor;
    colorOutput.textContent = randomColor.toUpperCase();
});

// ===============================
// Initial Render
// ===============================
renderCards(elements);

// ===============================
// Smooth animations for cards (fade-in)
// ===============================
cardsContainer.addEventListener('DOMNodeInserted', e => {
    if (e.target.classList && e.target.classList.contains('card')) {
        e.target.classList.add('fade-in');
    }
});
