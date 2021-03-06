module.exports = {
  prefix: '',
  purge: {
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    textIndent: (theme, { negative }) => ({
      ...{
        // sm: '2rem',
        // md: '3rem',
        // lg: '4rem',
      },
      ...negative({
        // sm: '2rem',
        // md: '3rem',
        // lg: '4rem',
      }),
    }),
  },
  variants: {
    extend: {},
    textIndent: ['responsive'],
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('tailwindcss-text-indent')()],
  
};