import * as THREE from 'three';
import { getLevelGlbPath, getNextLevelId, markDefeated } from './levels.js';
import { goToMainMenu } from './splash.js';
import { getCharacterGlbPath, getCharacterById } from './characters.js';

// Resolve asset paths for both local dev (/) and GitHub Pages (/ttt/)
const asset = (path) => import.meta.env.BASE_URL + path.replace(/^\//, '');
import { EdgesGeometry } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Line2 } from 'three/addons/lines/Line2.js';
import { LineGeometry } from 'three/addons/lines/LineGeometry.js';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { HorizontalTiltShiftShader } from 'three/addons/shaders/HorizontalTiltShiftShader.js';
import { VerticalTiltShiftShader } from 'three/addons/shaders/VerticalTiltShiftShader.js';
import RAPIER from '@dimforge/rapier3d';
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// ─── CONFIG ───────────────────────────────────────────────────────────────
const showCollisionBox = false;

const camHeight = 20;
const camDist = 25;

const maxSpeed = 15;
const maxTurnSpeed = 1.8;
const accelRate = 1;
const decelRateForward = 1;
const decelRateTurn = 5;
const boostDuration = 2;
const boostCooldownTime = 5;
const boostMultiplier = 1.8;

const wheelSpeed = 4;
const turnWheelFactor = 0.6;
const recoilAmount = 0.5;
const recoilSpeed = 1;

const cannonSpeed = 25;
const cannonMaxDist = 80;
const cannonCeiling = 400;
const cannonAmmoMax = 20;
const cannonCooldownTime = 3;

const mgHeatMax = 1;
const mgHeatRate = 0.2;
const mgCoolRate = 0.3;
const mgCoolRateOverheated = 0.08;
const mgRange = 40;
const mgSegments = 20;
const trajectoryPreviewOpacity = 0.05;
const trajectoryArcSegments = 60;
const trajectoryBarrelSmooth = 0.15;

const bulletHoleLifetime = 3;
const primaryBulletHoleSize = 2;
const secondaryBulletHoleSize = 0.3;
const tankColliderSize = { x: 1, y: 1.75, z: 1.5 };
const tankColliderOffset = { x: 0, y: 1.25, z: 0 };

const groundAlignSpeed = 2.5;
const bodyRollMax = 0.15;
const bodyPitchMax = 0.12;
const bodySuspensionSoftness = 0.07;
const bodyAimMax = 0.5;
const bodyAimSpeed = 0.7;
const cannonGravity = 10;
const fallDeathY = -15;

const playerHealthMax = 100;
const enemyHealthMax = 100;
const cannonDamage = 25;
const cannonKnockbackImpulse = 25;
const cannonKnockbackDecay = .94;
const laserDamagePerTick = 4;
const laserDamageInterval = 0.1;
const enemySpeed = 3;
const enemyTurnSpeed = 1;
const enemyReverseSpeed = 2;
const enemyShootRange = 50;
const enemyShootCooldown = 10;
const enemyAimThreshold = 0.92;
const enemyStuckDist = 2;
const enemyStuckTime = 0.8;
// ───────────────────────────────────────────────────────────────────────────

function getWeapon(mode) {
  const w = playerCharacter?.weapons;
  if (!w || w.length === 0) return null;
  return w[mode - 1] ?? null;
}

function isProjectileWeapon(w) {
  return w?.type === 'cannon' || w?.type === 'mortar';
}

function isHeatBeamWeapon(w) {
  return w?.type === 'laser' || w?.type === 'minigun';
}

const loader = new GLTFLoader();
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x261377);
scene.fog = new THREE.Fog(0x261377, 20, 100);

const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 200);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.2;
const gameContainer = document.getElementById('game-container');
(gameContainer || document.body).appendChild(renderer.domElement);

// Post Processing (Tilt‑Shift via Screen-Space Blur)
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));

// TILT SHIFT PASSES
const hTilt = new ShaderPass(HorizontalTiltShiftShader);
const vTilt = new ShaderPass(VerticalTiltShiftShader);

// --- Focus band configuration ---
// r = center of sharp strip (0 = bottom, 1 = top)
hTilt.uniforms.r.value = 0.5;
vTilt.uniforms.r.value = 0.5;

// h/v control blur intensity. Smaller = tighter blur falloff.
hTilt.uniforms.h.value = .1 / innerWidth * 30.0;
vTilt.uniforms.v.value = .1 / innerHeight * 30.0;

// Add passes
composer.addPass(hTilt);
composer.addPass(vTilt);
composer.addPass(new OutputPass()); // Tone mapping + sRGB for correct display (skipped when rendering to RT)

const light = new THREE.DirectionalLight(0xffffff, 2);
light.position.set(20, 40, 20);
light.castShadow = true;
light.shadow.mapSize.set(2048, 2048);
light.shadow.camera.left = -60;
light.shadow.camera.right = 60;
light.shadow.camera.top = 60;
light.shadow.camera.bottom = -60;
light.shadow.camera.near = 0.5;
light.shadow.camera.far = 200;
scene.add(light);
scene.add(new THREE.AmbientLight(0xffffff, 1));

let world, tankRigidBody, tankMesh, bodyGroup, bodyDefaultY;
let barrelGroup, barrelDefaultZ;
let wheelFL, wheelFR, wheelBL, wheelBR;
let collisionBoxMesh = null;
const keys = {};
let engineTime = 0;
let bodyRoll = 0, bodyPitch = 0, bodyAimPitch = 0;
let wheelRotL = 0, wheelRotR = 0;
let barrelRecoil = 0;
let currentSpeed = 0, currentTurnSpeed = 0;
let boostRemaining = boostDuration;
let boostCooldown = 0;
let weaponMode = 1;
let cannonAmmo = cannonAmmoMax;
let cannonCooldown = 0;
let weapon2Cooldown = 0;
let mgOverheated = false;
let mgHeat = 0;
let cannonBalls = [];
let empWaves = [];
let enemyDisabledUntil = 0;
let playerHitFlashUntil = 0;
let enemyHitFlashUntil = 0;
let enemyHitJolt = 0;
let fireFlash = null;
let impactFlash = null;
let mgLine = null;
let cannonTrajectoryLine = null;
let cannonTrajectoryEndSphere = null;
let laserTrajectoryLine = null;
let muzzleLight = null;
let laserHitLight = null;
let hudEl = null;
let fireCannonPending = false;
let fireMortarPending = false;
let fireEMPPending = false;
let bulletHoleTexture = null;
const bulletHoles = [];
let laserHoleCooldown = 0;
let playerHealth = 100;
let playerDead = false;
let enemyDead = false;
let lastLaserDamageTime = 0;
/** @type {Array<{rigidBody:*,mesh:*,body:*,barrel:*,wFL:*,wFR:*,wBL:*,wBR:*,collider:*,health:number,cannonCooldown:number,engineTime:number,stuckTimer:number,lastPos:{x,y,z},knockbackVel:{x,y,z},hitFlashUntil:number}>} */
let enemies = [];
let explosionPieces = [];
let lastCamTarget = { x: 0, y: 2, z: 0 };
let trajectoryBarrelTip = new THREE.Vector3(0, 0, 0);
let impactFlashAge = -1;
let playerKnockbackVel = { x: 0, y: 0, z: 0 };
let enemyKnockbackVel = { x: 0, y: 0, z: 0 };
let healthPickups = [];
const impactFlashDuration = 0.7;
const healthPickupRadius = 2.5;
const healthPickupAmount = 0.3;
const cannonBallGeo = new THREE.SphereGeometry(0.2, 8, 8);
const cannonBallMat = new THREE.MeshStandardMaterial({
  color: 0xff6600,
  emissive: 0xff4400,
  emissiveIntensity: 1.2
});
const bulletHoleGeoPrimary = new THREE.PlaneGeometry(primaryBulletHoleSize, primaryBulletHoleSize);
const bulletHoleGeoSecondary = new THREE.PlaneGeometry(secondaryBulletHoleSize, secondaryBulletHoleSize);

// Globals (add with other lets)
let engineSource = null;
let engineBuffer = null;
let engineGain = null;
let hissBuffer = null;
let laserBuffer = null;
let minigunBuffer = null;
let shootBuffer = null;
let reloadBuffer = null;
let heatBeamSource = null;
let explodeBuffer = null;
let repairBuffer = null;
let thudBuffer = null;
let winSpeechBuffers = [];
let lossSpeechBuffers = [];
let thudCooldown = 0;
let winSpeechPlayed = false;
let lossSpeechPlayed = false;
let currentLevelId = 'level-01';
let currentTankId = 'tank-01';
let playerCharacter = null;
let playerHealthMaxDynamic = 100;
let playerMaxSpeed = 15;
let playerAccelRate = 1;
let nextLevelIdForButton = null;
let nextLevelBtnEl = null;
let lossOverlayEl = null;
let youWinOverlayEl = null;
let animateLoopStarted = false;

async function loadAudio(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) return null;
    const arrayBuffer = await response.arrayBuffer();
    return await audioCtx.decodeAudioData(arrayBuffer);
  } catch (e) {
    console.warn('Audio load failed:', url, e.message);
    return null;
  }
}

async function loadEngineSound() {
  engineBuffer = await loadAudio(asset('/assets/audio/engine.ogg'));
}

async function loadWeaponSounds() {
  [hissBuffer, laserBuffer, minigunBuffer, shootBuffer, reloadBuffer] = await Promise.all([
    loadAudio(asset('/assets/audio/hiss.mp3')),
    loadAudio(asset('/assets/audio/laser.mp3')),
    loadAudio(asset('/assets/audio/minigun.mp3')),
    loadAudio(asset('/assets/audio/shot.mp3')),
    loadAudio(asset('/assets/audio/reload.mp3'))
  ]);
}

async function loadGameSounds() {
  const winFiles = ['win-1.mp3', 'win-2.mp3', 'win-3.mp3'];
  const lossFiles = ['loss-1.mp3', 'loss-2.mp3', 'loss-3.mp3'];
  const results = await Promise.all([
    loadAudio(asset('/assets/audio/explode.mp3')),
    loadAudio(asset('/assets/audio/repair.mp3')),
    loadAudio(asset('/assets/audio/thud.mp3')),
    ...winFiles.map((f) => loadAudio(asset(`/assets/audio/speech/win/${f}`))),
    ...lossFiles.map((f) => loadAudio(asset(`/assets/audio/speech/loss/${f}`)))
  ]);
  explodeBuffer = results[0];
  repairBuffer = results[1];
  thudBuffer = results[2];
  winSpeechBuffers = results.slice(3, 6);
  lossSpeechBuffers = results.slice(6, 9);
}

function playOnce(buffer) {
  if (!buffer) return;
  const src = audioCtx.createBufferSource();
  src.buffer = buffer;
  src.connect(audioCtx.destination);
  src.start(0);
}

