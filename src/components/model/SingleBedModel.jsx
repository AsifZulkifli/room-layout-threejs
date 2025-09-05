// SingleBedModel.jsx
import React from 'react';
import { useGLTF, Clone } from '@react-three/drei';

export default function SofaModel(props) {
  const { scene } = useGLTF('/models/singlebed.glb');
    return (
      <group {...props}>
        <Clone
          object={scene}
          castShadow
          receiveShadow
          position={[1, 0, 0]}
          rotation={[0, 120.95, 0]}
        />
      </group>
    );
}
useGLTF.preload('/models/singlebed.glb');
