<template>
  <nav class="flex items-center justify-center gap-4">
    <!-- Previous Button -->
    <button
      :disabled="currentPage === 1"
      @click="$emit('page-change', currentPage - 1)"
      class="w-10 h-10 rounded-full bg-white border border-gray-300 p-2 shadow-sm hover:shadow-md transition-shadow disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-sm"
    >
      <ChevronLeft class="w-5 h-5 text-gray-800" />
    </button>

    <!-- Page Numbers -->
    <div class="flex items-center gap-2">
      <button
        v-for="page in visiblePages"
        :key="page"
        :class="[
          page === currentPage 
            ? 'w-8 h-8 bg-primary text-white' 
            : 'w-8 h-8 text-gray-800 hover:bg-gray-100'
        ]"
        @click="page !== '...' && $emit('page-change', page)"
        class="flex items-center justify-center rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        :disabled="page === '...'"
      >
        {{ page }}
      </button>
    </div>

    <!-- Next Button -->
    <button
      :disabled="currentPage === totalPages"
      @click="$emit('page-change', currentPage + 1)"
      class="w-10 h-10 rounded-full bg-white border border-gray-300 p-2 shadow-sm hover:shadow-md transition-shadow disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-sm"
    >
      <ChevronRight class="w-5 h-5 text-gray-800" />
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
  
  if (props.totalPages <= 7) {
    // If total pages are 7 or less, show all pages
    for (let i = 1; i <= props.totalPages; i++) {
      pages.push(i);
    }
  } else {
    // Always show first page
    pages.push(1);
    
    // Show pages around current page
    const start = Math.max(2, props.currentPage - 1);
    const end = Math.min(props.totalPages - 1, props.currentPage + 1);
    
    // Add ellipsis before start if needed
    if (start > 2) {
      pages.push('...');
    }
    
    // Add pages around current page
    for (let i = start; i <= end; i++) {
      if (i > 1 && i < props.totalPages) {
        pages.push(i);
      }
    }
    
    // Add ellipsis after end if needed
    if (end < props.totalPages - 1) {
      pages.push('...');
    }
    
    // Always show last page
    if (props.totalPages > 1) {
      pages.push(props.totalPages);
    }
  }

  return pages;
});
</script>