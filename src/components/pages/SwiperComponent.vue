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
  margin-top: 80px;
}

.swiper-slide {
  position: relative;
  width: 100% !important;
  flex-shrink: 0;
  height: 100%;
}


</style>
