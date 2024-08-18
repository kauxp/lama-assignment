/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-end': '#C37EFF',
        'custom-start': '#3A0B63',
      },
      backgroundImage: {
        'custom-gradient':'linear-gradient(to top right,  #3A0B63, #C37EFF)',
      },
    },
  },
  plugins: [],
}