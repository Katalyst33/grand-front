<template>
  <section class="py-2 lg:pl-4">
    <ul class="flex items-center justify-between space-x-4">
      <li v-if="route.name === 'AddDestination'">
        <router-link class="underline" :to="{ name: 'AllDestinationX' }"
          ><i class="far fa-arrow-left pr-2"></i>All Destination
        </router-link>
      </li>
      <li v-else>
        <button
          class="underline px-2 py-1 rounded"
          @click="toCreateDestination"
        >
          Create Destination
          <i class="far fa-arrow-right pr-2"></i>
        </button>
      </li>
    </ul>
  </section>
</template>
<script lang="ts" setup>
import { clearStore } from "../../store/destinationStore";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";

const route = useRoute(),
  router = useRouter();

function toCreateDestination() {
  clearStore();

  router.push({ name: "AddDestination" });
}
</script>
