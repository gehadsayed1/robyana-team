<template>
  <div class="bg-gray-50 rounded-lg py-6 px-6 hover:shadow-md transition-shadow">
    <div class="flex items-center mb-3">
      <div :class="[bgColor, 'py-4 px-4 rounded-lg mr-4']">
        <Phone v-if="icon === 'phone'" :class="['w-6 h-6', iconColor]" />
        <Mail v-else-if="icon === 'mail'" :class="['w-6 h-6', iconColor]" />
        <MessageCircle v-else-if="icon === 'message-circle'" :class="['w-6 h-6', iconColor]" />
      </div>
      <h3 class="text-2xl font-medium text-gray-900">{{ title }}</h3>
    </div>
    <p class="text-gray-900 font-medium mb-2">{{ contact }}</p>
    <p class="text-gray-600 text-sm">{{ description }}</p>
  </div>
</template>

<script setup>
import { Phone, Mail, MessageCircle } from 'lucide-vue-next'

defineProps({
  icon: String,
  title: String,
  contact: String,
  description: String,
  bgColor: String,
  iconColor: String
})
</script>