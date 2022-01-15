<script lang="ts">
import { destinationStore } from "../store/destinationStore";
import SearchBarComponent from "../components/SearchBarComponent.vue";
import { DestinationType } from "../types";
import { useRoute, useRouter } from "vue-router";
import { appState } from "../store/store";
import { computed, defineComponent, reactive, watch } from "vue";
import Paginator from "../components/paginator/Paginator.vue";
import { formatPrice, formattedDate } from "../../export";
import LoadingComponent from "../admin/views/LoadingComponent.vue";
import { getAllDestinations, runSort } from "../http/client.Service";
import DestinationCard from "../components/DestinationCard.vue";

export default defineComponent({
  components: {
    DestinationCard,
    LoadingComponent,
    SearchBarComponent,
    Paginator,
  },
  setup() {
    const router = useRouter();
    const sort = reactive({ field: "createdAt", direction: true });

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

    return {
      destinationStore,
      runSort,
      toViewDestination,
      appState,
      formattedDate,
      formatPrice,
      page,
    };
  },
});
</script>

<template>
  <div class="">
    <div class="relative py-20 pt-10 lg:pb-28">
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
            <SearchBarComponent @run-sort="runSort" />
          </div>
          <!--          search query-->
        </div>
        <Paginator
          v-model="page"
          class="pt-10"
          :data="destinationStore.allDestinations"
        />
        <div v-if="destinationStore.isLoaded">
          <div>
            <div
              class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:max-w-none"
            >
              <div
                v-for="(destination, index) in destinationStore.allDestinations
                  .data"
                :key="index"
                class="group flex flex-col rounded-lg shadow-lg overflow-hidden relative px-4 md:px-0"
              >
                <DestinationCard
                  :app-state="appState"
                  :destination="destination"
                />
              </div>
            </div>
          </div>
        </div>
        <LoadingComponent v-else />
      </div>
    </div>
    <Paginator
      v-model="destinationStore.pagination.page"
      class="pt-10"
      :data="destinationStore.allDestinations"
    />
  </div>
</template>
