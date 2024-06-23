/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customColor: "#A9C2C9",
        buttonCustomColor: "#ED2127",
        textColor: "#B9B9B9",
        gradColor: "#50505080",
        circleColor: "#F3F5F6",
        footerColor: "#181E20",
        emailColor: "#2D373A",
        bodyColor: "#212525",
      },

      fontFamily: {
        inter: ["Inter"],
        poppins: ["Poppins"],
        "plus-jakarta-sans": ["Plus Jakarta Sans"],
        roboto: ["Roboto"],
      },
    },
  },
  plugins: [require("daisyui")],
};
