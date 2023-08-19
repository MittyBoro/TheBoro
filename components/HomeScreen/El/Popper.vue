<script setup>
  import Popper from 'vue3-popper'
  defineComponent(Popper)

  const props = defineProps({
    name: String,
    title: String,
  })
</script>

<template>
  <Popper :content="props.title" arrow hover placement="top">
    <div class="btn-mini btn-alt btn-sq">
      <Icon :name="props.name" />
    </div>
  </Popper>
</template>

<style lang="scss" scoped>
  .btn-sq {
    @apply border-0 bg-gray-900 aspect-square m-2;
    &:hover {
      @apply shadow-lg shadow-gray-950;
    }
  }
</style>

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
