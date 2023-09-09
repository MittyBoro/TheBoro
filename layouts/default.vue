<script setup>
  import favicon from '~/assets/images/favicon.png'

  const route = useRoute()
  const isProject = computed(() => {
    return route.name.indexOf('projects') === 0
  })

  const { data } = await useApi().findOne('layout')

  provide('socialLinks', data.socialLinks)

  useSeoMeta({
    ogImage: favicon,
  })
  useHead({
    htmlAttrs: {
      lang: 'ru',
    },
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.ico',
      },
    ],
  })
</script>

<template>
  <div class="wrapper">
    <MouseLight />
    <ColorMode fixed v-show="!isProject" />
    <div class="relative pt-10">
      <slot></slot>
      <Delimiter />
      <ScreensFooter class="relative" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .wrapper {
    @apply relative min-h-screen;
    @apply text-opacity-80 font-thin;
    @apply bg-gradient-to-br;

    @apply dark:from-gray-950 dark:to-gray-900 dark:text-white;
    @apply from-gray-200 to-gray-100 text-gray-800;
    overflow: clip;
    &::before {
      content: '';
      position: absolute;
      bottom: -100px;
      left: -100px;
      right: -100px;
      height: 200px;
      @apply bg-primary-200 dark:bg-primary-700/50 blur-[100px] animate-pulse;
      animation-duration: 5s;
      // background-position: 50% 100%;
      // background-size: 150% auto;
      // opacity: 0.4;
    }
  }
</style>
