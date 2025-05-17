/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        offwhite: '#f7f8f9',
        graphite: '#1b1b1b',
        neon: '#00eaff',
        inti: '#ffb600',
        midnight: '#0a0020',
        magenta: '#ff006e',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        teko: ['Teko', 'sans-serif'],
      },
      boxShadow: {
        'neon-glow': '0 0 15px -3px rgba(0, 230, 255, 0.4), 0 0 6px -2px rgba(0, 230, 255, 0.2)',
        'gold-glow': '0 0 15px -3px rgba(255, 182, 0, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'maki-pattern': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZiMzAwIiBzdHJva2Utd2lkdGg9IjQiIGQ9Ik0wLDQwIEw0MCw0MCBMNDAsODAgTDgwLDgwIi8+PC9zdmc+')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