function playRandomFrom(buffers) {
  const valid = buffers.filter(Boolean);
  if (valid.length) playOnce(valid[Math.floor(Math.random() * valid.length)]);
}

function startHeatBeamSound(isMinigun) {
  const buf = isMinigun ? minigunBuffer : laserBuffer;
  if (!buf || heatBeamSource) return;
  heatBeamSource = audioCtx.createBufferSource();
  heatBeamSource.buffer = buf;
  heatBeamSource.loop = true;
  heatBeamSource.connect(audioCtx.destination);
  heatBeamSource.start(0);
}

function stopHeatBeamSound() {
  if (heatBeamSource) {
    heatBeamSource.stop();
    heatBeamSource = null;
  }
}

function updateEngineSound() {
  if (!engineBuffer) return;

  const absSpeed = Math.abs(currentSpeed);
  const normalized = Math.min(absSpeed / playerMaxSpeed, 1);

  if (!engineSource && normalized > 0) {
    engineSource = audioCtx.createBufferSource();
    engineSource.buffer = engineBuffer;
    engineSource.loop = true;
    engineGain = audioCtx.createGain();
    engineGain.gain.value = 0;  // Fade in
    engineSource.connect(engineGain).connect(audioCtx.destination);
    engineSource.start(0);
  } else if (engineSource && normalized === 0) {
    // Idle rumble continues! Just drop pitch/volume low.
  }

  if (engineSource) {
    // Pitch: Idle ~0.8x (deep rumble) to 2x rev (use good sample to avoid chipmunk)
    engineSource.playbackRate.value = 0.8 + normalized * 1.2;
    // Volume: Quiet idle, loud at speed
    engineGain.gain.value = 0.08 + normalized * 0.25;
  }
}

function takeDamage(rigidBody, currentHealth, damage, weaponType, impactDir, knockbackVelRef, knockbackMagnitude = cannonKnockbackImpulse) {
  if (!rigidBody || currentHealth <= 0) return currentHealth;
  const newHealth = Math.max(0, currentHealth - damage);
  if (weaponType === 'primary' && impactDir && knockbackVelRef) {
    const len = Math.sqrt(impactDir.x ** 2 + impactDir.y ** 2 + impactDir.z ** 2) || 0.001;
    const dx = impactDir.x / len, dy = impactDir.y / len, dz = impactDir.z / len;
    knockbackVelRef.x += dx * knockbackMagnitude;
    knockbackVelRef.y += dy * knockbackMagnitude;
    knockbackVelRef.z += dz * knockbackMagnitude;
  }
  return newHealth;
}

function addBulletHole(hitPoint, hitNormal, bulletDir, size) {
  if (!bulletHoleTexture) return;
  const offsetDir = bulletDir.dot(hitNormal) < 0 ? hitNormal : hitNormal.clone().negate();
  const holeGeo = size === primaryBulletHoleSize ? bulletHoleGeoPrimary : bulletHoleGeoSecondary;
  const holeMat = new THREE.MeshBasicMaterial({
    map: bulletHoleTexture,
    transparent: true,
    opacity: 0.95,
    depthWrite: true,
    polygonOffset: true,
    polygonOffsetFactor: -4,
    polygonOffsetUnits: -4,
    side: THREE.DoubleSide
  });
  const hole = new THREE.Mesh(holeGeo, holeMat);
  hole.position.copy(hitPoint).addScaledVector(offsetDir, .5);
  hole.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), offsetDir);
  hole.rotateOnWorldAxis(offsetDir, Math.random() * Math.PI * 2);
  hole.renderOrder = 1;
  scene.add(hole);
  bulletHoles.push({ mesh: hole, createdAt: performance.now() / 1000 });
}

function createEnemyTank(tankTemplate, spawnPos = { x: 15, y: 2, z: 15 }, spawnRot = null) {
  const enemy = tankTemplate.clone();
  enemy.traverse((c) => {
    if (c.isMesh) {
      c.material = c.material?.clone();
      if (c.material?.color) c.material.color.multiplyScalar(0.6);
    }
  });
  const body = enemy.getObjectByName('Body');
  const barrel = enemy.getObjectByName('Barrel');
  const wFL = enemy.getObjectByName('Wheel-FL');
  const wFR = enemy.getObjectByName('Wheel-FR');
  const wBL = enemy.getObjectByName('Wheel-BL');
  const wBR = enemy.getObjectByName('Wheel-BR');
  const collider = RAPIER.ColliderDesc.cuboid(tankColliderSize.x, tankColliderSize.y, tankColliderSize.z)
    .setMass(200)
    .setFriction(1.2)
    .setRestitution(0.1)
    .setTranslation(tankColliderOffset.x, tankColliderOffset.y, tankColliderOffset.z);
  const rb = world.createRigidBody(
    RAPIER.RigidBodyDesc.dynamic()
      .enabledRotations(true, true, true)
      .setLinearDamping(0)
      .setAngularDamping(15)
  );
  const col = world.createCollider(collider, rb);
  const pos = spawnPos instanceof THREE.Vector3 ? spawnPos : { x: spawnPos.x, y: spawnPos.y, z: spawnPos.z };
  rb.setTranslation({ x: pos.x, y: pos.y ?? 2, z: pos.z }, true);
  if (spawnRot && (spawnRot instanceof THREE.Quaternion || (spawnRot.x !== undefined && spawnRot.w !== undefined))) {
    rb.setRotation(spawnRot instanceof THREE.Quaternion ? { x: spawnRot.x, y: spawnRot.y, z: spawnRot.z, w: spawnRot.w } : spawnRot, true);
  }
  scene.add(enemy);
  return {
    mesh: enemy, body, barrel, wFL, wFR, wBL, wBR, rigidBody: rb, collider: col,
    health: enemyHealthMax, cannonCooldown: 0, engineTime: 0, stuckTimer: 0, hitJolt: 0,
    lastPos: { x: pos.x, y: pos.y ?? 2, z: pos.z }, knockbackVel: { x: 0, y: 0, z: 0 }, hitFlashUntil: 0
  };
}

function explodeTank(mesh, rigidBody) {
  if (!mesh) return;
  const pieces = [];
  mesh.traverse((c) => {
    if (c.isMesh && c.geometry) {
      const piece = new THREE.Mesh(c.geometry.clone(), c.material?.clone() ?? new THREE.MeshBasicMaterial({ color: 0x333333 }));
      piece.position.setFromMatrixPosition(c.matrixWorld);
      piece.quaternion.setFromRotationMatrix(c.matrix);
      piece.scale.copy(c.getWorldScale(new THREE.Vector3()));
      scene.add(piece);
      pieces.push({
        mesh: piece,
        vel: new THREE.Vector3((Math.random() - 0.5) * 8, Math.random() * 6 + 4, (Math.random() - 0.5) * 8),
        rotVel: new THREE.Vector3((Math.random() - 0.5) * 4, (Math.random() - 0.5) * 4, (Math.random() - 0.5) * 4)
      });
      c.visible = false;
    }
  });
  if (rigidBody) world.removeRigidBody(rigidBody);
  scene.remove(mesh);
  return pieces;
}

// Spawn naming: "Spawn_Player", "Spawn_Player_North", "Spawn_Enemy_Tank", etc.
// For multiple spawns of the same type, Blender adds suffixes: "Spawn_Enemy_Tank.001", "Spawn_Enemy_Tank.002".
// Direction suffix (e.g. _North) is optional; rotation comes from the object's transform in Blender.
const SPAWN_NAMES = {
  player: 'Spawn_Player',
  enemyTank: 'Spawn_Enemy_Tank',
  enemyTurret: 'Spawn_Enemy_Turret',
  health: 'Spawn_Health'
};

function collectSpawnPoints(level) {
  level.updateMatrixWorld(true);
  const spawns = { player: null, enemyTank: [], enemyTurret: [], health: [] };
  const toRemove = [];
  level.traverse((c) => {
    if (c.name.startsWith(SPAWN_NAMES.player)) {
      if (!spawns.player) spawns.player = { position: c.getWorldPosition(new THREE.Vector3()), rotation: c.getWorldQuaternion(new THREE.Quaternion()) };
      toRemove.push(c);
    } else if (c.name.startsWith(SPAWN_NAMES.enemyTank)) {
      spawns.enemyTank.push({ position: c.getWorldPosition(new THREE.Vector3()), rotation: c.getWorldQuaternion(new THREE.Quaternion()) });
      toRemove.push(c);
    } else if (c.name.startsWith(SPAWN_NAMES.enemyTurret)) {
      spawns.enemyTurret.push({ position: c.getWorldPosition(new THREE.Vector3()), rotation: c.getWorldQuaternion(new THREE.Quaternion()) });
      toRemove.push(c);
    } else if (c.name.startsWith(SPAWN_NAMES.health)) {
      spawns.health.push({ position: c.getWorldPosition(new THREE.Vector3()), rotation: c.getWorldQuaternion(new THREE.Quaternion()) });
      toRemove.push(c);
    }
  });
  toRemove.forEach((obj) => {
    const parent = obj.parent;
    if (parent) parent.remove(obj);
  });
  return spawns;
}

function geometryToRapier(geometry, matrix) {
  const g = matrix ? geometry.clone().applyMatrix4(matrix) : geometry;
  const pos = g.attributes.position;
  const vertices = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) {
    vertices[i * 3] = pos.getX(i);
    vertices[i * 3 + 1] = pos.getY(i);
    vertices[i * 3 + 2] = pos.getZ(i);
  }
  const idx = g.index;
  const indices = idx
    ? new Uint32Array(idx.array)
    : new Uint32Array([...Array(pos.count).keys()]);
  return { vertices, indices };
}

