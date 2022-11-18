/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-img": "url('./src/assets/img/image/home-bg.jpg')",
        "bg-menu": "url('./src/assets/img/image/menu-bg.jpg')",
      },
      flex: {
        content: "1 1 42rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0rem)" },
          "50%": { transform: "translateY(-7rem)" },
        },

        image: {
          "0%, 100%": {
            transform: "scale(.9)",
            "border-radius": "4% 95% 6% 95%/95% 4% 92% 5%",
          },
          "50%": {
            transform: "scale(.8)",
            "border-radius": "95% 4% 97% 5%/4% 94% 3% 95%",
          },
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
