<script lang="ts" setup>
import { reactive, ref } from "vue";
import DealsTileComponent from "./DealsTileComponent.vue";
import {
  destinationStore,
  getAllDestinations,
} from "../store/destinationStore";
import SearchBarComponent from "../components/SearchBarComponent.vue";
</script>

<template>
  <div>
    <div class="relative pb-20 pt-10 lg:pb-28">
      <div class="relative">
        <div class="text-center">
          <h2
            class="
              text-3xl
              tracking-tight
              font-extrabold
              text-gray-900
              sm:text-4xl
            "
          >
            Ongoing Deals
          </h2>
          <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Pick a Destination, let us take you there...
          </p>

          <!--          search query-->

          <div>
            <SearchBarComponent />
          </div>

          <!--          search query-->
        </div>
        <div
          class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:max-w-none"
        >
          <DealsTileComponent
            :destination-store="destinationStore.allDestinations.data"
          />
        </div>
      </div>
    </div>
  </div>
</template>
