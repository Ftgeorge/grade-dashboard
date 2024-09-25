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
        'primary-80': 'rgba(31, 58, 147, 0.1)',
      },
      fontWeight: {
        hairline: '100',
        thin: '200',
        extralight: '300',
        light: '400',
        normal: '500',
        medium: '600',
        semibold: '700',
        bold: '800',
        black: '900'
      },
    },
  },
  plugins: [],
};
export default config;
