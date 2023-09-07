<script setup>
  const props = defineProps({
    full: {
      type: Boolean,
      default: false,
    },
  })
</script>

<template>
  <div
    class="delimiter relative sm:pt-28 sm:pb-24 pt-16 pb-12 blur-sm"
    :class="{ container: !props.full }"
  ></div>
</template>

<style lang="scss" scoped>
  .delimiter {
    &::before {
      content: '';
      @apply block mx-auto max-w-2xl border-t-4;
      @apply dark:border-gray-950/50;
      @apply border-gray-500/10;
    }
  }
</style>
