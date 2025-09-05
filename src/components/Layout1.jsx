import React from 'react';

const Layout1 = () => {
  return (
    <>
      {/* Simple furniture - Box as a sofa */}
      <mesh position={[-2, 0.5, 0]}>
        <boxGeometry args={[3, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
      {/* Table */}
      <mesh position={[2, 0.4, 2]}>
        <boxGeometry args={[1.5, 0.8, 1.5]} />
        <meshStandardMaterial color="brown" />
      </mesh>
    </>
  );
};

export default Layout1;
