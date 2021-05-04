module.exports = {
  purge: [
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_posts/*.md",
    "./*.html",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
  variants: {
    extend: {},
  },
  plugins: [],
};
