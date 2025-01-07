/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gradient-light-red": "hsl(356, 100%, 66%)",
        "very-light-red": "hsl(13, 100%, 72%)",
        "very-dark-blue": "hsl(208, 49%, 24%)",
        white: "hsl(0, 0%, 100%)",
        "grayish-blue": "hsl(240, 2%, 79%)",
        "very-dark-bluish": "hsl(207, 13%, 34%)",
        "very-dark-black-blue": "hsl(240, 10%, 16%)",
        "very-dark-grayish-blue": "hsl(207, 13%, 34%)",
      },
      fontFamily: {
        overpass: ["overpass", "sans-serif"],
        ubuntu: ["ubuntu", "serif"],
      },
    },
  },
  plugins: [],
};
