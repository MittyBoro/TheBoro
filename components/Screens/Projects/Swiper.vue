<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Navigation } from 'swiper/modules'
  import 'swiper/css'

  const { projects } = defineProps({
    projects: Array,
  })
  const onSwiper = (swiper) => {
    console.log(swiper)
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
      :navigation="{
        prevEl: '.sw_prev',
        nextEl: '.sw_next',
      }"
      rewind
      watchSlidesProgress
    >
      <swiper-slide v-for="item in projects" :key="item.id">
        <ScreensProjectsBox :item="item" />
      </swiper-slide>
    </swiper>

    <div class="mt-14 flex justify-center">
      <Btn type="second" square mini class="-scale-x-100 mx-3 sw_prev">
        <Icon name="arrow" />
      </Btn>
      <Btn type="second" square mini class="mx-3 sw_next">
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
