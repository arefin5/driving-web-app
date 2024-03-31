import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        n_md: "960px",
        n_lg: "1438px",
      },
      backgroundImage: {
        primaryGradiant: "linear-gradient(90deg, #2B388F 0%, #304996 100%)",
        secondaryGradiant: "linear-gradient(90deg, #C62F8F 0%, #CE2786 100%)",
        loginButton:
          "linear-gradient(95deg, #EB31A2 -46.2%, #2B388F 39.88%, #2B388F 72.9%, rgba(224, 56, 158, 0.80) 143.06%)",
        linearGradiant:
          "linear-gradient(95deg, #EB31A2 -1.37%, #2B388F 39.88%, #2B388F 52.27%, rgba(224, 56, 158, 0.80) 103.75%)",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        roboto_serif: ["var(--font-roboto_serif)"],
        liador: ["var(--font-liAdor)"],
      },
      colors: {
        primarySolid: "#2D1C69", // #2B388F
        primarySolid2: "#2D1C69",
        secondarySolid: "#C62F8F",
        gradiantPrimaryColor:
          "linear-gradient(95deg, #EB31A2 -46.2%, #2B388F 39.88%, #2B388F 72.9%, rgba(224, 56, 158, 0.80) 143.06%)",

        darkbg: "#13236C", // dark mode background
      },
    },
  },

  darkMode: "class",

  plugins: [nextui()],
};
