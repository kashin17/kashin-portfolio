/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    container: { center: true, padding: "1rem" },
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial']
      },
      colors: {
        brand: {
          50:"#eef4ff",100:"#dce9ff",200:"#bcd3ff",300:"#8fb5ff",400:"#6091ff",
          500:"#3f6dff",600:"#2b50e6",700:"#223fc4",800:"#1f37a0",900:"#1e327f"
        }
      },
      boxShadow: {
        card: "0 12px 40px -8px rgba(0,0,0,0.15)",
        elevated: "0 14px 50px -12px rgba(34,63,196,0.35)"
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};
