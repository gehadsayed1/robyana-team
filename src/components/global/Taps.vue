<template>
     <div class="mb-4 md:mb-6 w-full max-w-4xl mx-auto">
      <div
        class="flex border-b border-gray-200 overflow-x-auto scrollbar-hide md:overflow-visible"
      >
        <button
          v-for="(item, index) in tabs"
          :key="item"
          @click="tab = index"
          class="flex-shrink-0 py-3 px-4 text-center text-sm font-medium transition-colors duration-200 whitespace-nowrap min-w-[80px] md:min-w-0 md:flex-1"
          :class="
            tab === index
              ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
          "
        >
          {{ item }}
        </button>
      </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  tabs: {
    type: Array,
    default: () => ["Description", "Reviews", "Related Products"],
  },
});
const tab = ref(0);

</script>