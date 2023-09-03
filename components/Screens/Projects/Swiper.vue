<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Navigation } from 'swiper/modules'
  import 'swiper/css'

  const { projects } = defineProps({
    projects: Array,
  })

  const $swiper = ref(null)
  const onSwiper = (swiper) => {
    $swiper.value = swiper
  }
  const modules = [Navigation]
</script>

<template>
  <div>
    <swiper
      :modules="modules"
      :slides-per-view="3"
      :space-between="30"
      @swiper="onSwiper"
      rewind
      watchSlidesProgress
    >
      <swiper-slide v-for="item in projects" :key="item.id">
        <ScreensProjectsCard :item="item" />
      </swiper-slide>
    </swiper>

    <div class="mt-14 flex justify-center">
      <Btn
        second
        square
        mini
        class="-scale-x-100 mx-3 sw_prev"
        @click="$swiper.slidePrev()"
      >
        <Icon name="arrow" />
      </Btn>
      <Btn second square mini class="mx-3 sw_next" @click="$swiper.slideNext()">
        <Icon name="arrow" />
      </Btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .swiper {
    overflow: visible;
  }
  .swiper-slide {
    height: auto;
    opacity: 0.2;
    @apply transition-opacity;
    &-visible {
      opacity: 1;
    }
  }
</style>
