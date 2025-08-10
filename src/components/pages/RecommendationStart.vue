<template>
  <div class="text-center mt-5 mb-5">
    <h2 class="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
      Recommendation For You
    </h2>

    <div class="mx-auto bg-white rounded-lg p-4  sm:p-6 l">
      <h2 class="text-2xl sm:text-3xl font-medium text-gray-700 mb-3">
        Want tailored suggestions?
      </h2>

      <p class="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
        We'll need a bit of info to show you what suits you best. Try
        <a
          href="#"
          class="text-primary underline hover:text-blue-800 transition-colors duration-200"
        >
          signing in
        </a>
        or use
        <a
          href="#"
          class="text-primary underline hover:text-blue-800 transition-colors duration-200"
        >
          Guest mode!
        </a>
      </p>

      <button
        class="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mx-auto block max-w-xs w-full"
      >
        Start Now!
      </button>
    </div>
  </div>
</template>

<script setup>
const handleStartNow = () => {
  console.log("Starting personalized recommendations...");
};
</script>
