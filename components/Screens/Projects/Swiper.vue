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
      :slides-per-view="1"
      :space-between="16"
      @swiper="onSwiper"
      rewind
      watchSlidesProgress
      :breakpoints="{
        768: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
      }"
    >
      <swiper-slide v-for="item in projects" :key="item.id">
        <ScreensProjectsCard :item="item" />
      </swiper-slide>
    </swiper>

    <div class="sm:mt-14 mt-8 flex gap-5 justify-center">
      <Btn
        third
        square
        class="-scale-x-100 sw_prev"
        @click="$swiper.slidePrev()"
      >
        <Icon name="arrow" />
      </Btn>
      <Btn third square class="sw_next" @click="$swiper.slideNext()">
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
