<script setup>
  const { project } = defineProps({
    project: Object,
  })

  const goToPrev = () => {
    useRouter().go(-1)
  }

  const categoriesStr = computed(() => {
    const list = project.categories.data.map((item) =>
      item.attributes.title.trim()
    )
    return list.join(', ')
  })
  const tags = computed(() => {
    const list = project.tags.data.map((item) => item.attributes.title.trim())
    return list
  })
</script>
<template>
  <section class="project-screen container -mt-10">
    <Card>
      <template #top>
        <ClientOnly>
          <Btn @click="goToPrev()" third square class="btn-close" />
        </ClientOnly>
        <div class="relative pt-64">
          <div class="actions-el">
            <div class="container-md mt-auto">
              <ScreensSingleProjectActions
                class="justify-start"
                :project="project"
              />
            </div>
          </div>
          <div class="mask-background pointer-events-none aspect-[16/9]">
            <img
              loading="lazy"
              :src="useExtImg(project.thumb)"
              class="mask-image object-cover object-top w-full h-full"
              :alt="project.title"
            />
          </div>
        </div>
      </template>
      <template #default>
        <div class="container-md mb-10">
          <div class="drop-shadow-sm">
            <div class="pretitle pb-5">{{ categoriesStr }}</div>
            <div class="title" v-html="project.title"></div>
          </div>

          <div
            class="mt-10 flex gap-3 flex-wrap"
            v-if="project.tags.data.length"
          >
            <Btn
              v-for="item in tags"
              third
              nano
              class="pointer-events-none whitespace-nowrap btn-tag"
            >
              <span>{{ item }}</span>
            </Btn>
          </div>

          <div class="prose py-10" v-html="project.description"></div>

          <ScreensSingleProjectActions :project="project" />
        </div>
      </template>
    </Card>
  </section>
</template>

<style lang="scss" scoped>
  .container-md {
    @apply container max-w-3xl;
  }
  .mask-background {
    --spacing-top: theme(spacing.72);
    @apply -inset-0.5 absolute blur-[1.5px] transition-opacity duration-300;
    mask-image: linear-gradient(
      to bottom,
      #000e 0%,
      #0004 var(--spacing-top),
      transparent 110vh
    );
  }
  .actions-el {
    @apply absolute flex items-center justify-center inset-0 z-10 -top-16 transition-all duration-500;
    opacity: 0;
    &:hover {
      @apply translate-y-0 top-0;
      opacity: 1;
      & ~ div {
        opacity: 0.2;
        @apply blur-sm;
      }
    }
  }
  .pretitle {
    opacity: 0.7;
  }
  .pretitle,
  .title {
    margin: 0;
  }
  .mask-image {
    mask-image: linear-gradient(to bottom, #000e 0%, transparent 100%);
  }
  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    @apply text-2xl text-center bg-gray-700 bg-opacity-10 shadow-xl z-20;
    border-radius: 0 0 0 1rem;
    &:hover {
      @apply bg-gray-700 bg-opacity-50;
    }
    &::after {
      content: '×';
      margin-left: 5px;
    }
    :deep(.btn-inner) {
      display: none;
    }
  }

  .card {
    @apply rounded-t-none rounded-b-3xl;
  }
</style>
