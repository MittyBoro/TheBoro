<script setup>
  const transformProps = reactive({
    scale: 1,
    translateY: 0,
  })

  const DISTANCE_TO_OBJECT = 150

  const backgroundPosition = ref('100% 100%')
  const avatarDiv = ref(null)

  const imgTransform = computed(() => {
    return Object.entries(transformProps)
      .map(([key, value]) => `${key}(${value})`)
      .join(' ')
  })

  const handleMouseMove = (event) => {
    transformProps.scale = getValueByDistance(
      event,
      avatarDiv.value,
      1,
      1.8,
      DISTANCE_TO_OBJECT
    )
    transformProps.translateY =
      getValueByDistance(event, avatarDiv.value, 0, 8, DISTANCE_TO_OBJECT) + '%'

    let bgP = getValueByDistance(
      event,
      avatarDiv.value,
      100,
      0,
      DISTANCE_TO_OBJECT
    )
    backgroundPosition.value = `${bgP}% ${bgP}%`
  }

  onMounted(() => document.addEventListener('mousemove', handleMouseMove))
  onUnmounted(() => document.removeEventListener('mousemove', handleMouseMove))
</script>

<template>
  <div
    class="avatar w-40 h-40 mb-10 star"
    :style="{ backgroundPosition: backgroundPosition }"
    ref="avatarDiv"
  >
    <div class="avatar-img-wrap">
      <img
        src="~/assets/images/ava.png"
        alt=""
        :style="{ transform: imgTransform }"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .avatar {
    background-image: var(--gradietnt);
    background-size: 250% 250%;

    --gradietnt: linear-gradient(
      to bottom right,
      theme(colors.primary.600/0.75),
      theme(colors.primary.800/0.75),
      theme(colors.gray.900/0.75),
      theme(colors.gray.950/0.75)
    );

    @apply p-2 relative rounded-full;
    @apply shadow-2xl shadow-black;
    @apply transition-shadow;

    .avatar-img-wrap {
      @apply rounded-full overflow-hidden;
    }
  }
</style>
