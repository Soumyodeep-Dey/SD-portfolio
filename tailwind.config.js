/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Clean white/light theme colors
        light: {
          50: '#ffffff',   // Pure white - main background
          100: '#fafafa',  // Very light gray - card backgrounds
          200: '#f5f5f5',  // Light gray - section backgrounds
          300: '#eeeeee',  // Lighter gray - borders
          400: '#e0e0e0',  // Light medium gray - disabled elements
          500: '#d0d0d0',  // Medium gray - dividers
          600: '#bdbdbd',  // Medium dark gray
          700: '#9e9e9e',  // Dark gray - muted text
          800: '#757575',  // Darker gray - secondary text
          900: '#424242'   // Very dark gray - primary text
        },
        // Clean black/dark theme colors
        dark: {
          50: '#000000',   // Pure black - main background
          100: '#0a0a0a',  // Very dark - card backgrounds
          200: '#141414',  // Dark - section backgrounds
          300: '#1e1e1e',  // Darker - borders
          400: '#2d2d2d',  // Medium dark - disabled elements
          500: '#3d3d3d',  // Medium - dividers
          600: '#525252',  // Medium light
          700: '#737373',  // Light - muted text
          800: '#a3a3a3',  // Lighter - secondary text
          900: '#d4d4d4'   // Very light - primary text
        }
      },
      keyframes: {
        fadeInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-50%)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
      animation: {
        fadeInLeft: 'fadeInLeft 1s ease-in-out',
        blob: "blob 7s infinite",
      },
      animationDelay: {
        '2000': '2s',
        '4000': '4s',
      }
    },
  },
  plugins: [],
};