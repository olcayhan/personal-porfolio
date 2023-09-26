/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": { transform: "skew(0.0deg)" },
          "10%": { transform: "skew(14deg)" },
          "20%": { transform: "skew(-8deg)" },
          "30%": { transform: "skew(14deg)" },
          "40%": { transform: "skew(-4deg)" },
          "50%": { transform: "skew(10.0deg)" },
          "60%": { transform: "skew(0.0deg)" },
          "100%": { transform: "skew(0.0deg)" },
        },
        comeback: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-100% / 2))" },
        },
      },
      animation: {
        "waving-hand": "wave 10s linear infinite",
        "come-back": "comeback 20s linear infinite",
      },
      
    },
  },
  plugins: [],
};
