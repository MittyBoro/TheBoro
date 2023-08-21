<script setup>
  let xPos = ref(0)
  let yPos = ref(0)
  let opacity = ref(0)

  const MAIN_OPACITY = 0.6
  const DISTANCE_TO_OBJECTS = 200

  const handleMouseMove = (event) => {
    xPos.value = event.clientX
    yPos.value = event.clientY

    opacity.value = MAIN_OPACITY

    document.querySelectorAll('.blackhole, .star').forEach((element) => {
      const distance = getDistanceToElement(event, element)

      if (distance > DISTANCE_TO_OBJECTS) return

      if (element.classList.contains('star')) {
        opacity.value = getValueByDistance(
          event,
          element,
          MAIN_OPACITY,
          1,
          DISTANCE_TO_OBJECTS
        )
      } else if (element.classList.contains('blackhole')) {
        opacity.value = getValueByDistance(
          event,
          element,
          MAIN_OPACITY,
          0.2,
          DISTANCE_TO_OBJECTS
        )
      }
    })
  }
</script>

<template>
  <div
    class="wrapper relative bg-gradient-to-br from-gray-950 to-gray-900 text-white text-opacity-80"
    @mousemove="handleMouseMove"
  >
    <div
      class="mouse-light"
      :style="{ left: xPos + 'px', top: yPos + 'px', opacity: opacity }"
    ></div>
    <div class="relative">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .wrapper {
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
