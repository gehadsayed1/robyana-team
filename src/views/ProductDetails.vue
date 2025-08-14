<template>
  <main class="bg-gray-100">
    <!-- Hero Image -->
    <div
      class="flex items-center justify-center h-60 bg-white font-bold flex-col lg:flex-row"
    >
      <img class="w-full h-full hidden lg:block" src="@/assets/h1.jpg" alt="" />

      <img
        class="w-full h-full block lg:hidden"
        src="@/assets/cat.png"
        alt=""
      />
    </div>
    <div class="max-w-7xl mx-auto px-4 py-6 lg:py-10">
      <!-- Product Section -->
      <div class="flex flex-col md:px-12 lg:flex-row gap-6 lg:gap-8">
        <!-- Product Image -->
        <div class="w-full lg:w-2/5">
          <div class="md:hidden flex justify-between items-start py-3 mb-4">
            <h2 class="text-lg font-bold text-gray-700">Women</h2>
            <p class="text-sm text-gray-400">New Collection</p>
          </div>
          <img
            :src="mainImage"
            alt="Maxi Skirt"
            class="w-full h-[300px] lg:h-[500px] rounded-xl shadow-md object-cover"
          />

          <!-- Thumbnails Swiper -->
          <div class="mt-4 lg:mt-5">
            <swiper
              class="thumbnails-swiper py-6 lg:py-10"
              :modules="[Navigation]"
              :slides-per-view="3"
              :space-between="8"
              :breakpoints="{
                320: {
                  slidesPerView: 3,
                  spaceBetween: 8
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10
                }
              }"
              navigation
            >
              <swiper-slide
                v-for="(img, index) in imgs"
                :key="index"
                class="flex justify-center"
              >
                <img
                  :src="img"
                  class="w-20 h-28 lg:w-32 lg:h-44 object-cover rounded-md cursor-pointer hover:scale-105 transition-transform"
                  @click="mainImage = img"
                />
              </swiper-slide>
            </swiper>
          </div>
        </div>

        <!-- Product Details -->
        <div class="w-full lg:w-3/5">
          <div class="hidden md:block lg:flex items-center justify-between py-4">
            <h2 class="text-xl font-bold text-gray-700">Women</h2>
            <p class="text-md text-gray-400">New Collection</p>
          </div>

          <div class="py-3 lg:py-5">
            <h1 class="text-xl md:text-3xl tracking-widest font-semibold mb-3 lg:mb-4">
              {{ product.name }}
            </h1>
            <p class="mb-4 lg:mb-6 text-gray-600 text-sm lg:text-base">{{ product.description }}</p>
          </div>

          <!-- Size Options -->
          <h3 class="text-base lg:text-lg font-semibold mb-3 lg:mb-5">Size</h3>
          <div class="flex flex-wrap gap-3 lg:gap-4 mb-6 lg:mb-10">
            <button
              v-for="size in product.sizes"
              :key="size"
              @click="selectedSize = size"
              :class="[
                'h-8 w-8 lg:h-10 lg:w-10 rounded-full flex items-center justify-center border transition-all text-sm lg:text-base',
                selectedSize === size
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-gray-700 hover:bg-gray-200 border-gray-300',
              ]"
            >
              {{ size }}
            </button>
          </div>

          <!-- Color Options -->
          <h3 class="text-base lg:text-lg font-semibold mb-3 lg:mb-5">Color</h3>
          <div class="flex gap-4 lg:gap-6 mb-4 lg:mb-6">
            <img
              v-for="(color, index) in product.colors"
              :key="index"
              :src="color.image"
              :alt="color.name"
              class="w-16 h-16 lg:w-20 lg:h-20 rounded cursor-pointer transition-transform hover:scale-105"
              @click="
                () => {
                  selectedColor = color.name;
                  mainImage = color.image;
                }
              "
              :class="{
                'ring-2 ring-blue-500': selectedColor === color.name,
              }"
            />
          </div>

          <!-- Price and Add to Cart -->
          <div
            class="text-xl lg:text-2xl font-bold py-2 lg:py-3 flex items-center gap-2 lg:gap-3 text-gray-800"
          >
            {{ product.price }}
            <p class="text-sm lg:text-md text-gray-500 font-normal line-through">
              1200 EGP
            </p>
          </div>

          <!-- Action Buttons - Mobile: Stacked, Desktop: Side by side -->
          <div class="py-6 flex flex-col sm:flex-row justify-center gap-3">
            <button
              @click="$router.push({ name: 'wishlist' })"
              class="bg-blue-500 w-full sm:w-60 tracking-widest text-white px-4 lg:px-6 py-3 md:py-2 rounded hover:bg-blue-600 transition-colors text-sm lg:text-base"
            >
              Add to Wishlist
            </button>
            <button
              class="border w-full sm:w-60 border-blue-500 bg-white text-black px-4 md:px-6 py-3 lg:py-2 rounded hover:bg-blue-100 transition-colors text-sm lg:text-base"
            >
              Mix & Match
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Size Guide -->
    <div class="mt-12 lg:mt-16 py-4 lg:py-5 bg-white">
      <div class="px-4 lg:px-0">
        <SizeGuide />
      </div>
    </div>

    <!-- Recommendations -->
    <div class="md:mt-3 py-5 bg-gray-100">
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
  ],
};

const selectedSize = ref(product.sizes[4]);
const selectedColor = ref(product.colors[0].name);
const mainImage = ref(product.image);
</script>

<style scoped>
/* تخصيص الـ Swiper للصور المصغرة فقط */
.thumbnails-swiper .swiper-button-next,
.thumbnails-swiper .swiper-button-prev {
  color: #000;
  width: 30px;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.thumbnails-swiper .swiper-button-next::after,
.thumbnails-swiper .swiper-button-prev::after {
  font-size: 14px;
}


@media (max-width: 640px) {
  .thumbnails-swiper .swiper-button-next,
  .thumbnails-swiper .swiper-button-prev {
    width: 25px;
    height: 25px;
  }
  
  .thumbnails-swiper .swiper-button-next::after,
  .thumbnails-swiper .swiper-button-prev::after {
    font-size: 12px;
  }
}
</style>