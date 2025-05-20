'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ProjectCategory } from './ProjectFilter';

// Interface adjusted to match our site.ts project structure
export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  category: string[];
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="bg-white/90 dark:bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 hover:border-neon-cyan/50 dark:hover:border-neon-cyan/30 transition-all duration-300 group shadow-sm hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5, boxShadow: '0 10px 30px -10px rgba(0, 234, 255, 0.2)' }}
    >
      <div className="h-48 bg-violet-100 dark:bg-violet/20 relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="absolute inset-0 object-cover opacity-70 dark:opacity-60 transition-transform duration-500 group-hover:scale-105"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
        <div className="absolute bottom-0 left-0 p-6 z-20 text-white">
          <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
          <div className="flex flex-wrap gap-2 text-white">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs bg-neon-cyan/20 dark:bg-neon-cyan/10 text-neon-cyan dark:text-neon-cyan px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
        <Link 
          href={project.link} 
          className="inline-flex items-center text-violet-700 dark:text-neon-cyan hover:text-violet-900 dark:hover:text-white group font-medium"
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
        </Link>
      </div>
      
      {/* Glowing border on hover */}
      {isHovered && (
        <motion.div 
          className="absolute inset-0 border-2 border-neon opacity-0 group-hover:opacity-100"
          animate={{ 
            opacity: isHovered ? 1 : 0,
            boxShadow: isHovered ? '0 0 15px 2px rgba(0, 234, 255, 0.5)' : 'none'
          }}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.div>
  );
}
