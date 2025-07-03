<template>
  <div class="min-h-screen bg-gray-200 flex items-center justify-center">
    <div class="bg-white shadow-md rounded-md w-full max-w-6xl flex flex-col md:flex-row overflow-hidden">
      
      <!-- Left Section -->
      <div class="md:w-1/2 bg-gray-100 flex items-center justify-center p-10">
        <div class="text-center">
          <h2 class="text-2xl md:text-3xl font-semibold mb-4">Welcome to Robyana</h2>
          <p class="text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
          <p class="text-gray-600">Lorem ipsum dolor sit amet</p>
        </div>
      </div>

      <!-- Right Section -->
      <div class="md:w-1/2 py-10 px-5 flex flex-col justify-center items-center">
        <h3 class="text-xl font-semibold mb-1">Get Started</h3>
        <p class="text-sm text-gray-500 mb-4">
          Don't have an account yet?
          <a href="#" class="text-blue-500 underline">Sign up here</a>
        </p>

        <!-- Phone input section -->
        <div class="flex items-center gap-2 mb-4">
          <select v-model="selectedCode" class="border border-gray-300 rounded-md p-2 w-24">
            <option value="+20">+20</option>
            <option value="+966">+966</option>
          </select>
          <input
            v-model="phone"
            type="text"
            placeholder="Phone Number"
            class="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        <!-- Login Button -->
        <button @click="login" class="w-full bg-blue-500 text-white py-2 rounded-md mb-4">
          Login
        </button>

        <!-- Divider -->
        <div class="flex items-center my-4">
          <hr class="flex-grow border-gray-300" />
          <span class="mx-2 text-sm text-gray-500">or</span>
          <hr class="flex-grow border-gray-300" />
        </div>

        <!-- Guest Mode -->
        <p class="text-xs text-gray-500 mb-2">
          Want to try without signing up? Just tell us a bit about your size...
        </p>
        <button @click="guestMode" class="w-full bg-gray-200 text-black py-2 rounded-md mb-4">
          Guest Mode
        </button>

        <!-- Explore Freely -->
        <p class="text-xs text-gray-500 mb-2">
          Just looking around? You're welcome to explore all our products.
        </p>
        <button @click="explore" class="w-full border border-gray-400 text-black py-2 rounded-md">
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
