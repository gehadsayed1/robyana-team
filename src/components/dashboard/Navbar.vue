<script setup>
import { Search, Settings, User } from "lucide-vue-next";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div class="bg-gray-100 w-vh h-full flex justify-center items-center rounded-lg shadow-md">
    <!-- Row container -->
    <div class="container mx-auto px-4">
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

          <router-link to="/settings" class="inline-block">
            <Settings
              class="h-6 w-6 text-blue-500 cursor-pointer hover:text-blue-600 transition-colors"
            />
          </router-link>

          <!-- Profile/User icon -->
         
          <router-link to="/profile" class="inline-block">
            <User
              class="h-6 w-6 text-blue-500 cursor-pointer hover:text-blue-600 transition-colors"
            />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
