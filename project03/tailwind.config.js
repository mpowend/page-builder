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
            'max-height': 0,
          },
          '100%': {
            'max-height': '400px',
          },
        },
        slideOut: {
          '0%': {
            'max-height': '400px',
          },
          '100%': {
            'max-height': 0,
          },
        },
        slideOutmin: {
          '0%': {
            'max-height': '200px',
          },
          '100%': {
            'max-height': 0,
          },
        },
      },
      animation: {
        slideTop: 'slideIn 1s ease-in forwards',
        slideBot: 'slideIn 1s ease-out forwards',
        slideTopOut: 'slideOut 1s ease-out forwards',
        slideBotOut: 'slideOutmin 0.5s ease-in forwards',
      },
    },
  },
  plugins: [],
}
