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
    },
  },
  plugins: [],
};
