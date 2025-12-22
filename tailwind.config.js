/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enables the light/dark toggle
  theme: {
    extend: {
      colors: {
        // We define your custom colors here
        sage: {
          DEFAULT: '#4C777A', // The main color
          light: '#6B9B9E',
          dark: '#335557'
        },
        lavender: {
          DEFAULT: '#D88C9A', // The accent color
          light: '#E6Aeb9',
          dark: '#B06876'
        }
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}