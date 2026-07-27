"use client";

import * as React from "react";
import { useFrame } from "@react-three/fiber";
import type { Points } from "three";

const PARTICLE_COUNT = 1600;
const RADIUS = 4;

function generatePositions(count: number, radius: number) {
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const r = radius * Math.cbrt(Math.random());
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }

  return positions;
}

export function ParticleField() {
  const pointsRef = React.useRef<Points>(null);
  const positions = React.useMemo(
    () => generatePositions(PARTICLE_COUNT, RADIUS),
    [],
  );

  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.03;
    pointsRef.current.rotation.x += delta * 0.01;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        sizeAttenuation
        color="#a1a1aa"
        transparent
        opacity={0.8}
        depthWrite={false}
      />
    </points>
  );
}
