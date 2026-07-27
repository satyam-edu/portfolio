"use client";

import * as React from "react";
import { Canvas } from "@react-three/fiber";

import { ParticleField } from "@/components/three/particle-field";

export function HeroCanvas() {
  return (
    <Canvas
      style={{ position: "absolute", inset: 0 }}
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <React.Suspense fallback={null}>
        <ParticleField />
      </React.Suspense>
    </Canvas>
  );
}
