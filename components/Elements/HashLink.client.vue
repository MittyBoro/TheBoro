<script setup>
  const props = defineProps({
    to: String,
  })
  const scrollTo = () => {
    const targetElement = document.querySelector(props.to)
    const targetOffsetTop = targetElement ? targetElement.offsetTop : 0
    window.scrollTo({ top: targetOffsetTop, behavior: 'smooth' })
  }
</script>

<template>
  <div @click="scrollTo">
    <slot></slot>
  </div>
</template>
