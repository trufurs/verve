/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [
		require('@catppuccin/tailwindcss')({
			prefix: 'catp',
			defaultFlavour: 'mocha'
		})
	]
};
