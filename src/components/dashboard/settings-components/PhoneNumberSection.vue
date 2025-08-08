<!-- components/PhoneNumberSection.vue -->
<template>
  <div>
    <!-- Section Content -->
    <div class="px-6">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2"
          >Store Phone number</label
        >
        <input
          v-model="phoneNumber"
          type="tel"
          class="w-full px-3 py-2 borders rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="+20"
        />
      </div>
       <p class="text-primary text-sm mt-1">+ Add another Phone Number</p>
    </div>
   
  </div>
</template>

<script setup>
import { ref } from "vue";

const phoneNumber = ref("");
</script>
