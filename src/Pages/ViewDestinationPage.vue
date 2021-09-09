<template>
  <div class="mt-36">
    <div v-if="singleDestinationStore.isLoadingDeal || isLoaded">
      <div class="grid lg:grid-cols-3 space-x-2">
        <div class="lg:col-span-2 tileTab">
          <div>{{ singleDestinationStore.destination.title }}</div>
          <div>{{ singleDestinationStore.destination.description }}</div>
        </div>
        <div class="tileTab">
          <div>
            <p v-html="singleDestinationStore.destination.included"></p>
          </div>
          <h1 class="text-yellow-600 text-3xl">
            N {{ singleDestinationStore.destination.price }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import {
  getOneDestination,
  singleDestinationStore,
} from "../store/destinationStore";
import ViewDealHero from "../layout/ViewDestinationHero.vue";

const isLoaded = ref(false);
getOneDestination().then(() => (isLoaded.value = true));

console.log(singleDestinationStore);
</script>

<style scoped></style>
