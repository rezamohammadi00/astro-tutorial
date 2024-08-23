/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
	fontFamily:{
		"alibaba":"Alibaba",
	  },
	  fontWeight: {
		light: 300,
		regular: 400,
		bold: 700,
	  },
    extend: {},
  },
  plugins: [],
};
