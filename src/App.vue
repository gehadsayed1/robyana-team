<template>
  <v-app app>
    <Navbar v-if="!route.meta.hideHeaderFooter"  />
    <router-view />
    <Footer v-if="!route.meta.hideHeaderFooter" />
  </v-app>
</template>

<script setup>
import Navbar from "./components/pages/Navbar.vue";
import Footer from "./components/pages/Footer.vue";
import { useRoute } from "vue-router";

const route = useRoute()
</script>
