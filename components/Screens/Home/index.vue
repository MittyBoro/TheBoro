<script setup>
  const { pageData } = defineProps({
    pageData: Object,
  })
</script>

<template>
  <section class="home-screen container pt-4">
    <div class="min-h-screen items-start grid grid-cols-7 gap-10">
      <div class="col-span-3 sticky top-14">
        <ScreensHomeHello :pageData="pageData" />
      </div>

      <div class="col-span-4">
        <ScreensHomeAbout :aboutText="pageData.aboutText" />
        <Delimiter class="-my-10" full />
        <ScreensHomeMyWay />
        <Delimiter class="-my-10" full />
        <ScreensHomeStack />
      </div>
    </div>
  </section>
</template>
