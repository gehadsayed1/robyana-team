<template>
  <v-card
    @click="goToProduct"
    class="px-4 flex flex-col justify-between cursor-pointer"
    :class="{ 'mx-auto': $vuetify.display.mdAndUp }"
    :elevation="hovered ? 10 : 2"
    :height="$vuetify.display.xs ? 390 : 390"
    :width="$vuetify.display.xs ? '90%' : $vuetify.display.sm ? '230' : '250'"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    <!-- New Collection + Heart -->
    <div class="flex justify-between items-start mb-2">
      <v-chip color="grey-lighten-1" size="small">New Collection</v-chip>
      <v-btn
        icon
        size="small"
        color="grey-darken-2"
        variant="text"
        @click.stop="toggleWishlist"
      >
        <Heart :class="{ 'text-red bg-red-500': isWishlisted }" />
      </v-btn>
    </div>

    <v-img :src="product.image" height="180" class="rounded-xl mb-4" />
    <div class="text-caption text-grey mb-1">{{ product.category }}</div>
    <div class="font-weight-medium text-body-1 mb-1 text-truncate">
      {{ product.name }}
    </div>
    <div class="mb-4">
      <span class="font-weight-bold text-body-1">{{ product.price }} EGP</span>
      <span
        v-if="product.oldPrice"
        class="text-grey ms-2 text-decoration-line-through text-caption"
      >
        {{ product.oldPrice }} EGP
      </span>
    </div>

    <div class="flex justify-center">
      <v-btn
        color="primary"
        variant="flat"
        class="w-[85%]"
        @click.stop="goToProduct"
      >
        Show More
      </v-btn>
    </div>
  </v-card>
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

.v-btn {
  text-transform: none;
  letter-spacing: 0;
}
</style>
