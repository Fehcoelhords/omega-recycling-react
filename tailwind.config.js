/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50",
        "primary-darker": "#388E3C",
        secondary: "#AED581",
        "text-dark": "#333",
        "text-light": "#f8f9fa",
        "bg-light": "#f8f9fa",
        "bg-dark": "#212529",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
