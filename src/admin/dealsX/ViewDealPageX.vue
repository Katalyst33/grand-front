<template>
  <div>
    <div>Single Deals</div>
    <code>{{ singleDeal }}</code>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { $axios } from "../../http.Service";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "ViewDealPageX",

  setup() {
    const route = useRoute(),
      singleDeal = ref({});

    const code = computed(() => route.params.dealId);

    function getOneDestinationX() {
      $axios
        .get(`client/deals/${code.value}`)
        .then((r) => {
          singleDeal.value = r;
          console.log(r);
        })
        .catch((e) => e);
    }

    getOneDestination();

    return { singleDeal };
  },
});
</script>

<style scoped></style>
