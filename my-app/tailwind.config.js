/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        'dvh': '100dvh',
      },
      minHeight: {
        'dvh': '100dvh',
      }
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    // plugin(function ({ addBase }) {
    //   addBase({
    //     "html, body": {
    //       overscrollBehavior: "none",
    //       overflow: "hidden",
    //     },
    //   });
    // }),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* IE and Edge */
          "-ms-overflow-style": "none",

          /* Firefox */
          "scrollbar-width": "none",

          /* Safari, Chrome and Opera */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    }),
  ],
};
