'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

// Project categories
export type ProjectCategory = 'all' | 'web' | 'ai' | 'iot';

interface ProjectFilterProps {
  onFilterChange: (category: ProjectCategory) => void;
  currentFilter: ProjectCategory;
}

export default function ProjectFilter({ onFilterChange, currentFilter }: ProjectFilterProps) {
  // List of available categories
  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web' },
    { id: 'ai', label: 'AI' },
    { id: 'iot', label: 'IoT' },
  ];

  return (
    <div className="mb-8 flex flex-wrap justify-center gap-2 sm:gap-4">
      {categories.map((category) => (
        <FilterButton
          key={category.id}
          isActive={currentFilter === category.id}
          onClick={() => onFilterChange(category.id)}
          label={category.label}
        />
      ))}
    </div>
  );
}

// Animated filter button component
interface FilterButtonProps {
  isActive: boolean;
  onClick: () => void;
  label: string;
}

function FilterButton({ isActive, onClick, label }: FilterButtonProps) {
  return (
    <div className="relative">
      <button
        onClick={onClick}
        className={`relative z-10 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 sm:text-base ${
          isActive
            ? 'text-white dark:text-white'
            : 'text-graphite hover:text-neon-cyan dark:text-gray-300 dark:hover:text-neon-cyan'
        }`}
        aria-current={isActive ? 'page' : undefined}
      >
        {label}
      </button>
      
      {/* Animated background pill */}
      {isActive && (
        <motion.div
          layoutId="activeFilterBackground"
          className="absolute inset-0 z-0 rounded-full bg-gradient-gold-cyan shadow-glow-cyan"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      )}
    </div>
  );
}
