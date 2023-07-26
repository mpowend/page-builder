/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/*.{js,jsx,ts,tsx} ', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-gray': '#e5ebef',
        'warm-gray': '#d9dbdc',
      },
    },
  },
  plugins: [],
}
