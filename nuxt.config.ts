import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page' },
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700&family=Russo+One&display=swap',
          // href: 'https://fonts.googleapis.com/css2?family=Flow+Circular&display=swap',
        },
      ],
    },
  },
  devtools: true,
  css: ['~/assets/styles/main.scss'],
  colorMode: {
    classSuffix: '',
  },
  components: [
    { path: '~/components/Elements', pathPrefix: false },
    '~/components',
  ],
  image: {
    provider: 'netlify', // !!! ???!?!?!?!?!
    strapi: {
      baseURL: process.env.STRAPI_URL,
    },
  },
  modules: [
    '@nuxt/image',
    '@nuxtjs/strapi',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
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
      strapiToken: process.env.STRAPI_TOKEN,
    },
  },
  ssr: true,
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
