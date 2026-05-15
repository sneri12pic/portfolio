import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#fff8f3",
        "cream-strong": "#f7eee8",
        petal: "#f3d7d0",
        rose: "#c87578",
        coral: "#dc8b77",
        clay: "#8f5d55",
        charcoal: "#2d2523",
        "warm-gray": "#746965"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(143, 93, 85, 0.13)",
        card: "0 12px 34px rgba(143, 93, 85, 0.11)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-newsreader)", "Georgia", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
