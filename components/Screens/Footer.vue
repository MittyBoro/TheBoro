<template>
  <footer class="container pt-20 pb-10">
    <div class="flex justify-center mb-4 text-sm text-center">
      <NuxtLink to="/#" class="link m-2">Home</NuxtLink>
      <NuxtLink to="/#projects" class="link m-2">Projects</NuxtLink>
    </div>
    <div class="text-center text-xs">
      <div>
        TheBoro.ru © {{ new Date().getFullYear() }}. All rights reserved.
      </div>
      <div class="mt-2">Made by Dima Boro with ❤️</div>
    </div>
  </footer>
</template>
