<script setup>
  import Popper from 'vue3-popper/dist/popper.esm'

  const { project } = defineProps({
    project: Object,
  })

  const { prev, next } = inject('siblings')
</script>
<template>
  <div class="flex items-end gap-3">
    <div class="flex flex-wrap gap-3 mr-auto">
      <Btn
        v-if="project.website"
        :href="project.website"
        is="link"
        target="_blank"
        mini
      >
        <Icon name="external" class="w-4 h-auto mr-2" />
        <span>Сайт</span>
      </Btn>
      <Btn
        v-if="project.srcLink"
        :href="project.srcLink"
        is="link"
        target="_blank"
        third
        mini
        class="sm:order-2"
      >
        <Icon name="github" class="w-4 h-4 mr-2" />
        <span>Github</span>
      </Btn>
    </div>
    <div class="flex gap-3 ml-auto">
      <Popper
        v-if="prev"
        :content="prev.attributes.title"
        arrow
        hover
        placement="top"
      >
        <Btn :to="'/projects/' + prev.id" is="link" third square mini>
          <Icon name="arrow" class="rotate-180" />
        </Btn>
      </Popper>
      <Popper
        v-if="next"
        :content="next.attributes.title"
        arrow
        hover
        placement="top"
      >
        <Btn :to="'/projects/' + next.id" is="link" third square mini>
          <Icon name="arrow" />
        </Btn>
      </Popper>
    </div>
  </div>
</template>
