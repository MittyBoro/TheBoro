<script setup>
  const colorMode = useColorMode()

  const toggleColorMode = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'

    document.documentElement.classList.add('transitioning')

    setTimeout(() => {
      document.documentElement.classList.remove('transitioning')
    }, 100)
  }

  // setInterval(toggleColorMode, 100)
</script>

<template>
  <Btn third square rounded class="btn-mode" @click="toggleColorMode">
    <Icon v-show="colorMode.value === 'dark'" name="moon" />
    <Icon v-show="colorMode.value === 'light'" name="sun" />
  </Btn>
</template>

<style lang="scss" scoped>
  .btn-mode {
    @apply fixed top-4 right-4 z-30;
    :deep(svg) {
      @apply scale-125;
    }
  }
</style>

<style lang="scss">
  html.transitioning {
    *,
    *::before,
    *::after {
      transition: none !important;
    }
  }
</style>
