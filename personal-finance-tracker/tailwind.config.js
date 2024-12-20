// tailwind.config.js
export default {
  darkMode: 'class', // <- 'class' for å aktivere dark mode via klassenavn
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
