'use client';

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Preload } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '@/hooks/useTheme';

// Project locations to show on the globe
const LOCATIONS = [
  { name: 'Quito', lat: -0.1807, lng: -78.4678, type: 'home' }, // 🏠 Home
  { name: 'San Francisco', lat: 37.7749, lng: -122.4194, type: 'project' },
  { name: 'New York', lat: 40.7128, lng: -74.0060, type: 'project' },
  { name: 'London', lat: 51.5074, lng: -0.1278, type: 'project' },
  { name: 'Tokyo', lat: 35.6762, lng: 139.6503, type: 'project' },
];

// Convert lat/lng to 3D coordinates on a sphere
function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  
  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  
  return new THREE.Vector3(x, y, z);
}

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';
  
  // Automatic rotation (disabled when user interacts)
  const [autoRotate, setAutoRotate] = useState(true);
  const autoRotateTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Rotation animation
  useFrame((_, delta) => {
    if (meshRef.current && autoRotate) {
      meshRef.current.rotation.y += delta * 0.08; // Slower, smoother rotation
    }
  });
  
  // Reset auto-rotation after user interaction
  const handleInteractionEnd = () => {
    if (autoRotateTimeoutRef.current) {
      clearTimeout(autoRotateTimeoutRef.current);
    }
    
    autoRotateTimeoutRef.current = setTimeout(() => {
      setAutoRotate(true);
    }, 3000); // Resume auto-rotation after 3 seconds of inactivity
  };
  
  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (autoRotateTimeoutRef.current) {
        clearTimeout(autoRotateTimeoutRef.current);
      }
    };
  }, []);

  return (
    // @ts-ignore - React Three Fiber types
    <group
      onPointerDown={() => setAutoRotate(false)}
      onPointerUp={handleInteractionEnd}
      onPointerLeave={handleInteractionEnd}
    >
      {/* Earth sphere */}
      <Sphere ref={meshRef} args={[1, 32, 32]}>
        {/* @ts-ignore - React Three Fiber types */}
        <meshStandardMaterial
          color={isDarkTheme ? "#0a0020" : "#1b1b1b"}
          roughness={0.8}
          metalness={0.1}
        />
      </Sphere>
      
      {/* Latitude/Longitude grid lines */}
      {/* @ts-ignore - React Three Fiber types */}
      <mesh>
        {/* @ts-ignore - React Three Fiber types */}
        <sphereGeometry args={[1.001, 32, 32]} />
        {/* @ts-ignore - React Three Fiber types */}
        <meshBasicMaterial
          color="#00eaff"
          wireframe
          transparent
          opacity={isDarkTheme ? 0.3 : 0.5}
        />
      {/* @ts-ignore - React Three Fiber types */}
      </mesh>
      
      {/* Location markers */}
      {LOCATIONS.map((location, index) => {
        const position = latLngToVector3(location.lat, location.lng, 1.05);
        const isHome = location.type === 'home';
        
        return (
          // @ts-ignore - React Three Fiber types
          <mesh key={index} position={position}>
            {/* @ts-ignore - React Three Fiber types */}
            <sphereGeometry args={[0.02, 16, 16]} />
            {/* @ts-ignore - React Three Fiber types */}
            <meshStandardMaterial
              color={isHome ? "#ffb600" : "#00eaff"}
              emissive={isHome ? "#ffb600" : "#00eaff"}
              emissiveIntensity={isDarkTheme ? 0.7 : 1}
            />
          {/* @ts-ignore - React Three Fiber types */}
          </mesh>
        );
      })}
    {/* @ts-ignore - React Three Fiber types */}
    </group>
  );
}

// Main component with fallback for mobile
export default function GlobeScene() {
  // 1. All hooks at the top level
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Effect for initialization and resize handling
  useEffect(() => {
    setIsMounted(true);
    setIsMobile(window.innerWidth < 768);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // 2. All conditional returns AFTER hooks
  
  // Don't render on server
  if (!isMounted) return null;
  
  // Show simplified 2D version on mobile
  if (isMobile) {
    return <StaticGlobe />;
  }
  
  // 3. Show interactive 3D globe on desktop
  return (
    <div className="absolute inset-0 z-0 opacity-70">
      <Canvas
        camera={{ position: [0, 0, 2.5], fov: 45 }}
        dpr={[1, 2]}
      >
        {/* @ts-ignore - React Three Fiber types */}
        <ambientLight intensity={0.3} />
        {/* @ts-ignore - React Three Fiber types */}
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <Globe />
        <Preload all />
      </Canvas>
    </div>
  );
}

// Static SVG fallback for mobile
function StaticGlobe() {
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';
  
  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center opacity-60">
      <svg
        width="300"
        height="300"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-spin-slow"
      >
        <circle 
          cx="150" 
          cy="150" 
          r="145" 
          stroke={isDarkTheme ? "#0a0020" : "#1b1b1b"} 
          strokeWidth="10" 
          fill="none" 
        />
        <circle 
          cx="150" 
          cy="150" 
          r="145" 
          stroke="#00eaff" 
          strokeWidth="2" 
          strokeDasharray="10 15" 
          fill="none" 
        />
        {/* Simplified latitude/longitude lines */}
        <ellipse 
          cx="150" 
          cy="150" 
          rx="145" 
          ry="50" 
          stroke="#00eaff" 
          strokeWidth="1" 
          strokeOpacity={isDarkTheme ? 0.3 : 0.5} 
          fill="none" 
        />
        <ellipse 
          cx="150" 
          cy="150" 
          rx="100" 
          ry="35" 
          stroke="#00eaff" 
          strokeWidth="1" 
          strokeOpacity={isDarkTheme ? 0.3 : 0.5} 
          fill="none" 
        />
        <line 
          x1="5" 
          y1="150" 
          x2="295" 
          y2="150" 
          stroke="#00eaff" 
          strokeWidth="1" 
          strokeOpacity={isDarkTheme ? 0.3 : 0.5} 
        />
        <line 
          x1="150" 
          y1="5" 
          x2="150" 
          y2="295" 
          stroke="#00eaff" 
          strokeWidth="1" 
          strokeOpacity={isDarkTheme ? 0.3 : 0.5} 
        />
        
        {/* Simplified markers */}
        <circle cx="150" cy="150" r="5" fill="#ffb600" /> {/* Quito */}
        <circle cx="76" cy="102" r="3" fill="#00eaff" /> {/* SF */}
        <circle cx="90" cy="115" r="3" fill="#00eaff" /> {/* NY */}
        <circle cx="160" cy="105" r="3" fill="#00eaff" /> {/* London */}
        <circle cx="240" cy="125" r="3" fill="#00eaff" /> {/* Tokyo */}
      </svg>
    </div>
  );
}