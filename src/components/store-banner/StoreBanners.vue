<script setup>
import { CloudUpload } from "lucide-vue-next";
import { ref } from "vue";
import { useBannersStore } from "@/stores/Banners";
import img from "@/assets/default-banner.jpg";
import BannersAdded from "./BannersAdded.vue";

// refs
const fileInput = ref(null);
const bannerName = ref("");
const selectedFiles = ref([]);
const showForm = ref(false); // ✅ نتحكم في إظهار الديف

const bannersStore = useBannersStore();

const openFilePicker = () => {
  fileInput.value.click();
};

const handleFileChange = (event) => {
  const files = Array.from(event.target.files);
  if (!files.length) return;
  selectedFiles.value = files;
  console.log("Selected Files:", selectedFiles.value);
};

const saveBanner = async () => {
  if (!selectedFiles.value.length) {
    alert("Please select at least one image!");
    return;
  }

  const formData = new FormData();

  if (bannerName.value.trim()) {
    formData.append("name", bannerName.value);
    formData.append("displayOrder", 4);
  }

  selectedFiles.value.forEach((file) => {
    formData.append("image", file);
  });

  try {
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    await bannersStore.addBanner(formData);

    // Reset values
    selectedFiles.value = [];
    bannerName.value = "";
    fileInput.value.value = "";

    showForm.value = false;
  } catch (error) {
    console.error("❌ Upload failed:", error);
  }
};
</script>

<template>
  <div class="bg-white shadow-md rounded-md px-6 py-6">
    <!-- Section Title -->
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-2xl font-medium">Store Banners</h2>
      <button
        class="bg-primary text-white w-40 text-center px-4 py-2 rounded-md hover:bg-blue-600"
        @click="showForm = !showForm"
      >
        + Add Banner
      </button>
    </div>

    <!-- Add New Banner -->
    <div v-if="showForm" class="mb-4 bg-gray-50 px-4 py-4 rounded-md shadow-sm">
      <label for="bannerName" class="block text-sm font-medium mb-1"
        >Banner Name</label
      >
      <input
        v-model="bannerName"
        type="text"
        id="bannerName"
        placeholder="Enter banner name"
        class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
      />

      <!-- Dropzone Area -->
      <div
        class="border-dashed border-2 mt-2 border-blue-300 rounded-md py-6 text-center"
      >
        <div class="mb-3 flex justify-center">
          <CloudUpload :size="100" :stroke-width="2.5" class="text-gray-500" />
        </div>
        <p class="text-2xl mb-2">Upload Banner Images</p>
        <button
          class="bg-primary text-white px-6 py-2 rounded-md hover:bg-blue-600 relative"
          @click="openFilePicker"
        >
          Choose Files
        </button>
        <input
          ref="fileInput"
          type="file"
          accept="image/*"
          multiple
          class="hidden"
          @change="handleFileChange"
        />
        <p class="text-xs text-gray-500 mt-3">
          Supports: JPG, PNG, WebP (Max 5MB) — You can upload multiple files
        </p>
      </div>

      <div class="flex mt-3 justify-center items-center gap-4">
        <button
          class="border text-center w-40 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
          @click="showForm = false"
        >
          Cancel
        </button>
        <button
          class="bg-primary flex justify-center items-center w-40 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600"
          @click="saveBanner"
          :disabled="bannersStore.loading"
        >
          <span
            v-if="bannersStore.loading"
            class="inline-block w-5 h-5 border-4 border-t-white border-r-transparent border-b-white border-l-transparent rounded-full animate-spin mr-2"
          ></span>

          <span>{{
            bannersStore.loading ? "Uploading..." : "Save Changes"
          }}</span>
        </button>
      </div>
    </div>

  
      <BannersAdded />


  </div>
</template>
