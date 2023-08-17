<script setup>
import VKIcon from "~/assets/images/vk.svg?component";
import TGIcon from "~/assets/images/tg.svg?component";
import IGIcon from "~/assets/images/ig.svg?component";

import GlobeIcon from "~/assets/images/globe.svg?component";
import ShoppingIcon from "~/assets/images/shopping-cart.svg?component";
import TGAltIcon from "~/assets/images/tg-alt.svg?component";
import PlayIcon from "~/assets/images/play.svg?component";

const whatIDo = [
  {
    title: "Лендинги",
    icon: GlobeIcon,
    description:
      "Pixel-perfect вёрстка по вашему дизайну. Анимация, хуяция - всё то, по чему текут всякие ебанаты. Но не шибко богато, я на фронте не ветеран с кучей медалей",
  },
  {
    title: "Интернет магазины",
    icon: ShoppingIcon,
    description:
      "Многостраничный сайт с удобной и функциональной панелью управления, что бы ваш тупой менеджер не сильно объебался, заливая товары на ваш чудо-сайт",
  },
  {
    title: "Телеграм боты",
    icon: TGAltIcon,
    description:
      "Запилю бота для продажи вонючих носков в вашем вейп-шопе, чтоб школьники могли быстренько купить себе этот маленький член сатаны, а товарищ майор не посадил вас за это на бутылку",
  },
  {
    title: "Кастомные приложения",
    icon: PlayIcon,
    description:
      "Прочие дикие штуки, которые вам лезут в голову — сайт как ВКонтакте, порносайт с пизделовом материала прямо с вебок, монстр Франкенштейна, гонящий вечером орущих детей спать",
  },
];
</script>

<template>
  <div
    class="home-screen mx-auto max-w-screen-xl min-h-screen bg text-gray-200 items-start grid grid-cols-7 gap-10"
  >
    <div class="col-span-3 py-16 sticky top-0">
      <div
        class="w-40 h-40 mb-10 bg-gray-950 rounded-full shadow-xl border-4 border-primary-600"
      ></div>
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

      <div class="pretitle text-gray-500">Я здесь:</div>
      <div class="flex mt-3">
        <div class="social-icon">
          <div class="w-4">
            <IGIcon />
          </div>
        </div>
        <div class="social-icon"><TGIcon /></div>
        <div class="social-icon"><VKIcon /></div>
      </div>
    </div>

    <div class="col-span-4 py-16">
      <div class="mb-10">
        <div class="pretitle">Ништяки</div>
        <div class="title">Что я делаю</div>

        <div class="grid grid-cols-2 gap-x-6">
          <template v-for="item in whatIDo" :key="title">
            <div class="bg-box">
              <div class="flex mb-5 items-center">
                <div class="w-14 h-14 mr-5">
                  <component
                    :is="item.icon"
                    class="fill-primary-700"
                  ></component>
                </div>
                <div class="title-2">{{ item.title }}</div>
              </div>
              <div class="text-sm leading-6">{{ item.description }}</div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.social-icon {
  cursor: pointer;
  @apply w-12 h-12 border-gray-300 border-4 rounded flex justify-center items-center transition-all shadow-lg shadow-gray-800 mr-6;
  svg {
    max-width: 100%;

    fill: currentColor;

    @apply w-5 h-5;
  }
  &:hover {
    @apply bg-gray-50 border-gray-50 shadow-xl shadow-gray-700 text-primary-600 -translate-y-1;
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
</style>
