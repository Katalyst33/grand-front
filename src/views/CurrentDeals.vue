<template>
  <section v-if="false">
    <div class="glide">
      <div class="glide__track" data-glide-el="track">
        <ul style="font-size: 100px" class="glide__slides">
          <li class="glide__slide bg-red-500">0</li>
          <li class="glide__slide bg-red-500">1</li>
          <li class="glide__slide bg-red-500">2</li>
          <li class="glide__slide bg-red-500">3</li>
          <li class="glide__slide bg-red-500">4</li>
          <li class="glide__slide bg-red-500">5</li>
          <li class="glide__slide bg-red-500">6</li>
          <li class="glide__slide bg-red-500">7</li>
        </ul>
      </div>
      <div data-glide-el="controls">
        <button data-glide-dir="<">Start</button>
        <button data-glide-dir=">">End</button>
      </div>
    </div>
  </section>
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
import Glide from "@glidejs/glide";

import DealsTileComponent from "../Pages/DestinationTileComponent.vue";
import {
  destinationStore,
  getAllDestinations,
} from "../store/destinationStore";
import { onMounted } from "vue";

onMounted(() => {
  const selectedDiv = document.querySelector(".glide") as HTMLElement | null;

  new Glide(selectedDiv, {
    type: "carousel",
    startAt: 1,
    peek: 50,
    perView: 1,
    autoplay: 1000,
  }).mount();
  // console.log(selectedDiv);
});

getAllDestinations();
</script>

<style lang="scss" scoped>
@import "../assets/css/currentDealsCard.css";
</style>
