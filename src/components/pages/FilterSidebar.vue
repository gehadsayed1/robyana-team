<template>
  <div class="w-74 h-fit bg-white py-10 px-10 shadow-r-lg">
    <h2 class="font-bold text-3xl pb-3 mb-3 border-b border-gray-400">
      Filter Options
    </h2>

    <!-- Product Type -->
    <div class="mb-4 border-b py-3 border-gray-400">
      <h3 class="font-semibold mb-1">By Product Type</h3>
      <div
        v-for="type in ['T-Shirt', 'Sweat Pants', 'Pants', 'Shirt', 'Shoe']"
        :key="type"
      >
        <label class="flex items-center space-x-2 gap-2 py-2">
          <input type="checkbox" v-model="selectedTypes" :value="type" />
          <span :class="{ 'text-primary': selectedTypes.includes(type) }">{{
            type
          }}</span>
        </label>
      </div>
    </div>

    <!-- Price Range (Vuetify Slider) -->
    <div class="mb-4 border-b py-3 border-gray-400">
      <h3 class="font-semibold mb-1">Price</h3>
      <v-range-slider
        v-model="priceRange"
        class="bg-white pt-10 text-amber-300"
        :min="100"
        :max="1000"
        step="10"
        thumb-size="20"
        thumb-label="always"
        color="primary"
      ></v-range-slider>

      <div class="text-sm mt-1">
        {{ priceRange[0] }} EGP - {{ priceRange[1] }} EGP
      </div>
    </div>
    <!-- color -->
  <div class="mb-4 border-b pb-3 border-gray-400">
    <h3 class="font-semibold mb-1">By Color</h3>
    <div class="flex flex-wrap gap-3 mt-2">
      <label
        v-for="color in colors"
        :key="color"
        class="flex items-center cursor-pointer"
      >
        <!-- Hidden checkbox -->
        <input
          type="checkbox"
          v-model="selectedColor"
          :value="color"
          class="hidden"
        />
        
        <!-- Color circle -->
        <div
          class="w-6 h-6 rounded-full border-2"
          :style="{
            backgroundColor: color,
            borderColor: selectedColor.includes(color) ? 'black' : 'transparent'
          }"
        ></div>
      </label>
    </div>
  </div>
    <!-- Style -->
    <div class="mb-4 border-b pb-3 border-gray-400">
      <h3 class="font-semibold mb-1">By Style</h3>
      <div
        v-for="style in ['Causal', 'Formal', 'Sport', 'Outing']"
        :key="style"
      >
        <label class="flex items-center gap-2 space-x-2 py-2">
          <input type="checkbox" v-model="selectedStyles" :value="style" />
          <span :class="{ 'text-primary': selectedStyles.includes(style) }">{{
            style
          }}</span>
        </label>
      </div>
    </div>

    <!-- Promotion -->
    <div class="mb-4">
      <h3 class="font-semibold mb-1">By Promotion</h3>
      <div
        v-for="promo in ['New Collection', 'Best Seller', 'On Sale']"
        :key="promo"
      >
        <label class="flex items-center space-x-2 gap-2 py-2">
          <input type="checkbox" v-model="selectedPromos" :value="promo" />
          <span :class="{ 'text-primary': selectedPromos.includes(promo) }">{{
            promo
          }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const selectedTypes = ref([]);
const selectedStyles = ref([]);
const selectedPromos = ref([]);
const selectedColor = ref([]);
const colors = [
  "#FF5733", // Red
  "#33FF57", // Green
  "#3357FF", // Blue
  "#F1C40F", // Yellow
  "#8E44AD", // Purple
  "#E67E22", // Orange
  "#2ECC71", // Light Green
  "#3498DB", // Light Blue
  "#E74C3C", // Light Red
  "#1ABC9C", // Teal
];

const priceRange = ref([300, 500]);
</script>

<style scoped>
::v-deep(.v-slider-thumb__label) {
  background-color: var(--color-primary);
  color: white;
}
</style>
