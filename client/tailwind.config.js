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
      'gray': '#6b6c6d',
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
