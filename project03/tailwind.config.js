/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.html', './src/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        iransans: ['IRANSans', 'sans-serif'],
      },
      colors: {
        lightpressed: '#D7D8DD',
      },
    },
  },
  plugins: [],
}
