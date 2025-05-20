'use client';

import { ReactNode } from 'react';
import Parallax from './Parallax';

interface ParallaxSectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean; // Optional dark variant
}

export default function ParallaxSection({
  id,
  title,
  subtitle,
  children,
  className = '',
  dark = false,
}: ParallaxSectionProps) {
  return (
    <section 
      id={id} 
      className={`relative overflow-hidden py-24 ${dark ? 'bg-muted' : 'bg-transparent'} ${className}`}
      data-section
    >
      {/* Decorative elements with parallax effect */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Parallax speed={0.15} direction="up" className="absolute -top-20 left-10">
          <div className="h-32 w-32 rotate-45 rounded-xl border-2 border-neon-cyan/20 bg-gradient-to-r from-neon-cyan/5 to-transparent" />
        </Parallax>
        
        <Parallax speed={0.2} direction="down" className="absolute -bottom-10 right-20">
          <div className="h-40 w-40 rounded-full border border-gold/20 bg-gradient-to-l from-gold/5 to-transparent" />
        </Parallax>
        
        <Parallax speed={0.12} direction="left" className="absolute left-1/3 top-1/4">
          <div className="h-24 w-24 rounded-full border border-neon-cyan/10 bg-gradient-radial from-neon-cyan/5 to-transparent" />
        </Parallax>
      </div>
      
      {/* Content with title having subtle parallax */}
      <div className="container relative mx-auto px-4">
        <Parallax speed={0.1} direction="up" className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {title}
          </h2>
          
          {subtitle && (
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              {subtitle}
            </p>
          )}
        </Parallax>
        
        {/* Main content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </section>
  );
}
