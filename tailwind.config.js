/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryText: '#F806CC',
        secondaryText: '#A91079',
        primaryBg: '#570A57',
        secondaryBg: '#2E0249',
      },
      backgroundImage: {
        bgImage: 'url("/bg.png")',
      },
    },
  },
  plugins: [],
}
