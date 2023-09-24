/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        text: "var(--text)",
        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
      },
      fontSize: {
        sm: "0.707rem",
        base: "1rem",
        xl: "1.414rem",
        "2xl": "1.999rem",
        "3xl": "2.827rem",
        "4xl": "3.997rem",
        "5xl": "5.652rem",
      },
      fontFamily: {
        heading: "Miriam Libre",
        body: "Miriam Libre",
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
    },
  },
  plugins: [],
};
