<script setup>
const list = [
  {
    image: "https://picsum.photos/id/111/500/300",
    tags: "сайт, сайтец, сайтище",
    title: "Невъебенный Мммегасайт",
  },
  {
    image: "https://picsum.photos/id/220/500/300",
    tags: "сайт, сайтец, сайтище",
    title: "Невъебенный Мммегасайт",
  },
  {
    image: "https://picsum.photos/id/397/500/300",
    tags: "сайт, сайтец, сайтище",
    title: "Невъебенный Мммегасайт",
  },
  {
    image: "https://picsum.photos/id/402/500/300",
    tags: "сайт, сайтец, сайтище",
    title: "Невъебенный Мммегасайт",
  },
  {
    image: "https://picsum.photos/id/550/500/300",
    tags: "сайт, сайтец, сайтище",
    title: "Невъебенный Мммегасайт",
  },
  {
    image: "https://picsum.photos/id/600/500/300",
    tags: "сайт, сайтец, сайтище",
    title: "Невъебенный Мммегасайт",
  },
];
</script>

<template>
  <div class="projects-screen container">
    <div class="text-center">
      <div class="pretitle">отборные шедевры</div>
      <div class="title">Портфолио</div>
    </div>
    <div class="grid grid-cols-3 gap-x-8 gap-y-10">
      <template v-for="item in list" :key="item.image">
        <div class="bg-box hover">
          <div class="relative">
            <div
              class="bg-gray-950 shadow-lg mb-6 rounded-lg overflow-hidden cursor-pointer aspect-[4/3]"
            >
              <img
                :src="item.image"
                :alt="item.title"
                class="object-center object-cover aspect-[4/3]"
              />
            </div>
            <div class="flex justify-between">
              <div class="pretitle-alt">{{ item.tags }}</div>
            </div>
            <div class="ex-link title-alt mt-3 mb-1">
              <span>{{ item.title }}</span>
              <Icon name="external" class="ex-icon" />
            </div>
          </div>
        </div>
      </template>
      <div class="mt-4 col-start-2 btn-alt">Показать ещё</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ex-link {
  cursor: pointer;
  @apply transition-colors;
  &:hover {
    @apply text-primary-600;
    .ex-icon {
      @apply scale-100 opacity-100;
    }
  }
}
.ex-icon {
  margin-right: -1em;

  width: 1em;

  @apply inline h-auto ml-2 fill-primary-600 opacity-0 transition-all scale-0 duration-500;
}
</style>
