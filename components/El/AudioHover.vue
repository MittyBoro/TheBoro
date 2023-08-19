<script setup>
  import Popper from 'vue3-popper/dist/popper.esm'

  const props = defineProps({
    name: String,
    title: String,
  })

  let audio
  onMounted(async () => {
    let audioSrc = (await import('~/assets/audios/1.mp3')).default
    audio = new Audio(audioSrc)
  })

  const playSound = () => {
    audio.play()
  }
</script>
<template>
  <div @mouseenter="playSound">
    <slot></slot>
  </div>
</template>
