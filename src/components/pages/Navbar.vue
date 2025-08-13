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
          class="text-gray-500 text-base hover:text-primary"
          :class="{ 'text-gray-900 font-bold': route.path === link.to }"
        >
          {{ link.label }}
        </router-link>
      </div>

      <div class="hidden md:flex items-center gap-3">
        <div class="relative flex items-center">
          <div v-if="!showSearch" class="cursor-pointer">
            <Search
              class="w-6 h-6 text-gray-600 hover:text-primary"
              @click="toggleSearch"
            />
          </div>

          <div
            v-else
            class="absolute right-24 top-1/2 transform -translate-y-1/2 w-60"
          >
            <div class="relative">
              <input
                type="text"
                placeholder="Search..."
                class="w-full pl-3 pr-10 py-1 text-sm rounded-lg border border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                @click.stop
                @keydown.enter="toggleSearch"
              />
              <Search
                class="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary cursor-pointer"
                @click="toggleSearch"
              />
            </div>
          </div>
        </div>

        <Heart
          class="w-6 h-6 text-gray-600 hover:text-primary cursor-pointer"
        />
        <button class="bg-primary text-white px-4 py-1 rounded">Login</button>
      </div>

      <button class="md:hidden" @click="toggleMenu">
        <component :is="isMenuOpen ? X : Menu" class="w-6 h-6 text-gray-800" />
      </button>
    </div>
  </nav>

  <transition name="slide-right">
    <div
      v-if="isMenuOpen"
      class="fixed inset-y-0 right-0 w-64 bg-white shadow-lg z-50 p-6 flex flex-col gap-6 md:hidden"
    >
      <div class="flex items-center gap-4 mt-8">
        <div class="w-10 h-10 rounded-full bg-gray-200"></div>
        <span class="text-lg font-semibold">Radwa</span>
      </div>

      <div class="relative">
        <input
          type="text"
          placeholder="Search..."
          class="w-full pl-3 pr-10 py-1 rounded-2xl border border-gray-300 focus:outline-none focus:border-primary"
        />
        <Search
          class="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600 cursor-pointer"
        />
      </div>

      <div class="mt-3">
        <router-link
          to="/"
          class="text-gray-700 text-lg hover:text-primary"
          :class="{ 'text-gray-900 font-bold': route.path === '/' }"
          @click="closeMenu"
        >
          Home
        </router-link>

        <div class="mt-3">
          <button
            class="text-gray-700 text-lg hover:text-primary flex items-center gap-2"
            @click="toggleCategories"
          >
            <ChevronDown v-if="showCategories" class="w-4 h-4" />
            <ChevronRight v-else class="w-4 h-4" />
            Categories
          </button>
          <div v-if="showCategories" class="mt-2">
            <router-link
              v-for="(category, i) in categories"
              :key="i"
              :to="category.to"
              class="text-gray-500 text-sm hover:text-primary ml-4"
              @click="closeMenu"
            >
              {{ category.label }}
            </router-link>
          </div>
        </div>

        <div class="mt-3">
          <router-link
            to="/product-details"
            class="text-gray-700 text-lg y hover:text-primary"
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
        class="mt-auto border border-primary text-primary px-4 py-1 rounded w-full"
        @click="logout"
      >
        Logout
      </button>

      <button @click="closeMenu" class="absolute top-4 left-4 text-gray-800">
        <X class="w-6 h-6" />
      </button>
    </div>
  </transition>

  <transition name="fade">
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 bg-[rgba(0,0,0,0.5)] bg-opacity-50 z-40 md:hidden"
      @click="closeMenu"
    ></div>
  </transition>
</template>

<script setup>
import { ref } from "vue";
import {
  Search,
  Heart,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
} from "lucide-vue-next";
import { useRoute } from "vue-router";
import logo from "@/assets/logo.png";

const route = useRoute();
const isMenuOpen = ref(false);
const showSearch = ref(false);
const showCategories = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const toggleSearch = () => {
  showSearch.value = !showSearch.value;
};

const toggleCategories = () => {
  showCategories.value = !showCategories.value;
};

const logout = () => {
  console.log("Logging out...");
};

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Categories", to: "/category" },
  { label: "Mix & Match", to: "/product-details" },
];

const categories = [
  { label: "Category 1", to: "/categories/1" },
  { label: "Category 2", to: "/categories/2" },
  { label: "Category 3", to: "/categories/3" },
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
</style>
