/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'desktop': '650px'
      },
      colors:{
        orange: 'hsl(var(--orange) / <alpha-value>)',
        "pale-orange": 'hsl(var(--pale-orange) / <alpha-value>)',
        "very-dark-blue": 'hsl(var(--very-dark-blue) / <alpha-value>)',
        "dark-grayish-blue": 'hsl(var(--dark-grayish-blue) / <alpha-value>)',
        "grayish-blue": 'hsl(var(--grayish-blue) / <alpha-value>)',
        "light-grayish-blue": 'hsl(var(--light-grayish-blue) / <alpha-value>)',
      },
      keyframes:{
        "slide-in":{
          from:{
            transform: 'translateX(-200%)'
          },
          to:{
            transform: 'translateX(0)'
          }
        },
        "slide-out":{
          from:{
            transform:'translateX(0)'
          },
          to:{
            transform: 'translateX(-200%)'
          }
        }
      }
    }
  },
  plugins: [],
}