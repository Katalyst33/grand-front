<script lang="ts" setup>
import DealsTileComponent from "./DestinationTileComponent.vue";

import {
  destinationStore,
  getAllDestinations,
  localStore,
} from "../store/destinationStore";
import SearchBarComponent from "../components/SearchBarComponent.vue";
import { useHead } from "@vueuse/head";
import { DestinationType } from "../types";
import { useRoute, useRouter } from "vue-router";
import { formatPrice } from "../lib/util";
import HumanDateTimeComponent from "../admin/components/HumanDateTimeComponent.vue";
import { appState } from "../store/store";
import { computed, ref, watch } from "vue";
import Paginator from "../components/paginator/Paginator.vue";
const router = useRouter();

const route = useRoute();

function toViewDestination(destination: DestinationType) {
  router.push({
    name: "UpdateDestination",
    params: { destinationId: destination.uuid },
  });
}

const page = computed(() => {
  return route.query.page;
});

watch(page, () => {
  getAllDestinations("", "");
  destinationStore.paginationQuery = page.value;
  console.log("haba", page.value);
});
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
            All Destinations
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
        <div v-if="destinationStore.isLoadingDestinations">
          <div v-if="true">
            <div
              class="
                mt-12
                grid
                gap-5
                md:grid-cols-2
                lg:grid-cols-3 lg:max-w-none
              "
            >
              <div
                v-for="(destination, index) in destinationStore.allDestinations
                  .data"
                :key="index"
                class="
                  group
                  flex flex-col
                  rounded-lg
                  shadow-lg
                  overflow-hidden
                  relative
                "
              >
                <div class="relative flex-shrink-0">
                  <button
                    v-if="appState.user?.role === 'staff'"
                    @click="toViewDestination(destination)"
                    class="bg-red-500 p-4 absolute top-0 opacity-50"
                  >
                    <i class="far fa-eye"></i>
                  </button>

                  <router-link
                    :to="{
                      name: 'ViewDestinationPage',
                      params: { destinationId: destination.uuid },
                    }"
                  >
                    <img
                      class="
                        h-48
                        w-full
                        object-cover
                        group-hover:border-yellow-400
                        transition
                        duration-500
                        ease-in-out
                        border-yellow-50 border-2
                        rounded-lg
                      "
                      :src="destination.image"
                      alt=""
                    />
                  </router-link>
                </div>
                <div
                  class="
                    bg-white
                    border-yellow-400 border-t-4
                    rounded-full
                    p-2
                    absolute
                    top-40
                    left-4
                    mt-2
                    flex
                    items-center
                    space-x-2
                    text-xl
                    font-semibold
                    text-gray-900
                  "
                >
                  <img
                    class="flex-shrink-0 h-6 w-6 rounded-name"
                    :src="`/country_flags/${destination.country.code.toLowerCase()}.svg`"
                    alt="flag"
                  />

                  <p>{{ destination.country.name }}</p>
                </div>
                <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div class="flex-1">
                    <a class="block mt-2">
                      <p class="mt-3 text-base text-gray-700">
                        {{ destination.title }}, {{ destination.title }}...
                      </p>
                    </a>
                    <p class="mt-3 text-base text-yellow-600 text-2xl">
                      $ {{ formatPrice(destination.price) }}
                    </p>
                    <div
                      class="text-sm font-medium text-gray-400 pt-4 uppercase"
                    >
                      <span
                        class="
                          inline-flex
                          items-center
                          px-2
                          py-0.5
                          rounded-full
                          text-xs
                          font-medium
                          bg-[#44BDEB]
                          text-[#18424C]
                        "
                      >
                        <svg
                          class="mr-1.5 h-2 w-2 text-white"
                          fill="currentColor"
                          viewBox="0 0 8 8"
                        >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        {{ destination.activity }}
                      </span>
                    </div>
                  </div>
                  <div class="mt-6 flex items-center">
                    <div class="flex-shrink-0"></div>
                    <div class="flex space-x-2">
                      <p class="text-sm font-medium text-gray-900">
                        <i class="fal fa-clock"></i>
                      </p>
                      <div class="flex space-x-1 text-sm text-gray-500">
                        <HumanDateTimeComponent
                          :raw-time="destination.duration.start"
                        />
                        -
                        <HumanDateTimeComponent
                          :raw-time="destination.duration.end"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section>
      <Paginator
        v-model="destinationStore.paginationQuery"
        class="pt-10"
        :data="destinationStore.allDestinations"
      />

      {{ page }}
    </section>
  </div>
</template>

<style lang="scss">
.Paginator > .pagination {
  @apply block w-full mt-2 px-3;

  .pagination-previous,
  .pagination-next {
    @apply px-3 py-1 text-sm border border-gray-500 hover:bg-gray-600 hover:text-gray-50 rounded text-gray-500 cursor-pointer;
  }

  .pagination-list {
    @apply block list-none;
  }

  .pagination-link {
    @apply px-3 py-1.5 text-sm border border-gray-500 hover:bg-gray-500 hover:text-gray-50 rounded text-gray-500 cursor-pointer;
    @apply inline-block;
  }

  .pagination-link.is-current {
    @apply bg-gray-800 text-white font-bold border-white;
  }

  .pagination-ellipsis {
    @apply text-gray-500;
  }
}
</style>
