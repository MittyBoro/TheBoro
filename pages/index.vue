<script setup>
  definePageMeta({
    title: 'My nuxt page',
  })
</script>

<template>
  <main>
    <ScreensHome id="home" />
    <Delimiter />
    <ScreensProjects id="projects" />
    <Delimiter />
    <ScreensGithub id="src" />
  </main>
</template>
