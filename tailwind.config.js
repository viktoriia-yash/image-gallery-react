/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      headerFont: "Josefin Sans",
      allTextFont: "Poppins",
    },
    extend: {
      colors: {
        backgroundColor: "#F7FFE5",
        fontColor: "#A0C49D",
      },
    },
  },
  plugins: [],
};
