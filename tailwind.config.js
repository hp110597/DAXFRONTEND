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
        dotActiveFadein: {
          '0%': { transform: 'scale(0.8)', opacity: '0.3' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(var(--percentage))' },
        },
        imageShowUp:{
          '0%': {  opacity: '0',transform:'translateX(var(--startX)) translateY(var(--startY))' },
          '100%': {  opacity: '1',transform:'translateX(var(--endX))  translateY(var(--endY))' },
        },
        textAnimate: {
          '0%': {
            opacity:'0.5',
            transform: 'translateY(var(--startPosition))'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(var(--endPosition))'
          }
        },
        imageFadeIn: {
          '0%': { opacity: 'var(--startOpacity)', transform: 'translateX(var(--startX)) translateY(var(--startY))' },
          '100%': { opacity: 'var(--endOpacity)', transform: 'translateX(var(--endX))  translateY(var(--endY))' },
        }
      },
      animation: {
        dialogFadeIN: 'dialogFadeIN 1s ease',
        dotActiveFadein: 'dotActiveFadein 1s ease',
        textScroll: 'scroll 10s linear',
        textAnimate: 'textAnimate var(--duration) ease-in-out var(--delay) forwards',
        imageFadeIn: 'imageFadeIn var(--duration) ease-in-out var(--delay) forwards',
        imageShowUp:'imageShowUp 3s forwards',
      },
      fontFamily: {
        sans: 'Averta,sans-serif',
        avertaBold: 'AvertaBold',
        storyBook: 'StorybookRegular'
      },
      colors: {
        'primary': '#86CFF2',
        'bgPrimary': `#000000`
      },
      zIndex: {
        '1': '1',
      },
    },
  },
  plugins: [],
  }

