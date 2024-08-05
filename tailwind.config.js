/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'theme-dark-thing': "#24282d"
      }
    },
  },
  plugins: [
    require('daisyui'),

  ],
}