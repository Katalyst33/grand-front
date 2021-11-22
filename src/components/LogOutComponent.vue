<template>
  <div class="pl-6">
    <ul>
      <li>
        <router-link :to="{ name: 'AdminDashboard' }">Admin</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'UserDashboard' }">User</router-link>
      </li>
      <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
      <li class="cursor-pointer" @click="logOutUser">LogOut</li>
    </ul>
    <button
      @click.prevent="logOutUser"
      class="cursor-pointer flex items-center py-4"
    >
      <span class="fad fa-power-off text-lg text-red-500 pr-2"></span>
      <span class="text-sm font-medium">LogOut</span>
    </button>
  </div>
</template>
<script lang="ts">
import { logOutUser } from "../store/store";

export default {
  name: "LogOutComponent",

  setup() {
    return { logOutUser };
  },
};
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
