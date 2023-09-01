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

  const getValues = (from, to, event) => {
    const value = getValueByDistance(
      event,
      avatarDiv.value,
      from,
      to,
      DISTANCE_TO_OBJECT
    ).toFixed(2)

    return parseFloat(value)
  }

  const handleMouseMove = (event) => {
    // приближение и стили авы
    imgStyle.transformProps.scale = getValues(1, 1.7, event)
    imgStyle.transformProps.translateY = getValues(0, 8, event) + '%'
    let saturate = getValues(75, 130, event).toFixed(1)
    imgStyle.filter = `saturate(${saturate}%)`

    // изменение цвета рамки
    let bgP = getValues(100, 0, event)
    avatarStyle.backgroundPosition = `${bgP}% ${bgP}%`

    if (getDistanceToElement(event, avatarDiv.value) < DISTANCE_TO_OBJECT) {
      // вибрация фото
      avatarStyle.animationPlayState = 'running'
      let shift = getValues(0, 3, event).toFixed(0) + 'px'
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
  <div class="avatar w-40 h-40 star" :style="avatarStyle" ref="avatarDiv">
    <div class="avatar-img-wrap">
      <img src="~/assets/images/ava.png" alt="" :style="imgStyle" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .avatar {
    background-image: var(--btn-gradietnt);
    background-position: 100% 100%;
    background-size: 250% 250%;
    animation: vibration 0.7s infinite;

    @apply p-2 relative rounded-full;
    @apply shadow-2xl shadow-black;
    @apply transition-shadow;

    .avatar-img-wrap {
      @apply rounded-full overflow-hidden;
    }
    img {
      filter: saturate(75%);
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
