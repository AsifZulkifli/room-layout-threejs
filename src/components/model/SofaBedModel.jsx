import React from "react";
import { useGLTF, Clone } from "@react-three/drei";

export default function SofaBedModel(props) {
  const { scene } = useGLTF("/models/sofa-bed.glb");
  return (
    <group {...props}>
      <Clone
        object={scene}
        castShadow
        receiveShadow
        position={[15, -0.3, -2]}
        rotation={[0, 0, 0]}
      />
    </group>
  );
}
useGLTF.preload("/models/sofa-bed.glb");
