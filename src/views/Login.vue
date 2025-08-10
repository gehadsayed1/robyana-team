<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <div
      class="bg-white shadow-lg rounded-lg w-full max-w-6xl flex flex-col md:flex-row overflow-hidden animate-fadeIn"
    >
      <!-- Left Section -->
      <div class="md:w-1/2 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center p-10 text-white">
        <div class="text-center space-y-3">
          <h2 class="text-3xl md:text-4xl font-bold">Welcome to Robyana</h2>
          <p class="text-sm opacity-90">Discover the latest trends at your fingertips.</p>
          <p class="text-sm opacity-90">Enjoy shopping with style and ease.</p>
        </div>
      </div>

      <!-- Right Section -->
      <div class="md:w-1/2 py-10 px-6 flex flex-col justify-center items-center">
        <h3 class="text-2xl font-bold mb-1">Get Started</h3>
        <p class="text-sm text-gray-500 mb-6">
          Don't have an account yet?
          <a href="#" class="text-blue-600 hover:underline">Sign up here</a>
        </p>

        <!-- Phone input section -->
        <div class="flex items-center gap-2 mb-5 w-full max-w-sm">
          <select
            v-model="selectedCode"
            class="border border-gray-300 rounded-md px-2 py-2 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option value="+20">+20</option>
            <option value="+966">+966</option>
          </select>
          <input
            v-model="phone"
            type="text"
            placeholder="Phone Number"
            class="border border-gray-300 rounded-md px-3 py-2 text-sm flex-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <!-- Login Button -->
        <button
          @click="login"
          class="w-full max-w-sm bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md mb-5 transition duration-200"
        >
          Login
        </button>

        <!-- Divider -->
        <div class="flex items-center my-4 w-full max-w-sm">
          <hr class="flex-grow border-gray-300" />
          <span class="mx-2 text-sm text-gray-500">or</span>
          <hr class="flex-grow border-gray-300" />
        </div>

        <!-- Guest Mode -->
        <p class="text-xs text-gray-500 mb-2">
          Want to try without signing up? Just tell us a bit about your size...
        </p>
        <button
          @click="guestMode"
          class="w-full max-w-sm bg-gray-200 hover:bg-gray-300 text-black py-2 rounded-md mb-4 transition duration-200"
        >
          Guest Mode
        </button>

        <!-- Explore Freely -->
        <p class="text-xs text-gray-500 mb-2">
          Just looking around? You're welcome to explore all our products.
        </p>
        <button
          @click="explore"
          class="w-full max-w-sm border border-gray-400 hover:bg-gray-100 text-black py-2 rounded-md transition duration-200"
        >
          Explore Freely
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedCode = ref('+20')
const phone = ref('')

const login = () => {
  console.log('Logging in:', selectedCode.value, phone.value)
}
const guestMode = () => {
  console.log('Guest mode activated')
}
const explore = () => {
  console.log('Explore freely mode activated')
}
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeIn {
  animation: fadeIn 0.6s ease-out;
}
</style>
