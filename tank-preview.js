/**
 * 3D tank preview for the tank selection screen.
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const asset = (path) => import.meta.env.BASE_URL + path.replace(/^\//, '');

let scene, camera, renderer, tankMesh = null;
let shadowMesh = null;
let animationId = null;

function hexToColor(hex) {
  const c = new THREE.Color(hex);
  return { r: c.r, g: c.g, b: c.b };
}

export async function initTankPreview(canvas, character) {
  if (!canvas || !character) return;

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xff5900);
  camera = new THREE.PerspectiveCamera(50, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
  camera.position.set(0, 2.5, 11);
  camera.lookAt(0, 1.2, 0);

  const shadowGeo = new THREE.CircleGeometry(1.8, 32);
  const shadowMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.4 });
  shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
  shadowMesh.rotation.x = -Math.PI / 2;
  shadowMesh.position.set(0, 0.01, 0);
  scene.add(shadowMesh);

  const light = new THREE.DirectionalLight(0xffffff, 2.5);
  light.position.set(5, 12, 6);
  scene.add(light);
  scene.add(new THREE.AmbientLight(0xffffff, 1.0));

  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
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
    }
  });

  tankMesh.scale.setScalar(1.4);
  tankMesh.position.set(0, 0, 0);
  scene.add(tankMesh);
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
  if (shadowMesh && scene) {
    scene.remove(shadowMesh);
    shadowMesh.geometry?.dispose();
    shadowMesh.material?.dispose();
  }
  scene = camera = renderer = tankMesh = shadowMesh = null;
}

function animate() {
  animationId = requestAnimationFrame(animate);
  if (tankMesh) tankMesh.rotation.y += 0.01;
  if (renderer && scene) renderer.render(scene, camera);
}
