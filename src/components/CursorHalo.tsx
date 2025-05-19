'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Props = { disabled?: boolean };

export default function CursorHalo({ disabled = false }: Props) {
  // 1. All hooks at the top level
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [hasFineCursor, setHasFineCursor] = useState(false);
  
  // Check for reduced motion preference
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    
    const onChange = () => setPrefersReducedMotion(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  
  // Check for pointer capability
  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)');
    setHasFineCursor(mq.matches);
    
    const onChange = () => setHasFineCursor(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  
  // Handle cursor movement - conditionals INSIDE the effect
  useEffect(() => {
    // Skip effect if disabled or not applicable
    if (disabled || prefersReducedMotion || !hasFineCursor) return;
    
    const updateCursorPosition = (e: MouseEvent) => {
      setIsVisible(true);
      // Use setTimeout to create a slight lag for smoother feeling
      setTimeout(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      }, 120); // 120ms lag
    };

    window.addEventListener('mousemove', updateCursorPosition);
    
    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, [disabled, prefersReducedMotion, hasFineCursor]); // Include all dependencies

  // Early return AFTER all hooks are defined
  if (disabled || prefersReducedMotion || !hasFineCursor) return null;
  
  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-50 mix-blend-difference"
      animate={{
        x: position.x - 32, // Center the 64px halo
        y: position.y - 32,
        opacity: isVisible ? 1 : 0
      }}
      transition={{
        type: 'spring',
        mass: 0.6,
        damping: 30,
        stiffness: 300,
      }}
      initial={{ opacity: 0 }}
    >
      {/* Neon cyan halo cursor */}
      <svg 
        width="64" 
        height="64" 
        viewBox="0 0 64 64" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="animate-halo-rotate"
      >
        <circle 
          cx="32" 
          cy="32" 
          r="30" 
          stroke="#00eaff" 
          strokeWidth="2" 
          strokeDasharray="8 4" 
          fillRule="evenodd" 
          fill="none"
        />
        {/* Maki chevrons made of small dashes */}
        <path
          d="M32 2 C32 2, 48 16, 32 32 C16 48, 32 62, 32 62"
          stroke="#00eaff"
          strokeWidth="1.5"
          strokeDasharray="3 5"
          fill="none"
        />
        <path
          d="M62 32 C62 32, 48 48, 32 32 C16 16, 2 32, 2 32"
          stroke="#00eaff"
          strokeWidth="1.5"
          strokeDasharray="3 5"
          fill="none"
        />
      </svg>
    </motion.div>
  );
}
