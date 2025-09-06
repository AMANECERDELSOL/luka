/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#F8F6F4',
        'sage-green': '#B2BBA2',
        'rose-quartz': '#F5DEDC',
        'raspberry': '#9A2A46',
        'primary-text': '#333333',
        'secondary-text': '#666666',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float-to-cart': 'floatToCart 0.8s ease-out forwards',
        'bloom': 'bloomAnimation 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};