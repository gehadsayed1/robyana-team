<template>
    <div class="container mx-auto px-4">
<SwiperComponent :slides="slides" />
<NewAndCollec />
<ShopByCategories />
<div class="my-10 justify-center">
     <h2 class="text-3xl font-bold text-center mb-10">On Sale</h2>

    <OnSaleProducts />

</div>

    </div>

</template>
<script setup>
import NewAndCollec from '../components/pages/NewAndCollec.vue';
import SwiperComponent from '../components/pages/SwiperComponent.vue'
import { useSwiper } from '../components/pages/useSwiper'
import OnSaleProducts from '@/components/pages/OnSaleProducts.vue';
import ShopByCategories from '@/components/pages/ShopByCategories.vue';

const { slides } = useSwiper()
</script>