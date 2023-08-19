<script setup>
  let xPos = ref(0)
  let yPos = ref(0)
  let opacity = ref(0)

  const handleMouseMove = (event) => {
    xPos.value = event.clientX
    yPos.value = event.clientY

    opacity.value = 1

    document.querySelectorAll('.blackhole').forEach((element) => {
      if (element) {
        const avatarRect = element.getBoundingClientRect()
        const distance = Math.sqrt(
          (event.clientX - (avatarRect.left + avatarRect.width / 2)) ** 2 +
            (event.clientY - (avatarRect.top + avatarRect.height / 2)) ** 2
        )

        if (distance <= 400) {
          const maxDistance = 400
          opacity.value = distance / maxDistance
        }
      }
    })
  }
</script>

<template>
  <div
    class="relative bg-gradient-to-br from-gray-950 to-gray-900 text-white text-opacity-80"
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
  .mouse-light {
    position: fixed;
    width: 300px;
    height: 300px;
    filter: blur(100px);
    transform: translate(-50%, -50%);
    @apply bg-primary-900;
  }
</style>
