import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollY } = useScroll({ target: heroRef });
  const yMountain = useTransform(scrollY, [0, 600], [0, -120]);
  const yCity = useTransform(scrollY, [0, 600], [0, -60]);
  const opacityGrid = useTransform(scrollY, [0, 300], [0.6, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);
  const yText = useTransform(scrollY, [0, 300], [0, -50]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollDown = () => {
    const craftSection = document.getElementById('craft');
    if (craftSection) {
      craftSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden scroll-snap-align-start"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-contrast-400 via-contrast-200 to-canvas z-0"></div>
      
      {/* Animated grid background */}
      <motion.div 
        className="absolute inset-0 grid-background z-[1]" 
        style={{ opacity: opacityGrid }}
      ></motion.div>
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-accent-1-500/20 filter blur-3xl animate-pulse-glow z-[1]"></div>
      <div className="absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full bg-state-500/10 filter blur-3xl animate-pulse-glow z-[1]" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-40 h-40 rounded-full bg-accent-2-400/15 filter blur-3xl animate-pulse-glow z-[1]" style={{ animationDelay: '2s' }}></div>
      
      {/* Parallax background images */}
      <motion.img
        src="/mountain.svg"
        alt="mountain silhouette"
        className="absolute inset-x-0 bottom-0 w-full text-accent-2-500 z-[2]"
        style={{ y: yMountain }}
      />
      <motion.img
        src="/skyline.svg"
        alt="Quito skyline"
        className="absolute inset-x-0 bottom-0 w-full text-accent-1-600/70 z-[3]"
        style={{ y: yCity }}
      />

      {/* Content container in a 12-column grid */}
      <motion.div 
        className="relative z-10 px-6 grid-container" 
        style={{ y: yText, opacity: opacityText, scale }}
      >
        <div className="col-span-12 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="mb-6 inline-block">
            <span className="inline-block px-4 py-1 rounded-full font-cultural bg-white/10 backdrop-blur-sm border border-white/20 text-accent-1-400">
              Kichwa-born builder of intelligent systems
            </span>
          </motion.div>
          
          {/* Hero header name "James" per aesthetic blueprint */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }} // Using 0.5s transitions per spec
            className="font-heading text-7xl md:text-9xl leading-none mb-6"
          >
            <span className="gradient-text-cyan block">James</span>
            <span className="text-4xl md:text-6xl text-primary-200/90 font-light">León</span>
          </motion.h1>
          
          {/* 4px "Maki" chevron divider in gold */}
          <div className="maki-divider mx-auto w-24 my-8"></div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="max-w-2xl mx-auto text-xl md:text-2xl text-canvas mb-8"
          >
            Kichwa-born builder of intelligent systems
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mt-8">
            <button onClick={scrollDown} className="btn btn-primary">
              Explore my work
            </button>
            <a href="#contact" className="btn btn-secondary">
              Get in touch
            </a>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center"
        >
          <span className="text-sm text-canvas/80 mb-2">Scroll to explore</span>
          <FiArrowDown className="text-accent-1-400 animate-bounce" />
        </motion.div>
      </motion.div>
      
      {/* Brand tag - indiegen.ai neon tag (top-left) with 8s pulse */}
      <div className="brand-tag">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="brand-tag-inner"
        >
          <span className="brand-tag-text mr-1 animate-pulse-slow">indiegen</span>
          <span className="text-accent-2-400">.ai</span>
        </motion.div>
      </div>
      
      {/* Three.js dust particles at 5fps would be implemented here */}
      {/* This would require implementing a separate ThreeJS component */}
    </section>
  );
}
