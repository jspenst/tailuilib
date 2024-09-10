import type { Config } from "tailwindcss";

const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      blue: colors.blue,
      primary: "#F1B145",
      secondary: "#EDEDED",
    },
    fontFamily: {
      myriad: ["Myriad", ""],
    },
    extend: {
      backgroundImage: {
        "hero-bg": "url('/hero-background.svg')",
        "bg-hero-small": "url('/hero-background-small.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
