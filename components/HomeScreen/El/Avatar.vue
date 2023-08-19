<script setup>
  const scale = ref(1)
  const avatarDiv = ref(null)

  const maxScale = 1

  const handleMouseMove = (event) => {
    xPos.value = event.clientX
    yPos.value = event.clientY

    opacity.value = mainOpacity

    const element = $refs.avatar

    if (element) {
      const avatarRect = element.getBoundingClientRect()
      const distance =
        Math.sqrt(
          (event.clientX - (avatarRect.left + avatarRect.width / 2)) ** 2 +
            (event.clientY - (avatarRect.top + avatarRect.height / 2)) ** 2
        ) - 60

      if (distance <= 200) {
        const maxDistance = 200
        if (element.classList.contains('star')) {
          opacity.value =
            mainOpacity + (1 - mainOpacity) * (1 - distance / maxDistance)
        } else if (element.classList.contains('blackhole')) {
          opacity.value = (mainOpacity * distance) / maxDistance
        }
      }
    }
  }
</script>

<template>
  <div class="avatar w-40 h-40 mb-10 star" ref="avatarDiv">
    <div class="avatar-img-wrap">
      <img src="~/assets/images/ava.png" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .avatar {
    background-image: var(--gradietnt);
    background-position: 100% 100%;
    background-size: 250% 250%;

    --gradietnt: linear-gradient(
      to bottom right,
      theme(colors.primary.600/0.75),
      theme(colors.primary.800/0759),
      theme(colors.gray.900/0.75),
      theme(colors.gray.950/0.75)
    );

    @apply p-2 relative rounded-full;
    @apply shadow-2xl shadow-black;
    @apply transition-all duration-300;

    .avatar-img-wrap {
      @apply rounded-full overflow-hidden;
    }
    img {
      @apply transition scale-110;
    }
    &:hover {
      background-position: 0 0;
      @apply shadow-2xl shadow-primary-800;
      img {
        @apply scale-150;
      }
    }
  }
</style>
