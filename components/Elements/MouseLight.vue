<script setup>
  const colorMode = useColorMode()

  const MAIN_OPACITY = colorMode.value === 'dark' ? 0.8 : 1
  const DISTANCE_TO_OBJECTS = 200

  const lightStyle = reactive({
    top: 0,
    left: 0,
    opacity: 0,
  })

  const handleMouseMove = (event) => {
    lightStyle.top = event.clientY + 'px'
    lightStyle.left = event.clientX + 'px'

    lightStyle.opacity = MAIN_OPACITY

    document.querySelectorAll('.blackhole, .star').forEach((element) => {
      const distance = getDistanceToElement(event, element)

      if (distance > DISTANCE_TO_OBJECTS) return

      if (element.classList.contains('star')) {
        lightStyle.opacity = getValueByDistance(
          event,
          element,
          MAIN_OPACITY,
          1,
          DISTANCE_TO_OBJECTS
        )
      } else if (element.classList.contains('blackhole')) {
        lightStyle.opacity = getValueByDistance(
          event,
          element,
          MAIN_OPACITY,
          0.2,
          DISTANCE_TO_OBJECTS
        )
      }
    })
  }

  onMounted(() => {
    document.addEventListener('mousemove', handleMouseMove)
  })
  onUnmounted(() => {
    document.removeEventListener('mousemove', handleMouseMove)
  })
</script>

<template>
  <div class="mouse-light" :style="lightStyle"></div>
</template>

<style lang="scss" scoped>
  .mouse-light {
    position: fixed;
    width: 220px;
    height: 220px;
    transform: translate(-50%, -50%);
    @apply transition-opacity blur-[80px];
    @apply dark:bg-primary-700;
    @apply bg-primary-300;
  }
</style>
