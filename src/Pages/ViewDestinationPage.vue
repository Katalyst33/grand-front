<script lang="ts" setup>
import { ref } from "vue";

import {
  getOneDestination,
  singleDestinationStore,
} from "../store/destinationStore";
import ViewDealHero from "../layout/ViewDestinationHero.vue";
import ViewDestinationHero from "../layout/ViewDestinationHero.vue";
import { appState } from "../store/store";

const isLoaded = ref(false);
getOneDestination().then(() => (isLoaded.value = true));

console.log(singleDestinationStore);

function addToWishlist(destination: any) {
  console.log(destination, "wish");
}
function addToCart(destination: any) {
  console.log(destination, "cart");
}
</script>

<template>
  <div class="py-10">
    <div v-if="singleDestinationStore.isLoadingDeal || isLoaded">
      <div class="grid md:grid-cols-3 gap-4">
        <div class="md:col-span-2 tileTab">
          <div>{{ singleDestinationStore.destination.title }}</div>
          <div>{{ singleDestinationStore.destination.description }}</div>
        </div>
        <div class="tileTab">
          <div>
            <p v-html="singleDestinationStore.destination.included"></p>
          </div>
          <h1 class="text-yellow-600 text-3xl">
            N {{ singleDestinationStore.destination.price }}
          </h1>

          <section>
            <div class="flex justify-between">
              <button
                @click="addToCart(singleDestinationStore.destination)"
                class="bg-red-400 py-2 px-2 rounded-md"
              >
                Add to Cart
              </button>

              <div v-if="appState.user.email" class="p-4 bg-green-500">
                <button
                  @click="addToWishlist(singleDestinationStore.destination)"
                  class="bg-red-400 py-2 px-2 rounded-md"
                >
                  Add to Wishlist
                </button>
              </div>
              <button
                v-else
                @click="addToWishlist(singleDestinationStore.destination)"
                class="bg-red-100 py-2 px-2 rounded-md"
                disabled
              >
                Add to Wishlist
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
