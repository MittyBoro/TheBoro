<script setup>
  const props = defineProps({
    muted: Boolean,
  })

  const playSound = async () => {
    if (props.muted) return
    const audio = new Audio()
    audio.src = (await import('~/assets/audios/1.mp3')).default
    setTimeout(() => {
      audio.play()
    }, 40)
  }
</script>
<template>
  <span @click="playSound">
    <slot></slot>
  </span>
</template>
