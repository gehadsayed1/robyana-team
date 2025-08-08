<script setup>
import ProductCard from '../components/pages/ProductCard.vue';
import Recommend from '../components/pages/Recommend.vue';
import ShopByCategories from '../components/pages/ShopByCategories.vue';

import skirt from '@/assets/skert2.jpg'

const products =  [
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
    id: 4,
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
  }
]
</script>
<template>
  <v-container>
   <v-main>
     <Recommend />
    <ShopByCategories />
 <v-row dense>
 <v-row class="mt-8 mb-12 px-4">
 
  <v-col cols="12" class="text-center">
    <h2 class="text-h5 font-weight-bold mb-6">On Sale</h2>
  </v-col>

  
  <v-col
    v-for="product in products"
    :key="product.id"
    cols="12"      
    sm="6"        
    lg="3"        
    class="flex justify-center" 
  >
    <ProductCard :product="product" />
  </v-col>
</v-row>
</v-row>


   </v-main>

  </v-container>
</template>