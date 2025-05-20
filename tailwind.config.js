/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        canvas: "#f7f8f9",
        text: "#1b1b1b",
        neon: {
          cyan: "#d4af37",
          DEFAULT: "#d4af37",
        },
        inti: {
          gold: "#D3AF37",
          DEFAULT: "#D3AF37",
        },
        violet: {
          backdrop: "#0a0020",
          DEFAULT: "#0a0020",
        },
        teal: {
          light: "#2dd4bf",
          DEFAULT: "#0d9488",
          dark: "#0f766e",
          darker: "#115e59"
        },
        magenta: {
          state: "#ff006e",
          DEFAULT: "#ff006e",
        },
        dark: {
          bg: "#0a0020", // Dark mode background
          text: "#f7f8f9", // Dark mode text
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        display: ['var(--font-display)', 'sans-serif'],
        heading: ['var(--font-heading)', 'sans-serif'],
        teko: ['var(--font-teko)', 'sans-serif'],
      },
      boxShadow: {
        'neon-glow': '0 0 15px 5px rgba(0, 234, 255, 0.4)',
        'neon-glow-dark': '0 0 15px 5px rgba(0, 234, 255, 0.2)',
        'gold-glow': '0 0 15px 5px rgba(255, 182, 0, 0.4)',
      },
      backgroundImage: {
        'gradient-gold-cyan': 'linear-gradient(45deg, #ffb600 0%, #00eaff 100%)',
      },
      spacing: {
        'gutter': '60px',
      },
      maxWidth: {
        'container': '90%',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'halo-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'gradient-sweep': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'halo-rotate': 'halo-rotate 3s linear infinite',
        'gradient-sweep': 'gradient-sweep 3s ease infinite',
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        'scale-in': 'scale-in 0.3s ease-out forwards',
        'spin-slow': 'spin-slow 15s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-plugin-fancy'),
  ],
}
