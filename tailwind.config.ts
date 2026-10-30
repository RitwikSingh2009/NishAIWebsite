import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "ghost-in": { from: { opacity: "0" }, to: { opacity: "1" } },
        accept: { from: { color: "#3d457f" }, to: { color: "#ffffff" } },
      },
      animation: {
        "ghost-in": "ghost-in 0.3s ease-out",
        accept: "accept 0.4s ease-out",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      colors: {
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
      },
    },
  },
  plugins: [],
};
export default config;