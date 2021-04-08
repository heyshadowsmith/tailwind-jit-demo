const colors = require('tailwindcss/colors')

module.exports = {
  // Enable the next line to turn on Tailwind's JIT compiler
  // mode: 'jit',
  purge: [
    './src/**/*.html'
  ],
  darkMode: 'media',
  theme: {
    extend: {
      screens: {
        '3xl': '1920px'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        cyan: colors.cyan,
        blue: colors.lightBlue,
        fuchsia: colors.fuchsia,
        lime: colors.lime,
        'light-blue': colors.lightBlue,
        'twitter-blue': '#1da1f2'
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['focus-visible', 'active', 'group-focus'],
      textColor: ['focus-visible', 'active', 'group-focus'],
      ringWidth: ['focus-visible'],
      ringColor: ['focus-visible'],
      ringOffsetWidth: ['focus-visible'],
      ringOffsetColor: ['focus-visible']
    },
  },
  plugins: [],
}
