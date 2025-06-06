'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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

  return (
    <section 
      ref={ref}
      id="about" 
      className="min-h-screen flex items-center justify-center py-20 px-4 relative"
      data-section="about"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/90 via-background/70 to-background/30" />
      <div className="container mx-auto">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={container}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
        >
          <motion.div variants={item} className="mb-4">
            <span className="section-label bg-background/90 dark:bg-background/80 px-3 py-1 rounded-md shadow-sm text-teal-800 dark:text-teal-200">About Me</span>
          </motion.div>
          
          <motion.h2 variants={item} className="mb-8">
            Building for humanity
          </motion.h2>
          
          <motion.div variants={item} className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <p>
              Born in the heart of Ecuador, I bring a unique perspective to technology that blends ancient wisdom with modern innovation. My Kichwa heritage taught me the value of community, resilience, and sustainable thinking—principles that guide my work in building solutions to connect all extensions of humanity.
            </p>
            <p>
              With a foundation in both the technical and the human aspects of technology, I create solutions that are not just functional but meaningful, bridging the gap between cutting-edge innovation and real-world impact.
            </p>
            <p className="text-teal-700 dark:text-teal-300 font-semibold">
              Let's do something great together.
            </p>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Chevron Divider */}
      <div className="chevron-divider" />
    </section>
  );
}
