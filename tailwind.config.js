/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scrollbarWidth: {
        thin: '2px',
      },
      scrollbarColor: {
        default: '#6b7280', // Adjust color as needed
      },
      colors:{
        __second:'#222245',
        __primary:'rgb(24,24,55)',
        _blue: '#007bff',
        _indigo: '#6610f2',
        _purple: '#6f42c1',
        _pink: '#e83e8c',
        _red: '#dc3545',
        _orange: '#fd7e14',
        _yellow: '#ffc107',
        _green: '#28a745',
        _teal: '#20c997',
        _cyan: '#17a2b8',
        _white: '#fff',
        _gray: '#6c757d',
        _gray_dark: '#343a40',
        _primary: '#007bff',
        _secondary: '#6c757d',
        _success: '#28a745',
        _info: '#17a2b8',
        _warning: '#ffc107',
        _danger: '#dc3545',
        _light: '#f8f9fa',
        _dark: '#343a40',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}