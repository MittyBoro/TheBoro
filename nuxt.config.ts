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
  devtools: true,
  css: ['~/assets/styles/main.scss'],
  colorMode: {
    classSuffix: '',
    preference: 'dark',
  },
  components: [
    { path: '~/components/Elements', pathPrefix: false },
    '~/components',
  ],
  image: {
    dir: 'assets/images',
    format: ['webp'],
  },
  modules: [
    '@nuxtjs/strapi',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/image',
  ],
  postcss: {
    plugins: {
      'postcss-import': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      strapiUrl: process.env.STRAPI_URL,
      strapiToken: process.env.STRAPI_TOKEN,
    },
  },
  ssr: false,
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
