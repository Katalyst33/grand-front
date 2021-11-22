<template>
  <template v-if="singleDestinationStore.isLoadingDeal">
    <form>
      <h1 class="text-2xl font-regular">
        {{ singleDestinationStore.destination.title }}
      </h1>
      <div class="grid lg:grid-cols-3">
        <div class="lg:col-span-2 mb-4 lg:mx-4">
          <div class="tileTab">
            <div>
              <label class="form-label">Title:</label>
              <div class="mt-1">
                <input
                  v-model="singleDestinationStore.destination.title"
                  class="form-input"
                  type="text"
                />
              </div>
            </div>
            <div>
              <label class="form-label">Description:</label>
              <div class="mt-1">
                <textarea
                  v-model="singleDestinationStore.destination.description"
                  class="form-input"
                  :rows="7"
                ></textarea>
              </div>
            </div>
            <div>
              <label class="form-label">Activity:</label>
              <div class="mt-1">
                <input
                  v-model="singleDestinationStore.destination.activity"
                  class="form-input"
                  type="text"
                />
              </div>
            </div>
            <div>
              <label class="form-label">Included:</label>
              <div class="mt-1">
                <textarea
                  v-model="singleDestinationStore.destination.included"
                  class="form-input"
                  rows="7"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="tileTab">
            <CountryLocatorSelector
              :destination="singleDestinationStore.destination"
            />

            <div class="">
              <div>
                <DealTimePickerComponent
                  :destination="singleDestinationStore.destination"
                />
                <p class="text-sm">Click to edit date</p>
              </div>
              <div class="border-b py-4">
                <label class="form-label">Price:</label>
                <div class="mt-1">
                  <input
                    v-model="singleDestinationStore.destination.price"
                    class="form-input"
                    type="number"
                  />
                </div>
              </div>

              <div class="border-b">
                <label class="form-label">Promoted:</label>
                <PromotedToggleComponent
                  :destination="singleDestinationStore.destination"
                />
              </div>

              <button
                @click.prevent="updateDestination"
                class="bg-red-500 p-2 rounded-md mt-10"
              >
                Update
              </button>
              <button
                @click.prevent="createDestination"
                class="bg-red-500 p-2 rounded-md mt-10"
              >
                Create Destination
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </template>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import { $axios } from "../../http/http.Service";
import { useRoute, useRouter } from "vue-router";
import { DestinationType } from "../../types";
import DealTimePickerComponent from "../components/DealTimePickerComponent.vue";
import PromotedToggleComponent from "../components/PromotedToggleComponent.vue";
import CountryLocatorSelector from "../components/CountryLocatorSelector.vue";
import {
  clearStore,
  getOneDestination,
  getOneDestinationX,
  localStore,
  singleDestinationStore,
} from "../../store/destinationStore";

const destination = ref(<DestinationType>{});

const isLoaded = ref(false),
  route = useRoute();

destination.value = {} as DestinationType;

onMounted(() => {
  if (route.name === "UpdateDestination") {
    // getOneDestination();
    getOneDestinationX();

    console.log(singleDestinationStore.destination, "xxx");
  } else {
    console.log("clear destination");
    clearStore();
    isLoaded.value = true;
    // window.location.href = "/add-destination/";
  }
});

if (route.name === "AddDestination") {
  clearStore();
}

const code = computed(() => route.params.destinationId);

function updateDestination() {
  $axios
    .patch(`manager/deals/${code.value}`, singleDestinationStore.destination)
    .then((r) => r)
    .catch((e) => e);
}

function createDestination() {
  $axios
    .post(`manager/deals/`, singleDestinationStore.destination)
    .then((r) => console.log(r))
    .catch((e) => e);
}
</script>

<style scoped></style>
