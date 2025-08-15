<!-- components/StoreSection.vue -->
<template>
  <div >
    <!-- Section Header -->
    <div class="px-6 py-4 flex justify-between items-center">
      <div>
        <h2 class="text-2xl mb-1 font-medium text-gray-900">Store Branches</h2>
        <p class="text-sm text-gray-500">
          Manage your store locations and operating hours
        </p>
      </div>
      <div>
          <v-button
          class="ml-2 w-30 text-center bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          + Add
        </v-button>
      </div>
    </div>

    <!-- Section Content -->
    <div class="px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Store name -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2"
            >Store name</label
          >
          <input
            v-model="storeName"
            type="text"
            class="w-full px-3 py-2 borders rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter store name"
          />
        </div>

        <!-- Branch Address -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2"
            >Branch Address</label
          >
          <input
            v-model="branchAddress"
            type="text"
            class="w-full px-3 py-2 borders rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter branch address"
          />
        </div>
      </div>
      <div >
        <label for="description" class="block text-md font-medium mt-3"
          >Store Address</label
        >
        <textarea
          id="description"
          placeholder="Enter Complete Address.."
          rows="7"
          class="borders px-4 py-5 rounded-lg w-full focus:outline-none focus:border-blue-500"
        ></textarea>
        <h6 class="text-end text-gray-500">0/500</h6>
      </div>

     
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const storeName = ref("");
const branchAddress = ref("");
</script>
