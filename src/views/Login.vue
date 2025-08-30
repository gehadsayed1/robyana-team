<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <div
      class="bg-white shadow-lg rounded-lg w-full max-w-6xl flex flex-col md:flex-row overflow-hidden animate-fadeIn"
    >
      <!-- Left Section -->
      <div class="w-1/2">
        <div
          class="relative w-full h-screen bg-gradient-to-tr from-blue-500 to-blue-400 overflow-hidden flex items-center justify-center"
        >
          <!-- النجوم -->
          <svg
            class="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
          >
            <defs>
              <pattern
                id="stars"
                x="0"
                y="0"
                width="200"
                height="200"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M100 30 L110 70 L150 80 L120 110 L130 160 L100 130 L70 160 L80 110 L50 80 L90 70 Z"
                  fill="none"
                  stroke="white"
                  stroke-width="1.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#stars)" />
          </svg>

          <!-- النص فوق النجوم -->
          <div
            class="absolute text-center bottom-20 left-1/3 transform -translate-x-1/4"
          >
            <h1 class="text-white text-4xl font-">Welcome to Remake</h1>
            <p class="text-white mt-2 text-sm">
              Your journey to a better wardrobe starts here
              
              .
            </p>
          </div>
        </div>
      </div>

      <!-- Right Section -->
      <div class="w-1/2 py-10 px-6 flex flex-col justify-center items-center">
        <h3 class="text-4xl font-medium mb-2">Get Started</h3>
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
          @click="router.push('/stepper')"
          class="w-full max-w-sm bg-primary hover:bg-primary/90 text-white py-2 rounded-md mb-5 transition duration-200"
        >
          Login
        </button>

        <!-- Divider -->
        <div class="flex items-center my-4 w-full ">
          <hr class="flex-grow border-gray-500" />
          <span class="mx-2 font-bold text-lg text-gray-500">or</span>
          <hr class="flex-grow border-gray-500" />
        </div>

        <!-- Guest Mode -->
        <p class="text-xs max-w-full text-gray-500 mb-3">
          Want to try without signing up? Just tell us a bit about your size...
          Want to try without signing up? Just tell us a bit about your size...
          Want to try without signing up? Just te
        </p>
        <button
          @click="guestMode"
          class="w-full max-w-sm bg-primary hover:bg-primary/90 text-white py-2 rounded-md mb-4 transition duration-200"
        >
          Guest Mode
        </button>

        <!-- Explore Freely -->
        <p class="text-xs max-w-full text-gray-500 mb-3">
          Want to try without signing up? Just tell us a bit about your size...
          Want to try without signing up? Just tell us a bit about your size...
          Want to try without signing up? Just 
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
import { ref } from "vue";
import { useRouter } from "vue-router";

const selectedCode = ref("+20");
const phone = ref("");
const router = useRouter();

const login = () => {
  console.log("Logging in:", selectedCode.value, phone.value);
};
const guestMode = () => {
  console.log("Guest mode activated");
};
const explore = () => {
  console.log("Explore freely mode activated");
};
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
