<script lang="ts" setup>
import { computed, onBeforeMount, onMounted, ref } from "vue";

import ViewDestinationHero from "../layout/ViewDestinationHero.vue";
import { appState } from "../store/store";

import { useRoute } from "vue-router";
import { $axios } from "../http/http.Service";
import { DestinationType } from "../types";
import {
  destinationStore,
  getOneDestination,
  singleDestinationStore,
} from "../store/destinationStore";
import CompanyLogo from "../CompanyLogo.vue";
import ViewDestinationSlider from "../components/ViewDestinationSlider.vue";
import {
  formatPrice,
  formattedDate,
  localStore,
  removeDestination,
} from "../../export";

const route = useRoute();

const destinationId = computed(() => {
  return route.params.destinationId;
});

getOneDestination(destinationId.value);

function addToWishlist(destination: any) {
  console.log(destination, "wish");
}

function isInCart(destination: any) {
  return destinationStore.myDestinations.find(
    (item: any) => item.uuid === destination.uuid
  );

  // return destinationStore.myDestinations.includes(destination);
}

function addToCart(destination: any) {
  /*  const product = () => {
    for (const item of destinationStore.myDestinations) {
      if (item.uuid === destination.uuid) {
        return item;
      }
    }
  };*/

  console.log(destination.uuid, "wish");

  let isAdded = destinationStore.myDestinations.find(
    (item: any) => item.uuid === destination.uuid
  );

  if (isAdded) {
    return;
  } else {
    destinationStore.myDestinations.push(destination);
    localStore.setArray("myDestinations", destinationStore.myDestinations);
    console.log("no");
  }
}
</script>

<template>
  <div class="mb-10">
    <ViewDestinationHero
      style="left: calc(-50vw + 50%)"
      class="w-screen relative"
    />

    <!--    {{ singleDestinationStore.destination.images.length }}-->

    <div class="pt-10 h-screen" v-if="singleDestinationStore.isLoadingDeal">
      <div class="grid md:grid-cols-3 gap-4">
        <div class="md:col-span-2 tileTab">
          <div class="unreset">
            <div v-html="singleDestinationStore.destination.description"></div>
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
                  formattedDate(singleDestinationStore.destination.duration.end)
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
                @click.prevent="
                  removeDestination(singleDestinationStore.destination)
                "
                v-if="isInCart(singleDestinationStore.destination)"
              >
                Remove Destination
              </button>
              <button
                v-else
                @click="addToCart(singleDestinationStore.destination)"
                class="primary-button-regular w-full p-2 rounded-md"
              >
                Select Destination
              </button>
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
