<script setup>
  const { website } = defineProps({
    website: String,
  })

  const emit = defineEmits(['loaded'])

  const iframe = ref(null)

  onMounted(() => {
    iframe.value.addEventListener('load', () => {
      emit('loaded')
    })
  })
</script>

<template>
  <div class="absolute -inset-1">
    <iframe
      sandbox="allow-scripts"
      loading="lazy"
      :src="website"
      scrolling="no"
      width="100%"
      height="100%"
      frameborder="0"
      ref="iframe"
      class="bg-transparent blur-sm"
    ></iframe>
  </div>
</template>
