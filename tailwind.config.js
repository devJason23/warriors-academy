/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        warrior: { dark: '#1B4332', green: '#22C55E', accent: '#16A34A' },
      },
    },
  },
  plugins: [],
}
