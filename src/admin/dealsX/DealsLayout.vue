<template>
  <div>
    <div class="flex space-x-4">
      <p>
        <router-link :to="{ name: 'AllDealsX' }">All Deals layout</router-link>
      </p>
      <p>
        <router-link :to="{ name: 'AddDeal' }">Create Deals</router-link>
      </p>

      <p>View Deal</p>
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
