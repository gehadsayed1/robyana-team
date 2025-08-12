<template>
  <section class="mb-12 container mx-auto md:px-16">
    <h2 class="text-3xl font-bold  text-center mb-8">Shop By Categories</h2>

    <!-- Flex for mobile, Grid for desktop -->
    <div class="flex flex-col md:grid md:grid-cols-3 gap-6 text-center">
      <div
        v-for="category in categories"
        :key="category.title"
        class="flex-1 hover:scale-105 transition-transform duration-300 cursor-pointer"
        @click="goToSlideLink(category)"
      >
       
        <img
          :src="category.image"
          :alt="category.title"
          class="rounded-xl w-full h-[300px] md:h-[350px] object-cover shadow-md"
        />
        
        <h3 class="text-lg font-medium mt-3">{{ category.title }}</h3>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

import men from '@/assets/men.jpg';
import women from '@/assets/women.jpg';
import kids from '@/assets/kids.jpg';

const categories = [
  { title: 'Men', image: men },
  { title: 'Women', image: women },
  { title: 'Kids', image: kids }
];

const goToSlideLink = (category) => {
  router.push({ name: 'category' });
};
</script>