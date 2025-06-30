<template>
  <v-container fluid>
    <v-row justify="center" align="stretch" class="gap-5">
      <v-col
        v-for="(product, index) in products"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        class="d-flex"
      >
        <v-card
          class="rounded-xl pa-4 d-flex flex-column justify-space-between"
          height="450"
          width="500"
          elevation="3"
        >
          <!-- Header Tags and Icon -->
          <div class="d-flex justify-space-between align-start mb-2">
            <v-chip color="grey-lighten  " size="small">New Collection</v-chip>
            <v-btn icon size="small" color="grey-darken-2" variant="text">
              <Heart />
            </v-btn>
          </div>

          <!-- Image -->
          <v-img
            :src="product.image"
            height="180"
            class="rounded mb-4"
            cover
          ></v-img>

          <!-- Product Details -->
          <div class="text-caption text-grey mb-1">{{ product.category }}</div>
          <div class="font-weight-medium text-body-1 mb-1">{{ product.name }}</div>
          <div class="mb-4">
            <span class="font-weight-bold">{{ product.price }} EGP</span>
            <span class="text-grey text-decoration-line-through ms-2">{{ product.oldPrice }} EGP</span>
          </div>

          <!-- Button -->
          <router-link :to="`/product/${index}`" class="text-center">
            <v-btn color="primary" class="mx-auto w-50 " size="small">
              Show More
            </v-btn>
          </router-link>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { Heart } from 'lucide-vue-next';
import skirt from '@/assets/skirt.jpg';

const products = [
  {
    image: skirt,
    name: 'Maxi Long Skirts for Women',
    category: 'Women',
    price: 699,
    oldPrice: 1200
  },
    {
    image: skirt,
    name: 'Maxi Long Skirts for Women',
    category: 'Women',
    price: 699,
    oldPrice: 1200
  },
    {
    image: skirt,
    name: 'Maxi Long Skirts for Women',
    category: 'Women',
    price: 699,
    oldPrice: 1200
  },
      {
    image: skirt,
    name: 'Maxi Long Skirts for Women',
    category: 'Women',
    price: 699,
    oldPrice: 1200
  },
      {
    image: skirt,
    name: 'Maxi Long Skirts for Women',
    category: 'Women',
    price: 699,
    oldPrice: 1200
  },
      {
    image: skirt,
    name: 'Maxi Long Skirts for Women',
    category: 'Women',
    price: 699,
    oldPrice: 1200
  },
  
];
</script>
