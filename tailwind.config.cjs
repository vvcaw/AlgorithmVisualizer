const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        'primary': '#768DF7',
        'background': '#F3F6FF',
        'subfontcolor': '#93969D',
        'fontcolor': '#676D7C',
        'hovercolor': 'rgba(118, 141, 247, 0.19)'
      }
    },
  },

  plugins: [],
};

module.exports = config;