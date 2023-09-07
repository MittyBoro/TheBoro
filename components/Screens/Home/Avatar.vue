<script setup>
  const DISTANCE_TO_OBJECT = 200

  const avatarDiv = ref(null)

  const imgStyle = reactive({
    transform: '',
    transformProps: {
      scale: 1,
      translateY: 0,
    },
    filter: '',
  })
  watch(imgStyle.transformProps, (val) => {
    imgStyle.transform = Object.entries(val)
      .map(([key, value]) => `${key}(${value})`)
      .join(' ')
  })

  const avatarStyle = reactive({
    backgroundPosition: '100% 100%',
    animationPlayState: 'paused',
  })

  const colorMode = useColorMode()

  const getDistanceValues = (from, to, event) => {
    const value = getValueByDistance(
      event,
      avatarDiv.value,
      from,
      to,
      DISTANCE_TO_OBJECT
    ).toFixed(2)

    return parseFloat(value)
  }
  const avatarDistance = useAvatarDistance()

  const handleMouseMove = (event) => {
    avatarDistance.value = getDistanceValues(0, 1, event)

    if (colorMode.value !== 'dark') {
      return
    }

    // приближение и стили авы
    imgStyle.transformProps.scale = 1 + avatarDistance.value * 0.7
    imgStyle.transformProps.translateY = avatarDistance.value * 8 + '%'
    let saturate = (75 + avatarDistance.value * 50).toFixed(1)
    imgStyle.filter = `saturate(${saturate}%)`

    // изменение цвета рамки
    let bgP = 100 - avatarDistance.value * 100
    avatarStyle.backgroundPosition = `${bgP}% ${bgP}%`

    if (getDistanceToElement(event, avatarDiv.value) < DISTANCE_TO_OBJECT) {
      // вибрация фото
      avatarStyle.animationPlayState = 'running'
      let shift = (avatarDistance.value * 3).toFixed(0) + 'px'
      document.documentElement.style.setProperty('--animation-move', shift)
    } else {
      avatarStyle.animationPlayState = 'paused'
    }
  }

  onMounted(() => {
    document.addEventListener('mousemove', handleMouseMove)
  })

  onUnmounted(() => {
    document.removeEventListener('mousemove', handleMouseMove)
  })
</script>

<template>
  <div
    class="avatar w-28 sm:w-40 star aspect-square"
    :style="avatarStyle"
    ref="avatarDiv"
  >
    <NuxtLink to="/" class="avatar-img-wrap">
      <NuxtImg
        v-show="colorMode.value === 'dark'"
        src="/ava-dark.png"
        width="300"
        alt="Dima Boro"
        :style="imgStyle"
      />
      <NuxtImg
        v-show="colorMode.value === 'light'"
        src="/ava-light.jpg"
        width="200"
        alt="Dima Boro"
      />
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
  .avatar {
    background-image: var(--btn-gradietnt);
    background-position: 100% 100%;
    background-size: 250% 250%;
    animation: vibration 0.7s infinite;
    overflow: hidden;

    @apply p-1.5 sm:p-2 relative rounded-full;
    @apply shadow-2xl;
    @apply dark:shadow-black;
    @apply shadow-black/20;
    @apply transition-shadow;

    .avatar-img-wrap {
      @apply block rounded-full overflow-hidden select-none;
    }
    img {
      @apply dark:saturate-[75%];
    }
  }
  @keyframes vibration {
    0% {
      transform: translate(0, 0);
    }
    20% {
      transform: translate(
        var(--animation-move),
        calc(var(--animation-move) * -1)
      );
    }
    40% {
      transform: translate(
        calc(var(--animation-move) * -1),
        var(--animation-move)
      );
    }
    60% {
      transform: translate(
        calc(var(--animation-move) * 1.5),
        calc(var(--animation-move) * 0.5)
      );
    }
    80% {
      transform: translate(
        calc(var(--animation-move) * -0.5),
        calc(var(--animation-move) * -1.5)
      );
    }
    100% {
      transform: translate(0, 0);
    }
  }
</style>

<style lang="scss">
  :root {
    --animation-move: 0px;
  }
</style>
