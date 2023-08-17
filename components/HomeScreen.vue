<script setup>
const whatIDo = [
  {
    title: "Лендинги",
    icon: "globe",
    description:
      "Pixel-perfect вёрстка по вашему дизайну. Анимация, хуяция - всё то, по чему текут всякие ебанаты. Но не шибко богато, я на фронте не ветеран с кучей медалей",
  },
  {
    title: "Интернет магазины",
    icon: "shopping-cart",
    description:
      "Многостраничный сайт с удобной и функциональной панелью управления, что бы ваш тупой менеджер не сильно объебался, заливая товары на ваш чудо-сайт",
  },
  {
    title: "Телеграм боты",
    icon: "tg-alt",
    description:
      "Запилю бота для продажи вонючих носков в вашем вейп-шопе, чтоб школьники могли быстренько купить себе этот маленький член сатаны, а товарищ майор не посадил вас за это на бутылку",
  },
  {
    title: "Кастомные приложения",
    icon: "play",
    description:
      "Прочие дикие штуки, которые вам лезут в голову — сайт как ВКонтакте, порносайт с пизделовом материала прямо с вебок, монстр Франкенштейна, гонящий вечером орущих детей спать",
  },
];
</script>

<template>
  <div
    class="home-screen container min-h-screen items-start grid grid-cols-7 gap-10"
  >
    <div class="col-span-3 py-16 sticky top-0">
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
        создания веб-приложений, которые вдохновляют и удивляют! Готов
        превратить вашу концепцию в функциональную реальность!
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

    <div class="col-span-4 py-16">
      <div class="pretitle">Ништяки</div>
      <div class="title">Что я делаю</div>

      <div class="grid grid-cols-2 gap-x-8 gap-y-10">
        <template v-for="item in whatIDo" :key="item.icon">
          <div class="bg-box">
            <div class="flex mb-5 items-center">
              <div class="w-14 h-14 mr-5 shrink-0">
                <Icon :name="item.icon" class="fill-primary-700" />
              </div>
              <div class="title-alt">{{ item.title }}</div>
            </div>
            <div class="text-sm leading-6 text-gray-500">
              {{ item.description }}
            </div>
          </div>
        </template>
      </div>
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
.bg-box {
  svg {
    @apply transition-transform;
  }
  &:hover {
    svg {
      @apply -translate-x-2;
    }
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
