/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-img": "url('./src/assets/img/image/home-bg.jpg')",
      },
      flex: {
        content: "1 1 42rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0rem)" },
          "50%": { transform: "translateY(-7rem)" },
        },
      },
    },
  },
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  plugins: [],
};
