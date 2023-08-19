<template>
  <div>
    <HomeScreenElAvatar class="mb-10" />
    <div class="font-head mb-6">
      <div class="text-3xl drop-shadow-xl">
        Привет, я
        <span class="text-primary-600">Дмитрий Бородин</span>
      </div>
      <div class="mt-1 text-3xl">
        и я —
        <HomeScreenElTyping class="text-white text-opacity-50" />
      </div>
    </div>
    <div class="mt-6 mb-28 text-white text-opacity-50 font-thin">
      Моя цель – объединить лучшие аспекты дизайна и программирования для
      создания веб-приложений, которые вдохновляют и удивляют! Готов превратить
      вашу концепцию в функциональную реальность!
    </div>

    <div class="pretitle">Я здесь</div>
    <div class="flex mt-3">
      <div class="btn-mini btn-alt aspect-square mr-4">
        <Icon name="ig" class="scale-75" />
      </div>
      <div class="btn-mini btn-alt aspect-square mr-4"><Icon name="tg" /></div>
      <div class="btn-mini btn-alt aspect-square mr-4"><Icon name="vk" /></div>
      <NuxtLink
        :to="{ hash: '#projects' }"
        :external="true"
        class="btn-mini btn ml-auto"
      >
        <span>Портфолио</span>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .btn-mini {
    svg {
      @apply w-auto h-auto fill-current;
    }
  }
</style>
