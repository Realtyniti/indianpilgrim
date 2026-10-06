import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sindoor: { DEFAULT: "#a8431a", dark: "#86340f", soft: "#f7e6da" },
        marigold: { DEFAULT: "#e59a1c", soft: "#fcefd4" },
        glacier: { DEFAULT: "#1d5263", dark: "#123744", soft: "#e1eef1" },
        stone: { 50: "#faf7f2", 100: "#f2ece3", 200: "#e4dacb", 500: "#7a6c5d", 700: "#4a3f35", 900: "#241c15" },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: { prose: "68ch" },
    },
  },
  plugins: [],
};
export default config;
