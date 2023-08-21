<script setup>
  const props = defineProps({
    name: String,
    title: String,
  })

  let audio
  onMounted(async () => {
    let audioSrc = (await import('~/assets/audios/1.mp3')).default
    audio = new Audio(audioSrc)
  })

  onUnmounted(() => (audio = null))

  const playSound = () => {
    audio.play()
  }
</script>
<template>
  <div @mouseenter="playSound">
    <slot></slot>
  </div>
</template>
