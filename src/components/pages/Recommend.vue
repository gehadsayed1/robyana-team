<template>
  <v-container>
    <!-- العنوان -->
    <v-row class="mb-6 ">
      <v-col cols="12">
        <h3 class="text-center text-2xl font-weight-bold">
          Recommendation For You
        </h3>
      </v-col>
    </v-row>

    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="primary"
      grow
      density="comfortable"
      class="mb-6 w-full max-w-4xl mx-auto"
    >
      <v-tab v-for="item in tabs" :key="item">{{ item }}</v-tab>
    </v-tabs>


    <swiper
      class="custom-swiper py-6"
      :modules="modules"
      :slides-per-view="1.2"
      :space-between="10"
      :slides-offset-before="20"
      :slides-offset-after="20"
      navigation
      :breakpoints="swiperBreakpoints"
    >
      <swiper-slide
        v-for="product in products"
        :key="product.id"
     
      >
        <ProductCard :product="product" />
      </swiper-slide>
    </swiper>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import ProductCard from "./ProductCard.vue";

// Swiper components
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

// Styles
import "swiper/css";
import "swiper/css/navigation";

// Modules
const modules = [Navigation];

// Data
import skirt from "@/assets/skert2.jpg";

const tab = ref(0);
const tabs = ["T-Shirt", "Pants", "Jeans", "Shoes", "Sweatpants"];

const products = [
  { id: 1, image: skirt, name: "Maxi Long Skirts", category: "Women", price: 699, oldPrice: 1200 },
  { id: 2, image: skirt, name: "Maxi Long Skirts", category: "Women", price: 699, oldPrice: 1200 },
  { id: 3, image: skirt, name: "Maxi Long Skirts", category: "Women", price: 699, oldPrice: 1200 },
  { id: 4, image: skirt, name: "Maxi Long Skirts", category: "Women", price: 699, oldPrice: 1200 },
  { id: 5, image: skirt, name: "Maxi Long Skirts", category: "Women", price: 699, oldPrice: 1200 },
];


const swiperBreakpoints = {

  320: {
    slidesPerView: 1.2,
    spaceBetween: 12,
    slidesOffsetBefore: 16,
    slidesOffsetAfter: 16,
  },
  
  640: {
    slidesPerView: 2.2,
    spaceBetween: 16,
    slidesOffsetBefore: 20,
    slidesOffsetAfter: 20,
  },
  
  768: {
    slidesPerView: 2.5,
    spaceBetween: 20,
  },
 
  1024: {
    slidesPerView: 3,
    spaceBetween: 24,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
  },
};
</script>

<style>

.swiper-button-next,
.swiper-button-prev {
  color: #000;
  width: 36px;
  height: 36px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.9;
  transition: all 0.3s ease;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  opacity: 1;
  transform: scale(1.1);
}

/* موضع الأسهم */
.swiper-button-prev {
  left: 10px;
}

.swiper-button-next {
  right: 10px;
}


.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 18px;
  font-weight: bold;
}


@media (max-width: 640px) {
  .custom-swiper {
    padding-top: 1rem;
    padding-bottom: 1.5rem;
  }
}
</style>