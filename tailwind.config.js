/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        highlight: "#20B15A",
        secondary: "#20B15A",
      },
      fontFamily: {
        funnel: ["Funnel Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
