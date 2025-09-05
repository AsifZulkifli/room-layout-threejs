import React from "react";
import { useGLTF, Clone } from "@react-three/drei";

export default function SofaModel(props) {
  const { scene } = useGLTF("/models/sofa.glb");
  return (
    <group {...props}>
      <Clone
        object={scene}
        castShadow
        receiveShadow
        position={[1.5, 0, -0.5]}
        rotation={[0, 155.5, 0]}
      />
    </group>
  );
}
useGLTF.preload("/models/sofa.glb");
