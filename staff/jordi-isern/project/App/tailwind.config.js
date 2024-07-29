/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          'gold1' : 'var(--gold1)',
          'blueBackgroundBox':'var(--blueBackgroundBox)',
          'black1': 'var(--black)',
          'red1': 'var(--red)',
          'translucidBlue': 'var(--translucidBlue)'
      }
    },
  },
  plugins: [],
};
