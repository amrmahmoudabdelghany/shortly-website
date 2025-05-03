import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins-sans)", "sans-serif"],
      },
      spacing: {
        180: "32rem",
      },
      colors: {
        cyan: "var(--color-cyan)",
        cyanLight: "var(--color-cyan-light)",
        darkViolet: "var(--color-dark-violet)",
        red: "var(--color-red)",
        grayishViolet: "var(--color-grayish-violet)",
        veryDarkBlue: "var(--color-very-dark-blue)",
        veryDarkViolet: "var(--color-very-dark-violet)",
      },
    },
  },
  plugins: [],
};

export default config;
