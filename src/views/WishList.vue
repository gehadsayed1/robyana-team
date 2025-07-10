<script setup>
import { ref, computed } from "vue";
import img1 from "../assets/skert2.jpg";

// lucide icons
import { CheckSquare, Square, ChevronDown, Trash2 } from "lucide-vue-next";

const wishlist = ref([
  {
    name: "Maxi Long Skirt",
    image: img1,
    price: 699,
    size: "M",
    selected: true,
    showSizes: false,
  },
  {
    name: "Striped T-Shirt",
    image: img1,
    price: 299,
    size: "L",
    selected: false,
    showSizes: false,
  },
  {
    name: "Denim Jacket",
    image: img1,
    price: 899,
    size: "XL",
    selected: true,
    showSizes: false,
  },
]);

const sizes = ["S", "M", "L", "XL"];

const promoCode = ref("");

const toggleSelection = (index) => {
  wishlist.value[index].selected = !wishlist.value[index].selected;
};

const removeFromWishlist = (index) => {
  wishlist.value.splice(index, 1);
};

const toggleSizeDropdown = (index) => {
  wishlist.value[index].showSizes = !wishlist.value[index].showSizes;
};

const selectSize = (index, newSize) => {
  wishlist.value[index].size = newSize;
  wishlist.value[index].showSizes = false;
};

const selectedItemsCount = computed(
  () => wishlist.value.filter((item) => item.selected).length
);

const subtotal = computed(() =>
  wishlist.value
    .filter((item) => item.selected)
    .reduce((sum, item) => sum + parseFloat(item.price), 0)
);

const discount = computed(() => subtotal.value * 0.1);

const total = computed(() => subtotal.value - discount.value);

const applyPromoCode = () => {
  alert("Promo code applied: " + promoCode.value);
};
</script>

<template>
  <v-main class=" bg-gray-50">
    <!-- Header -->
    <div class="flex items-center justify-center h-60 bg-white font-bold">
      <img class="" src="@/assets/wishlist.jpg" alt="" />
    </div>

    <v-container class="grid grid-cols-12 py-10 gap-8">
      <!-- Wishlist Items -->
      <div class="col-span-12 md:col-span-8">
        <div v-if="wishlist.length === 0" class="text-center text-gray-600">
          Your wishlist is empty.
        </div>

        <div  v-else>
          <div
            v-for="(item, index) in wishlist"
            :key="index"
            class="bg-white rounded py-5 flex justify-between px-4 border-b-1 border-gray-400 relative"
          >
            <div class="flex items-start">
              <!-- Icon for selection -->
              <span
                @click="toggleSelection(index)"
                class="cursor-pointer mr-4 mt-6"
              >
                <i
                  v-if="item.selected"
                  class="fas fa-check-square text-primary"
                ></i>
                <i v-else class="far fa-square text-primary"></i>
              </span>
              <!-- Icon for selection -->
              <span
                @click="toggleSelection(index)"
                class="cursor-pointer mr-4 mt-6"
              >
                <CheckSquare
                  v-if="item.selected"
                  class="text-primary w-6 h-6"
                />
                <Square v-else class="text-primary w-6 h-6" />
              </span>

              <!-- Product Image -->
              <img
                :src="item.image"
                :alt="item.name"
                class="w-24 h-24 object-cover bg-gray-100 rounded-md mr-4"
              />

              <!-- Product Details -->
              <div>
                <h2 class="text-lg font-semibold text-gray-800 mb-2">
                  {{ item.name }}
                </h2>

                <!-- Size dropdown -->

<div
  class="text-gray-600 mb-2 relative flex items-center gap-4"
>
  <p class="text-gray-600">Size:</p>
  <div class="flex items-center gap-4 cursor-pointer">
    <p
      class="bg-primary w-9 h-9 flex text-white px-2 py-1 rounded-full items-center justify-center"
    >
      {{ item.size }}
    </p>
    <ChevronDown
      @click="toggleSizeDropdown(index)"
      class="w-7 h-7 text-gray-500 cursor-pointer"
    />
  </div>

  <!-- Dropdown -->
  <div
    v-if="item.showSizes"
    class="absolute z-10 bg-white border border-gray-300 mt-12 left-20 rounded shadow-md"
  >
    <ul>
      <li
        v-for="size in sizes"
        :key="size"
        @click="selectSize(index, size)"
        class="px-4 py-2 hover:bg-blue-100 cursor-pointer"
      >
        {{ size }}
      </li>
    </ul>
  </div>
</div>



                <p class="text-gray-600">{{ item.price }} EGP</p>
              </div>
            </div>

               <div class="flex items-end  gap-4">
             <div class=" border py-3 px-3  cursor-pointer text-gray-500 rounded">
                <Trash2 size="20" />
             </div>
          </div>
        
          </div>
       
        </div>
      </div>

      <!-- Summary Section -->
      <div class="col-span-12 md:col-span-4">
        <div class="bg-white rounded-md shadow-md py-4 px-4">
          <h2 class="text-xl border-b-1 pb-2 border-gray-400 font-bold mb-4">Summary</h2>
           <label for="promo-code" class="text-gray-700 py-3  text-lg">Promo Code</label>
          <div class="mb-4 flex items-center justify-between ">
           
         <div>
           
            <input
              id="promo-code"
              type="text"
              v-model="promoCode"
              placeholder="Enter promo code"
              class= "aplay-inp w-70  "
            />
         </div>
            <span
              @click="applyPromoCode"
              class="aplay-but w-20    transition"
            >
              Apply
            </span>
          </div>
          <hr class="my-4" />
          <div class="flex justify-between mb-2">
            <span class="text-gray-600 text-lg"
              >Subtotal ({{ selectedItemsCount }} items)</span
            >
            <!-- <span class="text-gray-800">{{ subtotal }} EGP</span> -->
          </div>
          <div class="flex justify-between mb-2 border-b-1 border-gray-300 pb-2">
            <span class="text-green-500">Discount</span>
            <span class="text-green-500">{{ discount }} EGP</span>
          </div>
          <div class="flex justify-between py-5  text-xl font-semibold">
            <span class="text-gray-600">Total PayPal</span>
            <span class="text-gray-800">{{ total }} EGP</span>
          </div>
          <button
            class="try-boutton "
          >
            Try Now
          </button>
        </div>
      </div>
    </v-container>
  </v-main>
</template>

<style scoped>

.aplay-inp{
    padding: 10px;
    border: 1px solid #4CAF50;
    border-radius: 4px 0px 0px 4px;
    outline: none;
    color: #4CAF50;
}

.aplay-but{
    padding: 10px;
    border: 1px solid #4CAF50;
    border-radius: 0px 4px 4px 0px;
  color: #4CAF50;
    cursor: pointer;
}
.try-boutton {
  width: 100%;
  padding: 7px;
  margin-top: 10px;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

</style>
