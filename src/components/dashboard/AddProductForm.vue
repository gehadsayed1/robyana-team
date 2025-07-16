<script setup>
import {
  ChevronDown,
  ChevronLeft,
  CircleAlert,
  CloudUpload,
  DollarSign,
  Image,
  Palette,
  Tag,
} from "lucide-vue-next";
import { ref } from "vue";

// Ref for the file input element
const fileInput = ref(null);

// Function to open the file picker dialog
const openFilePicker = () => {
  // Trigger the click event on the hidden file input
  fileInput.value.click();
};

// Function to handle file selection
const handleFileChange = (event) => {
  const selectedFiles = event.target.files;
  console.log("Selected files:", selectedFiles);

  // You can process the selected files here (e.g., upload them)
};
const suggestedTags = ref([
  "+ Formal",
  "+ Casual",
  "+ Sport",
  "+ Outing",
  "+ Classic",
  "+ Sporty",
  "+ Smart Casual",
  "+ Chic",
  "+ Athleisure",
  "+ Street Style",
  "+ Minimalist",
  "+ Bohemian",
  "+ Edgy",
]);

const colors = ref([
  "#FF5733", // Red
  "#FFC300", // Yellow
  "#4CAF50", // Green
  "#29B6F6", // Blue
  "#FF9800", // Orange
  "#E91E63", // Pink
  "#673AB7", // Purple
  "#000000", // Black

  "#9E9E9E", // Gray
  "#795548", // Brown
  "#607D8B", // Blue Gray
  "#3F51B5", // Indigo
  "#009688", // Teal
  "#CDDC39", // Lime
  "#FFEB3B", // Yellow
  "#FF5722", // Deep Orange
  "#8BC34A", // Light Green
  "#FF9800", // Amber
  "#F44336", // Red
  "#673AB7", // Deep Purple
  "#2196F3", // Light Blue
  "#FFEB3B", // Yellow
  "#795548", // Brown
  "#9C27B0", // Purple
  "#00BCD4", // Cyan
  "#FF5722", // Deep Orange
]);
const sizes = ref(["XS", "S", "M", "L", "XL"]);
</script>
<template>
  <div class="bg-gray-100 py-6 px-6">
    <!-- Header -->
    <div class="text-2xl gap-3 items-center flex font-s mb-2">
      <ChevronLeft :size="20" :stroke-width="2.5" />
      <h1 class="">Add New Product</h1>
    </div>
    <p class="text-gray-500">
      Fill in the details below to add a new clothing item to your store.
    </p>

    <!-- Basic Information -->
    <div class="mb-6 py-4 px-3 rounded shadow-md mt-4 bg-white">
      <div class="flex items-center gap-2 mb-3">
        <span class="text-blue-500 py-2 px-2 rounded-lg bg-blue-100">
          <CircleAlert :size="20" :stroke-width="2.5" />
        </span>
        <h2 class="text-2xl font-miduim">Basic Information</h2>
      </div>
      <div class="grid grid-cols-1 gap-4">
        <!-- Product Name -->
        <div>
          <label for="productName" class="block text-sm font-medium mb-1"
            >Product Name</label
          >
          <input
            type="text"
            id="productName"
            placeholder="Enter product name"
            class="input-costum rounded-lg w-full focus:outline-none focus:border-blue-500"
          />
        </div>

        <!-- Description -->
        <div>
          <label for="description" class="block text-sm font-medium mb-1"
            >Description</label
          >
          <textarea
            id="description"
            placeholder="Enter product description"
            rows="7"
            class="input-costum rounded-lg w-full focus:outline-none focus:border-blue-500"
          ></textarea>
          <h6 class="text-end text-gray-500">0/500</h6>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <!-- Product Type -->
          <div class="relative">
            <label for="productType" class="block text-sm font-medium mb-1"
              >Category</label
            >
            <div class="relative">
              <!-- السهم من الجنب -->
              <div
                class="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
              >
                <ChevronDown :size="20" :stroke-width="2.5" />
              </div>

              <!-- الحقل -->
              <select
                id="productType"
                class="input-costum rounded-lg focus:outline-none focus:border-blue-500 appearance-none w-full"
              >
                <option value="">Select Category</option>
                <option value="clothing">Clothing</option>
                <option value="electronics">Electronics</option>
                <option value="home">Home</option>
              </select>
            </div>
          </div>
          <!-- Company -->
          <div>
            <label for="company" class="block text-sm font-medium mb-1"
              >Product Type</label
            >
            <input
              type="text"
              id="company"
              placeholder="Enter company name"
              class="input-costum rounded-lg w-full focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Price & Code -->
    <div class="mb-6 py-4 px-3 rounded shadow-md mt-4 bg-white">
      <div class="flex items-center gap-2 mb-3">
        <span class="text-green-500 py-2 px-2 rounded-lg bg-green-100"
          ><DollarSign :size="20" :stroke-width="2.5"
        /></span>
        <h2 class="text-2xl font-medium">Price & Code</h2>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <!-- Price -->
        <div class="relative">
          <label for="productType" class="block text-sm font-medium mb-1"
            >Price</label
          >
          <div class="relative">
            <!-- السهم من الجنب -->
            <div
              class="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
            >
              <ChevronDown :size="20" :stroke-width="2.5" />
            </div>

            <!-- الحقل -->
            <select
              id="productType"
              class="input-costum rounded-lg focus:outline-none focus:border-blue-500 appearance-none w-full"
            >
              <option value="">EGP 0.00</option>
              <option value="clothing">1000</option>
              <option value="electronics">3.55</option>
              <option value="home">6.99</option>
            </select>
          </div>
        </div>

        <!-- Product Code -->
        <div>
          <label for="productCode" class="block text-sm font-medium mb-1"
            >Product Code</label
          >
          <input
            type="text"
            id="productCode"
            placeholder="eg. 6876438743"
            class="input-costum rounded-lg w-full focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
    </div>

    <!-- Product Variants -->
    <div class="mb-6 py-4 px-3 rounded shadow-md mt-4 bg-white">
      <div class="flex items-center gap-2 mb-3">
        <span class="text-pink-500 py-2 px-2 rounded-lg bg-pink-100"
          ><Palette :size="20" :stroke-width="2.5"
        /></span>
        <h2 class="text-2xl font-medium">Product & Variants</h2>
      </div>

      <div class="flex flex-col">
        <!-- Available Colors -->
        <div class="mb-2">
          <label class="block text-sm font-medium mb-1">Available Colors</label>
          <div class="flex justify-around items-center">
            <div
              v-for="(color, index) in colors"
              :key="index"
              class="w-8 h-8 shadow-md rounded-full cursor-pointer"
              :style="{ backgroundColor: color }"
            ></div>
          </div>
        </div>

        <!-- Available Sizes -->
        <div>
          <label class="block text-sm font-medium mb-1">Available Sizes</label>
          <div class="flex gap-5 mt-2">
            <v-button
              v-for="size in sizes"
              :key="size"
              class="input-costum rounded-lg hover:bg-gray-300"
            >
              {{ size }}
            </v-button>
          </div>
        </div>
      </div>
    </div>

    <!-- Product Images -->
    <div class="mb-6 py-4 px-3 rounded shadow-md mt-4 bg-white">
      <!-- Section Title -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-2">
          <span class="text-yellow-500 py-2 px-2 rounded-lg bg-yellow-100"
            ><Image :size="20" :stroke-width="2.5"
          /></span>

          <h2 class="text-2xl font-medium">Product Images</h2>
        </div>
      </div>

      <!-- Dropzone Area -->
      <div
        class="border-dashed border-2 border-blue-300 rounded-md py-6 text-center"
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

      <!-- Image Guidelines -->
      <div class="mt-3 flex gap-6 bg-green-100 rounded-md px-4 py-4">
        <Image class="text-green-500" :size="20" :stroke-width="2.5" />
        <div>
          <ul class="list-disc text-md text-gray-600">
            <label for="" class="text-gray-800 text-lg">Image Guidelines</label>
            <li>Use high-quality images with good lighting</li>
            <li>Include front view, back view, and detail shots</li>
            <li>First image becomes the main product thumbnail</li>
            <li>Recommended size: 1000x1000 pixels or larger</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mb-6 py-4 px-3 rounded shadow-md mt-4 bg-white">
      <!-- Section Title -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-2">
          <span class="text-red-500 py-2 px-2 rounded-lg bg-red-100"
            ><Tag :size="20" :stroke-width="2.5"
          /></span>

          <h2 class="text-2xl font-medium">Filters & Tags</h2>
        </div>
      </div>

      <!-- Add Promotion -->
      <div class="relative">
        <label for="productType" class="block text-sm font-medium mb-1"
          >Add Promotion</label
        >
        <div class="relative">
          <div
            class="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
          >
            <ChevronDown :size="20" :stroke-width="2.5" />
          </div>

          <select
            id="productType"
            class="input-costum rounded-lg focus:outline-none focus:border-blue-500 appearance-none w-full"
          >
            <!-- <option value="">EGP 0.00</option>
                <option value="clothing">1000</option>
                <option value="electronics">3.55</option>
                <option value="home">6.99</option> -->
          </select>
        </div>
      </div>

      <!-- Product Tags / Keywords -->
      <div class="mb-4 mt-2">
        <label for="addTag" class="block text-lg font-medium mb-1"
          >Product Tags / Keywords</label
        >
        <p class="text-xs text-gray-500 mb-2">
          Add tags to help customers find this product through search and
          filters
        </p>
        <div class="flex items-center gap-2">
          <input
            type="text"
            id="addTag"
            placeholder="Enter tag"
            class="w-full input-costum rounded-lg focus:outline-none focus:border-blue-500"
          />
          <v-button
            class="bg-primary text-white px-4 py-2 w-60 text-center rounded-md hover:bg-blue-600"
          >
            Add Tag
          </v-button>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-meduim mb-2">Suggested Tags:</h3>
        <div class="flex-wrap flex gap-2">
          <span
            v-for="(tag, index) in suggestedTags"
            :key="index"
            class="input-costum rounded-2xl hover:bg-gray-300"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
    <!-- Buttons -->
    <div
      class="flex justify-end gap-3 mb-6 py-4 px-3 rounded shadow-md mt-4 bg-white"
    >
      <v-button
        class="input-costum w-40 text-center text-gray-700 px-4 py-2 rounded-md mr-2 hover:bg-gray-200"
      >
        Cancel
      </v-button>
      <v-button
        class="bg-primary text-white w-40 text-center px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Add Product
      </v-button>
    </div>
  </div>
</template>

<style scoped>
.input-costum {
  border: 1px solid #4d8cec; /* Gray-300 */

  padding: 0.5rem 0.75rem;
}
/* Add any custom styles if needed */
</style>
