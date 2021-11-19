<template>
  <section>
    <h2 class="title-2 py-4 big-font">Trending Destinations</h2>
  </section>
  <DealsTileComponent />

  <div class="text-centre flex justify-center pt-4">
    <router-link :to="{ name: 'Destinations' }">
      <span class="text-lg text-center mt-10 pt-4">More Deals</span>
      <i class="far fa-arrow-right pl-2"></i>
    </router-link>
  </div>
</template>
<script lang="ts" setup>
import Glide from "@glidejs/glide";

import DealsTileComponent from "../Pages/DestinationTileComponent.vue";
import { destinationStore } from "../store/destinationStore";
import { getAllDestinations2 } from "../http/http.DataRequest";

getAllDestinations2();
</script>

<style lang="scss" scoped>
@import "../assets/css/currentDealsCard.css";
</style>
