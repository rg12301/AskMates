module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        login: "url('/login1.svg')",
        question404: "url('/assets/caveMan.gif')",
        homeHero: "url('/assets/undraw_Questions.svg')",
        homeSubHero: "url('/assets/undraw_my_answer.svg')",
        displayGradient:
          "linear-gradient(103deg, rgba(155,12,161,1) 0%, rgba(96,72,184,1) 62%, rgba(96,72,184,1) 100%)",
      }),
      boxShadow: {
        questionShadow:
          "-52px -6px 115px -42px rgba(155,12,161,0.27)",
      },
    },
    fontFamily: {
      display: [
        "Roboto",
        "Ubuntu",
        "Cantarell",
        "sans-serif",
      ],
    },
  },
  variants: {
    extend: {
      fontWeight: ["hover"],
    },
  },
  plugins: [],
};
