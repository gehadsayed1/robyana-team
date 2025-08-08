<template>
  <div class="py-5 px-4 md:px-10">
    <!-- Swiper Container -->
    <div class="swiper-container relative rounded-lg shadow-lg overflow-hidden">
      <div class="swiper-wrapper">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="swiper-slide cursor-pointer"
          @click="goToSlideLink(slide)"
        >
          <img
            :src="slide.image"
            :alt="slide.title"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <!-- Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
});

const router = useRouter();

const goToSlideLink = (slide) => {
  router.push({ name: "categories" });
};

let swiperInstance = null;

onMounted(() => {
  swiperInstance = new Swiper(".swiper-container", {
    modules: [Pagination, Autoplay],
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  
    touchRatio: 1,
    grabCursor: true,
  });
});


onBeforeUnmount(() => {
  if (swiperInstance) {
    swiperInstance.destroy(true, true);
  }
});
</script>

<style scoped>

.swiper-container {
  width: 100%;
  aspect-ratio: 16 / 6; 
  max-height: 500px;
  background-color: #f3f4f6;
  margin-top: 60px;
}

.swiper-slide {
  width: 100% !important;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}


@media (max-width: 640px) {
  .swiper-container {
    aspect-ratio: 1 / 1; 
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .swiper-container {
    aspect-ratio: 16 / 7;
  }
}


.swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  background-color: #aaa;
}

.swiper-pagination-bullet-active {
  background-color: #3b82f6;
}
</style>