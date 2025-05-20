'use client';

import { ReactNode, useEffect } from 'react';
import useSmoothScroll from '@/hooks/useSmoothScroll';

interface LenisProviderProps {
  children: ReactNode;
}

export default function LenisProvider({ children }: LenisProviderProps) {
  // Initialize smooth scrolling
  const lenis = useSmoothScroll();
  
  // Listen for anchor link clicks to handle smooth scrolling
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;
      
      // Check if it's an internal anchor link
      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      
      // Prevent default anchor behavior
      e.preventDefault();
      
      // Get the target element
      const targetId = href.replace('#', '');
      const targetElement = document.getElementById(targetId);
      
      if (!targetElement) return;
      
      // Scroll to the target element smoothly
      if (lenis) {
        lenis.scrollTo(targetElement, {
          offset: -100, // Offset to account for fixed header
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Ease out expo
        });
      } else {
        // Fallback for users with reduced motion
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };
    
    // Add listener
    document.addEventListener('click', handleAnchorClick);
    
    // Clean up
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, [lenis]);
  
  return <>{children}</>;
}
