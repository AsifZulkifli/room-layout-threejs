import React from 'react';

const Layout2 = () => {
  return (
    <>
      {/* Sofa moved to a new position */}
      <mesh position={[2, 0.5, -2]}>
        <boxGeometry args={[3, 1, 1]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      {/* Table in a new location */}
      <mesh position={[-2, 0.4, 1]}>
        <boxGeometry args={[1.5, 0.8, 1.5]} />
        <meshStandardMaterial color="green" />
      </mesh>
    </>
  );
};

export default Layout2;
