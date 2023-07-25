/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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
