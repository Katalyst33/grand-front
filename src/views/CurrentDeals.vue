<template>
  <section>
    <h2 class="title-2 -mb-10">Trending Destinations</h2>
  </section>
  <div class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
    <template v-if="destinationStore.isLoadingDestinations">
      <DealsTileComponent />
    </template>
  </div>
  <div class="text-centre flex justify-center pt-4">
    <router-link :to="{ name: 'Destinations' }">
      <span class="text-lg text-center mt-10 pt-4">More Deals</span>
      <i class="far fa-arrow-right pl-2"></i>
    </router-link>
  </div>
</template>
<script lang="ts" setup>
import DealsTileComponent from "../Pages/DestinationTileComponent.vue";
import {
  destinationStore,
  getAllDestinations,
} from "../store/destinationStore";

getAllDestinations();
</script>

<style lang="scss" scoped>
@import "../assets/css/currentDealsCard.css";
</style>
