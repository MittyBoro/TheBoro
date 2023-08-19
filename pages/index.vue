<script setup>
  const nuxt = useNuxtApp()
  // console.log('nuxt', nuxt)

  definePageMeta({
    title: 'My nuxt page',
  })
</script>

<template>
  <HomeScreen class="pb-16" />
  <ProjectsList class="py-16" />
</template>
