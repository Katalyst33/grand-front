<template>
  <div>
    <ViewDestinationSlider
      v-if="singleDestinationStore.destination.images.length"
    />

    <img
      v-else
      class="w-screen relative"
      src="/hero/destinations/no-destination.jpeg"
    />
  </div>
</template>

<script lang="ts" setup>
import ViewDestinationSlider from "../components/ViewDestinationSlider.vue";
import {
  destinationStore,
  singleDestinationStore,
} from "../store/destinationStore";
</script>
