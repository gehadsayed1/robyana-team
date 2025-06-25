<template>
  <div class="w-74 h-fit bg-white p-10 shadow-r-lg ">
    <h2 class="font-bold text-3xl pb-3 mb-3 border-b border-gray-400">Filter Options</h2>

    <!-- Product Type -->
    <div class="mb-4 border-b pb-3 border-gray-400">
      <h3 class="font-semibold mb-1">By Product Type</h3>
      <div v-for="type in ['T-Shirt', 'Sweat Pants', 'Pants', 'Shirt', 'Shoe']" :key="type">
        <label class="flex items-center space-x-2">
          <input type="checkbox" v-model="selectedTypes" :value="type" />
          <span :class="{'text-primary': selectedTypes.includes(type)}">{{ type }}</span>
        </label>
      </div>
    </div>

    <!-- Price Range -->
    <div class="mb-4  border-b pb-3 border-gray-400">
      <h3 class="font-semibold mb-1">Price</h3>
      <input type="range" class="w-full" min="100" max="1000" />
      <div class="text-sm mt-1">100EGP - 1000EGP</div>
    </div>

    <!-- Style -->
    <div class="mb-4  border-b pb-3 border-gray-400">
      <h3 class="font-semibold mb-1">By Style</h3>
      <div v-for="style in ['Causal', 'Formal', 'Sport', 'Outing']" :key="style">
        <label class="flex items-center space-x-2">
          <input type="checkbox" v-model="selectedStyles" :value="style" />
          <span :class="{'text-primary': selectedStyles.includes(style)}">{{ style }}</span>
        </label>
      </div>
    </div>

    <!-- Promotion -->
    <div class="mb-4">
      <h3 class="font-semibold mb-1">By Promotion</h3>
      <div v-for="promo in ['New Collection', 'Best Seller', 'On Sale']" :key="promo">
        <label class="flex items-center space-x-2">
          <input type="checkbox" v-model="selectedPromos" :value="promo" />
          <span :class="{'text-primary': selectedPromos.includes(promo)}">{{ promo }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedTypes = ref([]);
const selectedStyles = ref([]);
const selectedPromos = ref([]);
</script>



