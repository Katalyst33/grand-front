<script setup lang="ts">
import HumanDateTimeComponent from "../admin/components/HumanDateTimeComponent.vue";
import { DestinationType } from "../types";
import { destinationStore } from "../store/destinationStore";
import { useRoute, useRouter } from "vue-router";
import { appState } from "../store/store";

import SliderComponent from "../components/SliderComponent.vue";
import { formatPrice } from "../../export";

const router = useRouter();
const route = useRoute();

function toViewDestination(destination: DestinationType) {
  router.push({
    name: "UpdateDestination",
    params: { destinationId: destination.uuid },
  });
}
</script>

<template>
  <div>
    <div v-if="route.name === 'Home'">
      <SliderComponent />
    </div>
  </div>
</template>
