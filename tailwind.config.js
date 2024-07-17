/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "#71717A",
        gry: "#D4D4D8",
        gryrt: "#71717A",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        code: ['"Courier Prime"', "monospace"],
      },
    },
  },
  plugins: [],
};
