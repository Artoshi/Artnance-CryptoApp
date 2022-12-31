/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'binance':'#f0b90b'
      },
      animation : {
        'reverse-spin': 'reverse-spin 3s linear infinite',
        'pulse': 'pulse 1s linear infinite'
      },
      keyframes: {
        'reverse-spin': {
          from: {
            transform: 'rotate(360deg)'
          }
        }
      }
      
    },
  },
  plugins: [],
}