/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-suisseIntl)"],
      },
    },
    colors: {
      accent: "#E63E3A",
      black: "#101820",
      deepBlue: "#0f1821",
      white: "#fff",
    },
  },
  plugins: [],
};
