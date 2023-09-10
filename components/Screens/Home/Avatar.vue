<script setup>
  import Popper from 'vue3-popper/dist/popper.esm'

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
    let distance = avatarDiv.value?.offsetWidth * 1
    const value = getValueByDistance(
      event,
      avatarDiv.value,
      from,
      to,
      distance
    ).toFixed(2)

    return parseFloat(value)
  }
  const avatarDistance = useAvatarDistance()

  const handleTracking = (event) => {
    if (colorMode.value === 'light') {
      avatarDistance.value = 0
    } else {
      const position = getPositionByEvent(event)
      avatarDistance.value = getDistanceValues(0, 1, position)

      // приближение и стили авы
      imgStyle.transformProps.scale = 1 + avatarDistance.value * 0.7
      imgStyle.transformProps.translateY = avatarDistance.value * 8 + '%'
      let saturate = (75 + avatarDistance.value * 50).toFixed(1)
      imgStyle.filter = `saturate(${saturate}%)`
    }

    // изменение цвета рамки
    // остаётся на случай переключения режима
    let bgP = (100 - avatarDistance.value * 100).toFixed(2)
    avatarStyle.backgroundPosition = `${bgP}% ${bgP}%`

    if (avatarDistance.value > 0) {
      // вибрация фото
      avatarStyle.animationPlayState = 'running'
      let shift = (avatarDistance.value * 3).toFixed(0) + 'px'
      document.documentElement.style.setProperty('--animation-move', shift)
    } else {
      avatarStyle.animationPlayState = 'paused'
    }
  }

  const handleTrackingWrapper = (event) => {
    setTimeout(() => {
      handleTracking(event)
    }, 4)
  }

  const easterEgg = useEasterEgg()

  onMounted(() => {
    document.addEventListener('touchmove', handleTracking)
    document.addEventListener('mousemove', handleTrackingWrapper)
  })
  onUnmounted(() => {
    document.removeEventListener('touchmove', handleTracking)
    document.removeEventListener('mousemove', handleTrackingWrapper)
  })
</script>

<template>
  <div
    @click="easterEgg--"
    class="relative w-28 sm:w-40 star aspect-square user-select-none"
  >
    <Popper
      :content="`Жми меня${''.padEnd(easterEgg, '.')}🙃`"
      class="absolute inset-0 z-20"
      arrow
      right
      :show="easterEgg > 0 && easterEgg < 4"
    >
      <div class="avatar" :style="[avatarStyle]" ref="avatarDiv">
        <NuxtLink to="/" class="avatar-img-wrap">
          <NuxtPicture
            v-show="colorMode.value === 'dark'"
            src="/images/ava_dark.jpg"
            width="300"
            alt="Dima Boro"
            :imgAttrs="{ style: imgStyle }"
          />
          <NuxtPicture
            v-show="colorMode.value === 'light'"
            src="/images/ava_light.jpg"
            width="200"
            alt="Dima Boro"
          />
        </NuxtLink>
      </div>
    </Popper>
  </div>
</template>

<style lang="scss" scoped>
  .avatar {
    background-image: var(--btn-gradietnt);
    background-position: 100% 100%;
    background-size: 250% 250%;
    animation: vibration 0.7s infinite;

    @apply p-1.5 sm:p-2 relative rounded-full;
    @apply shadow-2xl;
    @apply dark:shadow-black;
    @apply shadow-black/20;
    @apply transition-shadow;

    .avatar-img-wrap {
      @apply block rounded-full overflow-hidden select-none transition-transform;
      &:active {
        transform: scale(1.2);
      }
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
