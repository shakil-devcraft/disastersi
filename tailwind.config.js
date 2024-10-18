/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "fontFamily": {
        "primary": ["Onest", "sans-serif"]
      },
      "colors": {
        "primary": "#F26922",
        "b-secondary": "#E4E4E780",
        "t-primary": "#09090B",
        "t-secondary": "#71717A"
      },
      "backgroundImage": {
        'map': "url('/map.png')",
      }
    },
  },
  plugins: [],
}