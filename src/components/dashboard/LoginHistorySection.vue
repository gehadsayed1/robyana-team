<!-- components/LoginHistorySection.vue -->
<template>
  <div >
    <!-- Section Header -->
    <div class="px-6 py-4 ">
      <h2 class="text-lg font-semibold text-gray-900">Login History</h2>
    </div>

    <!-- Table -->
    <div class="overflow-x-auto">
      <table class="w-full">
        <thead class="bg-gray-50 border-b border-gray-200">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Last Active
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Device
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Location
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              IP Address
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="login in loginHistory" :key="login.id" class="hover:bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span class="text-green-600 text-sm font-medium">{{ login.name.charAt(0) }}</span>
                </div>
                <span class="text-sm font-medium text-gray-900">{{ login.name }}</span>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
              {{ login.lastActive }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
              {{ login.device }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
              {{ login.location }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
              {{ login.ipAddress }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const loginHistory = ref([
  {
    id: 1,
    name: 'Atif',
    lastActive: '2 mins ago',
    device: '-',
    location: '-',
    ipAddress: '-'
  },
  {
    id: 2,
    name: 'Anas',
    lastActive: '5 mins ago',
    device: '-',
    location: '-',
    ipAddress: '-'
  },
  {
    id: 3,
    name: 'Ahmed',
    lastActive: '10 mins ago',
    device: '-',
    location: '-',
    ipAddress: '-'
  },
  {
    id: 4,
    name: 'Omar',
    lastActive: '15 mins ago',
    device: '-',
    location: '-',
    ipAddress: '-'
  }
])
</script>