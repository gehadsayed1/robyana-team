<template>
  <div class="flex flex-col md:flex-row gap-4 items-center justify-center py-4 px-5 md:px-16">
    <img :src="image2" alt="Image 1" class="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-md" />
    <img :src="image1" alt="Image 2" class="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-md" />
  </div>
</template>

<script setup>
import image1 from '@/assets/best-sellar.jpg'
import image2 from '@/assets/new-collection.jpg'

</script>
