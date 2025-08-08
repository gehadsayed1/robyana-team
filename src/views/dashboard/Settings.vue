<!-- Settings.vue -->
<template>
  <div class="bg-gray-100 shadow-md px-6 py-6">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-3xl text-primary font-meduim mb-2">
        Settings & Configuration
      </h1>
      <p class="text-sm text-gray-500">
        Manage your store settings, locations, methods, and system configuration
      </p>
    </div>

    <div
      class="bg-white py-4 px-2 rounded-lg shadow-sm border border-gray-200 mb-6"
    >
      <!-- Store Branches Section -->
      <div class="bg-gray-50 rounded-lg">
        <StoreSection />

        <!-- Store Phone Number Section -->
        <PhoneNumberSection />
        <!-- Opening Hours Section -->
        <OpeningHoursSection />
      </div>
      <InfoOpeningHour />
    
    </div>
      <!-- Feature Toggles Section -->
      <FeatureTogglesSection />

      <!-- Login History Section -->
      <LoginHistorySection />
  </div>
</template>

<script setup>
import FeatureTogglesSection from "../../components/dashboard/settings-components/FeatureTogglesSection.vue";
import InfoOpeningHour from "../../components/dashboard/settings-components/InfoOpeningHour.vue";
import LoginHistorySection from "../../components/dashboard/settings-components/LoginHistorySection.vue";
import OpeningHoursSection from "../../components/dashboard/settings-components/OpeningHoursSection.vue";
import PhoneNumberSection from "../../components/dashboard/settings-components/PhoneNumberSection.vue";
import StoreSection from "../../components/dashboard/settings-components/StoreSection.vue";
</script>