async function init(levelId = 'level-01', tankId = 'tank-01') {
  currentLevelId = levelId;
  currentTankId = tankId;
  playerCharacter = await getCharacterById(tankId);

  // Reset game state (for re-init when loading next level)
  playerDead = false;
  enemyDead = false;
  winSpeechPlayed = false;
  lossSpeechPlayed = false;
  enemyDisabledUntil = 0;
  playerHitFlashUntil = 0;
  enemyHitFlashUntil = 0;
  enemyHitJolt = 0;
  empWaves = [];
  playerHealthMaxDynamic = playerCharacter?.health ?? playerHealthMax;
  playerHealth = playerHealthMaxDynamic;
  playerMaxSpeed = playerCharacter?.speed ?? maxSpeed;
  playerAccelRate = playerCharacter?.acceleration ?? accelRate;
  const w1 = getWeapon(1);
  cannonAmmo = w1?.ammoMax ?? cannonAmmoMax;
  cannonCooldown = 0;
  weapon2Cooldown = 0;
  mgHeat = 0;
  mgOverheated = false;
  cannonBalls = [];
  explosionPieces = [];
  healthPickups = [];
  bulletHoles.length = 0;
  currentSpeed = 0;
  currentTurnSpeed = 0;
  bodyRoll = 0;
  bodyPitch = 0;
  bodyAimPitch = 0;
  wheelRotL = 0;
  wheelRotR = 0;
  barrelRecoil = 0;
  boostRemaining = boostDuration;
  boostCooldown = 0;
  weaponMode = 1;
  fireCannonPending = false;
  fireMortarPending = false;
  fireEMPPending = false;
  laserHoleCooldown = 0;
  thudCooldown = 0;
  lastLaserDamageTime = 0;
  playerKnockbackVel = { x: 0, y: 0, z: 0 };
  impactFlashAge = -1;
  tankRigidBody = null;
  tankMesh = null;
  enemies = [];
  Object.keys(keys).forEach((k) => (keys[k] = false));
  if (nextLevelBtnEl) nextLevelBtnEl.classList.add('hidden');
  if (lossOverlayEl) lossOverlayEl.classList.add('hidden');
  if (youWinOverlayEl) youWinOverlayEl.classList.add('hidden');

  // Cleanup previous level and game objects when re-initializing
  const lights = scene.children.filter((c) => c.isLight);
  scene.children.slice().forEach((c) => {
    if (!c.isLight) scene.remove(c);
  });

  world = new RAPIER.World(new RAPIER.Vector3(0, -9.81, 0));

  // Load Level
  const levelPath = await getLevelGlbPath(levelId);
  const levelGlb = await loader.loadAsync(levelPath);
  nextLevelIdForButton = await getNextLevelId(levelId);
  const level = levelGlb.scene;
  level.updateMatrixWorld(true);

  const spawns = collectSpawnPoints(level);
  const playerPos = spawns.player?.position ?? new THREE.Vector3(0, 2, 0);
  const playerRot = spawns.player?.rotation ?? new THREE.Quaternion();
  const enemySpawns = spawns.enemyTank.length > 0 ? spawns.enemyTank : [{ position: { x: 15, y: 2, z: 15 } }];

  level.traverse((c) => {
    if (c.isMesh && !c.name.startsWith('Spawn_')) {
      c.castShadow = c.receiveShadow = true;
      // Fix transparent materials: depthWrite causes flickering when semi-transparent
      // surfaces overlap or interact with fog. Shadows render separately so they stay visible.
      const mats = Array.isArray(c.material) ? c.material : [c.material];
      for (const m of mats) {
        if (m?.transparent) {
          // alphaTest: treat visible pixels as opaque for depth - fixes overlap/floor z-fighting
          // while preserving the look. Threshold keeps pixels with alpha >= 0.5.
          m.alphaTest = 0.5;
          m.depthWrite = true; // Safe with alphaTest - no transparent sorting issues
          m.fog = true; // Can re-enable fog now
        }
      }
      const { vertices, indices } = geometryToRapier(c.geometry, c.matrixWorld);
      const collider = RAPIER.ColliderDesc.trimesh(vertices, indices)
        .setFriction(1.0)
        .setRestitution(0.05);
      world.createCollider(collider);
    }
  });
  scene.add(level);

  // Load Tank (player)
  const playerTankPath = await getCharacterGlbPath(tankId);
  const tankGlb = await loader.loadAsync(playerTankPath);
  tankMesh = tankGlb.scene;
  bodyGroup = tankMesh.getObjectByName('Body');
  barrelGroup = tankMesh.getObjectByName('Barrel');
  wheelFL = tankMesh.getObjectByName('Wheel-FL');
  wheelFR = tankMesh.getObjectByName('Wheel-FR');
  wheelBL = tankMesh.getObjectByName('Wheel-BL');
  wheelBR = tankMesh.getObjectByName('Wheel-BR');
  if (bodyGroup) bodyDefaultY = bodyGroup.position.y;
  if (barrelGroup) barrelDefaultZ = barrelGroup.position.z;
  tankMesh.traverse((c) => {
    if (c.isMesh) c.castShadow = c.receiveShadow = true;
  });

  const tankCollider = RAPIER.ColliderDesc.cuboid(tankColliderSize.x, tankColliderSize.y, tankColliderSize.z)
    .setMass(200)
    .setFriction(1.2)
    .setRestitution(0.1)
    .setTranslation(tankColliderOffset.x, tankColliderOffset.y, tankColliderOffset.z);

  const boxGeo = new THREE.BoxGeometry(tankColliderSize.x * 2, tankColliderSize.y * 2, tankColliderSize.z * 2);
  collisionBoxMesh = new THREE.LineSegments(
    new EdgesGeometry(boxGeo),
    new THREE.LineBasicMaterial({ color: 0x00ff00 })
  );
  collisionBoxMesh.position.set(tankColliderOffset.x, tankColliderOffset.y, tankColliderOffset.z);
  collisionBoxMesh.visible = showCollisionBox;
  tankMesh.add(collisionBoxMesh);

  tankRigidBody = world.createRigidBody(
    RAPIER.RigidBodyDesc.dynamic()
      .enabledRotations(true, true, true)
      .setLinearDamping(0)
      .setAngularDamping(15)
  );

  world.createCollider(tankCollider, tankRigidBody);
  tankRigidBody.setTranslation({ x: playerPos.x, y: playerPos.y, z: playerPos.z }, true);
  tankRigidBody.setRotation({ x: playerRot.x, y: playerRot.y, z: playerRot.z, w: playerRot.w }, true);

  scene.add(tankMesh);

  const enemyGlb = await loader.loadAsync(asset('/assets/characters/tank-badguy.glb'));
  for (const spawn of enemySpawns) {
    const enemyData = createEnemyTank(enemyGlb.scene, spawn.position, spawn.rotation);
    enemies.push(enemyData);
  }

  await loadEngineSound();
  await loadWeaponSounds();
  await loadGameSounds();

  // Health pickups at Spawn_Health positions
  if (spawns.health.length > 0) {
    try {
      const healthGlb = await loader.loadAsync(asset('/assets/items/health.glb'));
      const healthTemplate = healthGlb.scene;
      healthTemplate.traverse((c) => { if (c.isMesh) c.castShadow = c.receiveShadow = true; });
      for (const s of spawns.health) {
        const pickup = healthTemplate.clone();
        pickup.position.copy(s.position);
        pickup.quaternion.copy(s.rotation);
        scene.add(pickup);
        healthPickups.push({ mesh: pickup, collected: false });
      }
    } catch (e) {
      console.warn('Health pickup model not found, skipping:', e.message);
    }
  }

  const flashGeo = new THREE.SphereGeometry(0.3, 8, 8);
  const flashMat = new THREE.MeshBasicMaterial({ color: 0xffaa44, transparent: true, opacity: 1 });
  fireFlash = new THREE.Mesh(flashGeo, flashMat);
  fireFlash.visible = false;
  scene.add(fireFlash);

  const impactFlashGeo = new THREE.SphereGeometry(0.4, 12, 12);
  const impactFlashMat = new THREE.MeshStandardMaterial({
    color: 0xffaa44,
    emissive: 0xff6622,
    emissiveIntensity: 2,
    transparent: true,
    opacity: 1
  });
  impactFlash = new THREE.Mesh(impactFlashGeo, impactFlashMat);
  impactFlash.visible = false;
  scene.add(impactFlash);

  laserHitLight = new THREE.PointLight(0xff2222, 0, 12, 10);
  laserHitLight.position.set(0, 0, 0);
  scene.add(laserHitLight);

  const mgGeo = new LineGeometry();
  const mgMat = new LineMaterial({
    color: 0xff8800,
    linewidth: 0.12,
    worldUnits: true,
    vertexColors: true,
    resolution: new THREE.Vector2(innerWidth, innerHeight)
  });
  mgLine = new Line2(mgGeo, mgMat);
  mgLine.visible = false;
  scene.add(mgLine);

  const cannonTrajMat = new LineMaterial({
    color: 0xffffff,
    linewidth: 0.08,
    worldUnits: true,
    transparent: true,
    opacity: trajectoryPreviewOpacity,
    resolution: new THREE.Vector2(innerWidth, innerHeight)
  });
  const laserTrajMat = new LineMaterial({
    color: 0xff4444,
    linewidth: 0.08,
    worldUnits: true,
    transparent: true,
    opacity: trajectoryPreviewOpacity,
    resolution: new THREE.Vector2(innerWidth, innerHeight)
  });
  cannonTrajectoryLine = new Line2(new LineGeometry(), cannonTrajMat);
  cannonTrajectoryLine.visible = false;
  scene.add(cannonTrajectoryLine);
  cannonTrajectoryEndSphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.25, 12, 12),
    new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: trajectoryPreviewOpacity
    })
  );
  cannonTrajectoryEndSphere.visible = false;
  scene.add(cannonTrajectoryEndSphere);
  laserTrajectoryLine = new Line2(new LineGeometry(), laserTrajMat);
  laserTrajectoryLine.visible = false;
  scene.add(laserTrajectoryLine);

  muzzleLight = new THREE.PointLight(0xffaa66, 0, 15, 2);
  muzzleLight.position.set(0, 0, 0);
  scene.add(muzzleLight);

  const texLoader = new THREE.TextureLoader();
  texLoader.load(asset('/assets/images/bullet-hole.png'), (tex) => {
    bulletHoleTexture = tex;
    tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
  }, undefined, () => {
    const c = document.createElement('canvas');
    c.width = c.height = 64;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, 'rgba(40,40,40,0.95)');
    g.addColorStop(0.5, 'rgba(20,20,20,0.6)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(32, 32, 32, 0, Math.PI * 2);
    ctx.fill();
    bulletHoleTexture = new THREE.CanvasTexture(c);
    bulletHoleTexture.wrapS = bulletHoleTexture.wrapT = THREE.ClampToEdgeWrapping;
  });

  hudEl = document.createElement('div');
  hudEl.classList.add('hud');
  hudEl.innerHTML = `
    <div class="hud-left">
      <div class="hud-data" id="hud-weapon1">
        <div class="hud-data-icon">◆</div>
        <div class="hud-data-name">Weapon 1</div>
        <div class="hud-data-detail">—</div>
      </div>
      <div class="hud-data" id="hud-weapon2">
        <div class="hud-data-icon">◆</div>
        <div class="hud-data-name">Weapon 2</div>
        <div class="hud-data-detail">—</div>
      </div>
    </div>
    <div class="hud-center"></div>
    <div class="hud-right">
      <div class="hud-data" id="hud-health">
        <div class="hud-data-icon">♥</div>
        <div class="hud-data-name">Health</div>
        <div class="hud-data-detail">100%</div>
      </div>
      <div class="hud-data" id="hud-angle">
        <div class="hud-data-icon">∠</div>
        <div class="hud-data-name">Angle</div>
        <div class="hud-data-detail">0°</div>
      </div>
    </div>
  `;
  document.body.appendChild(hudEl);

  if (!nextLevelBtnEl) {
    nextLevelBtnEl = document.createElement('button');
    nextLevelBtnEl.textContent = 'Next Level';
    nextLevelBtnEl.classList.add('next-level-btn', 'hidden');
    nextLevelBtnEl.addEventListener('click', async () => {
      nextLevelBtnEl.classList.add('hidden');
      const nextId = await getNextLevelId(currentLevelId);
      if (nextId) init(nextId, currentTankId);
    });
    document.body.appendChild(nextLevelBtnEl);
  }

  if (!lossOverlayEl) {
    lossOverlayEl = document.createElement('div');
    lossOverlayEl.classList.add('loss-overlay', 'hidden');
    const retryBtn = document.createElement('button');
    retryBtn.textContent = 'Retry';
    retryBtn.addEventListener('click', () => {
      lossOverlayEl.classList.add('hidden');
      init(currentLevelId, currentTankId);
    });
    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Main Menu';
    menuBtn.addEventListener('click', () => {
      lossOverlayEl.classList.add('hidden');
      goToMainMenu();
    });
    lossOverlayEl.append(retryBtn, menuBtn);
    document.body.appendChild(lossOverlayEl);
  }

  if (!youWinOverlayEl) {
    youWinOverlayEl = document.createElement('div');
    youWinOverlayEl.classList.add('you-win-overlay', 'hidden');
    youWinOverlayEl.innerHTML = '<div class="you-win-text">YOU WIN</div>';
    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Main Menu';
    menuBtn.addEventListener('click', () => {
      youWinOverlayEl.classList.add('hidden');
      goToMainMenu();
    });
    youWinOverlayEl.appendChild(menuBtn);
    document.body.appendChild(youWinOverlayEl);
  }

  window.addEventListener('resize', () => {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
    composer.setSize(innerWidth, innerHeight);
    if (mgLine?.material?.resolution) mgLine.material.resolution.set(innerWidth, innerHeight);
    if (cannonTrajectoryLine?.material?.resolution) cannonTrajectoryLine.material.resolution.set(innerWidth, innerHeight);
    if (laserTrajectoryLine?.material?.resolution) laserTrajectoryLine.material.resolution.set(innerWidth, innerHeight);

    // keep blur consistent on resize
    hTilt.uniforms.h.value = 1 / innerWidth * 2.0;
    vTilt.uniforms.v.value = 1 / innerHeight * 2.0;
  });

  document.addEventListener('click', () => { if (audioCtx.state === 'suspended') audioCtx.resume(); }, { once: true });
  document.addEventListener('keydown', (e) => {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    keys[e.code] = true;
    if (e.code === 'Space') {
      e.preventDefault();
      const w1 = getWeapon(1);
      const w2 = getWeapon(2);
      const canFireProjectile = !playerDead && weaponMode === 1 && w1 && isProjectileWeapon(w1) && cannonAmmo > 0 && cannonCooldown <= 0 && !e.repeat;
      const canFireMortar = !playerDead && weaponMode === 2 && w2?.type === 'mortar' && cannonAmmo > 0 && weapon2Cooldown <= 0 && !e.repeat;
      const canFireEMP = !playerDead && weaponMode === 2 && w2?.type === 'emp' && weapon2Cooldown <= 0 && !e.repeat;
      const canFireHeatBeam = !playerDead && (weaponMode === 1 || weaponMode === 2) && isHeatBeamWeapon(getWeapon(weaponMode)) && mgHeat < (getWeapon(weaponMode)?.heatMax ?? 1) && !mgOverheated;
      if (canFireProjectile || canFireMortar || canFireEMP || canFireHeatBeam) barrelRecoil = 1;
      if (canFireProjectile) fireCannonPending = true;
      if (canFireMortar) fireMortarPending = true;
      if (canFireEMP) fireEMPPending = true;
    }
    if (e.code === 'Digit1') weaponMode = 1;
    if (e.code === 'Digit2' && playerCharacter?.weapons?.[1]) weaponMode = 2;
  });
  document.addEventListener('keyup', (e) => (keys[e.code] = false));

  if (!animateLoopStarted) {
    animateLoopStarted = true;
    animate();
  }
}

