<script setup>
const nuxt = useNuxtApp();
console.log("nuxt", nuxt);

definePageMeta({
  title: "My nuxt page",
});
</script>

<template>
  <div>slug: {{ $route.params.slug }}</div>
</template>
