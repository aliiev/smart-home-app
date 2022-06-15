/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: 'Poppins, sans-serif'
      }
    }
  },
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ]
}
