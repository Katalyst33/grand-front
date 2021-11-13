<template>
  <div>
    <div class="flex items-center justify-between">
      <ul class="flex space-x-4">
        <li>
          <router-link :to="{ name: 'AllDestinationX' }">All Deals</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'AddDestination' }"
            >Create Deals</router-link
          >
        </li>
      </ul>

      <button @click="clearStore" class="bg-red-500 px-4">Clear</button>

      <template v-if="$route.name === 'UpdateDestination'">
        <ul v-if="isLoaded" class="flex space-x-4">
          <li>
            <router-link
              :to="{
                name: 'DestinationStatus',
                params: {
                  destinationId: singleDestinationStore.destination.uuid,
                },
              }"
              >Statistics</router-link
            >
          </li>
        </ul>
      </template>
    </div>

    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import $Router from "../../router";
import {
  clearStore,
  singleDestinationStore,
} from "../../store/destinationStore";

import { ref } from "vue";
import { useRouter } from "vue-router";

const isLoaded = ref(false);
</script>

<style scoped>
ul > li {
  @apply bg-yellow-500 rounded-full py-1 px-3;
}
</style>
