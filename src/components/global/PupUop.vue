<script setup lang="ts">
import { X } from "lucide-vue-next";
</script>

<template>
  <main class="flex-1 overflow-auto">
    <div class="bg-gray-50 min-h-screen flex justify-center items-center">
      <!-- Animation and Checkmark -->
      <div class="mb-6 py-5 px-5 w-[700px] bg-white rounded-lg shadow-lg p-6">
        <X class="cursor-pointer" />
        <!-- Checkmark Image -->
        <div class="flex justify-center mb-4">
          <img class="w-60" src="@/assets/true.png" alt="" />
        </div>

        <!-- Message -->
        <p class="text-center text-gray-700 mb-8">
          Your items are on their way to your fitting room! To make your next
          visit even easier, you can create a quick profile now — so you won't
          need to enter your info again.
        </p>

        <!-- Buttons -->
        <div class="flex justify-between text-center">
          <button
            class="px-4 w-80 py-2 border-2 border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition"
          >
            End Session
          </button>
          <button
            class="px-4 py-2 w-80 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Create Profile
          </button>
        </div>
      </div>
    </div>
  </main>
</template>
