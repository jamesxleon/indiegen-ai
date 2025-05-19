'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectFilter, { ProjectCategory } from './ProjectFilter';
import ProjectCard, { Project } from './ProjectCard';

// Sample project data
const PROJECTS: Project[] = [
  {
    id: 'project-1',
    title: 'Neural Network Visualizer',
    description: 'An interactive app to visualize neural networks in real-time.',
    imageSrc: '/images/projects/neural-viz.jpg',
    category: ['all', 'ai', 'web'],
    link: '/projects/neural-viz',
  },
  {
    id: 'project-2',
    title: 'Sustainable IoT Network',
    description: 'Energy-efficient IoT sensors network for urban environmental monitoring.',
    imageSrc: '/images/projects/iot-network.jpg',
    category: ['all', 'iot'],
    link: '/projects/iot-network',
  },
  {
    id: 'project-3',
    title: 'Responsive Andean UI Kit',
    description: 'A beautiful UI kit inspired by Andean aesthetics with vibrant Neon accents.',
    imageSrc: '/images/projects/ui-kit.jpg',
    category: ['all', 'web'],
    link: '/projects/ui-kit',
  },
  {
    id: 'project-4',
    title: 'AI Text Generation Tool',
    description: 'Advanced NLP tool for creative writing and content generation.',
    imageSrc: '/images/projects/ai-text.jpg',
    category: ['all', 'ai'],
    link: '/projects/ai-text',
  },
  {
    id: 'project-5',
    title: 'Home Automation Platform',
    description: 'Open-source platform for smart home control with intuitive interface.',
    imageSrc: '/images/projects/home-auto.jpg',
    category: ['all', 'iot', 'web'],
    link: '/projects/home-auto',
  },
  {
    id: 'project-6',
    title: 'Computer Vision API',
    description: 'Scalable API for object detection and scene understanding.',
    imageSrc: '/images/projects/cv-api.jpg',
    category: ['all', 'ai', 'web'],
    link: '/projects/cv-api',
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(PROJECTS);
  
  // Filter projects when the active filter changes
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(PROJECTS);
    } else {
      const filtered = PROJECTS.filter((project) =>
        project.category.includes(activeFilter)
      );
      setFilteredProjects(filtered);
    }
  }, [activeFilter]);
  
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-foreground sm:text-4xl">
          Featured Projects
        </h2>
        
        {/* Filter buttons */}
        <ProjectFilter
          onFilterChange={setActiveFilter}
          currentFilter={activeFilter}
        />
        
        {/* Projects grid with animation */}
        <motion.div layout className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
