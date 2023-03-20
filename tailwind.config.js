const { blackA, violet, mauve } = require("@radix-ui/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
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
        white: "#fff",
        darkPurple: "#570A57",
        gray: "#DBDBDB",
        black: "#464646",
        ...blackA,
        ...violet,
        ...mauve,
      },
      backgroundImage: {
        mainGradient: "url('../public/images/mainGradient.png')",
      },
      container: {
        padding: "15px",
        center: true,
      },
    },
  },
  plugins: [],
}
