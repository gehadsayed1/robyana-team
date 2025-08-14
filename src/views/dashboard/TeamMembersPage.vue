<template>
  <div class=" px-6 bg-gray-100 min-h-screen">
    <h1 class="text-3xl text-blue-600">Team Members & Permissions</h1>
    <p class="text-gray-500 mt-1">
      Manage your store team members and their access levels
    </p>

    <!-- Stats -->
    <div class="flex gap-6 mt-6">
      <div
        class="bg-white shadow rounded-lg py-4 px-4 flex items-center justify-between w-1/2"
      >
        <div class="flex flex-col items-center gap-2">
          <h3 class="text-xl text-gray-500 font-medium">Total Member</h3>
          <h3 class="text-3xl text-primary font-bold">6</h3>
        </div>
        <span
          class="w-15 h-15 bg-blue-200 rounded-lg flex items-center justify-center text-white"
        >
          <UserIcon class="text-blue-500" :size="25" />
        </span>
      </div>
      <div
        class="bg-white shadow rounded-lg py-4 px-4 flex items-center justify-between w-1/2"
      >
        <div class="flex flex-col items-center gap-2">
          <h3 class="text-xl text-gray-500 font-medium">Active Member</h3>
          <h3 class="text-3xl text-pink-500 font-bold">3</h3>
        </div>
        <span
          class="w-15 h-15 bg-pink-200 rounded-lg flex items-center justify-center text-white"
        >
          <Users class="text-pink-500" :size="25" />
        </span>
      </div>
    </div>

    <!-- Filters -->
    <div class="flex items-center mt-6 gap-4">
      <div class="bg-gray-50 rounded-lg shadow py-2 px-2 flex gap-2">
        <button
          :class="activeTab === 'all' ? activeClass : inactiveClass"
          @click="activeTab = 'all'"
        >
          All Members ({{ members.length }})
        </button>
        <button
          :class="activeTab === 'active' ? activeClass : inactiveClass"
          @click="activeTab = 'active'"
        >
          Active ({{ activeMembers }})
        </button>
      </div>

      <div class="flex items-center gap-2 ml-auto">
        <div class="relative bg-white rounded-md shadow-sm">
          <select
            class="appearance-none px-3 py-2 pr-10 rounded-md w-full border-0 focus:outline-none focus:ring-0 hover:border-none"
          >
            <option>Fit Room</option>
            <option></option>
          </select>
          <ChevronDown
            class="absolute top-2.5 right-2 w-4 h-4 text-gray-500 pointer-events-none"
          />
        </div>

        <button
          @click="openModule = true"
          class="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700 ml-auto"
        >
          + Add Member
        </button>
      </div>
    </div>

    <!-- Members List -->
    <div class="mt-6 space-y-4">
      <TeamMemberCard
        v-for="(member, index) in filteredMembers"
        :key="index"
        :member="member"
        @edit="editMember(member)"
        @delete="deleteMember(member)"
      />
    </div>

    <!-- Add Member Modal -->
    <AddMember v-if="openModule" />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import {
  ChevronDown,
  User as UserIcon,
  Users,
  Users as UsersIcon,
} from "lucide-vue-next";
import TeamMemberCard from "../../components/dashboard/TeamMemberCard.vue";
import AddMember from "../../components/dashboard/AddMember.vue";

const openModule = ref(false);
const members = ref([
  {
    name: "Sarah Johnson",
    phone: "+1 (555) 0123",
    role: "Fit Room Assistant",
    active: true,
  },
  {
    name: "Sarah Johnson",
    phone: "+1 (555) 0123",
    role: "Fit Room Assistant",
    active: true,
  },
  {
    name: "Sarah Johnson",
    phone: "+1 (555) 0123",
    role: "Fit Room Assistant",
    active: false,
  },
]);

const activeTab = ref("all");

const totalMembers = computed(() => members.value.length);
const activeMembers = computed(
  () => members.value.filter((m) => m.active).length
);

const filteredMembers = computed(() =>
  activeTab.value === "active"
    ? members.value.filter((m) => m.active)
    : members.value
);

const activeClass = "bg-gray-100 text-primary font-medium px-3  rounded";
const inactiveClass = "text-gray-600 px-3 py-1";

function editMember(member) {
  console.log("Edit", member);
}

function deleteMember(member) {
  console.log("Delete", member);
}
</script>
