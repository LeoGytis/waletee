/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: 'var(--color-primary)',
			},
			borderColor: {
				DEFAULT: '#D1D5DB',
			},
		},
	},
	plugins: [],
};
