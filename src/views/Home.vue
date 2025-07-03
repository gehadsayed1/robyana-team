<template>
  <v-main>
  
      <SwiperComponent :slides="slides" />
      <NewAndCollec />
   
  </v-main>
</template>

<script setup>
import NewAndCollec from '../components/pages/NewAndCollec.vue';
import SwiperComponent from '../components/pages/SwiperComponent.vue'
import { useSwiper } from '../components/pages/useSwiper'


const { slides } = useSwiper()
</script>