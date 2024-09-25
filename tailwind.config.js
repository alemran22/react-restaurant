/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "reservation-Bg": "url('./reservation/Photo (1).jpg')",
      },
    },
  },
  plugins: [],
};
