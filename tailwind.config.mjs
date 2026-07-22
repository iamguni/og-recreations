/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0B2545',
          gold: '#D4AF37',
          goldHover: '#AA881B',
          lightBlue: '#134074',
          bgLight: '#EEF4F8'
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      }
    },
  },
  plugins: [],
}