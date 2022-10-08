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
        },
        textAnimate: {
          '0%': {
            opacity: '0.5',
            transform: 'translateY(var(--startPosition))'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(var(--endPosition))'
          }
        }
      },
      animation: {
        dialogFadeIN: 'dialogFadeIN 1s ease',
        imageShowUp:'imageShowUp 3s forwards',
        textAnimate: 'textAnimate var(--duration) ease-in',


      },
      fontFamily: {
        sans: 'Averta,sans-serif',
        avertaBold: 'AvertaBold',
        storyBook: 'StorybookRegular'

      },
      colors: {
        'primary': '#86CFF2'
      }
    },
    plugins: [],
  }
}
