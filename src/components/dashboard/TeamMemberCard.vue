<!-- src/components/TeamMemberCard.vue -->
<template>
  <div
    class="bg-white shadow rounded-lg py-4 px-4 mt-3 flex justify-between items-center"
  >
    <div class="flex items-center gap-4">
      <div
        class="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center"
      >
        <UserIcon class="w-6 h-6 text-blue-500" />
      </div>
      <div>
        <h3 class="font-semibold text-gray-800">{{ member.name }}</h3>
        <p class="text-sm text-gray-500">{{ member.phone }}</p>
      </div>
    </div>

    <div class="flex items-center gap-3">
      <span class="bg-blue-200 text-gray-700 px-3 py-1 rounded-full text-sm">
        {{ member.role }}
      </span>
      <button @click="$emit('edit')" class="">
        <SquarePen class="w-5 h-5 text-blue-500 hover:text-blue-700" />
      </button>
      <button
        @click="$emit('delete')"
        class="
      "
      >
        <TrashIcon class="w-5 h-5 text-red-400 hover:text-red-700" />
      </button>
    </div>
  </div>
</template>

<script setup>
import {
  User as UserIcon,
  Pencil as PencilIcon,
  Trash2 as TrashIcon,
  SquarePen,
} from "lucide-vue-next";

defineProps({
  member: {
    type: Object,
    required: true,
  },
});
</script>
