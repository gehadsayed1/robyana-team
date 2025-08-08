<template>
  <!-- Navbar -->
  <nav
    class="fixed top-0 left-0 right-0 bg-gray-100 shadow-md flex items-center justify-between px-2 py-6 h-16 z-50"
  >
    <!-- Logo -->
    <router-link to="/">
      <img :src="logo" alt="Logo" class="h-10 w-auto" />
    </router-link>

    <!-- Desktop Nav -->
    <div class="hidden md:flex items-center gap-4">
      <router-link
        v-for="(link, i) in navLinks"
        :key="i"
        :to="link.to"
        class="text-gray-800 text-base font-normal hover:text-primary"
        :class="{
          'text-primary font-bold underline underline-offset-4':
            route.path === link.to,
        }"
      >
        {{ link.label }}
      </router-link>
    </div>

    <!-- Desktop Icons -->
    <div class="hidden md:flex items-center gap-3">
      <Search class="w-6 h-6 text-gray-600 hover:text-primary cursor-pointer" />
      <Heart class="w-6 h-6 text-gray-600 hover:text-primary cursor-pointer" />
      <v-button class="bg-primary text-white px-4 py-1 rounded">Login</v-button>
    </div>

    <!-- Mobile Burger -->
    <v-button class="md:hidden" @click="toggleMenu">
      <component :is="isMenuOpen ? X : Menu" class="w-6 h-6 text-gray-800" />
    </v-button>
  </nav>

  <!-- Mobile Sidebar -->
  <transition name="fade">
    <div v-if="isMenuOpen" class="fixed inset-0 z-40 flex">
      <!-- Overlay -->
      <div
        class="flex-1 bg-[rgba(0,0,0,0.5)] bg-opacity-50"
        @click="closeMenu"
      ></div>

      <!-- Sidebar -->
      <transition name="slide-right">
        <div class="w-74 mt-16   bg-white shadow-lg flex flex-col">
          <!-- User -->
          <div class="flex items-center gap-2 px-4 py-4">
            <div class="w-10 h-10 bg-gray-200 rounded-full"></div>
            <span class="font-medium">Radwa</span>
          </div>

          <!-- Search -->
          <div class="py-2 px-4">
            <div class="flex items-center bg-gray-100 rounded-xl px-3 py-2">
              <input
                type="text"
                placeholder="Search..."
                class="flex-1 relative bg-transparent outline-none text-sm pr-3 placeholder-gray-500"
              />
              <Search
                class="w-5 absolute right-10 h-5 text-gray-900 flex-shrink-0"
              />
            </div>
          </div>

          <!-- Nav Links -->
          <nav class="flex-1 px-4 space-y-2">
            <router-link
              v-for="(link, i) in navLinks"
              :key="i"
              :to="link.to"
              class="block text-gray-800 hover:bg-primary rounded px-2 py-2"
              @click="closeMenu"
            >
              {{ link.label }}
            </router-link>
          </nav>

          <!-- Logout -->
          <div class="py-4    flex justify-center ">
            <!-- Logout -->
            <div class="">
              <button
                class="w-60 borders border-primary text-primary py-2 rounded hover:bg-primary hover:text-white transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup>
import { ref } from "vue";
import { Search, Heart, Menu, X } from "lucide-vue-next";
import { useRoute } from "vue-router";
import logo from "@/assets/logo.png";

const route = useRoute();
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
const closeMenu = () => {
  isMenuOpen.value = false;
};

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Categories", to: "/categories" },
  { label: "Mix & Match", to: "/product-details" },
];
</script>

<style scoped>
/* Sidebar slide-in */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s ease;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
}

/* Fade overlay */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
