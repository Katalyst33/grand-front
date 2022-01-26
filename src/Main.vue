<template>
  <div>
    <div id="app" class="" v-if="appState.isLoaded">
      <!--    Show user in development mode -->
      <div v-if="false" class="bg-gray-900">
        <code class="text-green-400">
          {{ appState.user }} {{ appState.isDev }}</code
        >
      </div>
      <!--    Show user in development mode -->

      <router-view v-slot="{ Component, route }">
        <transition name="route" mode="out-in">
          <component :is="Component" :key="route.name" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { setAppState, appState } from "./store/store";

setAppState();
</script>

<style lang="scss">
@import "assets/scss/input-buttons.scss";

.tileTab {
  @apply bg-white py-2 px-4  border border-yellow-100 rounded-lg shadow-sm;
}

.btn {
  @apply px-2 py-1 text-white rounded-md;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
