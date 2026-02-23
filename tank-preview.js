/**
 * 3D tank preview for the tank selection screen.
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { getEffectiveSfxVolume } from './audio.js';

const asset = (path) => import.meta.env.BASE_URL + path.replace(/^\//, '');

let scene, camera, renderer, tankMesh = null;
let groundPlane = null;
let animationId = null;
let previewWeaponIndex = 0;
let previewCharacter = null;
let dropAnimationProgress = 1;
let dropImpactPlayed = false;
let weaponSwitchPhase = 'idle';
let weaponSwitchT = 0;
let weaponSwitchTargetIndex = 0;
let weaponSwitchFromBarrel = null;
let weaponSwitchToBarrel = null;
let weaponSwitchFromType = null;
let weaponSwitchToType = null;

const DROP_START_Y = 4;
const DROP_END_Y = 0;
const DROP_DURATION_MS = 450;
const WEAPON_SWITCH_DURATION = 0.2;
const TOP_MOUNTED_RETRACT_OFFSET = 0.5;

const barrelDefaults = new WeakMap();

/** Barrel extent along local +Z (back toward turret). Used to offset position so scale origin is at back. */
function getBarrelZBackExtent(barrel) {
  const box = new THREE.Box3().setFromObject(barrel);
  box.applyMatrix4(barrel.matrixWorld.clone().invert());
  return Math.max(0, box.max.z);
}

function isTopMountedWeapon(type) {
  return type === 'emp' || type === 'mortar';
}

function getTopMountedExtendedY(barrel) {
  return barrelDefaults.get(barrel)?.y ?? 0;
}

function getTopMountedRetractedY(barrel) {
  return getTopMountedExtendedY(barrel) - TOP_MOUNTED_RETRACT_OFFSET;
}

function getBarrelForWeaponIndex(weaponIndex) {
  if (!tankMesh || !previewCharacter) return null;
  const w = previewCharacter.weapons?.[weaponIndex];
  const weaponType = w?.type;
  const weaponObjs = collectAllWeaponBarrels(tankMesh);
  const fallbackBarrel = tankMesh.getObjectByName('Barrel');
  const barrel = weaponType ? (findWeaponBarrel(tankMesh, weaponType) || findBarrelInList(weaponObjs, weaponType)) : null;
  return barrel || fallbackBarrel;
}

function easeOutBounce(t) {
  const n1 = 7.5625, d1 = 2.75;
  if (t < 1 / d1) return n1 * t * t;
  if (t < 2 / d1) return n1 * (t -= 1.5 / d1) * t + 0.75;
  if (t < 2.5 / d1) return n1 * (t -= 2.25 / d1) * t + 0.9375;
  return n1 * (t -= 2.625 / d1) * t + 0.984375;
}

function playClank() {
  const snd = new Audio(asset('/assets/audio/thud.mp3'));
  snd.volume = getEffectiveSfxVolume() * 0.1;
  snd.play().catch(() => {});
}

function getWeaponBarrelName(weaponType) {
  if (!weaponType) return null;
  return 'Weapon-' + weaponType.charAt(0).toUpperCase() + weaponType.slice(1);
}

function findWeaponBarrel(mesh, weaponType) {
  if (!mesh || !weaponType) return null;
  return mesh.getObjectByName(getWeaponBarrelName(weaponType)) || mesh.getObjectByName('Weapon-' + weaponType.toLowerCase());
}

function collectAllWeaponBarrels(mesh) {
  const list = [];
  if (!mesh) return list;
  mesh.traverse((c) => {
    if (c.name && c.name.toLowerCase().startsWith('weapon-')) list.push(c);
  });
  return list;
}

function findBarrelInList(weaponObjs, weaponType) {
  if (!weaponType) return null;
  const canonical = getWeaponBarrelName(weaponType);
  const lower = 'Weapon-' + weaponType.toLowerCase();
  return weaponObjs.find((o) => {
    const n = o.name || '';
    return n === canonical || n === lower || n.toLowerCase() === lower.toLowerCase();
  }) || null;
}

