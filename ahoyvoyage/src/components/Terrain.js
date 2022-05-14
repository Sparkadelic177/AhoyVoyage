import React from 'react';
import * as THREE from "three";
import {Plane } from "@react-three/drei";
import {useLoader } from "@react-three/fiber";

const Terrain = () => {
    const elevation = useLoader(THREE.TextureLoader, "highElevationSqaure.png");
    const normals = useLoader(THREE.TextureLoader, "NormalMap.png");
    const colors = useLoader(THREE.TextureLoader, "colors.png");
    return (
      <Plane
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -.2, 0]}
        args={[128, 128, 1024, 1024]}
      >
        <meshStandardMaterial
          attach="material"
          color="white"
          map={colors}
          metalness={0.2}
          displacementMap={elevation}
          normalMap={normals}
        />
      </Plane>
    );
};

export default Terrain;