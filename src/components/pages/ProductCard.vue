<template>
  <div
    @click="goToProduct"
    class="px-4 py-2 flex flex-col justify-between cursor-pointer bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
    :class="{ 'mx-auto': true }"
    :style="{ height: '390px', width: '250px' }"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    <!-- New Collection + Heart -->
    <div class="flex justify-between items-start mb-2 pt-2">
      <span class="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full font-medium">New Collection</span>
      <button
        class="p-1 text-gray-600 hover:text-gray-800 transition-colors"
        @click.stop="toggleWishlist"
      >
        <Heart :class="{ 'text-red-500 fill-current': isWishlisted, 'text-gray-600': !isWishlisted }" class="w-5 h-5" />
      </button>
    </div>

    <!-- Product Image -->
    <div class="flex-1 flex items-center justify-center mb-3">
      <img :src="product.image" class="w-full h-44 object-cover rounded-xl" />
    </div>

    <!-- Product Details -->
    <div class="mb-3">
      <div class="text-xs text-gray-500 mb-1">{{ product.category }}</div>
      <div class="font-medium text-sm mb-2 text-gray-800 truncate leading-tight">
        {{ product.name }}
      </div>
      <div class="flex items-center gap-2">
        <span class="font-bold text-sm text-gray-900">{{ product.price }} EGP</span>
        <span
          v-if="product.oldPrice"
          class="text-gray-400 line-through text-xs"
        >
          {{ product.oldPrice }} EGP
        </span>
      </div>
    </div>

    <!-- Show More Button -->
    <div class="flex justify-center pb-3">
      <button
        class="bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-300 transition-colors w-full text-sm font-medium"
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
.cursor-pointer {
  transition: all 0.3s ease;
}
</style>
