/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: 'Kanit, sans-serif'
      },
      dropShadow: {
        'navbar': '0px 0px 20px #10b981'
      }
    }
  },
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ]
}
