/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ], 
  theme: {
    extend: {
      fontFamily: {
        protomonoreg: ["proto-mono-regular"],
        inter: ["inter"],
        aceattorney: ["ace-attorney"],
      },
    },
  },
  plugins: [],
}

