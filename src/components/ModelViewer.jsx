import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = ({ url }) => {
  const { scene } = useGLTF(url);

  useEffect(() => {
    if (scene) {
      scene.position.set(0, 0, 0);
      scene.scale.set(1, 1, 1);
    }
  }, [scene]);

  return <primitive object={scene} />;
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
    // Changed height and width to take up most of the viewport
    <div className="s">
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
          style={{ background: '#f1f5f9', height: '100vh', width: '100vw' }}
          onError={handleError}
        >
          {/* Increased light intensity for better visibility */}
          <ambientLight intensity={0.7} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />

          <Suspense fallback={<LoadingBox />}>
            <Model url={modelPath} />
          </Suspense>

          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            autoRotate={true}
            minDistance={2}
            maxDistance={5}
          />

          <gridHelper args={[20, 20]} />
        </Canvas>
      )}
      <div className="absolute bottom-4 left-4 text-sm text-gray-600 bg-white/80 px-2 py-1 rounded">
        Model path: {modelPath}
      </div>
    </div>
  );
};

useGLTF.preload('/models/isometric_bedroom.glb');

export default ModelViewer;