export async function initTankPreview(canvas, character) {
  if (!canvas || !character) return;

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xff5900);
  camera = new THREE.PerspectiveCamera(50, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
  camera.position.set(0, 10, 11);
  camera.lookAt(0, 1.2, 0);

  // Ground plane for real shadows (receives shadows only)
  const groundGeo = new THREE.PlaneGeometry(12, 12);
  const groundMat = new THREE.ShadowMaterial({ opacity: 0.35 });
  groundPlane = new THREE.Mesh(groundGeo, groundMat);
  groundPlane.rotation.x = -Math.PI / 2;
  groundPlane.position.y = -1;
  groundPlane.receiveShadow = true;
  scene.add(groundPlane);

  // Match main game lighting: neutral white directional + ambient (no warm tints)
  const keyLight = new THREE.DirectionalLight(0xffffff, 2);
  keyLight.position.set(8, 16, 8);
  keyLight.target.position.set(0, 0, 0);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.width = 1024;
  keyLight.shadow.mapSize.height = 1024;
  keyLight.shadow.camera.near = 0.5;
  keyLight.shadow.camera.far = 60;
  keyLight.shadow.camera.left = -6;
  keyLight.shadow.camera.right = 6;
  keyLight.shadow.camera.top = 6;
  keyLight.shadow.camera.bottom = -6;
  keyLight.shadow.bias = -0.0001;
  keyLight.shadow.normalBias = 0.02;
  scene.add(keyLight);

  scene.add(new THREE.AmbientLight(0xffffff, 1));

  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  resize();
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;

  window.addEventListener('resize', resize);

  await loadTank(character);
  animate();
}

function resize() {
  if (!renderer || !camera) return;
  const c = renderer.domElement;
  const w = c.clientWidth;
  const h = c.clientHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
}

async function loadTank(character) {
  if (tankMesh) {
    scene.remove(tankMesh);
    tankMesh.traverse((c) => c.geometry?.dispose());
    tankMesh = null;
  }

  const loader = new GLTFLoader();
  const glbPath = character?.glbPath ? asset(character.glbPath) : asset('/assets/characters/tank-01.glb');
  const glb = await loader.loadAsync(glbPath);
  tankMesh = glb.scene;

  tankMesh.traverse((c) => {
    if (c.isMesh && c.material) {
      c.material = c.material.clone();
      c.castShadow = true;
      c.receiveShadow = true;
    }
  });

  // Collect barrels and show primary weapon
  const weaponObjs = collectAllWeaponBarrels(tankMesh);
  const fallbackBarrel = tankMesh.getObjectByName('Barrel');
  const allBarrels = [...new Set([...weaponObjs, fallbackBarrel])].filter(Boolean);
  tankMesh.scale.setScalar(1.4);
  tankMesh.rotation.y = Math.PI;
  tankMesh.position.set(0, DROP_START_Y, 0);
  scene.add(tankMesh);
  tankMesh.updateMatrixWorld(true);
  allBarrels.forEach((b) => {
    b.visible = false;
    if (!barrelDefaults.has(b)) {
      const zBack = getBarrelZBackExtent(b);
      barrelDefaults.set(b, { scale: b.scale.clone(), y: b.position.y, z: b.position.z, zBack });
    }
  });

  previewWeaponIndex = 0;
  weaponSwitchPhase = 'idle';
  previewCharacter = character;
  const primaryWeapon = character?.weapons?.[0];
  const primaryType = primaryWeapon?.type;
  const primaryBarrel = primaryType ? (findWeaponBarrel(tankMesh, primaryType) || findBarrelInList(weaponObjs, primaryType)) : null;
  const toShow = primaryBarrel || fallbackBarrel;
  if (toShow) {
    toShow.visible = true;
    toShow.scale.set(1, 1, 1);
    const def = barrelDefaults.get(toShow);
    if (!isTopMountedWeapon(primaryType) && def?.z !== undefined) toShow.position.z = def.z;
    if (isTopMountedWeapon(primaryType)) toShow.position.y = getTopMountedExtendedY(toShow);
  }

  dropAnimationProgress = 0;
  dropImpactPlayed = false;
}

export async function setTankCharacter(character) {
  if (character && scene) await loadTank(character);
}

