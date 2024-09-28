import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1F3A93',
        'primary-20': 'rgba(31, 58, 147, 0.2)',
        'primary-40': 'rgba(31, 58, 147, 0.4)',
        'primary-60': 'rgba(31, 58, 147, 0.6)',
        'primary-80': 'rgba(31, 58, 147, 0.8)',
        'primary-main': 'rgba(31, 58, 147, 0.1)',
        'primary-yellow':'rgba(255, 165, 0, 1)',
        'primary-yellow-20':'rgba(255, 165, 0, 0.2)',
        'primary-green':'rgba(40, 167, 69, 1)',
        'primary-green-20':'rgba(40, 167, 69, 0.2)',
      },
      fontFamily: {
        montserrat: ['Montserrat Alternates', 'sans-serif'], // Ensure space is present
      },
    },
  },
  plugins: [],
};
export default config;
