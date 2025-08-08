<template>
  <div class="border border-gray-200 rounded-lg mb-3">
    <button
      @click="$emit('toggle')"
      class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
    >
      <span class="font-medium text-gray-900">{{ question }}</span>
      <ChevronUp v-if="isOpen" class="w-5 h-5 text-gray-500" />
      <ChevronDown v-else class="w-5 h-5 text-gray-500" />
    </button>
    <div v-if="isOpen" class="px-6 pb-4 border-t border-gray-100">
      <p class="text-gray-600 text-sm pt-4">{{ answer }}</p>
    </div>
  </div>
</template>

<script setup>
import { ChevronUp, ChevronDown } from 'lucide-vue-next'

defineProps({
  question: String,
  answer: String,
  isOpen: Boolean
})

defineEmits(['toggle'])
</script>
