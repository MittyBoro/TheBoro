<script setup>
  const { item } = defineProps({
    item: Object,
  })

  const attr = item.attributes
</script>

<template>
  <Card class="hover p-item">
    <NuxtLink
      :to="`/projects/${item.id}`"
      class="bg-gray-950 block shadow-lg mb-6 rounded-lg overflow-hidden cursor-pointer aspect-[16/10]"
    >
      <img
        :src="useExtImg(attr.thumb, 'small')"
        :alt="attr.title"
        class="object-cover object-center w-full h-full"
      />
    </NuxtLink>
    <div class="mb-7 flex justify-between items-center">
      <div class="pretitle-alt">
        <span v-for="cat in attr.categories.data" :key="cat.id">
          {{ cat.attributes.title }}
        </span>
      </div>
      <div class="pl-5 flex items-center link opacity-60">
        <Icon name="heart" class="w-4 h-auto mr-2" />
        <div class="font-head text-xs">
          {{ attr.likes || 0 }}
        </div>
      </div>
    </div>
    <NuxtLink :to="`/projects/${item.id}`" class="link title-alt my-auto pb-1">
      <span>{{ attr.title }}</span>
      <Icon name="external" class="ex-icon" />
    </NuxtLink>
  </Card>
</template>

<style lang="scss" scoped>
  .p-item {
    display: flex;
    flex-direction: column;
    height: 100%;
    img {
      @apply transition duration-500 opacity-80;
    }
    &:hover {
      img {
        @apply scale-105 opacity-100;
      }
    }
  }
  .pretitle-alt {
    margin: 0;
  }
  .link {
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
