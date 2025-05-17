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
      className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-400 via-midnight-200 to-offwhite z-0"></div>
      
      {/* Animated grid background */}
      <motion.div 
        className="absolute inset-0 grid-background z-[1]" 
        style={{ opacity: opacityGrid }}
      ></motion.div>
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-neon-500/20 filter blur-3xl animate-pulse-glow z-[1]"></div>
      <div className="absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full bg-magenta-500/10 filter blur-3xl animate-pulse-glow z-[1]" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-40 h-40 rounded-full bg-inti-400/15 filter blur-3xl animate-pulse-glow z-[1]" style={{ animationDelay: '2s' }}></div>
      
      {/* Parallax background images */}
      <motion.img
        src="/mountain.svg"
        alt="mountain silhouette"
        className="absolute inset-x-0 bottom-0 w-full text-inti-500 z-[2]"
        style={{ y: yMountain }}
      />
      <motion.img
        src="/skyline.svg"
        alt="Quito skyline"
        className="absolute inset-x-0 bottom-0 w-full text-neon-600/70 z-[3]"
        style={{ y: yCity }}
      />

      {/* Content container */}
      <motion.div 
        className="relative z-10 px-6" 
        style={{ y: yText, opacity: opacityText, scale }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="mb-6 inline-block">
          <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/20 text-neon-400">
            Kichwa-Born Developer
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-7xl md:text-9xl leading-none mb-6"
        >
          <span className="gradient-text-neon block">James</span>
          <span className="text-4xl md:text-6xl text-graphite-200/90 font-light">León</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="max-w-2xl mx-auto text-xl md:text-2xl text-graphite-100/90 mb-8"
        >
          Builder of intelligent systems at the intersection of culture and technology.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mt-8">
          <button onClick={scrollDown} className="btn btn-primary">
            Explore my work
          </button>
          <a href="#contact" className="btn btn-outline">
            Get in touch
          </a>
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center"
        >
          <span className="text-sm text-graphite-100/60 mb-2">Scroll to explore</span>
          <FiArrowDown className="text-neon-400 animate-bounce" />
        </motion.div>
      </motion.div>
      
      {/* Brand marker */}
      <div className="absolute top-4 left-4 text-xs font-mono z-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="px-2 py-1 rounded bg-graphite-300/10 backdrop-blur-sm border border-neon-400/20"
        >
          <span className="text-neon-400 mr-1">indiegen</span>
          <span className="text-inti-400">.ai</span>
        </motion.div>
      </div>
    </section>
  );
}
