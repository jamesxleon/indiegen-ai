'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random';
import { useRef, Suspense, useState, useEffect, useMemo } from 'react';
import * as THREE from 'three';

function Stars() {
  const ref = useRef<THREE.Points>(null);
  
  // Generate particles with proper sizing (5000 * 3 floats for x, y, z per point)
  const positions = useMemo(() => {
    // Allocate proper size (5000 points × 3 coordinates = 15000 floats)
    const buf = new Float32Array(5000 * 3);
    // Use a safe radius value that's never 0
    const radius = Math.max(0.0001, 1.2);
    // Fill the buffer in-place
    random.inSphere(buf, { radius });
    return buf;
  }, []);
  
  // Validate that there are no NaN values (debug check)
  useEffect(() => {
    if (positions.some(Number.isNaN)) {
      console.warn('Found NaN in point cloud');
    }
  }, [positions]);
  
  // Animation loop
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <Points 
      ref={ref} 
      positions={positions} 
      stride={3} 
      frustumCulled
    >
      <PointMaterial
        transparent
        color="#00eaff"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function ThreeDust() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render on server-side
  if (!mounted) return null;

  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
