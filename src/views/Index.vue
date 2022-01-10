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
import { getPromotedDestination } from "../http/client.Service";
import { onMounted } from "vue";

const { promotedDestinations, isLoaded, fetch } = getPromotedDestination();
onMounted(fetch);
</script>
