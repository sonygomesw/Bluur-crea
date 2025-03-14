/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        primary: {
          from: '#2563eb',
          to: '#7c3aed',
        },
        secondary: {
          from: '#3b82f6',
          to: '#8b5cf6',
        },
        accent: {
          from: '#6366f1',
          to: '#a855f7',
        },
      },
    },
  },
  plugins: [],
};