/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js",
  ],

  theme: {
    extend: {
      filter: {
        'brightness-70': 'brightness(0.7)',
      }
    }
,
  },

  variants: {
  },

  plugins: [],
}