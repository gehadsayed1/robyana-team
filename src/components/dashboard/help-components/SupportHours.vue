<template>
  <div class="bg-white rounded-lg shadow-md py-4 px-6 mb-4">
    <h3 class="text-lg font-semibold text-gray-900 mb-2">Support Hours</h3>
    <div class="flex items-center text-gray-600 mb-2">
      <Clock class="w-4 h-4 mr-2" />
      <span>Sunday - Thursday: 9:00 AM - 6:00 PM</span>
    </div>
    <p class="text-sm text-gray-500">GMT+2 (Cairo Time)</p>
  </div>
</template>

<script setup>
import { Clock } from 'lucide-vue-next'
</script>