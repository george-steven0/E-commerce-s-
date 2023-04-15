/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '200px',
      // => @media (min-width: 640px) { ... }

      'lsm': '400px', // { This is custome media added }
  
      'md': '600px',
      // => @media (min-width: 768px) { ... }

      'xmd' : '680px',
      // => @media (min-width: 768px) { This is custome media added }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors : {
        primary : "#007bff",
        secondary : "#6c757d",
        success : '#28a745',
        danger : "#dc3545",
        warning : "#ffc107",
        info : "#17a2b8",
        light : "#f8f9fa",
        dark: "#343a40",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
      }
    },
    
  },
  plugins: [],
}
