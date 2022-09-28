/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./scenes/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        dialogFadeIN: {
          '0%': { transform: 'translateY(-25%)', opacity: '0.8' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      animation: {
        dialogFadeIN: 'dialogFadeIN 1s ease',
      }
    },
  },
  plugins: [],
}