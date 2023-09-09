<script setup>
  const { pageData } = defineProps({
    pageData: Object,
  })

  const socialLinks = inject('socialLinks')
</script>

<template>
  <div class="hello-item text-center sm:text-left">
    <div class="lg:block sm:flex items-center gap-5 md:gap-10">
      <ScreensHomeAvatar class="mb-6 md:mb-10 mx-auto sm:mx-0" />
      <div class="font-head mb-6 shrink-0">
        <div class="text-xl lg:2xl xl:text-3xl dark:drop-shadow-xl">
          <span class="my-title" v-html="pageData.title"></span>
          <span class="pl-2 dark:text-white/50 text-black/70">
            <ClientOnly>
              <ScreensHomeTyping />
              <template #fallback>
                <span class="opacity-0">fullstack разработчик</span>
              </template>
            </ClientOnly>
          </span>
        </div>
      </div>
    </div>
    <div class="mb-6 dark:opacity-50 font-thin">
      {{ pageData.description }}
    </div>

    <div class="flex mt-auto pt-4 pb-10 sm:hidden">
      <HashLink to="#projects" class="mx-auto">
        <Btn mini class="lg:mr-5">Портфолио</Btn>
      </HashLink>
    </div>

    <div
      class="flex gap-3 sm:gap-4 sm:mt-auto flex-wrap justify-center sm:justify-normal"
    >
      <Btn
        v-for="item in socialLinks"
        :key="item.name"
        :icon="item.name"
        :to="item.url"
        is="link"
        target="_blank"
        third
        mini
        square
      />
      <HashLink to="#projects" class="ml-auto hidden sm:block">
        <Btn mini class="lg:mr-5">Портфолио</Btn>
      </HashLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .hello-item {
    --h-padding: theme(spacing.14);
    @apply flex flex-col min-h-[450px];
  }
  @screen sm {
    .hello-item {
      min-height: calc(100vh - var(--h-padding) * 2);
    }
  }
</style>

<style lang="scss">
  .hello-item .my-title b {
    @apply dark:text-primary-600 text-primary-500;
  }
</style>
