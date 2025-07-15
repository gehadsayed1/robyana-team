<template>
  <ul class="flex bg-white rounded-2xl shadow-md max-w-[770px] justify-between">
    <li
      v-for="(tab, index) in tabs"
      :key="index"
      :class="{ 'text-gray-900': activeTab === tab }"
      @click="$emit('tab-change', tab)"
      class="px-4 py-2 text-gray-400 cursor-pointer rounded-l last:rounded-r"
    >
      {{ tab }}
    </li>
  </ul>
</template>

<script setup>
defineProps({
  tabs: {
    type: Array,
    required: true,
  },
  activeTab: {
    type: String,
    required: true,
  },
});
defineEmits(['tab-change']);
</script>