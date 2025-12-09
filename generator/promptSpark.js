import { generalPrompts } from './prompts/general.js';
import { slicePrompts } from './prompts/slice.js';
import { surrealPrompts } from './prompts/surreal.js';
import { fantasyPrompts } from './prompts/fantasy.js';
import { sciFiPrompts } from './prompts/sciFi.js';
import { horrorPrompts } from './prompts/horror.js';

const promptCard = document.getElementById("prompt-card");
const inspireBtn = document.getElementById("inspire-btn");
const tabs = document.querySelectorAll(".ps-tab");

let currentTheme = "all";

/* =========================
   Prompt Database
========================= */

const prompts = {
    general: [
        ...generalPrompts,
        ...slicePrompts,
        ...surrealPrompts,
        ...fantasyPrompts,
        ...sciFiPrompts,
        ...horrorPrompts
    ],

    all: generalPrompts, // or other specific prompts for 'all' category

    slice: slicePrompts,
    surreal: surrealPrompts,
    fantasy: fantasyPrompts,
    sciFi: sciFiPrompts,
    horror: horrorPrompts
};

console.log(prompts.general); // This will now contain all the combined prompts
console.log(prompts.all); // Now contains every prompt from all categories

/* =========================
   Generate Prompt
========================= */

function newPrompt() {
    const list = currentTheme === "all"
        ? Object.values(prompts).flat()
        : prompts[currentTheme];

    const prompt = list[Math.floor(Math.random() * list.length)];

    promptCard.style.opacity = 0;
    setTimeout(() => {
        promptCard.textContent = prompt;
        promptCard.style.opacity = 1;
    }, 200);
}

inspireBtn.addEventListener("click", newPrompt);

/* =========================
   Tabs
========================= */

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        currentTheme = tab.dataset.theme;
        newPrompt();
    });
});
