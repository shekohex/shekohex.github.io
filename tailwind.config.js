module.exports = {
  theme: {
    fontFamily: {
      display: ["Caveat", "cursive"],
      body: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#222831",
        secondary: "#393E46",
        tertiary: "#EEEEEE",
        link: "#00ADB5",
      },
      margin: {
        "96": "24rem",
        "128": "32rem",
      },
    },
  },
  purge: ["index.html"],
  variants: {
    opacity: ["responsive", "hover"],
  },
};
