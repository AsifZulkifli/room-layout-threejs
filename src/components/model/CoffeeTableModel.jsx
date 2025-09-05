// CoffeeTableModel.jsx
import React from 'react';
import { useGLTF, Clone } from '@react-three/drei';

export default function QueenBedModel(props) {
  const { scene } = useGLTF('/models/coffee-table.glb');
    return (
      <group {...props}>
        <Clone
          object={scene}
          castShadow
          receiveShadow
          position={[0.5, -0.1, -1]}
          rotation={[0, 120.95, 0]}
        />
      </group>
    );
}
useGLTF.preload('/models/coffee-table.glb');
