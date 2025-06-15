<template>
  <nav class="bg-white shadow-md mb-4">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Logo -->
      <div >

        <router-link to="/" class="text-2xl font-bold text-gray-800">
          <img src="@/assets/logo.png" alt="Logo" class="w-20 h-auto object-contain" />
        </router-link>
      </div>

      <!-- Links -->
 <ul class="hidden md:flex space-x-4 text-base">
  <li>
    <router-link
      to="/"
      class="text-gray-800 hover:text-primary"
      exact-active-class="text-primary font-bold underline underline-offset-4"
    >
      Home
    </router-link>
  </li>
  <li>
    <router-link
      to="/categories"
      class="text-gray-800 hover:text-primary"
      exact-active-class="text-primary font-bold underline underline-offset-4"
    >
      Categories
    </router-link>
  </li>
  <li>
    <router-link
      to="/mix-match"
      class="text-gray-800 hover:text-primary"
      exact-active-class="text-primary font-bold underline underline-offset-4"
    >
      Mix & Match
    </router-link>
  </li>
</ul>


      <!-- Right Side -->
      <div class="flex items-center space-x-4">
        <!-- Search Icon -->
        <button class="text-gray-600 hover:text-primary">
      
        <Search class="h-6 w-6" />
        </button>

        <!-- Heart Icon -->
        <button class="text-gray-600 hover:text-primary">
        <Heart class="h-6 w-6" />
          
        </button>

        <!-- Login Button -->
        <button class="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">
          Login
        </button>
      </div>

      <!-- Mobile Menu Toggle -->
      <button @click="toggleMenu" class="md:hidden focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="md:hidden bg-white shadow-md">
      <ul class="px-4 py-2">
        <li><a href="#" class="block px-4 py-2 text-gray-800 hover:bg-primary hover:text-white">Home</a></li>
        <li><a href="#" class="block px-4 py-2 text-gray-800 hover:bg-primary hover:text-white">Categories</a></li>
        <li><a href="#" class="block px-4 py-2 text-gray-800 hover:bg-primary hover:text-white">Mix & Match</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { Search  ,Heart} from 'lucide-vue-next'
import { useRouter } from 'vue-router';


const router = useRouter();


    const   isMenuOpen = ref(false),
 
  
  toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };

</script>

<style scoped>
/* Add any custom styles here */
</style>