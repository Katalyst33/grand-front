<template>
  <template v-if="singleDealStore.isLoadingDeal">
    <div class="bg-red-500 p-4 text-white font-medium text-3xl">
      {{ singleDealStore.deal.title }}
    </div>
  </template>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { getOneDeal, singleDealStore } from "../store/dealStore";

export default defineComponent({
  name: "ViewDealHero",

  setup() {
    const isLoaded = ref(false);
    getOneDeal().then(() => (isLoaded.value = true));

    return { singleDealStore, isLoaded };
  },
});
</script>

<style scoped></style>
