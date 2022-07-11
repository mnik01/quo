/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'white': '#FFFFFF',
      'white-100': '#FAFAFA',
      'black': '#000000',
      'black-100': '#444341',
      'red-100': '#FB5761',
      'purple-100': '#C8B3FA',
      'purple-200': '#AB90FB',
      'purple-300': '#9B7AFF',
    },
    fontFamily: {
      sans: ['Museo-Sans-Cyrl-300', 'Museo Sans Cyrl', 'MuseoSansCyrl', 'Graphik', 'sans-serif'],
      'sans-medium': ['Museo-Sans-Cyrl-500', 'MuseoSansCyrl', 'Graphik', 'sans-serif'],
      'sans-bold': ['Museo-Sans-Cyrl-700', 'MuseoSansCyrl', 'Graphik', 'sans-serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}
