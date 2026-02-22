/**
 * 3D tank preview for the tank selection screen.
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const asset = (path) => import.meta.env.BASE_URL + path.replace(/^\//, '');

let scene, camera, renderer, tankMesh = null;
let groundPlane = null;
let animationId = null;
let dropAnimationProgress = 1;
let dropImpactPlayed = false;

const DROP_START_Y = 4;
const DROP_END_Y = 0;
const DROP_DURATION_MS = 450;

function hexToColor(hex) {
  const c = new THREE.Color(hex);
  return { r: c.r, g: c.g, b: c.b };
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
  snd.volume = 0.1;
  snd.play().catch(() => {});
}

export async function initTankPreview(canvas, character) {
  if (!canvas || !character) return;

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xff5900);
  camera = new THREE.PerspectiveCamera(50, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
  camera.position.set(0, 2.5, 11);
  camera.lookAt(0, 1.2, 0);

  // Ground plane for real shadows (receives shadows only)
  const groundGeo = new THREE.PlaneGeometry(12, 12);
  const groundMat = new THREE.ShadowMaterial({ opacity: 0.35 });
  groundPlane = new THREE.Mesh(groundGeo, groundMat);
  groundPlane.rotation.x = -Math.PI / 2;
  groundPlane.position.y = -1;
  groundPlane.receiveShadow = true;
  scene.add(groundPlane);

  // Improved 3-point lighting
  const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
  keyLight.position.set(4, 10, 6);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.width = 1024;
  keyLight.shadow.mapSize.height = 1024;
  keyLight.shadow.camera.near = 0.5;
  keyLight.shadow.camera.far = 30;
  keyLight.shadow.camera.left = -6;
  keyLight.shadow.camera.right = 6;
  keyLight.shadow.camera.top = 6;
  keyLight.shadow.camera.bottom = -6;
  keyLight.shadow.bias = -0.0001;
  keyLight.shadow.normalBias = 0.02;
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0xffeedd, 0.8);
  fillLight.position.set(-5, 5, -4);
  scene.add(fillLight);

  const rimLight = new THREE.DirectionalLight(0xffffff, 0.6);
  rimLight.position.set(0, 3, -8);
  scene.add(rimLight);

  const ambient = new THREE.AmbientLight(0xffddcc, 0.5);
  scene.add(ambient);

  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  resize();
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;

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

  const color = character.color ? hexToColor(character.color) : { r: 0.3, g: 0.5, b: 0.85 };
  tankMesh.traverse((c) => {
    if (c.isMesh && c.material) {
      c.material = c.material.clone();
      if (c.material.color) c.material.color.multiplyScalar(0.8).lerp(new THREE.Color(color.r, color.g, color.b), 0.5);
      c.castShadow = true;
      c.receiveShadow = true;
    }
  });

  tankMesh.scale.setScalar(1.4);
  tankMesh.rotation.y = Math.PI;
  tankMesh.position.set(0, DROP_START_Y, 0);
  scene.add(tankMesh);

  dropAnimationProgress = 0;
  dropImpactPlayed = false;
}

export async function setTankCharacter(character) {
  if (character && scene) await loadTank(character);
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
  }

  if (renderer && scene) renderer.render(scene, camera);
}
