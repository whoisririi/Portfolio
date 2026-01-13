/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dirtywhite: "#FFFBF0",
        lightpink: "#EECCD7",
        royalpink: "#CE6B8B",
        textgray: "#6C6C6A",
        dirtygold: "#807951",
        rusty: "#404030",
      },
      fontFamily: {
        source: ["'Source Sans 3'", "sans-serif"],
        candal: ["Candal", "sans-serif"],
        cherry: ["'Cherry Bomb One'", "cursive"],
      },
    },
  },
  plugins: [],
};
