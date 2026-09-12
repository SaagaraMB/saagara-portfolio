/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAF8F4",
        ink: "#211F1C",
        ink2: "#5B564D",
        ink3: "#8A8477",
        line: "#E7E1D6",
        accent: "#B4653F",
        "accent-soft": "#F1E1D4",
      },
      fontFamily: {
        sans: [
          "Source Sans 3",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        display: ["Fraunces", "Georgia", "serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      maxWidth: {
        prose: "42rem",
        site: "56rem",
      },
    },
  },
  plugins: [],
};
