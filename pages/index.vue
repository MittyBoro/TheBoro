<script setup>
const nuxt = useNuxtApp();
console.log("nuxt", nuxt);

definePageMeta({
  title: "My nuxt page",
});
</script>

<template>
  <HomeScreen class="mb-20" />
  <ProjectsList />
</template>

<style lang="scss">
.bg-box {
  @apply shadow-xl rounded-xl p-8 mb-10 bg-gradient-to-br;
}
.pretitle {
  letter-spacing: 0.5em;
  @apply mb-2 text-gray-500 text-xs uppercase;
}
.title {
  @apply font-head text-3xl mb-8;
}
.title-2 {
  @apply font-head text-xl;
}
</style>
