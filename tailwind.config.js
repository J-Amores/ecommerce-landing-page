/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'orange': {
          500: '#ff7e1b',
          100: '#ffede0',
        },
        'dark-blue': '#1d2026',
        'grayish-blue': '#68707d',
        'light-grayish-blue': '#f6f8fd',
        'pale-orange': '#ffeee2',
      },
      fontFamily: {
        'sans': ['Kumbh Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}