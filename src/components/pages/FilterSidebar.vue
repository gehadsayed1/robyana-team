<template>
  <div class="w-74 h-fit bg-gray-50 md:py-10 px-10 shadow-r-lg">
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

    <!-- Price Range (Simple Range Slider) -->
    <div class="mb-4 border-b py-3 border-gray-400">
      <h3 class="font-semibold mb-3 text-gray-700">Price</h3>
      
      <!-- Simple Range Slider -->
      <div class="space-y-4">
        <!-- Range Inputs -->
        <div class="flex items-center gap-3">
          <div class="flex-1">
            <label class="block text-xs text-gray-500 mb-1">Min Price</label>
            <input
              type="number"
              v-model="priceRange[0]"
              :min="100"
              :max="priceRange[1]"
              class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="100"
            />
          </div>
          <div class="flex-1">
            <label class="block text-xs text-gray-500 mb-1">Max Price</label>
            <input
              type="number"
              v-model="priceRange[1]"
              :min="priceRange[0]"
              :max="1000"
              class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="1000"
            />
          </div>
        </div>
        
        <!-- Range Slider -->
        <div class="relative">
          <div class="h-2 bg-gray-200 rounded-full">
            <div 
              class="absolute h-2 bg-blue-500 rounded-full transition-all duration-200"
              :style="{
                left: `${((priceRange[0] - 100) / (1000 - 100)) * 100}%`,
                width: `${((priceRange[1] - priceRange[0]) / (1000 - 100)) * 100}%`
              }"
            ></div>
          </div>
          
          <!-- Min Handle -->
          <div 
            class="absolute w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-md cursor-pointer transform -translate-y-1 -translate-x-2 hover:scale-110 transition-transform"
            :style="{ left: `${((priceRange[0] - 100) / (1000 - 100)) * 100}%` }"
            @mousedown="startDragging(0)"
            @touchstart="startDragging(0)"
          ></div>
          
          <!-- Max Handle -->
          <div 
            class="absolute w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-md cursor-pointer transform -translate-y-1 -translate-x-2 hover:scale-110 transition-transform"
            :style="{ left: `${((priceRange[1] - 100) / (1000 - 100)) * 100}%` }"
            @mousedown="startDragging(1)"
            @touchstart="startDragging(1)"
          ></div>
        </div>
        
        <!-- Price Display -->
        <div class="text-center text-sm text-gray-600 bg-gray-100 py-2 px-3 rounded-md">
          {{ priceRange[0] }} EGP - {{ priceRange[1] }} EGP
        </div>
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

// Price Filter Functions
const updatePriceRange = () => {
  // Ensure min doesn't exceed max
  if (priceRange.value[0] > priceRange.value[1]) {
    if (priceRange.value[0] > priceRange.value[1]) {
      priceRange.value[0] = priceRange.value[1];
    } else {
      priceRange.value[1] = priceRange.value[0];
    }
  }
  
  console.log('Price range updated:', priceRange.value);
};

const startDragging = (index) => {
  const handleMouseMove = (e) => {
    const slider = document.querySelector('.relative');
    if (!slider) return;
    
    const rect = slider.getBoundingClientRect();
    const x = e.clientX ? e.clientX - rect.left : e.touches[0].clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    
    if (index === 0) {
      const newMin = Math.round(100 + (percentage / 100) * (1000 - 100));
      priceRange.value[0] = Math.min(newMin, priceRange.value[1] - 10);
    } else {
      const newMax = Math.round(100 + (percentage / 100) * (1000 - 100));
      priceRange.value[1] = Math.max(newMax, priceRange.value[0] + 10);
    }
    
    updatePriceRange();
  };
  
  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    document.removeEventListener('touchmove', handleMouseMove);
    document.removeEventListener('touchend', handleMouseUp);
  };
  
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
  document.addEventListener('touchmove', handleMouseMove);
  document.addEventListener('touchend', handleMouseUp);
};
</script>

<style scoped>
::v-deep(.v-slider-thumb__label) {
  background-color: var(--color-primary);
  color: white;
}
</style>
