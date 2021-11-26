<template>
  <div>
    <div class="container mx-auto px-2">
      <ServiceCards />

      <CurrentDealSlide v-if="false" />
      <SliderComponent />
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
import SliderComponent from "../components/SliderComponent.vue";
</script>
