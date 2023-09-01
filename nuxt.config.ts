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
  modules: ['@nuxtjs/strapi'],
  postcss: {
    plugins: {
      'postcss-import': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      strapiUri: process.env.STRAPI_URL,
      strapiToken: process.env.STRAPI_TOKEN,
    },
  },
  // ssr: false,
  strapi: {
    url: process.env.STRAPI_URL,
    prefix: '/api',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt',
  },

  vite: {
    plugins: [svgLoader()],
  },
})
