/**
 * Levels data and progression - source of truth for level order, names, difficulty, and paths.
 * Defeated/unlocked state is persisted in localStorage.
 */
const STORAGE_KEY = 'ttt-levels-defeated';

const asset = (path) => import.meta.env.BASE_URL + path.replace(/^\//, '');

let levelsData = null;

async function fetchLevels() {
  if (levelsData) return levelsData;
  const res = await fetch(asset('/data/levels.json'));
  if (!res.ok) throw new Error('Failed to load levels');
  levelsData = await res.json();
  return levelsData;
}

function getDefeatedIds() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function setDefeatedIds(ids) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
}

function markDefeated(levelId) {
  const ids = getDefeatedIds();
  if (!ids.includes(levelId)) {
    ids.push(levelId);
    setDefeatedIds(ids);
  }
}

/**
 * Returns levels sorted by order, with defeated and unlocked computed.
 * First level is always unlocked. Level n is unlocked if level n-1 is defeated.
 */
async function getLevels() {
  const { levels } = await fetchLevels();
  const defeated = getDefeatedIds();
  const sorted = [...levels].sort((a, b) => a.order - b.order);
  let prevDefeated = true;
  return sorted.map((l) => {
    const isDefeated = defeated.includes(l.id);
    const unlocked = prevDefeated;
    prevDefeated = isDefeated;
    return { ...l, defeated: isDefeated, unlocked };
  });
}

async function getLevelById(id) {
  await fetchLevels();
  return levelsData?.levels?.find((l) => l.id === id) ?? null;
}

/**
 * Returns true if all levels have been defeated.
 */
async function areAllLevelsDefeated() {
  const levels = await getLevels();
  return levels.length > 0 && levels.every((l) => l.defeated);
}

/**
 * Returns the next level id in order, or null if none.
 */
async function getNextLevelId(currentLevelId) {
  await fetchLevels();
  const level = levelsData?.levels?.find((l) => l.id === currentLevelId);
  if (!level || !levelsData?.levels) return null;
  const sorted = [...levelsData.levels].sort((a, b) => a.order - b.order);
  const idx = sorted.findIndex((l) => l.id === currentLevelId);
  if (idx < 0 || idx >= sorted.length - 1) return null;
  return sorted[idx + 1].id;
}

/**
 * Returns the glb path for a level (with base URL).
 */
async function getLevelGlbPath(levelId) {
  const level = await getLevelById(levelId);
  return level ? asset(level.glbPath) : asset(`/assets/levels/${levelId}.glb`);
}

export { fetchLevels, getLevels, getLevelById, getNextLevelId, getLevelGlbPath, markDefeated, areAllLevelsDefeated };
