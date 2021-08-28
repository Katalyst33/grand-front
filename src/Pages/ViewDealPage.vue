<template>
  <div>
    <div v-if="singleDealStore.isLoadingDeal">
      <div class="pb-24 border border-1 border-yellow-500 rounded">
        <div>{{ singleDealStore.deal.expiresIn }}</div>
        <div>{{ singleDealStore.deal.country }}</div>
      </div>
      <div class="grid grid-cols-3 space-x-4 pt-10">
        <div class="col-span-2 border border-1 border-yellow-500 rounded">
          <div>{{ singleDealStore.deal.title }}</div>
          <div>{{ singleDealStore.deal.description }}</div>
        </div>
        <div class="border border-1 border-yellow-500 rounded">
          <div>
            <p v-html="singleDealStore.deal.included"></p>
          </div>
          <div>{{ singleDealStore.deal.price }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { getOneDeal, singleDealStore } from "../store/dealStore";

export default defineComponent({
  name: "ViewDealPage",

  setup() {
    const isLoaded = ref(false);
    getOneDeal().then(() => (isLoaded.value = true));

    console.log();
    return { isLoaded, singleDealStore };
  },
});
</script>

<style scoped></style>
