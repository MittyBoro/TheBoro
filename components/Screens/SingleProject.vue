<script setup>
  const $router = useRouter()
  const goToPrev = () => {
    $router.go(-1)
  }
</script>
<template>
  <section class="project-screen container">
    <Box>
      <div class="grid grid-cols-9 gap-10">
        <div @click="goToPrev()" class="btn-close btn-alt btn-mini"></div>

        <div class="col-span-4 sticky top-10">
          <div
            class="bg-gray-950 shadow-lg mb-6 rounded-lg overflow-hidden mt-4"
          >
            <img
              src="https://picsum.photos/id/78/900/700"
              class="w-full"
              alt=""
            />
          </div>
        </div>

        <div class="col-span-5 py-6 flex flex-col">
          <div class="pretitle">{{ $route.params.slug }}</div>
          <div class="title">Lorem ipsum dolor sit amet</div>
          <div class="max-w-lg leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            distinctio assumenda explicabo veniam temporibus eligendi.
            Consectetur adipisicing elit. Cupiditate distinctio assumenda.
            dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa
            quas iusto hic minus!
          </div>

          <div class="flex mt-auto pt-10">
            <AudioHover class="btn-alt btn-mini mr-4">
              <span class="flex">
                <Icon name="heart" class="w-4 h-auto mr-2" />
                <div>247</div>
              </span>
            </AudioHover>
            <AudioHover class="btn-alt btn-mini mr-4">
              <span class="flex">
                <Icon name="github" class="w-4 h-auto mr-2" />
                Исходный код
              </span>
            </AudioHover>
            <AudioHover class="btn-alt btn-mini ml-auto">
              <span class="flex">
                Открыть сайт
                <Icon name="external" class="w-4 h-auto ml-2" />
              </span>
            </AudioHover>
          </div>
        </div>
      </div>
    </Box>
  </section>
</template>

<style lang="scss" scoped>
  .btn-close {
    position: absolute;
    top: -5px;
    right: -5px;
    @apply aspect-square rounded-full;
    &::before {
      content: '×';
      @apply text-2xl;
    }
  }
</style>
