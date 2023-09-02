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
    class="delimiter relative pt-28 pb-24 blur-sm"
    :class="{ container: !props.full }"
  ></div>
</template>

<style lang="scss" scoped>
  .delimiter {
    &::before {
      content: '';
      @apply block mx-auto max-w-3xl border-t-4 border-gray-950 border-opacity-50;
    }
  }
</style>
