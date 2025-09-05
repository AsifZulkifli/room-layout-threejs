// RoundCoffeeTableModel.jsx
import React from 'react';
import { useGLTF, Clone } from '@react-three/drei';

export default function QueenBedModel(props) {
  const { scene } = useGLTF('/models/round-coffee-table.glb');
    return (
      <group {...props}>
        <Clone
          object={scene}
          castShadow
          receiveShadow
          position={[0.5, -0.15, -1]}
        />
      </group>
    );}
useGLTF.preload('/models/round-coffee-table.glb');
