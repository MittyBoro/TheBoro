<script setup>
  const props = defineProps({
    audio: {
      type: Boolean,
      default: false,
    },
  })
</script>

<template>
  <div class="bg-box">
    <AudioHover v-if="props.audio">
      <slot></slot>
    </AudioHover>
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>

<style lang="scss" scoped>
  .bg-box {
    @apply relative p-8 rounded-2xl transition;
    @apply bg-gradient-to-br from-gray-950 bg-gray-950 bg-opacity-40;
    @apply shadow-xl shadow-gray-950;
    &::after {
      content: '';

      @apply absolute inset-0 pointer-events-none;
    }
    &:hover {
      @apply bg-opacity-10;
    }
    &.hover {
      &:hover {
        @apply shadow-2xl shadow-primary-950 -translate-y-1;
        @apply bg-primary-950 bg-opacity-50;
        img {
          @apply scale-110 opacity-100;
        }
      }
      img {
        @apply transition opacity-80;
      }
    }
  }
</style>
