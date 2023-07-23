/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{html,js}', './src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        iransans: ['IRANSans', 'sans-serif'],
        vazir: ['vazir', 'sans-serif'],
      },
      colors: {
        lightpressed: '#D7D8DD',
      },
    },
  },
  plugins: [],
}
