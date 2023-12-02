/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        textSlider: "textSlider 5s ease-in-out 1",
      },
      keyframes: {
        textSlider: {
          "0%": { right: "0", translateX: "100%" },
          "20%,80%": { right: "50%", translateX: "-50%" },
          "100%": { right: "100%", translateX: "-100%" },
        },
      },
    },
  },
  plugins: [],
};
