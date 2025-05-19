'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ProjectCategory } from './ProjectFilter';

export interface Project {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  category: ProjectCategory[];
  link: string;
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
      className="group relative overflow-hidden rounded-xl bg-card shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-card/95"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={project.link} passHref>
        <div className="relative aspect-video h-56 w-full overflow-hidden">
          <Image
            src={project.imageSrc}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Glowing border on hover */}
          <motion.div 
            className="absolute inset-0 border-2 border-neon-cyan opacity-0 group-hover:opacity-100"
            animate={{ 
              opacity: isHovered ? 1 : 0,
              boxShadow: isHovered ? '0 0 15px 2px rgba(0, 234, 255, 0.5)' : 'none'
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
        
        <div className="p-5">
          <div className="mb-2 flex gap-2">
            {project.category.filter(cat => cat !== 'all').map((category) => (
              <span 
                key={category}
                className={`rounded-full px-2 py-1 text-xs font-semibold ${
                  category === 'web' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : 
                  category === 'ai' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' : 
                  'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
                }`}
              >
                {category.toUpperCase()}
              </span>
            ))}
          </div>
          
          <h3 className="mb-2 text-xl font-semibold text-foreground transition-colors duration-200 group-hover:text-neon-cyan">
            {project.title}
          </h3>
          
          <p className="text-muted-foreground dark:text-gray-300">
            {project.description}
          </p>
          
          {/* Animated arrow */}
          <div className="mt-4 flex items-center text-sm font-medium text-foreground dark:text-white">
            <span className="mr-2">View Project</span>
            <motion.span
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              →
            </motion.span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
