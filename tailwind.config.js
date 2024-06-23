/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      'mm':'321px',
      'ml':'376px',
      'tab':'426px',
      'lap':'769px',
      'lapl':'1025px',
      'mon':'1441px',
    },
  },
  plugins: [],
}

