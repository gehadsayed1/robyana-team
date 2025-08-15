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
        <button
          class="ml-2 w-30 text-center bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          + Add
        </button>
      </div>
    </div>

    <!-- Existing Categories -->
    <div c>
      <h3 class="text-gray-700 font-medium mb-4">Existing Categories</h3>
      <div
        class="flex items-center justify-between rounded-md borders py-2 px-2 pb-2 mb-2"
      >
        <button class="flex items-center text-gray-500 hover:text-gray-700">
          <ChevronDown />
          Women
        </button>
        <div class="flex gap-3">
          <Plus size="18" class="text-primary hover:text-blue-700 cursor-pointer" />
          <SquarePen size="18" class="text-primary hover:text-blue-700 cursor-pointer" />

          <Trash2 size="18" class="text-red-500 hover:text-red-700 cursor-pointer" />
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
  SquarePen,
  Plus,
  ChevronDown,
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
