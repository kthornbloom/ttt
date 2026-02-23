/**
 * Controls modal: shows on first level-01 launch (keyboard mode),
 * and can be opened via Controls button on loss/win overlays.
 * Supports key remapping with localStorage persistence.
 */
import {
  loadKeybindings,
  getKeyForAction,
  setKeyForAction,
  resetToDefaults,
  getAllKeybindings,
  formatKeyCode,
  ACTION_LABELS,
  DEFAULT_KEYBINDINGS
} from './keybindings.js';

let modalEl = null;
let listeningForAction = null;
let escapeHandler = null;

function ensureModal() {
  if (modalEl) return modalEl;
  loadKeybindings();
  modalEl = document.createElement('div');
  modalEl.className = 'controls-modal-overlay hidden';
  modalEl.innerHTML = `
    <div class="controls-modal">
      <h2>Controls</h2>
      <div class="controls-list" id="controls-list"></div>
      <div class="controls-modal-actions">
        <button type="button" class="controls-reset-btn" id="controls-reset-btn">Reset All</button>
        <button type="button" class="controls-close-btn" id="controls-close-btn">GOT IT</button>
      </div>
    </div>
  `;
  modalEl.addEventListener('click', (e) => {
    if (e.target === modalEl) hideModal();
  });
  modalEl.querySelector('#controls-close-btn').addEventListener('click', hideModal);
  modalEl.querySelector('#controls-reset-btn').addEventListener('click', () => {
    resetToDefaults();
    renderControlsList();
  });
  document.body.appendChild(modalEl);
  return modalEl;
}

function renderControlsList() {
  const list = document.getElementById('controls-list');
  if (!list) return;
  const bindings = getAllKeybindings();
  list.innerHTML = Object.entries(ACTION_LABELS).map(([action, label]) => {
    const key = bindings[action];
    const isListening = listeningForAction === action;
    return `
      <div class="controls-row ${isListening ? 'listening' : ''}" data-action="${action}">
        <span class="controls-label">${label}</span>
        <span class="controls-key">${isListening ? 'Press key...' : formatKeyCode(key)}</span>
      </div>
    `;
  }).join('');
  list.querySelectorAll('.controls-row').forEach((row) => {
    row.addEventListener('click', () => startListening(row.dataset.action));
  });
}

function startListening(action) {
  listeningForAction = action;
  renderControlsList();
  const handler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.code === 'Escape') {
      listeningForAction = null;
      renderControlsList();
      window.removeEventListener('keydown', handler);
      return;
    }
    if (e.repeat) return;
    setKeyForAction(action, e.code);
    listeningForAction = null;
    renderControlsList();
    window.removeEventListener('keydown', handler);
  };
  window.addEventListener('keydown', handler, { once: true });
}

function showModal() {
  ensureModal();
  renderControlsList();
  modalEl.classList.remove('hidden');
  escapeHandler = (e) => {
    if (e.code === 'Escape' && !listeningForAction) {
      hideModal();
    }
  };
  document.addEventListener('keydown', escapeHandler);
}

function hideModal() {
  if (modalEl) modalEl.classList.add('hidden');
  listeningForAction = null;
  if (escapeHandler) {
    document.removeEventListener('keydown', escapeHandler);
    escapeHandler = null;
  }
}

export function showControlsIfFirstLevel01(isKeyboardMode, levelId) {
  if (!isKeyboardMode || levelId !== 'level-01') return;
  showModal();
}

export function showControlsModal() {
  showModal();
}

export function isControlsModalOpen() {
  return modalEl && !modalEl.classList.contains('hidden');
}

export { hideModal };
