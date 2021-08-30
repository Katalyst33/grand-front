<script lang="ts" setup>
import { reactive, ref, watch } from "vue";
import { destinationStore, runSort } from "../store/destinationStore";
</script>

<template>
  {{ destinationStore.searchDestinationQuery }}
  <div>
    search Br
    <input v-model="destinationStore.searchDestinationQuery" type="text" />

    <div class="flex">
      <div class="space-x-4">
        <template v-for="(f, key) in { price: 'Price', createdAt: 'date' }">
          <button
            @click="runSort(key)"
            :class="{
              'bg-yellow-500': destinationStore.sortDestination.field === key,
            }"
            class="rounded p-1"
          >
            {{ f }}

            <i
              v-if="
                destinationStore.sortDestination.field === key &&
                destinationStore.sortDestination.direction
              "
              @click="runSort('createdAt')"
              class="fas fa-chevron-down cursor-pointer"
            ></i>
            <i
              v-else-if="
                destinationStore.sortDestination.field === key &&
                !destinationStore.sortDestination.direction
              "
              @click="runSort('price,dsc')"
              class="fas fa-chevron-up cursor-pointer"
            ></i>
          </button>
        </template>
      </div>
    </div>
  </div>
</template>
