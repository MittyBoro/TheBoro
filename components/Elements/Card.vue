<script setup></script>

<template>
  <div class="card">
    <slot name="top"></slot>
    <div class="relative p-8"><slot></slot></div>
    <slot name="bottom"></slot>
  </div>
</template>

<style lang="scss" scoped>
  .card {
    @apply relative rounded-2xl transition overflow-hidden;
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
