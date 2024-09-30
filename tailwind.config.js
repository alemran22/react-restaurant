/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "reservation-Bg": "url('https://i.ibb.co.com/1L1RM5D/Photo-1.png')",
        "aboutUsService-Bg":
          "url('https://i.ibb.co.com/c8phFrj/Background.png')",
      },
    },
  },
  plugins: [],
};
