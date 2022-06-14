/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': 'url("./images/home-bg.jpg")'
      },
      minHeight: {
        'screen-1/2': '50vh'
      }
    },
  },
  plugins: [],
}
