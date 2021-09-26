<template>
  <div class="py-2">
    <div>
      <p class="form-label">Change Country:</p>
      <div
        class="cursor-pointer hover:bg-yellow-50"
        @click="isSearching = true"
      >
        <div v-if="!isSearching" class="flex items-center justify-between">
          <div
            class="flex items-center space-x-2 space-y-1 py-1 cursor-pointer"
          >
            <img
              :src="`/svg/${props.destination.country.code}.svg`"
              alt=""
              class="flex-shrink-0 h-6 w-6 rounded-name"
            />
            <h3>{{ props.destination.country.name }}</h3>
          </div>
          <div class="cursor-pointer hover:text-yellow-600">
            <i class="fal fa-globe-americas"></i>Search..
          </div>
        </div>
      </div>
    </div>
    <div v-if="isSearching">
      <input
        class="rounded-full w-full border-gray-300"
        v-model="searchQuery"
        type="text"
      />
      <div>
        <div v-for="(country, index) in computedCountry" :key="index">
          <div
            @click="selectCountry(country)"
            class="
              flex
              items-center
              space-x-2 space-y-1
              border-b
              py-1
              cursor-pointer
              hover:bg-gray-100
            "
          >
            <img
              :src="`/svg/${country.code}.svg`"
              alt=""
              class="flex-shrink-0 h-6 w-6 rounded-name"
            />
            <h3>{{ country.name }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from "vue";

import { allCountries } from "../../db/countryList";
import { CountryType } from "../../types";

const props = defineProps<{
  destination: {
    country: {
      code: string;
      name: string;
    };
  };
}>();

const searchQuery = ref("");

const isSearching = ref(false);

function selectCountry(country: CountryType) {
  props.destination.country.name = country.name;
  props.destination.country.code = country.code;
  searchQuery.value = "";
  isSearching.value = false;
}

const AllCountries = ref(allCountries);

const computedCountry = computed(() => {
  if (searchQuery.value) {
    return AllCountries.value.filter((item: { name: string; code: string }) => {
      return searchQuery.value
        .toLowerCase()
        .split("")
        .every((v) => {
          return (
            item.name.toLowerCase().includes(v) ||
            item.code.toLowerCase().includes(v)
          );
        });
    });
  } else {
    return AllCountries.value.sort((a, b) => {
      let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
  }
});
</script>
