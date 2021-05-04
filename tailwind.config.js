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
        smvw: "8.33333vw",
      },
      colors: {
        "pale-yellow": "#fbffa7",
        "light-red": "#ff764d",
        "pale-blue": "#b1c5ff",
        "pale-violet": "#d5b3ff",
        "pale-lime-green": "#b6ffc0",
        "pure-blue": "#0000ff",
      },
    },
  },
  variants: {},
};
