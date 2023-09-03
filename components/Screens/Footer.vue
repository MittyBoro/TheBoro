<template>
  <footer class="container pb-10">
    <div class="flex justify-center mb-10">
      <Btn third mini square class="mx-2">
        <Icon name="ig" class="scale-[.8]" />
      </Btn>
      <Btn third mini square class="mx-2">
        <Icon name="tg" />
      </Btn>
      <Btn third mini square class="mx-2">
        <Icon name="vk" />
      </Btn>
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
