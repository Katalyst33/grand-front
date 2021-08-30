<template>
  <div>Update the admin</div>
  {{ destination }}

  <template v-if="isLoaded">
    <form>
      <h1 class="text-2xl font-regular">{{ destination.title }}</h1>
      <div class="grid grid-cols-3 space-x-4">
        <div class="col-span-2">
          <div class="tileTab">
            <div>
              <label class="form-label">Title:</label>
              <div class="mt-1">
                <input
                  v-model="destination.title"
                  class="form-input"
                  type="text"
                />
              </div>
            </div>
            <div>
              <label class="form-label">Description:</label>
              <div class="mt-1">
                <textarea
                  v-model="destination.description"
                  class="form-input"
                  :rows="7"
                ></textarea>
              </div>
            </div>
            <div>
              <label class="form-label">Activity:</label>
              <div class="mt-1">
                <input
                  v-model="destination.activity"
                  class="form-input"
                  type="text"
                />
              </div>
            </div>
            <div>
              <label class="form-label">Included:</label>
              <div class="mt-1">
                <textarea
                  v-model="destination.included"
                  class="form-input"
                  rows="7"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="tileTab">
            <CountryLocatorSelector :destination="destination" />

            <div class="">
              <DealTimePickerComponent
                class="border-t border-b py-2"
                :destination="destination"
              />

              <div class="border-b py-4">
                <label class="form-label">Price:</label>
                <div class="mt-1">
                  <input
                    v-model="destination.price"
                    class="form-input"
                    type="number"
                  />
                </div>
              </div>

              <div class="border-b">
                <label class="form-label">Promoted:</label>
                <PromotedToggleComponent :destination="destination" />
              </div>
              <button
                @click.prevent="UpdateDeal"
                class="bg-red-500 p-2 rounded-md mt-10"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </template>

  <div></div>
</template>

<script lang="ts" setup>
import { computed, defineComponent, ref } from "vue";
import { $axios } from "../../http.Service";
import { useRoute } from "vue-router";
import { DestinationType } from "../../types";
import DealTimePickerComponent from "../components/DealTimePickerComponent.vue";
import PromotedToggleComponent from "../components/PromotedToggleComponent.vue";
import CountryLocatorSelector from "./CountryLocatorSelector.vue";

const destination = ref(<DestinationType>{});

const isLoaded = ref(false),
  route = useRoute();

const code = computed(() => route.params.dealId);
function getOneDestination() {
  $axios
    .get(`manager/deals/${code.value}`)
    .then((r: any) => {
      destination.value = r;
      isLoaded.value = true;
    })
    .catch((e) => e);
}

if (route.name === "UpdateDeal") {
  getOneDestination();
}

function UpdateDeal() {
  $axios
    .patch(`manager/deals/${code.value}`, destination.value)
    .then((r) => console.log(r))
    .catch((e) => e);
}
</script>

<style scoped></style>
