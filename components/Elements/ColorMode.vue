<script setup>
  const { fixed } = defineProps({
    fixed: Boolean,
  })

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
  <Btn
    third
    square
    rounded
    :class="{ 'btn-fixed': fixed }"
    @click="toggleColorMode"
  >
    <span class="w-6">
      <Icon v-show="colorMode.value === 'dark'" name="moon" />
      <Icon v-show="colorMode.value === 'light'" name="sun" />
    </span>
  </Btn>
</template>

<style lang="scss" scoped>
  .btn-fixed {
    @apply fixed top-5 right-5 z-30;
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
