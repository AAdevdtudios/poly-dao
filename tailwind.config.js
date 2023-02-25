/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  mode: 'jit',
  content: [
    "./assets/**/*.css",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./layouts/**/*.{vue,js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js,ts}"
  ],
  theme: {
    extend: {
      keyframes: {
        handKey: {
          '0%': { left: '0' },
          '50%': { left: '15px' },
          '100%': { left: '0' }
        }
      },
      animation: {
        handEffect: 'handKey 1s ease infinite',
      },
      fontFamily: {
        'workSans': ['Work Sans', 'sans-serif']
      },
      colors:{
        'pri' : '#F0D808'
      }
    },
  },
  plugins: [],
}