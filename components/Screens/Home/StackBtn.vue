<script setup>
  import Popper from 'vue3-popper/dist/popper.esm'

  const props = defineProps({
    name: String,
    title: String,
  })
</script>

<template>
  <component :is="Popper" :content="props.title" arrow hover placement="top">
    <AudioHover>
      <div class="btn-third btn-mini aspect-square m-2">
        <Icon :name="props.name" />
      </div>
    </AudioHover>
  </component>
</template>

<style lang="scss">
  :root {
    --popper-theme-background-color: theme(colors.gray.950);
    --popper-theme-background-color-hover: theme(colors.gray.950);
    --popper-theme-text-color: theme(colors.white);
    --popper-theme-border-radius: theme(borderRadius.lg);
    --popper-theme-padding: theme(spacing.2) theme(spacing.4);
  }

  .popper {
    max-width: 290px;
    @apply text-xs drop-shadow-md text-center;
  }
</style>
