<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "./components/pages/Navbar.vue";
import Footer from "./components/pages/Footer.vue";
</script>
