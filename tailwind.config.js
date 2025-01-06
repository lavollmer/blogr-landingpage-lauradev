/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gradient-light-red": "hsl(356, 100%, 66%)",
        "very-light-red": "hsl(355, 100%, 74%)",
        "very-dark-blue": "hsl(208, 49%, 24%)",
        white: "hsl(0, 0%, 100%)",
        "grayish-blue": "hsl(240, 2%, 79%)",
        "very-dark-bluish": "hsl(207, 13%, 34%)",
        "very-dark-black-blue": "hsl(240, 10%, 16%)",
      },
      fontFamily: {
        overpass: ["overpass", "sans-serif"],
        ubuntu: ["ubuntu", "serif"],
      },
      backgroundImage: {
        "header-texture": "url('/assets/bg-pattern-intro-desktops.svg')",
        "circles-texture": "url('/assets/bg-pattern-circles.png')",
      },
    },
  },
  plugins: [],
};
