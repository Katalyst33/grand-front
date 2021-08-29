<template>
  <div class="mt-36">
    <div v-if="singleDealStore.isLoadingDeal">
      <div class="grid lg:grid-cols-3 space-x-2">
        <div class="lg:col-span-2 tileTab">
          <div>{{ singleDealStore.deal.title }}</div>
          <div>{{ singleDealStore.deal.description }}</div>
        </div>
        <div class="tileTab">
          <div>
            <p v-html="singleDealStore.deal.included"></p>
          </div>
          <h1 class="text-yellow-600 text-3xl">
            N {{ singleDealStore.deal.price }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { getOneDeal, singleDealStore } from "../store/dealStore";
import ViewDealHero from "../layout/ViewDealHero.vue";

export default defineComponent({
  name: "ViewDealPage",
  components: { ViewDealHero },
  setup() {
    const isLoaded = ref(false);
    getOneDeal().then(() => (isLoaded.value = true));

    console.log();
    return { isLoaded, singleDealStore };
  },
});
</script>

<style scoped></style>
