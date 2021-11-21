<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import $Router from "../../router";
import {
  clearStore,
  singleDestinationStore,
} from "../../store/destinationStore";

import { ref } from "vue";
import { useRouter } from "vue-router";

const isLoaded = ref(false);
</script>

<style scoped>
ul > li {
  @apply bg-yellow-500 rounded-full py-1 px-3;
}
</style>
