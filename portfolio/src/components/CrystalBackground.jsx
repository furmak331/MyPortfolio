import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Tetrahedron, AdaptiveDpr, AdaptiveEvents } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

function Crystal({ position }) {
  const meshRef = useRef();
  const [rotationSpeed] = useMemo(() => [Math.random() * 0.01 + 0.005], []);

  useFrame((state) => {
    meshRef.current.rotation.x += rotationSpeed;
    meshRef.current.rotation.y += rotationSpeed;
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.1;
  });

  return (
    <Tetrahedron args={[0.4, 0]} position={position} ref={meshRef}>
      <meshPhongMaterial color="#ffffff" wireframe />
    </Tetrahedron>
  );
}

function CrystalField() {
  const crystals = useMemo(() => {
    return new Array(100).fill().map(() => ({
      position: [
        Math.random() * 20 - 10,
        Math.random() * 20 - 10,
        Math.random() * 20 - 15
      ]
    }));
  }, []);

  return (
    <>
      {crystals.map((props, i) => (
        <Crystal key={i} {...props} />
      ))}
    </>
  );
}

function Scene() {
  const { camera } = useThree();
  
  useFrame(() => {
    camera.position.z = 5 + window.scrollY / 500;
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <CrystalField />
      <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
      </EffectComposer>
    </>
  );
}

export default function CrystalBackground() {
  return (
    <Canvas style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none' }}>
      <Scene />
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
    </Canvas>
  );
}
