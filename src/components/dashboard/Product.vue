<template>
  <div class="flex items-center bg-gray-50 justify-between py-4 shadow-md px-4 border-b border-gray-300 last:border-b-0">
    <div class="flex items-start gap-3">
      <input type="checkbox" :checked="product.checked" @change="toggleCheck" class="mr-4">
      <img :src="img1 " alt="Product Image" class="w-12 h-12 rounded-2xl mr-4">
      <div>
        <p class="font-medium">{{ product.name }}</p>
        <p class="text-sm text-gray-500">{{ product.id }}</p>
      </div>
    </div>
    <div class="flex items-center gap-4">
      <v-button class="py-2 px-2 bg-gray-100  cursor-pointer rounded-full hover:bg-gray-300">
       <SquarePen class="text-gray-500" size="17" />
      </v-button>
      <v-button class="py-2 px-2 bg-gray-100 cursor-pointer rounded-full hover:bg-red-300">
       <Trash  color="#FE5C73" size="17"/>
      </v-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import img1 from '@/assets/skert3.jpg'; 
import { SquarePen, Trash } from 'lucide-vue-next';

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

// Local state for checkbox
const checked = ref(props.product.checked);

// Toggle checkbox state
const toggleCheck = () => {
  checked.value = !checked.value;
  // Emit event to notify parent component
  emit('check-change', { id: props.product.id, checked: checked.value });
};

defineEmits(['check-change']);
</script>