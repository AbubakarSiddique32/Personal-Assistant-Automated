/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        Ibrand: ["ibrand"],
        Inter: ["Inter", "sans-serif"],
        Sans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
