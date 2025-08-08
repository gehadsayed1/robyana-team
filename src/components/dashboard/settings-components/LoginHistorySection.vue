<!-- components/LoginHistorySection.vue -->
<template>
  <div class="bg-white rounded-lg shadow-sm border mt-3 border-gray-200 overflow-hidden">
    <!-- Section Header -->
    <div class="px-6 py-4 ">
      <h2 class="text-lg font-semibold text-gray-900">Login History</h2>
      <p class="text-sm text-gray-500 mt-1">Recent login activity and security events</p>
    </div>
    
    <!-- Table -->
    <div class="overflow-x-auto">
      <table class="w-full text-center">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-center text-md font-semibold text-gray-900 uppercase tracking-wider">
              Status
            </th>
            <th class="px-6 py-3 text-center text-md font-semibold text-gray-900 uppercase tracking-wider">
              Date & Time
            </th>
            <th class="px-6 py-3 text-center text-md font-semibold text-gray-900 uppercase tracking-wider">
              Device
            </th>
            <th class="px-6 py-3 text-center text-md font-semibold text-gray-900 uppercase tracking-wider">
              Location
            </th>
            <th class="px-6 py-3 text-center text-md font-semibold text-gray-900 uppercase tracking-wider">
              IP Address
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr 
            v-for="login in loginHistory" 
            :key="login.id" 
            class="hover:bg-gray-50 transition-colors"
          >
            <!-- Status Column -->
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                {{ login.status }}
              </span>
            </td>
            
            <!-- Date & Time Column -->
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
              {{ login.dateTime }}
            </td>
            
            <!-- Device Column -->
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
              {{ login.device }}
            </td>
            
            <!-- Location Column -->
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
              {{ login.location }}
            </td>
            
            <!-- IP Address Column -->
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
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
    status: 'Active',
    dateTime: '2024-01-15 14:30:25',
    device: 'Desktop - Chrome',
    location: 'Cairo, Egypt',
    ipAddress: '192.168.1.100'
  },
  {
    id: 2,
    status: 'Active',
    dateTime: '2024-01-15 14:30:25',
    device: 'Desktop - Chrome',
    location: 'Cairo, Egypt',
    ipAddress: '192.168.1.100'
  },
  {
    id: 3,
    status: 'Active',
    dateTime: '2024-01-15 14:30:25',
    device: 'Desktop - Chrome',
    location: 'Cairo, Egypt',
    ipAddress: '192.168.1.100'
  },
  {
    id: 4,
    status: 'Active',
    dateTime: '2024-01-15 14:30:25',
    device: 'Desktop - Chrome',
    location: 'Cairo, Egypt',
    ipAddress: '192.168.1.100'
  },
  {
    id: 5,
    status: 'Active',
    dateTime: '2024-01-15 14:30:25',
    device: 'Desktop - Chrome',
    location: 'Cairo, Egypt',
    ipAddress: '192.168.1.100'
  }
])
</script>