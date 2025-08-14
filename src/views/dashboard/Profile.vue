<template>
  <div class=" px-6">
    <div class="bg-white rounded-lg shadow-md py-6 px-6">
      <div class="flex items-start mb-6">
        <div class="relative ml-4">
          <img
            src="https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png"
            alt="Profile"
            class="w-20 h-20 rounded-full object-cover"
          />
          <div
            class="absolute -bottom-1 -right-1 top-13 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"
          >
            <Pencil stroke="white" size="15" />
          </div>
        </div>
      </div>

      <!-- Form Fields -->
      <div class="space-y-6">
        <!-- First Name and Last Name Row -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-md font-medium text-gray-900 mb-1 mt-2">
              First Name
            </label>
            <input
              type="text"
              v-model="formData.firstName"
              class="w-full px-3 py-2 borders rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label class="block text-md font-medium text-gray-900 mb-1 mt-2">
              Last Name
            </label>
            <input
              type="text"
              v-model="formData.lastName"
              class="w-full px-3 py-2 borders rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <!-- Email Field -->
        <div>
          <label class="block text-md font-medium text-gray-900 mb-1 mt-2">
            Email
          </label>
          <input
            type="email"
            v-model="formData.email"
            class="w-full px-3 py-2 borders rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <!-- Phone Number and ID Number Row -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-md font-medium text-gray-900 mb-1 mt-2">
              Phone Number
            </label>
            <input
              type="tel"
              v-model="formData.phoneNumber"
              placeholder=""
              class="w-full px-3 py-2 borders rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label class="block text-md font-medium text-gray-900 mb-1 mt-2">
              ID Number
            </label>
            <input
              type="text"
              v-model="formData.idNumber"
              class="w-full px-3 py-2 borders rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <!-- Save Button -->
        <div class="flex justify-end mt-8">
          <button
            @click="handleSave"
            class="w-40 flex justify-center items-center py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Pencil } from "lucide-vue-next";
import { reactive, watch } from "vue";

const props = defineProps({
  initialData: {
    type: Object,
    default: () => ({}),
  },
  readonly: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["save"]);

const formData = reactive({
  firstName: "Radwa",
  lastName: "Magdy",
  email: "Radwa.magdytaha@gmail.com",
  phoneNumber: "",
  idNumber: "+++++++++++++++",
});

watch(
  () => props.initialData,
  (newData) => {
    if (Object.keys(newData).length > 0) {
      Object.assign(formData, newData);
    }
  },
  { deep: true, immediate: true }
);

const handleSave = () => {
  emit("save", formData);
  console.log("Form data saved:", formData);
  if (typeof window !== "undefined") {
    window.$toast?.success("تم حفظ البيانات بنجاح!") ||
      alert("تم حفظ البيانات بنجاح!");
  }
};

const updateField = (field, value) => {
  formData[field] = value;
};
</script>

<style scoped>
.transition-colors {
  transition: background-color 0.2s ease-in-out;
}
</style>
