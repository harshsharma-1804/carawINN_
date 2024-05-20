/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius:{
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      "4xl": "2rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "6rem",
      "8xl": "8rem",
      "9xl": "12rem",
      "10xl": "16rem"
    },

    extend: {
      spacing: {
        25:"6.5rem",
        30: "8rem",
        36: "10rem",
        65: "17rem",
        70: "18rem",
        74: "19.3rem",
        75: " 20rem",
        90: "22rem",
        100: "25rem",
        110: "28rem",
        120: "30rem",
        130: "32rem",
        150: "40rem",
        160: "45rem",
        170: "50rem",
        180: "55rem",
        190: "60rem",
        200: "65rem",
        220: "70rem",
        240: "75rem",
        250: "80rem",
        270: "85rem",
        960: "240rem",
        0.025: "2.5%",
        0.05: "5%",
        0.1: "10%",
        0.2: "20%",
        0.25: "25%",
        0.3: "30%",
        0.4: "40%",
        0.5: "50%",
        0.6: "60%",
        0.7: "70%",
        0.8: "80%",
        0.9: "90%",
        0.95: "95%",
        0.98: "98%",
      },
      colors:{
        body:{
          1: "#ff204e",
          2: "#a0153e",
          3: "#5d0e41",
          4: "#00224d",
          5: "#fbf3d5",
          6: "#1575fe"

        },
        button:{
          primary: "bg-red-800",
          secondary: "#ff9999",
          tertiary: "#ffcccc",
        },
      },
      backgroundImage: {
        'multi-gradient-image': 'linear-gradient(to top, black,black,black)',
        'multi-gradient-search': 'linear-gradient(to bottom, black,blue,blue,black)',
        'multi-gradient-to-b': 'linear-gradient(to bottom, black, red, blue, green, yellow, orange, purple, white)',
        'multi-gradient-to-l': 'linear-gradient(to left, black, red, blue, green, yellow, orange, purple, white)',
      },
      fontFamily: {
        merriweather: ['Merriweather', 'serif'],
        caveat: ['Caveat', 'cursive'],
        shadows: ['Shadows','cursive']
      }
    },
  },
  plugins: [],
}