/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Enhanced color palette with better variations
        offwhite: {
          DEFAULT: '#f7f8f9',
          50: '#ffffff',
          100: '#f7f8f9',
          200: '#e9edf0',
          300: '#d8dfe4',
        },
        graphite: {
          DEFAULT: '#1b1b1b',
          50: '#4a4a4a',
          100: '#3a3a3a',
          200: '#2a2a2a',
          300: '#1b1b1b',
          400: '#141414',
          500: '#0a0a0a',
        },
        neon: {
          DEFAULT: '#00eaff',
          50: '#e6fdff',
          100: '#b3f8ff',
          200: '#80f2ff',
          300: '#4dedff',
          400: '#19e7ff',
          500: '#00eaff',
          600: '#00c7d9',
          700: '#009fb3',
        },
        inti: {
          DEFAULT: '#ffb600',
          50: '#fff9e6',
          100: '#ffeeb3',
          200: '#ffe480',
          300: '#ffd94d',
          400: '#ffce1a',
          500: '#ffb600',
          600: '#cc9200',
        },
        midnight: {
          DEFAULT: '#0a0020',
          50: '#241973',
          100: '#1c1359',
          200: '#150d40',
          300: '#0e0828',
          400: '#0a0020',
        },
        magenta: {
          DEFAULT: '#ff006e',
          50: '#fff0f7',
          100: '#ffcce2',
          200: '#ff99c9',
          300: '#ff66b0',
          400: '#ff3397',
          500: '#ff006e',
          600: '#cc0058',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        teko: ['Teko', 'sans-serif'],
      },
      boxShadow: {
        'neon-glow': '0 0 15px -3px rgba(0, 230, 255, 0.4), 0 0 6px -2px rgba(0, 230, 255, 0.2)',
        'neon-glow-lg': '0 0 25px -5px rgba(0, 230, 255, 0.5), 0 0 10px -5px rgba(0, 230, 255, 0.3)',
        'neon-glow-xl': '0 0 35px -5px rgba(0, 230, 255, 0.6), 0 0 15px -5px rgba(0, 230, 255, 0.4), 0 0 5px 0px rgba(0, 230, 255, 0.2)',
        'gold-glow': '0 0 15px -3px rgba(255, 182, 0, 0.4)',
        'gold-glow-lg': '0 0 25px -5px rgba(255, 182, 0, 0.5), 0 0 10px -5px rgba(255, 182, 0, 0.3)',
        'magenta-glow': '0 0 15px -3px rgba(255, 0, 110, 0.4), 0 0 6px -2px rgba(255, 0, 110, 0.2)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.05), 0 2px 6px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 10px 40px rgba(0, 0, 0, 0.08), 0 5px 10px rgba(0, 0, 0, 0.04)',
        'elevation-1': '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
        'elevation-2': '0 3px 6px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.03)',
        'elevation-3': '0 10px 20px rgba(0, 0, 0, 0.08), 0 6px 6px rgba(0, 0, 0, 0.03)',
        'elevation-4': '0 14px 28px rgba(0, 0, 0, 0.12), 0 10px 10px rgba(0, 0, 0, 0.04)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'fade': 'fade 0.6s ease-in-out',
        'scale': 'scale 0.6s ease-out',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'slideUp': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slideDown': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slideInRight': {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slideInLeft': {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'fade': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'maki-pattern': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZiMzAwIiBzdHJva2Utd2lkdGg9IjQiIGQ9Ik0wLDQwIEw0MCw0MCBMNDAsODAgTDgwLDgwIi8+PC9zdmc+')",
        'grid-pattern': "linear-gradient(to right, rgba(0, 234, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 234, 255, 0.05) 1px, transparent 1px)",
        'dot-pattern': "radial-gradient(circle, rgba(0, 234, 255, 0.1) 1px, transparent 1px)",
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      backdropBlur: {
        'xs': '2px',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      // Glass morphism utilities
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
    },
  },
  plugins: [
    forms,
    typography,
  ],
}
