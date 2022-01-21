<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";

import ViewDestinationHero from "../layout/ViewDestinationHero.vue";
import { appState } from "../store/store";

import { useRoute } from "vue-router";
import {
  destinationStore,
  getOneDestination,
  singleDestinationStore,
} from "../store/destinationStore";

import { formatPrice, formattedDate, localStore } from "../../export";
import SliderComponent from "../components/SliderComponent.vue";
import { $axios } from "../http/http.Service";

const route = useRoute();

const isAddedToCart = ref(false);

const destinationId = computed(() => {
  return route.params.destinationId;
});

getOneDestination(destinationId.value);

function isAdded() {
  $axios
    .post("profile/get-one-cart", {
      destinationId: destinationId.value,
      ownerId: appState.user.uuid,
    })
    .then((res: any) => {
      isAddedToCart.value = res.isAdded;
    })
    .catch((err) => err);
}

onMounted(isAdded);

function removeDestination() {
  $axios
    .post("/profile/remove-from-cart", {
      destinationId: destinationId.value,
      ownerId: appState.user.uuid,
    })
    .then((res) => {
      isAdded();

      return res.data;
    })
    .catch((err) => err);
}

function addToCart() {
  $axios
    .post("/profile/add-to-cart", {
      destinationId: destinationId.value,
      ownerId: appState.user.uuid,
    })
    .then((res) => {
      isAdded();
      return res.data;
    })
    .catch((err) => err);
}

const promotedDestinations = localStore.getArray("promotedDestinations");
</script>

<template>
  <div class="px-4">
    <ViewDestinationHero
      style="left: calc(-50vw + 50%)"
      class="w-screen relative"
    />

    <div class="pt-10">
      <div>
        <div
          v-if="singleDestinationStore.isLoadingDeal"
          class="grid md:grid-cols-3 gap-4"
        >
          <div class="md:col-span-2 tileTab">
            <div class="unreset p-4">
              <div
                v-html="singleDestinationStore.destination.description"
              ></div>
            </div>
          </div>
          <div class="tileTab">
            <template v-if="['staff', 'admin'].includes(appState.user?.role)">
              <router-link
                :to="{
                  name: 'UpdateDestination',
                  params: {
                    destinationId: singleDestinationStore.destination.uuid,
                  },
                }"
                class="bottom-0 text-red-600 right-0"
              >
                <i class="far fa-eye text-2xl"></i>
              </router-link>
            </template>
            <div>
              <div class="flex flex-col gap-y-2">
                <h3 class="text-yellow-600 font-medium">Duration:</h3>
                <div>
                  <i class="fal fa-calendar-alt"></i>
                  <span class="font-medium px-1">Start:</span>
                  {{
                    formattedDate(
                      singleDestinationStore.destination.duration.start
                    )
                  }}
                </div>

                <div>
                  <i class="fal fa-calendar-alt"></i>
                  <span class="font-medium px-1">Ends:</span>
                  {{
                    formattedDate(
                      singleDestinationStore.destination.duration.end
                    )
                  }}
                </div>
              </div>
            </div>
            <div>
              <h3 class="text-yellow-600 font-medium pt-4">Included:</h3>

              <p v-html="singleDestinationStore.destination.included"></p>
            </div>
            <h1 class="text-yellow-600 font-medium text-3xl pt-4">
              N {{ formatPrice(singleDestinationStore.destination.price) }}
            </h1>

            <section>
              <div class="flex justify-center pt-6">
                <button
                  class="dark-button-regular w-full"
                  @click.prevent="removeDestination"
                  v-if="isAddedToCart"
                >
                  Remove Destination
                </button>
                <button
                  v-else
                  @click="addToCart"
                  class="primary-button-regular w-full p-2 rounded-md"
                >
                  Save Destination
                </button>
              </div>
            </section>
          </div>
        </div>
        <div v-else class="py-4 grid md:grid-cols-3 gap-4 h-80">
          <div class="md:col-span-2 bg-white rounded-md shadow-md">
            <div class="space-y-4 py-4 px-4">
              <div class="placeholder-img"></div>
              <div class="placeholder-img"></div>
              <div class="placeholder-img"></div>
            </div>
          </div>
          <div class="bg-white rounded-md shadow-md">
            <div class="space-y-4 py-4 px-4">
              <div class="placeholder-img"></div>
              <div class="placeholder-img"></div>
              <div class="placeholder-img"></div>
            </div>
          </div>
        </div>
      </div>

      <!--      promoted destination-->

      <div class="my-10">
        <h1 class="text-2xl py-2">Popular Destinations</h1>
        <SliderComponent :promoted-destinations="promotedDestinations" />
      </div>
      <!--      promoted destination-->
    </div>
  </div>
</template>

<style lang="scss" scoped>
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

@keyframes placeHolderShimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}

.placeholder-img {
  @apply rounded-full;
  animation-duration: 1.25s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: darkgray;
  background: linear-gradient(to right, #e0ded1 10%, #fefbeb 18%, #e0ded1 33%);
  background-size: 1000px 104px;

  padding: 0.5em 0.5em 0.5em;
}
</style>
