/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        surface: "#111111",
        "surface-2": "#1a1a1a",
        "blue-accent": "#3b82f6",
        "blue-deep": "#1d4ed8",
        "blue-glow": "#60a5fa",
      },
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "blue-gradient": "linear-gradient(135deg, #1d4ed8 0%, #3b82f6 50%, #60a5fa 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(29,78,216,0.05) 100%)",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(59,130,246,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(59,130,246,0.7)" },
        },
      },
    },
  },
  plugins: [],
};
