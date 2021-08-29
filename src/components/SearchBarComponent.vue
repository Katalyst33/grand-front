<script lang="ts" setup>
import { reactive, ref, watch } from "vue";
import { $axios } from "../http.Service";
import { getAllDeals } from "../store/dealStore";

const sort = reactive({ field: "createdAt", direction: true });
const searchQuery = ref<string | undefined>(undefined);

function runSort(by: string) {
  if (sort.field === by) {
    sort.direction = !sort.direction;
  } else {
    sort.field = by;
  }
  getAllDeals(searchQuery.value, sort);
}

let timeOut = -1;

function searchDestinations(searchQuery: string) {
  getAllDeals(searchQuery);
}

watch(searchQuery, () => {
  clearTimeout(timeOut);
  timeOut = setTimeout(() => {
    searchDestinations(searchQuery.value!);
  }, 500);
});
</script>

<template>
  <div>
    search Br
    <input v-model="searchQuery" type="text" />

    <div class="flex">
      <div class="space-x-4">
        <template v-for="(f, key) in { price: 'Price', createdAt: 'date' }">
          <button
            @click="runSort(key)"
            :class="{ 'bg-yellow-500': sort.field === key }"
            class="rounded p-1"
          >
            {{ f }}

            <i
              v-if="sort.field === key && sort.direction"
              @click="runSort('createdAt')"
              class="fas fa-chevron-down cursor-pointer"
            ></i>
            <i
              v-else-if="sort.field === key && !sort.direction"
              @click="runSort('price,dsc')"
              class="fas fa-chevron-up cursor-pointer"
            ></i>
          </button>
        </template>
      </div>
    </div>
  </div>
</template>
