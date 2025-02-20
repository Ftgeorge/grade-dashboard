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
        'primary-dark-yellow':'rgba(255, 140, 0, 1)',
        'primary-yellow-20':'rgba(255, 165, 0, 0.2)',
        'primary-green':'rgba(40, 167, 69, 1)',
        'primary-green-20':'rgba(40, 167, 69, 0.2)',
        'primary-red-20': 'rgba(255, 69, 0, 00.2)',
        'primary-red': 'rgba(255, 69, 0, 1)',
        grey:'#2D3748'
      },
      fontFamily: {
        montserrat: ['"Montserrat Alternates"', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
    },
  },
  plugins: [],
};
export default config;
