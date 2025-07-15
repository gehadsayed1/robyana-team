<template>
  <div
    class="fixed left-0 top-[64px] w-[267px] h-[calc(100vh-64px)] bg-white  px-5 py-6 z-30 overflow-y-auto"
  >
    <SidebarItem to="/dashboard" icon="Home" label="Dashboard" />
    <SidebarItem to="/admin" icon="Shield" label="Admin" />
    <SidebarItem to="/store-control" icon="Store" label="Store Control" />
    <SidebarItem to="/requests" icon="FileText" label="Requests" />
    <SidebarItem to="/member" icon="Users" label="Member" />
  </div>
</template>

<script setup>
import SidebarItem from './SidebarItem.vue'
</script>
