/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#EF443B",
        },
        bg: {
          DEFAULT: "#160E33",
        },
        white: {
          900: "#fff",
        },
        black: {
          900: "#000",
        },
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        rye: ["Rye", "serif"],
      },
      backgroundImage: {
        "banner": `
          linear-gradient(180deg, rgba(22,14,51,0) 66%, rgba(22,14,51,1) 100%),
          linear-gradient(-42deg, rgba(22,14,51,0) 0%, rgba(22,14,51,1) 90%),
          url('/src/assets/images/home/banner-bg.png')
        `,
      },
    },
    screens: {
      xl: { max: "1280px" },
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "640px" },
      xs: { max: "480px" },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
