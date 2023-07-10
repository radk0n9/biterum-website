const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{ts,tsx}',
    './public/**/*.html',
    './node_modules/flowbite-react/**/*.js',
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    screens:{
      "xs": "300px",
      ...defaultTheme.screens,
    },
    listStyleType: {
      "square": "square",
      ...defaultTheme.listStyleType,
    },
    extend: {
      colors: {
        'gray-biterum2': '#aeb0b7',
        'gray-biterum3': '#a0a3ab',
        'gray-biterum4': '#93969f',
        'gray-biterum5': '#858993',
        'gray-biterum6': '#787c87',
        'gray-biterum7': '#6c6f7a',
        'gray-biterum8': '#60636c',
        'gray-biterum9': '#54575f',
        'gray-biterum10': '#484a51',
        'gray-biterum11': '#3c3e44',
        'gray-biterum12': '#303136',
        'gray-biterum13': '#242529',
        'gray-biterum14': '#202124',
        'green-biterum': '#afcb08',
        'background-biterum': '#dadada70',
      },
    },
   
  },
  plugins: [
    require('flowbite/plugin'),
    require('tw-elements/dist/plugin'),
  ],
}
