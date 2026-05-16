/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef8ff',
          500: '#0ea5e9',
          700: '#0369a1'
        }
      }
    }
  },
  plugins: []
};
