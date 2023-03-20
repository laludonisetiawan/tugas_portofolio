/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary:'#15803D',
        secondary:'#94a3b8',
        dark:'#0F172A',
      },
      screens: {
        '2xl':'1320px',
      }
    },
  },
  plugins: [],
}
