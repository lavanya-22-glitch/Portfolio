/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/*.html",
    "./dist/*.js", 
    "./input.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        bree: ['"Bree Serif"', 'serif'],
      },
      colors: {
        blush: {
          light: '#FFF7F4',
          beige: '#EAD6CD',
          rose: '#D36F6F',
          cocoa: '#3C2A2A',
          card: '#F8E3DC',
          accent: '#C97B84',
          hover: '#D9B4A8',
        },
        night: {
          bg: '#1C1B1E',
          text: '#FCE8E4',
          accent: '#F6B7B7',
          box: '#2F2C2D',
          nav: '#272324',
          hover: '#5A4A4A',
        }
      }
    },
  },
  plugins: [],
  darkMode: "class",
}
