/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Color system from aesthetic blueprint
        canvas: {
          DEFAULT: '#f7f8f9',
          50: '#ffffff',
          100: '#f7f8f9',
          200: '#e9edf0',
          300: '#d8dfe4',
        },
        primary: {
          DEFAULT: '#1b1b1b',
          50: '#4a4a4a',
          100: '#3a3a3a', 
          200: '#2a2a2a',
          300: '#1b1b1b',
          400: '#141414',
          500: '#0a0a0a',
        },
        'accent-1': {
          DEFAULT: '#00eaff', // Cyan with glow
          50: '#e6fdff',
          100: '#b3f8ff',
          200: '#80f2ff',
          300: '#4dedff',
          400: '#19e7ff',
          500: '#00eaff',
          600: '#00c7d9',
          700: '#009fb3',
        },
        'accent-2': {
          DEFAULT: '#ffb600', // Gold flat
          50: '#fff9e6',
          100: '#ffeeb3',
          200: '#ffe480',
          300: '#ffd94d',
          400: '#ffce1a',
          500: '#ffb600',
          600: '#cc9200',
        },
        contrast: {
          DEFAULT: '#0a0020', // Deep purple
          50: '#241973',
          100: '#1c1359',
          200: '#150d40',
          300: '#0e0828',
          400: '#0a0020',
        },
        state: {
          DEFAULT: '#ff006e', // Magenta
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
        // Typography from aesthetic blueprint
        sans: ['Inter', 'system-ui', 'sans-serif'], // Body
        display: ['Space Grotesk', 'sans-serif'], // Display marks
        heading: ['"Neue Haas Grotesk"', 'Inter', 'sans-serif'], // Headings with fallback
        cultural: ['Teko', 'sans-serif'], // Cultural flair for section labels
      },
      fontSize: {
        'body': '1.1rem',
      },
      lineHeight: {
        'body': '1.65rem',
      },
      spacing: {
        // 8px baseline rhythm
        '0.5': '4px',
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '5': '40px',
        '6': '48px',
        '7': '56px',
        '7.5': '60px', // 60px gutters
        '8': '64px',
      },
      width: {
        'left-rail': '60px', // 60px left rail nav
      },
      boxShadow: {
        'accent-1-glow': '0 0 20px rgba(0, 234, 255, 0.4)', // 40% outer glow
        'accent-1-glow-lg': '0 0 30px rgba(0, 234, 255, 0.4), 0 0 10px rgba(0, 234, 255, 0.2)',
        'accent-2-flat': '0 2px 4px rgba(255, 182, 0, 0.2)', // Flat gold
        'card': '0 4px 20px rgba(0, 0, 0, 0.05), 0 2px 6px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 10px 40px rgba(0, 0, 0, 0.08), 0 5px 10px rgba(0, 0, 0, 0.04)',
        'elevation-1': '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
        'elevation-2': '0 3px 6px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.03)',
        'focus': '0 0 0 3px rgba(0, 234, 255, 0.4)', // Focus indicator with cyan glow
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite', // 8s pulse for indiegen.ai tag
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out', // Updated to 0.5s per spec
        'slide-down': 'slideDown 0.5s ease-out', // Updated to 0.5s per spec
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'fade': 'fade 0.5s ease-in-out', // Updated to 0.5s per spec
        'scale': 'scale 0.5s ease-out', // Updated to 0.5s per spec
      },
      keyframes: {
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
        // 4px "Maki" chevron divider in gold
        'maki-chevron': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iNCIgdmlld0JveD0iMCAwIDEwMCA0Ij48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNmZmI2MDAiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgZD0iTTAgMkwxMCAyTDIwIDJMMzAgMEw0MCAyTDUwIDRMNjAgMkw3MCAyTDgwIDJMOTAgMkwxMDAgMiIvPjwvc3ZnPg==')",
        'grid-pattern': "linear-gradient(to right, rgba(0, 234, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 234, 255, 0.05) 1px, transparent 1px)",
        'dot-pattern': "radial-gradient(circle, rgba(0, 234, 255, 0.1) 1px, transparent 1px)",
      },
      gridTemplateColumns: {
        // 12-column grid system
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      transitionDuration: {
        '500': '500ms', // 0.5s transitions per spec
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
