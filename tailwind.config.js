 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
   theme: {
     extend: {
      colors: {
        customLightBlue: "#E1ECFE",
        customDarkBlue: "#0A365D",
        customOrange: "#F5745A"
      }
     },
   },
   plugins: [],
 }