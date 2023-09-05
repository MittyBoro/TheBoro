<template>
  <footer class="container pb-10">
    <div class="flex justify-center mb-10 gap-4">
      <Btn icon="ig" third mini square />
      <Btn icon="tg" third mini square />
      <Btn icon="github" third mini square />
      <Btn icon="vk" third mini square />
    </div>

    <div class="text-center text-xs">
      <div>
        TheBoro.ru © {{ new Date().getFullYear() }}. All rights reserved.
      </div>
      <div class="mt-2">Made by Dima Boro with ❤️</div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  .btn-third {
    @apply shadow-xl shadow-gray-900;
    &:hover {
      @apply shadow-lg shadow-gray-900;
    }
  }
</style>
