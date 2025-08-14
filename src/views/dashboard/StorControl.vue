<script setup>
import { ref } from 'vue'

// استيراد المكونات
import CategoriesManagement from '@/components/dashboard/CategoriesManagement.vue'
import FiltersManagement from '@/components/dashboard/FiltersManagement.vue'
import StoreBanners from '@/components/dashboard/StoreBanners.vue'
import BrandSettings from '@/components/dashboard/BrandSettings.vue'

const tabs = [
  { name: 'Categories', component: CategoriesManagement },
  { name: 'Filters', component: FiltersManagement },
  { name: 'Banner', component: StoreBanners },
  { name: 'Branding', component: BrandSettings },
]

const currentTab = ref(tabs[0])
</script>

<template>
  <div class=" px-8">
    <h5 class="text-primary text-3xl">Store Control Center</h5>
    <p class="text-gray-500 mt-1">Manage your store categories, filters, and branding settings</p>

    <!-- التبويبات -->
    <div class="flex items-center justify-center text-xl gap-6 bg-gray-50 px-10 py-4 mt-4 rounded-lg shadow-md">
      <button
        v-for="tab in tabs"
        :key="tab.name"
        @click="currentTab = tab"
        :class="[
          'py-2 px-4 rounded-lg transition-all duration-300',
          currentTab.name === tab.name
            ? ' text-primary underline'
            : ' text-gray-700 hover:bg-gray-100',
          typeof tab.component === 'undefined' ? 'opacity-50 cursor-not-allowed' : ''
        ]"
      
      >
        {{ tab.name }}
      </button>
    </div>

    <!-- عرض المكون النشط -->
    <component :is="currentTab.component" v-if="currentTab.component" class="mt-6" />
    <p v-else class="text-red-500 mt-6">This section is not available</p>
  </div>
</template>
