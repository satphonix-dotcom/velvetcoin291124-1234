/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#E6E6FA', // Pastel purple light
          DEFAULT: '#B19CD9', // Pastel purple
          dark: '#9F84D5', // Darker pastel purple
        },
        accent: {
          light: '#FFE5B4', // Light gold
          DEFAULT: '#FFD700', // Gold
          dark: '#DAA520', // Darker gold
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}