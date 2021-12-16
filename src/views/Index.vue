<template>
  <div>
    <div class="container mx-auto px-2">
      <BannerSlider />

      <ServiceCards />

      <!--      <CurrentDealSlide v-if="false" />-->
      <!--      <SliderComponent v-if="false" />-->
      <div></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import ServiceCards from "../components/ServiceCards.vue";
import CurrentDeals from "./CurrentDeals.vue";
import { destinationStore } from "../store/destinationStore";
import CurrentDealSlide from "./CurrentDealSlide.vue";
import SliderComponent from "../components/SliderComponent.vue";
import BannerSlider from "../components/BannerSlider.vue";
</script>
