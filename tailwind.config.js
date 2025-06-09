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
          600: '#e67016',
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
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'bounce-once': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.2s ease-out',
        'bounce-once': 'bounce-once 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
}