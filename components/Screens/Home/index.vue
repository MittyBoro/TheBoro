<script setup>
  const { pageData } = defineProps({
    pageData: Object,
  })
</script>

<template>
  <section class="home-screen container pt-4">
    <div class="min-h-screen items-start lg:grid grid-cols-7 gap-10">
      <div class="col-span-3 lg:sticky top-14">
        <ScreensHomeHello :pageData="pageData" />
      </div>

      <Delimiter class="lg:hidden sm:-my-10" full />

      <div class="col-span-4">
        <ScreensHomeMyWay />
        <Delimiter class="sm:-my-10" full />
        <ScreensHomeAbout :aboutText="pageData.aboutText" />
        <Delimiter class="sm:-my-10" full />
        <ScreensHomeStack />
      </div>
    </div>
  </section>
</template>
