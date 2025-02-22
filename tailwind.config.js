/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customOrange: '#E57A43',
        customLightOrange: '#F0963C',
        customOlive: '#9DA54A',
        customDarkRed: '#8D0D0D',
        customCream: '#FFF2E6',
        customTeal: '#16322D',
        customGold: '#CAA151',
        customRed: '#F83B1B',
      },
    },
  },
  plugins: [],
}