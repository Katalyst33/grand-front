<template>
  <main>
    <ViewDestinationSlider />
  </main>
</template>

<script lang="ts" setup>
import { singleDestinationStore } from "../store/destinationStore";
import TestProps from "../components/TestProps.vue";
import { ref } from "vue";
import BannerSlider from "../components/BannerSlider.vue";
import ViewDestinationSlider from "../components/ViewDestinationSlider.vue";
</script>

<style scoped></style>
