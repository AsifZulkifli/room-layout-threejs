import React from 'react';
import Layout1 from './Layout1';
import Layout2 from './Layout2';

const RoomScene = ({ layout }) => {
  return (
    <>
      {/* Floor */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#e0e0e0" />
      </mesh>

      {/* Walls (simplified) */}
      <mesh position={[0, 2.5, -10]}>
        <boxGeometry args={[20, 5, 0.2]} />
        <meshStandardMaterial color="#f5f5f5" />
      </mesh>

      {/* Switchable Layouts */}
      {layout === 'layout1' && <Layout1 />}
      {layout === 'layout2' && <Layout2 />}
    </>
  );
};

export default RoomScene;
