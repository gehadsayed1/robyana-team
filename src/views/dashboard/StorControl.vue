<script setup >
import CategoriesManagement from '@/components/dashboard/CategoriesManagement.vue';
import FiltersManagement from '../../components/dashboard/FiltersManagement.vue';
import StoreBanners from '../../components/dashboard/StoreBanners.vue';
import BrandSettings from '../../components/dashboard/BrandSettings.vue';

</script>

<template>
    <div class="py-4 px-8">
        <h5 class="text-primary text-3xl">Store Control Center</h5>
        <p class="text-gray-500 mt-1">Manage your store categories, filters, and branding settings</p>
          <div class="flex items-center justify-center  text-xl gap-10 bg-gray-50 px-10 py-4 mt-4 rounded-lg shadow-md">
        <p class="text-primary  underline">Categories</p>
        <p>Filters</p>
        <p>Banner</p>
        <p>Branding</p>
    </div>

    <div class="mt-4">
      <CategoriesManagement />
     


    </div>
    <div class="mt-4">
      <FiltersManagement />

    </div>

    <div class="mt-4">
        <StoreBanners />
    </div >
    <div class="mt-4">
        <BrandSettings />
    </div>

    </div>
  
</template>