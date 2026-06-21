/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Warm, earthy palette
        cream: {
          50: '#fdfaf5',
          100: '#faf3e7',
          200: '#f3e6cf',
          300: '#e9d4ad',
          400: '#dcbb82',
        },
        clay: {
          50: '#faf4ee',
          100: '#f2e3d1',
          200: '#e4c5a4',
          300: '#d2a474',
          400: '#bf8552',
          500: '#a47148', // primary warm accent
          600: '#8a5a37',
          700: '#6f472d',
          800: '#553828',
          900: '#3d2920',
        },
        sage: {
          50: '#f4f6f1',
          100: '#e3e9da',
          200: '#c8d4b4',
          300: '#a3b787',
          400: '#7d9663',
          500: '#5e7849',
          600: '#475d38',
          700: '#384a2e',
          800: '#2d3b26',
          900: '#1f2a1b',
        },
        ink: {
          900: '#1a1611',
          800: '#2a231b',
          700: '#3d3328',
        },
      },
      fontFamily: {
        serif: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slow-zoom': 'slowZoom 20s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(80, 50, 30, 0.08)',
        'soft-lg': '0 20px 50px -10px rgba(80, 50, 30, 0.18)',
      },
    },
  },
  plugins: [],
}
