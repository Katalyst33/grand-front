<template>
  <div v-if="isLoaded">
    <h1>Deals page !!!</h1>

    <div class="grid md:grid-cols-2 lg:rid-cols-3 space-x-4 space-y-4">
      <div v-for="item in allDeals.data">
        <div class="bg-white">
          <code>{{ item }}</code>
          <br />
          <button class="bg-red-500 rounded-md p-2 text-white">
            <router-link
              :to="{ name: 'ViewDealPage', params: { dealId: item.uuid } }"
              >View</router-link
            >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { $axios } from "../http.Service";

export default defineComponent({
  name: "DealsPage",



  setup() {
    const isLoaded = ref(false),
      allDeals = ref([]);

    function getAllDeals() {
      $axios
        .get("client/deals")
        .then((r) => {
          isLoaded.value = true;
          allDeals.value = r.data;
        })
        .catch((e) => e);
    }
    getAllDeals();

    return { isLoaded, allDeals };
  },
});
</script>

<style scoped></style>
