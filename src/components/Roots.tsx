'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { timeline } from '@/config/site';

export default function Roots() {
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
    hidden: { opacity: 0, x: -20 },
    show: { 
      opacity: 1, 
      x: 0,
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
      id="roots" 
      className="min-h-screen flex items-center justify-center py-20 px-4 relative"
    >
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          variants={container}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
        >
          <motion.div variants={item} className="mb-4">
            <span className="section-label">My Journey</span>
          </motion.div>
          <motion.h2 variants={item} className="mb-4">
            Roots & Growth
          </motion.h2>
          <motion.p className="max-w-2xl mx-auto" variants={item}>
            The path that shaped my perspective and skills.
          </motion.p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-neon to-inti -translate-x-1/2" />
          
          <motion.div 
            className="space-y-12"
            variants={container}
          >
            {timeline.map((event, index) => (
              <motion.div 
                key={event.year}
                className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                variants={item}
              >
                <div className={`w-1/2 px-8 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <span className="inline-block px-3 py-1 mb-2 text-sm font-medium text-neon bg-neon/10 rounded-full">
                    {event.year}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-300">{event.description}</p>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-violet border-4 border-neon flex items-center justify-center text-lg transform -translate-y-1/2">
                  {event.icon}
                </div>
                
                <div className="w-1/2">
                  {/* Empty for spacing */}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Chevron Divider */}
      <div className="chevron-divider" />
    </section>
  );
}
