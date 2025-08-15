<template>
  <main class="bg-gray-50">
    <!-- Header -->
    <div class="flex items-center justify-center h-60 bg-white font-bold">
      <img
        class="w-full h-full hidden lg:block"
        src="@/assets/wishlist.jpg"
        alt="Wishlist Header"
      />
      <img
        class="w-full h-full block lg:hidden"
        src="@/assets/wishmo.png"
        alt=""
      />
    </div>

    <div class="grid grid-cols-12 max-w-7xl mx-auto px-4 py-10 gap-8">
      <!-- Wishlist Items -->
      <div class="col-span-12 md:col-span-8">
        <div v-if="wishlist.length === 0" class="text-center text-gray-600">
          Your wishlist is empty.
        </div>

        <div v-else>
          <div
            v-for="(item, index) in wishlist"
            :key="index"
            class="bg-white shadow-md py-5 flex justify-between px-4 border-b border-gray-300 relative first:rounded-t-lg last:rounded-b-lg last:border-b-0"
          >
            <div class="flex items-start">
              <input
                type="checkbox"
                :checked="item.selected"
                @change="toggleSelection(index)"
                class="w-4 h-4 rounded focus:ring-0 checked:bg-primary checked:border-primary"
              />

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

                <!-- Size Dropdown -->
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
               <!-- Dropdown -->
<div
  v-if="item.showSizes"
  class="absolute z-20 bg-white border border-gray-300 mt-1 top-3 left-30 w-15 rounded-md shadow-lg overflow-hidden"
>
  <ul class="py-1">
    <li
      v-for="size in sizes"
      :key="size"
      @click="selectSize(index, size)"
      class="px-2 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-800 cursor-pointer text-sm transition-colors text-center"
    >
      {{ size }}
    </li>
  </ul>
</div>
                </div>

                <p class="text-gray-600">{{ item.price }} EGP</p>
              </div>
            </div>

            <!-- Remove Button -->
            <div class="flex items-end gap-4">
              <div
                class="border py-2 px-2 cursor-pointer text-gray-500 rounded-md hover:bg-gray-100 transition"
                @click="removeFromWishlist(index)"
              >
                <Trash2 size="20" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Summary Section -->
      <div class="col-span-12 md:col-span-4">
        <div class="bg-white rounded-md shadow-md py-4 px-4">
          <h2 class="text-xl border-b pb-2 border-gray-400 font-bold mb-4">
            Summary
          </h2>

          <!-- Promo Code -->
          <label for="promo-code" class="text-gray-700 py-3 text-lg block">
            Promo Code
          </label>
          <div class="mb-4 flex">
            <input
              id="promo-code"
              type="text"
              v-model="promoCode"
              placeholder="Enter promo code"
              class="flex-1 px-3 py-2 border border-green-500 rounded-l-md outline-none text-green-600"
            />
            <button
              @click="applyPromoCode"
              class="px-4 py-2 border border-green-500 rounded-r-md text-green-600 hover:bg-green-50 transition"
            >
              Apply
            </button>
          </div>

          <hr class="my-4" />

          <!-- Totals -->
          <div class="flex justify-between mb-2">
            <span class="text-gray-600 text-lg">
              Subtotal ({{ selectedItemsCount }} items)
            </span>
            <!-- <span class="text-gray-800">{{ subtotal }} EGP</span> -->
          </div>
          <div class="flex justify-between mb-2 border-b border-gray-300 pb-2">
            <span class="text-green-500">Discount</span>
            <span class="text-green-500">{{ discount }} EGP</span>
          </div>
          <div class="flex justify-between py-5 text-xl font-semibold">
            <span class="text-gray-600">Total</span>
            <span class="text-gray-800">{{ total }} EGP</span>
          </div>

          <!-- Checkout Button -->
          <button
            class="w-full py-2 mt-2 bg-primary text-white rounded hover:bg-primary/90 transition"
          >
            Try Now
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from "vue";
import img1 from "../assets/skert2.jpg";
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
