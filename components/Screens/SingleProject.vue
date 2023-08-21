<script setup>
  const $router = useRouter()
  const goToPrev = () => {
    $router.go(-1)
    // $route.params.slug
  }
</script>
<template>
  <section class="project-screen container py-18">
    <Box class="rounded-tl-3xl">
      <div class="grid grid-cols-9 gap-10">
        <Btn @click="goToPrev()" type="third" mini square class="btn-close" />

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
          <div class="pretitle">aaaa</div>
          <div class="title">Lorem ipsum dolor sit amet</div>
          <div class="max-w-lg leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            distinctio assumenda explicabo veniam temporibus eligendi.
            Consectetur adipisicing elit. Cupiditate distinctio assumenda.
            dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa
            quas iusto hic minus!
          </div>

          <div class="flex mt-auto pt-10">
            <Btn type="third" mini class="mr-5">
              <Icon name="heart" class="w-4 h-4 mr-2" />
              <div>247</div>
            </Btn>
            <Btn type="third" mini class="mr-5">
              <Icon name="github" class="w-4 h-4 mr-2" />
              <span>Исходный код</span>
            </Btn>
            <Btn mini class="ml-auto">
              Открыть сайт
              <Icon name="external" class="w-4 h-auto ml-2" />
            </Btn>
          </div>
        </div>
      </div>
    </Box>
  </section>
</template>

<style lang="scss" scoped>
  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    @apply text-2xl rounded-2xl text-center;
    &::after {
      content: '×';
    }
    :deep(.btn-inner) {
      display: none;
    }
  }
</style>
