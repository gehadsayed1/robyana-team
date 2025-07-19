<template>
  <v-card
    @click="router.push({ name: 'product-details' })"
    class="pa-4 d-flex flex-column justify-space-between"
    height="400"
    width="250"
    :elevation="hovered ? 10 : 3"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    <div class="d-flex justify-space-between align-start mb-2">
      <v-chip color="grey-lighten" size="small">New Collection</v-chip>
      <v-btn icon size="small" color="grey-darken-2" variant="text">
        <Heart />
      </v-btn>
    </div>

    <v-img :src="product.image" height="180" class="rounded mb-4" cover />

    <div class="text-caption text-grey mb-1">{{ product.category }}</div>
    <div class="font-weight-medium text-body-1 mb-1">{{ product.name }}</div>
    <div class="mb-4">
      <span class="font-weight-bold">{{ product.price }} EGP</span>
      <span class="text-grey text-decoration-line-through ms-2"
        >{{ product.oldPrice }} EGP</span
      >
    </div>

    <router-link :to="`/product/${product.id}`" class="text-center">
      <v-btn color="primary" class="mx-auto w-50" size="small">
        Show More
      </v-btn>
    </router-link>
  </v-card>
</template>

<script setup>
import { Heart } from "lucide-vue-next";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

defineProps({
  product: Object,
});

const hovered = ref(false);
</script>
