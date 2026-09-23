/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        parchment: {
          DEFAULT: '#EEE7D9',
          soft: '#F6F2E9',
          deep: '#E4DAC5',
        },
        ink: {
          DEFAULT: '#231F1B',
          soft: '#3A342C',
        },
        rust: {
          DEFAULT: '#A8461E',
          deep: '#7E3416',
          soft: '#C46B3E',
        },
        moss: {
          DEFAULT: '#3F4A38',
          soft: '#5B6650',
        },
        line: '#D8CDB4',
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        body: ['"Work Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '68ch',
      },
      letterSpacing: {
        wideish: '0.04em',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
