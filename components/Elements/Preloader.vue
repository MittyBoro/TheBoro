<script setup>
  import svgRaw from '~/assets/images/logo.svg?raw'

  const isLoaded = ref(false)

  const easterEgg = useEasterEgg()

  const resetEasterEgg = () => {
    easterEgg.value = 4
  }
  const setLoaded = () => {
    isLoaded.value = true
  }

  const isEgg = computed(() => {
    return isLoaded.value
  })

  onMounted(() => {
    window.addEventListener('load', setLoaded)
    if (document.readyState === 'complete') {
      setLoaded()
    }
  })
  onUnmounted(() => {
    window.removeEventListener('load', setLoaded)
  })
</script>

<template>
  <div
    @dblclick="resetEasterEgg"
    class="preloader"
    :class="{ loaded: isLoaded && easterEgg > 0, 'cursor-pointer': isEgg }"
  >
    <div class="p-wrapper">
      <div class="p-circle"></div>
      <svg class="p-icon" v-html="svgRaw"></svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .preloader {
    position: fixed;
    inset: 0;
    @apply p-10 bg-gray-200 dark:bg-gray-950;
    @apply transition-all duration-300 delay-300;
    overflow: hidden;
    z-index: 999;
    &.loaded {
      opacity: 0;
      visibility: hidden;
      .p-icon {
        opacity: 0;
      }
      .p-circle {
        transform: scale(1.5);
        opacity: 0;

        &::before,
        &::after {
          border-width: 0;
        }
      }
      // @apply opacity-0;
    }
    .p-wrapper {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .p-icon,
    .p-circle {
      @apply transition duration-500;
    }
    .p-icon {
      position: absolute;
      @apply h-28 m-auto fill-primary-600;
      animation: pulseSize 1.5s infinite ease-in-out;
    }
    .p-circle {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      &::before,
      &::after {
        content: '';
        position: absolute;
        @apply border-[12px] border-primary-600 border-r-transparent border-b-0 rounded-full animate-spin transition-all;
      }
      &::before {
        @apply w-80 h-80;
        animation-duration: 1.5s;
      }
      &::after {
        @apply w-60 h-60;
        @apply border-current border-r-transparent;
        animation-duration: 1.4s;
      }
    }
  }
  @keyframes pulseSize {
    from,
    to {
      transform: scale(1);
    }
    60% {
      transform: scale(1.1);
    }
  }
</style>
