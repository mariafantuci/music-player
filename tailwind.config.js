/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./assets/js/*.js"],
  theme: {
    extend: {
      colors: {
				purple: "#2A2141",
        "light-purple": "#5E586F",
        "light-gray": "#E1E1E6",
        "black-bg": "#0F0D13",
        "light-gray-100": "#C4C4CC",
        "light-gray-200": "#D9D9D9",
			},
			fontFamily: {
				roboto: ["Roboto", "sans-serif"],
			}
    },
  },
  plugins: [],
}
