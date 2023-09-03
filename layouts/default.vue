<script setup>
  const MAIN_OPACITY = 0.8
  const DISTANCE_TO_OBJECTS = 200

  const lightStyle = reactive({
    top: 0,
    left: 0,
    opacity: MAIN_OPACITY,
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
  <div class="wrapper">
    <ClientOnly>
      <div class="mouse-light" :style="lightStyle"></div>
    </ClientOnly>
    <div class="relative pt-10">
      <slot></slot>
      <Delimiter />
      <ScreensFooter class="relative" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .wrapper {
    @apply relative min-h-screen;
    @apply bg-gradient-to-br from-gray-950 to-gray-900;
    @apply text-white text-opacity-80;
    overflow-x: clip;
    &::before {
      --bg-start: theme(colors.primary.700);
      content: '';
      position: absolute;
      inset: auto 0 0;
      height: 300px;
      background-image: radial-gradient(
        farthest-side at bottom,
        var(--bg-start) 0%,
        #0000
      );
      background-position: 50% 100%;
      background-size: 150% auto;
      opacity: 0.4;
    }
  }
  .mouse-light {
    position: fixed;
    width: 250px;
    height: 250px;
    filter: blur(100px);
    transform: translate(-50%, -50%);
    @apply bg-primary-700;
  }
</style>
