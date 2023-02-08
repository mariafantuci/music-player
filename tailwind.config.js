/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./assets/js/*.js"],
  theme: {
    extend: {
      colors: {
				purple: "#2A2141",
        "light-gray": "#E1E1E6",
			},
			fontFamily: {
				roboto: ["Roboto", "sans-serif"],
			},
    },
  },
  plugins: [],
}
