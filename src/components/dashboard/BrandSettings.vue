<template>
  <div>
    <div class="mb-4 bg-gray-50 px-4 py-4 rounded-md shadow-sm">
      <h2 class="text-2xl mb-3 font-meduim">Brand Settings</h2>

      <label for="bannerName" class="block text-md font-medium mb-1"
        >Store Name</label
      >
      <input
        type="text"
        id="bannerName"
        placeholder="Enter store name"
        class="w-full px-3 py-2 borders rounded-lg focus:outline-none focus:border-blue-500"
      />
      <div>
        <label for="description" class="block text-md font-medium mt-2"
          >Tagline</label
        >
        <textarea
          id="description"
         
          rows="7"
          class="borders rounded-lg w-full focus:outline-none focus:border-blue-500"
        ></textarea>
        <h6 class="text-end text-gray-500">0/500</h6>
      </div>
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
          />
        </div>

        <!-- File Format Support -->
        <p class="text-xs text-gray-500 mt-3">
          Supports: JPG, PNG, WebP (Max 5MB each)
        </p>
      </div>

     <div>
    <label for="bannerName" class="block text-md font-medium mt-2 mb-1">Primary Color</label>

    <div class="flex items-center space-x-2">
      <!-- Color Swatch -->
      <div
        @click="openColorPicker"
        :style="{ backgroundColor: selectedColor }"
        class="w-10 h-10 rounded-md border border-gray-300 cursor-pointer"
      ></div>

      <!-- Color Code Input -->
      <input
        v-model="selectedColor"
        type="text"
        placeholder="#000000"
        class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
      />

      <!-- Hidden Color Picker -->
      <input
        ref="colorInput"
        v-model="selectedColor"
        type="color"
        class="hidden"
      />
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
import { CloudUpload } from 'lucide-vue-next'
import { ref } from 'vue'

const selectedColor = ref('#000000')
const colorInput = ref(null)

const openColorPicker = () => {
  colorInput.value.click()
}
</script>
