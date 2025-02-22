import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';

const ThreeDModelViewer = () => {
    const containerRef = useRef(null);
    const modelRef = useRef(null);
    const controlsRef = useRef(null);
    const cameraRef = useRef(null);
    const rendererRef = useRef(null);

    useEffect(() => {
        // Create the scene, camera, and renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 500 / 500, 0.1, 1000);
        camera.position.set(-0.02, 1.09, -0.95);
        cameraRef.current = camera;

        // Set up the renderer with transparency
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        const container = containerRef.current;
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;
        renderer.setSize(containerWidth, containerHeight);
        renderer.setClearColor(0x000000, 0); // Transparent background
        container.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Set up OrbitControls
        const controls = new OrbitControls(camera, renderer.domElement);
        controlsRef.current = controls;

        // Load the MTL file
        const mtlLoader = new MTLLoader();
        mtlLoader.load(
            'models/pierre/pvic.mtl',
            (materials) => {
                materials.preload();

                const objLoader = new OBJLoader();
                objLoader.setMaterials(materials);
                objLoader.load(
                    'models/pierre/pvic.obj',
                    (object) => {
                        modelRef.current = object;
                        object.traverse((child) => {
                            if (child.isMesh) {
                                child.material = new THREE.MeshBasicMaterial({
                                    map: child.material.map,
                                    side: THREE.DoubleSide,
                                    transparent: true,
                                    opacity: 1.0,
                                });

                                if (child.material.map && child.material.map.image) {
                                    const textureImage = child.material.map.image;
                                    if (textureImage && textureImage.hasOwnProperty('alpha')) {
                                        child.material.alphaTest = 0.5;
                                    }
                                }

                                if (child.material.map) {
                                    child.material.map.magFilter = THREE.NearestFilter;
                                    child.material.map.minFilter = THREE.NearestFilter;
                                }
                            }
                        });
                        scene.add(object);
                        const bbox = new THREE.Box3().setFromObject(object);
                        const center = bbox.getCenter(new THREE.Vector3());
                        controls.target.copy(center);
                    },
                    (xhr) => console.log((xhr.loaded / xhr.total * 100) + '% loaded'),
                    (error) => console.log('An error happened', error)
                );
            },
            (xhr) => console.log((xhr.loaded / xhr.total * 100) + '% loaded (MTL)'),
            (error) => console.log('An error happened while loading the MTL file', error)
        );

        // Function to log camera position and direction
        const logCameraInfo = () => {
            console.log('Camera Position:', camera.position);
            const direction = new THREE.Vector3();
            camera.getWorldDirection(direction);
            console.log('Camera Direction:', direction);
        };

        const handleKeyDown = (e) => {
            if (e.code === "KeyD") {
                logCameraInfo();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
            if (modelRef.current) {
                modelRef.current.rotation.y += 0.02;
            }
        };
        animate();

        // Handle resizing
        const handleResize = () => {
            const containerWidth = container.clientWidth;
            const containerHeight = container.clientHeight;
            renderer.setSize(containerWidth, containerHeight);
            camera.aspect = containerWidth / containerHeight;
            camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', handleResize);

        // Clean up on unmount
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('resize', handleResize);
            container.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []);

    return <div ref={containerRef} className='' style={{
        maxWidth: '500px',
        maxHeight: '500px',
        width: '100%',
        height: 'auto',
        aspectRatio: '1 / 1',
        position: 'relative',
    }} />;
};

export default ThreeDModelViewer;
