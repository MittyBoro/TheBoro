<script setup>
  const projects = await useApi().find('projects', {
    populate: ['thumb', 'categories'],
    fields: ['title', 'likes'],
    sort: ['rank:asc'],
  })

  const { pageId } = defineProps({
    pageId: Number,
  })

  const similarProjects = projects.filter((item) => item.id !== pageId)
</script>

<template>
  <section class="projects-screen container">
    <div class="text-center">
      <div class="pretitle">отборные шедевры</div>
      <div class="title">Другие проекты</div>
    </div>

    <ScreensProjectsSwiper :projects="similarProjects" />
  </section>
</template>
