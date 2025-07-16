/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5f259f",
      },
      fontFamily: {
        nexa: ["Nexa", "sans-serif"], 
      },
    },
  },
  plugins: [],
};
