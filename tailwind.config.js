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
        }
      },
      animation: {
        dialogFadeIN: 'dialogFadeIN 1s ease',
        dotActiveFadein: 'dotActiveFadein 1s ease',
        textScroll: 'scroll 10s linear',
      },
      fontFamily: {
        sans: 'Averta,sans-serif',
        avertaBold: 'AvertaBold'
      },
      colors: {
        'primary': '#86CFF2',
        'bgPrimary': `#000000`

      },
      zIndex: {
        '1': '1',
      }
    },
  },
  plugins: [],
}