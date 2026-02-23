/**
 * Tracks whether the user's first interaction was touch or mouse.
 * Set on the very first START button interaction; used throughout the session.
 */
let _inputMode = null; // 'touch' | 'mouse' | null (not yet determined)

export function setInputModeFromPointerEvent(e) {
  if (_inputMode !== null) return;
  _inputMode = e.pointerType === 'touch' ? 'touch' : 'mouse';
}

export function isTouchMode() {
  return _inputMode === 'touch';
}

export function isMouseMode() {
  return _inputMode === 'mouse';
}

export function getInputMode() {
  return _inputMode;
}
