<script setup>
  const props = defineProps({
    muted: Boolean,
  })
  const audio = ref(null)

  const audioInit = async () => {
    audio.value = new Audio()
    audio.value.src = (await import('~/assets/audios/1.mp3')).default
  }

  if (!props.muted) {
    onMounted(async () => {
      document.addEventListener('click', audioInit, { once: true })
    })

    onUnmounted(() => {
      document.removeEventListener('click', audioInit)
      audio.value = null
    })
  }

  const playSound = () => {
    audio.value?.play()
  }
</script>
<template>
  <span @mouseenter="playSound">
    <slot></slot>
  </span>
</template>
