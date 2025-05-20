'use client';

import { useTheme } from '@/hooks/useTheme';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Only show the toggle after component mounts to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  return (
    <button
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="fixed top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 backdrop-blur transition-colors hover:bg-background/50 focus:outline-none focus:ring-2 focus:ring-neon-cyan"
      onClick={toggleTheme}
    >
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}

// Animated moon icon for dark mode toggle
function MoonIcon() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ scale: 0.5, opacity: 0, rotate: -90 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      exit={{ scale: 0.5, opacity: 0, rotate: 90 }}
      transition={{ duration: 0.3 }}
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </motion.svg>
  );
}

// Animated sun icon for light mode toggle
function SunIcon() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ scale: 0.5, opacity: 0, rotate: 90 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      exit={{ scale: 0.5, opacity: 0, rotate: -90 }}
      transition={{ duration: 0.3 }}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </motion.svg>
  );
}
