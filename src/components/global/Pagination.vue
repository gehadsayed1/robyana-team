<template>
  <nav class="flex items-center justify-between gap-3">
    <!-- Previous Button -->
   <button
  :disabled="currentPage === 1"
  @click="$emit('page-change', currentPage - 1)"
  class="rounded-full bg-white border border-gray-300 p-2 shadow mr-2 disabled:opacity-50 disabled:cursor-not-allowed"
>
  <ChevronLeft class="w-7 h-7 text-gray-600" />
</button>

    <!-- Page Numbers -->
    <ul class="flex space-x-2">
      <li v-for="(page, index) in visiblePages" :key="index">
        <button
          :class="{ 'bg-primary text-white': page === currentPage }"
          @click="$emit('page-change', page)"
          class="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-200 focus:outline-none"
        >
          {{ page }}
        </button>
      </li>
    </ul>

    <!-- Next Button -->
    <button
  :disabled="currentPage === totalPages"
  @click="$emit('page-change', currentPage + 1)"
  class="rounded-full bg-white border border-gray-300 p-2 shadow disabled:opacity-50 disabled:cursor-not-allowed"
>
  <ChevronRight class="w-7 h-7 text-gray-600" />
</button>
  </nav>
</template>

<script setup>
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';
import { computed } from 'vue';

// Props
const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
});

// Emit for changing the page
const emit = defineEmits(['page-change']);

// Computed property to determine which pages to show
const visiblePages = computed(() => {
  const pages = [];
  const maxVisible = 5; // Maximum number of visible pages (excluding ellipsis)

  if (props.totalPages <= maxVisible) {
    // If total pages are less than or equal to maxVisible, show all
    for (let i = 1; i <= props.totalPages; i++) {
      pages.push(i);
    }
  } else {
    // Show first three pages, then ellipsis, then last two pages
    const half = Math.floor(maxVisible / 2);

    // First few pages
    for (let i = 1; i <= half; i++) {
      pages.push(i);
    }

    // Ellipsis
    if (props.currentPage > half + 2) {
      pages.push('...');
    }

    // Last few pages
    for (let i = props.totalPages - half + 1; i <= props.totalPages; i++) {
      pages.push(i);
    }
  }

  return pages;
});
</script>