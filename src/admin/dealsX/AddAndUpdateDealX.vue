<template>
  <div>Update the admin</div>

  {{ post }}

  <input v-model="post.title" type="text" />

  <div></div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { getOneDeal, singleDealStore } from "../../store/dealStore";
import { $axios } from "../../http.Service";
import { useRoute } from "vue-router";
import { DealData } from "../../types";

export default defineComponent({
  name: "AddAndUpdateDealX",

  setup() {
    const post = ref<DealData>({});

    const isLoaded = ref(false),
      route = useRoute(),
      deal = ref({});

    const code = computed(() => route.params.dealId);
    function getOneDeal() {
      $axios
        .get(`manager/deals/${code.value}`)
        .then((r) => (post.value = r))
        .catch((e) => e);
    }

    if (route.name === "UpdateDeal") {
      getOneDeal();
    }

    return { singleDealStore, post };
  },
});
</script>

<style scoped></style>
