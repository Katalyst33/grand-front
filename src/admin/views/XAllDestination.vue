<template>
  <div class="h-full h-screen">
    <div>
      <DestinationLinks />
    </div>
    <section>
      <SearchBarComponent class="my-10" />
    </section>
    <div class="">
      <Paginator
        v-model="page"
        class="my-6"
        :data="destinationStore.allDestinations"
      />

      <div v-if="destinationStore.isLoaded" class="flex flex-col h-screen">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
          >
            <div
              class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
            >
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    ></th>
                    <th scope="col" class="relative px-6 py-3">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr
                    v-for="(destination, index) in destinationStore
                      .allDestinations.data"
                    :key="index"
                  >
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                          <img
                            class="h-10 w-10 rounded-full"
                            :src="`/country_flags/${destination.country.code.toLowerCase()}.svg`"
                            alt=""
                          />
                        </div>
                        <div class="ml-4">
                          <router-link
                            :to="{
                              name: 'UpdateDestination',
                              params: { destinationId: destination.uuid },
                            }"
                            class="text-sm font-medium text-yellow-700"
                          >
                            {{ destination.country.name }}
                          </router-link>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">
                        <router-link
                          :to="{
                            name: 'UpdateDestination',
                            params: { destinationId: destination.uuid },
                          }"
                          class="text-sm font-medium text-yellow-700"
                        >
                          {{ destination.title }}

                          <i
                            v-if="destination.promoted"
                            class="fas fa-star-shooting text-yellow-300"
                          ></i>
                        </router-link>
                      </div>
                      <div class="text-sm text-gray-500">
                        <div class="flex space-x-2 items-center gap-x-2">
                          {{ formattedDate(destination.duration.start) }}

                          <i class="fad fa-arrows-h text-teal-600"></i>
                          {{ formattedDate(destination.duration.end) }}
                        </div>
                        <h4 class="text-lg text-teal-600 font-medium">
                          ₦{{ formatPrice(destination.price) }}
                        </h4>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span
                        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                      >
                        Active
                      </span>
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      {{ destination.role }}
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                    >
                      <a href="#" class="text-indigo-600 hover:text-indigo-900"
                        >Edit</a
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div v-else>
        <LoadingComponent />
      </div>
    </div>

    <Paginator v-model="page" class="mt-20" :data="allDestinations" />
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from "vue";
import { $axios } from "../../http/http.Service";

import DestinationLinks from "./DestinationLinks.vue";
import Paginator from "../../components/paginator/Paginator.vue";
import { useRoute } from "vue-router";
import { formatPrice, formattedDate } from "../../../export";
import LoadingComponent from "./LoadingComponent.vue";
import SearchBarComponent from "../../components/SearchBarComponent.vue";
import { destinationStore } from "../../store/destinationStore";
import { getAllDestinations } from "../../http/client.Service";

const allDestinations = ref({
  data: [],
}) as any;

const route = useRoute();
const page = computed(() => {
  return route.query.page;
});
const isLoaded = ref(false);
function trimString(stringText: string) {
  return stringText.substring(0, 50);
}

const searchQuery = ref("");

let timeOut: NodeJS.Timeout | number = -1;

watch(
  [destinationStore.searchDestinationQuery, page],

  () => {
    destinationStore.pagination.page = page.value;
    destinationStore.isLoaded = false;

    clearTimeout(timeOut as NodeJS.Timeout);
    timeOut = setTimeout(() => {
      destinationStore.isLoaded = true;

      getAllDestinations(
        destinationStore.searchDestinationQuery.search,
        destinationStore.pagination.page
      );
    }, 500);
  },
  { immediate: true }
);
</script>
