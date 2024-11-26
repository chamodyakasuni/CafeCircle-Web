/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily	: {
        Sans: ["Poppins", "sans-serif"],
        cursive: ["Pacifico", "cursive"],
      },
      colors: {
        "primary": "#8b4513",
        "brandDark": "#0c0f14",
        "secondary": "#0c0f14",
        "lightOrange": "#f1dabf",
        "darkGray": "#1a1f25",
        "lightGray": "#272c35",
        },
        container: {
          center: true,
          padding:{
            DEFAULT:"1rem",
          sm: "2rem",
          } 
        },
      },
    },
  
  plugins: [],
}

