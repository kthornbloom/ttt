/**
 * Characters (tanks) data - source of truth for tank stats and weapons.
 * isUnlocked is persisted in localStorage, overriding the JSON default.
 */
const STORAGE_KEY = 'ttt-characters-unlocked';

const asset = (path) => import.meta.env.BASE_URL + path.replace(/^\//, '');

let charactersData = null;

async function fetchCharacters() {
  if (charactersData) return charactersData;
  const res = await fetch(asset('/data/characters.json'));
  if (!res.ok) throw new Error('Failed to load characters');
  charactersData = await res.json();
  return charactersData;
}

function getUnlockedIds() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

function setUnlockedIds(ids) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
}

function markUnlocked(characterId) {
  const stored = getUnlockedIds();
  const ids = stored ?? charactersData?.characters?.filter((c) => c.isUnlocked).map((c) => c.id) ?? ['tank-01'];
  if (!ids.includes(characterId)) {
    ids.push(characterId);
    setUnlockedIds(ids);
  }
}

/**
 * Returns characters with isUnlocked from localStorage (or JSON default).
 */
async function getCharacters() {
  const { characters } = await fetchCharacters();
  let storedUnlocked = getUnlockedIds();
  if (storedUnlocked === null) {
    storedUnlocked = characters.filter((c) => c.isUnlocked).map((c) => c.id);
    if (storedUnlocked.length > 0) setUnlockedIds(storedUnlocked);
  }
  if (characters.every((c) => c.isUnlocked) && storedUnlocked?.length < characters.length) {
    setUnlockedIds(characters.map((c) => c.id));
    storedUnlocked = characters.map((c) => c.id);
  }
  return characters.map((c) => ({
    ...c,
    isUnlocked: storedUnlocked ? storedUnlocked.includes(c.id) : (c.isUnlocked ?? true)
  }));
}

async function getCharacterById(id) {
  await fetchCharacters();
  const char = charactersData?.characters?.find((c) => c.id === id) ?? null;
  if (!char) return null;
  const chars = await getCharacters();
  return chars.find((c) => c.id === id) ?? { ...char, isUnlocked: char.id === 'tank-01' };
}

async function getCharacterGlbPath(characterId) {
  await fetchCharacters();
  const char = charactersData?.characters?.find((c) => c.id === characterId);
  return char ? asset(char.glbPath) : asset('/assets/characters/tank-01.glb');
}

export { fetchCharacters, getCharacters, getCharacterById, getCharacterGlbPath, markUnlocked };
