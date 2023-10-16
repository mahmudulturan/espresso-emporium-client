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
      },
      dropShadow: {
        text: '4px 4px 8px rgba(0, 0, 0, 0.5)'
      }
    },
  },
  plugins: [require("daisyui")],
}

