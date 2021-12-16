<script lang="ts">
import { destinationStore } from "../store/destinationStore";

export default {
  emits: ["runSort"],

  setup(props: any) {
    return {
      destinationStore,
      props,
    };
  },
};
</script>

<template>
  <div>
    <div class="grid md:grid-cols-2 mt-10 space-y-4">
      <div>
        <div
          class="mt-1 border-b border-gray-300 focus-within:border-yellow-600"
        >
          <input
            v-model="destinationStore.searchDestinationQuery.search"
            type="text"
            class="block w-full border-0 border-b border-transparent bg-gray-50 focus:border-yellow-600 focus:ring-0 sm:text-sm"
            placeholder="Search for a Destination.."
          />
        </div>
      </div>
      <div>
        <div class="flex justify-center items-center space-x-4">
          <h3 class="font-medium">Sort By:</h3>
          <div class="flex">
            <div class="space-x-4">
              <template
                v-for="(f, key) in { price: 'Price', createdAt: 'date' }"
              >
                <button
                  @click="$emit('runSort', key)"
                  :class="{
                    'bg-yellow-500':
                      destinationStore.sortDestination.field === key,
                  }"
                  class="rounded p-1 capitalize font-medium"
                >
                  {{ f }}

                  <i
                    v-if="
                      destinationStore.sortDestination.field === key &&
                      destinationStore.sortDestination.direction
                    "
                    @click="$emit('runSort', 'createdAt')"
                    class="fas fa-chevron-down cursor-pointer"
                  ></i>
                  <i
                    v-else-if="
                      destinationStore.sortDestination.field === key &&
                      !destinationStore.sortDestination.direction
                    "
                    @click="$emit('runSort', 'price,dsc')"
                    class="fas fa-chevron-up cursor-pointer"
                  ></i>
                </button>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="
        destinationStore.searchDestinationQuery.search &&
        !destinationStore.allDestinations.data.length
      "
    >
      <h3 class="text-center pt-20 h-screen">Destination is not available</h3>
    </div>
  </div>
</template>

<style scoped>
input[type="text"] {
  background: transparent;
  border: none;
  border-bottom: 1px solid #000000;
}

.search-form {
  focus: in;
}
</style>
