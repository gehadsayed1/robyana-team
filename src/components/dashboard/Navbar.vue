<script setup>

import { Search, Settings, User } from "lucide-vue-next";
import { useRoute } from "vue-router";


const route = useRoute();
</script>

<template>
  <div class="bg-gray-100 w-vh rounded-lg shadow-md">
    <!-- Row container -->
    <v-container>
      <div class="flex items-center justify-between">
        <!-- Left side: Logo and Admin title -->
        <div class="flex items-center justify-between gap-10">
          <span class="text-gray-600 font-bold">Logo</span>
          <span class="text-blue-500 text-2xl font-meduim">{{
            route.name
          }}</span>
        </div>

        <!-- Right side: Search bar and icons -->
        <div class="flex items-center justify-between gap-10">
          <!-- Search bar -->
          <div
            class="relative flex items-center rounded-full bg-gray-200 px-3 py-2"
          >
            <!-- استخدام أيقونة البحث من Lucide -->
            <search class="h-5 w-5 text-primary mr-2" />
            <input
              type="text"
              placeholder="Search for something"
              class="bg-transparent outline-none text-primary focus:ring-0 w-48"
            />
          </div>

          <!-- Settings icon -->
          <settings class="h-6 w-6 text-blue-500 cursor-pointer" />

          <!-- Profile/User icon -->
          <user class="h-6 w-6 text-gray-500 cursor-pointer" />
        </div>
      </div>
    </v-container>
  </div>
</template>

<style scoped>
/* أضف أي تعديلات خاصة هنا إذا احتجت */
</style>
