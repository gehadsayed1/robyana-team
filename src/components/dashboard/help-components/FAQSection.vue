<template>
  <div class="bg-white rounded-lg border border-gray-200 py-6 px-6">
    <h3 class="text-lg font-semibold text-gray-900 mb-2">Frequently Asked Questions</h3>
    <p class="text-gray-600 text-sm mb-6">Find answers to common questions about the admin system</p>
    
    <div class="space-y-3">
      <FAQItem
        v-for="(item, index) in faqData"
        :key="item.id"
        :question="item.question"
        :answer="item.answer"
        :is-open="openItem === index"
        @toggle="openItem = openItem === index ? null : index"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import FAQItem from './FAQItem.vue'

const openItem = ref(1)

const faqData = ref([
  {
    id: 0,
    question: "How do I add a new product to the inventory?",
    answer: "To add a new product, navigate to the 'Add Product' section in the admin dashboard. Fill in all required fields including product name, description, price, and upload images. Make sure to set the correct category and stock quantity before publishing."
  },
  {
    id: 1,
    question: "How do I add a new product to the inventory?",
    answer: "To add a new product, navigate to the 'Add Product' section in the admin dashboard. Fill in all required fields including product name, description, price, and upload images. Make sure to set the correct category and stock quantity before publishing."
  },
  {
    id: 2,
    question: "How do I add a new product to the inventory?",
    answer: "To add a new product, navigate to the 'Add Product' section in the admin dashboard. Fill in all required fields including product name, description, price, and upload images. Make sure to set the correct category and stock quantity before publishing."
  }
])
</script>
