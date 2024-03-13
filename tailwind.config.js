/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{ 
        primary:'#0B0C2A',
        grey: '#28333A',
      }
    },
  },
  plugins: [],
};

