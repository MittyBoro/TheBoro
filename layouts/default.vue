<template>
  <div class="bg-gradient-to-br from-gray-950 to-gray-900 text-gray-200">
    <slot></slot>
  </div>
</template>

<style lang="scss">
  .bg-box {
    @apply relative shadow-2xl shadow-gray-950 rounded-2xl p-8 bg-gradient-to-br from-gray-950 overflow-hidden transition;
    &::after {
      content: '';

      @apply absolute inset-0 pointer-events-none;
    }
    &:hover {
      @apply shadow-2xl shadow-black;
    }
    &.hover {
      &::before {
        content: '';
        @apply absolute inset-0  opacity-0 transition-opacity duration-300;
        @apply bg-gradient-to-br from-gray-950  to-primary-950;
      }
      &:hover {
        @apply shadow-2xl shadow-primary-950 -translate-y-2;
        &::before {
          @apply opacity-100;
        }
        img {
          @apply scale-110 opacity-100;
        }
      }
      img {
        @apply transition opacity-80;
      }
    }
  }
  .pretitle {
    letter-spacing: 0.5em;
    @apply mb-2 text-xs uppercase opacity-50;
  }
  .pretitle-alt {
    letter-spacing: 0.15em;
    @apply mb-2 text-xs uppercase opacity-40;
  }
  .title {
    @apply font-head text-4xl mb-8 tracking-widest;
  }
  .title-alt {
    @apply font-head text-xl tracking-widest;
  }
  .container {
    @apply max-w-screen-xl;
  }
  .btn,
  .btn-alt {
    @apply relative px-8 py-6 rounded-xl;
    @apply font-head text-center uppercase tracking-widest text-xs;
    @apply cursor-pointer transition-all duration-300 overflow-hidden;
    &:hover {
      @apply -translate-y-1;
    }
  }

  .btn {
    background-position: 100% 50%;
    background-size: 200%;

    @apply bg-gradient-to-r from-primary-600 via-primary-600 to-primary-800 text-white;
    @apply shadow-xl;

    &:hover {
      background-position: 0% 50%;
      @apply shadow-2xl shadow-primary-950;
    }
  }

  .btn-alt {
    @apply text-gray-400 border-gray-800 border-4;
    @apply shadow-xl shadow-gray-950;
    &:hover {
      @apply bg-gray-100 border-gray-100 shadow-xl shadow-gray-700 text-primary-600;
    }
  }
</style>
