<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div
  v-for="(slide, index) in slides"
  :key="index"
  class="swiper-slide cursor-pointer"
  @click="goToSlideLink(slide)"
>
  <img :src="slide.image" :alt="slide.title" class="w-full h-auto object-cover" />
  <div class="absolute inset-0 flex items-center justify-center text-white text-center">
    <div>
      <p class="text-lg md:text-xl font-light mb-2">{{ slide.subtitle }}</p>
      <h1 class="text-2xl md:text-4xl font-bold mb-2">{{ slide.title }}</h1>
      <p class="text-sm md:text-base font-light">{{ slide.tags }}</p>
    </div>
  </div>
</div>

    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script setup>

import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Swiper from 'swiper'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const props = defineProps({
  slides: {
    type: Array,
    required: true
  }
})

const router = useRouter()

const goToSlideLink = (slide) => {

    router.push({ name: 'categories'
    })
  
}




onMounted(() => {
  new Swiper('.swiper-container', {
    modules: [Pagination, Autoplay],
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    }
  })
})
</script>

<style scoped>
.swiper-container {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
}

.swiper-slide {
  position: relative;
  width: 100% !important;
  flex-shrink: 0;
  height: 100%;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease;
}
</style>
