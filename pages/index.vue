<script setup>
  const nuxt = useNuxtApp()
  // console.log('nuxt', nuxt)

  definePageMeta({
    title: 'My nuxt page',
  })
</script>

<template>
  <HomeScreen class="pb-32" />
  <ProjectsList class="pb-32" />
</template>
