/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				crimson: ["Crimson Text", "serif"],
				montserrat: ["Montserrat", "sans-serif"],
			},

			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontSize: {
				titleMobile: "23px",
				titleIpadAndDesktop: "30px",
			},
			colors: {
				btn_blue: "#2f80ed",
				light_purple: "#F0E9FD",
				paragraph: "#73788C",
				primary: "#3161d1",
				default: "none",
				light_green: "#D2EAF5",
			},
			spacing: {
				customHeight: "calc(100vh - 70px)",
			},
		},
	},
	darkMode: "class",
	plugins: [nextui()],
};
