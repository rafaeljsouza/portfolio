import forms from '@tailwindcss/forms'
/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // habilita troca manual (pode ser 'media' se preferir automático)
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb', // azul-600
          dark: '#1d4ed8',
          light: '#3b82f6',
        },
        background: '#0a0a0a',
        foreground: '#ededed',
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        wave: 'wave 1.5s infinite ease-in-out',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '20%, 60%': { transform: 'rotate(-10deg)' },
          '40%, 80%': { transform: 'rotate(10deg)' },
        },
      },
      screens: {
        'xs': '480px', // extra breakpoint
      },
    },
  },
 plugins: [forms],
}

export default config
