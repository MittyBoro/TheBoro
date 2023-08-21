<script setup>
  const props = defineProps({
    name: String,
  })
  const IconSVG = await import(
    `../../assets/images/${props.name}.svg?component`
  )
</script>

<template>
  <component :is="IconSVG" />
</template>
