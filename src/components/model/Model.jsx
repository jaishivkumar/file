import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { OrbitControls } from '@react-three/drei';

const Model = ({ url }) => {
  const fbx = useLoader(FBXLoader, url); // Load the .fbx file
  const modelRef = useRef();

  return (
    <>
      <primitive ref={modelRef} object={fbx} scale={[0.1, 0.1, 0.1]} position={[0, -1, 0]} />
      <OrbitControls enablePan={false} enableZoom={true} />
    </>
  );
};

export default Model;