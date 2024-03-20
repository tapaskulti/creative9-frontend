/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
  daisyui: {
    themes: ["light"],
  },
  theme: {
    extend: {
      screens: {
        "xs": "480px",
        "2md": "980px",
        // "2lg": "1160px",
        "3xl": "1748px",
      },
      fontFamily: {
        body: ["Open Sans", "sans-serif", "Montserrat"],
        sans: ["Open Sans", "sans-serif", "Sans", "Arial", "sans-serif"],
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
