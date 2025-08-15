<template>
  <footer class="bg-white text-gray-800 py-5 px-4 md:px-8">
    <div class="container mx-auto">
      <!-- Mobile Layout -->
      <div class="block md:hidden">
        <!-- Logo -->
        <div class="flex justify-start mb-4">
          <img
            src="@/assets/logo.png"
            alt="ZARA Logo"
            class="w-24 h-auto object-contain"
          />
        </div>

        <!-- Description -->
        <p class="text-sm font-medium leading-relaxed text-left mb-6">
          Step into a world of fashion that's always ahead. From timeless
          everyday wear to bold statement pieces, ZARA brings you the latest
          trends with a touch of effortless style.
        </p>

        <!-- Navigation -->
        <div class="mb-6">
          <ul class="flex justify-start gap-6 text-sm font-semibold text-gray-800">
            <li><a href="#" class="hover:underline hover:text-blue-600 transition-colors">Home</a></li>
            <li><a href="#" class="hover:underline hover:text-blue-600 transition-colors">Categories</a></li>
            <li><a href="#" class="hover:underline hover:text-blue-600 transition-colors">Mix & Match</a></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="mb-6 space-y-3">
          <div class="flex items-start gap-3">
            <MapPin class="w-4 h-4 mt-1 flex-shrink-0 text-gray-600" />
            <div class="text-sm">
              <p class="font-medium">Cairo Festival City Mall</p>
              <p class="text-gray-600 text-xs leading-relaxed">
                Ring Road, Cairo Festival City, 2nd Floor, New Cairo, Cairo
              </p>
            </div>
          </div>
          
          <div class="flex items-center gap-3">
            <Phone class="w-4 h-4 text-gray-600" />
            <a href="tel:+201007972537" class="text-sm font-medium hover:text-blue-600 transition-colors">
              +2 01007972537
            </a>
          </div>
        </div>

        <!-- Scroll to Top Button -->
        <div class="flex justify-start">
          <button
            @click="scrollToTop"
            class="bg-gray-50 border border-gray-300 w-12 h-12 rounded-full text-xs flex flex-col items-center justify-center hover:bg-gray-100 transition-all hover:scale-105"
          >
            <ArrowUp :size="16" />
            <span class="text-[10px] mt-1">Top</span>
          </button>
        </div>
      </div>

      <!-- Desktop Layout -->
      <div class="hidden md:flex justify-between">
        <!-- Left Side -->
        <div class="flex flex-col items-start gap-3 w-[20%]">
          <img
            src="@/assets/logo.png"
            alt="ZARA Logo"
            class="md:w-60 lg:w-70 h-auto object-contain"
          />
          
          <ul class="list-disc list-inside px-2 text-md font-semibold text-gray-800 space-y-1">
            <li><a href="#" class="hover:underline hover:text-blue-600 transition-colors">Home</a></li>
            <li><a href="#" class="hover:underline hover:text-blue-600 transition-colors">Categories</a></li>
            <li><a href="#" class="hover:underline hover:text-blue-600 transition-colors">Mix & Match</a></li>
          </ul>
        </div>
        
        <!-- Right Side -->
        <div class="flex flex-col gap-10 py-4 flex-1">
          <p class="text-lg font-medium leading-relaxed max-w-4xl">
            Step into a world of fashion that's always ahead. From timeless
            everyday wear to bold statement pieces, ZARA brings you the latest
            trends with a touch of effortless style. Redefine your wardrobe with
            pieces that speak your style, your way.
          </p>
         
          <div class="text-sm flex justify-between items-center">
            <div>
              <div class="flex items-start gap-3">
                <MapPin class="w-5 h-5 mt-0.5 text-gray-600" />
                <div>
                  <p class="font-medium">Cairo Festival City Mall (New Cairo)</p>
                  <p class="text-gray-600 text-xs leading-relaxed">
                    Address: Ring Road, Cairo Festival City, 2nd Floor, New Cairo, Cairo
                  </p>
                </div>
              </div>
                        
              <div class="flex mt-3 items-center gap-3">
                <Phone class="w-5 h-5 text-gray-600" />
                <a href="tel:+201007972537" class="hover:text-blue-600 transition-colors font-medium">
                  +2 01007972537
                </a>
              </div>
            </div>
                  
            <button
              @click="scrollToTop"
              class="bg-white border border-gray-300 w-12 h-12 rounded-full text-xs flex flex-col items-center justify-center hover:bg-gray-200 transition-all hover:scale-105"
            >
              <ArrowUp :size="17" />
              <span class="text-[10px]">Top</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="mt-6 pt-4 border-t border-gray-100 text-center md:text-left">
        <p class="text-xs text-gray-500">&copy; 2024 ZARA. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ArrowUp, MapPin, Phone } from "lucide-vue-next";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<style scoped>

@media (max-width: 360px) {
  .container {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  
  ul {
    gap: 1rem;
  }
  
  p {
    font-size: 0.8rem;
  }
}


button:active {
  transform: scale(0.95);
}
</style>