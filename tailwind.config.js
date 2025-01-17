/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Color primario y sus variantes
        secondary: {
          light: 'rgb(103, 232, 249)', // Un celeste claro
          DEFAULT: 'rgb(6, 182, 212)',  // Color principal turquesa
          dark: 'rgb(22, 78, 99)',      // Turquesa oscuro
        },
        // Color secundario y sus variantes
        primary: {
          light: 'rgb(251, 146, 60)',   // Naranja claro
          DEFAULT: 'rgb(249, 115, 22)',  // Naranja
          dark: 'rgb(154, 52, 18)',      // Naranja oscuro
        },
        // Color de fondo y sus variantes
        background: {
          light: 'rgb(241, 245, 249)',   // Gris muy claro para fondos
          DEFAULT: 'rgb(226, 232, 240)', // Gris claro
          dark: 'rgb(30, 41, 59)',       // Azul muy oscuro para navbar
        },
      }
    },
  },
  plugins: [],
}