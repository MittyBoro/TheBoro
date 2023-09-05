<script setup>
  const { similarProjects } = defineProps({
    similarProjects: Array,
  })
</script>

<template>
  <section class="projects-screen container">
    <div class="text-center">
      <div class="pretitle">Отборные шедевры</div>
      <div class="title">Другие проекты</div>
    </div>

    <ScreensProjectsSwiper :projects="similarProjects" />
  </section>
</template>
