/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
