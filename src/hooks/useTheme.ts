'use client';

import { useEffect } from 'react';
import { atom, useAtom } from 'jotai';

// Possible theme values
type Theme = 'light' | 'dark';

// Create atom to store theme state
const themeAtom = atom<Theme>('light');

// Check if theme is saved in localStorage and system preferences
const getInitialTheme = (): Theme => {
  // Check if we're in a browser context
  if (typeof window !== 'undefined') {
    // Check if theme is stored in localStorage
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    
    if (storedTheme) {
      return storedTheme;
    }
    
    // If no theme is stored, check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }
  
  // Default to light theme if not in browser
  return 'light';
};

// Initialize state atom with the right value
const initializedAtom = atom(
  (get) => get(themeAtom),
  (get, set, newTheme: Theme | 'system') => {
    if (newTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
      set(themeAtom, systemTheme);
    } else {
      set(themeAtom, newTheme);
    }
  }
);

export function useTheme() {
  const [theme, setTheme] = useAtom(initializedAtom);
  
  // Initialize theme on first render
  useEffect(() => {
    const initialTheme = getInitialTheme();
    setTheme(initialTheme);
  }, [setTheme]);
  
  // Apply theme to document element when it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement;
      
      // Remove previous theme class
      root.classList.remove('light', 'dark');
      
      // Add new theme class
      root.classList.add(theme);
      
      // Save to localStorage
      localStorage.setItem('theme', theme);
    }
  }, [theme]);
  
  // Toggle between light and dark
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  return { theme, setTheme, toggleTheme };
}
