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
        position={[14, -0.3, -2]}
      />
    </group>
  );
}
useGLTF.preload("/models/sofa-bed.glb");
