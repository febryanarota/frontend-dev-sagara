import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "gray-base": "#F4F4F4",
        "white-base": "#FFFFFF",
        "black-base": "#1C1C1C",
        "red-accent": "#A51535",
        "gray-accent": "#9E9E9E",
        "slate-accent" : "#637381",
        "slate-accent-2" : "#F9FAFB",
        "green-accent": "#00B69B",
        "gray-accent-2" :"#202224",
        "gray-accent-3" :"#EAECF0",
      },
      boxShadow: {
        'custom': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      },
      
    },
  },
  plugins: [],
};
export default config;
