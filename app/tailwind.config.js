/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
	colors: {
		'tables': '#EFEFEF',
		'background': '#C8C8C8',
		'dark': '#434040',
		'green': '#38DA6F',
		'light': '#D9D9D9',
		'search': '#DEDEDE',
		'navtext': '#CFCFCF',
		'underline': '#0F89CE',
	},

	fontFamily: {
		'rubik': ['"Rubik"', ...defaultTheme.fontFamily.sans],
		'varela': ['"Varela"', ...defaultTheme.fontFamily.sans],
		'material-symbols-outlined': ['"Material Symbols Outlined"', ...defaultTheme.fontFamily.sans],
	}
  },
  plugins: [],
}
