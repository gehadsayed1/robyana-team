<!-- components/ToggleSwitch.vue -->
<template>
  <v-button
    @click="toggle"
    :class="[
      'relative inline-flex h-7 w-12 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
      modelValue ? 'bg-blue-500' : 'bg-gray-300',
      $attrs.class
    ]"
  >
    <span
      :class="[
        'inline-block h-5 w-5 transform rounded-full bg-white shadow-lg transition-transform',
        modelValue ? 'translate-x-6' : 'translate-x-1'
      ]"
    />
  </v-button>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const toggle = () => {
  emit('update:modelValue', !props.modelValue)
}
</script>