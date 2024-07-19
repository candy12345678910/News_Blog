/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkBack: '#000517',
        liteBack: '#1E293B',
        customYellow: '#f59e0b',
        customLiteBlue: '#54afff',
        customDarkBlue: '#428eff',
      }
    },
  },
  plugins: [],
}