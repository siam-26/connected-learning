/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#6278FF",

          secondary: "#132742",

          accent: "#262830",

          neutral: "#161E49",

          "base-100": "#FFFFFF",

          info: "#EDEEF3",

          success: "#E6E8F3",

          warning: "#ECEEF5",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
