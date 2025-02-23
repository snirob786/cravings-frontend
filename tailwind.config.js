/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const { createThemes } = require("tw-colors");
const bangladeshGreen = {
  50: "#e8f7f5", // Very light shade
  100: "#c8ece7", // Light shade
  200: "#a3dcd2", // Slightly lighter
  300: "#7ecdc9", // Light-medium
  400: "#58bdb0", // Medium-light
  500: "#006A4E", // Base color (medium)
  600: "#005c43", // Medium-dark
  700: "#004d39", // Darker
  800: "#003f2e", // Much darker
  900: "#003124", // Very dark
  950: "#00231a", // Almost black
};

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],

  theme: {
    container: {
      center: true,
      padding: "1rem",
    },

    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      handrawn: ["Delicious Handrawn", "cursive"],
    },

    extend: {
      colors: {
        primary: {
          ...bangladeshGreen,
          DEFAULT: "#105d5f",
        },
      },

      spacing: {
        15: "60px",
        18: "72px",
      },

      zIndex: {
        60: "60",
        70: "70",
      },
    },
  },

  plugins: [
    require("preline/plugin"),
    require("./custom.plugin"),
    createThemes(
      {
        light: {
          default: colors.slate,
          primary: {
            ...bangladeshGreen,
            DEFAULT: "#105d5f",
          },
        },

        dark: {
          default: {
            50: "#e6f7f7", // Very light shade
            100: "#c9eaea", // Light shade
            200: "#a9dcdc", // Slightly lighter
            300: "#8acfcf", // Light-medium
            400: "#6bc2c2", // Medium-light
            500: "#4db5b5", // Base color (medium)
            600: "#3daaaa", // Medium-dark
            700: "#2d9999", // Darker
            800: "#1d8888", // Much darker
            900: "#0d7777", // Very dark
            950: "#056666", // Almost black
          },
          //   default: {
          //     50: "#020617",
          //     100: "#0f172a",
          //     200: "#1e293b",
          //     300: "#334155",
          //     400: "#475569",
          //     500: "#64748b",
          //     600: "#94a3b8",
          //     700: "#cbd5e1",
          //     800: "#e2e8f0",
          //     900: "#f1f5f9",
          //     950: "#f8fafc",
          //   },
          primary: {
            ...bangladeshGreen,
            DEFAULT: "#105d5f",
          },
        },
      },
      {
        defaultTheme: "light",
      }
    ),
  ],
};
