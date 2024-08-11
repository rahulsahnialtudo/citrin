/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['eb-garamond', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        greenPrimary: '#A9B533',
        heading: '#121212',
        desc: '#53565A',
        dark: '#121212',
        navDarkBlue: '#003A4F',
        whiteLight: '#F9F9F9',
        navGrey: '#D9D9D7',
      },
      backgroundColor: {
        dark: '#121212',
      },
      backgroundImage: {},
      screens: {
        '3xl': '1600px',
        '4xl': '1700px',
        '5xl': '1800px',
        '6xl': '1920px',
      },
    },
  },
  plugins: [],
};

