<template>
  <div class="" v-if="appState.isLoaded">
    <div v-if="appState.isDev" class="bg-gray-900">
      <code class="text-green-400">
        {{ appState.user }} {{ appState.isDev }}</code
      >
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import { setAppState, appState } from "./store/store";
import { ref } from "vue";
const isLoaded = ref(false);
setAppState();

console.log(appState, "appstate");
</script>

<style>
.tileTab {
  @apply bg-white py-2 px-4 rounded-md shadow border;
}
</style>
