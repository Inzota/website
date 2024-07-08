const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/@nextui-org/theme/dist/components/button.js",
    "./node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,tsx,jsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  base: "/inzota-website/",
  plugins: [
    nextui({
      addCommonColors: true,
    }),
  ],
};
