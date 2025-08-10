<template>
<section>
      <div class="flex items-center justify-center h-60  bg-white font-bold">
    <img class="" src="@/assets/h1.jpg" alt="" />
  </div>
  <div class="flex font-sacramento min-h-screen py-5 bg-gray-100">
    <!-- Filter Sidebar -->
    <FilterSidebar @update-filters="updateFilters" />

    <!-- Main Content -->
    <div class="flex-1 py-3">
      <!-- Tabs -->
      <div
        class="flex justify-between rounded-lg shadow-md mx-auto bg-white w-87 py-3 px-3 mb-4 space-x-4"
      >
        <P class="text-gray-400">Men </P>
        <P class="text-gray-800 font-semibold">Women</P>
        <P class="text-gray-400">Kids</P>
      </div>
      <div class="flex flex-col gap-3 items-start mb-4 px-8">
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
<div class="px-6">
  <h2 class="text-xl font-bold text-center mb-6">On Sale</h2>

  <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
    <div
      v-for="product in products"
      :key="product.id"
      class="flex justify-center"
    >
      <ProductCard :product="product" />
    </div>
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
import skirt from "@/assets/skirt.jpg";


const products =  [
  {
    id: 1,
    image: skirt,
    name: 'Maxi Long Skirts',
    category: 'Women',
    price: 699,
    oldPrice: 1200
  },
  {
    id: 2,
    image: skirt,
    name: 'Maxi Long Skirts',
    category: 'Women',
    price: 699,
    oldPrice: 1200
  },
  {
    id: 3,
    image: skirt,
    name: 'Maxi Long Skirts',
    category: 'Women',
    price: 699,
    oldPrice: 1200
  },
  {
    id: 4,
    image: skirt,
    name: 'Maxi Long Skirts',
    category: 'Women',
    price: 699,
    oldPrice: 1200
  },
  {
    id: 4,
    image: skirt,
    name: 'Maxi Long Skirts',
    category: 'Women',
    price: 699,
    oldPrice: 1200
  },
  {
    id: 4,
    image: skirt,
    name: 'Maxi Long Skirts',
    category: 'Women',
    price: 699,
    oldPrice: 1200
  },

]

const updateFilters = (filters) => {
  console.log("Filters updated:", filters);
};

const removeFilter = (filterName) => {
  console.log(`Removing filter: ${filterName}`);
  // هنا يمكنك تحديث الفلترات أو إزالته من القائمة
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
