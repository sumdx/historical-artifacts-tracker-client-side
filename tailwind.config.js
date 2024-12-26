/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FCC737', 
        secondary: '#F26B0F',
        accent: '#E73879', 
        neutral: '#7E1891', 
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(190deg, rgb(0, 0, 0) 15%, rgb(0, 0, 0) 72.498%)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

