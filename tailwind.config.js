/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        // Indifly Brand Colors
        primary: {
          DEFAULT: '#01295C',
          light: '#024397',
          lighter: '#025ED4',
        },
        secondary: {
          DEFAULT: '#FF681E',
          light: '#FF915C',
          lighter: '#FFBB99',
        },
        accent: {
          blue: '#86BFEE',
          orange: '#E04A00',
        },
      },
      animation: {
        // Safe animations that don't conflict with Framer Motion
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce': 'bounce 1s infinite',
        'spin': 'spin 1s linear infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'gradient': 'gradient 8s ease infinite',
        'morph': 'morph 4s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        // Removed: float, particle (these use transforms and conflict with Framer Motion)
      },
      keyframes: {
        // Safe keyframes that don't use transform properties
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px rgba(255, 104, 30, 0.5)' },
          'to': { boxShadow: '0 0 30px rgba(255, 104, 30, 0.8)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        morph: {
          '0%, 100%': { borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' },
          '25%': { borderRadius: '58% 42% 75% 25% / 76% 46% 54% 24%' },
          '50%': { borderRadius: '50% 50% 33% 67% / 55% 27% 73% 45%' },
          '75%': { borderRadius: '33% 67% 58% 42% / 63% 68% 32% 37%' },
        },
        // Removed problematic keyframes:
        // - float (used transform translateY + rotate)
        // - particle (used transform translateY + rotate)
      },
      backgroundSize: {
        '300%': '300%',
      },
      fontFamily: {
        'sans': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Helvetica Neue', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      // Add some safe transition utilities
      transitionProperty: {
        'safe': 'opacity, color, background-color, border-color, box-shadow',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      }
    },
  },
  // Safelist classes to prevent purging of important utilities
  safelist: [
    'animate-fade-in',
    'animate-slide-up',
    'animate-glow',
    'animate-gradient',
    'animate-morph',
    'animate-pulse-slow',
    // Hover states
    'hover:scale-105',
    'hover:shadow-lg',
    'hover:shadow-xl',
    'hover:shadow-2xl',
    // Focus states
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-orange-500',
    // Safe transition classes
    'transition-safe',
    'transition-colors',
    'transition-opacity',
    'duration-300',
    'ease-in-out'
  ],
  plugins: [],
}