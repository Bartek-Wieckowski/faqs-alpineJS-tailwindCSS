module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "t-very-dark-desaturated-blue": "hsl(238, 29%, 16%)",
        "t-soft-red": "hsl(14, 88%, 65%)",
        "soft-violet": "hsl(273, 75%, 66%)",
        "soft-blue": "hsl(240, 73%, 65%)",
      },
      height: {
        ownHeightDesktop: "500px",
        ownHeightMobile: "650px",
      },
      maxWidth: {
        "2.5xl": "720px",
      },
      fontFamily: {
        "Kumbh-Sans": ['"Kumbh Sans"'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
