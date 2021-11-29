<template>
  <div class="h-screen">
    <DestinationLinks />
    <template v-if="singleDestinationStore.isLoadingDeal">
      <form>
        <div class="grid lg:grid-cols-3">
          <div class="lg:col-span-2 mb-4 lg:mx-4">
            <div class="tileTab space-y-4 py-4">
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

                <Editor
                  :api-key="tiny.apiKey"
                  :init="{
                    height: 500,
                    menubar: false,
                    plugins: tiny.editorPlugins,
                    toolbar: tiny.editorToolbar,
                  }"
                  v-model="singleDestinationStore.destination.description"
                />
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
                  <Editor
                    :api-key="tiny.apiKey"
                    :init="{
                      height: 400,
                      menubar: false,
                      plugins: tiny.editorPlugins,
                      toolbar: tiny.editorToolbar,
                    }"
                    v-model="singleDestinationStore.destination.included"
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

              <div class="pt-4">
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

                <div>
                  <Gallery />
                </div>

                <button
                  v-if="$route.name === 'AddDestination'"
                  @click.prevent="createDestination"
                  class="
                    bg-yellow-600
                    hover:bg-yellow-500
                    w-full
                    tracking-widest
                    p-2
                    rounded-md
                    mt-10
                  "
                >
                  Create Destination
                </button>
                <button
                  v-else
                  @click.prevent="updateDestination"
                  class="
                    bg-yellow-600
                    hover:bg-yellow-500
                    w-full
                    tracking-widest
                    p-2
                    rounded-md
                    mt-10
                  "
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { $axios } from "../../http/http.Service";
import { useRoute, useRouter } from "vue-router";
import { DestinationType } from "../../types";
import DealTimePickerComponent from "../components/DealTimePickerComponent.vue";
import PromotedToggleComponent from "../components/PromotedToggleComponent.vue";
import CountryLocatorSelector from "../components/CountryLocatorSelector.vue";
import Editor from "@tinymce/tinymce-vue";

import {
  clearStore,
  getOneDestinationX,
  singleDestinationStore,
} from "../../store/destinationStore";
import DestinationLinks from "./DestinationLinks.vue";
import Gallery from "./Gallery.vue";

const tiny = {
  apiKey: import.meta.env.VITE_TINY_KEY,
  editorPlugins: [
    "advlist autolink lists link image charmap print preview anchor",
    "searchreplace visualblocks code fullscreen",
    "insertdatetime media table paste code help wordcount",
  ],
  editorToolbar: [
    "undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help |code",
  ],
};

const destination = ref(<DestinationType>{});

const isLoaded = ref(false),
  route = useRoute(),
  router = useRouter();

destination.value = {} as DestinationType;

if (route.name === "UpdateDestination") {
  // getOneDestination();
  getOneDestinationX();
} else {
  clearStore();
  isLoaded.value = true;
  // window.location.href = "/add-destination/";
}

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
    .post(`manager/destination/`, singleDestinationStore.destination)
    .then((r) => console.log(r))
    .catch((e) => e);
}
</script>

<style scoped></style>
