// QueenBedModel.jsx
import React from 'react';
import { useGLTF, Clone } from '@react-three/drei';

export default function QueenBedModel(props) {
  const { scene } = useGLTF('/models/queenbed.glb');
  return (
    <group {...props}>
      <Clone
        object={scene}
        castShadow
        receiveShadow
        position={[0, 0, 1]}
      />
    </group>
  );
}
useGLTF.preload('/models/queenbed.glb');
