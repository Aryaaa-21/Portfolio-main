/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#FAFAFA",
          light: "#FAFAFA",
          dark: "#050505",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          light: "#FFFFFF",
          dark: "#0B0B0B",
        },
        text: {
          DEFAULT: "#050505",
          light: "#050505",
          dark: "#FFFFFF",
        },
        border: {
          DEFAULT: "#E5E5E5",
          light: "#E5E5E5",
          dark: "#1A1A1A",
        },
        // Allowed monochromatic colors
        mono: {
          5: "#050505",
          11: "#111111",
          26: "#1A1A1A",
          42: "#2A2A2A",
          161: "#A1A1A1",
          255: "#FFFFFF",
        }
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Hanken Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
}
