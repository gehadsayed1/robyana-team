<template>
  <div
    @click="goToProduct"
    class="w-full h-full flex flex-col justify-between bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 cursor-pointer
           p-3 sm:p-4 
           min-h-[320px] sm:min-h-[360px] md:min-h-[400px] lg:min-h-[490px]"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    <!-- New Collection + Heart -->
    <div class="flex justify-between items-start mb-2 flex-shrink-0">
      <span class="bg-gray-200 text-gray-700 text-xs px-2 py-1 sm:px-3 rounded-full font-medium">
        New Collection
      </span>
      <button
        class="p-1 text-gray-600 hover:text-gray-800 transition-colors flex-shrink-0"
        @click.stop="toggleWishlist"
      >
        <Heart 
          :class="{ 'text-red-500 fill-current': isWishlisted, 'text-gray-600': !isWishlisted }" 
          class="w-4 h-4 sm:w-5 sm:h-5" 
        />
      </button>
    </div>

    <!-- Product Image -->
    <div class="flex-1 mb-3 rounded-lg overflow-hidden bg-gray-50 
                min-h-[160px] max-h-[160px] 
                sm:min-h-[180px] sm:max-h-[180px] 
                md:min-h-[200px] md:max-h-[200px] 
                lg:min-h-[220px] lg:max-h-[220px]">
      <img 
        :src="product.image" 
        :alt="product.name"
        class="w-full h-full object-contain transition-transform duration-300 hover:scale-105" 
      />
    </div>

    <!-- Product Details -->
    <div class="mb-3 flex-shrink-0">
      <div class="text-xs text-gray-500 mb-1 truncate">{{ product.category }}</div>
      <div class="font-medium text-sm mb-2 text-gray-800 line-clamp-2 leading-tight min-h-[2.5rem]">
        {{ product.name }}
      </div>
      <div class="flex items-center gap-2 flex-wrap">
        <span class="font-bold text-sm sm:text-base text-gray-900">{{ product.price }} EGP</span>
        <span
          v-if="product.oldPrice"
          class="text-gray-400 line-through text-xs sm:text-sm"
        >
          {{ product.oldPrice }} EGP
        </span>
      </div>
    </div>

    <!-- Show More Button -->
    <div class="flex justify-center flex-shrink-0">
      <button
        class="bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600 active:bg-blue-700 transition-colors w-full text-sm font-medium
               min-h-[40px] touch-manipulation"
        @click.stop="goToProduct"
      >
        Show More
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Heart } from "lucide-vue-next";

const router = useRouter();

// Props
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

// Reactive
const hovered = ref(false);
const isWishlisted = ref(false);

// Methods
const goToProduct = () => {
  router.push({ name: "product-details", params: { id: props.product.id } });
};

const toggleWishlist = () => {
  isWishlisted.value = !isWishlisted.value;
};
</script>

<style scoped>
/* Line clamp utility for product name */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Alternative image styles for different products */
.product-image-full {
  object-fit: cover;
}

.product-image-fit {
  object-fit: contain;
  padding: 8px;
}

/* Image container with proper aspect ratio */
.image-container {
  position: relative;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

/* Mobile-specific image fixes */
@media (max-width: 640px) {
  .image-container img {
    max-width: 100%;
    max-height: 100%;
  }
}

/* Ensure proper touch targets on mobile */
.touch-manipulation {
  touch-action: manipulation;
}

/* Custom hover effects */
@media (hover: hover) {
  .cursor-pointer:hover img {
    transform: scale(1.05);
  }
}

/* Mobile-specific adjustments */
@media (max-width: 640px) {
  .cursor-pointer {
    margin: 0;
    width: 100%;
  }
}
</style>