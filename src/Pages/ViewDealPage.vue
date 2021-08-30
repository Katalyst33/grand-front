<template>
  <div class="mt-36">
    <div v-if="singleDealStore.isLoadingDeal">
      <div class="grid lg:grid-cols-3 space-x-2">
        <div class="lg:col-span-2 tileTab">
          <div>{{ singleDestinationStore.destination.title }}</div>
          <div>{{ singleDestinationStore.destination.description }}</div>
        </div>
        <div class="tileTab">
          <div>
            <p v-html="singleDealStore.destination.included"></p>
          </div>
          <h1 class="text-yellow-600 text-3xl">
            N {{ singleDestinationStore.destination.price }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import {
  getOneDestination,
  singleDestinationStore,
} from "../store/destinationStore";
import ViewDealHero from "../layout/ViewDestinationHero.vue";

export default defineComponent({
  name: "ViewDealPage",
  components: { ViewDealHero },
  setup() {
    const isLoaded = ref(false);
    getOneDestination().then(() => (isLoaded.value = true));

    console.log();
    return { isLoaded, singleDealStore: singleDestinationStore };
  },
});
</script>

<style scoped></style>
