<template>
  <div class="fixed left-0 top-[64px] w-[267px] h-[calc(100vh-64px)] bg-white px-5 py-6 z-30 overflow-y-auto flex flex-col">
    
    <!-- العناصر الرئيسية -->
    <div class="flex-1">
      <SidebarItem to="/dashboard" icon="Home" label="Dashboard" />
      <SidebarItem to="/admin" icon="Shield" label="Admin" />
      <SidebarItem to="/store-control" icon="Store" label="Store Control" />
      <SidebarItem to="/requests" icon="FileText" label="Requests" />
      <SidebarItem to="/member" icon="Users" label="Member" />
    </div>

    <!-- العناصر السفلية -->
    <div class="mt-auto pt-4 border-t border-gray-200">
      <SidebarItem to="/help" icon="HelpCircle" label="Help" variant="info" />
      <SidebarItem to="/logout" icon="LogOut" label="Logout" variant="danger" />
    </div>

  </div>
</template>

<script setup>
import SidebarItem from './SidebarItem.vue'
</script>