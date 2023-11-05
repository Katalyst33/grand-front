<template>
  <div class="">
    <div class="container mx-auto px-2">
      <BannerSlider
        :is-loaded="isLoaded"
        :promoted-destinations="promotedDestinations"
      />

      <ServiceCards ref="myService" />

      <CurrentDealSlide
        v-if="false"
        :is-loaded="isLoaded"
        :promoted-destinations="promotedDestinations"
      />

      <SliderComponent
        v-if="isLoaded"
        :promoted-destinations="promotedDestinations"
      />
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

const { promotedDestinations, isLoaded, fetch } = getPromotedDestination();
onMounted(fetch);
</script>
