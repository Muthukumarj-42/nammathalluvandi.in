import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F8F6F2",
        surface: "#F8F6F2",
        "surface-container": "#eaf0e2",
        "surface-container-low": "#f0f6e8",
        "surface-container-high": "#dfe4d7",
        ink: "#0D0D0D",
        charcoal: "#181818",
        muted: "#6B6B6B",
        outline: "#bfcab7",
        primary: "#FF6B00",
        leaf: "#075200",
        plum: "#841456",
        accent: "#25D366",
        cream: "#F5F5F5"
      },
      fontFamily: {
        display: ["var(--font-bebas)", "Impact", "sans-serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        tamil: ["var(--font-noto-tamil)", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 48px rgba(255, 107, 0, 0.28)",
        premium: "0 24px 80px rgba(13, 13, 13, 0.16)"
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem"
      }
    }
  },
  plugins: []
};

export default config;
