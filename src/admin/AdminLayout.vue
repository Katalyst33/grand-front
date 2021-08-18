<template>
  <h3 class="text-red-500 text-2xl p-4">Manager ONly Section</h3>

  <div class="bg-gray-300 p-6">
    <ul class="flex justify-between text-xl uppercase">
      <li>User</li>
      <li>Deals</li>
      <li>ALl User</li>
      <li class="cursor-pointer" @click="logOutUser">
        <i class="fad fa-power-off text-red-500 font-bold text-2xl"></i>
      </li>
    </ul>
  </div>

  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { logOutUser } from "../store/store";

export default defineComponent({
  name: "AdminLayout",

  setup() {
    return { logOutUser };
  },
});
</script>

<style scoped></style>
