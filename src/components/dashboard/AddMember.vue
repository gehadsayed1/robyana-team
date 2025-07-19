<script setup>
import { ChevronLeft } from "lucide-vue-next";
</script>

<template>
  <div
    class="fixed inset-0 bg-[rgb(0,0,0,0.25)] bg-opacity-30 flex items-center justify-center z-50"
  >
    <div class="bg-white py-6 px-6 rounded-lg shadow-xl w-[60%]">
      <div class="flex items-center mb-3">
        <ChevronLeft />
        <h2 class="text-2xl">Add New Team Member</h2>
      </div>

      <form>
       
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label
              for="firstName"
              class="block text-sm font-medium text-gray-700"
              >First Name</label
            >
            <input
              type="text"
              id="firstName"
              name="firstName"
              class="mt-1 block w-full borders border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              for="lastName"
              class="block text-sm font-medium text-gray-700"
              >Last Name</label
            >
            <input
              type="text"
              id="lastName"
              name="lastName"
              class="mt-1 block w-full borders border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

     
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label
              for="phoneNumber"
              class="block text-sm font-medium text-gray-700"
              >Phone Number</label
            >
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              class="mt-1 block w-full borders border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              for="idNumber"
              class="block text-sm font-medium text-gray-700"
              >ID Number</label
            >
            <input
              type="text"
              id="idNumber"
              name="idNumber"
              class="mt-1 block w-full borders border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <!-- القسم -->
        <div class="mb-4">
          <label
            for="department"
            class="block text-sm font-medium text-gray-700"
            >Department</label
          >
          <select
            id="department"
            name="department"
            class="mt-1 block w-full borders border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select Department</option>
            <option value="sales">Sales</option>
            <option value="marketing">Marketing</option>
            <option value="hr">Human Resources</option>
            <option value="it">IT</option>
          </select>
        </div>

        <!-- الصلاحيات -->
        <div class="mb-4 w-50">
          <p class="block text-md font-medium text-gray-800">Permissions</p>
          <div class="flex items-center mt-2 gap-5">
            <div class="flex items-center mt-2">
              <input
                id="dashboard"
                name="permissions"
                type="checkbox"
                value="dashboard"
                class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label for="dashboard" class="ml-2 text-sm text-gray-700"
                >Dashboard</label
              >
            </div>
            <div class="flex items-center mt-2">
              <input
                id="productManager"
                name="permissions"
                type="checkbox"
                value="productManager"
                class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label for="productManager" class="ml-2 text-sm text-gray-700"
                >Product Manager</label
              >
            </div>
          </div>
          <div class="flex items-center mt-2 gap-5">
            <div class="flex items-center mt-2">
              <input
                id="fitRoomRequests"
                name="permissions"
                type="checkbox"
                value="fitRoomRequests"
                class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label for="fitRoomRequests" class="ml-2 text-sm text-gray-700"
                >Fit Room Requests</label
              >
            </div>
            <div class="flex items-center mt-2">
              <input
                id="storeControl"
                name="permissions"
                type="checkbox"
                value="storeControl"
                class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label for="storeControl" class="ml-2 text-sm text-gray-700"
                >Store Control</label
              >
            </div>
          </div>
        </div>

       
        <div class="flex justify-end">
          <v-button
            type="button"
            class="bg-white py-2 w-40 text-center borders border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancel
          </v-button>
          <v-button
            type="submit"
            class="ml-3 inline-flex justify-center py-2 w-40 text-center border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Member
          </v-button>
        </div>
      </form>
    </div>
  </div>
</template>


