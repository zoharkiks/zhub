/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'white': '#fcfcfc',
      'black':'#141414',
      'gray': '#242424',
      'blue':'#2460f7',
    },
    extend: {

      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        
      },
    },
  },
  plugins: [],
}
