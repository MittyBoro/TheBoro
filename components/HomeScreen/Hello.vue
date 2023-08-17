<template>
  <div class="sticky top-0">
    <div class="avatar w-40 h-40 mb-10">
      <img src="~/assets/images/ava.png" alt="" />
    </div>
    <div class="font-head mb-6">
      <div class="text-3xl drop-shadow-xl">
        Привет, я <span class="text-primary-600">Дмитрий Бородин</span>
      </div>
      <div class="mt-1 text-3xl">
        и я — <span class="text-gray-500">fullstack разработчик</span>
      </div>
    </div>
    <div class="mt-6 mb-28 text-gray-500 font-thin">
      Моя цель – объединить лучшие аспекты дизайна и программирования для
      создания веб-приложений, которые вдохновляют и удивляют! Готов превратить
      вашу концепцию в функциональную реальность!
    </div>

    <div class="pretitle text-gray-500">Я здесь</div>
    <div class="flex mt-3">
      <div class="btn-social btn-alt">
        <Icon name="ig" class="scale-75" />
      </div>
      <div class="btn-social btn-alt"><Icon name="tg" /></div>
      <div class="btn-social btn-alt"><Icon name="vk" /></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn-social {
  @apply w-12 h-12 p-3 rounded flex justify-center items-center transition-all shadow-lg shadow-black mr-6;
  svg {
    @apply w-auto h-auto fill-current;
  }
}

.avatar {
  @apply rounded-full shadow-2xl shadow-black border-8 border-gray-900 overflow-hidden transition-all;
  img {
    @apply transition scale-110;
  }
  &:hover {
    @apply shadow-xl shadow-primary-950 border-4 border-primary-700;
    img {
      @apply scale-150;
    }
  }
}
</style>
