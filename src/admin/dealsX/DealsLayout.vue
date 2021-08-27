<template>
  <div>
    <div class="flex items-center justify-between">
      <ul class="flex space-x-4">
        <li>
          <router-link :to="{ name: 'AllDealsX' }">All Deals</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'AddDeal' }">Create Deals</router-link>
        </li>
      </ul>

      <template v-if="$route.name === 'UpdateDeal'">
        <ul class="flex space-x-4">
          <li>
            <router-link :to="{ name: 'DealStatus' }">Statistics</router-link>
          </li>
        </ul>
      </template>
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

<style scoped>
ul > li {
  @apply bg-yellow-500 rounded-full py-1 px-3;
}
</style>
