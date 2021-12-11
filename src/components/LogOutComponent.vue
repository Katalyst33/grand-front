<template>
  <div class="pl-6">
    <button
      @click.prevent="logOutUser"
      class="cursor-pointer flex items-center py-4"
    >
      <span class="fad fa-power-off text-lg text-red-500 pr-2"></span>
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
