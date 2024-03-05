const colors = require("tailwindcss/colors");
const { translate } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "0px",
      md: "768px",
      lg: "1200px",
      xl: "1295px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: "#024959",
        secondary: "#012E40",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",

      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
    },
  },
  variants: {
    extend: {},
    plugins: [],
  },
};
