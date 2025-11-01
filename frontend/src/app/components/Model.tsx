import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const Model = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let scene, camera, renderer, model;
    let animationFrameId;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Scene Setup
    scene = new THREE.Scene();
    // REMOVED: scene.background - this makes it transparent
    scene.background = null;

    // Camera
    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 1.5, 3);

    // Renderer with alpha for transparency
    renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true // Enable transparent background
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0); // Transparent clear color
    containerRef.current.appendChild(renderer.domElement);

    // NO OrbitControls - removed for automatic rotation only

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    const hemisphereLight = new THREE.HemisphereLight(0xeeeeff, 0x777788, 0.7);
    scene.add(hemisphereLight);

    const fillLight = new THREE.DirectionalLight(0xffffee, 1.0);
    fillLight.position.set(-5, 5, -5);
    scene.add(fillLight);

    // GLB Model Loading
    const loader = new GLTFLoader();
    const glbUrl = '/models/builditPuffer.glb';

    loader.load(
      glbUrl,
      (gltf) => {
        model = gltf.scene;
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);
        model.scale.set(1.5, 1.5, 1.5);
        scene.add(model);
        animateLoop();
      },
      undefined,
      (error) => {
        console.log('Failed to load model:', error);
      }
    );

    // Animation Loop with auto-rotation
    const animateLoop = () => {
      animationFrameId = requestAnimationFrame(animateLoop);
      
      // Auto-rotate the model
      if (model) {
        model.rotation.y += 0.005; // Adjust speed here (higher = faster)
      }
      
      renderer.render(scene, camera);
    };

    // Responsiveness
    const onWindowResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', onWindowResize, false);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', onWindowResize, false);

      if (renderer.domElement) {
        renderer.domElement.remove();
      }
      if (scene) {
        scene.traverse((object) => {
          if (object.isMesh) {
            if (object.geometry) object.geometry.dispose();
            if (object.material) {
              if (Array.isArray(object.material)) {
                object.material.forEach(m => m.dispose());
              } else {
                object.material.dispose();
              }
            }
          }
        });
      }
      if (renderer) renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
    />
  );
};

export default Model;
