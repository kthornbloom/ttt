/**
 * Splash / Landing page for Teeny Tiny Tanks
 * Set devmode = true to skip straight to the game
 */
const devmode = false;

const asset = (path) => import.meta.env.BASE_URL + path.replace(/^\//, '');

import { getLevels } from './levels.js';
import { getCharacters } from './characters.js';
import { initTankPreview, setTankCharacter, setTankPreviewWeapon, destroyTankPreview } from './tank-preview.js';
import { setInputModeFromPointerEvent } from './input-mode.js';
import { getOverallVolume, getEffectiveSfxVolume, getMusicVolume, playMenuMusic, setAssetFn, setOverallVolume, setMusicVolume } from './audio.js';

let selectedTankId = 'tank-01';
let characters = [];
let tankIndex = 0;

function playQuickClick() {
  const snd = new Audio(asset('/assets/audio/quickclick.mp3'));
  snd.volume = getEffectiveSfxVolume();
  snd.play().catch(() => {});
}

function playTankSpeech(char) {
  const path = char?.speechPath || `/assets/audio/speech/${char?.name}.mp3`;
  const snd = new Audio(asset(path));
  snd.volume = getEffectiveSfxVolume();
  snd.play().catch(() => {});
}

async function loadGame(levelId = 'level-01', tankId = 'tank-01') {
  const { init } = await import('./main.js');
  await init(levelId, tankId);
}

function showVolumeControls(show) {
  const el = document.getElementById('volume-controls');
  if (el) el.classList.toggle('hidden', !show);
}

function showTankSelect() {
  document.getElementById('splash-start-intro').classList.add('hidden');
  document.getElementById('logo-container').classList.add('hidden');
  document.getElementById('tank-select').classList.remove('hidden');
  showVolumeControls(true);
  playMenuMusic();
  initTankSelect();
}

function showLevelSelect() {
  document.getElementById('tank-select').classList.add('hidden');
  document.getElementById('level-select').classList.remove('hidden');
  showVolumeControls(true);
  playMenuMusic();
  const logoImg = document.querySelector('#level-select-logo img');
  if (logoImg) logoImg.src = asset('/assets/images/Logo.svg');
  buildLevelGrid();
}

function showTankSelectFromLevel() {
  document.getElementById('level-select').classList.add('hidden');
  document.getElementById('tank-select').classList.remove('hidden');
}

async function selectLevel(levelId) {
  document.getElementById('splash').classList.add('hidden');
  document.getElementById('game-container').classList.remove('hidden');
  document.getElementById('loading-overlay').classList.remove('hidden');
  destroyTankPreview();
  await loadGame(levelId, selectedTankId);
  document.getElementById('loading-overlay').classList.add('hidden');
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
  const weaponsStr = (char.weapons?.length
    ? char.weapons.map((w, i) => `<div class="weapon-display" data-weapon-index="${i}" role="button" tabindex="0">${w.name}</div>`).join('')
    : `<div class="weapon-display" data-weapon-index="0">Cannon</div>`);
  document.getElementById('tank-stats').innerHTML = `
    ${statBar(char.health, 150, 'HEALTH')}
    ${statBar(char.speed, 20, 'SPEED')}
    ${statBar(char.acceleration, 1.5, 'ACCEL')}
    ${statBar(char.firepower ?? 5, 10, 'FIREPWR')}
    <div class="weapons-row">${weaponsStr}</div>
    ${!char.isUnlocked ? '<span style="color:#ff6b6b;">Locked</span>' : ''}
  `;
  document.querySelectorAll('.weapon-display').forEach((el) => {
    el.onclick = () => {
      const idx = parseInt(el.dataset.weaponIndex, 10);
      if (!isNaN(idx)) {
        playQuickClick();
        setTankPreviewWeapon(idx);
        document.querySelectorAll('.weapon-display').forEach((e) => e.classList.remove('weapon-display-active'));
        el.classList.add('weapon-display-active');
      }
    };
  });
  const firstWeapon = document.querySelector('.weapon-display');
  if (firstWeapon) firstWeapon.classList.add('weapon-display-active');
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
          const snd = new Audio(asset('/assets/audio/speech/teenytinytanks.mp3'));
          snd.volume = getEffectiveSfxVolume();
          snd.play().catch(() => {});
        }, DROP_DURATION * 0.55);
      }
    }

    await new Promise(r => setTimeout(r, DROP_DURATION + STAGGER));
  }
}

async function onStartClick() {
  const startBtn = document.getElementById('start-btn');
  const introDiv = document.getElementById('splash-start-intro');
  introDiv.classList.add('hidden');
  document.getElementById('logo-container').classList.remove('hidden');
  await runLogoAnimation();
  await new Promise((r) => setTimeout(r, 1000));
  showTankSelect();
}

function initSplash() {
  const startBtn = document.getElementById('start-btn');
  startBtn.addEventListener('pointerdown', (e) => setInputModeFromPointerEvent(e), { capture: true });
  startBtn.addEventListener('click', onStartClick);
  startBtn.addEventListener('mouseenter', playQuickClick);
}

export function goToMainMenu() {
  document.getElementById('game-container').classList.add('hidden');
  document.getElementById('splash').classList.remove('hidden');
  document.getElementById('tank-select').classList.add('hidden');
  document.getElementById('level-select').classList.remove('hidden');
  showVolumeControls(true);
  playMenuMusic();
  const logoImg = document.querySelector('#level-select-logo img');
  if (logoImg) logoImg.src = asset('/assets/images/Logo.svg');
  buildLevelGrid();
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

function updateSliderFill(el) {
  if (el) el.style.setProperty('--fill', el.value + '%');
}

function initVolumeSliders() {
  const sfxEl = document.getElementById('volume-sfx');
  const musicEl = document.getElementById('volume-music');
  if (sfxEl) {
    sfxEl.value = Math.round(getOverallVolume() * 100);
    updateSliderFill(sfxEl);
    sfxEl.addEventListener('input', () => {
      setOverallVolume(sfxEl.value / 100);
      updateSliderFill(sfxEl);
    });
  }
  if (musicEl) {
    musicEl.value = Math.round(getMusicVolume() * 100);
    updateSliderFill(musicEl);
    musicEl.addEventListener('input', () => {
      setMusicVolume(musicEl.value / 100);
      updateSliderFill(musicEl);
    });
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  setAssetFn(asset);
  initVolumeSliders();
  if (devmode) {
    document.getElementById('splash').classList.add('hidden');
    document.getElementById('game-container').classList.remove('hidden');
    document.getElementById('loading-overlay').classList.remove('hidden');
    await loadGame();
    document.getElementById('loading-overlay').classList.add('hidden');
    return;
  }
  initSplash();
});
