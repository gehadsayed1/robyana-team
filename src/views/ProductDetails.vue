<template>
  <main class="bg-gray-100">
    <!-- Hero Image -->
    <div class="flex items-center justify-center h-60 bg-white font-bold">
      <img src="@/assets/h1.jpg" alt="Header" />
    </div>

    <div class="max-w-7xl mx-auto px-4 py-10">
      <!-- Product Section -->
      <div class="flex flex-col md:flex-row gap-8">
        <!-- Product Image -->
        <div class="w-full md:w-2/5">
          <img
            :src="mainImage"
            alt="Maxi Skirt"
            class="w-full h-[500px] rounded-xl shadow-md object-cover"
          />

          <!-- Thumbnails Swiper -->
          <swiper
            class="py-10"
            :modules="[Navigation]"
            :slides-per-view="3"
            :space-between="10"
            navigation
          >
            <swiper-slide
              v-for="(img, index) in imgs"
              :key="index"
              class="flex justify-center"
            >
              <img
                :src="img"
                class="w-32 h-44 object-cover rounded-md cursor-pointer hover:scale-105 transition-transform"
                @click="mainImage = img"
              />
            </swiper-slide>
          </swiper>
        </div>

        <!-- Product Details -->
        <div class="w-full md:w-3/5">
          <div class="flex items-center justify-between py-4">
            <h2 class="text-xl font-bold text-gray-700">Women</h2>
            <p class="text-md text-gray-400">New Collection</p>
          </div>

          <div class="py-5">
            <h1 class="text-3xl tracking-widest font-semibold mb-4">
              {{ product.name }}
            </h1>
            <p class="mb-6 text-gray-600">{{ product.description }}</p>
          </div>

          <!-- Size Options -->
          <h3 class="text-lg font-semibold mb-5">Size</h3>
          <div class="flex flex-wrap gap-4 mb-10">
            <button
              v-for="size in product.sizes"
              :key="size"
              @click="selectedSize = size"
              :class="[
                'h-10 w-10 rounded-full flex items-center justify-center border transition-all',
                selectedSize === size
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-gray-700 hover:bg-gray-200 border-gray-300'
              ]"
            >
              {{ size }}
            </button>
          </div>

          <!-- Color Options -->
          <h3 class="text-lg font-semibold mb-5">Color</h3>
          <div class="flex gap-6 mb-6">
            <img
              v-for="(color, index) in product.colors"
              :key="index"
              :src="color.image"
              :alt="color.name"
              class="w-20 h-20 rounded cursor-pointer transition-transform hover:scale-105"
              @click="() => {
                selectedColor = color.name;
                mainImage = color.image;
              }"
              :class="{
                'ring-2 ring-blue-500': selectedColor === color.name
              }"
            />
          </div>

          <!-- Price and Add to Cart -->
          <div class="text-2xl font-bold py-3 flex items-center gap-3 text-gray-800">
            {{ product.price }}
            <p class="text-md text-gray-500 font-normal line-through">
              1200 EGP
            </p>
          </div>

          <div class="py-8 flex gap-6">
            <button
              @click="$router.push({ name: 'wishlist' })"
              class="bg-blue-500 tracking-widest text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Add to Wishlist
            </button>
            <button
              class="border border-blue-500 bg-white text-black px-6 py-2 rounded hover:bg-blue-100 transition-colors"
            >
              Mix & Match
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Size Guide -->
    <div class="mt-16 py-5 bg-white">
      <SizeGuide />
    </div>

    <!-- Recommendations -->
    <div class="mt-16 bg-gray-100">
      <Recommend />
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import img1 from "../assets/skert1.jpg";
import img2 from "../assets/skert2.jpg";
import img4 from "../assets/skert3.jpg";
import img3 from "../assets/skert4.jpg";

import SizeGuide from "../components/pages/SizeGuide.vue";
import Recommend from "../components/pages/Recommend.vue";

const imgs = [img1, img2, img3, img4];

const product = {
  name: "Maxi Long Skirts for Women",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod odio nec neque sodales. Nullam sollicitudin diam at nibh lobortis scelerisque.",
  price: "699 EGP",
  image: img1,
  sizes: ["0", "16", "6", "9", "11", "8", "8/10"],
  colors: [
    { name: "Black", image: img4 },
    { name: "Green", image: img2 },
    { name: "Red", image: img3 },
    { name: "Olive", image: img1 },
  ]
};

const selectedSize = ref(product.sizes[4]);
const selectedColor = ref(product.colors[0].name);
const mainImage = ref(product.image);
</script>
