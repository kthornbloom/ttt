/**
 * Keybindings with localStorage persistence.
 * Used alongside levels/characters unlock data.
 */
const STORAGE_KEY = 'ttt-keybindings';

const DEFAULT_KEYBINDINGS = {
  forward: 'KeyW',
  backward: 'KeyS',
  turnLeft: 'KeyA',
  turnRight: 'KeyD',
  fire: 'Space',
  weapon1: 'Digit1',
  weapon2: 'Digit2',
  aimUp: 'ArrowUp',
  aimDown: 'ArrowDown',
  boost: 'ShiftLeft',
  resetAim: 'ShiftRight',
  zoomIn: 'Minus',
  zoomOut: 'Equal',
  pause: 'Escape'
};

// Alternate keys that also trigger the same action (not remappable, for convenience)
const ALTERNATE_KEYS = {
  zoomIn: ['NumpadSubtract'],
  zoomOut: ['NumpadAdd'],
  boost: ['ShiftRight']
};

let keybindings = { ...DEFAULT_KEYBINDINGS };

function loadKeybindings() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      keybindings = { ...DEFAULT_KEYBINDINGS, ...parsed };
    }
  } catch {
    keybindings = { ...DEFAULT_KEYBINDINGS };
  }
  return keybindings;
}

function saveKeybindings() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(keybindings));
}

function getKeyForAction(action) {
  return keybindings[action] ?? DEFAULT_KEYBINDINGS[action];
}

function setKeyForAction(action, keyCode) {
  if (action in DEFAULT_KEYBINDINGS) {
    keybindings[action] = keyCode;
    saveKeybindings();
  }
}

function getActionForKey(keyCode) {
  for (const [action, key] of Object.entries(keybindings)) {
    if (key === keyCode) return action;
  }
  for (const [action, alts] of Object.entries(ALTERNATE_KEYS)) {
    if (alts.includes(keyCode)) return action;
  }
  return null;
}

function isKeyForAction(keysObj, action) {
  const primary = getKeyForAction(action);
  if (keysObj[primary]) return true;
  const alts = ALTERNATE_KEYS[action];
  if (alts) return alts.some((k) => keysObj[k]);
  return false;
}

function resetToDefaults() {
  keybindings = { ...DEFAULT_KEYBINDINGS };
  saveKeybindings();
}

function getAllKeybindings() {
  return { ...keybindings };
}

function formatKeyCode(code) {
  const map = {
    Space: 'Space',
    ArrowUp: '↑',
    ArrowDown: '↓',
    ArrowLeft: '←',
    ArrowRight: '→',
    ShiftLeft: 'L Shift',
    ShiftRight: 'R Shift',
    ControlLeft: 'L Ctrl',
    ControlRight: 'R Ctrl',
    AltLeft: 'L Alt',
    AltRight: 'R Alt',
    Digit1: '1',
    Digit2: '2',
    Digit3: '3',
    Digit4: '4',
    Digit5: '5',
    Digit6: '6',
    Digit7: '7',
    Digit8: '8',
    Digit9: '9',
    Digit0: '0',
    NumpadAdd: 'Num +',
    NumpadSubtract: 'Num -',
    Minus: '-',
    Equal: '=',
    Escape: 'Esc'
  };
  if (map[code]) return map[code];
  if (code?.startsWith('Key')) return code.slice(3).toUpperCase();
  return code || '—';
}

const ACTION_LABELS = {
  forward: 'Forward',
  backward: 'Backward',
  turnLeft: 'Turn Left',
  turnRight: 'Turn Right',
  fire: 'Fire',
  weapon1: 'Weapon 1',
  weapon2: 'Weapon 2',
  aimUp: 'Aim Up',
  aimDown: 'Aim Down',
  boost: 'Boost',
  resetAim: 'Reset Aim',
  zoomIn: 'Zoom In',
  zoomOut: 'Zoom Out',
  pause: 'Pause / Menu'
};

export {
  loadKeybindings,
  saveKeybindings,
  getKeyForAction,
  setKeyForAction,
  getActionForKey,
  isKeyForAction,
  resetToDefaults,
  getAllKeybindings,
  formatKeyCode,
  ACTION_LABELS,
  DEFAULT_KEYBINDINGS
};
