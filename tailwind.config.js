/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "neue-machina-light": ["NeueMachina-Light", "sans-serif"],
        "neue-machina-regular": ["NeueMachina-Regular", "sans-serif"],
        "neue-machina-bold": ["NeueMachina-Bold", "sans-serif"],
        "neue-corp-bold": ["NeueCorp-Bold", "sans-serif"],
        "neue-corp-regular": ["NeueCorp-Regular", "sans-serif"],
        "neue-corp-thin": ["NeueCorp-Thin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
