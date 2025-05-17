/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Basic color system
        primary: {
          100: '#e6f7ff',
          200: '#b3e0ff',
          300: '#80caff',
          400: '#4db3ff',
          500: '#1a8cff',
          600: '#0073e6',
          700: '#0059b3',
          800: '#004080',
          900: '#00264d',
          DEFAULT: '#1a8cff',
        },
        accent1: '#00eaff', // Cyan
        accent2: '#ffb600', // Gold
        state: {
          success: '#10b981',
          warning: '#f59e0b',
          error: '#ef4444',
          info: '#3b82f6',
          DEFAULT: '#ef4444',
        },
        contrast: {
          100: '#f8fafc',
          200: '#f1f5f9',
          300: '#e2e8f0',
          400: '#cbd5e1',
          500: '#94a3b8',
          600: '#64748b',
          700: '#475569',
          800: '#334155',
          900: '#1e293b',
        },
        canvas: {
          light: '#ffffff',
          DEFAULT: '#f8fafc',
          dark: '#f1f5f9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
        cultural: ['Inter', 'sans-serif'],
      },
      spacing: {
        'left-rail': '60px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
