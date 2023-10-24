/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'project': {
        '50': '#f0f9ff',
        '100': '#e1f3fd',
        '200': '#bce6fb',
        '300': '#81d5f8',
        '400': '#56c7f4', // Color Primario
        '500': '#14a8e3',
        '600': '#0886c1',
        '700': '#086b9c',
        '800': '#0b5b81',
        '900': '#0f4b6b',
        '950': '#0a3047',
      },
      'acento':'#FF8000',
    }
  },
  plugins: [],
}