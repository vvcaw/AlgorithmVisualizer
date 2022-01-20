module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary' : '#768DF7',
        'background' : '#F3F6FF',
        'subfontcolor' : '#676D7C',
        'hovercolor' : 'rgba(118, 141, 247, 0.19)'
      }
    },
  },
  plugins: [],
}