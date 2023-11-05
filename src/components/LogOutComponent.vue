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
<script lang="ts" setup>
import { logOutUser } from "../store/store";
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
