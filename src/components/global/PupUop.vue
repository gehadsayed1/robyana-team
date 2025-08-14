<script setup lang="ts">
import { X } from "lucide-vue-next";
const emit = defineEmits(["close"]);
</script>

<template>
  <main
    class="flex-1 overflow-auto fixed inset-0 bg-[rgba(0,0,0,0.5)] bg-opacity-40 flex items-center justify-center z-50 p-4"
  >
    <div
      class="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 relative mx-auto"
    >
      <!-- زر الإغلاق -->
      <X
        class="cursor-pointer absolute top-4 right-4 w-6 h-6 text-gray-500 hover:text-black"
        @click="emit('close')"
      />

      <!-- صورة -->
      <div class="flex justify-center mb-4">
        <img class="w-40 sm:w-48 md:w-60" src="@/assets/true.png" alt="" />
      </div>

      <!-- الرسالة -->
      <p class="text-center text-gray-700 mb-8 text-sm sm:text-base md:text-lg">
        Your items are on their way to your fitting room! To make your next
        visit even easier, you can create a quick profile now — so you won't
        need to enter your info again.
      </p>

      <!-- الأزرار -->
      <div class="flex flex-col sm:flex-row justify-between text-center gap-4">
        <button
          class="px-4 py-2 flex-1 border-2 border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition"
          @click="emit('close')"
        >
          End Session
        </button>
        <button
          class="px-4 py-2 flex-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Create Profile
        </button>
      </div>
    </div>
  </main>
</template>
