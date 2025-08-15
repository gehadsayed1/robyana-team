<template>
  <nav class="fixed top-0 left-0 right-0 bg-white shadow-md z-50 h-16">
    <div
      class="container mx-auto flex items-center justify-between px-5 md:px-16 h-full"
    >
      <router-link to="/" @click="closeMenu">
        <img :src="logo" alt="Logo" class="h-10 w-auto" />
      </router-link>

      <div class="hidden md:flex items-center gap-8">
        <router-link
          v-for="(link, i) in navLinks"
          :key="i"
          :to="link.to"
          class="text-gray-500 text-base hover:text-primary transition-colors"
          :class="{ 'text-gray-900 font-bold': route.path === link.to }"
        >
          {{ link.label }}
        </router-link>
      </div>

      <div class="hidden md:flex items-center gap-3">
        <!-- Search Component with Fixed Width -->
        <div class="w-60 flex justify-end">
          <!-- Search Icon (when search is closed) -->
          <div v-if="!showSearch" class="cursor-pointer bg-gray-100 p-2 rounded-full">
            <Search
              class="w-5 h-5 text-gray-600 hover:text-primary transition-colors"
              @click="toggleSearch"
            />
          </div>

          <!-- Search Input (when search is open) -->
          <div
            v-else
            class="w-full"
          >
            <div class="relative">
              <input
                ref="searchInput"
                type="text"
                placeholder="Search..."
                class="w-full pl-3 pr-10 py-2 text-sm bg-gray-100 rounded-3xl border-2 border-gray-300 focus:outline-none focus:ring-0 "
                @click.stop
                @keydown.enter="handleSearch"
                @keydown.escape="toggleSearch"
                @blur="handleSearchBlur"
                v-model="searchQuery"
              />
              <Search
                class="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 cursor-pointer"
                @click="handleSearch"
              />
            </div>
          </div>
        </div>

     <div class="flex items-center bg-gray-100 p-2 rounded-full cursor-pointer">
         <Heart
          class="w-5 h-5 text-gray-600 hover:text-primary cursor-pointer transition-colors"
          @click="goToWishlist"
        />
     </div>
        <button 
          class="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors whitespace-nowrap"
          @click="handleLogin"
        >
          Login
        </button>
      </div>

      <button class="md:hidden" @click="toggleMenu">
        <component :is="isMenuOpen ? X : Menu" class="w-6 h-6 text-gray-800" />
      </button>
    </div>
  </nav>

  <!-- Mobile Menu -->
  <transition name="slide-right">
    <div
      v-if="isMenuOpen"
      class="fixed inset-y-0 right-0 w-64 bg-white shadow-lg z-50 p-6 flex flex-col gap-6 md:hidden"
    >
      <div class="flex items-center gap-4 mt-8">
        <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
          <span class="text-gray-600 font-semibold text-sm">R</span>
        </div>
        <span class="text-lg font-semibold">Radwa</span>
      </div>

      <div class="relative">
        <input
          type="text"
          placeholder="Search..."
          class="w-full pl-3 pr-10 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
          v-model="mobileSearchQuery"
          @keydown.enter="handleMobileSearch"
        />
        <Search
          class="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600 cursor-pointer"
          @click="handleMobileSearch"
        />
      </div>

      <div class="mt-3 flex-1">
        <router-link
          to="/"
          class="text-gray-700 text-lg hover:text-primary block mb-3 transition-colors"
          :class="{ 'text-gray-900 font-bold': route.path === '/' }"
          @click="closeMenu"
        >
          Home
        </router-link>

        <div class="mt-3">
          <button
            class="text-gray-700 text-lg hover:text-primary flex items-center gap-2 w-full text-left transition-colors"
            @click="toggleCategories"
          >
            <ChevronDown v-if="showCategories" class="w-4 h-4" />
            <ChevronRight v-else class="w-4 h-4" />
            Categories
          </button>
          <div v-if="showCategories" class="mt-2 ml-6">
            <router-link
              v-for="(category, i) in categories"
              :key="i"
              :to="category.to"
              class="text-gray-500 text-sm hover:text-primary block py-1 transition-colors"
              @click="closeMenu"
            >
              {{ category.label }}
            </router-link>
          </div>
        </div>

        <div class="mt-3">
          <router-link
            to="/product-details"
            class="text-gray-700 text-lg hover:text-primary block transition-colors"
            :class="{
              'text-gray-900 font-bold': route.path === '/product-details',
            }"
            @click="closeMenu"
          >
            Mix & Match
          </router-link>
        </div>
      </div>

      <button
        class="mt-auto border border-primary text-primary px-4 py-2 rounded w-full hover:bg-primary hover:text-white transition-colors"
        @click="showPopup = true"
      >
        Logout
      </button>

      <button @click="closeMenu" class="absolute top-4 left-4 text-gray-800 hover:text-primary transition-colors">
        <X class="w-6 h-6" />
      </button>
    </div>
  </transition>

  <!-- Mobile Menu Overlay -->
  <transition name="fade">
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 bg-[rgba(0,0,0,0.5)] bg-opacity-50 z-40 md:hidden"
      @click="closeMenu"
    ></div>
  </transition>

  <!-- Popup Component -->
  <PupUop v-if="showPopup" @close="showPopup = false" />
</template>

<script setup>
import { ref, nextTick } from "vue";
import {
  Search,
  Heart,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
} from "lucide-vue-next";
import { useRoute, useRouter } from "vue-router";
import logo from "@/assets/logo.png";
import PupUop from "../global/PupUop.vue";

const route = useRoute();
const router = useRouter();
const isMenuOpen = ref(false);
const showSearch = ref(false);
const showCategories = ref(false);
const showPopup = ref(false);
const searchQuery = ref("");
const mobileSearchQuery = ref("");
const searchInput = ref(null);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
  showCategories.value = false;
};

const toggleSearch = async () => {
  showSearch.value = !showSearch.value;
  
  if (showSearch.value) {
    // Focus on input after it's rendered
    await nextTick();
    searchInput.value?.focus();
  } else {
    searchQuery.value = "";
  }
};

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    console.log("Searching for:", searchQuery.value);
    // Add your search logic here
    // router.push({ name: 'search', query: { q: searchQuery.value } });
  }
  toggleSearch();
};

const handleMobileSearch = () => {
  if (mobileSearchQuery.value.trim()) {
    console.log("Mobile searching for:", mobileSearchQuery.value);
    // Add your search logic here
    closeMenu();
  }
};

const handleSearchBlur = () => {
  // Close search after a small delay to allow clicking the search button
  setTimeout(() => {
    showSearch.value = false;
    searchQuery.value = "";
  }, 150);
};

const toggleCategories = () => {
  showCategories.value = !showCategories.value;
};

const goToWishlist = () => {
  router.push({ name: 'wishlist' });
};

const handleLogin = () => {
  router.push({ name: 'login' });
};

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Categories", to: "/category" },
  { label: "Mix & Match", to: "/product-details" },
];

const categories = [
  { label: "Category 1", to: "/category" },
  { label: "Category 2", to: "/category" },
  { label: "Category 3", to: "/category" },
];
</script>

<style scoped>
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s ease;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Custom focus styles */
input:focus {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
}

/* Smooth transitions */
* {
  transition-property: color, background-color, border-color, transform, opacity;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;
}
</style>
