import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useCursor } from '@react-three/drei';
import * as THREE from 'three';

const Model = ({ url }) => {
  const { scene } = useGLTF(url);
  const [originalMaterial, setOriginalMaterial] = useState(null);

  useEffect(() => {
    if (scene) {
      scene.position.set(0, 0, 0);
      scene.scale.set(1, 1, 1);
    }
  }, [scene]);

  useCursor(!!originalMaterial); // Change cursor when hovering

  const handlePointerOver = (e) => {
    if (e.object.name === "Object_16") {
      e.stopPropagation();
      if (!originalMaterial) {
        setOriginalMaterial(e.object.material); // Store original material
      }
      e.object.material = new THREE.MeshStandardMaterial({ color: "cyan" }); // Change color
    }
  };

  const handlePointerOut = (e) => {
    if (e.object.name === "Object_16" && originalMaterial) {
      e.object.material = originalMaterial; // Restore original material
      setOriginalMaterial(null);
    }
  };

  return (
    <primitive
      object={scene}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    />
  );
};

const LoadingBox = () => (
  <mesh>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color="hotpink" wireframe />
  </mesh>
);

const ModelViewer = () => {
  const [error, setError] = useState(null);
  const modelPath = '/models/isometric_bedroom.glb';

  const handleError = (err) => {
    console.error('Error loading model:', err);
    setError(err.message);
  };

  return (
    <div className="s" style={{ background: 'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)' }}>
      {error ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-red-500 p-4 text-center">
          <p className="font-bold mb-2">Error loading model</p>
          <p>Please check if:</p>
          <ul className="list-disc text-left">
            <li>The model file is in the public/models folder</li>
            <li>The file name matches exactly (case-sensitive)</li>
            <li>The file path is correct</li>
          </ul>
          <p className="mt-2 text-sm">{error}</p>
        </div>
      ) : (
        <Canvas
          camera={{ position: [2, 2, 5], fov: 60 }}
          style={{ height: '100vh', width: '100vw', background: 'transparent' }}
          onError={handleError}
        >
          <ambientLight intensity={0.7} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />

          <Suspense fallback={<LoadingBox />}>
            <Model url={modelPath} />
          </Suspense>

          <OrbitControls
            enablePan={false}
            enableZoom={false}
            enableRotate={true}
            autoRotate={false}
            minDistance={6}
            maxDistance={6}
            maxPolarAngle={Math.PI / 3}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      )}
    </div>
  );
};

useGLTF.preload('/models/isometric_bedroom.glb');

export default ModelViewer;
