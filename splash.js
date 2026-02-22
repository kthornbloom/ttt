/**
 * Splash / Landing page for Teeny Tiny Tanks
 * Set devmode = true to skip straight to the game
 */
const devmode = false;

const asset = (path) => import.meta.env.BASE_URL + path.replace(/^\//, '');

import { getLevels } from './levels.js';
import { getCharacters } from './characters.js';
import { initTankPreview, setTankCharacter, destroyTankPreview } from './tank-preview.js';

let selectedTankId = 'tank-01';
let characters = [];
let tankIndex = 0;

function playQuickClick() {
  const snd = new Audio(asset('/assets/audio/quickclick.mp3'));
  snd.play().catch(() => {});
}

function playTankSpeech(char) {
  const path = char?.speechPath || `/assets/audio/speech/${char?.name}.mp3`;
  const snd = new Audio(asset(path));
  snd.play().catch(() => {});
}

async function loadGame(levelId = 'level-01', tankId = 'tank-01') {
  const { init } = await import('./main.js');
  init(levelId, tankId);
}

function showTankSelect() {
  document.getElementById('splash-start').classList.add('hidden');
  document.getElementById('logo-container').classList.add('hidden');
  document.getElementById('tank-select').classList.remove('hidden');
  initTankSelect();
}

function showLevelSelect() {
  document.getElementById('tank-select').classList.add('hidden');
  document.getElementById('level-select').classList.remove('hidden');
  const logoImg = document.querySelector('#level-select-logo img');
  if (logoImg) logoImg.src = asset('/assets/images/Logo.svg');
  buildLevelGrid();
}

function showTankSelectFromLevel() {
  document.getElementById('level-select').classList.add('hidden');
  document.getElementById('tank-select').classList.remove('hidden');
}

function selectLevel(levelId) {
  document.getElementById('splash').classList.add('hidden');
  document.getElementById('game-container').classList.remove('hidden');
  destroyTankPreview();
  loadGame(levelId, selectedTankId);
}

async function initTankSelect() {
  characters = await getCharacters();
  if (characters.length === 0) return;
  tankIndex = 0;
  selectedTankId = characters[0].id;
  await updateTankDisplay();
  playTankSpeech(characters[0]);

  const canvas = document.getElementById('tank-preview-canvas');
  await initTankPreview(canvas, characters[0]);

  const leftBtn = document.getElementById('tank-arrow-left');
  const rightBtn = document.getElementById('tank-arrow-right');
  const continueBtn = document.getElementById('tank-select-continue');
  leftBtn.onclick = () => cycleTank(-1);
  rightBtn.onclick = () => cycleTank(1);
  leftBtn.onmouseenter = rightBtn.onmouseenter = continueBtn.onmouseenter = playQuickClick;
  continueBtn.onclick = () => {
    if (characters[tankIndex]?.isUnlocked) showLevelSelect();
  };
}

async function cycleTank(delta) {
  tankIndex = (tankIndex + delta + characters.length) % characters.length;
  const char = characters[tankIndex];
  selectedTankId = char.id;
  await updateTankDisplay();
  await setTankCharacter(char);
  playTankSpeech(char);
}

function statBar(value, max, label) {
  const filled = Math.min(10, Math.round((value / max) * 10));
  const notches = Array.from({ length: 10 }, (_, i) =>
    `<span class="tank-stat-notch ${i < filled ? 'filled' : ''}"></span>`
  ).join('');
  return `<div class="tank-stat-row"><span class="tank-stat-label">${label}</span><div class="tank-stat-bar">${notches}</div></div>`;
}

async function updateTankDisplay() {
  const char = characters[tankIndex];
  if (!char) return;
  document.getElementById('tank-name').textContent = char.name;
  const weaponsStr = char.weapons?.map((w) => w.name).join(', ') ?? 'Cannon';
  document.getElementById('tank-stats').innerHTML = `
    ${statBar(char.health, 150, 'HP')}
    ${statBar(char.speed, 20, 'Spd')}
    ${statBar(char.acceleration, 1.5, 'Acc')}
    <div class="tank-stat-row"><span class="tank-stat-label">Weapons</span><span>${weaponsStr}</span></div>
    ${!char.isUnlocked ? '<span style="color:#ff6b6b;">Locked</span>' : ''}
  `;
  const btn = document.getElementById('tank-select-continue');
  btn.disabled = !char.isUnlocked;
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

  startBtn.addEventListener('click', showTankSelect);
  startBtn.addEventListener('mouseenter', playQuickClick);

  await runLogoAnimation();
  document.getElementById('splash-start').classList.remove('ghosted');
}

function buildLevelGrid() {
  const levelList = document.getElementById('level-list');
  if (!levelList) return;
  const backBtn = document.getElementById('level-select-back');
  if (backBtn) {
    backBtn.onclick = showTankSelectFromLevel;
    backBtn.onmouseenter = playQuickClick;
  }
  getLevels().then((levels) => {
    levelList.innerHTML = levels.map((l) =>
      `<div class="level-card ${l.unlocked ? '' : 'locked'}" data-level="${l.id}" data-selectable="${l.unlocked}" data-difficulty="${l.difficulty ?? 1}">
        <div class="level-card-img">${l.order}</div>
        <span class="level-card-name">${l.name}</span>
      </div>`
    ).join('');

    levelList.querySelectorAll('.level-card').forEach((card) => {
      card.addEventListener('click', () => {
        if (card.dataset.selectable === 'true') selectLevel(card.dataset.level);
      });
      card.addEventListener('mouseenter', playQuickClick);
    });
  });
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
