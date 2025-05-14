/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // for Google Font
        oswald: ["Oswald", "sans-serif"],
        Ibrand: ["ibrand"], // for self-hosted font
      },
    },
  },
  plugins: [],
};
