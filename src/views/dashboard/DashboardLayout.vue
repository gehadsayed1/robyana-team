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
  
    <div class="fixed top-0 left-0 right-0 z-50 h-16 bg-white shadow">
      <Navbar />
    </div>

    <!-- Layout: Sidebar + Content -->
   <div class="flex ">
  <!-- Sidebar -->
  <aside class="w-64 h-[calc(100vh-64px)] bg-white shadow overflow-y-auto">
    <Sidebar />
  </aside>

  <!-- Main Content -->
  <main class="flex-1 bg-gray-100 ml-2 mt-5 p-4">
    <router-view v-if="!loading" />
    <div v-else class="flex justify-center items-center h-full">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    </div>
  </main>
</div>

  </div>
</template>
