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
      keyframes: {
        slideIn: {
          '0%': {
            transform: 'translateY(100%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        slideOut: {
          '0%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(100%)',
          },
        },
      },
      animation: {
        slideIn: 'slideIn 1s ease-in-out forwards',
        slideOut: 'slideOut 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}
