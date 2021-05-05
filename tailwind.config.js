module.exports = {
  purge: [
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_posts/*.md",
    "./*.html",
  ],
  darkMode: false, // or 'media' or 'class'
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
        "screen-1/12w": "8.33333vw",
        "screen-2/12w": "16.66667vw",
        "screen-3/12w": "25vw",
        "screen-4/12w": "33.33333vw",
        "screen-5/12w": "41.66667vw",
        "screen-6/12w": "50vw",
        "screen-7/12w": "58.33333vw",
        "screen-8/12w": "66.66667vw",
        "screen-9/12w": "75vw",
        "screen-10/12w": "83.33333vw",
        "screen-11/12w": "91.66667vw",
        "screen-1/4w": "25vw",
        "screen-3/4w": "75vw",
        "screen-1/3w": "33.33333vw",
        "screen-2/3w": "66.66667vw",
        "screen-1/2w": "50vw",
        "screen-1/2h": "50vh",
      },
      colors: {
        lemonade: "#fbffa7",
        "light-red": "#ff764d",
        periwinkle: "#b1c5ff",
        "pale-violet": "#d5b3ff",
        "pale-lime-green": "#b6ffc0",
        "pure-blue": "#0000ff",
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ]
};
