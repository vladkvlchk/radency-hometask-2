/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      width: {
        '150': '600px',
      },
      margin:{
        '1/2': '50%'
      }
    },
  },
  plugins: [],
}
