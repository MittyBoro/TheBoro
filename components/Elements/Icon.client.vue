<script setup>
  const props = defineProps({
    name: String,
  })
  const IconSVG = await import(
    `../../assets/images/icons/${props.name}.svg?component`
  )
</script>

<template>
  <component :is="IconSVG" />
</template>
