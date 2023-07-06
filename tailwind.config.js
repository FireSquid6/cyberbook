/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        expand: {
          "0%, 100%": { transform: "scale(1)" },
          "60%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        expand: "expand 0.6s ease-in-out 1",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
        dark: {
          50: "#B2B3BE",
          100: "#A9ABB7",
          200: "#9698A6",
          300: "#7D7F91",
          400: "#626474",
          500: "#373841",
          600: "#2F3037",
          700: "#25262C",
          800: "#25262C",
          900: "#1A1A1E",
          950: "#000000",
        },
        primary: {
          50: "#EEFCF3",
          100: "#D8F8E4",
          200: "#ACF1C5",
          300: "#7CE9A4",
          400: "#33DC71",
          500: "#22C55E",
          600: "#1FB255",
          700: "#1B9D4B",
          800: "#167E3C",
          900: "#105B2B",
          950: "#0B411F",
        },
        accent: {
          50: "#FDF7F1",
          100: "#FBECDF",
          200: "#F7D9BF",
          300: "#F3C196",
          400: "#EDA464",
          500: "#E57E24",
          600: "#D26F19",
          700: "#B66116",
          800: "#9B5212",
          900: "#69380C",
          950: "#492709",
        },
      },
    },
  },
  plugins: [],
};
