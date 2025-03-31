/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          // Primärfarbe
          primary: "#01235d",
          // Akzentfarben für den Farbverlauf
          accent1: "#5de0e6",
          accent2: "#004aad",
          // Sekundärfarbe
          secondary: "#EAEAEA",
          // Off-White Textfarbe
          offwhite: "#F8F8F8",
        },
      },
    },
    plugins: [],
  }
  