<template>
  <div class="" v-if="isLoaded">
    <div class="bg-gray-900">
      <code class="text-green-400">
        {{ appState.user }} {{ appState.state }}</code
      >
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import { setAppState, appState } from "./store/store";
import { ref } from "vue";
const isLoaded = ref(false);
setAppState().then(() => (isLoaded.value = true));
</script>

<style>
.tileTab {
  @apply bg-white py-2 px-4 rounded-md shadow border;
}
</style>
