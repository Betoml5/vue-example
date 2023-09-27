/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#2C3333",
        secondary: "#395B64",
        secondary_blue: "#2666CF",
        secundary_cream: "#F5F2E7",
      },
    },
  },
  plugins: [],
};
