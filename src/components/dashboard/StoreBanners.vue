<template>
  <div class="bg-white shadow-md rounded-md px-6 py-6">
    <!-- Section Title -->
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-2xl font-meduim">Store Banners</h2>
      <v-button
        class="bg-primary text-white w-40 text-center px-4 py-2 rounded-md hover:bg-blue-600"
      >
        + Add Banner
      </v-button>
    </div>

    <!-- Add New Banner -->
    <div class="mb-4 bg-gray-50 px-4 py-4 rounded-md shadow-sm">
      <label for="bannerName" class="block text-sm font-medium mb-1"
        >Banner Name</label
      >
      <input
        type="text"
        id="bannerName"
        placeholder="Enter banner name"
        class="w-full px-3 py-2 borders rounded-lg focus:outline-none focus:border-blue-500"
      />

      <!-- Dropzone Area -->
      <div
        class="border-dashed border-2 mt-2 border-blue-300 rounded-md py-6 text-center"
      >
        <!-- Cloud Icon -->
        <div class="mb-3 flex justify-center">
          <CloudUpload :size="100" :stroke-width="2.5" class="text-gray-500" />
        </div>

        <!-- Upload Instructions -->
        <p class="text-2xl mb-2">Upload Product images</p>
        <p class="text-lg text-gray-500 mb-4">
          Drag and drop your images here, or click to browse
        </p>

        <!-- File Input Button -->
        <div>
          <!-- Button with hidden file input -->
          <button
            class="bg-primary text-white px-6 py-2 rounded-md hover:bg-blue-600 relative"
            @click="openFilePicker"
          >
            Choose Files
          </button>

          <!-- Hidden file input -->
          <input
            ref="fileInput"
            type="file"
            accept="image/*"
            multiple
            class="hidden"
            @change="handleFileChange"
          />
        </div>

        <!-- File Format Support -->
        <p class="text-xs text-gray-500 mt-3">
          Supports: JPG, PNG, WebP (Max 5MB each)
        </p>
      </div>
      <div class="flex mt-3 justify-center items-center gap-4">
        <v-button
          class="borders text-center w-40 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
        >
          Cancel
        </v-button>
        <v-button
          class="bg-primary text-center w-40 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600"
        >
          Save Changes
        </v-button>
      </div>
    </div>

    <!-- Existing Banners -->
    <div>
      <div
        v-for="(banner, index) in banners"
        :key="index"
        class="flex items-center border-1 py-2 px-2 border-gray-500 justify-between rounded-md p-4 mb-4"
      >
        <div class="flex items-center">
          <img
            :src="banner.image"
            alt="Banner Image"
            class="w-60 h-25 rounded-md mr-4"
          />
          <div>
            <h3 class="text-sm font-medium">{{ banner.name }}</h3>
            <p class="text-xs text-gray-500">{{ banner.description }}</p>
          </div>
        </div>
        <div class="flex items-center space-x-2">
          <span
            :class="[
              'px-2 py-1 rounded-full text-xs',
              banner.isActive
                ? 'bg-green-100 text-green-500'
                : 'bg-red-100 text-red-500',
            ]"
          >
            {{ banner.isActive ? "Active" : "Inactive" }}
          </span>
          <v-button class="text-white px-2 py-1 rounded-full">
            <Trash2Icon :size="20" class="text-red-400 hover:text-red-600" />
          </v-button>
        </div>
      </div>
      <div class="flex mt-3 justify-end items-center gap-4">
        <v-button
          class="borders text-center w-40 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
        >
          Cancel
        </v-button>
        <v-button
          class="bg-primary text-center w-40 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600"
        >
          Save Changes
        </v-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CloudUpload, Image, Trash2, Trash2Icon } from "lucide-vue-next";
import { ref } from "vue";
import img from "@/assets/img1.png";

// Data
const banners = ref([
  {
    image: img,
    name: "Summer Collection 2024",
    description: "Everyday Denim",
    isActive: true,
  },
  {
    image: img,
    name: "Summer Collection 2024",
    description: "Everyday Denim",
    isActive: false,
  },
]);
</script>

<style scoped>
/* Add any custom styles if needed */
</style>
