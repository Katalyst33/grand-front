<script setup lang="ts">

import {onBeforeMount, ref} from "vue";
import jsb from "../lib/jsb";




const tripTypes = {"one-way": "One-way", "round-trip": "Round trip"}
type tripTypes = keyof typeof tripTypes;

const tripType = ref<tripTypes>("one-way");
const cities = ref<Record<any, any>>([]);

async function getCities() {
  cities.value = await jsb.getOwnContent("grand-eagle/airports.json", [
    {apply: "mapPick", args: ["iata", "name", "iso", "type"]}], {
    // jsonbank will cache this response for 1 month if you set it to "max"
    cache: "max"
  })
}

onBeforeMount(getCities)


</script>
<template>
  <section class="my-20">

    <div class="max-w-5xl mx-auto">
      <div class=" bg-white  p-3 border rounded-md mb-5 shadow-lg">
        <h4 class="text-xl font-bold">Flight Booking</h4>

        <ul class="tabs">
          <template v-for="(val, key) of tripTypes">
            <li :class="{
             active: tripType === key as tripTypes
           }">
              <button @click="() => {
              tripType = key as tripTypes
           }">{{ val }}
              </button>
            </li>
          </template>
        </ul>

        <form @submit="false">
        </form>
      </div>

      <debug :data="{
        tripType, cities
     }" class="mt-10" use-parent-name></debug>
    </div>


    <DebugDock></DebugDock>
  </section>
</template>

<style lang="scss">
.tabs {
  @apply flex space-x-3 my-2;

  li {
    &.active, &:hover {
      @apply border-b-2  border-blue-800;
    }

    button {
      @apply px-2 py-1;
    }
  }
}
</style>