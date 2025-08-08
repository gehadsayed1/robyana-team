<!-- components/OpeningHoursSection.vue -->
<template>
  <div>
    <!-- Section Header -->
    <div class="px-6 py-4">
      <h2 class="text-lg font-medium text-gray-900">Opening Hour</h2>
    </div>

    <!-- Section Content -->
    <div class="px-6">
      <div class="">
        <div
          v-for="day in weekDays"
          :key="day.name"
          class="flex items-center gap-5 py-2"
        >
          <!-- Day Name - Fixed Width -->
          <div class="w-24">
            <span class="text-lg font-medium text-gray-900">{{
              day.name
            }}</span>
          </div>

          <!-- Checkbox and Status - Fixed Width -->
          <div class="w-20 flex items-center">
            <label class="flex items-center">
              <input
                type="checkbox"
                :checked="!day.isClosed"
                @change="toggleDay(day)"
                class="w-4 h-4  bg-gray-100 border-gray-300 rounded focus:ring-0  checked:bg-blue-600 checked:border-blue-600"
              />
              <span
                :class="[
                  'ml-2 text-sm font-medium',
                  day.isClosed ? 'text-red-600' : '',
                ]"
              >
                {{ day.isClosed ? "Closed" : "Open" }}
              </span>
            </label>
          </div>

          <!-- Time Controls - Fixed Width Container -->
          <div class="flex-1 flex items-center justify-end">
            <div v-if="!day.isClosed" class="flex items-center">
              <!-- Clock Icon + Open Time -->
              <div
                class="flex items-center bg-white py-1 rounded-lg px-1 justify-center"
              >
                <Clock4 size="15" />
                <select
                  v-model="day.openTime"
                  class="px-2 py-1 rounded text-sm focus:outline-none focus:ring-0 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option v-for="time in timeOptions" :key="time" :value="time">
                    {{ time }}
                  </option>
                </select>
              </div>

              <span class="text-md font-semibold text-gray-600 px-2">to</span>

              <!-- Clock Icon + Close Time -->
              <div
                class="flex items-center bg-white py-1 rounded-lg px-1 justify-center"
              >
                <Clock4 size="15" />
                <select
                  v-model="day.closeTime"
                  class="px-2 py-1 rounded text-sm focus:outline-none focus:ring-0 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option v-for="time in timeOptions" :key="time" :value="time">
                    {{ time }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Google Maps URL -->
      <div class="mt-6 mb-4">
        <label class="block text-lg font-medium text-gray-900 mb-2">
          Google Maps Embed URL (Optional)
        </label>
        <input
          v-model="googleMapsUrl"
          type="url"
          placeholder="Enter Google Maps embed URL..."
          class="w-full px-3 py-2 borders rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      <!-- Action Buttons -->
      <div class="flex justify-end gap-3 pb-4">
        <v-button
          class="text-gray-700 w-40 py-2 px-4 flex justify-center items-center border border-gray-300 rounded-md hover:bg-gray-50 transition-colors font-medium"
        >
          Cancel
        </v-button>
        <v-button
          class="bg-primary text-white w-40 py-2 px-4 flex justify-center items-center rounded-md hover:bg-blue-700 transition-colors font-medium"
        >
          Save Changes
        </v-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Clock4 } from "lucide-vue-next";
import { ref } from "vue";

const timeOptions = [
  "8:00 am",
  "8:30 am",
  "9:00 am",
  "9:30 am",
  "10:00 am",
  "10:30 am",
  "11:00 am",
  "11:30 am",
  "12:00 pm",
  "12:30 pm",
  "1:00 pm",
  "1:30 pm",
  "2:00 pm",
  "2:30 pm",
  "3:00 pm",
  "3:30 pm",
  "4:00 pm",
  "4:30 pm",
  "5:00 pm",
  "5:30 pm",
  "6:00 pm",
  "6:30 pm",
  "7:00 pm",
  "7:30 pm",
  "8:00 pm",
  "8:30 pm",
  "9:00 pm",
  "9:30 pm",
  "10:00 pm",
];

const weekDays = ref([
  {
    name: "Sunday",
    openTime: "9:00 am",
    closeTime: "8:00 pm",
    isClosed: false,
  },
  {
    name: "Monday",
    openTime: "9:00 am",
    closeTime: "8:00 pm",
    isClosed: false,
  },
  {
    name: "Tuesday",
    openTime: "9:00 am",
    closeTime: "8:00 pm",
    isClosed: false,
  },
  {
    name: "Wednesday",
    openTime: "9:00 am",
    closeTime: "8:00 pm",
    isClosed: false,
  },
  {
    name: "Thursday",
    openTime: "9:00 am",
    closeTime: "8:00 pm",
    isClosed: false,
  },
  { name: "Friday", openTime: "9:00 am", closeTime: "8:00 pm", isClosed: true },
  {
    name: "Saturday",
    openTime: "9:00 am",
    closeTime: "8:00 pm",
    isClosed: false,
  },
]);

const googleMapsUrl = ref("");

const toggleDay = (day) => {
  day.isClosed = !day.isClosed;
};
</script>

<style scoped>
/* Custom checkbox styles for blue color */
input[type="checkbox"] {
  accent-color:  var(--color-primary);
}




</style>