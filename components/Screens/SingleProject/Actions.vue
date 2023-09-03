<script setup>
  const { project } = defineProps({
    project: Object,
  })
</script>
<template>
  <div class="flex">
    <Btn third mini class="mr-5">
      <Icon name="heart" class="w-4 h-4 mr-2" />
      <div v-text="project.likes || 0"></div>
    </Btn>
    <NuxtLink
      v-if="project.srcLink"
      :to="project.srcLink"
      target="_blank"
      class="mr-5"
    >
      <Btn second mini>
        <Icon name="github" class="w-4 h-4 mr-2" />
        <span>Исходный код</span>
      </Btn>
    </NuxtLink>
    <Btn
      v-if="project.website"
      is="a"
      :href="project.website"
      target="_blank"
      class="ml-auto"
      mini
    >
      Открыть сайт
      <Icon name="external" class="w-4 h-auto ml-2" />
    </Btn>
  </div>
</template>
