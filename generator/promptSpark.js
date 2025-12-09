/* =============================================
   Prompt Spark — JS System
============================================= */

const promptCard = document.getElementById("prompt-card");
const inspireBtn = document.getElementById("inspire-btn");
const tabs = document.querySelectorAll(".ps-tab");

let currentTheme = "all";

/* =========================
   Prompt Database
========================= */

const prompts = {
    all: [
        "A traveler who collects emotions in glass bottles.",
        "A creature made of stitched-together constellations.",
        "A forgotten door in your house that leads somewhere impossible.",
        "Someone who can speak to broken machines.",
    ],

    fantasy: [
        "A wizard who writes spells on floating paper charms.",
        "A forest that only appears when someone is lost.",
        "A knight whose armor is made of living vines.",
    ],

    scifi: [
        "A robot learning to dream for the first time.",
        "A city powered by bottled thunderstorms.",
        "A spaceship grown like a living organism.",
    ],

    horror: [
        "A smile that doesn't belong to anyone in the room.",
        "Something whispers your name from inside the walls.",
        "A mirror that reflects a version of you that moves differently.",
    ],

    slice: [
        "A cozy café inside a giant tree trunk.",
        "A soft rainy morning with strangers sharing umbrellas.",
        "A character who repairs old toys with magical care.",
    ],

    surreal: [
        "A person whose shadow is trying to escape them.",
        "Rain that falls upward instead of down.",
        "A staircase that loops back to the same step forever.",
    ]
};

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
