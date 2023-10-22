/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      cursor: {
        wii: 'url("/cursor.svg"), auto',
      },
      keyframes: {
        turn: {
          "0%, 100%": { transform: "rotateY(360deg)" },
          "50%": { transform: "rotate(0deg)" },
        },
        blink: {
          "50%": { opacity: 0 },
        },
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
        turn: "turn 8s linear infinite",
        blink: "blink 1s steps(1, end) infinite",
      },
    },
  },
  plugins: [],
};
