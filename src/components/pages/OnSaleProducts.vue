<template>
  <section >
   

    <!-- تغليف الكروت في فليكس علشان نتحكم -->
    <div class="flex flex-wrap justify-center gap-6">
      <div
        v-for="(product, index) in products"
        :key="index"
        class=" rounded-xl p-4 shadow-md hover:shadow-xl transition w-[300px] h-[500px] flex flex-col justify-between bg-white"
      >
        <!-- الأعلى -->
        <div>
          <div class="flex justify-between items-start mb-2">
            <span class="text-xs bg-gray-100 px-2 py-1 rounded-full">New Collection</span>
            <Heart />
          </div>

         
          <img
            :src="product.image"
            alt="Product"
            class="w-full h-64 object-cover rounded-md mb-4"
          />

          <!-- تفاصيل المنتج -->
          <div class="text-sm text-gray-600 mb-1">{{ product.category }}</div>
          <h3 class="font-semibold text-lg mb-1">{{ product.name }}</h3>
          <div class="mb-4">
            <span class="text-black font-bold">{{ product.price }} EGP</span>
            <span class="line-through text-gray-400 ml-2">{{ product.oldPrice }} EGP</span>
          </div>
        </div>

        <!-- الزر -->
        <router-link
          :to="`/product/${index}`"
          class="bg-primary text-white m-auto w-[50%] text-sm px-4 py-2 rounded hover:bg-blue-400 text-center"
        >
          Show More
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import skirt from '@/assets/skirt.jpg'
import { Heart } from 'lucide-vue-next';

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
  }
]
</script>
