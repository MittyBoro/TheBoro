<script setup>
  const { aboutText } = defineProps({
    aboutText: String,
  })
</script>

<template>
  <section class="about-screen">
    <div class="pretitle">несколько слов</div>
    <div class="title">Обо мне</div>
    <Card>
      <div class="prose-sm max-w-lg" v-html="aboutText"></div>
    </Card>
  </section>
</template>

<style lang="scss" scoped>
  .pretitle-alt {
    margin: 0;
  }
  .link {
    &:hover {
      @apply text-primary-600;
      .ex-icon {
        @apply scale-100 opacity-100;
      }
    }
  }
  .ex-icon {
    margin-right: -1em;
    width: 1em;

    @apply inline h-auto ml-2 fill-primary-600 opacity-0 transition-all scale-0 duration-500;
  }
</style>
