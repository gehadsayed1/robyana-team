<template>
  <div class="container mx-auto px-2 md:px-16">
    <!-- العنوان -->
    <div class="mb-4 md:mb-6">
      <div class="w-full">
        <h3 class="text-center text-xl md:text-2xl font-bold px-2">
          Recommendation For You
        </h3>
      </div>
    </div>

    <!-- Custom Tabs -->
    <div class="mb-4 md:mb-6 w-full max-w-4xl mx-auto">
      <div class="flex border-b border-gray-200 overflow-x-auto scrollbar-hide md:overflow-visible">
        <button
          v-for="(item, index) in tabs"
          :key="item"
          @click="tab = index"
          class="flex-shrink-0 py-3 px-4 text-center text-sm font-medium transition-colors duration-200 whitespace-nowrap min-w-[80px] md:min-w-0 md:flex-1"
          :class="[
            tab === index
              ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
          ]"
        >
          {{ item }}
        </button>
      </div>
    </div>

    <swiper
      class="custom-swiper py-4 md:py-6"
      :modules="modules"
      :slides-per-view="1.2"
      :space-between="12"
      :slides-offset-before="8"
      :slides-offset-after="8"
      navigation
      :breakpoints="swiperBreakpoints"
    >
      <swiper-slide
        v-for="product in products"
        :key="product.id"
        class="!h-auto"
      >
        <!-- إزالة الـ padding الإضافي -->
        <ProductCard :product="product" class="h-full" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProductCard from "./ProductCard.vue";

// Swiper components
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

// Styles
import "swiper/css";
import "swiper/css/navigation";

// Modules
const modules = [Navigation];

// Data
import skirt from "@/assets/skert2.jpg";

const tab = ref(0);
const tabs = ["T-Shirt", "Pants", "Jeans", "Shoes", "Sweatpants"];

const products = [
  { id: 1, image: skirt, name: "Maxi Long Skirts", category: "Women", price: 699, oldPrice: 1200 },
  { id: 2, image: skirt, name: "Maxi Long Skirts", category: "Women", price: 699, oldPrice: 1200 },
  { id: 3, image: skirt, name: "Maxi Long Skirts", category: "Women", price: 699, oldPrice: 1200 },
  { id: 4, image: skirt, name: "Maxi Long Skirts", category: "Women", price: 699, oldPrice: 1200 },
  { id: 5, image: skirt, name: "Maxi Long Skirts", category: "Women", price: 699, oldPrice: 1200 },
];

const swiperBreakpoints = {
  // موبايل صغير جداً
  320: {
    slidesPerView: 1.2,
    spaceBetween: 12,
    slidesOffsetBefore: 8,
    slidesOffsetAfter: 8,
  },
  
  // موبايل متوسط
  480: {
    slidesPerView: 1.4,
    spaceBetween: 16,
    slidesOffsetBefore: 16,
    slidesOffsetAfter: 16,
  },
  
  // موبايل كبير/تابلت صغير
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
    slidesOffsetBefore: 16,
    slidesOffsetAfter: 16,
  },
  
  // تابلت
  768: {
    slidesPerView: 2.5,
    spaceBetween: 24,
    slidesOffsetBefore: 20,
    slidesOffsetAfter: 20,
  },
 
  // ديسكتوب
  1024: {
    slidesPerView: 3,
    spaceBetween: 24,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
  },
  
  // شاشات كبيرة
  1280: {
    slidesPerView: 4,
    spaceBetween: 24,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
  },
};
</script>

<style>
/* إخفاء scrollbar */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* تأكد من أن الـ slide يأخذ الارتفاع المناسب */
.swiper-slide {
  height: auto !important;
  display: flex !important;
  flex-direction: column;
}

/* تأكد من أن الكارد يملأ الـ slide */
.swiper-slide .product-card,
.swiper-slide > div {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.swiper-button-next,
.swiper-button-prev {
  color: #000;
  width: 36px;
  height: 36px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.9;
  transition: all 0.3s ease;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  opacity: 1;
  transform: scale(1.1);
}

/* موضع الأسهم */
.swiper-button-prev {
  left: 10px;
}

.swiper-button-next {
  right: 10px;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 18px;
  font-weight: bold;
}

/* تحسينات للهاتف المحمول */
@media (max-width: 640px) {
  .custom-swiper {
    padding-top: 1rem;
    padding-bottom: 1.5rem;
  }
  
  .swiper-button-next,
  .swiper-button-prev {
    width: 32px;
    height: 32px;
  }
  
  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 16px;
  }
  
  .swiper-button-prev {
    left: 5px;
  }
  
  .swiper-button-next {
    right: 5px;
  }
}

/* تحسينات للشاشات الصغيرة جداً */
@media (max-width: 480px) {
  .swiper-button-next,
  .swiper-button-prev {
    width: 28px;
    height: 28px;
  }
  
  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 14px;
  }
  
  .swiper-button-prev {
    left: 2px;
  }
  
  .swiper-button-next {
    right: 2px;
  }
}

/* إخفاء الأسهم على الشاشات الصغيرة جداً */
@media (max-width: 360px) {
  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }
}

/* إزالة الـ padding الإضافي من الـ slides */
@media (max-width: 640px) {
  .swiper-slide {
    padding: 0;
  }
}
</style>