<template>
  <div class="bg-white shadow-md rounded-md py-6 px-6">
    <!-- Section Title -->
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-2xl font-meduim">Filters Management</h2>
      <v-button
        class="bg-primary text-white w-30 text-center px-4 py-2 rounded-md hover:bg-blue-600"
      >
        + Add Filter
      </v-button>
    </div>

    <!-- Add New Filter -->
    <div class="mb-4 bg-gray-50 py-4 px-4">
      <label for="filterName" class="block text-sm font-medium mb-1"
        >Add New Filter</label
      >
      <div class="flex items-center gap-2">
        <input
          type="text"
          id="filterName"
          placeholder="Filter Name"
          class="w-full borders px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <div class="relative inline-block">
          <select
            class="appearance-none px-3 py-2 bg-white borders rounded-lg focus:outline-none focus:border-blue-500 pr-10"
          >
            <option value="multi">Multi</option>
            <option value="single">Single</option>
          </select>

          <!-- سهم من الجنب -->
          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          >
            <ChevronDown :size="28" :stroke-width="3" />
          </div>
        </div>
      </div>
      <div class="flex mt-3 justify-center items-center gap-4">
        <v-button
          class="bg-primary text-center w-40 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600"
        >
          Create Filter
        </v-button>
        <v-button
          class="borders text-center w-40 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
        >
          Cancel
        </v-button>
      </div>
    </div>

    <!-- Existing Filters -->
    <div>
      <!-- Size Filter -->
      <div class="py-3 px-3 rounded-lg mb-4 border-1 border-gray-800">
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-2">
            <span class="text-lg font-medium">Size</span>
            <span
              class="bg-green-100 text-green-500 px-2 py-1 rounded-xl text-xs"
              >Multi Select</span
            >
          </div>
          <div class="flex gap-2">
            <div class="relative inline-block">
              <select
                class="appearance-none px-3 py-2 bg-white borders rounded-lg focus:outline-none focus:border-blue-500 pr-10"
              >
                <option value="multi">Multi</option>
                <option value="single">Single</option>
              </select>

              <div
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
              >
                <ChevronDown :size="28" :stroke-width="3" />
              </div>
            </div>
            <v-button class="text-white px-3 py-2 rounded-md borders">
              <Trash2
                :size="20"
                :stroke-width="3"
                class="text-red-400 hover:text-red-600"
              />
            </v-button>
          </div>
        </div>
        <div class="mt-2 flex items-center">
          <input
            type="text"
            placeholder="Select Size"
            class="w-full px-3 py-2 borders rounded-lg focus:outline-none focus:border-blue-500"
          />
          <v-button
            class="bg-primary text-white px-3 py-2 rounded-md ml-2 hover:bg-blue-600"
          >
            <Plus :size="25" :stroke-width="3" />
          </v-button>
        </div>
        <div class="mt-3 flex flex-wrap gap-2">
          <span
            v-for="(size, index) in selectedSizes"
            :key="index"
            class="bg-gray-200 flex items-center gap-2 px-2 py-1 rounded-xl text-xs"
          >
            {{ size }}
            <X class="text-red-500" :size="12" />
          </span>
        </div>
      </div>
      <!-- Type Filter -->
      <div class="py-3 px-3 rounded-lg mb-4 border-1 border-gray-800">
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-2">
            <span class="text-lg font-medium">Type</span>
            <span class="bg-pink-100 text-pink-500 px-2 py-1 rounded-xl text-xs"
              >Multi Select</span
            >
          </div>
          <div class="flex gap-2">
            <div class="relative inline-block">
              <select
                class="appearance-none px-3 py-2 bg-white borders rounded-lg focus:outline-none focus:border-blue-500 pr-10"
              >
                <option value="single">Single</option>
                <option value="multi">Multi</option>
              </select>

              <div
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
              >
                <ChevronDown :size="28" :stroke-width="3" />
              </div>
            </div>
            <v-button class="text-white px-3 py-2 rounded-md borders">
              <Trash2
                :size="20"
                :stroke-width="3"
                class="text-red-400 hover:text-red-600"
              />
            </v-button>
          </div>
        </div>
        <div class="mt-2 flex items-center">
          <input
            type="text"
            placeholder="Select type"
            class="w-full px-3 py-2 borders rounded-lg focus:outline-none focus:border-blue-500"
          />
          <v-button
            class="bg-primary text-white px-3 py-2 rounded-md ml-2 hover:bg-blue-600"
          >
            <Plus :size="25" :stroke-width="3" />
          </v-button>
        </div>
        <div class="mt-3 flex flex-wrap gap-2">
          <span
            v-for="(size, index) in selectedTypes"
            :key="index"
            class="bg-gray-200 flex items-center gap-2 px-2 py-1 rounded-xl text-xs"
          >
            {{ size }}
            <X class="text-red-500" :size="12" />
          </span>
        </div>
      </div>

      <!-- Color Filter -->
      <div class="py-3 px-3 rounded-lg mb-4 border-1 border-gray-800">
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-2">
            <span class="text-lg font-medium">Colors</span>
            <span
              class="bg-green-100 text-green-500 px-2 py-1 rounded-xl text-xs"
              >Multi Select</span
            >
          </div>
          <div class="flex gap-2">
            <div class="relative inline-block">
              <select
                class="appearance-none px-3 py-2 bg-white borders rounded-lg focus:outline-none focus:border-blue-500 pr-10"
              >
                <option value="single">Single</option>
                <option value="multi">Multi</option>
              </select>

              <div
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
              >
                <ChevronDown :size="28" :stroke-width="3" />
              </div>
            </div>
            <v-button class="text-white px-3 py-2 rounded-md borders">
              <Trash2
                :size="20"
                :stroke-width="3"
                class="text-red-400 hover:text-red-600"
              />
            </v-button>
          </div>
        </div>
        <div class="mt-2 flex items-center">
          <input
            type="text"
            placeholder="Select Color"
            class="w-full px-3 py-2 borders rounded-lg focus:outline-none focus:border-blue-500"
          />
          <v-button
            class="bg-primary text-white px-3 py-2 rounded-md ml-2 hover:bg-blue-600"
          >
            <Plus :size="25" :stroke-width="3" />
          </v-button>
        </div>
        <div class="mt-3 flex flex-wrap gap-2">
          <span
            v-for="(color, index) in selectedclors"
            :key="index"
            :style="{ backgroundColor: color }"
            class="text-white flex items-center gap-2 px-2 py-1 rounded-xl text-xs"
          >
            {{ color }}
            <X class="text-red-500" :size="12" />
          </span>
        </div>
      </div>
      <!--style filter -->

      <div class="py-3 px-3 rounded-lg mb-4 border-1 border-gray-800">
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-2">
            <span class="text-lg font-medium">Style</span>
            <span
              class="bg-green-100 text-green-500 px-2 py-1 rounded-xl text-xs"
              >Multi Select</span
            >
          </div>
          <div class="flex gap-2">
            <div class="relative inline-block">
              <select
                class="appearance-none px-3 py-2 bg-white borders rounded-lg focus:outline-none focus:border-blue-500 pr-10"
              >
                <option value="multi">Multi</option>
                <option value="single">Single</option>
              </select>

              <div
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
              >
                <ChevronDown :size="28" :stroke-width="3" />
              </div>
            </div>
            <v-button class="text-white px-3 py-2 rounded-md borders">
              <Trash2
                :size="20"
                :stroke-width="3"
                class="text-red-400 hover:text-red-600"
              />
            </v-button>
          </div>
        </div>
        <div class="mt-2 flex items-center">
          <input
            type="text"
            placeholder="Select style"
            class="w-full px-3 py-2 borders rounded-lg focus:outline-none focus:border-blue-500"
          />
          <v-button
            class="bg-primary text-white px-3 py-2 rounded-md ml-2 hover:bg-blue-600"
          >
            <Plus :size="25" :stroke-width="3" />
          </v-button>
        </div>
        <div class="mt-3 flex flex-wrap gap-2">
          <span
            v-for="(style, index) in selectedStyles"
            :key="index"
            class="bg-gray-200 flex items-center gap-2 px-2 py-1 rounded-xl text-xs"
          >
            {{ style }}
            <X class="text-red-500" :size="12" />
          </span>
        </div>
      </div>
      <!-- price filter -->
      <div class="py-3 px-3 rounded-lg mb-4 border-1 border-gray-800">
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-2">
            <span class="text-lg font-medium">Price</span>
            <span class="bg-pink-100 text-pink-500 px-2 py-1 rounded-xl text-xs"
              >Multi Select</span
            >
          </div>
          <div class="flex gap-2">
            <div class="relative inline-block">
              <select
                class="appearance-none px-3 py-2 bg-white borders rounded-lg focus:outline-none focus:border-blue-500 pr-10"
              >
                <option value="single">Single</option>
                <option value="multi">Multi</option>
              </select>

              <div
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
              >
                <ChevronDown :size="28" :stroke-width="3" />
              </div>
            </div>
            <v-button class="text-white px-3 py-2 rounded-md borders">
              <Trash2
                :size="20"
                :stroke-width="3"
                class="text-red-400 hover:text-red-600"
              />
            </v-button>
          </div>
        </div>
        <div class="mt-2 flex items-center">
          <input
            type="text"
            placeholder="Select price"
            class="w-full px-3 py-2 borders rounded-lg focus:outline-none focus:border-blue-500"
          />
          <v-button
            class="bg-primary text-white px-3 py-2 rounded-md ml-2 hover:bg-blue-600"
          >
            <Plus :size="25" :stroke-width="3" />
          </v-button>
        </div>
        <div class="mt-3 flex flex-wrap gap-2">
          <span
            v-for="(price, index) in selectedPrices"
            :key="index"
            class="bg-gray-200 flex items-center gap-2 px-2 py-1 rounded-xl text-xs"
          >
            {{ price }}
            <X class="text-red-500" :size="12" />
          </span>
        </div>
      </div>
      <!-- promotion filter -->
      <div class="py-3 px-3 rounded-lg mb-4 border-1 border-gray-800">
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-2">
            <span class="text-lg font-medium">Promotion </span>
            <span class="bg-pink-100 text-pink-500 px-2 py-1 rounded-xl text-xs"
              >Multi Select</span
            >
          </div>
          <div class="flex gap-2">
            <div class="relative inline-block">
              <select
                class="appearance-none px-3 py-2 bg-white borders rounded-lg focus:outline-none focus:border-blue-500 pr-10"
              >
                <option value="single">Single</option>
                <option value="multi">Multi</option>
              </select>

              <div
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
              >
                <ChevronDown :size="28" :stroke-width="3" />
              </div>
            </div>
            <v-button class="text-white px-3 py-2 rounded-md borders">
              <Trash2
                :size="20"
                :stroke-width="3"
                class="text-red-400 hover:text-red-600"
              />
            </v-button>
          </div>
        </div>
        <div class="mt-2 flex items-center">
          <input
            type="text"
            placeholder="Select promotion"
            class="w-full px-3 py-2 borders rounded-lg focus:outline-none focus:border-blue-500"
          />
          <v-button
            class="bg-primary text-white px-3 py-2 rounded-md ml-2 hover:bg-blue-600"
          >
            <Plus :size="25" :stroke-width="3" />
          </v-button>
        </div>
        <div class="mt-3 flex flex-wrap gap-2">
          <span
            v-for="(promotion, index) in selectedPromotions"
            :key="index"
            class="bg-gray-200 flex items-center gap-2 px-2 py-1 rounded-xl text-xs"
          >
            {{ promotion }}
            <X class="text-red-500" :size="12" />
          </span>
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
          Create Filters
        </v-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ChevronDown, Plus, Trash2, X } from "lucide-vue-next";
import { ref } from "vue";

// Data
const filterName = ref("");
const selectedSizes = ref(["XS", "S", "M", "L", "XL", "XXL"]);
const selectedTypes = ref(["Skirts", "Dresses", "Pants"]);
const selectedclors = ref(["Red", "Blue", "Green", "Black", "gray"]);
const selectedStyles = ref(["Casual", "Formal", "Sporty", "Vintage"]);
const selectedPrices = ref([
  "$10 - $20",
  "$20 - $30",
  "$30 - $50",
  "$50 - $100",
]);
const selectedPromotions = ref([
  "Discount",
  "Buy One Get One",
  "Free Shipping",
]);

// Methods
const removeSize = (size) => {
  selectedSizes.value = selectedSizes.value.filter((s) => s !== size);
};

const removeType = (type) => {
  selectedTypes.value = selectedTypes.value.filter((t) => t !== type);
};
</script>
