module.exports = {
  darkMode: "media",
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#effaf7",
          100: "#c4ffef",
          200: "#a2fde8",
          300: "#80fbe1",
          400: "#5ff9d9",
          500: "#3ef6d2",
          600: "#2deecb",
          700: "#1ce6b4",
          800: "#0bd9a5",
          900: "#00c996",
        },
        dark: {
          50: "#a9a9a9",
          100: "#999999",
          200: "#909090",
          300: "#7e7e7e",
          400: "#6c6c6c",
          500: "#5a5a5a",
          600: "#484848",
          700: "#363636",
          800: "#242424",
          900: "#121212",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
