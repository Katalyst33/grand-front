<template>
  <div>
    <ViewDestinationSlider />
  </div>
</template>

<script lang="ts" setup>
import ViewDestinationSlider from "../components/ViewDestinationSlider.vue";
import {
  destinationStore,
  singleDestinationStore,
} from "../store/destinationStore";
</script>
