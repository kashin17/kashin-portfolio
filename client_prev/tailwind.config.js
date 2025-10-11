/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: { center: true, padding: "1rem" },
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol', 'Noto Color Emoji'],
      },
      colors: {
        brand: {
          50:  "#eef4ff",
          100: "#dce9ff",
          200: "#bcd3ff",
          300: "#8fb5ff",
          400: "#6091ff",
          500: "#3f6dff",
          600: "#2b50e6",
          700: "#223fc4",
          800: "#1f37a0",
          900: "#1e327f"
        }
      },
      boxShadow: {
        card: "0 8px 24px -8px rgba(0,0,0,0.12)",
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}




// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,jsx}"],
//   theme: { extend: {} },
//   plugins: []
// };
