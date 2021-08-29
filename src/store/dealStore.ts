import { computed, reactive, readonly, ref } from "vue";
import { $axios } from "../http.Service";
import { useRoute } from "vue-router";
import { DealData } from "../types";

export const dealStore = reactive({
  allDeals: {} as {
    data: [];
    lastPage: number;
  },
  promotedDeals: {},
  isLoadingDeals: false,
});

export const singleDealStore = reactive({
  deal: {} as DealData,
  isLoadingDeal: false,
});

const SET_DEALS = (allDeals: any) => {
  dealStore.allDeals = allDeals.allDeals;
  dealStore.promotedDeals = allDeals.promotedDeals;
  dealStore.isLoadingDeals = true;
};

const SET_ONE_DEAL = (oneDeal: any) => {
  singleDealStore.deal = oneDeal;
  singleDealStore.isLoadingDeal = true;
};

export function getAllDeals(search?: string, sort?: any) {
  let params = {} as any;
  if (search) {
    params.search = search;
  }

  if (sort) {
    params.sort = sort.direction ? sort.field + ",asc" : sort.field;
  }
  return $axios
    .get("client/deals", {
      params,
    })
    .then((r) => {
      if (r.data.allDeals.data) {
        SET_DEALS(r.data);
      }
    })
    .catch((e) => e);
}

export function getOneDeal() {
  const route = useRoute();

  const code = computed(() => route.params.dealId);

  return $axios
    .get(`client/deals/${code.value}`)
    .then((r) => {
      if (r) {
        SET_ONE_DEAL(r);
      }
    })
    .catch((e) => e);
}
