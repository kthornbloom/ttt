import * as THREE from 'three';
import { getLevelGlbPath, getNextLevelId, markDefeated } from './levels.js';
import { getCharacterGlbPath, getCharacterById } from './characters.js';
import { isTouchMode } from './input-mode.js';
import { loadKeybindings, getActionForKey, getKeyForAction, isKeyForAction } from './keybindings.js';
import { showControlsIfFirstLevel01, showControlsModal, isControlsModalOpen } from './controls-modal.js';
import { initMasterGain, stopMenuMusic } from './audio.js';

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
const masterGain = initMasterGain(audioCtx);

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
const weaponSwitchDuration = 0.2;  // seconds per phase (retract or extend)
const topMountedRetractOffset = 0.5;  // EMP/mortar sit this far below Blender position when hidden, then rise into place

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
const enemyLedgeDropThreshold = 1.2;
const enemyLedgeCheckDist = 1.5;
const turretLaserRange = 15;
const turretLaserDuration = 0.5;
const turretLaserCooldown = 6;
const turretLaserDamagePerTick = 2;
const turretLaserDamageInterval = 0.05;
// ───────────────────────────────────────────────────────────────────────────

function getWeapon(mode) {
  const w = playerCharacter?.weapons;
  if (!w || w.length === 0) return null;
  return w[mode - 1] ?? null;
}

function isProjectileWeapon(w) {
  return w?.type === 'cannon' || w?.type === 'mortar';
}

/** Map weapon type to Body's Weapon-X object name (e.g. cannon -> Weapon-Cannon) */
function getWeaponBarrelName(weaponType) {
  if (!weaponType) return null;
  return 'Weapon-' + weaponType.charAt(0).toUpperCase() + weaponType.slice(1);
}

/** Find weapon barrel in mesh, trying canonical and lowercase names (e.g. Weapon-EMP and Weapon-emp) */
function findWeaponBarrel(mesh, weaponType) {
  if (!mesh || !weaponType) return null;
  return mesh.getObjectByName(getWeaponBarrelName(weaponType)) || mesh.getObjectByName('Weapon-' + weaponType.toLowerCase());
}

/** Collect all Weapon-* objects from mesh (traverse to catch any naming variants, case-insensitive) */
function collectAllWeaponBarrels(mesh) {
  const list = [];
  if (!mesh) return list;
  mesh.traverse((c) => {
    if (c.name && c.name.toLowerCase().startsWith('weapon-')) list.push(c);
  });
  return list;
}

/** Find weapon barrel by type in collected list (handles GLB export naming variations) */
function findBarrelInList(weaponObjs, weaponType) {
  if (!weaponType) return null;
  const canonical = getWeaponBarrelName(weaponType);
  const lower = 'Weapon-' + weaponType.toLowerCase();
  return weaponObjs.find((o) => {
    const n = o.name || '';
    return n === canonical || n === lower || n.toLowerCase() === lower.toLowerCase();
  }) || null;
}

/** Top-mounted weapons (EMP, Mortar) extend upward; others retract/extend along barrel axis. */
function isTopMountedWeapon(type) {
  return type === 'emp' || type === 'mortar';
}

/** Blender position (extended). */
function getTopMountedExtendedY(barrel) {
  return barrelDefaults.get(barrel)?.y ?? 0;
}

/** Retracted position: slightly below Blender position. */
function getTopMountedRetractedY(barrel) {
  return getTopMountedExtendedY(barrel) - topMountedRetractOffset;
}

/** Get barrel object for a weapon mode (resolves type from character data). */
function getBarrelForMode(mode) {
  const w = getWeapon(mode);
  if (!w) return fallbackBarrel;
  const weaponObjs = collectAllWeaponBarrels(tankMesh);
  const byType = weaponBarrels[w.type] || findBarrelInList(weaponObjs, w.type);
  return byType || fallbackBarrel;
}

/** Show the barrel for the current weapon mode, hide others. Handles missing barrels gracefully. */
function setActiveWeaponBarrel(mode) {
  const w = getWeapon(mode);
  const weaponObjs = collectAllWeaponBarrels(tankMesh);
  const allBarrels = [...new Set([...Object.values(weaponBarrels), ...weaponObjs, fallbackBarrel])].filter(Boolean);
  allBarrels.forEach((b) => { b.visible = false; });

  let active = fallbackBarrel;
  if (w) {
    let byType = weaponBarrels[w.type];
    if (!byType) byType = findBarrelInList(weaponObjs, w.type);
    if (byType) active = byType;
    else if (fallbackBarrel) active = fallbackBarrel;
  }
  if (active) {
    active.visible = true;
    barrelGroup = active;
    barrelDefaultZ = active.position.z;
    // Reset scale/position in case we're coming out of an animation
    active.scale.set(1, 1, 1);
    const def = barrelDefaults.get(active);
    if (!isTopMountedWeapon(w?.type) && def?.z !== undefined) active.position.z = def.z;
    if (isTopMountedWeapon(w?.type)) active.position.y = getTopMountedExtendedY(active);
  } else {
    barrelGroup = null;
  }
}

/** Store default scale/position per barrel for animation. */
const barrelDefaults = new WeakMap();

/** Barrel extent along local +Z (back toward turret). Used to offset position so scale origin is at back. */
function getBarrelZBackExtent(barrel) {
  const box = new THREE.Box3().setFromObject(barrel);
  box.applyMatrix4(barrel.matrixWorld.clone().invert());
  return Math.max(0, box.max.z);
}

