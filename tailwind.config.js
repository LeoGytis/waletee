/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: 'var(--color-primary)',
				greydark: 'var(--color-foreground)',
				grey: 'var(--color-secondary-foreground)',
			},
			borderColor: {
				DEFAULT: '#D1D5DB',
			},
		},
	},
	plugins: [],
};
