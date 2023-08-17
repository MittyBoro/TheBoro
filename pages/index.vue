<script setup>
const nuxt = useNuxtApp();
console.log("nuxt", nuxt);

definePageMeta({
  title: "My nuxt page",
});
</script>

<template>
  <HomeScreen class="pb-20" />
  <ProjectsList class="pb-20" />
</template>
