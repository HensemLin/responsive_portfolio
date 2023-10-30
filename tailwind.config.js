/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      scale: {},
      fontWeight: {
        thin: "100",
        hairline: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "warm-green": "#abb373",
        "warm-gray": "#646464",
        "warm-white": "#dfe0de",
        "graydish-brown": "#98847c",
        "cream-white": "#fdfcd4",
        "warm-dark-green": "#6a764d",
        "dark-green": "#545d3e",
        "azure-blue": "#dceae9",
        "slate-gray": "#6d8387",
        "cadat-gray": "#7c9aa0",
        "taupe-gray": "#9e9a9a",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      fontSize: {
        fit: "4vw",
        full: "100%",
        "4/5": "80%",
        "3/4": "75%",
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ["hover"],
    },
  },
  plugins: [],
};
