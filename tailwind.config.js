/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      fontFamily:{
        rancho: ['Rancho', 'cursive'],
        raleway: ['Raleway', 'sans-serif'],
      },
      colors: {
        primary: '#E3B577',
        secondery: '#331A15'
      }

    },
  },
  plugins: [require("daisyui")],
}

