<template>
  <div class=" px-6">
    <!-- Section Title -->
    <div>
      <div class="flex items-center justify-between mb-6">
        <h1 class="text-2xl font-bold text-blue-500">Product Management</h1>

        <div class="flex items-center gap-4">
          <Search class="text-primary" />
          <Trash color="#FE5C73" />

          <button
            @click="router.push('/add-product')"
            class="flex items-center justify-between bg-primary text-white px-4 py-2 rounded"
          >
            <Plus color="white" />
            Add New Item
          </button>
        </div>
      </div>
    </div>

    <!-- Tabs -->
    <div class="flex justify-between">
      <div class="w-full max-w-[870px]">
        <Tabs :tabs="tabs" @tab-change="handleTabChange" />
      </div>

      <!-- Select Field -->
      <div
        class="flex items-center justify-center font-bold gap-2 bg-white rounded-lg shadow-md w-40"
      >
        <span class="text-sm">None</span>
        <ChevronDown :size="20" :stroke-width="3" />
      </div>
    </div>

    <!-- Product List -->
    <div class="mt-4">
      <Product
        v-for="(product, index) in products"
        :key="index"
        :product="product"
      />
    </div>

    <div class="flex justify-end mt-6">
      <Pagination
        :current-page="currentPage"
        :total-pages="totalPages"
        @page-change="handlePageChange"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import Product from "../../components/dashboard/Product.vue";
import Tabs from "../../components/dashboard/Tabs.vue";
import { ChevronDown, Plus, Search, Trash } from "lucide-vue-next";
import Pagination from "../../components/global/Pagination.vue";
import { useRouter } from "vue-router";

// State for current page and total pages
const currentPage = ref(1);
const totalPages = ref(10);
const router = useRouter();

// Handle page change event
const handlePageChange = (newPage) => {
  currentPage.value = newPage;
};
// Mock Data
const tabs = ["T-Shirts", "Skirts", "Pants", "Dresses", "Sweatpants", "Shoes"];
const products = [
  { id: "45789091243", name: "Maxi Long Skirts for Women", category: "Skirts" },
  { id: "45789091244", name: "Casual T-Shirt", category: "T-Shirts" },
  { id: "45789091245", name: "Leather Jacket", category: "Dresses" },
  { id: "45789091246", name: "Jeans Pants", category: "Pants" },
  { id: "45789091247", name: "Running Shoes", category: "Shoes" },
];

// State for active tab
const activeTab = ref("Skirts");

// Filter products based on active tab
// const filteredProducts = computed(() => {
//   if (activeTab.value === "All") {
//     return products;
//   }
//   return products.filter((product) => product.category === activeTab.value);
// });

// Handle tab change
const handleTabChange = (tab) => {
  activeTab.value = tab;
};
</script>
