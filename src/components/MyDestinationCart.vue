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
</script>

<template>
  <div @click="appState.showCart = true" class="relative">
    <i class="far fa-map-marked-alt text-2xl text-gray-800"></i>
    <p class="absolute bottom-4 -top-2 right-0 left-7">
      <span
        class="bg-yellow-200 h-4 w-4 text-xs font-bold rounded-full circle-with-text"
      >
        {{ destinationStore.myDestinations.length }}</span
      >
    </p>
  </div>
  <TransitionRoot as="template" :show="appState.showCart">
    <Dialog
      as="div"
      class="fixed inset-0 overflow-hidden z-40"
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
                class="h-full flex flex-col py-6 bg-blue-500 shadow-xl overflow-y-scroll"
              >
                <div class="px-4 sm:px-6">
                  <div class="flex items-start justify-between">
                    <DialogTitle class="text-lg font-medium text-gray-900">
                      Panel title
                    </DialogTitle>
                    <div class="ml-3 h-7 flex items-center">
                      <button
                        type="button"
                        class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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

                  <div
                    v-for="(item, index) in destinationStore.myDestinations"
                    :key="index"
                  >
                    <div class="flex gap-x-2 my-4">
                      <img :src="item.image" class="rounded-md h-20" />

                      <div class="">
                        <span class="block">{{ item.title }}</span>
                        <span class="block">{{ item.country.name }}</span>
                        <span class="block">{{ item.country.code }}</span>
                        <span class="block">{{ item.price }}</span>
                      </div>
                      <h4>X</h4>
                    </div>
                  </div>
                  <div class="absolute inset-0 px-4 sm:px-6">
                    <div
                      class="h-full border-2 border-dashed border-gray-200"
                      aria-hidden="true"
                    />
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
