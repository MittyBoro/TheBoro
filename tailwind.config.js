const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.zinc,
      primary: colors.rose,
    },
    container: {
      center: true,
      padding: '2rem',
    },
    fontFamily: {
      serif: ['ui-serif', 'Georgia'],
      sans: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      head: ['Russo One', 'Arial Black', 'system-ui'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      // serif: ['Flow Circular'],
      // sans: ['Flow Circular'],
      // head: ['Flow Circular'],
      // mono: ['Flow Circular'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
