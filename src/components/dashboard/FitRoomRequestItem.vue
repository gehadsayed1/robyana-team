<template>
  <div class="flex items-center justify-between bg-white py-4 px-4 mt-3 rounded-lg shadow">
    <div class="flex gap-4">
     <div
     v-if="isCompletedTab"
  @click="toggleCheck"
  class="cursor-pointer mt-2"
>
  <component
    :is="isChecked ? CheckSquare : Square"
    :class="[
      'w-6 h-6 transition-colors duration-200',
      isChecked ? 'text-blue-600' : 'text-gray-400'
    ]"
  />
</div>

      <img :src="request.image" alt="Product" class="w-16 h-16 object-cover rounded" />
      
      <div>
        <h3 class="text-xl font-medium">{{ request.title }}</h3>

        <div class="flex gap-8 text-gray-500 text-sm mt-2 items-center">
          <div class="flex items-center gap-1">
            <Shirt class="w-4 h-4" /> Size {{ request.size }}
          </div>
          <div class="flex items-center gap-1">
            <DoorOpen class="w-4 h-4" /> Room {{ request.room }}
          </div>
          <div class="flex items-center gap-1">
            <Circle class="w-3 h-3 text-red-500 fill-red-500" /> Color
          </div>
        </div>

        <div class="flex items-center gap-1 mt-2 text-gray-500 text-sm">
          <Clock class="w-4 h-4" /> {{ request.time }}
        </div>
      </div>
    </div>

    <div>
      <v-button
        v-if="!isCompletedTab"
        @click="opens = true"
        class="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Assign Room
      </v-button>

      <span
        v-else
        class="bg-green-100 text-green-600 px-4 py-2 rounded-xl text-sm font-medium"
      >
        Completed
      </span>
    </div>
  </div>

  <AssignRoomModal :visible="opens" />
</template>

<script setup>
import { ref } from 'vue'
import { Ruler, DoorOpen, Circle, Clock, Shirt, Square, CheckSquare } from 'lucide-vue-next'
import AssignRoomModal from '@/components/dashboard/AssignRoomModal.vue'

const opens = ref(false)
const isChecked = ref(false)

const toggleCheck = () => {
  isChecked.value = !isChecked.value
}

defineProps({
  request: Object,
  isCompletedTab: Boolean,
})
</script>
