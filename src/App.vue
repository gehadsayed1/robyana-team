<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar -->
    <div style="margin-bottom: 64px;" v-if="!route.meta.hideHeaderFooter">
      <Navbar />
    </div>

    <!-- Main content -->
    <main class="flex-1 bg-gray-100">
      <router-view />
    </main>

    <!-- Footer -->
    <Footer v-if="!route.meta.hideHeaderFooter" />
  </div>
</template>

<script setup>
import Navbar from "./components/pages/Navbar.vue";
import Footer from "./components/pages/Footer.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>
