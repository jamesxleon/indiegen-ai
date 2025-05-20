'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { skills } from '@/config/site';

export default function Craft() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      id="craft" 
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
            <span className="section-label">My Craft</span>
          </motion.div>
          
          <motion.h2 variants={item} className="mb-12">
            Skills & Expertise
          </motion.h2>
          
          <motion.div 
            className="space-y-8 text-left max-w-2xl mx-auto"
            variants={container}
          >
            {skills.map((skill, index) => (
              <motion.div key={skill.name} variants={item}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-graphite dark:text-neon">{skill.level}%</span>
                </div>
                <div className="h-2 bg-violet/20 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-neon to-inti rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ 
                      duration: 1, 
                      delay: 0.5 + (index * 0.1),
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Chevron Divider */}
      <div className="chevron-divider" />
    </section>
  );
}
