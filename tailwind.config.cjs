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
    screens: {
      sm: { min: "320px", max: "424px" },
      // => @media (min-width: 320px and max-width: 767px) { ... }

      sm_secondary: { min: "425px", max: "767px" },

      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
