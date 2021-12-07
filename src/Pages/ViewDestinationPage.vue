<script lang="ts" setup>
import { computed, onBeforeMount, onMounted, ref } from "vue";

import ViewDestinationHero from "../layout/ViewDestinationHero.vue";
import { appState } from "../store/store";
import { formatPrice } from "../lib/util";
import { useRoute } from "vue-router";
import { $axios } from "../http/http.Service";
import { DestinationType } from "../types";
import {
  getOneDestination,
  singleDestinationStore,
} from "../store/destinationStore";
import CompanyLogo from "../CompanyLogo.vue";
import ViewDestinationSlider from "../components/ViewDestinationSlider.vue";

const route = useRoute();

const destinationId = computed(() => {
  return route.params.destinationId;
});

getOneDestination(destinationId.value);

function addToWishlist(destination: any) {
  console.log(destination, "wish");
}
function addToCart(destination: any) {
  console.log(destination, "cart");
}
</script>

<template>
  <div class="py-10">
    <div v-if="singleDestinationStore.isLoadingDeal">
      <div class="grid md:grid-cols-3 gap-4">
        <div class="md:col-span-2 tileTab">
          <div class="unreset">
            <div v-html="singleDestinationStore.destination.description"></div>
          </div>
        </div>
        <div class="tileTab">
          <div>
            <p v-html="singleDestinationStore.destination.included"></p>
          </div>
          <h1 class="text-yellow-600 font-medium text-3xl">
            N {{ formatPrice(singleDestinationStore.destination.price) }}
          </h1>

          <section>
            <div class="flex justify-between">
              <button
                @click="addToCart(singleDestinationStore)"
                class="bg-yellow-500 p-2 rounded-md"
              >
                Add to Cart
              </button>

              <template>
                <div v-if="appState?.user?.email" class="p-4">
                  <button
                    @click="addToWishlist(singleDestinationStore)"
                    class="bg-red-400 py-2 px-2 rounded-md"
                  >
                    Add to Wishlist
                  </button>
                </div>
                <button
                  v-else
                  @click="addToWishlist(singleDestinationStore)"
                  class="bg-red-100 py-2 px-2 rounded-md"
                  disabled
                >
                  Add to Wishlist
                </button>
              </template>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#hero {
  width: 100vw;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.unreset {
  h1 {
    font-size: 50px !important;
    @apply font-bold my-4;
  }

  h2 {
    @apply text-2xl font-bold my-3;
  }

  h3 {
    @apply text-lg font-bold my-4;
  }

  h4 {
    @apply text-base font-bold my-5;
  }

  h5 {
    @apply text-sm font-bold my-6;
  }

  h6 {
    @apply text-xs font-bold my-10;
  }
}
</style>
