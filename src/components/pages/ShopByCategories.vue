<template>
  <section class="mb-12 container mx-auto px-4">
    <h2 class="text-3xl font-bold mt-6 text-center mb-8">Shop By Categories</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
      <div
        v-for="category in categories"
        :key="category.title"
        class="space-y-2 hover:scale-105 transition-transform duration-300 cursor-pointer"
        @click="goToSlideLink(category)"
      >
        <img
          :src="category.image"
          :alt="category.title"
          class="rounded-xl w-full h-[350px] object-cover shadow-md"
        />
        <h3 class="text-lg font-medium">{{ category.title }}</h3>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

import men from '@/assets/men.jpg'
import women from '@/assets/women.jpg'
import kids from '@/assets/kids.jpg'

const categories = [
  { title: 'Men', image: men },
  { title: 'Women', image: women },
  { title: 'Kids', image: kids }
]

const goToSlideLink = (category) => {
  // بتوديك دايمًا لنفس الصفحة
  router.push({ name: 'category' })

  // ✅ لو حابة تروحي لنفس الصفحة لكن تبعتي الـ category كـ param:
  // router.push({ name: 'category', params: { type: category.title.toLowerCase() } })
}
</script>
