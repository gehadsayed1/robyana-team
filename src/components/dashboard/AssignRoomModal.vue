<template>
  <div
    class="fixed inset-0 bg-[rgb(0,0,0,0.25)]
 bg-opacity-30 flex items-center justify-center z-50"
    v-if="visible"
  >
    <div class="bg-white py-6 px-6 rounded-lg shadow-xl w-[400px]">
     
      <h2 class="text-xl  text-black">Assign Fit Room</h2>
      <p class="text-gray-600 mt-1 mb-4">Select a fitting room for this request:</p>

    
      <div class="grid grid-cols-3 gap-3 px-6 mb-6">
        <button
          v-for="room in rooms"
          :key="room"
          @click="selectedRoom = room"
          :class="[
            'py-4 px-2 flex flex-col items-center justify-center rounded-md transition',
            selectedRoom === room
              ? 'bg-blue-100 text-blue-700 ring-2 ring-blue-500'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          ]"
        >
          <DoorOpen class="w-5 h-5 mb-1" />
          Room {{ room }}
        </button>
      </div>

    
      <div class="flex justify-end gap-3">
        <button
          @click="$emit('cancel')"
          class="px-4 py-2 borders border-gray-400 rounded hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          @click="$emit('assign', selectedRoom)"
          :disabled="!selectedRoom"
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          Assign Room
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DoorOpen } from 'lucide-vue-next'

// Props
const props = defineProps({
  visible: Boolean,
})

// Data
const rooms = [1, 2, 3, 8, 10, 6 ,7,4,9]
const selectedRoom = ref(null)
</script>
