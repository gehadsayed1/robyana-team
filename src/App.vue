<template>
  <v-app>
    <Navbar />
    <router-view />
    <Footer />
  </v-app>
</template>

<script setup>
import Navbar from "./components/pages/Navbar.vue";
import Footer from "./components/pages/Footer.vue";
</script>
