/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			xs: { min: "375px", max: "639px" },
			sm: { min: "640px", max: "767px" },
			// => @media (min-width: 640px) { ... }

			md: { min: "768px", max: "1023px" },
			// => @media (min-width: 768px) { ... }

			lg: { min: "1024px", max: "1279px" },
			// => @media (min-width: 1024px) { ... }

			xl: { min: "1280px", max: "1439px" },
			// => @media (min-width: 1280px) { ... }

			xxl: { min: "1440px" },
			// => @media (min-width: 1536px) { ... }
		},
		extend: {},
	},
	plugins: [require("daisyui")],
};
