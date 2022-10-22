/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./scenes/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xsm: "376px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      "3xl": "2000px",
      "4xl": "2500px",
    },
    extend: {
      keyframes: {
        dialogFadeIN: {
          "0%": { transform: "translateY(-25%)", opacity: "0.8" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        dotActiveFadein: {
          "0%": { transform: "scale(0.8)", opacity: "0.3" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(var(--percentage))" },
        },
        imageShowUp: {
          "0%": {
            opacity: "0",
            transform: "translateX(var(--startX)) translateY(var(--startY))",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(var(--endX))  translateY(var(--endY))",
          },
        },
        textAnimate: {
          "0%": {
            opacity: "0.5",
            transform: "translateY(var(--startPosition))",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(var(--endPosition))",
          },
        },
        imageFadeIn: {
          "0%": {
            opacity: "var(--startOpacity)",
            transform: "translateX(var(--startX)) translateY(var(--startY))",
          },
          "100%": {
            opacity: "var(--endOpacity)",
            transform: "translateX(var(--endX))  translateY(var(--endY))",
          },
        },
        textAnimateFadeOut: {
          "0%": { opacity: "1", transform: "translateY(var(--startPosition))" },
          "100%": { opacity: "0", transform: "translateY(var(--endPosition))" },
        },
        imageFadeOut: {
          "0%": {
            opacity: "1",
            transform: "translateX(var(--startX)) translateY(var(--startY))",
            visibility: "visible",
          },
          "100%": {
            opacity: "0",
            transform: "translateX(var(--endX))  translateY(var(--endY))",
            visibility: "hidden",
          },
        },
        fadeIn: {
          "0%": { transform: "translateX(50%)", opacity: "0.5" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeOut: {
          "0%": { visibility: "visible" },
          "100%": { visibility: "hidden" },
        },
        process: {
          "0%": { width: "0px" },
          "100%": { width: "100%" },
        },
        spin:{
         "0%":{transform:"translate(0%, 0%) rotate(0deg) "},
         "20%":{transform:"translate(34%, -8%) rotate(72deg)   "},
         "40%":{transform:"translate(68%, -16%) rotate(144deg)   "},
         "60%":{transform:"translate(102%, -24%) rotate(216deg)   "},
         "80%":{transform:"translate(136%, -32%) rotate(288deg)  "},
         "100%":{transform:"translate(170%, -40%) rotate(360deg) "},

        }
      },
      animation: {
        dialogFadeIN: "dialogFadeIN 1s ease",
        dotActiveFadein: "dotActiveFadein 1s ease",
        textScroll: "scroll 10s linear",
        textAnimate:
          "textAnimate var(--duration) ease-in-out var(--delay) forwards",
        imageFadeIn:
          "imageFadeIn var(--duration) ease-in-out var(--delay) forwards",
        textAnimateFadeOut:
          "textAnimateFadeOut var(--duration) ease-in-out var(--delay) forwards",
        imageFadeOut:
          "imageFadeOut var(--duration) ease-in-out var(--delay) forwards",
        fadeIn: "fadeIn 0.7s ease-in-out",
        fadeOut: "fadeOut .7s ease-in-out",
        process: "process 3s ease-in-out forwards",
        imageShowUp: "imageShowUp 3s forwards",
        spin:'spin 1.5s linear forwards'
      },
      fontFamily: {
        sans: "Averta,sans-serif",
        avertaBold: "AvertaBold",
        storyBook: "StorybookRegular",
      },
      colors: {
        primary: "#86CFF2",
        bgPrimary: `#000000`,
      },
      zIndex: {
        1: "1",
      },
    },
  },
  plugins: [],
};
