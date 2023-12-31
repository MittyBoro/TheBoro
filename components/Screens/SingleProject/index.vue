<script setup>
  const { project } = defineProps({
    project: Object,
  })

  const imageRef = ref(null)

  const categoriesStr = computed(() => {
    const list = project.categories.data.map((item) =>
      item.attributes.title.trim()
    )
    return list.join(', ')
  })

  onMounted(() => {
    useImgSetLoaded(imageRef, 'opacity-100')
  })
</script>
<template>
  <section class="project-screen container -mt-10">
    <Card>
      <template #top>
        <div class="absolute top-0 right-0 bottom-0 z-30 pointer-events-none">
          <div class="sticky top-4 flex gap-3 sm:gap-5 pointer-events-auto">
            <ColorMode class="btn-mode" />
            <Btn
              is="link"
              to="/#projects"
              third
              square
              icon="close"
              class="btn-close"
            ></Btn>
          </div>
        </div>
        <div class="mask-background pointer-events-none aspect-[16/9]">
          <img
            loading="lazy"
            :src="useStrapiImg(project.thumb, 'large')"
            class="mask-image object-cover object-top w-full h-full opacity-0 transition-opacity duration-300 select-none"
            :alt="project.title"
            ref="imageRef"
          />
        </div>

        <div class="container-md container relative">
          <div class="aspect-[16/8]"></div>
          <div class="drop-shadow-sm">
            <div class="flex pb-5">
              <div
                class="pretitle flex items-center dark:text-white text-black drop-shadow-sm"
              >
                <NuxtLink to="/#projects" class="link">Проекты</NuxtLink>
                <span class="px-1.5 md:px-3 opacity-40" v-if="categoriesStr">
                  /
                </span>
                <span class="opacity-80">{{ categoriesStr }}</span>
              </div>
              <div class="ml-auto pl-5 flex items-center opacity-60">
                <Icon name="eye" class="w-4 h-auto mr-2" />
                <div class="font-head text-xs">
                  {{ project.views || 0 }}
                </div>
              </div>
            </div>
            <div class="title"><h1 v-html="project.title"></h1></div>
          </div>

          <div
            class="mt-10 flex gap-3 flex-wrap"
            v-if="project.tags.data?.length"
          >
            <Btn
              v-for="item in project.tags.data"
              third
              nano
              class="pointer-events-none whitespace-nowrap btn-tag"
            >
              <span>{{ item.attributes.title.trim() }}</span>
            </Btn>
          </div>

          <div class="prose pt-10" v-html="project.description"></div>
        </div>
        <div class="actions-el mt-3">
          <div class="container-md container">
            <ScreensSingleProjectActions
              class="justify-start"
              :project="project"
            />
          </div>
        </div>
      </template>
    </Card>
  </section>
</template>

<style lang="scss" scoped>
  .card {
    @apply rounded-t-none;
  }

  .project-screen {
    @apply -mx-3 w-auto sm:mx-auto;
  }
  .btn-close {
    @apply rounded-none rounded-l-xl;
  }
  .btn-close,
  .btn-mode {
    @apply dark:bg-black/60 bg-white/80;
    &:not(:hover) {
      opacity: 0.7;
    }
  }
  .container-md {
    @apply md:max-w-3xl;
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
    @apply sticky z-20 -bottom-5;
    @apply pt-7 pb-10;
    @apply bg-gradient-to-b from-transparent via-40%;
    @apply dark:via-gray-950/70 via-40% dark:to-gray-950/90;
    @apply via-gray-200/70 to-gray-200/90;
    // &:hover {
    //   @apply translate-y-0 top-0;
    //   opacity: 1;
    //   & ~ div {
    //     opacity: 0.2;
    //     @apply blur-sm;
    //   }
    // };;
  }
  .pretitle {
    opacity: 1;
  }
  .pretitle,
  .title {
    margin: 0;
  }
  .mask-image {
    mask-image: linear-gradient(to bottom, #000e 0%, transparent 100%);
  }

  .prose {
    --tw-prose-bullets: currentColor;
  }
  .prose
    :where(.prose > ul > li > *:first-child):not(
      :where([class~='not-prose'], [class~='not-prose'] *)
    ) {
    @apply my-1;
  }
  .prose :where(p):not(:where([class~='not-prose'], [class~='not-prose'] *)) {
    @apply my-2;
  }
</style>
