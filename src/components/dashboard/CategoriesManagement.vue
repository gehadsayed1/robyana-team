<template>
  <div class="bg-white shadow-md rounded-md py-6 px-6">
    <!-- Section Title -->
    <h2 class="text-2xl font-meduim mb-4">Categories Management</h2>

    <!-- Add New Category -->
    <div>
      <label for="newCategory" class="block text-sm font-medium mb-1"
        >Add New Category</label
      >
      <div class="flex items-center mb-3">
        <input
          type="text"
          id="newCategory"
          placeholder="Enter category name"
          class="w-full px-3 py-2 borders rounded-lg focus:outline-none focus:border-blue-500"
        />
        <v-button
          class="ml-2 w-30 text-center bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          + Add
        </v-button>
      </div>
    </div>

    <!-- Existing Categories -->
    <div>
      <h3 class="text-sm font-medium mb-2">Existing Categories</h3>
      <div class="pb-2 mb-2">
        <div class="flex items-center justify-between">
          <input
            type="text"
            placeholder="Enter category name"
            class="w-full px-3 py-2 borders rounded-lg focus:outline-none focus:border-blue-500"
          />
          <!-- <div class="flex space-x-2">
            <EditIcon class="w-4 h-4 text-blue-500 cursor-pointer" />
            <DeleteIcon class="w-4 h-4 text-red-500 cursor-pointer" />
          </div> -->
        </div>
      </div>
      <div class="flex justify-end">
        <!-- Subcategories under Women -->
        <div class="w-[85%]">
          <div
            class="flex bg-gray-200 py-3 px-3 rounded-lg items-center justify-between mb-2"
          >
            <div class="flex items-center gap-2">
              <ChevronRight :size="20" :stroke-width="2" />
              <span class="text-md"
                >Pants
                <small class="text-gray-800 bg-gray-300 py-2 px-2 rounded-xl"
                  >(under women)</small
                ></span
              >
            </div>
            <div class="flex gap-4">
              <EditIcon class="w-4 h-4 text-blue-500 cursor-pointer" />
              <Trash2 class="w-4 h-4 text-red-500 cursor-pointer" />
            </div>
          </div>
          <div
            class="flex bg-gray-200 py-3 px-3 rounded-lg items-center justify-between mb-2"
          >
            <div class="flex items-center gap-2">
              <ChevronRight :size="20" :stroke-width="2" />
              <span class="text-md"
                >Dresses
                <small class="text-gray-800 bg-gray-300 py-2 px-2 rounded-xl"
                  >(under women)</small
                ></span
              >
            </div>

            <div class="flex gap-4">
              <EditIcon class="w-4 h-4 text-blue-500 cursor-pointer" />
              <Trash2 class="w-4 h-4 text-red-500 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  EditIcon,
  DeleteIcon,
  ChevronLeft,
  ChevronRight,
  Trash2,
} from "lucide-vue-next";

// Data
const categories = [
  {
    name: "Women",
    subcategories: [
      { name: "Pants", parent: "women" },
      { name: "Dresses", parent: "women" },
    ],
  },
];
</script>
