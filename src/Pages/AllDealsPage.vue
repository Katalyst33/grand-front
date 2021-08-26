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
        </div>
        <div
          class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:max-w-none"
        >
          <DealsTileComponent :deal-store="dealStore.allDeals.data" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { $axios } from "../http.Service";
import DealsTileComponent from "./DealsTileComponent.vue";
import { dealStore } from "../store/dealStore";
// import { randomInt } from "crypto";

export default defineComponent({
  name: "DealsPage",
  components: { DealsTileComponent },

  setup() {
    console.log(dealStore.allDeals);
    return { dealStore };
  },
});
</script>
