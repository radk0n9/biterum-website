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
      'xs': '300px',
      ...defaultTheme.screens,
    },
    listStyleType: {
      'square': 'square',
      ...defaultTheme.listStyleType,
    },
    extend: {
      colors: {
        'gray-biterum1': '#dadada4a',
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
        'green-biterum2': '#E2F857',
        'green-biterum3': '#D0EC2A',
        'green-biterum4': '#B0CB08',
        'green-biterum5': '#8FA600',
        'green-biterum6': '#6C7E00',
        'greenl-biterum': '#daff0ac6',
        'background-biterum': '#dadada70',
      },
      transitionProperty: {
        'style-preserve-3d': 'transform-style: preserve-3d',
      },
      boxShadow: {
        'upside-down-md': '0 0px 0px -1px rgb(0 0 0 / 0.1), 0 -6px 4px -2px rgb(0 0 0 / 0.1)',
      }
    },
   
  },
  plugins: [
    require('flowbite/plugin'),
    require('tw-elements/dist/plugin'),
    require('tailwindcss-animated'),
  ],
}
