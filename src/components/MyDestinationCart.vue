<script lang="ts" setup>
import { appState } from "../store/store";
</script>

<template>
  <div v-if="appState?.user?.uuid">
    <router-link :to="{ name: 'MyDestinations' }" class="relative">
      <i class="far fa-map-marked-alt text-2xl text-gray-800"></i>
      <span class="absolute bottom-4 -top-2 right-0 left-7">
        <!--        <span
          class="bg-yellow-400 h-4 w-4 text-xs font-bold rounded-full circle-with-text"
        >
        </span>-->
      </span>
    </router-link>
  </div>
</template>

<style scoped>
.circle-with-text {
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  text-align: center;
  display: flex;
}
</style>
