<template>
  <div>
    <div class="container mx-auto px-2">
      <ServiceCards />

      <CurrentDealSlide />

      <div></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import ServiceCards from "../components/ServiceCards.vue";
import CurrentDeals from "./CurrentDeals.vue";
import {
  destinationStore,
  getAllDestinations,
} from "../store/destinationStore";
import CurrentDealSlide from "./CurrentDealSlide.vue";
</script>
