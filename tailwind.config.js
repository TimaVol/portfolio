const { blackA, violet, mauve } = require("@radix-ui/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#E8E8E8",
        darkPurple: "#570A57",
        gray: "#DBDBDB",
        black: "#464646",
        blackLight: "rgba(53, 53, 53, 0.79)",
        ...blackA,
        ...violet,
        ...mauve,
      },
      backgroundImage: {
        darkGradient: "url('../public/images/darkGradient.png')",
        lightGradient: "url('../public/images/lightGradient.png')",
      },
      container: {
        padding: "15px",
        center: true,
      },
    },
  },
  plugins: [],
}
