<template>
  <div id="app" class="" v-if="appState.isLoaded">
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

setAppState();
</script>

<style>
.tileTab {
  @apply bg-white py-2 px-4  border;
}

.btn {
  @apply px-2 py-1 text-white rounded-md;
}
</style>
