/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        blueTheme: { 500: '#030014' },
      },
      margin: {
        '43': '10.75rem', // 1 rem = 16 pixels
      },
      boxShadow: {
        'shadow-border-white': 'inset 0 0 0 8px rgba(255, 255, 255, 0.03)',
      }
      ,
      blur: {
        'radial-gradient': 'radial-gradient(71.86% 50% at 50% 0%, rgba(168,127,255,.04) 0%, rgba(168,127,255,0) 100%), rgba(4,1,21,.1)',
      }
    },
  },
  plugins: [],
}