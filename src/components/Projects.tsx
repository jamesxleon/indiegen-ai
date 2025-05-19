'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { projects } from '@/config/site';

export default function Projects() {
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
    hidden: { opacity: 0, y: 30 },
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
      id="projects" 
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
            <span className="section-label">My Work</span>
          </motion.div>
          <motion.h2 variants={item} className="mb-4">
            Featured Projects
          </motion.h2>
          <motion.p className="max-w-2xl mx-auto" variants={item}>
            A selection of projects that showcase my skills and expertise.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-neon/30 transition-all duration-300"
              variants={item}
              whileHover={{ y: -5, boxShadow: '0 10px 30px -10px rgba(0, 234, 255, 0.2)' }}
            >
              <div className="h-48 bg-violet/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <div className="absolute bottom-0 left-0 p-6 z-20">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs bg-neon/10 text-neon px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-neon hover:text-white group"
                >
                  View Project
                  <svg 
                    className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Chevron Divider */}
      <div className="chevron-divider" />
    </section>
  );
}
