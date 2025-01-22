const {heroui} = require('@heroui/theme');
/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/navbar.js"
  ],  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui(),heroui()]}

