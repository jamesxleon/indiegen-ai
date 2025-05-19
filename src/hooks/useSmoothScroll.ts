'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

interface SmoothScrollOptions {
  lerp?: number;
  duration?: number;
  smoothWheel?: boolean;
  smoothTouch?: boolean;
  wheelMultiplier?: number;
  touchMultiplier?: number;
  orientation?: 'vertical' | 'horizontal';
}

export default function useSmoothScroll(options: SmoothScrollOptions = {}) {
  const lenisRef = useRef<Lenis | null>(null);
  
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Don't initialize Lenis if user prefers reduced motion
    if (prefersReducedMotion) {
      return;
    }
    
    // Initialize Lenis with default options
    const lenis = new Lenis({
      lerp: 0.1, // Lower value = smoother scroll
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      orientation: 'vertical',
      ...options,
    });
    
    // Store instance in ref
    lenisRef.current = lenis;
    
    // Start animation frame loop
    function raf(time: number) {
      if (lenisRef.current) {
        lenisRef.current.raf(time);
      }
      requestAnimationFrame(raf);
    }
    
    // Start the animation loop
    requestAnimationFrame(raf);
    
    // Clean up
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, [options]);
  
  // Return the lenis instance for external access
  return lenisRef.current;
}
