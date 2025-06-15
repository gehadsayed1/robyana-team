<template>
    <div class="container mx-auto px-4">
<SwiperComponent :slides="slides" />
<NewAndCollec />
    </div>

</template>
<script setup>
import NewAndCollec from '../components/pages/NewAndCollec.vue';
import SwiperComponent from '../components/pages/SwiperComponent.vue'
import { useSwiper } from '../components/pages/useSwiper'

const { slides } = useSwiper()
</script>