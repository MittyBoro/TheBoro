<script setup>
  const { item } = defineProps({
    item: Object,
  })

  const link = `/projects/${item.id}`

  const attr = item.attributes
</script>

<template>
  <Card class="hover max-w-2xl">
    <template #top>
      <div
        class="shadow-lg rounded-lg overflow-hidden cursor-pointer aspect-[16/10]"
      >
        <img
          :src="useExtImg(attr.thumb, 'small')"
          :alt="attr.title"
          class="image-item object-cover object-center w-full h-full"
        />
      </div>
      <div class="title-item">
        <div
          class="pretitle-row dark:text-white text-black flex justify-between items-center mb-4"
        >
          <div class="pretitle-alt">
            <span v-for="cat in attr.categories.data" :key="cat.id">
              {{ cat.attributes.title }}
            </span>
          </div>
          <div class="pl-5 flex items-center opacity-60">
            <Icon name="eye" class="w-4 h-auto mr-2" />
            <div class="font-head text-xs">
              {{ attr.views || 0 }}
            </div>
          </div>
        </div>
        <div class="title-alt max-w-md">
          <h2>{{ attr.title }}</h2>
        </div>
      </div>
      <div class="btns-item">
        <NuxtLink :to="link" class="absolute inset-0" />
        <Btn is="link" :to="link" mini>
          <Icon name="eye" class="w-4 h-4 mr-2" />
          <span>Подробнее</span>
        </Btn>
        <Btn v-if="attr.website" :to="attr.website" is="link" third mini>
          <span>Сайт</span>
          <Icon name="external" class="w-4 h-4 ml-2" />
        </Btn>
      </div>
    </template>
  </Card>
</template>

<style lang="scss" scoped>
  .image-item {
    mask-image: linear-gradient(to bottom, #000d, #0005 50%, #0001 99%);
    @apply transition duration-300 filter;
  }

  .btns-item {
    @apply absolute inset-0 flex items-center justify-center gap-5 p-8;
    @apply opacity-0 -translate-y-20;
    @apply transition duration-300;
  }

  .title-item {
    @apply absolute left-0 right-0 bottom-0 px-8 pb-8;
    @apply transition-opacity duration-300;
  }

  .card {
    display: flex;
    flex-direction: column;
    height: 100%;
    .pretitle-row {
      @apply transition duration-300;
    }
    &:hover {
      .btns-item {
        @apply opacity-100 translate-y-0;
      }
      .image-item {
        @apply blur opacity-70 scale-110;
      }

      .pretitle-row {
        @apply opacity-0;
      }
      .title-item {
        opacity: 0.5;
        @apply blur-[1px];
      }
    }
  }
  .pretitle-alt {
    margin: 0;
  }
  .ex-icon {
    margin-right: -1em;
    width: 1em;

    @apply inline h-auto ml-2 fill-primary-600 opacity-0 transition-all scale-0 duration-500;
  }
</style>
