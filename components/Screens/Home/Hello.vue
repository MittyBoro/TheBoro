<script setup>
  const { pageData } = defineProps({
    pageData: Object,
  })
</script>

<template>
  <div class="hello-item">
    <ScreensHomeAvatar class="mb-10" />
    <div class="font-head mb-6">
      <div class="text-3xl dark:drop-shadow-xl">
        <span class="my-title" v-html="pageData.title"></span>
        <ScreensHomeTyping class="dark:text-white/50 text-black/70" />
      </div>
    </div>
    <div class="mb-6 dark:opacity-50 font-thin">{{ pageData.description }}</div>

    <div class="flex gap-4 mt-auto">
      <Btn icon="ig" third mini square />
      <Btn icon="tg" third mini square />
      <Btn icon="github" third mini square />
      <Btn icon="vk" third mini square />
      <HashLink to="#projects" class="ml-auto">
        <Btn mini class="mr-5">Портфолио</Btn>
      </HashLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .hello-item {
    --h-padding: theme(spacing.14);
    @apply flex flex-col;
    min-height: calc(100vh - var(--h-padding) * 2);
  }
</style>

<style lang="scss">
  .hello-item .my-title b {
    @apply dark:text-primary-600 text-primary-500;
  }
</style>
