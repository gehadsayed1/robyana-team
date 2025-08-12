<script setup>
import ProductCard from '../components/pages/ProductCard.vue';
import Recommend from '../components/pages/Recommend.vue';
import ShopByCategories from '../components/pages/ShopByCategories.vue';

import skirt from '@/assets/skert2.jpg'

const products = [
  {
    id: 1,
    image: skirt,
    name: 'Maxi Long Skirts',
    category: 'Women',
    price: 699,
    oldPrice: 1200
  },
  {
    id: 2,
    image: skirt,
    name: 'Maxi Long Skirts',
    category: 'Women',
    price: 699,
    oldPrice: 1200
  },
  {
    id: 3,
    image: skirt,
    name: 'Maxi Long Skirts',
    category: 'Women',
    price: 699,
    oldPrice: 1200
  },
  {
    id: 4,
    image: skirt,
    name: 'Maxi Long Skirts',
    category: 'Women',
    price: 699,
    oldPrice: 1200
  },
  {
    id: 5,
    image: skirt,
    name: 'Maxi Long Skirts',
    category: 'Women',
    price: 699,
    oldPrice: 1200
  },
  {
    id: 6,
    image: skirt,
    name: 'Maxi Long Skirts',
    category: 'Women',
    price: 699,
    oldPrice: 1200
  },
  {
    id: 7,
    image: skirt,
    name: 'Maxi Long Skirts',
    category: 'Women',
    price: 699,
    oldPrice: 1200
  },
  {
    id: 8,
    image: skirt,
    name: 'Maxi Long Skirts',
    category: 'Women',
    price: 699,
    oldPrice: 1200
  }
]
</script>

<template>
  <div class="container mx-auto px-4 pt-10">
    <!-- Sections -->
 
    <ShopByCategories />
    <Recommend />

    <!-- On Sale Section -->
    <div class="mt-8 mb-12 md:px-16">
      <h2 class="text-center text-2xl font-bold mb-6">On Sale</h2>

      <!-- Product Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="product in products"
          :key="product.id"
          class="flex justify-center"
        >
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>
