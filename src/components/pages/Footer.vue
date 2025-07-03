<template>
  <footer class="bg-gray-100 text-gray-800 px-6 py-6">
    <div class="container mx-auto space-y-6">

      <!-- 🔹 Top Row: Logo + Description -->
      <div class="flex  justify-between flex-wrap items-center ">
        <img src="@/assets/logo.png" alt="ZARA Logo" class="w-70 h-auto object-contain" />
        <p class="text-lg font-medium leading-relaxed max-w-4xl">
          Step into a world of fashion that’s always ahead. From timeless everyday wear to bold statement pieces,
          ZARA brings you the latest trends with a touch of effortless style. Redefine your wardrobe with pieces
          that speak your style, your way.
        </p>
      </div>

      <!-- 🔹 Bottom Row: Links + Info + Scroll Top -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6  pt-6">
        
        <!-- Links -->
  <ul class="list-disc list-inside space-y-2 text-md  font-semibold text-gray-800">
  <li><a href="#" class="hover:underline">Home</a></li>
  <li><a href="#" class="hover:underline">Categories</a></li>
  <li><a href="#" class="hover:underline">Mix & Match</a></li>
</ul>


      
      <!-- Address and Phone -->
      <div class="text-sm space-y-3 max-w-sm">
        <!-- Location -->
        <div class="flex items-start gap-3">
         <MapPin />
          <div>
            <p>Cairo Festival City Mall (New Cairo)</p>
            <p class="text-gray-600 text-xs">
              Address: Ring Road, Cairo Festival City, 2nd Floor, New Cairo, Cairo
            </p>
          </div>
        </div>
        <!-- Phone -->
        <div class="flex items-center gap-3">
       <Phone />
          <span>+2 01007972537</span>
        </div>
      </div>
        <!-- Scroll To Top Button -->
        <button
          @click="scrollToTop"
          class="bg-white border border-gray-300 w-12 h-12 rounded-full text-xs flex flex-col items-center justify-center hover:bg-gray-200 transition"
        >
          <i class="fas fa-arrow-up text-sm"></i>
          <span class="text-[10px]">Top</span>
        </button>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { MapPin, Phone } from 'lucide-vue-next';

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
