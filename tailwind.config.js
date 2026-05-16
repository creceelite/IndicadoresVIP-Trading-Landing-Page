
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F5C842',
          dark: '#AA8C2C',
          glow: 'rgba(212, 175, 55, 0.5)',
        },
        dark: {
          DEFAULT: '#0a0a0a',
          card: 'rgba(255, 255, 255, 0.03)',
          border: 'rgba(255, 255, 255, 0.1)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(to bottom, rgba(10, 10, 10, 0.8), #0a0a0a)',
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(212, 175, 55, 0.3)',
        'gold-glow-lg': '0 0 40px rgba(212, 175, 55, 0.4)',
      }
    },
  },
  plugins: [],
}
