<!-- src/components/SidebarItem.vue -->
<template>
  <router-link
    :to="to"
    class="block px-4 py-2 mb-4 rounded-md transition-all"
    :class="isActive
      ? 'bg-blue-100  text-blue-600 border-l-4 border-blue-600'
      : 'text-gray-600  hover:bg-gray-100 hover:text-blue-600'"
  >
    <div class="flex items-center gap-2">
 
      <component
        :is="iconComponent"
        :class="['w-5 h-5', isActive ? 'text-blue-600' : 'text-gray-400']"
      />
      <span class="text-md font-simebold">{{ label }}</span>
    </div>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import * as lucideIcons from 'lucide-vue-next' 

const props = defineProps({
  to: { type: [String, Object], required: true },
  icon: { type: String, required: true }, 
  label: { type: String, required: true }
})

const route = useRoute()
const isActive = computed(() => route.path === props.to)


const iconComponent = computed(() => lucideIcons[props.icon] || lucideIcons.Circle)
</script>
