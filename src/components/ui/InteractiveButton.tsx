'use client';

import { ComponentProps, ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

// Combine HTML button props with motion props
type Merged = Omit<ComponentProps<"button">, keyof HTMLMotionProps<"button">> & 
               HTMLMotionProps<"button">;

interface InteractiveButtonProps extends Merged {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  withIcon?: boolean;
  iconPosition?: 'left' | 'right';
  icon?: ReactNode;
}

export default function InteractiveButton({
  children,
  variant = 'primary',
  size = 'md',
  withIcon = false,
  iconPosition = 'right',
  icon,
  className = '',
  ...props
}: InteractiveButtonProps) {
  // Define styles based on variant and size
  const baseStyle = 'inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-neon-cyan to-inti-gold text-graphite shadow-md hover:shadow-lg shadow-neon-cyan/20 hover:shadow-neon-cyan/30',
    secondary: 'bg-white dark:bg-card border-2 border-neon-cyan/70 text-violet-900 dark:text-white hover:border-neon-cyan hover:text-violet-950 dark:hover:text-white',
    ghost: 'bg-transparent text-violet-900 dark:text-gray-200 hover:bg-violet-50 dark:hover:bg-muted/50 hover:text-violet-950 dark:hover:text-neon-cyan',
  };
  
  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3',
  };
  
  // Combine styles
  const buttonStyle = `${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  return (
    <motion.button
      className={buttonStyle}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 10,
      }}
      {...props}
    >
      {withIcon && iconPosition === 'left' && (
        <span className="mr-2">{icon}</span>
      )}
      
      {children}
      
      {withIcon && iconPosition === 'right' && (
        <motion.span 
          className="ml-2"
          animate={{ x: 0 }}
          whileHover={{ x: 3 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          {icon || '→'}
        </motion.span>
      )}
    </motion.button>
  );
}
