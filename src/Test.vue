<template>
  <h1 class="text-white font-bold block pl-2 big-font">
    {{ appState.data.companyName }}
  </h1>
</template>
<script lang="ts">
export default {
  name: "Test",
  props: {
    appState: {},
  },
};
</script>
