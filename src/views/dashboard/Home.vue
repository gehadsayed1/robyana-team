<template>
  <div class="bg-gray-100 shadow-md px-6 py-6">
    <!-- Dashboard Overview -->
    <div class="mb-4">
      <h2 class="text-3xl text-primary font-meduim mb-2">Dashboard Overview</h2>
      <p class="text-sm text-gray-500">
        Welcome back! Here's your store performance summary
      </p>
      <div class="grid grid-cols-3 gap-4 mt-4">
        <!-- Users Today -->
        <div
          class="bg-white border border-gray-200 rounded-lg shadow-md px-4 py-4 flex items-center justify-between"
        >
          <div class="flex flex-col items-center gap-2">
            <h3 class="text-xl text-gray-500 font-medium">Users Today</h3>
            <h3 class="text-2xl text-primary font-bold">127</h3>
            <div class="flex items-center gap-2 mt-1 text-xs text-green-500">
              <ArrowUp :size="12" :stroke-width="3" />
              <p class="">+8.2%</p>
            </div>
          </div>
          <span
            class="w-15 h-15 bg-blue-200 rounded-lg flex items-center justify-center text-white"
          >
            <UserIcon class="text-blue-500" :size="25" />
          </span>
        </div>

        <div
          class="bg-white border border-gray-200 rounded-lg shadow-md px-4 py-4 flex items-center justify-between"
        >
          <div class="flex flex-col items-center gap-2">
            <h3 class="text-xl text-gray-500 font-medium">Users Monthly</h3>
            <h3 class="text-2xl text-pink-500 font-bold">3240</h3>
            <div class="flex items-center gap-2 mt-1 text-xs text-green-500">
              <ArrowUp :size="12" :stroke-width="3" />
              <p class="">+15.4%</p>
            </div>
          </div>
          <span
            class="w-15 h-15 bg-pink-200 rounded-lg flex items-center justify-center text-white"
          >
            <Users class="text-pink-500" :size="25" />
          </span>
        </div>

        <div
          class="bg-white border border-gray-200 rounded-lg shadow-md px-4 py-4 flex items-center justify-between"
        >
          <div class="flex flex-col items-center gap-2">
            <h3 class="text-xl text-gray-500 font-medium">Avg Time Today</h3>
            <h3 class="text-2xl text-yellow-400 font-bold">4.2min</h3>
            <div class="flex items-center gap-2 mt-1 text-xs text-green-500">
              <ArrowUp :size="12" :stroke-width="3" />
              <p class="">+1.2%</p>
            </div>
          </div>
          <span
            class="w-15 h-15 bg-yellow-100 rounded-lg flex items-center justify-center text-white"
          >
            <Clock3 class="text-yellow-400" :size="25" />
          </span>
        </div>
      </div>
    </div>

    <!-- Quick Access -->
    <div class="mb-4">
      <div class="flex items-center mb-4 gap-2">
        <Zap :size="25" :stroke-width="3" class="text-yellow-400" />
        <h2 class="text-xl font-meduim">Quick Access</h2>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <!-- Add New Product -->
        <div
          class="bg-white shadow-md rounded-md px-4 py-6 flex items-center gap-6"
        >
          <div
            class="w-15 h-15 bg-blue-100 rounded-lg flex items-center justify-center"
          >
            <PlusIcon :size="25" class="text-blue-500" />
          </div>
          <div>
            <h3 class="text-xl font-medium mb-2 text-blue-500">
              Add New Product
            </h3>
            <p class="text-lg text-gray-500">Create new item</p>
          </div>
        </div>

        <!-- Manage Store -->
        <div
          class="bg-white shadow-md rounded-md px-4 py-6 flex items-center gap-6"
        >
          <div
            class="w-15 h-15 bg-purple-100 rounded-lg flex items-center justify-center"
          >
            <Settings :size="25" class="text-purple-500" />
          </div>
          <div>
            <h3 class="text-xl font-medium text-purple-500">Manage Store</h3>
            <p class="text-lg text-gray-500">Filter</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Top Category & Most Viewed Product -->
    <div class="grid grid-cols-2 gap-4 mb-4">
      <!-- Top Category -->
      <div class="border-gray-200 rounded-md p-4">
        <div class="flex items-center gap-2 mb-2">
          <Eye :size="28" :stroke-width="2" class="text-primary" />
          <h3 class="text-xl font-medium">Top Category</h3>
        </div>
        <div
          class="bg-white py-5 px-4 flex flex-col justify-between gap-22 rounded-md shadow-md"
        >
          <div class="flex items-center gap-4 mb-2">
            <img :src="img" alt="Product Image" class="w-23 h-23 rounded-md" />
            <div class="flex flex-col gap-1">
              <h4 class="text-lg font-medium">Elegant Summer Skirt</h4>
              <p class="text-md text-gray-500">Women's Skirts</p>
              <p class="text-md text-primary">400EGP</p>
            </div>
          </div>
          <div class="mt-2 grid grid-cols-1 gap-4">
            <div
              class="bg-blue-100 flex justify-between text-lg w-full text-gray-700 px-3 py-4 rounded-md hover:bg-blue-300"
            >
              <span>Total Views </span>
              <span class="text-primary">1420</span>
            </div>
            <div
              class="bg-gray-300 flex justify-center text-lg w-full text-gray-700 px-3 py-4 rounded-md hover:bg-gray-400"
            >
              <span>View Product Details </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Most Viewed Product -->
      <div class="border-gray-200 rounded-md p-4">
        <div class="flex items-center gap-2 mb-2">
          <ChartColumnBig :size="28" :stroke-width="2" class="text-pink-600" />
          <h3 class="text-xl font-medium">Most Viewed Product</h3>
        </div>
        <div
          class="bg-white py-5 px-4 flex flex-col justify-between gap-8 rounded-md shadow-md"
        >
          <div class="flex flex-col items-center gap-2">
            <div
              class="w-15 h-15 bg-pink-100 rounded-lg flex items-center justify-center"
            >
              <Venus :size="28" :stroke-width="2" class="text-pink-500" />
            </div>

            <h4 class="text-lg font-medium">Women's Fashion</h4>
            <p class="text-md text-gray-500">This month's leader</p>
          </div>

          <div class="mt-2 grid grid-cols-1 gap-4">
            <div
              class="bg-pink-200 w-full px-3 py-4 rounded-md hover:bg-pink-300"
            >
              <div class="flex justify-between items-center">
                <span class="text-xl">Total Views </span>
                <span class="text-pink-500 text-xl">1420</span>
              </div>
              <div class="flex justify-between items-center mt-2">
                <p class="text-pink-500">Growth Rate</p>
                <div class="flex items-center gap-2 text-lg text-green-500">
                  <ArrowUp :size="12" :stroke-width="3" />
                  <p class="">+8.2%</p>
                </div>
              </div>
            </div>
            <div
              class="bg-pink-300 flex justify-center text-lg w-full text-gray-700 px-3 py-3 rounded-md hover:bg-gray-400"
            >
              <span>Manage Category</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Average Time Spent Analytics -->
    <div>
      <div class="flex items-center gap-2 mb-4">
        <Clock3 :size="28" :stroke-width="2" class="text-yellow-500 " />
        <h2 class="text-xl font-meduim">Average Time Spent Analytics</h2>
      
      </div>
      <div class="grid grid-cols-2 gap-4">
      <div
          class="bg-white border border-gray-200 rounded-lg shadow-md px-4 py-4 flex items-center justify-between"
        >
          <div class="flex flex-col items-center gap-2">
            <h3 class="text-xl text-gray-500 font-medium">Daily Average</h3>
            <h3 class="text-3xl text-yellow-400 font-meduim">4.2 min</h3>
            <div class="flex items-center gap-2 mt-1 text-xs text-green-500">
              <ArrowUp :size="12" :stroke-width="3" />
              <p class="">+2.1% from yesterday

              </p>
            </div>
          </div>
          <span
            class="w-15 h-15 bg-yellow-50 rounded-lg flex items-center justify-center text-white"
          >
            <SunMedium  class="text-yellow-500" :size="30" />
          </span>
        </div>
        <div
          class="bg-white border border-gray-200 rounded-lg shadow-md px-4 py-4 flex items-center justify-between"
        >
          <div class="flex flex-col items-center gap-2">
            <h3 class="text-xl text-gray-500 font-medium">Monthly Average</h3>
            <h3 class="text-3xl text-yellow-400 font-meduim">5.8 min</h3>
            <div class="flex items-center gap-2 mt-1 text-xs text-green-500">
              <ArrowUp :size="12" :stroke-width="3" />
              <p class="">+5.8% from last month

              </p>
            </div>
          </div>
          <span
            class="w-15 h-15 bg-yellow-50 rounded-lg flex items-center justify-center text-white"
          >
            <CalendarDays  class="text-yellow-600" :size="30" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  UserIcon,
  UsersIcon,
  ClockIcon,
  PlusIcon,
  FilterIcon,
  StarIcon,
  CalendarIcon,
  ArrowUp,
  Users,
  Clock3,
  Zap,
  Settings,
  Eye,
  ChartColumnBig,
  Venus,
  SunMedium,
  CalendarDays,
} from "lucide-vue-next";
import img from "@/assets/skert3.jpg";
</script>

<style scoped>
/* Add any custom styles if needed */
</style>
