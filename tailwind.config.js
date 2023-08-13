/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'], 
      },
      fontWeight: {
        'extra-bold': 500,
      },
    },
  },
  plugins: [],
}

