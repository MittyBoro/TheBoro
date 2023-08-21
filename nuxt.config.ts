import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700&family=Russo+One&display=swap',
        },
      ],
    },
  },
  css: ['~/assets/styles/main.scss'],
  components: [
    { path: '~/components/Elements', pathPrefix: false },
    '~/components',
  ],
  postcss: {
    plugins: {
      'postcss-import': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // ssr: false,

  vite: {
    plugins: [svgLoader()],
  },
})