function animate() {
  requestAnimationFrame(animate);
  const dt = 0.016;

  if (tankRigidBody) updateEngineSound();

  const anyEnemyAlive = enemies.some((e) => e.rigidBody && e.health > 0);
  if (!tankRigidBody && !anyEnemyAlive) {
    for (const p of explosionPieces) {
      p.mesh.position.addScaledVector(p.vel, dt);
      p.mesh.rotation.x += p.rotVel.x * dt;
      p.mesh.rotation.y += p.rotVel.y * dt;
      p.mesh.rotation.z += p.rotVel.z * dt;
      p.vel.y -= 15 * dt;
    }
    camera.position.lerp(camera.position.clone().addScaledVector(new THREE.Vector3(0, 0, 1), 0.5 * dt), 0.02);
    composer.render();
    return;
  }

  const pos = tankRigidBody ? tankRigidBody.translation() : { x: 0, y: 0, z: 0 };

  const targetSpeed = (!playerDead && tankRigidBody && (keys['KeyW'] ? playerMaxSpeed : keys['KeyS'] ? -playerMaxSpeed : 0)) || 0;
  const targetTurn = (!playerDead && tankRigidBody && (keys['KeyA'] ? maxTurnSpeed : keys['KeyD'] ? -maxTurnSpeed : 0)) || 0;

  const isBoosting = !playerDead && (keys['ShiftLeft'] || keys['ShiftRight']) && boostRemaining > 0 && boostCooldown <= 0;
  if (isBoosting) {
    boostRemaining = Math.max(0, boostRemaining - dt);
    if (boostRemaining <= 0) boostCooldown = boostCooldownTime;
  } else if (boostCooldown > 0) {
    boostCooldown = Math.max(0, boostCooldown - dt);
    if (boostCooldown <= 0) boostRemaining = boostDuration;
  }

  const speedMult = isBoosting ? boostMultiplier : 1;
  const speedRate = targetSpeed !== 0 ? playerAccelRate : decelRateForward;
  const turnRate = targetTurn !== 0 ? playerAccelRate : decelRateTurn;

  currentSpeed += (targetSpeed * speedMult - currentSpeed) * Math.min(1, speedRate * dt);
  currentTurnSpeed += (targetTurn - currentTurnSpeed) * Math.min(1, turnRate * dt);

  if (!playerDead && tankRigidBody) {
    if (keys['ShiftRight']) {
      bodyAimPitch = 0;
    } else {
      const aimDelta = (keys['ArrowDown'] ? 1 : 0) - (keys['ArrowUp'] ? 1 : 0);
      bodyAimPitch = Math.max(-bodyAimMax, Math.min(bodyAimMax, bodyAimPitch + aimDelta * bodyAimSpeed * dt));
    }
  }

  const rot = tankRigidBody ? tankRigidBody.rotation() : { x: 0, y: 0, z: 0, w: 1 };
  const qCurrent = new THREE.Quaternion(rot.x, rot.y, rot.z, rot.w);

  const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(qCurrent);

  if (tankRigidBody) {
    const linVel = tankRigidBody.linvel();
    playerKnockbackVel.x *= cannonKnockbackDecay;
    playerKnockbackVel.y *= cannonKnockbackDecay;
    playerKnockbackVel.z *= cannonKnockbackDecay;
    tankRigidBody.setLinvel(
      {
        x: forward.x * currentSpeed + playerKnockbackVel.x,
        y: linVel.y + playerKnockbackVel.y,
        z: forward.z * currentSpeed + playerKnockbackVel.z
      },
      true
    );
    tankRigidBody.setAngvel({ x: 0, y: currentTurnSpeed, z: 0 }, true);
  }

  if (tankRigidBody) {
  const ray = new RAPIER.Ray(
    { x: pos.x, y: pos.y + 1, z: pos.z },
    { x: 0, y: -1, z: 0 }
  );

  const hit = world.castRayAndGetNormal(ray, 3, true, null, null, null, tankRigidBody);

  if (hit) {
    const normal = new THREE.Vector3(hit.normal.x, hit.normal.y, hit.normal.z).normalize();
    const projectedForward = forward.clone().projectOnPlane(normal).normalize();

    if (projectedForward.lengthSq() > 0.0001) {
      const right = new THREE.Vector3().crossVectors(projectedForward, normal).normalize();
      const m = new THREE.Matrix4().makeBasis(right, normal, projectedForward.clone().negate());
      const qTarget = new THREE.Quaternion().setFromRotationMatrix(m);

      qCurrent.slerp(qTarget, Math.min(1, groundAlignSpeed * dt));
      tankRigidBody.setRotation(
        { x: qCurrent.x, y: qCurrent.y, z: qCurrent.z, w: qCurrent.w },
        true
      );
    }
  }

  // Wall collision thud: when moving and hitting static geometry
  if (!playerDead && tankRigidBody && thudCooldown <= 0 && Math.abs(currentSpeed) > 1) {
    const fwdDir = currentSpeed > 0 ? forward : forward.clone().negate();
    const fwdRay = new RAPIER.Ray(
      { x: pos.x + fwdDir.x * 0.5, y: pos.y, z: pos.z + fwdDir.z * 0.5 },
      { x: fwdDir.x, y: 0, z: fwdDir.z }
    );
    const fwdHit = world.castRay(fwdRay, 2.5, true, null, null, null, tankRigidBody);
    const hitEnemy = fwdHit && enemies.some((e) => e.rigidBody && fwdHit.collider.parent() === e.rigidBody);
    if (fwdHit && !hitEnemy) {
      playOnce(thudBuffer);
      thudCooldown = 0.4;
    }
  }
  if (thudCooldown > 0) thudCooldown -= dt;
  }

  const now = performance.now() / 1000;

  for (const e of enemies) {
    if (!e.rigidBody || e.health <= 0) continue;
    const enemyDisabled = now < enemyDisabledUntil;
    const ePos = e.rigidBody.translation();
    const pPos = tankRigidBody ? tankRigidBody.translation() : ePos;
    const toPlayer = new THREE.Vector3(pPos.x - ePos.x, 0, pPos.z - ePos.z);
    const dist = toPlayer.length();
    toPlayer.normalize();
    const eRot = e.rigidBody.rotation();
    const eForwardFull = new THREE.Vector3(0, 0, -1).applyQuaternion(new THREE.Quaternion(eRot.x, eRot.y, eRot.z, eRot.w));
    const eForward = eForwardFull.clone();
    eForward.y = 0;
    eForward.normalize();
    const cross = new THREE.Vector3().crossVectors(eForward, toPlayer);
    const dotToPlayer = eForward.dot(toPlayer);

    const forwardRay = new RAPIER.Ray(
      { x: ePos.x + eForward.x * 0.5, y: ePos.y, z: ePos.z + eForward.z * 0.5 },
      { x: eForward.x, y: 0, z: eForward.z }
    );
    const fwdHit = world.castRay(forwardRay, enemyStuckDist, true, null, null, null, e.rigidBody);
    const hitPlayer = fwdHit && fwdHit.collider.parent() === tankRigidBody;
    const wallHit = fwdHit && !hitPlayer;
    const distMoved = Math.sqrt(
      (ePos.x - e.lastPos.x) ** 2 + (ePos.z - e.lastPos.z) ** 2
    );
    e.lastPos = { x: ePos.x, y: ePos.y, z: ePos.z };

    let eTargetSpeed = enemyDisabled ? 0 : (dist > 8 ? enemySpeed : 0);
    let eTargetTurn = enemyDisabled ? 0 : (cross.y > 0.1 ? enemyTurnSpeed : cross.y < -0.1 ? -enemyTurnSpeed : 0);

    if (wallHit || (!hitPlayer && distMoved < 0.02 && eTargetSpeed > 0)) {
      e.stuckTimer += dt;
      if (e.stuckTimer > enemyStuckTime * 0.3) {
        eTargetSpeed = -enemyReverseSpeed;
        eTargetTurn = cross.y > 0 ? enemyTurnSpeed : -enemyTurnSpeed;
      }
    } else {
      e.stuckTimer = Math.max(0, e.stuckTimer - dt * 2);
    }

    const eLinVel = e.rigidBody.linvel();
    e.knockbackVel.x *= cannonKnockbackDecay;
    e.knockbackVel.y *= cannonKnockbackDecay;
    e.knockbackVel.z *= cannonKnockbackDecay;
    e.rigidBody.setLinvel(
      {
        x: eForward.x * eTargetSpeed + e.knockbackVel.x,
        y: eLinVel.y + e.knockbackVel.y,
        z: eForward.z * eTargetSpeed + e.knockbackVel.z
      },
      true
    );
    e.rigidBody.setAngvel({ x: 0, y: eTargetTurn, z: 0 }, true);
    const eRay = new RAPIER.Ray(
      { x: ePos.x, y: ePos.y + 1, z: ePos.z },
      { x: 0, y: -1, z: 0 }
    );
    const eGroundHit = world.castRayAndGetNormal(eRay, 3, true, null, null, null, e.rigidBody);
    if (eGroundHit) {
      const eNorm = new THREE.Vector3(eGroundHit.normal.x, eGroundHit.normal.y, eGroundHit.normal.z).normalize();
      const eProj = eForward.clone().projectOnPlane(eNorm).normalize();
      if (eProj.lengthSq() > 0.0001) {
        const eRight = new THREE.Vector3().crossVectors(eProj, eNorm).normalize();
        const eM = new THREE.Matrix4().makeBasis(eRight, eNorm, eProj.clone().negate());
        const eQ = new THREE.Quaternion().setFromRotationMatrix(eM);
        const eCur = new THREE.Quaternion(eRot.x, eRot.y, eRot.z, eRot.w);
        eCur.slerp(eQ, Math.min(1, groundAlignSpeed * dt));
        e.rigidBody.setRotation({ x: eCur.x, y: eCur.y, z: eCur.z, w: eCur.w }, true);
      }
    }
    e.cannonCooldown = Math.max(0, e.cannonCooldown - dt);
    const facingPlayer = dotToPlayer > enemyAimThreshold;
    if (!enemyDisabled && dist < enemyShootRange && dist > 5 && e.cannonCooldown <= 0 && tankRigidBody && !playerDead && facingPlayer) {
      e.cannonCooldown = enemyShootCooldown;
      e.mesh.updateMatrixWorld(true);
      const eBarrel = e.mesh.getObjectByName('Barrel');
      const eTip = eBarrel ? new THREE.Vector3(0, 0, -0.5).applyMatrix4(eBarrel.matrixWorld) : new THREE.Vector3(ePos.x, ePos.y, ePos.z);
      playOnce(shootBuffer);
      const eLinVelRB = e.rigidBody.linvel();
      const cb = {
        mesh: new THREE.Mesh(cannonBallGeo, new THREE.MeshStandardMaterial({
          color: 0xff6600,
          emissive: 0xff4400,
          emissiveIntensity: 1.2
        })),
        pos: { x: eTip.x, y: eTip.y, z: eTip.z },
        vel: {
          x: eForwardFull.x * cannonSpeed + eLinVelRB.x,
          y: eForwardFull.y * cannonSpeed + eLinVelRB.y,
          z: eForwardFull.z * cannonSpeed + eLinVelRB.z
        },
        owner: 'enemy',
        firedBy: e.rigidBody,
        damage: cannonDamage,
        knockback: cannonKnockbackImpulse
      };
      cannonBalls.push(cb);
      scene.add(cb.mesh);
    }
  }

  world.step();

  const posFinal = tankRigidBody ? tankRigidBody.translation() : { x: 0, y: 0, z: 0 };
  const rotFinal = tankRigidBody ? tankRigidBody.rotation() : { x: 0, y: 0, z: 0, w: 1 };

  // Fall off map: destroy player or enemy when they fall into the abyss
  if (tankRigidBody && !playerDead && posFinal.y < fallDeathY) {
    playerDead = true;
    playOnce(explodeBuffer);
    explosionPieces.push(...explodeTank(tankMesh, tankRigidBody));
    tankMesh = null;
    tankRigidBody = null;
    if (!lossSpeechPlayed) {
      lossSpeechPlayed = true;
      setTimeout(() => playRandomFrom(lossSpeechBuffers), 1000);
    }
  }
  for (let i = enemies.length - 1; i >= 0; i--) {
    const e = enemies[i];
    if (!e.rigidBody || e.health <= 0) continue;
    const ePos = e.rigidBody.translation();
    if (ePos.y < fallDeathY) {
      playOnce(explodeBuffer);
      explosionPieces.push(...explodeTank(e.mesh, e.rigidBody));
      enemies.splice(i, 1);
      if (enemies.length === 0 && !winSpeechPlayed) {
        enemyDead = true;
        winSpeechPlayed = true;
        markDefeated(currentLevelId);
        setTimeout(() => playRandomFrom(winSpeechBuffers), 1000);
      }
    }
  }

  for (let i = empWaves.length - 1; i >= 0; i--) {
    const w = empWaves[i];
    w.radius = Math.min(w.maxRadius, w.radius + w.expandSpeed * dt);
    if (w.mesh) {
      w.mesh.scale.setScalar(w.radius * 2);
      w.mesh.material.opacity = 0.5 * (1 - w.radius / w.maxRadius);
    }
    for (const e of enemies) {
      if (!e.rigidBody || e.health <= 0) continue;
      const ePos = e.rigidBody.translation();
      const dx = ePos.x - w.pos.x, dz = ePos.z - w.pos.z;
      const dist = Math.sqrt(dx * dx + dz * dz);
      if (dist <= w.radius) {
        enemyDisabledUntil = now + w.disableDuration;
        break;
      }
    }
    if (w.radius >= w.maxRadius) {
      if (w.mesh) scene.remove(w.mesh);
      empWaves.splice(i, 1);
    }
  }

  if (tankMesh) {
    tankMesh.position.set(posFinal.x, posFinal.y, posFinal.z);
    tankMesh.quaternion.set(rotFinal.x, rotFinal.y, rotFinal.z, rotFinal.w);
  }

  // Health pickup collection
  if (!playerDead && tankRigidBody) {
    for (const p of healthPickups) {
      if (p.collected) continue;
      const dx = p.mesh.position.x - posFinal.x;
      const dy = p.mesh.position.y - posFinal.y;
      const dz = p.mesh.position.z - posFinal.z;
      const distSq = dx * dx + dy * dy + dz * dz;
      if (distSq < healthPickupRadius * healthPickupRadius) {
        p.collected = true;
        scene.remove(p.mesh);
        playerHealth = Math.min(playerHealthMaxDynamic, playerHealth + playerHealthMaxDynamic * healthPickupAmount);
        playOnce(repairBuffer);
      }
    }
  }

  for (const e of enemies) {
    if (!e.mesh || !e.rigidBody || e.health <= 0) continue;
    const ePos = e.rigidBody.translation();
    const eRot = e.rigidBody.rotation();
    e.mesh.position.set(ePos.x, ePos.y, ePos.z);
    e.mesh.quaternion.set(eRot.x, eRot.y, eRot.z, eRot.w);
    const enemyDisabled = now < enemyDisabledUntil;
    const enemyHitFlashing = now < e.hitFlashUntil;
    if (enemyHitFlashing) {
      const flashT = 1 - (e.hitFlashUntil - now) / 0.12;
      const flashIntensity = 0.8 * (1 - flashT);
      e.mesh.traverse((c) => {
        if (c.isMesh && c.material) {
          const m = Array.isArray(c.material) ? c.material[0] : c.material;
          if (m.emissive) m.emissive.setHex(0xff0000);
          if (m.emissiveIntensity !== undefined) m.emissiveIntensity = flashIntensity;
        }
      });
    } else if (enemyDisabled) {
      e.mesh.traverse((c) => {
        if (c.isMesh && c.material) {
          const m = Array.isArray(c.material) ? c.material[0] : c.material;
          if (m.emissive) m.emissive.setHex(0x2244aa);
          if (m.emissiveIntensity !== undefined) m.emissiveIntensity = 0.3;
        }
      });
    } else {
      e.mesh.traverse((c) => {
        if (c.isMesh && c.material) {
          const m = Array.isArray(c.material) ? c.material[0] : c.material;
          if (m.emissive) m.emissive.setHex(0x000000);
          if (m.emissiveIntensity !== undefined) m.emissiveIntensity = 0;
        }
      });
    }
    if (e.body) {
      e.engineTime += dt * 370;
      e.hitJolt = Math.max(0, e.hitJolt - dt * 4);
      const baseBounce = 0.05 * Math.sin(e.engineTime);
      const hitShake = e.hitJolt * Math.sin(e.engineTime * 12);
      e.body.position.y = baseBounce + hitShake;
    }
  }

  for (const p of explosionPieces) {
    p.mesh.position.addScaledVector(p.vel, dt);
    p.mesh.rotation.x += p.rotVel.x * dt;
    p.mesh.rotation.y += p.rotVel.y * dt;
    p.mesh.rotation.z += p.rotVel.z * dt;
    p.vel.y -= 15 * dt;
  }

  if (tankMesh && !playerDead) {
    const playerHitFlashing = now < playerHitFlashUntil;
    if (playerHitFlashing) {
      const flashT = 1 - (playerHitFlashUntil - now) / 0.12;
      const flashIntensity = 0.8 * (1 - flashT);
      tankMesh.traverse((c) => {
        if (c.isMesh && c.material) {
          const m = Array.isArray(c.material) ? c.material[0] : c.material;
          if (m.emissive) m.emissive.setHex(0xff0000);
          if (m.emissiveIntensity !== undefined) m.emissiveIntensity = flashIntensity;
        }
      });
    } else {
      tankMesh.traverse((c) => {
        if (c.isMesh && c.material) {
          const m = Array.isArray(c.material) ? c.material[0] : c.material;
          if (m.emissive) m.emissive.setHex(0x000000);
          if (m.emissiveIntensity !== undefined) m.emissiveIntensity = 0;
        }
      });
    }
  }
  if (bodyGroup && tankMesh) {
    engineTime += dt * 370;
    bodyGroup.position.y = (bodyDefaultY ?? 0) + 0.05 * Math.sin(engineTime);

    const targetRoll = -currentTurnSpeed / maxTurnSpeed * bodyRollMax;
    const targetPitch = -currentSpeed / playerMaxSpeed * bodyPitchMax;
    bodyRoll += (targetRoll - bodyRoll) * bodySuspensionSoftness;
    bodyPitch += (targetPitch - bodyPitch) * bodySuspensionSoftness;
    bodyGroup.rotation.set(bodyPitch + bodyAimPitch, 0, bodyRoll);
  }

  if (tankMesh) {
    wheelRotL += (-currentSpeed - currentTurnSpeed * turnWheelFactor) * dt * wheelSpeed;
    wheelRotR += (-currentSpeed + currentTurnSpeed * turnWheelFactor) * dt * wheelSpeed;
    [wheelFL, wheelBL].forEach((w) => { if (w) w.rotation.x = wheelRotL; });
    [wheelFR, wheelBR].forEach((w) => { if (w) w.rotation.x = wheelRotR; });
  }

  const heatBeamW = getWeapon(weaponMode);
  const heatBeamActive = heatBeamW && isHeatBeamWeapon(heatBeamW) && keys['Space'] && mgHeat < (heatBeamW.heatMax ?? 1) && !mgOverheated;
  if (barrelGroup && !playerDead && tankMesh) {
    if (heatBeamActive) barrelRecoil = 1;
    barrelRecoil = Math.max(0, barrelRecoil - recoilSpeed * dt);
    barrelGroup.position.z = (barrelDefaultZ ?? 0) + recoilAmount * barrelRecoil;
  }

  if (tankMesh) tankMesh.updateMatrixWorld(true);
  const barrelTip = barrelGroup && tankMesh ? new THREE.Vector3(0, 0, -0.5).applyMatrix4(barrelGroup.matrixWorld) : new THREE.Vector3(posFinal.x, posFinal.y, posFinal.z);
  const fireForward = barrelGroup && tankMesh
    ? new THREE.Vector3(0, 0, -1).clone().transformDirection(barrelGroup.matrixWorld)
    : new THREE.Vector3(0, 0, -1);
  if (muzzleLight) muzzleLight.position.copy(barrelTip).addScaledVector(fireForward.clone().normalize(), 1.5);

  const w1 = getWeapon(1);
  const w2 = getWeapon(2);
  const cannonW = w1?.type === 'cannon' ? w1 : null;
  const mortarW = (weaponMode === 2 ? w2 : w1)?.type === 'mortar' ? (weaponMode === 2 ? w2 : w1) : null;

  if (!playerDead && tankRigidBody && fireCannonPending && cannonW && cannonAmmo > 0 && cannonCooldown <= 0) {
    fireCannonPending = false;
    cannonAmmo--;
    cannonCooldown = cannonW.cooldown ?? cannonCooldownTime;
    playOnce(shootBuffer);
    playOnce(reloadBuffer);
    const linVel = tankRigidBody.linvel();
    const spd = cannonW.speed ?? cannonSpeed;
    cannonBalls.push({
      mesh: new THREE.Mesh(cannonBallGeo, cannonBallMat),
      pos: { x: barrelTip.x, y: barrelTip.y, z: barrelTip.z },
      vel: {
        x: fireForward.x * spd + linVel.x,
        y: fireForward.y * spd + linVel.y,
        z: fireForward.z * spd + linVel.z
      },
      owner: 'player',
      damage: cannonW.damage ?? cannonDamage,
      knockback: cannonW.knockbackImpulse ?? cannonKnockbackImpulse
    });
    scene.add(cannonBalls[cannonBalls.length - 1].mesh);
    fireFlash.position.copy(barrelTip);
    fireFlash.visible = true;
    muzzleLight.intensity = 20;
  }

  if (!playerDead && tankRigidBody && fireMortarPending && mortarW && cannonAmmo > 0 && weapon2Cooldown <= 0) {
    fireMortarPending = false;
    cannonAmmo--;
    weapon2Cooldown = mortarW.cooldown ?? 5;
    playOnce(shootBuffer);
    playOnce(reloadBuffer);
    const linVel = tankRigidBody.linvel();
    const angleRad = (mortarW.launchAngle ?? 75) * Math.PI / 180;
    const fwd = fireForward.clone().normalize();
    const up = new THREE.Vector3(0, 1, 0);
    const launchDir = new THREE.Vector3().addVectors(
      fwd.clone().multiplyScalar(Math.cos(angleRad)),
      up.clone().multiplyScalar(Math.sin(angleRad))
    ).normalize();
    const mortarOrigin = new THREE.Vector3(posFinal.x, posFinal.y + 2, posFinal.z);
    const spd = mortarW.speed ?? 22;
    cannonBalls.push({
      mesh: new THREE.Mesh(cannonBallGeo, new THREE.MeshStandardMaterial({ color: 0x888888, emissive: 0x444444 })),
      pos: { x: mortarOrigin.x, y: mortarOrigin.y, z: mortarOrigin.z },
      vel: {
        x: launchDir.x * spd + linVel.x,
        y: launchDir.y * spd + linVel.y,
        z: launchDir.z * spd + linVel.z
      },
      owner: 'player',
      damage: mortarW.damage ?? 35,
      knockback: mortarW.knockbackImpulse ?? 30,
      splashRadius: mortarW.splashRadius ?? 8,
      splashDamageFalloff: mortarW.splashDamageFalloff ?? 0.3
    });
    scene.add(cannonBalls[cannonBalls.length - 1].mesh);
    fireFlash.position.copy(mortarOrigin);
    fireFlash.visible = true;
    muzzleLight.intensity = 20;
  }

  if (!playerDead && tankRigidBody && fireEMPPending && w2?.type === 'emp' && weapon2Cooldown <= 0) {
    fireEMPPending = false;
    weapon2Cooldown = w2.cooldown ?? 20;
    const range = w2.range ?? 15;
    const duration = w2.disableDuration ?? 4;
    const expandSpeed = range / 1.5;
    const mesh = new THREE.Mesh(
      new THREE.RingGeometry(0.49, 0.5, 32),
      new THREE.MeshBasicMaterial({ color: 0x4488ff, transparent: true, opacity: 0.5, side: THREE.DoubleSide, depthWrite: false })
    );
    mesh.position.set(posFinal.x, posFinal.y + 0.5, posFinal.z);
    mesh.rotation.x = -Math.PI / 2;
    scene.add(mesh);
    empWaves.push({ pos: { x: posFinal.x, y: posFinal.y + 0.5, z: posFinal.z }, radius: 0, maxRadius: range, expandSpeed, disableDuration: duration, mesh });
    playOnce(hissBuffer);
  }
  if (fireFlash && fireFlash.visible) {
    fireFlash.material.opacity = (fireFlash.material.opacity ?? 1) - 8 * dt;
    if ((fireFlash.material.opacity ?? 0) <= 0) {
      fireFlash.visible = false;
      fireFlash.material.opacity = 1;
    }
  }
  if (impactFlash && impactFlashAge >= 0) {
    impactFlashAge += dt;
    const p = Math.min(1, impactFlashAge / impactFlashDuration);
    const easeOut = 1 - (1 - p) * (1 - p);
    impactFlash.scale.setScalar(0.4 + 2.6 * easeOut);
    const t = easeOut;
    impactFlash.material.color.setHex(0xffaa44).lerp(new THREE.Color(0x111111), t);
    impactFlash.material.emissive.setHex(0xff6622).lerp(new THREE.Color(0x000000), t);
    impactFlash.material.emissiveIntensity = 2 * (1 - t);
    impactFlash.material.opacity = 1 - t;
    if (p >= 1) {
      impactFlash.visible = false;
      impactFlashAge = -1;
      impactFlash.material.color.setHex(0xffaa44);
      impactFlash.material.emissive.setHex(0xff6622);
      impactFlash.material.emissiveIntensity = 2;
      impactFlash.material.opacity = 1;
    }
  }
  if (muzzleLight && muzzleLight.intensity > 0 && !heatBeamActive) {
    muzzleLight.intensity = Math.max(0, muzzleLight.intensity - 120 * dt);
  }

  if (!playerDead && tankRigidBody && barrelGroup && tankMesh) {
    const fd = fireForward.clone().normalize();
    const trajW = getWeapon(weaponMode);
    const showProjectileTrajectory = trajW && isProjectileWeapon(trajW);
    const showHeatBeamTrajectory = trajW && isHeatBeamWeapon(trajW);

    if (showProjectileTrajectory) {
      cannonTrajectoryLine.visible = true;
      laserTrajectoryLine.visible = false;
      const mortarOrigin = trajW.type === 'mortar'
        ? new THREE.Vector3(posFinal.x, posFinal.y + 2, posFinal.z)
        : barrelTip.clone();
      trajectoryBarrelTip.lerp(mortarOrigin, trajectoryBarrelSmooth);
      if (trajectoryBarrelTip.distanceTo(mortarOrigin) > 5) trajectoryBarrelTip.copy(mortarOrigin);
      const linVel = tankRigidBody.linvel();
      const spd = trajW.speed ?? cannonSpeed;
      const angleRad = (trajW.launchAngle ?? 0) * Math.PI / 180;
      const up = new THREE.Vector3(0, 1, 0);
      const launchDir = angleRad > 0
        ? new THREE.Vector3().addVectors(fd.clone().multiplyScalar(Math.cos(angleRad)), up.clone().multiplyScalar(Math.sin(angleRad))).normalize()
        : fd.clone();
      const x0 = trajectoryBarrelTip.x, y0 = trajectoryBarrelTip.y, z0 = trajectoryBarrelTip.z;
      const vx = launchDir.x * spd + linVel.x, vy = launchDir.y * spd + linVel.y, vz = launchDir.z * spd + linVel.z;
      const g = cannonGravity;
      const disc = vy * vy + 2 * g * y0;
      const tGround = disc >= 0 ? (vy + Math.sqrt(disc)) / g : 999;
      const hSpeed = Math.sqrt(vx * vx + vz * vz) || 0.001;
      const tDist = 500 / hSpeed;
      let tMax = Math.min(tGround, tDist, 30);
      // Raycast along arc segments to stop trajectory on enemy or walls
      for (let i = 0; i < trajectoryArcSegments; i++) {
        const t0 = (i / trajectoryArcSegments) * tMax;
        const t1 = ((i + 1) / trajectoryArcSegments) * tMax;
        const px0 = x0 + vx * t0; const py0 = y0 + vy * t0 - 0.5 * g * t0 * t0; const pz0 = z0 + vz * t0;
        const px1 = x0 + vx * t1; const py1 = y0 + vy * t1 - 0.5 * g * t1 * t1; const pz1 = z0 + vz * t1;
        const segDx = px1 - px0; const segDy = py1 - py0; const segDz = pz1 - pz0;
        const segDist = Math.sqrt(segDx * segDx + segDy * segDy + segDz * segDz) || 0.001;
        const ray = new RAPIER.Ray(
          { x: px0, y: py0, z: pz0 },
          { x: segDx / segDist, y: segDy / segDist, z: segDz / segDist }
        );
        const hit = world.castRayAndGetNormal(ray, segDist + 0.1, true, null, null, null, tankRigidBody);
        if (hit && hit.toi < segDist) {
          tMax = t0 + (hit.toi / segDist) * (t1 - t0);
          break;
        }
      }
      const posArr = [];
      for (let i = 0; i <= trajectoryArcSegments; i++) {
        const t = (i / trajectoryArcSegments) * tMax;
        posArr.push(x0 + vx * t, y0 + vy * t - 0.5 * g * t * t, z0 + vz * t);
      }
      cannonTrajectoryLine.geometry.setPositions(posArr);
      cannonTrajectoryLine.geometry.attributes.position.needsUpdate = true;
      if (cannonTrajectoryLine.material.resolution) cannonTrajectoryLine.material.resolution.set(innerWidth, innerHeight);
      const lastIdx = posArr.length - 3;
      cannonTrajectoryEndSphere.position.set(posArr[lastIdx], posArr[lastIdx + 1], posArr[lastIdx + 2]);
      cannonTrajectoryEndSphere.visible = true;
    } else if (showHeatBeamTrajectory) {
      cannonTrajectoryLine.visible = false;
      if (cannonTrajectoryEndSphere) cannonTrajectoryEndSphere.visible = false;
      const beamRangeTraj = heatBeamW?.range ?? mgRange;
      const beamHeatMaxTraj = heatBeamW?.heatMax ?? mgHeatMax;
      const showLaserPreview = !keys['Space'] || mgHeat >= beamHeatMaxTraj || mgOverheated;
      if (showLaserPreview) {
        laserTrajectoryLine.visible = true;
        const end = new THREE.Vector3(barrelTip.x + fd.x * beamRangeTraj, barrelTip.y + fd.y * beamRangeTraj, barrelTip.z + fd.z * beamRangeTraj);
        laserTrajectoryLine.geometry.setPositions([barrelTip.x, barrelTip.y, barrelTip.z, end.x, end.y, end.z]);
        laserTrajectoryLine.geometry.attributes.position.needsUpdate = true;
        if (laserTrajectoryLine.material.resolution) laserTrajectoryLine.material.resolution.set(innerWidth, innerHeight);
      } else {
        laserTrajectoryLine.visible = false;
      }
    } else {
      cannonTrajectoryLine.visible = false;
      if (cannonTrajectoryEndSphere) cannonTrajectoryEndSphere.visible = false;
      laserTrajectoryLine.visible = false;
    }
  } else {
    if (cannonTrajectoryLine) cannonTrajectoryLine.visible = false;
    if (cannonTrajectoryEndSphere) cannonTrajectoryEndSphere.visible = false;
    if (laserTrajectoryLine) laserTrajectoryLine.visible = false;
  }

  if (cannonCooldown > 0) cannonCooldown = Math.max(0, cannonCooldown - dt);
  if (weapon2Cooldown > 0) weapon2Cooldown = Math.max(0, weapon2Cooldown - dt);

  for (let i = bulletHoles.length - 1; i >= 0; i--) {
    const age = now - bulletHoles[i].createdAt;
    if (age >= bulletHoleLifetime) {
      const hole = bulletHoles[i];
      scene.remove(hole.mesh);
      hole.mesh.material.dispose();
      bulletHoles.splice(i, 1);
    } else {
      const fadeStart = bulletHoleLifetime - 0.5;
      if (age > fadeStart) {
        bulletHoles[i].mesh.material.opacity = 0.95 * (1 - (age - fadeStart) / 0.5);
      }
    }
  }

  const excludeBody = (cb) => cb.owner === 'player' ? tankRigidBody : (cb.firedBy ?? null);
  cannonBalls = cannonBalls.filter((cb) => {
    const oldX = cb.pos.x, oldY = cb.pos.y, oldZ = cb.pos.z;
    cb.vel.y -= cannonGravity * dt;
    cb.pos.x += cb.vel.x * dt;
    cb.pos.y += cb.vel.y * dt;
    cb.pos.z += cb.vel.z * dt;
    cb.mesh.position.set(cb.pos.x, cb.pos.y, cb.pos.z);
    const dx = cb.pos.x - oldX, dy = cb.pos.y - oldY, dz = cb.pos.z - oldZ;
    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz) || 0.001;
    const dir = { x: dx / dist, y: dy / dist, z: dz / dist };
    const ray = new RAPIER.Ray({ x: oldX, y: oldY, z: oldZ }, dir);
    const hit = world.castRayAndGetNormal(ray, dist + 0.3, true, null, null, null, excludeBody(cb));
    const tooFar = Math.abs(cb.pos.x) > cannonMaxDist * 2 || cb.pos.y > cannonCeiling || cb.pos.y < -cannonMaxDist * 2 || Math.abs(cb.pos.z) > cannonMaxDist * 2;
    if (hit || tooFar) {
      if (hit) {
        const hitParent = hit.collider.parent();
        const hitEnemy = cb.owner === 'player' && !enemyDead ? enemies.find((e) => e.rigidBody && hitParent === e.rigidBody) : null;
        if (hitEnemy && hitEnemy.health > 0) {
          hitEnemy.health = takeDamage(hitEnemy.rigidBody, hitEnemy.health, cb.damage ?? cannonDamage, 'primary', dir, hitEnemy.knockbackVel, cb.knockback ?? cannonKnockbackImpulse);
          hitEnemy.hitFlashUntil = now + 0.12;
          hitEnemy.hitJolt += 0.25;
          if (hitEnemy.health <= 0) {
            playOnce(explodeBuffer);
            explosionPieces.push(...explodeTank(hitEnemy.mesh, hitEnemy.rigidBody));
            enemies = enemies.filter((x) => x !== hitEnemy);
            if (enemies.length === 0) {
              enemyDead = true;
              if (!winSpeechPlayed) {
                winSpeechPlayed = true;
                markDefeated(currentLevelId);
                setTimeout(() => playRandomFrom(winSpeechBuffers), 1000);
              }
            }
          }
        } else if (hitParent === tankRigidBody && cb.owner === 'enemy' && !playerDead) {
          playerHealth = takeDamage(tankRigidBody, playerHealth, cb.damage ?? cannonDamage, 'primary', dir, playerKnockbackVel, cb.knockback ?? cannonKnockbackImpulse);
          playerHitFlashUntil = now + 0.12;
          if (playerHealth <= 0) {
            playerDead = true;
            playOnce(explodeBuffer);
            explosionPieces.push(...explodeTank(tankMesh, tankRigidBody));
            tankMesh = null;
            tankRigidBody = null;
            if (!lossSpeechPlayed) {
              lossSpeechPlayed = true;
              setTimeout(() => playRandomFrom(lossSpeechBuffers), 1000);
            }
          }
        } else {
          const hitPoint = new THREE.Vector3(
            ray.origin.x + ray.dir.x * hit.toi,
            ray.origin.y + ray.dir.y * hit.toi,
            ray.origin.z + ray.dir.z * hit.toi
          );
          const hitNormal = new THREE.Vector3(hit.normal.x, hit.normal.y, hit.normal.z).normalize();
          const bulletDir = new THREE.Vector3(ray.dir.x, ray.dir.y, ray.dir.z).normalize();
          addBulletHole(hitPoint, hitNormal, bulletDir, primaryBulletHoleSize);
          if (impactFlash) {
            impactFlash.position.copy(hitPoint);
            impactFlash.visible = true;
            impactFlash.scale.setScalar(1);
            impactFlashAge = 0;
          }
          // Mortar splash damage when hitting ground/wall near target
          const splashR = cb.splashRadius;
          if (splashR > 0 && cb.damage != null) {
            const falloff = cb.splashDamageFalloff ?? 0.3;
            const splashDir = (tPos, d) => d > 0.01 ? { x: (tPos.x - hitPoint.x) / d, y: (tPos.y - hitPoint.y) / d, z: (tPos.z - hitPoint.z) / d } : dir;
            if (cb.owner === 'player' && !enemyDead) {
              for (const e of enemies) {
                if (!e.rigidBody || e.health <= 0) continue;
                const tPos = e.rigidBody.translation();
                const dx = tPos.x - hitPoint.x, dy = tPos.y - hitPoint.y, dz = tPos.z - hitPoint.z;
                const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
                if (d < splashR) {
                  const t = d / splashR;
                  const damageMult = 1 - t * (1 - falloff);
                  const splashDmg = (cb.damage ?? cannonDamage) * damageMult;
                  const splashKnock = (cb.knockback ?? cannonKnockbackImpulse) * damageMult;
                  const sDir = splashDir(tPos, d);
                  e.health = takeDamage(e.rigidBody, e.health, splashDmg, 'primary', sDir, e.knockbackVel, splashKnock);
                  e.hitFlashUntil = now + 0.12;
                  e.hitJolt += 0.25;
                  if (e.health <= 0) {
                    playOnce(explodeBuffer);
                    explosionPieces.push(...explodeTank(e.mesh, e.rigidBody));
                    enemies = enemies.filter((x) => x !== e);
                    if (enemies.length === 0) {
                      enemyDead = true;
                      if (!winSpeechPlayed) {
                        winSpeechPlayed = true;
                        markDefeated(currentLevelId);
                        setTimeout(() => playRandomFrom(winSpeechBuffers), 1000);
                      }
                    }
                  }
                }
              }
            } else if (cb.owner === 'enemy' && tankRigidBody && !playerDead) {
              const tPos = tankRigidBody.translation();
              const dx = tPos.x - hitPoint.x, dy = tPos.y - hitPoint.y, dz = tPos.z - hitPoint.z;
              const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
              if (d < splashR) {
                const t = d / splashR;
                const damageMult = 1 - t * (1 - falloff);
                const splashDmg = (cb.damage ?? cannonDamage) * damageMult;
                const splashKnock = (cb.knockback ?? cannonKnockbackImpulse) * damageMult;
                const sDir = splashDir(tPos, d);
                playerHealth = takeDamage(tankRigidBody, playerHealth, splashDmg, 'primary', sDir, playerKnockbackVel, splashKnock);
                playerHitFlashUntil = now + 0.12;
                if (playerHealth <= 0) {
                  playerDead = true;
                  playOnce(explodeBuffer);
                  explosionPieces.push(...explodeTank(tankMesh, tankRigidBody));
                  tankMesh = null;
                  tankRigidBody = null;
                  if (!lossSpeechPlayed) {
                    lossSpeechPlayed = true;
                    setTimeout(() => playRandomFrom(lossSpeechBuffers), 1000);
                  }
                }
              }
            }
          }
        }
      }
      scene.remove(cb.mesh);
      return false;
    }
    return true;
  });

  const wantsToFireHeatBeam = !playerDead && heatBeamW && isHeatBeamWeapon(heatBeamW) && keys['Space'];
  const beamHeatMax = heatBeamW?.heatMax ?? mgHeatMax;
  const beamHeatRate = heatBeamW?.heatRate ?? mgHeatRate;
  const beamCoolRate = heatBeamW?.coolRate ?? mgCoolRate;
  const beamRange = heatBeamW?.range ?? mgRange;
  const beamDamagePerTick = heatBeamW?.damagePerTick ?? laserDamagePerTick;
  const beamDamageInterval = heatBeamW?.damageInterval ?? laserDamageInterval;
  const isMinigun = heatBeamW?.type === 'minigun';

  if (wantsToFireHeatBeam && mgHeat < beamHeatMax && !mgOverheated) {
    mgHeat = Math.min(beamHeatMax, mgHeat + beamHeatRate * dt);
    if (mgHeat >= beamHeatMax) {
      mgOverheated = true;
      playOnce(hissBuffer);
    }
    if (mgHeat < beamHeatMax) {
      startHeatBeamSound(isMinigun);
      const strobe = isMinigun ? (0.5 + 0.5 * Math.sin(now * 40)) : 1;
      const baseIntensity = isMinigun ? 14 : 12;
      muzzleLight.intensity = baseIntensity * (isMinigun ? Math.max(0.3, strobe) : 1);
      if (isMinigun) {
        muzzleLight.color.setHex(0xffff00);
        laserHitLight.color.setHex(0xffff00);
      } else {
        muzzleLight.color.setHex(0xffaa66);
        laserHitLight.color.setHex(0xff2222);
      }
      const fd = fireForward.clone().normalize();
      const ray = new RAPIER.Ray(
        { x: barrelTip.x, y: barrelTip.y, z: barrelTip.z },
        { x: fd.x, y: fd.y, z: fd.z }
      );
      const hit = world.castRayAndGetNormal(ray, beamRange, true, null, null, null, tankRigidBody);
      const end = hit ? Math.max(0.05, Math.min(beamRange, hit.toi)) : beamRange;
      laserHitLight.position.set(barrelTip.x + fd.x * end, barrelTip.y + fd.y * end, barrelTip.z + fd.z * end);
      laserHitLight.intensity = isMinigun ? 10 * Math.max(0.3, strobe) : 8;
      const hitParent = hit?.collider?.parent?.();
      const hitEnemyLaser = !enemyDead ? enemies.find((e) => e.rigidBody && hitParent === e.rigidBody) : null;
      if (hitEnemyLaser && hitEnemyLaser.health > 0 && (now - lastLaserDamageTime) >= beamDamageInterval) {
        lastLaserDamageTime = now;
        hitEnemyLaser.health = takeDamage(hitEnemyLaser.rigidBody, hitEnemyLaser.health, beamDamagePerTick, 'secondary', null, null);
        hitEnemyLaser.hitFlashUntil = now + 0.12;
        hitEnemyLaser.hitJolt += 0.25;
        if (hitEnemyLaser.health <= 0) {
          playOnce(explodeBuffer);
          explosionPieces.push(...explodeTank(hitEnemyLaser.mesh, hitEnemyLaser.rigidBody));
          enemies = enemies.filter((x) => x !== hitEnemyLaser);
          if (enemies.length === 0) {
            enemyDead = true;
            if (!winSpeechPlayed) {
              winSpeechPlayed = true;
              markDefeated(currentLevelId);
              setTimeout(() => playRandomFrom(winSpeechBuffers), 1000);
            }
          }
        }
      }
      const hitAnyEnemy = hit && enemies.some((e) => e.rigidBody && hit.collider.parent() === e.rigidBody);
      if (hit && !hitAnyEnemy && (laserHoleCooldown -= dt) <= 0) {
        laserHoleCooldown = 0.1;
        const hitPoint = new THREE.Vector3(
          ray.origin.x + ray.dir.x * hit.toi,
          ray.origin.y + ray.dir.y * hit.toi,
          ray.origin.z + ray.dir.z * hit.toi
        );
        const hitNormal = new THREE.Vector3(hit.normal.x, hit.normal.y, hit.normal.z).normalize();
        const bulletDir = new THREE.Vector3(fd.x, fd.y, fd.z);
        addBulletHole(hitPoint, hitNormal, bulletDir, secondaryBulletHoleSize);
      }
      const posArr = [];
      const colArr = [];
      const t = Date.now() * 0.02;
      const animT = performance.now() * 0.03;
      for (let i = 0; i < mgSegments; i++) {
        const f = i / (mgSegments - 1);
        posArr.push(barrelTip.x + fd.x * end * f, barrelTip.y + fd.y * end * f, barrelTip.z + fd.z * end * f);
        const bright = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(t + (1 - f) * 8));
        if (isMinigun) {
          const stripe = 0.5 + 0.5 * Math.sin(f * 35 - animT);
          const fade = 1 - f;
          colArr.push(stripe * fade, stripe * fade, stripe * fade);
        } else {
          colArr.push(bright, bright * 0.4, 0);
        }
      }
      if (mgLine.material.color) mgLine.material.color.setHex(isMinigun ? 0xffffff : 0xff8800);
      mgLine.geometry.setPositions(posArr);
      mgLine.geometry.setColors(colArr);
      mgLine.material.resolution.set(innerWidth, innerHeight);
      mgLine.visible = true;
    } else {
      mgLine.visible = false;
    }
  } else {
    stopHeatBeamSound();
    mgLine.visible = false;
    if (laserHitLight) laserHitLight.intensity = 0;
    muzzleLight.color.setHex(0xffaa66);
    laserHitLight.color.setHex(0xff2222);
    laserHoleCooldown = 0;
    const coolRate = mgOverheated ? mgCoolRateOverheated : beamCoolRate;
    mgHeat = Math.max(0, mgHeat - coolRate * dt);
    if (mgHeat <= 0) mgOverheated = false;
  }

  const hudHeatBeamW = getWeapon(weaponMode);
  const hudIsHeatBeam = hudHeatBeamW && isHeatBeamWeapon(hudHeatBeamW);
  const heatPct = hudIsHeatBeam ? (Math.min(1, mgHeat / (hudHeatBeamW?.heatMax ?? 1)) * 100).toFixed(0) : 0;

  const w1El = hudEl.querySelector('#hud-weapon1');
  const w2El = hudEl.querySelector('#hud-weapon2');
  const healthEl = hudEl.querySelector('#hud-health .hud-data-detail');
  const angleEl = hudEl.querySelector('#hud-angle .hud-data-detail');

  const detailForWeapon = (w) => {
    if (!w) return '—';
    if (w.type === 'cannon' || w.type === 'mortar') {
      const cd = w.type === 'cannon' ? cannonCooldown : weapon2Cooldown;
      return `Ammo: ${cannonAmmo}${cd > 0 ? ` (${cd.toFixed(1)}s)` : ''}`;
    }
    if (isHeatBeamWeapon(w)) return `Heat: ${heatPct}%`;
    if (w.type === 'emp') return `Cooldown: ${weapon2Cooldown > 0 ? weapon2Cooldown.toFixed(1) + 's' : 'Ready'}`;
    return '—';
  };
  if (w1El) {
    w1El.classList.toggle('hud-data-deactive', weaponMode !== 1);
    w1El.querySelector('.hud-data-name').textContent = w1?.name ?? '—';
    w1El.querySelector('.hud-data-detail').textContent = detailForWeapon(w1);
  }
  if (w2El) {
    w2El.style.display = w2 ? '' : 'none';
    w2El.classList.toggle('hud-data-deactive', weaponMode !== 2);
    w2El.querySelector('.hud-data-name').textContent = w2?.name ?? '—';
    w2El.querySelector('.hud-data-detail').textContent = detailForWeapon(w2);
  }
  if (healthEl) healthEl.textContent = `${Math.round((playerHealth / playerHealthMaxDynamic) * 100)}%`;
  if (angleEl) angleEl.textContent = `${bodyAimPitch >= 0 ? '+' : ''}${Math.round(bodyAimPitch * (180 / Math.PI))}°`;

  const gameVisible = !document.getElementById('game-container')?.classList.contains('hidden');
  if (gameVisible) {
    if (nextLevelBtnEl && enemyDead && !playerDead && nextLevelIdForButton) nextLevelBtnEl.classList.remove('hidden');
    else if (nextLevelBtnEl) nextLevelBtnEl.classList.add('hidden');
    if (youWinOverlayEl && enemyDead && !playerDead && !nextLevelIdForButton) youWinOverlayEl.classList.remove('hidden');
    else if (youWinOverlayEl) youWinOverlayEl.classList.add('hidden');
    if (lossOverlayEl && playerDead) lossOverlayEl.classList.remove('hidden');
    else if (lossOverlayEl) lossOverlayEl.classList.add('hidden');
  } else {
    if (lossOverlayEl) lossOverlayEl.classList.add('hidden');
    if (nextLevelBtnEl) nextLevelBtnEl.classList.add('hidden');
    if (youWinOverlayEl) youWinOverlayEl.classList.add('hidden');
  }

  if (tankRigidBody) lastCamTarget = tankRigidBody.translation();
  else if (enemies.length > 0) {
    const alive = enemies.find((e) => e.rigidBody && e.health > 0);
    if (alive) lastCamTarget = alive.rigidBody.translation();
  }
  const camTarget = lastCamTarget;
  camera.position.lerp(
    new THREE.Vector3(camTarget.x, camTarget.y + camHeight, camTarget.z + camDist),
    0.08
  );
  camera.lookAt(camTarget.x, camTarget.y, camTarget.z);

  composer.render();
}

// Entry: splash.js calls init() when user selects a level (or on devmode)
export { init };
