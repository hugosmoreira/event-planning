/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      colors: {
        green: {
          300: '#00b37e',
          500: '#00875f',
          700: '#015f43',
        },
        blue: {
          500: '#81d8f7',
        },
        orange: {
          500: '#f75a68',
        },
        red: {
          500: '#f75a68',
        },
        gray: {
          100: "#4c1d95",
        }
      }
    },
  },
  plugins: [],
}
