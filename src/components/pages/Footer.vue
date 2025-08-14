<template>
  <footer class="bg-white text-gray-800 border-t border-gray-200">
    <div class="container mx-auto px-4 py-6 md:py-8">
      <!-- Logo & Description Section -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
        <div class="flex-shrink-0">
          <img
            src="@/assets/logo.png"
            alt="ZARA Logo"
            class="w-20 md:w-24 lg:w-28 h-auto object-contain"
          />
        </div>
        <p class="text-sm md:text-base lg:text-lg font-medium leading-relaxed text-gray-700 max-w-2xl md:text-right">
          Step into a world of fashion that's always ahead. From timeless
          everyday wear to bold statement pieces, ZARA brings you the latest
          trends with a touch of effortless style. Redefine your wardrobe with
          pieces that speak your style, your way.
        </p>
      </div>

      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 items-start">
        
        <!-- Navigation Links -->
        <div class="order-2 md:order-1">
          <h3 class="text-lg font-bold mb-4 text-gray-800">Quick Links</h3>
          <ul class="space-y-3">
            <li>
              <a href="#" class="text-gray-600 hover:text-gray-800 hover:underline transition-colors duration-200 flex items-center gap-2">
                <span class="w-1 h-1 bg-gray-400 rounded-full"></span>
                Home
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-600 hover:text-gray-800 hover:underline transition-colors duration-200 flex items-center gap-2">
                <span class="w-1 h-1 bg-gray-400 rounded-full"></span>
                Categories
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-600 hover:text-gray-800 hover:underline transition-colors duration-200 flex items-center gap-2">
                <span class="w-1 h-1 bg-gray-400 rounded-full"></span>
                Mix & Match
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Information -->
        <div class="order-1 md:order-2">
          <h3 class="text-lg font-bold mb-4 text-gray-800">Visit Our Store</h3>
          <div class="space-y-4">
            <!-- Address -->
            <div class="flex items-start gap-3">
              <MapPin class="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
              <div class="text-sm text-gray-600">
                <p class="font-medium text-gray-800">Cairo Festival City Mall</p>
                <p class="leading-relaxed">
                  Ring Road, Cairo Festival City<br>
                  2nd Floor, New Cairo, Cairo
                </p>
              </div>
            </div>
            
            <!-- Phone -->
            <div class="flex items-center gap-3">
              <Phone class="w-5 h-5 text-gray-500 flex-shrink-0" />
              <a 
                href="tel:+201007972537" 
                class="text-sm text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"
              >
                +2 01007972537
              </a>
            </div>
          </div>
        </div>

        <!-- Scroll to Top Button -->
        <div class="order-3 flex justify-start md:justify-end">
          <button
            @click="scrollToTop"
            class="bg-gray-50 hover:bg-gray-100 border-2 border-gray-200 w-14 h-14 rounded-full 
                   flex flex-col items-center justify-center transition-all duration-200 
                   hover:scale-105 hover:shadow-md group"
            aria-label="Scroll to top"
          >
            <svg 
              class="w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
            <span class="text-xs text-gray-600 group-hover:text-gray-800 mt-1 font-medium">Top</span>
          </button>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="mt-8 pt-6 border-t border-gray-100">
        <div class="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; 2024 ZARA. All rights reserved.</p>
          <div class="flex gap-4">
            <a href="#" class="hover:text-gray-700 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" class="hover:text-gray-700 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { MapPin, Phone } from "lucide-vue-next";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<style scoped>
/* تأثيرات إضافية للتفاعل */
@media (hover: hover) {
  .group:hover svg {
    transform: translateY(-1px);
  }
}

/* تحسينات للشاشات الصغيرة */
@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>