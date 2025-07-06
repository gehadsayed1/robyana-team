<template>
  <v-main class="bg-gray-100">
    <div class="flex items-center justify-center h-60 bg-white font-bold">
      <img class="" src="@/assets/h1.jpg" alt="" />
    </div>
    <v-container>
      <div>
        <!-- Container -->
        <div class="container mx-auto px-4 py-10">
          <!-- Product Section -->
          <div class="flex flex-col md:flex-row gap-8">
            <!-- Product Image -->

            <div class="w-full md:w-2/5">
              <img
                :src="product.image"
                alt="Maxi Skirt"
                class="w-full h-[500px] rounded-xl shadow-md"
              />

              <swiper
                class="custom-swiper py-10"
                :modules="[Navigation]"
                :slides-per-view="3"
                :space-between="0"
                navigation
              >
                <swiper-slide
                  v-for="(img, index) in imgs"
                  :key="index"
                  class="flex justify-center"
                >
                  <img :src="img" class="w-32 h-44 object-cover rounded-md" />
                </swiper-slide>
              </swiper>
            </div>

            <!-- Product Details -->
            <div class="w-full md:w-2/3">
              <div class="flex items-center justify-between py-4">
                <h2 class="text-xl font-bold text-gray-700">Women</h2>
                <p class="text-md text-gray-400">New Collection</p>
              </div>
              <div class="py-5">
                <h1 class="text-3xl tracking-widest font-simebold mb-4">
                  {{ product.name }}
                </h1>
                <p class="mb-6 text-gray-600">{{ product.description }}</p>
              </div>

              <!-- Size Options -->
              <h3 class="text-lg font-semibold mb-5">Size</h3>
              <div class="flex flex-wrap gap-10 mb-10">
                <button
                  v-for="size in product.sizes"
                  :key="size"
                  @click="selectedSize = size"
                  :class="[
                    'h-10 w-10 rounded-full transition-all',
                    selectedSize === size
                      ? 'bg-primary  text-white'
                      : 'bg-white hover:bg-gray-300',
                  ]"
                >
                  {{ size }}
                </button>
              </div>

              <!-- Color Options -->
              <h3 class="text-lg font-semibold mb-5">Color</h3>
              <div class="flex gap-8 mb-6">
                <img
                  v-for="(color, index) in product.colors"
                  :key="index"
                  :src="color.image"
                  :alt="color.name"
                  class="w-20 h-20 rounded cursor-pointer transition-transform transform hover:scale-105"
                  @click="selectedColor = color.name"
                  :class="{
                    'ring-2 ring-blue-500': selectedColor === color.name,
                  }"
                />
              </div>

              <!-- Price and Add to Cart -->
              <div
                class="text-2xl font-bold py-3 flex items-center gap-3 text-gray-800"
              >
                {{ product.price }}
                <p class="text-md text-gray-500 font-normal line-through">
                  1200 EGP
                </p>
              </div>

              <div class="py-8 flex gap-6">
                <button
                  class="bg-primary tracking-widest text-white w-50 px-6 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                  Add to Wishlist
                </button>
                <button
                  class="but bg-white text-black px-6 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                  Mix & Match
                </button>
              </div>
            </div>
          </div>

          <!-- Size Guide Section -->
          <div class="mt-16">
            <SizeGuide />
          </div>
        </div>
      </div>
    </v-container>
  </v-main>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import img from "../assets/skirt.jpg";
import img1 from "../assets/skert1.jpg";
import img2 from "../assets/skert2.jpg";
import img4 from "../assets/skert3.jpg";
import img3 from "../assets/skert4.jpg";

import SizeGuide from "../components/pages/SizeGuide.vue";

const imgs = [img1, img2, img3, img4];

// Mock Data
const product = {
  name: "Maxi Long Skirts for Women",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod odio nec neque sodales. Nullam sollicitudin diam at nibh lobortis scelerisque sollicitudin diam at nibh lobortis scelerisque sollicitudin diam at nibh lobortis scelerisque.",
  price: "699 EGP",
  image: img1,
  sizes: ["0", "16", "6", "9", "11", "8", "8/10"],
  colors: [
    { name: "Black", image: img4 },
    { name: "Green", image: img2 },
    { name: "Red", image: img3 },
    { name: "Olive", image: img1 },
  ],
  sizeGuideImages: [
    " https://via.placeholder.com/150x300?text=Beige",
    " https://via.placeholder.com/150x300?text=Blue",
    " https://via.placeholder.com/150x300?text=Gray",
    " https://via.placeholder.com/150x300?text=Brown",
  ],
};

// Reactive State
const selectedSize = ref(product.sizes[4]); // Default selected size is "11"
const selectedColor = ref(product.colors[0].name); // Default selected color is "Black"
</script>

<style>
.swiper-button-next,
.swiper-button-prev {
  color: black;
  width: 30px;
  height: 30px;
  background-color: rgb(241, 238, 238);
  border-radius: 50%;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); */
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
  z-index: 20;
}

.swiper-button-next {
  right: 10px;
}

.swiper-button-prev {
  left: -10px;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 20px;
  font-weight: bold;
}

.but {
  border: solid 1px var(--color-primary);
}
</style>
