<script setup></script>

<template>
  <div class="card">
    <slot name="top"></slot>
    <div v-if="$slots.default" class="relative p-8"><slot></slot></div>
    <slot name="bottom"></slot>
  </div>
</template>

<style lang="scss" scoped>
  .card {
    @apply relative rounded-2xl transition overflow-clip;
    @apply bg-gradient-to-br;
    @apply shadow-xl shadow-gray-950/50;

    @apply dark:from-gray-950 dark:bg-gray-950 dark:bg-opacity-40 dark:shadow-gray-950/50;
    @apply from-gray-200 bg-gray-50 shadow-gray-800/10;
    @apply bg-opacity-40;

    &::after {
      content: '';

      @apply absolute inset-0 pointer-events-none;
    }
    &:hover {
      @apply bg-opacity-10;
    }
    &.hover {
      &:hover {
        @apply shadow-2xl;
        @apply dark:bg-primary-950  dark:shadow-black/50;
        @apply bg-primary-300 shadow-black/20;
        @apply bg-opacity-50;
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
