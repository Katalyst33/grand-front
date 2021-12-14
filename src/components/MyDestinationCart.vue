<script lang="ts" setup>
import { appState } from "../store/store";
import { ref } from "vue";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XIcon } from "@heroicons/vue/outline";
import { destinationStore } from "../store/destinationStore";
import {
  formatPrice,
  localStore,
  removeDestination,
  truncateString,
} from "../../export";
</script>

<template>
  <div>
    <button @click.prevent="appState.showCart = true" class="relative">
      <i class="far fa-map-marked-alt text-2xl text-gray-800"></i>
      <span class="absolute bottom-4 -top-2 right-0 left-7">
        <span
          class="bg-yellow-400 h-4 w-4 text-xs font-bold rounded-full circle-with-text"
        >
          {{ destinationStore.myDestinations.length }}</span
        >
      </span>
    </button>
    <TransitionRoot as="template" :show="appState.showCart">
      <Dialog
        as="div"
        class="fixed inset-0 overflow-hidden z-30"
        @close="appState.showCart = false"
      >
        <div class="absolute inset-0 overflow-hidden">
          <DialogOverlay class="absolute inset-0" />

          <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <div class="w-screen max-w-md">
                <div
                  class="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll"
                >
                  <div class="px-4 sm:px-6">
                    <div class="flex items-start justify-between">
                      <DialogTitle
                        class="text-lg font-medium text-gray-900 big-john-font"
                      >
                        My Destinations
                      </DialogTitle>
                      <div class="ml-3 h-7 flex items-center">
                        <button
                          type="button"
                          class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                          @click="appState.showCart = false"
                        >
                          <span class="sr-only">Close panel</span>
                          <XIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="mt-6 relative flex-1 px-4 sm:px-6">
                    <!-- Replace with your content -->

                    <div class="flex flex-col justify-between h-full">
                      <div>
                        <div
                          v-for="(
                            item, index
                          ) in destinationStore.myDestinations"
                          :key="index"
                        >
                          <div class="flex gap-x-2 my-8 items-center">
                            <img :src="item.image" class="rounded-sm h-16" />

                            <!--                            <img
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
                            />-->

                            <div class="">
                              <router-link
                                :to="{
                                  name: 'ViewDestinationPage',
                                  params: { destinationId: item.uuid },
                                }"
                              >
                                <span class="block underline">{{
                                  truncateString(item.title, 30)
                                }}</span>
                              </router-link>

                              <div class="flex items-center">
                                <img
                                  class="flex-shrink-0 h-4 w-4"
                                  :src="`/country_flags/${item.country.code.toLowerCase()}.svg`"
                                  alt="flag"
                                />
                                <p class="block pl-2">
                                  {{ item.country.name }}
                                </p>
                              </div>
                              <div
                                class="flex justify-between items-center w-56"
                              >
                                <p class="block">
                                  N {{ formatPrice(item.price) }}
                                </p>
                                <button
                                  class="underline text-red-500 text-sm"
                                  @click.prevent="removeDestination(item)"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="border"></div>
                        </div>
                      </div>

                      <div>
                        <p class="text-center">Login to Save Destinations</p>
                      </div>
                    </div>

                    <!-- /End replace -->
                  </div>
                </div>
              </div>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<style scoped>
.circle-with-text {
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  text-align: center;
  display: flex;
}
</style>
