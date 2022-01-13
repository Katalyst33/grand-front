<template>
  <div class="">
    <div class="container mx-auto px-2">
      <BannerSlider
        :is-loaded="isLoaded"
        :promoted-destinations="promotedDestinations"
      />

      <ServiceCards />

      <CurrentDealSlide
        :is-loaded="isLoaded"
        :promoted-destinations="promotedDestinations"
      />

      <SliderComponent v-if="false" />
      <TestSlider />
    </div>
  </div>
</template>
<script lang="ts" setup>
import ServiceCards from "../components/ServiceCards.vue";
import CurrentDealSlide from "./CurrentDealSlide.vue";
import SliderComponent from "../components/SliderComponent.vue";
import BannerSlider from "../components/BannerSlider.vue";
import { getPromotedDestination } from "../http/client.Service";
import { onMounted } from "vue";
import TestSlider from "./TestSlider.vue";

const { promotedDestinations, isLoaded, fetch } = getPromotedDestination();
onMounted(fetch);
</script>
