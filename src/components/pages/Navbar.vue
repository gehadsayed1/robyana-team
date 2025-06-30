<template>
  <v-app-bar
color="grey-lighten-4"
 flat

  class="shadow-md mb-4 "
>
  <!-- Logo -->
  <router-link to="/" class="me-4">
    <v-img :src="logo" contain height="40" width="90" />
 

  </router-link>

  <!-- Centered Nav Links -->
  <div class="flex-1 flex justify-center items-center hidden md:flex">
    <v-btn
      v-for="(link, i) in navLinks"
      :key="i"
      :to="link.to"
      variant="text"
      class="text-gray-800 text-base font-normal"
      :class="{ 'text-primary font-bold underline underline-offset-4': $route.path === link.to }"
    >
      {{ link.label }}
    </v-btn>
    
  </div>



  <!-- Icons + Login -->
  <v-btn icon class="text-gray-600 hover:text-primary">
    <Search class="w-6 h-6" />
  </v-btn>

  <v-btn icon class="text-gray-600 hover:text-primary">
    <Heart class="w-6 h-6" />
  </v-btn>

  <v-btn color="primary" class="text-white px-4">
    Login
  </v-btn>

  <!-- Mobile toggle -->
  <v-btn icon class="md:hidden" @click="toggleMenu">
    <v-icon>mdi-menu</v-icon>
  </v-btn>
</v-app-bar>


  <!-- Mobile Menu -->
  <v-expand-transition>
    <div v-if="isMenuOpen" class="md:hidden bg-white shadow-md">
      <v-list>
        <v-list-item
          v-for="(link, i) in navLinks"
          :key="i"
          :to="link.to"
          @click="closeMenu"
        >
          <v-list-item-title class="text-gray-800 hover:bg-primary hover:text-white rounded px-2 py-1">
            {{ link.label }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </div>
  </v-expand-transition>
</template>

<script setup>
import { ref } from "vue";
import { Search, Heart } from "lucide-vue-next";
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
  { label: "Mix & Match", to: "/" },
];
</script>

<style scoped>
/* optional additional styles */
</style>
