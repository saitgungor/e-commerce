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
          "0%": { right: "0", top: "50%", transform: "translate(100%,-50%)" },
          "20%,80%": { right: "50%", top: "50%", transform: "translate(50%,-50%)" },
          "100%": { right: "100%", top: "50%", transform: "translate(-100%,-50%)" },
        },
      },
    },
  },
  plugins: [],
};
