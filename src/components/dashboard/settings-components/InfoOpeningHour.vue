<!-- LocationInfoCard.vue -->
<template>
  <div class="bg-white rounded-lg border-2 border-gray-300 mt-5 py-4 px-5 ">
    <!-- Location Info -->
    <div class="text-sm text-gray-600 flex justify-between items-center">
      <!-- Address -->
      <div>
        <h2 class="text-lg font-semibold text-gray-900 mb-2">Opening Hour</h2>
        <div class="flex items-start gap-2 mb-2">
          <MapPin size="17" color="gray" />
          <span>123 Fashion Street, Downtown Cairo, Egypt</span>
        </div>

        <!-- Phone Numbers -->
        <div class="flex items-center gap-2 mb-2">
          <Phone size="17" color="gray" />
          <span>+20 2 123 4567, +20 2 123 4568</span>
        </div>

        <!-- Email -->
        <div class="flex items-center gap-2 mb-2">
          <Mail size="17" color="gray" />
          <span>downtown@zara.com</span>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <!-- Edit Button -->
        <v-button
          class="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-xl text-sm hover:bg-blue-600 transition-colors"
        >
          Edit
        </v-button>
        <!-- Delete Button -->
        <v-button>
          <Trash2
            size="25"
            class="transition-colors cursor-pointer text-red-500 hover:text-red-400"
          />
        </v-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Mail, MapPin, Phone, Trash2 } from "lucide-vue-next";

// يمكنك إضافة props هنا لو عايزة البيانات تيجي من برة
const props = defineProps({
  title: {
    type: String,
    default: "Opening Hour",
  },
  address: {
    type: String,
    default: "123 Fashion Street, Downtown Cairo, Egypt",
  },
  phones: {
    type: String,
    default: "+20 2 123 4567, +20 2 123 4568",
  },
  email: {
    type: String,
    default: "downtown@zara.com",
  },
});

// Functions للأزرار
const handleEdit = () => {
  console.log("Edit clicked");
  // إضافة logic الـ edit هنا
};

const handleDelete = () => {
  console.log("Delete clicked");
  // إضافة logic الـ delete هنا
};
</script>
