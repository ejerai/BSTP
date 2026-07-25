/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f172a',
          light: '#1e293b',
          dark: '#020617',
        },
        secondary: {
          DEFAULT: '#2563eb',
          light: '#eff6ff',
          hover: '#1d4ed8',
        },
        accent: {
          DEFAULT: '#d90606',
          light: '#fef3c7',
          hover: '#b40909',
        },
        success: {
          DEFAULT: '#10b981',
          light: '#ecfdf5',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
