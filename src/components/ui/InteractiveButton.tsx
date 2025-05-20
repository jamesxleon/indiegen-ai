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
  const baseStyle = 'inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-teal-600 to-teal-400 text-white hover:from-teal-500 hover:to-teal-300 font-semibold shadow-md hover:shadow-lg shadow-teal-500/30 hover:shadow-teal-400/40 transition-all duration-300',
    secondary: 'bg-white dark:bg-card border-2 border-teal-500/50 text-teal-700 dark:text-teal-100 hover:border-teal-400 hover:text-teal-800 dark:hover:text-white hover:bg-teal-50/50 dark:hover:bg-teal-900/20',
    ghost: 'bg-transparent text-teal-700 dark:text-teal-300 hover:bg-teal-100/50 dark:hover:bg-teal-900/30 hover:text-teal-800 dark:hover:text-teal-200',
  };
  
  const sizeStyles = {
    sm: 'text-xs px-4 py-1.5',
    md: 'text-sm px-5 py-2.5',
    lg: 'text-base px-7 py-3.5',
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
