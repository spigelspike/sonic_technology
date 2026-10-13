'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RotateCcw, Info, Loader2 } from 'lucide-react';

interface LaserModelViewerProps {
  modelPath?: string;
  className?: string;
}

export const LaserModelViewer: React.FC<LaserModelViewerProps> = ({
  modelPath = '/assets/GasFinder/laser.glb',
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  // Front-angle signature camera position:
  // Green lens front-left, cylindrical barrel extending right, bracket on left-rear
  const initialCamPos = useRef<THREE.Vector3>(new THREE.Vector3(-2.6, 1.4, 2.2));

  const [is3DReady, setIs3DReady] = useState<boolean>(false);
  const [loadProgress, setLoadProgress] = useState<number>(0);
  const [webGLFailed, setWebGLFailed] = useState<boolean>(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGLFailed(true);
        return;
      }
    } catch {
      setWebGLFailed(true);
      return;
    }

    let animationFrameId: number;
    let isDisposed = false;

    // 1. Scene & Camera (Classic balanced FOV 38 with full assembly visible)
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      38,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.copy(initialCamPos.current);
    cameraRef.current = camera;

    // 2. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setClearColor(0x000000, 0);
    // Cap pixel ratio at 2 for mobile battery & performance
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.style.touchAction = 'pan-y';
    container.appendChild(renderer.domElement);

    // 3. Studio Lighting Rig for brushed metal and optical lens realism
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.6);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.6);
    keyLight.position.set(-5, 6, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xe2e8f0, 1.4);
    fillLight.position.set(5, 3, -3);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 1.8);
    rimLight.position.set(0, -4, -4);
    scene.add(rimLight);

    const topSoft = new THREE.DirectionalLight(0xffffff, 1.0);
    topSoft.position.set(0, 7, 0);
    scene.add(topSoft);

    // 4. Orbit Controls (No scroll zoom, no pinch zoom, pan-y compliant)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.touches = { ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.ROTATE };
    controls.minPolarAngle = Math.PI * 0.15;
    controls.maxPolarAngle = Math.PI * 0.85;
    controls.target.set(0, 0, 0);
    controlsRef.current = controls;

    // Respect prefers-reduced-motion for auto-rotate
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let hasInteracted = false;
    if (!prefersReducedMotion) {
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.5; // Slow, smooth auto-rotation
    } else {
      controls.autoRotate = false;
    }

    const onUserInteraction = () => {
      if (!hasInteracted) {
        hasInteracted = true;
        controls.autoRotate = false;
      }
    };

    container.addEventListener('pointerdown', onUserInteraction, { passive: true });
    container.addEventListener('touchstart', onUserInteraction, { passive: true });

    // 5. Setup DRACO & GLTF Loaders
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/draco/');

    const gltfLoader = new GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader);

    // 6. Asynchronously lazy-load the compressed 3D GLB
    gltfLoader.load(
      modelPath,
      (gltf) => {
        if (isDisposed) return;

        const model = gltf.scene;

        // Center model geometry
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        model.position.x -= center.x;
        model.position.y -= center.y;
        model.position.z -= center.z;

        // Perfectly proportioned scale matching the original clean fit without clipping
        const maxDim = Math.max(size.x, size.y, size.z);
        if (maxDim > 0) {
          const desiredScale = 2.4 / maxDim;
          model.scale.setScalar(desiredScale);
        }

        // Optimize materials
        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            if (mesh.material) {
              const mat = mesh.material as THREE.MeshStandardMaterial;
              mat.roughness = Math.max(mat.roughness ?? 0.35, 0.2);
              mat.metalness = Math.min(mat.metalness ?? 0.3, 0.85);
            }
          }
        });

        scene.add(model);
        setIs3DReady(true);
      },
      (xhr) => {
        if (xhr.total > 0) {
          setLoadProgress(Math.round((xhr.loaded / xhr.total) * 100));
        }
      },
      (err) => {
        console.error('Error loading 3D laser model:', err);
        if (!isDisposed) {
          setWebGLFailed(true);
        }
      }
    );

    // 7. Handle Window Resize
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // 8. Animation Loop
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // 9. Cleanup
    return () => {
      isDisposed = true;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('pointerdown', onUserInteraction);
      container.removeEventListener('touchstart', onUserInteraction);
      controls.dispose();
      dracoLoader.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [modelPath]);

  // Reset Camera View to signature front angle
  const resetCamera = useCallback(() => {
    if (controlsRef.current && cameraRef.current) {
      cameraRef.current.position.copy(initialCamPos.current);
      controlsRef.current.target.set(0, 0, 0);
      controlsRef.current.update();
    }
  }, []);

  return (
    <div
      className={`relative w-full h-[320px] sm:h-[420px] lg:h-[480px] flex items-center justify-center select-none bg-transparent overflow-hidden ${className}`}
      style={{ touchAction: 'pan-y' }}
    >
      {/* Loading Indicator for 3D Model */}
      {!is3DReady && !webGLFailed && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3.5 pointer-events-none transition-opacity">
          <div className="relative flex items-center justify-center">
            <div className="w-14 h-14 rounded-full border-2 border-[var(--border)] border-t-[var(--accent)] animate-spin" />
            <div className="absolute w-8 h-8 rounded-full bg-[var(--accent)]/10 animate-ping" />
          </div>
          <div className="flex flex-col items-center gap-1 text-center px-4">
            <span className="text-xs font-mono font-medium uppercase tracking-wider text-[var(--text)]">
              Loading 3D Model{loadProgress > 0 && loadProgress < 100 ? ` (${loadProgress}%)` : '...'}
            </span>
            <span className="text-[11px] text-[var(--text-2)] font-mono">
              GasFinder-LoS Transceiver Optics
            </span>
          </div>
        </div>
      )}

      {/* WebGL Fallback Notification if hardware acceleration or model loading fails */}
      {webGLFailed && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center bg-[var(--surface-2)]/50 rounded border border-[var(--border)]">
          <div className="w-10 h-10 rounded-full bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center mb-2.5">
            <Info className="w-5 h-5 text-[var(--accent)] shrink-0" />
          </div>
          <h4 className="text-xs font-semibold text-[var(--text)] uppercase tracking-wider font-mono mb-1">
            GasFinder-LoS Transceiver
          </h4>
          <span className="text-xs text-[var(--text-2)] max-w-xs">
            Interactive 3D model unavailable on this device. Continuous optical measurement specifications detailed below.
          </span>
        </div>
      )}

      {/* 2. Interactive 3D Canvas Container */}
      {!webGLFailed && (
        <div
          ref={containerRef}
          className="w-full h-full cursor-grab active:cursor-grabbing bg-transparent relative z-1"
          style={{ touchAction: 'pan-y' }}
          title="Drag horizontally to rotate detector"
        />
      )}

      {/* 3. Interaction Hint & Camera Reset Button (Clean, no hotspot tags) */}
      {is3DReady && !webGLFailed && (
        <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 z-10 flex items-center gap-2">
          <span className="hidden sm:inline-block text-[11px] font-sans text-[var(--text-2)] bg-[var(--card)]/90 border border-[var(--border)] px-2.5 py-1 rounded shadow-xs pointer-events-none">
            Drag to rotate 360°
          </span>

          <button
            type="button"
            onClick={resetCamera}
            aria-label="Reset 3D camera angle"
            title="Reset to default front perspective"
            className="p-2 rounded bg-[var(--card)]/90 hover:bg-[var(--surface-2)] text-[var(--text-2)] hover:text-[var(--text)] border border-[var(--border)] transition-colors shadow-xs cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)]"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
};
