module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00c9c8', // For the "Log In" button
        secondary: '#1D4ED8', // For the "Welcome!" text
        loginSvgColor:'red'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Replace with preferred font
      },
    },
  },
  plugins: [],
};
