<template>
  <ul class="text-sm font-medium space-y-4">
    <li><router-link :to="{ name: 'AdminDashboard' }">Admin</router-link></li>
    <li><router-link :to="{ name: 'UserDashboard' }">User</router-link></li>
    <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
    <li class="cursor-pointer" @click="logOutUser">
      <i class="fad fa-power-off text-red-500 font-bold text-2xl"></i>
    </li>
  </ul>
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
