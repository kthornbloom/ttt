/**
 * Central audio volume and menu music.
 * overallVolume: master for all game/menu SFX (0–1)
 * musicVolume: menu music level (0–1), played softly
 */
const STORAGE_KEY = 'ttt-audio';
const MUSIC_FILES = [
  '/assets/audio/music/Neon Pixel Dreams.mp3',
  '/assets/audio/music/Neon Afterimage.mp3'
];

function loadStored() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return {
        overallVolume: typeof parsed.overallVolume === 'number' ? parsed.overallVolume : 0.5,
        musicVolume: typeof parsed.musicVolume === 'number' ? parsed.musicVolume : 0.6
      };
    }
  } catch (_) {}
  return { overallVolume: 0.5, musicVolume: 0.6 };
}

function saveStored() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      overallVolume: _overallVolume,
      musicVolume: _musicVolume
    }));
  } catch (_) {}
}

let _overallVolume = 0.5;
let _musicVolume = 0.6;
let masterGainNode = null;
let menuMusicEl = null;
let assetFn = (p) => p;

const stored = loadStored();
_overallVolume = stored.overallVolume;
_musicVolume = stored.musicVolume;

export function setAssetFn(fn) {
  assetFn = fn;
}

export function getOverallVolume() {
  return _overallVolume;
}

/** Effective gain for SFX: 50% slider = 1.0, 100% = 2.0. Use for Web Audio. */
export function getEffectiveSfxGain() {
  return _overallVolume * 2;
}

/** Effective volume for HTML5 Audio (capped at 1). */
export function getEffectiveSfxVolume() {
  return Math.min(1, _overallVolume * 2);
}

export function setOverallVolume(v) {
  _overallVolume = Math.max(0, Math.min(1, v));
  if (masterGainNode) masterGainNode.gain.value = _overallVolume * 2; // 50% slider = 1.0 gain, 100% = 2.0 boost
  saveStored();
}

export function getMusicVolume() {
  return _musicVolume;
}

export function setMusicVolume(v) {
  _musicVolume = Math.max(0, Math.min(1, v));
  if (menuMusicEl) {
    menuMusicEl.volume = _musicVolume * 0.4; // soft by default
  }
  saveStored();
}

/** Initialize master gain for game sounds. Call from main.js with its audioCtx. */
export function initMasterGain(audioCtx) {
  if (masterGainNode) return masterGainNode;
  masterGainNode = audioCtx.createGain();
  masterGainNode.gain.value = _overallVolume * 2;
  masterGainNode.connect(audioCtx.destination);
  return masterGainNode;
}

export function getMasterGain() {
  return masterGainNode;
}

/** Play menu music (looping, softly). Call when showing tank-select or level-select. */
export function playMenuMusic() {
  if (menuMusicEl) {
    menuMusicEl.play().catch(() => {});
    return;
  }
  const idx = Math.floor(Math.random() * MUSIC_FILES.length);
  const url = assetFn(MUSIC_FILES[idx]);
  const el = new Audio(url);
  el.loop = true;
  el.volume = _musicVolume * 0.4; // soft
  el.play().catch(() => {});
  menuMusicEl = el;
}

/** Stop menu music. Call when entering game. */
export function stopMenuMusic() {
  if (menuMusicEl) {
    menuMusicEl.pause();
    menuMusicEl.currentTime = 0;
  }
}
