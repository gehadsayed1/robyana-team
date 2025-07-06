<template>
  <div class=" p-6 rounded-lg mx-auto">
    <!-- Title -->
    <h2 class="text-center text-2xl font-bold mb-6">Size Guide</h2>

    <!-- Fit Type Section -->
    <div class="mb-8">
      <p class="text-lg font-semibold mb-3">Fit Type</p>
      <div class="relative h-16">
        <!-- Labels -->
        <span class="absolute left-0 -top-6 text-sm text-gray-700">Skinny</span>
        <span class="absolute left-1/2 transform -translate-x-1/2 -top-6 text-sm text-gray-700">Regular</span>
        <span class="absolute right-0 -top-6 text-sm text-gray-700">Oversized</span>

        <!-- Vertical Ticks -->
        <div class="absolute top-6 w-full flex justify-between px-1">
          <span class="w-px h-10 bg-gray-300"></span>
          <span class="w-px h-10 bg-gray-300"></span>
          <span class="w-px h-10 bg-gray-300"></span>
        </div>
      </div>

      <!-- Range Input -->
      <input
        type="range"
        min="0"
        max="100"
        v-model="fitValue"
        class="w-full h-2 bg-gray-300 rounded-full appearance-none cursor-pointer"
      />

      <!-- Custom Thumb -->
      <div
        class="absolute top-0 w-8 h-8 bg-blue-500 rounded-full shadow-md transform -translate-y-1/2 transition-transform"
        :style="{ left: `${fitValue}%`, transform: `translateX(-50%) translateY(-50%)` }"
      ></div>
    </div>

    <!-- Tabs -->
    <div class="flex border-b mb-4">
      <button
        @click="activeTab = 'product'"
        :class="['py-2 px-4 font-medium', activeTab === 'product' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600']"
      >
        Product Measurements
      </button>
      <button
        @click="activeTab = 'body'"
        :class="['py-2 px-4 font-medium', activeTab === 'body' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600']"
      >
        Body Measurements
      </button>
    </div>

    <!-- Table -->
    <table class="w-full table-auto border-collapse text-sm">
      <thead class="bg-gray-100">
        <tr>
          <th class="px-4 py-2 border">US</th>
          <th class="px-4 py-2 border">Size</th>
          <th class="px-4 py-2 border">Height</th>
          <th class="px-4 py-2 border">Bust</th>
          <th class="px-4 py-2 border">Waist</th>
          <th class="px-4 py-2 border">Hip</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="size in sizes"
          :key="size.us"
          @click="selectedSize = size.us"
          :class="[
            'cursor-pointer border hover:bg-gray-50 transition-colors',
            selectedSize === size.us ? 'bg-blue-100 text-blue-900' : ''
          ]"
        >
          <td class="px-4 py-2 border">{{ size.us }}</td>
          <td class="px-4 py-2 border">{{ size.size }}</td>
          <td class="px-4 py-2 border">{{ size.height }}</td>
          <td class="px-4 py-2 border">{{ size.bust }}</td>
          <td class="px-4 py-2 border">{{ size.waist }}</td>
          <td class="px-4 py-2 border">{{ size.hip }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const fitValue = ref(50)
const activeTab = ref('product')
const selectedSize = ref(6)

const sizes = [
  { us: 2, size: 'XS', height: '160-165', bust: '82-86', waist: '62-66', hip: '87-91' },
  { us: 4, size: 'S', height: '165-170', bust: '86-90', waist: '66-70', hip: '91-95' },
  { us: 6, size: 'M', height: '165-170', bust: '90-94', waist: '70-74', hip: '95-99' },
  { us: 8, size: 'L', height: '170-175', bust: '94-100', waist: '74-80', hip: '99-105' },
  { us: 12, size: 'XL', height: '170-175', bust: '100-106', waist: '80-86', hip: '105-111' }
]
</script>

<style scoped>

input[type='range']::-webkit-slider-thumb {
  appearance: none;
  width: 20px;
  height: 20px;
  background-color: #3b82f6;
  border-radius: 9999px;
  cursor: pointer;
  margin-top: -9px;
}
input[type='range']::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background-color: #3b82f6;
  border-radius: 9999px;
  cursor: pointer;
}
</style>