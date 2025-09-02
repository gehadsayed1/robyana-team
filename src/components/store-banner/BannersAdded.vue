<script setup>
import { onMounted, ref } from "vue";
import { useBannersStore } from "@/stores/Banners";
import { BASE_URL } from "../../api/Api";
import { Trash2Icon } from "lucide-vue-next";

const bannersStore = useBannersStore();
const banners = ref([]);
onMounted(async () => {
  await bannersStore.fetchBanners();
  banners.value = bannersStore.banners;
});
</script>
<template>
     <div v-if="banners.length">
      <div
        v-for="(banner, index) in banners"
        :key="index"
        class="flex items-center border-1 py-2 px-2 border-gray-500 justify-between rounded-md p-4 mb-4"
      >
        <div class="flex items-center">
          <img
            :src="BASE_URL + banner.imageUrl"
            alt="Banner Image"
            class="w-60 h-25 rounded-md mr-4"
          />
          <div>
            <h3 class="text-sm font-medium">{{ banner.name }}</h3>
          </div>
        </div>
        <div class="flex items-center space-x-2">
          <span
            :class="[
              'px-2 py-1 rounded-full text-xs',
              banner.isActive
                ? 'bg-green-100 text-green-500'
                : 'bg-red-100 text-red-500',
            ]"
          >
            {{ banner.isActive ? "Active" : "Inactive" }}
          </span>
          <button @click="bannersStore.deleteBanner(banner.id)" class="text-white px-2 py-1 rounded-full">
            <Trash2Icon :size="20" class="text-red-400 hover:text-red-600 cursor-pointer" />
          </button>
        </div>
      </div>
      <div class="flex mt-3 justify-end items-center gap-4">
        <button
          class="borders text-center w-40 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
        >
          Cancel
        </button>
        <button
          class="bg-primary text-center w-40 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600"
        >
          Save Changes
        </button>
      </div>
    </div>
    <div v-else>
      <p>No banners available</p>
    </div>
</template>