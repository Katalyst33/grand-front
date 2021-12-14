<script lang="ts" setup>
import { destinationStore } from "../store/destinationStore";
import SearchBarComponent from "../components/SearchBarComponent.vue";
import { DestinationType } from "../types";
import { useRoute, useRouter } from "vue-router";

import { appState } from "../store/store";
import { computed, watch } from "vue";
import Paginator from "../components/paginator/Paginator.vue";
import { formatPrice, formattedDate } from "../../export";
import { $axios } from "../http/http.Service";
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

function getAllDestinations(search?: string, sort?: any) {
  let params = {} as any;
  if (search) {
    params.search = search;
  } else {
    params.page = page.value;
  }
  if (sort) {
    params.sort = sort.direction ? sort.field + ",asc" : sort.field;
  }

  $axios
    .get("/client/destinations", {
      params,
    })
    .then((r: any) => {
      destinationStore.allDestinations = r.data.allDestinations;
      destinationStore.promotedDestinations = r.data.promotedDestinations;
      destinationStore.isLoadingDestinations = true;
    })
    .catch((e) => e);
}
let timeOut: NodeJS.Timeout | number = -1;

watch([page, destinationStore.searchDestinationQuery], () => {
  console.log(destinationStore.searchDestinationQuery.search);
  clearTimeout(timeOut as NodeJS.Timeout);
  timeOut = setTimeout(() => {
    getAllDestinations(destinationStore.searchDestinationQuery.search);
  }, 500);
});

getAllDestinations();
</script>

<template>
  <div>
    <div class="relative pb-20 pt-10 lg:pb-28">
      <div class="relative">
        <div class="text-center">
          <h2
            class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
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
              class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:max-w-none"
            >
              <div
                v-for="(destination, index) in destinationStore.allDestinations
                  .data"
                :key="index"
                class="group flex flex-col rounded-lg shadow-lg overflow-hidden relative px-4 md:px-0"
              >
                <div class="relative flex-shrink-0">
                  <router-link
                    :to="{
                      name: 'ViewDestinationPage',
                      params: { destinationId: destination.uuid },
                    }"
                  >
                    <!--                    <div
                      class="mt-10"
                      v-for="item in destination.thumbnails[0]"
                    >
                      <img
                        class="h-48 w-full object-cover rounded-md"
                        :src="item.path"
                      />
                    </div>-->
                    <img
                      v-if="destination.thumbnails[0]"
                      class="h-48 w-full object-cover group-hover:border-yellow-400 transition duration-500 ease-in-out border-yellow-50 border-2 rounded-lg"
                      :src="destination.thumbnails[0].path"
                      alt=""
                    />
                    <img
                      v-else
                      class="h-48 w-full object-cover group-hover:border-yellow-400 transition duration-500 ease-in-out border-yellow-50 border-2 rounded-lg"
                      src="/hero/destinations/no-destination.jpeg"
                      alt=""
                    />

                    <!--                    {{ destination.thumbnails }}-->
                  </router-link>
                </div>
                <div
                  class="bg-white border-yellow-400 border-t-4 rounded-full p-2 absolute top-40 left-4 mt-2 flex items-center space-x-2 text-xl font-semibold text-gray-900"
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
                    <p class="mt-3 text-yellow-600 font-medium text-2xl">
                      $ {{ formatPrice(destination.price) }}
                    </p>
                    <div
                      class="text-sm font-medium text-gray-400 pt-4 uppercase"
                    >
                      <span
                        class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#44BDEB] text-[#18424C]"
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
                      <p class="text-sm font-medium text-gray-900"></p>
                      <div
                        class="flex flex-col text-sm text-gray-500 text-left"
                      >
                        <div>
                          <i class="fal fa-calendar-alt"></i>

                          {{ formattedDate(destination.duration.start) }}
                        </div>
                        <br />

                        <div>
                          <i class="fal fa-calendar-alt"></i>
                          {{ formattedDate(destination.duration.end) }}
                        </div>

                        <!--                        @click="toViewDestination(destination)"-->
                      </div>
                      <template
                        v-if="['staff', 'admin'].includes(appState.user?.role)"
                      >
                        <router-link
                          :to="{
                            name: 'UpdateDestination',
                            params: { destinationId: destination.uuid },
                          }"
                          class="p-4 absolute bottom-0 text-red-600 right-0"
                        >
                          <i class="far fa-eye text-2xl"></i>
                        </router-link>
                      </template>
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
        v-model="page"
        class="pt-10"
        :data="destinationStore.allDestinations"
      />
    </section>
  </div>
</template>
