<template>
  <div class="py-4 px-5 md:px-16">
    <!-- Swiper Container -->
    <div class="swiper-container bg-gray-100 relative overflow-hidden">
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
            class="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

   
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

// Props
const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
});

// Router
const router = useRouter();

// Navigation on click
const goToSlideLink = (slide) => {
  router.push({ name: "categories" });
};

// Swiper Instance
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
      dynamicBullets: false,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    grabCursor: true,
  });
});

onBeforeUnmount(() => {
  if (swiperInstance) {
    swiperInstance.destroy(true, true);
  }
});
</script>

<style>
/* Container for Swiper */
.swiper-container {
  width: 100%;
  aspect-ratio: 16 / 6;
  max-height: 500px;
  margin-top: 60px;
  padding-bottom: 40px;
  overflow: hidden;
}

/* Slides */
.swiper-slide {
  width: 100% !important;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.swiper-pagination {
  position: static !important;
  transform: none !important;
  top: auto !important;
  bottom: auto !important;
  width: 100%;
  text-align: center;
  padding: 16px 0;

  border-radius: 0 0 0.5rem 0.5rem;
}

.swiper-pagination-bullet {
  width: 18px;
  height: 18px;
  background-color: #7e7e7e;
  border-radius: 50%;
  opacity: 1;
  margin: 0 6px;
  transition: all 0.3s ease;
}

/* Active Bullet */
.swiper-pagination-bullet-active {
  background-color: var(--color-primary);

  box-shadow: 0 0 8px rgba(59, 130, 246, 0.4);
}

/* Responsive Adjustments */
@media (max-width: 640px) {
  .swiper-container {
    aspect-ratio: 1 / 1;
    padding-bottom: 50px;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .swiper-container {
    aspect-ratio: 16 / 7;
    padding-bottom: 45px;
  }
}
</style>
