<!-- components/FeatureTogglesSection.vue -->
<template>
  <div >
    <!-- Section Header -->
    <div class="px-6 pt-2 ">
      <h2 class="text-lg font-semibold text-gray-900">Opening Hours</h2>
    </div>

    <!-- Section Content -->
    <div class="py-4 px-6 space-y-4">
      <!-- Enable E-Delivery -->
      <div class="flex items-center justify-between py-2">
        <span class="text-sm font-medium text-gray-700">Enable E-Delivery Method</span>
        <ToggleSwitch v-model="features.enableDelivery" />
      </div>

      <!-- Email Notifications -->
      <div class="flex items-center justify-between py-2">
        <span class="text-sm font-medium text-gray-700">Email Notifications</span>
        <ToggleSwitch v-model="features.emailNotifications" />
      </div>

      <!-- Display Call Button -->
      <div class="flex items-center justify-between py-2">
        <span class="text-sm font-medium text-gray-700">Display Call Button</span>
        <ToggleSwitch v-model="features.displayCallButton" />
      </div>

      <!-- Call Button Dropdown -->
      <div class="py-2">
        <label class="block text-sm font-medium text-gray-700 mb-2">Display Call Button</label>
        <select 
          v-model="features.callButtonOption"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select option</option>
          <option value="always">Always Show</option>
          <option value="business-hours">Business Hours Only</option>
          <option value="never">Never Show</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ToggleSwitch from './ToggleSwitch.vue'

const features = ref({
  enableDelivery: false,
  emailNotifications: true,
  displayCallButton: true,
  callButtonOption: 'always'
})
</script>