/** Request weapon switch with barrel animation. Starts retract, then extend. */
function requestWeaponSwitch(targetMode) {
  if (targetMode === weaponMode) return;
  const w2 = getWeapon(2);
  if (targetMode === 2 && !w2) return;

  const fromBarrel = getBarrelForMode(weaponMode);
  const toBarrel = getBarrelForMode(targetMode);
  const fromW = getWeapon(weaponMode);
  const toW = getWeapon(targetMode);

  if (!fromBarrel || !toBarrel) {
    weaponMode = targetMode;
    setActiveWeaponBarrel(targetMode);
    return;
  }

  // Ensure defaults are stored (include z/zBack for barrel/cannon position-offset animation)
  if (!barrelDefaults.has(fromBarrel)) {
    tankMesh?.updateMatrixWorld(true);
    const zBack = getBarrelZBackExtent(fromBarrel);
    barrelDefaults.set(fromBarrel, { scale: fromBarrel.scale.clone(), y: fromBarrel.position.y, z: fromBarrel.position.z, zBack });
  }
  if (!barrelDefaults.has(toBarrel)) {
    tankMesh?.updateMatrixWorld(true);
    const zBack = getBarrelZBackExtent(toBarrel);
    barrelDefaults.set(toBarrel, { scale: toBarrel.scale.clone(), y: toBarrel.position.y, z: toBarrel.position.z, zBack });
  }

  weaponSwitchTargetMode = targetMode;
  weaponSwitchFromBarrel = fromBarrel;
  weaponSwitchToBarrel = toBarrel;
  weaponSwitchFromType = fromW?.type;
  weaponSwitchToType = toW?.type;
  weaponSwitchPhase = 'retracting';
  weaponSwitchT = 0;
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
// composer.addPass(hTilt);
// composer.addPass(vTilt);
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
/** @type {Object.<string, THREE.Object3D>} */
let weaponBarrels = {};
let fallbackBarrel = null;
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
let weaponSwitchPhase = 'idle';
let weaponSwitchT = 0;
let weaponSwitchTargetMode = 1;
let weaponSwitchFromBarrel = null;
let weaponSwitchToBarrel = null;
let weaponSwitchFromType = null;
let weaponSwitchToType = null;
let cannonAmmo = cannonAmmoMax;
let minigunAmmo = 150;
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
let empRadiusMarker = null;
let laserTrajectoryLine = null;
let muzzleLight = null;
let laserHitLight = null;
let hudEl = null;
let touchControlsEl = null;
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
/** @type {Array<{mesh:*,base:*,head:*,rigidBody:*,collider:*,health:number,laserCooldown:number,laserShootingUntil:number,hitFlashUntil:number}>} */
let turrets = [];
let explosionPieces = [];
let lastCamTarget = { x: 0, y: 2, z: 0 };
let camZoomFactor = 1;
let trajectoryBarrelTip = new THREE.Vector3(0, 0, 0);
let impactFlashAge = -1;
let playerKnockbackVel = { x: 0, y: 0, z: 0 };
let enemyKnockbackVel = { x: 0, y: 0, z: 0 };
let healthPickups = [];
let ammoPickups = [];
const impactFlashDuration = 0.7;
const healthPickupRadius = 2.5;
const ammoPickupRadius = 2.5;
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
let empBuffer = null;
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
let wallHittingLastFrame = false;
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
let escapePauseActive = false;
let animateLoopStarted = false;
let gameActive = false;
/** Touch joystick: { dx, dy } in [-1,1], rotates tank to face (mobile only) */
let touchJoystickInput = { dx: 0, dy: 0 };
/** Touch drive: { value } in [-1,1], drag up=forward down=back, distance=speed (mobile only) */
let touchDriveInput = { value: 0 };

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
  [hissBuffer, empBuffer, laserBuffer, minigunBuffer, shootBuffer, reloadBuffer] = await Promise.all([
    loadAudio(asset('/assets/audio/hiss.mp3')),
    loadAudio(asset('/assets/audio/emp.mp3')),
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
  src.connect(masterGain);
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
  heatBeamSource.connect(masterGain);
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
    engineSource.connect(engineGain).connect(masterGain);
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
    // Project knockback onto horizontal plane to prevent tanks flying into the sky on slopes
    const hx = impactDir.x, hz = impactDir.z;
    const hLen = Math.sqrt(hx * hx + hz * hz) || 0.001;
    const dx = hx / hLen, dy = 0, dz = hz / hLen;
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

function createTurret(turretTemplate, spawnPos = { x: 10, y: 0, z: 10 }, spawnRot = null) {
  const turret = turretTemplate.clone();
  turret.traverse((c) => {
    if (c.isMesh) {
      c.material = c.material?.clone();
      if (c.material?.color) c.material.color.multiplyScalar(0.6);
    }
  });
  const base = turret.getObjectByName('Base');
  const head = turret.getObjectByName('Head');
  const pos = spawnPos instanceof THREE.Vector3 ? spawnPos : { x: spawnPos.x, y: spawnPos.y ?? 0, z: spawnPos.z };
  turret.position.set(pos.x, pos.y, pos.z);
  if (spawnRot && (spawnRot instanceof THREE.Quaternion || spawnRot.w !== undefined)) {
    turret.quaternion.copy(spawnRot instanceof THREE.Quaternion ? spawnRot : new THREE.Quaternion(spawnRot.x, spawnRot.y, spawnRot.z, spawnRot.w));
  }
  const collider = RAPIER.ColliderDesc.cylinder(1, 2.4);
  const rb = world.createRigidBody(
    RAPIER.RigidBodyDesc.fixed()
  );
  rb.setTranslation({ x: pos.x, y: pos.y + 1.3, z: pos.z }, true);
  if (spawnRot && (spawnRot instanceof THREE.Quaternion || spawnRot.w !== undefined)) {
    rb.setRotation(spawnRot instanceof THREE.Quaternion ? { x: spawnRot.x, y: spawnRot.y, z: spawnRot.z, w: spawnRot.w } : spawnRot, true);
  }
  world.createCollider(collider, rb);
  const laserGeo = new LineGeometry();
  const laserMat = new LineMaterial({
    color: 0xff4444,
    linewidth: 0.15,
    worldUnits: true,
    resolution: new THREE.Vector2(innerWidth, innerHeight)
  });
  const laserLine = new Line2(laserGeo, laserMat);
  laserLine.visible = false;
  scene.add(laserLine);
  scene.add(turret);
  return {
    mesh: turret, base, head, rigidBody: rb, collider, laserLine,
    health: enemyHealthMax, laserCooldown: 0, laserShootingUntil: 0, hitFlashUntil: 0
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
  turret: 'Spawn_Turret',
  health: 'Spawn_Health',
  ammo: 'Spawn_Ammo'
};

function collectSpawnPoints(level) {
  level.updateMatrixWorld(true);
  const spawns = { player: null, enemyTank: [], enemyTurret: [], health: [], ammo: [] };
  const toRemove = [];
  level.traverse((c) => {
    if (c.name.startsWith(SPAWN_NAMES.player)) {
      if (!spawns.player) spawns.player = { position: c.getWorldPosition(new THREE.Vector3()), rotation: c.getWorldQuaternion(new THREE.Quaternion()) };
      toRemove.push(c);
    } else if (c.name.startsWith(SPAWN_NAMES.enemyTank)) {
      spawns.enemyTank.push({ position: c.getWorldPosition(new THREE.Vector3()), rotation: c.getWorldQuaternion(new THREE.Quaternion()) });
      toRemove.push(c);
    } else if (c.name.startsWith(SPAWN_NAMES.enemyTurret) || c.name.startsWith(SPAWN_NAMES.turret)) {
      spawns.enemyTurret.push({ position: c.getWorldPosition(new THREE.Vector3()), rotation: c.getWorldQuaternion(new THREE.Quaternion()) });
      toRemove.push(c);
    } else if (c.name.startsWith(SPAWN_NAMES.health)) {
      spawns.health.push({ position: c.getWorldPosition(new THREE.Vector3()), rotation: c.getWorldQuaternion(new THREE.Quaternion()) });
      toRemove.push(c);
    } else if (c.name.startsWith(SPAWN_NAMES.ammo)) {
      spawns.ammo.push({ position: c.getWorldPosition(new THREE.Vector3()), rotation: c.getWorldQuaternion(new THREE.Quaternion()) });
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

function stopGame() {
  gameActive = false;
  animateLoopStarted = false;
  if (engineSource) {
    try { engineSource.stop(); } catch (_) {}
    engineSource = null;
  }
  stopHeatBeamSound();
}

async function init(levelId = 'level-01', tankId = 'tank-01') {
  stopMenuMusic();
  loadKeybindings();
  gameActive = true;
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
  const w2 = getWeapon(2);
  cannonAmmo = (w1?.type === 'cannon' || w1?.type === 'mortar') ? (w1?.ammoMax ?? cannonAmmoMax) : (w2?.type === 'cannon' || w2?.type === 'mortar') ? (w2?.ammoMax ?? cannonAmmoMax) : cannonAmmoMax;
  minigunAmmo = (w1?.type === 'minigun' ? w1?.ammoMax : w2?.type === 'minigun' ? w2?.ammoMax : null) ?? 150;
  cannonCooldown = 0;
  weapon2Cooldown = 0;
  mgHeat = 0;
  mgOverheated = false;
  cannonBalls = [];
  explosionPieces = [];
  healthPickups = [];
  ammoPickups = [];
  bulletHoles.length = 0;
  currentSpeed = 0;
  currentTurnSpeed = 0;
  touchJoystickInput.dx = 0;
  touchJoystickInput.dy = 0;
  touchDriveInput.value = 0;
  bodyRoll = 0;
  bodyPitch = 0;
  bodyAimPitch = 0;
  wheelRotL = 0;
  wheelRotR = 0;
  barrelRecoil = 0;
  boostRemaining = boostDuration;
  boostCooldown = 0;
  weaponMode = 1;
  weaponSwitchPhase = 'idle';
  weaponSwitchT = 0;
  fireCannonPending = false;
  fireMortarPending = false;
  fireEMPPending = false;
  laserHoleCooldown = 0;
  thudCooldown = 0;
  wallHittingLastFrame = false;
  lastLaserDamageTime = 0;
  playerKnockbackVel = { x: 0, y: 0, z: 0 };
  impactFlashAge = -1;
  tankRigidBody = null;
  tankMesh = null;
  weaponBarrels = {};
  fallbackBarrel = null;
  barrelGroup = null;
  enemies = [];
  turrets = [];
  Object.keys(keys).forEach((k) => (keys[k] = false));
  if (nextLevelBtnEl) nextLevelBtnEl.classList.add('hidden');
  if (lossOverlayEl) lossOverlayEl.classList.add('hidden');
  if (youWinOverlayEl) youWinOverlayEl.classList.add('hidden');
  escapePauseActive = false;
  camZoomFactor = 1;

  if (touchControlsEl) {
    bodyAimPitch = 0;
    camZoomFactor = 1;
    touchDriveInput.value = 0;
    const zt = document.getElementById('touch-zoom-thumb');
    const at = document.getElementById('touch-angle-thumb');
    const djs = document.getElementById('touch-joystick-drive-stick');
    if (zt) {
      const zr = document.getElementById('touch-zoom-zone')?.getBoundingClientRect();
      if (zr) zt.style.left = `${2 + (camZoomFactor - 0.25) / 3.75 * (zr.width - 44)}px`;
    }
    if (at) at.style.transform = 'translate(-50%, 0)';
    if (djs) djs.style.transform = 'translate(0, 0)';
  }

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
  const enemySpawns = spawns.enemyTank;

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
  fallbackBarrel = tankMesh.getObjectByName('Barrel');
  wheelFL = tankMesh.getObjectByName('Wheel-FL');
  wheelFR = tankMesh.getObjectByName('Wheel-FR');
  wheelBL = tankMesh.getObjectByName('Wheel-BL');
  wheelBR = tankMesh.getObjectByName('Wheel-BR');
  if (bodyGroup) bodyDefaultY = bodyGroup.position.y;

  weaponBarrels = {};
  const weaponObjs = collectAllWeaponBarrels(tankMesh);
  for (const type of ['cannon', 'laser', 'minigun', 'mortar', 'emp']) {
    const obj = findWeaponBarrel(tankMesh, type) || findBarrelInList(weaponObjs, type);
    if (obj) weaponBarrels[type] = obj;
  }
  scene.add(tankMesh);
  tankMesh.updateMatrixWorld(true);
  [fallbackBarrel, ...Object.values(weaponBarrels), ...weaponObjs].filter(Boolean).forEach((b) => {
    if (!barrelDefaults.has(b)) {
      const zBack = getBarrelZBackExtent(b);
      barrelDefaults.set(b, { scale: b.scale.clone(), y: b.position.y, z: b.position.z, zBack });
    }
  });
  setActiveWeaponBarrel(1);

  tankMesh.traverse((c) => {
    if (c.isMesh) c.castShadow = c.receiveShadow = true;
  });

  const colliderSize = playerCharacter?.hitbox ?? tankColliderSize;
  const colliderOffset = playerCharacter?.hitbox
    ? { x: 0, y: colliderSize.y - 0.5, z: 0 }
    : tankColliderOffset;

  const tankCollider = RAPIER.ColliderDesc.cuboid(colliderSize.x, colliderSize.y, colliderSize.z)
    .setMass(200)
    .setFriction(1.2)
    .setRestitution(0.1)
    .setTranslation(colliderOffset.x, colliderOffset.y, colliderOffset.z);

  const boxGeo = new THREE.BoxGeometry(colliderSize.x * 2, colliderSize.y * 2, colliderSize.z * 2);
  collisionBoxMesh = new THREE.LineSegments(
    new EdgesGeometry(boxGeo),
    new THREE.LineBasicMaterial({ color: 0x00ff00 })
  );
  collisionBoxMesh.position.set(colliderOffset.x, colliderOffset.y, colliderOffset.z);
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

  if (enemySpawns.length > 0) {
  const enemyGlb = await loader.loadAsync(asset('/assets/characters/tank-badguy.glb'));
  for (const spawn of enemySpawns) {
    const enemyData = createEnemyTank(enemyGlb.scene, spawn.position, spawn.rotation);
    enemies.push(enemyData);
  }
  }

  if (spawns.enemyTurret.length > 0) {
    try {
      const turretGlb = await loader.loadAsync(asset('/assets/characters/turret.glb'));
      turretGlb.scene.traverse((c) => { if (c.isMesh) c.castShadow = c.receiveShadow = true; });
      for (const spawn of spawns.enemyTurret) {
        const turretData = createTurret(turretGlb.scene, spawn.position, spawn.rotation);
        turrets.push(turretData);
      }
    } catch (e) {
      console.warn('Turret model not found, skipping turret spawns:', e.message);
    }
  }

  await loadEngineSound();
  await loadWeaponSounds();
  await loadGameSounds();

  // Helper: add broad area light under pickup (PointLight for wide visibility)
  function addPickupLight(pickup, color, intensity = 3) {
    const light = new THREE.PointLight(color, intensity, 12, 1);
    light.position.set(0, -0.5, 0);
    pickup.add(light);
    return light;
  }

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
        addPickupLight(pickup, 0x00ff00, 3); // green
        scene.add(pickup);
        healthPickups.push({ mesh: pickup, collected: false });
      }
    } catch (e) {
      console.warn('Health pickup model not found, skipping:', e.message);
    }
  }

  // Ammo pickups at Spawn_Ammo positions
  if (spawns.ammo.length > 0) {
    try {
      const ammoGlb = await loader.loadAsync(asset('/assets/items/ammo.glb'));
      const ammoTemplate = ammoGlb.scene;
      ammoTemplate.traverse((c) => { if (c.isMesh) c.castShadow = c.receiveShadow = true; });
      for (const s of spawns.ammo) {
        const pickup = ammoTemplate.clone();
        pickup.position.copy(s.position);
        pickup.quaternion.copy(s.rotation);
        addPickupLight(pickup, 0xffff00, 3); // yellow
        scene.add(pickup);
        ammoPickups.push({ mesh: pickup, collected: false, baseY: s.position.y });
      }
    } catch (e) {
      console.warn('Ammo pickup model not found, skipping:', e.message);
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
    transparent: true,
    opacity: 0.95,
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
  empRadiusMarker = new THREE.Mesh(
    new THREE.RingGeometry(0.98, 1, 64),
    new THREE.MeshBasicMaterial({ color: 0x4488ff, transparent: true, opacity: trajectoryPreviewOpacity * 2, side: THREE.DoubleSide, depthWrite: false })
  );
  empRadiusMarker.rotation.x = -Math.PI / 2;
  empRadiusMarker.visible = false;
  scene.add(empRadiusMarker);
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
        <img src="${asset('/assets/icons/icon-shoot.svg')}" class="hud-data-icon" alt="">
        <div class="hud-data-name">Weapon 1</div>
        <div class="hud-data-detail">—</div>
      </div>
      <div class="hud-data" id="hud-weapon2">
        <img src="${asset('/assets/icons/icon-shoot.svg')}" class="hud-data-icon" alt="">
        <div class="hud-data-name">Weapon 2</div>
        <div class="hud-data-detail">—</div>
      </div>
    </div>
    <div class="hud-center"></div>
    <div class="hud-right">
      <div class="hud-data" id="hud-health">
        <div class="hud-data-icon hud-data-icon-text">♥</div>
        <div class="hud-data-name">Health</div>
        <div class="hud-data-detail">100%</div>
      </div>
      <div class="hud-data" id="hud-angle">
        <img src="${asset('/assets/icons/icon-angle.svg')}" class="hud-data-icon" alt="">
        <div class="hud-data-name">Angle</div>
        <div class="hud-data-detail">0°</div>
      </div>
    </div>
  `;
  document.body.appendChild(hudEl);

  if (isTouchMode() && !touchControlsEl) {
    touchControlsEl = document.createElement('div');
    touchControlsEl.className = 'touch-controls';
    touchControlsEl.innerHTML = `
      <div class="touch-left">
        <div class="touch-zoom-zone" id="touch-zoom-zone" aria-label="Zoom">
          <div class="touch-zoom-track">
            <div class="touch-zoom-thumb" id="touch-zoom-thumb"><img src="${asset('/assets/icons/icon-zoom.svg')}" class="touch-control-icon" alt="" aria-hidden="true"></div>
          </div>
        </div>
        <div class="touch-joystick-and-angle">
          <div class="touch-joystick-zone touch-joystick-rotate" id="touch-joystick-zone" aria-label="Rotate">
            <div class="touch-joystick-base">
              <div class="touch-joystick-stick" id="touch-joystick-stick"><img src="${asset('/assets/icons/icon-arrows-all.svg')}" class="touch-control-icon" alt="" aria-hidden="true"></div>
            </div>
          </div>
          <div class="touch-angle-zone" id="touch-angle-zone" aria-label="Angle">
            <div class="touch-angle-track">
              <div class="touch-angle-thumb" id="touch-angle-thumb"><img src="${asset('/assets/icons/icon-angle.svg')}" class="touch-control-icon" alt="" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="touch-right">
        <div class="touch-joystick-zone touch-joystick-drive" id="touch-joystick-drive" aria-label="Drive">
          <div class="touch-joystick-base">
            <div class="touch-joystick-stick" id="touch-joystick-drive-stick"><img src="${asset('/assets/icons/icon-drive.svg')}" class="touch-control-icon" alt="" aria-hidden="true"></div>
          </div>
        </div>
        <div class="touch-buttons-near-joystick">
          <button class="touch-btn touch-btn-weapon" id="touch-btn-weapon" aria-label="Weapon"><img src="${asset('/assets/icons/icon-swap.svg')}" class="touch-btn-icon" alt=""></button>
          <button class="touch-btn touch-btn-fire" id="touch-btn-fire" aria-label="Fire"><img src="${asset('/assets/icons/icon-shoot.svg')}" class="touch-btn-icon" alt=""></button>
        </div>
      </div>
    `;
    touchControlsEl.style.touchAction = 'none';
    (gameContainer || document.body).appendChild(touchControlsEl);

    const joystickDriveZone = document.getElementById('touch-joystick-drive');
    const joystickDriveStick = document.getElementById('touch-joystick-drive-stick');
    const joystickZone = document.getElementById('touch-joystick-zone');
    const joystickStick = document.getElementById('touch-joystick-stick');
    const zoomZone = document.getElementById('touch-zoom-zone');
    const zoomThumb = document.getElementById('touch-zoom-thumb');
    const angleZone = document.getElementById('touch-angle-zone');
    const angleThumb = document.getElementById('touch-angle-thumb');
    const fireBtn = document.getElementById('touch-btn-fire');
    const weaponBtn = document.getElementById('touch-btn-weapon');

    const JOYSTICK_RADIUS = 70;
    const ZOOM_MIN = 0.25;
    const ZOOM_MAX = 4;
    const ZOOM_DEFAULT = 1;
    const ANGLE_RANGE = 1;

    let driveJoystickPointerId = null;
    let driveJoystickCenter = { x: 0, y: 0 };
    let zoomPointerId = null;
    let zoomCenterX = 0;
    let zoomStartValue = 1;
    let anglePointerId = null;
    let angleCenterY = 0;
    let angleStartValue = 0;

    function onDriveJoystickMove(clientX, clientY) {
      const dx = (clientX - driveJoystickCenter.x) / JOYSTICK_RADIUS;
      const dy = (clientY - driveJoystickCenter.y) / JOYSTICK_RADIUS;
      const len = Math.sqrt(dx * dx + dy * dy);
      const clamped = len > 1 ? 1 / len : 1;
      const deadzone = 0.15;
      const mag = Math.min(1, len);
      if (mag > deadzone) {
        touchDriveInput.value = -dy * clamped;
      } else {
        touchDriveInput.value = 0;
      }
      const sx = (mag > deadzone ? dx * clamped : 0) * JOYSTICK_RADIUS * 0.6;
      const sy = (mag > deadzone ? dy * clamped : 0) * JOYSTICK_RADIUS * 0.6;
      joystickDriveStick.style.transform = `translate(${sx}px, ${sy}px)`;
    }

    function onDriveJoystickEnd() {
      driveJoystickPointerId = null;
      touchDriveInput.value = 0;
      joystickDriveStick.style.transform = 'translate(0, 0)';
    }

    function onZoomMove(clientX) {
      const rect = zoomZone.getBoundingClientRect();
      const trackWidth = Math.max(1, rect.width - 44);
      const thumbPos = Math.max(0, Math.min(1, (clientX - rect.left - 22) / trackWidth));
      const value = ZOOM_MIN + thumbPos * (ZOOM_MAX - ZOOM_MIN);
      camZoomFactor = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, value));
      const leftPx = 2 + thumbPos * (rect.width - 44);
      zoomThumb.style.left = `${leftPx}px`;
    }

    function onAngleMove(clientY) {
      const rect = angleZone.getBoundingClientRect();
      const trackHeight = Math.max(1, rect.height - 44);
      const centerY = rect.top + rect.height / 2;
      const dy = centerY - clientY;
      const rawValue = dy / (trackHeight / 2);
      const value = Math.max(-1, Math.min(1, rawValue));
      bodyAimPitch = value * bodyAimMax;
      const thumbOffset = value * (trackHeight / 2) * 0.85;
      angleThumb.style.transform = `translate(-50%, ${-thumbOffset}px)`;
    }

    function onAngleEnd() {
      anglePointerId = null;
    }

    joystickDriveZone.addEventListener('pointerdown', (e) => {
      if (driveJoystickPointerId !== null) return;
      e.preventDefault();
      e.stopPropagation();
      driveJoystickPointerId = e.pointerId;
      const rect = joystickDriveZone.getBoundingClientRect();
      driveJoystickCenter = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
      joystickDriveZone.setPointerCapture(e.pointerId);
      onDriveJoystickMove(e.clientX, e.clientY);
    });
    joystickDriveZone.addEventListener('pointermove', (e) => {
      if (e.pointerId !== driveJoystickPointerId) return;
      e.preventDefault();
      onDriveJoystickMove(e.clientX, e.clientY);
    });
    joystickDriveZone.addEventListener('pointerup', (e) => {
      if (e.pointerId !== driveJoystickPointerId) return;
      e.preventDefault();
      onDriveJoystickEnd();
    });
    joystickDriveZone.addEventListener('pointercancel', (e) => {
      if (e.pointerId !== driveJoystickPointerId) return;
      onDriveJoystickEnd();
    });

    zoomZone.addEventListener('pointerdown', (e) => {
      if (zoomPointerId !== null) return;
      e.preventDefault();
      e.stopPropagation();
      zoomPointerId = e.pointerId;
      zoomStartValue = camZoomFactor;
      zoomZone.setPointerCapture(e.pointerId);
      onZoomMove(e.clientX);
    });
    zoomZone.addEventListener('pointermove', (e) => {
      if (e.pointerId !== zoomPointerId) return;
      e.preventDefault();
      e.stopPropagation();
      onZoomMove(e.clientX);
    });
    zoomZone.addEventListener('pointerup', (e) => {
      if (e.pointerId !== zoomPointerId) return;
      e.preventDefault();
      zoomPointerId = null;
    });
    zoomZone.addEventListener('pointercancel', (e) => {
      if (e.pointerId === zoomPointerId) zoomPointerId = null;
    });

    angleZone.addEventListener('pointerdown', (e) => {
      if (anglePointerId !== null) return;
      e.preventDefault();
      e.stopPropagation();
      anglePointerId = e.pointerId;
      angleStartValue = bodyAimPitch / bodyAimMax;
      angleZone.setPointerCapture(e.pointerId);
      onAngleMove(e.clientY);
    });
    angleZone.addEventListener('pointermove', (e) => {
      if (e.pointerId !== anglePointerId) return;
      e.preventDefault();
      e.stopPropagation();
      onAngleMove(e.clientY);
    });
    angleZone.addEventListener('pointerup', (e) => {
      if (e.pointerId !== anglePointerId) return;
      e.preventDefault();
      onAngleEnd();
    });
    angleZone.addEventListener('pointercancel', (e) => {
      if (e.pointerId === anglePointerId) onAngleEnd();
    });

    requestAnimationFrame(() => {
      const zr = zoomZone.getBoundingClientRect();
      const thumbPos = (camZoomFactor - ZOOM_MIN) / (ZOOM_MAX - ZOOM_MIN);
      zoomThumb.style.left = `${2 + thumbPos * (zr.width - 44)}px`;
      const angleVal = bodyAimPitch / bodyAimMax;
      angleThumb.style.transform = `translate(-50%, ${-angleVal * 38}px)`;
    });

    let joystickPointerId = null;
    let joystickCenter = { x: 0, y: 0 };

    function onJoystickMove(clientX, clientY) {
      const dx = (clientX - joystickCenter.x) / JOYSTICK_RADIUS;
      const dy = (clientY - joystickCenter.y) / JOYSTICK_RADIUS;
      const len = Math.sqrt(dx * dx + dy * dy);
      const clamped = len > 1 ? 1 / len : 1;
      const deadzone = 0.15;
      const mag = Math.min(1, len);
      if (mag > deadzone) {
        touchJoystickInput.dx = dx * clamped;
        touchJoystickInput.dy = dy * clamped;
      } else {
        touchJoystickInput.dx = 0;
        touchJoystickInput.dy = 0;
      }
      const sx = touchJoystickInput.dx * JOYSTICK_RADIUS * 0.6;
      const sy = touchJoystickInput.dy * JOYSTICK_RADIUS * 0.6;
      joystickStick.style.transform = `translate(${sx}px, ${sy}px)`;
    }

    function onJoystickEnd() {
      joystickPointerId = null;
      joystickStick.style.transform = 'translate(0, 0)';
      touchJoystickInput.dx = 0;
      touchJoystickInput.dy = 0;
    }

    joystickZone.addEventListener('pointerdown', (e) => {
      if (joystickPointerId !== null) return;
      e.preventDefault();
      joystickPointerId = e.pointerId;
      const rect = joystickZone.getBoundingClientRect();
      joystickCenter = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
      joystickZone.setPointerCapture(e.pointerId);
      onJoystickMove(e.clientX, e.clientY);
    });
    joystickZone.addEventListener('pointermove', (e) => {
      if (e.pointerId !== joystickPointerId) return;
      e.preventDefault();
      onJoystickMove(e.clientX, e.clientY);
    });
    joystickZone.addEventListener('pointerup', (e) => {
      if (e.pointerId !== joystickPointerId) return;
      e.preventDefault();
      onJoystickEnd();
    });
    joystickZone.addEventListener('pointercancel', (e) => {
      if (e.pointerId !== joystickPointerId) return;
      onJoystickEnd();
    });

    fireBtn.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      keys['Space'] = true;
      const w1 = getWeapon(1);
      const w2 = getWeapon(2);
      const canFireProjectile = !playerDead && weaponMode === 1 && w1 && isProjectileWeapon(w1) && cannonAmmo > 0 && cannonCooldown <= 0;
      const canFireMortar = !playerDead && weaponMode === 2 && w2?.type === 'mortar' && cannonAmmo > 0 && weapon2Cooldown <= 0;
      const canFireEMP = !playerDead && weaponMode === 2 && w2?.type === 'emp' && weapon2Cooldown <= 0;
      if (canFireProjectile || canFireMortar || canFireEMP) barrelRecoil = 1;
      if (canFireProjectile) fireCannonPending = true;
      if (canFireMortar) fireMortarPending = true;
      if (canFireEMP) fireEMPPending = true;
    });
    fireBtn.addEventListener('pointerup', (e) => { e.preventDefault(); keys['Space'] = false; });
    fireBtn.addEventListener('pointerleave', () => { keys['Space'] = false; });

    weaponBtn.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      if (playerCharacter?.weapons?.[1]) requestWeaponSwitch(weaponMode === 1 ? 2 : 1);
    });

  }

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
    const controlsBtn = document.createElement('button');
    controlsBtn.textContent = 'Controls';
    controlsBtn.addEventListener('click', () => showControlsModal());
    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Main Menu';
    menuBtn.addEventListener('click', () => {
      location.reload();
    });
    lossOverlayEl.append(retryBtn, controlsBtn, menuBtn);
    document.body.appendChild(lossOverlayEl);
  }

  if (!youWinOverlayEl) {
    youWinOverlayEl = document.createElement('div');
    youWinOverlayEl.classList.add('you-win-overlay', 'hidden');
    youWinOverlayEl.innerHTML = '<div class="you-win-text">YOU WIN</div>';
    const controlsBtn = document.createElement('button');
    controlsBtn.textContent = 'Controls';
    controlsBtn.addEventListener('click', () => showControlsModal());
    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Main Menu';
    menuBtn.addEventListener('click', () => {
      location.reload();
    });
    youWinOverlayEl.append(controlsBtn, menuBtn);
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
    turrets.forEach((t) => { if (t.laserLine?.material?.resolution) t.laserLine.material.resolution.set(innerWidth, innerHeight); });

    // keep blur consistent on resize
    hTilt.uniforms.h.value = 1 / innerWidth * 2.0;
    vTilt.uniforms.v.value = 1 / innerHeight * 2.0;
  });

  document.addEventListener('click', () => { if (audioCtx.state === 'suspended') audioCtx.resume(); }, { once: true });
  document.addEventListener('keydown', (e) => {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    if (isControlsModalOpen()) return;
    keys[e.code] = true;
    const action = getActionForKey(e.code);
    if (action === 'fire') {
      e.preventDefault();
      const w1 = getWeapon(1);
      const w2 = getWeapon(2);
      const canFireProjectile = !playerDead && weaponMode === 1 && w1 && isProjectileWeapon(w1) && cannonAmmo > 0 && cannonCooldown <= 0 && !e.repeat;
      const canFireMortar = !playerDead && weaponMode === 2 && w2?.type === 'mortar' && cannonAmmo > 0 && weapon2Cooldown <= 0 && !e.repeat;
      const canFireEMP = !playerDead && weaponMode === 2 && w2?.type === 'emp' && weapon2Cooldown <= 0 && !e.repeat;
      const hbW = getWeapon(weaponMode);
      const canFireHeatBeam = !playerDead && (weaponMode === 1 || weaponMode === 2) && isHeatBeamWeapon(hbW) &&
        (hbW?.type === 'minigun' ? minigunAmmo > 0 : mgHeat < (hbW?.heatMax ?? 1) && !mgOverheated);
      if (canFireProjectile || canFireMortar || canFireEMP) barrelRecoil = 1;
      if (canFireProjectile) fireCannonPending = true;
      if (canFireMortar) fireMortarPending = true;
      if (canFireEMP) fireEMPPending = true;
    }
    if (action === 'weapon1') requestWeaponSwitch(1);
    if (action === 'weapon2' && playerCharacter?.weapons?.[1]) requestWeaponSwitch(2);
    if (action === 'zoomIn') {
      e.preventDefault();
      camZoomFactor = Math.min(4, camZoomFactor * 2);
    }
    if (action === 'zoomOut') {
      e.preventDefault();
      camZoomFactor = Math.max(0.25, camZoomFactor * 0.5);
    }
    if (action === 'pause') {
      e.preventDefault();
      const gameVisible = !document.getElementById('game-container')?.classList.contains('hidden');
      if (gameVisible && lossOverlayEl) {
        if (escapePauseActive) {
          escapePauseActive = false;
          lossOverlayEl.classList.add('hidden');
        } else if (!playerDead) {
          escapePauseActive = true;
          lossOverlayEl.classList.remove('hidden');
        }
      }
    }
  });
  document.addEventListener('keyup', (e) => (keys[e.code] = false));

  // Mouse: primary = fire, secondary = weapon swap, scroll = angle, side buttons = zoom
  document.addEventListener('mousedown', (e) => {
    if (isControlsModalOpen()) return;
    const fireKey = getKeyForAction('fire');
    if (e.button === 0) {
      e.preventDefault();
      keys[fireKey] = true;
      const w1 = getWeapon(1);
      const w2 = getWeapon(2);
      const canFireProjectile = !playerDead && weaponMode === 1 && w1 && isProjectileWeapon(w1) && cannonAmmo > 0 && cannonCooldown <= 0;
      const canFireMortar = !playerDead && weaponMode === 2 && w2?.type === 'mortar' && cannonAmmo > 0 && weapon2Cooldown <= 0;
      const canFireEMP = !playerDead && weaponMode === 2 && w2?.type === 'emp' && weapon2Cooldown <= 0;
      const hbW = getWeapon(weaponMode);
      const canFireHeatBeam = !playerDead && (weaponMode === 1 || weaponMode === 2) && isHeatBeamWeapon(hbW) &&
        (hbW?.type === 'minigun' ? minigunAmmo > 0 : mgHeat < (hbW?.heatMax ?? 1) && !mgOverheated);
      if (canFireProjectile || canFireMortar || canFireEMP) barrelRecoil = 1;
      if (canFireProjectile) fireCannonPending = true;
      if (canFireMortar) fireMortarPending = true;
      if (canFireEMP) fireEMPPending = true;
    }
    if (e.button === 2) {
      e.preventDefault();
      if (playerCharacter?.weapons?.[1]) requestWeaponSwitch(weaponMode === 1 ? 2 : 1);
    }
    if (e.button === 4) {
      e.preventDefault();
      camZoomFactor = Math.min(4, camZoomFactor * 2);
    }
    if (e.button === 5) {
      e.preventDefault();
      camZoomFactor = Math.max(0.25, camZoomFactor * 0.5);
    }
  });
  document.addEventListener('mouseup', (e) => {
    if (e.button === 0) keys[getKeyForAction('fire')] = false;
  });
  document.addEventListener('contextmenu', (e) => {
    if (gameActive && !isControlsModalOpen()) e.preventDefault();
  });
  document.addEventListener('wheel', (e) => {
    if (isControlsModalOpen()) return;
    e.preventDefault();
    const scrollScale = 0.002;
    bodyAimPitch = Math.max(-bodyAimMax, Math.min(bodyAimMax, bodyAimPitch - e.deltaY * scrollScale));
  }, { passive: false });

  showControlsIfFirstLevel01(!isTouchMode(), levelId);

  if (!animateLoopStarted) {
    animateLoopStarted = true;
    animate();
  }
}

function animate() {
  if (!gameActive) return;
  requestAnimationFrame(animate);
  const dt = 0.016;

  if (tankRigidBody) updateEngineSound();

  const anyEnemyAlive = enemies.some((e) => e.rigidBody && e.health > 0);
  const anyTurretAlive = turrets.some((t) => t.rigidBody && t.health > 0);
  if (!tankRigidBody && !anyEnemyAlive && !anyTurretAlive) {
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

  // Mobile: joystick rotates tank, drive zone (drag up/down) controls speed. Desktop: keys.
  const joystickActive = isTouchMode() && (touchJoystickInput.dx !== 0 || touchJoystickInput.dy !== 0);
  const driveActive = isTouchMode() && touchDriveInput.value !== 0;
  const targetSpeed = (!playerDead && tankRigidBody && (
    driveActive ? touchDriveInput.value * playerMaxSpeed
    : isKeyForAction(keys, 'forward') ? playerMaxSpeed
    : isKeyForAction(keys, 'backward') ? -playerMaxSpeed
    : 0
  )) || 0;
  let targetTurn;
  if (joystickActive) {
    const dx = touchJoystickInput.dx;
    const dy = touchJoystickInput.dy;
    const mag = Math.sqrt(dx * dx + dy * dy);
    const desiredDir = mag > 0.001 ? new THREE.Vector3(-dx, 0, -dy).normalize() : null;
    if (desiredDir && tankRigidBody && !playerDead) {
      const rot = tankRigidBody.rotation();
      const q = new THREE.Quaternion(rot.x, rot.y, rot.z, rot.w);
      const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(q);
      const forwardXZ = new THREE.Vector3(forward.x, 0, forward.z).normalize();
      const crossY = forwardXZ.x * desiredDir.z - forwardXZ.z * desiredDir.x;
      targetTurn = Math.abs(crossY) > 0.05 ? Math.sign(crossY) * maxTurnSpeed * Math.min(1, mag * 1.5) : 0;
    } else {
      targetTurn = 0;
    }
  } else {
    targetTurn = (!playerDead && tankRigidBody && (isKeyForAction(keys, 'turnLeft') ? maxTurnSpeed : isKeyForAction(keys, 'turnRight') ? -maxTurnSpeed : 0)) || 0;
  }

  const isBoosting = !playerDead && isKeyForAction(keys, 'boost') && boostRemaining > 0 && boostCooldown <= 0;
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
    if (isKeyForAction(keys, 'resetAim')) {
      bodyAimPitch = 0;
    } else {
      const aimDelta = (isKeyForAction(keys, 'aimDown') ? 1 : 0) - (isKeyForAction(keys, 'aimUp') ? 1 : 0);
      bodyAimPitch = Math.max(-bodyAimMax, Math.min(bodyAimMax, bodyAimPitch + aimDelta * bodyAimSpeed * dt));
    }
  }

  const rot = tankRigidBody ? tankRigidBody.rotation() : { x: 0, y: 0, z: 0, w: 1 };
  const qCurrent = new THREE.Quaternion(rot.x, rot.y, rot.z, rot.w);

  const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(qCurrent);

  // Ground and wall checks (before velocity) - used for ground alignment and to avoid driving into walls while falling
  let hit = null;
  let hittingWall = false;
  if (tankRigidBody) {
    const ray = new RAPIER.Ray(
      { x: pos.x, y: pos.y + 1, z: pos.z },
      { x: 0, y: -1, z: 0 }
    );
    hit = world.castRayAndGetNormal(ray, 3, true, null, null, null, tankRigidBody);

    if (!playerDead && Math.abs(currentSpeed) > 1) {
      const fwdDir = currentSpeed > 0 ? forward : forward.clone().negate();
      const fwdRay = new RAPIER.Ray(
        { x: pos.x + fwdDir.x * 0.5, y: pos.y, z: pos.z + fwdDir.z * 0.5 },
        { x: fwdDir.x, y: 0, z: fwdDir.z }
      );
      const fwdHit = world.castRay(fwdRay, 2.5, true, null, null, null, tankRigidBody);
      const hitEnemy = fwdHit && (enemies.some((e) => e.rigidBody && fwdHit.collider.parent() === e.rigidBody) || turrets.some((t) => t.rigidBody && fwdHit.collider.parent() === t.rigidBody));
      hittingWall = fwdHit && !hitEnemy;
    }
  }

  // When airborne and hitting wall: don't apply horizontal velocity toward wall (prevents getting stuck)
  const effectiveSpeed = (hit || !hittingWall) ? currentSpeed : 0;

  if (tankRigidBody) {
    const linVel = tankRigidBody.linvel();
    playerKnockbackVel.x *= cannonKnockbackDecay;
    playerKnockbackVel.y *= cannonKnockbackDecay;
    playerKnockbackVel.z *= cannonKnockbackDecay;
    // When airborne: preserve momentum, no drive/turn input (wheels not on ground)
    const vx = hit ? forward.x * effectiveSpeed + playerKnockbackVel.x : linVel.x + playerKnockbackVel.x;
    const vz = hit ? forward.z * effectiveSpeed + playerKnockbackVel.z : linVel.z + playerKnockbackVel.z;
    tankRigidBody.setLinvel(
      {
        x: vx,
        y: linVel.y + playerKnockbackVel.y,
        z: vz
      },
      true
    );
    const angVel = tankRigidBody.angvel();
    tankRigidBody.setAngvel(
      hit ? { x: 0, y: currentTurnSpeed, z: 0 } : { x: angVel.x, y: angVel.y, z: angVel.z },
      true
    );
  }

  if (tankRigidBody) {
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

  // Wall collision thud: when moving and hitting static geometry (only on first impact, not while continually pressing)
  if (hittingWall && !wallHittingLastFrame) {
    playOnce(thudBuffer);
  }
  wallHittingLastFrame = hittingWall;
  } else {
    wallHittingLastFrame = false;
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

    // Ledge detection: when moving forward, check if ground drops ahead (don't drive off edges)
    let ledgeAhead = false;
    if (eTargetSpeed > 0 && !enemyDisabled) {
      const ledgeOrigin = { x: ePos.x + eForward.x * enemyLedgeCheckDist, y: ePos.y + 0.5, z: ePos.z + eForward.z * enemyLedgeCheckDist };
      const ledgeRay = new RAPIER.Ray(ledgeOrigin, { x: 0, y: -1, z: 0 });
      const ledgeHit = world.castRayAndGetNormal(ledgeRay, 6, true, null, null, null, e.rigidBody);
      if (!ledgeHit) {
        ledgeAhead = true;
      } else {
        const groundY = ledgeOrigin.y - ledgeHit.toi;
        if (ePos.y - groundY > enemyLedgeDropThreshold) ledgeAhead = true;
      }
    }

    if (wallHit || ledgeAhead || (!hitPlayer && distMoved < 0.02 && eTargetSpeed > 0)) {
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

  for (const t of turrets) {
    if (!t.mesh || !t.rigidBody || t.health <= 0) continue;
    t.mesh.updateMatrixWorld(true);
    const headPos = t.head ? t.head.getWorldPosition(new THREE.Vector3()) : new THREE.Vector3(t.rigidBody.translation().x, t.rigidBody.translation().y, t.rigidBody.translation().z);
    const pPos = tankRigidBody ? tankRigidBody.translation() : { x: headPos.x, y: headPos.y, z: headPos.z };
    const toPlayer = new THREE.Vector3(pPos.x - headPos.x, 0, pPos.z - headPos.z);
    const dist = toPlayer.length();
    if (dist < 0.01) continue;
    toPlayer.normalize();
    const enemyDisabled = now < enemyDisabledUntil;
    if (t.head && !enemyDisabled) {
      const baseOrMesh = t.base || t.mesh;
      const invQuat = baseOrMesh.getWorldQuaternion(new THREE.Quaternion()).invert();
      const toPlayerLocal = toPlayer.clone().applyQuaternion(invQuat);
      const targetAngle = Math.atan2(toPlayerLocal.x, -toPlayerLocal.z);
      const turnSpeed = 6 * dt;
      let angleDiff = targetAngle - t.head.rotation.y;
      while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
      while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
      t.head.rotation.y += Math.sign(angleDiff) * Math.min(Math.abs(angleDiff), turnSpeed);
    }
    t.laserCooldown = Math.max(0, t.laserCooldown - dt);
    t.laserShootingUntil = Math.max(0, t.laserShootingUntil - dt);
    const inRange = dist <= turretLaserRange && tankRigidBody && !playerDead;
    const canStartShot = inRange && !enemyDisabled && t.laserCooldown <= 0 && t.laserShootingUntil <= 0;
    if (canStartShot) {
      t.laserShootingUntil = turretLaserDuration;
      t.laserCooldown = turretLaserCooldown;
      if (laserBuffer) {
        const src = audioCtx.createBufferSource();
        src.buffer = laserBuffer;
        src.connect(masterGain);
        src.start(0);
        setTimeout(() => src.stop(), turretLaserDuration * 1000);
      }
    }
    const isShooting = t.laserShootingUntil > 0;
    if (isShooting && t.head && t.laserLine) {
      const headTip = new THREE.Vector3(0, 0, 0.5).applyMatrix4(t.head.matrixWorld);
      const headForward = new THREE.Vector3(0, 0, 1).applyQuaternion(t.head.getWorldQuaternion(new THREE.Quaternion()));
      const ray = new RAPIER.Ray(
        { x: headTip.x, y: headTip.y, z: headTip.z },
        { x: headForward.x, y: headForward.y, z: headForward.z }
      );
      const hit = world.castRayAndGetNormal(ray, turretLaserRange, true, null, null, null, t.rigidBody);
      const end = hit ? Math.min(turretLaserRange, hit.toi) : turretLaserRange;
      t.laserLine.geometry.setPositions([headTip.x, headTip.y, headTip.z, headTip.x + headForward.x * end, headTip.y + headForward.y * end, headTip.z + headForward.z * end]);
      t.laserLine.geometry.attributes.position.needsUpdate = true;
      t.laserLine.visible = true;
      if (hit && hit.collider.parent() === tankRigidBody && (now - (t._lastTurretLaserDamage || 0)) >= turretLaserDamageInterval) {
        t._lastTurretLaserDamage = now;
        playerHealth = takeDamage(tankRigidBody, playerHealth, turretLaserDamagePerTick, 'secondary', null, null);
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
    } else if (t.laserLine) {
      t.laserLine.visible = false;
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
      if (enemies.length === 0 && turrets.length === 0 && !winSpeechPlayed) {
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
    for (const t of turrets) {
      if (!t.rigidBody || t.health <= 0) continue;
      const tPos = t.rigidBody.translation();
      const dx = tPos.x - w.pos.x, dz = tPos.z - w.pos.z;
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
    // Ammo pickup collection (refills to max)
    const w1 = getWeapon(1);
    const w2 = getWeapon(2);
    for (const p of ammoPickups) {
      if (p.collected) continue;
      const dx = p.mesh.position.x - posFinal.x;
      const dy = p.mesh.position.y - posFinal.y;
      const dz = p.mesh.position.z - posFinal.z;
      const distSq = dx * dx + dy * dy + dz * dz;
      if (distSq < ammoPickupRadius * ammoPickupRadius) {
        p.collected = true;
        scene.remove(p.mesh);
        if (w1?.type === 'minigun') minigunAmmo = w1.ammoMax ?? 150;
        else if (w1?.type === 'cannon' || w1?.type === 'mortar') cannonAmmo = w1.ammoMax ?? cannonAmmoMax;
        else if (w2?.type === 'minigun') minigunAmmo = w2.ammoMax ?? 150;
        else if (w2?.type === 'cannon' || w2?.type === 'mortar') cannonAmmo = w2.ammoMax ?? cannonAmmoMax;
        else cannonAmmo = cannonAmmoMax;
        playOnce(repairBuffer);
      }
    }
  }

  // Pickup animations: health rotates, ammo bobs
  for (const p of healthPickups) {
    if (p.collected) continue;
    p.mesh.rotation.y += dt * 0.5;
  }
  for (const p of ammoPickups) {
    if (p.collected) continue;
    const bob = 0.15 * Math.sin(now * 2);
    p.mesh.position.y = p.baseY + bob;
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

  for (const t of turrets) {
    if (!t.mesh || !t.rigidBody || t.health <= 0) continue;
    const enemyDisabled = now < enemyDisabledUntil;
    const turretHitFlashing = now < t.hitFlashUntil;
    if (turretHitFlashing) {
      const flashT = 1 - (t.hitFlashUntil - now) / 0.12;
      const flashIntensity = 0.8 * (1 - flashT);
      t.mesh.traverse((c) => {
        if (c.isMesh && c.material) {
          const m = Array.isArray(c.material) ? c.material[0] : c.material;
          if (m.emissive) m.emissive.setHex(0xff0000);
          if (m.emissiveIntensity !== undefined) m.emissiveIntensity = flashIntensity;
        }
      });
    } else if (enemyDisabled) {
      t.mesh.traverse((c) => {
        if (c.isMesh && c.material) {
          const m = Array.isArray(c.material) ? c.material[0] : c.material;
          if (m.emissive) m.emissive.setHex(0x2244aa);
          if (m.emissiveIntensity !== undefined) m.emissiveIntensity = 0.3;
        }
      });
    } else {
      t.mesh.traverse((c) => {
        if (c.isMesh && c.material) {
          const m = Array.isArray(c.material) ? c.material[0] : c.material;
          if (m.emissive) m.emissive.setHex(0x000000);
          if (m.emissiveIntensity !== undefined) m.emissiveIntensity = 0;
        }
      });
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

  // Weapon switch barrel animation
  if (weaponSwitchPhase !== 'idle' && tankMesh) {
    weaponSwitchT = Math.min(1, weaponSwitchT + dt / weaponSwitchDuration);
    const t = weaponSwitchT;
    const ease = (x) => x * x * (3 - 2 * x); // smoothstep

    if (weaponSwitchPhase === 'retracting') {
      const from = weaponSwitchFromBarrel;
      const def = barrelDefaults.get(from);
      if (from && def) {
        if (isTopMountedWeapon(weaponSwitchFromType)) {
          const extY = getTopMountedExtendedY(from);
          from.position.y = extY - topMountedRetractOffset * ease(t);
        } else {
          // Scale only along barrel length (Z); offset position so back stays fixed (retracts into tank)
          const s = 1 - ease(t);
          from.scale.set(1, 1, s);
          const zBack = def.zBack ?? 0;
          from.position.z = (def.z ?? from.position.z) + zBack * (1 - s);
        }
      }
      if (t >= 1) {
        from.visible = false;
        const to = weaponSwitchToBarrel;
        to.visible = true;
        if (isTopMountedWeapon(weaponSwitchToType)) {
          to.position.y = getTopMountedRetractedY(to);
        } else {
          to.scale.set(1, 1, 0);
          const defTo = barrelDefaults.get(to);
          const zBack = defTo?.zBack ?? 0;
          to.position.z = (defTo?.z ?? to.position.z) + zBack;
        }
        weaponSwitchPhase = 'extending';
        weaponSwitchT = 0;
        barrelGroup = to;
        barrelDefaultZ = to.position.z;
      }
    } else if (weaponSwitchPhase === 'extending') {
      const to = weaponSwitchToBarrel;
      const def = barrelDefaults.get(to);
      if (to && def) {
        if (isTopMountedWeapon(weaponSwitchToType)) {
          const retY = getTopMountedRetractedY(to);
          to.position.y = retY + topMountedRetractOffset * ease(t);
        } else {
          const s = ease(t);
          to.scale.set(1, 1, s);
          const zBack = def?.zBack ?? 0;
          to.position.z = (def?.z ?? to.position.z) + zBack * (1 - s);
        }
      }
      if (t >= 1) {
        if (to) {
          to.scale.set(1, 1, 1);
          if (!isTopMountedWeapon(weaponSwitchToType) && def?.z !== undefined) to.position.z = def.z;
          if (isTopMountedWeapon(weaponSwitchToType)) to.position.y = getTopMountedExtendedY(to);
        }
        weaponMode = weaponSwitchTargetMode;
        weaponSwitchPhase = 'idle';
      }
    }
  }

  const heatBeamW = getWeapon(weaponMode);
  const isMinigunWeapon = heatBeamW?.type === 'minigun';
  const heatBeamActive = heatBeamW && isHeatBeamWeapon(heatBeamW) && isKeyForAction(keys, 'fire') &&
    (isMinigunWeapon ? minigunAmmo > 0 : mgHeat < (heatBeamW.heatMax ?? 1) && !mgOverheated);
  if (barrelGroup && !playerDead && tankMesh && weaponSwitchPhase === 'idle') {
    if (!heatBeamActive) {
      barrelRecoil = Math.max(0, barrelRecoil - recoilSpeed * dt);
      const currentW = getWeapon(weaponMode);
      if (isTopMountedWeapon(currentW?.type)) {
        barrelGroup.position.y = getTopMountedExtendedY(barrelGroup) - recoilAmount * barrelRecoil;
      } else {
        barrelGroup.position.z = (barrelDefaultZ ?? 0) + recoilAmount * barrelRecoil;
      }
    }
  }

  if (tankMesh) tankMesh.updateMatrixWorld(true);
  // Use active weapon's barrel for tip; laser barrel may be at floor level so use cannon for height
  const heatBeamWeaponSelected = heatBeamW && isHeatBeamWeapon(heatBeamW);
  const cannonBarrel = weaponBarrels['cannon'];
  const activeHeatBeamBarrel = heatBeamW ? weaponBarrels[heatBeamW.type] : null;
  const barrelForTip = heatBeamWeaponSelected
    ? (heatBeamW?.type === 'laser' && cannonBarrel ? cannonBarrel : activeHeatBeamBarrel || cannonBarrel || fallbackBarrel || bodyGroup || barrelGroup)
    : barrelGroup;
  let barrelTip;
  if (barrelForTip && tankMesh) {
    if (heatBeamWeaponSelected && heatBeamW?.type === 'minigun') {
      const box = new THREE.Box3().setFromObject(barrelForTip);
      barrelTip = box.getCenter(new THREE.Vector3());
    } else {
      barrelTip = new THREE.Vector3(0, 0, -0.5).applyMatrix4(barrelForTip.matrixWorld);
    }
  } else {
    barrelTip = new THREE.Vector3(posFinal.x, posFinal.y, posFinal.z);
  }
  const fireForward = (barrelGroup || barrelForTip) && tankMesh
    ? new THREE.Vector3(0, 0, -1).clone().transformDirection((barrelGroup || barrelForTip).matrixWorld)
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
    // Body aim pitch: negative = lean forward (flatter shot, farther), positive = lean back (steeper arc, closer)
    const baseAngle = mortarW.launchAngle ?? 75;
    const effectiveLaunchAngle = Math.max(35, Math.min(100, baseAngle + bodyAimPitch * 50));
    const angleRad = effectiveLaunchAngle * Math.PI / 180;
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
      new THREE.SphereGeometry(0.5, 32, 16),
      new THREE.MeshBasicMaterial({ color: 0x4488ff, transparent: true, opacity: 0.5, side: THREE.DoubleSide, depthWrite: false })
    );
    mesh.position.set(posFinal.x, posFinal.y + 0.5, posFinal.z);
    scene.add(mesh);
    empWaves.push({ pos: { x: posFinal.x, y: posFinal.y + 0.5, z: posFinal.z }, radius: 0, maxRadius: range, expandSpeed, disableDuration: duration, mesh });
    playOnce(empBuffer);
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
    const showEmpRadius = trajW?.type === 'emp';

    if (showEmpRadius && empRadiusMarker) {
      cannonTrajectoryLine.visible = false;
      if (cannonTrajectoryEndSphere) cannonTrajectoryEndSphere.visible = false;
      laserTrajectoryLine.visible = false;
      const range = trajW.range ?? 15;
      empRadiusMarker.position.set(posFinal.x, posFinal.y + 3, posFinal.z);
      empRadiusMarker.scale.setScalar(range);
      empRadiusMarker.visible = true;
    } else if (showProjectileTrajectory) {
      if (empRadiusMarker) empRadiusMarker.visible = false;
      cannonTrajectoryLine.visible = true;
      laserTrajectoryLine.visible = false;
      const mortarOrigin = trajW.type === 'mortar'
        ? new THREE.Vector3(posFinal.x, posFinal.y + 2, posFinal.z)
        : barrelTip.clone();
      trajectoryBarrelTip.lerp(mortarOrigin, trajectoryBarrelSmooth);
      if (trajectoryBarrelTip.distanceTo(mortarOrigin) > 5) trajectoryBarrelTip.copy(mortarOrigin);
      const linVel = tankRigidBody.linvel();
      const spd = trajW.speed ?? cannonSpeed;
      const baseAngle = trajW.type === 'mortar' ? (trajW.launchAngle ?? 75) : 0;
      const effectiveAngle = trajW.type === 'mortar'
        ? Math.max(35, Math.min(100, baseAngle + bodyAimPitch * 50))
        : baseAngle;
      const angleRad = effectiveAngle * Math.PI / 180;
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
      if (empRadiusMarker) empRadiusMarker.visible = false;
      cannonTrajectoryLine.visible = false;
      if (cannonTrajectoryEndSphere) cannonTrajectoryEndSphere.visible = false;
      const beamRangeTraj = heatBeamW?.range ?? mgRange;
      const beamHeatMaxTraj = heatBeamW?.heatMax ?? mgHeatMax;
      const showLaserPreview = !isKeyForAction(keys, 'fire') ||
        (isMinigunWeapon ? minigunAmmo <= 0 : mgHeat >= beamHeatMaxTraj || mgOverheated);
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
      if (empRadiusMarker) empRadiusMarker.visible = false;
    }
  } else {
    if (cannonTrajectoryLine) cannonTrajectoryLine.visible = false;
    if (cannonTrajectoryEndSphere) cannonTrajectoryEndSphere.visible = false;
    if (laserTrajectoryLine) laserTrajectoryLine.visible = false;
    if (empRadiusMarker) empRadiusMarker.visible = false;
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
        const hitTurret = cb.owner === 'player' ? turrets.find((t) => t.rigidBody && hitParent === t.rigidBody) : null;
        if (hitEnemy && hitEnemy.health > 0) {
          hitEnemy.health = takeDamage(hitEnemy.rigidBody, hitEnemy.health, cb.damage ?? cannonDamage, 'primary', dir, hitEnemy.knockbackVel, cb.knockback ?? cannonKnockbackImpulse);
          hitEnemy.hitFlashUntil = now + 0.12;
          hitEnemy.hitJolt += 0.25;
          if (hitEnemy.health <= 0) {
            playOnce(explodeBuffer);
            explosionPieces.push(...explodeTank(hitEnemy.mesh, hitEnemy.rigidBody));
            enemies = enemies.filter((x) => x !== hitEnemy);
            if (enemies.length === 0 && turrets.length === 0) {
              enemyDead = true;
              if (!winSpeechPlayed) {
                winSpeechPlayed = true;
                markDefeated(currentLevelId);
                setTimeout(() => playRandomFrom(winSpeechBuffers), 1000);
              }
            }
          }
        } else if (hitTurret && hitTurret.health > 0) {
          hitTurret.health = takeDamage(hitTurret.rigidBody, hitTurret.health, cb.damage ?? cannonDamage, 'primary', dir, { x: 0, y: 0, z: 0 }, cb.knockback ?? cannonKnockbackImpulse);
          hitTurret.hitFlashUntil = now + 0.12;
          if (hitTurret.health <= 0) {
            playOnce(explodeBuffer);
            explosionPieces.push(...explodeTank(hitTurret.mesh, hitTurret.rigidBody));
            if (hitTurret.laserLine) scene.remove(hitTurret.laserLine);
            turrets = turrets.filter((x) => x !== hitTurret);
            if (enemies.length === 0 && turrets.length === 0) {
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
                    if (enemies.length === 0 && turrets.length === 0) {
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
              for (const t of turrets) {
                if (!t.rigidBody || t.health <= 0) continue;
                const tPos = t.rigidBody.translation();
                const dx = tPos.x - hitPoint.x, dy = tPos.y - hitPoint.y, dz = tPos.z - hitPoint.z;
                const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
                if (d < splashR) {
                  const tVal = d / splashR;
                  const damageMult = 1 - tVal * (1 - falloff);
                  const splashDmg = (cb.damage ?? cannonDamage) * damageMult;
                  const splashKnock = (cb.knockback ?? cannonKnockbackImpulse) * damageMult;
                  const sDir = splashDir(tPos, d);
                  t.health = takeDamage(t.rigidBody, t.health, splashDmg, 'primary', sDir, { x: 0, y: 0, z: 0 }, splashKnock);
                  t.hitFlashUntil = now + 0.12;
                  if (t.health <= 0) {
                    playOnce(explodeBuffer);
                    explosionPieces.push(...explodeTank(t.mesh, t.rigidBody));
                    if (t.laserLine) scene.remove(t.laserLine);
                    turrets = turrets.filter((x) => x !== t);
                    if (enemies.length === 0 && turrets.length === 0) {
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

  const wantsToFireHeatBeam = !playerDead && heatBeamW && isHeatBeamWeapon(heatBeamW) && isKeyForAction(keys, 'fire');
  const beamHeatMax = heatBeamW?.heatMax ?? mgHeatMax;
  const beamHeatRate = heatBeamW?.heatRate ?? mgHeatRate;
  const beamCoolRate = heatBeamW?.coolRate ?? mgCoolRate;
  const beamRange = heatBeamW?.range ?? mgRange;
  const beamDamagePerTick = heatBeamW?.damagePerTick ?? laserDamagePerTick;
  const beamDamageInterval = heatBeamW?.damageInterval ?? laserDamageInterval;
  const isMinigun = heatBeamW?.type === 'minigun';
  const beamAmmoDrainRate = heatBeamW?.ammoDrainRate ?? 50;

  const canFireMinigun = isMinigun && minigunAmmo > 0;
  const canFireLaser = !isMinigun && mgHeat < beamHeatMax && !mgOverheated;

  if (wantsToFireHeatBeam && (canFireMinigun || canFireLaser)) {
    if (!isMinigun) {
      mgHeat = Math.min(beamHeatMax, mgHeat + beamHeatRate * dt);
      if (mgHeat >= beamHeatMax) {
        mgOverheated = true;
        playOnce(hissBuffer);
      }
    } else {
      minigunAmmo = Math.max(0, minigunAmmo - beamAmmoDrainRate * dt);
    }
    if (canFireMinigun || canFireLaser) {
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
      const hitTurretLaser = turrets.find((t) => t.rigidBody && hitParent === t.rigidBody);
      if (hitEnemyLaser && hitEnemyLaser.health > 0 && (now - lastLaserDamageTime) >= beamDamageInterval) {
        lastLaserDamageTime = now;
        hitEnemyLaser.health = takeDamage(hitEnemyLaser.rigidBody, hitEnemyLaser.health, beamDamagePerTick, 'secondary', null, null);
        hitEnemyLaser.hitFlashUntil = now + 0.12;
        hitEnemyLaser.hitJolt += 0.25;
        if (hitEnemyLaser.health <= 0) {
          playOnce(explodeBuffer);
          explosionPieces.push(...explodeTank(hitEnemyLaser.mesh, hitEnemyLaser.rigidBody));
          enemies = enemies.filter((x) => x !== hitEnemyLaser);
          if (enemies.length === 0 && turrets.length === 0) {
            enemyDead = true;
            if (!winSpeechPlayed) {
              winSpeechPlayed = true;
              markDefeated(currentLevelId);
              setTimeout(() => playRandomFrom(winSpeechBuffers), 1000);
            }
          }
        }
      }
      if (hitTurretLaser && hitTurretLaser.health > 0 && (now - lastLaserDamageTime) >= beamDamageInterval) {
        lastLaserDamageTime = now;
        hitTurretLaser.health = takeDamage(hitTurretLaser.rigidBody, hitTurretLaser.health, beamDamagePerTick, 'secondary', null, null);
        hitTurretLaser.hitFlashUntil = now + 0.12;
          if (hitTurretLaser.health <= 0) {
          playOnce(explodeBuffer);
          explosionPieces.push(...explodeTank(hitTurretLaser.mesh, hitTurretLaser.rigidBody));
          if (hitTurretLaser.laserLine) scene.remove(hitTurretLaser.laserLine);
          turrets = turrets.filter((x) => x !== hitTurretLaser);
          if (enemies.length === 0 && turrets.length === 0) {
            enemyDead = true;
            if (!winSpeechPlayed) {
              winSpeechPlayed = true;
              markDefeated(currentLevelId);
              setTimeout(() => playRandomFrom(winSpeechBuffers), 1000);
            }
          }
        }
      }
      const hitAnyEnemy = hit && (enemies.some((e) => e.rigidBody && hit.collider.parent() === e.rigidBody) || turrets.some((t) => t.rigidBody && hit.collider.parent() === t.rigidBody));
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
          const fade = Math.pow(1 - f, 1.2);
          colArr.push(stripe * fade, stripe * fade, 0);
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
    if (w.type === 'minigun') return `Ammo: ${minigunAmmo}`;
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
    if (lossOverlayEl && (playerDead || escapePauseActive)) lossOverlayEl.classList.remove('hidden');
    else if (lossOverlayEl) lossOverlayEl.classList.add('hidden');
  } else {
    if (lossOverlayEl) lossOverlayEl.classList.add('hidden');
    if (nextLevelBtnEl) nextLevelBtnEl.classList.add('hidden');
    if (youWinOverlayEl) youWinOverlayEl.classList.add('hidden');
  }

  if (tankRigidBody) lastCamTarget = tankRigidBody.translation();
  else if (enemies.length > 0 || turrets.length > 0) {
    const aliveEnemy = enemies.find((e) => e.rigidBody && e.health > 0);
    const aliveTurret = turrets.find((t) => t.rigidBody && t.health > 0);
    const alive = aliveEnemy || aliveTurret;
    if (alive) lastCamTarget = alive.rigidBody.translation();
  }
  const camTarget = lastCamTarget;
  const zoomH = camHeight * camZoomFactor;
  const zoomD = camDist * camZoomFactor;
  scene.fog.near = 20 * camZoomFactor;
  scene.fog.far = 100 * camZoomFactor;
  camera.position.lerp(
    new THREE.Vector3(camTarget.x, camTarget.y + zoomH, camTarget.z + zoomD),
    0.08
  );
  camera.lookAt(camTarget.x, camTarget.y, camTarget.z);

  composer.render();
}

// Entry: splash.js calls init() when user selects a level (or on devmode)
export { init };
