<template>
  <div class="min-h-screen bg-gray-100 py-8 px-6">
    <div class="max-w-6xl mx-auto">
      <!-- Header Section -->
      <div class="mb-8">
        <h1 class="text-3xl text-primary font-meduim mb-2">Help & Support Center</h1>
        <p class="text-sm text-gray-500">Get help from our technical support team</p>
      </div>

      <!-- Support Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
        <SupportCard
          icon="phone"
          title="Phone Support"
          contact="+20 2 123 4567"
          description="Sunday - Thursday: 9:00 AM - 6:00 PM"
          bg-color="bg-blue-100"
          icon-color="text-blue-600"
        />
        <SupportCard
          icon="mail"
          title="Email Support"
          contact="support@remake.com"
          description="Response within 24 hours"
          bg-color="bg-blue-100"
          icon-color="text-blue-600"
        />
        <SupportCard
          icon="message-circle"
          title="WhatsApp"
          contact="+20 10 123 4567"
          description="Sunday - Thursday: 9:00 AM - 6:00 PM"
          bg-color="bg-green-100"
          icon-color="text-green-600"
        />
      </div>

     
        <!-- Support Hours - Takes 1 column -->
        <div >
          <SupportHours />
        </div>
        
        <!-- FAQ Section - Takes 2 columns -->
        <div class="lg:col-span-2">
          <FAQSection />
        </div>
     
    </div>
  </div>
</template>

<script setup>
import FAQSection from '../../components/dashboard/help-components/FAQSection.vue';
import SupportCard from '../../components/dashboard/help-components/SupportCard.vue';
import SupportHours from '../../components/dashboard/help-components/SupportHours.vue';


</script>