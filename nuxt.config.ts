import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  css: ["~/assets/styles/main.scss"],
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "Russo One": true,
          Montserrat: true,
        },
      },
    ],
  ],
  postcss: {
    plugins: {
      "postcss-import": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    plugins: [svgLoader()],
  },
});
