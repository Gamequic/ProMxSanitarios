/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-orange':       '#F97316',
        'brand-orange-dark':  '#EA6C0A',
        'brand-orange-light': '#FED7AA',
        'brand-neon':         '#EEFF00',
        'brand-neon-dark':    '#D4E600',
      },
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        sans:    ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
