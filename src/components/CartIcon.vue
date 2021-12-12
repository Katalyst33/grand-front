<template>
  <div>
    <button @click.prevent="testCart" class="relative">
      <i class="far fa-map-marked-alt text-2xl text-gray-800"></i>
      <span class="absolute bottom-4 -top-2 right-0 left-7">
        <span
          class="bg-yellow-400 h-4 w-4 text-xs font-bold rounded-full circle-with-text"
        >
          {{ destinationStore.myDestinations.length }}</span
        >
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { destinationStore } from "../store/destinationStore";
import { appState } from "../store/store";

function testCart() {
  appState.showCart = true;
  console.log(appState.showCart);
  // alert("gey");
}
</script>

<style scoped>
.circle-with-text {
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  text-align: center;
  display: flex;
}
</style>
