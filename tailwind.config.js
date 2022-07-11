/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        textPrimaryColor: '#333333',
        textSecondaryColor: '#666666',
        textHover: '#a6b3b3',
      },
    },
    screens: {
      mobile: '576px',
      tablet: '768px',
      desktop: '992px',
    },
  },
  plugins: [],
};
