import fluid, { extract, screens } from "fluid-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ["./src/**/*.{html,js,jsx}", "./index.html"],
    extract,
  },
  theme: {
    screens,
    extend: {
      fontFamily: {
        custom: ["space grotesk", "sans-serif"],
      },
      backgroundImage: {
        cardDesktop: "url('./src/components/assets/bg-main-desktop.png')",
        cardMobile: "url('./src/components/assets/bg-main-mobile.png')",
      },
      colors: {
        white: "hsl(0, 0%, 100%)",
        lightGrayishViolet: "hsl(270, 3%, 87%)",
        darkGrayishViolet: "hsl(279, 6%, 55%)",
        veryDarkViolet: "hsl(278, 68%, 11%)",
      },
    },
  },
  plugins: [fluid],
};
