<template>
  <main class="flex-1 ">
    <SwiperComponent :slides="slides" />
    <NewAndCollec />
    <RecommendationStart/>
  </main>
</template>

<script setup>
import NewAndCollec from '../components/pages/home/NewAndCollec.vue';
import SwiperComponent from '../components/pages/home/SwiperComponent.vue';
import RecommendationStart from '../components/pages/RecommendationStart.vue';
import { useSwiper } from '../components/pages/useSwiper';

const { slides } = useSwiper();
</script>
