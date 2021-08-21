<template>
  <div>
    <div class="flex space-x-4">
      <p>Deals layout</p>
      <p>Create Deals</p>
      <p>View Deals</p>
    </div>

    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ComponentName",

  setup() {
    return {};
  },
});
</script>

<style scoped></style>
