/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
        },
        accent: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
        glass: {
          white: 'rgba(255, 255, 255, 0.85)',
          light: 'rgba(255, 255, 255, 0.6)',
          blue: 'rgba(14, 165, 233, 0.08)',
        }
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 30%, #f0fdfa 60%, #ecfdf5 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)',
        'primary-gradient': 'linear-gradient(135deg, #0ea5e9 0%, #14b8a6 100%)',
        'card-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(240,249,255,0.8) 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(14, 165, 233, 0.12), inset 0 1px 0 rgba(255,255,255,0.8)',
        'glass-lg': '0 20px 60px rgba(14, 165, 233, 0.15), inset 0 1px 0 rgba(255,255,255,0.9)',
        'card': '0 4px 24px rgba(14, 165, 233, 0.08), 0 1px 4px rgba(0,0,0,0.04)',
        'card-hover': '0 12px 40px rgba(14, 165, 233, 0.18), 0 4px 12px rgba(0,0,0,0.06)',
        'button': '0 4px 20px rgba(14, 165, 233, 0.35)',
        'button-hover': '0 8px 30px rgba(14, 165, 233, 0.5)',
        'glow': '0 0 30px rgba(14, 165, 233, 0.3)',
        'glow-teal': '0 0 30px rgba(20, 184, 166, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'counter': 'counter 2s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-12px) rotate(1deg)' },
          '66%': { transform: 'translateY(-6px) rotate(-1deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
        'glass': '20px',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
