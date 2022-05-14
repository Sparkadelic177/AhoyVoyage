import React, { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import TheSunny from "./components/TheSunny";
import Terrain from "./components/Terrain";

export default function App() {
  return (
    <Canvas style={{ height: "100vh" }} fov={70}>
      <fog attach="fog" args={["white", 0, 26]} />
      <OrbitControls enableZoom enablePan enableRotate />
      <ambientLight intensity={1} position={[0, 50, 50]} />
      <pointLight intensity={2} position={[7, 5, 1]} />
      <Sky sunPosition={[7, 5, 1]} />
      <TheSunny />
      <Suspense>
        <Terrain />
      </Suspense>
    </Canvas>
  );
}
