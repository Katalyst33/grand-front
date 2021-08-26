<template>
  <div>
    <div class="pb-24 border border-1 border-yellow-500 rounded">
      <div>{{ singleDeal.expiresIn }}</div>
      <div>{{ singleDeal.country }}</div>
    </div>
    <div class="grid grid-cols-3 space-x-4 pt-10">
      <div class="col-span-2 border border-1 border-yellow-500 rounded">
        <div>{{ singleDeal.title }}</div>
        <div>{{ singleDeal.description }}</div>
      </div>
      <div class="border border-1 border-yellow-500 rounded">
        <div>
          {{ singleDeal.included }}
        </div>
        <div>{{ singleDeal.price }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { $axios } from "../http.Service";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "ViewDealPage",

  setup() {
    const route = useRoute(),
      singleDeal = ref<any>({});

    const code = computed(() => route.params.dealId);

    function getOneDeal() {
      $axios
        .get(`client/deals/${code.value}`)
        .then((r) => {
          singleDeal.value = r;
          console.log(r);
        })
        .catch((e) => e);
    }

    getOneDeal();

    return { singleDeal };
  },
});
</script>

<style scoped></style>
