'use client';

import { ReactNode, useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  baseVelocity?: number;
  opacity?: [number, number];
}

export default function Parallax({
  children,
  speed = 0.1,
  direction = 'up',
  className = '',
  opacity = [0, 1],
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  
  // Check if user prefers reduced motion
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    // Initial setup
    const update = () => setPrefersReducedMotion(mediaQuery.matches);
    update();
    
    // Add listener for changes
    mediaQuery.addEventListener('change', update);
    return () => {
      mediaQuery.removeEventListener('change', update);
    };
  }, []);
  
  // Calculate transform and opacity based on scroll position
  const getTransformValue = () => {
    if (prefersReducedMotion) return {} as any;
    
    const transformMap: Record<string, MotionValue<number>> = {
      up: useTransform(scrollYProgress, [0, 1], ['0%', `${-speed * 100}%`]),
      down: useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]),
      left: useTransform(scrollYProgress, [0, 1], ['0%', `${-speed * 100}%`]),
      right: useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]),
    };
    
    const directionKeys = {
      up: 'y',
      down: 'y',
      left: 'x',
      right: 'x',
    };
    
    return {
      [directionKeys[direction]]: transformMap[direction],
    };
  };
  
  const transformStyle = getTransformValue();
  const opacityValue = useTransform(scrollYProgress, [0, 0.5], opacity);
  
  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        ...transformStyle,
        opacity: opacityValue,
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-20%' }}
    >
      {children}
    </motion.div>
  );
}
