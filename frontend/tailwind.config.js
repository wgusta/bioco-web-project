/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bioco-green': '#2e7d32',
        'bioco-green-light': '#4caf50',
        'bioco-green-dark': '#1b5e20',
        'bioco-orange': '#ff8c00',
        'bioco-orange-light': '#ffa726',
        'bioco-beet': '#8b0000',
        'bioco-beet-light': '#b71c1c',
      },
      borderRadius: {
        'organic': '30% 70% 70% 30% / 30% 30% 70% 70%',
      },
    },
  },
  plugins: [],
}

