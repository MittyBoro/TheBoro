<script setup>
  const projects = await useApi().find('projects', {
    populate: ['thumb', 'categories'],
    fields: ['title', 'website', 'views'],
    sort: ['rank:asc'],
  })
</script>

<template>
  <section class="projects-screen container">
    <div class="text-center">
      <div class="pretitle">отборные шедевры</div>
      <div class="title">Портфолио</div>
    </div>

    <ScreensProjectsSwiper :projects="projects" />
  </section>
</template>
