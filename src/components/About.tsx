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
    >
      <div className="container mx-auto">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={container}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
        >
          <motion.div variants={item} className="mb-4">
            <span className="section-label">About Me</span>
          </motion.div>
          
          <motion.h2 variants={item} className="mb-8">
            Building Bridges Between Worlds
          </motion.h2>
          
          <motion.div variants={item} className="space-y-6 text-lg">
            <p>
              Born in the heart of the Andes, I bring a unique perspective to technology that blends ancient wisdom with modern innovation. My Kichwa heritage taught me the value of community, resilience, and sustainable thinking—principles that guide my work in building intelligent systems.
            </p>
            <p>
              With a foundation in both the technical and the human aspects of technology, I create solutions that are not just functional but meaningful, bridging the gap between cutting-edge innovation and real-world impact.
            </p>
            <p className="text-neon font-medium">
              Let's build something extraordinary together.
            </p>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Chevron Divider */}
      <div className="chevron-divider" />
    </section>
  );
}
