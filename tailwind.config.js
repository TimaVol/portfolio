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
        primaryText: "#F806CC",
        secondaryText: "#A91079",
        primaryBg: "#570A57",
        secondaryBg: "#2E0249",
        ...blackA,
        ...violet,
        ...mauve,
      },
      backgroundImage: {
        bgImage: 'url("/bg.png")',
      },
      container: {
        padding: "15px",
        center: true,
      },
    },
  },
  plugins: [],
}
