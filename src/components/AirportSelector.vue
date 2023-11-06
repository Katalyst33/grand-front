<script setup lang="ts">
import { computed, onBeforeMount, ref } from "vue";
import { Airport, fetchAirports } from "../lib/jsb";
import { countryListKeyToName } from "../db/countryList";

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const airports = ref<Airport[]>([]);
const searchQuery = ref(props.modelValue);

async function setAirports() {
  airports.value = await fetchAirports();
}

onBeforeMount(setAirports);

/**
 * Computed Cities
 * - Handle search results
 * - limit to 5 results
 */
const computedAirports = computed(() => {
  const search = searchQuery.value.toLowerCase().trim();
  if (!search && search.length < 3) return [];

  return airports.value
    .filter((city: any) => {
      const country = countryListKeyToName[city.iso];
      // - check by iata code first,
      // - then by name
      // - if country is set then check by country
      return (
        city.iata.toLowerCase().includes(search) ||
        city.name.toLowerCase().includes(search) ||
        (country && country.toLowerCase().includes(search))
      );
    })
    .slice(0, 5);
});

function selectAirport(airport: Airport) {
  searchQuery.value = `${airport.name}, (${airport.iata})`;
  emit("update:modelValue", airport.iata);
}
</script>
<template>
  <div class="relative search-select">
    <input type="search" placeholder="City or Airport" v-model="searchQuery" />
    <div class="search-results" v-if="computedAirports.length">
      <template v-for="c of computedAirports">
        <button
          type="button"
          class="search-result"
          :class="{
            active: c.iata === props.modelValue,
          }"
          @click="() => selectAirport(c)"
        >
          <span class="search-result__name"
            >{{ c.name }} <br />
            <span class="font-medium">{{
              countryListKeyToName[c.iso]
            }}</span></span
          >
          <span class="search-result__code">{{ c.iata }}</span>
        </button>
      </template>
    </div>
  </div>

  <debug
    :data="{
      searchQuery,
      computedAirports,
    }"
    use-parent-name
  ></debug>
</template>

<style scoped lang="scss">
.search-results {
  @apply hidden absolute max-w-xs border border-gray-400 mt-1 rounded shadow w-full bg-white;

  button.search-result {
    @apply flex justify-between items-center py-2 px-2 w-full text-sm text-left;

    &:hover {
      @apply bg-gray-200;
    }

    &.active {
      @apply bg-blue-600 text-white;
    }
  }
}

.search-select:focus-within .search-results {
  @apply block;
}
</style>
