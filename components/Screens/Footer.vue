<script setup>
  const socialLinks = inject('socialLinks')
</script>

<template>
  <footer class="container pb-10">
    <div class="flex justify-center mb-10 gap-3 sm:gap-4">
      <Btn
        v-for="item in socialLinks"
        :key="item.name"
        :icon="item.name"
        :to="item.url"
        is="link"
        target="_blank"
        third
        mini
        square
      />
    </div>

    <div class="text-center text-xs">
      <div>
        TheBoro.ru © {{ new Date().getFullYear() }}. All rights reserved.
      </div>
      <div class="mt-2">Made by Dima Boro with ❤️</div>
    </div>
  </footer>
</template>
