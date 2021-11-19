<template>
  <div>
    <div class="container mx-auto px-2">
      <ServiceCards />

      <CurrentDeals />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ServiceCards from "../components/ServiceCards.vue";
import CurrentDeals from "./CurrentDeals.vue";
</script>
