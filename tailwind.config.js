/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        background: '#0a0a0a', /* Very dark, premium background */
        surface: '#121212',
        primary: '#ffffff',
        secondary: '#a1a1aa', /* Zinc 400 */
        accent: '#3b82f6', /* Blue 500 - restrained accent */
      }
    },
  },
  plugins: [],
}
