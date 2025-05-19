'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Link from 'next/link';
import Parallax from './Parallax';
import InteractiveButton from './ui/InteractiveButton';
import { useTheme } from '@/hooks/useTheme';

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  // Animate each letter in the name
  const name = 'James';
  const nameVariants = {
    hidden: { opacity: 0, letterSpacing: '0.5em' },
    visible: (i: number) => ({
      opacity: 1,
      letterSpacing: '0.1em',
      transition: {
        delay: 0.1 * i,
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }),
  };

  return (
    <section 
      ref={ref}
      id="hero" 
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20 md:py-0"
      data-section="hero"
    >
      {/* Stronger gradient overlay for better text visibility over the globe */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/90 via-background/70 to-background/30" />
      
      {/* Parallax decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Parallax speed={0.2} direction="down" className="absolute -top-20 right-20 opacity-40">
          <div className="h-64 w-64 rotate-45 rounded-3xl border border-neon-cyan/20 bg-gradient-to-r from-neon-cyan/5 to-transparent" />
        </Parallax>
        
        <Parallax speed={0.15} direction="left" className="absolute -left-20 bottom-40 opacity-40">
          <div className="h-48 w-48 rounded-full border border-gold/20 bg-gradient-to-t from-gold/5 to-transparent" />
        </Parallax>
      </div>
      
      <motion.div 
        className="container relative z-10 mx-auto px-4 text-center"
        variants={container}
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
      >
        <Parallax speed={0.1} direction="up">
          <motion.div variants={item} className="mb-8">
            <span className="section-label bg-background/80 px-3 py-1 rounded-md shadow-sm">
              Welcome to my world
            </span>
          </motion.div>
          
          <motion.h1 
            className="mb-6 flex flex-wrap justify-center gap-x-2 md:gap-x-4"
            variants={item}
          >
            {name.split('').map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={nameVariants}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.p 
            className="mx-auto mb-12 max-w-3xl text-xl font-medium md:text-2xl"
            variants={item}
          >
            <span className={`${isDarkTheme ? 'text-white' : 'text-graphite'} bg-background/70 px-3 py-1 rounded-md shadow-sm`}>
              Kichwa-born builder of intelligent systems.
            </span>
          </motion.p>
          
          <motion.div 
            className="mb-12 text-2xl font-display uppercase tracking-widest md:text-3xl"
            variants={item}
          >
            <span className="neon-pulse text-neon-cyan shadow-glow-cyan">
              indiegen.ai
            </span>
          </motion.div>
          
          {/* Call to action buttons with micro-interactions */}
          <motion.div 
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
            variants={item}
          >
            <InteractiveButton 
              variant="primary" 
              size="lg" 
              withIcon 
              iconPosition="right"
              onClick={() => document.getElementById('projects')?.scrollIntoView()}
            >
              View Projects
            </InteractiveButton>
            
            <InteractiveButton 
              variant="secondary" 
              size="lg" 
              withIcon 
              iconPosition="right"
              onClick={() => document.getElementById('contact')?.scrollIntoView()}
            >
              Get in Touch
            </InteractiveButton>
          </motion.div>
        </Parallax>
        
        {/* Scroll indicator with micro-interaction */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 transform"
          variants={item}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              delay: 1.5,
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 1.5,
            } 
          }}
        >
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-neon-cyan p-1">
            <motion.div 
              className="h-2 w-1 rounded-full bg-neon-cyan"
              animate={{ 
                y: [0, 12, 0],
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
