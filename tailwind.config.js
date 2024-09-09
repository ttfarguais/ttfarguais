/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'ttfarguais': 'url("/imgClub/birthday.jpg")',
        'ttfCreate': 'url("/imgClub/Create.png")',
      },
      colors:{
        'solid': '#0F5E35',
        'contrast-1': '#F9F9F9',
        'contrast-2': '#F1F4F2',
        'contrast-3': '#0E2B1A', 
     },
    },
  },
  plugins: [],
};
