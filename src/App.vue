<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar -->
    <Navbar v-if="!route.meta.hideHeaderFooter" />

    <!-- Main content -->
    <main class="flex-1 bg-gray-100" style="margin-top: 64px;">
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
