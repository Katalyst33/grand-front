<template>
  <div v-if="isLoaded">
    {{ appState }}
    <router-view></router-view>
  </div>
</template>

<script>
import { $axios } from "./http.Service";

import { setAppState, appState } from "./store/store";
import { ref } from "vue";

export default {
  name: "Main",

  setup() {
    const isLoaded = ref(false);
    setAppState().then(() => (isLoaded.value = true));

    return { isLoaded, appState };
  },
};
</script>
