/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'black': '#000',
      },
      width: {
        '1920': '1920px',
      },
      height: {
        '1080': '1080px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
