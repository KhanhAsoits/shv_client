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
  },
  plugins: [],
  important: true,
};
