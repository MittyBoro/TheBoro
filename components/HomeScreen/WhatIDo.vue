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
  <div>
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
</template>

<style lang="scss" scoped>
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
