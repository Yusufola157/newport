/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        backgroundImage:{
          "pp": "url('https://img.freepik.com/free-photo/liquid-flame-drops-splashing-vibrant-colors-underwater-generated-by-ai_188544-39973.jpg?t=st=1688327412~exp=1688328012~hmac=68f2739816b67ebddf2575c951137ba3fd56bfaa36a6325d266ac049838a0574&w=826')",
        }
    },
  },
  plugins: [],
}
