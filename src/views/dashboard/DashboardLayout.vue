<script setup>
import Navbar from '@/components/dashboard/Navbar.vue'
import Sidebar from '@/components/dashboard/Sidebar.vue'
import { ref, onMounted } from 'vue'

const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 2000)
})
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Navbar ثابت -->
    <div class="fixed top-0 left-0 right-0 z-50 h-16 bg-white shadow">
      <Navbar />
    </div>

    <!-- Layout: Sidebar + Content -->
    <div class="flex pt-16"> <!-- تعويض ارتفاع الهيدر -->
      
      <!-- Sidebar ثابت بالنسبة للصفحة -->
      <aside class="w-64 h-[calc(100vh-64px)] bg-white shadow overflow-y-auto">
        <Sidebar />
      </aside>

      <!-- Main Content -->
 <v-main class="bg-gray-100 w-[calc(100vh-64px)]  " style="margin-left: 10px; margin-top: 20px;">
  <router-view v-if="!loading" />
  <div v-else class="">
    <v-progress-circular indeterminate color="primary" />
  </div>
</v-main>

    </div>
  </div>
</template>
