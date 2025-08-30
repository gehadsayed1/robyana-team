<script setup lang="ts">
import { ChevronRight, ShieldCheck, UserRound } from 'lucide-vue-next';

</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-3">
    <!-- العنوان -->
    <div class="text-center mb-6">
      <div class="flex justify-center mx-auto mb-4 rounded-full bg-gradient-to-tr from-blue-400 to-blue-200 w-24 h-24">
        <img src="../assets/checkroom.png" alt="Logo" class=" mx-auto mb-4 " />
      </div>

      <h1 class="text-3xl font-medium text-gray-800">Let's Find Your Perfect Fit!</h1>
      <p class="text-gray-600">
        Answer a few quick questions so we can recommend the best styles for you.
      </p>
    </div>

    <!-- Progress -->
    <div class="w-full max-w-2xl mb-6">
      <div class="flex justify-between text-sm text-gray-500 mb-2">
        <span>Step 1 of 3</span>
        <span>50% completed</span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-2">
        <div class="bg-blue-500 h-2 rounded-full" style="width: 50%"></div>
      </div>
    </div>

    <!-- Card -->
  <div class="bg-gradient-to-tr from-blue-400 to-blue-200 w-full flex items-center justify-center py-12">
      <div class="bg-white rounded-xl shadow-md p-8 w-full max-w-2xl ">
      <!-- Icon -->
      <div class="flex justify-center mb-6">
        <div class="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
        <UserRound class="h-8 w-8 text-white" />
        </div>
      </div>

      <!-- Title -->
      <h2 class="text-3xl font-medium text-center text-gray-800 mb-2">
        Personal Information
      </h2>
      <p class="text-center text-gray-400 mb-6">
        Let’s start with your basic details
      </p>

      <!-- Form -->
      <form class="space-y-4">
        <!-- Name -->
        <div>
          <label class="block text-xl font-medium text-gray-700">Name</label>
          <input
            type="text"
            class="mt-1 block w-full border border-primary rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>

        <!-- Phone -->
        <div>
          <label class="block text-xl font-medium text-gray-700">Phone Number</label>
          <div class="flex gap-2">
            <select
              class="border border-primary rounded-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>+20</option>
              <option>+966</option>
              <option>+971</option>
            </select>
            <input
              type="text"
              class="flex-1 border border-primary rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone"
            />
          </div>
        </div>

        <!-- Age -->
        <div>
          <label class="block text-xl font-medium text-gray-700">Age</label>
          <input
            type="number"
            class="mt-1 block w-full border border-primary rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your age"
          />
        </div>

        <!-- Gender -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Gender</label>
          <div class="flex space-x-6">
            <label class="flex items-center space-x-2">
              <input type="radio" name="gender" class="text-blue-600" />
              <span>Male</span>
            </label>
            <label class="flex items-center space-x-2">
              <input type="radio" name="gender" class="text-blue-600" />
              <span>Female</span>
            </label>
          </div>
        </div>

        <!-- Button -->
        <div class="flex justify-end">
          <button
            type="submit"
            class="bg-primary hover:bg-blue-300 text-white px-6 py-2 rounded-md flex items-center"
          >
            Continue
            <ChevronRight :size="25" />
          </button>
        </div>
      </form>
    </div>
  </div>

    <!-- Note -->
    <p class="text-sm flex gap-2 items-center text-gray-500  pt-2 text-center">
        <ShieldCheck :size="17" />
      Your information is secure and will only be used to provide personalized recommendations.
    </p>
  </div>
</template>
