<template>

      <v-container >
    <v-row class="mb-6 py-20">
      <v-col cols="12">
        <h3 class="text-center text-2xl font-weight-bold">Recommendation For You</h3>
      </v-col>
    </v-row>

    <!-- Tabs -->
    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="primary"
      grow
      density="comfortable"
      class="mb-4 w-[700px] mx-auto"
    >
      <v-tab   v-for="item in tabs" :key="item"  >{{ item }}</v-tab>
    </v-tabs>

    <!-- Swiper -->
<swiper
  class="custom-swiper py-10"
  :modules="modules"
  :slides-per-view="3"
  :space-between="5"
  :slides-offset-before="20"
  :slides-offset-after="20"
  navigation
>
  <swiper-slide
    v-for="product in products"
    :key="product.id"
    class="d-flex justify-center"
  >
    <ProductCard :product="product" />
  </swiper-slide>
</swiper>



  </v-container>

</template>

<script setup>
import { ref } from 'vue'
import ProductCard from './ProductCard.vue'

// Swiper modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

// Required for Swiper modules
const modules = [Navigation, Pagination, Scrollbar, A11y]

// Data
import skirt from '@/assets/skirt.jpg'

const tab = ref(0)
const tabs = ['T-Shirt', 'Pants', 'Jeans', 'Shoes', 'Sweatpants']

const products = [
  {
    id: 1,
    image: skirt,
    name: 'Maxi Long Skirts',
    category: 'Women',
    price: 699,
    oldPrice: 1200
  },
  {
    id: 2,
    image: skirt,
    name: 'Maxi Long Skirts',
    category: 'Women',
    price: 699,
    oldPrice: 1200
  },
  {
    id: 3,
    image: skirt,
    name: 'Maxi Long Skirts',
    category: 'Women',
    price: 699,
    oldPrice: 1200
  },
  {
    id: 4,
    image: skirt,
    name: 'Maxi Long Skirts',
    category: 'Women',
    price: 699,
    oldPrice: 1200
  },
  {
    id: 5,
    image: skirt,
    name: 'Maxi Long Skirts',
    category: 'Women',
    price: 699,
    oldPrice: 1200
  }
]
</script>

<style >

.swiper-button-next,
.swiper-button-prev {
  color: black;
  width: 30px;
  height: 30px;
  background-color: rgb(241, 238, 238);
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
}

.custom-swiper {
  position: relative;
}

/* الأسهم */
.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: black;
  width: 30px;
  height: 30px;
  background-color: rgb(240, 240, 240);
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  z-index: 10;
}

/* سهم اليمين */
.swiper-button-next {
  right: 10px;
}

/* سهم الشمال */
.swiper-button-prev {
  left: 45px;
}

/* أيقونة الأسهم */
.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 20px;
  font-weight: bold;
}

</style>

