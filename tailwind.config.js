/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

const newScreens = Object.entries(defaultTheme.screens).reduce(
  (breakpoints, [label, value]) => {
    if (label == "lg") {
      breakpoints["devbreak"] = "1680px";
    }
    breakpoints[label] = value;
    return breakpoints;
  },
  {}
);

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: newScreens,
    fontFamily: {
      "open-sans": ["Open Sans", "Helvetica", "Times New Roman"],
    },
    extend: {
      colors: {
        background: "#E0E0E2",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
