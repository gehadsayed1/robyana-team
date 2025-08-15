<template>
  <div class="container mx-auto px-2 md:px-16 relative">
  

  
   

    <div class="relative">
      <button
        @click="sliderInstance.prev()"
        class="-left-5 text-2xl text-gray-600 bg-gray-100 absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full shadow-md hover:scale-110 transition"
      >
        ‹
      </button>

      <!-- Keen Slider -->
      <div ref="sliderRef" class="keen-slider">
        <div
          v-for="product in products"
          :key="product.id"
          class="keen-slider__slide !h-auto"
        >
          <ProductCard :product="product" class="h-full" />
        </div>
      </div>

      <button
        @click="sliderInstance.next()"
        class="-right-5 absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 text-2xl text-gray-600 bg-gray-100 rounded-full shadow-md hover:scale-110 transition"
      >
        ›
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import ProductCard from "./ProductCard.vue";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";

import skirt from "@/assets/skert2.jpg";

const tab = ref(0);
const tabs = ["T-Shirt", "Pants", "Jeans", "Shoes", "Sweatpants"];

const products = [
  {
    id: 1,
    image: skirt,
    name: "Maxi Long Skirts",
    category: "Women",
    price: 699,
    oldPrice: 1200,
  },
  {
    id: 2,
    image: skirt,
    name: "Maxi Long Skirts",
    category: "Women",
    price: 699,
    oldPrice: 1200,
  },
  {
    id: 3,
    image: skirt,
    name: "Maxi Long Skirts",
    category: "Women",
    price: 699,
    oldPrice: 1200,
  },
  {
    id: 4,
    image: skirt,
    name: "Maxi Long Skirts",
    category: "Women",
    price: 699,
    oldPrice: 1200,
  },
  {
    id: 5,
    image: skirt,
    name: "Maxi Long Skirts",
    category: "Women",
    price: 699,
    oldPrice: 1200,
  },
];

const sliderRef = ref(null);
let sliderInstance = null;

onMounted(() => {
  sliderInstance = new KeenSlider(sliderRef.value, {
    loop: false,
    mode: "snap",
    breakpoints: {
      "(min-width: 320px)": { slides: { perView: 1.5, spacing: 8 } }, // كارت ونص
      "(min-width: 480px)": { slides: { perView: 1.5, spacing: 8 } }, // كارت ونص
      "(min-width: 640px)": { slides: { perView: 2, spacing: 8 } },
      "(min-width: 768px)": { slides: { perView: 2.5, spacing: 8 } },
      "(min-width: 1024px)": { slides: { perView: 3, spacing: 8 } },
      "(min-width: 1280px)": { slides: { perView: 4, spacing: 8 } },
    },
  });
});

onBeforeUnmount(() => {
  if (sliderInstance) sliderInstance.destroy();
});
</script>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Responsive */
@media (max-width: 640px) {
  .nav-btn {
    width: 32px;
    height: 32px;
    font-size: 16px;
  }
}
@media (max-width: 480px) {
  .nav-btn {
    width: 28px;
    height: 28px;
    font-size: 14px;
  }
}
@media (max-width: 360px) {
  .nav-btn {
    display: none;
  }
}
</style>
