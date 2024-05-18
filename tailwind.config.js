/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main_one": "#F22F05",
        "main_two": "#F07100",
        "main_three": "#0A3D5C",
        "accent_one": "#747F80",
        "accent_two": "#E0DED1",
        "black": "#000000",
        "light_black": "#1E1E20",
        "white": "#ffffff",
        "gray": "#3E3E3E",
        "gray_dark": "#28292D"
      }
    },
    screens: {
      'sm': '250px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
};
