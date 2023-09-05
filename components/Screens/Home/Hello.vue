<script setup>
  const { pageData } = defineProps({
    pageData: Object,
  })
</script>

<template>
  <div>
    <ScreensHomeAvatar class="mb-10" />
    <div class="font-head mb-6">
      <div class="text-3xl drop-shadow-xl">
        <span class="my-title" v-html="pageData.title"></span>
        <ScreensHomeTyping class="text-white text-opacity-50" />
      </div>
    </div>
    <div
      class="mt-6 mb-36 text-white text-opacity-50 font-thin"
      v-text="pageData.description"
    ></div>

    <div class="flex gap-5">
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
  .my-title:deep(b) {
    @apply text-primary-600;
  }
</style>
