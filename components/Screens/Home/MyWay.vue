<script setup>
  const resume = await useApi().find('resumes', {
    sort: ['rank:asc'],
  })
</script>

<template>
  <div>
    <div class="pretitle">Long story...</div>
    <div class="title">Мой опыт</div>

    <div class="flex">
      <div
        class="w-2 rounded-lg shadow-xl dark:shadow-gray-800 dark:bg-gray-950 shadow-black/20 bg-gray-300"
      ></div>
      <div class="ml-9 grid gap-6 w-full">
        <Card v-for="item in resume" :key="item.id">
          <div class="date mb-5">
            {{ item.attributes.period }}
          </div>
          <div
            class="text-sm leading-6 max-w-lg prose"
            v-html="item.attributes.text"
          ></div>
        </Card>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .card {
    overflow: visible;
    &::before {
      content: '';
      @apply absolute top-9 left-0 h-2 w-10  -translate-x-full;
      @apply dark:bg-gray-950 bg-gray-300;
    }
    &::after {
      content: '';

      @apply absolute top-9 -left-16 ml-2 -mt-3  w-8 h-8;
      @apply rounded-full border-8;
      @apply dark:bg-gray-900 dark:border-gray-950;
      @apply bg-white border-gray-300;
      @apply transition-colors duration-300 scale-75;
    }
    .date {
      @apply text-xs font-head transition opacity-60 tracking-widest;
    }
    &:hover {
      &::after {
        @apply dark:bg-primary-700 bg-primary-500;
      }
      .date {
        @apply dark:text-primary-600 text-primary-500 opacity-100;
      }
    }
  }
</style>
