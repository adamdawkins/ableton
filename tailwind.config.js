const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: {
    content: [
      "./src/**/*.js",
      "./src/**/*.11ty.js",
      "./src/**/*.njk",
      ".src/**/*.css",
    ],
  },
  darkMode: "media",
  theme: {
    fontFamily: {
      sans: [
        "futura-pt",
        "Jost",
        "Avenir",
        "apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
    },
    extend: {
      spacing: {
        "75px": "75px",
        "1/12vw": "8.33333vw",
        "2/12vw": "16.66667vw",
        "3/12vw": "25vw",
        "4/12vw": "33.33333vw",
        "5/12vw": "41.66667vw",
        "6/12vw": "50vw",
        "7/12vw": "58.33333vw",
        "8/12vw": "66.66667vw",
        "9/12vw": "75vw",
        "10/12vw": "83.33333vw",
        "11/12vw": "91.66667vw",
        "1/4vw": "25vw",
        "3/4vw": "75vw",
        "1/3vw": "33.33333vw",
        "2/3vw": "66.66667vw",
        "1/2vw": "50vw",
        "1/2vh": "50vh",
      },
      colors: {
        lemonade: "#fbffa7",
        "light-red": "#ff764d",
        periwinkle: "#b1c5ff",
        "pale-violet": "#d5b3ff",
        spearmint: "#b6ffc0",
        "pure-blue": "#0000ff",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/aspect-ratio")],
};
