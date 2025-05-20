'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { projects } from '@/config/site';
import ProjectFilter, { ProjectCategory } from './filters/ProjectFilter';
import ProjectCard from './filters/ProjectCard';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  // Filter projects when the active filter changes
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) =>
        project.category?.includes(activeFilter)
      );
      setFilteredProjects(filtered);
    }
  }, [activeFilter]);

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
          <motion.p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300" variants={item}>
            A selection of projects that showcase my skills and expertise.
          </motion.p>
          
          {/* Filter buttons */}
          <motion.div variants={item} className="mt-8">
            <ProjectFilter
              onFilterChange={setActiveFilter}
              currentFilter={activeFilter}
            />
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div key={project.title} variants={item}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      
      {/* Chevron Divider */}
      <div className="chevron-divider" />
    </section>
  );
}
