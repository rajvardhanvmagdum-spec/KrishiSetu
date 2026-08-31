/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        krishi: {
          50: '#F0FDF4',
          100: '#E8F5E9',
          200: '#C8E6C9',
          300: '#A5D6A7',
          400: '#81C784',
          500: '#4CAF50',
          600: '#2E7D32',
          700: '#1B5E20',
          800: '#20603D',
          900: '#1E5128',
          dark: '#20603D',
          forest: '#1B5E20',
          light: '#EBF7EE',
          surface: '#FAFCF8',
          border: '#E2ECE4',
          textDark: '#1E293B',
          textMuted: '#64748B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 12px -2px rgba(0, 0, 0, 0.05), 0 1px 4px -1px rgba(0, 0, 0, 0.03)',
        'card': '0 4px 20px -4px rgba(32, 96, 61, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 10px 25px -5px rgba(32, 96, 61, 0.12), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
        'cta': '0 8px 24px -4px rgba(32, 96, 61, 0.35)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
