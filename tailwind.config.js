/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // För att Tailwind ska scanna index.html om du använder det
    "./src/**/*.{js,jsx,ts,tsx}", // För att Tailwind ska scanna alla filer i src-mappen

  ],
  theme: {
    extend: {
      // Här kan du lägga till anpassade teman eller färger
      colors:{
        //primary:// "#8B0000",    Vinröd (dark red)
        //secondary:// "#006400",// Mörk grön (dark green)

      },
      fontFamily: {
        primary: ['"Cormorant SC"', 'serif'], // Min primära font
      },
      backgroundImage: {
        
      },
      

    },
  },
  plugins: [],
}

