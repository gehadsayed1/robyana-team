<!-- components/FeatureTogglesSection.vue -->
<template>
  <div class="mx-auto">
    <!-- Enable Fit Room Alerts Section -->
    <div class="px-4 py-4 bg-gray-50 rounded-lg">
      <div class="flex items-center justify-between">
        <div class="flex-1">
          <h3 class="text-lg font-medium text-gray-900">
            Enable Fit Room Alerts
          </h3>
          <p class="text-sm text-gray-500 mt-1">
            Receive notifications when items are requested for fitting rooms
          </p>
        </div>
        <ToggleSwitch v-model="features.enableFitRoomAlerts" class="ml-4" />
      </div>
    </div>

    <!-- Email Notifications Section -->
    <div class="px-4 py-4 bg-gray-50 rounded-lg mt-3">
      <div class="flex items-center justify-between">
        <div class="flex-1">
          <h3 class="text-lg font-medium text-gray-900">Email Notifications</h3>
          <p class="text-sm text-gray-500 mt-1">
            Get notified about new orders, cancellations, and returns
          </p>
        </div>
        <ToggleSwitch v-model="features.emailNotifications" class="ml-4" />
      </div>
    </div>

    <!-- Primary Currency Section -->

    <div class="mt-2">
      <label class="block text-lg font-medium text-gray-900">
        Primary Currency
      </label>
      <div class="relative">
        <select
          v-model="features.primaryCurrency"
          class="w-full px-3 py-2 borders rounded-lg focus:outline-none focus:border-blue-500"
        >
          <option value="" disabled>Select Currency</option>
          <option value="USD">USD - US Dollar</option>
          <option value="EUR">EUR - Euro</option>
          <option value="GBP">GBP - British Pound</option>
          <option value="EGP">EGP - Egyptian Pound</option>
          <option value="SAR">SAR - Saudi Riyal</option>
          <option value="AED">AED - UAE Dirham</option>
        </select>
        <!-- Dropdown Arrow -->
        <div
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
        >
          <ChevronDown size="17" color="gray" />
        </div>
      </div>
      <v-button
        @click="addCurrency"
        class="text-blue-500 cursor-pointer mt-1 hover:text-blue-600 text-sm font-medium flex items-center transition-colors"
      >
        <span class="mr-1">+</span>
        Add another Currency
      </v-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ToggleSwitch from "./ToggleSwitch.vue";
import { ChevronDown } from "lucide-vue-next";

const features = ref({
  enableFitRoomAlerts: true,
  emailNotifications: true,
  primaryCurrency: "",
});

const addCurrency = () => {
  // Add currency functionality
  console.log("Add another currency clicked");
};
</script>
