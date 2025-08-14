<template>
  <div class=" px-6 bg-gray-100 min-h-screen">
    <h1 class="text-3xl font-simebold text-primary">Fit Room Requests</h1>
    <p class="text-gray-500 mt-1">
      Manage customer fitting room requests and deliveries
    </p>

    <!-- Tabs -->
    <div class="flex items-center mt-6">
      <button
        @click="activeTab = 'new'"
        :class="[
          'flex items-center  gap-2 px-15 py-4  shadow font-medium',
          activeTab === 'new'
            ? 'bg-blue-100 text-blue-600 border-b-2 border-blue-500'
            : 'bg-gray-50  text-gray-600 ',
        ]"
      >
        <Clock class="w-5 h-5" />
        New Requests
        <span class="bg-white text-blue-600 rounded-full px-2 text-sm">{{
          newRequests.length
        }}</span>
      </button>
      <button
        @click="activeTab = 'completed'"
        :class="[
          'flex items-center  gap-2 px-15 py-4 shadow font-medium',
          activeTab === 'completed'
            ? 'bg-green-100 text-green-600 border-b-2 border-green-500'
            : 'bg-gray-50 text-green-600 ',
        ]"
      >
        <CheckCircle class="w-5 h-5" />
        Completed
        <span class="bg-white text-green-600 rounded-full px-2 text-sm">{{
          completedRequests.length
        }}</span>
      </button>

  <!-- Tools section inside the tabs -->
<div class="flex items-center gap-2 ml-auto">
  <!-- يظهر فقط في "new" -->
  <div
    v-if="activeTab === 'new'"
    class="relative w-40 bg-white rounded-md shadow-sm"
  >
    <select
      class="appearance-none px-3 py-2 pr-10 rounded-md w-full border-0 focus:outline-none focus:ring-0 hover:border-none"
    >
      <option>Newest</option>
      <option>Oldest</option>
    </select>
    <ChevronDown
      class="absolute top-2.5 right-2 w-4 h-4 text-gray-500 pointer-events-none"
    />
  </div>

  <!-- يظهر فقط في "completed" -->
  <div
    v-else
    class="flex items-center gap-2 bg-white rounded-md shadow-sm px-3 py-2"
  >
    <span class="text-red-500">Delete</span>
    <Trash2 class="w-6 h-6 text-red-500 pointer-events-none" />
  </div>
</div>

    </div>

    <!-- Requests List -->
    <div class="mt-6 space-y-4">
      <FitRoomRequestItem
        v-for="(item, index) in currentRequests"
        :key="index"
        :request="item"
        :showCheckbox="activeTab === 'completed'"
        :isCompletedTab="activeTab === 'completed'"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Clock, CheckCircle, ChevronDown, Trash2 } from "lucide-vue-next";
import FitRoomRequestItem from "@/components/dashboard/FitRoomRequestItem.vue";
import img from "@/assets/skert2.jpg";

const newRequests = ref([
  {
    title: "Maxi Long Skirts for Women",
    image: img,
    size: "M",
    room: 2,
    color: "Red",
    time: "2 minutes ago",
  },
  {
    title: "Maxi Long Skirts for Women",
    image: img,
    size: "M",
    room: 2,
    color: "Red",
    time: "2 minutes ago",
  },
  {
    title: "Maxi Long Skirts for Women",
    image: img,
    size: "M",
    room: 2,
    color: "Red",
    time: "2 minutes ago",
  },
]);

// Requests for completed tab

const completedRequests = ref([
  {
    title: "Maxi Long Skirts for Women",
    image: img,
    size: "M",
    room: 2,
    color: "Red",
    time: "2 minutes ago",
  },
  {
    title: "Maxi Long Skirts for Women",
    image: img,
    size: "M",
    room: 2,
    color: "Red",
    time: "2 minutes ago",
  },
]);

const activeTab = ref("new");

const currentRequests = computed(() =>
  activeTab.value === "new" ? newRequests.value : completedRequests.value
);
</script>
