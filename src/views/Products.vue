<template>
  <section class="">
    <div class="flex items-center justify-center h-60 bg-white font-bold flex-col lg:flex-row">
    
      <img class="w-full h-full hidden lg:block" src="@/assets/h1.jpg" alt="" />
    
      <img class="w-full h-full block lg:hidden" src="@/assets/cat.png" alt="" />
    </div>
    <div class="flex font-sacramento min-h-screen py-5 bg-gray-100">
      <!-- Filter Sidebar - Hidden on mobile by default -->
      <div class="hidden lg:block">
        <FilterSidebar @update-filters="updateFilters" />
      </div>

      <!-- Main Content -->
      <div class="flex-1 py-3">
        <!-- Header with Tabs and Filter Icon -->
        <div class="flex items-center gap-2 mb-4 px-4 md:px-8">
          <!-- Tabs -->
          <div
            class="flex justify-between items-center rounded-lg shadow-md bg-white py-3 px-3 max-w-md mx-auto flex-1"
          >
            <p class="text-gray-400">Men</p>
            <p class="text-gray-800 font-semibold self-center">Women</p>
            <p class="text-gray-400">Kids</p>
          </div>
          <!-- Mobile Filter Button -->
          <button
            @click="toggleMobileFilter"
            class="ml-auto lg:hidden"
          >
            <Funnel class="w-6 h-6 text-gray-700" />
          </button>
        </div>

        <!-- Mobile Filter Sidebar - Overlay -->
        <div
          v-if="showMobileFilter"
          class="fixed inset-0 bg-[rgba(0,0,0,0.5)] bg-opacity-50 z-50 lg:hidden"
          @click="closeMobileFilter"
        ></div>
        
        <div
          v-if="showMobileFilter"
          class="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden"
          :class="showMobileFilter ? 'translate-x-0' : 'translate-x-full'"
        >
          <!-- Mobile Filter Header -->
          <div class="flex items-center justify-between p-4 border-b border-gray-200">
            <h3 class="text-lg font-semibold text-gray-800">Filters</h3>
            <button
              @click="closeMobileFilter"
              class="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <!-- Mobile Filter Content -->
          <div class="p-4 overflow-y-auto h-full">
            <FilterSidebar @update-filters="updateFilters" />
          </div>
        </div>

        <div class="flex flex-col gap-3 items-start mb-4 px-4 md:px-8">
          <p class="text-gray-500">Showing 1-9 of 7354 result</p>

          <!-- Active Filters -->
          <div
            class="flex flex-wrap gap-2 mb-4 justify-between items-center w-full"
          >
            <p class="text-lg font-semibold">Active Filter</p>
            <span
              class="bg-primary text-white gap-1 px-2 py-1 rounded-xl text-sm flex items-center"
            >
              Price: 400 - 2000EGP
              <button
                class="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
                @click="removeFilter('price')"
              >
                ×
              </button>
            </span>
            <span
              class="bg-primary text-white gap-1 px-2 py-1 rounded-xl text-sm flex items-center"
            >
              Best Seller
              <button
                class="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
                @click="removeFilter('bestSeller')"
              >
                ×
              </button>
            </span>
            <span
              class="bg-primary text-white gap-1 px-2 py-1 rounded-xl text-sm flex items-center"
            >
              Men
              <button
                class="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
                @click="removeFilter('men')"
              >
                ×
              </button>
            </span>
            <span
              class="bg-primary text-white gap-1 px-2 py-1 rounded-xl text-sm flex items-center"
            >
              Sweatpants
              <button
                class="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
                @click="removeFilter('sweatpants')"
              >
                ×
              </button>
            </span>
            <button class="text-primary text-sm">Clear All</button>
          </div>
        </div>

        <div>
          <div class=" ">
            <div
              class="grid px-5 md:px-8 gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
            >
              <div
                v-for="product in products"
                :key="product.id"
                class="flex justify-center"
              >
                <ProductCard :product="product" />
              </div>
            </div>
            
            <!-- Pagination -->
            <div class="mt-8 flex justify-center">
              <Pagination 
                :current-page="currentPage" 
                :total-pages="totalPages"
                @page-change="handlePageChange"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import FilterSidebar from "@/components/pages/FilterSidebar.vue";
import ProductCard from "@/components/pages/ProductCard.vue";
import Pagination from "@/components/global/Pagination.vue";
import skirt from "@/assets/skert1.jpg";
import { ref } from "vue";
import { Funnel } from "lucide-vue-next";

// Pagination state
const currentPage = ref(1);
const totalPages = ref(10); 
const products = [
  {
    id: 1,
    image: skirt,
    name: "Maxi Long Skirts",
    category: "Women",
    price: 699,
    oldPrice: 1200,
  },
  {
    id: 2,
    image: skirt,
    name: "Maxi Long Skirts",
    category: "Women",
    price: 699,
    oldPrice: 1200,
  },
  {
    id: 3,
    image: skirt,
    name: "Maxi Long Skirts",
    category: "Women",
    price: 699,
    oldPrice: 1200,
  },
  {
    id: 4,
    image: skirt,
    name: "Maxi Long Skirts",
    category: "Women",
    price: 699,
    oldPrice: 1200,
  },
  {
    id: 4,
    image: skirt,
    name: "Maxi Long Skirts",
    category: "Women",
    price: 699,
    oldPrice: 1200,
  },
  {
    id: 4,
    image: skirt,
    name: "Maxi Long Skirts",
    category: "Women",
    price: 699,
    oldPrice: 1200,
  },
  {
    id: 4,
    image: skirt,
    name: "Maxi Long Skirts",
    category: "Women",
    price: 699,
    oldPrice: 1200,
  },
  {
    id: 4,
    image: skirt,
    name: "Maxi Long Skirts",
    category: "Women",
    price: 699,
    oldPrice: 1200,
  },
  {
    id: 4,
    image: skirt,
    name: "Maxi Long Skirts",
    category: "Women",
    price: 699,
    oldPrice: 1200,
  },
];

const updateFilters = (filters) => {
  console.log("Filters updated:", filters);
};

const removeFilter = (filterName) => {
  console.log(`Removing filter: ${filterName}`);
 
};

// Pagination handler
const handlePageChange = (newPage) => {
  currentPage.value = newPage;
  console.log(`Navigating to page: ${newPage}`);
  // هنا يمكنك إضافة منطق جلب المنتجات للصفحة الجديدة
  // fetchProducts(newPage);
};

// Mobile filter state
const showMobileFilter = ref(false);

const toggleMobileFilter = () => {
  showMobileFilter.value = !showMobileFilter.value;
};

const closeMobileFilter = () => {
  showMobileFilter.value = false;
};
</script>

<style scoped>
.header-text {
  font-size: 2rem;
  color: #1a202c;
  font-family: "Pacifico", cursive;
  font-weight: 400;
  font-style: normal;
}

/* أسلوب الأزرار */
span {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
}

/* زر الإغلاق (X) */
button {
  font-size: 0.8rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

/* زر Clear All */
button:last-child {
  margin-left: auto; /* يجعل الزر في الطرف الأيمن */
}
</style>
