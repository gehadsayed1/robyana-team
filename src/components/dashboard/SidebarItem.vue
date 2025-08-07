<!-- src/components/SidebarItem.vue -->
<template>
  <router-link
    :to="to"
    class="block px-4 py-2 mb-3 rounded-md transition-all"
    :class="getItemClasses"
  >
    <div class="flex items-center gap-2">
      <component
        :is="iconComponent"
        :class="getIconClasses"
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
  label: { type: String, required: true },
  variant: { type: String, default: 'default' } // default, danger, info
})

const route = useRoute()
const isActive = computed(() => route.path === props.to)

const iconComponent = computed(() => lucideIcons[props.icon] || lucideIcons.Circle)

const getItemClasses = computed(() => {
  if (props.variant === 'danger') {
    return isActive.value
      ? 'bg-red-100 text-red-600 border-l-4 border-red-600'
      : 'text-red-600 hover:bg-red-50 hover:text-red-700'
  }
  
  if (props.variant === 'info') {
    return isActive.value
      ? 'bg-blue-100 text-blue-600 border-l-4 border-blue-600'
      : 'text-blue-600 hover:bg-blue-50 hover:text-blue-700'
  }
  
  return isActive.value
    ? 'bg-blue-100 text-blue-600 border-l-4 border-blue-600'
    : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
})

const getIconClasses = computed(() => {
  const baseClasses = 'w-5 h-5'
  
  if (props.variant === 'danger') {
    return [baseClasses, isActive.value ? 'text-red-600' : 'text-red-500']
  }
  
  if (props.variant === 'info') {
    return [baseClasses, isActive.value ? 'text-blue-600' : 'text-blue-500']
  }
  
  return [baseClasses, isActive.value ? 'text-blue-600' : 'text-gray-400']
})
</script>