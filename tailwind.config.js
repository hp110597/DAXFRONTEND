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
        },
        imageShowUp:{
          '0%': {  opacity: '0',transform:'translateX(var(--startX)) translateY(var(--startY))' },
          '100%': {  opacity: '1',transform:'translateX(var(--endX))  translateY(var(--endY))' },
        }
      },
      animation: {
        dialogFadeIN: 'dialogFadeIN 1s ease',
        imageShowUp:'imageShowUp 3s forwards'

      },
      fontFamily: {
        sans: 'Averta,sans-serif',
        avertaBold: 'AvertaBold'
      },
      colors: {
        'primary': '#86CFF2'
      }
    },
  },
  plugins: [],
}