function requestWeaponSwitch(targetIndex) {
  if (targetIndex === previewWeaponIndex && weaponSwitchPhase === 'idle') return;
  if (targetIndex === weaponSwitchTargetIndex) return;  // already animating to this weapon
  const w2 = previewCharacter?.weapons?.[targetIndex];
  if (targetIndex >= 1 && !w2) return;

  const currentIndex = weaponSwitchPhase === 'idle' ? previewWeaponIndex : weaponSwitchTargetIndex;
  const fromBarrel = getBarrelForWeaponIndex(currentIndex);
  const toBarrel = getBarrelForWeaponIndex(targetIndex);
  const fromW = previewCharacter?.weapons?.[currentIndex];
  const toW = previewCharacter?.weapons?.[targetIndex];

  if (!fromBarrel || !toBarrel) {
    previewWeaponIndex = targetIndex;
    const allBarrels = [...new Set([...collectAllWeaponBarrels(tankMesh), tankMesh.getObjectByName('Barrel')])].filter(Boolean);
    allBarrels.forEach((b) => { b.visible = false; });
    if (toBarrel) toBarrel.visible = true;
    return;
  }

  if (!barrelDefaults.has(fromBarrel)) {
    const zBack = getBarrelZBackExtent(fromBarrel);
    barrelDefaults.set(fromBarrel, { scale: fromBarrel.scale.clone(), y: fromBarrel.position.y, z: fromBarrel.position.z, zBack });
  }
  if (!barrelDefaults.has(toBarrel)) {
    const zBack = getBarrelZBackExtent(toBarrel);
    barrelDefaults.set(toBarrel, { scale: toBarrel.scale.clone(), y: toBarrel.position.y, z: toBarrel.position.z, zBack });
  }

  weaponSwitchTargetIndex = targetIndex;
  weaponSwitchFromBarrel = fromBarrel;
  weaponSwitchToBarrel = toBarrel;
  weaponSwitchFromType = fromW?.type;
  weaponSwitchToType = toW?.type;
  weaponSwitchPhase = 'retracting';
  weaponSwitchT = 0;
}

export function setTankPreviewWeapon(weaponIndex) {
  if (!tankMesh || !previewCharacter) return;
  requestWeaponSwitch(weaponIndex);
}

export function destroyTankPreview() {
  window.removeEventListener('resize', resize);
  if (animationId) cancelAnimationFrame(animationId);
  if (renderer) renderer.dispose();
  if (tankMesh) {
    scene?.remove(tankMesh);
    tankMesh.traverse((c) => {
      c.geometry?.dispose();
      if (c.material) {
        if (Array.isArray(c.material)) c.material.forEach((m) => m.dispose());
        else c.material.dispose();
      }
    });
  }
  if (groundPlane && scene) {
    scene.remove(groundPlane);
    groundPlane.geometry?.dispose();
    groundPlane.material?.dispose();
  }
  scene = camera = renderer = tankMesh = groundPlane = null;
}

let lastTime = 0;

function animate() {
  animationId = requestAnimationFrame(animate);
  const now = performance.now();
  const dt = lastTime ? (now - lastTime) / 1000 : 0;
  lastTime = now;

  if (tankMesh) {
    tankMesh.rotation.y += 0.01;

    if (dropAnimationProgress < 1) {
      const prevEased = easeOutBounce(dropAnimationProgress);
      dropAnimationProgress = Math.min(1, dropAnimationProgress + dt / (DROP_DURATION_MS / 1000));
      const eased = easeOutBounce(dropAnimationProgress);
      tankMesh.position.y = DROP_START_Y + (DROP_END_Y - DROP_START_Y) * eased;
      if (!dropImpactPlayed && prevEased < 1 && eased >= 1) {
        dropImpactPlayed = true;
        playClank();
      }
    }

    // Weapon switch barrel animation
    if (weaponSwitchPhase !== 'idle') {
      weaponSwitchT = Math.min(1, weaponSwitchT + dt / WEAPON_SWITCH_DURATION);
      const t = weaponSwitchT;
      const ease = (x) => x * x * (3 - 2 * x);

      if (weaponSwitchPhase === 'retracting') {
        const from = weaponSwitchFromBarrel;
        const def = barrelDefaults.get(from);
        if (from && def) {
          if (isTopMountedWeapon(weaponSwitchFromType)) {
            const extY = getTopMountedExtendedY(from);
            from.position.y = extY - TOP_MOUNTED_RETRACT_OFFSET * ease(t);
          } else {
            const s = 1 - ease(t);
            from.scale.set(1, 1, s);
            const zBack = def?.zBack ?? 0;
            from.position.z = (def?.z ?? from.position.z) + zBack * (1 - s);
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
        }
      } else if (weaponSwitchPhase === 'extending') {
        const to = weaponSwitchToBarrel;
        const def = barrelDefaults.get(to);
        if (to && def) {
          if (isTopMountedWeapon(weaponSwitchToType)) {
            const retY = getTopMountedRetractedY(to);
            to.position.y = retY + TOP_MOUNTED_RETRACT_OFFSET * ease(t);
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
          previewWeaponIndex = weaponSwitchTargetIndex;
          weaponSwitchPhase = 'idle';
        }
      }
    }
  }

  if (renderer && scene) renderer.render(scene, camera);
}
