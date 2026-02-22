/**
 * Splash / Landing page for Teeny Tiny Tanks
 * Set devmode = true to skip straight to the game
 */
const devmode = false;

const asset = (path) => import.meta.env.BASE_URL + path.replace(/^\//, '');

const LEVELS = [
  { id: 'level-01', name: 'Level 1', selectable: true },
  { id: 'level-02', name: 'Level 2', selectable: false },
  { id: 'level-03', name: 'Level 3', selectable: false },
  { id: 'level-04', name: 'Level 4', selectable: false },
  { id: 'level-05', name: 'Level 5', selectable: false },
  { id: 'level-06', name: 'Level 6', selectable: false },
  { id: 'level-07', name: 'Level 7', selectable: false },
  { id: 'level-08', name: 'Level 8', selectable: false },
  { id: 'level-09', name: 'Level 9', selectable: false },
  { id: 'level-10', name: 'Level 10', selectable: false }
];

async function loadGame() {
  const { init } = await import('./main.js');
  init();
}

function showLevelSelect() {
  document.getElementById('splash-start').classList.add('hidden');
  document.getElementById('logo-container').classList.add('hidden');
  document.getElementById('level-select').classList.remove('hidden');
  const logoImg = document.querySelector('#level-select-logo img');
  if (logoImg) logoImg.src = asset('/assets/images/Logo.svg');
}

function selectLevel(levelId) {
  document.getElementById('splash').classList.add('hidden');
  document.getElementById('game-container').classList.remove('hidden');
  loadGame();
}

async function runLogoAnimation() {
  const words = ['TEENY', 'TINY', 'TANKS'];
  const shadowIds = ['TEENY-Shadow', 'TINY-Shadow', 'TANKS-Shadow'];

  // Initial state: words above viewport, shadows at 0 opacity/scale (SVG is inlined in doc)
  words.forEach((word, i) => {
    const g = document.getElementById(word);
    const shadow = document.getElementById(shadowIds[i]);
    if (g) g.style.transform = 'translateY(-120%)';
    if (shadow) {
      shadow.style.opacity = '0';
      shadow.style.transform = 'scale(0)';
      shadow.style.transformOrigin = 'center center';
    }
  });

  const DROP_DURATION = 300;
  const SHADOW_DURATION = 200;
  const STAGGER = 300;

  for (let i = 0; i < words.length; i++) {
    const wordEl = document.getElementById(words[i]);
    const shadowEl = document.getElementById(shadowIds[i]);

    // Animate shadow: opacity 0→1, scale 0→1 (starts before word lands)
    if (shadowEl) {
      shadowEl.animate(
        [
          { opacity: 0, transform: 'scale(0)' },
          { opacity: 1, transform: 'scale(1)' }
        ],
        { duration: SHADOW_DURATION, fill: 'forwards', easing: 'ease-out' }
      ).play();
    }

    // Animate word: fall from top, then bounce (reach endpoint, bounce back, settle)
    if (wordEl) {
      wordEl.animate(
        [
          { transform: 'translateY(-120%)' },
          { transform: 'translateY(0)', offset: 0.55 },
          { transform: 'translateY(-10%)', offset: 0.65 },
          { transform: 'translateY(0)', offset: 0.75 },
          { transform: 'translateY(-4%)', offset: 0.85 },
          { transform: 'translateY(0)', offset: 1 }
        ],
        { duration: DROP_DURATION, fill: 'forwards', easing: 'linear' }
      ).play();
      // Play theme when first word lands (55% through animation)
      if (i === 0) {
        setTimeout(() => {
          const snd = new Audio(asset('/assets/audio/teenytinytanks.mp3'));
          snd.play().catch(() => {});
        }, DROP_DURATION * 0.55);
      }
    }

    await new Promise(r => setTimeout(r, DROP_DURATION + STAGGER));
  }
}

async function initSplash() {
  const startBtn = document.getElementById('start-btn');
  const levelList = document.getElementById('level-list');

  // Build level grid
  levelList.innerHTML = LEVELS.map(l =>
    `<div class="level-card ${l.selectable ? '' : 'locked'}" data-level="${l.id}" data-selectable="${l.selectable}">
      <div class="level-card-img">${l.id.replace('level-', '')}</div>
      <span class="level-card-name">${l.name}</span>
    </div>`
  ).join('');

  levelList.querySelectorAll('.level-card').forEach(card => {
    card.addEventListener('click', () => {
      if (card.dataset.selectable === 'true') selectLevel(card.dataset.level);
    });
  });

  startBtn.addEventListener('click', showLevelSelect);

  await runLogoAnimation();
  document.getElementById('splash-start').classList.remove('ghosted');
}

document.addEventListener('DOMContentLoaded', async () => {
  if (devmode) {
    document.getElementById('splash').classList.add('hidden');
    document.getElementById('game-container').classList.remove('hidden');
    loadGame();
    return;
  }
  await initSplash();
});
