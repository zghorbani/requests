/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        md: '1024px',
        lg: '1366px'
      },
      padding: {
        DEFAULT: '1rem',
        md: '2rem'
      }
    },
  },
  plugins: [],
}
