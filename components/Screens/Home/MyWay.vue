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
      <div class="w-2 rounded-lg bg-gray-950 shadow-xl shadow-gray-800"></div>
      <div class="ml-9 grid gap-10 w-full">
        <Box v-for="item in resume" :key="item.id">
          <div class="date mb-5">
            {{ item.attributes.period }}
          </div>
          <div
            class="text-sm leading-6 text-gray-400 max-w-lg"
            v-html="item.attributes.text"
          ></div>
        </Box>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .bg-box {
    overflow: visible;
    &::before {
      content: '';
      @apply absolute top-9 left-0 h-2 w-10 bg-gray-950 -translate-x-full;
    }
    &::after {
      content: '';

      @apply absolute top-9 -left-16 ml-2 -mt-3  w-8 h-8;
      @apply rounded-full bg-gray-900 border-8 border-gray-950;
      @apply transition-colors duration-300 scale-75;
    }
    .date {
      @apply text-xs text-white font-head transition-colors;
    }
    &:hover {
      &::after {
        @apply bg-primary-700;
      }
      .date {
        @apply text-primary-600;
      }
    }
  }
</style>
