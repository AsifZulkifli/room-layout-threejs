// QueenBedModel.jsx
import React from 'react';
import { useGLTF, Clone } from '@react-three/drei';

export default function QueenBedModel(props) {
  const { scene } = useGLTF('/models/queenbed.glb');
  return <Clone object={scene} castShadow receiveShadow {...props} />;
}
useGLTF.preload('/models/queenbed.glb');
